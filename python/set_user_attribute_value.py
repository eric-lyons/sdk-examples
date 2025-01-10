"""Sets a user attribute value for a group or user in Looker.

Usage:
    python set_user_attribute_value.py <user|group> <id> <attribute_id> <value>

Examples:
    python set_user_attribute_value.py "user" "274" "26" "A great value"
    python set_user_attribute_value.py "group" "5" "12" "Another value"
"""

import argparse
import looker_sdk
from looker_sdk import models40 as models, error

def set_user_attribute_value(sdk, user_id, user_attribute_id, value):
    """Sets the user attribute value for a specific user.

    Args:
        sdk: The Looker SDK instance.
        user_id: The ID of the user.
        user_attribute_id: The ID of the user attribute.
        value: The value to set.
    """
    try:
        sdk.set_user_attribute_user_value(
            user_id=user_id,
            user_attribute_id=user_attribute_id,
            body=models.WriteUserAttributeWithValue(value=value)
        )
        print(f"Successfully set user attribute {user_attribute_id} for user {user_id} to '{value}'")
    except error.SDKError as e:
        print(f"Error setting user attribute for user {user_id}: {e}")
    except Exception as e:
        print(f"An unexpected error occurred: {e}")

def set_group_attribute_value(sdk, group_id, user_attribute_id, value):
    """Sets the user attribute value for a specific group.

    Args:
        sdk: The Looker SDK instance.
        group_id: The ID of the group.
        user_attribute_id: The ID of the user attribute.
        value: The value to set.
    """
    try:
        body = [
            models.UserAttributeGroupValue(
                group_id=group_id,
                user_attribute_id=user_attribute_id,
                value=value
            )
        ]
        sdk.set_user_attribute_group_values(
            user_attribute_id=user_attribute_id,
            body=body
        )
        print(f"Successfully set user attribute {user_attribute_id} for group {group_id} to '{value}'")
    except error.SDKError as e:
        print(f"Error setting user attribute for group {group_id}: {e}")
    except Exception as e:
        print(f"An unexpected error occurred: {e}")

def main():
    parser = argparse.ArgumentParser(description="Set user attribute value for a user or group in Looker.")
    parser.add_argument("type", choices=["user", "group"], help="Whether to set the attribute for a 'user' or 'group'")
    parser.add_argument("id", type=str, help="The ID of the user or group")
    parser.add_argument("attribute_id", type=str, help="The ID of the user attribute")
    parser.add_argument("value", help="The value to set for the user attribute")

    args = parser.parse_args()

    try:
      sdk = looker_sdk.init40("looker.ini")
    except error.SDKError as e:
      print(f"Error initializing Looker SDK: {e}")
      return

    if args.type == "user":
        set_user_attribute_value(sdk, args.id, args.attribute_id, args.value)
    else:  # args.type == "group"
        set_group_attribute_value(sdk, args.id, args.attribute_id, args.value)

if __name__ == "__main__":
    main()
