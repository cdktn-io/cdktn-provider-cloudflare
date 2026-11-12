# `zeroTrustOrganizationTrustSettings` Submodule <a name="`zeroTrustOrganizationTrustSettings` Submodule" id="@cdktn/provider-cloudflare.zeroTrustOrganizationTrustSettings"></a>

## Constructs <a name="Constructs" id="Constructs"></a>

### ZeroTrustOrganizationTrustSettings <a name="ZeroTrustOrganizationTrustSettings" id="@cdktn/provider-cloudflare.zeroTrustOrganizationTrustSettings.ZeroTrustOrganizationTrustSettings"></a>

Represents a {@link https://registry.terraform.io/providers/cloudflare/cloudflare/5.29.0/docs/resources/zero_trust_organization_trust_settings cloudflare_zero_trust_organization_trust_settings}.

#### Initializers <a name="Initializers" id="@cdktn/provider-cloudflare.zeroTrustOrganizationTrustSettings.ZeroTrustOrganizationTrustSettings.Initializer"></a>

```python
from cdktn_provider_cloudflare import zero_trust_organization_trust_settings

zeroTrustOrganizationTrustSettings.ZeroTrustOrganizationTrustSettings(
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
  grant_trust_to_all_accounts_in_org: bool | IResolvable,
  trusting_accounts: typing.List[str] = None
)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-cloudflare.zeroTrustOrganizationTrustSettings.ZeroTrustOrganizationTrustSettings.Initializer.parameter.scope">scope</a></code> | <code>constructs.Construct</code> | The scope in which to define this construct. |
| <code><a href="#@cdktn/provider-cloudflare.zeroTrustOrganizationTrustSettings.ZeroTrustOrganizationTrustSettings.Initializer.parameter.id">id</a></code> | <code>str</code> | The scoped construct ID. |
| <code><a href="#@cdktn/provider-cloudflare.zeroTrustOrganizationTrustSettings.ZeroTrustOrganizationTrustSettings.Initializer.parameter.connection">connection</a></code> | <code>cdktn.SSHProvisionerConnection \| cdktn.WinrmProvisionerConnection</code> | *No description.* |
| <code><a href="#@cdktn/provider-cloudflare.zeroTrustOrganizationTrustSettings.ZeroTrustOrganizationTrustSettings.Initializer.parameter.count">count</a></code> | <code>typing.Union[int, float] \| cdktn.TerraformCount</code> | *No description.* |
| <code><a href="#@cdktn/provider-cloudflare.zeroTrustOrganizationTrustSettings.ZeroTrustOrganizationTrustSettings.Initializer.parameter.dependsOn">depends_on</a></code> | <code>typing.List[cdktn.ITerraformDependable]</code> | *No description.* |
| <code><a href="#@cdktn/provider-cloudflare.zeroTrustOrganizationTrustSettings.ZeroTrustOrganizationTrustSettings.Initializer.parameter.forEach">for_each</a></code> | <code>cdktn.ITerraformIterator</code> | *No description.* |
| <code><a href="#@cdktn/provider-cloudflare.zeroTrustOrganizationTrustSettings.ZeroTrustOrganizationTrustSettings.Initializer.parameter.lifecycle">lifecycle</a></code> | <code>cdktn.TerraformResourceLifecycle</code> | *No description.* |
| <code><a href="#@cdktn/provider-cloudflare.zeroTrustOrganizationTrustSettings.ZeroTrustOrganizationTrustSettings.Initializer.parameter.provider">provider</a></code> | <code>cdktn.TerraformProvider</code> | *No description.* |
| <code><a href="#@cdktn/provider-cloudflare.zeroTrustOrganizationTrustSettings.ZeroTrustOrganizationTrustSettings.Initializer.parameter.provisioners">provisioners</a></code> | <code>typing.List[cdktn.FileProvisioner \| cdktn.LocalExecProvisioner \| cdktn.RemoteExecProvisioner]</code> | *No description.* |
| <code><a href="#@cdktn/provider-cloudflare.zeroTrustOrganizationTrustSettings.ZeroTrustOrganizationTrustSettings.Initializer.parameter.accountId">account_id</a></code> | <code>str</code> | Identifier. |
| <code><a href="#@cdktn/provider-cloudflare.zeroTrustOrganizationTrustSettings.ZeroTrustOrganizationTrustSettings.Initializer.parameter.grantTrustToAllAccountsInOrg">grant_trust_to_all_accounts_in_org</a></code> | <code>bool \| cdktn.IResolvable</code> | Whether all accounts in the organization are trusted to use this account's cross-account Access resources. |
| <code><a href="#@cdktn/provider-cloudflare.zeroTrustOrganizationTrustSettings.ZeroTrustOrganizationTrustSettings.Initializer.parameter.trustingAccounts">trusting_accounts</a></code> | <code>typing.List[str]</code> | Explicit account IDs trusted to use this account's cross-account Access resources. |

---

##### `scope`<sup>Required</sup> <a name="scope" id="@cdktn/provider-cloudflare.zeroTrustOrganizationTrustSettings.ZeroTrustOrganizationTrustSettings.Initializer.parameter.scope"></a>

- *Type:* constructs.Construct

The scope in which to define this construct.

---

##### `id`<sup>Required</sup> <a name="id" id="@cdktn/provider-cloudflare.zeroTrustOrganizationTrustSettings.ZeroTrustOrganizationTrustSettings.Initializer.parameter.id"></a>

- *Type:* str

The scoped construct ID.

Must be unique amongst siblings in the same scope

---

##### `connection`<sup>Optional</sup> <a name="connection" id="@cdktn/provider-cloudflare.zeroTrustOrganizationTrustSettings.ZeroTrustOrganizationTrustSettings.Initializer.parameter.connection"></a>

- *Type:* cdktn.SSHProvisionerConnection | cdktn.WinrmProvisionerConnection

---

##### `count`<sup>Optional</sup> <a name="count" id="@cdktn/provider-cloudflare.zeroTrustOrganizationTrustSettings.ZeroTrustOrganizationTrustSettings.Initializer.parameter.count"></a>

- *Type:* typing.Union[int, float] | cdktn.TerraformCount

---

##### `depends_on`<sup>Optional</sup> <a name="depends_on" id="@cdktn/provider-cloudflare.zeroTrustOrganizationTrustSettings.ZeroTrustOrganizationTrustSettings.Initializer.parameter.dependsOn"></a>

- *Type:* typing.List[cdktn.ITerraformDependable]

---

##### `for_each`<sup>Optional</sup> <a name="for_each" id="@cdktn/provider-cloudflare.zeroTrustOrganizationTrustSettings.ZeroTrustOrganizationTrustSettings.Initializer.parameter.forEach"></a>

- *Type:* cdktn.ITerraformIterator

---

##### `lifecycle`<sup>Optional</sup> <a name="lifecycle" id="@cdktn/provider-cloudflare.zeroTrustOrganizationTrustSettings.ZeroTrustOrganizationTrustSettings.Initializer.parameter.lifecycle"></a>

- *Type:* cdktn.TerraformResourceLifecycle

---

##### `provider`<sup>Optional</sup> <a name="provider" id="@cdktn/provider-cloudflare.zeroTrustOrganizationTrustSettings.ZeroTrustOrganizationTrustSettings.Initializer.parameter.provider"></a>

- *Type:* cdktn.TerraformProvider

---

##### `provisioners`<sup>Optional</sup> <a name="provisioners" id="@cdktn/provider-cloudflare.zeroTrustOrganizationTrustSettings.ZeroTrustOrganizationTrustSettings.Initializer.parameter.provisioners"></a>

- *Type:* typing.List[cdktn.FileProvisioner | cdktn.LocalExecProvisioner | cdktn.RemoteExecProvisioner]

---

##### `account_id`<sup>Required</sup> <a name="account_id" id="@cdktn/provider-cloudflare.zeroTrustOrganizationTrustSettings.ZeroTrustOrganizationTrustSettings.Initializer.parameter.accountId"></a>

- *Type:* str

Identifier.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/cloudflare/cloudflare/5.29.0/docs/resources/zero_trust_organization_trust_settings#account_id ZeroTrustOrganizationTrustSettings#account_id}

---

##### `grant_trust_to_all_accounts_in_org`<sup>Required</sup> <a name="grant_trust_to_all_accounts_in_org" id="@cdktn/provider-cloudflare.zeroTrustOrganizationTrustSettings.ZeroTrustOrganizationTrustSettings.Initializer.parameter.grantTrustToAllAccountsInOrg"></a>

- *Type:* bool | cdktn.IResolvable

Whether all accounts in the organization are trusted to use this account's cross-account Access resources.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/cloudflare/cloudflare/5.29.0/docs/resources/zero_trust_organization_trust_settings#grant_trust_to_all_accounts_in_org ZeroTrustOrganizationTrustSettings#grant_trust_to_all_accounts_in_org}

---

##### `trusting_accounts`<sup>Optional</sup> <a name="trusting_accounts" id="@cdktn/provider-cloudflare.zeroTrustOrganizationTrustSettings.ZeroTrustOrganizationTrustSettings.Initializer.parameter.trustingAccounts"></a>

- *Type:* typing.List[str]

Explicit account IDs trusted to use this account's cross-account Access resources.

At most 100 unique valid account IDs are accepted. Omitted from responses when empty.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/cloudflare/cloudflare/5.29.0/docs/resources/zero_trust_organization_trust_settings#trusting_accounts ZeroTrustOrganizationTrustSettings#trusting_accounts}

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-cloudflare.zeroTrustOrganizationTrustSettings.ZeroTrustOrganizationTrustSettings.toString">to_string</a></code> | Returns a string representation of this construct. |
| <code><a href="#@cdktn/provider-cloudflare.zeroTrustOrganizationTrustSettings.ZeroTrustOrganizationTrustSettings.with">with</a></code> | Applies one or more mixins to this construct. |
| <code><a href="#@cdktn/provider-cloudflare.zeroTrustOrganizationTrustSettings.ZeroTrustOrganizationTrustSettings.addOverride">add_override</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-cloudflare.zeroTrustOrganizationTrustSettings.ZeroTrustOrganizationTrustSettings.overrideLogicalId">override_logical_id</a></code> | Overrides the auto-generated logical ID with a specific ID. |
| <code><a href="#@cdktn/provider-cloudflare.zeroTrustOrganizationTrustSettings.ZeroTrustOrganizationTrustSettings.resetOverrideLogicalId">reset_override_logical_id</a></code> | Resets a previously passed logical Id to use the auto-generated logical id again. |
| <code><a href="#@cdktn/provider-cloudflare.zeroTrustOrganizationTrustSettings.ZeroTrustOrganizationTrustSettings.toHclTerraform">to_hcl_terraform</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-cloudflare.zeroTrustOrganizationTrustSettings.ZeroTrustOrganizationTrustSettings.toMetadata">to_metadata</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-cloudflare.zeroTrustOrganizationTrustSettings.ZeroTrustOrganizationTrustSettings.toTerraform">to_terraform</a></code> | Adds this resource to the terraform JSON output. |
| <code><a href="#@cdktn/provider-cloudflare.zeroTrustOrganizationTrustSettings.ZeroTrustOrganizationTrustSettings.addMoveTarget">add_move_target</a></code> | Adds a user defined moveTarget string to this resource to be later used in .moveTo(moveTarget) to resolve the location of the move. |
| <code><a href="#@cdktn/provider-cloudflare.zeroTrustOrganizationTrustSettings.ZeroTrustOrganizationTrustSettings.getAnyMapAttribute">get_any_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-cloudflare.zeroTrustOrganizationTrustSettings.ZeroTrustOrganizationTrustSettings.getBooleanAttribute">get_boolean_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-cloudflare.zeroTrustOrganizationTrustSettings.ZeroTrustOrganizationTrustSettings.getBooleanMapAttribute">get_boolean_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-cloudflare.zeroTrustOrganizationTrustSettings.ZeroTrustOrganizationTrustSettings.getListAttribute">get_list_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-cloudflare.zeroTrustOrganizationTrustSettings.ZeroTrustOrganizationTrustSettings.getNumberAttribute">get_number_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-cloudflare.zeroTrustOrganizationTrustSettings.ZeroTrustOrganizationTrustSettings.getNumberListAttribute">get_number_list_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-cloudflare.zeroTrustOrganizationTrustSettings.ZeroTrustOrganizationTrustSettings.getNumberMapAttribute">get_number_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-cloudflare.zeroTrustOrganizationTrustSettings.ZeroTrustOrganizationTrustSettings.getStringAttribute">get_string_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-cloudflare.zeroTrustOrganizationTrustSettings.ZeroTrustOrganizationTrustSettings.getStringMapAttribute">get_string_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-cloudflare.zeroTrustOrganizationTrustSettings.ZeroTrustOrganizationTrustSettings.hasResourceMove">has_resource_move</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-cloudflare.zeroTrustOrganizationTrustSettings.ZeroTrustOrganizationTrustSettings.importFrom">import_from</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-cloudflare.zeroTrustOrganizationTrustSettings.ZeroTrustOrganizationTrustSettings.interpolationForAttribute">interpolation_for_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-cloudflare.zeroTrustOrganizationTrustSettings.ZeroTrustOrganizationTrustSettings.moveFromId">move_from_id</a></code> | Move the resource corresponding to "id" to this resource. |
| <code><a href="#@cdktn/provider-cloudflare.zeroTrustOrganizationTrustSettings.ZeroTrustOrganizationTrustSettings.moveTo">move_to</a></code> | Moves this resource to the target resource given by moveTarget. |
| <code><a href="#@cdktn/provider-cloudflare.zeroTrustOrganizationTrustSettings.ZeroTrustOrganizationTrustSettings.moveToId">move_to_id</a></code> | Moves this resource to the resource corresponding to "id". |
| <code><a href="#@cdktn/provider-cloudflare.zeroTrustOrganizationTrustSettings.ZeroTrustOrganizationTrustSettings.resetTrustingAccounts">reset_trusting_accounts</a></code> | *No description.* |

---

##### `to_string` <a name="to_string" id="@cdktn/provider-cloudflare.zeroTrustOrganizationTrustSettings.ZeroTrustOrganizationTrustSettings.toString"></a>

```python
def to_string() -> str
```

Returns a string representation of this construct.

##### `with` <a name="with" id="@cdktn/provider-cloudflare.zeroTrustOrganizationTrustSettings.ZeroTrustOrganizationTrustSettings.with"></a>

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

###### `mixins`<sup>Required</sup> <a name="mixins" id="@cdktn/provider-cloudflare.zeroTrustOrganizationTrustSettings.ZeroTrustOrganizationTrustSettings.with.parameter.mixins"></a>

- *Type:* *constructs.IMixin

The mixins to apply.

---

##### `add_override` <a name="add_override" id="@cdktn/provider-cloudflare.zeroTrustOrganizationTrustSettings.ZeroTrustOrganizationTrustSettings.addOverride"></a>

```python
def add_override(
  path: str,
  value: typing.Any
) -> None
```

###### `path`<sup>Required</sup> <a name="path" id="@cdktn/provider-cloudflare.zeroTrustOrganizationTrustSettings.ZeroTrustOrganizationTrustSettings.addOverride.parameter.path"></a>

- *Type:* str

---

###### `value`<sup>Required</sup> <a name="value" id="@cdktn/provider-cloudflare.zeroTrustOrganizationTrustSettings.ZeroTrustOrganizationTrustSettings.addOverride.parameter.value"></a>

- *Type:* typing.Any

---

##### `override_logical_id` <a name="override_logical_id" id="@cdktn/provider-cloudflare.zeroTrustOrganizationTrustSettings.ZeroTrustOrganizationTrustSettings.overrideLogicalId"></a>

```python
def override_logical_id(
  new_logical_id: str
) -> None
```

Overrides the auto-generated logical ID with a specific ID.

###### `new_logical_id`<sup>Required</sup> <a name="new_logical_id" id="@cdktn/provider-cloudflare.zeroTrustOrganizationTrustSettings.ZeroTrustOrganizationTrustSettings.overrideLogicalId.parameter.newLogicalId"></a>

- *Type:* str

The new logical ID to use for this stack element.

---

##### `reset_override_logical_id` <a name="reset_override_logical_id" id="@cdktn/provider-cloudflare.zeroTrustOrganizationTrustSettings.ZeroTrustOrganizationTrustSettings.resetOverrideLogicalId"></a>

```python
def reset_override_logical_id() -> None
```

Resets a previously passed logical Id to use the auto-generated logical id again.

##### `to_hcl_terraform` <a name="to_hcl_terraform" id="@cdktn/provider-cloudflare.zeroTrustOrganizationTrustSettings.ZeroTrustOrganizationTrustSettings.toHclTerraform"></a>

```python
def to_hcl_terraform() -> typing.Any
```

##### `to_metadata` <a name="to_metadata" id="@cdktn/provider-cloudflare.zeroTrustOrganizationTrustSettings.ZeroTrustOrganizationTrustSettings.toMetadata"></a>

```python
def to_metadata() -> typing.Any
```

##### `to_terraform` <a name="to_terraform" id="@cdktn/provider-cloudflare.zeroTrustOrganizationTrustSettings.ZeroTrustOrganizationTrustSettings.toTerraform"></a>

```python
def to_terraform() -> typing.Any
```

Adds this resource to the terraform JSON output.

##### `add_move_target` <a name="add_move_target" id="@cdktn/provider-cloudflare.zeroTrustOrganizationTrustSettings.ZeroTrustOrganizationTrustSettings.addMoveTarget"></a>

```python
def add_move_target(
  move_target: str
) -> None
```

Adds a user defined moveTarget string to this resource to be later used in .moveTo(moveTarget) to resolve the location of the move.

###### `move_target`<sup>Required</sup> <a name="move_target" id="@cdktn/provider-cloudflare.zeroTrustOrganizationTrustSettings.ZeroTrustOrganizationTrustSettings.addMoveTarget.parameter.moveTarget"></a>

- *Type:* str

The string move target that will correspond to this resource.

---

##### `get_any_map_attribute` <a name="get_any_map_attribute" id="@cdktn/provider-cloudflare.zeroTrustOrganizationTrustSettings.ZeroTrustOrganizationTrustSettings.getAnyMapAttribute"></a>

```python
def get_any_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[typing.Any]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-cloudflare.zeroTrustOrganizationTrustSettings.ZeroTrustOrganizationTrustSettings.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_boolean_attribute` <a name="get_boolean_attribute" id="@cdktn/provider-cloudflare.zeroTrustOrganizationTrustSettings.ZeroTrustOrganizationTrustSettings.getBooleanAttribute"></a>

```python
def get_boolean_attribute(
  terraform_attribute: str
) -> IResolvable
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-cloudflare.zeroTrustOrganizationTrustSettings.ZeroTrustOrganizationTrustSettings.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_boolean_map_attribute` <a name="get_boolean_map_attribute" id="@cdktn/provider-cloudflare.zeroTrustOrganizationTrustSettings.ZeroTrustOrganizationTrustSettings.getBooleanMapAttribute"></a>

```python
def get_boolean_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[bool]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-cloudflare.zeroTrustOrganizationTrustSettings.ZeroTrustOrganizationTrustSettings.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_list_attribute` <a name="get_list_attribute" id="@cdktn/provider-cloudflare.zeroTrustOrganizationTrustSettings.ZeroTrustOrganizationTrustSettings.getListAttribute"></a>

```python
def get_list_attribute(
  terraform_attribute: str
) -> typing.List[str]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-cloudflare.zeroTrustOrganizationTrustSettings.ZeroTrustOrganizationTrustSettings.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_attribute` <a name="get_number_attribute" id="@cdktn/provider-cloudflare.zeroTrustOrganizationTrustSettings.ZeroTrustOrganizationTrustSettings.getNumberAttribute"></a>

```python
def get_number_attribute(
  terraform_attribute: str
) -> typing.Union[int, float]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-cloudflare.zeroTrustOrganizationTrustSettings.ZeroTrustOrganizationTrustSettings.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_list_attribute` <a name="get_number_list_attribute" id="@cdktn/provider-cloudflare.zeroTrustOrganizationTrustSettings.ZeroTrustOrganizationTrustSettings.getNumberListAttribute"></a>

```python
def get_number_list_attribute(
  terraform_attribute: str
) -> typing.List[typing.Union[int, float]]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-cloudflare.zeroTrustOrganizationTrustSettings.ZeroTrustOrganizationTrustSettings.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_map_attribute` <a name="get_number_map_attribute" id="@cdktn/provider-cloudflare.zeroTrustOrganizationTrustSettings.ZeroTrustOrganizationTrustSettings.getNumberMapAttribute"></a>

```python
def get_number_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[typing.Union[int, float]]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-cloudflare.zeroTrustOrganizationTrustSettings.ZeroTrustOrganizationTrustSettings.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_string_attribute` <a name="get_string_attribute" id="@cdktn/provider-cloudflare.zeroTrustOrganizationTrustSettings.ZeroTrustOrganizationTrustSettings.getStringAttribute"></a>

```python
def get_string_attribute(
  terraform_attribute: str
) -> str
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-cloudflare.zeroTrustOrganizationTrustSettings.ZeroTrustOrganizationTrustSettings.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_string_map_attribute` <a name="get_string_map_attribute" id="@cdktn/provider-cloudflare.zeroTrustOrganizationTrustSettings.ZeroTrustOrganizationTrustSettings.getStringMapAttribute"></a>

```python
def get_string_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[str]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-cloudflare.zeroTrustOrganizationTrustSettings.ZeroTrustOrganizationTrustSettings.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `has_resource_move` <a name="has_resource_move" id="@cdktn/provider-cloudflare.zeroTrustOrganizationTrustSettings.ZeroTrustOrganizationTrustSettings.hasResourceMove"></a>

```python
def has_resource_move() -> TerraformResourceMoveByTarget | TerraformResourceMoveById
```

##### `import_from` <a name="import_from" id="@cdktn/provider-cloudflare.zeroTrustOrganizationTrustSettings.ZeroTrustOrganizationTrustSettings.importFrom"></a>

```python
def import_from(
  id: str,
  provider: TerraformProvider = None
) -> None
```

###### `id`<sup>Required</sup> <a name="id" id="@cdktn/provider-cloudflare.zeroTrustOrganizationTrustSettings.ZeroTrustOrganizationTrustSettings.importFrom.parameter.id"></a>

- *Type:* str

---

###### `provider`<sup>Optional</sup> <a name="provider" id="@cdktn/provider-cloudflare.zeroTrustOrganizationTrustSettings.ZeroTrustOrganizationTrustSettings.importFrom.parameter.provider"></a>

- *Type:* cdktn.TerraformProvider

---

##### `interpolation_for_attribute` <a name="interpolation_for_attribute" id="@cdktn/provider-cloudflare.zeroTrustOrganizationTrustSettings.ZeroTrustOrganizationTrustSettings.interpolationForAttribute"></a>

```python
def interpolation_for_attribute(
  terraform_attribute: str
) -> IResolvable
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-cloudflare.zeroTrustOrganizationTrustSettings.ZeroTrustOrganizationTrustSettings.interpolationForAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `move_from_id` <a name="move_from_id" id="@cdktn/provider-cloudflare.zeroTrustOrganizationTrustSettings.ZeroTrustOrganizationTrustSettings.moveFromId"></a>

```python
def move_from_id(
  id: str
) -> None
```

Move the resource corresponding to "id" to this resource.

Note that the resource being moved from must be marked as moved using its instance function.

###### `id`<sup>Required</sup> <a name="id" id="@cdktn/provider-cloudflare.zeroTrustOrganizationTrustSettings.ZeroTrustOrganizationTrustSettings.moveFromId.parameter.id"></a>

- *Type:* str

Full id of resource being moved from, e.g. "aws_s3_bucket.example".

---

##### `move_to` <a name="move_to" id="@cdktn/provider-cloudflare.zeroTrustOrganizationTrustSettings.ZeroTrustOrganizationTrustSettings.moveTo"></a>

```python
def move_to(
  move_target: str,
  index: str | typing.Union[int, float] = None
) -> None
```

Moves this resource to the target resource given by moveTarget.

###### `move_target`<sup>Required</sup> <a name="move_target" id="@cdktn/provider-cloudflare.zeroTrustOrganizationTrustSettings.ZeroTrustOrganizationTrustSettings.moveTo.parameter.moveTarget"></a>

- *Type:* str

The previously set user defined string set by .addMoveTarget() corresponding to the resource to move to.

---

###### `index`<sup>Optional</sup> <a name="index" id="@cdktn/provider-cloudflare.zeroTrustOrganizationTrustSettings.ZeroTrustOrganizationTrustSettings.moveTo.parameter.index"></a>

- *Type:* str | typing.Union[int, float]

Optional The index corresponding to the key the resource is to appear in the foreach of a resource to move to.

---

##### `move_to_id` <a name="move_to_id" id="@cdktn/provider-cloudflare.zeroTrustOrganizationTrustSettings.ZeroTrustOrganizationTrustSettings.moveToId"></a>

```python
def move_to_id(
  id: str
) -> None
```

Moves this resource to the resource corresponding to "id".

###### `id`<sup>Required</sup> <a name="id" id="@cdktn/provider-cloudflare.zeroTrustOrganizationTrustSettings.ZeroTrustOrganizationTrustSettings.moveToId.parameter.id"></a>

- *Type:* str

Full id of resource to move to, e.g. "aws_s3_bucket.example".

---

##### `reset_trusting_accounts` <a name="reset_trusting_accounts" id="@cdktn/provider-cloudflare.zeroTrustOrganizationTrustSettings.ZeroTrustOrganizationTrustSettings.resetTrustingAccounts"></a>

```python
def reset_trusting_accounts() -> None
```

#### Static Functions <a name="Static Functions" id="Static Functions"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-cloudflare.zeroTrustOrganizationTrustSettings.ZeroTrustOrganizationTrustSettings.isConstruct">is_construct</a></code> | Checks if `x` is a construct. |
| <code><a href="#@cdktn/provider-cloudflare.zeroTrustOrganizationTrustSettings.ZeroTrustOrganizationTrustSettings.isTerraformElement">is_terraform_element</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-cloudflare.zeroTrustOrganizationTrustSettings.ZeroTrustOrganizationTrustSettings.isTerraformResource">is_terraform_resource</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-cloudflare.zeroTrustOrganizationTrustSettings.ZeroTrustOrganizationTrustSettings.generateConfigForImport">generate_config_for_import</a></code> | Generates CDKTN code for importing a ZeroTrustOrganizationTrustSettings resource upon running "cdktn plan <stack-name>". |

---

##### `is_construct` <a name="is_construct" id="@cdktn/provider-cloudflare.zeroTrustOrganizationTrustSettings.ZeroTrustOrganizationTrustSettings.isConstruct"></a>

```python
from cdktn_provider_cloudflare import zero_trust_organization_trust_settings

zeroTrustOrganizationTrustSettings.ZeroTrustOrganizationTrustSettings.is_construct(
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

###### `x`<sup>Required</sup> <a name="x" id="@cdktn/provider-cloudflare.zeroTrustOrganizationTrustSettings.ZeroTrustOrganizationTrustSettings.isConstruct.parameter.x"></a>

- *Type:* typing.Any

Any object.

---

##### `is_terraform_element` <a name="is_terraform_element" id="@cdktn/provider-cloudflare.zeroTrustOrganizationTrustSettings.ZeroTrustOrganizationTrustSettings.isTerraformElement"></a>

```python
from cdktn_provider_cloudflare import zero_trust_organization_trust_settings

zeroTrustOrganizationTrustSettings.ZeroTrustOrganizationTrustSettings.is_terraform_element(
  x: typing.Any
)
```

###### `x`<sup>Required</sup> <a name="x" id="@cdktn/provider-cloudflare.zeroTrustOrganizationTrustSettings.ZeroTrustOrganizationTrustSettings.isTerraformElement.parameter.x"></a>

- *Type:* typing.Any

---

##### `is_terraform_resource` <a name="is_terraform_resource" id="@cdktn/provider-cloudflare.zeroTrustOrganizationTrustSettings.ZeroTrustOrganizationTrustSettings.isTerraformResource"></a>

```python
from cdktn_provider_cloudflare import zero_trust_organization_trust_settings

zeroTrustOrganizationTrustSettings.ZeroTrustOrganizationTrustSettings.is_terraform_resource(
  x: typing.Any
)
```

###### `x`<sup>Required</sup> <a name="x" id="@cdktn/provider-cloudflare.zeroTrustOrganizationTrustSettings.ZeroTrustOrganizationTrustSettings.isTerraformResource.parameter.x"></a>

- *Type:* typing.Any

---

##### `generate_config_for_import` <a name="generate_config_for_import" id="@cdktn/provider-cloudflare.zeroTrustOrganizationTrustSettings.ZeroTrustOrganizationTrustSettings.generateConfigForImport"></a>

```python
from cdktn_provider_cloudflare import zero_trust_organization_trust_settings

zeroTrustOrganizationTrustSettings.ZeroTrustOrganizationTrustSettings.generate_config_for_import(
  scope: Construct,
  import_to_id: str,
  import_from_id: str,
  provider: TerraformProvider = None
)
```

Generates CDKTN code for importing a ZeroTrustOrganizationTrustSettings resource upon running "cdktn plan <stack-name>".

###### `scope`<sup>Required</sup> <a name="scope" id="@cdktn/provider-cloudflare.zeroTrustOrganizationTrustSettings.ZeroTrustOrganizationTrustSettings.generateConfigForImport.parameter.scope"></a>

- *Type:* constructs.Construct

The scope in which to define this construct.

---

###### `import_to_id`<sup>Required</sup> <a name="import_to_id" id="@cdktn/provider-cloudflare.zeroTrustOrganizationTrustSettings.ZeroTrustOrganizationTrustSettings.generateConfigForImport.parameter.importToId"></a>

- *Type:* str

The construct id used in the generated config for the ZeroTrustOrganizationTrustSettings to import.

---

###### `import_from_id`<sup>Required</sup> <a name="import_from_id" id="@cdktn/provider-cloudflare.zeroTrustOrganizationTrustSettings.ZeroTrustOrganizationTrustSettings.generateConfigForImport.parameter.importFromId"></a>

- *Type:* str

The id of the existing ZeroTrustOrganizationTrustSettings that should be imported.

Refer to the {@link https://registry.terraform.io/providers/cloudflare/cloudflare/5.29.0/docs/resources/zero_trust_organization_trust_settings#import import section} in the documentation of this resource for the id to use

---

###### `provider`<sup>Optional</sup> <a name="provider" id="@cdktn/provider-cloudflare.zeroTrustOrganizationTrustSettings.ZeroTrustOrganizationTrustSettings.generateConfigForImport.parameter.provider"></a>

- *Type:* cdktn.TerraformProvider

? Optional instance of the provider where the ZeroTrustOrganizationTrustSettings to import is found.

---

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-cloudflare.zeroTrustOrganizationTrustSettings.ZeroTrustOrganizationTrustSettings.property.node">node</a></code> | <code>constructs.Node</code> | The tree node. |
| <code><a href="#@cdktn/provider-cloudflare.zeroTrustOrganizationTrustSettings.ZeroTrustOrganizationTrustSettings.property.cdktfStack">cdktf_stack</a></code> | <code>cdktn.TerraformStack</code> | *No description.* |
| <code><a href="#@cdktn/provider-cloudflare.zeroTrustOrganizationTrustSettings.ZeroTrustOrganizationTrustSettings.property.fqn">fqn</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktn/provider-cloudflare.zeroTrustOrganizationTrustSettings.ZeroTrustOrganizationTrustSettings.property.friendlyUniqueId">friendly_unique_id</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktn/provider-cloudflare.zeroTrustOrganizationTrustSettings.ZeroTrustOrganizationTrustSettings.property.terraformMetaArguments">terraform_meta_arguments</a></code> | <code>typing.Mapping[typing.Any]</code> | *No description.* |
| <code><a href="#@cdktn/provider-cloudflare.zeroTrustOrganizationTrustSettings.ZeroTrustOrganizationTrustSettings.property.terraformResourceType">terraform_resource_type</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktn/provider-cloudflare.zeroTrustOrganizationTrustSettings.ZeroTrustOrganizationTrustSettings.property.terraformGeneratorMetadata">terraform_generator_metadata</a></code> | <code>cdktn.TerraformProviderGeneratorMetadata</code> | *No description.* |
| <code><a href="#@cdktn/provider-cloudflare.zeroTrustOrganizationTrustSettings.ZeroTrustOrganizationTrustSettings.property.connection">connection</a></code> | <code>cdktn.SSHProvisionerConnection \| cdktn.WinrmProvisionerConnection</code> | *No description.* |
| <code><a href="#@cdktn/provider-cloudflare.zeroTrustOrganizationTrustSettings.ZeroTrustOrganizationTrustSettings.property.count">count</a></code> | <code>typing.Union[int, float] \| cdktn.TerraformCount</code> | *No description.* |
| <code><a href="#@cdktn/provider-cloudflare.zeroTrustOrganizationTrustSettings.ZeroTrustOrganizationTrustSettings.property.dependsOn">depends_on</a></code> | <code>typing.List[str]</code> | *No description.* |
| <code><a href="#@cdktn/provider-cloudflare.zeroTrustOrganizationTrustSettings.ZeroTrustOrganizationTrustSettings.property.forEach">for_each</a></code> | <code>cdktn.ITerraformIterator</code> | *No description.* |
| <code><a href="#@cdktn/provider-cloudflare.zeroTrustOrganizationTrustSettings.ZeroTrustOrganizationTrustSettings.property.lifecycle">lifecycle</a></code> | <code>cdktn.TerraformResourceLifecycle</code> | *No description.* |
| <code><a href="#@cdktn/provider-cloudflare.zeroTrustOrganizationTrustSettings.ZeroTrustOrganizationTrustSettings.property.provider">provider</a></code> | <code>cdktn.TerraformProvider</code> | *No description.* |
| <code><a href="#@cdktn/provider-cloudflare.zeroTrustOrganizationTrustSettings.ZeroTrustOrganizationTrustSettings.property.provisioners">provisioners</a></code> | <code>typing.List[cdktn.FileProvisioner \| cdktn.LocalExecProvisioner \| cdktn.RemoteExecProvisioner]</code> | *No description.* |
| <code><a href="#@cdktn/provider-cloudflare.zeroTrustOrganizationTrustSettings.ZeroTrustOrganizationTrustSettings.property.id">id</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktn/provider-cloudflare.zeroTrustOrganizationTrustSettings.ZeroTrustOrganizationTrustSettings.property.accountIdInput">account_id_input</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktn/provider-cloudflare.zeroTrustOrganizationTrustSettings.ZeroTrustOrganizationTrustSettings.property.grantTrustToAllAccountsInOrgInput">grant_trust_to_all_accounts_in_org_input</a></code> | <code>bool \| cdktn.IResolvable</code> | *No description.* |
| <code><a href="#@cdktn/provider-cloudflare.zeroTrustOrganizationTrustSettings.ZeroTrustOrganizationTrustSettings.property.trustingAccountsInput">trusting_accounts_input</a></code> | <code>typing.List[str]</code> | *No description.* |
| <code><a href="#@cdktn/provider-cloudflare.zeroTrustOrganizationTrustSettings.ZeroTrustOrganizationTrustSettings.property.accountId">account_id</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktn/provider-cloudflare.zeroTrustOrganizationTrustSettings.ZeroTrustOrganizationTrustSettings.property.grantTrustToAllAccountsInOrg">grant_trust_to_all_accounts_in_org</a></code> | <code>bool \| cdktn.IResolvable</code> | *No description.* |
| <code><a href="#@cdktn/provider-cloudflare.zeroTrustOrganizationTrustSettings.ZeroTrustOrganizationTrustSettings.property.trustingAccounts">trusting_accounts</a></code> | <code>typing.List[str]</code> | *No description.* |

---

##### `node`<sup>Required</sup> <a name="node" id="@cdktn/provider-cloudflare.zeroTrustOrganizationTrustSettings.ZeroTrustOrganizationTrustSettings.property.node"></a>

```python
node: Node
```

- *Type:* constructs.Node

The tree node.

---

##### `cdktf_stack`<sup>Required</sup> <a name="cdktf_stack" id="@cdktn/provider-cloudflare.zeroTrustOrganizationTrustSettings.ZeroTrustOrganizationTrustSettings.property.cdktfStack"></a>

```python
cdktf_stack: TerraformStack
```

- *Type:* cdktn.TerraformStack

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktn/provider-cloudflare.zeroTrustOrganizationTrustSettings.ZeroTrustOrganizationTrustSettings.property.fqn"></a>

```python
fqn: str
```

- *Type:* str

---

##### `friendly_unique_id`<sup>Required</sup> <a name="friendly_unique_id" id="@cdktn/provider-cloudflare.zeroTrustOrganizationTrustSettings.ZeroTrustOrganizationTrustSettings.property.friendlyUniqueId"></a>

```python
friendly_unique_id: str
```

- *Type:* str

---

##### `terraform_meta_arguments`<sup>Required</sup> <a name="terraform_meta_arguments" id="@cdktn/provider-cloudflare.zeroTrustOrganizationTrustSettings.ZeroTrustOrganizationTrustSettings.property.terraformMetaArguments"></a>

```python
terraform_meta_arguments: typing.Mapping[typing.Any]
```

- *Type:* typing.Mapping[typing.Any]

---

##### `terraform_resource_type`<sup>Required</sup> <a name="terraform_resource_type" id="@cdktn/provider-cloudflare.zeroTrustOrganizationTrustSettings.ZeroTrustOrganizationTrustSettings.property.terraformResourceType"></a>

```python
terraform_resource_type: str
```

- *Type:* str

---

##### `terraform_generator_metadata`<sup>Optional</sup> <a name="terraform_generator_metadata" id="@cdktn/provider-cloudflare.zeroTrustOrganizationTrustSettings.ZeroTrustOrganizationTrustSettings.property.terraformGeneratorMetadata"></a>

```python
terraform_generator_metadata: TerraformProviderGeneratorMetadata
```

- *Type:* cdktn.TerraformProviderGeneratorMetadata

---

##### `connection`<sup>Optional</sup> <a name="connection" id="@cdktn/provider-cloudflare.zeroTrustOrganizationTrustSettings.ZeroTrustOrganizationTrustSettings.property.connection"></a>

```python
connection: SSHProvisionerConnection | WinrmProvisionerConnection
```

- *Type:* cdktn.SSHProvisionerConnection | cdktn.WinrmProvisionerConnection

---

##### `count`<sup>Optional</sup> <a name="count" id="@cdktn/provider-cloudflare.zeroTrustOrganizationTrustSettings.ZeroTrustOrganizationTrustSettings.property.count"></a>

```python
count: typing.Union[int, float] | TerraformCount
```

- *Type:* typing.Union[int, float] | cdktn.TerraformCount

---

##### `depends_on`<sup>Optional</sup> <a name="depends_on" id="@cdktn/provider-cloudflare.zeroTrustOrganizationTrustSettings.ZeroTrustOrganizationTrustSettings.property.dependsOn"></a>

```python
depends_on: typing.List[str]
```

- *Type:* typing.List[str]

---

##### `for_each`<sup>Optional</sup> <a name="for_each" id="@cdktn/provider-cloudflare.zeroTrustOrganizationTrustSettings.ZeroTrustOrganizationTrustSettings.property.forEach"></a>

```python
for_each: ITerraformIterator
```

- *Type:* cdktn.ITerraformIterator

---

##### `lifecycle`<sup>Optional</sup> <a name="lifecycle" id="@cdktn/provider-cloudflare.zeroTrustOrganizationTrustSettings.ZeroTrustOrganizationTrustSettings.property.lifecycle"></a>

```python
lifecycle: TerraformResourceLifecycle
```

- *Type:* cdktn.TerraformResourceLifecycle

---

##### `provider`<sup>Optional</sup> <a name="provider" id="@cdktn/provider-cloudflare.zeroTrustOrganizationTrustSettings.ZeroTrustOrganizationTrustSettings.property.provider"></a>

```python
provider: TerraformProvider
```

- *Type:* cdktn.TerraformProvider

---

##### `provisioners`<sup>Optional</sup> <a name="provisioners" id="@cdktn/provider-cloudflare.zeroTrustOrganizationTrustSettings.ZeroTrustOrganizationTrustSettings.property.provisioners"></a>

```python
provisioners: typing.List[FileProvisioner | LocalExecProvisioner | RemoteExecProvisioner]
```

- *Type:* typing.List[cdktn.FileProvisioner | cdktn.LocalExecProvisioner | cdktn.RemoteExecProvisioner]

---

##### `id`<sup>Required</sup> <a name="id" id="@cdktn/provider-cloudflare.zeroTrustOrganizationTrustSettings.ZeroTrustOrganizationTrustSettings.property.id"></a>

```python
id: str
```

- *Type:* str

---

##### `account_id_input`<sup>Optional</sup> <a name="account_id_input" id="@cdktn/provider-cloudflare.zeroTrustOrganizationTrustSettings.ZeroTrustOrganizationTrustSettings.property.accountIdInput"></a>

```python
account_id_input: str
```

- *Type:* str

---

##### `grant_trust_to_all_accounts_in_org_input`<sup>Optional</sup> <a name="grant_trust_to_all_accounts_in_org_input" id="@cdktn/provider-cloudflare.zeroTrustOrganizationTrustSettings.ZeroTrustOrganizationTrustSettings.property.grantTrustToAllAccountsInOrgInput"></a>

```python
grant_trust_to_all_accounts_in_org_input: bool | IResolvable
```

- *Type:* bool | cdktn.IResolvable

---

##### `trusting_accounts_input`<sup>Optional</sup> <a name="trusting_accounts_input" id="@cdktn/provider-cloudflare.zeroTrustOrganizationTrustSettings.ZeroTrustOrganizationTrustSettings.property.trustingAccountsInput"></a>

```python
trusting_accounts_input: typing.List[str]
```

- *Type:* typing.List[str]

---

##### `account_id`<sup>Required</sup> <a name="account_id" id="@cdktn/provider-cloudflare.zeroTrustOrganizationTrustSettings.ZeroTrustOrganizationTrustSettings.property.accountId"></a>

```python
account_id: str
```

- *Type:* str

---

##### `grant_trust_to_all_accounts_in_org`<sup>Required</sup> <a name="grant_trust_to_all_accounts_in_org" id="@cdktn/provider-cloudflare.zeroTrustOrganizationTrustSettings.ZeroTrustOrganizationTrustSettings.property.grantTrustToAllAccountsInOrg"></a>

```python
grant_trust_to_all_accounts_in_org: bool | IResolvable
```

- *Type:* bool | cdktn.IResolvable

---

##### `trusting_accounts`<sup>Required</sup> <a name="trusting_accounts" id="@cdktn/provider-cloudflare.zeroTrustOrganizationTrustSettings.ZeroTrustOrganizationTrustSettings.property.trustingAccounts"></a>

```python
trusting_accounts: typing.List[str]
```

- *Type:* typing.List[str]

---

#### Constants <a name="Constants" id="Constants"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-cloudflare.zeroTrustOrganizationTrustSettings.ZeroTrustOrganizationTrustSettings.property.tfResourceType">tfResourceType</a></code> | <code>str</code> | *No description.* |

---

##### `tfResourceType`<sup>Required</sup> <a name="tfResourceType" id="@cdktn/provider-cloudflare.zeroTrustOrganizationTrustSettings.ZeroTrustOrganizationTrustSettings.property.tfResourceType"></a>

```python
tfResourceType: str
```

- *Type:* str

---

## Structs <a name="Structs" id="Structs"></a>

### ZeroTrustOrganizationTrustSettingsConfig <a name="ZeroTrustOrganizationTrustSettingsConfig" id="@cdktn/provider-cloudflare.zeroTrustOrganizationTrustSettings.ZeroTrustOrganizationTrustSettingsConfig"></a>

#### Initializer <a name="Initializer" id="@cdktn/provider-cloudflare.zeroTrustOrganizationTrustSettings.ZeroTrustOrganizationTrustSettingsConfig.Initializer"></a>

```python
from cdktn_provider_cloudflare import zero_trust_organization_trust_settings

zeroTrustOrganizationTrustSettings.ZeroTrustOrganizationTrustSettingsConfig(
  connection: SSHProvisionerConnection | WinrmProvisionerConnection = None,
  count: typing.Union[int, float] | TerraformCount = None,
  depends_on: typing.List[ITerraformDependable] = None,
  for_each: ITerraformIterator = None,
  lifecycle: TerraformResourceLifecycle = None,
  provider: TerraformProvider = None,
  provisioners: typing.List[FileProvisioner | LocalExecProvisioner | RemoteExecProvisioner] = None,
  account_id: str,
  grant_trust_to_all_accounts_in_org: bool | IResolvable,
  trusting_accounts: typing.List[str] = None
)
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-cloudflare.zeroTrustOrganizationTrustSettings.ZeroTrustOrganizationTrustSettingsConfig.property.connection">connection</a></code> | <code>cdktn.SSHProvisionerConnection \| cdktn.WinrmProvisionerConnection</code> | *No description.* |
| <code><a href="#@cdktn/provider-cloudflare.zeroTrustOrganizationTrustSettings.ZeroTrustOrganizationTrustSettingsConfig.property.count">count</a></code> | <code>typing.Union[int, float] \| cdktn.TerraformCount</code> | *No description.* |
| <code><a href="#@cdktn/provider-cloudflare.zeroTrustOrganizationTrustSettings.ZeroTrustOrganizationTrustSettingsConfig.property.dependsOn">depends_on</a></code> | <code>typing.List[cdktn.ITerraformDependable]</code> | *No description.* |
| <code><a href="#@cdktn/provider-cloudflare.zeroTrustOrganizationTrustSettings.ZeroTrustOrganizationTrustSettingsConfig.property.forEach">for_each</a></code> | <code>cdktn.ITerraformIterator</code> | *No description.* |
| <code><a href="#@cdktn/provider-cloudflare.zeroTrustOrganizationTrustSettings.ZeroTrustOrganizationTrustSettingsConfig.property.lifecycle">lifecycle</a></code> | <code>cdktn.TerraformResourceLifecycle</code> | *No description.* |
| <code><a href="#@cdktn/provider-cloudflare.zeroTrustOrganizationTrustSettings.ZeroTrustOrganizationTrustSettingsConfig.property.provider">provider</a></code> | <code>cdktn.TerraformProvider</code> | *No description.* |
| <code><a href="#@cdktn/provider-cloudflare.zeroTrustOrganizationTrustSettings.ZeroTrustOrganizationTrustSettingsConfig.property.provisioners">provisioners</a></code> | <code>typing.List[cdktn.FileProvisioner \| cdktn.LocalExecProvisioner \| cdktn.RemoteExecProvisioner]</code> | *No description.* |
| <code><a href="#@cdktn/provider-cloudflare.zeroTrustOrganizationTrustSettings.ZeroTrustOrganizationTrustSettingsConfig.property.accountId">account_id</a></code> | <code>str</code> | Identifier. |
| <code><a href="#@cdktn/provider-cloudflare.zeroTrustOrganizationTrustSettings.ZeroTrustOrganizationTrustSettingsConfig.property.grantTrustToAllAccountsInOrg">grant_trust_to_all_accounts_in_org</a></code> | <code>bool \| cdktn.IResolvable</code> | Whether all accounts in the organization are trusted to use this account's cross-account Access resources. |
| <code><a href="#@cdktn/provider-cloudflare.zeroTrustOrganizationTrustSettings.ZeroTrustOrganizationTrustSettingsConfig.property.trustingAccounts">trusting_accounts</a></code> | <code>typing.List[str]</code> | Explicit account IDs trusted to use this account's cross-account Access resources. |

---

##### `connection`<sup>Optional</sup> <a name="connection" id="@cdktn/provider-cloudflare.zeroTrustOrganizationTrustSettings.ZeroTrustOrganizationTrustSettingsConfig.property.connection"></a>

```python
connection: SSHProvisionerConnection | WinrmProvisionerConnection
```

- *Type:* cdktn.SSHProvisionerConnection | cdktn.WinrmProvisionerConnection

---

##### `count`<sup>Optional</sup> <a name="count" id="@cdktn/provider-cloudflare.zeroTrustOrganizationTrustSettings.ZeroTrustOrganizationTrustSettingsConfig.property.count"></a>

```python
count: typing.Union[int, float] | TerraformCount
```

- *Type:* typing.Union[int, float] | cdktn.TerraformCount

---

##### `depends_on`<sup>Optional</sup> <a name="depends_on" id="@cdktn/provider-cloudflare.zeroTrustOrganizationTrustSettings.ZeroTrustOrganizationTrustSettingsConfig.property.dependsOn"></a>

```python
depends_on: typing.List[ITerraformDependable]
```

- *Type:* typing.List[cdktn.ITerraformDependable]

---

##### `for_each`<sup>Optional</sup> <a name="for_each" id="@cdktn/provider-cloudflare.zeroTrustOrganizationTrustSettings.ZeroTrustOrganizationTrustSettingsConfig.property.forEach"></a>

```python
for_each: ITerraformIterator
```

- *Type:* cdktn.ITerraformIterator

---

##### `lifecycle`<sup>Optional</sup> <a name="lifecycle" id="@cdktn/provider-cloudflare.zeroTrustOrganizationTrustSettings.ZeroTrustOrganizationTrustSettingsConfig.property.lifecycle"></a>

```python
lifecycle: TerraformResourceLifecycle
```

- *Type:* cdktn.TerraformResourceLifecycle

---

##### `provider`<sup>Optional</sup> <a name="provider" id="@cdktn/provider-cloudflare.zeroTrustOrganizationTrustSettings.ZeroTrustOrganizationTrustSettingsConfig.property.provider"></a>

```python
provider: TerraformProvider
```

- *Type:* cdktn.TerraformProvider

---

##### `provisioners`<sup>Optional</sup> <a name="provisioners" id="@cdktn/provider-cloudflare.zeroTrustOrganizationTrustSettings.ZeroTrustOrganizationTrustSettingsConfig.property.provisioners"></a>

```python
provisioners: typing.List[FileProvisioner | LocalExecProvisioner | RemoteExecProvisioner]
```

- *Type:* typing.List[cdktn.FileProvisioner | cdktn.LocalExecProvisioner | cdktn.RemoteExecProvisioner]

---

##### `account_id`<sup>Required</sup> <a name="account_id" id="@cdktn/provider-cloudflare.zeroTrustOrganizationTrustSettings.ZeroTrustOrganizationTrustSettingsConfig.property.accountId"></a>

```python
account_id: str
```

- *Type:* str

Identifier.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/cloudflare/cloudflare/5.29.0/docs/resources/zero_trust_organization_trust_settings#account_id ZeroTrustOrganizationTrustSettings#account_id}

---

##### `grant_trust_to_all_accounts_in_org`<sup>Required</sup> <a name="grant_trust_to_all_accounts_in_org" id="@cdktn/provider-cloudflare.zeroTrustOrganizationTrustSettings.ZeroTrustOrganizationTrustSettingsConfig.property.grantTrustToAllAccountsInOrg"></a>

```python
grant_trust_to_all_accounts_in_org: bool | IResolvable
```

- *Type:* bool | cdktn.IResolvable

Whether all accounts in the organization are trusted to use this account's cross-account Access resources.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/cloudflare/cloudflare/5.29.0/docs/resources/zero_trust_organization_trust_settings#grant_trust_to_all_accounts_in_org ZeroTrustOrganizationTrustSettings#grant_trust_to_all_accounts_in_org}

---

##### `trusting_accounts`<sup>Optional</sup> <a name="trusting_accounts" id="@cdktn/provider-cloudflare.zeroTrustOrganizationTrustSettings.ZeroTrustOrganizationTrustSettingsConfig.property.trustingAccounts"></a>

```python
trusting_accounts: typing.List[str]
```

- *Type:* typing.List[str]

Explicit account IDs trusted to use this account's cross-account Access resources.

At most 100 unique valid account IDs are accepted. Omitted from responses when empty.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/cloudflare/cloudflare/5.29.0/docs/resources/zero_trust_organization_trust_settings#trusting_accounts ZeroTrustOrganizationTrustSettings#trusting_accounts}

---



