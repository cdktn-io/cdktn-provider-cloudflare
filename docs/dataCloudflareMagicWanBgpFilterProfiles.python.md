# `dataCloudflareMagicWanBgpFilterProfiles` Submodule <a name="`dataCloudflareMagicWanBgpFilterProfiles` Submodule" id="@cdktn/provider-cloudflare.dataCloudflareMagicWanBgpFilterProfiles"></a>

## Constructs <a name="Constructs" id="Constructs"></a>

### DataCloudflareMagicWanBgpFilterProfiles <a name="DataCloudflareMagicWanBgpFilterProfiles" id="@cdktn/provider-cloudflare.dataCloudflareMagicWanBgpFilterProfiles.DataCloudflareMagicWanBgpFilterProfiles"></a>

Represents a {@link https://registry.terraform.io/providers/cloudflare/cloudflare/5.27.0/docs/data-sources/magic_wan_bgp_filter_profiles cloudflare_magic_wan_bgp_filter_profiles}.

#### Initializers <a name="Initializers" id="@cdktn/provider-cloudflare.dataCloudflareMagicWanBgpFilterProfiles.DataCloudflareMagicWanBgpFilterProfiles.Initializer"></a>

```python
from cdktn_provider_cloudflare import data_cloudflare_magic_wan_bgp_filter_profiles

dataCloudflareMagicWanBgpFilterProfiles.DataCloudflareMagicWanBgpFilterProfiles(
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
  max_items: typing.Union[int, float] = None
)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-cloudflare.dataCloudflareMagicWanBgpFilterProfiles.DataCloudflareMagicWanBgpFilterProfiles.Initializer.parameter.scope">scope</a></code> | <code>constructs.Construct</code> | The scope in which to define this construct. |
| <code><a href="#@cdktn/provider-cloudflare.dataCloudflareMagicWanBgpFilterProfiles.DataCloudflareMagicWanBgpFilterProfiles.Initializer.parameter.id">id</a></code> | <code>str</code> | The scoped construct ID. |
| <code><a href="#@cdktn/provider-cloudflare.dataCloudflareMagicWanBgpFilterProfiles.DataCloudflareMagicWanBgpFilterProfiles.Initializer.parameter.connection">connection</a></code> | <code>cdktn.SSHProvisionerConnection \| cdktn.WinrmProvisionerConnection</code> | *No description.* |
| <code><a href="#@cdktn/provider-cloudflare.dataCloudflareMagicWanBgpFilterProfiles.DataCloudflareMagicWanBgpFilterProfiles.Initializer.parameter.count">count</a></code> | <code>typing.Union[int, float] \| cdktn.TerraformCount</code> | *No description.* |
| <code><a href="#@cdktn/provider-cloudflare.dataCloudflareMagicWanBgpFilterProfiles.DataCloudflareMagicWanBgpFilterProfiles.Initializer.parameter.dependsOn">depends_on</a></code> | <code>typing.List[cdktn.ITerraformDependable]</code> | *No description.* |
| <code><a href="#@cdktn/provider-cloudflare.dataCloudflareMagicWanBgpFilterProfiles.DataCloudflareMagicWanBgpFilterProfiles.Initializer.parameter.forEach">for_each</a></code> | <code>cdktn.ITerraformIterator</code> | *No description.* |
| <code><a href="#@cdktn/provider-cloudflare.dataCloudflareMagicWanBgpFilterProfiles.DataCloudflareMagicWanBgpFilterProfiles.Initializer.parameter.lifecycle">lifecycle</a></code> | <code>cdktn.TerraformResourceLifecycle</code> | *No description.* |
| <code><a href="#@cdktn/provider-cloudflare.dataCloudflareMagicWanBgpFilterProfiles.DataCloudflareMagicWanBgpFilterProfiles.Initializer.parameter.provider">provider</a></code> | <code>cdktn.TerraformProvider</code> | *No description.* |
| <code><a href="#@cdktn/provider-cloudflare.dataCloudflareMagicWanBgpFilterProfiles.DataCloudflareMagicWanBgpFilterProfiles.Initializer.parameter.provisioners">provisioners</a></code> | <code>typing.List[cdktn.FileProvisioner \| cdktn.LocalExecProvisioner \| cdktn.RemoteExecProvisioner]</code> | *No description.* |
| <code><a href="#@cdktn/provider-cloudflare.dataCloudflareMagicWanBgpFilterProfiles.DataCloudflareMagicWanBgpFilterProfiles.Initializer.parameter.accountId">account_id</a></code> | <code>str</code> | Identifier. |
| <code><a href="#@cdktn/provider-cloudflare.dataCloudflareMagicWanBgpFilterProfiles.DataCloudflareMagicWanBgpFilterProfiles.Initializer.parameter.maxItems">max_items</a></code> | <code>typing.Union[int, float]</code> | Max items to fetch, default: 1000. |

---

##### `scope`<sup>Required</sup> <a name="scope" id="@cdktn/provider-cloudflare.dataCloudflareMagicWanBgpFilterProfiles.DataCloudflareMagicWanBgpFilterProfiles.Initializer.parameter.scope"></a>

- *Type:* constructs.Construct

The scope in which to define this construct.

---

##### `id`<sup>Required</sup> <a name="id" id="@cdktn/provider-cloudflare.dataCloudflareMagicWanBgpFilterProfiles.DataCloudflareMagicWanBgpFilterProfiles.Initializer.parameter.id"></a>

- *Type:* str

The scoped construct ID.

Must be unique amongst siblings in the same scope

---

##### `connection`<sup>Optional</sup> <a name="connection" id="@cdktn/provider-cloudflare.dataCloudflareMagicWanBgpFilterProfiles.DataCloudflareMagicWanBgpFilterProfiles.Initializer.parameter.connection"></a>

- *Type:* cdktn.SSHProvisionerConnection | cdktn.WinrmProvisionerConnection

---

##### `count`<sup>Optional</sup> <a name="count" id="@cdktn/provider-cloudflare.dataCloudflareMagicWanBgpFilterProfiles.DataCloudflareMagicWanBgpFilterProfiles.Initializer.parameter.count"></a>

- *Type:* typing.Union[int, float] | cdktn.TerraformCount

---

##### `depends_on`<sup>Optional</sup> <a name="depends_on" id="@cdktn/provider-cloudflare.dataCloudflareMagicWanBgpFilterProfiles.DataCloudflareMagicWanBgpFilterProfiles.Initializer.parameter.dependsOn"></a>

- *Type:* typing.List[cdktn.ITerraformDependable]

---

##### `for_each`<sup>Optional</sup> <a name="for_each" id="@cdktn/provider-cloudflare.dataCloudflareMagicWanBgpFilterProfiles.DataCloudflareMagicWanBgpFilterProfiles.Initializer.parameter.forEach"></a>

- *Type:* cdktn.ITerraformIterator

---

##### `lifecycle`<sup>Optional</sup> <a name="lifecycle" id="@cdktn/provider-cloudflare.dataCloudflareMagicWanBgpFilterProfiles.DataCloudflareMagicWanBgpFilterProfiles.Initializer.parameter.lifecycle"></a>

- *Type:* cdktn.TerraformResourceLifecycle

---

##### `provider`<sup>Optional</sup> <a name="provider" id="@cdktn/provider-cloudflare.dataCloudflareMagicWanBgpFilterProfiles.DataCloudflareMagicWanBgpFilterProfiles.Initializer.parameter.provider"></a>

- *Type:* cdktn.TerraformProvider

---

##### `provisioners`<sup>Optional</sup> <a name="provisioners" id="@cdktn/provider-cloudflare.dataCloudflareMagicWanBgpFilterProfiles.DataCloudflareMagicWanBgpFilterProfiles.Initializer.parameter.provisioners"></a>

- *Type:* typing.List[cdktn.FileProvisioner | cdktn.LocalExecProvisioner | cdktn.RemoteExecProvisioner]

---

##### `account_id`<sup>Required</sup> <a name="account_id" id="@cdktn/provider-cloudflare.dataCloudflareMagicWanBgpFilterProfiles.DataCloudflareMagicWanBgpFilterProfiles.Initializer.parameter.accountId"></a>

- *Type:* str

Identifier.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/cloudflare/cloudflare/5.27.0/docs/data-sources/magic_wan_bgp_filter_profiles#account_id DataCloudflareMagicWanBgpFilterProfiles#account_id}

---

##### `max_items`<sup>Optional</sup> <a name="max_items" id="@cdktn/provider-cloudflare.dataCloudflareMagicWanBgpFilterProfiles.DataCloudflareMagicWanBgpFilterProfiles.Initializer.parameter.maxItems"></a>

- *Type:* typing.Union[int, float]

Max items to fetch, default: 1000.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/cloudflare/cloudflare/5.27.0/docs/data-sources/magic_wan_bgp_filter_profiles#max_items DataCloudflareMagicWanBgpFilterProfiles#max_items}

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-cloudflare.dataCloudflareMagicWanBgpFilterProfiles.DataCloudflareMagicWanBgpFilterProfiles.toString">to_string</a></code> | Returns a string representation of this construct. |
| <code><a href="#@cdktn/provider-cloudflare.dataCloudflareMagicWanBgpFilterProfiles.DataCloudflareMagicWanBgpFilterProfiles.with">with</a></code> | Applies one or more mixins to this construct. |
| <code><a href="#@cdktn/provider-cloudflare.dataCloudflareMagicWanBgpFilterProfiles.DataCloudflareMagicWanBgpFilterProfiles.addOverride">add_override</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-cloudflare.dataCloudflareMagicWanBgpFilterProfiles.DataCloudflareMagicWanBgpFilterProfiles.overrideLogicalId">override_logical_id</a></code> | Overrides the auto-generated logical ID with a specific ID. |
| <code><a href="#@cdktn/provider-cloudflare.dataCloudflareMagicWanBgpFilterProfiles.DataCloudflareMagicWanBgpFilterProfiles.resetOverrideLogicalId">reset_override_logical_id</a></code> | Resets a previously passed logical Id to use the auto-generated logical id again. |
| <code><a href="#@cdktn/provider-cloudflare.dataCloudflareMagicWanBgpFilterProfiles.DataCloudflareMagicWanBgpFilterProfiles.toHclTerraform">to_hcl_terraform</a></code> | Adds this resource to the terraform JSON output. |
| <code><a href="#@cdktn/provider-cloudflare.dataCloudflareMagicWanBgpFilterProfiles.DataCloudflareMagicWanBgpFilterProfiles.toMetadata">to_metadata</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-cloudflare.dataCloudflareMagicWanBgpFilterProfiles.DataCloudflareMagicWanBgpFilterProfiles.toTerraform">to_terraform</a></code> | Adds this resource to the terraform JSON output. |
| <code><a href="#@cdktn/provider-cloudflare.dataCloudflareMagicWanBgpFilterProfiles.DataCloudflareMagicWanBgpFilterProfiles.getAnyMapAttribute">get_any_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-cloudflare.dataCloudflareMagicWanBgpFilterProfiles.DataCloudflareMagicWanBgpFilterProfiles.getBooleanAttribute">get_boolean_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-cloudflare.dataCloudflareMagicWanBgpFilterProfiles.DataCloudflareMagicWanBgpFilterProfiles.getBooleanMapAttribute">get_boolean_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-cloudflare.dataCloudflareMagicWanBgpFilterProfiles.DataCloudflareMagicWanBgpFilterProfiles.getListAttribute">get_list_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-cloudflare.dataCloudflareMagicWanBgpFilterProfiles.DataCloudflareMagicWanBgpFilterProfiles.getNumberAttribute">get_number_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-cloudflare.dataCloudflareMagicWanBgpFilterProfiles.DataCloudflareMagicWanBgpFilterProfiles.getNumberListAttribute">get_number_list_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-cloudflare.dataCloudflareMagicWanBgpFilterProfiles.DataCloudflareMagicWanBgpFilterProfiles.getNumberMapAttribute">get_number_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-cloudflare.dataCloudflareMagicWanBgpFilterProfiles.DataCloudflareMagicWanBgpFilterProfiles.getStringAttribute">get_string_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-cloudflare.dataCloudflareMagicWanBgpFilterProfiles.DataCloudflareMagicWanBgpFilterProfiles.getStringMapAttribute">get_string_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-cloudflare.dataCloudflareMagicWanBgpFilterProfiles.DataCloudflareMagicWanBgpFilterProfiles.interpolationForAttribute">interpolation_for_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-cloudflare.dataCloudflareMagicWanBgpFilterProfiles.DataCloudflareMagicWanBgpFilterProfiles.resetMaxItems">reset_max_items</a></code> | *No description.* |

---

##### `to_string` <a name="to_string" id="@cdktn/provider-cloudflare.dataCloudflareMagicWanBgpFilterProfiles.DataCloudflareMagicWanBgpFilterProfiles.toString"></a>

```python
def to_string() -> str
```

Returns a string representation of this construct.

##### `with` <a name="with" id="@cdktn/provider-cloudflare.dataCloudflareMagicWanBgpFilterProfiles.DataCloudflareMagicWanBgpFilterProfiles.with"></a>

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

###### `mixins`<sup>Required</sup> <a name="mixins" id="@cdktn/provider-cloudflare.dataCloudflareMagicWanBgpFilterProfiles.DataCloudflareMagicWanBgpFilterProfiles.with.parameter.mixins"></a>

- *Type:* *constructs.IMixin

The mixins to apply.

---

##### `add_override` <a name="add_override" id="@cdktn/provider-cloudflare.dataCloudflareMagicWanBgpFilterProfiles.DataCloudflareMagicWanBgpFilterProfiles.addOverride"></a>

```python
def add_override(
  path: str,
  value: typing.Any
) -> None
```

###### `path`<sup>Required</sup> <a name="path" id="@cdktn/provider-cloudflare.dataCloudflareMagicWanBgpFilterProfiles.DataCloudflareMagicWanBgpFilterProfiles.addOverride.parameter.path"></a>

- *Type:* str

---

###### `value`<sup>Required</sup> <a name="value" id="@cdktn/provider-cloudflare.dataCloudflareMagicWanBgpFilterProfiles.DataCloudflareMagicWanBgpFilterProfiles.addOverride.parameter.value"></a>

- *Type:* typing.Any

---

##### `override_logical_id` <a name="override_logical_id" id="@cdktn/provider-cloudflare.dataCloudflareMagicWanBgpFilterProfiles.DataCloudflareMagicWanBgpFilterProfiles.overrideLogicalId"></a>

```python
def override_logical_id(
  new_logical_id: str
) -> None
```

Overrides the auto-generated logical ID with a specific ID.

###### `new_logical_id`<sup>Required</sup> <a name="new_logical_id" id="@cdktn/provider-cloudflare.dataCloudflareMagicWanBgpFilterProfiles.DataCloudflareMagicWanBgpFilterProfiles.overrideLogicalId.parameter.newLogicalId"></a>

- *Type:* str

The new logical ID to use for this stack element.

---

##### `reset_override_logical_id` <a name="reset_override_logical_id" id="@cdktn/provider-cloudflare.dataCloudflareMagicWanBgpFilterProfiles.DataCloudflareMagicWanBgpFilterProfiles.resetOverrideLogicalId"></a>

```python
def reset_override_logical_id() -> None
```

Resets a previously passed logical Id to use the auto-generated logical id again.

##### `to_hcl_terraform` <a name="to_hcl_terraform" id="@cdktn/provider-cloudflare.dataCloudflareMagicWanBgpFilterProfiles.DataCloudflareMagicWanBgpFilterProfiles.toHclTerraform"></a>

```python
def to_hcl_terraform() -> typing.Any
```

Adds this resource to the terraform JSON output.

##### `to_metadata` <a name="to_metadata" id="@cdktn/provider-cloudflare.dataCloudflareMagicWanBgpFilterProfiles.DataCloudflareMagicWanBgpFilterProfiles.toMetadata"></a>

```python
def to_metadata() -> typing.Any
```

##### `to_terraform` <a name="to_terraform" id="@cdktn/provider-cloudflare.dataCloudflareMagicWanBgpFilterProfiles.DataCloudflareMagicWanBgpFilterProfiles.toTerraform"></a>

```python
def to_terraform() -> typing.Any
```

Adds this resource to the terraform JSON output.

##### `get_any_map_attribute` <a name="get_any_map_attribute" id="@cdktn/provider-cloudflare.dataCloudflareMagicWanBgpFilterProfiles.DataCloudflareMagicWanBgpFilterProfiles.getAnyMapAttribute"></a>

```python
def get_any_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[typing.Any]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-cloudflare.dataCloudflareMagicWanBgpFilterProfiles.DataCloudflareMagicWanBgpFilterProfiles.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_boolean_attribute` <a name="get_boolean_attribute" id="@cdktn/provider-cloudflare.dataCloudflareMagicWanBgpFilterProfiles.DataCloudflareMagicWanBgpFilterProfiles.getBooleanAttribute"></a>

```python
def get_boolean_attribute(
  terraform_attribute: str
) -> IResolvable
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-cloudflare.dataCloudflareMagicWanBgpFilterProfiles.DataCloudflareMagicWanBgpFilterProfiles.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_boolean_map_attribute` <a name="get_boolean_map_attribute" id="@cdktn/provider-cloudflare.dataCloudflareMagicWanBgpFilterProfiles.DataCloudflareMagicWanBgpFilterProfiles.getBooleanMapAttribute"></a>

```python
def get_boolean_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[bool]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-cloudflare.dataCloudflareMagicWanBgpFilterProfiles.DataCloudflareMagicWanBgpFilterProfiles.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_list_attribute` <a name="get_list_attribute" id="@cdktn/provider-cloudflare.dataCloudflareMagicWanBgpFilterProfiles.DataCloudflareMagicWanBgpFilterProfiles.getListAttribute"></a>

```python
def get_list_attribute(
  terraform_attribute: str
) -> typing.List[str]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-cloudflare.dataCloudflareMagicWanBgpFilterProfiles.DataCloudflareMagicWanBgpFilterProfiles.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_attribute` <a name="get_number_attribute" id="@cdktn/provider-cloudflare.dataCloudflareMagicWanBgpFilterProfiles.DataCloudflareMagicWanBgpFilterProfiles.getNumberAttribute"></a>

```python
def get_number_attribute(
  terraform_attribute: str
) -> typing.Union[int, float]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-cloudflare.dataCloudflareMagicWanBgpFilterProfiles.DataCloudflareMagicWanBgpFilterProfiles.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_list_attribute` <a name="get_number_list_attribute" id="@cdktn/provider-cloudflare.dataCloudflareMagicWanBgpFilterProfiles.DataCloudflareMagicWanBgpFilterProfiles.getNumberListAttribute"></a>

```python
def get_number_list_attribute(
  terraform_attribute: str
) -> typing.List[typing.Union[int, float]]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-cloudflare.dataCloudflareMagicWanBgpFilterProfiles.DataCloudflareMagicWanBgpFilterProfiles.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_map_attribute` <a name="get_number_map_attribute" id="@cdktn/provider-cloudflare.dataCloudflareMagicWanBgpFilterProfiles.DataCloudflareMagicWanBgpFilterProfiles.getNumberMapAttribute"></a>

```python
def get_number_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[typing.Union[int, float]]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-cloudflare.dataCloudflareMagicWanBgpFilterProfiles.DataCloudflareMagicWanBgpFilterProfiles.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_string_attribute` <a name="get_string_attribute" id="@cdktn/provider-cloudflare.dataCloudflareMagicWanBgpFilterProfiles.DataCloudflareMagicWanBgpFilterProfiles.getStringAttribute"></a>

```python
def get_string_attribute(
  terraform_attribute: str
) -> str
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-cloudflare.dataCloudflareMagicWanBgpFilterProfiles.DataCloudflareMagicWanBgpFilterProfiles.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_string_map_attribute` <a name="get_string_map_attribute" id="@cdktn/provider-cloudflare.dataCloudflareMagicWanBgpFilterProfiles.DataCloudflareMagicWanBgpFilterProfiles.getStringMapAttribute"></a>

```python
def get_string_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[str]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-cloudflare.dataCloudflareMagicWanBgpFilterProfiles.DataCloudflareMagicWanBgpFilterProfiles.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `interpolation_for_attribute` <a name="interpolation_for_attribute" id="@cdktn/provider-cloudflare.dataCloudflareMagicWanBgpFilterProfiles.DataCloudflareMagicWanBgpFilterProfiles.interpolationForAttribute"></a>

```python
def interpolation_for_attribute(
  terraform_attribute: str
) -> IResolvable
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-cloudflare.dataCloudflareMagicWanBgpFilterProfiles.DataCloudflareMagicWanBgpFilterProfiles.interpolationForAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `reset_max_items` <a name="reset_max_items" id="@cdktn/provider-cloudflare.dataCloudflareMagicWanBgpFilterProfiles.DataCloudflareMagicWanBgpFilterProfiles.resetMaxItems"></a>

```python
def reset_max_items() -> None
```

#### Static Functions <a name="Static Functions" id="Static Functions"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-cloudflare.dataCloudflareMagicWanBgpFilterProfiles.DataCloudflareMagicWanBgpFilterProfiles.isConstruct">is_construct</a></code> | Checks if `x` is a construct. |
| <code><a href="#@cdktn/provider-cloudflare.dataCloudflareMagicWanBgpFilterProfiles.DataCloudflareMagicWanBgpFilterProfiles.isTerraformElement">is_terraform_element</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-cloudflare.dataCloudflareMagicWanBgpFilterProfiles.DataCloudflareMagicWanBgpFilterProfiles.isTerraformDataSource">is_terraform_data_source</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-cloudflare.dataCloudflareMagicWanBgpFilterProfiles.DataCloudflareMagicWanBgpFilterProfiles.generateConfigForImport">generate_config_for_import</a></code> | Generates CDKTN code for importing a DataCloudflareMagicWanBgpFilterProfiles resource upon running "cdktn plan <stack-name>". |

---

##### `is_construct` <a name="is_construct" id="@cdktn/provider-cloudflare.dataCloudflareMagicWanBgpFilterProfiles.DataCloudflareMagicWanBgpFilterProfiles.isConstruct"></a>

```python
from cdktn_provider_cloudflare import data_cloudflare_magic_wan_bgp_filter_profiles

dataCloudflareMagicWanBgpFilterProfiles.DataCloudflareMagicWanBgpFilterProfiles.is_construct(
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

###### `x`<sup>Required</sup> <a name="x" id="@cdktn/provider-cloudflare.dataCloudflareMagicWanBgpFilterProfiles.DataCloudflareMagicWanBgpFilterProfiles.isConstruct.parameter.x"></a>

- *Type:* typing.Any

Any object.

---

##### `is_terraform_element` <a name="is_terraform_element" id="@cdktn/provider-cloudflare.dataCloudflareMagicWanBgpFilterProfiles.DataCloudflareMagicWanBgpFilterProfiles.isTerraformElement"></a>

```python
from cdktn_provider_cloudflare import data_cloudflare_magic_wan_bgp_filter_profiles

dataCloudflareMagicWanBgpFilterProfiles.DataCloudflareMagicWanBgpFilterProfiles.is_terraform_element(
  x: typing.Any
)
```

###### `x`<sup>Required</sup> <a name="x" id="@cdktn/provider-cloudflare.dataCloudflareMagicWanBgpFilterProfiles.DataCloudflareMagicWanBgpFilterProfiles.isTerraformElement.parameter.x"></a>

- *Type:* typing.Any

---

##### `is_terraform_data_source` <a name="is_terraform_data_source" id="@cdktn/provider-cloudflare.dataCloudflareMagicWanBgpFilterProfiles.DataCloudflareMagicWanBgpFilterProfiles.isTerraformDataSource"></a>

```python
from cdktn_provider_cloudflare import data_cloudflare_magic_wan_bgp_filter_profiles

dataCloudflareMagicWanBgpFilterProfiles.DataCloudflareMagicWanBgpFilterProfiles.is_terraform_data_source(
  x: typing.Any
)
```

###### `x`<sup>Required</sup> <a name="x" id="@cdktn/provider-cloudflare.dataCloudflareMagicWanBgpFilterProfiles.DataCloudflareMagicWanBgpFilterProfiles.isTerraformDataSource.parameter.x"></a>

- *Type:* typing.Any

---

##### `generate_config_for_import` <a name="generate_config_for_import" id="@cdktn/provider-cloudflare.dataCloudflareMagicWanBgpFilterProfiles.DataCloudflareMagicWanBgpFilterProfiles.generateConfigForImport"></a>

```python
from cdktn_provider_cloudflare import data_cloudflare_magic_wan_bgp_filter_profiles

dataCloudflareMagicWanBgpFilterProfiles.DataCloudflareMagicWanBgpFilterProfiles.generate_config_for_import(
  scope: Construct,
  import_to_id: str,
  import_from_id: str,
  provider: TerraformProvider = None
)
```

Generates CDKTN code for importing a DataCloudflareMagicWanBgpFilterProfiles resource upon running "cdktn plan <stack-name>".

###### `scope`<sup>Required</sup> <a name="scope" id="@cdktn/provider-cloudflare.dataCloudflareMagicWanBgpFilterProfiles.DataCloudflareMagicWanBgpFilterProfiles.generateConfigForImport.parameter.scope"></a>

- *Type:* constructs.Construct

The scope in which to define this construct.

---

###### `import_to_id`<sup>Required</sup> <a name="import_to_id" id="@cdktn/provider-cloudflare.dataCloudflareMagicWanBgpFilterProfiles.DataCloudflareMagicWanBgpFilterProfiles.generateConfigForImport.parameter.importToId"></a>

- *Type:* str

The construct id used in the generated config for the DataCloudflareMagicWanBgpFilterProfiles to import.

---

###### `import_from_id`<sup>Required</sup> <a name="import_from_id" id="@cdktn/provider-cloudflare.dataCloudflareMagicWanBgpFilterProfiles.DataCloudflareMagicWanBgpFilterProfiles.generateConfigForImport.parameter.importFromId"></a>

- *Type:* str

The id of the existing DataCloudflareMagicWanBgpFilterProfiles that should be imported.

Refer to the {@link https://registry.terraform.io/providers/cloudflare/cloudflare/5.27.0/docs/data-sources/magic_wan_bgp_filter_profiles#import import section} in the documentation of this resource for the id to use

---

###### `provider`<sup>Optional</sup> <a name="provider" id="@cdktn/provider-cloudflare.dataCloudflareMagicWanBgpFilterProfiles.DataCloudflareMagicWanBgpFilterProfiles.generateConfigForImport.parameter.provider"></a>

- *Type:* cdktn.TerraformProvider

? Optional instance of the provider where the DataCloudflareMagicWanBgpFilterProfiles to import is found.

---

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-cloudflare.dataCloudflareMagicWanBgpFilterProfiles.DataCloudflareMagicWanBgpFilterProfiles.property.node">node</a></code> | <code>constructs.Node</code> | The tree node. |
| <code><a href="#@cdktn/provider-cloudflare.dataCloudflareMagicWanBgpFilterProfiles.DataCloudflareMagicWanBgpFilterProfiles.property.cdktfStack">cdktf_stack</a></code> | <code>cdktn.TerraformStack</code> | *No description.* |
| <code><a href="#@cdktn/provider-cloudflare.dataCloudflareMagicWanBgpFilterProfiles.DataCloudflareMagicWanBgpFilterProfiles.property.fqn">fqn</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktn/provider-cloudflare.dataCloudflareMagicWanBgpFilterProfiles.DataCloudflareMagicWanBgpFilterProfiles.property.friendlyUniqueId">friendly_unique_id</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktn/provider-cloudflare.dataCloudflareMagicWanBgpFilterProfiles.DataCloudflareMagicWanBgpFilterProfiles.property.terraformMetaArguments">terraform_meta_arguments</a></code> | <code>typing.Mapping[typing.Any]</code> | *No description.* |
| <code><a href="#@cdktn/provider-cloudflare.dataCloudflareMagicWanBgpFilterProfiles.DataCloudflareMagicWanBgpFilterProfiles.property.terraformResourceType">terraform_resource_type</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktn/provider-cloudflare.dataCloudflareMagicWanBgpFilterProfiles.DataCloudflareMagicWanBgpFilterProfiles.property.terraformGeneratorMetadata">terraform_generator_metadata</a></code> | <code>cdktn.TerraformProviderGeneratorMetadata</code> | *No description.* |
| <code><a href="#@cdktn/provider-cloudflare.dataCloudflareMagicWanBgpFilterProfiles.DataCloudflareMagicWanBgpFilterProfiles.property.count">count</a></code> | <code>typing.Union[int, float] \| cdktn.TerraformCount</code> | *No description.* |
| <code><a href="#@cdktn/provider-cloudflare.dataCloudflareMagicWanBgpFilterProfiles.DataCloudflareMagicWanBgpFilterProfiles.property.dependsOn">depends_on</a></code> | <code>typing.List[str]</code> | *No description.* |
| <code><a href="#@cdktn/provider-cloudflare.dataCloudflareMagicWanBgpFilterProfiles.DataCloudflareMagicWanBgpFilterProfiles.property.forEach">for_each</a></code> | <code>cdktn.ITerraformIterator</code> | *No description.* |
| <code><a href="#@cdktn/provider-cloudflare.dataCloudflareMagicWanBgpFilterProfiles.DataCloudflareMagicWanBgpFilterProfiles.property.lifecycle">lifecycle</a></code> | <code>cdktn.TerraformResourceLifecycle</code> | *No description.* |
| <code><a href="#@cdktn/provider-cloudflare.dataCloudflareMagicWanBgpFilterProfiles.DataCloudflareMagicWanBgpFilterProfiles.property.provider">provider</a></code> | <code>cdktn.TerraformProvider</code> | *No description.* |
| <code><a href="#@cdktn/provider-cloudflare.dataCloudflareMagicWanBgpFilterProfiles.DataCloudflareMagicWanBgpFilterProfiles.property.result">result</a></code> | <code><a href="#@cdktn/provider-cloudflare.dataCloudflareMagicWanBgpFilterProfiles.DataCloudflareMagicWanBgpFilterProfilesResultList">DataCloudflareMagicWanBgpFilterProfilesResultList</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-cloudflare.dataCloudflareMagicWanBgpFilterProfiles.DataCloudflareMagicWanBgpFilterProfiles.property.accountIdInput">account_id_input</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktn/provider-cloudflare.dataCloudflareMagicWanBgpFilterProfiles.DataCloudflareMagicWanBgpFilterProfiles.property.maxItemsInput">max_items_input</a></code> | <code>typing.Union[int, float]</code> | *No description.* |
| <code><a href="#@cdktn/provider-cloudflare.dataCloudflareMagicWanBgpFilterProfiles.DataCloudflareMagicWanBgpFilterProfiles.property.accountId">account_id</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktn/provider-cloudflare.dataCloudflareMagicWanBgpFilterProfiles.DataCloudflareMagicWanBgpFilterProfiles.property.maxItems">max_items</a></code> | <code>typing.Union[int, float]</code> | *No description.* |

---

##### `node`<sup>Required</sup> <a name="node" id="@cdktn/provider-cloudflare.dataCloudflareMagicWanBgpFilterProfiles.DataCloudflareMagicWanBgpFilterProfiles.property.node"></a>

```python
node: Node
```

- *Type:* constructs.Node

The tree node.

---

##### `cdktf_stack`<sup>Required</sup> <a name="cdktf_stack" id="@cdktn/provider-cloudflare.dataCloudflareMagicWanBgpFilterProfiles.DataCloudflareMagicWanBgpFilterProfiles.property.cdktfStack"></a>

```python
cdktf_stack: TerraformStack
```

- *Type:* cdktn.TerraformStack

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktn/provider-cloudflare.dataCloudflareMagicWanBgpFilterProfiles.DataCloudflareMagicWanBgpFilterProfiles.property.fqn"></a>

```python
fqn: str
```

- *Type:* str

---

##### `friendly_unique_id`<sup>Required</sup> <a name="friendly_unique_id" id="@cdktn/provider-cloudflare.dataCloudflareMagicWanBgpFilterProfiles.DataCloudflareMagicWanBgpFilterProfiles.property.friendlyUniqueId"></a>

```python
friendly_unique_id: str
```

- *Type:* str

---

##### `terraform_meta_arguments`<sup>Required</sup> <a name="terraform_meta_arguments" id="@cdktn/provider-cloudflare.dataCloudflareMagicWanBgpFilterProfiles.DataCloudflareMagicWanBgpFilterProfiles.property.terraformMetaArguments"></a>

```python
terraform_meta_arguments: typing.Mapping[typing.Any]
```

- *Type:* typing.Mapping[typing.Any]

---

##### `terraform_resource_type`<sup>Required</sup> <a name="terraform_resource_type" id="@cdktn/provider-cloudflare.dataCloudflareMagicWanBgpFilterProfiles.DataCloudflareMagicWanBgpFilterProfiles.property.terraformResourceType"></a>

```python
terraform_resource_type: str
```

- *Type:* str

---

##### `terraform_generator_metadata`<sup>Optional</sup> <a name="terraform_generator_metadata" id="@cdktn/provider-cloudflare.dataCloudflareMagicWanBgpFilterProfiles.DataCloudflareMagicWanBgpFilterProfiles.property.terraformGeneratorMetadata"></a>

```python
terraform_generator_metadata: TerraformProviderGeneratorMetadata
```

- *Type:* cdktn.TerraformProviderGeneratorMetadata

---

##### `count`<sup>Optional</sup> <a name="count" id="@cdktn/provider-cloudflare.dataCloudflareMagicWanBgpFilterProfiles.DataCloudflareMagicWanBgpFilterProfiles.property.count"></a>

```python
count: typing.Union[int, float] | TerraformCount
```

- *Type:* typing.Union[int, float] | cdktn.TerraformCount

---

##### `depends_on`<sup>Optional</sup> <a name="depends_on" id="@cdktn/provider-cloudflare.dataCloudflareMagicWanBgpFilterProfiles.DataCloudflareMagicWanBgpFilterProfiles.property.dependsOn"></a>

```python
depends_on: typing.List[str]
```

- *Type:* typing.List[str]

---

##### `for_each`<sup>Optional</sup> <a name="for_each" id="@cdktn/provider-cloudflare.dataCloudflareMagicWanBgpFilterProfiles.DataCloudflareMagicWanBgpFilterProfiles.property.forEach"></a>

```python
for_each: ITerraformIterator
```

- *Type:* cdktn.ITerraformIterator

---

##### `lifecycle`<sup>Optional</sup> <a name="lifecycle" id="@cdktn/provider-cloudflare.dataCloudflareMagicWanBgpFilterProfiles.DataCloudflareMagicWanBgpFilterProfiles.property.lifecycle"></a>

```python
lifecycle: TerraformResourceLifecycle
```

- *Type:* cdktn.TerraformResourceLifecycle

---

##### `provider`<sup>Optional</sup> <a name="provider" id="@cdktn/provider-cloudflare.dataCloudflareMagicWanBgpFilterProfiles.DataCloudflareMagicWanBgpFilterProfiles.property.provider"></a>

```python
provider: TerraformProvider
```

- *Type:* cdktn.TerraformProvider

---

##### `result`<sup>Required</sup> <a name="result" id="@cdktn/provider-cloudflare.dataCloudflareMagicWanBgpFilterProfiles.DataCloudflareMagicWanBgpFilterProfiles.property.result"></a>

```python
result: DataCloudflareMagicWanBgpFilterProfilesResultList
```

- *Type:* <a href="#@cdktn/provider-cloudflare.dataCloudflareMagicWanBgpFilterProfiles.DataCloudflareMagicWanBgpFilterProfilesResultList">DataCloudflareMagicWanBgpFilterProfilesResultList</a>

---

##### `account_id_input`<sup>Optional</sup> <a name="account_id_input" id="@cdktn/provider-cloudflare.dataCloudflareMagicWanBgpFilterProfiles.DataCloudflareMagicWanBgpFilterProfiles.property.accountIdInput"></a>

```python
account_id_input: str
```

- *Type:* str

---

##### `max_items_input`<sup>Optional</sup> <a name="max_items_input" id="@cdktn/provider-cloudflare.dataCloudflareMagicWanBgpFilterProfiles.DataCloudflareMagicWanBgpFilterProfiles.property.maxItemsInput"></a>

```python
max_items_input: typing.Union[int, float]
```

- *Type:* typing.Union[int, float]

---

##### `account_id`<sup>Required</sup> <a name="account_id" id="@cdktn/provider-cloudflare.dataCloudflareMagicWanBgpFilterProfiles.DataCloudflareMagicWanBgpFilterProfiles.property.accountId"></a>

```python
account_id: str
```

- *Type:* str

---

##### `max_items`<sup>Required</sup> <a name="max_items" id="@cdktn/provider-cloudflare.dataCloudflareMagicWanBgpFilterProfiles.DataCloudflareMagicWanBgpFilterProfiles.property.maxItems"></a>

```python
max_items: typing.Union[int, float]
```

- *Type:* typing.Union[int, float]

---

#### Constants <a name="Constants" id="Constants"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-cloudflare.dataCloudflareMagicWanBgpFilterProfiles.DataCloudflareMagicWanBgpFilterProfiles.property.tfResourceType">tfResourceType</a></code> | <code>str</code> | *No description.* |

---

##### `tfResourceType`<sup>Required</sup> <a name="tfResourceType" id="@cdktn/provider-cloudflare.dataCloudflareMagicWanBgpFilterProfiles.DataCloudflareMagicWanBgpFilterProfiles.property.tfResourceType"></a>

```python
tfResourceType: str
```

- *Type:* str

---

## Structs <a name="Structs" id="Structs"></a>

### DataCloudflareMagicWanBgpFilterProfilesConfig <a name="DataCloudflareMagicWanBgpFilterProfilesConfig" id="@cdktn/provider-cloudflare.dataCloudflareMagicWanBgpFilterProfiles.DataCloudflareMagicWanBgpFilterProfilesConfig"></a>

#### Initializer <a name="Initializer" id="@cdktn/provider-cloudflare.dataCloudflareMagicWanBgpFilterProfiles.DataCloudflareMagicWanBgpFilterProfilesConfig.Initializer"></a>

```python
from cdktn_provider_cloudflare import data_cloudflare_magic_wan_bgp_filter_profiles

dataCloudflareMagicWanBgpFilterProfiles.DataCloudflareMagicWanBgpFilterProfilesConfig(
  connection: SSHProvisionerConnection | WinrmProvisionerConnection = None,
  count: typing.Union[int, float] | TerraformCount = None,
  depends_on: typing.List[ITerraformDependable] = None,
  for_each: ITerraformIterator = None,
  lifecycle: TerraformResourceLifecycle = None,
  provider: TerraformProvider = None,
  provisioners: typing.List[FileProvisioner | LocalExecProvisioner | RemoteExecProvisioner] = None,
  account_id: str,
  max_items: typing.Union[int, float] = None
)
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-cloudflare.dataCloudflareMagicWanBgpFilterProfiles.DataCloudflareMagicWanBgpFilterProfilesConfig.property.connection">connection</a></code> | <code>cdktn.SSHProvisionerConnection \| cdktn.WinrmProvisionerConnection</code> | *No description.* |
| <code><a href="#@cdktn/provider-cloudflare.dataCloudflareMagicWanBgpFilterProfiles.DataCloudflareMagicWanBgpFilterProfilesConfig.property.count">count</a></code> | <code>typing.Union[int, float] \| cdktn.TerraformCount</code> | *No description.* |
| <code><a href="#@cdktn/provider-cloudflare.dataCloudflareMagicWanBgpFilterProfiles.DataCloudflareMagicWanBgpFilterProfilesConfig.property.dependsOn">depends_on</a></code> | <code>typing.List[cdktn.ITerraformDependable]</code> | *No description.* |
| <code><a href="#@cdktn/provider-cloudflare.dataCloudflareMagicWanBgpFilterProfiles.DataCloudflareMagicWanBgpFilterProfilesConfig.property.forEach">for_each</a></code> | <code>cdktn.ITerraformIterator</code> | *No description.* |
| <code><a href="#@cdktn/provider-cloudflare.dataCloudflareMagicWanBgpFilterProfiles.DataCloudflareMagicWanBgpFilterProfilesConfig.property.lifecycle">lifecycle</a></code> | <code>cdktn.TerraformResourceLifecycle</code> | *No description.* |
| <code><a href="#@cdktn/provider-cloudflare.dataCloudflareMagicWanBgpFilterProfiles.DataCloudflareMagicWanBgpFilterProfilesConfig.property.provider">provider</a></code> | <code>cdktn.TerraformProvider</code> | *No description.* |
| <code><a href="#@cdktn/provider-cloudflare.dataCloudflareMagicWanBgpFilterProfiles.DataCloudflareMagicWanBgpFilterProfilesConfig.property.provisioners">provisioners</a></code> | <code>typing.List[cdktn.FileProvisioner \| cdktn.LocalExecProvisioner \| cdktn.RemoteExecProvisioner]</code> | *No description.* |
| <code><a href="#@cdktn/provider-cloudflare.dataCloudflareMagicWanBgpFilterProfiles.DataCloudflareMagicWanBgpFilterProfilesConfig.property.accountId">account_id</a></code> | <code>str</code> | Identifier. |
| <code><a href="#@cdktn/provider-cloudflare.dataCloudflareMagicWanBgpFilterProfiles.DataCloudflareMagicWanBgpFilterProfilesConfig.property.maxItems">max_items</a></code> | <code>typing.Union[int, float]</code> | Max items to fetch, default: 1000. |

---

##### `connection`<sup>Optional</sup> <a name="connection" id="@cdktn/provider-cloudflare.dataCloudflareMagicWanBgpFilterProfiles.DataCloudflareMagicWanBgpFilterProfilesConfig.property.connection"></a>

```python
connection: SSHProvisionerConnection | WinrmProvisionerConnection
```

- *Type:* cdktn.SSHProvisionerConnection | cdktn.WinrmProvisionerConnection

---

##### `count`<sup>Optional</sup> <a name="count" id="@cdktn/provider-cloudflare.dataCloudflareMagicWanBgpFilterProfiles.DataCloudflareMagicWanBgpFilterProfilesConfig.property.count"></a>

```python
count: typing.Union[int, float] | TerraformCount
```

- *Type:* typing.Union[int, float] | cdktn.TerraformCount

---

##### `depends_on`<sup>Optional</sup> <a name="depends_on" id="@cdktn/provider-cloudflare.dataCloudflareMagicWanBgpFilterProfiles.DataCloudflareMagicWanBgpFilterProfilesConfig.property.dependsOn"></a>

```python
depends_on: typing.List[ITerraformDependable]
```

- *Type:* typing.List[cdktn.ITerraformDependable]

---

##### `for_each`<sup>Optional</sup> <a name="for_each" id="@cdktn/provider-cloudflare.dataCloudflareMagicWanBgpFilterProfiles.DataCloudflareMagicWanBgpFilterProfilesConfig.property.forEach"></a>

```python
for_each: ITerraformIterator
```

- *Type:* cdktn.ITerraformIterator

---

##### `lifecycle`<sup>Optional</sup> <a name="lifecycle" id="@cdktn/provider-cloudflare.dataCloudflareMagicWanBgpFilterProfiles.DataCloudflareMagicWanBgpFilterProfilesConfig.property.lifecycle"></a>

```python
lifecycle: TerraformResourceLifecycle
```

- *Type:* cdktn.TerraformResourceLifecycle

---

##### `provider`<sup>Optional</sup> <a name="provider" id="@cdktn/provider-cloudflare.dataCloudflareMagicWanBgpFilterProfiles.DataCloudflareMagicWanBgpFilterProfilesConfig.property.provider"></a>

```python
provider: TerraformProvider
```

- *Type:* cdktn.TerraformProvider

---

##### `provisioners`<sup>Optional</sup> <a name="provisioners" id="@cdktn/provider-cloudflare.dataCloudflareMagicWanBgpFilterProfiles.DataCloudflareMagicWanBgpFilterProfilesConfig.property.provisioners"></a>

```python
provisioners: typing.List[FileProvisioner | LocalExecProvisioner | RemoteExecProvisioner]
```

- *Type:* typing.List[cdktn.FileProvisioner | cdktn.LocalExecProvisioner | cdktn.RemoteExecProvisioner]

---

##### `account_id`<sup>Required</sup> <a name="account_id" id="@cdktn/provider-cloudflare.dataCloudflareMagicWanBgpFilterProfiles.DataCloudflareMagicWanBgpFilterProfilesConfig.property.accountId"></a>

```python
account_id: str
```

- *Type:* str

Identifier.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/cloudflare/cloudflare/5.27.0/docs/data-sources/magic_wan_bgp_filter_profiles#account_id DataCloudflareMagicWanBgpFilterProfiles#account_id}

---

##### `max_items`<sup>Optional</sup> <a name="max_items" id="@cdktn/provider-cloudflare.dataCloudflareMagicWanBgpFilterProfiles.DataCloudflareMagicWanBgpFilterProfilesConfig.property.maxItems"></a>

```python
max_items: typing.Union[int, float]
```

- *Type:* typing.Union[int, float]

Max items to fetch, default: 1000.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/cloudflare/cloudflare/5.27.0/docs/data-sources/magic_wan_bgp_filter_profiles#max_items DataCloudflareMagicWanBgpFilterProfiles#max_items}

---

### DataCloudflareMagicWanBgpFilterProfilesResult <a name="DataCloudflareMagicWanBgpFilterProfilesResult" id="@cdktn/provider-cloudflare.dataCloudflareMagicWanBgpFilterProfiles.DataCloudflareMagicWanBgpFilterProfilesResult"></a>

#### Initializer <a name="Initializer" id="@cdktn/provider-cloudflare.dataCloudflareMagicWanBgpFilterProfiles.DataCloudflareMagicWanBgpFilterProfilesResult.Initializer"></a>

```python
from cdktn_provider_cloudflare import data_cloudflare_magic_wan_bgp_filter_profiles

dataCloudflareMagicWanBgpFilterProfiles.DataCloudflareMagicWanBgpFilterProfilesResult()
```


## Classes <a name="Classes" id="Classes"></a>

### DataCloudflareMagicWanBgpFilterProfilesResultList <a name="DataCloudflareMagicWanBgpFilterProfilesResultList" id="@cdktn/provider-cloudflare.dataCloudflareMagicWanBgpFilterProfiles.DataCloudflareMagicWanBgpFilterProfilesResultList"></a>

#### Initializers <a name="Initializers" id="@cdktn/provider-cloudflare.dataCloudflareMagicWanBgpFilterProfiles.DataCloudflareMagicWanBgpFilterProfilesResultList.Initializer"></a>

```python
from cdktn_provider_cloudflare import data_cloudflare_magic_wan_bgp_filter_profiles

dataCloudflareMagicWanBgpFilterProfiles.DataCloudflareMagicWanBgpFilterProfilesResultList(
  terraform_resource: IInterpolatingParent,
  terraform_attribute: str,
  wraps_set: bool
)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-cloudflare.dataCloudflareMagicWanBgpFilterProfiles.DataCloudflareMagicWanBgpFilterProfilesResultList.Initializer.parameter.terraformResource">terraform_resource</a></code> | <code>cdktn.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktn/provider-cloudflare.dataCloudflareMagicWanBgpFilterProfiles.DataCloudflareMagicWanBgpFilterProfilesResultList.Initializer.parameter.terraformAttribute">terraform_attribute</a></code> | <code>str</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#@cdktn/provider-cloudflare.dataCloudflareMagicWanBgpFilterProfiles.DataCloudflareMagicWanBgpFilterProfilesResultList.Initializer.parameter.wrapsSet">wraps_set</a></code> | <code>bool</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraform_resource`<sup>Required</sup> <a name="terraform_resource" id="@cdktn/provider-cloudflare.dataCloudflareMagicWanBgpFilterProfiles.DataCloudflareMagicWanBgpFilterProfilesResultList.Initializer.parameter.terraformResource"></a>

- *Type:* cdktn.IInterpolatingParent

The parent resource.

---

##### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-cloudflare.dataCloudflareMagicWanBgpFilterProfiles.DataCloudflareMagicWanBgpFilterProfilesResultList.Initializer.parameter.terraformAttribute"></a>

- *Type:* str

The attribute on the parent resource this class is referencing.

---

##### `wraps_set`<sup>Required</sup> <a name="wraps_set" id="@cdktn/provider-cloudflare.dataCloudflareMagicWanBgpFilterProfiles.DataCloudflareMagicWanBgpFilterProfilesResultList.Initializer.parameter.wrapsSet"></a>

- *Type:* bool

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-cloudflare.dataCloudflareMagicWanBgpFilterProfiles.DataCloudflareMagicWanBgpFilterProfilesResultList.allWithMapKey">all_with_map_key</a></code> | Creating an iterator for this complex list. |
| <code><a href="#@cdktn/provider-cloudflare.dataCloudflareMagicWanBgpFilterProfiles.DataCloudflareMagicWanBgpFilterProfilesResultList.computeFqn">compute_fqn</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-cloudflare.dataCloudflareMagicWanBgpFilterProfiles.DataCloudflareMagicWanBgpFilterProfilesResultList.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktn/provider-cloudflare.dataCloudflareMagicWanBgpFilterProfiles.DataCloudflareMagicWanBgpFilterProfilesResultList.toString">to_string</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktn/provider-cloudflare.dataCloudflareMagicWanBgpFilterProfiles.DataCloudflareMagicWanBgpFilterProfilesResultList.get">get</a></code> | *No description.* |

---

##### `all_with_map_key` <a name="all_with_map_key" id="@cdktn/provider-cloudflare.dataCloudflareMagicWanBgpFilterProfiles.DataCloudflareMagicWanBgpFilterProfilesResultList.allWithMapKey"></a>

```python
def all_with_map_key(
  map_key_attribute_name: str
) -> DynamicListTerraformIterator
```

Creating an iterator for this complex list.

The list will be converted into a map with the mapKeyAttributeName as the key.

###### `map_key_attribute_name`<sup>Required</sup> <a name="map_key_attribute_name" id="@cdktn/provider-cloudflare.dataCloudflareMagicWanBgpFilterProfiles.DataCloudflareMagicWanBgpFilterProfilesResultList.allWithMapKey.parameter.mapKeyAttributeName"></a>

- *Type:* str

---

##### `compute_fqn` <a name="compute_fqn" id="@cdktn/provider-cloudflare.dataCloudflareMagicWanBgpFilterProfiles.DataCloudflareMagicWanBgpFilterProfilesResultList.computeFqn"></a>

```python
def compute_fqn() -> str
```

##### `resolve` <a name="resolve" id="@cdktn/provider-cloudflare.dataCloudflareMagicWanBgpFilterProfiles.DataCloudflareMagicWanBgpFilterProfilesResultList.resolve"></a>

```python
def resolve(
  _context: IResolveContext
) -> typing.Any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktn/provider-cloudflare.dataCloudflareMagicWanBgpFilterProfiles.DataCloudflareMagicWanBgpFilterProfilesResultList.resolve.parameter._context"></a>

- *Type:* cdktn.IResolveContext

---

##### `to_string` <a name="to_string" id="@cdktn/provider-cloudflare.dataCloudflareMagicWanBgpFilterProfiles.DataCloudflareMagicWanBgpFilterProfilesResultList.toString"></a>

```python
def to_string() -> str
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `get` <a name="get" id="@cdktn/provider-cloudflare.dataCloudflareMagicWanBgpFilterProfiles.DataCloudflareMagicWanBgpFilterProfilesResultList.get"></a>

```python
def get(
  index: typing.Union[int, float]
) -> DataCloudflareMagicWanBgpFilterProfilesResultOutputReference
```

###### `index`<sup>Required</sup> <a name="index" id="@cdktn/provider-cloudflare.dataCloudflareMagicWanBgpFilterProfiles.DataCloudflareMagicWanBgpFilterProfilesResultList.get.parameter.index"></a>

- *Type:* typing.Union[int, float]

the index of the item to return.

---


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-cloudflare.dataCloudflareMagicWanBgpFilterProfiles.DataCloudflareMagicWanBgpFilterProfilesResultList.property.creationStack">creation_stack</a></code> | <code>typing.List[str]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktn/provider-cloudflare.dataCloudflareMagicWanBgpFilterProfiles.DataCloudflareMagicWanBgpFilterProfilesResultList.property.fqn">fqn</a></code> | <code>str</code> | *No description.* |

---

##### `creation_stack`<sup>Required</sup> <a name="creation_stack" id="@cdktn/provider-cloudflare.dataCloudflareMagicWanBgpFilterProfiles.DataCloudflareMagicWanBgpFilterProfilesResultList.property.creationStack"></a>

```python
creation_stack: typing.List[str]
```

- *Type:* typing.List[str]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktn/provider-cloudflare.dataCloudflareMagicWanBgpFilterProfiles.DataCloudflareMagicWanBgpFilterProfilesResultList.property.fqn"></a>

```python
fqn: str
```

- *Type:* str

---


### DataCloudflareMagicWanBgpFilterProfilesResultOutputReference <a name="DataCloudflareMagicWanBgpFilterProfilesResultOutputReference" id="@cdktn/provider-cloudflare.dataCloudflareMagicWanBgpFilterProfiles.DataCloudflareMagicWanBgpFilterProfilesResultOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktn/provider-cloudflare.dataCloudflareMagicWanBgpFilterProfiles.DataCloudflareMagicWanBgpFilterProfilesResultOutputReference.Initializer"></a>

```python
from cdktn_provider_cloudflare import data_cloudflare_magic_wan_bgp_filter_profiles

dataCloudflareMagicWanBgpFilterProfiles.DataCloudflareMagicWanBgpFilterProfilesResultOutputReference(
  terraform_resource: IInterpolatingParent,
  terraform_attribute: str,
  complex_object_index: typing.Union[int, float],
  complex_object_is_from_set: bool
)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-cloudflare.dataCloudflareMagicWanBgpFilterProfiles.DataCloudflareMagicWanBgpFilterProfilesResultOutputReference.Initializer.parameter.terraformResource">terraform_resource</a></code> | <code>cdktn.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktn/provider-cloudflare.dataCloudflareMagicWanBgpFilterProfiles.DataCloudflareMagicWanBgpFilterProfilesResultOutputReference.Initializer.parameter.terraformAttribute">terraform_attribute</a></code> | <code>str</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#@cdktn/provider-cloudflare.dataCloudflareMagicWanBgpFilterProfiles.DataCloudflareMagicWanBgpFilterProfilesResultOutputReference.Initializer.parameter.complexObjectIndex">complex_object_index</a></code> | <code>typing.Union[int, float]</code> | the index of this item in the list. |
| <code><a href="#@cdktn/provider-cloudflare.dataCloudflareMagicWanBgpFilterProfiles.DataCloudflareMagicWanBgpFilterProfilesResultOutputReference.Initializer.parameter.complexObjectIsFromSet">complex_object_is_from_set</a></code> | <code>bool</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraform_resource`<sup>Required</sup> <a name="terraform_resource" id="@cdktn/provider-cloudflare.dataCloudflareMagicWanBgpFilterProfiles.DataCloudflareMagicWanBgpFilterProfilesResultOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* cdktn.IInterpolatingParent

The parent resource.

---

##### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-cloudflare.dataCloudflareMagicWanBgpFilterProfiles.DataCloudflareMagicWanBgpFilterProfilesResultOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* str

The attribute on the parent resource this class is referencing.

---

##### `complex_object_index`<sup>Required</sup> <a name="complex_object_index" id="@cdktn/provider-cloudflare.dataCloudflareMagicWanBgpFilterProfiles.DataCloudflareMagicWanBgpFilterProfilesResultOutputReference.Initializer.parameter.complexObjectIndex"></a>

- *Type:* typing.Union[int, float]

the index of this item in the list.

---

##### `complex_object_is_from_set`<sup>Required</sup> <a name="complex_object_is_from_set" id="@cdktn/provider-cloudflare.dataCloudflareMagicWanBgpFilterProfiles.DataCloudflareMagicWanBgpFilterProfilesResultOutputReference.Initializer.parameter.complexObjectIsFromSet"></a>

- *Type:* bool

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-cloudflare.dataCloudflareMagicWanBgpFilterProfiles.DataCloudflareMagicWanBgpFilterProfilesResultOutputReference.computeFqn">compute_fqn</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-cloudflare.dataCloudflareMagicWanBgpFilterProfiles.DataCloudflareMagicWanBgpFilterProfilesResultOutputReference.getAnyMapAttribute">get_any_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-cloudflare.dataCloudflareMagicWanBgpFilterProfiles.DataCloudflareMagicWanBgpFilterProfilesResultOutputReference.getBooleanAttribute">get_boolean_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-cloudflare.dataCloudflareMagicWanBgpFilterProfiles.DataCloudflareMagicWanBgpFilterProfilesResultOutputReference.getBooleanMapAttribute">get_boolean_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-cloudflare.dataCloudflareMagicWanBgpFilterProfiles.DataCloudflareMagicWanBgpFilterProfilesResultOutputReference.getListAttribute">get_list_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-cloudflare.dataCloudflareMagicWanBgpFilterProfiles.DataCloudflareMagicWanBgpFilterProfilesResultOutputReference.getNumberAttribute">get_number_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-cloudflare.dataCloudflareMagicWanBgpFilterProfiles.DataCloudflareMagicWanBgpFilterProfilesResultOutputReference.getNumberListAttribute">get_number_list_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-cloudflare.dataCloudflareMagicWanBgpFilterProfiles.DataCloudflareMagicWanBgpFilterProfilesResultOutputReference.getNumberMapAttribute">get_number_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-cloudflare.dataCloudflareMagicWanBgpFilterProfiles.DataCloudflareMagicWanBgpFilterProfilesResultOutputReference.getStringAttribute">get_string_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-cloudflare.dataCloudflareMagicWanBgpFilterProfiles.DataCloudflareMagicWanBgpFilterProfilesResultOutputReference.getStringMapAttribute">get_string_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-cloudflare.dataCloudflareMagicWanBgpFilterProfiles.DataCloudflareMagicWanBgpFilterProfilesResultOutputReference.interpolationForAttribute">interpolation_for_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-cloudflare.dataCloudflareMagicWanBgpFilterProfiles.DataCloudflareMagicWanBgpFilterProfilesResultOutputReference.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktn/provider-cloudflare.dataCloudflareMagicWanBgpFilterProfiles.DataCloudflareMagicWanBgpFilterProfilesResultOutputReference.toString">to_string</a></code> | Return a string representation of this resolvable object. |

---

##### `compute_fqn` <a name="compute_fqn" id="@cdktn/provider-cloudflare.dataCloudflareMagicWanBgpFilterProfiles.DataCloudflareMagicWanBgpFilterProfilesResultOutputReference.computeFqn"></a>

```python
def compute_fqn() -> str
```

##### `get_any_map_attribute` <a name="get_any_map_attribute" id="@cdktn/provider-cloudflare.dataCloudflareMagicWanBgpFilterProfiles.DataCloudflareMagicWanBgpFilterProfilesResultOutputReference.getAnyMapAttribute"></a>

```python
def get_any_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[typing.Any]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-cloudflare.dataCloudflareMagicWanBgpFilterProfiles.DataCloudflareMagicWanBgpFilterProfilesResultOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_boolean_attribute` <a name="get_boolean_attribute" id="@cdktn/provider-cloudflare.dataCloudflareMagicWanBgpFilterProfiles.DataCloudflareMagicWanBgpFilterProfilesResultOutputReference.getBooleanAttribute"></a>

```python
def get_boolean_attribute(
  terraform_attribute: str
) -> IResolvable
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-cloudflare.dataCloudflareMagicWanBgpFilterProfiles.DataCloudflareMagicWanBgpFilterProfilesResultOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_boolean_map_attribute` <a name="get_boolean_map_attribute" id="@cdktn/provider-cloudflare.dataCloudflareMagicWanBgpFilterProfiles.DataCloudflareMagicWanBgpFilterProfilesResultOutputReference.getBooleanMapAttribute"></a>

```python
def get_boolean_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[bool]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-cloudflare.dataCloudflareMagicWanBgpFilterProfiles.DataCloudflareMagicWanBgpFilterProfilesResultOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_list_attribute` <a name="get_list_attribute" id="@cdktn/provider-cloudflare.dataCloudflareMagicWanBgpFilterProfiles.DataCloudflareMagicWanBgpFilterProfilesResultOutputReference.getListAttribute"></a>

```python
def get_list_attribute(
  terraform_attribute: str
) -> typing.List[str]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-cloudflare.dataCloudflareMagicWanBgpFilterProfiles.DataCloudflareMagicWanBgpFilterProfilesResultOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_attribute` <a name="get_number_attribute" id="@cdktn/provider-cloudflare.dataCloudflareMagicWanBgpFilterProfiles.DataCloudflareMagicWanBgpFilterProfilesResultOutputReference.getNumberAttribute"></a>

```python
def get_number_attribute(
  terraform_attribute: str
) -> typing.Union[int, float]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-cloudflare.dataCloudflareMagicWanBgpFilterProfiles.DataCloudflareMagicWanBgpFilterProfilesResultOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_list_attribute` <a name="get_number_list_attribute" id="@cdktn/provider-cloudflare.dataCloudflareMagicWanBgpFilterProfiles.DataCloudflareMagicWanBgpFilterProfilesResultOutputReference.getNumberListAttribute"></a>

```python
def get_number_list_attribute(
  terraform_attribute: str
) -> typing.List[typing.Union[int, float]]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-cloudflare.dataCloudflareMagicWanBgpFilterProfiles.DataCloudflareMagicWanBgpFilterProfilesResultOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_map_attribute` <a name="get_number_map_attribute" id="@cdktn/provider-cloudflare.dataCloudflareMagicWanBgpFilterProfiles.DataCloudflareMagicWanBgpFilterProfilesResultOutputReference.getNumberMapAttribute"></a>

```python
def get_number_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[typing.Union[int, float]]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-cloudflare.dataCloudflareMagicWanBgpFilterProfiles.DataCloudflareMagicWanBgpFilterProfilesResultOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_string_attribute` <a name="get_string_attribute" id="@cdktn/provider-cloudflare.dataCloudflareMagicWanBgpFilterProfiles.DataCloudflareMagicWanBgpFilterProfilesResultOutputReference.getStringAttribute"></a>

```python
def get_string_attribute(
  terraform_attribute: str
) -> str
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-cloudflare.dataCloudflareMagicWanBgpFilterProfiles.DataCloudflareMagicWanBgpFilterProfilesResultOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_string_map_attribute` <a name="get_string_map_attribute" id="@cdktn/provider-cloudflare.dataCloudflareMagicWanBgpFilterProfiles.DataCloudflareMagicWanBgpFilterProfilesResultOutputReference.getStringMapAttribute"></a>

```python
def get_string_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[str]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-cloudflare.dataCloudflareMagicWanBgpFilterProfiles.DataCloudflareMagicWanBgpFilterProfilesResultOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `interpolation_for_attribute` <a name="interpolation_for_attribute" id="@cdktn/provider-cloudflare.dataCloudflareMagicWanBgpFilterProfiles.DataCloudflareMagicWanBgpFilterProfilesResultOutputReference.interpolationForAttribute"></a>

```python
def interpolation_for_attribute(
  property: str
) -> IResolvable
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktn/provider-cloudflare.dataCloudflareMagicWanBgpFilterProfiles.DataCloudflareMagicWanBgpFilterProfilesResultOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* str

---

##### `resolve` <a name="resolve" id="@cdktn/provider-cloudflare.dataCloudflareMagicWanBgpFilterProfiles.DataCloudflareMagicWanBgpFilterProfilesResultOutputReference.resolve"></a>

```python
def resolve(
  _context: IResolveContext
) -> typing.Any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktn/provider-cloudflare.dataCloudflareMagicWanBgpFilterProfiles.DataCloudflareMagicWanBgpFilterProfilesResultOutputReference.resolve.parameter._context"></a>

- *Type:* cdktn.IResolveContext

---

##### `to_string` <a name="to_string" id="@cdktn/provider-cloudflare.dataCloudflareMagicWanBgpFilterProfiles.DataCloudflareMagicWanBgpFilterProfilesResultOutputReference.toString"></a>

```python
def to_string() -> str
```

Return a string representation of this resolvable object.

Returns a reversible string representation.


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-cloudflare.dataCloudflareMagicWanBgpFilterProfiles.DataCloudflareMagicWanBgpFilterProfilesResultOutputReference.property.creationStack">creation_stack</a></code> | <code>typing.List[str]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktn/provider-cloudflare.dataCloudflareMagicWanBgpFilterProfiles.DataCloudflareMagicWanBgpFilterProfilesResultOutputReference.property.fqn">fqn</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktn/provider-cloudflare.dataCloudflareMagicWanBgpFilterProfiles.DataCloudflareMagicWanBgpFilterProfilesResultOutputReference.property.createdOn">created_on</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktn/provider-cloudflare.dataCloudflareMagicWanBgpFilterProfiles.DataCloudflareMagicWanBgpFilterProfilesResultOutputReference.property.description">description</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktn/provider-cloudflare.dataCloudflareMagicWanBgpFilterProfiles.DataCloudflareMagicWanBgpFilterProfilesResultOutputReference.property.id">id</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktn/provider-cloudflare.dataCloudflareMagicWanBgpFilterProfiles.DataCloudflareMagicWanBgpFilterProfilesResultOutputReference.property.matchAction">match_action</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktn/provider-cloudflare.dataCloudflareMagicWanBgpFilterProfiles.DataCloudflareMagicWanBgpFilterProfilesResultOutputReference.property.modifiedOn">modified_on</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktn/provider-cloudflare.dataCloudflareMagicWanBgpFilterProfiles.DataCloudflareMagicWanBgpFilterProfilesResultOutputReference.property.name">name</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktn/provider-cloudflare.dataCloudflareMagicWanBgpFilterProfiles.DataCloudflareMagicWanBgpFilterProfilesResultOutputReference.property.targets">targets</a></code> | <code>typing.List[str]</code> | *No description.* |
| <code><a href="#@cdktn/provider-cloudflare.dataCloudflareMagicWanBgpFilterProfiles.DataCloudflareMagicWanBgpFilterProfilesResultOutputReference.property.internalValue">internal_value</a></code> | <code><a href="#@cdktn/provider-cloudflare.dataCloudflareMagicWanBgpFilterProfiles.DataCloudflareMagicWanBgpFilterProfilesResult">DataCloudflareMagicWanBgpFilterProfilesResult</a></code> | *No description.* |

---

##### `creation_stack`<sup>Required</sup> <a name="creation_stack" id="@cdktn/provider-cloudflare.dataCloudflareMagicWanBgpFilterProfiles.DataCloudflareMagicWanBgpFilterProfilesResultOutputReference.property.creationStack"></a>

```python
creation_stack: typing.List[str]
```

- *Type:* typing.List[str]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktn/provider-cloudflare.dataCloudflareMagicWanBgpFilterProfiles.DataCloudflareMagicWanBgpFilterProfilesResultOutputReference.property.fqn"></a>

```python
fqn: str
```

- *Type:* str

---

##### `created_on`<sup>Required</sup> <a name="created_on" id="@cdktn/provider-cloudflare.dataCloudflareMagicWanBgpFilterProfiles.DataCloudflareMagicWanBgpFilterProfilesResultOutputReference.property.createdOn"></a>

```python
created_on: str
```

- *Type:* str

---

##### `description`<sup>Required</sup> <a name="description" id="@cdktn/provider-cloudflare.dataCloudflareMagicWanBgpFilterProfiles.DataCloudflareMagicWanBgpFilterProfilesResultOutputReference.property.description"></a>

```python
description: str
```

- *Type:* str

---

##### `id`<sup>Required</sup> <a name="id" id="@cdktn/provider-cloudflare.dataCloudflareMagicWanBgpFilterProfiles.DataCloudflareMagicWanBgpFilterProfilesResultOutputReference.property.id"></a>

```python
id: str
```

- *Type:* str

---

##### `match_action`<sup>Required</sup> <a name="match_action" id="@cdktn/provider-cloudflare.dataCloudflareMagicWanBgpFilterProfiles.DataCloudflareMagicWanBgpFilterProfilesResultOutputReference.property.matchAction"></a>

```python
match_action: str
```

- *Type:* str

---

##### `modified_on`<sup>Required</sup> <a name="modified_on" id="@cdktn/provider-cloudflare.dataCloudflareMagicWanBgpFilterProfiles.DataCloudflareMagicWanBgpFilterProfilesResultOutputReference.property.modifiedOn"></a>

```python
modified_on: str
```

- *Type:* str

---

##### `name`<sup>Required</sup> <a name="name" id="@cdktn/provider-cloudflare.dataCloudflareMagicWanBgpFilterProfiles.DataCloudflareMagicWanBgpFilterProfilesResultOutputReference.property.name"></a>

```python
name: str
```

- *Type:* str

---

##### `targets`<sup>Required</sup> <a name="targets" id="@cdktn/provider-cloudflare.dataCloudflareMagicWanBgpFilterProfiles.DataCloudflareMagicWanBgpFilterProfilesResultOutputReference.property.targets"></a>

```python
targets: typing.List[str]
```

- *Type:* typing.List[str]

---

##### `internal_value`<sup>Optional</sup> <a name="internal_value" id="@cdktn/provider-cloudflare.dataCloudflareMagicWanBgpFilterProfiles.DataCloudflareMagicWanBgpFilterProfilesResultOutputReference.property.internalValue"></a>

```python
internal_value: DataCloudflareMagicWanBgpFilterProfilesResult
```

- *Type:* <a href="#@cdktn/provider-cloudflare.dataCloudflareMagicWanBgpFilterProfiles.DataCloudflareMagicWanBgpFilterProfilesResult">DataCloudflareMagicWanBgpFilterProfilesResult</a>

---



