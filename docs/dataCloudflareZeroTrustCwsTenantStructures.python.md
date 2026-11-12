# `dataCloudflareZeroTrustCwsTenantStructures` Submodule <a name="`dataCloudflareZeroTrustCwsTenantStructures` Submodule" id="@cdktn/provider-cloudflare.dataCloudflareZeroTrustCwsTenantStructures"></a>

## Constructs <a name="Constructs" id="Constructs"></a>

### DataCloudflareZeroTrustCwsTenantStructures <a name="DataCloudflareZeroTrustCwsTenantStructures" id="@cdktn/provider-cloudflare.dataCloudflareZeroTrustCwsTenantStructures.DataCloudflareZeroTrustCwsTenantStructures"></a>

Represents a {@link https://registry.terraform.io/providers/cloudflare/cloudflare/5.29.0/docs/data-sources/zero_trust_cws_tenant_structures cloudflare_zero_trust_cws_tenant_structures}.

#### Initializers <a name="Initializers" id="@cdktn/provider-cloudflare.dataCloudflareZeroTrustCwsTenantStructures.DataCloudflareZeroTrustCwsTenantStructures.Initializer"></a>

```python
from cdktn_provider_cloudflare import data_cloudflare_zero_trust_cws_tenant_structures

dataCloudflareZeroTrustCwsTenantStructures.DataCloudflareZeroTrustCwsTenantStructures(
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
  direction: str = None,
  import_path: str = None,
  max_items: typing.Union[int, float] = None,
  name: str = None,
  order: str = None
)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-cloudflare.dataCloudflareZeroTrustCwsTenantStructures.DataCloudflareZeroTrustCwsTenantStructures.Initializer.parameter.scope">scope</a></code> | <code>constructs.Construct</code> | The scope in which to define this construct. |
| <code><a href="#@cdktn/provider-cloudflare.dataCloudflareZeroTrustCwsTenantStructures.DataCloudflareZeroTrustCwsTenantStructures.Initializer.parameter.id">id</a></code> | <code>str</code> | The scoped construct ID. |
| <code><a href="#@cdktn/provider-cloudflare.dataCloudflareZeroTrustCwsTenantStructures.DataCloudflareZeroTrustCwsTenantStructures.Initializer.parameter.connection">connection</a></code> | <code>cdktn.SSHProvisionerConnection \| cdktn.WinrmProvisionerConnection</code> | *No description.* |
| <code><a href="#@cdktn/provider-cloudflare.dataCloudflareZeroTrustCwsTenantStructures.DataCloudflareZeroTrustCwsTenantStructures.Initializer.parameter.count">count</a></code> | <code>typing.Union[int, float] \| cdktn.TerraformCount</code> | *No description.* |
| <code><a href="#@cdktn/provider-cloudflare.dataCloudflareZeroTrustCwsTenantStructures.DataCloudflareZeroTrustCwsTenantStructures.Initializer.parameter.dependsOn">depends_on</a></code> | <code>typing.List[cdktn.ITerraformDependable]</code> | *No description.* |
| <code><a href="#@cdktn/provider-cloudflare.dataCloudflareZeroTrustCwsTenantStructures.DataCloudflareZeroTrustCwsTenantStructures.Initializer.parameter.forEach">for_each</a></code> | <code>cdktn.ITerraformIterator</code> | *No description.* |
| <code><a href="#@cdktn/provider-cloudflare.dataCloudflareZeroTrustCwsTenantStructures.DataCloudflareZeroTrustCwsTenantStructures.Initializer.parameter.lifecycle">lifecycle</a></code> | <code>cdktn.TerraformResourceLifecycle</code> | *No description.* |
| <code><a href="#@cdktn/provider-cloudflare.dataCloudflareZeroTrustCwsTenantStructures.DataCloudflareZeroTrustCwsTenantStructures.Initializer.parameter.provider">provider</a></code> | <code>cdktn.TerraformProvider</code> | *No description.* |
| <code><a href="#@cdktn/provider-cloudflare.dataCloudflareZeroTrustCwsTenantStructures.DataCloudflareZeroTrustCwsTenantStructures.Initializer.parameter.provisioners">provisioners</a></code> | <code>typing.List[cdktn.FileProvisioner \| cdktn.LocalExecProvisioner \| cdktn.RemoteExecProvisioner]</code> | *No description.* |
| <code><a href="#@cdktn/provider-cloudflare.dataCloudflareZeroTrustCwsTenantStructures.DataCloudflareZeroTrustCwsTenantStructures.Initializer.parameter.accountId">account_id</a></code> | <code>str</code> | Cloudflare account ID (32-character hexadecimal string). |
| <code><a href="#@cdktn/provider-cloudflare.dataCloudflareZeroTrustCwsTenantStructures.DataCloudflareZeroTrustCwsTenantStructures.Initializer.parameter.direction">direction</a></code> | <code>str</code> | Sort direction (default: asc) Available values: "asc", "desc". |
| <code><a href="#@cdktn/provider-cloudflare.dataCloudflareZeroTrustCwsTenantStructures.DataCloudflareZeroTrustCwsTenantStructures.Initializer.parameter.importPath">import_path</a></code> | <code>str</code> | Filter by import path (case-sensitive literal substring match). |
| <code><a href="#@cdktn/provider-cloudflare.dataCloudflareZeroTrustCwsTenantStructures.DataCloudflareZeroTrustCwsTenantStructures.Initializer.parameter.maxItems">max_items</a></code> | <code>typing.Union[int, float]</code> | Max items to fetch, default: 1000. |
| <code><a href="#@cdktn/provider-cloudflare.dataCloudflareZeroTrustCwsTenantStructures.DataCloudflareZeroTrustCwsTenantStructures.Initializer.parameter.name">name</a></code> | <code>str</code> | Filter by tenant structure name (case-insensitive substring match). |
| <code><a href="#@cdktn/provider-cloudflare.dataCloudflareZeroTrustCwsTenantStructures.DataCloudflareZeroTrustCwsTenantStructures.Initializer.parameter.order">order</a></code> | <code>str</code> | Field to order results by (default: created_at) Available values: "name", "created_at", "updated_at". |

---

##### `scope`<sup>Required</sup> <a name="scope" id="@cdktn/provider-cloudflare.dataCloudflareZeroTrustCwsTenantStructures.DataCloudflareZeroTrustCwsTenantStructures.Initializer.parameter.scope"></a>

- *Type:* constructs.Construct

The scope in which to define this construct.

---

##### `id`<sup>Required</sup> <a name="id" id="@cdktn/provider-cloudflare.dataCloudflareZeroTrustCwsTenantStructures.DataCloudflareZeroTrustCwsTenantStructures.Initializer.parameter.id"></a>

- *Type:* str

The scoped construct ID.

Must be unique amongst siblings in the same scope

---

##### `connection`<sup>Optional</sup> <a name="connection" id="@cdktn/provider-cloudflare.dataCloudflareZeroTrustCwsTenantStructures.DataCloudflareZeroTrustCwsTenantStructures.Initializer.parameter.connection"></a>

- *Type:* cdktn.SSHProvisionerConnection | cdktn.WinrmProvisionerConnection

---

##### `count`<sup>Optional</sup> <a name="count" id="@cdktn/provider-cloudflare.dataCloudflareZeroTrustCwsTenantStructures.DataCloudflareZeroTrustCwsTenantStructures.Initializer.parameter.count"></a>

- *Type:* typing.Union[int, float] | cdktn.TerraformCount

---

##### `depends_on`<sup>Optional</sup> <a name="depends_on" id="@cdktn/provider-cloudflare.dataCloudflareZeroTrustCwsTenantStructures.DataCloudflareZeroTrustCwsTenantStructures.Initializer.parameter.dependsOn"></a>

- *Type:* typing.List[cdktn.ITerraformDependable]

---

##### `for_each`<sup>Optional</sup> <a name="for_each" id="@cdktn/provider-cloudflare.dataCloudflareZeroTrustCwsTenantStructures.DataCloudflareZeroTrustCwsTenantStructures.Initializer.parameter.forEach"></a>

- *Type:* cdktn.ITerraformIterator

---

##### `lifecycle`<sup>Optional</sup> <a name="lifecycle" id="@cdktn/provider-cloudflare.dataCloudflareZeroTrustCwsTenantStructures.DataCloudflareZeroTrustCwsTenantStructures.Initializer.parameter.lifecycle"></a>

- *Type:* cdktn.TerraformResourceLifecycle

---

##### `provider`<sup>Optional</sup> <a name="provider" id="@cdktn/provider-cloudflare.dataCloudflareZeroTrustCwsTenantStructures.DataCloudflareZeroTrustCwsTenantStructures.Initializer.parameter.provider"></a>

- *Type:* cdktn.TerraformProvider

---

##### `provisioners`<sup>Optional</sup> <a name="provisioners" id="@cdktn/provider-cloudflare.dataCloudflareZeroTrustCwsTenantStructures.DataCloudflareZeroTrustCwsTenantStructures.Initializer.parameter.provisioners"></a>

- *Type:* typing.List[cdktn.FileProvisioner | cdktn.LocalExecProvisioner | cdktn.RemoteExecProvisioner]

---

##### `account_id`<sup>Required</sup> <a name="account_id" id="@cdktn/provider-cloudflare.dataCloudflareZeroTrustCwsTenantStructures.DataCloudflareZeroTrustCwsTenantStructures.Initializer.parameter.accountId"></a>

- *Type:* str

Cloudflare account ID (32-character hexadecimal string).

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/cloudflare/cloudflare/5.29.0/docs/data-sources/zero_trust_cws_tenant_structures#account_id DataCloudflareZeroTrustCwsTenantStructures#account_id}

---

##### `direction`<sup>Optional</sup> <a name="direction" id="@cdktn/provider-cloudflare.dataCloudflareZeroTrustCwsTenantStructures.DataCloudflareZeroTrustCwsTenantStructures.Initializer.parameter.direction"></a>

- *Type:* str

Sort direction (default: asc) Available values: "asc", "desc".

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/cloudflare/cloudflare/5.29.0/docs/data-sources/zero_trust_cws_tenant_structures#direction DataCloudflareZeroTrustCwsTenantStructures#direction}

---

##### `import_path`<sup>Optional</sup> <a name="import_path" id="@cdktn/provider-cloudflare.dataCloudflareZeroTrustCwsTenantStructures.DataCloudflareZeroTrustCwsTenantStructures.Initializer.parameter.importPath"></a>

- *Type:* str

Filter by import path (case-sensitive literal substring match).

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/cloudflare/cloudflare/5.29.0/docs/data-sources/zero_trust_cws_tenant_structures#import_path DataCloudflareZeroTrustCwsTenantStructures#import_path}

---

##### `max_items`<sup>Optional</sup> <a name="max_items" id="@cdktn/provider-cloudflare.dataCloudflareZeroTrustCwsTenantStructures.DataCloudflareZeroTrustCwsTenantStructures.Initializer.parameter.maxItems"></a>

- *Type:* typing.Union[int, float]

Max items to fetch, default: 1000.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/cloudflare/cloudflare/5.29.0/docs/data-sources/zero_trust_cws_tenant_structures#max_items DataCloudflareZeroTrustCwsTenantStructures#max_items}

---

##### `name`<sup>Optional</sup> <a name="name" id="@cdktn/provider-cloudflare.dataCloudflareZeroTrustCwsTenantStructures.DataCloudflareZeroTrustCwsTenantStructures.Initializer.parameter.name"></a>

- *Type:* str

Filter by tenant structure name (case-insensitive substring match).

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/cloudflare/cloudflare/5.29.0/docs/data-sources/zero_trust_cws_tenant_structures#name DataCloudflareZeroTrustCwsTenantStructures#name}

---

##### `order`<sup>Optional</sup> <a name="order" id="@cdktn/provider-cloudflare.dataCloudflareZeroTrustCwsTenantStructures.DataCloudflareZeroTrustCwsTenantStructures.Initializer.parameter.order"></a>

- *Type:* str

Field to order results by (default: created_at) Available values: "name", "created_at", "updated_at".

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/cloudflare/cloudflare/5.29.0/docs/data-sources/zero_trust_cws_tenant_structures#order DataCloudflareZeroTrustCwsTenantStructures#order}

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-cloudflare.dataCloudflareZeroTrustCwsTenantStructures.DataCloudflareZeroTrustCwsTenantStructures.toString">to_string</a></code> | Returns a string representation of this construct. |
| <code><a href="#@cdktn/provider-cloudflare.dataCloudflareZeroTrustCwsTenantStructures.DataCloudflareZeroTrustCwsTenantStructures.with">with</a></code> | Applies one or more mixins to this construct. |
| <code><a href="#@cdktn/provider-cloudflare.dataCloudflareZeroTrustCwsTenantStructures.DataCloudflareZeroTrustCwsTenantStructures.addOverride">add_override</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-cloudflare.dataCloudflareZeroTrustCwsTenantStructures.DataCloudflareZeroTrustCwsTenantStructures.overrideLogicalId">override_logical_id</a></code> | Overrides the auto-generated logical ID with a specific ID. |
| <code><a href="#@cdktn/provider-cloudflare.dataCloudflareZeroTrustCwsTenantStructures.DataCloudflareZeroTrustCwsTenantStructures.resetOverrideLogicalId">reset_override_logical_id</a></code> | Resets a previously passed logical Id to use the auto-generated logical id again. |
| <code><a href="#@cdktn/provider-cloudflare.dataCloudflareZeroTrustCwsTenantStructures.DataCloudflareZeroTrustCwsTenantStructures.toHclTerraform">to_hcl_terraform</a></code> | Adds this resource to the terraform JSON output. |
| <code><a href="#@cdktn/provider-cloudflare.dataCloudflareZeroTrustCwsTenantStructures.DataCloudflareZeroTrustCwsTenantStructures.toMetadata">to_metadata</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-cloudflare.dataCloudflareZeroTrustCwsTenantStructures.DataCloudflareZeroTrustCwsTenantStructures.toTerraform">to_terraform</a></code> | Adds this resource to the terraform JSON output. |
| <code><a href="#@cdktn/provider-cloudflare.dataCloudflareZeroTrustCwsTenantStructures.DataCloudflareZeroTrustCwsTenantStructures.getAnyMapAttribute">get_any_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-cloudflare.dataCloudflareZeroTrustCwsTenantStructures.DataCloudflareZeroTrustCwsTenantStructures.getBooleanAttribute">get_boolean_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-cloudflare.dataCloudflareZeroTrustCwsTenantStructures.DataCloudflareZeroTrustCwsTenantStructures.getBooleanMapAttribute">get_boolean_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-cloudflare.dataCloudflareZeroTrustCwsTenantStructures.DataCloudflareZeroTrustCwsTenantStructures.getListAttribute">get_list_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-cloudflare.dataCloudflareZeroTrustCwsTenantStructures.DataCloudflareZeroTrustCwsTenantStructures.getNumberAttribute">get_number_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-cloudflare.dataCloudflareZeroTrustCwsTenantStructures.DataCloudflareZeroTrustCwsTenantStructures.getNumberListAttribute">get_number_list_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-cloudflare.dataCloudflareZeroTrustCwsTenantStructures.DataCloudflareZeroTrustCwsTenantStructures.getNumberMapAttribute">get_number_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-cloudflare.dataCloudflareZeroTrustCwsTenantStructures.DataCloudflareZeroTrustCwsTenantStructures.getStringAttribute">get_string_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-cloudflare.dataCloudflareZeroTrustCwsTenantStructures.DataCloudflareZeroTrustCwsTenantStructures.getStringMapAttribute">get_string_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-cloudflare.dataCloudflareZeroTrustCwsTenantStructures.DataCloudflareZeroTrustCwsTenantStructures.interpolationForAttribute">interpolation_for_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-cloudflare.dataCloudflareZeroTrustCwsTenantStructures.DataCloudflareZeroTrustCwsTenantStructures.resetDirection">reset_direction</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-cloudflare.dataCloudflareZeroTrustCwsTenantStructures.DataCloudflareZeroTrustCwsTenantStructures.resetImportPath">reset_import_path</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-cloudflare.dataCloudflareZeroTrustCwsTenantStructures.DataCloudflareZeroTrustCwsTenantStructures.resetMaxItems">reset_max_items</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-cloudflare.dataCloudflareZeroTrustCwsTenantStructures.DataCloudflareZeroTrustCwsTenantStructures.resetName">reset_name</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-cloudflare.dataCloudflareZeroTrustCwsTenantStructures.DataCloudflareZeroTrustCwsTenantStructures.resetOrder">reset_order</a></code> | *No description.* |

---

##### `to_string` <a name="to_string" id="@cdktn/provider-cloudflare.dataCloudflareZeroTrustCwsTenantStructures.DataCloudflareZeroTrustCwsTenantStructures.toString"></a>

```python
def to_string() -> str
```

Returns a string representation of this construct.

##### `with` <a name="with" id="@cdktn/provider-cloudflare.dataCloudflareZeroTrustCwsTenantStructures.DataCloudflareZeroTrustCwsTenantStructures.with"></a>

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

###### `mixins`<sup>Required</sup> <a name="mixins" id="@cdktn/provider-cloudflare.dataCloudflareZeroTrustCwsTenantStructures.DataCloudflareZeroTrustCwsTenantStructures.with.parameter.mixins"></a>

- *Type:* *constructs.IMixin

The mixins to apply.

---

##### `add_override` <a name="add_override" id="@cdktn/provider-cloudflare.dataCloudflareZeroTrustCwsTenantStructures.DataCloudflareZeroTrustCwsTenantStructures.addOverride"></a>

```python
def add_override(
  path: str,
  value: typing.Any
) -> None
```

###### `path`<sup>Required</sup> <a name="path" id="@cdktn/provider-cloudflare.dataCloudflareZeroTrustCwsTenantStructures.DataCloudflareZeroTrustCwsTenantStructures.addOverride.parameter.path"></a>

- *Type:* str

---

###### `value`<sup>Required</sup> <a name="value" id="@cdktn/provider-cloudflare.dataCloudflareZeroTrustCwsTenantStructures.DataCloudflareZeroTrustCwsTenantStructures.addOverride.parameter.value"></a>

- *Type:* typing.Any

---

##### `override_logical_id` <a name="override_logical_id" id="@cdktn/provider-cloudflare.dataCloudflareZeroTrustCwsTenantStructures.DataCloudflareZeroTrustCwsTenantStructures.overrideLogicalId"></a>

```python
def override_logical_id(
  new_logical_id: str
) -> None
```

Overrides the auto-generated logical ID with a specific ID.

###### `new_logical_id`<sup>Required</sup> <a name="new_logical_id" id="@cdktn/provider-cloudflare.dataCloudflareZeroTrustCwsTenantStructures.DataCloudflareZeroTrustCwsTenantStructures.overrideLogicalId.parameter.newLogicalId"></a>

- *Type:* str

The new logical ID to use for this stack element.

---

##### `reset_override_logical_id` <a name="reset_override_logical_id" id="@cdktn/provider-cloudflare.dataCloudflareZeroTrustCwsTenantStructures.DataCloudflareZeroTrustCwsTenantStructures.resetOverrideLogicalId"></a>

```python
def reset_override_logical_id() -> None
```

Resets a previously passed logical Id to use the auto-generated logical id again.

##### `to_hcl_terraform` <a name="to_hcl_terraform" id="@cdktn/provider-cloudflare.dataCloudflareZeroTrustCwsTenantStructures.DataCloudflareZeroTrustCwsTenantStructures.toHclTerraform"></a>

```python
def to_hcl_terraform() -> typing.Any
```

Adds this resource to the terraform JSON output.

##### `to_metadata` <a name="to_metadata" id="@cdktn/provider-cloudflare.dataCloudflareZeroTrustCwsTenantStructures.DataCloudflareZeroTrustCwsTenantStructures.toMetadata"></a>

```python
def to_metadata() -> typing.Any
```

##### `to_terraform` <a name="to_terraform" id="@cdktn/provider-cloudflare.dataCloudflareZeroTrustCwsTenantStructures.DataCloudflareZeroTrustCwsTenantStructures.toTerraform"></a>

```python
def to_terraform() -> typing.Any
```

Adds this resource to the terraform JSON output.

##### `get_any_map_attribute` <a name="get_any_map_attribute" id="@cdktn/provider-cloudflare.dataCloudflareZeroTrustCwsTenantStructures.DataCloudflareZeroTrustCwsTenantStructures.getAnyMapAttribute"></a>

```python
def get_any_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[typing.Any]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-cloudflare.dataCloudflareZeroTrustCwsTenantStructures.DataCloudflareZeroTrustCwsTenantStructures.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_boolean_attribute` <a name="get_boolean_attribute" id="@cdktn/provider-cloudflare.dataCloudflareZeroTrustCwsTenantStructures.DataCloudflareZeroTrustCwsTenantStructures.getBooleanAttribute"></a>

```python
def get_boolean_attribute(
  terraform_attribute: str
) -> IResolvable
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-cloudflare.dataCloudflareZeroTrustCwsTenantStructures.DataCloudflareZeroTrustCwsTenantStructures.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_boolean_map_attribute` <a name="get_boolean_map_attribute" id="@cdktn/provider-cloudflare.dataCloudflareZeroTrustCwsTenantStructures.DataCloudflareZeroTrustCwsTenantStructures.getBooleanMapAttribute"></a>

```python
def get_boolean_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[bool]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-cloudflare.dataCloudflareZeroTrustCwsTenantStructures.DataCloudflareZeroTrustCwsTenantStructures.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_list_attribute` <a name="get_list_attribute" id="@cdktn/provider-cloudflare.dataCloudflareZeroTrustCwsTenantStructures.DataCloudflareZeroTrustCwsTenantStructures.getListAttribute"></a>

```python
def get_list_attribute(
  terraform_attribute: str
) -> typing.List[str]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-cloudflare.dataCloudflareZeroTrustCwsTenantStructures.DataCloudflareZeroTrustCwsTenantStructures.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_attribute` <a name="get_number_attribute" id="@cdktn/provider-cloudflare.dataCloudflareZeroTrustCwsTenantStructures.DataCloudflareZeroTrustCwsTenantStructures.getNumberAttribute"></a>

```python
def get_number_attribute(
  terraform_attribute: str
) -> typing.Union[int, float]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-cloudflare.dataCloudflareZeroTrustCwsTenantStructures.DataCloudflareZeroTrustCwsTenantStructures.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_list_attribute` <a name="get_number_list_attribute" id="@cdktn/provider-cloudflare.dataCloudflareZeroTrustCwsTenantStructures.DataCloudflareZeroTrustCwsTenantStructures.getNumberListAttribute"></a>

```python
def get_number_list_attribute(
  terraform_attribute: str
) -> typing.List[typing.Union[int, float]]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-cloudflare.dataCloudflareZeroTrustCwsTenantStructures.DataCloudflareZeroTrustCwsTenantStructures.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_map_attribute` <a name="get_number_map_attribute" id="@cdktn/provider-cloudflare.dataCloudflareZeroTrustCwsTenantStructures.DataCloudflareZeroTrustCwsTenantStructures.getNumberMapAttribute"></a>

```python
def get_number_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[typing.Union[int, float]]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-cloudflare.dataCloudflareZeroTrustCwsTenantStructures.DataCloudflareZeroTrustCwsTenantStructures.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_string_attribute` <a name="get_string_attribute" id="@cdktn/provider-cloudflare.dataCloudflareZeroTrustCwsTenantStructures.DataCloudflareZeroTrustCwsTenantStructures.getStringAttribute"></a>

```python
def get_string_attribute(
  terraform_attribute: str
) -> str
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-cloudflare.dataCloudflareZeroTrustCwsTenantStructures.DataCloudflareZeroTrustCwsTenantStructures.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_string_map_attribute` <a name="get_string_map_attribute" id="@cdktn/provider-cloudflare.dataCloudflareZeroTrustCwsTenantStructures.DataCloudflareZeroTrustCwsTenantStructures.getStringMapAttribute"></a>

```python
def get_string_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[str]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-cloudflare.dataCloudflareZeroTrustCwsTenantStructures.DataCloudflareZeroTrustCwsTenantStructures.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `interpolation_for_attribute` <a name="interpolation_for_attribute" id="@cdktn/provider-cloudflare.dataCloudflareZeroTrustCwsTenantStructures.DataCloudflareZeroTrustCwsTenantStructures.interpolationForAttribute"></a>

```python
def interpolation_for_attribute(
  terraform_attribute: str
) -> IResolvable
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-cloudflare.dataCloudflareZeroTrustCwsTenantStructures.DataCloudflareZeroTrustCwsTenantStructures.interpolationForAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `reset_direction` <a name="reset_direction" id="@cdktn/provider-cloudflare.dataCloudflareZeroTrustCwsTenantStructures.DataCloudflareZeroTrustCwsTenantStructures.resetDirection"></a>

```python
def reset_direction() -> None
```

##### `reset_import_path` <a name="reset_import_path" id="@cdktn/provider-cloudflare.dataCloudflareZeroTrustCwsTenantStructures.DataCloudflareZeroTrustCwsTenantStructures.resetImportPath"></a>

```python
def reset_import_path() -> None
```

##### `reset_max_items` <a name="reset_max_items" id="@cdktn/provider-cloudflare.dataCloudflareZeroTrustCwsTenantStructures.DataCloudflareZeroTrustCwsTenantStructures.resetMaxItems"></a>

```python
def reset_max_items() -> None
```

##### `reset_name` <a name="reset_name" id="@cdktn/provider-cloudflare.dataCloudflareZeroTrustCwsTenantStructures.DataCloudflareZeroTrustCwsTenantStructures.resetName"></a>

```python
def reset_name() -> None
```

##### `reset_order` <a name="reset_order" id="@cdktn/provider-cloudflare.dataCloudflareZeroTrustCwsTenantStructures.DataCloudflareZeroTrustCwsTenantStructures.resetOrder"></a>

```python
def reset_order() -> None
```

#### Static Functions <a name="Static Functions" id="Static Functions"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-cloudflare.dataCloudflareZeroTrustCwsTenantStructures.DataCloudflareZeroTrustCwsTenantStructures.isConstruct">is_construct</a></code> | Checks if `x` is a construct. |
| <code><a href="#@cdktn/provider-cloudflare.dataCloudflareZeroTrustCwsTenantStructures.DataCloudflareZeroTrustCwsTenantStructures.isTerraformElement">is_terraform_element</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-cloudflare.dataCloudflareZeroTrustCwsTenantStructures.DataCloudflareZeroTrustCwsTenantStructures.isTerraformDataSource">is_terraform_data_source</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-cloudflare.dataCloudflareZeroTrustCwsTenantStructures.DataCloudflareZeroTrustCwsTenantStructures.generateConfigForImport">generate_config_for_import</a></code> | Generates CDKTN code for importing a DataCloudflareZeroTrustCwsTenantStructures resource upon running "cdktn plan <stack-name>". |

---

##### `is_construct` <a name="is_construct" id="@cdktn/provider-cloudflare.dataCloudflareZeroTrustCwsTenantStructures.DataCloudflareZeroTrustCwsTenantStructures.isConstruct"></a>

```python
from cdktn_provider_cloudflare import data_cloudflare_zero_trust_cws_tenant_structures

dataCloudflareZeroTrustCwsTenantStructures.DataCloudflareZeroTrustCwsTenantStructures.is_construct(
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

###### `x`<sup>Required</sup> <a name="x" id="@cdktn/provider-cloudflare.dataCloudflareZeroTrustCwsTenantStructures.DataCloudflareZeroTrustCwsTenantStructures.isConstruct.parameter.x"></a>

- *Type:* typing.Any

Any object.

---

##### `is_terraform_element` <a name="is_terraform_element" id="@cdktn/provider-cloudflare.dataCloudflareZeroTrustCwsTenantStructures.DataCloudflareZeroTrustCwsTenantStructures.isTerraformElement"></a>

```python
from cdktn_provider_cloudflare import data_cloudflare_zero_trust_cws_tenant_structures

dataCloudflareZeroTrustCwsTenantStructures.DataCloudflareZeroTrustCwsTenantStructures.is_terraform_element(
  x: typing.Any
)
```

###### `x`<sup>Required</sup> <a name="x" id="@cdktn/provider-cloudflare.dataCloudflareZeroTrustCwsTenantStructures.DataCloudflareZeroTrustCwsTenantStructures.isTerraformElement.parameter.x"></a>

- *Type:* typing.Any

---

##### `is_terraform_data_source` <a name="is_terraform_data_source" id="@cdktn/provider-cloudflare.dataCloudflareZeroTrustCwsTenantStructures.DataCloudflareZeroTrustCwsTenantStructures.isTerraformDataSource"></a>

```python
from cdktn_provider_cloudflare import data_cloudflare_zero_trust_cws_tenant_structures

dataCloudflareZeroTrustCwsTenantStructures.DataCloudflareZeroTrustCwsTenantStructures.is_terraform_data_source(
  x: typing.Any
)
```

###### `x`<sup>Required</sup> <a name="x" id="@cdktn/provider-cloudflare.dataCloudflareZeroTrustCwsTenantStructures.DataCloudflareZeroTrustCwsTenantStructures.isTerraformDataSource.parameter.x"></a>

- *Type:* typing.Any

---

##### `generate_config_for_import` <a name="generate_config_for_import" id="@cdktn/provider-cloudflare.dataCloudflareZeroTrustCwsTenantStructures.DataCloudflareZeroTrustCwsTenantStructures.generateConfigForImport"></a>

```python
from cdktn_provider_cloudflare import data_cloudflare_zero_trust_cws_tenant_structures

dataCloudflareZeroTrustCwsTenantStructures.DataCloudflareZeroTrustCwsTenantStructures.generate_config_for_import(
  scope: Construct,
  import_to_id: str,
  import_from_id: str,
  provider: TerraformProvider = None
)
```

Generates CDKTN code for importing a DataCloudflareZeroTrustCwsTenantStructures resource upon running "cdktn plan <stack-name>".

###### `scope`<sup>Required</sup> <a name="scope" id="@cdktn/provider-cloudflare.dataCloudflareZeroTrustCwsTenantStructures.DataCloudflareZeroTrustCwsTenantStructures.generateConfigForImport.parameter.scope"></a>

- *Type:* constructs.Construct

The scope in which to define this construct.

---

###### `import_to_id`<sup>Required</sup> <a name="import_to_id" id="@cdktn/provider-cloudflare.dataCloudflareZeroTrustCwsTenantStructures.DataCloudflareZeroTrustCwsTenantStructures.generateConfigForImport.parameter.importToId"></a>

- *Type:* str

The construct id used in the generated config for the DataCloudflareZeroTrustCwsTenantStructures to import.

---

###### `import_from_id`<sup>Required</sup> <a name="import_from_id" id="@cdktn/provider-cloudflare.dataCloudflareZeroTrustCwsTenantStructures.DataCloudflareZeroTrustCwsTenantStructures.generateConfigForImport.parameter.importFromId"></a>

- *Type:* str

The id of the existing DataCloudflareZeroTrustCwsTenantStructures that should be imported.

Refer to the {@link https://registry.terraform.io/providers/cloudflare/cloudflare/5.29.0/docs/data-sources/zero_trust_cws_tenant_structures#import import section} in the documentation of this resource for the id to use

---

###### `provider`<sup>Optional</sup> <a name="provider" id="@cdktn/provider-cloudflare.dataCloudflareZeroTrustCwsTenantStructures.DataCloudflareZeroTrustCwsTenantStructures.generateConfigForImport.parameter.provider"></a>

- *Type:* cdktn.TerraformProvider

? Optional instance of the provider where the DataCloudflareZeroTrustCwsTenantStructures to import is found.

---

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-cloudflare.dataCloudflareZeroTrustCwsTenantStructures.DataCloudflareZeroTrustCwsTenantStructures.property.node">node</a></code> | <code>constructs.Node</code> | The tree node. |
| <code><a href="#@cdktn/provider-cloudflare.dataCloudflareZeroTrustCwsTenantStructures.DataCloudflareZeroTrustCwsTenantStructures.property.cdktfStack">cdktf_stack</a></code> | <code>cdktn.TerraformStack</code> | *No description.* |
| <code><a href="#@cdktn/provider-cloudflare.dataCloudflareZeroTrustCwsTenantStructures.DataCloudflareZeroTrustCwsTenantStructures.property.fqn">fqn</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktn/provider-cloudflare.dataCloudflareZeroTrustCwsTenantStructures.DataCloudflareZeroTrustCwsTenantStructures.property.friendlyUniqueId">friendly_unique_id</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktn/provider-cloudflare.dataCloudflareZeroTrustCwsTenantStructures.DataCloudflareZeroTrustCwsTenantStructures.property.terraformMetaArguments">terraform_meta_arguments</a></code> | <code>typing.Mapping[typing.Any]</code> | *No description.* |
| <code><a href="#@cdktn/provider-cloudflare.dataCloudflareZeroTrustCwsTenantStructures.DataCloudflareZeroTrustCwsTenantStructures.property.terraformResourceType">terraform_resource_type</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktn/provider-cloudflare.dataCloudflareZeroTrustCwsTenantStructures.DataCloudflareZeroTrustCwsTenantStructures.property.terraformGeneratorMetadata">terraform_generator_metadata</a></code> | <code>cdktn.TerraformProviderGeneratorMetadata</code> | *No description.* |
| <code><a href="#@cdktn/provider-cloudflare.dataCloudflareZeroTrustCwsTenantStructures.DataCloudflareZeroTrustCwsTenantStructures.property.count">count</a></code> | <code>typing.Union[int, float] \| cdktn.TerraformCount</code> | *No description.* |
| <code><a href="#@cdktn/provider-cloudflare.dataCloudflareZeroTrustCwsTenantStructures.DataCloudflareZeroTrustCwsTenantStructures.property.dependsOn">depends_on</a></code> | <code>typing.List[str]</code> | *No description.* |
| <code><a href="#@cdktn/provider-cloudflare.dataCloudflareZeroTrustCwsTenantStructures.DataCloudflareZeroTrustCwsTenantStructures.property.forEach">for_each</a></code> | <code>cdktn.ITerraformIterator</code> | *No description.* |
| <code><a href="#@cdktn/provider-cloudflare.dataCloudflareZeroTrustCwsTenantStructures.DataCloudflareZeroTrustCwsTenantStructures.property.lifecycle">lifecycle</a></code> | <code>cdktn.TerraformResourceLifecycle</code> | *No description.* |
| <code><a href="#@cdktn/provider-cloudflare.dataCloudflareZeroTrustCwsTenantStructures.DataCloudflareZeroTrustCwsTenantStructures.property.provider">provider</a></code> | <code>cdktn.TerraformProvider</code> | *No description.* |
| <code><a href="#@cdktn/provider-cloudflare.dataCloudflareZeroTrustCwsTenantStructures.DataCloudflareZeroTrustCwsTenantStructures.property.result">result</a></code> | <code><a href="#@cdktn/provider-cloudflare.dataCloudflareZeroTrustCwsTenantStructures.DataCloudflareZeroTrustCwsTenantStructuresResultList">DataCloudflareZeroTrustCwsTenantStructuresResultList</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-cloudflare.dataCloudflareZeroTrustCwsTenantStructures.DataCloudflareZeroTrustCwsTenantStructures.property.accountIdInput">account_id_input</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktn/provider-cloudflare.dataCloudflareZeroTrustCwsTenantStructures.DataCloudflareZeroTrustCwsTenantStructures.property.directionInput">direction_input</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktn/provider-cloudflare.dataCloudflareZeroTrustCwsTenantStructures.DataCloudflareZeroTrustCwsTenantStructures.property.importPathInput">import_path_input</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktn/provider-cloudflare.dataCloudflareZeroTrustCwsTenantStructures.DataCloudflareZeroTrustCwsTenantStructures.property.maxItemsInput">max_items_input</a></code> | <code>typing.Union[int, float]</code> | *No description.* |
| <code><a href="#@cdktn/provider-cloudflare.dataCloudflareZeroTrustCwsTenantStructures.DataCloudflareZeroTrustCwsTenantStructures.property.nameInput">name_input</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktn/provider-cloudflare.dataCloudflareZeroTrustCwsTenantStructures.DataCloudflareZeroTrustCwsTenantStructures.property.orderInput">order_input</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktn/provider-cloudflare.dataCloudflareZeroTrustCwsTenantStructures.DataCloudflareZeroTrustCwsTenantStructures.property.accountId">account_id</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktn/provider-cloudflare.dataCloudflareZeroTrustCwsTenantStructures.DataCloudflareZeroTrustCwsTenantStructures.property.direction">direction</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktn/provider-cloudflare.dataCloudflareZeroTrustCwsTenantStructures.DataCloudflareZeroTrustCwsTenantStructures.property.importPath">import_path</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktn/provider-cloudflare.dataCloudflareZeroTrustCwsTenantStructures.DataCloudflareZeroTrustCwsTenantStructures.property.maxItems">max_items</a></code> | <code>typing.Union[int, float]</code> | *No description.* |
| <code><a href="#@cdktn/provider-cloudflare.dataCloudflareZeroTrustCwsTenantStructures.DataCloudflareZeroTrustCwsTenantStructures.property.name">name</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktn/provider-cloudflare.dataCloudflareZeroTrustCwsTenantStructures.DataCloudflareZeroTrustCwsTenantStructures.property.order">order</a></code> | <code>str</code> | *No description.* |

---

##### `node`<sup>Required</sup> <a name="node" id="@cdktn/provider-cloudflare.dataCloudflareZeroTrustCwsTenantStructures.DataCloudflareZeroTrustCwsTenantStructures.property.node"></a>

```python
node: Node
```

- *Type:* constructs.Node

The tree node.

---

##### `cdktf_stack`<sup>Required</sup> <a name="cdktf_stack" id="@cdktn/provider-cloudflare.dataCloudflareZeroTrustCwsTenantStructures.DataCloudflareZeroTrustCwsTenantStructures.property.cdktfStack"></a>

```python
cdktf_stack: TerraformStack
```

- *Type:* cdktn.TerraformStack

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktn/provider-cloudflare.dataCloudflareZeroTrustCwsTenantStructures.DataCloudflareZeroTrustCwsTenantStructures.property.fqn"></a>

```python
fqn: str
```

- *Type:* str

---

##### `friendly_unique_id`<sup>Required</sup> <a name="friendly_unique_id" id="@cdktn/provider-cloudflare.dataCloudflareZeroTrustCwsTenantStructures.DataCloudflareZeroTrustCwsTenantStructures.property.friendlyUniqueId"></a>

```python
friendly_unique_id: str
```

- *Type:* str

---

##### `terraform_meta_arguments`<sup>Required</sup> <a name="terraform_meta_arguments" id="@cdktn/provider-cloudflare.dataCloudflareZeroTrustCwsTenantStructures.DataCloudflareZeroTrustCwsTenantStructures.property.terraformMetaArguments"></a>

```python
terraform_meta_arguments: typing.Mapping[typing.Any]
```

- *Type:* typing.Mapping[typing.Any]

---

##### `terraform_resource_type`<sup>Required</sup> <a name="terraform_resource_type" id="@cdktn/provider-cloudflare.dataCloudflareZeroTrustCwsTenantStructures.DataCloudflareZeroTrustCwsTenantStructures.property.terraformResourceType"></a>

```python
terraform_resource_type: str
```

- *Type:* str

---

##### `terraform_generator_metadata`<sup>Optional</sup> <a name="terraform_generator_metadata" id="@cdktn/provider-cloudflare.dataCloudflareZeroTrustCwsTenantStructures.DataCloudflareZeroTrustCwsTenantStructures.property.terraformGeneratorMetadata"></a>

```python
terraform_generator_metadata: TerraformProviderGeneratorMetadata
```

- *Type:* cdktn.TerraformProviderGeneratorMetadata

---

##### `count`<sup>Optional</sup> <a name="count" id="@cdktn/provider-cloudflare.dataCloudflareZeroTrustCwsTenantStructures.DataCloudflareZeroTrustCwsTenantStructures.property.count"></a>

```python
count: typing.Union[int, float] | TerraformCount
```

- *Type:* typing.Union[int, float] | cdktn.TerraformCount

---

##### `depends_on`<sup>Optional</sup> <a name="depends_on" id="@cdktn/provider-cloudflare.dataCloudflareZeroTrustCwsTenantStructures.DataCloudflareZeroTrustCwsTenantStructures.property.dependsOn"></a>

```python
depends_on: typing.List[str]
```

- *Type:* typing.List[str]

---

##### `for_each`<sup>Optional</sup> <a name="for_each" id="@cdktn/provider-cloudflare.dataCloudflareZeroTrustCwsTenantStructures.DataCloudflareZeroTrustCwsTenantStructures.property.forEach"></a>

```python
for_each: ITerraformIterator
```

- *Type:* cdktn.ITerraformIterator

---

##### `lifecycle`<sup>Optional</sup> <a name="lifecycle" id="@cdktn/provider-cloudflare.dataCloudflareZeroTrustCwsTenantStructures.DataCloudflareZeroTrustCwsTenantStructures.property.lifecycle"></a>

```python
lifecycle: TerraformResourceLifecycle
```

- *Type:* cdktn.TerraformResourceLifecycle

---

##### `provider`<sup>Optional</sup> <a name="provider" id="@cdktn/provider-cloudflare.dataCloudflareZeroTrustCwsTenantStructures.DataCloudflareZeroTrustCwsTenantStructures.property.provider"></a>

```python
provider: TerraformProvider
```

- *Type:* cdktn.TerraformProvider

---

##### `result`<sup>Required</sup> <a name="result" id="@cdktn/provider-cloudflare.dataCloudflareZeroTrustCwsTenantStructures.DataCloudflareZeroTrustCwsTenantStructures.property.result"></a>

```python
result: DataCloudflareZeroTrustCwsTenantStructuresResultList
```

- *Type:* <a href="#@cdktn/provider-cloudflare.dataCloudflareZeroTrustCwsTenantStructures.DataCloudflareZeroTrustCwsTenantStructuresResultList">DataCloudflareZeroTrustCwsTenantStructuresResultList</a>

---

##### `account_id_input`<sup>Optional</sup> <a name="account_id_input" id="@cdktn/provider-cloudflare.dataCloudflareZeroTrustCwsTenantStructures.DataCloudflareZeroTrustCwsTenantStructures.property.accountIdInput"></a>

```python
account_id_input: str
```

- *Type:* str

---

##### `direction_input`<sup>Optional</sup> <a name="direction_input" id="@cdktn/provider-cloudflare.dataCloudflareZeroTrustCwsTenantStructures.DataCloudflareZeroTrustCwsTenantStructures.property.directionInput"></a>

```python
direction_input: str
```

- *Type:* str

---

##### `import_path_input`<sup>Optional</sup> <a name="import_path_input" id="@cdktn/provider-cloudflare.dataCloudflareZeroTrustCwsTenantStructures.DataCloudflareZeroTrustCwsTenantStructures.property.importPathInput"></a>

```python
import_path_input: str
```

- *Type:* str

---

##### `max_items_input`<sup>Optional</sup> <a name="max_items_input" id="@cdktn/provider-cloudflare.dataCloudflareZeroTrustCwsTenantStructures.DataCloudflareZeroTrustCwsTenantStructures.property.maxItemsInput"></a>

```python
max_items_input: typing.Union[int, float]
```

- *Type:* typing.Union[int, float]

---

##### `name_input`<sup>Optional</sup> <a name="name_input" id="@cdktn/provider-cloudflare.dataCloudflareZeroTrustCwsTenantStructures.DataCloudflareZeroTrustCwsTenantStructures.property.nameInput"></a>

```python
name_input: str
```

- *Type:* str

---

##### `order_input`<sup>Optional</sup> <a name="order_input" id="@cdktn/provider-cloudflare.dataCloudflareZeroTrustCwsTenantStructures.DataCloudflareZeroTrustCwsTenantStructures.property.orderInput"></a>

```python
order_input: str
```

- *Type:* str

---

##### `account_id`<sup>Required</sup> <a name="account_id" id="@cdktn/provider-cloudflare.dataCloudflareZeroTrustCwsTenantStructures.DataCloudflareZeroTrustCwsTenantStructures.property.accountId"></a>

```python
account_id: str
```

- *Type:* str

---

##### `direction`<sup>Required</sup> <a name="direction" id="@cdktn/provider-cloudflare.dataCloudflareZeroTrustCwsTenantStructures.DataCloudflareZeroTrustCwsTenantStructures.property.direction"></a>

```python
direction: str
```

- *Type:* str

---

##### `import_path`<sup>Required</sup> <a name="import_path" id="@cdktn/provider-cloudflare.dataCloudflareZeroTrustCwsTenantStructures.DataCloudflareZeroTrustCwsTenantStructures.property.importPath"></a>

```python
import_path: str
```

- *Type:* str

---

##### `max_items`<sup>Required</sup> <a name="max_items" id="@cdktn/provider-cloudflare.dataCloudflareZeroTrustCwsTenantStructures.DataCloudflareZeroTrustCwsTenantStructures.property.maxItems"></a>

```python
max_items: typing.Union[int, float]
```

- *Type:* typing.Union[int, float]

---

##### `name`<sup>Required</sup> <a name="name" id="@cdktn/provider-cloudflare.dataCloudflareZeroTrustCwsTenantStructures.DataCloudflareZeroTrustCwsTenantStructures.property.name"></a>

```python
name: str
```

- *Type:* str

---

##### `order`<sup>Required</sup> <a name="order" id="@cdktn/provider-cloudflare.dataCloudflareZeroTrustCwsTenantStructures.DataCloudflareZeroTrustCwsTenantStructures.property.order"></a>

```python
order: str
```

- *Type:* str

---

#### Constants <a name="Constants" id="Constants"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-cloudflare.dataCloudflareZeroTrustCwsTenantStructures.DataCloudflareZeroTrustCwsTenantStructures.property.tfResourceType">tfResourceType</a></code> | <code>str</code> | *No description.* |

---

##### `tfResourceType`<sup>Required</sup> <a name="tfResourceType" id="@cdktn/provider-cloudflare.dataCloudflareZeroTrustCwsTenantStructures.DataCloudflareZeroTrustCwsTenantStructures.property.tfResourceType"></a>

```python
tfResourceType: str
```

- *Type:* str

---

## Structs <a name="Structs" id="Structs"></a>

### DataCloudflareZeroTrustCwsTenantStructuresConfig <a name="DataCloudflareZeroTrustCwsTenantStructuresConfig" id="@cdktn/provider-cloudflare.dataCloudflareZeroTrustCwsTenantStructures.DataCloudflareZeroTrustCwsTenantStructuresConfig"></a>

#### Initializer <a name="Initializer" id="@cdktn/provider-cloudflare.dataCloudflareZeroTrustCwsTenantStructures.DataCloudflareZeroTrustCwsTenantStructuresConfig.Initializer"></a>

```python
from cdktn_provider_cloudflare import data_cloudflare_zero_trust_cws_tenant_structures

dataCloudflareZeroTrustCwsTenantStructures.DataCloudflareZeroTrustCwsTenantStructuresConfig(
  connection: SSHProvisionerConnection | WinrmProvisionerConnection = None,
  count: typing.Union[int, float] | TerraformCount = None,
  depends_on: typing.List[ITerraformDependable] = None,
  for_each: ITerraformIterator = None,
  lifecycle: TerraformResourceLifecycle = None,
  provider: TerraformProvider = None,
  provisioners: typing.List[FileProvisioner | LocalExecProvisioner | RemoteExecProvisioner] = None,
  account_id: str,
  direction: str = None,
  import_path: str = None,
  max_items: typing.Union[int, float] = None,
  name: str = None,
  order: str = None
)
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-cloudflare.dataCloudflareZeroTrustCwsTenantStructures.DataCloudflareZeroTrustCwsTenantStructuresConfig.property.connection">connection</a></code> | <code>cdktn.SSHProvisionerConnection \| cdktn.WinrmProvisionerConnection</code> | *No description.* |
| <code><a href="#@cdktn/provider-cloudflare.dataCloudflareZeroTrustCwsTenantStructures.DataCloudflareZeroTrustCwsTenantStructuresConfig.property.count">count</a></code> | <code>typing.Union[int, float] \| cdktn.TerraformCount</code> | *No description.* |
| <code><a href="#@cdktn/provider-cloudflare.dataCloudflareZeroTrustCwsTenantStructures.DataCloudflareZeroTrustCwsTenantStructuresConfig.property.dependsOn">depends_on</a></code> | <code>typing.List[cdktn.ITerraformDependable]</code> | *No description.* |
| <code><a href="#@cdktn/provider-cloudflare.dataCloudflareZeroTrustCwsTenantStructures.DataCloudflareZeroTrustCwsTenantStructuresConfig.property.forEach">for_each</a></code> | <code>cdktn.ITerraformIterator</code> | *No description.* |
| <code><a href="#@cdktn/provider-cloudflare.dataCloudflareZeroTrustCwsTenantStructures.DataCloudflareZeroTrustCwsTenantStructuresConfig.property.lifecycle">lifecycle</a></code> | <code>cdktn.TerraformResourceLifecycle</code> | *No description.* |
| <code><a href="#@cdktn/provider-cloudflare.dataCloudflareZeroTrustCwsTenantStructures.DataCloudflareZeroTrustCwsTenantStructuresConfig.property.provider">provider</a></code> | <code>cdktn.TerraformProvider</code> | *No description.* |
| <code><a href="#@cdktn/provider-cloudflare.dataCloudflareZeroTrustCwsTenantStructures.DataCloudflareZeroTrustCwsTenantStructuresConfig.property.provisioners">provisioners</a></code> | <code>typing.List[cdktn.FileProvisioner \| cdktn.LocalExecProvisioner \| cdktn.RemoteExecProvisioner]</code> | *No description.* |
| <code><a href="#@cdktn/provider-cloudflare.dataCloudflareZeroTrustCwsTenantStructures.DataCloudflareZeroTrustCwsTenantStructuresConfig.property.accountId">account_id</a></code> | <code>str</code> | Cloudflare account ID (32-character hexadecimal string). |
| <code><a href="#@cdktn/provider-cloudflare.dataCloudflareZeroTrustCwsTenantStructures.DataCloudflareZeroTrustCwsTenantStructuresConfig.property.direction">direction</a></code> | <code>str</code> | Sort direction (default: asc) Available values: "asc", "desc". |
| <code><a href="#@cdktn/provider-cloudflare.dataCloudflareZeroTrustCwsTenantStructures.DataCloudflareZeroTrustCwsTenantStructuresConfig.property.importPath">import_path</a></code> | <code>str</code> | Filter by import path (case-sensitive literal substring match). |
| <code><a href="#@cdktn/provider-cloudflare.dataCloudflareZeroTrustCwsTenantStructures.DataCloudflareZeroTrustCwsTenantStructuresConfig.property.maxItems">max_items</a></code> | <code>typing.Union[int, float]</code> | Max items to fetch, default: 1000. |
| <code><a href="#@cdktn/provider-cloudflare.dataCloudflareZeroTrustCwsTenantStructures.DataCloudflareZeroTrustCwsTenantStructuresConfig.property.name">name</a></code> | <code>str</code> | Filter by tenant structure name (case-insensitive substring match). |
| <code><a href="#@cdktn/provider-cloudflare.dataCloudflareZeroTrustCwsTenantStructures.DataCloudflareZeroTrustCwsTenantStructuresConfig.property.order">order</a></code> | <code>str</code> | Field to order results by (default: created_at) Available values: "name", "created_at", "updated_at". |

---

##### `connection`<sup>Optional</sup> <a name="connection" id="@cdktn/provider-cloudflare.dataCloudflareZeroTrustCwsTenantStructures.DataCloudflareZeroTrustCwsTenantStructuresConfig.property.connection"></a>

```python
connection: SSHProvisionerConnection | WinrmProvisionerConnection
```

- *Type:* cdktn.SSHProvisionerConnection | cdktn.WinrmProvisionerConnection

---

##### `count`<sup>Optional</sup> <a name="count" id="@cdktn/provider-cloudflare.dataCloudflareZeroTrustCwsTenantStructures.DataCloudflareZeroTrustCwsTenantStructuresConfig.property.count"></a>

```python
count: typing.Union[int, float] | TerraformCount
```

- *Type:* typing.Union[int, float] | cdktn.TerraformCount

---

##### `depends_on`<sup>Optional</sup> <a name="depends_on" id="@cdktn/provider-cloudflare.dataCloudflareZeroTrustCwsTenantStructures.DataCloudflareZeroTrustCwsTenantStructuresConfig.property.dependsOn"></a>

```python
depends_on: typing.List[ITerraformDependable]
```

- *Type:* typing.List[cdktn.ITerraformDependable]

---

##### `for_each`<sup>Optional</sup> <a name="for_each" id="@cdktn/provider-cloudflare.dataCloudflareZeroTrustCwsTenantStructures.DataCloudflareZeroTrustCwsTenantStructuresConfig.property.forEach"></a>

```python
for_each: ITerraformIterator
```

- *Type:* cdktn.ITerraformIterator

---

##### `lifecycle`<sup>Optional</sup> <a name="lifecycle" id="@cdktn/provider-cloudflare.dataCloudflareZeroTrustCwsTenantStructures.DataCloudflareZeroTrustCwsTenantStructuresConfig.property.lifecycle"></a>

```python
lifecycle: TerraformResourceLifecycle
```

- *Type:* cdktn.TerraformResourceLifecycle

---

##### `provider`<sup>Optional</sup> <a name="provider" id="@cdktn/provider-cloudflare.dataCloudflareZeroTrustCwsTenantStructures.DataCloudflareZeroTrustCwsTenantStructuresConfig.property.provider"></a>

```python
provider: TerraformProvider
```

- *Type:* cdktn.TerraformProvider

---

##### `provisioners`<sup>Optional</sup> <a name="provisioners" id="@cdktn/provider-cloudflare.dataCloudflareZeroTrustCwsTenantStructures.DataCloudflareZeroTrustCwsTenantStructuresConfig.property.provisioners"></a>

```python
provisioners: typing.List[FileProvisioner | LocalExecProvisioner | RemoteExecProvisioner]
```

- *Type:* typing.List[cdktn.FileProvisioner | cdktn.LocalExecProvisioner | cdktn.RemoteExecProvisioner]

---

##### `account_id`<sup>Required</sup> <a name="account_id" id="@cdktn/provider-cloudflare.dataCloudflareZeroTrustCwsTenantStructures.DataCloudflareZeroTrustCwsTenantStructuresConfig.property.accountId"></a>

```python
account_id: str
```

- *Type:* str

Cloudflare account ID (32-character hexadecimal string).

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/cloudflare/cloudflare/5.29.0/docs/data-sources/zero_trust_cws_tenant_structures#account_id DataCloudflareZeroTrustCwsTenantStructures#account_id}

---

##### `direction`<sup>Optional</sup> <a name="direction" id="@cdktn/provider-cloudflare.dataCloudflareZeroTrustCwsTenantStructures.DataCloudflareZeroTrustCwsTenantStructuresConfig.property.direction"></a>

```python
direction: str
```

- *Type:* str

Sort direction (default: asc) Available values: "asc", "desc".

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/cloudflare/cloudflare/5.29.0/docs/data-sources/zero_trust_cws_tenant_structures#direction DataCloudflareZeroTrustCwsTenantStructures#direction}

---

##### `import_path`<sup>Optional</sup> <a name="import_path" id="@cdktn/provider-cloudflare.dataCloudflareZeroTrustCwsTenantStructures.DataCloudflareZeroTrustCwsTenantStructuresConfig.property.importPath"></a>

```python
import_path: str
```

- *Type:* str

Filter by import path (case-sensitive literal substring match).

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/cloudflare/cloudflare/5.29.0/docs/data-sources/zero_trust_cws_tenant_structures#import_path DataCloudflareZeroTrustCwsTenantStructures#import_path}

---

##### `max_items`<sup>Optional</sup> <a name="max_items" id="@cdktn/provider-cloudflare.dataCloudflareZeroTrustCwsTenantStructures.DataCloudflareZeroTrustCwsTenantStructuresConfig.property.maxItems"></a>

```python
max_items: typing.Union[int, float]
```

- *Type:* typing.Union[int, float]

Max items to fetch, default: 1000.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/cloudflare/cloudflare/5.29.0/docs/data-sources/zero_trust_cws_tenant_structures#max_items DataCloudflareZeroTrustCwsTenantStructures#max_items}

---

##### `name`<sup>Optional</sup> <a name="name" id="@cdktn/provider-cloudflare.dataCloudflareZeroTrustCwsTenantStructures.DataCloudflareZeroTrustCwsTenantStructuresConfig.property.name"></a>

```python
name: str
```

- *Type:* str

Filter by tenant structure name (case-insensitive substring match).

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/cloudflare/cloudflare/5.29.0/docs/data-sources/zero_trust_cws_tenant_structures#name DataCloudflareZeroTrustCwsTenantStructures#name}

---

##### `order`<sup>Optional</sup> <a name="order" id="@cdktn/provider-cloudflare.dataCloudflareZeroTrustCwsTenantStructures.DataCloudflareZeroTrustCwsTenantStructuresConfig.property.order"></a>

```python
order: str
```

- *Type:* str

Field to order results by (default: created_at) Available values: "name", "created_at", "updated_at".

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/cloudflare/cloudflare/5.29.0/docs/data-sources/zero_trust_cws_tenant_structures#order DataCloudflareZeroTrustCwsTenantStructures#order}

---

### DataCloudflareZeroTrustCwsTenantStructuresResult <a name="DataCloudflareZeroTrustCwsTenantStructuresResult" id="@cdktn/provider-cloudflare.dataCloudflareZeroTrustCwsTenantStructures.DataCloudflareZeroTrustCwsTenantStructuresResult"></a>

#### Initializer <a name="Initializer" id="@cdktn/provider-cloudflare.dataCloudflareZeroTrustCwsTenantStructures.DataCloudflareZeroTrustCwsTenantStructuresResult.Initializer"></a>

```python
from cdktn_provider_cloudflare import data_cloudflare_zero_trust_cws_tenant_structures

dataCloudflareZeroTrustCwsTenantStructures.DataCloudflareZeroTrustCwsTenantStructuresResult()
```


## Classes <a name="Classes" id="Classes"></a>

### DataCloudflareZeroTrustCwsTenantStructuresResultList <a name="DataCloudflareZeroTrustCwsTenantStructuresResultList" id="@cdktn/provider-cloudflare.dataCloudflareZeroTrustCwsTenantStructures.DataCloudflareZeroTrustCwsTenantStructuresResultList"></a>

#### Initializers <a name="Initializers" id="@cdktn/provider-cloudflare.dataCloudflareZeroTrustCwsTenantStructures.DataCloudflareZeroTrustCwsTenantStructuresResultList.Initializer"></a>

```python
from cdktn_provider_cloudflare import data_cloudflare_zero_trust_cws_tenant_structures

dataCloudflareZeroTrustCwsTenantStructures.DataCloudflareZeroTrustCwsTenantStructuresResultList(
  terraform_resource: IInterpolatingParent,
  terraform_attribute: str,
  wraps_set: bool
)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-cloudflare.dataCloudflareZeroTrustCwsTenantStructures.DataCloudflareZeroTrustCwsTenantStructuresResultList.Initializer.parameter.terraformResource">terraform_resource</a></code> | <code>cdktn.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktn/provider-cloudflare.dataCloudflareZeroTrustCwsTenantStructures.DataCloudflareZeroTrustCwsTenantStructuresResultList.Initializer.parameter.terraformAttribute">terraform_attribute</a></code> | <code>str</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#@cdktn/provider-cloudflare.dataCloudflareZeroTrustCwsTenantStructures.DataCloudflareZeroTrustCwsTenantStructuresResultList.Initializer.parameter.wrapsSet">wraps_set</a></code> | <code>bool</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraform_resource`<sup>Required</sup> <a name="terraform_resource" id="@cdktn/provider-cloudflare.dataCloudflareZeroTrustCwsTenantStructures.DataCloudflareZeroTrustCwsTenantStructuresResultList.Initializer.parameter.terraformResource"></a>

- *Type:* cdktn.IInterpolatingParent

The parent resource.

---

##### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-cloudflare.dataCloudflareZeroTrustCwsTenantStructures.DataCloudflareZeroTrustCwsTenantStructuresResultList.Initializer.parameter.terraformAttribute"></a>

- *Type:* str

The attribute on the parent resource this class is referencing.

---

##### `wraps_set`<sup>Required</sup> <a name="wraps_set" id="@cdktn/provider-cloudflare.dataCloudflareZeroTrustCwsTenantStructures.DataCloudflareZeroTrustCwsTenantStructuresResultList.Initializer.parameter.wrapsSet"></a>

- *Type:* bool

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-cloudflare.dataCloudflareZeroTrustCwsTenantStructures.DataCloudflareZeroTrustCwsTenantStructuresResultList.allWithMapKey">all_with_map_key</a></code> | Creating an iterator for this complex list. |
| <code><a href="#@cdktn/provider-cloudflare.dataCloudflareZeroTrustCwsTenantStructures.DataCloudflareZeroTrustCwsTenantStructuresResultList.computeFqn">compute_fqn</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-cloudflare.dataCloudflareZeroTrustCwsTenantStructures.DataCloudflareZeroTrustCwsTenantStructuresResultList.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktn/provider-cloudflare.dataCloudflareZeroTrustCwsTenantStructures.DataCloudflareZeroTrustCwsTenantStructuresResultList.toString">to_string</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktn/provider-cloudflare.dataCloudflareZeroTrustCwsTenantStructures.DataCloudflareZeroTrustCwsTenantStructuresResultList.get">get</a></code> | *No description.* |

---

##### `all_with_map_key` <a name="all_with_map_key" id="@cdktn/provider-cloudflare.dataCloudflareZeroTrustCwsTenantStructures.DataCloudflareZeroTrustCwsTenantStructuresResultList.allWithMapKey"></a>

```python
def all_with_map_key(
  map_key_attribute_name: str
) -> DynamicListTerraformIterator
```

Creating an iterator for this complex list.

The list will be converted into a map with the mapKeyAttributeName as the key.

###### `map_key_attribute_name`<sup>Required</sup> <a name="map_key_attribute_name" id="@cdktn/provider-cloudflare.dataCloudflareZeroTrustCwsTenantStructures.DataCloudflareZeroTrustCwsTenantStructuresResultList.allWithMapKey.parameter.mapKeyAttributeName"></a>

- *Type:* str

---

##### `compute_fqn` <a name="compute_fqn" id="@cdktn/provider-cloudflare.dataCloudflareZeroTrustCwsTenantStructures.DataCloudflareZeroTrustCwsTenantStructuresResultList.computeFqn"></a>

```python
def compute_fqn() -> str
```

##### `resolve` <a name="resolve" id="@cdktn/provider-cloudflare.dataCloudflareZeroTrustCwsTenantStructures.DataCloudflareZeroTrustCwsTenantStructuresResultList.resolve"></a>

```python
def resolve(
  _context: IResolveContext
) -> typing.Any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktn/provider-cloudflare.dataCloudflareZeroTrustCwsTenantStructures.DataCloudflareZeroTrustCwsTenantStructuresResultList.resolve.parameter._context"></a>

- *Type:* cdktn.IResolveContext

---

##### `to_string` <a name="to_string" id="@cdktn/provider-cloudflare.dataCloudflareZeroTrustCwsTenantStructures.DataCloudflareZeroTrustCwsTenantStructuresResultList.toString"></a>

```python
def to_string() -> str
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `get` <a name="get" id="@cdktn/provider-cloudflare.dataCloudflareZeroTrustCwsTenantStructures.DataCloudflareZeroTrustCwsTenantStructuresResultList.get"></a>

```python
def get(
  index: typing.Union[int, float]
) -> DataCloudflareZeroTrustCwsTenantStructuresResultOutputReference
```

###### `index`<sup>Required</sup> <a name="index" id="@cdktn/provider-cloudflare.dataCloudflareZeroTrustCwsTenantStructures.DataCloudflareZeroTrustCwsTenantStructuresResultList.get.parameter.index"></a>

- *Type:* typing.Union[int, float]

the index of the item to return.

---


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-cloudflare.dataCloudflareZeroTrustCwsTenantStructures.DataCloudflareZeroTrustCwsTenantStructuresResultList.property.creationStack">creation_stack</a></code> | <code>typing.List[str]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktn/provider-cloudflare.dataCloudflareZeroTrustCwsTenantStructures.DataCloudflareZeroTrustCwsTenantStructuresResultList.property.fqn">fqn</a></code> | <code>str</code> | *No description.* |

---

##### `creation_stack`<sup>Required</sup> <a name="creation_stack" id="@cdktn/provider-cloudflare.dataCloudflareZeroTrustCwsTenantStructures.DataCloudflareZeroTrustCwsTenantStructuresResultList.property.creationStack"></a>

```python
creation_stack: typing.List[str]
```

- *Type:* typing.List[str]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktn/provider-cloudflare.dataCloudflareZeroTrustCwsTenantStructures.DataCloudflareZeroTrustCwsTenantStructuresResultList.property.fqn"></a>

```python
fqn: str
```

- *Type:* str

---


### DataCloudflareZeroTrustCwsTenantStructuresResultOutputReference <a name="DataCloudflareZeroTrustCwsTenantStructuresResultOutputReference" id="@cdktn/provider-cloudflare.dataCloudflareZeroTrustCwsTenantStructures.DataCloudflareZeroTrustCwsTenantStructuresResultOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktn/provider-cloudflare.dataCloudflareZeroTrustCwsTenantStructures.DataCloudflareZeroTrustCwsTenantStructuresResultOutputReference.Initializer"></a>

```python
from cdktn_provider_cloudflare import data_cloudflare_zero_trust_cws_tenant_structures

dataCloudflareZeroTrustCwsTenantStructures.DataCloudflareZeroTrustCwsTenantStructuresResultOutputReference(
  terraform_resource: IInterpolatingParent,
  terraform_attribute: str,
  complex_object_index: typing.Union[int, float],
  complex_object_is_from_set: bool
)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-cloudflare.dataCloudflareZeroTrustCwsTenantStructures.DataCloudflareZeroTrustCwsTenantStructuresResultOutputReference.Initializer.parameter.terraformResource">terraform_resource</a></code> | <code>cdktn.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktn/provider-cloudflare.dataCloudflareZeroTrustCwsTenantStructures.DataCloudflareZeroTrustCwsTenantStructuresResultOutputReference.Initializer.parameter.terraformAttribute">terraform_attribute</a></code> | <code>str</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#@cdktn/provider-cloudflare.dataCloudflareZeroTrustCwsTenantStructures.DataCloudflareZeroTrustCwsTenantStructuresResultOutputReference.Initializer.parameter.complexObjectIndex">complex_object_index</a></code> | <code>typing.Union[int, float]</code> | the index of this item in the list. |
| <code><a href="#@cdktn/provider-cloudflare.dataCloudflareZeroTrustCwsTenantStructures.DataCloudflareZeroTrustCwsTenantStructuresResultOutputReference.Initializer.parameter.complexObjectIsFromSet">complex_object_is_from_set</a></code> | <code>bool</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraform_resource`<sup>Required</sup> <a name="terraform_resource" id="@cdktn/provider-cloudflare.dataCloudflareZeroTrustCwsTenantStructures.DataCloudflareZeroTrustCwsTenantStructuresResultOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* cdktn.IInterpolatingParent

The parent resource.

---

##### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-cloudflare.dataCloudflareZeroTrustCwsTenantStructures.DataCloudflareZeroTrustCwsTenantStructuresResultOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* str

The attribute on the parent resource this class is referencing.

---

##### `complex_object_index`<sup>Required</sup> <a name="complex_object_index" id="@cdktn/provider-cloudflare.dataCloudflareZeroTrustCwsTenantStructures.DataCloudflareZeroTrustCwsTenantStructuresResultOutputReference.Initializer.parameter.complexObjectIndex"></a>

- *Type:* typing.Union[int, float]

the index of this item in the list.

---

##### `complex_object_is_from_set`<sup>Required</sup> <a name="complex_object_is_from_set" id="@cdktn/provider-cloudflare.dataCloudflareZeroTrustCwsTenantStructures.DataCloudflareZeroTrustCwsTenantStructuresResultOutputReference.Initializer.parameter.complexObjectIsFromSet"></a>

- *Type:* bool

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-cloudflare.dataCloudflareZeroTrustCwsTenantStructures.DataCloudflareZeroTrustCwsTenantStructuresResultOutputReference.computeFqn">compute_fqn</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-cloudflare.dataCloudflareZeroTrustCwsTenantStructures.DataCloudflareZeroTrustCwsTenantStructuresResultOutputReference.getAnyMapAttribute">get_any_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-cloudflare.dataCloudflareZeroTrustCwsTenantStructures.DataCloudflareZeroTrustCwsTenantStructuresResultOutputReference.getBooleanAttribute">get_boolean_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-cloudflare.dataCloudflareZeroTrustCwsTenantStructures.DataCloudflareZeroTrustCwsTenantStructuresResultOutputReference.getBooleanMapAttribute">get_boolean_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-cloudflare.dataCloudflareZeroTrustCwsTenantStructures.DataCloudflareZeroTrustCwsTenantStructuresResultOutputReference.getListAttribute">get_list_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-cloudflare.dataCloudflareZeroTrustCwsTenantStructures.DataCloudflareZeroTrustCwsTenantStructuresResultOutputReference.getNumberAttribute">get_number_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-cloudflare.dataCloudflareZeroTrustCwsTenantStructures.DataCloudflareZeroTrustCwsTenantStructuresResultOutputReference.getNumberListAttribute">get_number_list_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-cloudflare.dataCloudflareZeroTrustCwsTenantStructures.DataCloudflareZeroTrustCwsTenantStructuresResultOutputReference.getNumberMapAttribute">get_number_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-cloudflare.dataCloudflareZeroTrustCwsTenantStructures.DataCloudflareZeroTrustCwsTenantStructuresResultOutputReference.getStringAttribute">get_string_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-cloudflare.dataCloudflareZeroTrustCwsTenantStructures.DataCloudflareZeroTrustCwsTenantStructuresResultOutputReference.getStringMapAttribute">get_string_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-cloudflare.dataCloudflareZeroTrustCwsTenantStructures.DataCloudflareZeroTrustCwsTenantStructuresResultOutputReference.interpolationForAttribute">interpolation_for_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-cloudflare.dataCloudflareZeroTrustCwsTenantStructures.DataCloudflareZeroTrustCwsTenantStructuresResultOutputReference.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktn/provider-cloudflare.dataCloudflareZeroTrustCwsTenantStructures.DataCloudflareZeroTrustCwsTenantStructuresResultOutputReference.toString">to_string</a></code> | Return a string representation of this resolvable object. |

---

##### `compute_fqn` <a name="compute_fqn" id="@cdktn/provider-cloudflare.dataCloudflareZeroTrustCwsTenantStructures.DataCloudflareZeroTrustCwsTenantStructuresResultOutputReference.computeFqn"></a>

```python
def compute_fqn() -> str
```

##### `get_any_map_attribute` <a name="get_any_map_attribute" id="@cdktn/provider-cloudflare.dataCloudflareZeroTrustCwsTenantStructures.DataCloudflareZeroTrustCwsTenantStructuresResultOutputReference.getAnyMapAttribute"></a>

```python
def get_any_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[typing.Any]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-cloudflare.dataCloudflareZeroTrustCwsTenantStructures.DataCloudflareZeroTrustCwsTenantStructuresResultOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_boolean_attribute` <a name="get_boolean_attribute" id="@cdktn/provider-cloudflare.dataCloudflareZeroTrustCwsTenantStructures.DataCloudflareZeroTrustCwsTenantStructuresResultOutputReference.getBooleanAttribute"></a>

```python
def get_boolean_attribute(
  terraform_attribute: str
) -> IResolvable
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-cloudflare.dataCloudflareZeroTrustCwsTenantStructures.DataCloudflareZeroTrustCwsTenantStructuresResultOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_boolean_map_attribute` <a name="get_boolean_map_attribute" id="@cdktn/provider-cloudflare.dataCloudflareZeroTrustCwsTenantStructures.DataCloudflareZeroTrustCwsTenantStructuresResultOutputReference.getBooleanMapAttribute"></a>

```python
def get_boolean_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[bool]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-cloudflare.dataCloudflareZeroTrustCwsTenantStructures.DataCloudflareZeroTrustCwsTenantStructuresResultOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_list_attribute` <a name="get_list_attribute" id="@cdktn/provider-cloudflare.dataCloudflareZeroTrustCwsTenantStructures.DataCloudflareZeroTrustCwsTenantStructuresResultOutputReference.getListAttribute"></a>

```python
def get_list_attribute(
  terraform_attribute: str
) -> typing.List[str]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-cloudflare.dataCloudflareZeroTrustCwsTenantStructures.DataCloudflareZeroTrustCwsTenantStructuresResultOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_attribute` <a name="get_number_attribute" id="@cdktn/provider-cloudflare.dataCloudflareZeroTrustCwsTenantStructures.DataCloudflareZeroTrustCwsTenantStructuresResultOutputReference.getNumberAttribute"></a>

```python
def get_number_attribute(
  terraform_attribute: str
) -> typing.Union[int, float]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-cloudflare.dataCloudflareZeroTrustCwsTenantStructures.DataCloudflareZeroTrustCwsTenantStructuresResultOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_list_attribute` <a name="get_number_list_attribute" id="@cdktn/provider-cloudflare.dataCloudflareZeroTrustCwsTenantStructures.DataCloudflareZeroTrustCwsTenantStructuresResultOutputReference.getNumberListAttribute"></a>

```python
def get_number_list_attribute(
  terraform_attribute: str
) -> typing.List[typing.Union[int, float]]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-cloudflare.dataCloudflareZeroTrustCwsTenantStructures.DataCloudflareZeroTrustCwsTenantStructuresResultOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_map_attribute` <a name="get_number_map_attribute" id="@cdktn/provider-cloudflare.dataCloudflareZeroTrustCwsTenantStructures.DataCloudflareZeroTrustCwsTenantStructuresResultOutputReference.getNumberMapAttribute"></a>

```python
def get_number_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[typing.Union[int, float]]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-cloudflare.dataCloudflareZeroTrustCwsTenantStructures.DataCloudflareZeroTrustCwsTenantStructuresResultOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_string_attribute` <a name="get_string_attribute" id="@cdktn/provider-cloudflare.dataCloudflareZeroTrustCwsTenantStructures.DataCloudflareZeroTrustCwsTenantStructuresResultOutputReference.getStringAttribute"></a>

```python
def get_string_attribute(
  terraform_attribute: str
) -> str
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-cloudflare.dataCloudflareZeroTrustCwsTenantStructures.DataCloudflareZeroTrustCwsTenantStructuresResultOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_string_map_attribute` <a name="get_string_map_attribute" id="@cdktn/provider-cloudflare.dataCloudflareZeroTrustCwsTenantStructures.DataCloudflareZeroTrustCwsTenantStructuresResultOutputReference.getStringMapAttribute"></a>

```python
def get_string_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[str]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-cloudflare.dataCloudflareZeroTrustCwsTenantStructures.DataCloudflareZeroTrustCwsTenantStructuresResultOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `interpolation_for_attribute` <a name="interpolation_for_attribute" id="@cdktn/provider-cloudflare.dataCloudflareZeroTrustCwsTenantStructures.DataCloudflareZeroTrustCwsTenantStructuresResultOutputReference.interpolationForAttribute"></a>

```python
def interpolation_for_attribute(
  property: str
) -> IResolvable
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktn/provider-cloudflare.dataCloudflareZeroTrustCwsTenantStructures.DataCloudflareZeroTrustCwsTenantStructuresResultOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* str

---

##### `resolve` <a name="resolve" id="@cdktn/provider-cloudflare.dataCloudflareZeroTrustCwsTenantStructures.DataCloudflareZeroTrustCwsTenantStructuresResultOutputReference.resolve"></a>

```python
def resolve(
  _context: IResolveContext
) -> typing.Any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktn/provider-cloudflare.dataCloudflareZeroTrustCwsTenantStructures.DataCloudflareZeroTrustCwsTenantStructuresResultOutputReference.resolve.parameter._context"></a>

- *Type:* cdktn.IResolveContext

---

##### `to_string` <a name="to_string" id="@cdktn/provider-cloudflare.dataCloudflareZeroTrustCwsTenantStructures.DataCloudflareZeroTrustCwsTenantStructuresResultOutputReference.toString"></a>

```python
def to_string() -> str
```

Return a string representation of this resolvable object.

Returns a reversible string representation.


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-cloudflare.dataCloudflareZeroTrustCwsTenantStructures.DataCloudflareZeroTrustCwsTenantStructuresResultOutputReference.property.creationStack">creation_stack</a></code> | <code>typing.List[str]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktn/provider-cloudflare.dataCloudflareZeroTrustCwsTenantStructures.DataCloudflareZeroTrustCwsTenantStructuresResultOutputReference.property.fqn">fqn</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktn/provider-cloudflare.dataCloudflareZeroTrustCwsTenantStructures.DataCloudflareZeroTrustCwsTenantStructuresResultOutputReference.property.application">application</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktn/provider-cloudflare.dataCloudflareZeroTrustCwsTenantStructures.DataCloudflareZeroTrustCwsTenantStructuresResultOutputReference.property.createdAt">created_at</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktn/provider-cloudflare.dataCloudflareZeroTrustCwsTenantStructures.DataCloudflareZeroTrustCwsTenantStructuresResultOutputReference.property.id">id</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktn/provider-cloudflare.dataCloudflareZeroTrustCwsTenantStructures.DataCloudflareZeroTrustCwsTenantStructuresResultOutputReference.property.importPath">import_path</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktn/provider-cloudflare.dataCloudflareZeroTrustCwsTenantStructures.DataCloudflareZeroTrustCwsTenantStructuresResultOutputReference.property.name">name</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktn/provider-cloudflare.dataCloudflareZeroTrustCwsTenantStructures.DataCloudflareZeroTrustCwsTenantStructuresResultOutputReference.property.updatedAt">updated_at</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktn/provider-cloudflare.dataCloudflareZeroTrustCwsTenantStructures.DataCloudflareZeroTrustCwsTenantStructuresResultOutputReference.property.internalValue">internal_value</a></code> | <code><a href="#@cdktn/provider-cloudflare.dataCloudflareZeroTrustCwsTenantStructures.DataCloudflareZeroTrustCwsTenantStructuresResult">DataCloudflareZeroTrustCwsTenantStructuresResult</a></code> | *No description.* |

---

##### `creation_stack`<sup>Required</sup> <a name="creation_stack" id="@cdktn/provider-cloudflare.dataCloudflareZeroTrustCwsTenantStructures.DataCloudflareZeroTrustCwsTenantStructuresResultOutputReference.property.creationStack"></a>

```python
creation_stack: typing.List[str]
```

- *Type:* typing.List[str]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktn/provider-cloudflare.dataCloudflareZeroTrustCwsTenantStructures.DataCloudflareZeroTrustCwsTenantStructuresResultOutputReference.property.fqn"></a>

```python
fqn: str
```

- *Type:* str

---

##### `application`<sup>Required</sup> <a name="application" id="@cdktn/provider-cloudflare.dataCloudflareZeroTrustCwsTenantStructures.DataCloudflareZeroTrustCwsTenantStructuresResultOutputReference.property.application"></a>

```python
application: str
```

- *Type:* str

---

##### `created_at`<sup>Required</sup> <a name="created_at" id="@cdktn/provider-cloudflare.dataCloudflareZeroTrustCwsTenantStructures.DataCloudflareZeroTrustCwsTenantStructuresResultOutputReference.property.createdAt"></a>

```python
created_at: str
```

- *Type:* str

---

##### `id`<sup>Required</sup> <a name="id" id="@cdktn/provider-cloudflare.dataCloudflareZeroTrustCwsTenantStructures.DataCloudflareZeroTrustCwsTenantStructuresResultOutputReference.property.id"></a>

```python
id: str
```

- *Type:* str

---

##### `import_path`<sup>Required</sup> <a name="import_path" id="@cdktn/provider-cloudflare.dataCloudflareZeroTrustCwsTenantStructures.DataCloudflareZeroTrustCwsTenantStructuresResultOutputReference.property.importPath"></a>

```python
import_path: str
```

- *Type:* str

---

##### `name`<sup>Required</sup> <a name="name" id="@cdktn/provider-cloudflare.dataCloudflareZeroTrustCwsTenantStructures.DataCloudflareZeroTrustCwsTenantStructuresResultOutputReference.property.name"></a>

```python
name: str
```

- *Type:* str

---

##### `updated_at`<sup>Required</sup> <a name="updated_at" id="@cdktn/provider-cloudflare.dataCloudflareZeroTrustCwsTenantStructures.DataCloudflareZeroTrustCwsTenantStructuresResultOutputReference.property.updatedAt"></a>

```python
updated_at: str
```

- *Type:* str

---

##### `internal_value`<sup>Optional</sup> <a name="internal_value" id="@cdktn/provider-cloudflare.dataCloudflareZeroTrustCwsTenantStructures.DataCloudflareZeroTrustCwsTenantStructuresResultOutputReference.property.internalValue"></a>

```python
internal_value: DataCloudflareZeroTrustCwsTenantStructuresResult
```

- *Type:* <a href="#@cdktn/provider-cloudflare.dataCloudflareZeroTrustCwsTenantStructures.DataCloudflareZeroTrustCwsTenantStructuresResult">DataCloudflareZeroTrustCwsTenantStructuresResult</a>

---



