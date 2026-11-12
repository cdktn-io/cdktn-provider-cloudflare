# `zeroTrustCwsDomainAcl` Submodule <a name="`zeroTrustCwsDomainAcl` Submodule" id="@cdktn/provider-cloudflare.zeroTrustCwsDomainAcl"></a>

## Constructs <a name="Constructs" id="Constructs"></a>

### ZeroTrustCwsDomainAcl <a name="ZeroTrustCwsDomainAcl" id="@cdktn/provider-cloudflare.zeroTrustCwsDomainAcl.ZeroTrustCwsDomainAcl"></a>

Represents a {@link https://registry.terraform.io/providers/cloudflare/cloudflare/5.29.0/docs/resources/zero_trust_cws_domain_acl cloudflare_zero_trust_cws_domain_acl}.

#### Initializers <a name="Initializers" id="@cdktn/provider-cloudflare.zeroTrustCwsDomainAcl.ZeroTrustCwsDomainAcl.Initializer"></a>

```python
from cdktn_provider_cloudflare import zero_trust_cws_domain_acl

zeroTrustCwsDomainAcl.ZeroTrustCwsDomainAcl(
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
  default_action: str,
  entries: IResolvable | typing.List[ZeroTrustCwsDomainAclEntries],
  name: str
)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-cloudflare.zeroTrustCwsDomainAcl.ZeroTrustCwsDomainAcl.Initializer.parameter.scope">scope</a></code> | <code>constructs.Construct</code> | The scope in which to define this construct. |
| <code><a href="#@cdktn/provider-cloudflare.zeroTrustCwsDomainAcl.ZeroTrustCwsDomainAcl.Initializer.parameter.id">id</a></code> | <code>str</code> | The scoped construct ID. |
| <code><a href="#@cdktn/provider-cloudflare.zeroTrustCwsDomainAcl.ZeroTrustCwsDomainAcl.Initializer.parameter.connection">connection</a></code> | <code>cdktn.SSHProvisionerConnection \| cdktn.WinrmProvisionerConnection</code> | *No description.* |
| <code><a href="#@cdktn/provider-cloudflare.zeroTrustCwsDomainAcl.ZeroTrustCwsDomainAcl.Initializer.parameter.count">count</a></code> | <code>typing.Union[int, float] \| cdktn.TerraformCount</code> | *No description.* |
| <code><a href="#@cdktn/provider-cloudflare.zeroTrustCwsDomainAcl.ZeroTrustCwsDomainAcl.Initializer.parameter.dependsOn">depends_on</a></code> | <code>typing.List[cdktn.ITerraformDependable]</code> | *No description.* |
| <code><a href="#@cdktn/provider-cloudflare.zeroTrustCwsDomainAcl.ZeroTrustCwsDomainAcl.Initializer.parameter.forEach">for_each</a></code> | <code>cdktn.ITerraformIterator</code> | *No description.* |
| <code><a href="#@cdktn/provider-cloudflare.zeroTrustCwsDomainAcl.ZeroTrustCwsDomainAcl.Initializer.parameter.lifecycle">lifecycle</a></code> | <code>cdktn.TerraformResourceLifecycle</code> | *No description.* |
| <code><a href="#@cdktn/provider-cloudflare.zeroTrustCwsDomainAcl.ZeroTrustCwsDomainAcl.Initializer.parameter.provider">provider</a></code> | <code>cdktn.TerraformProvider</code> | *No description.* |
| <code><a href="#@cdktn/provider-cloudflare.zeroTrustCwsDomainAcl.ZeroTrustCwsDomainAcl.Initializer.parameter.provisioners">provisioners</a></code> | <code>typing.List[cdktn.FileProvisioner \| cdktn.LocalExecProvisioner \| cdktn.RemoteExecProvisioner]</code> | *No description.* |
| <code><a href="#@cdktn/provider-cloudflare.zeroTrustCwsDomainAcl.ZeroTrustCwsDomainAcl.Initializer.parameter.accountId">account_id</a></code> | <code>str</code> | Cloudflare account ID (32-character hexadecimal string). |
| <code><a href="#@cdktn/provider-cloudflare.zeroTrustCwsDomainAcl.ZeroTrustCwsDomainAcl.Initializer.parameter.defaultAction">default_action</a></code> | <code>str</code> | Default action when no entry matches Available values: "ALLOW", "BLOCK". |
| <code><a href="#@cdktn/provider-cloudflare.zeroTrustCwsDomainAcl.ZeroTrustCwsDomainAcl.Initializer.parameter.entries">entries</a></code> | <code>cdktn.IResolvable \| typing.List[<a href="#@cdktn/provider-cloudflare.zeroTrustCwsDomainAcl.ZeroTrustCwsDomainAclEntries">ZeroTrustCwsDomainAclEntries</a>]</code> | Domain entries for this ACL. Each domain must appear at most once. |
| <code><a href="#@cdktn/provider-cloudflare.zeroTrustCwsDomainAcl.ZeroTrustCwsDomainAcl.Initializer.parameter.name">name</a></code> | <code>str</code> | Name of the domain ACL. |

---

##### `scope`<sup>Required</sup> <a name="scope" id="@cdktn/provider-cloudflare.zeroTrustCwsDomainAcl.ZeroTrustCwsDomainAcl.Initializer.parameter.scope"></a>

- *Type:* constructs.Construct

The scope in which to define this construct.

---

##### `id`<sup>Required</sup> <a name="id" id="@cdktn/provider-cloudflare.zeroTrustCwsDomainAcl.ZeroTrustCwsDomainAcl.Initializer.parameter.id"></a>

- *Type:* str

The scoped construct ID.

Must be unique amongst siblings in the same scope

---

##### `connection`<sup>Optional</sup> <a name="connection" id="@cdktn/provider-cloudflare.zeroTrustCwsDomainAcl.ZeroTrustCwsDomainAcl.Initializer.parameter.connection"></a>

- *Type:* cdktn.SSHProvisionerConnection | cdktn.WinrmProvisionerConnection

---

##### `count`<sup>Optional</sup> <a name="count" id="@cdktn/provider-cloudflare.zeroTrustCwsDomainAcl.ZeroTrustCwsDomainAcl.Initializer.parameter.count"></a>

- *Type:* typing.Union[int, float] | cdktn.TerraformCount

---

##### `depends_on`<sup>Optional</sup> <a name="depends_on" id="@cdktn/provider-cloudflare.zeroTrustCwsDomainAcl.ZeroTrustCwsDomainAcl.Initializer.parameter.dependsOn"></a>

- *Type:* typing.List[cdktn.ITerraformDependable]

---

##### `for_each`<sup>Optional</sup> <a name="for_each" id="@cdktn/provider-cloudflare.zeroTrustCwsDomainAcl.ZeroTrustCwsDomainAcl.Initializer.parameter.forEach"></a>

- *Type:* cdktn.ITerraformIterator

---

##### `lifecycle`<sup>Optional</sup> <a name="lifecycle" id="@cdktn/provider-cloudflare.zeroTrustCwsDomainAcl.ZeroTrustCwsDomainAcl.Initializer.parameter.lifecycle"></a>

- *Type:* cdktn.TerraformResourceLifecycle

---

##### `provider`<sup>Optional</sup> <a name="provider" id="@cdktn/provider-cloudflare.zeroTrustCwsDomainAcl.ZeroTrustCwsDomainAcl.Initializer.parameter.provider"></a>

- *Type:* cdktn.TerraformProvider

---

##### `provisioners`<sup>Optional</sup> <a name="provisioners" id="@cdktn/provider-cloudflare.zeroTrustCwsDomainAcl.ZeroTrustCwsDomainAcl.Initializer.parameter.provisioners"></a>

- *Type:* typing.List[cdktn.FileProvisioner | cdktn.LocalExecProvisioner | cdktn.RemoteExecProvisioner]

---

##### `account_id`<sup>Required</sup> <a name="account_id" id="@cdktn/provider-cloudflare.zeroTrustCwsDomainAcl.ZeroTrustCwsDomainAcl.Initializer.parameter.accountId"></a>

- *Type:* str

Cloudflare account ID (32-character hexadecimal string).

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/cloudflare/cloudflare/5.29.0/docs/resources/zero_trust_cws_domain_acl#account_id ZeroTrustCwsDomainAcl#account_id}

---

##### `default_action`<sup>Required</sup> <a name="default_action" id="@cdktn/provider-cloudflare.zeroTrustCwsDomainAcl.ZeroTrustCwsDomainAcl.Initializer.parameter.defaultAction"></a>

- *Type:* str

Default action when no entry matches Available values: "ALLOW", "BLOCK".

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/cloudflare/cloudflare/5.29.0/docs/resources/zero_trust_cws_domain_acl#default_action ZeroTrustCwsDomainAcl#default_action}

---

##### `entries`<sup>Required</sup> <a name="entries" id="@cdktn/provider-cloudflare.zeroTrustCwsDomainAcl.ZeroTrustCwsDomainAcl.Initializer.parameter.entries"></a>

- *Type:* cdktn.IResolvable | typing.List[<a href="#@cdktn/provider-cloudflare.zeroTrustCwsDomainAcl.ZeroTrustCwsDomainAclEntries">ZeroTrustCwsDomainAclEntries</a>]

Domain entries for this ACL. Each domain must appear at most once.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/cloudflare/cloudflare/5.29.0/docs/resources/zero_trust_cws_domain_acl#entries ZeroTrustCwsDomainAcl#entries}

---

##### `name`<sup>Required</sup> <a name="name" id="@cdktn/provider-cloudflare.zeroTrustCwsDomainAcl.ZeroTrustCwsDomainAcl.Initializer.parameter.name"></a>

- *Type:* str

Name of the domain ACL.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/cloudflare/cloudflare/5.29.0/docs/resources/zero_trust_cws_domain_acl#name ZeroTrustCwsDomainAcl#name}

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-cloudflare.zeroTrustCwsDomainAcl.ZeroTrustCwsDomainAcl.toString">to_string</a></code> | Returns a string representation of this construct. |
| <code><a href="#@cdktn/provider-cloudflare.zeroTrustCwsDomainAcl.ZeroTrustCwsDomainAcl.with">with</a></code> | Applies one or more mixins to this construct. |
| <code><a href="#@cdktn/provider-cloudflare.zeroTrustCwsDomainAcl.ZeroTrustCwsDomainAcl.addOverride">add_override</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-cloudflare.zeroTrustCwsDomainAcl.ZeroTrustCwsDomainAcl.overrideLogicalId">override_logical_id</a></code> | Overrides the auto-generated logical ID with a specific ID. |
| <code><a href="#@cdktn/provider-cloudflare.zeroTrustCwsDomainAcl.ZeroTrustCwsDomainAcl.resetOverrideLogicalId">reset_override_logical_id</a></code> | Resets a previously passed logical Id to use the auto-generated logical id again. |
| <code><a href="#@cdktn/provider-cloudflare.zeroTrustCwsDomainAcl.ZeroTrustCwsDomainAcl.toHclTerraform">to_hcl_terraform</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-cloudflare.zeroTrustCwsDomainAcl.ZeroTrustCwsDomainAcl.toMetadata">to_metadata</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-cloudflare.zeroTrustCwsDomainAcl.ZeroTrustCwsDomainAcl.toTerraform">to_terraform</a></code> | Adds this resource to the terraform JSON output. |
| <code><a href="#@cdktn/provider-cloudflare.zeroTrustCwsDomainAcl.ZeroTrustCwsDomainAcl.addMoveTarget">add_move_target</a></code> | Adds a user defined moveTarget string to this resource to be later used in .moveTo(moveTarget) to resolve the location of the move. |
| <code><a href="#@cdktn/provider-cloudflare.zeroTrustCwsDomainAcl.ZeroTrustCwsDomainAcl.getAnyMapAttribute">get_any_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-cloudflare.zeroTrustCwsDomainAcl.ZeroTrustCwsDomainAcl.getBooleanAttribute">get_boolean_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-cloudflare.zeroTrustCwsDomainAcl.ZeroTrustCwsDomainAcl.getBooleanMapAttribute">get_boolean_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-cloudflare.zeroTrustCwsDomainAcl.ZeroTrustCwsDomainAcl.getListAttribute">get_list_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-cloudflare.zeroTrustCwsDomainAcl.ZeroTrustCwsDomainAcl.getNumberAttribute">get_number_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-cloudflare.zeroTrustCwsDomainAcl.ZeroTrustCwsDomainAcl.getNumberListAttribute">get_number_list_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-cloudflare.zeroTrustCwsDomainAcl.ZeroTrustCwsDomainAcl.getNumberMapAttribute">get_number_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-cloudflare.zeroTrustCwsDomainAcl.ZeroTrustCwsDomainAcl.getStringAttribute">get_string_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-cloudflare.zeroTrustCwsDomainAcl.ZeroTrustCwsDomainAcl.getStringMapAttribute">get_string_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-cloudflare.zeroTrustCwsDomainAcl.ZeroTrustCwsDomainAcl.hasResourceMove">has_resource_move</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-cloudflare.zeroTrustCwsDomainAcl.ZeroTrustCwsDomainAcl.importFrom">import_from</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-cloudflare.zeroTrustCwsDomainAcl.ZeroTrustCwsDomainAcl.interpolationForAttribute">interpolation_for_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-cloudflare.zeroTrustCwsDomainAcl.ZeroTrustCwsDomainAcl.moveFromId">move_from_id</a></code> | Move the resource corresponding to "id" to this resource. |
| <code><a href="#@cdktn/provider-cloudflare.zeroTrustCwsDomainAcl.ZeroTrustCwsDomainAcl.moveTo">move_to</a></code> | Moves this resource to the target resource given by moveTarget. |
| <code><a href="#@cdktn/provider-cloudflare.zeroTrustCwsDomainAcl.ZeroTrustCwsDomainAcl.moveToId">move_to_id</a></code> | Moves this resource to the resource corresponding to "id". |
| <code><a href="#@cdktn/provider-cloudflare.zeroTrustCwsDomainAcl.ZeroTrustCwsDomainAcl.putEntries">put_entries</a></code> | *No description.* |

---

##### `to_string` <a name="to_string" id="@cdktn/provider-cloudflare.zeroTrustCwsDomainAcl.ZeroTrustCwsDomainAcl.toString"></a>

```python
def to_string() -> str
```

Returns a string representation of this construct.

##### `with` <a name="with" id="@cdktn/provider-cloudflare.zeroTrustCwsDomainAcl.ZeroTrustCwsDomainAcl.with"></a>

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

###### `mixins`<sup>Required</sup> <a name="mixins" id="@cdktn/provider-cloudflare.zeroTrustCwsDomainAcl.ZeroTrustCwsDomainAcl.with.parameter.mixins"></a>

- *Type:* *constructs.IMixin

The mixins to apply.

---

##### `add_override` <a name="add_override" id="@cdktn/provider-cloudflare.zeroTrustCwsDomainAcl.ZeroTrustCwsDomainAcl.addOverride"></a>

```python
def add_override(
  path: str,
  value: typing.Any
) -> None
```

###### `path`<sup>Required</sup> <a name="path" id="@cdktn/provider-cloudflare.zeroTrustCwsDomainAcl.ZeroTrustCwsDomainAcl.addOverride.parameter.path"></a>

- *Type:* str

---

###### `value`<sup>Required</sup> <a name="value" id="@cdktn/provider-cloudflare.zeroTrustCwsDomainAcl.ZeroTrustCwsDomainAcl.addOverride.parameter.value"></a>

- *Type:* typing.Any

---

##### `override_logical_id` <a name="override_logical_id" id="@cdktn/provider-cloudflare.zeroTrustCwsDomainAcl.ZeroTrustCwsDomainAcl.overrideLogicalId"></a>

```python
def override_logical_id(
  new_logical_id: str
) -> None
```

Overrides the auto-generated logical ID with a specific ID.

###### `new_logical_id`<sup>Required</sup> <a name="new_logical_id" id="@cdktn/provider-cloudflare.zeroTrustCwsDomainAcl.ZeroTrustCwsDomainAcl.overrideLogicalId.parameter.newLogicalId"></a>

- *Type:* str

The new logical ID to use for this stack element.

---

##### `reset_override_logical_id` <a name="reset_override_logical_id" id="@cdktn/provider-cloudflare.zeroTrustCwsDomainAcl.ZeroTrustCwsDomainAcl.resetOverrideLogicalId"></a>

```python
def reset_override_logical_id() -> None
```

Resets a previously passed logical Id to use the auto-generated logical id again.

##### `to_hcl_terraform` <a name="to_hcl_terraform" id="@cdktn/provider-cloudflare.zeroTrustCwsDomainAcl.ZeroTrustCwsDomainAcl.toHclTerraform"></a>

```python
def to_hcl_terraform() -> typing.Any
```

##### `to_metadata` <a name="to_metadata" id="@cdktn/provider-cloudflare.zeroTrustCwsDomainAcl.ZeroTrustCwsDomainAcl.toMetadata"></a>

```python
def to_metadata() -> typing.Any
```

##### `to_terraform` <a name="to_terraform" id="@cdktn/provider-cloudflare.zeroTrustCwsDomainAcl.ZeroTrustCwsDomainAcl.toTerraform"></a>

```python
def to_terraform() -> typing.Any
```

Adds this resource to the terraform JSON output.

##### `add_move_target` <a name="add_move_target" id="@cdktn/provider-cloudflare.zeroTrustCwsDomainAcl.ZeroTrustCwsDomainAcl.addMoveTarget"></a>

```python
def add_move_target(
  move_target: str
) -> None
```

Adds a user defined moveTarget string to this resource to be later used in .moveTo(moveTarget) to resolve the location of the move.

###### `move_target`<sup>Required</sup> <a name="move_target" id="@cdktn/provider-cloudflare.zeroTrustCwsDomainAcl.ZeroTrustCwsDomainAcl.addMoveTarget.parameter.moveTarget"></a>

- *Type:* str

The string move target that will correspond to this resource.

---

##### `get_any_map_attribute` <a name="get_any_map_attribute" id="@cdktn/provider-cloudflare.zeroTrustCwsDomainAcl.ZeroTrustCwsDomainAcl.getAnyMapAttribute"></a>

```python
def get_any_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[typing.Any]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-cloudflare.zeroTrustCwsDomainAcl.ZeroTrustCwsDomainAcl.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_boolean_attribute` <a name="get_boolean_attribute" id="@cdktn/provider-cloudflare.zeroTrustCwsDomainAcl.ZeroTrustCwsDomainAcl.getBooleanAttribute"></a>

```python
def get_boolean_attribute(
  terraform_attribute: str
) -> IResolvable
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-cloudflare.zeroTrustCwsDomainAcl.ZeroTrustCwsDomainAcl.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_boolean_map_attribute` <a name="get_boolean_map_attribute" id="@cdktn/provider-cloudflare.zeroTrustCwsDomainAcl.ZeroTrustCwsDomainAcl.getBooleanMapAttribute"></a>

```python
def get_boolean_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[bool]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-cloudflare.zeroTrustCwsDomainAcl.ZeroTrustCwsDomainAcl.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_list_attribute` <a name="get_list_attribute" id="@cdktn/provider-cloudflare.zeroTrustCwsDomainAcl.ZeroTrustCwsDomainAcl.getListAttribute"></a>

```python
def get_list_attribute(
  terraform_attribute: str
) -> typing.List[str]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-cloudflare.zeroTrustCwsDomainAcl.ZeroTrustCwsDomainAcl.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_attribute` <a name="get_number_attribute" id="@cdktn/provider-cloudflare.zeroTrustCwsDomainAcl.ZeroTrustCwsDomainAcl.getNumberAttribute"></a>

```python
def get_number_attribute(
  terraform_attribute: str
) -> typing.Union[int, float]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-cloudflare.zeroTrustCwsDomainAcl.ZeroTrustCwsDomainAcl.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_list_attribute` <a name="get_number_list_attribute" id="@cdktn/provider-cloudflare.zeroTrustCwsDomainAcl.ZeroTrustCwsDomainAcl.getNumberListAttribute"></a>

```python
def get_number_list_attribute(
  terraform_attribute: str
) -> typing.List[typing.Union[int, float]]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-cloudflare.zeroTrustCwsDomainAcl.ZeroTrustCwsDomainAcl.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_map_attribute` <a name="get_number_map_attribute" id="@cdktn/provider-cloudflare.zeroTrustCwsDomainAcl.ZeroTrustCwsDomainAcl.getNumberMapAttribute"></a>

```python
def get_number_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[typing.Union[int, float]]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-cloudflare.zeroTrustCwsDomainAcl.ZeroTrustCwsDomainAcl.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_string_attribute` <a name="get_string_attribute" id="@cdktn/provider-cloudflare.zeroTrustCwsDomainAcl.ZeroTrustCwsDomainAcl.getStringAttribute"></a>

```python
def get_string_attribute(
  terraform_attribute: str
) -> str
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-cloudflare.zeroTrustCwsDomainAcl.ZeroTrustCwsDomainAcl.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_string_map_attribute` <a name="get_string_map_attribute" id="@cdktn/provider-cloudflare.zeroTrustCwsDomainAcl.ZeroTrustCwsDomainAcl.getStringMapAttribute"></a>

```python
def get_string_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[str]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-cloudflare.zeroTrustCwsDomainAcl.ZeroTrustCwsDomainAcl.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `has_resource_move` <a name="has_resource_move" id="@cdktn/provider-cloudflare.zeroTrustCwsDomainAcl.ZeroTrustCwsDomainAcl.hasResourceMove"></a>

```python
def has_resource_move() -> TerraformResourceMoveByTarget | TerraformResourceMoveById
```

##### `import_from` <a name="import_from" id="@cdktn/provider-cloudflare.zeroTrustCwsDomainAcl.ZeroTrustCwsDomainAcl.importFrom"></a>

```python
def import_from(
  id: str,
  provider: TerraformProvider = None
) -> None
```

###### `id`<sup>Required</sup> <a name="id" id="@cdktn/provider-cloudflare.zeroTrustCwsDomainAcl.ZeroTrustCwsDomainAcl.importFrom.parameter.id"></a>

- *Type:* str

---

###### `provider`<sup>Optional</sup> <a name="provider" id="@cdktn/provider-cloudflare.zeroTrustCwsDomainAcl.ZeroTrustCwsDomainAcl.importFrom.parameter.provider"></a>

- *Type:* cdktn.TerraformProvider

---

##### `interpolation_for_attribute` <a name="interpolation_for_attribute" id="@cdktn/provider-cloudflare.zeroTrustCwsDomainAcl.ZeroTrustCwsDomainAcl.interpolationForAttribute"></a>

```python
def interpolation_for_attribute(
  terraform_attribute: str
) -> IResolvable
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-cloudflare.zeroTrustCwsDomainAcl.ZeroTrustCwsDomainAcl.interpolationForAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `move_from_id` <a name="move_from_id" id="@cdktn/provider-cloudflare.zeroTrustCwsDomainAcl.ZeroTrustCwsDomainAcl.moveFromId"></a>

```python
def move_from_id(
  id: str
) -> None
```

Move the resource corresponding to "id" to this resource.

Note that the resource being moved from must be marked as moved using its instance function.

###### `id`<sup>Required</sup> <a name="id" id="@cdktn/provider-cloudflare.zeroTrustCwsDomainAcl.ZeroTrustCwsDomainAcl.moveFromId.parameter.id"></a>

- *Type:* str

Full id of resource being moved from, e.g. "aws_s3_bucket.example".

---

##### `move_to` <a name="move_to" id="@cdktn/provider-cloudflare.zeroTrustCwsDomainAcl.ZeroTrustCwsDomainAcl.moveTo"></a>

```python
def move_to(
  move_target: str,
  index: str | typing.Union[int, float] = None
) -> None
```

Moves this resource to the target resource given by moveTarget.

###### `move_target`<sup>Required</sup> <a name="move_target" id="@cdktn/provider-cloudflare.zeroTrustCwsDomainAcl.ZeroTrustCwsDomainAcl.moveTo.parameter.moveTarget"></a>

- *Type:* str

The previously set user defined string set by .addMoveTarget() corresponding to the resource to move to.

---

###### `index`<sup>Optional</sup> <a name="index" id="@cdktn/provider-cloudflare.zeroTrustCwsDomainAcl.ZeroTrustCwsDomainAcl.moveTo.parameter.index"></a>

- *Type:* str | typing.Union[int, float]

Optional The index corresponding to the key the resource is to appear in the foreach of a resource to move to.

---

##### `move_to_id` <a name="move_to_id" id="@cdktn/provider-cloudflare.zeroTrustCwsDomainAcl.ZeroTrustCwsDomainAcl.moveToId"></a>

```python
def move_to_id(
  id: str
) -> None
```

Moves this resource to the resource corresponding to "id".

###### `id`<sup>Required</sup> <a name="id" id="@cdktn/provider-cloudflare.zeroTrustCwsDomainAcl.ZeroTrustCwsDomainAcl.moveToId.parameter.id"></a>

- *Type:* str

Full id of resource to move to, e.g. "aws_s3_bucket.example".

---

##### `put_entries` <a name="put_entries" id="@cdktn/provider-cloudflare.zeroTrustCwsDomainAcl.ZeroTrustCwsDomainAcl.putEntries"></a>

```python
def put_entries(
  value: IResolvable | typing.List[ZeroTrustCwsDomainAclEntries]
) -> None
```

###### `value`<sup>Required</sup> <a name="value" id="@cdktn/provider-cloudflare.zeroTrustCwsDomainAcl.ZeroTrustCwsDomainAcl.putEntries.parameter.value"></a>

- *Type:* cdktn.IResolvable | typing.List[<a href="#@cdktn/provider-cloudflare.zeroTrustCwsDomainAcl.ZeroTrustCwsDomainAclEntries">ZeroTrustCwsDomainAclEntries</a>]

---

#### Static Functions <a name="Static Functions" id="Static Functions"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-cloudflare.zeroTrustCwsDomainAcl.ZeroTrustCwsDomainAcl.isConstruct">is_construct</a></code> | Checks if `x` is a construct. |
| <code><a href="#@cdktn/provider-cloudflare.zeroTrustCwsDomainAcl.ZeroTrustCwsDomainAcl.isTerraformElement">is_terraform_element</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-cloudflare.zeroTrustCwsDomainAcl.ZeroTrustCwsDomainAcl.isTerraformResource">is_terraform_resource</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-cloudflare.zeroTrustCwsDomainAcl.ZeroTrustCwsDomainAcl.generateConfigForImport">generate_config_for_import</a></code> | Generates CDKTN code for importing a ZeroTrustCwsDomainAcl resource upon running "cdktn plan <stack-name>". |

---

##### `is_construct` <a name="is_construct" id="@cdktn/provider-cloudflare.zeroTrustCwsDomainAcl.ZeroTrustCwsDomainAcl.isConstruct"></a>

```python
from cdktn_provider_cloudflare import zero_trust_cws_domain_acl

zeroTrustCwsDomainAcl.ZeroTrustCwsDomainAcl.is_construct(
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

###### `x`<sup>Required</sup> <a name="x" id="@cdktn/provider-cloudflare.zeroTrustCwsDomainAcl.ZeroTrustCwsDomainAcl.isConstruct.parameter.x"></a>

- *Type:* typing.Any

Any object.

---

##### `is_terraform_element` <a name="is_terraform_element" id="@cdktn/provider-cloudflare.zeroTrustCwsDomainAcl.ZeroTrustCwsDomainAcl.isTerraformElement"></a>

```python
from cdktn_provider_cloudflare import zero_trust_cws_domain_acl

zeroTrustCwsDomainAcl.ZeroTrustCwsDomainAcl.is_terraform_element(
  x: typing.Any
)
```

###### `x`<sup>Required</sup> <a name="x" id="@cdktn/provider-cloudflare.zeroTrustCwsDomainAcl.ZeroTrustCwsDomainAcl.isTerraformElement.parameter.x"></a>

- *Type:* typing.Any

---

##### `is_terraform_resource` <a name="is_terraform_resource" id="@cdktn/provider-cloudflare.zeroTrustCwsDomainAcl.ZeroTrustCwsDomainAcl.isTerraformResource"></a>

```python
from cdktn_provider_cloudflare import zero_trust_cws_domain_acl

zeroTrustCwsDomainAcl.ZeroTrustCwsDomainAcl.is_terraform_resource(
  x: typing.Any
)
```

###### `x`<sup>Required</sup> <a name="x" id="@cdktn/provider-cloudflare.zeroTrustCwsDomainAcl.ZeroTrustCwsDomainAcl.isTerraformResource.parameter.x"></a>

- *Type:* typing.Any

---

##### `generate_config_for_import` <a name="generate_config_for_import" id="@cdktn/provider-cloudflare.zeroTrustCwsDomainAcl.ZeroTrustCwsDomainAcl.generateConfigForImport"></a>

```python
from cdktn_provider_cloudflare import zero_trust_cws_domain_acl

zeroTrustCwsDomainAcl.ZeroTrustCwsDomainAcl.generate_config_for_import(
  scope: Construct,
  import_to_id: str,
  import_from_id: str,
  provider: TerraformProvider = None
)
```

Generates CDKTN code for importing a ZeroTrustCwsDomainAcl resource upon running "cdktn plan <stack-name>".

###### `scope`<sup>Required</sup> <a name="scope" id="@cdktn/provider-cloudflare.zeroTrustCwsDomainAcl.ZeroTrustCwsDomainAcl.generateConfigForImport.parameter.scope"></a>

- *Type:* constructs.Construct

The scope in which to define this construct.

---

###### `import_to_id`<sup>Required</sup> <a name="import_to_id" id="@cdktn/provider-cloudflare.zeroTrustCwsDomainAcl.ZeroTrustCwsDomainAcl.generateConfigForImport.parameter.importToId"></a>

- *Type:* str

The construct id used in the generated config for the ZeroTrustCwsDomainAcl to import.

---

###### `import_from_id`<sup>Required</sup> <a name="import_from_id" id="@cdktn/provider-cloudflare.zeroTrustCwsDomainAcl.ZeroTrustCwsDomainAcl.generateConfigForImport.parameter.importFromId"></a>

- *Type:* str

The id of the existing ZeroTrustCwsDomainAcl that should be imported.

Refer to the {@link https://registry.terraform.io/providers/cloudflare/cloudflare/5.29.0/docs/resources/zero_trust_cws_domain_acl#import import section} in the documentation of this resource for the id to use

---

###### `provider`<sup>Optional</sup> <a name="provider" id="@cdktn/provider-cloudflare.zeroTrustCwsDomainAcl.ZeroTrustCwsDomainAcl.generateConfigForImport.parameter.provider"></a>

- *Type:* cdktn.TerraformProvider

? Optional instance of the provider where the ZeroTrustCwsDomainAcl to import is found.

---

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-cloudflare.zeroTrustCwsDomainAcl.ZeroTrustCwsDomainAcl.property.node">node</a></code> | <code>constructs.Node</code> | The tree node. |
| <code><a href="#@cdktn/provider-cloudflare.zeroTrustCwsDomainAcl.ZeroTrustCwsDomainAcl.property.cdktfStack">cdktf_stack</a></code> | <code>cdktn.TerraformStack</code> | *No description.* |
| <code><a href="#@cdktn/provider-cloudflare.zeroTrustCwsDomainAcl.ZeroTrustCwsDomainAcl.property.fqn">fqn</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktn/provider-cloudflare.zeroTrustCwsDomainAcl.ZeroTrustCwsDomainAcl.property.friendlyUniqueId">friendly_unique_id</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktn/provider-cloudflare.zeroTrustCwsDomainAcl.ZeroTrustCwsDomainAcl.property.terraformMetaArguments">terraform_meta_arguments</a></code> | <code>typing.Mapping[typing.Any]</code> | *No description.* |
| <code><a href="#@cdktn/provider-cloudflare.zeroTrustCwsDomainAcl.ZeroTrustCwsDomainAcl.property.terraformResourceType">terraform_resource_type</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktn/provider-cloudflare.zeroTrustCwsDomainAcl.ZeroTrustCwsDomainAcl.property.terraformGeneratorMetadata">terraform_generator_metadata</a></code> | <code>cdktn.TerraformProviderGeneratorMetadata</code> | *No description.* |
| <code><a href="#@cdktn/provider-cloudflare.zeroTrustCwsDomainAcl.ZeroTrustCwsDomainAcl.property.connection">connection</a></code> | <code>cdktn.SSHProvisionerConnection \| cdktn.WinrmProvisionerConnection</code> | *No description.* |
| <code><a href="#@cdktn/provider-cloudflare.zeroTrustCwsDomainAcl.ZeroTrustCwsDomainAcl.property.count">count</a></code> | <code>typing.Union[int, float] \| cdktn.TerraformCount</code> | *No description.* |
| <code><a href="#@cdktn/provider-cloudflare.zeroTrustCwsDomainAcl.ZeroTrustCwsDomainAcl.property.dependsOn">depends_on</a></code> | <code>typing.List[str]</code> | *No description.* |
| <code><a href="#@cdktn/provider-cloudflare.zeroTrustCwsDomainAcl.ZeroTrustCwsDomainAcl.property.forEach">for_each</a></code> | <code>cdktn.ITerraformIterator</code> | *No description.* |
| <code><a href="#@cdktn/provider-cloudflare.zeroTrustCwsDomainAcl.ZeroTrustCwsDomainAcl.property.lifecycle">lifecycle</a></code> | <code>cdktn.TerraformResourceLifecycle</code> | *No description.* |
| <code><a href="#@cdktn/provider-cloudflare.zeroTrustCwsDomainAcl.ZeroTrustCwsDomainAcl.property.provider">provider</a></code> | <code>cdktn.TerraformProvider</code> | *No description.* |
| <code><a href="#@cdktn/provider-cloudflare.zeroTrustCwsDomainAcl.ZeroTrustCwsDomainAcl.property.provisioners">provisioners</a></code> | <code>typing.List[cdktn.FileProvisioner \| cdktn.LocalExecProvisioner \| cdktn.RemoteExecProvisioner]</code> | *No description.* |
| <code><a href="#@cdktn/provider-cloudflare.zeroTrustCwsDomainAcl.ZeroTrustCwsDomainAcl.property.createdAt">created_at</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktn/provider-cloudflare.zeroTrustCwsDomainAcl.ZeroTrustCwsDomainAcl.property.entries">entries</a></code> | <code><a href="#@cdktn/provider-cloudflare.zeroTrustCwsDomainAcl.ZeroTrustCwsDomainAclEntriesList">ZeroTrustCwsDomainAclEntriesList</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-cloudflare.zeroTrustCwsDomainAcl.ZeroTrustCwsDomainAcl.property.id">id</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktn/provider-cloudflare.zeroTrustCwsDomainAcl.ZeroTrustCwsDomainAcl.property.updatedAt">updated_at</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktn/provider-cloudflare.zeroTrustCwsDomainAcl.ZeroTrustCwsDomainAcl.property.accountIdInput">account_id_input</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktn/provider-cloudflare.zeroTrustCwsDomainAcl.ZeroTrustCwsDomainAcl.property.defaultActionInput">default_action_input</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktn/provider-cloudflare.zeroTrustCwsDomainAcl.ZeroTrustCwsDomainAcl.property.entriesInput">entries_input</a></code> | <code>cdktn.IResolvable \| typing.List[<a href="#@cdktn/provider-cloudflare.zeroTrustCwsDomainAcl.ZeroTrustCwsDomainAclEntries">ZeroTrustCwsDomainAclEntries</a>]</code> | *No description.* |
| <code><a href="#@cdktn/provider-cloudflare.zeroTrustCwsDomainAcl.ZeroTrustCwsDomainAcl.property.nameInput">name_input</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktn/provider-cloudflare.zeroTrustCwsDomainAcl.ZeroTrustCwsDomainAcl.property.accountId">account_id</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktn/provider-cloudflare.zeroTrustCwsDomainAcl.ZeroTrustCwsDomainAcl.property.defaultAction">default_action</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktn/provider-cloudflare.zeroTrustCwsDomainAcl.ZeroTrustCwsDomainAcl.property.name">name</a></code> | <code>str</code> | *No description.* |

---

##### `node`<sup>Required</sup> <a name="node" id="@cdktn/provider-cloudflare.zeroTrustCwsDomainAcl.ZeroTrustCwsDomainAcl.property.node"></a>

```python
node: Node
```

- *Type:* constructs.Node

The tree node.

---

##### `cdktf_stack`<sup>Required</sup> <a name="cdktf_stack" id="@cdktn/provider-cloudflare.zeroTrustCwsDomainAcl.ZeroTrustCwsDomainAcl.property.cdktfStack"></a>

```python
cdktf_stack: TerraformStack
```

- *Type:* cdktn.TerraformStack

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktn/provider-cloudflare.zeroTrustCwsDomainAcl.ZeroTrustCwsDomainAcl.property.fqn"></a>

```python
fqn: str
```

- *Type:* str

---

##### `friendly_unique_id`<sup>Required</sup> <a name="friendly_unique_id" id="@cdktn/provider-cloudflare.zeroTrustCwsDomainAcl.ZeroTrustCwsDomainAcl.property.friendlyUniqueId"></a>

```python
friendly_unique_id: str
```

- *Type:* str

---

##### `terraform_meta_arguments`<sup>Required</sup> <a name="terraform_meta_arguments" id="@cdktn/provider-cloudflare.zeroTrustCwsDomainAcl.ZeroTrustCwsDomainAcl.property.terraformMetaArguments"></a>

```python
terraform_meta_arguments: typing.Mapping[typing.Any]
```

- *Type:* typing.Mapping[typing.Any]

---

##### `terraform_resource_type`<sup>Required</sup> <a name="terraform_resource_type" id="@cdktn/provider-cloudflare.zeroTrustCwsDomainAcl.ZeroTrustCwsDomainAcl.property.terraformResourceType"></a>

```python
terraform_resource_type: str
```

- *Type:* str

---

##### `terraform_generator_metadata`<sup>Optional</sup> <a name="terraform_generator_metadata" id="@cdktn/provider-cloudflare.zeroTrustCwsDomainAcl.ZeroTrustCwsDomainAcl.property.terraformGeneratorMetadata"></a>

```python
terraform_generator_metadata: TerraformProviderGeneratorMetadata
```

- *Type:* cdktn.TerraformProviderGeneratorMetadata

---

##### `connection`<sup>Optional</sup> <a name="connection" id="@cdktn/provider-cloudflare.zeroTrustCwsDomainAcl.ZeroTrustCwsDomainAcl.property.connection"></a>

```python
connection: SSHProvisionerConnection | WinrmProvisionerConnection
```

- *Type:* cdktn.SSHProvisionerConnection | cdktn.WinrmProvisionerConnection

---

##### `count`<sup>Optional</sup> <a name="count" id="@cdktn/provider-cloudflare.zeroTrustCwsDomainAcl.ZeroTrustCwsDomainAcl.property.count"></a>

```python
count: typing.Union[int, float] | TerraformCount
```

- *Type:* typing.Union[int, float] | cdktn.TerraformCount

---

##### `depends_on`<sup>Optional</sup> <a name="depends_on" id="@cdktn/provider-cloudflare.zeroTrustCwsDomainAcl.ZeroTrustCwsDomainAcl.property.dependsOn"></a>

```python
depends_on: typing.List[str]
```

- *Type:* typing.List[str]

---

##### `for_each`<sup>Optional</sup> <a name="for_each" id="@cdktn/provider-cloudflare.zeroTrustCwsDomainAcl.ZeroTrustCwsDomainAcl.property.forEach"></a>

```python
for_each: ITerraformIterator
```

- *Type:* cdktn.ITerraformIterator

---

##### `lifecycle`<sup>Optional</sup> <a name="lifecycle" id="@cdktn/provider-cloudflare.zeroTrustCwsDomainAcl.ZeroTrustCwsDomainAcl.property.lifecycle"></a>

```python
lifecycle: TerraformResourceLifecycle
```

- *Type:* cdktn.TerraformResourceLifecycle

---

##### `provider`<sup>Optional</sup> <a name="provider" id="@cdktn/provider-cloudflare.zeroTrustCwsDomainAcl.ZeroTrustCwsDomainAcl.property.provider"></a>

```python
provider: TerraformProvider
```

- *Type:* cdktn.TerraformProvider

---

##### `provisioners`<sup>Optional</sup> <a name="provisioners" id="@cdktn/provider-cloudflare.zeroTrustCwsDomainAcl.ZeroTrustCwsDomainAcl.property.provisioners"></a>

```python
provisioners: typing.List[FileProvisioner | LocalExecProvisioner | RemoteExecProvisioner]
```

- *Type:* typing.List[cdktn.FileProvisioner | cdktn.LocalExecProvisioner | cdktn.RemoteExecProvisioner]

---

##### `created_at`<sup>Required</sup> <a name="created_at" id="@cdktn/provider-cloudflare.zeroTrustCwsDomainAcl.ZeroTrustCwsDomainAcl.property.createdAt"></a>

```python
created_at: str
```

- *Type:* str

---

##### `entries`<sup>Required</sup> <a name="entries" id="@cdktn/provider-cloudflare.zeroTrustCwsDomainAcl.ZeroTrustCwsDomainAcl.property.entries"></a>

```python
entries: ZeroTrustCwsDomainAclEntriesList
```

- *Type:* <a href="#@cdktn/provider-cloudflare.zeroTrustCwsDomainAcl.ZeroTrustCwsDomainAclEntriesList">ZeroTrustCwsDomainAclEntriesList</a>

---

##### `id`<sup>Required</sup> <a name="id" id="@cdktn/provider-cloudflare.zeroTrustCwsDomainAcl.ZeroTrustCwsDomainAcl.property.id"></a>

```python
id: str
```

- *Type:* str

---

##### `updated_at`<sup>Required</sup> <a name="updated_at" id="@cdktn/provider-cloudflare.zeroTrustCwsDomainAcl.ZeroTrustCwsDomainAcl.property.updatedAt"></a>

```python
updated_at: str
```

- *Type:* str

---

##### `account_id_input`<sup>Optional</sup> <a name="account_id_input" id="@cdktn/provider-cloudflare.zeroTrustCwsDomainAcl.ZeroTrustCwsDomainAcl.property.accountIdInput"></a>

```python
account_id_input: str
```

- *Type:* str

---

##### `default_action_input`<sup>Optional</sup> <a name="default_action_input" id="@cdktn/provider-cloudflare.zeroTrustCwsDomainAcl.ZeroTrustCwsDomainAcl.property.defaultActionInput"></a>

```python
default_action_input: str
```

- *Type:* str

---

##### `entries_input`<sup>Optional</sup> <a name="entries_input" id="@cdktn/provider-cloudflare.zeroTrustCwsDomainAcl.ZeroTrustCwsDomainAcl.property.entriesInput"></a>

```python
entries_input: IResolvable | typing.List[ZeroTrustCwsDomainAclEntries]
```

- *Type:* cdktn.IResolvable | typing.List[<a href="#@cdktn/provider-cloudflare.zeroTrustCwsDomainAcl.ZeroTrustCwsDomainAclEntries">ZeroTrustCwsDomainAclEntries</a>]

---

##### `name_input`<sup>Optional</sup> <a name="name_input" id="@cdktn/provider-cloudflare.zeroTrustCwsDomainAcl.ZeroTrustCwsDomainAcl.property.nameInput"></a>

```python
name_input: str
```

- *Type:* str

---

##### `account_id`<sup>Required</sup> <a name="account_id" id="@cdktn/provider-cloudflare.zeroTrustCwsDomainAcl.ZeroTrustCwsDomainAcl.property.accountId"></a>

```python
account_id: str
```

- *Type:* str

---

##### `default_action`<sup>Required</sup> <a name="default_action" id="@cdktn/provider-cloudflare.zeroTrustCwsDomainAcl.ZeroTrustCwsDomainAcl.property.defaultAction"></a>

```python
default_action: str
```

- *Type:* str

---

##### `name`<sup>Required</sup> <a name="name" id="@cdktn/provider-cloudflare.zeroTrustCwsDomainAcl.ZeroTrustCwsDomainAcl.property.name"></a>

```python
name: str
```

- *Type:* str

---

#### Constants <a name="Constants" id="Constants"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-cloudflare.zeroTrustCwsDomainAcl.ZeroTrustCwsDomainAcl.property.tfResourceType">tfResourceType</a></code> | <code>str</code> | *No description.* |

---

##### `tfResourceType`<sup>Required</sup> <a name="tfResourceType" id="@cdktn/provider-cloudflare.zeroTrustCwsDomainAcl.ZeroTrustCwsDomainAcl.property.tfResourceType"></a>

```python
tfResourceType: str
```

- *Type:* str

---

## Structs <a name="Structs" id="Structs"></a>

### ZeroTrustCwsDomainAclConfig <a name="ZeroTrustCwsDomainAclConfig" id="@cdktn/provider-cloudflare.zeroTrustCwsDomainAcl.ZeroTrustCwsDomainAclConfig"></a>

#### Initializer <a name="Initializer" id="@cdktn/provider-cloudflare.zeroTrustCwsDomainAcl.ZeroTrustCwsDomainAclConfig.Initializer"></a>

```python
from cdktn_provider_cloudflare import zero_trust_cws_domain_acl

zeroTrustCwsDomainAcl.ZeroTrustCwsDomainAclConfig(
  connection: SSHProvisionerConnection | WinrmProvisionerConnection = None,
  count: typing.Union[int, float] | TerraformCount = None,
  depends_on: typing.List[ITerraformDependable] = None,
  for_each: ITerraformIterator = None,
  lifecycle: TerraformResourceLifecycle = None,
  provider: TerraformProvider = None,
  provisioners: typing.List[FileProvisioner | LocalExecProvisioner | RemoteExecProvisioner] = None,
  account_id: str,
  default_action: str,
  entries: IResolvable | typing.List[ZeroTrustCwsDomainAclEntries],
  name: str
)
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-cloudflare.zeroTrustCwsDomainAcl.ZeroTrustCwsDomainAclConfig.property.connection">connection</a></code> | <code>cdktn.SSHProvisionerConnection \| cdktn.WinrmProvisionerConnection</code> | *No description.* |
| <code><a href="#@cdktn/provider-cloudflare.zeroTrustCwsDomainAcl.ZeroTrustCwsDomainAclConfig.property.count">count</a></code> | <code>typing.Union[int, float] \| cdktn.TerraformCount</code> | *No description.* |
| <code><a href="#@cdktn/provider-cloudflare.zeroTrustCwsDomainAcl.ZeroTrustCwsDomainAclConfig.property.dependsOn">depends_on</a></code> | <code>typing.List[cdktn.ITerraformDependable]</code> | *No description.* |
| <code><a href="#@cdktn/provider-cloudflare.zeroTrustCwsDomainAcl.ZeroTrustCwsDomainAclConfig.property.forEach">for_each</a></code> | <code>cdktn.ITerraformIterator</code> | *No description.* |
| <code><a href="#@cdktn/provider-cloudflare.zeroTrustCwsDomainAcl.ZeroTrustCwsDomainAclConfig.property.lifecycle">lifecycle</a></code> | <code>cdktn.TerraformResourceLifecycle</code> | *No description.* |
| <code><a href="#@cdktn/provider-cloudflare.zeroTrustCwsDomainAcl.ZeroTrustCwsDomainAclConfig.property.provider">provider</a></code> | <code>cdktn.TerraformProvider</code> | *No description.* |
| <code><a href="#@cdktn/provider-cloudflare.zeroTrustCwsDomainAcl.ZeroTrustCwsDomainAclConfig.property.provisioners">provisioners</a></code> | <code>typing.List[cdktn.FileProvisioner \| cdktn.LocalExecProvisioner \| cdktn.RemoteExecProvisioner]</code> | *No description.* |
| <code><a href="#@cdktn/provider-cloudflare.zeroTrustCwsDomainAcl.ZeroTrustCwsDomainAclConfig.property.accountId">account_id</a></code> | <code>str</code> | Cloudflare account ID (32-character hexadecimal string). |
| <code><a href="#@cdktn/provider-cloudflare.zeroTrustCwsDomainAcl.ZeroTrustCwsDomainAclConfig.property.defaultAction">default_action</a></code> | <code>str</code> | Default action when no entry matches Available values: "ALLOW", "BLOCK". |
| <code><a href="#@cdktn/provider-cloudflare.zeroTrustCwsDomainAcl.ZeroTrustCwsDomainAclConfig.property.entries">entries</a></code> | <code>cdktn.IResolvable \| typing.List[<a href="#@cdktn/provider-cloudflare.zeroTrustCwsDomainAcl.ZeroTrustCwsDomainAclEntries">ZeroTrustCwsDomainAclEntries</a>]</code> | Domain entries for this ACL. Each domain must appear at most once. |
| <code><a href="#@cdktn/provider-cloudflare.zeroTrustCwsDomainAcl.ZeroTrustCwsDomainAclConfig.property.name">name</a></code> | <code>str</code> | Name of the domain ACL. |

---

##### `connection`<sup>Optional</sup> <a name="connection" id="@cdktn/provider-cloudflare.zeroTrustCwsDomainAcl.ZeroTrustCwsDomainAclConfig.property.connection"></a>

```python
connection: SSHProvisionerConnection | WinrmProvisionerConnection
```

- *Type:* cdktn.SSHProvisionerConnection | cdktn.WinrmProvisionerConnection

---

##### `count`<sup>Optional</sup> <a name="count" id="@cdktn/provider-cloudflare.zeroTrustCwsDomainAcl.ZeroTrustCwsDomainAclConfig.property.count"></a>

```python
count: typing.Union[int, float] | TerraformCount
```

- *Type:* typing.Union[int, float] | cdktn.TerraformCount

---

##### `depends_on`<sup>Optional</sup> <a name="depends_on" id="@cdktn/provider-cloudflare.zeroTrustCwsDomainAcl.ZeroTrustCwsDomainAclConfig.property.dependsOn"></a>

```python
depends_on: typing.List[ITerraformDependable]
```

- *Type:* typing.List[cdktn.ITerraformDependable]

---

##### `for_each`<sup>Optional</sup> <a name="for_each" id="@cdktn/provider-cloudflare.zeroTrustCwsDomainAcl.ZeroTrustCwsDomainAclConfig.property.forEach"></a>

```python
for_each: ITerraformIterator
```

- *Type:* cdktn.ITerraformIterator

---

##### `lifecycle`<sup>Optional</sup> <a name="lifecycle" id="@cdktn/provider-cloudflare.zeroTrustCwsDomainAcl.ZeroTrustCwsDomainAclConfig.property.lifecycle"></a>

```python
lifecycle: TerraformResourceLifecycle
```

- *Type:* cdktn.TerraformResourceLifecycle

---

##### `provider`<sup>Optional</sup> <a name="provider" id="@cdktn/provider-cloudflare.zeroTrustCwsDomainAcl.ZeroTrustCwsDomainAclConfig.property.provider"></a>

```python
provider: TerraformProvider
```

- *Type:* cdktn.TerraformProvider

---

##### `provisioners`<sup>Optional</sup> <a name="provisioners" id="@cdktn/provider-cloudflare.zeroTrustCwsDomainAcl.ZeroTrustCwsDomainAclConfig.property.provisioners"></a>

```python
provisioners: typing.List[FileProvisioner | LocalExecProvisioner | RemoteExecProvisioner]
```

- *Type:* typing.List[cdktn.FileProvisioner | cdktn.LocalExecProvisioner | cdktn.RemoteExecProvisioner]

---

##### `account_id`<sup>Required</sup> <a name="account_id" id="@cdktn/provider-cloudflare.zeroTrustCwsDomainAcl.ZeroTrustCwsDomainAclConfig.property.accountId"></a>

```python
account_id: str
```

- *Type:* str

Cloudflare account ID (32-character hexadecimal string).

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/cloudflare/cloudflare/5.29.0/docs/resources/zero_trust_cws_domain_acl#account_id ZeroTrustCwsDomainAcl#account_id}

---

##### `default_action`<sup>Required</sup> <a name="default_action" id="@cdktn/provider-cloudflare.zeroTrustCwsDomainAcl.ZeroTrustCwsDomainAclConfig.property.defaultAction"></a>

```python
default_action: str
```

- *Type:* str

Default action when no entry matches Available values: "ALLOW", "BLOCK".

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/cloudflare/cloudflare/5.29.0/docs/resources/zero_trust_cws_domain_acl#default_action ZeroTrustCwsDomainAcl#default_action}

---

##### `entries`<sup>Required</sup> <a name="entries" id="@cdktn/provider-cloudflare.zeroTrustCwsDomainAcl.ZeroTrustCwsDomainAclConfig.property.entries"></a>

```python
entries: IResolvable | typing.List[ZeroTrustCwsDomainAclEntries]
```

- *Type:* cdktn.IResolvable | typing.List[<a href="#@cdktn/provider-cloudflare.zeroTrustCwsDomainAcl.ZeroTrustCwsDomainAclEntries">ZeroTrustCwsDomainAclEntries</a>]

Domain entries for this ACL. Each domain must appear at most once.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/cloudflare/cloudflare/5.29.0/docs/resources/zero_trust_cws_domain_acl#entries ZeroTrustCwsDomainAcl#entries}

---

##### `name`<sup>Required</sup> <a name="name" id="@cdktn/provider-cloudflare.zeroTrustCwsDomainAcl.ZeroTrustCwsDomainAclConfig.property.name"></a>

```python
name: str
```

- *Type:* str

Name of the domain ACL.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/cloudflare/cloudflare/5.29.0/docs/resources/zero_trust_cws_domain_acl#name ZeroTrustCwsDomainAcl#name}

---

### ZeroTrustCwsDomainAclEntries <a name="ZeroTrustCwsDomainAclEntries" id="@cdktn/provider-cloudflare.zeroTrustCwsDomainAcl.ZeroTrustCwsDomainAclEntries"></a>

#### Initializer <a name="Initializer" id="@cdktn/provider-cloudflare.zeroTrustCwsDomainAcl.ZeroTrustCwsDomainAclEntries.Initializer"></a>

```python
from cdktn_provider_cloudflare import zero_trust_cws_domain_acl

zeroTrustCwsDomainAcl.ZeroTrustCwsDomainAclEntries(
  action: str,
  domain: str
)
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-cloudflare.zeroTrustCwsDomainAcl.ZeroTrustCwsDomainAclEntries.property.action">action</a></code> | <code>str</code> | Per-domain decision overriding the parent ACL's default_action Available values: "ALLOW", "BLOCK". |
| <code><a href="#@cdktn/provider-cloudflare.zeroTrustCwsDomainAcl.ZeroTrustCwsDomainAclEntries.property.domain">domain</a></code> | <code>str</code> | Hostname or domain pattern, capped at 255 UTF-8 bytes. |

---

##### `action`<sup>Required</sup> <a name="action" id="@cdktn/provider-cloudflare.zeroTrustCwsDomainAcl.ZeroTrustCwsDomainAclEntries.property.action"></a>

```python
action: str
```

- *Type:* str

Per-domain decision overriding the parent ACL's default_action Available values: "ALLOW", "BLOCK".

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/cloudflare/cloudflare/5.29.0/docs/resources/zero_trust_cws_domain_acl#action ZeroTrustCwsDomainAcl#action}

---

##### `domain`<sup>Required</sup> <a name="domain" id="@cdktn/provider-cloudflare.zeroTrustCwsDomainAcl.ZeroTrustCwsDomainAclEntries.property.domain"></a>

```python
domain: str
```

- *Type:* str

Hostname or domain pattern, capped at 255 UTF-8 bytes.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/cloudflare/cloudflare/5.29.0/docs/resources/zero_trust_cws_domain_acl#domain ZeroTrustCwsDomainAcl#domain}

---

## Classes <a name="Classes" id="Classes"></a>

### ZeroTrustCwsDomainAclEntriesList <a name="ZeroTrustCwsDomainAclEntriesList" id="@cdktn/provider-cloudflare.zeroTrustCwsDomainAcl.ZeroTrustCwsDomainAclEntriesList"></a>

#### Initializers <a name="Initializers" id="@cdktn/provider-cloudflare.zeroTrustCwsDomainAcl.ZeroTrustCwsDomainAclEntriesList.Initializer"></a>

```python
from cdktn_provider_cloudflare import zero_trust_cws_domain_acl

zeroTrustCwsDomainAcl.ZeroTrustCwsDomainAclEntriesList(
  terraform_resource: IInterpolatingParent,
  terraform_attribute: str,
  wraps_set: bool
)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-cloudflare.zeroTrustCwsDomainAcl.ZeroTrustCwsDomainAclEntriesList.Initializer.parameter.terraformResource">terraform_resource</a></code> | <code>cdktn.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktn/provider-cloudflare.zeroTrustCwsDomainAcl.ZeroTrustCwsDomainAclEntriesList.Initializer.parameter.terraformAttribute">terraform_attribute</a></code> | <code>str</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#@cdktn/provider-cloudflare.zeroTrustCwsDomainAcl.ZeroTrustCwsDomainAclEntriesList.Initializer.parameter.wrapsSet">wraps_set</a></code> | <code>bool</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraform_resource`<sup>Required</sup> <a name="terraform_resource" id="@cdktn/provider-cloudflare.zeroTrustCwsDomainAcl.ZeroTrustCwsDomainAclEntriesList.Initializer.parameter.terraformResource"></a>

- *Type:* cdktn.IInterpolatingParent

The parent resource.

---

##### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-cloudflare.zeroTrustCwsDomainAcl.ZeroTrustCwsDomainAclEntriesList.Initializer.parameter.terraformAttribute"></a>

- *Type:* str

The attribute on the parent resource this class is referencing.

---

##### `wraps_set`<sup>Required</sup> <a name="wraps_set" id="@cdktn/provider-cloudflare.zeroTrustCwsDomainAcl.ZeroTrustCwsDomainAclEntriesList.Initializer.parameter.wrapsSet"></a>

- *Type:* bool

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-cloudflare.zeroTrustCwsDomainAcl.ZeroTrustCwsDomainAclEntriesList.allWithMapKey">all_with_map_key</a></code> | Creating an iterator for this complex list. |
| <code><a href="#@cdktn/provider-cloudflare.zeroTrustCwsDomainAcl.ZeroTrustCwsDomainAclEntriesList.computeFqn">compute_fqn</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-cloudflare.zeroTrustCwsDomainAcl.ZeroTrustCwsDomainAclEntriesList.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktn/provider-cloudflare.zeroTrustCwsDomainAcl.ZeroTrustCwsDomainAclEntriesList.toString">to_string</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktn/provider-cloudflare.zeroTrustCwsDomainAcl.ZeroTrustCwsDomainAclEntriesList.get">get</a></code> | *No description.* |

---

##### `all_with_map_key` <a name="all_with_map_key" id="@cdktn/provider-cloudflare.zeroTrustCwsDomainAcl.ZeroTrustCwsDomainAclEntriesList.allWithMapKey"></a>

```python
def all_with_map_key(
  map_key_attribute_name: str
) -> DynamicListTerraformIterator
```

Creating an iterator for this complex list.

The list will be converted into a map with the mapKeyAttributeName as the key.

###### `map_key_attribute_name`<sup>Required</sup> <a name="map_key_attribute_name" id="@cdktn/provider-cloudflare.zeroTrustCwsDomainAcl.ZeroTrustCwsDomainAclEntriesList.allWithMapKey.parameter.mapKeyAttributeName"></a>

- *Type:* str

---

##### `compute_fqn` <a name="compute_fqn" id="@cdktn/provider-cloudflare.zeroTrustCwsDomainAcl.ZeroTrustCwsDomainAclEntriesList.computeFqn"></a>

```python
def compute_fqn() -> str
```

##### `resolve` <a name="resolve" id="@cdktn/provider-cloudflare.zeroTrustCwsDomainAcl.ZeroTrustCwsDomainAclEntriesList.resolve"></a>

```python
def resolve(
  _context: IResolveContext
) -> typing.Any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktn/provider-cloudflare.zeroTrustCwsDomainAcl.ZeroTrustCwsDomainAclEntriesList.resolve.parameter._context"></a>

- *Type:* cdktn.IResolveContext

---

##### `to_string` <a name="to_string" id="@cdktn/provider-cloudflare.zeroTrustCwsDomainAcl.ZeroTrustCwsDomainAclEntriesList.toString"></a>

```python
def to_string() -> str
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `get` <a name="get" id="@cdktn/provider-cloudflare.zeroTrustCwsDomainAcl.ZeroTrustCwsDomainAclEntriesList.get"></a>

```python
def get(
  index: typing.Union[int, float]
) -> ZeroTrustCwsDomainAclEntriesOutputReference
```

###### `index`<sup>Required</sup> <a name="index" id="@cdktn/provider-cloudflare.zeroTrustCwsDomainAcl.ZeroTrustCwsDomainAclEntriesList.get.parameter.index"></a>

- *Type:* typing.Union[int, float]

the index of the item to return.

---


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-cloudflare.zeroTrustCwsDomainAcl.ZeroTrustCwsDomainAclEntriesList.property.creationStack">creation_stack</a></code> | <code>typing.List[str]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktn/provider-cloudflare.zeroTrustCwsDomainAcl.ZeroTrustCwsDomainAclEntriesList.property.fqn">fqn</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktn/provider-cloudflare.zeroTrustCwsDomainAcl.ZeroTrustCwsDomainAclEntriesList.property.internalValue">internal_value</a></code> | <code>cdktn.IResolvable \| typing.List[<a href="#@cdktn/provider-cloudflare.zeroTrustCwsDomainAcl.ZeroTrustCwsDomainAclEntries">ZeroTrustCwsDomainAclEntries</a>]</code> | *No description.* |

---

##### `creation_stack`<sup>Required</sup> <a name="creation_stack" id="@cdktn/provider-cloudflare.zeroTrustCwsDomainAcl.ZeroTrustCwsDomainAclEntriesList.property.creationStack"></a>

```python
creation_stack: typing.List[str]
```

- *Type:* typing.List[str]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktn/provider-cloudflare.zeroTrustCwsDomainAcl.ZeroTrustCwsDomainAclEntriesList.property.fqn"></a>

```python
fqn: str
```

- *Type:* str

---

##### `internal_value`<sup>Optional</sup> <a name="internal_value" id="@cdktn/provider-cloudflare.zeroTrustCwsDomainAcl.ZeroTrustCwsDomainAclEntriesList.property.internalValue"></a>

```python
internal_value: IResolvable | typing.List[ZeroTrustCwsDomainAclEntries]
```

- *Type:* cdktn.IResolvable | typing.List[<a href="#@cdktn/provider-cloudflare.zeroTrustCwsDomainAcl.ZeroTrustCwsDomainAclEntries">ZeroTrustCwsDomainAclEntries</a>]

---


### ZeroTrustCwsDomainAclEntriesOutputReference <a name="ZeroTrustCwsDomainAclEntriesOutputReference" id="@cdktn/provider-cloudflare.zeroTrustCwsDomainAcl.ZeroTrustCwsDomainAclEntriesOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktn/provider-cloudflare.zeroTrustCwsDomainAcl.ZeroTrustCwsDomainAclEntriesOutputReference.Initializer"></a>

```python
from cdktn_provider_cloudflare import zero_trust_cws_domain_acl

zeroTrustCwsDomainAcl.ZeroTrustCwsDomainAclEntriesOutputReference(
  terraform_resource: IInterpolatingParent,
  terraform_attribute: str,
  complex_object_index: typing.Union[int, float],
  complex_object_is_from_set: bool
)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-cloudflare.zeroTrustCwsDomainAcl.ZeroTrustCwsDomainAclEntriesOutputReference.Initializer.parameter.terraformResource">terraform_resource</a></code> | <code>cdktn.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktn/provider-cloudflare.zeroTrustCwsDomainAcl.ZeroTrustCwsDomainAclEntriesOutputReference.Initializer.parameter.terraformAttribute">terraform_attribute</a></code> | <code>str</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#@cdktn/provider-cloudflare.zeroTrustCwsDomainAcl.ZeroTrustCwsDomainAclEntriesOutputReference.Initializer.parameter.complexObjectIndex">complex_object_index</a></code> | <code>typing.Union[int, float]</code> | the index of this item in the list. |
| <code><a href="#@cdktn/provider-cloudflare.zeroTrustCwsDomainAcl.ZeroTrustCwsDomainAclEntriesOutputReference.Initializer.parameter.complexObjectIsFromSet">complex_object_is_from_set</a></code> | <code>bool</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraform_resource`<sup>Required</sup> <a name="terraform_resource" id="@cdktn/provider-cloudflare.zeroTrustCwsDomainAcl.ZeroTrustCwsDomainAclEntriesOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* cdktn.IInterpolatingParent

The parent resource.

---

##### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-cloudflare.zeroTrustCwsDomainAcl.ZeroTrustCwsDomainAclEntriesOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* str

The attribute on the parent resource this class is referencing.

---

##### `complex_object_index`<sup>Required</sup> <a name="complex_object_index" id="@cdktn/provider-cloudflare.zeroTrustCwsDomainAcl.ZeroTrustCwsDomainAclEntriesOutputReference.Initializer.parameter.complexObjectIndex"></a>

- *Type:* typing.Union[int, float]

the index of this item in the list.

---

##### `complex_object_is_from_set`<sup>Required</sup> <a name="complex_object_is_from_set" id="@cdktn/provider-cloudflare.zeroTrustCwsDomainAcl.ZeroTrustCwsDomainAclEntriesOutputReference.Initializer.parameter.complexObjectIsFromSet"></a>

- *Type:* bool

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-cloudflare.zeroTrustCwsDomainAcl.ZeroTrustCwsDomainAclEntriesOutputReference.computeFqn">compute_fqn</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-cloudflare.zeroTrustCwsDomainAcl.ZeroTrustCwsDomainAclEntriesOutputReference.getAnyMapAttribute">get_any_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-cloudflare.zeroTrustCwsDomainAcl.ZeroTrustCwsDomainAclEntriesOutputReference.getBooleanAttribute">get_boolean_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-cloudflare.zeroTrustCwsDomainAcl.ZeroTrustCwsDomainAclEntriesOutputReference.getBooleanMapAttribute">get_boolean_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-cloudflare.zeroTrustCwsDomainAcl.ZeroTrustCwsDomainAclEntriesOutputReference.getListAttribute">get_list_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-cloudflare.zeroTrustCwsDomainAcl.ZeroTrustCwsDomainAclEntriesOutputReference.getNumberAttribute">get_number_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-cloudflare.zeroTrustCwsDomainAcl.ZeroTrustCwsDomainAclEntriesOutputReference.getNumberListAttribute">get_number_list_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-cloudflare.zeroTrustCwsDomainAcl.ZeroTrustCwsDomainAclEntriesOutputReference.getNumberMapAttribute">get_number_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-cloudflare.zeroTrustCwsDomainAcl.ZeroTrustCwsDomainAclEntriesOutputReference.getStringAttribute">get_string_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-cloudflare.zeroTrustCwsDomainAcl.ZeroTrustCwsDomainAclEntriesOutputReference.getStringMapAttribute">get_string_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-cloudflare.zeroTrustCwsDomainAcl.ZeroTrustCwsDomainAclEntriesOutputReference.interpolationForAttribute">interpolation_for_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-cloudflare.zeroTrustCwsDomainAcl.ZeroTrustCwsDomainAclEntriesOutputReference.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktn/provider-cloudflare.zeroTrustCwsDomainAcl.ZeroTrustCwsDomainAclEntriesOutputReference.toString">to_string</a></code> | Return a string representation of this resolvable object. |

---

##### `compute_fqn` <a name="compute_fqn" id="@cdktn/provider-cloudflare.zeroTrustCwsDomainAcl.ZeroTrustCwsDomainAclEntriesOutputReference.computeFqn"></a>

```python
def compute_fqn() -> str
```

##### `get_any_map_attribute` <a name="get_any_map_attribute" id="@cdktn/provider-cloudflare.zeroTrustCwsDomainAcl.ZeroTrustCwsDomainAclEntriesOutputReference.getAnyMapAttribute"></a>

```python
def get_any_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[typing.Any]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-cloudflare.zeroTrustCwsDomainAcl.ZeroTrustCwsDomainAclEntriesOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_boolean_attribute` <a name="get_boolean_attribute" id="@cdktn/provider-cloudflare.zeroTrustCwsDomainAcl.ZeroTrustCwsDomainAclEntriesOutputReference.getBooleanAttribute"></a>

```python
def get_boolean_attribute(
  terraform_attribute: str
) -> IResolvable
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-cloudflare.zeroTrustCwsDomainAcl.ZeroTrustCwsDomainAclEntriesOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_boolean_map_attribute` <a name="get_boolean_map_attribute" id="@cdktn/provider-cloudflare.zeroTrustCwsDomainAcl.ZeroTrustCwsDomainAclEntriesOutputReference.getBooleanMapAttribute"></a>

```python
def get_boolean_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[bool]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-cloudflare.zeroTrustCwsDomainAcl.ZeroTrustCwsDomainAclEntriesOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_list_attribute` <a name="get_list_attribute" id="@cdktn/provider-cloudflare.zeroTrustCwsDomainAcl.ZeroTrustCwsDomainAclEntriesOutputReference.getListAttribute"></a>

```python
def get_list_attribute(
  terraform_attribute: str
) -> typing.List[str]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-cloudflare.zeroTrustCwsDomainAcl.ZeroTrustCwsDomainAclEntriesOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_attribute` <a name="get_number_attribute" id="@cdktn/provider-cloudflare.zeroTrustCwsDomainAcl.ZeroTrustCwsDomainAclEntriesOutputReference.getNumberAttribute"></a>

```python
def get_number_attribute(
  terraform_attribute: str
) -> typing.Union[int, float]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-cloudflare.zeroTrustCwsDomainAcl.ZeroTrustCwsDomainAclEntriesOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_list_attribute` <a name="get_number_list_attribute" id="@cdktn/provider-cloudflare.zeroTrustCwsDomainAcl.ZeroTrustCwsDomainAclEntriesOutputReference.getNumberListAttribute"></a>

```python
def get_number_list_attribute(
  terraform_attribute: str
) -> typing.List[typing.Union[int, float]]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-cloudflare.zeroTrustCwsDomainAcl.ZeroTrustCwsDomainAclEntriesOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_map_attribute` <a name="get_number_map_attribute" id="@cdktn/provider-cloudflare.zeroTrustCwsDomainAcl.ZeroTrustCwsDomainAclEntriesOutputReference.getNumberMapAttribute"></a>

```python
def get_number_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[typing.Union[int, float]]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-cloudflare.zeroTrustCwsDomainAcl.ZeroTrustCwsDomainAclEntriesOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_string_attribute` <a name="get_string_attribute" id="@cdktn/provider-cloudflare.zeroTrustCwsDomainAcl.ZeroTrustCwsDomainAclEntriesOutputReference.getStringAttribute"></a>

```python
def get_string_attribute(
  terraform_attribute: str
) -> str
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-cloudflare.zeroTrustCwsDomainAcl.ZeroTrustCwsDomainAclEntriesOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_string_map_attribute` <a name="get_string_map_attribute" id="@cdktn/provider-cloudflare.zeroTrustCwsDomainAcl.ZeroTrustCwsDomainAclEntriesOutputReference.getStringMapAttribute"></a>

```python
def get_string_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[str]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-cloudflare.zeroTrustCwsDomainAcl.ZeroTrustCwsDomainAclEntriesOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `interpolation_for_attribute` <a name="interpolation_for_attribute" id="@cdktn/provider-cloudflare.zeroTrustCwsDomainAcl.ZeroTrustCwsDomainAclEntriesOutputReference.interpolationForAttribute"></a>

```python
def interpolation_for_attribute(
  property: str
) -> IResolvable
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktn/provider-cloudflare.zeroTrustCwsDomainAcl.ZeroTrustCwsDomainAclEntriesOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* str

---

##### `resolve` <a name="resolve" id="@cdktn/provider-cloudflare.zeroTrustCwsDomainAcl.ZeroTrustCwsDomainAclEntriesOutputReference.resolve"></a>

```python
def resolve(
  _context: IResolveContext
) -> typing.Any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktn/provider-cloudflare.zeroTrustCwsDomainAcl.ZeroTrustCwsDomainAclEntriesOutputReference.resolve.parameter._context"></a>

- *Type:* cdktn.IResolveContext

---

##### `to_string` <a name="to_string" id="@cdktn/provider-cloudflare.zeroTrustCwsDomainAcl.ZeroTrustCwsDomainAclEntriesOutputReference.toString"></a>

```python
def to_string() -> str
```

Return a string representation of this resolvable object.

Returns a reversible string representation.


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-cloudflare.zeroTrustCwsDomainAcl.ZeroTrustCwsDomainAclEntriesOutputReference.property.creationStack">creation_stack</a></code> | <code>typing.List[str]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktn/provider-cloudflare.zeroTrustCwsDomainAcl.ZeroTrustCwsDomainAclEntriesOutputReference.property.fqn">fqn</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktn/provider-cloudflare.zeroTrustCwsDomainAcl.ZeroTrustCwsDomainAclEntriesOutputReference.property.actionInput">action_input</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktn/provider-cloudflare.zeroTrustCwsDomainAcl.ZeroTrustCwsDomainAclEntriesOutputReference.property.domainInput">domain_input</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktn/provider-cloudflare.zeroTrustCwsDomainAcl.ZeroTrustCwsDomainAclEntriesOutputReference.property.action">action</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktn/provider-cloudflare.zeroTrustCwsDomainAcl.ZeroTrustCwsDomainAclEntriesOutputReference.property.domain">domain</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktn/provider-cloudflare.zeroTrustCwsDomainAcl.ZeroTrustCwsDomainAclEntriesOutputReference.property.internalValue">internal_value</a></code> | <code>cdktn.IResolvable \| <a href="#@cdktn/provider-cloudflare.zeroTrustCwsDomainAcl.ZeroTrustCwsDomainAclEntries">ZeroTrustCwsDomainAclEntries</a></code> | *No description.* |

---

##### `creation_stack`<sup>Required</sup> <a name="creation_stack" id="@cdktn/provider-cloudflare.zeroTrustCwsDomainAcl.ZeroTrustCwsDomainAclEntriesOutputReference.property.creationStack"></a>

```python
creation_stack: typing.List[str]
```

- *Type:* typing.List[str]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktn/provider-cloudflare.zeroTrustCwsDomainAcl.ZeroTrustCwsDomainAclEntriesOutputReference.property.fqn"></a>

```python
fqn: str
```

- *Type:* str

---

##### `action_input`<sup>Optional</sup> <a name="action_input" id="@cdktn/provider-cloudflare.zeroTrustCwsDomainAcl.ZeroTrustCwsDomainAclEntriesOutputReference.property.actionInput"></a>

```python
action_input: str
```

- *Type:* str

---

##### `domain_input`<sup>Optional</sup> <a name="domain_input" id="@cdktn/provider-cloudflare.zeroTrustCwsDomainAcl.ZeroTrustCwsDomainAclEntriesOutputReference.property.domainInput"></a>

```python
domain_input: str
```

- *Type:* str

---

##### `action`<sup>Required</sup> <a name="action" id="@cdktn/provider-cloudflare.zeroTrustCwsDomainAcl.ZeroTrustCwsDomainAclEntriesOutputReference.property.action"></a>

```python
action: str
```

- *Type:* str

---

##### `domain`<sup>Required</sup> <a name="domain" id="@cdktn/provider-cloudflare.zeroTrustCwsDomainAcl.ZeroTrustCwsDomainAclEntriesOutputReference.property.domain"></a>

```python
domain: str
```

- *Type:* str

---

##### `internal_value`<sup>Optional</sup> <a name="internal_value" id="@cdktn/provider-cloudflare.zeroTrustCwsDomainAcl.ZeroTrustCwsDomainAclEntriesOutputReference.property.internalValue"></a>

```python
internal_value: IResolvable | ZeroTrustCwsDomainAclEntries
```

- *Type:* cdktn.IResolvable | <a href="#@cdktn/provider-cloudflare.zeroTrustCwsDomainAcl.ZeroTrustCwsDomainAclEntries">ZeroTrustCwsDomainAclEntries</a>

---



