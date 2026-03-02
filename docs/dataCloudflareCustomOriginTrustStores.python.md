# `dataCloudflareCustomOriginTrustStores` Submodule <a name="`dataCloudflareCustomOriginTrustStores` Submodule" id="@cdktn/provider-cloudflare.dataCloudflareCustomOriginTrustStores"></a>

## Constructs <a name="Constructs" id="Constructs"></a>

### DataCloudflareCustomOriginTrustStores <a name="DataCloudflareCustomOriginTrustStores" id="@cdktn/provider-cloudflare.dataCloudflareCustomOriginTrustStores.DataCloudflareCustomOriginTrustStores"></a>

Represents a {@link https://registry.terraform.io/providers/cloudflare/cloudflare/5.18.0/docs/data-sources/custom_origin_trust_stores cloudflare_custom_origin_trust_stores}.

#### Initializers <a name="Initializers" id="@cdktn/provider-cloudflare.dataCloudflareCustomOriginTrustStores.DataCloudflareCustomOriginTrustStores.Initializer"></a>

```python
from cdktn_provider_cloudflare import data_cloudflare_custom_origin_trust_stores

dataCloudflareCustomOriginTrustStores.DataCloudflareCustomOriginTrustStores(
  scope: Construct,
  id: str,
  connection: SSHProvisionerConnection | WinrmProvisionerConnection = None,
  count: typing.Union[int, float] | TerraformCount = None,
  depends_on: typing.List[ITerraformDependable] = None,
  for_each: ITerraformIterator = None,
  lifecycle: TerraformResourceLifecycle = None,
  provider: TerraformProvider = None,
  provisioners: typing.List[FileProvisioner | LocalExecProvisioner | RemoteExecProvisioner] = None,
  zone_id: str,
  limit: typing.Union[int, float] = None,
  max_items: typing.Union[int, float] = None,
  offset: typing.Union[int, float] = None
)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-cloudflare.dataCloudflareCustomOriginTrustStores.DataCloudflareCustomOriginTrustStores.Initializer.parameter.scope">scope</a></code> | <code>constructs.Construct</code> | The scope in which to define this construct. |
| <code><a href="#@cdktn/provider-cloudflare.dataCloudflareCustomOriginTrustStores.DataCloudflareCustomOriginTrustStores.Initializer.parameter.id">id</a></code> | <code>str</code> | The scoped construct ID. |
| <code><a href="#@cdktn/provider-cloudflare.dataCloudflareCustomOriginTrustStores.DataCloudflareCustomOriginTrustStores.Initializer.parameter.connection">connection</a></code> | <code>cdktn.SSHProvisionerConnection \| cdktn.WinrmProvisionerConnection</code> | *No description.* |
| <code><a href="#@cdktn/provider-cloudflare.dataCloudflareCustomOriginTrustStores.DataCloudflareCustomOriginTrustStores.Initializer.parameter.count">count</a></code> | <code>typing.Union[int, float] \| cdktn.TerraformCount</code> | *No description.* |
| <code><a href="#@cdktn/provider-cloudflare.dataCloudflareCustomOriginTrustStores.DataCloudflareCustomOriginTrustStores.Initializer.parameter.dependsOn">depends_on</a></code> | <code>typing.List[cdktn.ITerraformDependable]</code> | *No description.* |
| <code><a href="#@cdktn/provider-cloudflare.dataCloudflareCustomOriginTrustStores.DataCloudflareCustomOriginTrustStores.Initializer.parameter.forEach">for_each</a></code> | <code>cdktn.ITerraformIterator</code> | *No description.* |
| <code><a href="#@cdktn/provider-cloudflare.dataCloudflareCustomOriginTrustStores.DataCloudflareCustomOriginTrustStores.Initializer.parameter.lifecycle">lifecycle</a></code> | <code>cdktn.TerraformResourceLifecycle</code> | *No description.* |
| <code><a href="#@cdktn/provider-cloudflare.dataCloudflareCustomOriginTrustStores.DataCloudflareCustomOriginTrustStores.Initializer.parameter.provider">provider</a></code> | <code>cdktn.TerraformProvider</code> | *No description.* |
| <code><a href="#@cdktn/provider-cloudflare.dataCloudflareCustomOriginTrustStores.DataCloudflareCustomOriginTrustStores.Initializer.parameter.provisioners">provisioners</a></code> | <code>typing.List[cdktn.FileProvisioner \| cdktn.LocalExecProvisioner \| cdktn.RemoteExecProvisioner]</code> | *No description.* |
| <code><a href="#@cdktn/provider-cloudflare.dataCloudflareCustomOriginTrustStores.DataCloudflareCustomOriginTrustStores.Initializer.parameter.zoneId">zone_id</a></code> | <code>str</code> | Identifier. |
| <code><a href="#@cdktn/provider-cloudflare.dataCloudflareCustomOriginTrustStores.DataCloudflareCustomOriginTrustStores.Initializer.parameter.limit">limit</a></code> | <code>typing.Union[int, float]</code> | Limit to the number of records returned. |
| <code><a href="#@cdktn/provider-cloudflare.dataCloudflareCustomOriginTrustStores.DataCloudflareCustomOriginTrustStores.Initializer.parameter.maxItems">max_items</a></code> | <code>typing.Union[int, float]</code> | Max items to fetch, default: 1000. |
| <code><a href="#@cdktn/provider-cloudflare.dataCloudflareCustomOriginTrustStores.DataCloudflareCustomOriginTrustStores.Initializer.parameter.offset">offset</a></code> | <code>typing.Union[int, float]</code> | Offset the results. |

---

##### `scope`<sup>Required</sup> <a name="scope" id="@cdktn/provider-cloudflare.dataCloudflareCustomOriginTrustStores.DataCloudflareCustomOriginTrustStores.Initializer.parameter.scope"></a>

- *Type:* constructs.Construct

The scope in which to define this construct.

---

##### `id`<sup>Required</sup> <a name="id" id="@cdktn/provider-cloudflare.dataCloudflareCustomOriginTrustStores.DataCloudflareCustomOriginTrustStores.Initializer.parameter.id"></a>

- *Type:* str

The scoped construct ID.

Must be unique amongst siblings in the same scope

---

##### `connection`<sup>Optional</sup> <a name="connection" id="@cdktn/provider-cloudflare.dataCloudflareCustomOriginTrustStores.DataCloudflareCustomOriginTrustStores.Initializer.parameter.connection"></a>

- *Type:* cdktn.SSHProvisionerConnection | cdktn.WinrmProvisionerConnection

---

##### `count`<sup>Optional</sup> <a name="count" id="@cdktn/provider-cloudflare.dataCloudflareCustomOriginTrustStores.DataCloudflareCustomOriginTrustStores.Initializer.parameter.count"></a>

- *Type:* typing.Union[int, float] | cdktn.TerraformCount

---

##### `depends_on`<sup>Optional</sup> <a name="depends_on" id="@cdktn/provider-cloudflare.dataCloudflareCustomOriginTrustStores.DataCloudflareCustomOriginTrustStores.Initializer.parameter.dependsOn"></a>

- *Type:* typing.List[cdktn.ITerraformDependable]

---

##### `for_each`<sup>Optional</sup> <a name="for_each" id="@cdktn/provider-cloudflare.dataCloudflareCustomOriginTrustStores.DataCloudflareCustomOriginTrustStores.Initializer.parameter.forEach"></a>

- *Type:* cdktn.ITerraformIterator

---

##### `lifecycle`<sup>Optional</sup> <a name="lifecycle" id="@cdktn/provider-cloudflare.dataCloudflareCustomOriginTrustStores.DataCloudflareCustomOriginTrustStores.Initializer.parameter.lifecycle"></a>

- *Type:* cdktn.TerraformResourceLifecycle

---

##### `provider`<sup>Optional</sup> <a name="provider" id="@cdktn/provider-cloudflare.dataCloudflareCustomOriginTrustStores.DataCloudflareCustomOriginTrustStores.Initializer.parameter.provider"></a>

- *Type:* cdktn.TerraformProvider

---

##### `provisioners`<sup>Optional</sup> <a name="provisioners" id="@cdktn/provider-cloudflare.dataCloudflareCustomOriginTrustStores.DataCloudflareCustomOriginTrustStores.Initializer.parameter.provisioners"></a>

- *Type:* typing.List[cdktn.FileProvisioner | cdktn.LocalExecProvisioner | cdktn.RemoteExecProvisioner]

---

##### `zone_id`<sup>Required</sup> <a name="zone_id" id="@cdktn/provider-cloudflare.dataCloudflareCustomOriginTrustStores.DataCloudflareCustomOriginTrustStores.Initializer.parameter.zoneId"></a>

- *Type:* str

Identifier.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/cloudflare/cloudflare/5.18.0/docs/data-sources/custom_origin_trust_stores#zone_id DataCloudflareCustomOriginTrustStores#zone_id}

---

##### `limit`<sup>Optional</sup> <a name="limit" id="@cdktn/provider-cloudflare.dataCloudflareCustomOriginTrustStores.DataCloudflareCustomOriginTrustStores.Initializer.parameter.limit"></a>

- *Type:* typing.Union[int, float]

Limit to the number of records returned.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/cloudflare/cloudflare/5.18.0/docs/data-sources/custom_origin_trust_stores#limit DataCloudflareCustomOriginTrustStores#limit}

---

##### `max_items`<sup>Optional</sup> <a name="max_items" id="@cdktn/provider-cloudflare.dataCloudflareCustomOriginTrustStores.DataCloudflareCustomOriginTrustStores.Initializer.parameter.maxItems"></a>

- *Type:* typing.Union[int, float]

Max items to fetch, default: 1000.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/cloudflare/cloudflare/5.18.0/docs/data-sources/custom_origin_trust_stores#max_items DataCloudflareCustomOriginTrustStores#max_items}

---

##### `offset`<sup>Optional</sup> <a name="offset" id="@cdktn/provider-cloudflare.dataCloudflareCustomOriginTrustStores.DataCloudflareCustomOriginTrustStores.Initializer.parameter.offset"></a>

- *Type:* typing.Union[int, float]

Offset the results.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/cloudflare/cloudflare/5.18.0/docs/data-sources/custom_origin_trust_stores#offset DataCloudflareCustomOriginTrustStores#offset}

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-cloudflare.dataCloudflareCustomOriginTrustStores.DataCloudflareCustomOriginTrustStores.toString">to_string</a></code> | Returns a string representation of this construct. |
| <code><a href="#@cdktn/provider-cloudflare.dataCloudflareCustomOriginTrustStores.DataCloudflareCustomOriginTrustStores.with">with</a></code> | Applies one or more mixins to this construct. |
| <code><a href="#@cdktn/provider-cloudflare.dataCloudflareCustomOriginTrustStores.DataCloudflareCustomOriginTrustStores.addOverride">add_override</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-cloudflare.dataCloudflareCustomOriginTrustStores.DataCloudflareCustomOriginTrustStores.overrideLogicalId">override_logical_id</a></code> | Overrides the auto-generated logical ID with a specific ID. |
| <code><a href="#@cdktn/provider-cloudflare.dataCloudflareCustomOriginTrustStores.DataCloudflareCustomOriginTrustStores.resetOverrideLogicalId">reset_override_logical_id</a></code> | Resets a previously passed logical Id to use the auto-generated logical id again. |
| <code><a href="#@cdktn/provider-cloudflare.dataCloudflareCustomOriginTrustStores.DataCloudflareCustomOriginTrustStores.toHclTerraform">to_hcl_terraform</a></code> | Adds this resource to the terraform JSON output. |
| <code><a href="#@cdktn/provider-cloudflare.dataCloudflareCustomOriginTrustStores.DataCloudflareCustomOriginTrustStores.toMetadata">to_metadata</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-cloudflare.dataCloudflareCustomOriginTrustStores.DataCloudflareCustomOriginTrustStores.toTerraform">to_terraform</a></code> | Adds this resource to the terraform JSON output. |
| <code><a href="#@cdktn/provider-cloudflare.dataCloudflareCustomOriginTrustStores.DataCloudflareCustomOriginTrustStores.getAnyMapAttribute">get_any_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-cloudflare.dataCloudflareCustomOriginTrustStores.DataCloudflareCustomOriginTrustStores.getBooleanAttribute">get_boolean_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-cloudflare.dataCloudflareCustomOriginTrustStores.DataCloudflareCustomOriginTrustStores.getBooleanMapAttribute">get_boolean_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-cloudflare.dataCloudflareCustomOriginTrustStores.DataCloudflareCustomOriginTrustStores.getListAttribute">get_list_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-cloudflare.dataCloudflareCustomOriginTrustStores.DataCloudflareCustomOriginTrustStores.getNumberAttribute">get_number_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-cloudflare.dataCloudflareCustomOriginTrustStores.DataCloudflareCustomOriginTrustStores.getNumberListAttribute">get_number_list_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-cloudflare.dataCloudflareCustomOriginTrustStores.DataCloudflareCustomOriginTrustStores.getNumberMapAttribute">get_number_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-cloudflare.dataCloudflareCustomOriginTrustStores.DataCloudflareCustomOriginTrustStores.getStringAttribute">get_string_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-cloudflare.dataCloudflareCustomOriginTrustStores.DataCloudflareCustomOriginTrustStores.getStringMapAttribute">get_string_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-cloudflare.dataCloudflareCustomOriginTrustStores.DataCloudflareCustomOriginTrustStores.interpolationForAttribute">interpolation_for_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-cloudflare.dataCloudflareCustomOriginTrustStores.DataCloudflareCustomOriginTrustStores.resetLimit">reset_limit</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-cloudflare.dataCloudflareCustomOriginTrustStores.DataCloudflareCustomOriginTrustStores.resetMaxItems">reset_max_items</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-cloudflare.dataCloudflareCustomOriginTrustStores.DataCloudflareCustomOriginTrustStores.resetOffset">reset_offset</a></code> | *No description.* |

---

##### `to_string` <a name="to_string" id="@cdktn/provider-cloudflare.dataCloudflareCustomOriginTrustStores.DataCloudflareCustomOriginTrustStores.toString"></a>

```python
def to_string() -> str
```

Returns a string representation of this construct.

##### `with` <a name="with" id="@cdktn/provider-cloudflare.dataCloudflareCustomOriginTrustStores.DataCloudflareCustomOriginTrustStores.with"></a>

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

###### `mixins`<sup>Required</sup> <a name="mixins" id="@cdktn/provider-cloudflare.dataCloudflareCustomOriginTrustStores.DataCloudflareCustomOriginTrustStores.with.parameter.mixins"></a>

- *Type:* *constructs.IMixin

The mixins to apply.

---

##### `add_override` <a name="add_override" id="@cdktn/provider-cloudflare.dataCloudflareCustomOriginTrustStores.DataCloudflareCustomOriginTrustStores.addOverride"></a>

```python
def add_override(
  path: str,
  value: typing.Any
) -> None
```

###### `path`<sup>Required</sup> <a name="path" id="@cdktn/provider-cloudflare.dataCloudflareCustomOriginTrustStores.DataCloudflareCustomOriginTrustStores.addOverride.parameter.path"></a>

- *Type:* str

---

###### `value`<sup>Required</sup> <a name="value" id="@cdktn/provider-cloudflare.dataCloudflareCustomOriginTrustStores.DataCloudflareCustomOriginTrustStores.addOverride.parameter.value"></a>

- *Type:* typing.Any

---

##### `override_logical_id` <a name="override_logical_id" id="@cdktn/provider-cloudflare.dataCloudflareCustomOriginTrustStores.DataCloudflareCustomOriginTrustStores.overrideLogicalId"></a>

```python
def override_logical_id(
  new_logical_id: str
) -> None
```

Overrides the auto-generated logical ID with a specific ID.

###### `new_logical_id`<sup>Required</sup> <a name="new_logical_id" id="@cdktn/provider-cloudflare.dataCloudflareCustomOriginTrustStores.DataCloudflareCustomOriginTrustStores.overrideLogicalId.parameter.newLogicalId"></a>

- *Type:* str

The new logical ID to use for this stack element.

---

##### `reset_override_logical_id` <a name="reset_override_logical_id" id="@cdktn/provider-cloudflare.dataCloudflareCustomOriginTrustStores.DataCloudflareCustomOriginTrustStores.resetOverrideLogicalId"></a>

```python
def reset_override_logical_id() -> None
```

Resets a previously passed logical Id to use the auto-generated logical id again.

##### `to_hcl_terraform` <a name="to_hcl_terraform" id="@cdktn/provider-cloudflare.dataCloudflareCustomOriginTrustStores.DataCloudflareCustomOriginTrustStores.toHclTerraform"></a>

```python
def to_hcl_terraform() -> typing.Any
```

Adds this resource to the terraform JSON output.

##### `to_metadata` <a name="to_metadata" id="@cdktn/provider-cloudflare.dataCloudflareCustomOriginTrustStores.DataCloudflareCustomOriginTrustStores.toMetadata"></a>

```python
def to_metadata() -> typing.Any
```

##### `to_terraform` <a name="to_terraform" id="@cdktn/provider-cloudflare.dataCloudflareCustomOriginTrustStores.DataCloudflareCustomOriginTrustStores.toTerraform"></a>

```python
def to_terraform() -> typing.Any
```

Adds this resource to the terraform JSON output.

##### `get_any_map_attribute` <a name="get_any_map_attribute" id="@cdktn/provider-cloudflare.dataCloudflareCustomOriginTrustStores.DataCloudflareCustomOriginTrustStores.getAnyMapAttribute"></a>

```python
def get_any_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[typing.Any]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-cloudflare.dataCloudflareCustomOriginTrustStores.DataCloudflareCustomOriginTrustStores.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_boolean_attribute` <a name="get_boolean_attribute" id="@cdktn/provider-cloudflare.dataCloudflareCustomOriginTrustStores.DataCloudflareCustomOriginTrustStores.getBooleanAttribute"></a>

```python
def get_boolean_attribute(
  terraform_attribute: str
) -> IResolvable
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-cloudflare.dataCloudflareCustomOriginTrustStores.DataCloudflareCustomOriginTrustStores.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_boolean_map_attribute` <a name="get_boolean_map_attribute" id="@cdktn/provider-cloudflare.dataCloudflareCustomOriginTrustStores.DataCloudflareCustomOriginTrustStores.getBooleanMapAttribute"></a>

```python
def get_boolean_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[bool]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-cloudflare.dataCloudflareCustomOriginTrustStores.DataCloudflareCustomOriginTrustStores.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_list_attribute` <a name="get_list_attribute" id="@cdktn/provider-cloudflare.dataCloudflareCustomOriginTrustStores.DataCloudflareCustomOriginTrustStores.getListAttribute"></a>

```python
def get_list_attribute(
  terraform_attribute: str
) -> typing.List[str]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-cloudflare.dataCloudflareCustomOriginTrustStores.DataCloudflareCustomOriginTrustStores.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_attribute` <a name="get_number_attribute" id="@cdktn/provider-cloudflare.dataCloudflareCustomOriginTrustStores.DataCloudflareCustomOriginTrustStores.getNumberAttribute"></a>

```python
def get_number_attribute(
  terraform_attribute: str
) -> typing.Union[int, float]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-cloudflare.dataCloudflareCustomOriginTrustStores.DataCloudflareCustomOriginTrustStores.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_list_attribute` <a name="get_number_list_attribute" id="@cdktn/provider-cloudflare.dataCloudflareCustomOriginTrustStores.DataCloudflareCustomOriginTrustStores.getNumberListAttribute"></a>

```python
def get_number_list_attribute(
  terraform_attribute: str
) -> typing.List[typing.Union[int, float]]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-cloudflare.dataCloudflareCustomOriginTrustStores.DataCloudflareCustomOriginTrustStores.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_map_attribute` <a name="get_number_map_attribute" id="@cdktn/provider-cloudflare.dataCloudflareCustomOriginTrustStores.DataCloudflareCustomOriginTrustStores.getNumberMapAttribute"></a>

```python
def get_number_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[typing.Union[int, float]]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-cloudflare.dataCloudflareCustomOriginTrustStores.DataCloudflareCustomOriginTrustStores.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_string_attribute` <a name="get_string_attribute" id="@cdktn/provider-cloudflare.dataCloudflareCustomOriginTrustStores.DataCloudflareCustomOriginTrustStores.getStringAttribute"></a>

```python
def get_string_attribute(
  terraform_attribute: str
) -> str
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-cloudflare.dataCloudflareCustomOriginTrustStores.DataCloudflareCustomOriginTrustStores.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_string_map_attribute` <a name="get_string_map_attribute" id="@cdktn/provider-cloudflare.dataCloudflareCustomOriginTrustStores.DataCloudflareCustomOriginTrustStores.getStringMapAttribute"></a>

```python
def get_string_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[str]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-cloudflare.dataCloudflareCustomOriginTrustStores.DataCloudflareCustomOriginTrustStores.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `interpolation_for_attribute` <a name="interpolation_for_attribute" id="@cdktn/provider-cloudflare.dataCloudflareCustomOriginTrustStores.DataCloudflareCustomOriginTrustStores.interpolationForAttribute"></a>

```python
def interpolation_for_attribute(
  terraform_attribute: str
) -> IResolvable
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-cloudflare.dataCloudflareCustomOriginTrustStores.DataCloudflareCustomOriginTrustStores.interpolationForAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `reset_limit` <a name="reset_limit" id="@cdktn/provider-cloudflare.dataCloudflareCustomOriginTrustStores.DataCloudflareCustomOriginTrustStores.resetLimit"></a>

```python
def reset_limit() -> None
```

##### `reset_max_items` <a name="reset_max_items" id="@cdktn/provider-cloudflare.dataCloudflareCustomOriginTrustStores.DataCloudflareCustomOriginTrustStores.resetMaxItems"></a>

```python
def reset_max_items() -> None
```

##### `reset_offset` <a name="reset_offset" id="@cdktn/provider-cloudflare.dataCloudflareCustomOriginTrustStores.DataCloudflareCustomOriginTrustStores.resetOffset"></a>

```python
def reset_offset() -> None
```

#### Static Functions <a name="Static Functions" id="Static Functions"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-cloudflare.dataCloudflareCustomOriginTrustStores.DataCloudflareCustomOriginTrustStores.isConstruct">is_construct</a></code> | Checks if `x` is a construct. |
| <code><a href="#@cdktn/provider-cloudflare.dataCloudflareCustomOriginTrustStores.DataCloudflareCustomOriginTrustStores.isTerraformElement">is_terraform_element</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-cloudflare.dataCloudflareCustomOriginTrustStores.DataCloudflareCustomOriginTrustStores.isTerraformDataSource">is_terraform_data_source</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-cloudflare.dataCloudflareCustomOriginTrustStores.DataCloudflareCustomOriginTrustStores.generateConfigForImport">generate_config_for_import</a></code> | Generates CDKTN code for importing a DataCloudflareCustomOriginTrustStores resource upon running "cdktn plan <stack-name>". |

---

##### `is_construct` <a name="is_construct" id="@cdktn/provider-cloudflare.dataCloudflareCustomOriginTrustStores.DataCloudflareCustomOriginTrustStores.isConstruct"></a>

```python
from cdktn_provider_cloudflare import data_cloudflare_custom_origin_trust_stores

dataCloudflareCustomOriginTrustStores.DataCloudflareCustomOriginTrustStores.is_construct(
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

###### `x`<sup>Required</sup> <a name="x" id="@cdktn/provider-cloudflare.dataCloudflareCustomOriginTrustStores.DataCloudflareCustomOriginTrustStores.isConstruct.parameter.x"></a>

- *Type:* typing.Any

Any object.

---

##### `is_terraform_element` <a name="is_terraform_element" id="@cdktn/provider-cloudflare.dataCloudflareCustomOriginTrustStores.DataCloudflareCustomOriginTrustStores.isTerraformElement"></a>

```python
from cdktn_provider_cloudflare import data_cloudflare_custom_origin_trust_stores

dataCloudflareCustomOriginTrustStores.DataCloudflareCustomOriginTrustStores.is_terraform_element(
  x: typing.Any
)
```

###### `x`<sup>Required</sup> <a name="x" id="@cdktn/provider-cloudflare.dataCloudflareCustomOriginTrustStores.DataCloudflareCustomOriginTrustStores.isTerraformElement.parameter.x"></a>

- *Type:* typing.Any

---

##### `is_terraform_data_source` <a name="is_terraform_data_source" id="@cdktn/provider-cloudflare.dataCloudflareCustomOriginTrustStores.DataCloudflareCustomOriginTrustStores.isTerraformDataSource"></a>

```python
from cdktn_provider_cloudflare import data_cloudflare_custom_origin_trust_stores

dataCloudflareCustomOriginTrustStores.DataCloudflareCustomOriginTrustStores.is_terraform_data_source(
  x: typing.Any
)
```

###### `x`<sup>Required</sup> <a name="x" id="@cdktn/provider-cloudflare.dataCloudflareCustomOriginTrustStores.DataCloudflareCustomOriginTrustStores.isTerraformDataSource.parameter.x"></a>

- *Type:* typing.Any

---

##### `generate_config_for_import` <a name="generate_config_for_import" id="@cdktn/provider-cloudflare.dataCloudflareCustomOriginTrustStores.DataCloudflareCustomOriginTrustStores.generateConfigForImport"></a>

```python
from cdktn_provider_cloudflare import data_cloudflare_custom_origin_trust_stores

dataCloudflareCustomOriginTrustStores.DataCloudflareCustomOriginTrustStores.generate_config_for_import(
  scope: Construct,
  import_to_id: str,
  import_from_id: str,
  provider: TerraformProvider = None
)
```

Generates CDKTN code for importing a DataCloudflareCustomOriginTrustStores resource upon running "cdktn plan <stack-name>".

###### `scope`<sup>Required</sup> <a name="scope" id="@cdktn/provider-cloudflare.dataCloudflareCustomOriginTrustStores.DataCloudflareCustomOriginTrustStores.generateConfigForImport.parameter.scope"></a>

- *Type:* constructs.Construct

The scope in which to define this construct.

---

###### `import_to_id`<sup>Required</sup> <a name="import_to_id" id="@cdktn/provider-cloudflare.dataCloudflareCustomOriginTrustStores.DataCloudflareCustomOriginTrustStores.generateConfigForImport.parameter.importToId"></a>

- *Type:* str

The construct id used in the generated config for the DataCloudflareCustomOriginTrustStores to import.

---

###### `import_from_id`<sup>Required</sup> <a name="import_from_id" id="@cdktn/provider-cloudflare.dataCloudflareCustomOriginTrustStores.DataCloudflareCustomOriginTrustStores.generateConfigForImport.parameter.importFromId"></a>

- *Type:* str

The id of the existing DataCloudflareCustomOriginTrustStores that should be imported.

Refer to the {@link https://registry.terraform.io/providers/cloudflare/cloudflare/5.18.0/docs/data-sources/custom_origin_trust_stores#import import section} in the documentation of this resource for the id to use

---

###### `provider`<sup>Optional</sup> <a name="provider" id="@cdktn/provider-cloudflare.dataCloudflareCustomOriginTrustStores.DataCloudflareCustomOriginTrustStores.generateConfigForImport.parameter.provider"></a>

- *Type:* cdktn.TerraformProvider

? Optional instance of the provider where the DataCloudflareCustomOriginTrustStores to import is found.

---

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-cloudflare.dataCloudflareCustomOriginTrustStores.DataCloudflareCustomOriginTrustStores.property.node">node</a></code> | <code>constructs.Node</code> | The tree node. |
| <code><a href="#@cdktn/provider-cloudflare.dataCloudflareCustomOriginTrustStores.DataCloudflareCustomOriginTrustStores.property.cdktfStack">cdktf_stack</a></code> | <code>cdktn.TerraformStack</code> | *No description.* |
| <code><a href="#@cdktn/provider-cloudflare.dataCloudflareCustomOriginTrustStores.DataCloudflareCustomOriginTrustStores.property.fqn">fqn</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktn/provider-cloudflare.dataCloudflareCustomOriginTrustStores.DataCloudflareCustomOriginTrustStores.property.friendlyUniqueId">friendly_unique_id</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktn/provider-cloudflare.dataCloudflareCustomOriginTrustStores.DataCloudflareCustomOriginTrustStores.property.terraformMetaArguments">terraform_meta_arguments</a></code> | <code>typing.Mapping[typing.Any]</code> | *No description.* |
| <code><a href="#@cdktn/provider-cloudflare.dataCloudflareCustomOriginTrustStores.DataCloudflareCustomOriginTrustStores.property.terraformResourceType">terraform_resource_type</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktn/provider-cloudflare.dataCloudflareCustomOriginTrustStores.DataCloudflareCustomOriginTrustStores.property.terraformGeneratorMetadata">terraform_generator_metadata</a></code> | <code>cdktn.TerraformProviderGeneratorMetadata</code> | *No description.* |
| <code><a href="#@cdktn/provider-cloudflare.dataCloudflareCustomOriginTrustStores.DataCloudflareCustomOriginTrustStores.property.count">count</a></code> | <code>typing.Union[int, float] \| cdktn.TerraformCount</code> | *No description.* |
| <code><a href="#@cdktn/provider-cloudflare.dataCloudflareCustomOriginTrustStores.DataCloudflareCustomOriginTrustStores.property.dependsOn">depends_on</a></code> | <code>typing.List[str]</code> | *No description.* |
| <code><a href="#@cdktn/provider-cloudflare.dataCloudflareCustomOriginTrustStores.DataCloudflareCustomOriginTrustStores.property.forEach">for_each</a></code> | <code>cdktn.ITerraformIterator</code> | *No description.* |
| <code><a href="#@cdktn/provider-cloudflare.dataCloudflareCustomOriginTrustStores.DataCloudflareCustomOriginTrustStores.property.lifecycle">lifecycle</a></code> | <code>cdktn.TerraformResourceLifecycle</code> | *No description.* |
| <code><a href="#@cdktn/provider-cloudflare.dataCloudflareCustomOriginTrustStores.DataCloudflareCustomOriginTrustStores.property.provider">provider</a></code> | <code>cdktn.TerraformProvider</code> | *No description.* |
| <code><a href="#@cdktn/provider-cloudflare.dataCloudflareCustomOriginTrustStores.DataCloudflareCustomOriginTrustStores.property.result">result</a></code> | <code><a href="#@cdktn/provider-cloudflare.dataCloudflareCustomOriginTrustStores.DataCloudflareCustomOriginTrustStoresResultList">DataCloudflareCustomOriginTrustStoresResultList</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-cloudflare.dataCloudflareCustomOriginTrustStores.DataCloudflareCustomOriginTrustStores.property.limitInput">limit_input</a></code> | <code>typing.Union[int, float]</code> | *No description.* |
| <code><a href="#@cdktn/provider-cloudflare.dataCloudflareCustomOriginTrustStores.DataCloudflareCustomOriginTrustStores.property.maxItemsInput">max_items_input</a></code> | <code>typing.Union[int, float]</code> | *No description.* |
| <code><a href="#@cdktn/provider-cloudflare.dataCloudflareCustomOriginTrustStores.DataCloudflareCustomOriginTrustStores.property.offsetInput">offset_input</a></code> | <code>typing.Union[int, float]</code> | *No description.* |
| <code><a href="#@cdktn/provider-cloudflare.dataCloudflareCustomOriginTrustStores.DataCloudflareCustomOriginTrustStores.property.zoneIdInput">zone_id_input</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktn/provider-cloudflare.dataCloudflareCustomOriginTrustStores.DataCloudflareCustomOriginTrustStores.property.limit">limit</a></code> | <code>typing.Union[int, float]</code> | *No description.* |
| <code><a href="#@cdktn/provider-cloudflare.dataCloudflareCustomOriginTrustStores.DataCloudflareCustomOriginTrustStores.property.maxItems">max_items</a></code> | <code>typing.Union[int, float]</code> | *No description.* |
| <code><a href="#@cdktn/provider-cloudflare.dataCloudflareCustomOriginTrustStores.DataCloudflareCustomOriginTrustStores.property.offset">offset</a></code> | <code>typing.Union[int, float]</code> | *No description.* |
| <code><a href="#@cdktn/provider-cloudflare.dataCloudflareCustomOriginTrustStores.DataCloudflareCustomOriginTrustStores.property.zoneId">zone_id</a></code> | <code>str</code> | *No description.* |

---

##### `node`<sup>Required</sup> <a name="node" id="@cdktn/provider-cloudflare.dataCloudflareCustomOriginTrustStores.DataCloudflareCustomOriginTrustStores.property.node"></a>

```python
node: Node
```

- *Type:* constructs.Node

The tree node.

---

##### `cdktf_stack`<sup>Required</sup> <a name="cdktf_stack" id="@cdktn/provider-cloudflare.dataCloudflareCustomOriginTrustStores.DataCloudflareCustomOriginTrustStores.property.cdktfStack"></a>

```python
cdktf_stack: TerraformStack
```

- *Type:* cdktn.TerraformStack

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktn/provider-cloudflare.dataCloudflareCustomOriginTrustStores.DataCloudflareCustomOriginTrustStores.property.fqn"></a>

```python
fqn: str
```

- *Type:* str

---

##### `friendly_unique_id`<sup>Required</sup> <a name="friendly_unique_id" id="@cdktn/provider-cloudflare.dataCloudflareCustomOriginTrustStores.DataCloudflareCustomOriginTrustStores.property.friendlyUniqueId"></a>

```python
friendly_unique_id: str
```

- *Type:* str

---

##### `terraform_meta_arguments`<sup>Required</sup> <a name="terraform_meta_arguments" id="@cdktn/provider-cloudflare.dataCloudflareCustomOriginTrustStores.DataCloudflareCustomOriginTrustStores.property.terraformMetaArguments"></a>

```python
terraform_meta_arguments: typing.Mapping[typing.Any]
```

- *Type:* typing.Mapping[typing.Any]

---

##### `terraform_resource_type`<sup>Required</sup> <a name="terraform_resource_type" id="@cdktn/provider-cloudflare.dataCloudflareCustomOriginTrustStores.DataCloudflareCustomOriginTrustStores.property.terraformResourceType"></a>

```python
terraform_resource_type: str
```

- *Type:* str

---

##### `terraform_generator_metadata`<sup>Optional</sup> <a name="terraform_generator_metadata" id="@cdktn/provider-cloudflare.dataCloudflareCustomOriginTrustStores.DataCloudflareCustomOriginTrustStores.property.terraformGeneratorMetadata"></a>

```python
terraform_generator_metadata: TerraformProviderGeneratorMetadata
```

- *Type:* cdktn.TerraformProviderGeneratorMetadata

---

##### `count`<sup>Optional</sup> <a name="count" id="@cdktn/provider-cloudflare.dataCloudflareCustomOriginTrustStores.DataCloudflareCustomOriginTrustStores.property.count"></a>

```python
count: typing.Union[int, float] | TerraformCount
```

- *Type:* typing.Union[int, float] | cdktn.TerraformCount

---

##### `depends_on`<sup>Optional</sup> <a name="depends_on" id="@cdktn/provider-cloudflare.dataCloudflareCustomOriginTrustStores.DataCloudflareCustomOriginTrustStores.property.dependsOn"></a>

```python
depends_on: typing.List[str]
```

- *Type:* typing.List[str]

---

##### `for_each`<sup>Optional</sup> <a name="for_each" id="@cdktn/provider-cloudflare.dataCloudflareCustomOriginTrustStores.DataCloudflareCustomOriginTrustStores.property.forEach"></a>

```python
for_each: ITerraformIterator
```

- *Type:* cdktn.ITerraformIterator

---

##### `lifecycle`<sup>Optional</sup> <a name="lifecycle" id="@cdktn/provider-cloudflare.dataCloudflareCustomOriginTrustStores.DataCloudflareCustomOriginTrustStores.property.lifecycle"></a>

```python
lifecycle: TerraformResourceLifecycle
```

- *Type:* cdktn.TerraformResourceLifecycle

---

##### `provider`<sup>Optional</sup> <a name="provider" id="@cdktn/provider-cloudflare.dataCloudflareCustomOriginTrustStores.DataCloudflareCustomOriginTrustStores.property.provider"></a>

```python
provider: TerraformProvider
```

- *Type:* cdktn.TerraformProvider

---

##### `result`<sup>Required</sup> <a name="result" id="@cdktn/provider-cloudflare.dataCloudflareCustomOriginTrustStores.DataCloudflareCustomOriginTrustStores.property.result"></a>

```python
result: DataCloudflareCustomOriginTrustStoresResultList
```

- *Type:* <a href="#@cdktn/provider-cloudflare.dataCloudflareCustomOriginTrustStores.DataCloudflareCustomOriginTrustStoresResultList">DataCloudflareCustomOriginTrustStoresResultList</a>

---

##### `limit_input`<sup>Optional</sup> <a name="limit_input" id="@cdktn/provider-cloudflare.dataCloudflareCustomOriginTrustStores.DataCloudflareCustomOriginTrustStores.property.limitInput"></a>

```python
limit_input: typing.Union[int, float]
```

- *Type:* typing.Union[int, float]

---

##### `max_items_input`<sup>Optional</sup> <a name="max_items_input" id="@cdktn/provider-cloudflare.dataCloudflareCustomOriginTrustStores.DataCloudflareCustomOriginTrustStores.property.maxItemsInput"></a>

```python
max_items_input: typing.Union[int, float]
```

- *Type:* typing.Union[int, float]

---

##### `offset_input`<sup>Optional</sup> <a name="offset_input" id="@cdktn/provider-cloudflare.dataCloudflareCustomOriginTrustStores.DataCloudflareCustomOriginTrustStores.property.offsetInput"></a>

```python
offset_input: typing.Union[int, float]
```

- *Type:* typing.Union[int, float]

---

##### `zone_id_input`<sup>Optional</sup> <a name="zone_id_input" id="@cdktn/provider-cloudflare.dataCloudflareCustomOriginTrustStores.DataCloudflareCustomOriginTrustStores.property.zoneIdInput"></a>

```python
zone_id_input: str
```

- *Type:* str

---

##### `limit`<sup>Required</sup> <a name="limit" id="@cdktn/provider-cloudflare.dataCloudflareCustomOriginTrustStores.DataCloudflareCustomOriginTrustStores.property.limit"></a>

```python
limit: typing.Union[int, float]
```

- *Type:* typing.Union[int, float]

---

##### `max_items`<sup>Required</sup> <a name="max_items" id="@cdktn/provider-cloudflare.dataCloudflareCustomOriginTrustStores.DataCloudflareCustomOriginTrustStores.property.maxItems"></a>

```python
max_items: typing.Union[int, float]
```

- *Type:* typing.Union[int, float]

---

##### `offset`<sup>Required</sup> <a name="offset" id="@cdktn/provider-cloudflare.dataCloudflareCustomOriginTrustStores.DataCloudflareCustomOriginTrustStores.property.offset"></a>

```python
offset: typing.Union[int, float]
```

- *Type:* typing.Union[int, float]

---

##### `zone_id`<sup>Required</sup> <a name="zone_id" id="@cdktn/provider-cloudflare.dataCloudflareCustomOriginTrustStores.DataCloudflareCustomOriginTrustStores.property.zoneId"></a>

```python
zone_id: str
```

- *Type:* str

---

#### Constants <a name="Constants" id="Constants"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-cloudflare.dataCloudflareCustomOriginTrustStores.DataCloudflareCustomOriginTrustStores.property.tfResourceType">tfResourceType</a></code> | <code>str</code> | *No description.* |

---

##### `tfResourceType`<sup>Required</sup> <a name="tfResourceType" id="@cdktn/provider-cloudflare.dataCloudflareCustomOriginTrustStores.DataCloudflareCustomOriginTrustStores.property.tfResourceType"></a>

```python
tfResourceType: str
```

- *Type:* str

---

## Structs <a name="Structs" id="Structs"></a>

### DataCloudflareCustomOriginTrustStoresConfig <a name="DataCloudflareCustomOriginTrustStoresConfig" id="@cdktn/provider-cloudflare.dataCloudflareCustomOriginTrustStores.DataCloudflareCustomOriginTrustStoresConfig"></a>

#### Initializer <a name="Initializer" id="@cdktn/provider-cloudflare.dataCloudflareCustomOriginTrustStores.DataCloudflareCustomOriginTrustStoresConfig.Initializer"></a>

```python
from cdktn_provider_cloudflare import data_cloudflare_custom_origin_trust_stores

dataCloudflareCustomOriginTrustStores.DataCloudflareCustomOriginTrustStoresConfig(
  connection: SSHProvisionerConnection | WinrmProvisionerConnection = None,
  count: typing.Union[int, float] | TerraformCount = None,
  depends_on: typing.List[ITerraformDependable] = None,
  for_each: ITerraformIterator = None,
  lifecycle: TerraformResourceLifecycle = None,
  provider: TerraformProvider = None,
  provisioners: typing.List[FileProvisioner | LocalExecProvisioner | RemoteExecProvisioner] = None,
  zone_id: str,
  limit: typing.Union[int, float] = None,
  max_items: typing.Union[int, float] = None,
  offset: typing.Union[int, float] = None
)
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-cloudflare.dataCloudflareCustomOriginTrustStores.DataCloudflareCustomOriginTrustStoresConfig.property.connection">connection</a></code> | <code>cdktn.SSHProvisionerConnection \| cdktn.WinrmProvisionerConnection</code> | *No description.* |
| <code><a href="#@cdktn/provider-cloudflare.dataCloudflareCustomOriginTrustStores.DataCloudflareCustomOriginTrustStoresConfig.property.count">count</a></code> | <code>typing.Union[int, float] \| cdktn.TerraformCount</code> | *No description.* |
| <code><a href="#@cdktn/provider-cloudflare.dataCloudflareCustomOriginTrustStores.DataCloudflareCustomOriginTrustStoresConfig.property.dependsOn">depends_on</a></code> | <code>typing.List[cdktn.ITerraformDependable]</code> | *No description.* |
| <code><a href="#@cdktn/provider-cloudflare.dataCloudflareCustomOriginTrustStores.DataCloudflareCustomOriginTrustStoresConfig.property.forEach">for_each</a></code> | <code>cdktn.ITerraformIterator</code> | *No description.* |
| <code><a href="#@cdktn/provider-cloudflare.dataCloudflareCustomOriginTrustStores.DataCloudflareCustomOriginTrustStoresConfig.property.lifecycle">lifecycle</a></code> | <code>cdktn.TerraformResourceLifecycle</code> | *No description.* |
| <code><a href="#@cdktn/provider-cloudflare.dataCloudflareCustomOriginTrustStores.DataCloudflareCustomOriginTrustStoresConfig.property.provider">provider</a></code> | <code>cdktn.TerraformProvider</code> | *No description.* |
| <code><a href="#@cdktn/provider-cloudflare.dataCloudflareCustomOriginTrustStores.DataCloudflareCustomOriginTrustStoresConfig.property.provisioners">provisioners</a></code> | <code>typing.List[cdktn.FileProvisioner \| cdktn.LocalExecProvisioner \| cdktn.RemoteExecProvisioner]</code> | *No description.* |
| <code><a href="#@cdktn/provider-cloudflare.dataCloudflareCustomOriginTrustStores.DataCloudflareCustomOriginTrustStoresConfig.property.zoneId">zone_id</a></code> | <code>str</code> | Identifier. |
| <code><a href="#@cdktn/provider-cloudflare.dataCloudflareCustomOriginTrustStores.DataCloudflareCustomOriginTrustStoresConfig.property.limit">limit</a></code> | <code>typing.Union[int, float]</code> | Limit to the number of records returned. |
| <code><a href="#@cdktn/provider-cloudflare.dataCloudflareCustomOriginTrustStores.DataCloudflareCustomOriginTrustStoresConfig.property.maxItems">max_items</a></code> | <code>typing.Union[int, float]</code> | Max items to fetch, default: 1000. |
| <code><a href="#@cdktn/provider-cloudflare.dataCloudflareCustomOriginTrustStores.DataCloudflareCustomOriginTrustStoresConfig.property.offset">offset</a></code> | <code>typing.Union[int, float]</code> | Offset the results. |

---

##### `connection`<sup>Optional</sup> <a name="connection" id="@cdktn/provider-cloudflare.dataCloudflareCustomOriginTrustStores.DataCloudflareCustomOriginTrustStoresConfig.property.connection"></a>

```python
connection: SSHProvisionerConnection | WinrmProvisionerConnection
```

- *Type:* cdktn.SSHProvisionerConnection | cdktn.WinrmProvisionerConnection

---

##### `count`<sup>Optional</sup> <a name="count" id="@cdktn/provider-cloudflare.dataCloudflareCustomOriginTrustStores.DataCloudflareCustomOriginTrustStoresConfig.property.count"></a>

```python
count: typing.Union[int, float] | TerraformCount
```

- *Type:* typing.Union[int, float] | cdktn.TerraformCount

---

##### `depends_on`<sup>Optional</sup> <a name="depends_on" id="@cdktn/provider-cloudflare.dataCloudflareCustomOriginTrustStores.DataCloudflareCustomOriginTrustStoresConfig.property.dependsOn"></a>

```python
depends_on: typing.List[ITerraformDependable]
```

- *Type:* typing.List[cdktn.ITerraformDependable]

---

##### `for_each`<sup>Optional</sup> <a name="for_each" id="@cdktn/provider-cloudflare.dataCloudflareCustomOriginTrustStores.DataCloudflareCustomOriginTrustStoresConfig.property.forEach"></a>

```python
for_each: ITerraformIterator
```

- *Type:* cdktn.ITerraformIterator

---

##### `lifecycle`<sup>Optional</sup> <a name="lifecycle" id="@cdktn/provider-cloudflare.dataCloudflareCustomOriginTrustStores.DataCloudflareCustomOriginTrustStoresConfig.property.lifecycle"></a>

```python
lifecycle: TerraformResourceLifecycle
```

- *Type:* cdktn.TerraformResourceLifecycle

---

##### `provider`<sup>Optional</sup> <a name="provider" id="@cdktn/provider-cloudflare.dataCloudflareCustomOriginTrustStores.DataCloudflareCustomOriginTrustStoresConfig.property.provider"></a>

```python
provider: TerraformProvider
```

- *Type:* cdktn.TerraformProvider

---

##### `provisioners`<sup>Optional</sup> <a name="provisioners" id="@cdktn/provider-cloudflare.dataCloudflareCustomOriginTrustStores.DataCloudflareCustomOriginTrustStoresConfig.property.provisioners"></a>

```python
provisioners: typing.List[FileProvisioner | LocalExecProvisioner | RemoteExecProvisioner]
```

- *Type:* typing.List[cdktn.FileProvisioner | cdktn.LocalExecProvisioner | cdktn.RemoteExecProvisioner]

---

##### `zone_id`<sup>Required</sup> <a name="zone_id" id="@cdktn/provider-cloudflare.dataCloudflareCustomOriginTrustStores.DataCloudflareCustomOriginTrustStoresConfig.property.zoneId"></a>

```python
zone_id: str
```

- *Type:* str

Identifier.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/cloudflare/cloudflare/5.18.0/docs/data-sources/custom_origin_trust_stores#zone_id DataCloudflareCustomOriginTrustStores#zone_id}

---

##### `limit`<sup>Optional</sup> <a name="limit" id="@cdktn/provider-cloudflare.dataCloudflareCustomOriginTrustStores.DataCloudflareCustomOriginTrustStoresConfig.property.limit"></a>

```python
limit: typing.Union[int, float]
```

- *Type:* typing.Union[int, float]

Limit to the number of records returned.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/cloudflare/cloudflare/5.18.0/docs/data-sources/custom_origin_trust_stores#limit DataCloudflareCustomOriginTrustStores#limit}

---

##### `max_items`<sup>Optional</sup> <a name="max_items" id="@cdktn/provider-cloudflare.dataCloudflareCustomOriginTrustStores.DataCloudflareCustomOriginTrustStoresConfig.property.maxItems"></a>

```python
max_items: typing.Union[int, float]
```

- *Type:* typing.Union[int, float]

Max items to fetch, default: 1000.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/cloudflare/cloudflare/5.18.0/docs/data-sources/custom_origin_trust_stores#max_items DataCloudflareCustomOriginTrustStores#max_items}

---

##### `offset`<sup>Optional</sup> <a name="offset" id="@cdktn/provider-cloudflare.dataCloudflareCustomOriginTrustStores.DataCloudflareCustomOriginTrustStoresConfig.property.offset"></a>

```python
offset: typing.Union[int, float]
```

- *Type:* typing.Union[int, float]

Offset the results.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/cloudflare/cloudflare/5.18.0/docs/data-sources/custom_origin_trust_stores#offset DataCloudflareCustomOriginTrustStores#offset}

---

### DataCloudflareCustomOriginTrustStoresResult <a name="DataCloudflareCustomOriginTrustStoresResult" id="@cdktn/provider-cloudflare.dataCloudflareCustomOriginTrustStores.DataCloudflareCustomOriginTrustStoresResult"></a>

#### Initializer <a name="Initializer" id="@cdktn/provider-cloudflare.dataCloudflareCustomOriginTrustStores.DataCloudflareCustomOriginTrustStoresResult.Initializer"></a>

```python
from cdktn_provider_cloudflare import data_cloudflare_custom_origin_trust_stores

dataCloudflareCustomOriginTrustStores.DataCloudflareCustomOriginTrustStoresResult()
```


## Classes <a name="Classes" id="Classes"></a>

### DataCloudflareCustomOriginTrustStoresResultList <a name="DataCloudflareCustomOriginTrustStoresResultList" id="@cdktn/provider-cloudflare.dataCloudflareCustomOriginTrustStores.DataCloudflareCustomOriginTrustStoresResultList"></a>

#### Initializers <a name="Initializers" id="@cdktn/provider-cloudflare.dataCloudflareCustomOriginTrustStores.DataCloudflareCustomOriginTrustStoresResultList.Initializer"></a>

```python
from cdktn_provider_cloudflare import data_cloudflare_custom_origin_trust_stores

dataCloudflareCustomOriginTrustStores.DataCloudflareCustomOriginTrustStoresResultList(
  terraform_resource: IInterpolatingParent,
  terraform_attribute: str,
  wraps_set: bool
)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-cloudflare.dataCloudflareCustomOriginTrustStores.DataCloudflareCustomOriginTrustStoresResultList.Initializer.parameter.terraformResource">terraform_resource</a></code> | <code>cdktn.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktn/provider-cloudflare.dataCloudflareCustomOriginTrustStores.DataCloudflareCustomOriginTrustStoresResultList.Initializer.parameter.terraformAttribute">terraform_attribute</a></code> | <code>str</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#@cdktn/provider-cloudflare.dataCloudflareCustomOriginTrustStores.DataCloudflareCustomOriginTrustStoresResultList.Initializer.parameter.wrapsSet">wraps_set</a></code> | <code>bool</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraform_resource`<sup>Required</sup> <a name="terraform_resource" id="@cdktn/provider-cloudflare.dataCloudflareCustomOriginTrustStores.DataCloudflareCustomOriginTrustStoresResultList.Initializer.parameter.terraformResource"></a>

- *Type:* cdktn.IInterpolatingParent

The parent resource.

---

##### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-cloudflare.dataCloudflareCustomOriginTrustStores.DataCloudflareCustomOriginTrustStoresResultList.Initializer.parameter.terraformAttribute"></a>

- *Type:* str

The attribute on the parent resource this class is referencing.

---

##### `wraps_set`<sup>Required</sup> <a name="wraps_set" id="@cdktn/provider-cloudflare.dataCloudflareCustomOriginTrustStores.DataCloudflareCustomOriginTrustStoresResultList.Initializer.parameter.wrapsSet"></a>

- *Type:* bool

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-cloudflare.dataCloudflareCustomOriginTrustStores.DataCloudflareCustomOriginTrustStoresResultList.allWithMapKey">all_with_map_key</a></code> | Creating an iterator for this complex list. |
| <code><a href="#@cdktn/provider-cloudflare.dataCloudflareCustomOriginTrustStores.DataCloudflareCustomOriginTrustStoresResultList.computeFqn">compute_fqn</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-cloudflare.dataCloudflareCustomOriginTrustStores.DataCloudflareCustomOriginTrustStoresResultList.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktn/provider-cloudflare.dataCloudflareCustomOriginTrustStores.DataCloudflareCustomOriginTrustStoresResultList.toString">to_string</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktn/provider-cloudflare.dataCloudflareCustomOriginTrustStores.DataCloudflareCustomOriginTrustStoresResultList.get">get</a></code> | *No description.* |

---

##### `all_with_map_key` <a name="all_with_map_key" id="@cdktn/provider-cloudflare.dataCloudflareCustomOriginTrustStores.DataCloudflareCustomOriginTrustStoresResultList.allWithMapKey"></a>

```python
def all_with_map_key(
  map_key_attribute_name: str
) -> DynamicListTerraformIterator
```

Creating an iterator for this complex list.

The list will be converted into a map with the mapKeyAttributeName as the key.

###### `map_key_attribute_name`<sup>Required</sup> <a name="map_key_attribute_name" id="@cdktn/provider-cloudflare.dataCloudflareCustomOriginTrustStores.DataCloudflareCustomOriginTrustStoresResultList.allWithMapKey.parameter.mapKeyAttributeName"></a>

- *Type:* str

---

##### `compute_fqn` <a name="compute_fqn" id="@cdktn/provider-cloudflare.dataCloudflareCustomOriginTrustStores.DataCloudflareCustomOriginTrustStoresResultList.computeFqn"></a>

```python
def compute_fqn() -> str
```

##### `resolve` <a name="resolve" id="@cdktn/provider-cloudflare.dataCloudflareCustomOriginTrustStores.DataCloudflareCustomOriginTrustStoresResultList.resolve"></a>

```python
def resolve(
  _context: IResolveContext
) -> typing.Any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktn/provider-cloudflare.dataCloudflareCustomOriginTrustStores.DataCloudflareCustomOriginTrustStoresResultList.resolve.parameter._context"></a>

- *Type:* cdktn.IResolveContext

---

##### `to_string` <a name="to_string" id="@cdktn/provider-cloudflare.dataCloudflareCustomOriginTrustStores.DataCloudflareCustomOriginTrustStoresResultList.toString"></a>

```python
def to_string() -> str
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `get` <a name="get" id="@cdktn/provider-cloudflare.dataCloudflareCustomOriginTrustStores.DataCloudflareCustomOriginTrustStoresResultList.get"></a>

```python
def get(
  index: typing.Union[int, float]
) -> DataCloudflareCustomOriginTrustStoresResultOutputReference
```

###### `index`<sup>Required</sup> <a name="index" id="@cdktn/provider-cloudflare.dataCloudflareCustomOriginTrustStores.DataCloudflareCustomOriginTrustStoresResultList.get.parameter.index"></a>

- *Type:* typing.Union[int, float]

the index of the item to return.

---


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-cloudflare.dataCloudflareCustomOriginTrustStores.DataCloudflareCustomOriginTrustStoresResultList.property.creationStack">creation_stack</a></code> | <code>typing.List[str]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktn/provider-cloudflare.dataCloudflareCustomOriginTrustStores.DataCloudflareCustomOriginTrustStoresResultList.property.fqn">fqn</a></code> | <code>str</code> | *No description.* |

---

##### `creation_stack`<sup>Required</sup> <a name="creation_stack" id="@cdktn/provider-cloudflare.dataCloudflareCustomOriginTrustStores.DataCloudflareCustomOriginTrustStoresResultList.property.creationStack"></a>

```python
creation_stack: typing.List[str]
```

- *Type:* typing.List[str]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktn/provider-cloudflare.dataCloudflareCustomOriginTrustStores.DataCloudflareCustomOriginTrustStoresResultList.property.fqn"></a>

```python
fqn: str
```

- *Type:* str

---


### DataCloudflareCustomOriginTrustStoresResultOutputReference <a name="DataCloudflareCustomOriginTrustStoresResultOutputReference" id="@cdktn/provider-cloudflare.dataCloudflareCustomOriginTrustStores.DataCloudflareCustomOriginTrustStoresResultOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktn/provider-cloudflare.dataCloudflareCustomOriginTrustStores.DataCloudflareCustomOriginTrustStoresResultOutputReference.Initializer"></a>

```python
from cdktn_provider_cloudflare import data_cloudflare_custom_origin_trust_stores

dataCloudflareCustomOriginTrustStores.DataCloudflareCustomOriginTrustStoresResultOutputReference(
  terraform_resource: IInterpolatingParent,
  terraform_attribute: str,
  complex_object_index: typing.Union[int, float],
  complex_object_is_from_set: bool
)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-cloudflare.dataCloudflareCustomOriginTrustStores.DataCloudflareCustomOriginTrustStoresResultOutputReference.Initializer.parameter.terraformResource">terraform_resource</a></code> | <code>cdktn.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktn/provider-cloudflare.dataCloudflareCustomOriginTrustStores.DataCloudflareCustomOriginTrustStoresResultOutputReference.Initializer.parameter.terraformAttribute">terraform_attribute</a></code> | <code>str</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#@cdktn/provider-cloudflare.dataCloudflareCustomOriginTrustStores.DataCloudflareCustomOriginTrustStoresResultOutputReference.Initializer.parameter.complexObjectIndex">complex_object_index</a></code> | <code>typing.Union[int, float]</code> | the index of this item in the list. |
| <code><a href="#@cdktn/provider-cloudflare.dataCloudflareCustomOriginTrustStores.DataCloudflareCustomOriginTrustStoresResultOutputReference.Initializer.parameter.complexObjectIsFromSet">complex_object_is_from_set</a></code> | <code>bool</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraform_resource`<sup>Required</sup> <a name="terraform_resource" id="@cdktn/provider-cloudflare.dataCloudflareCustomOriginTrustStores.DataCloudflareCustomOriginTrustStoresResultOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* cdktn.IInterpolatingParent

The parent resource.

---

##### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-cloudflare.dataCloudflareCustomOriginTrustStores.DataCloudflareCustomOriginTrustStoresResultOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* str

The attribute on the parent resource this class is referencing.

---

##### `complex_object_index`<sup>Required</sup> <a name="complex_object_index" id="@cdktn/provider-cloudflare.dataCloudflareCustomOriginTrustStores.DataCloudflareCustomOriginTrustStoresResultOutputReference.Initializer.parameter.complexObjectIndex"></a>

- *Type:* typing.Union[int, float]

the index of this item in the list.

---

##### `complex_object_is_from_set`<sup>Required</sup> <a name="complex_object_is_from_set" id="@cdktn/provider-cloudflare.dataCloudflareCustomOriginTrustStores.DataCloudflareCustomOriginTrustStoresResultOutputReference.Initializer.parameter.complexObjectIsFromSet"></a>

- *Type:* bool

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-cloudflare.dataCloudflareCustomOriginTrustStores.DataCloudflareCustomOriginTrustStoresResultOutputReference.computeFqn">compute_fqn</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-cloudflare.dataCloudflareCustomOriginTrustStores.DataCloudflareCustomOriginTrustStoresResultOutputReference.getAnyMapAttribute">get_any_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-cloudflare.dataCloudflareCustomOriginTrustStores.DataCloudflareCustomOriginTrustStoresResultOutputReference.getBooleanAttribute">get_boolean_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-cloudflare.dataCloudflareCustomOriginTrustStores.DataCloudflareCustomOriginTrustStoresResultOutputReference.getBooleanMapAttribute">get_boolean_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-cloudflare.dataCloudflareCustomOriginTrustStores.DataCloudflareCustomOriginTrustStoresResultOutputReference.getListAttribute">get_list_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-cloudflare.dataCloudflareCustomOriginTrustStores.DataCloudflareCustomOriginTrustStoresResultOutputReference.getNumberAttribute">get_number_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-cloudflare.dataCloudflareCustomOriginTrustStores.DataCloudflareCustomOriginTrustStoresResultOutputReference.getNumberListAttribute">get_number_list_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-cloudflare.dataCloudflareCustomOriginTrustStores.DataCloudflareCustomOriginTrustStoresResultOutputReference.getNumberMapAttribute">get_number_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-cloudflare.dataCloudflareCustomOriginTrustStores.DataCloudflareCustomOriginTrustStoresResultOutputReference.getStringAttribute">get_string_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-cloudflare.dataCloudflareCustomOriginTrustStores.DataCloudflareCustomOriginTrustStoresResultOutputReference.getStringMapAttribute">get_string_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-cloudflare.dataCloudflareCustomOriginTrustStores.DataCloudflareCustomOriginTrustStoresResultOutputReference.interpolationForAttribute">interpolation_for_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-cloudflare.dataCloudflareCustomOriginTrustStores.DataCloudflareCustomOriginTrustStoresResultOutputReference.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktn/provider-cloudflare.dataCloudflareCustomOriginTrustStores.DataCloudflareCustomOriginTrustStoresResultOutputReference.toString">to_string</a></code> | Return a string representation of this resolvable object. |

---

##### `compute_fqn` <a name="compute_fqn" id="@cdktn/provider-cloudflare.dataCloudflareCustomOriginTrustStores.DataCloudflareCustomOriginTrustStoresResultOutputReference.computeFqn"></a>

```python
def compute_fqn() -> str
```

##### `get_any_map_attribute` <a name="get_any_map_attribute" id="@cdktn/provider-cloudflare.dataCloudflareCustomOriginTrustStores.DataCloudflareCustomOriginTrustStoresResultOutputReference.getAnyMapAttribute"></a>

```python
def get_any_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[typing.Any]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-cloudflare.dataCloudflareCustomOriginTrustStores.DataCloudflareCustomOriginTrustStoresResultOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_boolean_attribute` <a name="get_boolean_attribute" id="@cdktn/provider-cloudflare.dataCloudflareCustomOriginTrustStores.DataCloudflareCustomOriginTrustStoresResultOutputReference.getBooleanAttribute"></a>

```python
def get_boolean_attribute(
  terraform_attribute: str
) -> IResolvable
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-cloudflare.dataCloudflareCustomOriginTrustStores.DataCloudflareCustomOriginTrustStoresResultOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_boolean_map_attribute` <a name="get_boolean_map_attribute" id="@cdktn/provider-cloudflare.dataCloudflareCustomOriginTrustStores.DataCloudflareCustomOriginTrustStoresResultOutputReference.getBooleanMapAttribute"></a>

```python
def get_boolean_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[bool]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-cloudflare.dataCloudflareCustomOriginTrustStores.DataCloudflareCustomOriginTrustStoresResultOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_list_attribute` <a name="get_list_attribute" id="@cdktn/provider-cloudflare.dataCloudflareCustomOriginTrustStores.DataCloudflareCustomOriginTrustStoresResultOutputReference.getListAttribute"></a>

```python
def get_list_attribute(
  terraform_attribute: str
) -> typing.List[str]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-cloudflare.dataCloudflareCustomOriginTrustStores.DataCloudflareCustomOriginTrustStoresResultOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_attribute` <a name="get_number_attribute" id="@cdktn/provider-cloudflare.dataCloudflareCustomOriginTrustStores.DataCloudflareCustomOriginTrustStoresResultOutputReference.getNumberAttribute"></a>

```python
def get_number_attribute(
  terraform_attribute: str
) -> typing.Union[int, float]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-cloudflare.dataCloudflareCustomOriginTrustStores.DataCloudflareCustomOriginTrustStoresResultOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_list_attribute` <a name="get_number_list_attribute" id="@cdktn/provider-cloudflare.dataCloudflareCustomOriginTrustStores.DataCloudflareCustomOriginTrustStoresResultOutputReference.getNumberListAttribute"></a>

```python
def get_number_list_attribute(
  terraform_attribute: str
) -> typing.List[typing.Union[int, float]]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-cloudflare.dataCloudflareCustomOriginTrustStores.DataCloudflareCustomOriginTrustStoresResultOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_map_attribute` <a name="get_number_map_attribute" id="@cdktn/provider-cloudflare.dataCloudflareCustomOriginTrustStores.DataCloudflareCustomOriginTrustStoresResultOutputReference.getNumberMapAttribute"></a>

```python
def get_number_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[typing.Union[int, float]]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-cloudflare.dataCloudflareCustomOriginTrustStores.DataCloudflareCustomOriginTrustStoresResultOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_string_attribute` <a name="get_string_attribute" id="@cdktn/provider-cloudflare.dataCloudflareCustomOriginTrustStores.DataCloudflareCustomOriginTrustStoresResultOutputReference.getStringAttribute"></a>

```python
def get_string_attribute(
  terraform_attribute: str
) -> str
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-cloudflare.dataCloudflareCustomOriginTrustStores.DataCloudflareCustomOriginTrustStoresResultOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_string_map_attribute` <a name="get_string_map_attribute" id="@cdktn/provider-cloudflare.dataCloudflareCustomOriginTrustStores.DataCloudflareCustomOriginTrustStoresResultOutputReference.getStringMapAttribute"></a>

```python
def get_string_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[str]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-cloudflare.dataCloudflareCustomOriginTrustStores.DataCloudflareCustomOriginTrustStoresResultOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `interpolation_for_attribute` <a name="interpolation_for_attribute" id="@cdktn/provider-cloudflare.dataCloudflareCustomOriginTrustStores.DataCloudflareCustomOriginTrustStoresResultOutputReference.interpolationForAttribute"></a>

```python
def interpolation_for_attribute(
  property: str
) -> IResolvable
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktn/provider-cloudflare.dataCloudflareCustomOriginTrustStores.DataCloudflareCustomOriginTrustStoresResultOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* str

---

##### `resolve` <a name="resolve" id="@cdktn/provider-cloudflare.dataCloudflareCustomOriginTrustStores.DataCloudflareCustomOriginTrustStoresResultOutputReference.resolve"></a>

```python
def resolve(
  _context: IResolveContext
) -> typing.Any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktn/provider-cloudflare.dataCloudflareCustomOriginTrustStores.DataCloudflareCustomOriginTrustStoresResultOutputReference.resolve.parameter._context"></a>

- *Type:* cdktn.IResolveContext

---

##### `to_string` <a name="to_string" id="@cdktn/provider-cloudflare.dataCloudflareCustomOriginTrustStores.DataCloudflareCustomOriginTrustStoresResultOutputReference.toString"></a>

```python
def to_string() -> str
```

Return a string representation of this resolvable object.

Returns a reversible string representation.


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-cloudflare.dataCloudflareCustomOriginTrustStores.DataCloudflareCustomOriginTrustStoresResultOutputReference.property.creationStack">creation_stack</a></code> | <code>typing.List[str]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktn/provider-cloudflare.dataCloudflareCustomOriginTrustStores.DataCloudflareCustomOriginTrustStoresResultOutputReference.property.fqn">fqn</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktn/provider-cloudflare.dataCloudflareCustomOriginTrustStores.DataCloudflareCustomOriginTrustStoresResultOutputReference.property.certificate">certificate</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktn/provider-cloudflare.dataCloudflareCustomOriginTrustStores.DataCloudflareCustomOriginTrustStoresResultOutputReference.property.expiresOn">expires_on</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktn/provider-cloudflare.dataCloudflareCustomOriginTrustStores.DataCloudflareCustomOriginTrustStoresResultOutputReference.property.id">id</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktn/provider-cloudflare.dataCloudflareCustomOriginTrustStores.DataCloudflareCustomOriginTrustStoresResultOutputReference.property.issuer">issuer</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktn/provider-cloudflare.dataCloudflareCustomOriginTrustStores.DataCloudflareCustomOriginTrustStoresResultOutputReference.property.signature">signature</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktn/provider-cloudflare.dataCloudflareCustomOriginTrustStores.DataCloudflareCustomOriginTrustStoresResultOutputReference.property.status">status</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktn/provider-cloudflare.dataCloudflareCustomOriginTrustStores.DataCloudflareCustomOriginTrustStoresResultOutputReference.property.updatedAt">updated_at</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktn/provider-cloudflare.dataCloudflareCustomOriginTrustStores.DataCloudflareCustomOriginTrustStoresResultOutputReference.property.uploadedOn">uploaded_on</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktn/provider-cloudflare.dataCloudflareCustomOriginTrustStores.DataCloudflareCustomOriginTrustStoresResultOutputReference.property.internalValue">internal_value</a></code> | <code><a href="#@cdktn/provider-cloudflare.dataCloudflareCustomOriginTrustStores.DataCloudflareCustomOriginTrustStoresResult">DataCloudflareCustomOriginTrustStoresResult</a></code> | *No description.* |

---

##### `creation_stack`<sup>Required</sup> <a name="creation_stack" id="@cdktn/provider-cloudflare.dataCloudflareCustomOriginTrustStores.DataCloudflareCustomOriginTrustStoresResultOutputReference.property.creationStack"></a>

```python
creation_stack: typing.List[str]
```

- *Type:* typing.List[str]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktn/provider-cloudflare.dataCloudflareCustomOriginTrustStores.DataCloudflareCustomOriginTrustStoresResultOutputReference.property.fqn"></a>

```python
fqn: str
```

- *Type:* str

---

##### `certificate`<sup>Required</sup> <a name="certificate" id="@cdktn/provider-cloudflare.dataCloudflareCustomOriginTrustStores.DataCloudflareCustomOriginTrustStoresResultOutputReference.property.certificate"></a>

```python
certificate: str
```

- *Type:* str

---

##### `expires_on`<sup>Required</sup> <a name="expires_on" id="@cdktn/provider-cloudflare.dataCloudflareCustomOriginTrustStores.DataCloudflareCustomOriginTrustStoresResultOutputReference.property.expiresOn"></a>

```python
expires_on: str
```

- *Type:* str

---

##### `id`<sup>Required</sup> <a name="id" id="@cdktn/provider-cloudflare.dataCloudflareCustomOriginTrustStores.DataCloudflareCustomOriginTrustStoresResultOutputReference.property.id"></a>

```python
id: str
```

- *Type:* str

---

##### `issuer`<sup>Required</sup> <a name="issuer" id="@cdktn/provider-cloudflare.dataCloudflareCustomOriginTrustStores.DataCloudflareCustomOriginTrustStoresResultOutputReference.property.issuer"></a>

```python
issuer: str
```

- *Type:* str

---

##### `signature`<sup>Required</sup> <a name="signature" id="@cdktn/provider-cloudflare.dataCloudflareCustomOriginTrustStores.DataCloudflareCustomOriginTrustStoresResultOutputReference.property.signature"></a>

```python
signature: str
```

- *Type:* str

---

##### `status`<sup>Required</sup> <a name="status" id="@cdktn/provider-cloudflare.dataCloudflareCustomOriginTrustStores.DataCloudflareCustomOriginTrustStoresResultOutputReference.property.status"></a>

```python
status: str
```

- *Type:* str

---

##### `updated_at`<sup>Required</sup> <a name="updated_at" id="@cdktn/provider-cloudflare.dataCloudflareCustomOriginTrustStores.DataCloudflareCustomOriginTrustStoresResultOutputReference.property.updatedAt"></a>

```python
updated_at: str
```

- *Type:* str

---

##### `uploaded_on`<sup>Required</sup> <a name="uploaded_on" id="@cdktn/provider-cloudflare.dataCloudflareCustomOriginTrustStores.DataCloudflareCustomOriginTrustStoresResultOutputReference.property.uploadedOn"></a>

```python
uploaded_on: str
```

- *Type:* str

---

##### `internal_value`<sup>Optional</sup> <a name="internal_value" id="@cdktn/provider-cloudflare.dataCloudflareCustomOriginTrustStores.DataCloudflareCustomOriginTrustStoresResultOutputReference.property.internalValue"></a>

```python
internal_value: DataCloudflareCustomOriginTrustStoresResult
```

- *Type:* <a href="#@cdktn/provider-cloudflare.dataCloudflareCustomOriginTrustStores.DataCloudflareCustomOriginTrustStoresResult">DataCloudflareCustomOriginTrustStoresResult</a>

---



