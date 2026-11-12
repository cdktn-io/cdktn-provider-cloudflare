# `dataCloudflareLogExplorerDatasets` Submodule <a name="`dataCloudflareLogExplorerDatasets` Submodule" id="@cdktn/provider-cloudflare.dataCloudflareLogExplorerDatasets"></a>

## Constructs <a name="Constructs" id="Constructs"></a>

### DataCloudflareLogExplorerDatasets <a name="DataCloudflareLogExplorerDatasets" id="@cdktn/provider-cloudflare.dataCloudflareLogExplorerDatasets.DataCloudflareLogExplorerDatasets"></a>

Represents a {@link https://registry.terraform.io/providers/cloudflare/cloudflare/5.29.0/docs/data-sources/log_explorer_datasets cloudflare_log_explorer_datasets}.

#### Initializers <a name="Initializers" id="@cdktn/provider-cloudflare.dataCloudflareLogExplorerDatasets.DataCloudflareLogExplorerDatasets.Initializer"></a>

```go
import "github.com/cdktn-io/cdktn-provider-cloudflare-go/cloudflare/v17/datacloudflarelogexplorerdatasets"

datacloudflarelogexplorerdatasets.NewDataCloudflareLogExplorerDatasets(scope Construct, id *string, config DataCloudflareLogExplorerDatasetsConfig) DataCloudflareLogExplorerDatasets
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-cloudflare.dataCloudflareLogExplorerDatasets.DataCloudflareLogExplorerDatasets.Initializer.parameter.scope">scope</a></code> | <code>github.com/aws/constructs-go/constructs/v10.Construct</code> | The scope in which to define this construct. |
| <code><a href="#@cdktn/provider-cloudflare.dataCloudflareLogExplorerDatasets.DataCloudflareLogExplorerDatasets.Initializer.parameter.id">id</a></code> | <code>*string</code> | The scoped construct ID. |
| <code><a href="#@cdktn/provider-cloudflare.dataCloudflareLogExplorerDatasets.DataCloudflareLogExplorerDatasets.Initializer.parameter.config">config</a></code> | <code><a href="#@cdktn/provider-cloudflare.dataCloudflareLogExplorerDatasets.DataCloudflareLogExplorerDatasetsConfig">DataCloudflareLogExplorerDatasetsConfig</a></code> | *No description.* |

---

##### `scope`<sup>Required</sup> <a name="scope" id="@cdktn/provider-cloudflare.dataCloudflareLogExplorerDatasets.DataCloudflareLogExplorerDatasets.Initializer.parameter.scope"></a>

- *Type:* github.com/aws/constructs-go/constructs/v10.Construct

The scope in which to define this construct.

---

##### `id`<sup>Required</sup> <a name="id" id="@cdktn/provider-cloudflare.dataCloudflareLogExplorerDatasets.DataCloudflareLogExplorerDatasets.Initializer.parameter.id"></a>

- *Type:* *string

The scoped construct ID.

Must be unique amongst siblings in the same scope

---

##### `config`<sup>Optional</sup> <a name="config" id="@cdktn/provider-cloudflare.dataCloudflareLogExplorerDatasets.DataCloudflareLogExplorerDatasets.Initializer.parameter.config"></a>

- *Type:* <a href="#@cdktn/provider-cloudflare.dataCloudflareLogExplorerDatasets.DataCloudflareLogExplorerDatasetsConfig">DataCloudflareLogExplorerDatasetsConfig</a>

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-cloudflare.dataCloudflareLogExplorerDatasets.DataCloudflareLogExplorerDatasets.toString">ToString</a></code> | Returns a string representation of this construct. |
| <code><a href="#@cdktn/provider-cloudflare.dataCloudflareLogExplorerDatasets.DataCloudflareLogExplorerDatasets.with">With</a></code> | Applies one or more mixins to this construct. |
| <code><a href="#@cdktn/provider-cloudflare.dataCloudflareLogExplorerDatasets.DataCloudflareLogExplorerDatasets.addOverride">AddOverride</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-cloudflare.dataCloudflareLogExplorerDatasets.DataCloudflareLogExplorerDatasets.overrideLogicalId">OverrideLogicalId</a></code> | Overrides the auto-generated logical ID with a specific ID. |
| <code><a href="#@cdktn/provider-cloudflare.dataCloudflareLogExplorerDatasets.DataCloudflareLogExplorerDatasets.resetOverrideLogicalId">ResetOverrideLogicalId</a></code> | Resets a previously passed logical Id to use the auto-generated logical id again. |
| <code><a href="#@cdktn/provider-cloudflare.dataCloudflareLogExplorerDatasets.DataCloudflareLogExplorerDatasets.toHclTerraform">ToHclTerraform</a></code> | Adds this resource to the terraform JSON output. |
| <code><a href="#@cdktn/provider-cloudflare.dataCloudflareLogExplorerDatasets.DataCloudflareLogExplorerDatasets.toMetadata">ToMetadata</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-cloudflare.dataCloudflareLogExplorerDatasets.DataCloudflareLogExplorerDatasets.toTerraform">ToTerraform</a></code> | Adds this resource to the terraform JSON output. |
| <code><a href="#@cdktn/provider-cloudflare.dataCloudflareLogExplorerDatasets.DataCloudflareLogExplorerDatasets.getAnyMapAttribute">GetAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-cloudflare.dataCloudflareLogExplorerDatasets.DataCloudflareLogExplorerDatasets.getBooleanAttribute">GetBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-cloudflare.dataCloudflareLogExplorerDatasets.DataCloudflareLogExplorerDatasets.getBooleanMapAttribute">GetBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-cloudflare.dataCloudflareLogExplorerDatasets.DataCloudflareLogExplorerDatasets.getListAttribute">GetListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-cloudflare.dataCloudflareLogExplorerDatasets.DataCloudflareLogExplorerDatasets.getNumberAttribute">GetNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-cloudflare.dataCloudflareLogExplorerDatasets.DataCloudflareLogExplorerDatasets.getNumberListAttribute">GetNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-cloudflare.dataCloudflareLogExplorerDatasets.DataCloudflareLogExplorerDatasets.getNumberMapAttribute">GetNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-cloudflare.dataCloudflareLogExplorerDatasets.DataCloudflareLogExplorerDatasets.getStringAttribute">GetStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-cloudflare.dataCloudflareLogExplorerDatasets.DataCloudflareLogExplorerDatasets.getStringMapAttribute">GetStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-cloudflare.dataCloudflareLogExplorerDatasets.DataCloudflareLogExplorerDatasets.interpolationForAttribute">InterpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-cloudflare.dataCloudflareLogExplorerDatasets.DataCloudflareLogExplorerDatasets.resetAccountId">ResetAccountId</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-cloudflare.dataCloudflareLogExplorerDatasets.DataCloudflareLogExplorerDatasets.resetIncludeZones">ResetIncludeZones</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-cloudflare.dataCloudflareLogExplorerDatasets.DataCloudflareLogExplorerDatasets.resetMaxItems">ResetMaxItems</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-cloudflare.dataCloudflareLogExplorerDatasets.DataCloudflareLogExplorerDatasets.resetZoneId">ResetZoneId</a></code> | *No description.* |

---

##### `ToString` <a name="ToString" id="@cdktn/provider-cloudflare.dataCloudflareLogExplorerDatasets.DataCloudflareLogExplorerDatasets.toString"></a>

```go
func ToString() *string
```

Returns a string representation of this construct.

##### `With` <a name="With" id="@cdktn/provider-cloudflare.dataCloudflareLogExplorerDatasets.DataCloudflareLogExplorerDatasets.with"></a>

```go
func With(mixins ...IMixin) IConstruct
```

Applies one or more mixins to this construct.

Mixins are applied in order. The list of constructs is captured at the
start of the call, so constructs added by a mixin will not be visited.
Use multiple `with()` calls if subsequent mixins should apply to added
constructs.

###### `mixins`<sup>Required</sup> <a name="mixins" id="@cdktn/provider-cloudflare.dataCloudflareLogExplorerDatasets.DataCloudflareLogExplorerDatasets.with.parameter.mixins"></a>

- *Type:* ...github.com/aws/constructs-go/constructs/v10.IMixin

The mixins to apply.

---

##### `AddOverride` <a name="AddOverride" id="@cdktn/provider-cloudflare.dataCloudflareLogExplorerDatasets.DataCloudflareLogExplorerDatasets.addOverride"></a>

```go
func AddOverride(path *string, value interface{})
```

###### `path`<sup>Required</sup> <a name="path" id="@cdktn/provider-cloudflare.dataCloudflareLogExplorerDatasets.DataCloudflareLogExplorerDatasets.addOverride.parameter.path"></a>

- *Type:* *string

---

###### `value`<sup>Required</sup> <a name="value" id="@cdktn/provider-cloudflare.dataCloudflareLogExplorerDatasets.DataCloudflareLogExplorerDatasets.addOverride.parameter.value"></a>

- *Type:* interface{}

---

##### `OverrideLogicalId` <a name="OverrideLogicalId" id="@cdktn/provider-cloudflare.dataCloudflareLogExplorerDatasets.DataCloudflareLogExplorerDatasets.overrideLogicalId"></a>

```go
func OverrideLogicalId(newLogicalId *string)
```

Overrides the auto-generated logical ID with a specific ID.

###### `newLogicalId`<sup>Required</sup> <a name="newLogicalId" id="@cdktn/provider-cloudflare.dataCloudflareLogExplorerDatasets.DataCloudflareLogExplorerDatasets.overrideLogicalId.parameter.newLogicalId"></a>

- *Type:* *string

The new logical ID to use for this stack element.

---

##### `ResetOverrideLogicalId` <a name="ResetOverrideLogicalId" id="@cdktn/provider-cloudflare.dataCloudflareLogExplorerDatasets.DataCloudflareLogExplorerDatasets.resetOverrideLogicalId"></a>

```go
func ResetOverrideLogicalId()
```

Resets a previously passed logical Id to use the auto-generated logical id again.

##### `ToHclTerraform` <a name="ToHclTerraform" id="@cdktn/provider-cloudflare.dataCloudflareLogExplorerDatasets.DataCloudflareLogExplorerDatasets.toHclTerraform"></a>

```go
func ToHclTerraform() interface{}
```

Adds this resource to the terraform JSON output.

##### `ToMetadata` <a name="ToMetadata" id="@cdktn/provider-cloudflare.dataCloudflareLogExplorerDatasets.DataCloudflareLogExplorerDatasets.toMetadata"></a>

```go
func ToMetadata() interface{}
```

##### `ToTerraform` <a name="ToTerraform" id="@cdktn/provider-cloudflare.dataCloudflareLogExplorerDatasets.DataCloudflareLogExplorerDatasets.toTerraform"></a>

```go
func ToTerraform() interface{}
```

Adds this resource to the terraform JSON output.

##### `GetAnyMapAttribute` <a name="GetAnyMapAttribute" id="@cdktn/provider-cloudflare.dataCloudflareLogExplorerDatasets.DataCloudflareLogExplorerDatasets.getAnyMapAttribute"></a>

```go
func GetAnyMapAttribute(terraformAttribute *string) *map[string]interface{}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-cloudflare.dataCloudflareLogExplorerDatasets.DataCloudflareLogExplorerDatasets.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetBooleanAttribute` <a name="GetBooleanAttribute" id="@cdktn/provider-cloudflare.dataCloudflareLogExplorerDatasets.DataCloudflareLogExplorerDatasets.getBooleanAttribute"></a>

```go
func GetBooleanAttribute(terraformAttribute *string) IResolvable
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-cloudflare.dataCloudflareLogExplorerDatasets.DataCloudflareLogExplorerDatasets.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetBooleanMapAttribute` <a name="GetBooleanMapAttribute" id="@cdktn/provider-cloudflare.dataCloudflareLogExplorerDatasets.DataCloudflareLogExplorerDatasets.getBooleanMapAttribute"></a>

```go
func GetBooleanMapAttribute(terraformAttribute *string) *map[string]*bool
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-cloudflare.dataCloudflareLogExplorerDatasets.DataCloudflareLogExplorerDatasets.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetListAttribute` <a name="GetListAttribute" id="@cdktn/provider-cloudflare.dataCloudflareLogExplorerDatasets.DataCloudflareLogExplorerDatasets.getListAttribute"></a>

```go
func GetListAttribute(terraformAttribute *string) *[]*string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-cloudflare.dataCloudflareLogExplorerDatasets.DataCloudflareLogExplorerDatasets.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberAttribute` <a name="GetNumberAttribute" id="@cdktn/provider-cloudflare.dataCloudflareLogExplorerDatasets.DataCloudflareLogExplorerDatasets.getNumberAttribute"></a>

```go
func GetNumberAttribute(terraformAttribute *string) *f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-cloudflare.dataCloudflareLogExplorerDatasets.DataCloudflareLogExplorerDatasets.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberListAttribute` <a name="GetNumberListAttribute" id="@cdktn/provider-cloudflare.dataCloudflareLogExplorerDatasets.DataCloudflareLogExplorerDatasets.getNumberListAttribute"></a>

```go
func GetNumberListAttribute(terraformAttribute *string) *[]*f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-cloudflare.dataCloudflareLogExplorerDatasets.DataCloudflareLogExplorerDatasets.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberMapAttribute` <a name="GetNumberMapAttribute" id="@cdktn/provider-cloudflare.dataCloudflareLogExplorerDatasets.DataCloudflareLogExplorerDatasets.getNumberMapAttribute"></a>

```go
func GetNumberMapAttribute(terraformAttribute *string) *map[string]*f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-cloudflare.dataCloudflareLogExplorerDatasets.DataCloudflareLogExplorerDatasets.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetStringAttribute` <a name="GetStringAttribute" id="@cdktn/provider-cloudflare.dataCloudflareLogExplorerDatasets.DataCloudflareLogExplorerDatasets.getStringAttribute"></a>

```go
func GetStringAttribute(terraformAttribute *string) *string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-cloudflare.dataCloudflareLogExplorerDatasets.DataCloudflareLogExplorerDatasets.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetStringMapAttribute` <a name="GetStringMapAttribute" id="@cdktn/provider-cloudflare.dataCloudflareLogExplorerDatasets.DataCloudflareLogExplorerDatasets.getStringMapAttribute"></a>

```go
func GetStringMapAttribute(terraformAttribute *string) *map[string]*string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-cloudflare.dataCloudflareLogExplorerDatasets.DataCloudflareLogExplorerDatasets.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `InterpolationForAttribute` <a name="InterpolationForAttribute" id="@cdktn/provider-cloudflare.dataCloudflareLogExplorerDatasets.DataCloudflareLogExplorerDatasets.interpolationForAttribute"></a>

```go
func InterpolationForAttribute(terraformAttribute *string) IResolvable
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-cloudflare.dataCloudflareLogExplorerDatasets.DataCloudflareLogExplorerDatasets.interpolationForAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `ResetAccountId` <a name="ResetAccountId" id="@cdktn/provider-cloudflare.dataCloudflareLogExplorerDatasets.DataCloudflareLogExplorerDatasets.resetAccountId"></a>

```go
func ResetAccountId()
```

##### `ResetIncludeZones` <a name="ResetIncludeZones" id="@cdktn/provider-cloudflare.dataCloudflareLogExplorerDatasets.DataCloudflareLogExplorerDatasets.resetIncludeZones"></a>

```go
func ResetIncludeZones()
```

##### `ResetMaxItems` <a name="ResetMaxItems" id="@cdktn/provider-cloudflare.dataCloudflareLogExplorerDatasets.DataCloudflareLogExplorerDatasets.resetMaxItems"></a>

```go
func ResetMaxItems()
```

##### `ResetZoneId` <a name="ResetZoneId" id="@cdktn/provider-cloudflare.dataCloudflareLogExplorerDatasets.DataCloudflareLogExplorerDatasets.resetZoneId"></a>

```go
func ResetZoneId()
```

#### Static Functions <a name="Static Functions" id="Static Functions"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-cloudflare.dataCloudflareLogExplorerDatasets.DataCloudflareLogExplorerDatasets.isConstruct">IsConstruct</a></code> | Checks if `x` is a construct. |
| <code><a href="#@cdktn/provider-cloudflare.dataCloudflareLogExplorerDatasets.DataCloudflareLogExplorerDatasets.isTerraformElement">IsTerraformElement</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-cloudflare.dataCloudflareLogExplorerDatasets.DataCloudflareLogExplorerDatasets.isTerraformDataSource">IsTerraformDataSource</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-cloudflare.dataCloudflareLogExplorerDatasets.DataCloudflareLogExplorerDatasets.generateConfigForImport">GenerateConfigForImport</a></code> | Generates CDKTN code for importing a DataCloudflareLogExplorerDatasets resource upon running "cdktn plan <stack-name>". |

---

##### `IsConstruct` <a name="IsConstruct" id="@cdktn/provider-cloudflare.dataCloudflareLogExplorerDatasets.DataCloudflareLogExplorerDatasets.isConstruct"></a>

```go
import "github.com/cdktn-io/cdktn-provider-cloudflare-go/cloudflare/v17/datacloudflarelogexplorerdatasets"

datacloudflarelogexplorerdatasets.DataCloudflareLogExplorerDatasets_IsConstruct(x interface{}) *bool
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

###### `x`<sup>Required</sup> <a name="x" id="@cdktn/provider-cloudflare.dataCloudflareLogExplorerDatasets.DataCloudflareLogExplorerDatasets.isConstruct.parameter.x"></a>

- *Type:* interface{}

Any object.

---

##### `IsTerraformElement` <a name="IsTerraformElement" id="@cdktn/provider-cloudflare.dataCloudflareLogExplorerDatasets.DataCloudflareLogExplorerDatasets.isTerraformElement"></a>

```go
import "github.com/cdktn-io/cdktn-provider-cloudflare-go/cloudflare/v17/datacloudflarelogexplorerdatasets"

datacloudflarelogexplorerdatasets.DataCloudflareLogExplorerDatasets_IsTerraformElement(x interface{}) *bool
```

###### `x`<sup>Required</sup> <a name="x" id="@cdktn/provider-cloudflare.dataCloudflareLogExplorerDatasets.DataCloudflareLogExplorerDatasets.isTerraformElement.parameter.x"></a>

- *Type:* interface{}

---

##### `IsTerraformDataSource` <a name="IsTerraformDataSource" id="@cdktn/provider-cloudflare.dataCloudflareLogExplorerDatasets.DataCloudflareLogExplorerDatasets.isTerraformDataSource"></a>

```go
import "github.com/cdktn-io/cdktn-provider-cloudflare-go/cloudflare/v17/datacloudflarelogexplorerdatasets"

datacloudflarelogexplorerdatasets.DataCloudflareLogExplorerDatasets_IsTerraformDataSource(x interface{}) *bool
```

###### `x`<sup>Required</sup> <a name="x" id="@cdktn/provider-cloudflare.dataCloudflareLogExplorerDatasets.DataCloudflareLogExplorerDatasets.isTerraformDataSource.parameter.x"></a>

- *Type:* interface{}

---

##### `GenerateConfigForImport` <a name="GenerateConfigForImport" id="@cdktn/provider-cloudflare.dataCloudflareLogExplorerDatasets.DataCloudflareLogExplorerDatasets.generateConfigForImport"></a>

```go
import "github.com/cdktn-io/cdktn-provider-cloudflare-go/cloudflare/v17/datacloudflarelogexplorerdatasets"

datacloudflarelogexplorerdatasets.DataCloudflareLogExplorerDatasets_GenerateConfigForImport(scope Construct, importToId *string, importFromId *string, provider TerraformProvider) ImportableResource
```

Generates CDKTN code for importing a DataCloudflareLogExplorerDatasets resource upon running "cdktn plan <stack-name>".

###### `scope`<sup>Required</sup> <a name="scope" id="@cdktn/provider-cloudflare.dataCloudflareLogExplorerDatasets.DataCloudflareLogExplorerDatasets.generateConfigForImport.parameter.scope"></a>

- *Type:* github.com/aws/constructs-go/constructs/v10.Construct

The scope in which to define this construct.

---

###### `importToId`<sup>Required</sup> <a name="importToId" id="@cdktn/provider-cloudflare.dataCloudflareLogExplorerDatasets.DataCloudflareLogExplorerDatasets.generateConfigForImport.parameter.importToId"></a>

- *Type:* *string

The construct id used in the generated config for the DataCloudflareLogExplorerDatasets to import.

---

###### `importFromId`<sup>Required</sup> <a name="importFromId" id="@cdktn/provider-cloudflare.dataCloudflareLogExplorerDatasets.DataCloudflareLogExplorerDatasets.generateConfigForImport.parameter.importFromId"></a>

- *Type:* *string

The id of the existing DataCloudflareLogExplorerDatasets that should be imported.

Refer to the {@link https://registry.terraform.io/providers/cloudflare/cloudflare/5.29.0/docs/data-sources/log_explorer_datasets#import import section} in the documentation of this resource for the id to use

---

###### `provider`<sup>Optional</sup> <a name="provider" id="@cdktn/provider-cloudflare.dataCloudflareLogExplorerDatasets.DataCloudflareLogExplorerDatasets.generateConfigForImport.parameter.provider"></a>

- *Type:* github.com/open-constructs/cdk-terrain-go/cdktn.TerraformProvider

? Optional instance of the provider where the DataCloudflareLogExplorerDatasets to import is found.

---

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-cloudflare.dataCloudflareLogExplorerDatasets.DataCloudflareLogExplorerDatasets.property.node">Node</a></code> | <code>github.com/aws/constructs-go/constructs/v10.Node</code> | The tree node. |
| <code><a href="#@cdktn/provider-cloudflare.dataCloudflareLogExplorerDatasets.DataCloudflareLogExplorerDatasets.property.cdktfStack">CdktfStack</a></code> | <code>github.com/open-constructs/cdk-terrain-go/cdktn.TerraformStack</code> | *No description.* |
| <code><a href="#@cdktn/provider-cloudflare.dataCloudflareLogExplorerDatasets.DataCloudflareLogExplorerDatasets.property.fqn">Fqn</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktn/provider-cloudflare.dataCloudflareLogExplorerDatasets.DataCloudflareLogExplorerDatasets.property.friendlyUniqueId">FriendlyUniqueId</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktn/provider-cloudflare.dataCloudflareLogExplorerDatasets.DataCloudflareLogExplorerDatasets.property.terraformMetaArguments">TerraformMetaArguments</a></code> | <code>*map[string]interface{}</code> | *No description.* |
| <code><a href="#@cdktn/provider-cloudflare.dataCloudflareLogExplorerDatasets.DataCloudflareLogExplorerDatasets.property.terraformResourceType">TerraformResourceType</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktn/provider-cloudflare.dataCloudflareLogExplorerDatasets.DataCloudflareLogExplorerDatasets.property.terraformGeneratorMetadata">TerraformGeneratorMetadata</a></code> | <code>github.com/open-constructs/cdk-terrain-go/cdktn.TerraformProviderGeneratorMetadata</code> | *No description.* |
| <code><a href="#@cdktn/provider-cloudflare.dataCloudflareLogExplorerDatasets.DataCloudflareLogExplorerDatasets.property.count">Count</a></code> | <code>interface{}</code> | *No description.* |
| <code><a href="#@cdktn/provider-cloudflare.dataCloudflareLogExplorerDatasets.DataCloudflareLogExplorerDatasets.property.dependsOn">DependsOn</a></code> | <code>*[]*string</code> | *No description.* |
| <code><a href="#@cdktn/provider-cloudflare.dataCloudflareLogExplorerDatasets.DataCloudflareLogExplorerDatasets.property.forEach">ForEach</a></code> | <code>github.com/open-constructs/cdk-terrain-go/cdktn.ITerraformIterator</code> | *No description.* |
| <code><a href="#@cdktn/provider-cloudflare.dataCloudflareLogExplorerDatasets.DataCloudflareLogExplorerDatasets.property.lifecycle">Lifecycle</a></code> | <code>github.com/open-constructs/cdk-terrain-go/cdktn.TerraformResourceLifecycle</code> | *No description.* |
| <code><a href="#@cdktn/provider-cloudflare.dataCloudflareLogExplorerDatasets.DataCloudflareLogExplorerDatasets.property.provider">Provider</a></code> | <code>github.com/open-constructs/cdk-terrain-go/cdktn.TerraformProvider</code> | *No description.* |
| <code><a href="#@cdktn/provider-cloudflare.dataCloudflareLogExplorerDatasets.DataCloudflareLogExplorerDatasets.property.result">Result</a></code> | <code><a href="#@cdktn/provider-cloudflare.dataCloudflareLogExplorerDatasets.DataCloudflareLogExplorerDatasetsResultList">DataCloudflareLogExplorerDatasetsResultList</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-cloudflare.dataCloudflareLogExplorerDatasets.DataCloudflareLogExplorerDatasets.property.accountIdInput">AccountIdInput</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktn/provider-cloudflare.dataCloudflareLogExplorerDatasets.DataCloudflareLogExplorerDatasets.property.includeZonesInput">IncludeZonesInput</a></code> | <code>interface{}</code> | *No description.* |
| <code><a href="#@cdktn/provider-cloudflare.dataCloudflareLogExplorerDatasets.DataCloudflareLogExplorerDatasets.property.maxItemsInput">MaxItemsInput</a></code> | <code>*f64</code> | *No description.* |
| <code><a href="#@cdktn/provider-cloudflare.dataCloudflareLogExplorerDatasets.DataCloudflareLogExplorerDatasets.property.zoneIdInput">ZoneIdInput</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktn/provider-cloudflare.dataCloudflareLogExplorerDatasets.DataCloudflareLogExplorerDatasets.property.accountId">AccountId</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktn/provider-cloudflare.dataCloudflareLogExplorerDatasets.DataCloudflareLogExplorerDatasets.property.includeZones">IncludeZones</a></code> | <code>interface{}</code> | *No description.* |
| <code><a href="#@cdktn/provider-cloudflare.dataCloudflareLogExplorerDatasets.DataCloudflareLogExplorerDatasets.property.maxItems">MaxItems</a></code> | <code>*f64</code> | *No description.* |
| <code><a href="#@cdktn/provider-cloudflare.dataCloudflareLogExplorerDatasets.DataCloudflareLogExplorerDatasets.property.zoneId">ZoneId</a></code> | <code>*string</code> | *No description.* |

---

##### `Node`<sup>Required</sup> <a name="Node" id="@cdktn/provider-cloudflare.dataCloudflareLogExplorerDatasets.DataCloudflareLogExplorerDatasets.property.node"></a>

```go
func Node() Node
```

- *Type:* github.com/aws/constructs-go/constructs/v10.Node

The tree node.

---

##### `CdktfStack`<sup>Required</sup> <a name="CdktfStack" id="@cdktn/provider-cloudflare.dataCloudflareLogExplorerDatasets.DataCloudflareLogExplorerDatasets.property.cdktfStack"></a>

```go
func CdktfStack() TerraformStack
```

- *Type:* github.com/open-constructs/cdk-terrain-go/cdktn.TerraformStack

---

##### `Fqn`<sup>Required</sup> <a name="Fqn" id="@cdktn/provider-cloudflare.dataCloudflareLogExplorerDatasets.DataCloudflareLogExplorerDatasets.property.fqn"></a>

```go
func Fqn() *string
```

- *Type:* *string

---

##### `FriendlyUniqueId`<sup>Required</sup> <a name="FriendlyUniqueId" id="@cdktn/provider-cloudflare.dataCloudflareLogExplorerDatasets.DataCloudflareLogExplorerDatasets.property.friendlyUniqueId"></a>

```go
func FriendlyUniqueId() *string
```

- *Type:* *string

---

##### `TerraformMetaArguments`<sup>Required</sup> <a name="TerraformMetaArguments" id="@cdktn/provider-cloudflare.dataCloudflareLogExplorerDatasets.DataCloudflareLogExplorerDatasets.property.terraformMetaArguments"></a>

```go
func TerraformMetaArguments() *map[string]interface{}
```

- *Type:* *map[string]interface{}

---

##### `TerraformResourceType`<sup>Required</sup> <a name="TerraformResourceType" id="@cdktn/provider-cloudflare.dataCloudflareLogExplorerDatasets.DataCloudflareLogExplorerDatasets.property.terraformResourceType"></a>

```go
func TerraformResourceType() *string
```

- *Type:* *string

---

##### `TerraformGeneratorMetadata`<sup>Optional</sup> <a name="TerraformGeneratorMetadata" id="@cdktn/provider-cloudflare.dataCloudflareLogExplorerDatasets.DataCloudflareLogExplorerDatasets.property.terraformGeneratorMetadata"></a>

```go
func TerraformGeneratorMetadata() TerraformProviderGeneratorMetadata
```

- *Type:* github.com/open-constructs/cdk-terrain-go/cdktn.TerraformProviderGeneratorMetadata

---

##### `Count`<sup>Optional</sup> <a name="Count" id="@cdktn/provider-cloudflare.dataCloudflareLogExplorerDatasets.DataCloudflareLogExplorerDatasets.property.count"></a>

```go
func Count() interface{}
```

- *Type:* interface{}

---

##### `DependsOn`<sup>Optional</sup> <a name="DependsOn" id="@cdktn/provider-cloudflare.dataCloudflareLogExplorerDatasets.DataCloudflareLogExplorerDatasets.property.dependsOn"></a>

```go
func DependsOn() *[]*string
```

- *Type:* *[]*string

---

##### `ForEach`<sup>Optional</sup> <a name="ForEach" id="@cdktn/provider-cloudflare.dataCloudflareLogExplorerDatasets.DataCloudflareLogExplorerDatasets.property.forEach"></a>

```go
func ForEach() ITerraformIterator
```

- *Type:* github.com/open-constructs/cdk-terrain-go/cdktn.ITerraformIterator

---

##### `Lifecycle`<sup>Optional</sup> <a name="Lifecycle" id="@cdktn/provider-cloudflare.dataCloudflareLogExplorerDatasets.DataCloudflareLogExplorerDatasets.property.lifecycle"></a>

```go
func Lifecycle() TerraformResourceLifecycle
```

- *Type:* github.com/open-constructs/cdk-terrain-go/cdktn.TerraformResourceLifecycle

---

##### `Provider`<sup>Optional</sup> <a name="Provider" id="@cdktn/provider-cloudflare.dataCloudflareLogExplorerDatasets.DataCloudflareLogExplorerDatasets.property.provider"></a>

```go
func Provider() TerraformProvider
```

- *Type:* github.com/open-constructs/cdk-terrain-go/cdktn.TerraformProvider

---

##### `Result`<sup>Required</sup> <a name="Result" id="@cdktn/provider-cloudflare.dataCloudflareLogExplorerDatasets.DataCloudflareLogExplorerDatasets.property.result"></a>

```go
func Result() DataCloudflareLogExplorerDatasetsResultList
```

- *Type:* <a href="#@cdktn/provider-cloudflare.dataCloudflareLogExplorerDatasets.DataCloudflareLogExplorerDatasetsResultList">DataCloudflareLogExplorerDatasetsResultList</a>

---

##### `AccountIdInput`<sup>Optional</sup> <a name="AccountIdInput" id="@cdktn/provider-cloudflare.dataCloudflareLogExplorerDatasets.DataCloudflareLogExplorerDatasets.property.accountIdInput"></a>

```go
func AccountIdInput() *string
```

- *Type:* *string

---

##### `IncludeZonesInput`<sup>Optional</sup> <a name="IncludeZonesInput" id="@cdktn/provider-cloudflare.dataCloudflareLogExplorerDatasets.DataCloudflareLogExplorerDatasets.property.includeZonesInput"></a>

```go
func IncludeZonesInput() interface{}
```

- *Type:* interface{}

---

##### `MaxItemsInput`<sup>Optional</sup> <a name="MaxItemsInput" id="@cdktn/provider-cloudflare.dataCloudflareLogExplorerDatasets.DataCloudflareLogExplorerDatasets.property.maxItemsInput"></a>

```go
func MaxItemsInput() *f64
```

- *Type:* *f64

---

##### `ZoneIdInput`<sup>Optional</sup> <a name="ZoneIdInput" id="@cdktn/provider-cloudflare.dataCloudflareLogExplorerDatasets.DataCloudflareLogExplorerDatasets.property.zoneIdInput"></a>

```go
func ZoneIdInput() *string
```

- *Type:* *string

---

##### `AccountId`<sup>Required</sup> <a name="AccountId" id="@cdktn/provider-cloudflare.dataCloudflareLogExplorerDatasets.DataCloudflareLogExplorerDatasets.property.accountId"></a>

```go
func AccountId() *string
```

- *Type:* *string

---

##### `IncludeZones`<sup>Required</sup> <a name="IncludeZones" id="@cdktn/provider-cloudflare.dataCloudflareLogExplorerDatasets.DataCloudflareLogExplorerDatasets.property.includeZones"></a>

```go
func IncludeZones() interface{}
```

- *Type:* interface{}

---

##### `MaxItems`<sup>Required</sup> <a name="MaxItems" id="@cdktn/provider-cloudflare.dataCloudflareLogExplorerDatasets.DataCloudflareLogExplorerDatasets.property.maxItems"></a>

```go
func MaxItems() *f64
```

- *Type:* *f64

---

##### `ZoneId`<sup>Required</sup> <a name="ZoneId" id="@cdktn/provider-cloudflare.dataCloudflareLogExplorerDatasets.DataCloudflareLogExplorerDatasets.property.zoneId"></a>

```go
func ZoneId() *string
```

- *Type:* *string

---

#### Constants <a name="Constants" id="Constants"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-cloudflare.dataCloudflareLogExplorerDatasets.DataCloudflareLogExplorerDatasets.property.tfResourceType">TfResourceType</a></code> | <code>*string</code> | *No description.* |

---

##### `TfResourceType`<sup>Required</sup> <a name="TfResourceType" id="@cdktn/provider-cloudflare.dataCloudflareLogExplorerDatasets.DataCloudflareLogExplorerDatasets.property.tfResourceType"></a>

```go
func TfResourceType() *string
```

- *Type:* *string

---

## Structs <a name="Structs" id="Structs"></a>

### DataCloudflareLogExplorerDatasetsConfig <a name="DataCloudflareLogExplorerDatasetsConfig" id="@cdktn/provider-cloudflare.dataCloudflareLogExplorerDatasets.DataCloudflareLogExplorerDatasetsConfig"></a>

#### Initializer <a name="Initializer" id="@cdktn/provider-cloudflare.dataCloudflareLogExplorerDatasets.DataCloudflareLogExplorerDatasetsConfig.Initializer"></a>

```go
import "github.com/cdktn-io/cdktn-provider-cloudflare-go/cloudflare/v17/datacloudflarelogexplorerdatasets"

&datacloudflarelogexplorerdatasets.DataCloudflareLogExplorerDatasetsConfig {
	Connection: interface{},
	Count: interface{},
	DependsOn: *[]github.com/open-constructs/cdk-terrain-go/cdktn.ITerraformDependable,
	ForEach: github.com/open-constructs/cdk-terrain-go/cdktn.ITerraformIterator,
	Lifecycle: github.com/open-constructs/cdk-terrain-go/cdktn.TerraformResourceLifecycle,
	Provider: github.com/open-constructs/cdk-terrain-go/cdktn.TerraformProvider,
	Provisioners: *[]interface{},
	AccountId: *string,
	IncludeZones: interface{},
	MaxItems: *f64,
	ZoneId: *string,
}
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-cloudflare.dataCloudflareLogExplorerDatasets.DataCloudflareLogExplorerDatasetsConfig.property.connection">Connection</a></code> | <code>interface{}</code> | *No description.* |
| <code><a href="#@cdktn/provider-cloudflare.dataCloudflareLogExplorerDatasets.DataCloudflareLogExplorerDatasetsConfig.property.count">Count</a></code> | <code>interface{}</code> | *No description.* |
| <code><a href="#@cdktn/provider-cloudflare.dataCloudflareLogExplorerDatasets.DataCloudflareLogExplorerDatasetsConfig.property.dependsOn">DependsOn</a></code> | <code>*[]github.com/open-constructs/cdk-terrain-go/cdktn.ITerraformDependable</code> | *No description.* |
| <code><a href="#@cdktn/provider-cloudflare.dataCloudflareLogExplorerDatasets.DataCloudflareLogExplorerDatasetsConfig.property.forEach">ForEach</a></code> | <code>github.com/open-constructs/cdk-terrain-go/cdktn.ITerraformIterator</code> | *No description.* |
| <code><a href="#@cdktn/provider-cloudflare.dataCloudflareLogExplorerDatasets.DataCloudflareLogExplorerDatasetsConfig.property.lifecycle">Lifecycle</a></code> | <code>github.com/open-constructs/cdk-terrain-go/cdktn.TerraformResourceLifecycle</code> | *No description.* |
| <code><a href="#@cdktn/provider-cloudflare.dataCloudflareLogExplorerDatasets.DataCloudflareLogExplorerDatasetsConfig.property.provider">Provider</a></code> | <code>github.com/open-constructs/cdk-terrain-go/cdktn.TerraformProvider</code> | *No description.* |
| <code><a href="#@cdktn/provider-cloudflare.dataCloudflareLogExplorerDatasets.DataCloudflareLogExplorerDatasetsConfig.property.provisioners">Provisioners</a></code> | <code>*[]interface{}</code> | *No description.* |
| <code><a href="#@cdktn/provider-cloudflare.dataCloudflareLogExplorerDatasets.DataCloudflareLogExplorerDatasetsConfig.property.accountId">AccountId</a></code> | <code>*string</code> | The Account ID to use for this endpoint. Mutually exclusive with the Zone ID. |
| <code><a href="#@cdktn/provider-cloudflare.dataCloudflareLogExplorerDatasets.DataCloudflareLogExplorerDatasetsConfig.property.includeZones">IncludeZones</a></code> | <code>interface{}</code> | Set to true to include zone-scoped datasets belonging to this account. Only supported with account_id. |
| <code><a href="#@cdktn/provider-cloudflare.dataCloudflareLogExplorerDatasets.DataCloudflareLogExplorerDatasetsConfig.property.maxItems">MaxItems</a></code> | <code>*f64</code> | Max items to fetch, default: 1000. |
| <code><a href="#@cdktn/provider-cloudflare.dataCloudflareLogExplorerDatasets.DataCloudflareLogExplorerDatasetsConfig.property.zoneId">ZoneId</a></code> | <code>*string</code> | The Zone ID to use for this endpoint. Mutually exclusive with the Account ID. |

---

##### `Connection`<sup>Optional</sup> <a name="Connection" id="@cdktn/provider-cloudflare.dataCloudflareLogExplorerDatasets.DataCloudflareLogExplorerDatasetsConfig.property.connection"></a>

```go
Connection interface{}
```

- *Type:* interface{}

---

##### `Count`<sup>Optional</sup> <a name="Count" id="@cdktn/provider-cloudflare.dataCloudflareLogExplorerDatasets.DataCloudflareLogExplorerDatasetsConfig.property.count"></a>

```go
Count interface{}
```

- *Type:* interface{}

---

##### `DependsOn`<sup>Optional</sup> <a name="DependsOn" id="@cdktn/provider-cloudflare.dataCloudflareLogExplorerDatasets.DataCloudflareLogExplorerDatasetsConfig.property.dependsOn"></a>

```go
DependsOn *[]ITerraformDependable
```

- *Type:* *[]github.com/open-constructs/cdk-terrain-go/cdktn.ITerraformDependable

---

##### `ForEach`<sup>Optional</sup> <a name="ForEach" id="@cdktn/provider-cloudflare.dataCloudflareLogExplorerDatasets.DataCloudflareLogExplorerDatasetsConfig.property.forEach"></a>

```go
ForEach ITerraformIterator
```

- *Type:* github.com/open-constructs/cdk-terrain-go/cdktn.ITerraformIterator

---

##### `Lifecycle`<sup>Optional</sup> <a name="Lifecycle" id="@cdktn/provider-cloudflare.dataCloudflareLogExplorerDatasets.DataCloudflareLogExplorerDatasetsConfig.property.lifecycle"></a>

```go
Lifecycle TerraformResourceLifecycle
```

- *Type:* github.com/open-constructs/cdk-terrain-go/cdktn.TerraformResourceLifecycle

---

##### `Provider`<sup>Optional</sup> <a name="Provider" id="@cdktn/provider-cloudflare.dataCloudflareLogExplorerDatasets.DataCloudflareLogExplorerDatasetsConfig.property.provider"></a>

```go
Provider TerraformProvider
```

- *Type:* github.com/open-constructs/cdk-terrain-go/cdktn.TerraformProvider

---

##### `Provisioners`<sup>Optional</sup> <a name="Provisioners" id="@cdktn/provider-cloudflare.dataCloudflareLogExplorerDatasets.DataCloudflareLogExplorerDatasetsConfig.property.provisioners"></a>

```go
Provisioners *[]interface{}
```

- *Type:* *[]interface{}

---

##### `AccountId`<sup>Optional</sup> <a name="AccountId" id="@cdktn/provider-cloudflare.dataCloudflareLogExplorerDatasets.DataCloudflareLogExplorerDatasetsConfig.property.accountId"></a>

```go
AccountId *string
```

- *Type:* *string

The Account ID to use for this endpoint. Mutually exclusive with the Zone ID.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/cloudflare/cloudflare/5.29.0/docs/data-sources/log_explorer_datasets#account_id DataCloudflareLogExplorerDatasets#account_id}

---

##### `IncludeZones`<sup>Optional</sup> <a name="IncludeZones" id="@cdktn/provider-cloudflare.dataCloudflareLogExplorerDatasets.DataCloudflareLogExplorerDatasetsConfig.property.includeZones"></a>

```go
IncludeZones interface{}
```

- *Type:* interface{}

Set to true to include zone-scoped datasets belonging to this account. Only supported with account_id.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/cloudflare/cloudflare/5.29.0/docs/data-sources/log_explorer_datasets#include_zones DataCloudflareLogExplorerDatasets#include_zones}

---

##### `MaxItems`<sup>Optional</sup> <a name="MaxItems" id="@cdktn/provider-cloudflare.dataCloudflareLogExplorerDatasets.DataCloudflareLogExplorerDatasetsConfig.property.maxItems"></a>

```go
MaxItems *f64
```

- *Type:* *f64

Max items to fetch, default: 1000.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/cloudflare/cloudflare/5.29.0/docs/data-sources/log_explorer_datasets#max_items DataCloudflareLogExplorerDatasets#max_items}

---

##### `ZoneId`<sup>Optional</sup> <a name="ZoneId" id="@cdktn/provider-cloudflare.dataCloudflareLogExplorerDatasets.DataCloudflareLogExplorerDatasetsConfig.property.zoneId"></a>

```go
ZoneId *string
```

- *Type:* *string

The Zone ID to use for this endpoint. Mutually exclusive with the Account ID.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/cloudflare/cloudflare/5.29.0/docs/data-sources/log_explorer_datasets#zone_id DataCloudflareLogExplorerDatasets#zone_id}

---

### DataCloudflareLogExplorerDatasetsResult <a name="DataCloudflareLogExplorerDatasetsResult" id="@cdktn/provider-cloudflare.dataCloudflareLogExplorerDatasets.DataCloudflareLogExplorerDatasetsResult"></a>

#### Initializer <a name="Initializer" id="@cdktn/provider-cloudflare.dataCloudflareLogExplorerDatasets.DataCloudflareLogExplorerDatasetsResult.Initializer"></a>

```go
import "github.com/cdktn-io/cdktn-provider-cloudflare-go/cloudflare/v17/datacloudflarelogexplorerdatasets"

&datacloudflarelogexplorerdatasets.DataCloudflareLogExplorerDatasetsResult {

}
```


## Classes <a name="Classes" id="Classes"></a>

### DataCloudflareLogExplorerDatasetsResultList <a name="DataCloudflareLogExplorerDatasetsResultList" id="@cdktn/provider-cloudflare.dataCloudflareLogExplorerDatasets.DataCloudflareLogExplorerDatasetsResultList"></a>

#### Initializers <a name="Initializers" id="@cdktn/provider-cloudflare.dataCloudflareLogExplorerDatasets.DataCloudflareLogExplorerDatasetsResultList.Initializer"></a>

```go
import "github.com/cdktn-io/cdktn-provider-cloudflare-go/cloudflare/v17/datacloudflarelogexplorerdatasets"

datacloudflarelogexplorerdatasets.NewDataCloudflareLogExplorerDatasetsResultList(terraformResource IInterpolatingParent, terraformAttribute *string, wrapsSet *bool) DataCloudflareLogExplorerDatasetsResultList
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-cloudflare.dataCloudflareLogExplorerDatasets.DataCloudflareLogExplorerDatasetsResultList.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>github.com/open-constructs/cdk-terrain-go/cdktn.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktn/provider-cloudflare.dataCloudflareLogExplorerDatasets.DataCloudflareLogExplorerDatasetsResultList.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>*string</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#@cdktn/provider-cloudflare.dataCloudflareLogExplorerDatasets.DataCloudflareLogExplorerDatasetsResultList.Initializer.parameter.wrapsSet">wrapsSet</a></code> | <code>*bool</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktn/provider-cloudflare.dataCloudflareLogExplorerDatasets.DataCloudflareLogExplorerDatasetsResultList.Initializer.parameter.terraformResource"></a>

- *Type:* github.com/open-constructs/cdk-terrain-go/cdktn.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-cloudflare.dataCloudflareLogExplorerDatasets.DataCloudflareLogExplorerDatasetsResultList.Initializer.parameter.terraformAttribute"></a>

- *Type:* *string

The attribute on the parent resource this class is referencing.

---

##### `wrapsSet`<sup>Required</sup> <a name="wrapsSet" id="@cdktn/provider-cloudflare.dataCloudflareLogExplorerDatasets.DataCloudflareLogExplorerDatasetsResultList.Initializer.parameter.wrapsSet"></a>

- *Type:* *bool

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-cloudflare.dataCloudflareLogExplorerDatasets.DataCloudflareLogExplorerDatasetsResultList.allWithMapKey">AllWithMapKey</a></code> | Creating an iterator for this complex list. |
| <code><a href="#@cdktn/provider-cloudflare.dataCloudflareLogExplorerDatasets.DataCloudflareLogExplorerDatasetsResultList.computeFqn">ComputeFqn</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-cloudflare.dataCloudflareLogExplorerDatasets.DataCloudflareLogExplorerDatasetsResultList.resolve">Resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktn/provider-cloudflare.dataCloudflareLogExplorerDatasets.DataCloudflareLogExplorerDatasetsResultList.toString">ToString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktn/provider-cloudflare.dataCloudflareLogExplorerDatasets.DataCloudflareLogExplorerDatasetsResultList.get">Get</a></code> | *No description.* |

---

##### `AllWithMapKey` <a name="AllWithMapKey" id="@cdktn/provider-cloudflare.dataCloudflareLogExplorerDatasets.DataCloudflareLogExplorerDatasetsResultList.allWithMapKey"></a>

```go
func AllWithMapKey(mapKeyAttributeName *string) DynamicListTerraformIterator
```

Creating an iterator for this complex list.

The list will be converted into a map with the mapKeyAttributeName as the key.

###### `mapKeyAttributeName`<sup>Required</sup> <a name="mapKeyAttributeName" id="@cdktn/provider-cloudflare.dataCloudflareLogExplorerDatasets.DataCloudflareLogExplorerDatasetsResultList.allWithMapKey.parameter.mapKeyAttributeName"></a>

- *Type:* *string

---

##### `ComputeFqn` <a name="ComputeFqn" id="@cdktn/provider-cloudflare.dataCloudflareLogExplorerDatasets.DataCloudflareLogExplorerDatasetsResultList.computeFqn"></a>

```go
func ComputeFqn() *string
```

##### `Resolve` <a name="Resolve" id="@cdktn/provider-cloudflare.dataCloudflareLogExplorerDatasets.DataCloudflareLogExplorerDatasetsResultList.resolve"></a>

```go
func Resolve(_context IResolveContext) interface{}
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktn/provider-cloudflare.dataCloudflareLogExplorerDatasets.DataCloudflareLogExplorerDatasetsResultList.resolve.parameter._context"></a>

- *Type:* github.com/open-constructs/cdk-terrain-go/cdktn.IResolveContext

---

##### `ToString` <a name="ToString" id="@cdktn/provider-cloudflare.dataCloudflareLogExplorerDatasets.DataCloudflareLogExplorerDatasetsResultList.toString"></a>

```go
func ToString() *string
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `Get` <a name="Get" id="@cdktn/provider-cloudflare.dataCloudflareLogExplorerDatasets.DataCloudflareLogExplorerDatasetsResultList.get"></a>

```go
func Get(index *f64) DataCloudflareLogExplorerDatasetsResultOutputReference
```

###### `index`<sup>Required</sup> <a name="index" id="@cdktn/provider-cloudflare.dataCloudflareLogExplorerDatasets.DataCloudflareLogExplorerDatasetsResultList.get.parameter.index"></a>

- *Type:* *f64

the index of the item to return.

---


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-cloudflare.dataCloudflareLogExplorerDatasets.DataCloudflareLogExplorerDatasetsResultList.property.creationStack">CreationStack</a></code> | <code>*[]*string</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktn/provider-cloudflare.dataCloudflareLogExplorerDatasets.DataCloudflareLogExplorerDatasetsResultList.property.fqn">Fqn</a></code> | <code>*string</code> | *No description.* |

---

##### `CreationStack`<sup>Required</sup> <a name="CreationStack" id="@cdktn/provider-cloudflare.dataCloudflareLogExplorerDatasets.DataCloudflareLogExplorerDatasetsResultList.property.creationStack"></a>

```go
func CreationStack() *[]*string
```

- *Type:* *[]*string

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `Fqn`<sup>Required</sup> <a name="Fqn" id="@cdktn/provider-cloudflare.dataCloudflareLogExplorerDatasets.DataCloudflareLogExplorerDatasetsResultList.property.fqn"></a>

```go
func Fqn() *string
```

- *Type:* *string

---


### DataCloudflareLogExplorerDatasetsResultOutputReference <a name="DataCloudflareLogExplorerDatasetsResultOutputReference" id="@cdktn/provider-cloudflare.dataCloudflareLogExplorerDatasets.DataCloudflareLogExplorerDatasetsResultOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktn/provider-cloudflare.dataCloudflareLogExplorerDatasets.DataCloudflareLogExplorerDatasetsResultOutputReference.Initializer"></a>

```go
import "github.com/cdktn-io/cdktn-provider-cloudflare-go/cloudflare/v17/datacloudflarelogexplorerdatasets"

datacloudflarelogexplorerdatasets.NewDataCloudflareLogExplorerDatasetsResultOutputReference(terraformResource IInterpolatingParent, terraformAttribute *string, complexObjectIndex *f64, complexObjectIsFromSet *bool) DataCloudflareLogExplorerDatasetsResultOutputReference
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-cloudflare.dataCloudflareLogExplorerDatasets.DataCloudflareLogExplorerDatasetsResultOutputReference.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>github.com/open-constructs/cdk-terrain-go/cdktn.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktn/provider-cloudflare.dataCloudflareLogExplorerDatasets.DataCloudflareLogExplorerDatasetsResultOutputReference.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>*string</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#@cdktn/provider-cloudflare.dataCloudflareLogExplorerDatasets.DataCloudflareLogExplorerDatasetsResultOutputReference.Initializer.parameter.complexObjectIndex">complexObjectIndex</a></code> | <code>*f64</code> | the index of this item in the list. |
| <code><a href="#@cdktn/provider-cloudflare.dataCloudflareLogExplorerDatasets.DataCloudflareLogExplorerDatasetsResultOutputReference.Initializer.parameter.complexObjectIsFromSet">complexObjectIsFromSet</a></code> | <code>*bool</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktn/provider-cloudflare.dataCloudflareLogExplorerDatasets.DataCloudflareLogExplorerDatasetsResultOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* github.com/open-constructs/cdk-terrain-go/cdktn.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-cloudflare.dataCloudflareLogExplorerDatasets.DataCloudflareLogExplorerDatasetsResultOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* *string

The attribute on the parent resource this class is referencing.

---

##### `complexObjectIndex`<sup>Required</sup> <a name="complexObjectIndex" id="@cdktn/provider-cloudflare.dataCloudflareLogExplorerDatasets.DataCloudflareLogExplorerDatasetsResultOutputReference.Initializer.parameter.complexObjectIndex"></a>

- *Type:* *f64

the index of this item in the list.

---

##### `complexObjectIsFromSet`<sup>Required</sup> <a name="complexObjectIsFromSet" id="@cdktn/provider-cloudflare.dataCloudflareLogExplorerDatasets.DataCloudflareLogExplorerDatasetsResultOutputReference.Initializer.parameter.complexObjectIsFromSet"></a>

- *Type:* *bool

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-cloudflare.dataCloudflareLogExplorerDatasets.DataCloudflareLogExplorerDatasetsResultOutputReference.computeFqn">ComputeFqn</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-cloudflare.dataCloudflareLogExplorerDatasets.DataCloudflareLogExplorerDatasetsResultOutputReference.getAnyMapAttribute">GetAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-cloudflare.dataCloudflareLogExplorerDatasets.DataCloudflareLogExplorerDatasetsResultOutputReference.getBooleanAttribute">GetBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-cloudflare.dataCloudflareLogExplorerDatasets.DataCloudflareLogExplorerDatasetsResultOutputReference.getBooleanMapAttribute">GetBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-cloudflare.dataCloudflareLogExplorerDatasets.DataCloudflareLogExplorerDatasetsResultOutputReference.getListAttribute">GetListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-cloudflare.dataCloudflareLogExplorerDatasets.DataCloudflareLogExplorerDatasetsResultOutputReference.getNumberAttribute">GetNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-cloudflare.dataCloudflareLogExplorerDatasets.DataCloudflareLogExplorerDatasetsResultOutputReference.getNumberListAttribute">GetNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-cloudflare.dataCloudflareLogExplorerDatasets.DataCloudflareLogExplorerDatasetsResultOutputReference.getNumberMapAttribute">GetNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-cloudflare.dataCloudflareLogExplorerDatasets.DataCloudflareLogExplorerDatasetsResultOutputReference.getStringAttribute">GetStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-cloudflare.dataCloudflareLogExplorerDatasets.DataCloudflareLogExplorerDatasetsResultOutputReference.getStringMapAttribute">GetStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-cloudflare.dataCloudflareLogExplorerDatasets.DataCloudflareLogExplorerDatasetsResultOutputReference.interpolationForAttribute">InterpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-cloudflare.dataCloudflareLogExplorerDatasets.DataCloudflareLogExplorerDatasetsResultOutputReference.resolve">Resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktn/provider-cloudflare.dataCloudflareLogExplorerDatasets.DataCloudflareLogExplorerDatasetsResultOutputReference.toString">ToString</a></code> | Return a string representation of this resolvable object. |

---

##### `ComputeFqn` <a name="ComputeFqn" id="@cdktn/provider-cloudflare.dataCloudflareLogExplorerDatasets.DataCloudflareLogExplorerDatasetsResultOutputReference.computeFqn"></a>

```go
func ComputeFqn() *string
```

##### `GetAnyMapAttribute` <a name="GetAnyMapAttribute" id="@cdktn/provider-cloudflare.dataCloudflareLogExplorerDatasets.DataCloudflareLogExplorerDatasetsResultOutputReference.getAnyMapAttribute"></a>

```go
func GetAnyMapAttribute(terraformAttribute *string) *map[string]interface{}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-cloudflare.dataCloudflareLogExplorerDatasets.DataCloudflareLogExplorerDatasetsResultOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetBooleanAttribute` <a name="GetBooleanAttribute" id="@cdktn/provider-cloudflare.dataCloudflareLogExplorerDatasets.DataCloudflareLogExplorerDatasetsResultOutputReference.getBooleanAttribute"></a>

```go
func GetBooleanAttribute(terraformAttribute *string) IResolvable
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-cloudflare.dataCloudflareLogExplorerDatasets.DataCloudflareLogExplorerDatasetsResultOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetBooleanMapAttribute` <a name="GetBooleanMapAttribute" id="@cdktn/provider-cloudflare.dataCloudflareLogExplorerDatasets.DataCloudflareLogExplorerDatasetsResultOutputReference.getBooleanMapAttribute"></a>

```go
func GetBooleanMapAttribute(terraformAttribute *string) *map[string]*bool
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-cloudflare.dataCloudflareLogExplorerDatasets.DataCloudflareLogExplorerDatasetsResultOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetListAttribute` <a name="GetListAttribute" id="@cdktn/provider-cloudflare.dataCloudflareLogExplorerDatasets.DataCloudflareLogExplorerDatasetsResultOutputReference.getListAttribute"></a>

```go
func GetListAttribute(terraformAttribute *string) *[]*string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-cloudflare.dataCloudflareLogExplorerDatasets.DataCloudflareLogExplorerDatasetsResultOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberAttribute` <a name="GetNumberAttribute" id="@cdktn/provider-cloudflare.dataCloudflareLogExplorerDatasets.DataCloudflareLogExplorerDatasetsResultOutputReference.getNumberAttribute"></a>

```go
func GetNumberAttribute(terraformAttribute *string) *f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-cloudflare.dataCloudflareLogExplorerDatasets.DataCloudflareLogExplorerDatasetsResultOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberListAttribute` <a name="GetNumberListAttribute" id="@cdktn/provider-cloudflare.dataCloudflareLogExplorerDatasets.DataCloudflareLogExplorerDatasetsResultOutputReference.getNumberListAttribute"></a>

```go
func GetNumberListAttribute(terraformAttribute *string) *[]*f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-cloudflare.dataCloudflareLogExplorerDatasets.DataCloudflareLogExplorerDatasetsResultOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberMapAttribute` <a name="GetNumberMapAttribute" id="@cdktn/provider-cloudflare.dataCloudflareLogExplorerDatasets.DataCloudflareLogExplorerDatasetsResultOutputReference.getNumberMapAttribute"></a>

```go
func GetNumberMapAttribute(terraformAttribute *string) *map[string]*f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-cloudflare.dataCloudflareLogExplorerDatasets.DataCloudflareLogExplorerDatasetsResultOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetStringAttribute` <a name="GetStringAttribute" id="@cdktn/provider-cloudflare.dataCloudflareLogExplorerDatasets.DataCloudflareLogExplorerDatasetsResultOutputReference.getStringAttribute"></a>

```go
func GetStringAttribute(terraformAttribute *string) *string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-cloudflare.dataCloudflareLogExplorerDatasets.DataCloudflareLogExplorerDatasetsResultOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetStringMapAttribute` <a name="GetStringMapAttribute" id="@cdktn/provider-cloudflare.dataCloudflareLogExplorerDatasets.DataCloudflareLogExplorerDatasetsResultOutputReference.getStringMapAttribute"></a>

```go
func GetStringMapAttribute(terraformAttribute *string) *map[string]*string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-cloudflare.dataCloudflareLogExplorerDatasets.DataCloudflareLogExplorerDatasetsResultOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `InterpolationForAttribute` <a name="InterpolationForAttribute" id="@cdktn/provider-cloudflare.dataCloudflareLogExplorerDatasets.DataCloudflareLogExplorerDatasetsResultOutputReference.interpolationForAttribute"></a>

```go
func InterpolationForAttribute(property *string) IResolvable
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktn/provider-cloudflare.dataCloudflareLogExplorerDatasets.DataCloudflareLogExplorerDatasetsResultOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* *string

---

##### `Resolve` <a name="Resolve" id="@cdktn/provider-cloudflare.dataCloudflareLogExplorerDatasets.DataCloudflareLogExplorerDatasetsResultOutputReference.resolve"></a>

```go
func Resolve(_context IResolveContext) interface{}
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktn/provider-cloudflare.dataCloudflareLogExplorerDatasets.DataCloudflareLogExplorerDatasetsResultOutputReference.resolve.parameter._context"></a>

- *Type:* github.com/open-constructs/cdk-terrain-go/cdktn.IResolveContext

---

##### `ToString` <a name="ToString" id="@cdktn/provider-cloudflare.dataCloudflareLogExplorerDatasets.DataCloudflareLogExplorerDatasetsResultOutputReference.toString"></a>

```go
func ToString() *string
```

Return a string representation of this resolvable object.

Returns a reversible string representation.


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-cloudflare.dataCloudflareLogExplorerDatasets.DataCloudflareLogExplorerDatasetsResultOutputReference.property.creationStack">CreationStack</a></code> | <code>*[]*string</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktn/provider-cloudflare.dataCloudflareLogExplorerDatasets.DataCloudflareLogExplorerDatasetsResultOutputReference.property.fqn">Fqn</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktn/provider-cloudflare.dataCloudflareLogExplorerDatasets.DataCloudflareLogExplorerDatasetsResultOutputReference.property.createdAt">CreatedAt</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktn/provider-cloudflare.dataCloudflareLogExplorerDatasets.DataCloudflareLogExplorerDatasetsResultOutputReference.property.dataset">Dataset</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktn/provider-cloudflare.dataCloudflareLogExplorerDatasets.DataCloudflareLogExplorerDatasetsResultOutputReference.property.datasetId">DatasetId</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktn/provider-cloudflare.dataCloudflareLogExplorerDatasets.DataCloudflareLogExplorerDatasetsResultOutputReference.property.deletionProtection">DeletionProtection</a></code> | <code>github.com/open-constructs/cdk-terrain-go/cdktn.IResolvable</code> | *No description.* |
| <code><a href="#@cdktn/provider-cloudflare.dataCloudflareLogExplorerDatasets.DataCloudflareLogExplorerDatasetsResultOutputReference.property.enabled">Enabled</a></code> | <code>github.com/open-constructs/cdk-terrain-go/cdktn.IResolvable</code> | *No description.* |
| <code><a href="#@cdktn/provider-cloudflare.dataCloudflareLogExplorerDatasets.DataCloudflareLogExplorerDatasetsResultOutputReference.property.id">Id</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktn/provider-cloudflare.dataCloudflareLogExplorerDatasets.DataCloudflareLogExplorerDatasetsResultOutputReference.property.objectId">ObjectId</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktn/provider-cloudflare.dataCloudflareLogExplorerDatasets.DataCloudflareLogExplorerDatasetsResultOutputReference.property.objectType">ObjectType</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktn/provider-cloudflare.dataCloudflareLogExplorerDatasets.DataCloudflareLogExplorerDatasetsResultOutputReference.property.updatedAt">UpdatedAt</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktn/provider-cloudflare.dataCloudflareLogExplorerDatasets.DataCloudflareLogExplorerDatasetsResultOutputReference.property.internalValue">InternalValue</a></code> | <code><a href="#@cdktn/provider-cloudflare.dataCloudflareLogExplorerDatasets.DataCloudflareLogExplorerDatasetsResult">DataCloudflareLogExplorerDatasetsResult</a></code> | *No description.* |

---

##### `CreationStack`<sup>Required</sup> <a name="CreationStack" id="@cdktn/provider-cloudflare.dataCloudflareLogExplorerDatasets.DataCloudflareLogExplorerDatasetsResultOutputReference.property.creationStack"></a>

```go
func CreationStack() *[]*string
```

- *Type:* *[]*string

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `Fqn`<sup>Required</sup> <a name="Fqn" id="@cdktn/provider-cloudflare.dataCloudflareLogExplorerDatasets.DataCloudflareLogExplorerDatasetsResultOutputReference.property.fqn"></a>

```go
func Fqn() *string
```

- *Type:* *string

---

##### `CreatedAt`<sup>Required</sup> <a name="CreatedAt" id="@cdktn/provider-cloudflare.dataCloudflareLogExplorerDatasets.DataCloudflareLogExplorerDatasetsResultOutputReference.property.createdAt"></a>

```go
func CreatedAt() *string
```

- *Type:* *string

---

##### `Dataset`<sup>Required</sup> <a name="Dataset" id="@cdktn/provider-cloudflare.dataCloudflareLogExplorerDatasets.DataCloudflareLogExplorerDatasetsResultOutputReference.property.dataset"></a>

```go
func Dataset() *string
```

- *Type:* *string

---

##### `DatasetId`<sup>Required</sup> <a name="DatasetId" id="@cdktn/provider-cloudflare.dataCloudflareLogExplorerDatasets.DataCloudflareLogExplorerDatasetsResultOutputReference.property.datasetId"></a>

```go
func DatasetId() *string
```

- *Type:* *string

---

##### `DeletionProtection`<sup>Required</sup> <a name="DeletionProtection" id="@cdktn/provider-cloudflare.dataCloudflareLogExplorerDatasets.DataCloudflareLogExplorerDatasetsResultOutputReference.property.deletionProtection"></a>

```go
func DeletionProtection() IResolvable
```

- *Type:* github.com/open-constructs/cdk-terrain-go/cdktn.IResolvable

---

##### `Enabled`<sup>Required</sup> <a name="Enabled" id="@cdktn/provider-cloudflare.dataCloudflareLogExplorerDatasets.DataCloudflareLogExplorerDatasetsResultOutputReference.property.enabled"></a>

```go
func Enabled() IResolvable
```

- *Type:* github.com/open-constructs/cdk-terrain-go/cdktn.IResolvable

---

##### `Id`<sup>Required</sup> <a name="Id" id="@cdktn/provider-cloudflare.dataCloudflareLogExplorerDatasets.DataCloudflareLogExplorerDatasetsResultOutputReference.property.id"></a>

```go
func Id() *string
```

- *Type:* *string

---

##### `ObjectId`<sup>Required</sup> <a name="ObjectId" id="@cdktn/provider-cloudflare.dataCloudflareLogExplorerDatasets.DataCloudflareLogExplorerDatasetsResultOutputReference.property.objectId"></a>

```go
func ObjectId() *string
```

- *Type:* *string

---

##### `ObjectType`<sup>Required</sup> <a name="ObjectType" id="@cdktn/provider-cloudflare.dataCloudflareLogExplorerDatasets.DataCloudflareLogExplorerDatasetsResultOutputReference.property.objectType"></a>

```go
func ObjectType() *string
```

- *Type:* *string

---

##### `UpdatedAt`<sup>Required</sup> <a name="UpdatedAt" id="@cdktn/provider-cloudflare.dataCloudflareLogExplorerDatasets.DataCloudflareLogExplorerDatasetsResultOutputReference.property.updatedAt"></a>

```go
func UpdatedAt() *string
```

- *Type:* *string

---

##### `InternalValue`<sup>Optional</sup> <a name="InternalValue" id="@cdktn/provider-cloudflare.dataCloudflareLogExplorerDatasets.DataCloudflareLogExplorerDatasetsResultOutputReference.property.internalValue"></a>

```go
func InternalValue() DataCloudflareLogExplorerDatasetsResult
```

- *Type:* <a href="#@cdktn/provider-cloudflare.dataCloudflareLogExplorerDatasets.DataCloudflareLogExplorerDatasetsResult">DataCloudflareLogExplorerDatasetsResult</a>

---



