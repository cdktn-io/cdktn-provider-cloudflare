# `emailSendingSubdomain` Submodule <a name="`emailSendingSubdomain` Submodule" id="@cdktn/provider-cloudflare.emailSendingSubdomain"></a>

## Constructs <a name="Constructs" id="Constructs"></a>

### EmailSendingSubdomain <a name="EmailSendingSubdomain" id="@cdktn/provider-cloudflare.emailSendingSubdomain.EmailSendingSubdomain"></a>

Represents a {@link https://registry.terraform.io/providers/cloudflare/cloudflare/5.25.0/docs/resources/email_sending_subdomain cloudflare_email_sending_subdomain}.

#### Initializers <a name="Initializers" id="@cdktn/provider-cloudflare.emailSendingSubdomain.EmailSendingSubdomain.Initializer"></a>

```python
from cdktn_provider_cloudflare import email_sending_subdomain

emailSendingSubdomain.EmailSendingSubdomain(
  scope: Construct,
  id: str,
  connection: SSHProvisionerConnection | WinrmProvisionerConnection = None,
  count: typing.Union[int, float] | TerraformCount = None,
  depends_on: typing.List[ITerraformDependable] = None,
  for_each: ITerraformIterator = None,
  lifecycle: TerraformResourceLifecycle = None,
  provider: TerraformProvider = None,
  provisioners: typing.List[FileProvisioner | LocalExecProvisioner | RemoteExecProvisioner] = None,
  name: str,
  zone_id: str,
  drop_suppressed_recipients: bool | IResolvable = None,
  preview_enabled: bool | IResolvable = None
)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-cloudflare.emailSendingSubdomain.EmailSendingSubdomain.Initializer.parameter.scope">scope</a></code> | <code>constructs.Construct</code> | The scope in which to define this construct. |
| <code><a href="#@cdktn/provider-cloudflare.emailSendingSubdomain.EmailSendingSubdomain.Initializer.parameter.id">id</a></code> | <code>str</code> | The scoped construct ID. |
| <code><a href="#@cdktn/provider-cloudflare.emailSendingSubdomain.EmailSendingSubdomain.Initializer.parameter.connection">connection</a></code> | <code>cdktn.SSHProvisionerConnection \| cdktn.WinrmProvisionerConnection</code> | *No description.* |
| <code><a href="#@cdktn/provider-cloudflare.emailSendingSubdomain.EmailSendingSubdomain.Initializer.parameter.count">count</a></code> | <code>typing.Union[int, float] \| cdktn.TerraformCount</code> | *No description.* |
| <code><a href="#@cdktn/provider-cloudflare.emailSendingSubdomain.EmailSendingSubdomain.Initializer.parameter.dependsOn">depends_on</a></code> | <code>typing.List[cdktn.ITerraformDependable]</code> | *No description.* |
| <code><a href="#@cdktn/provider-cloudflare.emailSendingSubdomain.EmailSendingSubdomain.Initializer.parameter.forEach">for_each</a></code> | <code>cdktn.ITerraformIterator</code> | *No description.* |
| <code><a href="#@cdktn/provider-cloudflare.emailSendingSubdomain.EmailSendingSubdomain.Initializer.parameter.lifecycle">lifecycle</a></code> | <code>cdktn.TerraformResourceLifecycle</code> | *No description.* |
| <code><a href="#@cdktn/provider-cloudflare.emailSendingSubdomain.EmailSendingSubdomain.Initializer.parameter.provider">provider</a></code> | <code>cdktn.TerraformProvider</code> | *No description.* |
| <code><a href="#@cdktn/provider-cloudflare.emailSendingSubdomain.EmailSendingSubdomain.Initializer.parameter.provisioners">provisioners</a></code> | <code>typing.List[cdktn.FileProvisioner \| cdktn.LocalExecProvisioner \| cdktn.RemoteExecProvisioner]</code> | *No description.* |
| <code><a href="#@cdktn/provider-cloudflare.emailSendingSubdomain.EmailSendingSubdomain.Initializer.parameter.name">name</a></code> | <code>str</code> | The domain name within the zone. |
| <code><a href="#@cdktn/provider-cloudflare.emailSendingSubdomain.EmailSendingSubdomain.Initializer.parameter.zoneId">zone_id</a></code> | <code>str</code> | Identifier. |
| <code><a href="#@cdktn/provider-cloudflare.emailSendingSubdomain.EmailSendingSubdomain.Initializer.parameter.dropSuppressedRecipients">drop_suppressed_recipients</a></code> | <code>bool \| cdktn.IResolvable</code> | Whether a send request that includes a recipient suppressed on this subdomain drops that recipient and still delivers to the rest, instead of failing the entire request. |
| <code><a href="#@cdktn/provider-cloudflare.emailSendingSubdomain.EmailSendingSubdomain.Initializer.parameter.previewEnabled">preview_enabled</a></code> | <code>bool \| cdktn.IResolvable</code> | Whether sent messages from this subdomain can be previewed in the activity log. |

---

##### `scope`<sup>Required</sup> <a name="scope" id="@cdktn/provider-cloudflare.emailSendingSubdomain.EmailSendingSubdomain.Initializer.parameter.scope"></a>

- *Type:* constructs.Construct

The scope in which to define this construct.

---

##### `id`<sup>Required</sup> <a name="id" id="@cdktn/provider-cloudflare.emailSendingSubdomain.EmailSendingSubdomain.Initializer.parameter.id"></a>

- *Type:* str

The scoped construct ID.

Must be unique amongst siblings in the same scope

---

##### `connection`<sup>Optional</sup> <a name="connection" id="@cdktn/provider-cloudflare.emailSendingSubdomain.EmailSendingSubdomain.Initializer.parameter.connection"></a>

- *Type:* cdktn.SSHProvisionerConnection | cdktn.WinrmProvisionerConnection

---

##### `count`<sup>Optional</sup> <a name="count" id="@cdktn/provider-cloudflare.emailSendingSubdomain.EmailSendingSubdomain.Initializer.parameter.count"></a>

- *Type:* typing.Union[int, float] | cdktn.TerraformCount

---

##### `depends_on`<sup>Optional</sup> <a name="depends_on" id="@cdktn/provider-cloudflare.emailSendingSubdomain.EmailSendingSubdomain.Initializer.parameter.dependsOn"></a>

- *Type:* typing.List[cdktn.ITerraformDependable]

---

##### `for_each`<sup>Optional</sup> <a name="for_each" id="@cdktn/provider-cloudflare.emailSendingSubdomain.EmailSendingSubdomain.Initializer.parameter.forEach"></a>

- *Type:* cdktn.ITerraformIterator

---

##### `lifecycle`<sup>Optional</sup> <a name="lifecycle" id="@cdktn/provider-cloudflare.emailSendingSubdomain.EmailSendingSubdomain.Initializer.parameter.lifecycle"></a>

- *Type:* cdktn.TerraformResourceLifecycle

---

##### `provider`<sup>Optional</sup> <a name="provider" id="@cdktn/provider-cloudflare.emailSendingSubdomain.EmailSendingSubdomain.Initializer.parameter.provider"></a>

- *Type:* cdktn.TerraformProvider

---

##### `provisioners`<sup>Optional</sup> <a name="provisioners" id="@cdktn/provider-cloudflare.emailSendingSubdomain.EmailSendingSubdomain.Initializer.parameter.provisioners"></a>

- *Type:* typing.List[cdktn.FileProvisioner | cdktn.LocalExecProvisioner | cdktn.RemoteExecProvisioner]

---

##### `name`<sup>Required</sup> <a name="name" id="@cdktn/provider-cloudflare.emailSendingSubdomain.EmailSendingSubdomain.Initializer.parameter.name"></a>

- *Type:* str

The domain name within the zone.

A wildcard is allowed only as the complete leftmost label (`*.example.com`) and requires the account wildcard Email Sending entitlement.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/cloudflare/cloudflare/5.25.0/docs/resources/email_sending_subdomain#name EmailSendingSubdomain#name}

---

##### `zone_id`<sup>Required</sup> <a name="zone_id" id="@cdktn/provider-cloudflare.emailSendingSubdomain.EmailSendingSubdomain.Initializer.parameter.zoneId"></a>

- *Type:* str

Identifier.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/cloudflare/cloudflare/5.25.0/docs/resources/email_sending_subdomain#zone_id EmailSendingSubdomain#zone_id}

---

##### `drop_suppressed_recipients`<sup>Optional</sup> <a name="drop_suppressed_recipients" id="@cdktn/provider-cloudflare.emailSendingSubdomain.EmailSendingSubdomain.Initializer.parameter.dropSuppressedRecipients"></a>

- *Type:* bool | cdktn.IResolvable

Whether a send request that includes a recipient suppressed on this subdomain drops that recipient and still delivers to the rest, instead of failing the entire request.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/cloudflare/cloudflare/5.25.0/docs/resources/email_sending_subdomain#drop_suppressed_recipients EmailSendingSubdomain#drop_suppressed_recipients}

---

##### `preview_enabled`<sup>Optional</sup> <a name="preview_enabled" id="@cdktn/provider-cloudflare.emailSendingSubdomain.EmailSendingSubdomain.Initializer.parameter.previewEnabled"></a>

- *Type:* bool | cdktn.IResolvable

Whether sent messages from this subdomain can be previewed in the activity log.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/cloudflare/cloudflare/5.25.0/docs/resources/email_sending_subdomain#preview_enabled EmailSendingSubdomain#preview_enabled}

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-cloudflare.emailSendingSubdomain.EmailSendingSubdomain.toString">to_string</a></code> | Returns a string representation of this construct. |
| <code><a href="#@cdktn/provider-cloudflare.emailSendingSubdomain.EmailSendingSubdomain.with">with</a></code> | Applies one or more mixins to this construct. |
| <code><a href="#@cdktn/provider-cloudflare.emailSendingSubdomain.EmailSendingSubdomain.addOverride">add_override</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-cloudflare.emailSendingSubdomain.EmailSendingSubdomain.overrideLogicalId">override_logical_id</a></code> | Overrides the auto-generated logical ID with a specific ID. |
| <code><a href="#@cdktn/provider-cloudflare.emailSendingSubdomain.EmailSendingSubdomain.resetOverrideLogicalId">reset_override_logical_id</a></code> | Resets a previously passed logical Id to use the auto-generated logical id again. |
| <code><a href="#@cdktn/provider-cloudflare.emailSendingSubdomain.EmailSendingSubdomain.toHclTerraform">to_hcl_terraform</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-cloudflare.emailSendingSubdomain.EmailSendingSubdomain.toMetadata">to_metadata</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-cloudflare.emailSendingSubdomain.EmailSendingSubdomain.toTerraform">to_terraform</a></code> | Adds this resource to the terraform JSON output. |
| <code><a href="#@cdktn/provider-cloudflare.emailSendingSubdomain.EmailSendingSubdomain.addMoveTarget">add_move_target</a></code> | Adds a user defined moveTarget string to this resource to be later used in .moveTo(moveTarget) to resolve the location of the move. |
| <code><a href="#@cdktn/provider-cloudflare.emailSendingSubdomain.EmailSendingSubdomain.getAnyMapAttribute">get_any_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-cloudflare.emailSendingSubdomain.EmailSendingSubdomain.getBooleanAttribute">get_boolean_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-cloudflare.emailSendingSubdomain.EmailSendingSubdomain.getBooleanMapAttribute">get_boolean_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-cloudflare.emailSendingSubdomain.EmailSendingSubdomain.getListAttribute">get_list_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-cloudflare.emailSendingSubdomain.EmailSendingSubdomain.getNumberAttribute">get_number_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-cloudflare.emailSendingSubdomain.EmailSendingSubdomain.getNumberListAttribute">get_number_list_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-cloudflare.emailSendingSubdomain.EmailSendingSubdomain.getNumberMapAttribute">get_number_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-cloudflare.emailSendingSubdomain.EmailSendingSubdomain.getStringAttribute">get_string_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-cloudflare.emailSendingSubdomain.EmailSendingSubdomain.getStringMapAttribute">get_string_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-cloudflare.emailSendingSubdomain.EmailSendingSubdomain.hasResourceMove">has_resource_move</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-cloudflare.emailSendingSubdomain.EmailSendingSubdomain.importFrom">import_from</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-cloudflare.emailSendingSubdomain.EmailSendingSubdomain.interpolationForAttribute">interpolation_for_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-cloudflare.emailSendingSubdomain.EmailSendingSubdomain.moveFromId">move_from_id</a></code> | Move the resource corresponding to "id" to this resource. |
| <code><a href="#@cdktn/provider-cloudflare.emailSendingSubdomain.EmailSendingSubdomain.moveTo">move_to</a></code> | Moves this resource to the target resource given by moveTarget. |
| <code><a href="#@cdktn/provider-cloudflare.emailSendingSubdomain.EmailSendingSubdomain.moveToId">move_to_id</a></code> | Moves this resource to the resource corresponding to "id". |
| <code><a href="#@cdktn/provider-cloudflare.emailSendingSubdomain.EmailSendingSubdomain.resetDropSuppressedRecipients">reset_drop_suppressed_recipients</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-cloudflare.emailSendingSubdomain.EmailSendingSubdomain.resetPreviewEnabled">reset_preview_enabled</a></code> | *No description.* |

---

##### `to_string` <a name="to_string" id="@cdktn/provider-cloudflare.emailSendingSubdomain.EmailSendingSubdomain.toString"></a>

```python
def to_string() -> str
```

Returns a string representation of this construct.

##### `with` <a name="with" id="@cdktn/provider-cloudflare.emailSendingSubdomain.EmailSendingSubdomain.with"></a>

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

###### `mixins`<sup>Required</sup> <a name="mixins" id="@cdktn/provider-cloudflare.emailSendingSubdomain.EmailSendingSubdomain.with.parameter.mixins"></a>

- *Type:* *constructs.IMixin

The mixins to apply.

---

##### `add_override` <a name="add_override" id="@cdktn/provider-cloudflare.emailSendingSubdomain.EmailSendingSubdomain.addOverride"></a>

```python
def add_override(
  path: str,
  value: typing.Any
) -> None
```

###### `path`<sup>Required</sup> <a name="path" id="@cdktn/provider-cloudflare.emailSendingSubdomain.EmailSendingSubdomain.addOverride.parameter.path"></a>

- *Type:* str

---

###### `value`<sup>Required</sup> <a name="value" id="@cdktn/provider-cloudflare.emailSendingSubdomain.EmailSendingSubdomain.addOverride.parameter.value"></a>

- *Type:* typing.Any

---

##### `override_logical_id` <a name="override_logical_id" id="@cdktn/provider-cloudflare.emailSendingSubdomain.EmailSendingSubdomain.overrideLogicalId"></a>

```python
def override_logical_id(
  new_logical_id: str
) -> None
```

Overrides the auto-generated logical ID with a specific ID.

###### `new_logical_id`<sup>Required</sup> <a name="new_logical_id" id="@cdktn/provider-cloudflare.emailSendingSubdomain.EmailSendingSubdomain.overrideLogicalId.parameter.newLogicalId"></a>

- *Type:* str

The new logical ID to use for this stack element.

---

##### `reset_override_logical_id` <a name="reset_override_logical_id" id="@cdktn/provider-cloudflare.emailSendingSubdomain.EmailSendingSubdomain.resetOverrideLogicalId"></a>

```python
def reset_override_logical_id() -> None
```

Resets a previously passed logical Id to use the auto-generated logical id again.

##### `to_hcl_terraform` <a name="to_hcl_terraform" id="@cdktn/provider-cloudflare.emailSendingSubdomain.EmailSendingSubdomain.toHclTerraform"></a>

```python
def to_hcl_terraform() -> typing.Any
```

##### `to_metadata` <a name="to_metadata" id="@cdktn/provider-cloudflare.emailSendingSubdomain.EmailSendingSubdomain.toMetadata"></a>

```python
def to_metadata() -> typing.Any
```

##### `to_terraform` <a name="to_terraform" id="@cdktn/provider-cloudflare.emailSendingSubdomain.EmailSendingSubdomain.toTerraform"></a>

```python
def to_terraform() -> typing.Any
```

Adds this resource to the terraform JSON output.

##### `add_move_target` <a name="add_move_target" id="@cdktn/provider-cloudflare.emailSendingSubdomain.EmailSendingSubdomain.addMoveTarget"></a>

```python
def add_move_target(
  move_target: str
) -> None
```

Adds a user defined moveTarget string to this resource to be later used in .moveTo(moveTarget) to resolve the location of the move.

###### `move_target`<sup>Required</sup> <a name="move_target" id="@cdktn/provider-cloudflare.emailSendingSubdomain.EmailSendingSubdomain.addMoveTarget.parameter.moveTarget"></a>

- *Type:* str

The string move target that will correspond to this resource.

---

##### `get_any_map_attribute` <a name="get_any_map_attribute" id="@cdktn/provider-cloudflare.emailSendingSubdomain.EmailSendingSubdomain.getAnyMapAttribute"></a>

```python
def get_any_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[typing.Any]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-cloudflare.emailSendingSubdomain.EmailSendingSubdomain.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_boolean_attribute` <a name="get_boolean_attribute" id="@cdktn/provider-cloudflare.emailSendingSubdomain.EmailSendingSubdomain.getBooleanAttribute"></a>

```python
def get_boolean_attribute(
  terraform_attribute: str
) -> IResolvable
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-cloudflare.emailSendingSubdomain.EmailSendingSubdomain.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_boolean_map_attribute` <a name="get_boolean_map_attribute" id="@cdktn/provider-cloudflare.emailSendingSubdomain.EmailSendingSubdomain.getBooleanMapAttribute"></a>

```python
def get_boolean_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[bool]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-cloudflare.emailSendingSubdomain.EmailSendingSubdomain.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_list_attribute` <a name="get_list_attribute" id="@cdktn/provider-cloudflare.emailSendingSubdomain.EmailSendingSubdomain.getListAttribute"></a>

```python
def get_list_attribute(
  terraform_attribute: str
) -> typing.List[str]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-cloudflare.emailSendingSubdomain.EmailSendingSubdomain.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_attribute` <a name="get_number_attribute" id="@cdktn/provider-cloudflare.emailSendingSubdomain.EmailSendingSubdomain.getNumberAttribute"></a>

```python
def get_number_attribute(
  terraform_attribute: str
) -> typing.Union[int, float]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-cloudflare.emailSendingSubdomain.EmailSendingSubdomain.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_list_attribute` <a name="get_number_list_attribute" id="@cdktn/provider-cloudflare.emailSendingSubdomain.EmailSendingSubdomain.getNumberListAttribute"></a>

```python
def get_number_list_attribute(
  terraform_attribute: str
) -> typing.List[typing.Union[int, float]]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-cloudflare.emailSendingSubdomain.EmailSendingSubdomain.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_map_attribute` <a name="get_number_map_attribute" id="@cdktn/provider-cloudflare.emailSendingSubdomain.EmailSendingSubdomain.getNumberMapAttribute"></a>

```python
def get_number_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[typing.Union[int, float]]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-cloudflare.emailSendingSubdomain.EmailSendingSubdomain.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_string_attribute` <a name="get_string_attribute" id="@cdktn/provider-cloudflare.emailSendingSubdomain.EmailSendingSubdomain.getStringAttribute"></a>

```python
def get_string_attribute(
  terraform_attribute: str
) -> str
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-cloudflare.emailSendingSubdomain.EmailSendingSubdomain.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_string_map_attribute` <a name="get_string_map_attribute" id="@cdktn/provider-cloudflare.emailSendingSubdomain.EmailSendingSubdomain.getStringMapAttribute"></a>

```python
def get_string_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[str]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-cloudflare.emailSendingSubdomain.EmailSendingSubdomain.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `has_resource_move` <a name="has_resource_move" id="@cdktn/provider-cloudflare.emailSendingSubdomain.EmailSendingSubdomain.hasResourceMove"></a>

```python
def has_resource_move() -> TerraformResourceMoveByTarget | TerraformResourceMoveById
```

##### `import_from` <a name="import_from" id="@cdktn/provider-cloudflare.emailSendingSubdomain.EmailSendingSubdomain.importFrom"></a>

```python
def import_from(
  id: str,
  provider: TerraformProvider = None
) -> None
```

###### `id`<sup>Required</sup> <a name="id" id="@cdktn/provider-cloudflare.emailSendingSubdomain.EmailSendingSubdomain.importFrom.parameter.id"></a>

- *Type:* str

---

###### `provider`<sup>Optional</sup> <a name="provider" id="@cdktn/provider-cloudflare.emailSendingSubdomain.EmailSendingSubdomain.importFrom.parameter.provider"></a>

- *Type:* cdktn.TerraformProvider

---

##### `interpolation_for_attribute` <a name="interpolation_for_attribute" id="@cdktn/provider-cloudflare.emailSendingSubdomain.EmailSendingSubdomain.interpolationForAttribute"></a>

```python
def interpolation_for_attribute(
  terraform_attribute: str
) -> IResolvable
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-cloudflare.emailSendingSubdomain.EmailSendingSubdomain.interpolationForAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `move_from_id` <a name="move_from_id" id="@cdktn/provider-cloudflare.emailSendingSubdomain.EmailSendingSubdomain.moveFromId"></a>

```python
def move_from_id(
  id: str
) -> None
```

Move the resource corresponding to "id" to this resource.

Note that the resource being moved from must be marked as moved using its instance function.

###### `id`<sup>Required</sup> <a name="id" id="@cdktn/provider-cloudflare.emailSendingSubdomain.EmailSendingSubdomain.moveFromId.parameter.id"></a>

- *Type:* str

Full id of resource being moved from, e.g. "aws_s3_bucket.example".

---

##### `move_to` <a name="move_to" id="@cdktn/provider-cloudflare.emailSendingSubdomain.EmailSendingSubdomain.moveTo"></a>

```python
def move_to(
  move_target: str,
  index: str | typing.Union[int, float] = None
) -> None
```

Moves this resource to the target resource given by moveTarget.

###### `move_target`<sup>Required</sup> <a name="move_target" id="@cdktn/provider-cloudflare.emailSendingSubdomain.EmailSendingSubdomain.moveTo.parameter.moveTarget"></a>

- *Type:* str

The previously set user defined string set by .addMoveTarget() corresponding to the resource to move to.

---

###### `index`<sup>Optional</sup> <a name="index" id="@cdktn/provider-cloudflare.emailSendingSubdomain.EmailSendingSubdomain.moveTo.parameter.index"></a>

- *Type:* str | typing.Union[int, float]

Optional The index corresponding to the key the resource is to appear in the foreach of a resource to move to.

---

##### `move_to_id` <a name="move_to_id" id="@cdktn/provider-cloudflare.emailSendingSubdomain.EmailSendingSubdomain.moveToId"></a>

```python
def move_to_id(
  id: str
) -> None
```

Moves this resource to the resource corresponding to "id".

###### `id`<sup>Required</sup> <a name="id" id="@cdktn/provider-cloudflare.emailSendingSubdomain.EmailSendingSubdomain.moveToId.parameter.id"></a>

- *Type:* str

Full id of resource to move to, e.g. "aws_s3_bucket.example".

---

##### `reset_drop_suppressed_recipients` <a name="reset_drop_suppressed_recipients" id="@cdktn/provider-cloudflare.emailSendingSubdomain.EmailSendingSubdomain.resetDropSuppressedRecipients"></a>

```python
def reset_drop_suppressed_recipients() -> None
```

##### `reset_preview_enabled` <a name="reset_preview_enabled" id="@cdktn/provider-cloudflare.emailSendingSubdomain.EmailSendingSubdomain.resetPreviewEnabled"></a>

```python
def reset_preview_enabled() -> None
```

#### Static Functions <a name="Static Functions" id="Static Functions"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-cloudflare.emailSendingSubdomain.EmailSendingSubdomain.isConstruct">is_construct</a></code> | Checks if `x` is a construct. |
| <code><a href="#@cdktn/provider-cloudflare.emailSendingSubdomain.EmailSendingSubdomain.isTerraformElement">is_terraform_element</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-cloudflare.emailSendingSubdomain.EmailSendingSubdomain.isTerraformResource">is_terraform_resource</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-cloudflare.emailSendingSubdomain.EmailSendingSubdomain.generateConfigForImport">generate_config_for_import</a></code> | Generates CDKTN code for importing a EmailSendingSubdomain resource upon running "cdktn plan <stack-name>". |

---

##### `is_construct` <a name="is_construct" id="@cdktn/provider-cloudflare.emailSendingSubdomain.EmailSendingSubdomain.isConstruct"></a>

```python
from cdktn_provider_cloudflare import email_sending_subdomain

emailSendingSubdomain.EmailSendingSubdomain.is_construct(
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

###### `x`<sup>Required</sup> <a name="x" id="@cdktn/provider-cloudflare.emailSendingSubdomain.EmailSendingSubdomain.isConstruct.parameter.x"></a>

- *Type:* typing.Any

Any object.

---

##### `is_terraform_element` <a name="is_terraform_element" id="@cdktn/provider-cloudflare.emailSendingSubdomain.EmailSendingSubdomain.isTerraformElement"></a>

```python
from cdktn_provider_cloudflare import email_sending_subdomain

emailSendingSubdomain.EmailSendingSubdomain.is_terraform_element(
  x: typing.Any
)
```

###### `x`<sup>Required</sup> <a name="x" id="@cdktn/provider-cloudflare.emailSendingSubdomain.EmailSendingSubdomain.isTerraformElement.parameter.x"></a>

- *Type:* typing.Any

---

##### `is_terraform_resource` <a name="is_terraform_resource" id="@cdktn/provider-cloudflare.emailSendingSubdomain.EmailSendingSubdomain.isTerraformResource"></a>

```python
from cdktn_provider_cloudflare import email_sending_subdomain

emailSendingSubdomain.EmailSendingSubdomain.is_terraform_resource(
  x: typing.Any
)
```

###### `x`<sup>Required</sup> <a name="x" id="@cdktn/provider-cloudflare.emailSendingSubdomain.EmailSendingSubdomain.isTerraformResource.parameter.x"></a>

- *Type:* typing.Any

---

##### `generate_config_for_import` <a name="generate_config_for_import" id="@cdktn/provider-cloudflare.emailSendingSubdomain.EmailSendingSubdomain.generateConfigForImport"></a>

```python
from cdktn_provider_cloudflare import email_sending_subdomain

emailSendingSubdomain.EmailSendingSubdomain.generate_config_for_import(
  scope: Construct,
  import_to_id: str,
  import_from_id: str,
  provider: TerraformProvider = None
)
```

Generates CDKTN code for importing a EmailSendingSubdomain resource upon running "cdktn plan <stack-name>".

###### `scope`<sup>Required</sup> <a name="scope" id="@cdktn/provider-cloudflare.emailSendingSubdomain.EmailSendingSubdomain.generateConfigForImport.parameter.scope"></a>

- *Type:* constructs.Construct

The scope in which to define this construct.

---

###### `import_to_id`<sup>Required</sup> <a name="import_to_id" id="@cdktn/provider-cloudflare.emailSendingSubdomain.EmailSendingSubdomain.generateConfigForImport.parameter.importToId"></a>

- *Type:* str

The construct id used in the generated config for the EmailSendingSubdomain to import.

---

###### `import_from_id`<sup>Required</sup> <a name="import_from_id" id="@cdktn/provider-cloudflare.emailSendingSubdomain.EmailSendingSubdomain.generateConfigForImport.parameter.importFromId"></a>

- *Type:* str

The id of the existing EmailSendingSubdomain that should be imported.

Refer to the {@link https://registry.terraform.io/providers/cloudflare/cloudflare/5.25.0/docs/resources/email_sending_subdomain#import import section} in the documentation of this resource for the id to use

---

###### `provider`<sup>Optional</sup> <a name="provider" id="@cdktn/provider-cloudflare.emailSendingSubdomain.EmailSendingSubdomain.generateConfigForImport.parameter.provider"></a>

- *Type:* cdktn.TerraformProvider

? Optional instance of the provider where the EmailSendingSubdomain to import is found.

---

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-cloudflare.emailSendingSubdomain.EmailSendingSubdomain.property.node">node</a></code> | <code>constructs.Node</code> | The tree node. |
| <code><a href="#@cdktn/provider-cloudflare.emailSendingSubdomain.EmailSendingSubdomain.property.cdktfStack">cdktf_stack</a></code> | <code>cdktn.TerraformStack</code> | *No description.* |
| <code><a href="#@cdktn/provider-cloudflare.emailSendingSubdomain.EmailSendingSubdomain.property.fqn">fqn</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktn/provider-cloudflare.emailSendingSubdomain.EmailSendingSubdomain.property.friendlyUniqueId">friendly_unique_id</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktn/provider-cloudflare.emailSendingSubdomain.EmailSendingSubdomain.property.terraformMetaArguments">terraform_meta_arguments</a></code> | <code>typing.Mapping[typing.Any]</code> | *No description.* |
| <code><a href="#@cdktn/provider-cloudflare.emailSendingSubdomain.EmailSendingSubdomain.property.terraformResourceType">terraform_resource_type</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktn/provider-cloudflare.emailSendingSubdomain.EmailSendingSubdomain.property.terraformGeneratorMetadata">terraform_generator_metadata</a></code> | <code>cdktn.TerraformProviderGeneratorMetadata</code> | *No description.* |
| <code><a href="#@cdktn/provider-cloudflare.emailSendingSubdomain.EmailSendingSubdomain.property.connection">connection</a></code> | <code>cdktn.SSHProvisionerConnection \| cdktn.WinrmProvisionerConnection</code> | *No description.* |
| <code><a href="#@cdktn/provider-cloudflare.emailSendingSubdomain.EmailSendingSubdomain.property.count">count</a></code> | <code>typing.Union[int, float] \| cdktn.TerraformCount</code> | *No description.* |
| <code><a href="#@cdktn/provider-cloudflare.emailSendingSubdomain.EmailSendingSubdomain.property.dependsOn">depends_on</a></code> | <code>typing.List[str]</code> | *No description.* |
| <code><a href="#@cdktn/provider-cloudflare.emailSendingSubdomain.EmailSendingSubdomain.property.forEach">for_each</a></code> | <code>cdktn.ITerraformIterator</code> | *No description.* |
| <code><a href="#@cdktn/provider-cloudflare.emailSendingSubdomain.EmailSendingSubdomain.property.lifecycle">lifecycle</a></code> | <code>cdktn.TerraformResourceLifecycle</code> | *No description.* |
| <code><a href="#@cdktn/provider-cloudflare.emailSendingSubdomain.EmailSendingSubdomain.property.provider">provider</a></code> | <code>cdktn.TerraformProvider</code> | *No description.* |
| <code><a href="#@cdktn/provider-cloudflare.emailSendingSubdomain.EmailSendingSubdomain.property.provisioners">provisioners</a></code> | <code>typing.List[cdktn.FileProvisioner \| cdktn.LocalExecProvisioner \| cdktn.RemoteExecProvisioner]</code> | *No description.* |
| <code><a href="#@cdktn/provider-cloudflare.emailSendingSubdomain.EmailSendingSubdomain.property.created">created</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktn/provider-cloudflare.emailSendingSubdomain.EmailSendingSubdomain.property.dkimSelector">dkim_selector</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktn/provider-cloudflare.emailSendingSubdomain.EmailSendingSubdomain.property.enabled">enabled</a></code> | <code>cdktn.IResolvable</code> | *No description.* |
| <code><a href="#@cdktn/provider-cloudflare.emailSendingSubdomain.EmailSendingSubdomain.property.id">id</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktn/provider-cloudflare.emailSendingSubdomain.EmailSendingSubdomain.property.modified">modified</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktn/provider-cloudflare.emailSendingSubdomain.EmailSendingSubdomain.property.returnPathDomain">return_path_domain</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktn/provider-cloudflare.emailSendingSubdomain.EmailSendingSubdomain.property.tag">tag</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktn/provider-cloudflare.emailSendingSubdomain.EmailSendingSubdomain.property.dropSuppressedRecipientsInput">drop_suppressed_recipients_input</a></code> | <code>bool \| cdktn.IResolvable</code> | *No description.* |
| <code><a href="#@cdktn/provider-cloudflare.emailSendingSubdomain.EmailSendingSubdomain.property.nameInput">name_input</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktn/provider-cloudflare.emailSendingSubdomain.EmailSendingSubdomain.property.previewEnabledInput">preview_enabled_input</a></code> | <code>bool \| cdktn.IResolvable</code> | *No description.* |
| <code><a href="#@cdktn/provider-cloudflare.emailSendingSubdomain.EmailSendingSubdomain.property.zoneIdInput">zone_id_input</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktn/provider-cloudflare.emailSendingSubdomain.EmailSendingSubdomain.property.dropSuppressedRecipients">drop_suppressed_recipients</a></code> | <code>bool \| cdktn.IResolvable</code> | *No description.* |
| <code><a href="#@cdktn/provider-cloudflare.emailSendingSubdomain.EmailSendingSubdomain.property.name">name</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktn/provider-cloudflare.emailSendingSubdomain.EmailSendingSubdomain.property.previewEnabled">preview_enabled</a></code> | <code>bool \| cdktn.IResolvable</code> | *No description.* |
| <code><a href="#@cdktn/provider-cloudflare.emailSendingSubdomain.EmailSendingSubdomain.property.zoneId">zone_id</a></code> | <code>str</code> | *No description.* |

---

##### `node`<sup>Required</sup> <a name="node" id="@cdktn/provider-cloudflare.emailSendingSubdomain.EmailSendingSubdomain.property.node"></a>

```python
node: Node
```

- *Type:* constructs.Node

The tree node.

---

##### `cdktf_stack`<sup>Required</sup> <a name="cdktf_stack" id="@cdktn/provider-cloudflare.emailSendingSubdomain.EmailSendingSubdomain.property.cdktfStack"></a>

```python
cdktf_stack: TerraformStack
```

- *Type:* cdktn.TerraformStack

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktn/provider-cloudflare.emailSendingSubdomain.EmailSendingSubdomain.property.fqn"></a>

```python
fqn: str
```

- *Type:* str

---

##### `friendly_unique_id`<sup>Required</sup> <a name="friendly_unique_id" id="@cdktn/provider-cloudflare.emailSendingSubdomain.EmailSendingSubdomain.property.friendlyUniqueId"></a>

```python
friendly_unique_id: str
```

- *Type:* str

---

##### `terraform_meta_arguments`<sup>Required</sup> <a name="terraform_meta_arguments" id="@cdktn/provider-cloudflare.emailSendingSubdomain.EmailSendingSubdomain.property.terraformMetaArguments"></a>

```python
terraform_meta_arguments: typing.Mapping[typing.Any]
```

- *Type:* typing.Mapping[typing.Any]

---

##### `terraform_resource_type`<sup>Required</sup> <a name="terraform_resource_type" id="@cdktn/provider-cloudflare.emailSendingSubdomain.EmailSendingSubdomain.property.terraformResourceType"></a>

```python
terraform_resource_type: str
```

- *Type:* str

---

##### `terraform_generator_metadata`<sup>Optional</sup> <a name="terraform_generator_metadata" id="@cdktn/provider-cloudflare.emailSendingSubdomain.EmailSendingSubdomain.property.terraformGeneratorMetadata"></a>

```python
terraform_generator_metadata: TerraformProviderGeneratorMetadata
```

- *Type:* cdktn.TerraformProviderGeneratorMetadata

---

##### `connection`<sup>Optional</sup> <a name="connection" id="@cdktn/provider-cloudflare.emailSendingSubdomain.EmailSendingSubdomain.property.connection"></a>

```python
connection: SSHProvisionerConnection | WinrmProvisionerConnection
```

- *Type:* cdktn.SSHProvisionerConnection | cdktn.WinrmProvisionerConnection

---

##### `count`<sup>Optional</sup> <a name="count" id="@cdktn/provider-cloudflare.emailSendingSubdomain.EmailSendingSubdomain.property.count"></a>

```python
count: typing.Union[int, float] | TerraformCount
```

- *Type:* typing.Union[int, float] | cdktn.TerraformCount

---

##### `depends_on`<sup>Optional</sup> <a name="depends_on" id="@cdktn/provider-cloudflare.emailSendingSubdomain.EmailSendingSubdomain.property.dependsOn"></a>

```python
depends_on: typing.List[str]
```

- *Type:* typing.List[str]

---

##### `for_each`<sup>Optional</sup> <a name="for_each" id="@cdktn/provider-cloudflare.emailSendingSubdomain.EmailSendingSubdomain.property.forEach"></a>

```python
for_each: ITerraformIterator
```

- *Type:* cdktn.ITerraformIterator

---

##### `lifecycle`<sup>Optional</sup> <a name="lifecycle" id="@cdktn/provider-cloudflare.emailSendingSubdomain.EmailSendingSubdomain.property.lifecycle"></a>

```python
lifecycle: TerraformResourceLifecycle
```

- *Type:* cdktn.TerraformResourceLifecycle

---

##### `provider`<sup>Optional</sup> <a name="provider" id="@cdktn/provider-cloudflare.emailSendingSubdomain.EmailSendingSubdomain.property.provider"></a>

```python
provider: TerraformProvider
```

- *Type:* cdktn.TerraformProvider

---

##### `provisioners`<sup>Optional</sup> <a name="provisioners" id="@cdktn/provider-cloudflare.emailSendingSubdomain.EmailSendingSubdomain.property.provisioners"></a>

```python
provisioners: typing.List[FileProvisioner | LocalExecProvisioner | RemoteExecProvisioner]
```

- *Type:* typing.List[cdktn.FileProvisioner | cdktn.LocalExecProvisioner | cdktn.RemoteExecProvisioner]

---

##### `created`<sup>Required</sup> <a name="created" id="@cdktn/provider-cloudflare.emailSendingSubdomain.EmailSendingSubdomain.property.created"></a>

```python
created: str
```

- *Type:* str

---

##### `dkim_selector`<sup>Required</sup> <a name="dkim_selector" id="@cdktn/provider-cloudflare.emailSendingSubdomain.EmailSendingSubdomain.property.dkimSelector"></a>

```python
dkim_selector: str
```

- *Type:* str

---

##### `enabled`<sup>Required</sup> <a name="enabled" id="@cdktn/provider-cloudflare.emailSendingSubdomain.EmailSendingSubdomain.property.enabled"></a>

```python
enabled: IResolvable
```

- *Type:* cdktn.IResolvable

---

##### `id`<sup>Required</sup> <a name="id" id="@cdktn/provider-cloudflare.emailSendingSubdomain.EmailSendingSubdomain.property.id"></a>

```python
id: str
```

- *Type:* str

---

##### `modified`<sup>Required</sup> <a name="modified" id="@cdktn/provider-cloudflare.emailSendingSubdomain.EmailSendingSubdomain.property.modified"></a>

```python
modified: str
```

- *Type:* str

---

##### `return_path_domain`<sup>Required</sup> <a name="return_path_domain" id="@cdktn/provider-cloudflare.emailSendingSubdomain.EmailSendingSubdomain.property.returnPathDomain"></a>

```python
return_path_domain: str
```

- *Type:* str

---

##### `tag`<sup>Required</sup> <a name="tag" id="@cdktn/provider-cloudflare.emailSendingSubdomain.EmailSendingSubdomain.property.tag"></a>

```python
tag: str
```

- *Type:* str

---

##### `drop_suppressed_recipients_input`<sup>Optional</sup> <a name="drop_suppressed_recipients_input" id="@cdktn/provider-cloudflare.emailSendingSubdomain.EmailSendingSubdomain.property.dropSuppressedRecipientsInput"></a>

```python
drop_suppressed_recipients_input: bool | IResolvable
```

- *Type:* bool | cdktn.IResolvable

---

##### `name_input`<sup>Optional</sup> <a name="name_input" id="@cdktn/provider-cloudflare.emailSendingSubdomain.EmailSendingSubdomain.property.nameInput"></a>

```python
name_input: str
```

- *Type:* str

---

##### `preview_enabled_input`<sup>Optional</sup> <a name="preview_enabled_input" id="@cdktn/provider-cloudflare.emailSendingSubdomain.EmailSendingSubdomain.property.previewEnabledInput"></a>

```python
preview_enabled_input: bool | IResolvable
```

- *Type:* bool | cdktn.IResolvable

---

##### `zone_id_input`<sup>Optional</sup> <a name="zone_id_input" id="@cdktn/provider-cloudflare.emailSendingSubdomain.EmailSendingSubdomain.property.zoneIdInput"></a>

```python
zone_id_input: str
```

- *Type:* str

---

##### `drop_suppressed_recipients`<sup>Required</sup> <a name="drop_suppressed_recipients" id="@cdktn/provider-cloudflare.emailSendingSubdomain.EmailSendingSubdomain.property.dropSuppressedRecipients"></a>

```python
drop_suppressed_recipients: bool | IResolvable
```

- *Type:* bool | cdktn.IResolvable

---

##### `name`<sup>Required</sup> <a name="name" id="@cdktn/provider-cloudflare.emailSendingSubdomain.EmailSendingSubdomain.property.name"></a>

```python
name: str
```

- *Type:* str

---

##### `preview_enabled`<sup>Required</sup> <a name="preview_enabled" id="@cdktn/provider-cloudflare.emailSendingSubdomain.EmailSendingSubdomain.property.previewEnabled"></a>

```python
preview_enabled: bool | IResolvable
```

- *Type:* bool | cdktn.IResolvable

---

##### `zone_id`<sup>Required</sup> <a name="zone_id" id="@cdktn/provider-cloudflare.emailSendingSubdomain.EmailSendingSubdomain.property.zoneId"></a>

```python
zone_id: str
```

- *Type:* str

---

#### Constants <a name="Constants" id="Constants"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-cloudflare.emailSendingSubdomain.EmailSendingSubdomain.property.tfResourceType">tfResourceType</a></code> | <code>str</code> | *No description.* |

---

##### `tfResourceType`<sup>Required</sup> <a name="tfResourceType" id="@cdktn/provider-cloudflare.emailSendingSubdomain.EmailSendingSubdomain.property.tfResourceType"></a>

```python
tfResourceType: str
```

- *Type:* str

---

## Structs <a name="Structs" id="Structs"></a>

### EmailSendingSubdomainConfig <a name="EmailSendingSubdomainConfig" id="@cdktn/provider-cloudflare.emailSendingSubdomain.EmailSendingSubdomainConfig"></a>

#### Initializer <a name="Initializer" id="@cdktn/provider-cloudflare.emailSendingSubdomain.EmailSendingSubdomainConfig.Initializer"></a>

```python
from cdktn_provider_cloudflare import email_sending_subdomain

emailSendingSubdomain.EmailSendingSubdomainConfig(
  connection: SSHProvisionerConnection | WinrmProvisionerConnection = None,
  count: typing.Union[int, float] | TerraformCount = None,
  depends_on: typing.List[ITerraformDependable] = None,
  for_each: ITerraformIterator = None,
  lifecycle: TerraformResourceLifecycle = None,
  provider: TerraformProvider = None,
  provisioners: typing.List[FileProvisioner | LocalExecProvisioner | RemoteExecProvisioner] = None,
  name: str,
  zone_id: str,
  drop_suppressed_recipients: bool | IResolvable = None,
  preview_enabled: bool | IResolvable = None
)
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-cloudflare.emailSendingSubdomain.EmailSendingSubdomainConfig.property.connection">connection</a></code> | <code>cdktn.SSHProvisionerConnection \| cdktn.WinrmProvisionerConnection</code> | *No description.* |
| <code><a href="#@cdktn/provider-cloudflare.emailSendingSubdomain.EmailSendingSubdomainConfig.property.count">count</a></code> | <code>typing.Union[int, float] \| cdktn.TerraformCount</code> | *No description.* |
| <code><a href="#@cdktn/provider-cloudflare.emailSendingSubdomain.EmailSendingSubdomainConfig.property.dependsOn">depends_on</a></code> | <code>typing.List[cdktn.ITerraformDependable]</code> | *No description.* |
| <code><a href="#@cdktn/provider-cloudflare.emailSendingSubdomain.EmailSendingSubdomainConfig.property.forEach">for_each</a></code> | <code>cdktn.ITerraformIterator</code> | *No description.* |
| <code><a href="#@cdktn/provider-cloudflare.emailSendingSubdomain.EmailSendingSubdomainConfig.property.lifecycle">lifecycle</a></code> | <code>cdktn.TerraformResourceLifecycle</code> | *No description.* |
| <code><a href="#@cdktn/provider-cloudflare.emailSendingSubdomain.EmailSendingSubdomainConfig.property.provider">provider</a></code> | <code>cdktn.TerraformProvider</code> | *No description.* |
| <code><a href="#@cdktn/provider-cloudflare.emailSendingSubdomain.EmailSendingSubdomainConfig.property.provisioners">provisioners</a></code> | <code>typing.List[cdktn.FileProvisioner \| cdktn.LocalExecProvisioner \| cdktn.RemoteExecProvisioner]</code> | *No description.* |
| <code><a href="#@cdktn/provider-cloudflare.emailSendingSubdomain.EmailSendingSubdomainConfig.property.name">name</a></code> | <code>str</code> | The domain name within the zone. |
| <code><a href="#@cdktn/provider-cloudflare.emailSendingSubdomain.EmailSendingSubdomainConfig.property.zoneId">zone_id</a></code> | <code>str</code> | Identifier. |
| <code><a href="#@cdktn/provider-cloudflare.emailSendingSubdomain.EmailSendingSubdomainConfig.property.dropSuppressedRecipients">drop_suppressed_recipients</a></code> | <code>bool \| cdktn.IResolvable</code> | Whether a send request that includes a recipient suppressed on this subdomain drops that recipient and still delivers to the rest, instead of failing the entire request. |
| <code><a href="#@cdktn/provider-cloudflare.emailSendingSubdomain.EmailSendingSubdomainConfig.property.previewEnabled">preview_enabled</a></code> | <code>bool \| cdktn.IResolvable</code> | Whether sent messages from this subdomain can be previewed in the activity log. |

---

##### `connection`<sup>Optional</sup> <a name="connection" id="@cdktn/provider-cloudflare.emailSendingSubdomain.EmailSendingSubdomainConfig.property.connection"></a>

```python
connection: SSHProvisionerConnection | WinrmProvisionerConnection
```

- *Type:* cdktn.SSHProvisionerConnection | cdktn.WinrmProvisionerConnection

---

##### `count`<sup>Optional</sup> <a name="count" id="@cdktn/provider-cloudflare.emailSendingSubdomain.EmailSendingSubdomainConfig.property.count"></a>

```python
count: typing.Union[int, float] | TerraformCount
```

- *Type:* typing.Union[int, float] | cdktn.TerraformCount

---

##### `depends_on`<sup>Optional</sup> <a name="depends_on" id="@cdktn/provider-cloudflare.emailSendingSubdomain.EmailSendingSubdomainConfig.property.dependsOn"></a>

```python
depends_on: typing.List[ITerraformDependable]
```

- *Type:* typing.List[cdktn.ITerraformDependable]

---

##### `for_each`<sup>Optional</sup> <a name="for_each" id="@cdktn/provider-cloudflare.emailSendingSubdomain.EmailSendingSubdomainConfig.property.forEach"></a>

```python
for_each: ITerraformIterator
```

- *Type:* cdktn.ITerraformIterator

---

##### `lifecycle`<sup>Optional</sup> <a name="lifecycle" id="@cdktn/provider-cloudflare.emailSendingSubdomain.EmailSendingSubdomainConfig.property.lifecycle"></a>

```python
lifecycle: TerraformResourceLifecycle
```

- *Type:* cdktn.TerraformResourceLifecycle

---

##### `provider`<sup>Optional</sup> <a name="provider" id="@cdktn/provider-cloudflare.emailSendingSubdomain.EmailSendingSubdomainConfig.property.provider"></a>

```python
provider: TerraformProvider
```

- *Type:* cdktn.TerraformProvider

---

##### `provisioners`<sup>Optional</sup> <a name="provisioners" id="@cdktn/provider-cloudflare.emailSendingSubdomain.EmailSendingSubdomainConfig.property.provisioners"></a>

```python
provisioners: typing.List[FileProvisioner | LocalExecProvisioner | RemoteExecProvisioner]
```

- *Type:* typing.List[cdktn.FileProvisioner | cdktn.LocalExecProvisioner | cdktn.RemoteExecProvisioner]

---

##### `name`<sup>Required</sup> <a name="name" id="@cdktn/provider-cloudflare.emailSendingSubdomain.EmailSendingSubdomainConfig.property.name"></a>

```python
name: str
```

- *Type:* str

The domain name within the zone.

A wildcard is allowed only as the complete leftmost label (`*.example.com`) and requires the account wildcard Email Sending entitlement.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/cloudflare/cloudflare/5.25.0/docs/resources/email_sending_subdomain#name EmailSendingSubdomain#name}

---

##### `zone_id`<sup>Required</sup> <a name="zone_id" id="@cdktn/provider-cloudflare.emailSendingSubdomain.EmailSendingSubdomainConfig.property.zoneId"></a>

```python
zone_id: str
```

- *Type:* str

Identifier.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/cloudflare/cloudflare/5.25.0/docs/resources/email_sending_subdomain#zone_id EmailSendingSubdomain#zone_id}

---

##### `drop_suppressed_recipients`<sup>Optional</sup> <a name="drop_suppressed_recipients" id="@cdktn/provider-cloudflare.emailSendingSubdomain.EmailSendingSubdomainConfig.property.dropSuppressedRecipients"></a>

```python
drop_suppressed_recipients: bool | IResolvable
```

- *Type:* bool | cdktn.IResolvable

Whether a send request that includes a recipient suppressed on this subdomain drops that recipient and still delivers to the rest, instead of failing the entire request.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/cloudflare/cloudflare/5.25.0/docs/resources/email_sending_subdomain#drop_suppressed_recipients EmailSendingSubdomain#drop_suppressed_recipients}

---

##### `preview_enabled`<sup>Optional</sup> <a name="preview_enabled" id="@cdktn/provider-cloudflare.emailSendingSubdomain.EmailSendingSubdomainConfig.property.previewEnabled"></a>

```python
preview_enabled: bool | IResolvable
```

- *Type:* bool | cdktn.IResolvable

Whether sent messages from this subdomain can be previewed in the activity log.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/cloudflare/cloudflare/5.25.0/docs/resources/email_sending_subdomain#preview_enabled EmailSendingSubdomain#preview_enabled}

---



