# `customCsr` Submodule <a name="`customCsr` Submodule" id="@cdktn/provider-cloudflare.customCsr"></a>

## Constructs <a name="Constructs" id="Constructs"></a>

### CustomCsr <a name="CustomCsr" id="@cdktn/provider-cloudflare.customCsr.CustomCsr"></a>

Represents a {@link https://registry.terraform.io/providers/cloudflare/cloudflare/5.21.1/docs/resources/custom_csr cloudflare_custom_csr}.

#### Initializers <a name="Initializers" id="@cdktn/provider-cloudflare.customCsr.CustomCsr.Initializer"></a>

```python
from cdktn_provider_cloudflare import custom_csr

customCsr.CustomCsr(
  scope: Construct,
  id: str,
  connection: SSHProvisionerConnection | WinrmProvisionerConnection = None,
  count: typing.Union[int, float] | TerraformCount = None,
  depends_on: typing.List[ITerraformDependable] = None,
  for_each: ITerraformIterator = None,
  lifecycle: TerraformResourceLifecycle = None,
  provider: TerraformProvider = None,
  provisioners: typing.List[FileProvisioner | LocalExecProvisioner | RemoteExecProvisioner] = None,
  common_name: str,
  country: str,
  locality: str,
  organization: str,
  sans: typing.List[str],
  state: str,
  account_id: str = None,
  description: str = None,
  key_type: str = None,
  name: str = None,
  organizational_unit: str = None,
  zone_id: str = None
)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-cloudflare.customCsr.CustomCsr.Initializer.parameter.scope">scope</a></code> | <code>constructs.Construct</code> | The scope in which to define this construct. |
| <code><a href="#@cdktn/provider-cloudflare.customCsr.CustomCsr.Initializer.parameter.id">id</a></code> | <code>str</code> | The scoped construct ID. |
| <code><a href="#@cdktn/provider-cloudflare.customCsr.CustomCsr.Initializer.parameter.connection">connection</a></code> | <code>cdktn.SSHProvisionerConnection \| cdktn.WinrmProvisionerConnection</code> | *No description.* |
| <code><a href="#@cdktn/provider-cloudflare.customCsr.CustomCsr.Initializer.parameter.count">count</a></code> | <code>typing.Union[int, float] \| cdktn.TerraformCount</code> | *No description.* |
| <code><a href="#@cdktn/provider-cloudflare.customCsr.CustomCsr.Initializer.parameter.dependsOn">depends_on</a></code> | <code>typing.List[cdktn.ITerraformDependable]</code> | *No description.* |
| <code><a href="#@cdktn/provider-cloudflare.customCsr.CustomCsr.Initializer.parameter.forEach">for_each</a></code> | <code>cdktn.ITerraformIterator</code> | *No description.* |
| <code><a href="#@cdktn/provider-cloudflare.customCsr.CustomCsr.Initializer.parameter.lifecycle">lifecycle</a></code> | <code>cdktn.TerraformResourceLifecycle</code> | *No description.* |
| <code><a href="#@cdktn/provider-cloudflare.customCsr.CustomCsr.Initializer.parameter.provider">provider</a></code> | <code>cdktn.TerraformProvider</code> | *No description.* |
| <code><a href="#@cdktn/provider-cloudflare.customCsr.CustomCsr.Initializer.parameter.provisioners">provisioners</a></code> | <code>typing.List[cdktn.FileProvisioner \| cdktn.LocalExecProvisioner \| cdktn.RemoteExecProvisioner]</code> | *No description.* |
| <code><a href="#@cdktn/provider-cloudflare.customCsr.CustomCsr.Initializer.parameter.commonName">common_name</a></code> | <code>str</code> | The common name (domain) for the CSR. Must be at most 64 characters. |
| <code><a href="#@cdktn/provider-cloudflare.customCsr.CustomCsr.Initializer.parameter.country">country</a></code> | <code>str</code> | Two-letter ISO 3166-1 alpha-2 country code. |
| <code><a href="#@cdktn/provider-cloudflare.customCsr.CustomCsr.Initializer.parameter.locality">locality</a></code> | <code>str</code> | City or locality name. |
| <code><a href="#@cdktn/provider-cloudflare.customCsr.CustomCsr.Initializer.parameter.organization">organization</a></code> | <code>str</code> | Organization name. |
| <code><a href="#@cdktn/provider-cloudflare.customCsr.CustomCsr.Initializer.parameter.sans">sans</a></code> | <code>typing.List[str]</code> | Subject Alternative Names for the CSR. At least one SAN is required. |
| <code><a href="#@cdktn/provider-cloudflare.customCsr.CustomCsr.Initializer.parameter.state">state</a></code> | <code>str</code> | State or province name. |
| <code><a href="#@cdktn/provider-cloudflare.customCsr.CustomCsr.Initializer.parameter.accountId">account_id</a></code> | <code>str</code> | The Account ID to use for this endpoint. Mutually exclusive with the Zone ID. |
| <code><a href="#@cdktn/provider-cloudflare.customCsr.CustomCsr.Initializer.parameter.description">description</a></code> | <code>str</code> | Optional description for the CSR. |
| <code><a href="#@cdktn/provider-cloudflare.customCsr.CustomCsr.Initializer.parameter.keyType">key_type</a></code> | <code>str</code> | Key algorithm to use for the CSR. Defaults to rsa2048 if not specified. Available values: "rsa2048", "p256v1". |
| <code><a href="#@cdktn/provider-cloudflare.customCsr.CustomCsr.Initializer.parameter.name">name</a></code> | <code>str</code> | Human-readable name for the CSR. |
| <code><a href="#@cdktn/provider-cloudflare.customCsr.CustomCsr.Initializer.parameter.organizationalUnit">organizational_unit</a></code> | <code>str</code> | Organizational unit name. |
| <code><a href="#@cdktn/provider-cloudflare.customCsr.CustomCsr.Initializer.parameter.zoneId">zone_id</a></code> | <code>str</code> | The Zone ID to use for this endpoint. Mutually exclusive with the Account ID. |

---

##### `scope`<sup>Required</sup> <a name="scope" id="@cdktn/provider-cloudflare.customCsr.CustomCsr.Initializer.parameter.scope"></a>

- *Type:* constructs.Construct

The scope in which to define this construct.

---

##### `id`<sup>Required</sup> <a name="id" id="@cdktn/provider-cloudflare.customCsr.CustomCsr.Initializer.parameter.id"></a>

- *Type:* str

The scoped construct ID.

Must be unique amongst siblings in the same scope

---

##### `connection`<sup>Optional</sup> <a name="connection" id="@cdktn/provider-cloudflare.customCsr.CustomCsr.Initializer.parameter.connection"></a>

- *Type:* cdktn.SSHProvisionerConnection | cdktn.WinrmProvisionerConnection

---

##### `count`<sup>Optional</sup> <a name="count" id="@cdktn/provider-cloudflare.customCsr.CustomCsr.Initializer.parameter.count"></a>

- *Type:* typing.Union[int, float] | cdktn.TerraformCount

---

##### `depends_on`<sup>Optional</sup> <a name="depends_on" id="@cdktn/provider-cloudflare.customCsr.CustomCsr.Initializer.parameter.dependsOn"></a>

- *Type:* typing.List[cdktn.ITerraformDependable]

---

##### `for_each`<sup>Optional</sup> <a name="for_each" id="@cdktn/provider-cloudflare.customCsr.CustomCsr.Initializer.parameter.forEach"></a>

- *Type:* cdktn.ITerraformIterator

---

##### `lifecycle`<sup>Optional</sup> <a name="lifecycle" id="@cdktn/provider-cloudflare.customCsr.CustomCsr.Initializer.parameter.lifecycle"></a>

- *Type:* cdktn.TerraformResourceLifecycle

---

##### `provider`<sup>Optional</sup> <a name="provider" id="@cdktn/provider-cloudflare.customCsr.CustomCsr.Initializer.parameter.provider"></a>

- *Type:* cdktn.TerraformProvider

---

##### `provisioners`<sup>Optional</sup> <a name="provisioners" id="@cdktn/provider-cloudflare.customCsr.CustomCsr.Initializer.parameter.provisioners"></a>

- *Type:* typing.List[cdktn.FileProvisioner | cdktn.LocalExecProvisioner | cdktn.RemoteExecProvisioner]

---

##### `common_name`<sup>Required</sup> <a name="common_name" id="@cdktn/provider-cloudflare.customCsr.CustomCsr.Initializer.parameter.commonName"></a>

- *Type:* str

The common name (domain) for the CSR. Must be at most 64 characters.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/cloudflare/cloudflare/5.21.1/docs/resources/custom_csr#common_name CustomCsr#common_name}

---

##### `country`<sup>Required</sup> <a name="country" id="@cdktn/provider-cloudflare.customCsr.CustomCsr.Initializer.parameter.country"></a>

- *Type:* str

Two-letter ISO 3166-1 alpha-2 country code.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/cloudflare/cloudflare/5.21.1/docs/resources/custom_csr#country CustomCsr#country}

---

##### `locality`<sup>Required</sup> <a name="locality" id="@cdktn/provider-cloudflare.customCsr.CustomCsr.Initializer.parameter.locality"></a>

- *Type:* str

City or locality name.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/cloudflare/cloudflare/5.21.1/docs/resources/custom_csr#locality CustomCsr#locality}

---

##### `organization`<sup>Required</sup> <a name="organization" id="@cdktn/provider-cloudflare.customCsr.CustomCsr.Initializer.parameter.organization"></a>

- *Type:* str

Organization name.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/cloudflare/cloudflare/5.21.1/docs/resources/custom_csr#organization CustomCsr#organization}

---

##### `sans`<sup>Required</sup> <a name="sans" id="@cdktn/provider-cloudflare.customCsr.CustomCsr.Initializer.parameter.sans"></a>

- *Type:* typing.List[str]

Subject Alternative Names for the CSR. At least one SAN is required.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/cloudflare/cloudflare/5.21.1/docs/resources/custom_csr#sans CustomCsr#sans}

---

##### `state`<sup>Required</sup> <a name="state" id="@cdktn/provider-cloudflare.customCsr.CustomCsr.Initializer.parameter.state"></a>

- *Type:* str

State or province name.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/cloudflare/cloudflare/5.21.1/docs/resources/custom_csr#state CustomCsr#state}

---

##### `account_id`<sup>Optional</sup> <a name="account_id" id="@cdktn/provider-cloudflare.customCsr.CustomCsr.Initializer.parameter.accountId"></a>

- *Type:* str

The Account ID to use for this endpoint. Mutually exclusive with the Zone ID.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/cloudflare/cloudflare/5.21.1/docs/resources/custom_csr#account_id CustomCsr#account_id}

---

##### `description`<sup>Optional</sup> <a name="description" id="@cdktn/provider-cloudflare.customCsr.CustomCsr.Initializer.parameter.description"></a>

- *Type:* str

Optional description for the CSR.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/cloudflare/cloudflare/5.21.1/docs/resources/custom_csr#description CustomCsr#description}

---

##### `key_type`<sup>Optional</sup> <a name="key_type" id="@cdktn/provider-cloudflare.customCsr.CustomCsr.Initializer.parameter.keyType"></a>

- *Type:* str

Key algorithm to use for the CSR. Defaults to rsa2048 if not specified. Available values: "rsa2048", "p256v1".

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/cloudflare/cloudflare/5.21.1/docs/resources/custom_csr#key_type CustomCsr#key_type}

---

##### `name`<sup>Optional</sup> <a name="name" id="@cdktn/provider-cloudflare.customCsr.CustomCsr.Initializer.parameter.name"></a>

- *Type:* str

Human-readable name for the CSR.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/cloudflare/cloudflare/5.21.1/docs/resources/custom_csr#name CustomCsr#name}

---

##### `organizational_unit`<sup>Optional</sup> <a name="organizational_unit" id="@cdktn/provider-cloudflare.customCsr.CustomCsr.Initializer.parameter.organizationalUnit"></a>

- *Type:* str

Organizational unit name.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/cloudflare/cloudflare/5.21.1/docs/resources/custom_csr#organizational_unit CustomCsr#organizational_unit}

---

##### `zone_id`<sup>Optional</sup> <a name="zone_id" id="@cdktn/provider-cloudflare.customCsr.CustomCsr.Initializer.parameter.zoneId"></a>

- *Type:* str

The Zone ID to use for this endpoint. Mutually exclusive with the Account ID.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/cloudflare/cloudflare/5.21.1/docs/resources/custom_csr#zone_id CustomCsr#zone_id}

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-cloudflare.customCsr.CustomCsr.toString">to_string</a></code> | Returns a string representation of this construct. |
| <code><a href="#@cdktn/provider-cloudflare.customCsr.CustomCsr.with">with</a></code> | Applies one or more mixins to this construct. |
| <code><a href="#@cdktn/provider-cloudflare.customCsr.CustomCsr.addOverride">add_override</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-cloudflare.customCsr.CustomCsr.overrideLogicalId">override_logical_id</a></code> | Overrides the auto-generated logical ID with a specific ID. |
| <code><a href="#@cdktn/provider-cloudflare.customCsr.CustomCsr.resetOverrideLogicalId">reset_override_logical_id</a></code> | Resets a previously passed logical Id to use the auto-generated logical id again. |
| <code><a href="#@cdktn/provider-cloudflare.customCsr.CustomCsr.toHclTerraform">to_hcl_terraform</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-cloudflare.customCsr.CustomCsr.toMetadata">to_metadata</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-cloudflare.customCsr.CustomCsr.toTerraform">to_terraform</a></code> | Adds this resource to the terraform JSON output. |
| <code><a href="#@cdktn/provider-cloudflare.customCsr.CustomCsr.addMoveTarget">add_move_target</a></code> | Adds a user defined moveTarget string to this resource to be later used in .moveTo(moveTarget) to resolve the location of the move. |
| <code><a href="#@cdktn/provider-cloudflare.customCsr.CustomCsr.getAnyMapAttribute">get_any_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-cloudflare.customCsr.CustomCsr.getBooleanAttribute">get_boolean_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-cloudflare.customCsr.CustomCsr.getBooleanMapAttribute">get_boolean_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-cloudflare.customCsr.CustomCsr.getListAttribute">get_list_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-cloudflare.customCsr.CustomCsr.getNumberAttribute">get_number_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-cloudflare.customCsr.CustomCsr.getNumberListAttribute">get_number_list_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-cloudflare.customCsr.CustomCsr.getNumberMapAttribute">get_number_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-cloudflare.customCsr.CustomCsr.getStringAttribute">get_string_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-cloudflare.customCsr.CustomCsr.getStringMapAttribute">get_string_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-cloudflare.customCsr.CustomCsr.hasResourceMove">has_resource_move</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-cloudflare.customCsr.CustomCsr.importFrom">import_from</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-cloudflare.customCsr.CustomCsr.interpolationForAttribute">interpolation_for_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-cloudflare.customCsr.CustomCsr.moveFromId">move_from_id</a></code> | Move the resource corresponding to "id" to this resource. |
| <code><a href="#@cdktn/provider-cloudflare.customCsr.CustomCsr.moveTo">move_to</a></code> | Moves this resource to the target resource given by moveTarget. |
| <code><a href="#@cdktn/provider-cloudflare.customCsr.CustomCsr.moveToId">move_to_id</a></code> | Moves this resource to the resource corresponding to "id". |
| <code><a href="#@cdktn/provider-cloudflare.customCsr.CustomCsr.resetAccountId">reset_account_id</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-cloudflare.customCsr.CustomCsr.resetDescription">reset_description</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-cloudflare.customCsr.CustomCsr.resetKeyType">reset_key_type</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-cloudflare.customCsr.CustomCsr.resetName">reset_name</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-cloudflare.customCsr.CustomCsr.resetOrganizationalUnit">reset_organizational_unit</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-cloudflare.customCsr.CustomCsr.resetZoneId">reset_zone_id</a></code> | *No description.* |

---

##### `to_string` <a name="to_string" id="@cdktn/provider-cloudflare.customCsr.CustomCsr.toString"></a>

```python
def to_string() -> str
```

Returns a string representation of this construct.

##### `with` <a name="with" id="@cdktn/provider-cloudflare.customCsr.CustomCsr.with"></a>

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

###### `mixins`<sup>Required</sup> <a name="mixins" id="@cdktn/provider-cloudflare.customCsr.CustomCsr.with.parameter.mixins"></a>

- *Type:* *constructs.IMixin

The mixins to apply.

---

##### `add_override` <a name="add_override" id="@cdktn/provider-cloudflare.customCsr.CustomCsr.addOverride"></a>

```python
def add_override(
  path: str,
  value: typing.Any
) -> None
```

###### `path`<sup>Required</sup> <a name="path" id="@cdktn/provider-cloudflare.customCsr.CustomCsr.addOverride.parameter.path"></a>

- *Type:* str

---

###### `value`<sup>Required</sup> <a name="value" id="@cdktn/provider-cloudflare.customCsr.CustomCsr.addOverride.parameter.value"></a>

- *Type:* typing.Any

---

##### `override_logical_id` <a name="override_logical_id" id="@cdktn/provider-cloudflare.customCsr.CustomCsr.overrideLogicalId"></a>

```python
def override_logical_id(
  new_logical_id: str
) -> None
```

Overrides the auto-generated logical ID with a specific ID.

###### `new_logical_id`<sup>Required</sup> <a name="new_logical_id" id="@cdktn/provider-cloudflare.customCsr.CustomCsr.overrideLogicalId.parameter.newLogicalId"></a>

- *Type:* str

The new logical ID to use for this stack element.

---

##### `reset_override_logical_id` <a name="reset_override_logical_id" id="@cdktn/provider-cloudflare.customCsr.CustomCsr.resetOverrideLogicalId"></a>

```python
def reset_override_logical_id() -> None
```

Resets a previously passed logical Id to use the auto-generated logical id again.

##### `to_hcl_terraform` <a name="to_hcl_terraform" id="@cdktn/provider-cloudflare.customCsr.CustomCsr.toHclTerraform"></a>

```python
def to_hcl_terraform() -> typing.Any
```

##### `to_metadata` <a name="to_metadata" id="@cdktn/provider-cloudflare.customCsr.CustomCsr.toMetadata"></a>

```python
def to_metadata() -> typing.Any
```

##### `to_terraform` <a name="to_terraform" id="@cdktn/provider-cloudflare.customCsr.CustomCsr.toTerraform"></a>

```python
def to_terraform() -> typing.Any
```

Adds this resource to the terraform JSON output.

##### `add_move_target` <a name="add_move_target" id="@cdktn/provider-cloudflare.customCsr.CustomCsr.addMoveTarget"></a>

```python
def add_move_target(
  move_target: str
) -> None
```

Adds a user defined moveTarget string to this resource to be later used in .moveTo(moveTarget) to resolve the location of the move.

###### `move_target`<sup>Required</sup> <a name="move_target" id="@cdktn/provider-cloudflare.customCsr.CustomCsr.addMoveTarget.parameter.moveTarget"></a>

- *Type:* str

The string move target that will correspond to this resource.

---

##### `get_any_map_attribute` <a name="get_any_map_attribute" id="@cdktn/provider-cloudflare.customCsr.CustomCsr.getAnyMapAttribute"></a>

```python
def get_any_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[typing.Any]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-cloudflare.customCsr.CustomCsr.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_boolean_attribute` <a name="get_boolean_attribute" id="@cdktn/provider-cloudflare.customCsr.CustomCsr.getBooleanAttribute"></a>

```python
def get_boolean_attribute(
  terraform_attribute: str
) -> IResolvable
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-cloudflare.customCsr.CustomCsr.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_boolean_map_attribute` <a name="get_boolean_map_attribute" id="@cdktn/provider-cloudflare.customCsr.CustomCsr.getBooleanMapAttribute"></a>

```python
def get_boolean_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[bool]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-cloudflare.customCsr.CustomCsr.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_list_attribute` <a name="get_list_attribute" id="@cdktn/provider-cloudflare.customCsr.CustomCsr.getListAttribute"></a>

```python
def get_list_attribute(
  terraform_attribute: str
) -> typing.List[str]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-cloudflare.customCsr.CustomCsr.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_attribute` <a name="get_number_attribute" id="@cdktn/provider-cloudflare.customCsr.CustomCsr.getNumberAttribute"></a>

```python
def get_number_attribute(
  terraform_attribute: str
) -> typing.Union[int, float]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-cloudflare.customCsr.CustomCsr.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_list_attribute` <a name="get_number_list_attribute" id="@cdktn/provider-cloudflare.customCsr.CustomCsr.getNumberListAttribute"></a>

```python
def get_number_list_attribute(
  terraform_attribute: str
) -> typing.List[typing.Union[int, float]]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-cloudflare.customCsr.CustomCsr.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_map_attribute` <a name="get_number_map_attribute" id="@cdktn/provider-cloudflare.customCsr.CustomCsr.getNumberMapAttribute"></a>

```python
def get_number_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[typing.Union[int, float]]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-cloudflare.customCsr.CustomCsr.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_string_attribute` <a name="get_string_attribute" id="@cdktn/provider-cloudflare.customCsr.CustomCsr.getStringAttribute"></a>

```python
def get_string_attribute(
  terraform_attribute: str
) -> str
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-cloudflare.customCsr.CustomCsr.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_string_map_attribute` <a name="get_string_map_attribute" id="@cdktn/provider-cloudflare.customCsr.CustomCsr.getStringMapAttribute"></a>

```python
def get_string_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[str]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-cloudflare.customCsr.CustomCsr.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `has_resource_move` <a name="has_resource_move" id="@cdktn/provider-cloudflare.customCsr.CustomCsr.hasResourceMove"></a>

```python
def has_resource_move() -> TerraformResourceMoveByTarget | TerraformResourceMoveById
```

##### `import_from` <a name="import_from" id="@cdktn/provider-cloudflare.customCsr.CustomCsr.importFrom"></a>

```python
def import_from(
  id: str,
  provider: TerraformProvider = None
) -> None
```

###### `id`<sup>Required</sup> <a name="id" id="@cdktn/provider-cloudflare.customCsr.CustomCsr.importFrom.parameter.id"></a>

- *Type:* str

---

###### `provider`<sup>Optional</sup> <a name="provider" id="@cdktn/provider-cloudflare.customCsr.CustomCsr.importFrom.parameter.provider"></a>

- *Type:* cdktn.TerraformProvider

---

##### `interpolation_for_attribute` <a name="interpolation_for_attribute" id="@cdktn/provider-cloudflare.customCsr.CustomCsr.interpolationForAttribute"></a>

```python
def interpolation_for_attribute(
  terraform_attribute: str
) -> IResolvable
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-cloudflare.customCsr.CustomCsr.interpolationForAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `move_from_id` <a name="move_from_id" id="@cdktn/provider-cloudflare.customCsr.CustomCsr.moveFromId"></a>

```python
def move_from_id(
  id: str
) -> None
```

Move the resource corresponding to "id" to this resource.

Note that the resource being moved from must be marked as moved using it's instance function.

###### `id`<sup>Required</sup> <a name="id" id="@cdktn/provider-cloudflare.customCsr.CustomCsr.moveFromId.parameter.id"></a>

- *Type:* str

Full id of resource being moved from, e.g. "aws_s3_bucket.example".

---

##### `move_to` <a name="move_to" id="@cdktn/provider-cloudflare.customCsr.CustomCsr.moveTo"></a>

```python
def move_to(
  move_target: str,
  index: str | typing.Union[int, float] = None
) -> None
```

Moves this resource to the target resource given by moveTarget.

###### `move_target`<sup>Required</sup> <a name="move_target" id="@cdktn/provider-cloudflare.customCsr.CustomCsr.moveTo.parameter.moveTarget"></a>

- *Type:* str

The previously set user defined string set by .addMoveTarget() corresponding to the resource to move to.

---

###### `index`<sup>Optional</sup> <a name="index" id="@cdktn/provider-cloudflare.customCsr.CustomCsr.moveTo.parameter.index"></a>

- *Type:* str | typing.Union[int, float]

Optional The index corresponding to the key the resource is to appear in the foreach of a resource to move to.

---

##### `move_to_id` <a name="move_to_id" id="@cdktn/provider-cloudflare.customCsr.CustomCsr.moveToId"></a>

```python
def move_to_id(
  id: str
) -> None
```

Moves this resource to the resource corresponding to "id".

###### `id`<sup>Required</sup> <a name="id" id="@cdktn/provider-cloudflare.customCsr.CustomCsr.moveToId.parameter.id"></a>

- *Type:* str

Full id of resource to move to, e.g. "aws_s3_bucket.example".

---

##### `reset_account_id` <a name="reset_account_id" id="@cdktn/provider-cloudflare.customCsr.CustomCsr.resetAccountId"></a>

```python
def reset_account_id() -> None
```

##### `reset_description` <a name="reset_description" id="@cdktn/provider-cloudflare.customCsr.CustomCsr.resetDescription"></a>

```python
def reset_description() -> None
```

##### `reset_key_type` <a name="reset_key_type" id="@cdktn/provider-cloudflare.customCsr.CustomCsr.resetKeyType"></a>

```python
def reset_key_type() -> None
```

##### `reset_name` <a name="reset_name" id="@cdktn/provider-cloudflare.customCsr.CustomCsr.resetName"></a>

```python
def reset_name() -> None
```

##### `reset_organizational_unit` <a name="reset_organizational_unit" id="@cdktn/provider-cloudflare.customCsr.CustomCsr.resetOrganizationalUnit"></a>

```python
def reset_organizational_unit() -> None
```

##### `reset_zone_id` <a name="reset_zone_id" id="@cdktn/provider-cloudflare.customCsr.CustomCsr.resetZoneId"></a>

```python
def reset_zone_id() -> None
```

#### Static Functions <a name="Static Functions" id="Static Functions"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-cloudflare.customCsr.CustomCsr.isConstruct">is_construct</a></code> | Checks if `x` is a construct. |
| <code><a href="#@cdktn/provider-cloudflare.customCsr.CustomCsr.isTerraformElement">is_terraform_element</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-cloudflare.customCsr.CustomCsr.isTerraformResource">is_terraform_resource</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-cloudflare.customCsr.CustomCsr.generateConfigForImport">generate_config_for_import</a></code> | Generates CDKTN code for importing a CustomCsr resource upon running "cdktn plan <stack-name>". |

---

##### `is_construct` <a name="is_construct" id="@cdktn/provider-cloudflare.customCsr.CustomCsr.isConstruct"></a>

```python
from cdktn_provider_cloudflare import custom_csr

customCsr.CustomCsr.is_construct(
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

###### `x`<sup>Required</sup> <a name="x" id="@cdktn/provider-cloudflare.customCsr.CustomCsr.isConstruct.parameter.x"></a>

- *Type:* typing.Any

Any object.

---

##### `is_terraform_element` <a name="is_terraform_element" id="@cdktn/provider-cloudflare.customCsr.CustomCsr.isTerraformElement"></a>

```python
from cdktn_provider_cloudflare import custom_csr

customCsr.CustomCsr.is_terraform_element(
  x: typing.Any
)
```

###### `x`<sup>Required</sup> <a name="x" id="@cdktn/provider-cloudflare.customCsr.CustomCsr.isTerraformElement.parameter.x"></a>

- *Type:* typing.Any

---

##### `is_terraform_resource` <a name="is_terraform_resource" id="@cdktn/provider-cloudflare.customCsr.CustomCsr.isTerraformResource"></a>

```python
from cdktn_provider_cloudflare import custom_csr

customCsr.CustomCsr.is_terraform_resource(
  x: typing.Any
)
```

###### `x`<sup>Required</sup> <a name="x" id="@cdktn/provider-cloudflare.customCsr.CustomCsr.isTerraformResource.parameter.x"></a>

- *Type:* typing.Any

---

##### `generate_config_for_import` <a name="generate_config_for_import" id="@cdktn/provider-cloudflare.customCsr.CustomCsr.generateConfigForImport"></a>

```python
from cdktn_provider_cloudflare import custom_csr

customCsr.CustomCsr.generate_config_for_import(
  scope: Construct,
  import_to_id: str,
  import_from_id: str,
  provider: TerraformProvider = None
)
```

Generates CDKTN code for importing a CustomCsr resource upon running "cdktn plan <stack-name>".

###### `scope`<sup>Required</sup> <a name="scope" id="@cdktn/provider-cloudflare.customCsr.CustomCsr.generateConfigForImport.parameter.scope"></a>

- *Type:* constructs.Construct

The scope in which to define this construct.

---

###### `import_to_id`<sup>Required</sup> <a name="import_to_id" id="@cdktn/provider-cloudflare.customCsr.CustomCsr.generateConfigForImport.parameter.importToId"></a>

- *Type:* str

The construct id used in the generated config for the CustomCsr to import.

---

###### `import_from_id`<sup>Required</sup> <a name="import_from_id" id="@cdktn/provider-cloudflare.customCsr.CustomCsr.generateConfigForImport.parameter.importFromId"></a>

- *Type:* str

The id of the existing CustomCsr that should be imported.

Refer to the {@link https://registry.terraform.io/providers/cloudflare/cloudflare/5.21.1/docs/resources/custom_csr#import import section} in the documentation of this resource for the id to use

---

###### `provider`<sup>Optional</sup> <a name="provider" id="@cdktn/provider-cloudflare.customCsr.CustomCsr.generateConfigForImport.parameter.provider"></a>

- *Type:* cdktn.TerraformProvider

? Optional instance of the provider where the CustomCsr to import is found.

---

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-cloudflare.customCsr.CustomCsr.property.node">node</a></code> | <code>constructs.Node</code> | The tree node. |
| <code><a href="#@cdktn/provider-cloudflare.customCsr.CustomCsr.property.cdktfStack">cdktf_stack</a></code> | <code>cdktn.TerraformStack</code> | *No description.* |
| <code><a href="#@cdktn/provider-cloudflare.customCsr.CustomCsr.property.fqn">fqn</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktn/provider-cloudflare.customCsr.CustomCsr.property.friendlyUniqueId">friendly_unique_id</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktn/provider-cloudflare.customCsr.CustomCsr.property.terraformMetaArguments">terraform_meta_arguments</a></code> | <code>typing.Mapping[typing.Any]</code> | *No description.* |
| <code><a href="#@cdktn/provider-cloudflare.customCsr.CustomCsr.property.terraformResourceType">terraform_resource_type</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktn/provider-cloudflare.customCsr.CustomCsr.property.terraformGeneratorMetadata">terraform_generator_metadata</a></code> | <code>cdktn.TerraformProviderGeneratorMetadata</code> | *No description.* |
| <code><a href="#@cdktn/provider-cloudflare.customCsr.CustomCsr.property.connection">connection</a></code> | <code>cdktn.SSHProvisionerConnection \| cdktn.WinrmProvisionerConnection</code> | *No description.* |
| <code><a href="#@cdktn/provider-cloudflare.customCsr.CustomCsr.property.count">count</a></code> | <code>typing.Union[int, float] \| cdktn.TerraformCount</code> | *No description.* |
| <code><a href="#@cdktn/provider-cloudflare.customCsr.CustomCsr.property.dependsOn">depends_on</a></code> | <code>typing.List[str]</code> | *No description.* |
| <code><a href="#@cdktn/provider-cloudflare.customCsr.CustomCsr.property.forEach">for_each</a></code> | <code>cdktn.ITerraformIterator</code> | *No description.* |
| <code><a href="#@cdktn/provider-cloudflare.customCsr.CustomCsr.property.lifecycle">lifecycle</a></code> | <code>cdktn.TerraformResourceLifecycle</code> | *No description.* |
| <code><a href="#@cdktn/provider-cloudflare.customCsr.CustomCsr.property.provider">provider</a></code> | <code>cdktn.TerraformProvider</code> | *No description.* |
| <code><a href="#@cdktn/provider-cloudflare.customCsr.CustomCsr.property.provisioners">provisioners</a></code> | <code>typing.List[cdktn.FileProvisioner \| cdktn.LocalExecProvisioner \| cdktn.RemoteExecProvisioner]</code> | *No description.* |
| <code><a href="#@cdktn/provider-cloudflare.customCsr.CustomCsr.property.accountTag">account_tag</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktn/provider-cloudflare.customCsr.CustomCsr.property.createdAt">created_at</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktn/provider-cloudflare.customCsr.CustomCsr.property.csr">csr</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktn/provider-cloudflare.customCsr.CustomCsr.property.id">id</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktn/provider-cloudflare.customCsr.CustomCsr.property.accountIdInput">account_id_input</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktn/provider-cloudflare.customCsr.CustomCsr.property.commonNameInput">common_name_input</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktn/provider-cloudflare.customCsr.CustomCsr.property.countryInput">country_input</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktn/provider-cloudflare.customCsr.CustomCsr.property.descriptionInput">description_input</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktn/provider-cloudflare.customCsr.CustomCsr.property.keyTypeInput">key_type_input</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktn/provider-cloudflare.customCsr.CustomCsr.property.localityInput">locality_input</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktn/provider-cloudflare.customCsr.CustomCsr.property.nameInput">name_input</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktn/provider-cloudflare.customCsr.CustomCsr.property.organizationalUnitInput">organizational_unit_input</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktn/provider-cloudflare.customCsr.CustomCsr.property.organizationInput">organization_input</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktn/provider-cloudflare.customCsr.CustomCsr.property.sansInput">sans_input</a></code> | <code>typing.List[str]</code> | *No description.* |
| <code><a href="#@cdktn/provider-cloudflare.customCsr.CustomCsr.property.stateInput">state_input</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktn/provider-cloudflare.customCsr.CustomCsr.property.zoneIdInput">zone_id_input</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktn/provider-cloudflare.customCsr.CustomCsr.property.accountId">account_id</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktn/provider-cloudflare.customCsr.CustomCsr.property.commonName">common_name</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktn/provider-cloudflare.customCsr.CustomCsr.property.country">country</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktn/provider-cloudflare.customCsr.CustomCsr.property.description">description</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktn/provider-cloudflare.customCsr.CustomCsr.property.keyType">key_type</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktn/provider-cloudflare.customCsr.CustomCsr.property.locality">locality</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktn/provider-cloudflare.customCsr.CustomCsr.property.name">name</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktn/provider-cloudflare.customCsr.CustomCsr.property.organization">organization</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktn/provider-cloudflare.customCsr.CustomCsr.property.organizationalUnit">organizational_unit</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktn/provider-cloudflare.customCsr.CustomCsr.property.sans">sans</a></code> | <code>typing.List[str]</code> | *No description.* |
| <code><a href="#@cdktn/provider-cloudflare.customCsr.CustomCsr.property.state">state</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktn/provider-cloudflare.customCsr.CustomCsr.property.zoneId">zone_id</a></code> | <code>str</code> | *No description.* |

---

##### `node`<sup>Required</sup> <a name="node" id="@cdktn/provider-cloudflare.customCsr.CustomCsr.property.node"></a>

```python
node: Node
```

- *Type:* constructs.Node

The tree node.

---

##### `cdktf_stack`<sup>Required</sup> <a name="cdktf_stack" id="@cdktn/provider-cloudflare.customCsr.CustomCsr.property.cdktfStack"></a>

```python
cdktf_stack: TerraformStack
```

- *Type:* cdktn.TerraformStack

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktn/provider-cloudflare.customCsr.CustomCsr.property.fqn"></a>

```python
fqn: str
```

- *Type:* str

---

##### `friendly_unique_id`<sup>Required</sup> <a name="friendly_unique_id" id="@cdktn/provider-cloudflare.customCsr.CustomCsr.property.friendlyUniqueId"></a>

```python
friendly_unique_id: str
```

- *Type:* str

---

##### `terraform_meta_arguments`<sup>Required</sup> <a name="terraform_meta_arguments" id="@cdktn/provider-cloudflare.customCsr.CustomCsr.property.terraformMetaArguments"></a>

```python
terraform_meta_arguments: typing.Mapping[typing.Any]
```

- *Type:* typing.Mapping[typing.Any]

---

##### `terraform_resource_type`<sup>Required</sup> <a name="terraform_resource_type" id="@cdktn/provider-cloudflare.customCsr.CustomCsr.property.terraformResourceType"></a>

```python
terraform_resource_type: str
```

- *Type:* str

---

##### `terraform_generator_metadata`<sup>Optional</sup> <a name="terraform_generator_metadata" id="@cdktn/provider-cloudflare.customCsr.CustomCsr.property.terraformGeneratorMetadata"></a>

```python
terraform_generator_metadata: TerraformProviderGeneratorMetadata
```

- *Type:* cdktn.TerraformProviderGeneratorMetadata

---

##### `connection`<sup>Optional</sup> <a name="connection" id="@cdktn/provider-cloudflare.customCsr.CustomCsr.property.connection"></a>

```python
connection: SSHProvisionerConnection | WinrmProvisionerConnection
```

- *Type:* cdktn.SSHProvisionerConnection | cdktn.WinrmProvisionerConnection

---

##### `count`<sup>Optional</sup> <a name="count" id="@cdktn/provider-cloudflare.customCsr.CustomCsr.property.count"></a>

```python
count: typing.Union[int, float] | TerraformCount
```

- *Type:* typing.Union[int, float] | cdktn.TerraformCount

---

##### `depends_on`<sup>Optional</sup> <a name="depends_on" id="@cdktn/provider-cloudflare.customCsr.CustomCsr.property.dependsOn"></a>

```python
depends_on: typing.List[str]
```

- *Type:* typing.List[str]

---

##### `for_each`<sup>Optional</sup> <a name="for_each" id="@cdktn/provider-cloudflare.customCsr.CustomCsr.property.forEach"></a>

```python
for_each: ITerraformIterator
```

- *Type:* cdktn.ITerraformIterator

---

##### `lifecycle`<sup>Optional</sup> <a name="lifecycle" id="@cdktn/provider-cloudflare.customCsr.CustomCsr.property.lifecycle"></a>

```python
lifecycle: TerraformResourceLifecycle
```

- *Type:* cdktn.TerraformResourceLifecycle

---

##### `provider`<sup>Optional</sup> <a name="provider" id="@cdktn/provider-cloudflare.customCsr.CustomCsr.property.provider"></a>

```python
provider: TerraformProvider
```

- *Type:* cdktn.TerraformProvider

---

##### `provisioners`<sup>Optional</sup> <a name="provisioners" id="@cdktn/provider-cloudflare.customCsr.CustomCsr.property.provisioners"></a>

```python
provisioners: typing.List[FileProvisioner | LocalExecProvisioner | RemoteExecProvisioner]
```

- *Type:* typing.List[cdktn.FileProvisioner | cdktn.LocalExecProvisioner | cdktn.RemoteExecProvisioner]

---

##### `account_tag`<sup>Required</sup> <a name="account_tag" id="@cdktn/provider-cloudflare.customCsr.CustomCsr.property.accountTag"></a>

```python
account_tag: str
```

- *Type:* str

---

##### `created_at`<sup>Required</sup> <a name="created_at" id="@cdktn/provider-cloudflare.customCsr.CustomCsr.property.createdAt"></a>

```python
created_at: str
```

- *Type:* str

---

##### `csr`<sup>Required</sup> <a name="csr" id="@cdktn/provider-cloudflare.customCsr.CustomCsr.property.csr"></a>

```python
csr: str
```

- *Type:* str

---

##### `id`<sup>Required</sup> <a name="id" id="@cdktn/provider-cloudflare.customCsr.CustomCsr.property.id"></a>

```python
id: str
```

- *Type:* str

---

##### `account_id_input`<sup>Optional</sup> <a name="account_id_input" id="@cdktn/provider-cloudflare.customCsr.CustomCsr.property.accountIdInput"></a>

```python
account_id_input: str
```

- *Type:* str

---

##### `common_name_input`<sup>Optional</sup> <a name="common_name_input" id="@cdktn/provider-cloudflare.customCsr.CustomCsr.property.commonNameInput"></a>

```python
common_name_input: str
```

- *Type:* str

---

##### `country_input`<sup>Optional</sup> <a name="country_input" id="@cdktn/provider-cloudflare.customCsr.CustomCsr.property.countryInput"></a>

```python
country_input: str
```

- *Type:* str

---

##### `description_input`<sup>Optional</sup> <a name="description_input" id="@cdktn/provider-cloudflare.customCsr.CustomCsr.property.descriptionInput"></a>

```python
description_input: str
```

- *Type:* str

---

##### `key_type_input`<sup>Optional</sup> <a name="key_type_input" id="@cdktn/provider-cloudflare.customCsr.CustomCsr.property.keyTypeInput"></a>

```python
key_type_input: str
```

- *Type:* str

---

##### `locality_input`<sup>Optional</sup> <a name="locality_input" id="@cdktn/provider-cloudflare.customCsr.CustomCsr.property.localityInput"></a>

```python
locality_input: str
```

- *Type:* str

---

##### `name_input`<sup>Optional</sup> <a name="name_input" id="@cdktn/provider-cloudflare.customCsr.CustomCsr.property.nameInput"></a>

```python
name_input: str
```

- *Type:* str

---

##### `organizational_unit_input`<sup>Optional</sup> <a name="organizational_unit_input" id="@cdktn/provider-cloudflare.customCsr.CustomCsr.property.organizationalUnitInput"></a>

```python
organizational_unit_input: str
```

- *Type:* str

---

##### `organization_input`<sup>Optional</sup> <a name="organization_input" id="@cdktn/provider-cloudflare.customCsr.CustomCsr.property.organizationInput"></a>

```python
organization_input: str
```

- *Type:* str

---

##### `sans_input`<sup>Optional</sup> <a name="sans_input" id="@cdktn/provider-cloudflare.customCsr.CustomCsr.property.sansInput"></a>

```python
sans_input: typing.List[str]
```

- *Type:* typing.List[str]

---

##### `state_input`<sup>Optional</sup> <a name="state_input" id="@cdktn/provider-cloudflare.customCsr.CustomCsr.property.stateInput"></a>

```python
state_input: str
```

- *Type:* str

---

##### `zone_id_input`<sup>Optional</sup> <a name="zone_id_input" id="@cdktn/provider-cloudflare.customCsr.CustomCsr.property.zoneIdInput"></a>

```python
zone_id_input: str
```

- *Type:* str

---

##### `account_id`<sup>Required</sup> <a name="account_id" id="@cdktn/provider-cloudflare.customCsr.CustomCsr.property.accountId"></a>

```python
account_id: str
```

- *Type:* str

---

##### `common_name`<sup>Required</sup> <a name="common_name" id="@cdktn/provider-cloudflare.customCsr.CustomCsr.property.commonName"></a>

```python
common_name: str
```

- *Type:* str

---

##### `country`<sup>Required</sup> <a name="country" id="@cdktn/provider-cloudflare.customCsr.CustomCsr.property.country"></a>

```python
country: str
```

- *Type:* str

---

##### `description`<sup>Required</sup> <a name="description" id="@cdktn/provider-cloudflare.customCsr.CustomCsr.property.description"></a>

```python
description: str
```

- *Type:* str

---

##### `key_type`<sup>Required</sup> <a name="key_type" id="@cdktn/provider-cloudflare.customCsr.CustomCsr.property.keyType"></a>

```python
key_type: str
```

- *Type:* str

---

##### `locality`<sup>Required</sup> <a name="locality" id="@cdktn/provider-cloudflare.customCsr.CustomCsr.property.locality"></a>

```python
locality: str
```

- *Type:* str

---

##### `name`<sup>Required</sup> <a name="name" id="@cdktn/provider-cloudflare.customCsr.CustomCsr.property.name"></a>

```python
name: str
```

- *Type:* str

---

##### `organization`<sup>Required</sup> <a name="organization" id="@cdktn/provider-cloudflare.customCsr.CustomCsr.property.organization"></a>

```python
organization: str
```

- *Type:* str

---

##### `organizational_unit`<sup>Required</sup> <a name="organizational_unit" id="@cdktn/provider-cloudflare.customCsr.CustomCsr.property.organizationalUnit"></a>

```python
organizational_unit: str
```

- *Type:* str

---

##### `sans`<sup>Required</sup> <a name="sans" id="@cdktn/provider-cloudflare.customCsr.CustomCsr.property.sans"></a>

```python
sans: typing.List[str]
```

- *Type:* typing.List[str]

---

##### `state`<sup>Required</sup> <a name="state" id="@cdktn/provider-cloudflare.customCsr.CustomCsr.property.state"></a>

```python
state: str
```

- *Type:* str

---

##### `zone_id`<sup>Required</sup> <a name="zone_id" id="@cdktn/provider-cloudflare.customCsr.CustomCsr.property.zoneId"></a>

```python
zone_id: str
```

- *Type:* str

---

#### Constants <a name="Constants" id="Constants"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-cloudflare.customCsr.CustomCsr.property.tfResourceType">tfResourceType</a></code> | <code>str</code> | *No description.* |

---

##### `tfResourceType`<sup>Required</sup> <a name="tfResourceType" id="@cdktn/provider-cloudflare.customCsr.CustomCsr.property.tfResourceType"></a>

```python
tfResourceType: str
```

- *Type:* str

---

## Structs <a name="Structs" id="Structs"></a>

### CustomCsrConfig <a name="CustomCsrConfig" id="@cdktn/provider-cloudflare.customCsr.CustomCsrConfig"></a>

#### Initializer <a name="Initializer" id="@cdktn/provider-cloudflare.customCsr.CustomCsrConfig.Initializer"></a>

```python
from cdktn_provider_cloudflare import custom_csr

customCsr.CustomCsrConfig(
  connection: SSHProvisionerConnection | WinrmProvisionerConnection = None,
  count: typing.Union[int, float] | TerraformCount = None,
  depends_on: typing.List[ITerraformDependable] = None,
  for_each: ITerraformIterator = None,
  lifecycle: TerraformResourceLifecycle = None,
  provider: TerraformProvider = None,
  provisioners: typing.List[FileProvisioner | LocalExecProvisioner | RemoteExecProvisioner] = None,
  common_name: str,
  country: str,
  locality: str,
  organization: str,
  sans: typing.List[str],
  state: str,
  account_id: str = None,
  description: str = None,
  key_type: str = None,
  name: str = None,
  organizational_unit: str = None,
  zone_id: str = None
)
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-cloudflare.customCsr.CustomCsrConfig.property.connection">connection</a></code> | <code>cdktn.SSHProvisionerConnection \| cdktn.WinrmProvisionerConnection</code> | *No description.* |
| <code><a href="#@cdktn/provider-cloudflare.customCsr.CustomCsrConfig.property.count">count</a></code> | <code>typing.Union[int, float] \| cdktn.TerraformCount</code> | *No description.* |
| <code><a href="#@cdktn/provider-cloudflare.customCsr.CustomCsrConfig.property.dependsOn">depends_on</a></code> | <code>typing.List[cdktn.ITerraformDependable]</code> | *No description.* |
| <code><a href="#@cdktn/provider-cloudflare.customCsr.CustomCsrConfig.property.forEach">for_each</a></code> | <code>cdktn.ITerraformIterator</code> | *No description.* |
| <code><a href="#@cdktn/provider-cloudflare.customCsr.CustomCsrConfig.property.lifecycle">lifecycle</a></code> | <code>cdktn.TerraformResourceLifecycle</code> | *No description.* |
| <code><a href="#@cdktn/provider-cloudflare.customCsr.CustomCsrConfig.property.provider">provider</a></code> | <code>cdktn.TerraformProvider</code> | *No description.* |
| <code><a href="#@cdktn/provider-cloudflare.customCsr.CustomCsrConfig.property.provisioners">provisioners</a></code> | <code>typing.List[cdktn.FileProvisioner \| cdktn.LocalExecProvisioner \| cdktn.RemoteExecProvisioner]</code> | *No description.* |
| <code><a href="#@cdktn/provider-cloudflare.customCsr.CustomCsrConfig.property.commonName">common_name</a></code> | <code>str</code> | The common name (domain) for the CSR. Must be at most 64 characters. |
| <code><a href="#@cdktn/provider-cloudflare.customCsr.CustomCsrConfig.property.country">country</a></code> | <code>str</code> | Two-letter ISO 3166-1 alpha-2 country code. |
| <code><a href="#@cdktn/provider-cloudflare.customCsr.CustomCsrConfig.property.locality">locality</a></code> | <code>str</code> | City or locality name. |
| <code><a href="#@cdktn/provider-cloudflare.customCsr.CustomCsrConfig.property.organization">organization</a></code> | <code>str</code> | Organization name. |
| <code><a href="#@cdktn/provider-cloudflare.customCsr.CustomCsrConfig.property.sans">sans</a></code> | <code>typing.List[str]</code> | Subject Alternative Names for the CSR. At least one SAN is required. |
| <code><a href="#@cdktn/provider-cloudflare.customCsr.CustomCsrConfig.property.state">state</a></code> | <code>str</code> | State or province name. |
| <code><a href="#@cdktn/provider-cloudflare.customCsr.CustomCsrConfig.property.accountId">account_id</a></code> | <code>str</code> | The Account ID to use for this endpoint. Mutually exclusive with the Zone ID. |
| <code><a href="#@cdktn/provider-cloudflare.customCsr.CustomCsrConfig.property.description">description</a></code> | <code>str</code> | Optional description for the CSR. |
| <code><a href="#@cdktn/provider-cloudflare.customCsr.CustomCsrConfig.property.keyType">key_type</a></code> | <code>str</code> | Key algorithm to use for the CSR. Defaults to rsa2048 if not specified. Available values: "rsa2048", "p256v1". |
| <code><a href="#@cdktn/provider-cloudflare.customCsr.CustomCsrConfig.property.name">name</a></code> | <code>str</code> | Human-readable name for the CSR. |
| <code><a href="#@cdktn/provider-cloudflare.customCsr.CustomCsrConfig.property.organizationalUnit">organizational_unit</a></code> | <code>str</code> | Organizational unit name. |
| <code><a href="#@cdktn/provider-cloudflare.customCsr.CustomCsrConfig.property.zoneId">zone_id</a></code> | <code>str</code> | The Zone ID to use for this endpoint. Mutually exclusive with the Account ID. |

---

##### `connection`<sup>Optional</sup> <a name="connection" id="@cdktn/provider-cloudflare.customCsr.CustomCsrConfig.property.connection"></a>

```python
connection: SSHProvisionerConnection | WinrmProvisionerConnection
```

- *Type:* cdktn.SSHProvisionerConnection | cdktn.WinrmProvisionerConnection

---

##### `count`<sup>Optional</sup> <a name="count" id="@cdktn/provider-cloudflare.customCsr.CustomCsrConfig.property.count"></a>

```python
count: typing.Union[int, float] | TerraformCount
```

- *Type:* typing.Union[int, float] | cdktn.TerraformCount

---

##### `depends_on`<sup>Optional</sup> <a name="depends_on" id="@cdktn/provider-cloudflare.customCsr.CustomCsrConfig.property.dependsOn"></a>

```python
depends_on: typing.List[ITerraformDependable]
```

- *Type:* typing.List[cdktn.ITerraformDependable]

---

##### `for_each`<sup>Optional</sup> <a name="for_each" id="@cdktn/provider-cloudflare.customCsr.CustomCsrConfig.property.forEach"></a>

```python
for_each: ITerraformIterator
```

- *Type:* cdktn.ITerraformIterator

---

##### `lifecycle`<sup>Optional</sup> <a name="lifecycle" id="@cdktn/provider-cloudflare.customCsr.CustomCsrConfig.property.lifecycle"></a>

```python
lifecycle: TerraformResourceLifecycle
```

- *Type:* cdktn.TerraformResourceLifecycle

---

##### `provider`<sup>Optional</sup> <a name="provider" id="@cdktn/provider-cloudflare.customCsr.CustomCsrConfig.property.provider"></a>

```python
provider: TerraformProvider
```

- *Type:* cdktn.TerraformProvider

---

##### `provisioners`<sup>Optional</sup> <a name="provisioners" id="@cdktn/provider-cloudflare.customCsr.CustomCsrConfig.property.provisioners"></a>

```python
provisioners: typing.List[FileProvisioner | LocalExecProvisioner | RemoteExecProvisioner]
```

- *Type:* typing.List[cdktn.FileProvisioner | cdktn.LocalExecProvisioner | cdktn.RemoteExecProvisioner]

---

##### `common_name`<sup>Required</sup> <a name="common_name" id="@cdktn/provider-cloudflare.customCsr.CustomCsrConfig.property.commonName"></a>

```python
common_name: str
```

- *Type:* str

The common name (domain) for the CSR. Must be at most 64 characters.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/cloudflare/cloudflare/5.21.1/docs/resources/custom_csr#common_name CustomCsr#common_name}

---

##### `country`<sup>Required</sup> <a name="country" id="@cdktn/provider-cloudflare.customCsr.CustomCsrConfig.property.country"></a>

```python
country: str
```

- *Type:* str

Two-letter ISO 3166-1 alpha-2 country code.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/cloudflare/cloudflare/5.21.1/docs/resources/custom_csr#country CustomCsr#country}

---

##### `locality`<sup>Required</sup> <a name="locality" id="@cdktn/provider-cloudflare.customCsr.CustomCsrConfig.property.locality"></a>

```python
locality: str
```

- *Type:* str

City or locality name.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/cloudflare/cloudflare/5.21.1/docs/resources/custom_csr#locality CustomCsr#locality}

---

##### `organization`<sup>Required</sup> <a name="organization" id="@cdktn/provider-cloudflare.customCsr.CustomCsrConfig.property.organization"></a>

```python
organization: str
```

- *Type:* str

Organization name.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/cloudflare/cloudflare/5.21.1/docs/resources/custom_csr#organization CustomCsr#organization}

---

##### `sans`<sup>Required</sup> <a name="sans" id="@cdktn/provider-cloudflare.customCsr.CustomCsrConfig.property.sans"></a>

```python
sans: typing.List[str]
```

- *Type:* typing.List[str]

Subject Alternative Names for the CSR. At least one SAN is required.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/cloudflare/cloudflare/5.21.1/docs/resources/custom_csr#sans CustomCsr#sans}

---

##### `state`<sup>Required</sup> <a name="state" id="@cdktn/provider-cloudflare.customCsr.CustomCsrConfig.property.state"></a>

```python
state: str
```

- *Type:* str

State or province name.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/cloudflare/cloudflare/5.21.1/docs/resources/custom_csr#state CustomCsr#state}

---

##### `account_id`<sup>Optional</sup> <a name="account_id" id="@cdktn/provider-cloudflare.customCsr.CustomCsrConfig.property.accountId"></a>

```python
account_id: str
```

- *Type:* str

The Account ID to use for this endpoint. Mutually exclusive with the Zone ID.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/cloudflare/cloudflare/5.21.1/docs/resources/custom_csr#account_id CustomCsr#account_id}

---

##### `description`<sup>Optional</sup> <a name="description" id="@cdktn/provider-cloudflare.customCsr.CustomCsrConfig.property.description"></a>

```python
description: str
```

- *Type:* str

Optional description for the CSR.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/cloudflare/cloudflare/5.21.1/docs/resources/custom_csr#description CustomCsr#description}

---

##### `key_type`<sup>Optional</sup> <a name="key_type" id="@cdktn/provider-cloudflare.customCsr.CustomCsrConfig.property.keyType"></a>

```python
key_type: str
```

- *Type:* str

Key algorithm to use for the CSR. Defaults to rsa2048 if not specified. Available values: "rsa2048", "p256v1".

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/cloudflare/cloudflare/5.21.1/docs/resources/custom_csr#key_type CustomCsr#key_type}

---

##### `name`<sup>Optional</sup> <a name="name" id="@cdktn/provider-cloudflare.customCsr.CustomCsrConfig.property.name"></a>

```python
name: str
```

- *Type:* str

Human-readable name for the CSR.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/cloudflare/cloudflare/5.21.1/docs/resources/custom_csr#name CustomCsr#name}

---

##### `organizational_unit`<sup>Optional</sup> <a name="organizational_unit" id="@cdktn/provider-cloudflare.customCsr.CustomCsrConfig.property.organizationalUnit"></a>

```python
organizational_unit: str
```

- *Type:* str

Organizational unit name.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/cloudflare/cloudflare/5.21.1/docs/resources/custom_csr#organizational_unit CustomCsr#organizational_unit}

---

##### `zone_id`<sup>Optional</sup> <a name="zone_id" id="@cdktn/provider-cloudflare.customCsr.CustomCsrConfig.property.zoneId"></a>

```python
zone_id: str
```

- *Type:* str

The Zone ID to use for this endpoint. Mutually exclusive with the Account ID.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/cloudflare/cloudflare/5.21.1/docs/resources/custom_csr#zone_id CustomCsr#zone_id}

---



