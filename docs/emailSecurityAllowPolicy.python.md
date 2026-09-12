# `emailSecurityAllowPolicy` Submodule <a name="`emailSecurityAllowPolicy` Submodule" id="@cdktn/provider-cloudflare.emailSecurityAllowPolicy"></a>

## Constructs <a name="Constructs" id="Constructs"></a>

### EmailSecurityAllowPolicy <a name="EmailSecurityAllowPolicy" id="@cdktn/provider-cloudflare.emailSecurityAllowPolicy.EmailSecurityAllowPolicy"></a>

Represents a {@link https://registry.terraform.io/providers/cloudflare/cloudflare/5.25.0/docs/resources/email_security_allow_policy cloudflare_email_security_allow_policy}.

#### Initializers <a name="Initializers" id="@cdktn/provider-cloudflare.emailSecurityAllowPolicy.EmailSecurityAllowPolicy.Initializer"></a>

```python
from cdktn_provider_cloudflare import email_security_allow_policy

emailSecurityAllowPolicy.EmailSecurityAllowPolicy(
  scope: Construct,
  id: str,
  connection: SSHProvisionerConnection | WinrmProvisionerConnection = None,
  count: typing.Union[int, float] | TerraformCount = None,
  depends_on: typing.List[ITerraformDependable] = None,
  for_each: ITerraformIterator = None,
  lifecycle: TerraformResourceLifecycle = None,
  provider: TerraformProvider = None,
  provisioners: typing.List[FileProvisioner | LocalExecProvisioner | RemoteExecProvisioner] = None,
  account_id: str,
  is_acceptable_sender: bool | IResolvable,
  is_exempt_recipient: bool | IResolvable,
  is_regex: bool | IResolvable,
  is_trusted_sender: bool | IResolvable,
  pattern: str,
  pattern_type: str,
  verify_sender: bool | IResolvable,
  comments: str = None,
  is_recipient: bool | IResolvable = None,
  is_sender: bool | IResolvable = None,
  is_spoof: bool | IResolvable = None
)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-cloudflare.emailSecurityAllowPolicy.EmailSecurityAllowPolicy.Initializer.parameter.scope">scope</a></code> | <code>constructs.Construct</code> | The scope in which to define this construct. |
| <code><a href="#@cdktn/provider-cloudflare.emailSecurityAllowPolicy.EmailSecurityAllowPolicy.Initializer.parameter.id">id</a></code> | <code>str</code> | The scoped construct ID. |
| <code><a href="#@cdktn/provider-cloudflare.emailSecurityAllowPolicy.EmailSecurityAllowPolicy.Initializer.parameter.connection">connection</a></code> | <code>cdktn.SSHProvisionerConnection \| cdktn.WinrmProvisionerConnection</code> | *No description.* |
| <code><a href="#@cdktn/provider-cloudflare.emailSecurityAllowPolicy.EmailSecurityAllowPolicy.Initializer.parameter.count">count</a></code> | <code>typing.Union[int, float] \| cdktn.TerraformCount</code> | *No description.* |
| <code><a href="#@cdktn/provider-cloudflare.emailSecurityAllowPolicy.EmailSecurityAllowPolicy.Initializer.parameter.dependsOn">depends_on</a></code> | <code>typing.List[cdktn.ITerraformDependable]</code> | *No description.* |
| <code><a href="#@cdktn/provider-cloudflare.emailSecurityAllowPolicy.EmailSecurityAllowPolicy.Initializer.parameter.forEach">for_each</a></code> | <code>cdktn.ITerraformIterator</code> | *No description.* |
| <code><a href="#@cdktn/provider-cloudflare.emailSecurityAllowPolicy.EmailSecurityAllowPolicy.Initializer.parameter.lifecycle">lifecycle</a></code> | <code>cdktn.TerraformResourceLifecycle</code> | *No description.* |
| <code><a href="#@cdktn/provider-cloudflare.emailSecurityAllowPolicy.EmailSecurityAllowPolicy.Initializer.parameter.provider">provider</a></code> | <code>cdktn.TerraformProvider</code> | *No description.* |
| <code><a href="#@cdktn/provider-cloudflare.emailSecurityAllowPolicy.EmailSecurityAllowPolicy.Initializer.parameter.provisioners">provisioners</a></code> | <code>typing.List[cdktn.FileProvisioner \| cdktn.LocalExecProvisioner \| cdktn.RemoteExecProvisioner]</code> | *No description.* |
| <code><a href="#@cdktn/provider-cloudflare.emailSecurityAllowPolicy.EmailSecurityAllowPolicy.Initializer.parameter.accountId">account_id</a></code> | <code>str</code> | Identifier. |
| <code><a href="#@cdktn/provider-cloudflare.emailSecurityAllowPolicy.EmailSecurityAllowPolicy.Initializer.parameter.isAcceptableSender">is_acceptable_sender</a></code> | <code>bool \| cdktn.IResolvable</code> | Exempts messages from this sender from Spam, Spoof and Bulk dispositions only; Malicious and Suspicious dispositions still apply. |
| <code><a href="#@cdktn/provider-cloudflare.emailSecurityAllowPolicy.EmailSecurityAllowPolicy.Initializer.parameter.isExemptRecipient">is_exempt_recipient</a></code> | <code>bool \| cdktn.IResolvable</code> | Bypasses all detections for messages to this recipient. |
| <code><a href="#@cdktn/provider-cloudflare.emailSecurityAllowPolicy.EmailSecurityAllowPolicy.Initializer.parameter.isRegex">is_regex</a></code> | <code>bool \| cdktn.IResolvable</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/cloudflare/cloudflare/5.25.0/docs/resources/email_security_allow_policy#is_regex EmailSecurityAllowPolicy#is_regex}. |
| <code><a href="#@cdktn/provider-cloudflare.emailSecurityAllowPolicy.EmailSecurityAllowPolicy.Initializer.parameter.isTrustedSender">is_trusted_sender</a></code> | <code>bool \| cdktn.IResolvable</code> | Bypasses all detections and link following for messages from this sender. |
| <code><a href="#@cdktn/provider-cloudflare.emailSecurityAllowPolicy.EmailSecurityAllowPolicy.Initializer.parameter.pattern">pattern</a></code> | <code>str</code> | The pattern value to match. |
| <code><a href="#@cdktn/provider-cloudflare.emailSecurityAllowPolicy.EmailSecurityAllowPolicy.Initializer.parameter.patternType">pattern_type</a></code> | <code>str</code> | Type of pattern matching. |
| <code><a href="#@cdktn/provider-cloudflare.emailSecurityAllowPolicy.EmailSecurityAllowPolicy.Initializer.parameter.verifySender">verify_sender</a></code> | <code>bool \| cdktn.IResolvable</code> | Enforce DMARC, SPF or DKIM authentication. When on, Email Security only honors policies that pass authentication. |
| <code><a href="#@cdktn/provider-cloudflare.emailSecurityAllowPolicy.EmailSecurityAllowPolicy.Initializer.parameter.comments">comments</a></code> | <code>str</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/cloudflare/cloudflare/5.25.0/docs/resources/email_security_allow_policy#comments EmailSecurityAllowPolicy#comments}. |
| <code><a href="#@cdktn/provider-cloudflare.emailSecurityAllowPolicy.EmailSecurityAllowPolicy.Initializer.parameter.isRecipient">is_recipient</a></code> | <code>bool \| cdktn.IResolvable</code> | Deprecated as of July 1, 2025. Use `is_exempt_recipient` instead. End of life: July 1, 2026. |
| <code><a href="#@cdktn/provider-cloudflare.emailSecurityAllowPolicy.EmailSecurityAllowPolicy.Initializer.parameter.isSender">is_sender</a></code> | <code>bool \| cdktn.IResolvable</code> | Deprecated as of July 1, 2025. Use `is_trusted_sender` instead. End of life: July 1, 2026. |
| <code><a href="#@cdktn/provider-cloudflare.emailSecurityAllowPolicy.EmailSecurityAllowPolicy.Initializer.parameter.isSpoof">is_spoof</a></code> | <code>bool \| cdktn.IResolvable</code> | Deprecated as of July 1, 2025. Use `is_acceptable_sender` instead. End of life: July 1, 2026. |

---

##### `scope`<sup>Required</sup> <a name="scope" id="@cdktn/provider-cloudflare.emailSecurityAllowPolicy.EmailSecurityAllowPolicy.Initializer.parameter.scope"></a>

- *Type:* constructs.Construct

The scope in which to define this construct.

---

##### `id`<sup>Required</sup> <a name="id" id="@cdktn/provider-cloudflare.emailSecurityAllowPolicy.EmailSecurityAllowPolicy.Initializer.parameter.id"></a>

- *Type:* str

The scoped construct ID.

Must be unique amongst siblings in the same scope

---

##### `connection`<sup>Optional</sup> <a name="connection" id="@cdktn/provider-cloudflare.emailSecurityAllowPolicy.EmailSecurityAllowPolicy.Initializer.parameter.connection"></a>

- *Type:* cdktn.SSHProvisionerConnection | cdktn.WinrmProvisionerConnection

---

##### `count`<sup>Optional</sup> <a name="count" id="@cdktn/provider-cloudflare.emailSecurityAllowPolicy.EmailSecurityAllowPolicy.Initializer.parameter.count"></a>

- *Type:* typing.Union[int, float] | cdktn.TerraformCount

---

##### `depends_on`<sup>Optional</sup> <a name="depends_on" id="@cdktn/provider-cloudflare.emailSecurityAllowPolicy.EmailSecurityAllowPolicy.Initializer.parameter.dependsOn"></a>

- *Type:* typing.List[cdktn.ITerraformDependable]

---

##### `for_each`<sup>Optional</sup> <a name="for_each" id="@cdktn/provider-cloudflare.emailSecurityAllowPolicy.EmailSecurityAllowPolicy.Initializer.parameter.forEach"></a>

- *Type:* cdktn.ITerraformIterator

---

##### `lifecycle`<sup>Optional</sup> <a name="lifecycle" id="@cdktn/provider-cloudflare.emailSecurityAllowPolicy.EmailSecurityAllowPolicy.Initializer.parameter.lifecycle"></a>

- *Type:* cdktn.TerraformResourceLifecycle

---

##### `provider`<sup>Optional</sup> <a name="provider" id="@cdktn/provider-cloudflare.emailSecurityAllowPolicy.EmailSecurityAllowPolicy.Initializer.parameter.provider"></a>

- *Type:* cdktn.TerraformProvider

---

##### `provisioners`<sup>Optional</sup> <a name="provisioners" id="@cdktn/provider-cloudflare.emailSecurityAllowPolicy.EmailSecurityAllowPolicy.Initializer.parameter.provisioners"></a>

- *Type:* typing.List[cdktn.FileProvisioner | cdktn.LocalExecProvisioner | cdktn.RemoteExecProvisioner]

---

##### `account_id`<sup>Required</sup> <a name="account_id" id="@cdktn/provider-cloudflare.emailSecurityAllowPolicy.EmailSecurityAllowPolicy.Initializer.parameter.accountId"></a>

- *Type:* str

Identifier.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/cloudflare/cloudflare/5.25.0/docs/resources/email_security_allow_policy#account_id EmailSecurityAllowPolicy#account_id}

---

##### `is_acceptable_sender`<sup>Required</sup> <a name="is_acceptable_sender" id="@cdktn/provider-cloudflare.emailSecurityAllowPolicy.EmailSecurityAllowPolicy.Initializer.parameter.isAcceptableSender"></a>

- *Type:* bool | cdktn.IResolvable

Exempts messages from this sender from Spam, Spoof and Bulk dispositions only; Malicious and Suspicious dispositions still apply.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/cloudflare/cloudflare/5.25.0/docs/resources/email_security_allow_policy#is_acceptable_sender EmailSecurityAllowPolicy#is_acceptable_sender}

---

##### `is_exempt_recipient`<sup>Required</sup> <a name="is_exempt_recipient" id="@cdktn/provider-cloudflare.emailSecurityAllowPolicy.EmailSecurityAllowPolicy.Initializer.parameter.isExemptRecipient"></a>

- *Type:* bool | cdktn.IResolvable

Bypasses all detections for messages to this recipient.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/cloudflare/cloudflare/5.25.0/docs/resources/email_security_allow_policy#is_exempt_recipient EmailSecurityAllowPolicy#is_exempt_recipient}

---

##### `is_regex`<sup>Required</sup> <a name="is_regex" id="@cdktn/provider-cloudflare.emailSecurityAllowPolicy.EmailSecurityAllowPolicy.Initializer.parameter.isRegex"></a>

- *Type:* bool | cdktn.IResolvable

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/cloudflare/cloudflare/5.25.0/docs/resources/email_security_allow_policy#is_regex EmailSecurityAllowPolicy#is_regex}.

---

##### `is_trusted_sender`<sup>Required</sup> <a name="is_trusted_sender" id="@cdktn/provider-cloudflare.emailSecurityAllowPolicy.EmailSecurityAllowPolicy.Initializer.parameter.isTrustedSender"></a>

- *Type:* bool | cdktn.IResolvable

Bypasses all detections and link following for messages from this sender.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/cloudflare/cloudflare/5.25.0/docs/resources/email_security_allow_policy#is_trusted_sender EmailSecurityAllowPolicy#is_trusted_sender}

---

##### `pattern`<sup>Required</sup> <a name="pattern" id="@cdktn/provider-cloudflare.emailSecurityAllowPolicy.EmailSecurityAllowPolicy.Initializer.parameter.pattern"></a>

- *Type:* str

The pattern value to match.

The format depends on `pattern_type`: a valid email address for EMAIL (e.g. `user@example.com`), a valid domain name for DOMAIN (e.g. `example.com`), or a plain IPv4 or IPv6 address or CIDR block for IP (e.g. `1.2.3.4`, `1.2.3.0/24`, `2606:4700:4700::1111`, or `2606:4700:4700::/48`); the API rejects private or unique-local, loopback, link-local, unspecified, and IPv4 broadcast addresses, including their IPv4-mapped IPv6 equivalents.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/cloudflare/cloudflare/5.25.0/docs/resources/email_security_allow_policy#pattern EmailSecurityAllowPolicy#pattern}

---

##### `pattern_type`<sup>Required</sup> <a name="pattern_type" id="@cdktn/provider-cloudflare.emailSecurityAllowPolicy.EmailSecurityAllowPolicy.Initializer.parameter.patternType"></a>

- *Type:* str

Type of pattern matching.

* EMAIL: matches a full email address (e.g. `user@example.com`)
* DOMAIN: matches a domain name (e.g. `example.com`)
* IP: matches a plain IPv4 or IPv6 address (e.g. `1.2.3.4` or `2606:4700:4700::1111`) or CIDR block (e.g. `1.2.3.0/24` or `2606:4700:4700::/48`). The API rejects private or unique-local, loopback, link-local, unspecified, and IPv4 broadcast addresses, including their IPv4-mapped IPv6 equivalents.
* UNKNOWN: deprecated; you cannot use this when creating or updating policies, but it may appear on existing entries.
  Available values: "EMAIL", "DOMAIN", "IP", "UNKNOWN".

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/cloudflare/cloudflare/5.25.0/docs/resources/email_security_allow_policy#pattern_type EmailSecurityAllowPolicy#pattern_type}

---

##### `verify_sender`<sup>Required</sup> <a name="verify_sender" id="@cdktn/provider-cloudflare.emailSecurityAllowPolicy.EmailSecurityAllowPolicy.Initializer.parameter.verifySender"></a>

- *Type:* bool | cdktn.IResolvable

Enforce DMARC, SPF or DKIM authentication. When on, Email Security only honors policies that pass authentication.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/cloudflare/cloudflare/5.25.0/docs/resources/email_security_allow_policy#verify_sender EmailSecurityAllowPolicy#verify_sender}

---

##### `comments`<sup>Optional</sup> <a name="comments" id="@cdktn/provider-cloudflare.emailSecurityAllowPolicy.EmailSecurityAllowPolicy.Initializer.parameter.comments"></a>

- *Type:* str

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/cloudflare/cloudflare/5.25.0/docs/resources/email_security_allow_policy#comments EmailSecurityAllowPolicy#comments}.

---

##### `is_recipient`<sup>Optional</sup> <a name="is_recipient" id="@cdktn/provider-cloudflare.emailSecurityAllowPolicy.EmailSecurityAllowPolicy.Initializer.parameter.isRecipient"></a>

- *Type:* bool | cdktn.IResolvable

Deprecated as of July 1, 2025. Use `is_exempt_recipient` instead. End of life: July 1, 2026.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/cloudflare/cloudflare/5.25.0/docs/resources/email_security_allow_policy#is_recipient EmailSecurityAllowPolicy#is_recipient}

---

##### `is_sender`<sup>Optional</sup> <a name="is_sender" id="@cdktn/provider-cloudflare.emailSecurityAllowPolicy.EmailSecurityAllowPolicy.Initializer.parameter.isSender"></a>

- *Type:* bool | cdktn.IResolvable

Deprecated as of July 1, 2025. Use `is_trusted_sender` instead. End of life: July 1, 2026.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/cloudflare/cloudflare/5.25.0/docs/resources/email_security_allow_policy#is_sender EmailSecurityAllowPolicy#is_sender}

---

##### `is_spoof`<sup>Optional</sup> <a name="is_spoof" id="@cdktn/provider-cloudflare.emailSecurityAllowPolicy.EmailSecurityAllowPolicy.Initializer.parameter.isSpoof"></a>

- *Type:* bool | cdktn.IResolvable

Deprecated as of July 1, 2025. Use `is_acceptable_sender` instead. End of life: July 1, 2026.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/cloudflare/cloudflare/5.25.0/docs/resources/email_security_allow_policy#is_spoof EmailSecurityAllowPolicy#is_spoof}

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-cloudflare.emailSecurityAllowPolicy.EmailSecurityAllowPolicy.toString">to_string</a></code> | Returns a string representation of this construct. |
| <code><a href="#@cdktn/provider-cloudflare.emailSecurityAllowPolicy.EmailSecurityAllowPolicy.with">with</a></code> | Applies one or more mixins to this construct. |
| <code><a href="#@cdktn/provider-cloudflare.emailSecurityAllowPolicy.EmailSecurityAllowPolicy.addOverride">add_override</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-cloudflare.emailSecurityAllowPolicy.EmailSecurityAllowPolicy.overrideLogicalId">override_logical_id</a></code> | Overrides the auto-generated logical ID with a specific ID. |
| <code><a href="#@cdktn/provider-cloudflare.emailSecurityAllowPolicy.EmailSecurityAllowPolicy.resetOverrideLogicalId">reset_override_logical_id</a></code> | Resets a previously passed logical Id to use the auto-generated logical id again. |
| <code><a href="#@cdktn/provider-cloudflare.emailSecurityAllowPolicy.EmailSecurityAllowPolicy.toHclTerraform">to_hcl_terraform</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-cloudflare.emailSecurityAllowPolicy.EmailSecurityAllowPolicy.toMetadata">to_metadata</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-cloudflare.emailSecurityAllowPolicy.EmailSecurityAllowPolicy.toTerraform">to_terraform</a></code> | Adds this resource to the terraform JSON output. |
| <code><a href="#@cdktn/provider-cloudflare.emailSecurityAllowPolicy.EmailSecurityAllowPolicy.addMoveTarget">add_move_target</a></code> | Adds a user defined moveTarget string to this resource to be later used in .moveTo(moveTarget) to resolve the location of the move. |
| <code><a href="#@cdktn/provider-cloudflare.emailSecurityAllowPolicy.EmailSecurityAllowPolicy.getAnyMapAttribute">get_any_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-cloudflare.emailSecurityAllowPolicy.EmailSecurityAllowPolicy.getBooleanAttribute">get_boolean_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-cloudflare.emailSecurityAllowPolicy.EmailSecurityAllowPolicy.getBooleanMapAttribute">get_boolean_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-cloudflare.emailSecurityAllowPolicy.EmailSecurityAllowPolicy.getListAttribute">get_list_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-cloudflare.emailSecurityAllowPolicy.EmailSecurityAllowPolicy.getNumberAttribute">get_number_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-cloudflare.emailSecurityAllowPolicy.EmailSecurityAllowPolicy.getNumberListAttribute">get_number_list_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-cloudflare.emailSecurityAllowPolicy.EmailSecurityAllowPolicy.getNumberMapAttribute">get_number_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-cloudflare.emailSecurityAllowPolicy.EmailSecurityAllowPolicy.getStringAttribute">get_string_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-cloudflare.emailSecurityAllowPolicy.EmailSecurityAllowPolicy.getStringMapAttribute">get_string_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-cloudflare.emailSecurityAllowPolicy.EmailSecurityAllowPolicy.hasResourceMove">has_resource_move</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-cloudflare.emailSecurityAllowPolicy.EmailSecurityAllowPolicy.importFrom">import_from</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-cloudflare.emailSecurityAllowPolicy.EmailSecurityAllowPolicy.interpolationForAttribute">interpolation_for_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-cloudflare.emailSecurityAllowPolicy.EmailSecurityAllowPolicy.moveFromId">move_from_id</a></code> | Move the resource corresponding to "id" to this resource. |
| <code><a href="#@cdktn/provider-cloudflare.emailSecurityAllowPolicy.EmailSecurityAllowPolicy.moveTo">move_to</a></code> | Moves this resource to the target resource given by moveTarget. |
| <code><a href="#@cdktn/provider-cloudflare.emailSecurityAllowPolicy.EmailSecurityAllowPolicy.moveToId">move_to_id</a></code> | Moves this resource to the resource corresponding to "id". |
| <code><a href="#@cdktn/provider-cloudflare.emailSecurityAllowPolicy.EmailSecurityAllowPolicy.resetComments">reset_comments</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-cloudflare.emailSecurityAllowPolicy.EmailSecurityAllowPolicy.resetIsRecipient">reset_is_recipient</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-cloudflare.emailSecurityAllowPolicy.EmailSecurityAllowPolicy.resetIsSender">reset_is_sender</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-cloudflare.emailSecurityAllowPolicy.EmailSecurityAllowPolicy.resetIsSpoof">reset_is_spoof</a></code> | *No description.* |

---

##### `to_string` <a name="to_string" id="@cdktn/provider-cloudflare.emailSecurityAllowPolicy.EmailSecurityAllowPolicy.toString"></a>

```python
def to_string() -> str
```

Returns a string representation of this construct.

##### `with` <a name="with" id="@cdktn/provider-cloudflare.emailSecurityAllowPolicy.EmailSecurityAllowPolicy.with"></a>

```python
def with(
  mixins: *IMixin
) -> IConstruct
```

Applies one or more mixins to this construct.

Mixins are applied in order. The list of constructs is captured at the
start of the call, so constructs added by a mixin will not be visited.
Use multiple `with()` calls if subsequent mixins should apply to added
constructs.

###### `mixins`<sup>Required</sup> <a name="mixins" id="@cdktn/provider-cloudflare.emailSecurityAllowPolicy.EmailSecurityAllowPolicy.with.parameter.mixins"></a>

- *Type:* *constructs.IMixin

The mixins to apply.

---

##### `add_override` <a name="add_override" id="@cdktn/provider-cloudflare.emailSecurityAllowPolicy.EmailSecurityAllowPolicy.addOverride"></a>

```python
def add_override(
  path: str,
  value: typing.Any
) -> None
```

###### `path`<sup>Required</sup> <a name="path" id="@cdktn/provider-cloudflare.emailSecurityAllowPolicy.EmailSecurityAllowPolicy.addOverride.parameter.path"></a>

- *Type:* str

---

###### `value`<sup>Required</sup> <a name="value" id="@cdktn/provider-cloudflare.emailSecurityAllowPolicy.EmailSecurityAllowPolicy.addOverride.parameter.value"></a>

- *Type:* typing.Any

---

##### `override_logical_id` <a name="override_logical_id" id="@cdktn/provider-cloudflare.emailSecurityAllowPolicy.EmailSecurityAllowPolicy.overrideLogicalId"></a>

```python
def override_logical_id(
  new_logical_id: str
) -> None
```

Overrides the auto-generated logical ID with a specific ID.

###### `new_logical_id`<sup>Required</sup> <a name="new_logical_id" id="@cdktn/provider-cloudflare.emailSecurityAllowPolicy.EmailSecurityAllowPolicy.overrideLogicalId.parameter.newLogicalId"></a>

- *Type:* str

The new logical ID to use for this stack element.

---

##### `reset_override_logical_id` <a name="reset_override_logical_id" id="@cdktn/provider-cloudflare.emailSecurityAllowPolicy.EmailSecurityAllowPolicy.resetOverrideLogicalId"></a>

```python
def reset_override_logical_id() -> None
```

Resets a previously passed logical Id to use the auto-generated logical id again.

##### `to_hcl_terraform` <a name="to_hcl_terraform" id="@cdktn/provider-cloudflare.emailSecurityAllowPolicy.EmailSecurityAllowPolicy.toHclTerraform"></a>

```python
def to_hcl_terraform() -> typing.Any
```

##### `to_metadata` <a name="to_metadata" id="@cdktn/provider-cloudflare.emailSecurityAllowPolicy.EmailSecurityAllowPolicy.toMetadata"></a>

```python
def to_metadata() -> typing.Any
```

##### `to_terraform` <a name="to_terraform" id="@cdktn/provider-cloudflare.emailSecurityAllowPolicy.EmailSecurityAllowPolicy.toTerraform"></a>

```python
def to_terraform() -> typing.Any
```

Adds this resource to the terraform JSON output.

##### `add_move_target` <a name="add_move_target" id="@cdktn/provider-cloudflare.emailSecurityAllowPolicy.EmailSecurityAllowPolicy.addMoveTarget"></a>

```python
def add_move_target(
  move_target: str
) -> None
```

Adds a user defined moveTarget string to this resource to be later used in .moveTo(moveTarget) to resolve the location of the move.

###### `move_target`<sup>Required</sup> <a name="move_target" id="@cdktn/provider-cloudflare.emailSecurityAllowPolicy.EmailSecurityAllowPolicy.addMoveTarget.parameter.moveTarget"></a>

- *Type:* str

The string move target that will correspond to this resource.

---

##### `get_any_map_attribute` <a name="get_any_map_attribute" id="@cdktn/provider-cloudflare.emailSecurityAllowPolicy.EmailSecurityAllowPolicy.getAnyMapAttribute"></a>

```python
def get_any_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[typing.Any]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-cloudflare.emailSecurityAllowPolicy.EmailSecurityAllowPolicy.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_boolean_attribute` <a name="get_boolean_attribute" id="@cdktn/provider-cloudflare.emailSecurityAllowPolicy.EmailSecurityAllowPolicy.getBooleanAttribute"></a>

```python
def get_boolean_attribute(
  terraform_attribute: str
) -> IResolvable
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-cloudflare.emailSecurityAllowPolicy.EmailSecurityAllowPolicy.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_boolean_map_attribute` <a name="get_boolean_map_attribute" id="@cdktn/provider-cloudflare.emailSecurityAllowPolicy.EmailSecurityAllowPolicy.getBooleanMapAttribute"></a>

```python
def get_boolean_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[bool]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-cloudflare.emailSecurityAllowPolicy.EmailSecurityAllowPolicy.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_list_attribute` <a name="get_list_attribute" id="@cdktn/provider-cloudflare.emailSecurityAllowPolicy.EmailSecurityAllowPolicy.getListAttribute"></a>

```python
def get_list_attribute(
  terraform_attribute: str
) -> typing.List[str]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-cloudflare.emailSecurityAllowPolicy.EmailSecurityAllowPolicy.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_attribute` <a name="get_number_attribute" id="@cdktn/provider-cloudflare.emailSecurityAllowPolicy.EmailSecurityAllowPolicy.getNumberAttribute"></a>

```python
def get_number_attribute(
  terraform_attribute: str
) -> typing.Union[int, float]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-cloudflare.emailSecurityAllowPolicy.EmailSecurityAllowPolicy.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_list_attribute` <a name="get_number_list_attribute" id="@cdktn/provider-cloudflare.emailSecurityAllowPolicy.EmailSecurityAllowPolicy.getNumberListAttribute"></a>

```python
def get_number_list_attribute(
  terraform_attribute: str
) -> typing.List[typing.Union[int, float]]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-cloudflare.emailSecurityAllowPolicy.EmailSecurityAllowPolicy.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_map_attribute` <a name="get_number_map_attribute" id="@cdktn/provider-cloudflare.emailSecurityAllowPolicy.EmailSecurityAllowPolicy.getNumberMapAttribute"></a>

```python
def get_number_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[typing.Union[int, float]]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-cloudflare.emailSecurityAllowPolicy.EmailSecurityAllowPolicy.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_string_attribute` <a name="get_string_attribute" id="@cdktn/provider-cloudflare.emailSecurityAllowPolicy.EmailSecurityAllowPolicy.getStringAttribute"></a>

```python
def get_string_attribute(
  terraform_attribute: str
) -> str
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-cloudflare.emailSecurityAllowPolicy.EmailSecurityAllowPolicy.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_string_map_attribute` <a name="get_string_map_attribute" id="@cdktn/provider-cloudflare.emailSecurityAllowPolicy.EmailSecurityAllowPolicy.getStringMapAttribute"></a>

```python
def get_string_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[str]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-cloudflare.emailSecurityAllowPolicy.EmailSecurityAllowPolicy.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `has_resource_move` <a name="has_resource_move" id="@cdktn/provider-cloudflare.emailSecurityAllowPolicy.EmailSecurityAllowPolicy.hasResourceMove"></a>

```python
def has_resource_move() -> TerraformResourceMoveByTarget | TerraformResourceMoveById
```

##### `import_from` <a name="import_from" id="@cdktn/provider-cloudflare.emailSecurityAllowPolicy.EmailSecurityAllowPolicy.importFrom"></a>

```python
def import_from(
  id: str,
  provider: TerraformProvider = None
) -> None
```

###### `id`<sup>Required</sup> <a name="id" id="@cdktn/provider-cloudflare.emailSecurityAllowPolicy.EmailSecurityAllowPolicy.importFrom.parameter.id"></a>

- *Type:* str

---

###### `provider`<sup>Optional</sup> <a name="provider" id="@cdktn/provider-cloudflare.emailSecurityAllowPolicy.EmailSecurityAllowPolicy.importFrom.parameter.provider"></a>

- *Type:* cdktn.TerraformProvider

---

##### `interpolation_for_attribute` <a name="interpolation_for_attribute" id="@cdktn/provider-cloudflare.emailSecurityAllowPolicy.EmailSecurityAllowPolicy.interpolationForAttribute"></a>

```python
def interpolation_for_attribute(
  terraform_attribute: str
) -> IResolvable
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-cloudflare.emailSecurityAllowPolicy.EmailSecurityAllowPolicy.interpolationForAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `move_from_id` <a name="move_from_id" id="@cdktn/provider-cloudflare.emailSecurityAllowPolicy.EmailSecurityAllowPolicy.moveFromId"></a>

```python
def move_from_id(
  id: str
) -> None
```

Move the resource corresponding to "id" to this resource.

Note that the resource being moved from must be marked as moved using its instance function.

###### `id`<sup>Required</sup> <a name="id" id="@cdktn/provider-cloudflare.emailSecurityAllowPolicy.EmailSecurityAllowPolicy.moveFromId.parameter.id"></a>

- *Type:* str

Full id of resource being moved from, e.g. "aws_s3_bucket.example".

---

##### `move_to` <a name="move_to" id="@cdktn/provider-cloudflare.emailSecurityAllowPolicy.EmailSecurityAllowPolicy.moveTo"></a>

```python
def move_to(
  move_target: str,
  index: str | typing.Union[int, float] = None
) -> None
```

Moves this resource to the target resource given by moveTarget.

###### `move_target`<sup>Required</sup> <a name="move_target" id="@cdktn/provider-cloudflare.emailSecurityAllowPolicy.EmailSecurityAllowPolicy.moveTo.parameter.moveTarget"></a>

- *Type:* str

The previously set user defined string set by .addMoveTarget() corresponding to the resource to move to.

---

###### `index`<sup>Optional</sup> <a name="index" id="@cdktn/provider-cloudflare.emailSecurityAllowPolicy.EmailSecurityAllowPolicy.moveTo.parameter.index"></a>

- *Type:* str | typing.Union[int, float]

Optional The index corresponding to the key the resource is to appear in the foreach of a resource to move to.

---

##### `move_to_id` <a name="move_to_id" id="@cdktn/provider-cloudflare.emailSecurityAllowPolicy.EmailSecurityAllowPolicy.moveToId"></a>

```python
def move_to_id(
  id: str
) -> None
```

Moves this resource to the resource corresponding to "id".

###### `id`<sup>Required</sup> <a name="id" id="@cdktn/provider-cloudflare.emailSecurityAllowPolicy.EmailSecurityAllowPolicy.moveToId.parameter.id"></a>

- *Type:* str

Full id of resource to move to, e.g. "aws_s3_bucket.example".

---

##### `reset_comments` <a name="reset_comments" id="@cdktn/provider-cloudflare.emailSecurityAllowPolicy.EmailSecurityAllowPolicy.resetComments"></a>

```python
def reset_comments() -> None
```

##### `reset_is_recipient` <a name="reset_is_recipient" id="@cdktn/provider-cloudflare.emailSecurityAllowPolicy.EmailSecurityAllowPolicy.resetIsRecipient"></a>

```python
def reset_is_recipient() -> None
```

##### `reset_is_sender` <a name="reset_is_sender" id="@cdktn/provider-cloudflare.emailSecurityAllowPolicy.EmailSecurityAllowPolicy.resetIsSender"></a>

```python
def reset_is_sender() -> None
```

##### `reset_is_spoof` <a name="reset_is_spoof" id="@cdktn/provider-cloudflare.emailSecurityAllowPolicy.EmailSecurityAllowPolicy.resetIsSpoof"></a>

```python
def reset_is_spoof() -> None
```

#### Static Functions <a name="Static Functions" id="Static Functions"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-cloudflare.emailSecurityAllowPolicy.EmailSecurityAllowPolicy.isConstruct">is_construct</a></code> | Checks if `x` is a construct. |
| <code><a href="#@cdktn/provider-cloudflare.emailSecurityAllowPolicy.EmailSecurityAllowPolicy.isTerraformElement">is_terraform_element</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-cloudflare.emailSecurityAllowPolicy.EmailSecurityAllowPolicy.isTerraformResource">is_terraform_resource</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-cloudflare.emailSecurityAllowPolicy.EmailSecurityAllowPolicy.generateConfigForImport">generate_config_for_import</a></code> | Generates CDKTN code for importing a EmailSecurityAllowPolicy resource upon running "cdktn plan <stack-name>". |

---

##### `is_construct` <a name="is_construct" id="@cdktn/provider-cloudflare.emailSecurityAllowPolicy.EmailSecurityAllowPolicy.isConstruct"></a>

```python
from cdktn_provider_cloudflare import email_security_allow_policy

emailSecurityAllowPolicy.EmailSecurityAllowPolicy.is_construct(
  x: typing.Any
)
```

Checks if `x` is a construct.

Use this method instead of `instanceof` to properly detect `Construct`
instances, even when the construct library is symlinked.

Explanation: in JavaScript, multiple copies of the `constructs` library on
disk are seen as independent, completely different libraries. As a
consequence, the class `Construct` in each copy of the `constructs` library
is seen as a different class, and an instance of one class will not test as
`instanceof` the other class. `npm install` will not create installations
like this, but users may manually symlink construct libraries together or
use a monorepo tool: in those cases, multiple copies of the `constructs`
library can be accidentally installed, and `instanceof` will behave
unpredictably. It is safest to avoid using `instanceof`, and using
this type-testing method instead.

###### `x`<sup>Required</sup> <a name="x" id="@cdktn/provider-cloudflare.emailSecurityAllowPolicy.EmailSecurityAllowPolicy.isConstruct.parameter.x"></a>

- *Type:* typing.Any

Any object.

---

##### `is_terraform_element` <a name="is_terraform_element" id="@cdktn/provider-cloudflare.emailSecurityAllowPolicy.EmailSecurityAllowPolicy.isTerraformElement"></a>

```python
from cdktn_provider_cloudflare import email_security_allow_policy

emailSecurityAllowPolicy.EmailSecurityAllowPolicy.is_terraform_element(
  x: typing.Any
)
```

###### `x`<sup>Required</sup> <a name="x" id="@cdktn/provider-cloudflare.emailSecurityAllowPolicy.EmailSecurityAllowPolicy.isTerraformElement.parameter.x"></a>

- *Type:* typing.Any

---

##### `is_terraform_resource` <a name="is_terraform_resource" id="@cdktn/provider-cloudflare.emailSecurityAllowPolicy.EmailSecurityAllowPolicy.isTerraformResource"></a>

```python
from cdktn_provider_cloudflare import email_security_allow_policy

emailSecurityAllowPolicy.EmailSecurityAllowPolicy.is_terraform_resource(
  x: typing.Any
)
```

###### `x`<sup>Required</sup> <a name="x" id="@cdktn/provider-cloudflare.emailSecurityAllowPolicy.EmailSecurityAllowPolicy.isTerraformResource.parameter.x"></a>

- *Type:* typing.Any

---

##### `generate_config_for_import` <a name="generate_config_for_import" id="@cdktn/provider-cloudflare.emailSecurityAllowPolicy.EmailSecurityAllowPolicy.generateConfigForImport"></a>

```python
from cdktn_provider_cloudflare import email_security_allow_policy

emailSecurityAllowPolicy.EmailSecurityAllowPolicy.generate_config_for_import(
  scope: Construct,
  import_to_id: str,
  import_from_id: str,
  provider: TerraformProvider = None
)
```

Generates CDKTN code for importing a EmailSecurityAllowPolicy resource upon running "cdktn plan <stack-name>".

###### `scope`<sup>Required</sup> <a name="scope" id="@cdktn/provider-cloudflare.emailSecurityAllowPolicy.EmailSecurityAllowPolicy.generateConfigForImport.parameter.scope"></a>

- *Type:* constructs.Construct

The scope in which to define this construct.

---

###### `import_to_id`<sup>Required</sup> <a name="import_to_id" id="@cdktn/provider-cloudflare.emailSecurityAllowPolicy.EmailSecurityAllowPolicy.generateConfigForImport.parameter.importToId"></a>

- *Type:* str

The construct id used in the generated config for the EmailSecurityAllowPolicy to import.

---

###### `import_from_id`<sup>Required</sup> <a name="import_from_id" id="@cdktn/provider-cloudflare.emailSecurityAllowPolicy.EmailSecurityAllowPolicy.generateConfigForImport.parameter.importFromId"></a>

- *Type:* str

The id of the existing EmailSecurityAllowPolicy that should be imported.

Refer to the {@link https://registry.terraform.io/providers/cloudflare/cloudflare/5.25.0/docs/resources/email_security_allow_policy#import import section} in the documentation of this resource for the id to use

---

###### `provider`<sup>Optional</sup> <a name="provider" id="@cdktn/provider-cloudflare.emailSecurityAllowPolicy.EmailSecurityAllowPolicy.generateConfigForImport.parameter.provider"></a>

- *Type:* cdktn.TerraformProvider

? Optional instance of the provider where the EmailSecurityAllowPolicy to import is found.

---

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-cloudflare.emailSecurityAllowPolicy.EmailSecurityAllowPolicy.property.node">node</a></code> | <code>constructs.Node</code> | The tree node. |
| <code><a href="#@cdktn/provider-cloudflare.emailSecurityAllowPolicy.EmailSecurityAllowPolicy.property.cdktfStack">cdktf_stack</a></code> | <code>cdktn.TerraformStack</code> | *No description.* |
| <code><a href="#@cdktn/provider-cloudflare.emailSecurityAllowPolicy.EmailSecurityAllowPolicy.property.fqn">fqn</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktn/provider-cloudflare.emailSecurityAllowPolicy.EmailSecurityAllowPolicy.property.friendlyUniqueId">friendly_unique_id</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktn/provider-cloudflare.emailSecurityAllowPolicy.EmailSecurityAllowPolicy.property.terraformMetaArguments">terraform_meta_arguments</a></code> | <code>typing.Mapping[typing.Any]</code> | *No description.* |
| <code><a href="#@cdktn/provider-cloudflare.emailSecurityAllowPolicy.EmailSecurityAllowPolicy.property.terraformResourceType">terraform_resource_type</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktn/provider-cloudflare.emailSecurityAllowPolicy.EmailSecurityAllowPolicy.property.terraformGeneratorMetadata">terraform_generator_metadata</a></code> | <code>cdktn.TerraformProviderGeneratorMetadata</code> | *No description.* |
| <code><a href="#@cdktn/provider-cloudflare.emailSecurityAllowPolicy.EmailSecurityAllowPolicy.property.connection">connection</a></code> | <code>cdktn.SSHProvisionerConnection \| cdktn.WinrmProvisionerConnection</code> | *No description.* |
| <code><a href="#@cdktn/provider-cloudflare.emailSecurityAllowPolicy.EmailSecurityAllowPolicy.property.count">count</a></code> | <code>typing.Union[int, float] \| cdktn.TerraformCount</code> | *No description.* |
| <code><a href="#@cdktn/provider-cloudflare.emailSecurityAllowPolicy.EmailSecurityAllowPolicy.property.dependsOn">depends_on</a></code> | <code>typing.List[str]</code> | *No description.* |
| <code><a href="#@cdktn/provider-cloudflare.emailSecurityAllowPolicy.EmailSecurityAllowPolicy.property.forEach">for_each</a></code> | <code>cdktn.ITerraformIterator</code> | *No description.* |
| <code><a href="#@cdktn/provider-cloudflare.emailSecurityAllowPolicy.EmailSecurityAllowPolicy.property.lifecycle">lifecycle</a></code> | <code>cdktn.TerraformResourceLifecycle</code> | *No description.* |
| <code><a href="#@cdktn/provider-cloudflare.emailSecurityAllowPolicy.EmailSecurityAllowPolicy.property.provider">provider</a></code> | <code>cdktn.TerraformProvider</code> | *No description.* |
| <code><a href="#@cdktn/provider-cloudflare.emailSecurityAllowPolicy.EmailSecurityAllowPolicy.property.provisioners">provisioners</a></code> | <code>typing.List[cdktn.FileProvisioner \| cdktn.LocalExecProvisioner \| cdktn.RemoteExecProvisioner]</code> | *No description.* |
| <code><a href="#@cdktn/provider-cloudflare.emailSecurityAllowPolicy.EmailSecurityAllowPolicy.property.createdAt">created_at</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktn/provider-cloudflare.emailSecurityAllowPolicy.EmailSecurityAllowPolicy.property.id">id</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktn/provider-cloudflare.emailSecurityAllowPolicy.EmailSecurityAllowPolicy.property.lastModified">last_modified</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktn/provider-cloudflare.emailSecurityAllowPolicy.EmailSecurityAllowPolicy.property.modifiedAt">modified_at</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktn/provider-cloudflare.emailSecurityAllowPolicy.EmailSecurityAllowPolicy.property.accountIdInput">account_id_input</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktn/provider-cloudflare.emailSecurityAllowPolicy.EmailSecurityAllowPolicy.property.commentsInput">comments_input</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktn/provider-cloudflare.emailSecurityAllowPolicy.EmailSecurityAllowPolicy.property.isAcceptableSenderInput">is_acceptable_sender_input</a></code> | <code>bool \| cdktn.IResolvable</code> | *No description.* |
| <code><a href="#@cdktn/provider-cloudflare.emailSecurityAllowPolicy.EmailSecurityAllowPolicy.property.isExemptRecipientInput">is_exempt_recipient_input</a></code> | <code>bool \| cdktn.IResolvable</code> | *No description.* |
| <code><a href="#@cdktn/provider-cloudflare.emailSecurityAllowPolicy.EmailSecurityAllowPolicy.property.isRecipientInput">is_recipient_input</a></code> | <code>bool \| cdktn.IResolvable</code> | *No description.* |
| <code><a href="#@cdktn/provider-cloudflare.emailSecurityAllowPolicy.EmailSecurityAllowPolicy.property.isRegexInput">is_regex_input</a></code> | <code>bool \| cdktn.IResolvable</code> | *No description.* |
| <code><a href="#@cdktn/provider-cloudflare.emailSecurityAllowPolicy.EmailSecurityAllowPolicy.property.isSenderInput">is_sender_input</a></code> | <code>bool \| cdktn.IResolvable</code> | *No description.* |
| <code><a href="#@cdktn/provider-cloudflare.emailSecurityAllowPolicy.EmailSecurityAllowPolicy.property.isSpoofInput">is_spoof_input</a></code> | <code>bool \| cdktn.IResolvable</code> | *No description.* |
| <code><a href="#@cdktn/provider-cloudflare.emailSecurityAllowPolicy.EmailSecurityAllowPolicy.property.isTrustedSenderInput">is_trusted_sender_input</a></code> | <code>bool \| cdktn.IResolvable</code> | *No description.* |
| <code><a href="#@cdktn/provider-cloudflare.emailSecurityAllowPolicy.EmailSecurityAllowPolicy.property.patternInput">pattern_input</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktn/provider-cloudflare.emailSecurityAllowPolicy.EmailSecurityAllowPolicy.property.patternTypeInput">pattern_type_input</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktn/provider-cloudflare.emailSecurityAllowPolicy.EmailSecurityAllowPolicy.property.verifySenderInput">verify_sender_input</a></code> | <code>bool \| cdktn.IResolvable</code> | *No description.* |
| <code><a href="#@cdktn/provider-cloudflare.emailSecurityAllowPolicy.EmailSecurityAllowPolicy.property.accountId">account_id</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktn/provider-cloudflare.emailSecurityAllowPolicy.EmailSecurityAllowPolicy.property.comments">comments</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktn/provider-cloudflare.emailSecurityAllowPolicy.EmailSecurityAllowPolicy.property.isAcceptableSender">is_acceptable_sender</a></code> | <code>bool \| cdktn.IResolvable</code> | *No description.* |
| <code><a href="#@cdktn/provider-cloudflare.emailSecurityAllowPolicy.EmailSecurityAllowPolicy.property.isExemptRecipient">is_exempt_recipient</a></code> | <code>bool \| cdktn.IResolvable</code> | *No description.* |
| <code><a href="#@cdktn/provider-cloudflare.emailSecurityAllowPolicy.EmailSecurityAllowPolicy.property.isRecipient">is_recipient</a></code> | <code>bool \| cdktn.IResolvable</code> | *No description.* |
| <code><a href="#@cdktn/provider-cloudflare.emailSecurityAllowPolicy.EmailSecurityAllowPolicy.property.isRegex">is_regex</a></code> | <code>bool \| cdktn.IResolvable</code> | *No description.* |
| <code><a href="#@cdktn/provider-cloudflare.emailSecurityAllowPolicy.EmailSecurityAllowPolicy.property.isSender">is_sender</a></code> | <code>bool \| cdktn.IResolvable</code> | *No description.* |
| <code><a href="#@cdktn/provider-cloudflare.emailSecurityAllowPolicy.EmailSecurityAllowPolicy.property.isSpoof">is_spoof</a></code> | <code>bool \| cdktn.IResolvable</code> | *No description.* |
| <code><a href="#@cdktn/provider-cloudflare.emailSecurityAllowPolicy.EmailSecurityAllowPolicy.property.isTrustedSender">is_trusted_sender</a></code> | <code>bool \| cdktn.IResolvable</code> | *No description.* |
| <code><a href="#@cdktn/provider-cloudflare.emailSecurityAllowPolicy.EmailSecurityAllowPolicy.property.pattern">pattern</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktn/provider-cloudflare.emailSecurityAllowPolicy.EmailSecurityAllowPolicy.property.patternType">pattern_type</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktn/provider-cloudflare.emailSecurityAllowPolicy.EmailSecurityAllowPolicy.property.verifySender">verify_sender</a></code> | <code>bool \| cdktn.IResolvable</code> | *No description.* |

---

##### `node`<sup>Required</sup> <a name="node" id="@cdktn/provider-cloudflare.emailSecurityAllowPolicy.EmailSecurityAllowPolicy.property.node"></a>

```python
node: Node
```

- *Type:* constructs.Node

The tree node.

---

##### `cdktf_stack`<sup>Required</sup> <a name="cdktf_stack" id="@cdktn/provider-cloudflare.emailSecurityAllowPolicy.EmailSecurityAllowPolicy.property.cdktfStack"></a>

```python
cdktf_stack: TerraformStack
```

- *Type:* cdktn.TerraformStack

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktn/provider-cloudflare.emailSecurityAllowPolicy.EmailSecurityAllowPolicy.property.fqn"></a>

```python
fqn: str
```

- *Type:* str

---

##### `friendly_unique_id`<sup>Required</sup> <a name="friendly_unique_id" id="@cdktn/provider-cloudflare.emailSecurityAllowPolicy.EmailSecurityAllowPolicy.property.friendlyUniqueId"></a>

```python
friendly_unique_id: str
```

- *Type:* str

---

##### `terraform_meta_arguments`<sup>Required</sup> <a name="terraform_meta_arguments" id="@cdktn/provider-cloudflare.emailSecurityAllowPolicy.EmailSecurityAllowPolicy.property.terraformMetaArguments"></a>

```python
terraform_meta_arguments: typing.Mapping[typing.Any]
```

- *Type:* typing.Mapping[typing.Any]

---

##### `terraform_resource_type`<sup>Required</sup> <a name="terraform_resource_type" id="@cdktn/provider-cloudflare.emailSecurityAllowPolicy.EmailSecurityAllowPolicy.property.terraformResourceType"></a>

```python
terraform_resource_type: str
```

- *Type:* str

---

##### `terraform_generator_metadata`<sup>Optional</sup> <a name="terraform_generator_metadata" id="@cdktn/provider-cloudflare.emailSecurityAllowPolicy.EmailSecurityAllowPolicy.property.terraformGeneratorMetadata"></a>

```python
terraform_generator_metadata: TerraformProviderGeneratorMetadata
```

- *Type:* cdktn.TerraformProviderGeneratorMetadata

---

##### `connection`<sup>Optional</sup> <a name="connection" id="@cdktn/provider-cloudflare.emailSecurityAllowPolicy.EmailSecurityAllowPolicy.property.connection"></a>

```python
connection: SSHProvisionerConnection | WinrmProvisionerConnection
```

- *Type:* cdktn.SSHProvisionerConnection | cdktn.WinrmProvisionerConnection

---

##### `count`<sup>Optional</sup> <a name="count" id="@cdktn/provider-cloudflare.emailSecurityAllowPolicy.EmailSecurityAllowPolicy.property.count"></a>

```python
count: typing.Union[int, float] | TerraformCount
```

- *Type:* typing.Union[int, float] | cdktn.TerraformCount

---

##### `depends_on`<sup>Optional</sup> <a name="depends_on" id="@cdktn/provider-cloudflare.emailSecurityAllowPolicy.EmailSecurityAllowPolicy.property.dependsOn"></a>

```python
depends_on: typing.List[str]
```

- *Type:* typing.List[str]

---

##### `for_each`<sup>Optional</sup> <a name="for_each" id="@cdktn/provider-cloudflare.emailSecurityAllowPolicy.EmailSecurityAllowPolicy.property.forEach"></a>

```python
for_each: ITerraformIterator
```

- *Type:* cdktn.ITerraformIterator

---

##### `lifecycle`<sup>Optional</sup> <a name="lifecycle" id="@cdktn/provider-cloudflare.emailSecurityAllowPolicy.EmailSecurityAllowPolicy.property.lifecycle"></a>

```python
lifecycle: TerraformResourceLifecycle
```

- *Type:* cdktn.TerraformResourceLifecycle

---

##### `provider`<sup>Optional</sup> <a name="provider" id="@cdktn/provider-cloudflare.emailSecurityAllowPolicy.EmailSecurityAllowPolicy.property.provider"></a>

```python
provider: TerraformProvider
```

- *Type:* cdktn.TerraformProvider

---

##### `provisioners`<sup>Optional</sup> <a name="provisioners" id="@cdktn/provider-cloudflare.emailSecurityAllowPolicy.EmailSecurityAllowPolicy.property.provisioners"></a>

```python
provisioners: typing.List[FileProvisioner | LocalExecProvisioner | RemoteExecProvisioner]
```

- *Type:* typing.List[cdktn.FileProvisioner | cdktn.LocalExecProvisioner | cdktn.RemoteExecProvisioner]

---

##### `created_at`<sup>Required</sup> <a name="created_at" id="@cdktn/provider-cloudflare.emailSecurityAllowPolicy.EmailSecurityAllowPolicy.property.createdAt"></a>

```python
created_at: str
```

- *Type:* str

---

##### `id`<sup>Required</sup> <a name="id" id="@cdktn/provider-cloudflare.emailSecurityAllowPolicy.EmailSecurityAllowPolicy.property.id"></a>

```python
id: str
```

- *Type:* str

---

##### `last_modified`<sup>Required</sup> <a name="last_modified" id="@cdktn/provider-cloudflare.emailSecurityAllowPolicy.EmailSecurityAllowPolicy.property.lastModified"></a>

```python
last_modified: str
```

- *Type:* str

---

##### `modified_at`<sup>Required</sup> <a name="modified_at" id="@cdktn/provider-cloudflare.emailSecurityAllowPolicy.EmailSecurityAllowPolicy.property.modifiedAt"></a>

```python
modified_at: str
```

- *Type:* str

---

##### `account_id_input`<sup>Optional</sup> <a name="account_id_input" id="@cdktn/provider-cloudflare.emailSecurityAllowPolicy.EmailSecurityAllowPolicy.property.accountIdInput"></a>

```python
account_id_input: str
```

- *Type:* str

---

##### `comments_input`<sup>Optional</sup> <a name="comments_input" id="@cdktn/provider-cloudflare.emailSecurityAllowPolicy.EmailSecurityAllowPolicy.property.commentsInput"></a>

```python
comments_input: str
```

- *Type:* str

---

##### `is_acceptable_sender_input`<sup>Optional</sup> <a name="is_acceptable_sender_input" id="@cdktn/provider-cloudflare.emailSecurityAllowPolicy.EmailSecurityAllowPolicy.property.isAcceptableSenderInput"></a>

```python
is_acceptable_sender_input: bool | IResolvable
```

- *Type:* bool | cdktn.IResolvable

---

##### `is_exempt_recipient_input`<sup>Optional</sup> <a name="is_exempt_recipient_input" id="@cdktn/provider-cloudflare.emailSecurityAllowPolicy.EmailSecurityAllowPolicy.property.isExemptRecipientInput"></a>

```python
is_exempt_recipient_input: bool | IResolvable
```

- *Type:* bool | cdktn.IResolvable

---

##### `is_recipient_input`<sup>Optional</sup> <a name="is_recipient_input" id="@cdktn/provider-cloudflare.emailSecurityAllowPolicy.EmailSecurityAllowPolicy.property.isRecipientInput"></a>

```python
is_recipient_input: bool | IResolvable
```

- *Type:* bool | cdktn.IResolvable

---

##### `is_regex_input`<sup>Optional</sup> <a name="is_regex_input" id="@cdktn/provider-cloudflare.emailSecurityAllowPolicy.EmailSecurityAllowPolicy.property.isRegexInput"></a>

```python
is_regex_input: bool | IResolvable
```

- *Type:* bool | cdktn.IResolvable

---

##### `is_sender_input`<sup>Optional</sup> <a name="is_sender_input" id="@cdktn/provider-cloudflare.emailSecurityAllowPolicy.EmailSecurityAllowPolicy.property.isSenderInput"></a>

```python
is_sender_input: bool | IResolvable
```

- *Type:* bool | cdktn.IResolvable

---

##### `is_spoof_input`<sup>Optional</sup> <a name="is_spoof_input" id="@cdktn/provider-cloudflare.emailSecurityAllowPolicy.EmailSecurityAllowPolicy.property.isSpoofInput"></a>

```python
is_spoof_input: bool | IResolvable
```

- *Type:* bool | cdktn.IResolvable

---

##### `is_trusted_sender_input`<sup>Optional</sup> <a name="is_trusted_sender_input" id="@cdktn/provider-cloudflare.emailSecurityAllowPolicy.EmailSecurityAllowPolicy.property.isTrustedSenderInput"></a>

```python
is_trusted_sender_input: bool | IResolvable
```

- *Type:* bool | cdktn.IResolvable

---

##### `pattern_input`<sup>Optional</sup> <a name="pattern_input" id="@cdktn/provider-cloudflare.emailSecurityAllowPolicy.EmailSecurityAllowPolicy.property.patternInput"></a>

```python
pattern_input: str
```

- *Type:* str

---

##### `pattern_type_input`<sup>Optional</sup> <a name="pattern_type_input" id="@cdktn/provider-cloudflare.emailSecurityAllowPolicy.EmailSecurityAllowPolicy.property.patternTypeInput"></a>

```python
pattern_type_input: str
```

- *Type:* str

---

##### `verify_sender_input`<sup>Optional</sup> <a name="verify_sender_input" id="@cdktn/provider-cloudflare.emailSecurityAllowPolicy.EmailSecurityAllowPolicy.property.verifySenderInput"></a>

```python
verify_sender_input: bool | IResolvable
```

- *Type:* bool | cdktn.IResolvable

---

##### `account_id`<sup>Required</sup> <a name="account_id" id="@cdktn/provider-cloudflare.emailSecurityAllowPolicy.EmailSecurityAllowPolicy.property.accountId"></a>

```python
account_id: str
```

- *Type:* str

---

##### `comments`<sup>Required</sup> <a name="comments" id="@cdktn/provider-cloudflare.emailSecurityAllowPolicy.EmailSecurityAllowPolicy.property.comments"></a>

```python
comments: str
```

- *Type:* str

---

##### `is_acceptable_sender`<sup>Required</sup> <a name="is_acceptable_sender" id="@cdktn/provider-cloudflare.emailSecurityAllowPolicy.EmailSecurityAllowPolicy.property.isAcceptableSender"></a>

```python
is_acceptable_sender: bool | IResolvable
```

- *Type:* bool | cdktn.IResolvable

---

##### `is_exempt_recipient`<sup>Required</sup> <a name="is_exempt_recipient" id="@cdktn/provider-cloudflare.emailSecurityAllowPolicy.EmailSecurityAllowPolicy.property.isExemptRecipient"></a>

```python
is_exempt_recipient: bool | IResolvable
```

- *Type:* bool | cdktn.IResolvable

---

##### `is_recipient`<sup>Required</sup> <a name="is_recipient" id="@cdktn/provider-cloudflare.emailSecurityAllowPolicy.EmailSecurityAllowPolicy.property.isRecipient"></a>

```python
is_recipient: bool | IResolvable
```

- *Type:* bool | cdktn.IResolvable

---

##### `is_regex`<sup>Required</sup> <a name="is_regex" id="@cdktn/provider-cloudflare.emailSecurityAllowPolicy.EmailSecurityAllowPolicy.property.isRegex"></a>

```python
is_regex: bool | IResolvable
```

- *Type:* bool | cdktn.IResolvable

---

##### `is_sender`<sup>Required</sup> <a name="is_sender" id="@cdktn/provider-cloudflare.emailSecurityAllowPolicy.EmailSecurityAllowPolicy.property.isSender"></a>

```python
is_sender: bool | IResolvable
```

- *Type:* bool | cdktn.IResolvable

---

##### `is_spoof`<sup>Required</sup> <a name="is_spoof" id="@cdktn/provider-cloudflare.emailSecurityAllowPolicy.EmailSecurityAllowPolicy.property.isSpoof"></a>

```python
is_spoof: bool | IResolvable
```

- *Type:* bool | cdktn.IResolvable

---

##### `is_trusted_sender`<sup>Required</sup> <a name="is_trusted_sender" id="@cdktn/provider-cloudflare.emailSecurityAllowPolicy.EmailSecurityAllowPolicy.property.isTrustedSender"></a>

```python
is_trusted_sender: bool | IResolvable
```

- *Type:* bool | cdktn.IResolvable

---

##### `pattern`<sup>Required</sup> <a name="pattern" id="@cdktn/provider-cloudflare.emailSecurityAllowPolicy.EmailSecurityAllowPolicy.property.pattern"></a>

```python
pattern: str
```

- *Type:* str

---

##### `pattern_type`<sup>Required</sup> <a name="pattern_type" id="@cdktn/provider-cloudflare.emailSecurityAllowPolicy.EmailSecurityAllowPolicy.property.patternType"></a>

```python
pattern_type: str
```

- *Type:* str

---

##### `verify_sender`<sup>Required</sup> <a name="verify_sender" id="@cdktn/provider-cloudflare.emailSecurityAllowPolicy.EmailSecurityAllowPolicy.property.verifySender"></a>

```python
verify_sender: bool | IResolvable
```

- *Type:* bool | cdktn.IResolvable

---

#### Constants <a name="Constants" id="Constants"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-cloudflare.emailSecurityAllowPolicy.EmailSecurityAllowPolicy.property.tfResourceType">tfResourceType</a></code> | <code>str</code> | *No description.* |

---

##### `tfResourceType`<sup>Required</sup> <a name="tfResourceType" id="@cdktn/provider-cloudflare.emailSecurityAllowPolicy.EmailSecurityAllowPolicy.property.tfResourceType"></a>

```python
tfResourceType: str
```

- *Type:* str

---

## Structs <a name="Structs" id="Structs"></a>

### EmailSecurityAllowPolicyConfig <a name="EmailSecurityAllowPolicyConfig" id="@cdktn/provider-cloudflare.emailSecurityAllowPolicy.EmailSecurityAllowPolicyConfig"></a>

#### Initializer <a name="Initializer" id="@cdktn/provider-cloudflare.emailSecurityAllowPolicy.EmailSecurityAllowPolicyConfig.Initializer"></a>

```python
from cdktn_provider_cloudflare import email_security_allow_policy

emailSecurityAllowPolicy.EmailSecurityAllowPolicyConfig(
  connection: SSHProvisionerConnection | WinrmProvisionerConnection = None,
  count: typing.Union[int, float] | TerraformCount = None,
  depends_on: typing.List[ITerraformDependable] = None,
  for_each: ITerraformIterator = None,
  lifecycle: TerraformResourceLifecycle = None,
  provider: TerraformProvider = None,
  provisioners: typing.List[FileProvisioner | LocalExecProvisioner | RemoteExecProvisioner] = None,
  account_id: str,
  is_acceptable_sender: bool | IResolvable,
  is_exempt_recipient: bool | IResolvable,
  is_regex: bool | IResolvable,
  is_trusted_sender: bool | IResolvable,
  pattern: str,
  pattern_type: str,
  verify_sender: bool | IResolvable,
  comments: str = None,
  is_recipient: bool | IResolvable = None,
  is_sender: bool | IResolvable = None,
  is_spoof: bool | IResolvable = None
)
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-cloudflare.emailSecurityAllowPolicy.EmailSecurityAllowPolicyConfig.property.connection">connection</a></code> | <code>cdktn.SSHProvisionerConnection \| cdktn.WinrmProvisionerConnection</code> | *No description.* |
| <code><a href="#@cdktn/provider-cloudflare.emailSecurityAllowPolicy.EmailSecurityAllowPolicyConfig.property.count">count</a></code> | <code>typing.Union[int, float] \| cdktn.TerraformCount</code> | *No description.* |
| <code><a href="#@cdktn/provider-cloudflare.emailSecurityAllowPolicy.EmailSecurityAllowPolicyConfig.property.dependsOn">depends_on</a></code> | <code>typing.List[cdktn.ITerraformDependable]</code> | *No description.* |
| <code><a href="#@cdktn/provider-cloudflare.emailSecurityAllowPolicy.EmailSecurityAllowPolicyConfig.property.forEach">for_each</a></code> | <code>cdktn.ITerraformIterator</code> | *No description.* |
| <code><a href="#@cdktn/provider-cloudflare.emailSecurityAllowPolicy.EmailSecurityAllowPolicyConfig.property.lifecycle">lifecycle</a></code> | <code>cdktn.TerraformResourceLifecycle</code> | *No description.* |
| <code><a href="#@cdktn/provider-cloudflare.emailSecurityAllowPolicy.EmailSecurityAllowPolicyConfig.property.provider">provider</a></code> | <code>cdktn.TerraformProvider</code> | *No description.* |
| <code><a href="#@cdktn/provider-cloudflare.emailSecurityAllowPolicy.EmailSecurityAllowPolicyConfig.property.provisioners">provisioners</a></code> | <code>typing.List[cdktn.FileProvisioner \| cdktn.LocalExecProvisioner \| cdktn.RemoteExecProvisioner]</code> | *No description.* |
| <code><a href="#@cdktn/provider-cloudflare.emailSecurityAllowPolicy.EmailSecurityAllowPolicyConfig.property.accountId">account_id</a></code> | <code>str</code> | Identifier. |
| <code><a href="#@cdktn/provider-cloudflare.emailSecurityAllowPolicy.EmailSecurityAllowPolicyConfig.property.isAcceptableSender">is_acceptable_sender</a></code> | <code>bool \| cdktn.IResolvable</code> | Exempts messages from this sender from Spam, Spoof and Bulk dispositions only; Malicious and Suspicious dispositions still apply. |
| <code><a href="#@cdktn/provider-cloudflare.emailSecurityAllowPolicy.EmailSecurityAllowPolicyConfig.property.isExemptRecipient">is_exempt_recipient</a></code> | <code>bool \| cdktn.IResolvable</code> | Bypasses all detections for messages to this recipient. |
| <code><a href="#@cdktn/provider-cloudflare.emailSecurityAllowPolicy.EmailSecurityAllowPolicyConfig.property.isRegex">is_regex</a></code> | <code>bool \| cdktn.IResolvable</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/cloudflare/cloudflare/5.25.0/docs/resources/email_security_allow_policy#is_regex EmailSecurityAllowPolicy#is_regex}. |
| <code><a href="#@cdktn/provider-cloudflare.emailSecurityAllowPolicy.EmailSecurityAllowPolicyConfig.property.isTrustedSender">is_trusted_sender</a></code> | <code>bool \| cdktn.IResolvable</code> | Bypasses all detections and link following for messages from this sender. |
| <code><a href="#@cdktn/provider-cloudflare.emailSecurityAllowPolicy.EmailSecurityAllowPolicyConfig.property.pattern">pattern</a></code> | <code>str</code> | The pattern value to match. |
| <code><a href="#@cdktn/provider-cloudflare.emailSecurityAllowPolicy.EmailSecurityAllowPolicyConfig.property.patternType">pattern_type</a></code> | <code>str</code> | Type of pattern matching. |
| <code><a href="#@cdktn/provider-cloudflare.emailSecurityAllowPolicy.EmailSecurityAllowPolicyConfig.property.verifySender">verify_sender</a></code> | <code>bool \| cdktn.IResolvable</code> | Enforce DMARC, SPF or DKIM authentication. When on, Email Security only honors policies that pass authentication. |
| <code><a href="#@cdktn/provider-cloudflare.emailSecurityAllowPolicy.EmailSecurityAllowPolicyConfig.property.comments">comments</a></code> | <code>str</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/cloudflare/cloudflare/5.25.0/docs/resources/email_security_allow_policy#comments EmailSecurityAllowPolicy#comments}. |
| <code><a href="#@cdktn/provider-cloudflare.emailSecurityAllowPolicy.EmailSecurityAllowPolicyConfig.property.isRecipient">is_recipient</a></code> | <code>bool \| cdktn.IResolvable</code> | Deprecated as of July 1, 2025. Use `is_exempt_recipient` instead. End of life: July 1, 2026. |
| <code><a href="#@cdktn/provider-cloudflare.emailSecurityAllowPolicy.EmailSecurityAllowPolicyConfig.property.isSender">is_sender</a></code> | <code>bool \| cdktn.IResolvable</code> | Deprecated as of July 1, 2025. Use `is_trusted_sender` instead. End of life: July 1, 2026. |
| <code><a href="#@cdktn/provider-cloudflare.emailSecurityAllowPolicy.EmailSecurityAllowPolicyConfig.property.isSpoof">is_spoof</a></code> | <code>bool \| cdktn.IResolvable</code> | Deprecated as of July 1, 2025. Use `is_acceptable_sender` instead. End of life: July 1, 2026. |

---

##### `connection`<sup>Optional</sup> <a name="connection" id="@cdktn/provider-cloudflare.emailSecurityAllowPolicy.EmailSecurityAllowPolicyConfig.property.connection"></a>

```python
connection: SSHProvisionerConnection | WinrmProvisionerConnection
```

- *Type:* cdktn.SSHProvisionerConnection | cdktn.WinrmProvisionerConnection

---

##### `count`<sup>Optional</sup> <a name="count" id="@cdktn/provider-cloudflare.emailSecurityAllowPolicy.EmailSecurityAllowPolicyConfig.property.count"></a>

```python
count: typing.Union[int, float] | TerraformCount
```

- *Type:* typing.Union[int, float] | cdktn.TerraformCount

---

##### `depends_on`<sup>Optional</sup> <a name="depends_on" id="@cdktn/provider-cloudflare.emailSecurityAllowPolicy.EmailSecurityAllowPolicyConfig.property.dependsOn"></a>

```python
depends_on: typing.List[ITerraformDependable]
```

- *Type:* typing.List[cdktn.ITerraformDependable]

---

##### `for_each`<sup>Optional</sup> <a name="for_each" id="@cdktn/provider-cloudflare.emailSecurityAllowPolicy.EmailSecurityAllowPolicyConfig.property.forEach"></a>

```python
for_each: ITerraformIterator
```

- *Type:* cdktn.ITerraformIterator

---

##### `lifecycle`<sup>Optional</sup> <a name="lifecycle" id="@cdktn/provider-cloudflare.emailSecurityAllowPolicy.EmailSecurityAllowPolicyConfig.property.lifecycle"></a>

```python
lifecycle: TerraformResourceLifecycle
```

- *Type:* cdktn.TerraformResourceLifecycle

---

##### `provider`<sup>Optional</sup> <a name="provider" id="@cdktn/provider-cloudflare.emailSecurityAllowPolicy.EmailSecurityAllowPolicyConfig.property.provider"></a>

```python
provider: TerraformProvider
```

- *Type:* cdktn.TerraformProvider

---

##### `provisioners`<sup>Optional</sup> <a name="provisioners" id="@cdktn/provider-cloudflare.emailSecurityAllowPolicy.EmailSecurityAllowPolicyConfig.property.provisioners"></a>

```python
provisioners: typing.List[FileProvisioner | LocalExecProvisioner | RemoteExecProvisioner]
```

- *Type:* typing.List[cdktn.FileProvisioner | cdktn.LocalExecProvisioner | cdktn.RemoteExecProvisioner]

---

##### `account_id`<sup>Required</sup> <a name="account_id" id="@cdktn/provider-cloudflare.emailSecurityAllowPolicy.EmailSecurityAllowPolicyConfig.property.accountId"></a>

```python
account_id: str
```

- *Type:* str

Identifier.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/cloudflare/cloudflare/5.25.0/docs/resources/email_security_allow_policy#account_id EmailSecurityAllowPolicy#account_id}

---

##### `is_acceptable_sender`<sup>Required</sup> <a name="is_acceptable_sender" id="@cdktn/provider-cloudflare.emailSecurityAllowPolicy.EmailSecurityAllowPolicyConfig.property.isAcceptableSender"></a>

```python
is_acceptable_sender: bool | IResolvable
```

- *Type:* bool | cdktn.IResolvable

Exempts messages from this sender from Spam, Spoof and Bulk dispositions only; Malicious and Suspicious dispositions still apply.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/cloudflare/cloudflare/5.25.0/docs/resources/email_security_allow_policy#is_acceptable_sender EmailSecurityAllowPolicy#is_acceptable_sender}

---

##### `is_exempt_recipient`<sup>Required</sup> <a name="is_exempt_recipient" id="@cdktn/provider-cloudflare.emailSecurityAllowPolicy.EmailSecurityAllowPolicyConfig.property.isExemptRecipient"></a>

```python
is_exempt_recipient: bool | IResolvable
```

- *Type:* bool | cdktn.IResolvable

Bypasses all detections for messages to this recipient.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/cloudflare/cloudflare/5.25.0/docs/resources/email_security_allow_policy#is_exempt_recipient EmailSecurityAllowPolicy#is_exempt_recipient}

---

##### `is_regex`<sup>Required</sup> <a name="is_regex" id="@cdktn/provider-cloudflare.emailSecurityAllowPolicy.EmailSecurityAllowPolicyConfig.property.isRegex"></a>

```python
is_regex: bool | IResolvable
```

- *Type:* bool | cdktn.IResolvable

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/cloudflare/cloudflare/5.25.0/docs/resources/email_security_allow_policy#is_regex EmailSecurityAllowPolicy#is_regex}.

---

##### `is_trusted_sender`<sup>Required</sup> <a name="is_trusted_sender" id="@cdktn/provider-cloudflare.emailSecurityAllowPolicy.EmailSecurityAllowPolicyConfig.property.isTrustedSender"></a>

```python
is_trusted_sender: bool | IResolvable
```

- *Type:* bool | cdktn.IResolvable

Bypasses all detections and link following for messages from this sender.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/cloudflare/cloudflare/5.25.0/docs/resources/email_security_allow_policy#is_trusted_sender EmailSecurityAllowPolicy#is_trusted_sender}

---

##### `pattern`<sup>Required</sup> <a name="pattern" id="@cdktn/provider-cloudflare.emailSecurityAllowPolicy.EmailSecurityAllowPolicyConfig.property.pattern"></a>

```python
pattern: str
```

- *Type:* str

The pattern value to match.

The format depends on `pattern_type`: a valid email address for EMAIL (e.g. `user@example.com`), a valid domain name for DOMAIN (e.g. `example.com`), or a plain IPv4 or IPv6 address or CIDR block for IP (e.g. `1.2.3.4`, `1.2.3.0/24`, `2606:4700:4700::1111`, or `2606:4700:4700::/48`); the API rejects private or unique-local, loopback, link-local, unspecified, and IPv4 broadcast addresses, including their IPv4-mapped IPv6 equivalents.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/cloudflare/cloudflare/5.25.0/docs/resources/email_security_allow_policy#pattern EmailSecurityAllowPolicy#pattern}

---

##### `pattern_type`<sup>Required</sup> <a name="pattern_type" id="@cdktn/provider-cloudflare.emailSecurityAllowPolicy.EmailSecurityAllowPolicyConfig.property.patternType"></a>

```python
pattern_type: str
```

- *Type:* str

Type of pattern matching.

* EMAIL: matches a full email address (e.g. `user@example.com`)
* DOMAIN: matches a domain name (e.g. `example.com`)
* IP: matches a plain IPv4 or IPv6 address (e.g. `1.2.3.4` or `2606:4700:4700::1111`) or CIDR block (e.g. `1.2.3.0/24` or `2606:4700:4700::/48`). The API rejects private or unique-local, loopback, link-local, unspecified, and IPv4 broadcast addresses, including their IPv4-mapped IPv6 equivalents.
* UNKNOWN: deprecated; you cannot use this when creating or updating policies, but it may appear on existing entries.
  Available values: "EMAIL", "DOMAIN", "IP", "UNKNOWN".

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/cloudflare/cloudflare/5.25.0/docs/resources/email_security_allow_policy#pattern_type EmailSecurityAllowPolicy#pattern_type}

---

##### `verify_sender`<sup>Required</sup> <a name="verify_sender" id="@cdktn/provider-cloudflare.emailSecurityAllowPolicy.EmailSecurityAllowPolicyConfig.property.verifySender"></a>

```python
verify_sender: bool | IResolvable
```

- *Type:* bool | cdktn.IResolvable

Enforce DMARC, SPF or DKIM authentication. When on, Email Security only honors policies that pass authentication.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/cloudflare/cloudflare/5.25.0/docs/resources/email_security_allow_policy#verify_sender EmailSecurityAllowPolicy#verify_sender}

---

##### `comments`<sup>Optional</sup> <a name="comments" id="@cdktn/provider-cloudflare.emailSecurityAllowPolicy.EmailSecurityAllowPolicyConfig.property.comments"></a>

```python
comments: str
```

- *Type:* str

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/cloudflare/cloudflare/5.25.0/docs/resources/email_security_allow_policy#comments EmailSecurityAllowPolicy#comments}.

---

##### `is_recipient`<sup>Optional</sup> <a name="is_recipient" id="@cdktn/provider-cloudflare.emailSecurityAllowPolicy.EmailSecurityAllowPolicyConfig.property.isRecipient"></a>

```python
is_recipient: bool | IResolvable
```

- *Type:* bool | cdktn.IResolvable

Deprecated as of July 1, 2025. Use `is_exempt_recipient` instead. End of life: July 1, 2026.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/cloudflare/cloudflare/5.25.0/docs/resources/email_security_allow_policy#is_recipient EmailSecurityAllowPolicy#is_recipient}

---

##### `is_sender`<sup>Optional</sup> <a name="is_sender" id="@cdktn/provider-cloudflare.emailSecurityAllowPolicy.EmailSecurityAllowPolicyConfig.property.isSender"></a>

```python
is_sender: bool | IResolvable
```

- *Type:* bool | cdktn.IResolvable

Deprecated as of July 1, 2025. Use `is_trusted_sender` instead. End of life: July 1, 2026.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/cloudflare/cloudflare/5.25.0/docs/resources/email_security_allow_policy#is_sender EmailSecurityAllowPolicy#is_sender}

---

##### `is_spoof`<sup>Optional</sup> <a name="is_spoof" id="@cdktn/provider-cloudflare.emailSecurityAllowPolicy.EmailSecurityAllowPolicyConfig.property.isSpoof"></a>

```python
is_spoof: bool | IResolvable
```

- *Type:* bool | cdktn.IResolvable

Deprecated as of July 1, 2025. Use `is_acceptable_sender` instead. End of life: July 1, 2026.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/cloudflare/cloudflare/5.25.0/docs/resources/email_security_allow_policy#is_spoof EmailSecurityAllowPolicy#is_spoof}

---



