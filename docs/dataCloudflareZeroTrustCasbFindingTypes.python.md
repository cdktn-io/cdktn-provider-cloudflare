# `dataCloudflareZeroTrustCasbFindingTypes` Submodule <a name="`dataCloudflareZeroTrustCasbFindingTypes` Submodule" id="@cdktn/provider-cloudflare.dataCloudflareZeroTrustCasbFindingTypes"></a>

## Constructs <a name="Constructs" id="Constructs"></a>

### DataCloudflareZeroTrustCasbFindingTypes <a name="DataCloudflareZeroTrustCasbFindingTypes" id="@cdktn/provider-cloudflare.dataCloudflareZeroTrustCasbFindingTypes.DataCloudflareZeroTrustCasbFindingTypes"></a>

Represents a {@link https://registry.terraform.io/providers/cloudflare/cloudflare/5.29.0/docs/data-sources/zero_trust_casb_finding_types cloudflare_zero_trust_casb_finding_types}.

#### Initializers <a name="Initializers" id="@cdktn/provider-cloudflare.dataCloudflareZeroTrustCasbFindingTypes.DataCloudflareZeroTrustCasbFindingTypes.Initializer"></a>

```python
from cdktn_provider_cloudflare import data_cloudflare_zero_trust_casb_finding_types

dataCloudflareZeroTrustCasbFindingTypes.DataCloudflareZeroTrustCasbFindingTypes(
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
  max_items: typing.Union[int, float] = None,
  max_updated_at: str = None,
  min_updated_at: str = None,
  order: str = None,
  origins: typing.List[str] = None,
  quarantined: bool | IResolvable = None,
  search: str = None,
  severities: typing.List[str] = None,
  types: typing.List[str] = None,
  vendors: typing.List[str] = None
)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-cloudflare.dataCloudflareZeroTrustCasbFindingTypes.DataCloudflareZeroTrustCasbFindingTypes.Initializer.parameter.scope">scope</a></code> | <code>constructs.Construct</code> | The scope in which to define this construct. |
| <code><a href="#@cdktn/provider-cloudflare.dataCloudflareZeroTrustCasbFindingTypes.DataCloudflareZeroTrustCasbFindingTypes.Initializer.parameter.id">id</a></code> | <code>str</code> | The scoped construct ID. |
| <code><a href="#@cdktn/provider-cloudflare.dataCloudflareZeroTrustCasbFindingTypes.DataCloudflareZeroTrustCasbFindingTypes.Initializer.parameter.connection">connection</a></code> | <code>cdktn.SSHProvisionerConnection \| cdktn.WinrmProvisionerConnection</code> | *No description.* |
| <code><a href="#@cdktn/provider-cloudflare.dataCloudflareZeroTrustCasbFindingTypes.DataCloudflareZeroTrustCasbFindingTypes.Initializer.parameter.count">count</a></code> | <code>typing.Union[int, float] \| cdktn.TerraformCount</code> | *No description.* |
| <code><a href="#@cdktn/provider-cloudflare.dataCloudflareZeroTrustCasbFindingTypes.DataCloudflareZeroTrustCasbFindingTypes.Initializer.parameter.dependsOn">depends_on</a></code> | <code>typing.List[cdktn.ITerraformDependable]</code> | *No description.* |
| <code><a href="#@cdktn/provider-cloudflare.dataCloudflareZeroTrustCasbFindingTypes.DataCloudflareZeroTrustCasbFindingTypes.Initializer.parameter.forEach">for_each</a></code> | <code>cdktn.ITerraformIterator</code> | *No description.* |
| <code><a href="#@cdktn/provider-cloudflare.dataCloudflareZeroTrustCasbFindingTypes.DataCloudflareZeroTrustCasbFindingTypes.Initializer.parameter.lifecycle">lifecycle</a></code> | <code>cdktn.TerraformResourceLifecycle</code> | *No description.* |
| <code><a href="#@cdktn/provider-cloudflare.dataCloudflareZeroTrustCasbFindingTypes.DataCloudflareZeroTrustCasbFindingTypes.Initializer.parameter.provider">provider</a></code> | <code>cdktn.TerraformProvider</code> | *No description.* |
| <code><a href="#@cdktn/provider-cloudflare.dataCloudflareZeroTrustCasbFindingTypes.DataCloudflareZeroTrustCasbFindingTypes.Initializer.parameter.provisioners">provisioners</a></code> | <code>typing.List[cdktn.FileProvisioner \| cdktn.LocalExecProvisioner \| cdktn.RemoteExecProvisioner]</code> | *No description.* |
| <code><a href="#@cdktn/provider-cloudflare.dataCloudflareZeroTrustCasbFindingTypes.DataCloudflareZeroTrustCasbFindingTypes.Initializer.parameter.accountId">account_id</a></code> | <code>str</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/cloudflare/cloudflare/5.29.0/docs/data-sources/zero_trust_casb_finding_types#account_id DataCloudflareZeroTrustCasbFindingTypes#account_id}. |
| <code><a href="#@cdktn/provider-cloudflare.dataCloudflareZeroTrustCasbFindingTypes.DataCloudflareZeroTrustCasbFindingTypes.Initializer.parameter.direction">direction</a></code> | <code>str</code> | Sort direction for the primary field. |
| <code><a href="#@cdktn/provider-cloudflare.dataCloudflareZeroTrustCasbFindingTypes.DataCloudflareZeroTrustCasbFindingTypes.Initializer.parameter.maxItems">max_items</a></code> | <code>typing.Union[int, float]</code> | Max items to fetch, default: 1000. |
| <code><a href="#@cdktn/provider-cloudflare.dataCloudflareZeroTrustCasbFindingTypes.DataCloudflareZeroTrustCasbFindingTypes.Initializer.parameter.maxUpdatedAt">max_updated_at</a></code> | <code>str</code> | Return only finding types updated at or before this RFC 3339 timestamp (inclusive). |
| <code><a href="#@cdktn/provider-cloudflare.dataCloudflareZeroTrustCasbFindingTypes.DataCloudflareZeroTrustCasbFindingTypes.Initializer.parameter.minUpdatedAt">min_updated_at</a></code> | <code>str</code> | Return only finding types updated at or after this RFC 3339 timestamp (inclusive). |
| <code><a href="#@cdktn/provider-cloudflare.dataCloudflareZeroTrustCasbFindingTypes.DataCloudflareZeroTrustCasbFindingTypes.Initializer.parameter.order">order</a></code> | <code>str</code> | Field to sort by (case-insensitive). |
| <code><a href="#@cdktn/provider-cloudflare.dataCloudflareZeroTrustCasbFindingTypes.DataCloudflareZeroTrustCasbFindingTypes.Initializer.parameter.origins">origins</a></code> | <code>typing.List[str]</code> | Filter finding types by origin. Supports multiple comma-separated, case-insensitive values. |
| <code><a href="#@cdktn/provider-cloudflare.dataCloudflareZeroTrustCasbFindingTypes.DataCloudflareZeroTrustCasbFindingTypes.Initializer.parameter.quarantined">quarantined</a></code> | <code>bool \| cdktn.IResolvable</code> | When true, return only quarantined finding types; when false, return only non-quarantined finding types. Omit to return both. |
| <code><a href="#@cdktn/provider-cloudflare.dataCloudflareZeroTrustCasbFindingTypes.DataCloudflareZeroTrustCasbFindingTypes.Initializer.parameter.search">search</a></code> | <code>str</code> | Filter finding types by name or ID (case-insensitive substring match). |
| <code><a href="#@cdktn/provider-cloudflare.dataCloudflareZeroTrustCasbFindingTypes.DataCloudflareZeroTrustCasbFindingTypes.Initializer.parameter.severities">severities</a></code> | <code>typing.List[str]</code> | Filter finding types by severity. Supports multiple comma-separated, case-insensitive values. |
| <code><a href="#@cdktn/provider-cloudflare.dataCloudflareZeroTrustCasbFindingTypes.DataCloudflareZeroTrustCasbFindingTypes.Initializer.parameter.types">types</a></code> | <code>typing.List[str]</code> | Filter finding types by category type. Supports multiple comma-separated, case-insensitive values. |
| <code><a href="#@cdktn/provider-cloudflare.dataCloudflareZeroTrustCasbFindingTypes.DataCloudflareZeroTrustCasbFindingTypes.Initializer.parameter.vendors">vendors</a></code> | <code>typing.List[str]</code> | Filter finding types by vendor. |

---

##### `scope`<sup>Required</sup> <a name="scope" id="@cdktn/provider-cloudflare.dataCloudflareZeroTrustCasbFindingTypes.DataCloudflareZeroTrustCasbFindingTypes.Initializer.parameter.scope"></a>

- *Type:* constructs.Construct

The scope in which to define this construct.

---

##### `id`<sup>Required</sup> <a name="id" id="@cdktn/provider-cloudflare.dataCloudflareZeroTrustCasbFindingTypes.DataCloudflareZeroTrustCasbFindingTypes.Initializer.parameter.id"></a>

- *Type:* str

The scoped construct ID.

Must be unique amongst siblings in the same scope

---

##### `connection`<sup>Optional</sup> <a name="connection" id="@cdktn/provider-cloudflare.dataCloudflareZeroTrustCasbFindingTypes.DataCloudflareZeroTrustCasbFindingTypes.Initializer.parameter.connection"></a>

- *Type:* cdktn.SSHProvisionerConnection | cdktn.WinrmProvisionerConnection

---

##### `count`<sup>Optional</sup> <a name="count" id="@cdktn/provider-cloudflare.dataCloudflareZeroTrustCasbFindingTypes.DataCloudflareZeroTrustCasbFindingTypes.Initializer.parameter.count"></a>

- *Type:* typing.Union[int, float] | cdktn.TerraformCount

---

##### `depends_on`<sup>Optional</sup> <a name="depends_on" id="@cdktn/provider-cloudflare.dataCloudflareZeroTrustCasbFindingTypes.DataCloudflareZeroTrustCasbFindingTypes.Initializer.parameter.dependsOn"></a>

- *Type:* typing.List[cdktn.ITerraformDependable]

---

##### `for_each`<sup>Optional</sup> <a name="for_each" id="@cdktn/provider-cloudflare.dataCloudflareZeroTrustCasbFindingTypes.DataCloudflareZeroTrustCasbFindingTypes.Initializer.parameter.forEach"></a>

- *Type:* cdktn.ITerraformIterator

---

##### `lifecycle`<sup>Optional</sup> <a name="lifecycle" id="@cdktn/provider-cloudflare.dataCloudflareZeroTrustCasbFindingTypes.DataCloudflareZeroTrustCasbFindingTypes.Initializer.parameter.lifecycle"></a>

- *Type:* cdktn.TerraformResourceLifecycle

---

##### `provider`<sup>Optional</sup> <a name="provider" id="@cdktn/provider-cloudflare.dataCloudflareZeroTrustCasbFindingTypes.DataCloudflareZeroTrustCasbFindingTypes.Initializer.parameter.provider"></a>

- *Type:* cdktn.TerraformProvider

---

##### `provisioners`<sup>Optional</sup> <a name="provisioners" id="@cdktn/provider-cloudflare.dataCloudflareZeroTrustCasbFindingTypes.DataCloudflareZeroTrustCasbFindingTypes.Initializer.parameter.provisioners"></a>

- *Type:* typing.List[cdktn.FileProvisioner | cdktn.LocalExecProvisioner | cdktn.RemoteExecProvisioner]

---

##### `account_id`<sup>Required</sup> <a name="account_id" id="@cdktn/provider-cloudflare.dataCloudflareZeroTrustCasbFindingTypes.DataCloudflareZeroTrustCasbFindingTypes.Initializer.parameter.accountId"></a>

- *Type:* str

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/cloudflare/cloudflare/5.29.0/docs/data-sources/zero_trust_casb_finding_types#account_id DataCloudflareZeroTrustCasbFindingTypes#account_id}.

---

##### `direction`<sup>Optional</sup> <a name="direction" id="@cdktn/provider-cloudflare.dataCloudflareZeroTrustCasbFindingTypes.DataCloudflareZeroTrustCasbFindingTypes.Initializer.parameter.direction"></a>

- *Type:* str

Sort direction for the primary field.

Defaults to 'desc'.
Ties are resolved by case-insensitive name, then ID, both ascending regardless of direction.
Available values: "asc", "desc".

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/cloudflare/cloudflare/5.29.0/docs/data-sources/zero_trust_casb_finding_types#direction DataCloudflareZeroTrustCasbFindingTypes#direction}

---

##### `max_items`<sup>Optional</sup> <a name="max_items" id="@cdktn/provider-cloudflare.dataCloudflareZeroTrustCasbFindingTypes.DataCloudflareZeroTrustCasbFindingTypes.Initializer.parameter.maxItems"></a>

- *Type:* typing.Union[int, float]

Max items to fetch, default: 1000.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/cloudflare/cloudflare/5.29.0/docs/data-sources/zero_trust_casb_finding_types#max_items DataCloudflareZeroTrustCasbFindingTypes#max_items}

---

##### `max_updated_at`<sup>Optional</sup> <a name="max_updated_at" id="@cdktn/provider-cloudflare.dataCloudflareZeroTrustCasbFindingTypes.DataCloudflareZeroTrustCasbFindingTypes.Initializer.parameter.maxUpdatedAt"></a>

- *Type:* str

Return only finding types updated at or before this RFC 3339 timestamp (inclusive).

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/cloudflare/cloudflare/5.29.0/docs/data-sources/zero_trust_casb_finding_types#max_updated_at DataCloudflareZeroTrustCasbFindingTypes#max_updated_at}

---

##### `min_updated_at`<sup>Optional</sup> <a name="min_updated_at" id="@cdktn/provider-cloudflare.dataCloudflareZeroTrustCasbFindingTypes.DataCloudflareZeroTrustCasbFindingTypes.Initializer.parameter.minUpdatedAt"></a>

- *Type:* str

Return only finding types updated at or after this RFC 3339 timestamp (inclusive).

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/cloudflare/cloudflare/5.29.0/docs/data-sources/zero_trust_casb_finding_types#min_updated_at DataCloudflareZeroTrustCasbFindingTypes#min_updated_at}

---

##### `order`<sup>Optional</sup> <a name="order" id="@cdktn/provider-cloudflare.dataCloudflareZeroTrustCasbFindingTypes.DataCloudflareZeroTrustCasbFindingTypes.Initializer.parameter.order"></a>

- *Type:* str

Field to sort by (case-insensitive).

Defaults to 'created'.
Name and vendor sorting is case-insensitive; vendor uses friendly provider names.
Ascending order: type Content then Posture; origin custom then system;
severity Low, Medium, High, Critical.
Available values: "created", "updated", "match_count", "name", "vendor", "type", "origin", "severity".

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/cloudflare/cloudflare/5.29.0/docs/data-sources/zero_trust_casb_finding_types#order DataCloudflareZeroTrustCasbFindingTypes#order}

---

##### `origins`<sup>Optional</sup> <a name="origins" id="@cdktn/provider-cloudflare.dataCloudflareZeroTrustCasbFindingTypes.DataCloudflareZeroTrustCasbFindingTypes.Initializer.parameter.origins"></a>

- *Type:* typing.List[str]

Filter finding types by origin. Supports multiple comma-separated, case-insensitive values.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/cloudflare/cloudflare/5.29.0/docs/data-sources/zero_trust_casb_finding_types#origins DataCloudflareZeroTrustCasbFindingTypes#origins}

---

##### `quarantined`<sup>Optional</sup> <a name="quarantined" id="@cdktn/provider-cloudflare.dataCloudflareZeroTrustCasbFindingTypes.DataCloudflareZeroTrustCasbFindingTypes.Initializer.parameter.quarantined"></a>

- *Type:* bool | cdktn.IResolvable

When true, return only quarantined finding types; when false, return only non-quarantined finding types. Omit to return both.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/cloudflare/cloudflare/5.29.0/docs/data-sources/zero_trust_casb_finding_types#quarantined DataCloudflareZeroTrustCasbFindingTypes#quarantined}

---

##### `search`<sup>Optional</sup> <a name="search" id="@cdktn/provider-cloudflare.dataCloudflareZeroTrustCasbFindingTypes.DataCloudflareZeroTrustCasbFindingTypes.Initializer.parameter.search"></a>

- *Type:* str

Filter finding types by name or ID (case-insensitive substring match).

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/cloudflare/cloudflare/5.29.0/docs/data-sources/zero_trust_casb_finding_types#search DataCloudflareZeroTrustCasbFindingTypes#search}

---

##### `severities`<sup>Optional</sup> <a name="severities" id="@cdktn/provider-cloudflare.dataCloudflareZeroTrustCasbFindingTypes.DataCloudflareZeroTrustCasbFindingTypes.Initializer.parameter.severities"></a>

- *Type:* typing.List[str]

Filter finding types by severity. Supports multiple comma-separated, case-insensitive values.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/cloudflare/cloudflare/5.29.0/docs/data-sources/zero_trust_casb_finding_types#severities DataCloudflareZeroTrustCasbFindingTypes#severities}

---

##### `types`<sup>Optional</sup> <a name="types" id="@cdktn/provider-cloudflare.dataCloudflareZeroTrustCasbFindingTypes.DataCloudflareZeroTrustCasbFindingTypes.Initializer.parameter.types"></a>

- *Type:* typing.List[str]

Filter finding types by category type. Supports multiple comma-separated, case-insensitive values.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/cloudflare/cloudflare/5.29.0/docs/data-sources/zero_trust_casb_finding_types#types DataCloudflareZeroTrustCasbFindingTypes#types}

---

##### `vendors`<sup>Optional</sup> <a name="vendors" id="@cdktn/provider-cloudflare.dataCloudflareZeroTrustCasbFindingTypes.DataCloudflareZeroTrustCasbFindingTypes.Initializer.parameter.vendors"></a>

- *Type:* typing.List[str]

Filter finding types by vendor.

Supports multiple comma-separated values. Each value may be either the vendor enum (GOOGLE_WORKSPACE) or the friendly name returned by the read routes (Google Workspace).

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/cloudflare/cloudflare/5.29.0/docs/data-sources/zero_trust_casb_finding_types#vendors DataCloudflareZeroTrustCasbFindingTypes#vendors}

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-cloudflare.dataCloudflareZeroTrustCasbFindingTypes.DataCloudflareZeroTrustCasbFindingTypes.toString">to_string</a></code> | Returns a string representation of this construct. |
| <code><a href="#@cdktn/provider-cloudflare.dataCloudflareZeroTrustCasbFindingTypes.DataCloudflareZeroTrustCasbFindingTypes.with">with</a></code> | Applies one or more mixins to this construct. |
| <code><a href="#@cdktn/provider-cloudflare.dataCloudflareZeroTrustCasbFindingTypes.DataCloudflareZeroTrustCasbFindingTypes.addOverride">add_override</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-cloudflare.dataCloudflareZeroTrustCasbFindingTypes.DataCloudflareZeroTrustCasbFindingTypes.overrideLogicalId">override_logical_id</a></code> | Overrides the auto-generated logical ID with a specific ID. |
| <code><a href="#@cdktn/provider-cloudflare.dataCloudflareZeroTrustCasbFindingTypes.DataCloudflareZeroTrustCasbFindingTypes.resetOverrideLogicalId">reset_override_logical_id</a></code> | Resets a previously passed logical Id to use the auto-generated logical id again. |
| <code><a href="#@cdktn/provider-cloudflare.dataCloudflareZeroTrustCasbFindingTypes.DataCloudflareZeroTrustCasbFindingTypes.toHclTerraform">to_hcl_terraform</a></code> | Adds this resource to the terraform JSON output. |
| <code><a href="#@cdktn/provider-cloudflare.dataCloudflareZeroTrustCasbFindingTypes.DataCloudflareZeroTrustCasbFindingTypes.toMetadata">to_metadata</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-cloudflare.dataCloudflareZeroTrustCasbFindingTypes.DataCloudflareZeroTrustCasbFindingTypes.toTerraform">to_terraform</a></code> | Adds this resource to the terraform JSON output. |
| <code><a href="#@cdktn/provider-cloudflare.dataCloudflareZeroTrustCasbFindingTypes.DataCloudflareZeroTrustCasbFindingTypes.getAnyMapAttribute">get_any_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-cloudflare.dataCloudflareZeroTrustCasbFindingTypes.DataCloudflareZeroTrustCasbFindingTypes.getBooleanAttribute">get_boolean_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-cloudflare.dataCloudflareZeroTrustCasbFindingTypes.DataCloudflareZeroTrustCasbFindingTypes.getBooleanMapAttribute">get_boolean_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-cloudflare.dataCloudflareZeroTrustCasbFindingTypes.DataCloudflareZeroTrustCasbFindingTypes.getListAttribute">get_list_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-cloudflare.dataCloudflareZeroTrustCasbFindingTypes.DataCloudflareZeroTrustCasbFindingTypes.getNumberAttribute">get_number_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-cloudflare.dataCloudflareZeroTrustCasbFindingTypes.DataCloudflareZeroTrustCasbFindingTypes.getNumberListAttribute">get_number_list_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-cloudflare.dataCloudflareZeroTrustCasbFindingTypes.DataCloudflareZeroTrustCasbFindingTypes.getNumberMapAttribute">get_number_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-cloudflare.dataCloudflareZeroTrustCasbFindingTypes.DataCloudflareZeroTrustCasbFindingTypes.getStringAttribute">get_string_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-cloudflare.dataCloudflareZeroTrustCasbFindingTypes.DataCloudflareZeroTrustCasbFindingTypes.getStringMapAttribute">get_string_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-cloudflare.dataCloudflareZeroTrustCasbFindingTypes.DataCloudflareZeroTrustCasbFindingTypes.interpolationForAttribute">interpolation_for_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-cloudflare.dataCloudflareZeroTrustCasbFindingTypes.DataCloudflareZeroTrustCasbFindingTypes.resetDirection">reset_direction</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-cloudflare.dataCloudflareZeroTrustCasbFindingTypes.DataCloudflareZeroTrustCasbFindingTypes.resetMaxItems">reset_max_items</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-cloudflare.dataCloudflareZeroTrustCasbFindingTypes.DataCloudflareZeroTrustCasbFindingTypes.resetMaxUpdatedAt">reset_max_updated_at</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-cloudflare.dataCloudflareZeroTrustCasbFindingTypes.DataCloudflareZeroTrustCasbFindingTypes.resetMinUpdatedAt">reset_min_updated_at</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-cloudflare.dataCloudflareZeroTrustCasbFindingTypes.DataCloudflareZeroTrustCasbFindingTypes.resetOrder">reset_order</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-cloudflare.dataCloudflareZeroTrustCasbFindingTypes.DataCloudflareZeroTrustCasbFindingTypes.resetOrigins">reset_origins</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-cloudflare.dataCloudflareZeroTrustCasbFindingTypes.DataCloudflareZeroTrustCasbFindingTypes.resetQuarantined">reset_quarantined</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-cloudflare.dataCloudflareZeroTrustCasbFindingTypes.DataCloudflareZeroTrustCasbFindingTypes.resetSearch">reset_search</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-cloudflare.dataCloudflareZeroTrustCasbFindingTypes.DataCloudflareZeroTrustCasbFindingTypes.resetSeverities">reset_severities</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-cloudflare.dataCloudflareZeroTrustCasbFindingTypes.DataCloudflareZeroTrustCasbFindingTypes.resetTypes">reset_types</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-cloudflare.dataCloudflareZeroTrustCasbFindingTypes.DataCloudflareZeroTrustCasbFindingTypes.resetVendors">reset_vendors</a></code> | *No description.* |

---

##### `to_string` <a name="to_string" id="@cdktn/provider-cloudflare.dataCloudflareZeroTrustCasbFindingTypes.DataCloudflareZeroTrustCasbFindingTypes.toString"></a>

```python
def to_string() -> str
```

Returns a string representation of this construct.

##### `with` <a name="with" id="@cdktn/provider-cloudflare.dataCloudflareZeroTrustCasbFindingTypes.DataCloudflareZeroTrustCasbFindingTypes.with"></a>

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

###### `mixins`<sup>Required</sup> <a name="mixins" id="@cdktn/provider-cloudflare.dataCloudflareZeroTrustCasbFindingTypes.DataCloudflareZeroTrustCasbFindingTypes.with.parameter.mixins"></a>

- *Type:* *constructs.IMixin

The mixins to apply.

---

##### `add_override` <a name="add_override" id="@cdktn/provider-cloudflare.dataCloudflareZeroTrustCasbFindingTypes.DataCloudflareZeroTrustCasbFindingTypes.addOverride"></a>

```python
def add_override(
  path: str,
  value: typing.Any
) -> None
```

###### `path`<sup>Required</sup> <a name="path" id="@cdktn/provider-cloudflare.dataCloudflareZeroTrustCasbFindingTypes.DataCloudflareZeroTrustCasbFindingTypes.addOverride.parameter.path"></a>

- *Type:* str

---

###### `value`<sup>Required</sup> <a name="value" id="@cdktn/provider-cloudflare.dataCloudflareZeroTrustCasbFindingTypes.DataCloudflareZeroTrustCasbFindingTypes.addOverride.parameter.value"></a>

- *Type:* typing.Any

---

##### `override_logical_id` <a name="override_logical_id" id="@cdktn/provider-cloudflare.dataCloudflareZeroTrustCasbFindingTypes.DataCloudflareZeroTrustCasbFindingTypes.overrideLogicalId"></a>

```python
def override_logical_id(
  new_logical_id: str
) -> None
```

Overrides the auto-generated logical ID with a specific ID.

###### `new_logical_id`<sup>Required</sup> <a name="new_logical_id" id="@cdktn/provider-cloudflare.dataCloudflareZeroTrustCasbFindingTypes.DataCloudflareZeroTrustCasbFindingTypes.overrideLogicalId.parameter.newLogicalId"></a>

- *Type:* str

The new logical ID to use for this stack element.

---

##### `reset_override_logical_id` <a name="reset_override_logical_id" id="@cdktn/provider-cloudflare.dataCloudflareZeroTrustCasbFindingTypes.DataCloudflareZeroTrustCasbFindingTypes.resetOverrideLogicalId"></a>

```python
def reset_override_logical_id() -> None
```

Resets a previously passed logical Id to use the auto-generated logical id again.

##### `to_hcl_terraform` <a name="to_hcl_terraform" id="@cdktn/provider-cloudflare.dataCloudflareZeroTrustCasbFindingTypes.DataCloudflareZeroTrustCasbFindingTypes.toHclTerraform"></a>

```python
def to_hcl_terraform() -> typing.Any
```

Adds this resource to the terraform JSON output.

##### `to_metadata` <a name="to_metadata" id="@cdktn/provider-cloudflare.dataCloudflareZeroTrustCasbFindingTypes.DataCloudflareZeroTrustCasbFindingTypes.toMetadata"></a>

```python
def to_metadata() -> typing.Any
```

##### `to_terraform` <a name="to_terraform" id="@cdktn/provider-cloudflare.dataCloudflareZeroTrustCasbFindingTypes.DataCloudflareZeroTrustCasbFindingTypes.toTerraform"></a>

```python
def to_terraform() -> typing.Any
```

Adds this resource to the terraform JSON output.

##### `get_any_map_attribute` <a name="get_any_map_attribute" id="@cdktn/provider-cloudflare.dataCloudflareZeroTrustCasbFindingTypes.DataCloudflareZeroTrustCasbFindingTypes.getAnyMapAttribute"></a>

```python
def get_any_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[typing.Any]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-cloudflare.dataCloudflareZeroTrustCasbFindingTypes.DataCloudflareZeroTrustCasbFindingTypes.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_boolean_attribute` <a name="get_boolean_attribute" id="@cdktn/provider-cloudflare.dataCloudflareZeroTrustCasbFindingTypes.DataCloudflareZeroTrustCasbFindingTypes.getBooleanAttribute"></a>

```python
def get_boolean_attribute(
  terraform_attribute: str
) -> IResolvable
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-cloudflare.dataCloudflareZeroTrustCasbFindingTypes.DataCloudflareZeroTrustCasbFindingTypes.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_boolean_map_attribute` <a name="get_boolean_map_attribute" id="@cdktn/provider-cloudflare.dataCloudflareZeroTrustCasbFindingTypes.DataCloudflareZeroTrustCasbFindingTypes.getBooleanMapAttribute"></a>

```python
def get_boolean_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[bool]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-cloudflare.dataCloudflareZeroTrustCasbFindingTypes.DataCloudflareZeroTrustCasbFindingTypes.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_list_attribute` <a name="get_list_attribute" id="@cdktn/provider-cloudflare.dataCloudflareZeroTrustCasbFindingTypes.DataCloudflareZeroTrustCasbFindingTypes.getListAttribute"></a>

```python
def get_list_attribute(
  terraform_attribute: str
) -> typing.List[str]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-cloudflare.dataCloudflareZeroTrustCasbFindingTypes.DataCloudflareZeroTrustCasbFindingTypes.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_attribute` <a name="get_number_attribute" id="@cdktn/provider-cloudflare.dataCloudflareZeroTrustCasbFindingTypes.DataCloudflareZeroTrustCasbFindingTypes.getNumberAttribute"></a>

```python
def get_number_attribute(
  terraform_attribute: str
) -> typing.Union[int, float]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-cloudflare.dataCloudflareZeroTrustCasbFindingTypes.DataCloudflareZeroTrustCasbFindingTypes.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_list_attribute` <a name="get_number_list_attribute" id="@cdktn/provider-cloudflare.dataCloudflareZeroTrustCasbFindingTypes.DataCloudflareZeroTrustCasbFindingTypes.getNumberListAttribute"></a>

```python
def get_number_list_attribute(
  terraform_attribute: str
) -> typing.List[typing.Union[int, float]]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-cloudflare.dataCloudflareZeroTrustCasbFindingTypes.DataCloudflareZeroTrustCasbFindingTypes.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_map_attribute` <a name="get_number_map_attribute" id="@cdktn/provider-cloudflare.dataCloudflareZeroTrustCasbFindingTypes.DataCloudflareZeroTrustCasbFindingTypes.getNumberMapAttribute"></a>

```python
def get_number_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[typing.Union[int, float]]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-cloudflare.dataCloudflareZeroTrustCasbFindingTypes.DataCloudflareZeroTrustCasbFindingTypes.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_string_attribute` <a name="get_string_attribute" id="@cdktn/provider-cloudflare.dataCloudflareZeroTrustCasbFindingTypes.DataCloudflareZeroTrustCasbFindingTypes.getStringAttribute"></a>

```python
def get_string_attribute(
  terraform_attribute: str
) -> str
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-cloudflare.dataCloudflareZeroTrustCasbFindingTypes.DataCloudflareZeroTrustCasbFindingTypes.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_string_map_attribute` <a name="get_string_map_attribute" id="@cdktn/provider-cloudflare.dataCloudflareZeroTrustCasbFindingTypes.DataCloudflareZeroTrustCasbFindingTypes.getStringMapAttribute"></a>

```python
def get_string_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[str]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-cloudflare.dataCloudflareZeroTrustCasbFindingTypes.DataCloudflareZeroTrustCasbFindingTypes.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `interpolation_for_attribute` <a name="interpolation_for_attribute" id="@cdktn/provider-cloudflare.dataCloudflareZeroTrustCasbFindingTypes.DataCloudflareZeroTrustCasbFindingTypes.interpolationForAttribute"></a>

```python
def interpolation_for_attribute(
  terraform_attribute: str
) -> IResolvable
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-cloudflare.dataCloudflareZeroTrustCasbFindingTypes.DataCloudflareZeroTrustCasbFindingTypes.interpolationForAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `reset_direction` <a name="reset_direction" id="@cdktn/provider-cloudflare.dataCloudflareZeroTrustCasbFindingTypes.DataCloudflareZeroTrustCasbFindingTypes.resetDirection"></a>

```python
def reset_direction() -> None
```

##### `reset_max_items` <a name="reset_max_items" id="@cdktn/provider-cloudflare.dataCloudflareZeroTrustCasbFindingTypes.DataCloudflareZeroTrustCasbFindingTypes.resetMaxItems"></a>

```python
def reset_max_items() -> None
```

##### `reset_max_updated_at` <a name="reset_max_updated_at" id="@cdktn/provider-cloudflare.dataCloudflareZeroTrustCasbFindingTypes.DataCloudflareZeroTrustCasbFindingTypes.resetMaxUpdatedAt"></a>

```python
def reset_max_updated_at() -> None
```

##### `reset_min_updated_at` <a name="reset_min_updated_at" id="@cdktn/provider-cloudflare.dataCloudflareZeroTrustCasbFindingTypes.DataCloudflareZeroTrustCasbFindingTypes.resetMinUpdatedAt"></a>

```python
def reset_min_updated_at() -> None
```

##### `reset_order` <a name="reset_order" id="@cdktn/provider-cloudflare.dataCloudflareZeroTrustCasbFindingTypes.DataCloudflareZeroTrustCasbFindingTypes.resetOrder"></a>

```python
def reset_order() -> None
```

##### `reset_origins` <a name="reset_origins" id="@cdktn/provider-cloudflare.dataCloudflareZeroTrustCasbFindingTypes.DataCloudflareZeroTrustCasbFindingTypes.resetOrigins"></a>

```python
def reset_origins() -> None
```

##### `reset_quarantined` <a name="reset_quarantined" id="@cdktn/provider-cloudflare.dataCloudflareZeroTrustCasbFindingTypes.DataCloudflareZeroTrustCasbFindingTypes.resetQuarantined"></a>

```python
def reset_quarantined() -> None
```

##### `reset_search` <a name="reset_search" id="@cdktn/provider-cloudflare.dataCloudflareZeroTrustCasbFindingTypes.DataCloudflareZeroTrustCasbFindingTypes.resetSearch"></a>

```python
def reset_search() -> None
```

##### `reset_severities` <a name="reset_severities" id="@cdktn/provider-cloudflare.dataCloudflareZeroTrustCasbFindingTypes.DataCloudflareZeroTrustCasbFindingTypes.resetSeverities"></a>

```python
def reset_severities() -> None
```

##### `reset_types` <a name="reset_types" id="@cdktn/provider-cloudflare.dataCloudflareZeroTrustCasbFindingTypes.DataCloudflareZeroTrustCasbFindingTypes.resetTypes"></a>

```python
def reset_types() -> None
```

##### `reset_vendors` <a name="reset_vendors" id="@cdktn/provider-cloudflare.dataCloudflareZeroTrustCasbFindingTypes.DataCloudflareZeroTrustCasbFindingTypes.resetVendors"></a>

```python
def reset_vendors() -> None
```

#### Static Functions <a name="Static Functions" id="Static Functions"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-cloudflare.dataCloudflareZeroTrustCasbFindingTypes.DataCloudflareZeroTrustCasbFindingTypes.isConstruct">is_construct</a></code> | Checks if `x` is a construct. |
| <code><a href="#@cdktn/provider-cloudflare.dataCloudflareZeroTrustCasbFindingTypes.DataCloudflareZeroTrustCasbFindingTypes.isTerraformElement">is_terraform_element</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-cloudflare.dataCloudflareZeroTrustCasbFindingTypes.DataCloudflareZeroTrustCasbFindingTypes.isTerraformDataSource">is_terraform_data_source</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-cloudflare.dataCloudflareZeroTrustCasbFindingTypes.DataCloudflareZeroTrustCasbFindingTypes.generateConfigForImport">generate_config_for_import</a></code> | Generates CDKTN code for importing a DataCloudflareZeroTrustCasbFindingTypes resource upon running "cdktn plan <stack-name>". |

---

##### `is_construct` <a name="is_construct" id="@cdktn/provider-cloudflare.dataCloudflareZeroTrustCasbFindingTypes.DataCloudflareZeroTrustCasbFindingTypes.isConstruct"></a>

```python
from cdktn_provider_cloudflare import data_cloudflare_zero_trust_casb_finding_types

dataCloudflareZeroTrustCasbFindingTypes.DataCloudflareZeroTrustCasbFindingTypes.is_construct(
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

###### `x`<sup>Required</sup> <a name="x" id="@cdktn/provider-cloudflare.dataCloudflareZeroTrustCasbFindingTypes.DataCloudflareZeroTrustCasbFindingTypes.isConstruct.parameter.x"></a>

- *Type:* typing.Any

Any object.

---

##### `is_terraform_element` <a name="is_terraform_element" id="@cdktn/provider-cloudflare.dataCloudflareZeroTrustCasbFindingTypes.DataCloudflareZeroTrustCasbFindingTypes.isTerraformElement"></a>

```python
from cdktn_provider_cloudflare import data_cloudflare_zero_trust_casb_finding_types

dataCloudflareZeroTrustCasbFindingTypes.DataCloudflareZeroTrustCasbFindingTypes.is_terraform_element(
  x: typing.Any
)
```

###### `x`<sup>Required</sup> <a name="x" id="@cdktn/provider-cloudflare.dataCloudflareZeroTrustCasbFindingTypes.DataCloudflareZeroTrustCasbFindingTypes.isTerraformElement.parameter.x"></a>

- *Type:* typing.Any

---

##### `is_terraform_data_source` <a name="is_terraform_data_source" id="@cdktn/provider-cloudflare.dataCloudflareZeroTrustCasbFindingTypes.DataCloudflareZeroTrustCasbFindingTypes.isTerraformDataSource"></a>

```python
from cdktn_provider_cloudflare import data_cloudflare_zero_trust_casb_finding_types

dataCloudflareZeroTrustCasbFindingTypes.DataCloudflareZeroTrustCasbFindingTypes.is_terraform_data_source(
  x: typing.Any
)
```

###### `x`<sup>Required</sup> <a name="x" id="@cdktn/provider-cloudflare.dataCloudflareZeroTrustCasbFindingTypes.DataCloudflareZeroTrustCasbFindingTypes.isTerraformDataSource.parameter.x"></a>

- *Type:* typing.Any

---

##### `generate_config_for_import` <a name="generate_config_for_import" id="@cdktn/provider-cloudflare.dataCloudflareZeroTrustCasbFindingTypes.DataCloudflareZeroTrustCasbFindingTypes.generateConfigForImport"></a>

```python
from cdktn_provider_cloudflare import data_cloudflare_zero_trust_casb_finding_types

dataCloudflareZeroTrustCasbFindingTypes.DataCloudflareZeroTrustCasbFindingTypes.generate_config_for_import(
  scope: Construct,
  import_to_id: str,
  import_from_id: str,
  provider: TerraformProvider = None
)
```

Generates CDKTN code for importing a DataCloudflareZeroTrustCasbFindingTypes resource upon running "cdktn plan <stack-name>".

###### `scope`<sup>Required</sup> <a name="scope" id="@cdktn/provider-cloudflare.dataCloudflareZeroTrustCasbFindingTypes.DataCloudflareZeroTrustCasbFindingTypes.generateConfigForImport.parameter.scope"></a>

- *Type:* constructs.Construct

The scope in which to define this construct.

---

###### `import_to_id`<sup>Required</sup> <a name="import_to_id" id="@cdktn/provider-cloudflare.dataCloudflareZeroTrustCasbFindingTypes.DataCloudflareZeroTrustCasbFindingTypes.generateConfigForImport.parameter.importToId"></a>

- *Type:* str

The construct id used in the generated config for the DataCloudflareZeroTrustCasbFindingTypes to import.

---

###### `import_from_id`<sup>Required</sup> <a name="import_from_id" id="@cdktn/provider-cloudflare.dataCloudflareZeroTrustCasbFindingTypes.DataCloudflareZeroTrustCasbFindingTypes.generateConfigForImport.parameter.importFromId"></a>

- *Type:* str

The id of the existing DataCloudflareZeroTrustCasbFindingTypes that should be imported.

Refer to the {@link https://registry.terraform.io/providers/cloudflare/cloudflare/5.29.0/docs/data-sources/zero_trust_casb_finding_types#import import section} in the documentation of this resource for the id to use

---

###### `provider`<sup>Optional</sup> <a name="provider" id="@cdktn/provider-cloudflare.dataCloudflareZeroTrustCasbFindingTypes.DataCloudflareZeroTrustCasbFindingTypes.generateConfigForImport.parameter.provider"></a>

- *Type:* cdktn.TerraformProvider

? Optional instance of the provider where the DataCloudflareZeroTrustCasbFindingTypes to import is found.

---

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-cloudflare.dataCloudflareZeroTrustCasbFindingTypes.DataCloudflareZeroTrustCasbFindingTypes.property.node">node</a></code> | <code>constructs.Node</code> | The tree node. |
| <code><a href="#@cdktn/provider-cloudflare.dataCloudflareZeroTrustCasbFindingTypes.DataCloudflareZeroTrustCasbFindingTypes.property.cdktfStack">cdktf_stack</a></code> | <code>cdktn.TerraformStack</code> | *No description.* |
| <code><a href="#@cdktn/provider-cloudflare.dataCloudflareZeroTrustCasbFindingTypes.DataCloudflareZeroTrustCasbFindingTypes.property.fqn">fqn</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktn/provider-cloudflare.dataCloudflareZeroTrustCasbFindingTypes.DataCloudflareZeroTrustCasbFindingTypes.property.friendlyUniqueId">friendly_unique_id</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktn/provider-cloudflare.dataCloudflareZeroTrustCasbFindingTypes.DataCloudflareZeroTrustCasbFindingTypes.property.terraformMetaArguments">terraform_meta_arguments</a></code> | <code>typing.Mapping[typing.Any]</code> | *No description.* |
| <code><a href="#@cdktn/provider-cloudflare.dataCloudflareZeroTrustCasbFindingTypes.DataCloudflareZeroTrustCasbFindingTypes.property.terraformResourceType">terraform_resource_type</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktn/provider-cloudflare.dataCloudflareZeroTrustCasbFindingTypes.DataCloudflareZeroTrustCasbFindingTypes.property.terraformGeneratorMetadata">terraform_generator_metadata</a></code> | <code>cdktn.TerraformProviderGeneratorMetadata</code> | *No description.* |
| <code><a href="#@cdktn/provider-cloudflare.dataCloudflareZeroTrustCasbFindingTypes.DataCloudflareZeroTrustCasbFindingTypes.property.count">count</a></code> | <code>typing.Union[int, float] \| cdktn.TerraformCount</code> | *No description.* |
| <code><a href="#@cdktn/provider-cloudflare.dataCloudflareZeroTrustCasbFindingTypes.DataCloudflareZeroTrustCasbFindingTypes.property.dependsOn">depends_on</a></code> | <code>typing.List[str]</code> | *No description.* |
| <code><a href="#@cdktn/provider-cloudflare.dataCloudflareZeroTrustCasbFindingTypes.DataCloudflareZeroTrustCasbFindingTypes.property.forEach">for_each</a></code> | <code>cdktn.ITerraformIterator</code> | *No description.* |
| <code><a href="#@cdktn/provider-cloudflare.dataCloudflareZeroTrustCasbFindingTypes.DataCloudflareZeroTrustCasbFindingTypes.property.lifecycle">lifecycle</a></code> | <code>cdktn.TerraformResourceLifecycle</code> | *No description.* |
| <code><a href="#@cdktn/provider-cloudflare.dataCloudflareZeroTrustCasbFindingTypes.DataCloudflareZeroTrustCasbFindingTypes.property.provider">provider</a></code> | <code>cdktn.TerraformProvider</code> | *No description.* |
| <code><a href="#@cdktn/provider-cloudflare.dataCloudflareZeroTrustCasbFindingTypes.DataCloudflareZeroTrustCasbFindingTypes.property.result">result</a></code> | <code><a href="#@cdktn/provider-cloudflare.dataCloudflareZeroTrustCasbFindingTypes.DataCloudflareZeroTrustCasbFindingTypesResultList">DataCloudflareZeroTrustCasbFindingTypesResultList</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-cloudflare.dataCloudflareZeroTrustCasbFindingTypes.DataCloudflareZeroTrustCasbFindingTypes.property.accountIdInput">account_id_input</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktn/provider-cloudflare.dataCloudflareZeroTrustCasbFindingTypes.DataCloudflareZeroTrustCasbFindingTypes.property.directionInput">direction_input</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktn/provider-cloudflare.dataCloudflareZeroTrustCasbFindingTypes.DataCloudflareZeroTrustCasbFindingTypes.property.maxItemsInput">max_items_input</a></code> | <code>typing.Union[int, float]</code> | *No description.* |
| <code><a href="#@cdktn/provider-cloudflare.dataCloudflareZeroTrustCasbFindingTypes.DataCloudflareZeroTrustCasbFindingTypes.property.maxUpdatedAtInput">max_updated_at_input</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktn/provider-cloudflare.dataCloudflareZeroTrustCasbFindingTypes.DataCloudflareZeroTrustCasbFindingTypes.property.minUpdatedAtInput">min_updated_at_input</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktn/provider-cloudflare.dataCloudflareZeroTrustCasbFindingTypes.DataCloudflareZeroTrustCasbFindingTypes.property.orderInput">order_input</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktn/provider-cloudflare.dataCloudflareZeroTrustCasbFindingTypes.DataCloudflareZeroTrustCasbFindingTypes.property.originsInput">origins_input</a></code> | <code>typing.List[str]</code> | *No description.* |
| <code><a href="#@cdktn/provider-cloudflare.dataCloudflareZeroTrustCasbFindingTypes.DataCloudflareZeroTrustCasbFindingTypes.property.quarantinedInput">quarantined_input</a></code> | <code>bool \| cdktn.IResolvable</code> | *No description.* |
| <code><a href="#@cdktn/provider-cloudflare.dataCloudflareZeroTrustCasbFindingTypes.DataCloudflareZeroTrustCasbFindingTypes.property.searchInput">search_input</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktn/provider-cloudflare.dataCloudflareZeroTrustCasbFindingTypes.DataCloudflareZeroTrustCasbFindingTypes.property.severitiesInput">severities_input</a></code> | <code>typing.List[str]</code> | *No description.* |
| <code><a href="#@cdktn/provider-cloudflare.dataCloudflareZeroTrustCasbFindingTypes.DataCloudflareZeroTrustCasbFindingTypes.property.typesInput">types_input</a></code> | <code>typing.List[str]</code> | *No description.* |
| <code><a href="#@cdktn/provider-cloudflare.dataCloudflareZeroTrustCasbFindingTypes.DataCloudflareZeroTrustCasbFindingTypes.property.vendorsInput">vendors_input</a></code> | <code>typing.List[str]</code> | *No description.* |
| <code><a href="#@cdktn/provider-cloudflare.dataCloudflareZeroTrustCasbFindingTypes.DataCloudflareZeroTrustCasbFindingTypes.property.accountId">account_id</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktn/provider-cloudflare.dataCloudflareZeroTrustCasbFindingTypes.DataCloudflareZeroTrustCasbFindingTypes.property.direction">direction</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktn/provider-cloudflare.dataCloudflareZeroTrustCasbFindingTypes.DataCloudflareZeroTrustCasbFindingTypes.property.maxItems">max_items</a></code> | <code>typing.Union[int, float]</code> | *No description.* |
| <code><a href="#@cdktn/provider-cloudflare.dataCloudflareZeroTrustCasbFindingTypes.DataCloudflareZeroTrustCasbFindingTypes.property.maxUpdatedAt">max_updated_at</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktn/provider-cloudflare.dataCloudflareZeroTrustCasbFindingTypes.DataCloudflareZeroTrustCasbFindingTypes.property.minUpdatedAt">min_updated_at</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktn/provider-cloudflare.dataCloudflareZeroTrustCasbFindingTypes.DataCloudflareZeroTrustCasbFindingTypes.property.order">order</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktn/provider-cloudflare.dataCloudflareZeroTrustCasbFindingTypes.DataCloudflareZeroTrustCasbFindingTypes.property.origins">origins</a></code> | <code>typing.List[str]</code> | *No description.* |
| <code><a href="#@cdktn/provider-cloudflare.dataCloudflareZeroTrustCasbFindingTypes.DataCloudflareZeroTrustCasbFindingTypes.property.quarantined">quarantined</a></code> | <code>bool \| cdktn.IResolvable</code> | *No description.* |
| <code><a href="#@cdktn/provider-cloudflare.dataCloudflareZeroTrustCasbFindingTypes.DataCloudflareZeroTrustCasbFindingTypes.property.search">search</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktn/provider-cloudflare.dataCloudflareZeroTrustCasbFindingTypes.DataCloudflareZeroTrustCasbFindingTypes.property.severities">severities</a></code> | <code>typing.List[str]</code> | *No description.* |
| <code><a href="#@cdktn/provider-cloudflare.dataCloudflareZeroTrustCasbFindingTypes.DataCloudflareZeroTrustCasbFindingTypes.property.types">types</a></code> | <code>typing.List[str]</code> | *No description.* |
| <code><a href="#@cdktn/provider-cloudflare.dataCloudflareZeroTrustCasbFindingTypes.DataCloudflareZeroTrustCasbFindingTypes.property.vendors">vendors</a></code> | <code>typing.List[str]</code> | *No description.* |

---

##### `node`<sup>Required</sup> <a name="node" id="@cdktn/provider-cloudflare.dataCloudflareZeroTrustCasbFindingTypes.DataCloudflareZeroTrustCasbFindingTypes.property.node"></a>

```python
node: Node
```

- *Type:* constructs.Node

The tree node.

---

##### `cdktf_stack`<sup>Required</sup> <a name="cdktf_stack" id="@cdktn/provider-cloudflare.dataCloudflareZeroTrustCasbFindingTypes.DataCloudflareZeroTrustCasbFindingTypes.property.cdktfStack"></a>

```python
cdktf_stack: TerraformStack
```

- *Type:* cdktn.TerraformStack

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktn/provider-cloudflare.dataCloudflareZeroTrustCasbFindingTypes.DataCloudflareZeroTrustCasbFindingTypes.property.fqn"></a>

```python
fqn: str
```

- *Type:* str

---

##### `friendly_unique_id`<sup>Required</sup> <a name="friendly_unique_id" id="@cdktn/provider-cloudflare.dataCloudflareZeroTrustCasbFindingTypes.DataCloudflareZeroTrustCasbFindingTypes.property.friendlyUniqueId"></a>

```python
friendly_unique_id: str
```

- *Type:* str

---

##### `terraform_meta_arguments`<sup>Required</sup> <a name="terraform_meta_arguments" id="@cdktn/provider-cloudflare.dataCloudflareZeroTrustCasbFindingTypes.DataCloudflareZeroTrustCasbFindingTypes.property.terraformMetaArguments"></a>

```python
terraform_meta_arguments: typing.Mapping[typing.Any]
```

- *Type:* typing.Mapping[typing.Any]

---

##### `terraform_resource_type`<sup>Required</sup> <a name="terraform_resource_type" id="@cdktn/provider-cloudflare.dataCloudflareZeroTrustCasbFindingTypes.DataCloudflareZeroTrustCasbFindingTypes.property.terraformResourceType"></a>

```python
terraform_resource_type: str
```

- *Type:* str

---

##### `terraform_generator_metadata`<sup>Optional</sup> <a name="terraform_generator_metadata" id="@cdktn/provider-cloudflare.dataCloudflareZeroTrustCasbFindingTypes.DataCloudflareZeroTrustCasbFindingTypes.property.terraformGeneratorMetadata"></a>

```python
terraform_generator_metadata: TerraformProviderGeneratorMetadata
```

- *Type:* cdktn.TerraformProviderGeneratorMetadata

---

##### `count`<sup>Optional</sup> <a name="count" id="@cdktn/provider-cloudflare.dataCloudflareZeroTrustCasbFindingTypes.DataCloudflareZeroTrustCasbFindingTypes.property.count"></a>

```python
count: typing.Union[int, float] | TerraformCount
```

- *Type:* typing.Union[int, float] | cdktn.TerraformCount

---

##### `depends_on`<sup>Optional</sup> <a name="depends_on" id="@cdktn/provider-cloudflare.dataCloudflareZeroTrustCasbFindingTypes.DataCloudflareZeroTrustCasbFindingTypes.property.dependsOn"></a>

```python
depends_on: typing.List[str]
```

- *Type:* typing.List[str]

---

##### `for_each`<sup>Optional</sup> <a name="for_each" id="@cdktn/provider-cloudflare.dataCloudflareZeroTrustCasbFindingTypes.DataCloudflareZeroTrustCasbFindingTypes.property.forEach"></a>

```python
for_each: ITerraformIterator
```

- *Type:* cdktn.ITerraformIterator

---

##### `lifecycle`<sup>Optional</sup> <a name="lifecycle" id="@cdktn/provider-cloudflare.dataCloudflareZeroTrustCasbFindingTypes.DataCloudflareZeroTrustCasbFindingTypes.property.lifecycle"></a>

```python
lifecycle: TerraformResourceLifecycle
```

- *Type:* cdktn.TerraformResourceLifecycle

---

##### `provider`<sup>Optional</sup> <a name="provider" id="@cdktn/provider-cloudflare.dataCloudflareZeroTrustCasbFindingTypes.DataCloudflareZeroTrustCasbFindingTypes.property.provider"></a>

```python
provider: TerraformProvider
```

- *Type:* cdktn.TerraformProvider

---

##### `result`<sup>Required</sup> <a name="result" id="@cdktn/provider-cloudflare.dataCloudflareZeroTrustCasbFindingTypes.DataCloudflareZeroTrustCasbFindingTypes.property.result"></a>

```python
result: DataCloudflareZeroTrustCasbFindingTypesResultList
```

- *Type:* <a href="#@cdktn/provider-cloudflare.dataCloudflareZeroTrustCasbFindingTypes.DataCloudflareZeroTrustCasbFindingTypesResultList">DataCloudflareZeroTrustCasbFindingTypesResultList</a>

---

##### `account_id_input`<sup>Optional</sup> <a name="account_id_input" id="@cdktn/provider-cloudflare.dataCloudflareZeroTrustCasbFindingTypes.DataCloudflareZeroTrustCasbFindingTypes.property.accountIdInput"></a>

```python
account_id_input: str
```

- *Type:* str

---

##### `direction_input`<sup>Optional</sup> <a name="direction_input" id="@cdktn/provider-cloudflare.dataCloudflareZeroTrustCasbFindingTypes.DataCloudflareZeroTrustCasbFindingTypes.property.directionInput"></a>

```python
direction_input: str
```

- *Type:* str

---

##### `max_items_input`<sup>Optional</sup> <a name="max_items_input" id="@cdktn/provider-cloudflare.dataCloudflareZeroTrustCasbFindingTypes.DataCloudflareZeroTrustCasbFindingTypes.property.maxItemsInput"></a>

```python
max_items_input: typing.Union[int, float]
```

- *Type:* typing.Union[int, float]

---

##### `max_updated_at_input`<sup>Optional</sup> <a name="max_updated_at_input" id="@cdktn/provider-cloudflare.dataCloudflareZeroTrustCasbFindingTypes.DataCloudflareZeroTrustCasbFindingTypes.property.maxUpdatedAtInput"></a>

```python
max_updated_at_input: str
```

- *Type:* str

---

##### `min_updated_at_input`<sup>Optional</sup> <a name="min_updated_at_input" id="@cdktn/provider-cloudflare.dataCloudflareZeroTrustCasbFindingTypes.DataCloudflareZeroTrustCasbFindingTypes.property.minUpdatedAtInput"></a>

```python
min_updated_at_input: str
```

- *Type:* str

---

##### `order_input`<sup>Optional</sup> <a name="order_input" id="@cdktn/provider-cloudflare.dataCloudflareZeroTrustCasbFindingTypes.DataCloudflareZeroTrustCasbFindingTypes.property.orderInput"></a>

```python
order_input: str
```

- *Type:* str

---

##### `origins_input`<sup>Optional</sup> <a name="origins_input" id="@cdktn/provider-cloudflare.dataCloudflareZeroTrustCasbFindingTypes.DataCloudflareZeroTrustCasbFindingTypes.property.originsInput"></a>

```python
origins_input: typing.List[str]
```

- *Type:* typing.List[str]

---

##### `quarantined_input`<sup>Optional</sup> <a name="quarantined_input" id="@cdktn/provider-cloudflare.dataCloudflareZeroTrustCasbFindingTypes.DataCloudflareZeroTrustCasbFindingTypes.property.quarantinedInput"></a>

```python
quarantined_input: bool | IResolvable
```

- *Type:* bool | cdktn.IResolvable

---

##### `search_input`<sup>Optional</sup> <a name="search_input" id="@cdktn/provider-cloudflare.dataCloudflareZeroTrustCasbFindingTypes.DataCloudflareZeroTrustCasbFindingTypes.property.searchInput"></a>

```python
search_input: str
```

- *Type:* str

---

##### `severities_input`<sup>Optional</sup> <a name="severities_input" id="@cdktn/provider-cloudflare.dataCloudflareZeroTrustCasbFindingTypes.DataCloudflareZeroTrustCasbFindingTypes.property.severitiesInput"></a>

```python
severities_input: typing.List[str]
```

- *Type:* typing.List[str]

---

##### `types_input`<sup>Optional</sup> <a name="types_input" id="@cdktn/provider-cloudflare.dataCloudflareZeroTrustCasbFindingTypes.DataCloudflareZeroTrustCasbFindingTypes.property.typesInput"></a>

```python
types_input: typing.List[str]
```

- *Type:* typing.List[str]

---

##### `vendors_input`<sup>Optional</sup> <a name="vendors_input" id="@cdktn/provider-cloudflare.dataCloudflareZeroTrustCasbFindingTypes.DataCloudflareZeroTrustCasbFindingTypes.property.vendorsInput"></a>

```python
vendors_input: typing.List[str]
```

- *Type:* typing.List[str]

---

##### `account_id`<sup>Required</sup> <a name="account_id" id="@cdktn/provider-cloudflare.dataCloudflareZeroTrustCasbFindingTypes.DataCloudflareZeroTrustCasbFindingTypes.property.accountId"></a>

```python
account_id: str
```

- *Type:* str

---

##### `direction`<sup>Required</sup> <a name="direction" id="@cdktn/provider-cloudflare.dataCloudflareZeroTrustCasbFindingTypes.DataCloudflareZeroTrustCasbFindingTypes.property.direction"></a>

```python
direction: str
```

- *Type:* str

---

##### `max_items`<sup>Required</sup> <a name="max_items" id="@cdktn/provider-cloudflare.dataCloudflareZeroTrustCasbFindingTypes.DataCloudflareZeroTrustCasbFindingTypes.property.maxItems"></a>

```python
max_items: typing.Union[int, float]
```

- *Type:* typing.Union[int, float]

---

##### `max_updated_at`<sup>Required</sup> <a name="max_updated_at" id="@cdktn/provider-cloudflare.dataCloudflareZeroTrustCasbFindingTypes.DataCloudflareZeroTrustCasbFindingTypes.property.maxUpdatedAt"></a>

```python
max_updated_at: str
```

- *Type:* str

---

##### `min_updated_at`<sup>Required</sup> <a name="min_updated_at" id="@cdktn/provider-cloudflare.dataCloudflareZeroTrustCasbFindingTypes.DataCloudflareZeroTrustCasbFindingTypes.property.minUpdatedAt"></a>

```python
min_updated_at: str
```

- *Type:* str

---

##### `order`<sup>Required</sup> <a name="order" id="@cdktn/provider-cloudflare.dataCloudflareZeroTrustCasbFindingTypes.DataCloudflareZeroTrustCasbFindingTypes.property.order"></a>

```python
order: str
```

- *Type:* str

---

##### `origins`<sup>Required</sup> <a name="origins" id="@cdktn/provider-cloudflare.dataCloudflareZeroTrustCasbFindingTypes.DataCloudflareZeroTrustCasbFindingTypes.property.origins"></a>

```python
origins: typing.List[str]
```

- *Type:* typing.List[str]

---

##### `quarantined`<sup>Required</sup> <a name="quarantined" id="@cdktn/provider-cloudflare.dataCloudflareZeroTrustCasbFindingTypes.DataCloudflareZeroTrustCasbFindingTypes.property.quarantined"></a>

```python
quarantined: bool | IResolvable
```

- *Type:* bool | cdktn.IResolvable

---

##### `search`<sup>Required</sup> <a name="search" id="@cdktn/provider-cloudflare.dataCloudflareZeroTrustCasbFindingTypes.DataCloudflareZeroTrustCasbFindingTypes.property.search"></a>

```python
search: str
```

- *Type:* str

---

##### `severities`<sup>Required</sup> <a name="severities" id="@cdktn/provider-cloudflare.dataCloudflareZeroTrustCasbFindingTypes.DataCloudflareZeroTrustCasbFindingTypes.property.severities"></a>

```python
severities: typing.List[str]
```

- *Type:* typing.List[str]

---

##### `types`<sup>Required</sup> <a name="types" id="@cdktn/provider-cloudflare.dataCloudflareZeroTrustCasbFindingTypes.DataCloudflareZeroTrustCasbFindingTypes.property.types"></a>

```python
types: typing.List[str]
```

- *Type:* typing.List[str]

---

##### `vendors`<sup>Required</sup> <a name="vendors" id="@cdktn/provider-cloudflare.dataCloudflareZeroTrustCasbFindingTypes.DataCloudflareZeroTrustCasbFindingTypes.property.vendors"></a>

```python
vendors: typing.List[str]
```

- *Type:* typing.List[str]

---

#### Constants <a name="Constants" id="Constants"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-cloudflare.dataCloudflareZeroTrustCasbFindingTypes.DataCloudflareZeroTrustCasbFindingTypes.property.tfResourceType">tfResourceType</a></code> | <code>str</code> | *No description.* |

---

##### `tfResourceType`<sup>Required</sup> <a name="tfResourceType" id="@cdktn/provider-cloudflare.dataCloudflareZeroTrustCasbFindingTypes.DataCloudflareZeroTrustCasbFindingTypes.property.tfResourceType"></a>

```python
tfResourceType: str
```

- *Type:* str

---

## Structs <a name="Structs" id="Structs"></a>

### DataCloudflareZeroTrustCasbFindingTypesConfig <a name="DataCloudflareZeroTrustCasbFindingTypesConfig" id="@cdktn/provider-cloudflare.dataCloudflareZeroTrustCasbFindingTypes.DataCloudflareZeroTrustCasbFindingTypesConfig"></a>

#### Initializer <a name="Initializer" id="@cdktn/provider-cloudflare.dataCloudflareZeroTrustCasbFindingTypes.DataCloudflareZeroTrustCasbFindingTypesConfig.Initializer"></a>

```python
from cdktn_provider_cloudflare import data_cloudflare_zero_trust_casb_finding_types

dataCloudflareZeroTrustCasbFindingTypes.DataCloudflareZeroTrustCasbFindingTypesConfig(
  connection: SSHProvisionerConnection | WinrmProvisionerConnection = None,
  count: typing.Union[int, float] | TerraformCount = None,
  depends_on: typing.List[ITerraformDependable] = None,
  for_each: ITerraformIterator = None,
  lifecycle: TerraformResourceLifecycle = None,
  provider: TerraformProvider = None,
  provisioners: typing.List[FileProvisioner | LocalExecProvisioner | RemoteExecProvisioner] = None,
  account_id: str,
  direction: str = None,
  max_items: typing.Union[int, float] = None,
  max_updated_at: str = None,
  min_updated_at: str = None,
  order: str = None,
  origins: typing.List[str] = None,
  quarantined: bool | IResolvable = None,
  search: str = None,
  severities: typing.List[str] = None,
  types: typing.List[str] = None,
  vendors: typing.List[str] = None
)
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-cloudflare.dataCloudflareZeroTrustCasbFindingTypes.DataCloudflareZeroTrustCasbFindingTypesConfig.property.connection">connection</a></code> | <code>cdktn.SSHProvisionerConnection \| cdktn.WinrmProvisionerConnection</code> | *No description.* |
| <code><a href="#@cdktn/provider-cloudflare.dataCloudflareZeroTrustCasbFindingTypes.DataCloudflareZeroTrustCasbFindingTypesConfig.property.count">count</a></code> | <code>typing.Union[int, float] \| cdktn.TerraformCount</code> | *No description.* |
| <code><a href="#@cdktn/provider-cloudflare.dataCloudflareZeroTrustCasbFindingTypes.DataCloudflareZeroTrustCasbFindingTypesConfig.property.dependsOn">depends_on</a></code> | <code>typing.List[cdktn.ITerraformDependable]</code> | *No description.* |
| <code><a href="#@cdktn/provider-cloudflare.dataCloudflareZeroTrustCasbFindingTypes.DataCloudflareZeroTrustCasbFindingTypesConfig.property.forEach">for_each</a></code> | <code>cdktn.ITerraformIterator</code> | *No description.* |
| <code><a href="#@cdktn/provider-cloudflare.dataCloudflareZeroTrustCasbFindingTypes.DataCloudflareZeroTrustCasbFindingTypesConfig.property.lifecycle">lifecycle</a></code> | <code>cdktn.TerraformResourceLifecycle</code> | *No description.* |
| <code><a href="#@cdktn/provider-cloudflare.dataCloudflareZeroTrustCasbFindingTypes.DataCloudflareZeroTrustCasbFindingTypesConfig.property.provider">provider</a></code> | <code>cdktn.TerraformProvider</code> | *No description.* |
| <code><a href="#@cdktn/provider-cloudflare.dataCloudflareZeroTrustCasbFindingTypes.DataCloudflareZeroTrustCasbFindingTypesConfig.property.provisioners">provisioners</a></code> | <code>typing.List[cdktn.FileProvisioner \| cdktn.LocalExecProvisioner \| cdktn.RemoteExecProvisioner]</code> | *No description.* |
| <code><a href="#@cdktn/provider-cloudflare.dataCloudflareZeroTrustCasbFindingTypes.DataCloudflareZeroTrustCasbFindingTypesConfig.property.accountId">account_id</a></code> | <code>str</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/cloudflare/cloudflare/5.29.0/docs/data-sources/zero_trust_casb_finding_types#account_id DataCloudflareZeroTrustCasbFindingTypes#account_id}. |
| <code><a href="#@cdktn/provider-cloudflare.dataCloudflareZeroTrustCasbFindingTypes.DataCloudflareZeroTrustCasbFindingTypesConfig.property.direction">direction</a></code> | <code>str</code> | Sort direction for the primary field. |
| <code><a href="#@cdktn/provider-cloudflare.dataCloudflareZeroTrustCasbFindingTypes.DataCloudflareZeroTrustCasbFindingTypesConfig.property.maxItems">max_items</a></code> | <code>typing.Union[int, float]</code> | Max items to fetch, default: 1000. |
| <code><a href="#@cdktn/provider-cloudflare.dataCloudflareZeroTrustCasbFindingTypes.DataCloudflareZeroTrustCasbFindingTypesConfig.property.maxUpdatedAt">max_updated_at</a></code> | <code>str</code> | Return only finding types updated at or before this RFC 3339 timestamp (inclusive). |
| <code><a href="#@cdktn/provider-cloudflare.dataCloudflareZeroTrustCasbFindingTypes.DataCloudflareZeroTrustCasbFindingTypesConfig.property.minUpdatedAt">min_updated_at</a></code> | <code>str</code> | Return only finding types updated at or after this RFC 3339 timestamp (inclusive). |
| <code><a href="#@cdktn/provider-cloudflare.dataCloudflareZeroTrustCasbFindingTypes.DataCloudflareZeroTrustCasbFindingTypesConfig.property.order">order</a></code> | <code>str</code> | Field to sort by (case-insensitive). |
| <code><a href="#@cdktn/provider-cloudflare.dataCloudflareZeroTrustCasbFindingTypes.DataCloudflareZeroTrustCasbFindingTypesConfig.property.origins">origins</a></code> | <code>typing.List[str]</code> | Filter finding types by origin. Supports multiple comma-separated, case-insensitive values. |
| <code><a href="#@cdktn/provider-cloudflare.dataCloudflareZeroTrustCasbFindingTypes.DataCloudflareZeroTrustCasbFindingTypesConfig.property.quarantined">quarantined</a></code> | <code>bool \| cdktn.IResolvable</code> | When true, return only quarantined finding types; when false, return only non-quarantined finding types. Omit to return both. |
| <code><a href="#@cdktn/provider-cloudflare.dataCloudflareZeroTrustCasbFindingTypes.DataCloudflareZeroTrustCasbFindingTypesConfig.property.search">search</a></code> | <code>str</code> | Filter finding types by name or ID (case-insensitive substring match). |
| <code><a href="#@cdktn/provider-cloudflare.dataCloudflareZeroTrustCasbFindingTypes.DataCloudflareZeroTrustCasbFindingTypesConfig.property.severities">severities</a></code> | <code>typing.List[str]</code> | Filter finding types by severity. Supports multiple comma-separated, case-insensitive values. |
| <code><a href="#@cdktn/provider-cloudflare.dataCloudflareZeroTrustCasbFindingTypes.DataCloudflareZeroTrustCasbFindingTypesConfig.property.types">types</a></code> | <code>typing.List[str]</code> | Filter finding types by category type. Supports multiple comma-separated, case-insensitive values. |
| <code><a href="#@cdktn/provider-cloudflare.dataCloudflareZeroTrustCasbFindingTypes.DataCloudflareZeroTrustCasbFindingTypesConfig.property.vendors">vendors</a></code> | <code>typing.List[str]</code> | Filter finding types by vendor. |

---

##### `connection`<sup>Optional</sup> <a name="connection" id="@cdktn/provider-cloudflare.dataCloudflareZeroTrustCasbFindingTypes.DataCloudflareZeroTrustCasbFindingTypesConfig.property.connection"></a>

```python
connection: SSHProvisionerConnection | WinrmProvisionerConnection
```

- *Type:* cdktn.SSHProvisionerConnection | cdktn.WinrmProvisionerConnection

---

##### `count`<sup>Optional</sup> <a name="count" id="@cdktn/provider-cloudflare.dataCloudflareZeroTrustCasbFindingTypes.DataCloudflareZeroTrustCasbFindingTypesConfig.property.count"></a>

```python
count: typing.Union[int, float] | TerraformCount
```

- *Type:* typing.Union[int, float] | cdktn.TerraformCount

---

##### `depends_on`<sup>Optional</sup> <a name="depends_on" id="@cdktn/provider-cloudflare.dataCloudflareZeroTrustCasbFindingTypes.DataCloudflareZeroTrustCasbFindingTypesConfig.property.dependsOn"></a>

```python
depends_on: typing.List[ITerraformDependable]
```

- *Type:* typing.List[cdktn.ITerraformDependable]

---

##### `for_each`<sup>Optional</sup> <a name="for_each" id="@cdktn/provider-cloudflare.dataCloudflareZeroTrustCasbFindingTypes.DataCloudflareZeroTrustCasbFindingTypesConfig.property.forEach"></a>

```python
for_each: ITerraformIterator
```

- *Type:* cdktn.ITerraformIterator

---

##### `lifecycle`<sup>Optional</sup> <a name="lifecycle" id="@cdktn/provider-cloudflare.dataCloudflareZeroTrustCasbFindingTypes.DataCloudflareZeroTrustCasbFindingTypesConfig.property.lifecycle"></a>

```python
lifecycle: TerraformResourceLifecycle
```

- *Type:* cdktn.TerraformResourceLifecycle

---

##### `provider`<sup>Optional</sup> <a name="provider" id="@cdktn/provider-cloudflare.dataCloudflareZeroTrustCasbFindingTypes.DataCloudflareZeroTrustCasbFindingTypesConfig.property.provider"></a>

```python
provider: TerraformProvider
```

- *Type:* cdktn.TerraformProvider

---

##### `provisioners`<sup>Optional</sup> <a name="provisioners" id="@cdktn/provider-cloudflare.dataCloudflareZeroTrustCasbFindingTypes.DataCloudflareZeroTrustCasbFindingTypesConfig.property.provisioners"></a>

```python
provisioners: typing.List[FileProvisioner | LocalExecProvisioner | RemoteExecProvisioner]
```

- *Type:* typing.List[cdktn.FileProvisioner | cdktn.LocalExecProvisioner | cdktn.RemoteExecProvisioner]

---

##### `account_id`<sup>Required</sup> <a name="account_id" id="@cdktn/provider-cloudflare.dataCloudflareZeroTrustCasbFindingTypes.DataCloudflareZeroTrustCasbFindingTypesConfig.property.accountId"></a>

```python
account_id: str
```

- *Type:* str

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/cloudflare/cloudflare/5.29.0/docs/data-sources/zero_trust_casb_finding_types#account_id DataCloudflareZeroTrustCasbFindingTypes#account_id}.

---

##### `direction`<sup>Optional</sup> <a name="direction" id="@cdktn/provider-cloudflare.dataCloudflareZeroTrustCasbFindingTypes.DataCloudflareZeroTrustCasbFindingTypesConfig.property.direction"></a>

```python
direction: str
```

- *Type:* str

Sort direction for the primary field.

Defaults to 'desc'.
Ties are resolved by case-insensitive name, then ID, both ascending regardless of direction.
Available values: "asc", "desc".

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/cloudflare/cloudflare/5.29.0/docs/data-sources/zero_trust_casb_finding_types#direction DataCloudflareZeroTrustCasbFindingTypes#direction}

---

##### `max_items`<sup>Optional</sup> <a name="max_items" id="@cdktn/provider-cloudflare.dataCloudflareZeroTrustCasbFindingTypes.DataCloudflareZeroTrustCasbFindingTypesConfig.property.maxItems"></a>

```python
max_items: typing.Union[int, float]
```

- *Type:* typing.Union[int, float]

Max items to fetch, default: 1000.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/cloudflare/cloudflare/5.29.0/docs/data-sources/zero_trust_casb_finding_types#max_items DataCloudflareZeroTrustCasbFindingTypes#max_items}

---

##### `max_updated_at`<sup>Optional</sup> <a name="max_updated_at" id="@cdktn/provider-cloudflare.dataCloudflareZeroTrustCasbFindingTypes.DataCloudflareZeroTrustCasbFindingTypesConfig.property.maxUpdatedAt"></a>

```python
max_updated_at: str
```

- *Type:* str

Return only finding types updated at or before this RFC 3339 timestamp (inclusive).

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/cloudflare/cloudflare/5.29.0/docs/data-sources/zero_trust_casb_finding_types#max_updated_at DataCloudflareZeroTrustCasbFindingTypes#max_updated_at}

---

##### `min_updated_at`<sup>Optional</sup> <a name="min_updated_at" id="@cdktn/provider-cloudflare.dataCloudflareZeroTrustCasbFindingTypes.DataCloudflareZeroTrustCasbFindingTypesConfig.property.minUpdatedAt"></a>

```python
min_updated_at: str
```

- *Type:* str

Return only finding types updated at or after this RFC 3339 timestamp (inclusive).

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/cloudflare/cloudflare/5.29.0/docs/data-sources/zero_trust_casb_finding_types#min_updated_at DataCloudflareZeroTrustCasbFindingTypes#min_updated_at}

---

##### `order`<sup>Optional</sup> <a name="order" id="@cdktn/provider-cloudflare.dataCloudflareZeroTrustCasbFindingTypes.DataCloudflareZeroTrustCasbFindingTypesConfig.property.order"></a>

```python
order: str
```

- *Type:* str

Field to sort by (case-insensitive).

Defaults to 'created'.
Name and vendor sorting is case-insensitive; vendor uses friendly provider names.
Ascending order: type Content then Posture; origin custom then system;
severity Low, Medium, High, Critical.
Available values: "created", "updated", "match_count", "name", "vendor", "type", "origin", "severity".

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/cloudflare/cloudflare/5.29.0/docs/data-sources/zero_trust_casb_finding_types#order DataCloudflareZeroTrustCasbFindingTypes#order}

---

##### `origins`<sup>Optional</sup> <a name="origins" id="@cdktn/provider-cloudflare.dataCloudflareZeroTrustCasbFindingTypes.DataCloudflareZeroTrustCasbFindingTypesConfig.property.origins"></a>

```python
origins: typing.List[str]
```

- *Type:* typing.List[str]

Filter finding types by origin. Supports multiple comma-separated, case-insensitive values.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/cloudflare/cloudflare/5.29.0/docs/data-sources/zero_trust_casb_finding_types#origins DataCloudflareZeroTrustCasbFindingTypes#origins}

---

##### `quarantined`<sup>Optional</sup> <a name="quarantined" id="@cdktn/provider-cloudflare.dataCloudflareZeroTrustCasbFindingTypes.DataCloudflareZeroTrustCasbFindingTypesConfig.property.quarantined"></a>

```python
quarantined: bool | IResolvable
```

- *Type:* bool | cdktn.IResolvable

When true, return only quarantined finding types; when false, return only non-quarantined finding types. Omit to return both.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/cloudflare/cloudflare/5.29.0/docs/data-sources/zero_trust_casb_finding_types#quarantined DataCloudflareZeroTrustCasbFindingTypes#quarantined}

---

##### `search`<sup>Optional</sup> <a name="search" id="@cdktn/provider-cloudflare.dataCloudflareZeroTrustCasbFindingTypes.DataCloudflareZeroTrustCasbFindingTypesConfig.property.search"></a>

```python
search: str
```

- *Type:* str

Filter finding types by name or ID (case-insensitive substring match).

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/cloudflare/cloudflare/5.29.0/docs/data-sources/zero_trust_casb_finding_types#search DataCloudflareZeroTrustCasbFindingTypes#search}

---

##### `severities`<sup>Optional</sup> <a name="severities" id="@cdktn/provider-cloudflare.dataCloudflareZeroTrustCasbFindingTypes.DataCloudflareZeroTrustCasbFindingTypesConfig.property.severities"></a>

```python
severities: typing.List[str]
```

- *Type:* typing.List[str]

Filter finding types by severity. Supports multiple comma-separated, case-insensitive values.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/cloudflare/cloudflare/5.29.0/docs/data-sources/zero_trust_casb_finding_types#severities DataCloudflareZeroTrustCasbFindingTypes#severities}

---

##### `types`<sup>Optional</sup> <a name="types" id="@cdktn/provider-cloudflare.dataCloudflareZeroTrustCasbFindingTypes.DataCloudflareZeroTrustCasbFindingTypesConfig.property.types"></a>

```python
types: typing.List[str]
```

- *Type:* typing.List[str]

Filter finding types by category type. Supports multiple comma-separated, case-insensitive values.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/cloudflare/cloudflare/5.29.0/docs/data-sources/zero_trust_casb_finding_types#types DataCloudflareZeroTrustCasbFindingTypes#types}

---

##### `vendors`<sup>Optional</sup> <a name="vendors" id="@cdktn/provider-cloudflare.dataCloudflareZeroTrustCasbFindingTypes.DataCloudflareZeroTrustCasbFindingTypesConfig.property.vendors"></a>

```python
vendors: typing.List[str]
```

- *Type:* typing.List[str]

Filter finding types by vendor.

Supports multiple comma-separated values. Each value may be either the vendor enum (GOOGLE_WORKSPACE) or the friendly name returned by the read routes (Google Workspace).

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/cloudflare/cloudflare/5.29.0/docs/data-sources/zero_trust_casb_finding_types#vendors DataCloudflareZeroTrustCasbFindingTypes#vendors}

---

### DataCloudflareZeroTrustCasbFindingTypesResult <a name="DataCloudflareZeroTrustCasbFindingTypesResult" id="@cdktn/provider-cloudflare.dataCloudflareZeroTrustCasbFindingTypes.DataCloudflareZeroTrustCasbFindingTypesResult"></a>

#### Initializer <a name="Initializer" id="@cdktn/provider-cloudflare.dataCloudflareZeroTrustCasbFindingTypes.DataCloudflareZeroTrustCasbFindingTypesResult.Initializer"></a>

```python
from cdktn_provider_cloudflare import data_cloudflare_zero_trust_casb_finding_types

dataCloudflareZeroTrustCasbFindingTypes.DataCloudflareZeroTrustCasbFindingTypesResult()
```


### DataCloudflareZeroTrustCasbFindingTypesResultCategory <a name="DataCloudflareZeroTrustCasbFindingTypesResultCategory" id="@cdktn/provider-cloudflare.dataCloudflareZeroTrustCasbFindingTypes.DataCloudflareZeroTrustCasbFindingTypesResultCategory"></a>

#### Initializer <a name="Initializer" id="@cdktn/provider-cloudflare.dataCloudflareZeroTrustCasbFindingTypes.DataCloudflareZeroTrustCasbFindingTypesResultCategory.Initializer"></a>

```python
from cdktn_provider_cloudflare import data_cloudflare_zero_trust_casb_finding_types

dataCloudflareZeroTrustCasbFindingTypes.DataCloudflareZeroTrustCasbFindingTypesResultCategory()
```


## Classes <a name="Classes" id="Classes"></a>

### DataCloudflareZeroTrustCasbFindingTypesResultCategoryOutputReference <a name="DataCloudflareZeroTrustCasbFindingTypesResultCategoryOutputReference" id="@cdktn/provider-cloudflare.dataCloudflareZeroTrustCasbFindingTypes.DataCloudflareZeroTrustCasbFindingTypesResultCategoryOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktn/provider-cloudflare.dataCloudflareZeroTrustCasbFindingTypes.DataCloudflareZeroTrustCasbFindingTypesResultCategoryOutputReference.Initializer"></a>

```python
from cdktn_provider_cloudflare import data_cloudflare_zero_trust_casb_finding_types

dataCloudflareZeroTrustCasbFindingTypes.DataCloudflareZeroTrustCasbFindingTypesResultCategoryOutputReference(
  terraform_resource: IInterpolatingParent,
  terraform_attribute: str
)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-cloudflare.dataCloudflareZeroTrustCasbFindingTypes.DataCloudflareZeroTrustCasbFindingTypesResultCategoryOutputReference.Initializer.parameter.terraformResource">terraform_resource</a></code> | <code>cdktn.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktn/provider-cloudflare.dataCloudflareZeroTrustCasbFindingTypes.DataCloudflareZeroTrustCasbFindingTypesResultCategoryOutputReference.Initializer.parameter.terraformAttribute">terraform_attribute</a></code> | <code>str</code> | The attribute on the parent resource this class is referencing. |

---

##### `terraform_resource`<sup>Required</sup> <a name="terraform_resource" id="@cdktn/provider-cloudflare.dataCloudflareZeroTrustCasbFindingTypes.DataCloudflareZeroTrustCasbFindingTypesResultCategoryOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* cdktn.IInterpolatingParent

The parent resource.

---

##### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-cloudflare.dataCloudflareZeroTrustCasbFindingTypes.DataCloudflareZeroTrustCasbFindingTypesResultCategoryOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* str

The attribute on the parent resource this class is referencing.

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-cloudflare.dataCloudflareZeroTrustCasbFindingTypes.DataCloudflareZeroTrustCasbFindingTypesResultCategoryOutputReference.computeFqn">compute_fqn</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-cloudflare.dataCloudflareZeroTrustCasbFindingTypes.DataCloudflareZeroTrustCasbFindingTypesResultCategoryOutputReference.getAnyMapAttribute">get_any_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-cloudflare.dataCloudflareZeroTrustCasbFindingTypes.DataCloudflareZeroTrustCasbFindingTypesResultCategoryOutputReference.getBooleanAttribute">get_boolean_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-cloudflare.dataCloudflareZeroTrustCasbFindingTypes.DataCloudflareZeroTrustCasbFindingTypesResultCategoryOutputReference.getBooleanMapAttribute">get_boolean_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-cloudflare.dataCloudflareZeroTrustCasbFindingTypes.DataCloudflareZeroTrustCasbFindingTypesResultCategoryOutputReference.getListAttribute">get_list_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-cloudflare.dataCloudflareZeroTrustCasbFindingTypes.DataCloudflareZeroTrustCasbFindingTypesResultCategoryOutputReference.getNumberAttribute">get_number_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-cloudflare.dataCloudflareZeroTrustCasbFindingTypes.DataCloudflareZeroTrustCasbFindingTypesResultCategoryOutputReference.getNumberListAttribute">get_number_list_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-cloudflare.dataCloudflareZeroTrustCasbFindingTypes.DataCloudflareZeroTrustCasbFindingTypesResultCategoryOutputReference.getNumberMapAttribute">get_number_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-cloudflare.dataCloudflareZeroTrustCasbFindingTypes.DataCloudflareZeroTrustCasbFindingTypesResultCategoryOutputReference.getStringAttribute">get_string_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-cloudflare.dataCloudflareZeroTrustCasbFindingTypes.DataCloudflareZeroTrustCasbFindingTypesResultCategoryOutputReference.getStringMapAttribute">get_string_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-cloudflare.dataCloudflareZeroTrustCasbFindingTypes.DataCloudflareZeroTrustCasbFindingTypesResultCategoryOutputReference.interpolationForAttribute">interpolation_for_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-cloudflare.dataCloudflareZeroTrustCasbFindingTypes.DataCloudflareZeroTrustCasbFindingTypesResultCategoryOutputReference.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktn/provider-cloudflare.dataCloudflareZeroTrustCasbFindingTypes.DataCloudflareZeroTrustCasbFindingTypesResultCategoryOutputReference.toString">to_string</a></code> | Return a string representation of this resolvable object. |

---

##### `compute_fqn` <a name="compute_fqn" id="@cdktn/provider-cloudflare.dataCloudflareZeroTrustCasbFindingTypes.DataCloudflareZeroTrustCasbFindingTypesResultCategoryOutputReference.computeFqn"></a>

```python
def compute_fqn() -> str
```

##### `get_any_map_attribute` <a name="get_any_map_attribute" id="@cdktn/provider-cloudflare.dataCloudflareZeroTrustCasbFindingTypes.DataCloudflareZeroTrustCasbFindingTypesResultCategoryOutputReference.getAnyMapAttribute"></a>

```python
def get_any_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[typing.Any]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-cloudflare.dataCloudflareZeroTrustCasbFindingTypes.DataCloudflareZeroTrustCasbFindingTypesResultCategoryOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_boolean_attribute` <a name="get_boolean_attribute" id="@cdktn/provider-cloudflare.dataCloudflareZeroTrustCasbFindingTypes.DataCloudflareZeroTrustCasbFindingTypesResultCategoryOutputReference.getBooleanAttribute"></a>

```python
def get_boolean_attribute(
  terraform_attribute: str
) -> IResolvable
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-cloudflare.dataCloudflareZeroTrustCasbFindingTypes.DataCloudflareZeroTrustCasbFindingTypesResultCategoryOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_boolean_map_attribute` <a name="get_boolean_map_attribute" id="@cdktn/provider-cloudflare.dataCloudflareZeroTrustCasbFindingTypes.DataCloudflareZeroTrustCasbFindingTypesResultCategoryOutputReference.getBooleanMapAttribute"></a>

```python
def get_boolean_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[bool]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-cloudflare.dataCloudflareZeroTrustCasbFindingTypes.DataCloudflareZeroTrustCasbFindingTypesResultCategoryOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_list_attribute` <a name="get_list_attribute" id="@cdktn/provider-cloudflare.dataCloudflareZeroTrustCasbFindingTypes.DataCloudflareZeroTrustCasbFindingTypesResultCategoryOutputReference.getListAttribute"></a>

```python
def get_list_attribute(
  terraform_attribute: str
) -> typing.List[str]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-cloudflare.dataCloudflareZeroTrustCasbFindingTypes.DataCloudflareZeroTrustCasbFindingTypesResultCategoryOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_attribute` <a name="get_number_attribute" id="@cdktn/provider-cloudflare.dataCloudflareZeroTrustCasbFindingTypes.DataCloudflareZeroTrustCasbFindingTypesResultCategoryOutputReference.getNumberAttribute"></a>

```python
def get_number_attribute(
  terraform_attribute: str
) -> typing.Union[int, float]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-cloudflare.dataCloudflareZeroTrustCasbFindingTypes.DataCloudflareZeroTrustCasbFindingTypesResultCategoryOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_list_attribute` <a name="get_number_list_attribute" id="@cdktn/provider-cloudflare.dataCloudflareZeroTrustCasbFindingTypes.DataCloudflareZeroTrustCasbFindingTypesResultCategoryOutputReference.getNumberListAttribute"></a>

```python
def get_number_list_attribute(
  terraform_attribute: str
) -> typing.List[typing.Union[int, float]]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-cloudflare.dataCloudflareZeroTrustCasbFindingTypes.DataCloudflareZeroTrustCasbFindingTypesResultCategoryOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_map_attribute` <a name="get_number_map_attribute" id="@cdktn/provider-cloudflare.dataCloudflareZeroTrustCasbFindingTypes.DataCloudflareZeroTrustCasbFindingTypesResultCategoryOutputReference.getNumberMapAttribute"></a>

```python
def get_number_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[typing.Union[int, float]]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-cloudflare.dataCloudflareZeroTrustCasbFindingTypes.DataCloudflareZeroTrustCasbFindingTypesResultCategoryOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_string_attribute` <a name="get_string_attribute" id="@cdktn/provider-cloudflare.dataCloudflareZeroTrustCasbFindingTypes.DataCloudflareZeroTrustCasbFindingTypesResultCategoryOutputReference.getStringAttribute"></a>

```python
def get_string_attribute(
  terraform_attribute: str
) -> str
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-cloudflare.dataCloudflareZeroTrustCasbFindingTypes.DataCloudflareZeroTrustCasbFindingTypesResultCategoryOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_string_map_attribute` <a name="get_string_map_attribute" id="@cdktn/provider-cloudflare.dataCloudflareZeroTrustCasbFindingTypes.DataCloudflareZeroTrustCasbFindingTypesResultCategoryOutputReference.getStringMapAttribute"></a>

```python
def get_string_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[str]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-cloudflare.dataCloudflareZeroTrustCasbFindingTypes.DataCloudflareZeroTrustCasbFindingTypesResultCategoryOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `interpolation_for_attribute` <a name="interpolation_for_attribute" id="@cdktn/provider-cloudflare.dataCloudflareZeroTrustCasbFindingTypes.DataCloudflareZeroTrustCasbFindingTypesResultCategoryOutputReference.interpolationForAttribute"></a>

```python
def interpolation_for_attribute(
  property: str
) -> IResolvable
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktn/provider-cloudflare.dataCloudflareZeroTrustCasbFindingTypes.DataCloudflareZeroTrustCasbFindingTypesResultCategoryOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* str

---

##### `resolve` <a name="resolve" id="@cdktn/provider-cloudflare.dataCloudflareZeroTrustCasbFindingTypes.DataCloudflareZeroTrustCasbFindingTypesResultCategoryOutputReference.resolve"></a>

```python
def resolve(
  _context: IResolveContext
) -> typing.Any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktn/provider-cloudflare.dataCloudflareZeroTrustCasbFindingTypes.DataCloudflareZeroTrustCasbFindingTypesResultCategoryOutputReference.resolve.parameter._context"></a>

- *Type:* cdktn.IResolveContext

---

##### `to_string` <a name="to_string" id="@cdktn/provider-cloudflare.dataCloudflareZeroTrustCasbFindingTypes.DataCloudflareZeroTrustCasbFindingTypesResultCategoryOutputReference.toString"></a>

```python
def to_string() -> str
```

Return a string representation of this resolvable object.

Returns a reversible string representation.


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-cloudflare.dataCloudflareZeroTrustCasbFindingTypes.DataCloudflareZeroTrustCasbFindingTypesResultCategoryOutputReference.property.creationStack">creation_stack</a></code> | <code>typing.List[str]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktn/provider-cloudflare.dataCloudflareZeroTrustCasbFindingTypes.DataCloudflareZeroTrustCasbFindingTypesResultCategoryOutputReference.property.fqn">fqn</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktn/provider-cloudflare.dataCloudflareZeroTrustCasbFindingTypes.DataCloudflareZeroTrustCasbFindingTypesResultCategoryOutputReference.property.observation">observation</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktn/provider-cloudflare.dataCloudflareZeroTrustCasbFindingTypes.DataCloudflareZeroTrustCasbFindingTypesResultCategoryOutputReference.property.product">product</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktn/provider-cloudflare.dataCloudflareZeroTrustCasbFindingTypes.DataCloudflareZeroTrustCasbFindingTypesResultCategoryOutputReference.property.type">type</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktn/provider-cloudflare.dataCloudflareZeroTrustCasbFindingTypes.DataCloudflareZeroTrustCasbFindingTypesResultCategoryOutputReference.property.internalValue">internal_value</a></code> | <code><a href="#@cdktn/provider-cloudflare.dataCloudflareZeroTrustCasbFindingTypes.DataCloudflareZeroTrustCasbFindingTypesResultCategory">DataCloudflareZeroTrustCasbFindingTypesResultCategory</a></code> | *No description.* |

---

##### `creation_stack`<sup>Required</sup> <a name="creation_stack" id="@cdktn/provider-cloudflare.dataCloudflareZeroTrustCasbFindingTypes.DataCloudflareZeroTrustCasbFindingTypesResultCategoryOutputReference.property.creationStack"></a>

```python
creation_stack: typing.List[str]
```

- *Type:* typing.List[str]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktn/provider-cloudflare.dataCloudflareZeroTrustCasbFindingTypes.DataCloudflareZeroTrustCasbFindingTypesResultCategoryOutputReference.property.fqn"></a>

```python
fqn: str
```

- *Type:* str

---

##### `observation`<sup>Required</sup> <a name="observation" id="@cdktn/provider-cloudflare.dataCloudflareZeroTrustCasbFindingTypes.DataCloudflareZeroTrustCasbFindingTypesResultCategoryOutputReference.property.observation"></a>

```python
observation: str
```

- *Type:* str

---

##### `product`<sup>Required</sup> <a name="product" id="@cdktn/provider-cloudflare.dataCloudflareZeroTrustCasbFindingTypes.DataCloudflareZeroTrustCasbFindingTypesResultCategoryOutputReference.property.product"></a>

```python
product: str
```

- *Type:* str

---

##### `type`<sup>Required</sup> <a name="type" id="@cdktn/provider-cloudflare.dataCloudflareZeroTrustCasbFindingTypes.DataCloudflareZeroTrustCasbFindingTypesResultCategoryOutputReference.property.type"></a>

```python
type: str
```

- *Type:* str

---

##### `internal_value`<sup>Optional</sup> <a name="internal_value" id="@cdktn/provider-cloudflare.dataCloudflareZeroTrustCasbFindingTypes.DataCloudflareZeroTrustCasbFindingTypesResultCategoryOutputReference.property.internalValue"></a>

```python
internal_value: DataCloudflareZeroTrustCasbFindingTypesResultCategory
```

- *Type:* <a href="#@cdktn/provider-cloudflare.dataCloudflareZeroTrustCasbFindingTypes.DataCloudflareZeroTrustCasbFindingTypesResultCategory">DataCloudflareZeroTrustCasbFindingTypesResultCategory</a>

---


### DataCloudflareZeroTrustCasbFindingTypesResultList <a name="DataCloudflareZeroTrustCasbFindingTypesResultList" id="@cdktn/provider-cloudflare.dataCloudflareZeroTrustCasbFindingTypes.DataCloudflareZeroTrustCasbFindingTypesResultList"></a>

#### Initializers <a name="Initializers" id="@cdktn/provider-cloudflare.dataCloudflareZeroTrustCasbFindingTypes.DataCloudflareZeroTrustCasbFindingTypesResultList.Initializer"></a>

```python
from cdktn_provider_cloudflare import data_cloudflare_zero_trust_casb_finding_types

dataCloudflareZeroTrustCasbFindingTypes.DataCloudflareZeroTrustCasbFindingTypesResultList(
  terraform_resource: IInterpolatingParent,
  terraform_attribute: str,
  wraps_set: bool
)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-cloudflare.dataCloudflareZeroTrustCasbFindingTypes.DataCloudflareZeroTrustCasbFindingTypesResultList.Initializer.parameter.terraformResource">terraform_resource</a></code> | <code>cdktn.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktn/provider-cloudflare.dataCloudflareZeroTrustCasbFindingTypes.DataCloudflareZeroTrustCasbFindingTypesResultList.Initializer.parameter.terraformAttribute">terraform_attribute</a></code> | <code>str</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#@cdktn/provider-cloudflare.dataCloudflareZeroTrustCasbFindingTypes.DataCloudflareZeroTrustCasbFindingTypesResultList.Initializer.parameter.wrapsSet">wraps_set</a></code> | <code>bool</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraform_resource`<sup>Required</sup> <a name="terraform_resource" id="@cdktn/provider-cloudflare.dataCloudflareZeroTrustCasbFindingTypes.DataCloudflareZeroTrustCasbFindingTypesResultList.Initializer.parameter.terraformResource"></a>

- *Type:* cdktn.IInterpolatingParent

The parent resource.

---

##### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-cloudflare.dataCloudflareZeroTrustCasbFindingTypes.DataCloudflareZeroTrustCasbFindingTypesResultList.Initializer.parameter.terraformAttribute"></a>

- *Type:* str

The attribute on the parent resource this class is referencing.

---

##### `wraps_set`<sup>Required</sup> <a name="wraps_set" id="@cdktn/provider-cloudflare.dataCloudflareZeroTrustCasbFindingTypes.DataCloudflareZeroTrustCasbFindingTypesResultList.Initializer.parameter.wrapsSet"></a>

- *Type:* bool

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-cloudflare.dataCloudflareZeroTrustCasbFindingTypes.DataCloudflareZeroTrustCasbFindingTypesResultList.allWithMapKey">all_with_map_key</a></code> | Creating an iterator for this complex list. |
| <code><a href="#@cdktn/provider-cloudflare.dataCloudflareZeroTrustCasbFindingTypes.DataCloudflareZeroTrustCasbFindingTypesResultList.computeFqn">compute_fqn</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-cloudflare.dataCloudflareZeroTrustCasbFindingTypes.DataCloudflareZeroTrustCasbFindingTypesResultList.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktn/provider-cloudflare.dataCloudflareZeroTrustCasbFindingTypes.DataCloudflareZeroTrustCasbFindingTypesResultList.toString">to_string</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktn/provider-cloudflare.dataCloudflareZeroTrustCasbFindingTypes.DataCloudflareZeroTrustCasbFindingTypesResultList.get">get</a></code> | *No description.* |

---

##### `all_with_map_key` <a name="all_with_map_key" id="@cdktn/provider-cloudflare.dataCloudflareZeroTrustCasbFindingTypes.DataCloudflareZeroTrustCasbFindingTypesResultList.allWithMapKey"></a>

```python
def all_with_map_key(
  map_key_attribute_name: str
) -> DynamicListTerraformIterator
```

Creating an iterator for this complex list.

The list will be converted into a map with the mapKeyAttributeName as the key.

###### `map_key_attribute_name`<sup>Required</sup> <a name="map_key_attribute_name" id="@cdktn/provider-cloudflare.dataCloudflareZeroTrustCasbFindingTypes.DataCloudflareZeroTrustCasbFindingTypesResultList.allWithMapKey.parameter.mapKeyAttributeName"></a>

- *Type:* str

---

##### `compute_fqn` <a name="compute_fqn" id="@cdktn/provider-cloudflare.dataCloudflareZeroTrustCasbFindingTypes.DataCloudflareZeroTrustCasbFindingTypesResultList.computeFqn"></a>

```python
def compute_fqn() -> str
```

##### `resolve` <a name="resolve" id="@cdktn/provider-cloudflare.dataCloudflareZeroTrustCasbFindingTypes.DataCloudflareZeroTrustCasbFindingTypesResultList.resolve"></a>

```python
def resolve(
  _context: IResolveContext
) -> typing.Any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktn/provider-cloudflare.dataCloudflareZeroTrustCasbFindingTypes.DataCloudflareZeroTrustCasbFindingTypesResultList.resolve.parameter._context"></a>

- *Type:* cdktn.IResolveContext

---

##### `to_string` <a name="to_string" id="@cdktn/provider-cloudflare.dataCloudflareZeroTrustCasbFindingTypes.DataCloudflareZeroTrustCasbFindingTypesResultList.toString"></a>

```python
def to_string() -> str
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `get` <a name="get" id="@cdktn/provider-cloudflare.dataCloudflareZeroTrustCasbFindingTypes.DataCloudflareZeroTrustCasbFindingTypesResultList.get"></a>

```python
def get(
  index: typing.Union[int, float]
) -> DataCloudflareZeroTrustCasbFindingTypesResultOutputReference
```

###### `index`<sup>Required</sup> <a name="index" id="@cdktn/provider-cloudflare.dataCloudflareZeroTrustCasbFindingTypes.DataCloudflareZeroTrustCasbFindingTypesResultList.get.parameter.index"></a>

- *Type:* typing.Union[int, float]

the index of the item to return.

---


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-cloudflare.dataCloudflareZeroTrustCasbFindingTypes.DataCloudflareZeroTrustCasbFindingTypesResultList.property.creationStack">creation_stack</a></code> | <code>typing.List[str]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktn/provider-cloudflare.dataCloudflareZeroTrustCasbFindingTypes.DataCloudflareZeroTrustCasbFindingTypesResultList.property.fqn">fqn</a></code> | <code>str</code> | *No description.* |

---

##### `creation_stack`<sup>Required</sup> <a name="creation_stack" id="@cdktn/provider-cloudflare.dataCloudflareZeroTrustCasbFindingTypes.DataCloudflareZeroTrustCasbFindingTypesResultList.property.creationStack"></a>

```python
creation_stack: typing.List[str]
```

- *Type:* typing.List[str]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktn/provider-cloudflare.dataCloudflareZeroTrustCasbFindingTypes.DataCloudflareZeroTrustCasbFindingTypesResultList.property.fqn"></a>

```python
fqn: str
```

- *Type:* str

---


### DataCloudflareZeroTrustCasbFindingTypesResultOutputReference <a name="DataCloudflareZeroTrustCasbFindingTypesResultOutputReference" id="@cdktn/provider-cloudflare.dataCloudflareZeroTrustCasbFindingTypes.DataCloudflareZeroTrustCasbFindingTypesResultOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktn/provider-cloudflare.dataCloudflareZeroTrustCasbFindingTypes.DataCloudflareZeroTrustCasbFindingTypesResultOutputReference.Initializer"></a>

```python
from cdktn_provider_cloudflare import data_cloudflare_zero_trust_casb_finding_types

dataCloudflareZeroTrustCasbFindingTypes.DataCloudflareZeroTrustCasbFindingTypesResultOutputReference(
  terraform_resource: IInterpolatingParent,
  terraform_attribute: str,
  complex_object_index: typing.Union[int, float],
  complex_object_is_from_set: bool
)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-cloudflare.dataCloudflareZeroTrustCasbFindingTypes.DataCloudflareZeroTrustCasbFindingTypesResultOutputReference.Initializer.parameter.terraformResource">terraform_resource</a></code> | <code>cdktn.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktn/provider-cloudflare.dataCloudflareZeroTrustCasbFindingTypes.DataCloudflareZeroTrustCasbFindingTypesResultOutputReference.Initializer.parameter.terraformAttribute">terraform_attribute</a></code> | <code>str</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#@cdktn/provider-cloudflare.dataCloudflareZeroTrustCasbFindingTypes.DataCloudflareZeroTrustCasbFindingTypesResultOutputReference.Initializer.parameter.complexObjectIndex">complex_object_index</a></code> | <code>typing.Union[int, float]</code> | the index of this item in the list. |
| <code><a href="#@cdktn/provider-cloudflare.dataCloudflareZeroTrustCasbFindingTypes.DataCloudflareZeroTrustCasbFindingTypesResultOutputReference.Initializer.parameter.complexObjectIsFromSet">complex_object_is_from_set</a></code> | <code>bool</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraform_resource`<sup>Required</sup> <a name="terraform_resource" id="@cdktn/provider-cloudflare.dataCloudflareZeroTrustCasbFindingTypes.DataCloudflareZeroTrustCasbFindingTypesResultOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* cdktn.IInterpolatingParent

The parent resource.

---

##### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-cloudflare.dataCloudflareZeroTrustCasbFindingTypes.DataCloudflareZeroTrustCasbFindingTypesResultOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* str

The attribute on the parent resource this class is referencing.

---

##### `complex_object_index`<sup>Required</sup> <a name="complex_object_index" id="@cdktn/provider-cloudflare.dataCloudflareZeroTrustCasbFindingTypes.DataCloudflareZeroTrustCasbFindingTypesResultOutputReference.Initializer.parameter.complexObjectIndex"></a>

- *Type:* typing.Union[int, float]

the index of this item in the list.

---

##### `complex_object_is_from_set`<sup>Required</sup> <a name="complex_object_is_from_set" id="@cdktn/provider-cloudflare.dataCloudflareZeroTrustCasbFindingTypes.DataCloudflareZeroTrustCasbFindingTypesResultOutputReference.Initializer.parameter.complexObjectIsFromSet"></a>

- *Type:* bool

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-cloudflare.dataCloudflareZeroTrustCasbFindingTypes.DataCloudflareZeroTrustCasbFindingTypesResultOutputReference.computeFqn">compute_fqn</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-cloudflare.dataCloudflareZeroTrustCasbFindingTypes.DataCloudflareZeroTrustCasbFindingTypesResultOutputReference.getAnyMapAttribute">get_any_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-cloudflare.dataCloudflareZeroTrustCasbFindingTypes.DataCloudflareZeroTrustCasbFindingTypesResultOutputReference.getBooleanAttribute">get_boolean_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-cloudflare.dataCloudflareZeroTrustCasbFindingTypes.DataCloudflareZeroTrustCasbFindingTypesResultOutputReference.getBooleanMapAttribute">get_boolean_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-cloudflare.dataCloudflareZeroTrustCasbFindingTypes.DataCloudflareZeroTrustCasbFindingTypesResultOutputReference.getListAttribute">get_list_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-cloudflare.dataCloudflareZeroTrustCasbFindingTypes.DataCloudflareZeroTrustCasbFindingTypesResultOutputReference.getNumberAttribute">get_number_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-cloudflare.dataCloudflareZeroTrustCasbFindingTypes.DataCloudflareZeroTrustCasbFindingTypesResultOutputReference.getNumberListAttribute">get_number_list_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-cloudflare.dataCloudflareZeroTrustCasbFindingTypes.DataCloudflareZeroTrustCasbFindingTypesResultOutputReference.getNumberMapAttribute">get_number_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-cloudflare.dataCloudflareZeroTrustCasbFindingTypes.DataCloudflareZeroTrustCasbFindingTypesResultOutputReference.getStringAttribute">get_string_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-cloudflare.dataCloudflareZeroTrustCasbFindingTypes.DataCloudflareZeroTrustCasbFindingTypesResultOutputReference.getStringMapAttribute">get_string_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-cloudflare.dataCloudflareZeroTrustCasbFindingTypes.DataCloudflareZeroTrustCasbFindingTypesResultOutputReference.interpolationForAttribute">interpolation_for_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-cloudflare.dataCloudflareZeroTrustCasbFindingTypes.DataCloudflareZeroTrustCasbFindingTypesResultOutputReference.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktn/provider-cloudflare.dataCloudflareZeroTrustCasbFindingTypes.DataCloudflareZeroTrustCasbFindingTypesResultOutputReference.toString">to_string</a></code> | Return a string representation of this resolvable object. |

---

##### `compute_fqn` <a name="compute_fqn" id="@cdktn/provider-cloudflare.dataCloudflareZeroTrustCasbFindingTypes.DataCloudflareZeroTrustCasbFindingTypesResultOutputReference.computeFqn"></a>

```python
def compute_fqn() -> str
```

##### `get_any_map_attribute` <a name="get_any_map_attribute" id="@cdktn/provider-cloudflare.dataCloudflareZeroTrustCasbFindingTypes.DataCloudflareZeroTrustCasbFindingTypesResultOutputReference.getAnyMapAttribute"></a>

```python
def get_any_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[typing.Any]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-cloudflare.dataCloudflareZeroTrustCasbFindingTypes.DataCloudflareZeroTrustCasbFindingTypesResultOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_boolean_attribute` <a name="get_boolean_attribute" id="@cdktn/provider-cloudflare.dataCloudflareZeroTrustCasbFindingTypes.DataCloudflareZeroTrustCasbFindingTypesResultOutputReference.getBooleanAttribute"></a>

```python
def get_boolean_attribute(
  terraform_attribute: str
) -> IResolvable
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-cloudflare.dataCloudflareZeroTrustCasbFindingTypes.DataCloudflareZeroTrustCasbFindingTypesResultOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_boolean_map_attribute` <a name="get_boolean_map_attribute" id="@cdktn/provider-cloudflare.dataCloudflareZeroTrustCasbFindingTypes.DataCloudflareZeroTrustCasbFindingTypesResultOutputReference.getBooleanMapAttribute"></a>

```python
def get_boolean_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[bool]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-cloudflare.dataCloudflareZeroTrustCasbFindingTypes.DataCloudflareZeroTrustCasbFindingTypesResultOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_list_attribute` <a name="get_list_attribute" id="@cdktn/provider-cloudflare.dataCloudflareZeroTrustCasbFindingTypes.DataCloudflareZeroTrustCasbFindingTypesResultOutputReference.getListAttribute"></a>

```python
def get_list_attribute(
  terraform_attribute: str
) -> typing.List[str]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-cloudflare.dataCloudflareZeroTrustCasbFindingTypes.DataCloudflareZeroTrustCasbFindingTypesResultOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_attribute` <a name="get_number_attribute" id="@cdktn/provider-cloudflare.dataCloudflareZeroTrustCasbFindingTypes.DataCloudflareZeroTrustCasbFindingTypesResultOutputReference.getNumberAttribute"></a>

```python
def get_number_attribute(
  terraform_attribute: str
) -> typing.Union[int, float]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-cloudflare.dataCloudflareZeroTrustCasbFindingTypes.DataCloudflareZeroTrustCasbFindingTypesResultOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_list_attribute` <a name="get_number_list_attribute" id="@cdktn/provider-cloudflare.dataCloudflareZeroTrustCasbFindingTypes.DataCloudflareZeroTrustCasbFindingTypesResultOutputReference.getNumberListAttribute"></a>

```python
def get_number_list_attribute(
  terraform_attribute: str
) -> typing.List[typing.Union[int, float]]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-cloudflare.dataCloudflareZeroTrustCasbFindingTypes.DataCloudflareZeroTrustCasbFindingTypesResultOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_map_attribute` <a name="get_number_map_attribute" id="@cdktn/provider-cloudflare.dataCloudflareZeroTrustCasbFindingTypes.DataCloudflareZeroTrustCasbFindingTypesResultOutputReference.getNumberMapAttribute"></a>

```python
def get_number_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[typing.Union[int, float]]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-cloudflare.dataCloudflareZeroTrustCasbFindingTypes.DataCloudflareZeroTrustCasbFindingTypesResultOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_string_attribute` <a name="get_string_attribute" id="@cdktn/provider-cloudflare.dataCloudflareZeroTrustCasbFindingTypes.DataCloudflareZeroTrustCasbFindingTypesResultOutputReference.getStringAttribute"></a>

```python
def get_string_attribute(
  terraform_attribute: str
) -> str
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-cloudflare.dataCloudflareZeroTrustCasbFindingTypes.DataCloudflareZeroTrustCasbFindingTypesResultOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_string_map_attribute` <a name="get_string_map_attribute" id="@cdktn/provider-cloudflare.dataCloudflareZeroTrustCasbFindingTypes.DataCloudflareZeroTrustCasbFindingTypesResultOutputReference.getStringMapAttribute"></a>

```python
def get_string_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[str]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-cloudflare.dataCloudflareZeroTrustCasbFindingTypes.DataCloudflareZeroTrustCasbFindingTypesResultOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `interpolation_for_attribute` <a name="interpolation_for_attribute" id="@cdktn/provider-cloudflare.dataCloudflareZeroTrustCasbFindingTypes.DataCloudflareZeroTrustCasbFindingTypesResultOutputReference.interpolationForAttribute"></a>

```python
def interpolation_for_attribute(
  property: str
) -> IResolvable
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktn/provider-cloudflare.dataCloudflareZeroTrustCasbFindingTypes.DataCloudflareZeroTrustCasbFindingTypesResultOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* str

---

##### `resolve` <a name="resolve" id="@cdktn/provider-cloudflare.dataCloudflareZeroTrustCasbFindingTypes.DataCloudflareZeroTrustCasbFindingTypesResultOutputReference.resolve"></a>

```python
def resolve(
  _context: IResolveContext
) -> typing.Any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktn/provider-cloudflare.dataCloudflareZeroTrustCasbFindingTypes.DataCloudflareZeroTrustCasbFindingTypesResultOutputReference.resolve.parameter._context"></a>

- *Type:* cdktn.IResolveContext

---

##### `to_string` <a name="to_string" id="@cdktn/provider-cloudflare.dataCloudflareZeroTrustCasbFindingTypes.DataCloudflareZeroTrustCasbFindingTypesResultOutputReference.toString"></a>

```python
def to_string() -> str
```

Return a string representation of this resolvable object.

Returns a reversible string representation.


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-cloudflare.dataCloudflareZeroTrustCasbFindingTypes.DataCloudflareZeroTrustCasbFindingTypesResultOutputReference.property.creationStack">creation_stack</a></code> | <code>typing.List[str]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktn/provider-cloudflare.dataCloudflareZeroTrustCasbFindingTypes.DataCloudflareZeroTrustCasbFindingTypesResultOutputReference.property.fqn">fqn</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktn/provider-cloudflare.dataCloudflareZeroTrustCasbFindingTypes.DataCloudflareZeroTrustCasbFindingTypesResultOutputReference.property.appliesToAllIntegrations">applies_to_all_integrations</a></code> | <code>cdktn.IResolvable</code> | *No description.* |
| <code><a href="#@cdktn/provider-cloudflare.dataCloudflareZeroTrustCasbFindingTypes.DataCloudflareZeroTrustCasbFindingTypesResultOutputReference.property.assetClass">asset_class</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktn/provider-cloudflare.dataCloudflareZeroTrustCasbFindingTypes.DataCloudflareZeroTrustCasbFindingTypesResultOutputReference.property.assetVendor">asset_vendor</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktn/provider-cloudflare.dataCloudflareZeroTrustCasbFindingTypes.DataCloudflareZeroTrustCasbFindingTypesResultOutputReference.property.category">category</a></code> | <code><a href="#@cdktn/provider-cloudflare.dataCloudflareZeroTrustCasbFindingTypes.DataCloudflareZeroTrustCasbFindingTypesResultCategoryOutputReference">DataCloudflareZeroTrustCasbFindingTypesResultCategoryOutputReference</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-cloudflare.dataCloudflareZeroTrustCasbFindingTypes.DataCloudflareZeroTrustCasbFindingTypesResultOutputReference.property.createdAt">created_at</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktn/provider-cloudflare.dataCloudflareZeroTrustCasbFindingTypes.DataCloudflareZeroTrustCasbFindingTypesResultOutputReference.property.description">description</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktn/provider-cloudflare.dataCloudflareZeroTrustCasbFindingTypes.DataCloudflareZeroTrustCasbFindingTypesResultOutputReference.property.expression">expression</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktn/provider-cloudflare.dataCloudflareZeroTrustCasbFindingTypes.DataCloudflareZeroTrustCasbFindingTypesResultOutputReference.property.id">id</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktn/provider-cloudflare.dataCloudflareZeroTrustCasbFindingTypes.DataCloudflareZeroTrustCasbFindingTypesResultOutputReference.property.integrationIds">integration_ids</a></code> | <code>typing.List[str]</code> | *No description.* |
| <code><a href="#@cdktn/provider-cloudflare.dataCloudflareZeroTrustCasbFindingTypes.DataCloudflareZeroTrustCasbFindingTypesResultOutputReference.property.matchCount">match_count</a></code> | <code>typing.Union[int, float]</code> | *No description.* |
| <code><a href="#@cdktn/provider-cloudflare.dataCloudflareZeroTrustCasbFindingTypes.DataCloudflareZeroTrustCasbFindingTypesResultOutputReference.property.name">name</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktn/provider-cloudflare.dataCloudflareZeroTrustCasbFindingTypes.DataCloudflareZeroTrustCasbFindingTypesResultOutputReference.property.origin">origin</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktn/provider-cloudflare.dataCloudflareZeroTrustCasbFindingTypes.DataCloudflareZeroTrustCasbFindingTypesResultOutputReference.property.quarantined">quarantined</a></code> | <code>cdktn.IResolvable</code> | *No description.* |
| <code><a href="#@cdktn/provider-cloudflare.dataCloudflareZeroTrustCasbFindingTypes.DataCloudflareZeroTrustCasbFindingTypesResultOutputReference.property.severity">severity</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktn/provider-cloudflare.dataCloudflareZeroTrustCasbFindingTypes.DataCloudflareZeroTrustCasbFindingTypesResultOutputReference.property.updatedAt">updated_at</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktn/provider-cloudflare.dataCloudflareZeroTrustCasbFindingTypes.DataCloudflareZeroTrustCasbFindingTypesResultOutputReference.property.vendor">vendor</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktn/provider-cloudflare.dataCloudflareZeroTrustCasbFindingTypes.DataCloudflareZeroTrustCasbFindingTypesResultOutputReference.property.version">version</a></code> | <code>typing.Union[int, float]</code> | *No description.* |
| <code><a href="#@cdktn/provider-cloudflare.dataCloudflareZeroTrustCasbFindingTypes.DataCloudflareZeroTrustCasbFindingTypesResultOutputReference.property.internalValue">internal_value</a></code> | <code><a href="#@cdktn/provider-cloudflare.dataCloudflareZeroTrustCasbFindingTypes.DataCloudflareZeroTrustCasbFindingTypesResult">DataCloudflareZeroTrustCasbFindingTypesResult</a></code> | *No description.* |

---

##### `creation_stack`<sup>Required</sup> <a name="creation_stack" id="@cdktn/provider-cloudflare.dataCloudflareZeroTrustCasbFindingTypes.DataCloudflareZeroTrustCasbFindingTypesResultOutputReference.property.creationStack"></a>

```python
creation_stack: typing.List[str]
```

- *Type:* typing.List[str]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktn/provider-cloudflare.dataCloudflareZeroTrustCasbFindingTypes.DataCloudflareZeroTrustCasbFindingTypesResultOutputReference.property.fqn"></a>

```python
fqn: str
```

- *Type:* str

---

##### `applies_to_all_integrations`<sup>Required</sup> <a name="applies_to_all_integrations" id="@cdktn/provider-cloudflare.dataCloudflareZeroTrustCasbFindingTypes.DataCloudflareZeroTrustCasbFindingTypesResultOutputReference.property.appliesToAllIntegrations"></a>

```python
applies_to_all_integrations: IResolvable
```

- *Type:* cdktn.IResolvable

---

##### `asset_class`<sup>Required</sup> <a name="asset_class" id="@cdktn/provider-cloudflare.dataCloudflareZeroTrustCasbFindingTypes.DataCloudflareZeroTrustCasbFindingTypesResultOutputReference.property.assetClass"></a>

```python
asset_class: str
```

- *Type:* str

---

##### `asset_vendor`<sup>Required</sup> <a name="asset_vendor" id="@cdktn/provider-cloudflare.dataCloudflareZeroTrustCasbFindingTypes.DataCloudflareZeroTrustCasbFindingTypesResultOutputReference.property.assetVendor"></a>

```python
asset_vendor: str
```

- *Type:* str

---

##### `category`<sup>Required</sup> <a name="category" id="@cdktn/provider-cloudflare.dataCloudflareZeroTrustCasbFindingTypes.DataCloudflareZeroTrustCasbFindingTypesResultOutputReference.property.category"></a>

```python
category: DataCloudflareZeroTrustCasbFindingTypesResultCategoryOutputReference
```

- *Type:* <a href="#@cdktn/provider-cloudflare.dataCloudflareZeroTrustCasbFindingTypes.DataCloudflareZeroTrustCasbFindingTypesResultCategoryOutputReference">DataCloudflareZeroTrustCasbFindingTypesResultCategoryOutputReference</a>

---

##### `created_at`<sup>Required</sup> <a name="created_at" id="@cdktn/provider-cloudflare.dataCloudflareZeroTrustCasbFindingTypes.DataCloudflareZeroTrustCasbFindingTypesResultOutputReference.property.createdAt"></a>

```python
created_at: str
```

- *Type:* str

---

##### `description`<sup>Required</sup> <a name="description" id="@cdktn/provider-cloudflare.dataCloudflareZeroTrustCasbFindingTypes.DataCloudflareZeroTrustCasbFindingTypesResultOutputReference.property.description"></a>

```python
description: str
```

- *Type:* str

---

##### `expression`<sup>Required</sup> <a name="expression" id="@cdktn/provider-cloudflare.dataCloudflareZeroTrustCasbFindingTypes.DataCloudflareZeroTrustCasbFindingTypesResultOutputReference.property.expression"></a>

```python
expression: str
```

- *Type:* str

---

##### `id`<sup>Required</sup> <a name="id" id="@cdktn/provider-cloudflare.dataCloudflareZeroTrustCasbFindingTypes.DataCloudflareZeroTrustCasbFindingTypesResultOutputReference.property.id"></a>

```python
id: str
```

- *Type:* str

---

##### `integration_ids`<sup>Required</sup> <a name="integration_ids" id="@cdktn/provider-cloudflare.dataCloudflareZeroTrustCasbFindingTypes.DataCloudflareZeroTrustCasbFindingTypesResultOutputReference.property.integrationIds"></a>

```python
integration_ids: typing.List[str]
```

- *Type:* typing.List[str]

---

##### `match_count`<sup>Required</sup> <a name="match_count" id="@cdktn/provider-cloudflare.dataCloudflareZeroTrustCasbFindingTypes.DataCloudflareZeroTrustCasbFindingTypesResultOutputReference.property.matchCount"></a>

```python
match_count: typing.Union[int, float]
```

- *Type:* typing.Union[int, float]

---

##### `name`<sup>Required</sup> <a name="name" id="@cdktn/provider-cloudflare.dataCloudflareZeroTrustCasbFindingTypes.DataCloudflareZeroTrustCasbFindingTypesResultOutputReference.property.name"></a>

```python
name: str
```

- *Type:* str

---

##### `origin`<sup>Required</sup> <a name="origin" id="@cdktn/provider-cloudflare.dataCloudflareZeroTrustCasbFindingTypes.DataCloudflareZeroTrustCasbFindingTypesResultOutputReference.property.origin"></a>

```python
origin: str
```

- *Type:* str

---

##### `quarantined`<sup>Required</sup> <a name="quarantined" id="@cdktn/provider-cloudflare.dataCloudflareZeroTrustCasbFindingTypes.DataCloudflareZeroTrustCasbFindingTypesResultOutputReference.property.quarantined"></a>

```python
quarantined: IResolvable
```

- *Type:* cdktn.IResolvable

---

##### `severity`<sup>Required</sup> <a name="severity" id="@cdktn/provider-cloudflare.dataCloudflareZeroTrustCasbFindingTypes.DataCloudflareZeroTrustCasbFindingTypesResultOutputReference.property.severity"></a>

```python
severity: str
```

- *Type:* str

---

##### `updated_at`<sup>Required</sup> <a name="updated_at" id="@cdktn/provider-cloudflare.dataCloudflareZeroTrustCasbFindingTypes.DataCloudflareZeroTrustCasbFindingTypesResultOutputReference.property.updatedAt"></a>

```python
updated_at: str
```

- *Type:* str

---

##### `vendor`<sup>Required</sup> <a name="vendor" id="@cdktn/provider-cloudflare.dataCloudflareZeroTrustCasbFindingTypes.DataCloudflareZeroTrustCasbFindingTypesResultOutputReference.property.vendor"></a>

```python
vendor: str
```

- *Type:* str

---

##### `version`<sup>Required</sup> <a name="version" id="@cdktn/provider-cloudflare.dataCloudflareZeroTrustCasbFindingTypes.DataCloudflareZeroTrustCasbFindingTypesResultOutputReference.property.version"></a>

```python
version: typing.Union[int, float]
```

- *Type:* typing.Union[int, float]

---

##### `internal_value`<sup>Optional</sup> <a name="internal_value" id="@cdktn/provider-cloudflare.dataCloudflareZeroTrustCasbFindingTypes.DataCloudflareZeroTrustCasbFindingTypesResultOutputReference.property.internalValue"></a>

```python
internal_value: DataCloudflareZeroTrustCasbFindingTypesResult
```

- *Type:* <a href="#@cdktn/provider-cloudflare.dataCloudflareZeroTrustCasbFindingTypes.DataCloudflareZeroTrustCasbFindingTypesResult">DataCloudflareZeroTrustCasbFindingTypesResult</a>

---



