# `dataCloudflareSpectrumApplications` Submodule <a name="`dataCloudflareSpectrumApplications` Submodule" id="@cdktn/provider-cloudflare.dataCloudflareSpectrumApplications"></a>

## Constructs <a name="Constructs" id="Constructs"></a>

### DataCloudflareSpectrumApplications <a name="DataCloudflareSpectrumApplications" id="@cdktn/provider-cloudflare.dataCloudflareSpectrumApplications.DataCloudflareSpectrumApplications"></a>

Represents a {@link https://registry.terraform.io/providers/cloudflare/cloudflare/5.17.0/docs/data-sources/spectrum_applications cloudflare_spectrum_applications}.

#### Initializers <a name="Initializers" id="@cdktn/provider-cloudflare.dataCloudflareSpectrumApplications.DataCloudflareSpectrumApplications.Initializer"></a>

```go
import "github.com/cdktn-io/cdktn-provider-cloudflare-go/cloudflare/v14/datacloudflarespectrumapplications"

datacloudflarespectrumapplications.NewDataCloudflareSpectrumApplications(scope Construct, id *string, config DataCloudflareSpectrumApplicationsConfig) DataCloudflareSpectrumApplications
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-cloudflare.dataCloudflareSpectrumApplications.DataCloudflareSpectrumApplications.Initializer.parameter.scope">scope</a></code> | <code>github.com/aws/constructs-go/constructs/v10.Construct</code> | The scope in which to define this construct. |
| <code><a href="#@cdktn/provider-cloudflare.dataCloudflareSpectrumApplications.DataCloudflareSpectrumApplications.Initializer.parameter.id">id</a></code> | <code>*string</code> | The scoped construct ID. |
| <code><a href="#@cdktn/provider-cloudflare.dataCloudflareSpectrumApplications.DataCloudflareSpectrumApplications.Initializer.parameter.config">config</a></code> | <code><a href="#@cdktn/provider-cloudflare.dataCloudflareSpectrumApplications.DataCloudflareSpectrumApplicationsConfig">DataCloudflareSpectrumApplicationsConfig</a></code> | *No description.* |

---

##### `scope`<sup>Required</sup> <a name="scope" id="@cdktn/provider-cloudflare.dataCloudflareSpectrumApplications.DataCloudflareSpectrumApplications.Initializer.parameter.scope"></a>

- *Type:* github.com/aws/constructs-go/constructs/v10.Construct

The scope in which to define this construct.

---

##### `id`<sup>Required</sup> <a name="id" id="@cdktn/provider-cloudflare.dataCloudflareSpectrumApplications.DataCloudflareSpectrumApplications.Initializer.parameter.id"></a>

- *Type:* *string

The scoped construct ID.

Must be unique amongst siblings in the same scope

---

##### `config`<sup>Required</sup> <a name="config" id="@cdktn/provider-cloudflare.dataCloudflareSpectrumApplications.DataCloudflareSpectrumApplications.Initializer.parameter.config"></a>

- *Type:* <a href="#@cdktn/provider-cloudflare.dataCloudflareSpectrumApplications.DataCloudflareSpectrumApplicationsConfig">DataCloudflareSpectrumApplicationsConfig</a>

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-cloudflare.dataCloudflareSpectrumApplications.DataCloudflareSpectrumApplications.toString">ToString</a></code> | Returns a string representation of this construct. |
| <code><a href="#@cdktn/provider-cloudflare.dataCloudflareSpectrumApplications.DataCloudflareSpectrumApplications.addOverride">AddOverride</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-cloudflare.dataCloudflareSpectrumApplications.DataCloudflareSpectrumApplications.overrideLogicalId">OverrideLogicalId</a></code> | Overrides the auto-generated logical ID with a specific ID. |
| <code><a href="#@cdktn/provider-cloudflare.dataCloudflareSpectrumApplications.DataCloudflareSpectrumApplications.resetOverrideLogicalId">ResetOverrideLogicalId</a></code> | Resets a previously passed logical Id to use the auto-generated logical id again. |
| <code><a href="#@cdktn/provider-cloudflare.dataCloudflareSpectrumApplications.DataCloudflareSpectrumApplications.toHclTerraform">ToHclTerraform</a></code> | Adds this resource to the terraform JSON output. |
| <code><a href="#@cdktn/provider-cloudflare.dataCloudflareSpectrumApplications.DataCloudflareSpectrumApplications.toMetadata">ToMetadata</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-cloudflare.dataCloudflareSpectrumApplications.DataCloudflareSpectrumApplications.toTerraform">ToTerraform</a></code> | Adds this resource to the terraform JSON output. |
| <code><a href="#@cdktn/provider-cloudflare.dataCloudflareSpectrumApplications.DataCloudflareSpectrumApplications.getAnyMapAttribute">GetAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-cloudflare.dataCloudflareSpectrumApplications.DataCloudflareSpectrumApplications.getBooleanAttribute">GetBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-cloudflare.dataCloudflareSpectrumApplications.DataCloudflareSpectrumApplications.getBooleanMapAttribute">GetBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-cloudflare.dataCloudflareSpectrumApplications.DataCloudflareSpectrumApplications.getListAttribute">GetListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-cloudflare.dataCloudflareSpectrumApplications.DataCloudflareSpectrumApplications.getNumberAttribute">GetNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-cloudflare.dataCloudflareSpectrumApplications.DataCloudflareSpectrumApplications.getNumberListAttribute">GetNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-cloudflare.dataCloudflareSpectrumApplications.DataCloudflareSpectrumApplications.getNumberMapAttribute">GetNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-cloudflare.dataCloudflareSpectrumApplications.DataCloudflareSpectrumApplications.getStringAttribute">GetStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-cloudflare.dataCloudflareSpectrumApplications.DataCloudflareSpectrumApplications.getStringMapAttribute">GetStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-cloudflare.dataCloudflareSpectrumApplications.DataCloudflareSpectrumApplications.interpolationForAttribute">InterpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-cloudflare.dataCloudflareSpectrumApplications.DataCloudflareSpectrumApplications.resetDirection">ResetDirection</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-cloudflare.dataCloudflareSpectrumApplications.DataCloudflareSpectrumApplications.resetMaxItems">ResetMaxItems</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-cloudflare.dataCloudflareSpectrumApplications.DataCloudflareSpectrumApplications.resetOrder">ResetOrder</a></code> | *No description.* |

---

##### `ToString` <a name="ToString" id="@cdktn/provider-cloudflare.dataCloudflareSpectrumApplications.DataCloudflareSpectrumApplications.toString"></a>

```go
func ToString() *string
```

Returns a string representation of this construct.

##### `AddOverride` <a name="AddOverride" id="@cdktn/provider-cloudflare.dataCloudflareSpectrumApplications.DataCloudflareSpectrumApplications.addOverride"></a>

```go
func AddOverride(path *string, value interface{})
```

###### `path`<sup>Required</sup> <a name="path" id="@cdktn/provider-cloudflare.dataCloudflareSpectrumApplications.DataCloudflareSpectrumApplications.addOverride.parameter.path"></a>

- *Type:* *string

---

###### `value`<sup>Required</sup> <a name="value" id="@cdktn/provider-cloudflare.dataCloudflareSpectrumApplications.DataCloudflareSpectrumApplications.addOverride.parameter.value"></a>

- *Type:* interface{}

---

##### `OverrideLogicalId` <a name="OverrideLogicalId" id="@cdktn/provider-cloudflare.dataCloudflareSpectrumApplications.DataCloudflareSpectrumApplications.overrideLogicalId"></a>

```go
func OverrideLogicalId(newLogicalId *string)
```

Overrides the auto-generated logical ID with a specific ID.

###### `newLogicalId`<sup>Required</sup> <a name="newLogicalId" id="@cdktn/provider-cloudflare.dataCloudflareSpectrumApplications.DataCloudflareSpectrumApplications.overrideLogicalId.parameter.newLogicalId"></a>

- *Type:* *string

The new logical ID to use for this stack element.

---

##### `ResetOverrideLogicalId` <a name="ResetOverrideLogicalId" id="@cdktn/provider-cloudflare.dataCloudflareSpectrumApplications.DataCloudflareSpectrumApplications.resetOverrideLogicalId"></a>

```go
func ResetOverrideLogicalId()
```

Resets a previously passed logical Id to use the auto-generated logical id again.

##### `ToHclTerraform` <a name="ToHclTerraform" id="@cdktn/provider-cloudflare.dataCloudflareSpectrumApplications.DataCloudflareSpectrumApplications.toHclTerraform"></a>

```go
func ToHclTerraform() interface{}
```

Adds this resource to the terraform JSON output.

##### `ToMetadata` <a name="ToMetadata" id="@cdktn/provider-cloudflare.dataCloudflareSpectrumApplications.DataCloudflareSpectrumApplications.toMetadata"></a>

```go
func ToMetadata() interface{}
```

##### `ToTerraform` <a name="ToTerraform" id="@cdktn/provider-cloudflare.dataCloudflareSpectrumApplications.DataCloudflareSpectrumApplications.toTerraform"></a>

```go
func ToTerraform() interface{}
```

Adds this resource to the terraform JSON output.

##### `GetAnyMapAttribute` <a name="GetAnyMapAttribute" id="@cdktn/provider-cloudflare.dataCloudflareSpectrumApplications.DataCloudflareSpectrumApplications.getAnyMapAttribute"></a>

```go
func GetAnyMapAttribute(terraformAttribute *string) *map[string]interface{}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-cloudflare.dataCloudflareSpectrumApplications.DataCloudflareSpectrumApplications.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetBooleanAttribute` <a name="GetBooleanAttribute" id="@cdktn/provider-cloudflare.dataCloudflareSpectrumApplications.DataCloudflareSpectrumApplications.getBooleanAttribute"></a>

```go
func GetBooleanAttribute(terraformAttribute *string) IResolvable
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-cloudflare.dataCloudflareSpectrumApplications.DataCloudflareSpectrumApplications.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetBooleanMapAttribute` <a name="GetBooleanMapAttribute" id="@cdktn/provider-cloudflare.dataCloudflareSpectrumApplications.DataCloudflareSpectrumApplications.getBooleanMapAttribute"></a>

```go
func GetBooleanMapAttribute(terraformAttribute *string) *map[string]*bool
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-cloudflare.dataCloudflareSpectrumApplications.DataCloudflareSpectrumApplications.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetListAttribute` <a name="GetListAttribute" id="@cdktn/provider-cloudflare.dataCloudflareSpectrumApplications.DataCloudflareSpectrumApplications.getListAttribute"></a>

```go
func GetListAttribute(terraformAttribute *string) *[]*string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-cloudflare.dataCloudflareSpectrumApplications.DataCloudflareSpectrumApplications.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberAttribute` <a name="GetNumberAttribute" id="@cdktn/provider-cloudflare.dataCloudflareSpectrumApplications.DataCloudflareSpectrumApplications.getNumberAttribute"></a>

```go
func GetNumberAttribute(terraformAttribute *string) *f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-cloudflare.dataCloudflareSpectrumApplications.DataCloudflareSpectrumApplications.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberListAttribute` <a name="GetNumberListAttribute" id="@cdktn/provider-cloudflare.dataCloudflareSpectrumApplications.DataCloudflareSpectrumApplications.getNumberListAttribute"></a>

```go
func GetNumberListAttribute(terraformAttribute *string) *[]*f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-cloudflare.dataCloudflareSpectrumApplications.DataCloudflareSpectrumApplications.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberMapAttribute` <a name="GetNumberMapAttribute" id="@cdktn/provider-cloudflare.dataCloudflareSpectrumApplications.DataCloudflareSpectrumApplications.getNumberMapAttribute"></a>

```go
func GetNumberMapAttribute(terraformAttribute *string) *map[string]*f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-cloudflare.dataCloudflareSpectrumApplications.DataCloudflareSpectrumApplications.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetStringAttribute` <a name="GetStringAttribute" id="@cdktn/provider-cloudflare.dataCloudflareSpectrumApplications.DataCloudflareSpectrumApplications.getStringAttribute"></a>

```go
func GetStringAttribute(terraformAttribute *string) *string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-cloudflare.dataCloudflareSpectrumApplications.DataCloudflareSpectrumApplications.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetStringMapAttribute` <a name="GetStringMapAttribute" id="@cdktn/provider-cloudflare.dataCloudflareSpectrumApplications.DataCloudflareSpectrumApplications.getStringMapAttribute"></a>

```go
func GetStringMapAttribute(terraformAttribute *string) *map[string]*string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-cloudflare.dataCloudflareSpectrumApplications.DataCloudflareSpectrumApplications.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `InterpolationForAttribute` <a name="InterpolationForAttribute" id="@cdktn/provider-cloudflare.dataCloudflareSpectrumApplications.DataCloudflareSpectrumApplications.interpolationForAttribute"></a>

```go
func InterpolationForAttribute(terraformAttribute *string) IResolvable
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-cloudflare.dataCloudflareSpectrumApplications.DataCloudflareSpectrumApplications.interpolationForAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `ResetDirection` <a name="ResetDirection" id="@cdktn/provider-cloudflare.dataCloudflareSpectrumApplications.DataCloudflareSpectrumApplications.resetDirection"></a>

```go
func ResetDirection()
```

##### `ResetMaxItems` <a name="ResetMaxItems" id="@cdktn/provider-cloudflare.dataCloudflareSpectrumApplications.DataCloudflareSpectrumApplications.resetMaxItems"></a>

```go
func ResetMaxItems()
```

##### `ResetOrder` <a name="ResetOrder" id="@cdktn/provider-cloudflare.dataCloudflareSpectrumApplications.DataCloudflareSpectrumApplications.resetOrder"></a>

```go
func ResetOrder()
```

#### Static Functions <a name="Static Functions" id="Static Functions"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-cloudflare.dataCloudflareSpectrumApplications.DataCloudflareSpectrumApplications.isConstruct">IsConstruct</a></code> | Checks if `x` is a construct. |
| <code><a href="#@cdktn/provider-cloudflare.dataCloudflareSpectrumApplications.DataCloudflareSpectrumApplications.isTerraformElement">IsTerraformElement</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-cloudflare.dataCloudflareSpectrumApplications.DataCloudflareSpectrumApplications.isTerraformDataSource">IsTerraformDataSource</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-cloudflare.dataCloudflareSpectrumApplications.DataCloudflareSpectrumApplications.generateConfigForImport">GenerateConfigForImport</a></code> | Generates CDKTN code for importing a DataCloudflareSpectrumApplications resource upon running "cdktn plan <stack-name>". |

---

##### `IsConstruct` <a name="IsConstruct" id="@cdktn/provider-cloudflare.dataCloudflareSpectrumApplications.DataCloudflareSpectrumApplications.isConstruct"></a>

```go
import "github.com/cdktn-io/cdktn-provider-cloudflare-go/cloudflare/v14/datacloudflarespectrumapplications"

datacloudflarespectrumapplications.DataCloudflareSpectrumApplications_IsConstruct(x interface{}) *bool
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

###### `x`<sup>Required</sup> <a name="x" id="@cdktn/provider-cloudflare.dataCloudflareSpectrumApplications.DataCloudflareSpectrumApplications.isConstruct.parameter.x"></a>

- *Type:* interface{}

Any object.

---

##### `IsTerraformElement` <a name="IsTerraformElement" id="@cdktn/provider-cloudflare.dataCloudflareSpectrumApplications.DataCloudflareSpectrumApplications.isTerraformElement"></a>

```go
import "github.com/cdktn-io/cdktn-provider-cloudflare-go/cloudflare/v14/datacloudflarespectrumapplications"

datacloudflarespectrumapplications.DataCloudflareSpectrumApplications_IsTerraformElement(x interface{}) *bool
```

###### `x`<sup>Required</sup> <a name="x" id="@cdktn/provider-cloudflare.dataCloudflareSpectrumApplications.DataCloudflareSpectrumApplications.isTerraformElement.parameter.x"></a>

- *Type:* interface{}

---

##### `IsTerraformDataSource` <a name="IsTerraformDataSource" id="@cdktn/provider-cloudflare.dataCloudflareSpectrumApplications.DataCloudflareSpectrumApplications.isTerraformDataSource"></a>

```go
import "github.com/cdktn-io/cdktn-provider-cloudflare-go/cloudflare/v14/datacloudflarespectrumapplications"

datacloudflarespectrumapplications.DataCloudflareSpectrumApplications_IsTerraformDataSource(x interface{}) *bool
```

###### `x`<sup>Required</sup> <a name="x" id="@cdktn/provider-cloudflare.dataCloudflareSpectrumApplications.DataCloudflareSpectrumApplications.isTerraformDataSource.parameter.x"></a>

- *Type:* interface{}

---

##### `GenerateConfigForImport` <a name="GenerateConfigForImport" id="@cdktn/provider-cloudflare.dataCloudflareSpectrumApplications.DataCloudflareSpectrumApplications.generateConfigForImport"></a>

```go
import "github.com/cdktn-io/cdktn-provider-cloudflare-go/cloudflare/v14/datacloudflarespectrumapplications"

datacloudflarespectrumapplications.DataCloudflareSpectrumApplications_GenerateConfigForImport(scope Construct, importToId *string, importFromId *string, provider TerraformProvider) ImportableResource
```

Generates CDKTN code for importing a DataCloudflareSpectrumApplications resource upon running "cdktn plan <stack-name>".

###### `scope`<sup>Required</sup> <a name="scope" id="@cdktn/provider-cloudflare.dataCloudflareSpectrumApplications.DataCloudflareSpectrumApplications.generateConfigForImport.parameter.scope"></a>

- *Type:* github.com/aws/constructs-go/constructs/v10.Construct

The scope in which to define this construct.

---

###### `importToId`<sup>Required</sup> <a name="importToId" id="@cdktn/provider-cloudflare.dataCloudflareSpectrumApplications.DataCloudflareSpectrumApplications.generateConfigForImport.parameter.importToId"></a>

- *Type:* *string

The construct id used in the generated config for the DataCloudflareSpectrumApplications to import.

---

###### `importFromId`<sup>Required</sup> <a name="importFromId" id="@cdktn/provider-cloudflare.dataCloudflareSpectrumApplications.DataCloudflareSpectrumApplications.generateConfigForImport.parameter.importFromId"></a>

- *Type:* *string

The id of the existing DataCloudflareSpectrumApplications that should be imported.

Refer to the {@link https://registry.terraform.io/providers/cloudflare/cloudflare/5.17.0/docs/data-sources/spectrum_applications#import import section} in the documentation of this resource for the id to use

---

###### `provider`<sup>Optional</sup> <a name="provider" id="@cdktn/provider-cloudflare.dataCloudflareSpectrumApplications.DataCloudflareSpectrumApplications.generateConfigForImport.parameter.provider"></a>

- *Type:* github.com/open-constructs/cdk-terrain-go/cdktn.TerraformProvider

? Optional instance of the provider where the DataCloudflareSpectrumApplications to import is found.

---

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-cloudflare.dataCloudflareSpectrumApplications.DataCloudflareSpectrumApplications.property.node">Node</a></code> | <code>github.com/aws/constructs-go/constructs/v10.Node</code> | The tree node. |
| <code><a href="#@cdktn/provider-cloudflare.dataCloudflareSpectrumApplications.DataCloudflareSpectrumApplications.property.cdktfStack">CdktfStack</a></code> | <code>github.com/open-constructs/cdk-terrain-go/cdktn.TerraformStack</code> | *No description.* |
| <code><a href="#@cdktn/provider-cloudflare.dataCloudflareSpectrumApplications.DataCloudflareSpectrumApplications.property.fqn">Fqn</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktn/provider-cloudflare.dataCloudflareSpectrumApplications.DataCloudflareSpectrumApplications.property.friendlyUniqueId">FriendlyUniqueId</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktn/provider-cloudflare.dataCloudflareSpectrumApplications.DataCloudflareSpectrumApplications.property.terraformMetaArguments">TerraformMetaArguments</a></code> | <code>*map[string]interface{}</code> | *No description.* |
| <code><a href="#@cdktn/provider-cloudflare.dataCloudflareSpectrumApplications.DataCloudflareSpectrumApplications.property.terraformResourceType">TerraformResourceType</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktn/provider-cloudflare.dataCloudflareSpectrumApplications.DataCloudflareSpectrumApplications.property.terraformGeneratorMetadata">TerraformGeneratorMetadata</a></code> | <code>github.com/open-constructs/cdk-terrain-go/cdktn.TerraformProviderGeneratorMetadata</code> | *No description.* |
| <code><a href="#@cdktn/provider-cloudflare.dataCloudflareSpectrumApplications.DataCloudflareSpectrumApplications.property.count">Count</a></code> | <code>interface{}</code> | *No description.* |
| <code><a href="#@cdktn/provider-cloudflare.dataCloudflareSpectrumApplications.DataCloudflareSpectrumApplications.property.dependsOn">DependsOn</a></code> | <code>*[]*string</code> | *No description.* |
| <code><a href="#@cdktn/provider-cloudflare.dataCloudflareSpectrumApplications.DataCloudflareSpectrumApplications.property.forEach">ForEach</a></code> | <code>github.com/open-constructs/cdk-terrain-go/cdktn.ITerraformIterator</code> | *No description.* |
| <code><a href="#@cdktn/provider-cloudflare.dataCloudflareSpectrumApplications.DataCloudflareSpectrumApplications.property.lifecycle">Lifecycle</a></code> | <code>github.com/open-constructs/cdk-terrain-go/cdktn.TerraformResourceLifecycle</code> | *No description.* |
| <code><a href="#@cdktn/provider-cloudflare.dataCloudflareSpectrumApplications.DataCloudflareSpectrumApplications.property.provider">Provider</a></code> | <code>github.com/open-constructs/cdk-terrain-go/cdktn.TerraformProvider</code> | *No description.* |
| <code><a href="#@cdktn/provider-cloudflare.dataCloudflareSpectrumApplications.DataCloudflareSpectrumApplications.property.result">Result</a></code> | <code><a href="#@cdktn/provider-cloudflare.dataCloudflareSpectrumApplications.DataCloudflareSpectrumApplicationsResultList">DataCloudflareSpectrumApplicationsResultList</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-cloudflare.dataCloudflareSpectrumApplications.DataCloudflareSpectrumApplications.property.directionInput">DirectionInput</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktn/provider-cloudflare.dataCloudflareSpectrumApplications.DataCloudflareSpectrumApplications.property.maxItemsInput">MaxItemsInput</a></code> | <code>*f64</code> | *No description.* |
| <code><a href="#@cdktn/provider-cloudflare.dataCloudflareSpectrumApplications.DataCloudflareSpectrumApplications.property.orderInput">OrderInput</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktn/provider-cloudflare.dataCloudflareSpectrumApplications.DataCloudflareSpectrumApplications.property.zoneIdInput">ZoneIdInput</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktn/provider-cloudflare.dataCloudflareSpectrumApplications.DataCloudflareSpectrumApplications.property.direction">Direction</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktn/provider-cloudflare.dataCloudflareSpectrumApplications.DataCloudflareSpectrumApplications.property.maxItems">MaxItems</a></code> | <code>*f64</code> | *No description.* |
| <code><a href="#@cdktn/provider-cloudflare.dataCloudflareSpectrumApplications.DataCloudflareSpectrumApplications.property.order">Order</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktn/provider-cloudflare.dataCloudflareSpectrumApplications.DataCloudflareSpectrumApplications.property.zoneId">ZoneId</a></code> | <code>*string</code> | *No description.* |

---

##### `Node`<sup>Required</sup> <a name="Node" id="@cdktn/provider-cloudflare.dataCloudflareSpectrumApplications.DataCloudflareSpectrumApplications.property.node"></a>

```go
func Node() Node
```

- *Type:* github.com/aws/constructs-go/constructs/v10.Node

The tree node.

---

##### `CdktfStack`<sup>Required</sup> <a name="CdktfStack" id="@cdktn/provider-cloudflare.dataCloudflareSpectrumApplications.DataCloudflareSpectrumApplications.property.cdktfStack"></a>

```go
func CdktfStack() TerraformStack
```

- *Type:* github.com/open-constructs/cdk-terrain-go/cdktn.TerraformStack

---

##### `Fqn`<sup>Required</sup> <a name="Fqn" id="@cdktn/provider-cloudflare.dataCloudflareSpectrumApplications.DataCloudflareSpectrumApplications.property.fqn"></a>

```go
func Fqn() *string
```

- *Type:* *string

---

##### `FriendlyUniqueId`<sup>Required</sup> <a name="FriendlyUniqueId" id="@cdktn/provider-cloudflare.dataCloudflareSpectrumApplications.DataCloudflareSpectrumApplications.property.friendlyUniqueId"></a>

```go
func FriendlyUniqueId() *string
```

- *Type:* *string

---

##### `TerraformMetaArguments`<sup>Required</sup> <a name="TerraformMetaArguments" id="@cdktn/provider-cloudflare.dataCloudflareSpectrumApplications.DataCloudflareSpectrumApplications.property.terraformMetaArguments"></a>

```go
func TerraformMetaArguments() *map[string]interface{}
```

- *Type:* *map[string]interface{}

---

##### `TerraformResourceType`<sup>Required</sup> <a name="TerraformResourceType" id="@cdktn/provider-cloudflare.dataCloudflareSpectrumApplications.DataCloudflareSpectrumApplications.property.terraformResourceType"></a>

```go
func TerraformResourceType() *string
```

- *Type:* *string

---

##### `TerraformGeneratorMetadata`<sup>Optional</sup> <a name="TerraformGeneratorMetadata" id="@cdktn/provider-cloudflare.dataCloudflareSpectrumApplications.DataCloudflareSpectrumApplications.property.terraformGeneratorMetadata"></a>

```go
func TerraformGeneratorMetadata() TerraformProviderGeneratorMetadata
```

- *Type:* github.com/open-constructs/cdk-terrain-go/cdktn.TerraformProviderGeneratorMetadata

---

##### `Count`<sup>Optional</sup> <a name="Count" id="@cdktn/provider-cloudflare.dataCloudflareSpectrumApplications.DataCloudflareSpectrumApplications.property.count"></a>

```go
func Count() interface{}
```

- *Type:* interface{}

---

##### `DependsOn`<sup>Optional</sup> <a name="DependsOn" id="@cdktn/provider-cloudflare.dataCloudflareSpectrumApplications.DataCloudflareSpectrumApplications.property.dependsOn"></a>

```go
func DependsOn() *[]*string
```

- *Type:* *[]*string

---

##### `ForEach`<sup>Optional</sup> <a name="ForEach" id="@cdktn/provider-cloudflare.dataCloudflareSpectrumApplications.DataCloudflareSpectrumApplications.property.forEach"></a>

```go
func ForEach() ITerraformIterator
```

- *Type:* github.com/open-constructs/cdk-terrain-go/cdktn.ITerraformIterator

---

##### `Lifecycle`<sup>Optional</sup> <a name="Lifecycle" id="@cdktn/provider-cloudflare.dataCloudflareSpectrumApplications.DataCloudflareSpectrumApplications.property.lifecycle"></a>

```go
func Lifecycle() TerraformResourceLifecycle
```

- *Type:* github.com/open-constructs/cdk-terrain-go/cdktn.TerraformResourceLifecycle

---

##### `Provider`<sup>Optional</sup> <a name="Provider" id="@cdktn/provider-cloudflare.dataCloudflareSpectrumApplications.DataCloudflareSpectrumApplications.property.provider"></a>

```go
func Provider() TerraformProvider
```

- *Type:* github.com/open-constructs/cdk-terrain-go/cdktn.TerraformProvider

---

##### `Result`<sup>Required</sup> <a name="Result" id="@cdktn/provider-cloudflare.dataCloudflareSpectrumApplications.DataCloudflareSpectrumApplications.property.result"></a>

```go
func Result() DataCloudflareSpectrumApplicationsResultList
```

- *Type:* <a href="#@cdktn/provider-cloudflare.dataCloudflareSpectrumApplications.DataCloudflareSpectrumApplicationsResultList">DataCloudflareSpectrumApplicationsResultList</a>

---

##### `DirectionInput`<sup>Optional</sup> <a name="DirectionInput" id="@cdktn/provider-cloudflare.dataCloudflareSpectrumApplications.DataCloudflareSpectrumApplications.property.directionInput"></a>

```go
func DirectionInput() *string
```

- *Type:* *string

---

##### `MaxItemsInput`<sup>Optional</sup> <a name="MaxItemsInput" id="@cdktn/provider-cloudflare.dataCloudflareSpectrumApplications.DataCloudflareSpectrumApplications.property.maxItemsInput"></a>

```go
func MaxItemsInput() *f64
```

- *Type:* *f64

---

##### `OrderInput`<sup>Optional</sup> <a name="OrderInput" id="@cdktn/provider-cloudflare.dataCloudflareSpectrumApplications.DataCloudflareSpectrumApplications.property.orderInput"></a>

```go
func OrderInput() *string
```

- *Type:* *string

---

##### `ZoneIdInput`<sup>Optional</sup> <a name="ZoneIdInput" id="@cdktn/provider-cloudflare.dataCloudflareSpectrumApplications.DataCloudflareSpectrumApplications.property.zoneIdInput"></a>

```go
func ZoneIdInput() *string
```

- *Type:* *string

---

##### `Direction`<sup>Required</sup> <a name="Direction" id="@cdktn/provider-cloudflare.dataCloudflareSpectrumApplications.DataCloudflareSpectrumApplications.property.direction"></a>

```go
func Direction() *string
```

- *Type:* *string

---

##### `MaxItems`<sup>Required</sup> <a name="MaxItems" id="@cdktn/provider-cloudflare.dataCloudflareSpectrumApplications.DataCloudflareSpectrumApplications.property.maxItems"></a>

```go
func MaxItems() *f64
```

- *Type:* *f64

---

##### `Order`<sup>Required</sup> <a name="Order" id="@cdktn/provider-cloudflare.dataCloudflareSpectrumApplications.DataCloudflareSpectrumApplications.property.order"></a>

```go
func Order() *string
```

- *Type:* *string

---

##### `ZoneId`<sup>Required</sup> <a name="ZoneId" id="@cdktn/provider-cloudflare.dataCloudflareSpectrumApplications.DataCloudflareSpectrumApplications.property.zoneId"></a>

```go
func ZoneId() *string
```

- *Type:* *string

---

#### Constants <a name="Constants" id="Constants"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-cloudflare.dataCloudflareSpectrumApplications.DataCloudflareSpectrumApplications.property.tfResourceType">TfResourceType</a></code> | <code>*string</code> | *No description.* |

---

##### `TfResourceType`<sup>Required</sup> <a name="TfResourceType" id="@cdktn/provider-cloudflare.dataCloudflareSpectrumApplications.DataCloudflareSpectrumApplications.property.tfResourceType"></a>

```go
func TfResourceType() *string
```

- *Type:* *string

---

## Structs <a name="Structs" id="Structs"></a>

### DataCloudflareSpectrumApplicationsConfig <a name="DataCloudflareSpectrumApplicationsConfig" id="@cdktn/provider-cloudflare.dataCloudflareSpectrumApplications.DataCloudflareSpectrumApplicationsConfig"></a>

#### Initializer <a name="Initializer" id="@cdktn/provider-cloudflare.dataCloudflareSpectrumApplications.DataCloudflareSpectrumApplicationsConfig.Initializer"></a>

```go
import "github.com/cdktn-io/cdktn-provider-cloudflare-go/cloudflare/v14/datacloudflarespectrumapplications"

&datacloudflarespectrumapplications.DataCloudflareSpectrumApplicationsConfig {
	Connection: interface{},
	Count: interface{},
	DependsOn: *[]github.com/open-constructs/cdk-terrain-go/cdktn.ITerraformDependable,
	ForEach: github.com/open-constructs/cdk-terrain-go/cdktn.ITerraformIterator,
	Lifecycle: github.com/open-constructs/cdk-terrain-go/cdktn.TerraformResourceLifecycle,
	Provider: github.com/open-constructs/cdk-terrain-go/cdktn.TerraformProvider,
	Provisioners: *[]interface{},
	ZoneId: *string,
	Direction: *string,
	MaxItems: *f64,
	Order: *string,
}
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-cloudflare.dataCloudflareSpectrumApplications.DataCloudflareSpectrumApplicationsConfig.property.connection">Connection</a></code> | <code>interface{}</code> | *No description.* |
| <code><a href="#@cdktn/provider-cloudflare.dataCloudflareSpectrumApplications.DataCloudflareSpectrumApplicationsConfig.property.count">Count</a></code> | <code>interface{}</code> | *No description.* |
| <code><a href="#@cdktn/provider-cloudflare.dataCloudflareSpectrumApplications.DataCloudflareSpectrumApplicationsConfig.property.dependsOn">DependsOn</a></code> | <code>*[]github.com/open-constructs/cdk-terrain-go/cdktn.ITerraformDependable</code> | *No description.* |
| <code><a href="#@cdktn/provider-cloudflare.dataCloudflareSpectrumApplications.DataCloudflareSpectrumApplicationsConfig.property.forEach">ForEach</a></code> | <code>github.com/open-constructs/cdk-terrain-go/cdktn.ITerraformIterator</code> | *No description.* |
| <code><a href="#@cdktn/provider-cloudflare.dataCloudflareSpectrumApplications.DataCloudflareSpectrumApplicationsConfig.property.lifecycle">Lifecycle</a></code> | <code>github.com/open-constructs/cdk-terrain-go/cdktn.TerraformResourceLifecycle</code> | *No description.* |
| <code><a href="#@cdktn/provider-cloudflare.dataCloudflareSpectrumApplications.DataCloudflareSpectrumApplicationsConfig.property.provider">Provider</a></code> | <code>github.com/open-constructs/cdk-terrain-go/cdktn.TerraformProvider</code> | *No description.* |
| <code><a href="#@cdktn/provider-cloudflare.dataCloudflareSpectrumApplications.DataCloudflareSpectrumApplicationsConfig.property.provisioners">Provisioners</a></code> | <code>*[]interface{}</code> | *No description.* |
| <code><a href="#@cdktn/provider-cloudflare.dataCloudflareSpectrumApplications.DataCloudflareSpectrumApplicationsConfig.property.zoneId">ZoneId</a></code> | <code>*string</code> | Zone identifier. |
| <code><a href="#@cdktn/provider-cloudflare.dataCloudflareSpectrumApplications.DataCloudflareSpectrumApplicationsConfig.property.direction">Direction</a></code> | <code>*string</code> | Sets the direction by which results are ordered. Available values: "asc", "desc". |
| <code><a href="#@cdktn/provider-cloudflare.dataCloudflareSpectrumApplications.DataCloudflareSpectrumApplicationsConfig.property.maxItems">MaxItems</a></code> | <code>*f64</code> | Max items to fetch, default: 1000. |
| <code><a href="#@cdktn/provider-cloudflare.dataCloudflareSpectrumApplications.DataCloudflareSpectrumApplicationsConfig.property.order">Order</a></code> | <code>*string</code> | Application field by which results are ordered. Available values: "protocol", "app_id", "created_on", "modified_on", "dns". |

---

##### `Connection`<sup>Optional</sup> <a name="Connection" id="@cdktn/provider-cloudflare.dataCloudflareSpectrumApplications.DataCloudflareSpectrumApplicationsConfig.property.connection"></a>

```go
Connection interface{}
```

- *Type:* interface{}

---

##### `Count`<sup>Optional</sup> <a name="Count" id="@cdktn/provider-cloudflare.dataCloudflareSpectrumApplications.DataCloudflareSpectrumApplicationsConfig.property.count"></a>

```go
Count interface{}
```

- *Type:* interface{}

---

##### `DependsOn`<sup>Optional</sup> <a name="DependsOn" id="@cdktn/provider-cloudflare.dataCloudflareSpectrumApplications.DataCloudflareSpectrumApplicationsConfig.property.dependsOn"></a>

```go
DependsOn *[]ITerraformDependable
```

- *Type:* *[]github.com/open-constructs/cdk-terrain-go/cdktn.ITerraformDependable

---

##### `ForEach`<sup>Optional</sup> <a name="ForEach" id="@cdktn/provider-cloudflare.dataCloudflareSpectrumApplications.DataCloudflareSpectrumApplicationsConfig.property.forEach"></a>

```go
ForEach ITerraformIterator
```

- *Type:* github.com/open-constructs/cdk-terrain-go/cdktn.ITerraformIterator

---

##### `Lifecycle`<sup>Optional</sup> <a name="Lifecycle" id="@cdktn/provider-cloudflare.dataCloudflareSpectrumApplications.DataCloudflareSpectrumApplicationsConfig.property.lifecycle"></a>

```go
Lifecycle TerraformResourceLifecycle
```

- *Type:* github.com/open-constructs/cdk-terrain-go/cdktn.TerraformResourceLifecycle

---

##### `Provider`<sup>Optional</sup> <a name="Provider" id="@cdktn/provider-cloudflare.dataCloudflareSpectrumApplications.DataCloudflareSpectrumApplicationsConfig.property.provider"></a>

```go
Provider TerraformProvider
```

- *Type:* github.com/open-constructs/cdk-terrain-go/cdktn.TerraformProvider

---

##### `Provisioners`<sup>Optional</sup> <a name="Provisioners" id="@cdktn/provider-cloudflare.dataCloudflareSpectrumApplications.DataCloudflareSpectrumApplicationsConfig.property.provisioners"></a>

```go
Provisioners *[]interface{}
```

- *Type:* *[]interface{}

---

##### `ZoneId`<sup>Required</sup> <a name="ZoneId" id="@cdktn/provider-cloudflare.dataCloudflareSpectrumApplications.DataCloudflareSpectrumApplicationsConfig.property.zoneId"></a>

```go
ZoneId *string
```

- *Type:* *string

Zone identifier.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/cloudflare/cloudflare/5.17.0/docs/data-sources/spectrum_applications#zone_id DataCloudflareSpectrumApplications#zone_id}

---

##### `Direction`<sup>Optional</sup> <a name="Direction" id="@cdktn/provider-cloudflare.dataCloudflareSpectrumApplications.DataCloudflareSpectrumApplicationsConfig.property.direction"></a>

```go
Direction *string
```

- *Type:* *string

Sets the direction by which results are ordered. Available values: "asc", "desc".

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/cloudflare/cloudflare/5.17.0/docs/data-sources/spectrum_applications#direction DataCloudflareSpectrumApplications#direction}

---

##### `MaxItems`<sup>Optional</sup> <a name="MaxItems" id="@cdktn/provider-cloudflare.dataCloudflareSpectrumApplications.DataCloudflareSpectrumApplicationsConfig.property.maxItems"></a>

```go
MaxItems *f64
```

- *Type:* *f64

Max items to fetch, default: 1000.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/cloudflare/cloudflare/5.17.0/docs/data-sources/spectrum_applications#max_items DataCloudflareSpectrumApplications#max_items}

---

##### `Order`<sup>Optional</sup> <a name="Order" id="@cdktn/provider-cloudflare.dataCloudflareSpectrumApplications.DataCloudflareSpectrumApplicationsConfig.property.order"></a>

```go
Order *string
```

- *Type:* *string

Application field by which results are ordered. Available values: "protocol", "app_id", "created_on", "modified_on", "dns".

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/cloudflare/cloudflare/5.17.0/docs/data-sources/spectrum_applications#order DataCloudflareSpectrumApplications#order}

---

### DataCloudflareSpectrumApplicationsResult <a name="DataCloudflareSpectrumApplicationsResult" id="@cdktn/provider-cloudflare.dataCloudflareSpectrumApplications.DataCloudflareSpectrumApplicationsResult"></a>

#### Initializer <a name="Initializer" id="@cdktn/provider-cloudflare.dataCloudflareSpectrumApplications.DataCloudflareSpectrumApplicationsResult.Initializer"></a>

```go
import "github.com/cdktn-io/cdktn-provider-cloudflare-go/cloudflare/v14/datacloudflarespectrumapplications"

&datacloudflarespectrumapplications.DataCloudflareSpectrumApplicationsResult {

}
```


### DataCloudflareSpectrumApplicationsResultDns <a name="DataCloudflareSpectrumApplicationsResultDns" id="@cdktn/provider-cloudflare.dataCloudflareSpectrumApplications.DataCloudflareSpectrumApplicationsResultDns"></a>

#### Initializer <a name="Initializer" id="@cdktn/provider-cloudflare.dataCloudflareSpectrumApplications.DataCloudflareSpectrumApplicationsResultDns.Initializer"></a>

```go
import "github.com/cdktn-io/cdktn-provider-cloudflare-go/cloudflare/v14/datacloudflarespectrumapplications"

&datacloudflarespectrumapplications.DataCloudflareSpectrumApplicationsResultDns {

}
```


### DataCloudflareSpectrumApplicationsResultEdgeIps <a name="DataCloudflareSpectrumApplicationsResultEdgeIps" id="@cdktn/provider-cloudflare.dataCloudflareSpectrumApplications.DataCloudflareSpectrumApplicationsResultEdgeIps"></a>

#### Initializer <a name="Initializer" id="@cdktn/provider-cloudflare.dataCloudflareSpectrumApplications.DataCloudflareSpectrumApplicationsResultEdgeIps.Initializer"></a>

```go
import "github.com/cdktn-io/cdktn-provider-cloudflare-go/cloudflare/v14/datacloudflarespectrumapplications"

&datacloudflarespectrumapplications.DataCloudflareSpectrumApplicationsResultEdgeIps {

}
```


### DataCloudflareSpectrumApplicationsResultOriginDns <a name="DataCloudflareSpectrumApplicationsResultOriginDns" id="@cdktn/provider-cloudflare.dataCloudflareSpectrumApplications.DataCloudflareSpectrumApplicationsResultOriginDns"></a>

#### Initializer <a name="Initializer" id="@cdktn/provider-cloudflare.dataCloudflareSpectrumApplications.DataCloudflareSpectrumApplicationsResultOriginDns.Initializer"></a>

```go
import "github.com/cdktn-io/cdktn-provider-cloudflare-go/cloudflare/v14/datacloudflarespectrumapplications"

&datacloudflarespectrumapplications.DataCloudflareSpectrumApplicationsResultOriginDns {

}
```


## Classes <a name="Classes" id="Classes"></a>

### DataCloudflareSpectrumApplicationsResultDnsOutputReference <a name="DataCloudflareSpectrumApplicationsResultDnsOutputReference" id="@cdktn/provider-cloudflare.dataCloudflareSpectrumApplications.DataCloudflareSpectrumApplicationsResultDnsOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktn/provider-cloudflare.dataCloudflareSpectrumApplications.DataCloudflareSpectrumApplicationsResultDnsOutputReference.Initializer"></a>

```go
import "github.com/cdktn-io/cdktn-provider-cloudflare-go/cloudflare/v14/datacloudflarespectrumapplications"

datacloudflarespectrumapplications.NewDataCloudflareSpectrumApplicationsResultDnsOutputReference(terraformResource IInterpolatingParent, terraformAttribute *string) DataCloudflareSpectrumApplicationsResultDnsOutputReference
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-cloudflare.dataCloudflareSpectrumApplications.DataCloudflareSpectrumApplicationsResultDnsOutputReference.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>github.com/open-constructs/cdk-terrain-go/cdktn.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktn/provider-cloudflare.dataCloudflareSpectrumApplications.DataCloudflareSpectrumApplicationsResultDnsOutputReference.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>*string</code> | The attribute on the parent resource this class is referencing. |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktn/provider-cloudflare.dataCloudflareSpectrumApplications.DataCloudflareSpectrumApplicationsResultDnsOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* github.com/open-constructs/cdk-terrain-go/cdktn.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-cloudflare.dataCloudflareSpectrumApplications.DataCloudflareSpectrumApplicationsResultDnsOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* *string

The attribute on the parent resource this class is referencing.

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-cloudflare.dataCloudflareSpectrumApplications.DataCloudflareSpectrumApplicationsResultDnsOutputReference.computeFqn">ComputeFqn</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-cloudflare.dataCloudflareSpectrumApplications.DataCloudflareSpectrumApplicationsResultDnsOutputReference.getAnyMapAttribute">GetAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-cloudflare.dataCloudflareSpectrumApplications.DataCloudflareSpectrumApplicationsResultDnsOutputReference.getBooleanAttribute">GetBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-cloudflare.dataCloudflareSpectrumApplications.DataCloudflareSpectrumApplicationsResultDnsOutputReference.getBooleanMapAttribute">GetBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-cloudflare.dataCloudflareSpectrumApplications.DataCloudflareSpectrumApplicationsResultDnsOutputReference.getListAttribute">GetListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-cloudflare.dataCloudflareSpectrumApplications.DataCloudflareSpectrumApplicationsResultDnsOutputReference.getNumberAttribute">GetNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-cloudflare.dataCloudflareSpectrumApplications.DataCloudflareSpectrumApplicationsResultDnsOutputReference.getNumberListAttribute">GetNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-cloudflare.dataCloudflareSpectrumApplications.DataCloudflareSpectrumApplicationsResultDnsOutputReference.getNumberMapAttribute">GetNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-cloudflare.dataCloudflareSpectrumApplications.DataCloudflareSpectrumApplicationsResultDnsOutputReference.getStringAttribute">GetStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-cloudflare.dataCloudflareSpectrumApplications.DataCloudflareSpectrumApplicationsResultDnsOutputReference.getStringMapAttribute">GetStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-cloudflare.dataCloudflareSpectrumApplications.DataCloudflareSpectrumApplicationsResultDnsOutputReference.interpolationForAttribute">InterpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-cloudflare.dataCloudflareSpectrumApplications.DataCloudflareSpectrumApplicationsResultDnsOutputReference.resolve">Resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktn/provider-cloudflare.dataCloudflareSpectrumApplications.DataCloudflareSpectrumApplicationsResultDnsOutputReference.toString">ToString</a></code> | Return a string representation of this resolvable object. |

---

##### `ComputeFqn` <a name="ComputeFqn" id="@cdktn/provider-cloudflare.dataCloudflareSpectrumApplications.DataCloudflareSpectrumApplicationsResultDnsOutputReference.computeFqn"></a>

```go
func ComputeFqn() *string
```

##### `GetAnyMapAttribute` <a name="GetAnyMapAttribute" id="@cdktn/provider-cloudflare.dataCloudflareSpectrumApplications.DataCloudflareSpectrumApplicationsResultDnsOutputReference.getAnyMapAttribute"></a>

```go
func GetAnyMapAttribute(terraformAttribute *string) *map[string]interface{}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-cloudflare.dataCloudflareSpectrumApplications.DataCloudflareSpectrumApplicationsResultDnsOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetBooleanAttribute` <a name="GetBooleanAttribute" id="@cdktn/provider-cloudflare.dataCloudflareSpectrumApplications.DataCloudflareSpectrumApplicationsResultDnsOutputReference.getBooleanAttribute"></a>

```go
func GetBooleanAttribute(terraformAttribute *string) IResolvable
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-cloudflare.dataCloudflareSpectrumApplications.DataCloudflareSpectrumApplicationsResultDnsOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetBooleanMapAttribute` <a name="GetBooleanMapAttribute" id="@cdktn/provider-cloudflare.dataCloudflareSpectrumApplications.DataCloudflareSpectrumApplicationsResultDnsOutputReference.getBooleanMapAttribute"></a>

```go
func GetBooleanMapAttribute(terraformAttribute *string) *map[string]*bool
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-cloudflare.dataCloudflareSpectrumApplications.DataCloudflareSpectrumApplicationsResultDnsOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetListAttribute` <a name="GetListAttribute" id="@cdktn/provider-cloudflare.dataCloudflareSpectrumApplications.DataCloudflareSpectrumApplicationsResultDnsOutputReference.getListAttribute"></a>

```go
func GetListAttribute(terraformAttribute *string) *[]*string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-cloudflare.dataCloudflareSpectrumApplications.DataCloudflareSpectrumApplicationsResultDnsOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberAttribute` <a name="GetNumberAttribute" id="@cdktn/provider-cloudflare.dataCloudflareSpectrumApplications.DataCloudflareSpectrumApplicationsResultDnsOutputReference.getNumberAttribute"></a>

```go
func GetNumberAttribute(terraformAttribute *string) *f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-cloudflare.dataCloudflareSpectrumApplications.DataCloudflareSpectrumApplicationsResultDnsOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberListAttribute` <a name="GetNumberListAttribute" id="@cdktn/provider-cloudflare.dataCloudflareSpectrumApplications.DataCloudflareSpectrumApplicationsResultDnsOutputReference.getNumberListAttribute"></a>

```go
func GetNumberListAttribute(terraformAttribute *string) *[]*f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-cloudflare.dataCloudflareSpectrumApplications.DataCloudflareSpectrumApplicationsResultDnsOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberMapAttribute` <a name="GetNumberMapAttribute" id="@cdktn/provider-cloudflare.dataCloudflareSpectrumApplications.DataCloudflareSpectrumApplicationsResultDnsOutputReference.getNumberMapAttribute"></a>

```go
func GetNumberMapAttribute(terraformAttribute *string) *map[string]*f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-cloudflare.dataCloudflareSpectrumApplications.DataCloudflareSpectrumApplicationsResultDnsOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetStringAttribute` <a name="GetStringAttribute" id="@cdktn/provider-cloudflare.dataCloudflareSpectrumApplications.DataCloudflareSpectrumApplicationsResultDnsOutputReference.getStringAttribute"></a>

```go
func GetStringAttribute(terraformAttribute *string) *string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-cloudflare.dataCloudflareSpectrumApplications.DataCloudflareSpectrumApplicationsResultDnsOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetStringMapAttribute` <a name="GetStringMapAttribute" id="@cdktn/provider-cloudflare.dataCloudflareSpectrumApplications.DataCloudflareSpectrumApplicationsResultDnsOutputReference.getStringMapAttribute"></a>

```go
func GetStringMapAttribute(terraformAttribute *string) *map[string]*string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-cloudflare.dataCloudflareSpectrumApplications.DataCloudflareSpectrumApplicationsResultDnsOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `InterpolationForAttribute` <a name="InterpolationForAttribute" id="@cdktn/provider-cloudflare.dataCloudflareSpectrumApplications.DataCloudflareSpectrumApplicationsResultDnsOutputReference.interpolationForAttribute"></a>

```go
func InterpolationForAttribute(property *string) IResolvable
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktn/provider-cloudflare.dataCloudflareSpectrumApplications.DataCloudflareSpectrumApplicationsResultDnsOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* *string

---

##### `Resolve` <a name="Resolve" id="@cdktn/provider-cloudflare.dataCloudflareSpectrumApplications.DataCloudflareSpectrumApplicationsResultDnsOutputReference.resolve"></a>

```go
func Resolve(_context IResolveContext) interface{}
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktn/provider-cloudflare.dataCloudflareSpectrumApplications.DataCloudflareSpectrumApplicationsResultDnsOutputReference.resolve.parameter._context"></a>

- *Type:* github.com/open-constructs/cdk-terrain-go/cdktn.IResolveContext

---

##### `ToString` <a name="ToString" id="@cdktn/provider-cloudflare.dataCloudflareSpectrumApplications.DataCloudflareSpectrumApplicationsResultDnsOutputReference.toString"></a>

```go
func ToString() *string
```

Return a string representation of this resolvable object.

Returns a reversible string representation.


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-cloudflare.dataCloudflareSpectrumApplications.DataCloudflareSpectrumApplicationsResultDnsOutputReference.property.creationStack">CreationStack</a></code> | <code>*[]*string</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktn/provider-cloudflare.dataCloudflareSpectrumApplications.DataCloudflareSpectrumApplicationsResultDnsOutputReference.property.fqn">Fqn</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktn/provider-cloudflare.dataCloudflareSpectrumApplications.DataCloudflareSpectrumApplicationsResultDnsOutputReference.property.name">Name</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktn/provider-cloudflare.dataCloudflareSpectrumApplications.DataCloudflareSpectrumApplicationsResultDnsOutputReference.property.type">Type</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktn/provider-cloudflare.dataCloudflareSpectrumApplications.DataCloudflareSpectrumApplicationsResultDnsOutputReference.property.internalValue">InternalValue</a></code> | <code><a href="#@cdktn/provider-cloudflare.dataCloudflareSpectrumApplications.DataCloudflareSpectrumApplicationsResultDns">DataCloudflareSpectrumApplicationsResultDns</a></code> | *No description.* |

---

##### `CreationStack`<sup>Required</sup> <a name="CreationStack" id="@cdktn/provider-cloudflare.dataCloudflareSpectrumApplications.DataCloudflareSpectrumApplicationsResultDnsOutputReference.property.creationStack"></a>

```go
func CreationStack() *[]*string
```

- *Type:* *[]*string

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `Fqn`<sup>Required</sup> <a name="Fqn" id="@cdktn/provider-cloudflare.dataCloudflareSpectrumApplications.DataCloudflareSpectrumApplicationsResultDnsOutputReference.property.fqn"></a>

```go
func Fqn() *string
```

- *Type:* *string

---

##### `Name`<sup>Required</sup> <a name="Name" id="@cdktn/provider-cloudflare.dataCloudflareSpectrumApplications.DataCloudflareSpectrumApplicationsResultDnsOutputReference.property.name"></a>

```go
func Name() *string
```

- *Type:* *string

---

##### `Type`<sup>Required</sup> <a name="Type" id="@cdktn/provider-cloudflare.dataCloudflareSpectrumApplications.DataCloudflareSpectrumApplicationsResultDnsOutputReference.property.type"></a>

```go
func Type() *string
```

- *Type:* *string

---

##### `InternalValue`<sup>Optional</sup> <a name="InternalValue" id="@cdktn/provider-cloudflare.dataCloudflareSpectrumApplications.DataCloudflareSpectrumApplicationsResultDnsOutputReference.property.internalValue"></a>

```go
func InternalValue() DataCloudflareSpectrumApplicationsResultDns
```

- *Type:* <a href="#@cdktn/provider-cloudflare.dataCloudflareSpectrumApplications.DataCloudflareSpectrumApplicationsResultDns">DataCloudflareSpectrumApplicationsResultDns</a>

---


### DataCloudflareSpectrumApplicationsResultEdgeIpsOutputReference <a name="DataCloudflareSpectrumApplicationsResultEdgeIpsOutputReference" id="@cdktn/provider-cloudflare.dataCloudflareSpectrumApplications.DataCloudflareSpectrumApplicationsResultEdgeIpsOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktn/provider-cloudflare.dataCloudflareSpectrumApplications.DataCloudflareSpectrumApplicationsResultEdgeIpsOutputReference.Initializer"></a>

```go
import "github.com/cdktn-io/cdktn-provider-cloudflare-go/cloudflare/v14/datacloudflarespectrumapplications"

datacloudflarespectrumapplications.NewDataCloudflareSpectrumApplicationsResultEdgeIpsOutputReference(terraformResource IInterpolatingParent, terraformAttribute *string) DataCloudflareSpectrumApplicationsResultEdgeIpsOutputReference
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-cloudflare.dataCloudflareSpectrumApplications.DataCloudflareSpectrumApplicationsResultEdgeIpsOutputReference.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>github.com/open-constructs/cdk-terrain-go/cdktn.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktn/provider-cloudflare.dataCloudflareSpectrumApplications.DataCloudflareSpectrumApplicationsResultEdgeIpsOutputReference.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>*string</code> | The attribute on the parent resource this class is referencing. |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktn/provider-cloudflare.dataCloudflareSpectrumApplications.DataCloudflareSpectrumApplicationsResultEdgeIpsOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* github.com/open-constructs/cdk-terrain-go/cdktn.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-cloudflare.dataCloudflareSpectrumApplications.DataCloudflareSpectrumApplicationsResultEdgeIpsOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* *string

The attribute on the parent resource this class is referencing.

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-cloudflare.dataCloudflareSpectrumApplications.DataCloudflareSpectrumApplicationsResultEdgeIpsOutputReference.computeFqn">ComputeFqn</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-cloudflare.dataCloudflareSpectrumApplications.DataCloudflareSpectrumApplicationsResultEdgeIpsOutputReference.getAnyMapAttribute">GetAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-cloudflare.dataCloudflareSpectrumApplications.DataCloudflareSpectrumApplicationsResultEdgeIpsOutputReference.getBooleanAttribute">GetBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-cloudflare.dataCloudflareSpectrumApplications.DataCloudflareSpectrumApplicationsResultEdgeIpsOutputReference.getBooleanMapAttribute">GetBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-cloudflare.dataCloudflareSpectrumApplications.DataCloudflareSpectrumApplicationsResultEdgeIpsOutputReference.getListAttribute">GetListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-cloudflare.dataCloudflareSpectrumApplications.DataCloudflareSpectrumApplicationsResultEdgeIpsOutputReference.getNumberAttribute">GetNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-cloudflare.dataCloudflareSpectrumApplications.DataCloudflareSpectrumApplicationsResultEdgeIpsOutputReference.getNumberListAttribute">GetNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-cloudflare.dataCloudflareSpectrumApplications.DataCloudflareSpectrumApplicationsResultEdgeIpsOutputReference.getNumberMapAttribute">GetNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-cloudflare.dataCloudflareSpectrumApplications.DataCloudflareSpectrumApplicationsResultEdgeIpsOutputReference.getStringAttribute">GetStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-cloudflare.dataCloudflareSpectrumApplications.DataCloudflareSpectrumApplicationsResultEdgeIpsOutputReference.getStringMapAttribute">GetStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-cloudflare.dataCloudflareSpectrumApplications.DataCloudflareSpectrumApplicationsResultEdgeIpsOutputReference.interpolationForAttribute">InterpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-cloudflare.dataCloudflareSpectrumApplications.DataCloudflareSpectrumApplicationsResultEdgeIpsOutputReference.resolve">Resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktn/provider-cloudflare.dataCloudflareSpectrumApplications.DataCloudflareSpectrumApplicationsResultEdgeIpsOutputReference.toString">ToString</a></code> | Return a string representation of this resolvable object. |

---

##### `ComputeFqn` <a name="ComputeFqn" id="@cdktn/provider-cloudflare.dataCloudflareSpectrumApplications.DataCloudflareSpectrumApplicationsResultEdgeIpsOutputReference.computeFqn"></a>

```go
func ComputeFqn() *string
```

##### `GetAnyMapAttribute` <a name="GetAnyMapAttribute" id="@cdktn/provider-cloudflare.dataCloudflareSpectrumApplications.DataCloudflareSpectrumApplicationsResultEdgeIpsOutputReference.getAnyMapAttribute"></a>

```go
func GetAnyMapAttribute(terraformAttribute *string) *map[string]interface{}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-cloudflare.dataCloudflareSpectrumApplications.DataCloudflareSpectrumApplicationsResultEdgeIpsOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetBooleanAttribute` <a name="GetBooleanAttribute" id="@cdktn/provider-cloudflare.dataCloudflareSpectrumApplications.DataCloudflareSpectrumApplicationsResultEdgeIpsOutputReference.getBooleanAttribute"></a>

```go
func GetBooleanAttribute(terraformAttribute *string) IResolvable
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-cloudflare.dataCloudflareSpectrumApplications.DataCloudflareSpectrumApplicationsResultEdgeIpsOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetBooleanMapAttribute` <a name="GetBooleanMapAttribute" id="@cdktn/provider-cloudflare.dataCloudflareSpectrumApplications.DataCloudflareSpectrumApplicationsResultEdgeIpsOutputReference.getBooleanMapAttribute"></a>

```go
func GetBooleanMapAttribute(terraformAttribute *string) *map[string]*bool
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-cloudflare.dataCloudflareSpectrumApplications.DataCloudflareSpectrumApplicationsResultEdgeIpsOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetListAttribute` <a name="GetListAttribute" id="@cdktn/provider-cloudflare.dataCloudflareSpectrumApplications.DataCloudflareSpectrumApplicationsResultEdgeIpsOutputReference.getListAttribute"></a>

```go
func GetListAttribute(terraformAttribute *string) *[]*string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-cloudflare.dataCloudflareSpectrumApplications.DataCloudflareSpectrumApplicationsResultEdgeIpsOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberAttribute` <a name="GetNumberAttribute" id="@cdktn/provider-cloudflare.dataCloudflareSpectrumApplications.DataCloudflareSpectrumApplicationsResultEdgeIpsOutputReference.getNumberAttribute"></a>

```go
func GetNumberAttribute(terraformAttribute *string) *f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-cloudflare.dataCloudflareSpectrumApplications.DataCloudflareSpectrumApplicationsResultEdgeIpsOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberListAttribute` <a name="GetNumberListAttribute" id="@cdktn/provider-cloudflare.dataCloudflareSpectrumApplications.DataCloudflareSpectrumApplicationsResultEdgeIpsOutputReference.getNumberListAttribute"></a>

```go
func GetNumberListAttribute(terraformAttribute *string) *[]*f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-cloudflare.dataCloudflareSpectrumApplications.DataCloudflareSpectrumApplicationsResultEdgeIpsOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberMapAttribute` <a name="GetNumberMapAttribute" id="@cdktn/provider-cloudflare.dataCloudflareSpectrumApplications.DataCloudflareSpectrumApplicationsResultEdgeIpsOutputReference.getNumberMapAttribute"></a>

```go
func GetNumberMapAttribute(terraformAttribute *string) *map[string]*f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-cloudflare.dataCloudflareSpectrumApplications.DataCloudflareSpectrumApplicationsResultEdgeIpsOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetStringAttribute` <a name="GetStringAttribute" id="@cdktn/provider-cloudflare.dataCloudflareSpectrumApplications.DataCloudflareSpectrumApplicationsResultEdgeIpsOutputReference.getStringAttribute"></a>

```go
func GetStringAttribute(terraformAttribute *string) *string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-cloudflare.dataCloudflareSpectrumApplications.DataCloudflareSpectrumApplicationsResultEdgeIpsOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetStringMapAttribute` <a name="GetStringMapAttribute" id="@cdktn/provider-cloudflare.dataCloudflareSpectrumApplications.DataCloudflareSpectrumApplicationsResultEdgeIpsOutputReference.getStringMapAttribute"></a>

```go
func GetStringMapAttribute(terraformAttribute *string) *map[string]*string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-cloudflare.dataCloudflareSpectrumApplications.DataCloudflareSpectrumApplicationsResultEdgeIpsOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `InterpolationForAttribute` <a name="InterpolationForAttribute" id="@cdktn/provider-cloudflare.dataCloudflareSpectrumApplications.DataCloudflareSpectrumApplicationsResultEdgeIpsOutputReference.interpolationForAttribute"></a>

```go
func InterpolationForAttribute(property *string) IResolvable
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktn/provider-cloudflare.dataCloudflareSpectrumApplications.DataCloudflareSpectrumApplicationsResultEdgeIpsOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* *string

---

##### `Resolve` <a name="Resolve" id="@cdktn/provider-cloudflare.dataCloudflareSpectrumApplications.DataCloudflareSpectrumApplicationsResultEdgeIpsOutputReference.resolve"></a>

```go
func Resolve(_context IResolveContext) interface{}
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktn/provider-cloudflare.dataCloudflareSpectrumApplications.DataCloudflareSpectrumApplicationsResultEdgeIpsOutputReference.resolve.parameter._context"></a>

- *Type:* github.com/open-constructs/cdk-terrain-go/cdktn.IResolveContext

---

##### `ToString` <a name="ToString" id="@cdktn/provider-cloudflare.dataCloudflareSpectrumApplications.DataCloudflareSpectrumApplicationsResultEdgeIpsOutputReference.toString"></a>

```go
func ToString() *string
```

Return a string representation of this resolvable object.

Returns a reversible string representation.


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-cloudflare.dataCloudflareSpectrumApplications.DataCloudflareSpectrumApplicationsResultEdgeIpsOutputReference.property.creationStack">CreationStack</a></code> | <code>*[]*string</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktn/provider-cloudflare.dataCloudflareSpectrumApplications.DataCloudflareSpectrumApplicationsResultEdgeIpsOutputReference.property.fqn">Fqn</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktn/provider-cloudflare.dataCloudflareSpectrumApplications.DataCloudflareSpectrumApplicationsResultEdgeIpsOutputReference.property.connectivity">Connectivity</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktn/provider-cloudflare.dataCloudflareSpectrumApplications.DataCloudflareSpectrumApplicationsResultEdgeIpsOutputReference.property.ips">Ips</a></code> | <code>*[]*string</code> | *No description.* |
| <code><a href="#@cdktn/provider-cloudflare.dataCloudflareSpectrumApplications.DataCloudflareSpectrumApplicationsResultEdgeIpsOutputReference.property.type">Type</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktn/provider-cloudflare.dataCloudflareSpectrumApplications.DataCloudflareSpectrumApplicationsResultEdgeIpsOutputReference.property.internalValue">InternalValue</a></code> | <code><a href="#@cdktn/provider-cloudflare.dataCloudflareSpectrumApplications.DataCloudflareSpectrumApplicationsResultEdgeIps">DataCloudflareSpectrumApplicationsResultEdgeIps</a></code> | *No description.* |

---

##### `CreationStack`<sup>Required</sup> <a name="CreationStack" id="@cdktn/provider-cloudflare.dataCloudflareSpectrumApplications.DataCloudflareSpectrumApplicationsResultEdgeIpsOutputReference.property.creationStack"></a>

```go
func CreationStack() *[]*string
```

- *Type:* *[]*string

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `Fqn`<sup>Required</sup> <a name="Fqn" id="@cdktn/provider-cloudflare.dataCloudflareSpectrumApplications.DataCloudflareSpectrumApplicationsResultEdgeIpsOutputReference.property.fqn"></a>

```go
func Fqn() *string
```

- *Type:* *string

---

##### `Connectivity`<sup>Required</sup> <a name="Connectivity" id="@cdktn/provider-cloudflare.dataCloudflareSpectrumApplications.DataCloudflareSpectrumApplicationsResultEdgeIpsOutputReference.property.connectivity"></a>

```go
func Connectivity() *string
```

- *Type:* *string

---

##### `Ips`<sup>Required</sup> <a name="Ips" id="@cdktn/provider-cloudflare.dataCloudflareSpectrumApplications.DataCloudflareSpectrumApplicationsResultEdgeIpsOutputReference.property.ips"></a>

```go
func Ips() *[]*string
```

- *Type:* *[]*string

---

##### `Type`<sup>Required</sup> <a name="Type" id="@cdktn/provider-cloudflare.dataCloudflareSpectrumApplications.DataCloudflareSpectrumApplicationsResultEdgeIpsOutputReference.property.type"></a>

```go
func Type() *string
```

- *Type:* *string

---

##### `InternalValue`<sup>Optional</sup> <a name="InternalValue" id="@cdktn/provider-cloudflare.dataCloudflareSpectrumApplications.DataCloudflareSpectrumApplicationsResultEdgeIpsOutputReference.property.internalValue"></a>

```go
func InternalValue() DataCloudflareSpectrumApplicationsResultEdgeIps
```

- *Type:* <a href="#@cdktn/provider-cloudflare.dataCloudflareSpectrumApplications.DataCloudflareSpectrumApplicationsResultEdgeIps">DataCloudflareSpectrumApplicationsResultEdgeIps</a>

---


### DataCloudflareSpectrumApplicationsResultList <a name="DataCloudflareSpectrumApplicationsResultList" id="@cdktn/provider-cloudflare.dataCloudflareSpectrumApplications.DataCloudflareSpectrumApplicationsResultList"></a>

#### Initializers <a name="Initializers" id="@cdktn/provider-cloudflare.dataCloudflareSpectrumApplications.DataCloudflareSpectrumApplicationsResultList.Initializer"></a>

```go
import "github.com/cdktn-io/cdktn-provider-cloudflare-go/cloudflare/v14/datacloudflarespectrumapplications"

datacloudflarespectrumapplications.NewDataCloudflareSpectrumApplicationsResultList(terraformResource IInterpolatingParent, terraformAttribute *string, wrapsSet *bool) DataCloudflareSpectrumApplicationsResultList
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-cloudflare.dataCloudflareSpectrumApplications.DataCloudflareSpectrumApplicationsResultList.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>github.com/open-constructs/cdk-terrain-go/cdktn.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktn/provider-cloudflare.dataCloudflareSpectrumApplications.DataCloudflareSpectrumApplicationsResultList.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>*string</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#@cdktn/provider-cloudflare.dataCloudflareSpectrumApplications.DataCloudflareSpectrumApplicationsResultList.Initializer.parameter.wrapsSet">wrapsSet</a></code> | <code>*bool</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktn/provider-cloudflare.dataCloudflareSpectrumApplications.DataCloudflareSpectrumApplicationsResultList.Initializer.parameter.terraformResource"></a>

- *Type:* github.com/open-constructs/cdk-terrain-go/cdktn.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-cloudflare.dataCloudflareSpectrumApplications.DataCloudflareSpectrumApplicationsResultList.Initializer.parameter.terraformAttribute"></a>

- *Type:* *string

The attribute on the parent resource this class is referencing.

---

##### `wrapsSet`<sup>Required</sup> <a name="wrapsSet" id="@cdktn/provider-cloudflare.dataCloudflareSpectrumApplications.DataCloudflareSpectrumApplicationsResultList.Initializer.parameter.wrapsSet"></a>

- *Type:* *bool

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-cloudflare.dataCloudflareSpectrumApplications.DataCloudflareSpectrumApplicationsResultList.allWithMapKey">AllWithMapKey</a></code> | Creating an iterator for this complex list. |
| <code><a href="#@cdktn/provider-cloudflare.dataCloudflareSpectrumApplications.DataCloudflareSpectrumApplicationsResultList.computeFqn">ComputeFqn</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-cloudflare.dataCloudflareSpectrumApplications.DataCloudflareSpectrumApplicationsResultList.resolve">Resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktn/provider-cloudflare.dataCloudflareSpectrumApplications.DataCloudflareSpectrumApplicationsResultList.toString">ToString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktn/provider-cloudflare.dataCloudflareSpectrumApplications.DataCloudflareSpectrumApplicationsResultList.get">Get</a></code> | *No description.* |

---

##### `AllWithMapKey` <a name="AllWithMapKey" id="@cdktn/provider-cloudflare.dataCloudflareSpectrumApplications.DataCloudflareSpectrumApplicationsResultList.allWithMapKey"></a>

```go
func AllWithMapKey(mapKeyAttributeName *string) DynamicListTerraformIterator
```

Creating an iterator for this complex list.

The list will be converted into a map with the mapKeyAttributeName as the key.

###### `mapKeyAttributeName`<sup>Required</sup> <a name="mapKeyAttributeName" id="@cdktn/provider-cloudflare.dataCloudflareSpectrumApplications.DataCloudflareSpectrumApplicationsResultList.allWithMapKey.parameter.mapKeyAttributeName"></a>

- *Type:* *string

---

##### `ComputeFqn` <a name="ComputeFqn" id="@cdktn/provider-cloudflare.dataCloudflareSpectrumApplications.DataCloudflareSpectrumApplicationsResultList.computeFqn"></a>

```go
func ComputeFqn() *string
```

##### `Resolve` <a name="Resolve" id="@cdktn/provider-cloudflare.dataCloudflareSpectrumApplications.DataCloudflareSpectrumApplicationsResultList.resolve"></a>

```go
func Resolve(_context IResolveContext) interface{}
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktn/provider-cloudflare.dataCloudflareSpectrumApplications.DataCloudflareSpectrumApplicationsResultList.resolve.parameter._context"></a>

- *Type:* github.com/open-constructs/cdk-terrain-go/cdktn.IResolveContext

---

##### `ToString` <a name="ToString" id="@cdktn/provider-cloudflare.dataCloudflareSpectrumApplications.DataCloudflareSpectrumApplicationsResultList.toString"></a>

```go
func ToString() *string
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `Get` <a name="Get" id="@cdktn/provider-cloudflare.dataCloudflareSpectrumApplications.DataCloudflareSpectrumApplicationsResultList.get"></a>

```go
func Get(index *f64) DataCloudflareSpectrumApplicationsResultOutputReference
```

###### `index`<sup>Required</sup> <a name="index" id="@cdktn/provider-cloudflare.dataCloudflareSpectrumApplications.DataCloudflareSpectrumApplicationsResultList.get.parameter.index"></a>

- *Type:* *f64

the index of the item to return.

---


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-cloudflare.dataCloudflareSpectrumApplications.DataCloudflareSpectrumApplicationsResultList.property.creationStack">CreationStack</a></code> | <code>*[]*string</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktn/provider-cloudflare.dataCloudflareSpectrumApplications.DataCloudflareSpectrumApplicationsResultList.property.fqn">Fqn</a></code> | <code>*string</code> | *No description.* |

---

##### `CreationStack`<sup>Required</sup> <a name="CreationStack" id="@cdktn/provider-cloudflare.dataCloudflareSpectrumApplications.DataCloudflareSpectrumApplicationsResultList.property.creationStack"></a>

```go
func CreationStack() *[]*string
```

- *Type:* *[]*string

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `Fqn`<sup>Required</sup> <a name="Fqn" id="@cdktn/provider-cloudflare.dataCloudflareSpectrumApplications.DataCloudflareSpectrumApplicationsResultList.property.fqn"></a>

```go
func Fqn() *string
```

- *Type:* *string

---


### DataCloudflareSpectrumApplicationsResultOriginDnsOutputReference <a name="DataCloudflareSpectrumApplicationsResultOriginDnsOutputReference" id="@cdktn/provider-cloudflare.dataCloudflareSpectrumApplications.DataCloudflareSpectrumApplicationsResultOriginDnsOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktn/provider-cloudflare.dataCloudflareSpectrumApplications.DataCloudflareSpectrumApplicationsResultOriginDnsOutputReference.Initializer"></a>

```go
import "github.com/cdktn-io/cdktn-provider-cloudflare-go/cloudflare/v14/datacloudflarespectrumapplications"

datacloudflarespectrumapplications.NewDataCloudflareSpectrumApplicationsResultOriginDnsOutputReference(terraformResource IInterpolatingParent, terraformAttribute *string) DataCloudflareSpectrumApplicationsResultOriginDnsOutputReference
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-cloudflare.dataCloudflareSpectrumApplications.DataCloudflareSpectrumApplicationsResultOriginDnsOutputReference.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>github.com/open-constructs/cdk-terrain-go/cdktn.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktn/provider-cloudflare.dataCloudflareSpectrumApplications.DataCloudflareSpectrumApplicationsResultOriginDnsOutputReference.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>*string</code> | The attribute on the parent resource this class is referencing. |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktn/provider-cloudflare.dataCloudflareSpectrumApplications.DataCloudflareSpectrumApplicationsResultOriginDnsOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* github.com/open-constructs/cdk-terrain-go/cdktn.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-cloudflare.dataCloudflareSpectrumApplications.DataCloudflareSpectrumApplicationsResultOriginDnsOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* *string

The attribute on the parent resource this class is referencing.

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-cloudflare.dataCloudflareSpectrumApplications.DataCloudflareSpectrumApplicationsResultOriginDnsOutputReference.computeFqn">ComputeFqn</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-cloudflare.dataCloudflareSpectrumApplications.DataCloudflareSpectrumApplicationsResultOriginDnsOutputReference.getAnyMapAttribute">GetAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-cloudflare.dataCloudflareSpectrumApplications.DataCloudflareSpectrumApplicationsResultOriginDnsOutputReference.getBooleanAttribute">GetBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-cloudflare.dataCloudflareSpectrumApplications.DataCloudflareSpectrumApplicationsResultOriginDnsOutputReference.getBooleanMapAttribute">GetBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-cloudflare.dataCloudflareSpectrumApplications.DataCloudflareSpectrumApplicationsResultOriginDnsOutputReference.getListAttribute">GetListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-cloudflare.dataCloudflareSpectrumApplications.DataCloudflareSpectrumApplicationsResultOriginDnsOutputReference.getNumberAttribute">GetNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-cloudflare.dataCloudflareSpectrumApplications.DataCloudflareSpectrumApplicationsResultOriginDnsOutputReference.getNumberListAttribute">GetNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-cloudflare.dataCloudflareSpectrumApplications.DataCloudflareSpectrumApplicationsResultOriginDnsOutputReference.getNumberMapAttribute">GetNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-cloudflare.dataCloudflareSpectrumApplications.DataCloudflareSpectrumApplicationsResultOriginDnsOutputReference.getStringAttribute">GetStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-cloudflare.dataCloudflareSpectrumApplications.DataCloudflareSpectrumApplicationsResultOriginDnsOutputReference.getStringMapAttribute">GetStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-cloudflare.dataCloudflareSpectrumApplications.DataCloudflareSpectrumApplicationsResultOriginDnsOutputReference.interpolationForAttribute">InterpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-cloudflare.dataCloudflareSpectrumApplications.DataCloudflareSpectrumApplicationsResultOriginDnsOutputReference.resolve">Resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktn/provider-cloudflare.dataCloudflareSpectrumApplications.DataCloudflareSpectrumApplicationsResultOriginDnsOutputReference.toString">ToString</a></code> | Return a string representation of this resolvable object. |

---

##### `ComputeFqn` <a name="ComputeFqn" id="@cdktn/provider-cloudflare.dataCloudflareSpectrumApplications.DataCloudflareSpectrumApplicationsResultOriginDnsOutputReference.computeFqn"></a>

```go
func ComputeFqn() *string
```

##### `GetAnyMapAttribute` <a name="GetAnyMapAttribute" id="@cdktn/provider-cloudflare.dataCloudflareSpectrumApplications.DataCloudflareSpectrumApplicationsResultOriginDnsOutputReference.getAnyMapAttribute"></a>

```go
func GetAnyMapAttribute(terraformAttribute *string) *map[string]interface{}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-cloudflare.dataCloudflareSpectrumApplications.DataCloudflareSpectrumApplicationsResultOriginDnsOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetBooleanAttribute` <a name="GetBooleanAttribute" id="@cdktn/provider-cloudflare.dataCloudflareSpectrumApplications.DataCloudflareSpectrumApplicationsResultOriginDnsOutputReference.getBooleanAttribute"></a>

```go
func GetBooleanAttribute(terraformAttribute *string) IResolvable
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-cloudflare.dataCloudflareSpectrumApplications.DataCloudflareSpectrumApplicationsResultOriginDnsOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetBooleanMapAttribute` <a name="GetBooleanMapAttribute" id="@cdktn/provider-cloudflare.dataCloudflareSpectrumApplications.DataCloudflareSpectrumApplicationsResultOriginDnsOutputReference.getBooleanMapAttribute"></a>

```go
func GetBooleanMapAttribute(terraformAttribute *string) *map[string]*bool
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-cloudflare.dataCloudflareSpectrumApplications.DataCloudflareSpectrumApplicationsResultOriginDnsOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetListAttribute` <a name="GetListAttribute" id="@cdktn/provider-cloudflare.dataCloudflareSpectrumApplications.DataCloudflareSpectrumApplicationsResultOriginDnsOutputReference.getListAttribute"></a>

```go
func GetListAttribute(terraformAttribute *string) *[]*string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-cloudflare.dataCloudflareSpectrumApplications.DataCloudflareSpectrumApplicationsResultOriginDnsOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberAttribute` <a name="GetNumberAttribute" id="@cdktn/provider-cloudflare.dataCloudflareSpectrumApplications.DataCloudflareSpectrumApplicationsResultOriginDnsOutputReference.getNumberAttribute"></a>

```go
func GetNumberAttribute(terraformAttribute *string) *f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-cloudflare.dataCloudflareSpectrumApplications.DataCloudflareSpectrumApplicationsResultOriginDnsOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberListAttribute` <a name="GetNumberListAttribute" id="@cdktn/provider-cloudflare.dataCloudflareSpectrumApplications.DataCloudflareSpectrumApplicationsResultOriginDnsOutputReference.getNumberListAttribute"></a>

```go
func GetNumberListAttribute(terraformAttribute *string) *[]*f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-cloudflare.dataCloudflareSpectrumApplications.DataCloudflareSpectrumApplicationsResultOriginDnsOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberMapAttribute` <a name="GetNumberMapAttribute" id="@cdktn/provider-cloudflare.dataCloudflareSpectrumApplications.DataCloudflareSpectrumApplicationsResultOriginDnsOutputReference.getNumberMapAttribute"></a>

```go
func GetNumberMapAttribute(terraformAttribute *string) *map[string]*f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-cloudflare.dataCloudflareSpectrumApplications.DataCloudflareSpectrumApplicationsResultOriginDnsOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetStringAttribute` <a name="GetStringAttribute" id="@cdktn/provider-cloudflare.dataCloudflareSpectrumApplications.DataCloudflareSpectrumApplicationsResultOriginDnsOutputReference.getStringAttribute"></a>

```go
func GetStringAttribute(terraformAttribute *string) *string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-cloudflare.dataCloudflareSpectrumApplications.DataCloudflareSpectrumApplicationsResultOriginDnsOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetStringMapAttribute` <a name="GetStringMapAttribute" id="@cdktn/provider-cloudflare.dataCloudflareSpectrumApplications.DataCloudflareSpectrumApplicationsResultOriginDnsOutputReference.getStringMapAttribute"></a>

```go
func GetStringMapAttribute(terraformAttribute *string) *map[string]*string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-cloudflare.dataCloudflareSpectrumApplications.DataCloudflareSpectrumApplicationsResultOriginDnsOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `InterpolationForAttribute` <a name="InterpolationForAttribute" id="@cdktn/provider-cloudflare.dataCloudflareSpectrumApplications.DataCloudflareSpectrumApplicationsResultOriginDnsOutputReference.interpolationForAttribute"></a>

```go
func InterpolationForAttribute(property *string) IResolvable
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktn/provider-cloudflare.dataCloudflareSpectrumApplications.DataCloudflareSpectrumApplicationsResultOriginDnsOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* *string

---

##### `Resolve` <a name="Resolve" id="@cdktn/provider-cloudflare.dataCloudflareSpectrumApplications.DataCloudflareSpectrumApplicationsResultOriginDnsOutputReference.resolve"></a>

```go
func Resolve(_context IResolveContext) interface{}
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktn/provider-cloudflare.dataCloudflareSpectrumApplications.DataCloudflareSpectrumApplicationsResultOriginDnsOutputReference.resolve.parameter._context"></a>

- *Type:* github.com/open-constructs/cdk-terrain-go/cdktn.IResolveContext

---

##### `ToString` <a name="ToString" id="@cdktn/provider-cloudflare.dataCloudflareSpectrumApplications.DataCloudflareSpectrumApplicationsResultOriginDnsOutputReference.toString"></a>

```go
func ToString() *string
```

Return a string representation of this resolvable object.

Returns a reversible string representation.


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-cloudflare.dataCloudflareSpectrumApplications.DataCloudflareSpectrumApplicationsResultOriginDnsOutputReference.property.creationStack">CreationStack</a></code> | <code>*[]*string</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktn/provider-cloudflare.dataCloudflareSpectrumApplications.DataCloudflareSpectrumApplicationsResultOriginDnsOutputReference.property.fqn">Fqn</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktn/provider-cloudflare.dataCloudflareSpectrumApplications.DataCloudflareSpectrumApplicationsResultOriginDnsOutputReference.property.name">Name</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktn/provider-cloudflare.dataCloudflareSpectrumApplications.DataCloudflareSpectrumApplicationsResultOriginDnsOutputReference.property.ttl">Ttl</a></code> | <code>*f64</code> | *No description.* |
| <code><a href="#@cdktn/provider-cloudflare.dataCloudflareSpectrumApplications.DataCloudflareSpectrumApplicationsResultOriginDnsOutputReference.property.type">Type</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktn/provider-cloudflare.dataCloudflareSpectrumApplications.DataCloudflareSpectrumApplicationsResultOriginDnsOutputReference.property.internalValue">InternalValue</a></code> | <code><a href="#@cdktn/provider-cloudflare.dataCloudflareSpectrumApplications.DataCloudflareSpectrumApplicationsResultOriginDns">DataCloudflareSpectrumApplicationsResultOriginDns</a></code> | *No description.* |

---

##### `CreationStack`<sup>Required</sup> <a name="CreationStack" id="@cdktn/provider-cloudflare.dataCloudflareSpectrumApplications.DataCloudflareSpectrumApplicationsResultOriginDnsOutputReference.property.creationStack"></a>

```go
func CreationStack() *[]*string
```

- *Type:* *[]*string

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `Fqn`<sup>Required</sup> <a name="Fqn" id="@cdktn/provider-cloudflare.dataCloudflareSpectrumApplications.DataCloudflareSpectrumApplicationsResultOriginDnsOutputReference.property.fqn"></a>

```go
func Fqn() *string
```

- *Type:* *string

---

##### `Name`<sup>Required</sup> <a name="Name" id="@cdktn/provider-cloudflare.dataCloudflareSpectrumApplications.DataCloudflareSpectrumApplicationsResultOriginDnsOutputReference.property.name"></a>

```go
func Name() *string
```

- *Type:* *string

---

##### `Ttl`<sup>Required</sup> <a name="Ttl" id="@cdktn/provider-cloudflare.dataCloudflareSpectrumApplications.DataCloudflareSpectrumApplicationsResultOriginDnsOutputReference.property.ttl"></a>

```go
func Ttl() *f64
```

- *Type:* *f64

---

##### `Type`<sup>Required</sup> <a name="Type" id="@cdktn/provider-cloudflare.dataCloudflareSpectrumApplications.DataCloudflareSpectrumApplicationsResultOriginDnsOutputReference.property.type"></a>

```go
func Type() *string
```

- *Type:* *string

---

##### `InternalValue`<sup>Optional</sup> <a name="InternalValue" id="@cdktn/provider-cloudflare.dataCloudflareSpectrumApplications.DataCloudflareSpectrumApplicationsResultOriginDnsOutputReference.property.internalValue"></a>

```go
func InternalValue() DataCloudflareSpectrumApplicationsResultOriginDns
```

- *Type:* <a href="#@cdktn/provider-cloudflare.dataCloudflareSpectrumApplications.DataCloudflareSpectrumApplicationsResultOriginDns">DataCloudflareSpectrumApplicationsResultOriginDns</a>

---


### DataCloudflareSpectrumApplicationsResultOutputReference <a name="DataCloudflareSpectrumApplicationsResultOutputReference" id="@cdktn/provider-cloudflare.dataCloudflareSpectrumApplications.DataCloudflareSpectrumApplicationsResultOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktn/provider-cloudflare.dataCloudflareSpectrumApplications.DataCloudflareSpectrumApplicationsResultOutputReference.Initializer"></a>

```go
import "github.com/cdktn-io/cdktn-provider-cloudflare-go/cloudflare/v14/datacloudflarespectrumapplications"

datacloudflarespectrumapplications.NewDataCloudflareSpectrumApplicationsResultOutputReference(terraformResource IInterpolatingParent, terraformAttribute *string, complexObjectIndex *f64, complexObjectIsFromSet *bool) DataCloudflareSpectrumApplicationsResultOutputReference
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-cloudflare.dataCloudflareSpectrumApplications.DataCloudflareSpectrumApplicationsResultOutputReference.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>github.com/open-constructs/cdk-terrain-go/cdktn.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktn/provider-cloudflare.dataCloudflareSpectrumApplications.DataCloudflareSpectrumApplicationsResultOutputReference.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>*string</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#@cdktn/provider-cloudflare.dataCloudflareSpectrumApplications.DataCloudflareSpectrumApplicationsResultOutputReference.Initializer.parameter.complexObjectIndex">complexObjectIndex</a></code> | <code>*f64</code> | the index of this item in the list. |
| <code><a href="#@cdktn/provider-cloudflare.dataCloudflareSpectrumApplications.DataCloudflareSpectrumApplicationsResultOutputReference.Initializer.parameter.complexObjectIsFromSet">complexObjectIsFromSet</a></code> | <code>*bool</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktn/provider-cloudflare.dataCloudflareSpectrumApplications.DataCloudflareSpectrumApplicationsResultOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* github.com/open-constructs/cdk-terrain-go/cdktn.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-cloudflare.dataCloudflareSpectrumApplications.DataCloudflareSpectrumApplicationsResultOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* *string

The attribute on the parent resource this class is referencing.

---

##### `complexObjectIndex`<sup>Required</sup> <a name="complexObjectIndex" id="@cdktn/provider-cloudflare.dataCloudflareSpectrumApplications.DataCloudflareSpectrumApplicationsResultOutputReference.Initializer.parameter.complexObjectIndex"></a>

- *Type:* *f64

the index of this item in the list.

---

##### `complexObjectIsFromSet`<sup>Required</sup> <a name="complexObjectIsFromSet" id="@cdktn/provider-cloudflare.dataCloudflareSpectrumApplications.DataCloudflareSpectrumApplicationsResultOutputReference.Initializer.parameter.complexObjectIsFromSet"></a>

- *Type:* *bool

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-cloudflare.dataCloudflareSpectrumApplications.DataCloudflareSpectrumApplicationsResultOutputReference.computeFqn">ComputeFqn</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-cloudflare.dataCloudflareSpectrumApplications.DataCloudflareSpectrumApplicationsResultOutputReference.getAnyMapAttribute">GetAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-cloudflare.dataCloudflareSpectrumApplications.DataCloudflareSpectrumApplicationsResultOutputReference.getBooleanAttribute">GetBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-cloudflare.dataCloudflareSpectrumApplications.DataCloudflareSpectrumApplicationsResultOutputReference.getBooleanMapAttribute">GetBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-cloudflare.dataCloudflareSpectrumApplications.DataCloudflareSpectrumApplicationsResultOutputReference.getListAttribute">GetListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-cloudflare.dataCloudflareSpectrumApplications.DataCloudflareSpectrumApplicationsResultOutputReference.getNumberAttribute">GetNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-cloudflare.dataCloudflareSpectrumApplications.DataCloudflareSpectrumApplicationsResultOutputReference.getNumberListAttribute">GetNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-cloudflare.dataCloudflareSpectrumApplications.DataCloudflareSpectrumApplicationsResultOutputReference.getNumberMapAttribute">GetNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-cloudflare.dataCloudflareSpectrumApplications.DataCloudflareSpectrumApplicationsResultOutputReference.getStringAttribute">GetStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-cloudflare.dataCloudflareSpectrumApplications.DataCloudflareSpectrumApplicationsResultOutputReference.getStringMapAttribute">GetStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-cloudflare.dataCloudflareSpectrumApplications.DataCloudflareSpectrumApplicationsResultOutputReference.interpolationForAttribute">InterpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-cloudflare.dataCloudflareSpectrumApplications.DataCloudflareSpectrumApplicationsResultOutputReference.resolve">Resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktn/provider-cloudflare.dataCloudflareSpectrumApplications.DataCloudflareSpectrumApplicationsResultOutputReference.toString">ToString</a></code> | Return a string representation of this resolvable object. |

---

##### `ComputeFqn` <a name="ComputeFqn" id="@cdktn/provider-cloudflare.dataCloudflareSpectrumApplications.DataCloudflareSpectrumApplicationsResultOutputReference.computeFqn"></a>

```go
func ComputeFqn() *string
```

##### `GetAnyMapAttribute` <a name="GetAnyMapAttribute" id="@cdktn/provider-cloudflare.dataCloudflareSpectrumApplications.DataCloudflareSpectrumApplicationsResultOutputReference.getAnyMapAttribute"></a>

```go
func GetAnyMapAttribute(terraformAttribute *string) *map[string]interface{}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-cloudflare.dataCloudflareSpectrumApplications.DataCloudflareSpectrumApplicationsResultOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetBooleanAttribute` <a name="GetBooleanAttribute" id="@cdktn/provider-cloudflare.dataCloudflareSpectrumApplications.DataCloudflareSpectrumApplicationsResultOutputReference.getBooleanAttribute"></a>

```go
func GetBooleanAttribute(terraformAttribute *string) IResolvable
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-cloudflare.dataCloudflareSpectrumApplications.DataCloudflareSpectrumApplicationsResultOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetBooleanMapAttribute` <a name="GetBooleanMapAttribute" id="@cdktn/provider-cloudflare.dataCloudflareSpectrumApplications.DataCloudflareSpectrumApplicationsResultOutputReference.getBooleanMapAttribute"></a>

```go
func GetBooleanMapAttribute(terraformAttribute *string) *map[string]*bool
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-cloudflare.dataCloudflareSpectrumApplications.DataCloudflareSpectrumApplicationsResultOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetListAttribute` <a name="GetListAttribute" id="@cdktn/provider-cloudflare.dataCloudflareSpectrumApplications.DataCloudflareSpectrumApplicationsResultOutputReference.getListAttribute"></a>

```go
func GetListAttribute(terraformAttribute *string) *[]*string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-cloudflare.dataCloudflareSpectrumApplications.DataCloudflareSpectrumApplicationsResultOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberAttribute` <a name="GetNumberAttribute" id="@cdktn/provider-cloudflare.dataCloudflareSpectrumApplications.DataCloudflareSpectrumApplicationsResultOutputReference.getNumberAttribute"></a>

```go
func GetNumberAttribute(terraformAttribute *string) *f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-cloudflare.dataCloudflareSpectrumApplications.DataCloudflareSpectrumApplicationsResultOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberListAttribute` <a name="GetNumberListAttribute" id="@cdktn/provider-cloudflare.dataCloudflareSpectrumApplications.DataCloudflareSpectrumApplicationsResultOutputReference.getNumberListAttribute"></a>

```go
func GetNumberListAttribute(terraformAttribute *string) *[]*f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-cloudflare.dataCloudflareSpectrumApplications.DataCloudflareSpectrumApplicationsResultOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberMapAttribute` <a name="GetNumberMapAttribute" id="@cdktn/provider-cloudflare.dataCloudflareSpectrumApplications.DataCloudflareSpectrumApplicationsResultOutputReference.getNumberMapAttribute"></a>

```go
func GetNumberMapAttribute(terraformAttribute *string) *map[string]*f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-cloudflare.dataCloudflareSpectrumApplications.DataCloudflareSpectrumApplicationsResultOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetStringAttribute` <a name="GetStringAttribute" id="@cdktn/provider-cloudflare.dataCloudflareSpectrumApplications.DataCloudflareSpectrumApplicationsResultOutputReference.getStringAttribute"></a>

```go
func GetStringAttribute(terraformAttribute *string) *string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-cloudflare.dataCloudflareSpectrumApplications.DataCloudflareSpectrumApplicationsResultOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetStringMapAttribute` <a name="GetStringMapAttribute" id="@cdktn/provider-cloudflare.dataCloudflareSpectrumApplications.DataCloudflareSpectrumApplicationsResultOutputReference.getStringMapAttribute"></a>

```go
func GetStringMapAttribute(terraformAttribute *string) *map[string]*string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-cloudflare.dataCloudflareSpectrumApplications.DataCloudflareSpectrumApplicationsResultOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `InterpolationForAttribute` <a name="InterpolationForAttribute" id="@cdktn/provider-cloudflare.dataCloudflareSpectrumApplications.DataCloudflareSpectrumApplicationsResultOutputReference.interpolationForAttribute"></a>

```go
func InterpolationForAttribute(property *string) IResolvable
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktn/provider-cloudflare.dataCloudflareSpectrumApplications.DataCloudflareSpectrumApplicationsResultOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* *string

---

##### `Resolve` <a name="Resolve" id="@cdktn/provider-cloudflare.dataCloudflareSpectrumApplications.DataCloudflareSpectrumApplicationsResultOutputReference.resolve"></a>

```go
func Resolve(_context IResolveContext) interface{}
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktn/provider-cloudflare.dataCloudflareSpectrumApplications.DataCloudflareSpectrumApplicationsResultOutputReference.resolve.parameter._context"></a>

- *Type:* github.com/open-constructs/cdk-terrain-go/cdktn.IResolveContext

---

##### `ToString` <a name="ToString" id="@cdktn/provider-cloudflare.dataCloudflareSpectrumApplications.DataCloudflareSpectrumApplicationsResultOutputReference.toString"></a>

```go
func ToString() *string
```

Return a string representation of this resolvable object.

Returns a reversible string representation.


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-cloudflare.dataCloudflareSpectrumApplications.DataCloudflareSpectrumApplicationsResultOutputReference.property.creationStack">CreationStack</a></code> | <code>*[]*string</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktn/provider-cloudflare.dataCloudflareSpectrumApplications.DataCloudflareSpectrumApplicationsResultOutputReference.property.fqn">Fqn</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktn/provider-cloudflare.dataCloudflareSpectrumApplications.DataCloudflareSpectrumApplicationsResultOutputReference.property.argoSmartRouting">ArgoSmartRouting</a></code> | <code>github.com/open-constructs/cdk-terrain-go/cdktn.IResolvable</code> | *No description.* |
| <code><a href="#@cdktn/provider-cloudflare.dataCloudflareSpectrumApplications.DataCloudflareSpectrumApplicationsResultOutputReference.property.createdOn">CreatedOn</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktn/provider-cloudflare.dataCloudflareSpectrumApplications.DataCloudflareSpectrumApplicationsResultOutputReference.property.dns">Dns</a></code> | <code><a href="#@cdktn/provider-cloudflare.dataCloudflareSpectrumApplications.DataCloudflareSpectrumApplicationsResultDnsOutputReference">DataCloudflareSpectrumApplicationsResultDnsOutputReference</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-cloudflare.dataCloudflareSpectrumApplications.DataCloudflareSpectrumApplicationsResultOutputReference.property.edgeIps">EdgeIps</a></code> | <code><a href="#@cdktn/provider-cloudflare.dataCloudflareSpectrumApplications.DataCloudflareSpectrumApplicationsResultEdgeIpsOutputReference">DataCloudflareSpectrumApplicationsResultEdgeIpsOutputReference</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-cloudflare.dataCloudflareSpectrumApplications.DataCloudflareSpectrumApplicationsResultOutputReference.property.id">Id</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktn/provider-cloudflare.dataCloudflareSpectrumApplications.DataCloudflareSpectrumApplicationsResultOutputReference.property.ipFirewall">IpFirewall</a></code> | <code>github.com/open-constructs/cdk-terrain-go/cdktn.IResolvable</code> | *No description.* |
| <code><a href="#@cdktn/provider-cloudflare.dataCloudflareSpectrumApplications.DataCloudflareSpectrumApplicationsResultOutputReference.property.modifiedOn">ModifiedOn</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktn/provider-cloudflare.dataCloudflareSpectrumApplications.DataCloudflareSpectrumApplicationsResultOutputReference.property.originDirect">OriginDirect</a></code> | <code>*[]*string</code> | *No description.* |
| <code><a href="#@cdktn/provider-cloudflare.dataCloudflareSpectrumApplications.DataCloudflareSpectrumApplicationsResultOutputReference.property.originDns">OriginDns</a></code> | <code><a href="#@cdktn/provider-cloudflare.dataCloudflareSpectrumApplications.DataCloudflareSpectrumApplicationsResultOriginDnsOutputReference">DataCloudflareSpectrumApplicationsResultOriginDnsOutputReference</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-cloudflare.dataCloudflareSpectrumApplications.DataCloudflareSpectrumApplicationsResultOutputReference.property.originPort">OriginPort</a></code> | <code>github.com/open-constructs/cdk-terrain-go/cdktn.AnyMap</code> | *No description.* |
| <code><a href="#@cdktn/provider-cloudflare.dataCloudflareSpectrumApplications.DataCloudflareSpectrumApplicationsResultOutputReference.property.protocol">Protocol</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktn/provider-cloudflare.dataCloudflareSpectrumApplications.DataCloudflareSpectrumApplicationsResultOutputReference.property.proxyProtocol">ProxyProtocol</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktn/provider-cloudflare.dataCloudflareSpectrumApplications.DataCloudflareSpectrumApplicationsResultOutputReference.property.tls">Tls</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktn/provider-cloudflare.dataCloudflareSpectrumApplications.DataCloudflareSpectrumApplicationsResultOutputReference.property.trafficType">TrafficType</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktn/provider-cloudflare.dataCloudflareSpectrumApplications.DataCloudflareSpectrumApplicationsResultOutputReference.property.internalValue">InternalValue</a></code> | <code><a href="#@cdktn/provider-cloudflare.dataCloudflareSpectrumApplications.DataCloudflareSpectrumApplicationsResult">DataCloudflareSpectrumApplicationsResult</a></code> | *No description.* |

---

##### `CreationStack`<sup>Required</sup> <a name="CreationStack" id="@cdktn/provider-cloudflare.dataCloudflareSpectrumApplications.DataCloudflareSpectrumApplicationsResultOutputReference.property.creationStack"></a>

```go
func CreationStack() *[]*string
```

- *Type:* *[]*string

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `Fqn`<sup>Required</sup> <a name="Fqn" id="@cdktn/provider-cloudflare.dataCloudflareSpectrumApplications.DataCloudflareSpectrumApplicationsResultOutputReference.property.fqn"></a>

```go
func Fqn() *string
```

- *Type:* *string

---

##### `ArgoSmartRouting`<sup>Required</sup> <a name="ArgoSmartRouting" id="@cdktn/provider-cloudflare.dataCloudflareSpectrumApplications.DataCloudflareSpectrumApplicationsResultOutputReference.property.argoSmartRouting"></a>

```go
func ArgoSmartRouting() IResolvable
```

- *Type:* github.com/open-constructs/cdk-terrain-go/cdktn.IResolvable

---

##### `CreatedOn`<sup>Required</sup> <a name="CreatedOn" id="@cdktn/provider-cloudflare.dataCloudflareSpectrumApplications.DataCloudflareSpectrumApplicationsResultOutputReference.property.createdOn"></a>

```go
func CreatedOn() *string
```

- *Type:* *string

---

##### `Dns`<sup>Required</sup> <a name="Dns" id="@cdktn/provider-cloudflare.dataCloudflareSpectrumApplications.DataCloudflareSpectrumApplicationsResultOutputReference.property.dns"></a>

```go
func Dns() DataCloudflareSpectrumApplicationsResultDnsOutputReference
```

- *Type:* <a href="#@cdktn/provider-cloudflare.dataCloudflareSpectrumApplications.DataCloudflareSpectrumApplicationsResultDnsOutputReference">DataCloudflareSpectrumApplicationsResultDnsOutputReference</a>

---

##### `EdgeIps`<sup>Required</sup> <a name="EdgeIps" id="@cdktn/provider-cloudflare.dataCloudflareSpectrumApplications.DataCloudflareSpectrumApplicationsResultOutputReference.property.edgeIps"></a>

```go
func EdgeIps() DataCloudflareSpectrumApplicationsResultEdgeIpsOutputReference
```

- *Type:* <a href="#@cdktn/provider-cloudflare.dataCloudflareSpectrumApplications.DataCloudflareSpectrumApplicationsResultEdgeIpsOutputReference">DataCloudflareSpectrumApplicationsResultEdgeIpsOutputReference</a>

---

##### `Id`<sup>Required</sup> <a name="Id" id="@cdktn/provider-cloudflare.dataCloudflareSpectrumApplications.DataCloudflareSpectrumApplicationsResultOutputReference.property.id"></a>

```go
func Id() *string
```

- *Type:* *string

---

##### `IpFirewall`<sup>Required</sup> <a name="IpFirewall" id="@cdktn/provider-cloudflare.dataCloudflareSpectrumApplications.DataCloudflareSpectrumApplicationsResultOutputReference.property.ipFirewall"></a>

```go
func IpFirewall() IResolvable
```

- *Type:* github.com/open-constructs/cdk-terrain-go/cdktn.IResolvable

---

##### `ModifiedOn`<sup>Required</sup> <a name="ModifiedOn" id="@cdktn/provider-cloudflare.dataCloudflareSpectrumApplications.DataCloudflareSpectrumApplicationsResultOutputReference.property.modifiedOn"></a>

```go
func ModifiedOn() *string
```

- *Type:* *string

---

##### `OriginDirect`<sup>Required</sup> <a name="OriginDirect" id="@cdktn/provider-cloudflare.dataCloudflareSpectrumApplications.DataCloudflareSpectrumApplicationsResultOutputReference.property.originDirect"></a>

```go
func OriginDirect() *[]*string
```

- *Type:* *[]*string

---

##### `OriginDns`<sup>Required</sup> <a name="OriginDns" id="@cdktn/provider-cloudflare.dataCloudflareSpectrumApplications.DataCloudflareSpectrumApplicationsResultOutputReference.property.originDns"></a>

```go
func OriginDns() DataCloudflareSpectrumApplicationsResultOriginDnsOutputReference
```

- *Type:* <a href="#@cdktn/provider-cloudflare.dataCloudflareSpectrumApplications.DataCloudflareSpectrumApplicationsResultOriginDnsOutputReference">DataCloudflareSpectrumApplicationsResultOriginDnsOutputReference</a>

---

##### `OriginPort`<sup>Required</sup> <a name="OriginPort" id="@cdktn/provider-cloudflare.dataCloudflareSpectrumApplications.DataCloudflareSpectrumApplicationsResultOutputReference.property.originPort"></a>

```go
func OriginPort() AnyMap
```

- *Type:* github.com/open-constructs/cdk-terrain-go/cdktn.AnyMap

---

##### `Protocol`<sup>Required</sup> <a name="Protocol" id="@cdktn/provider-cloudflare.dataCloudflareSpectrumApplications.DataCloudflareSpectrumApplicationsResultOutputReference.property.protocol"></a>

```go
func Protocol() *string
```

- *Type:* *string

---

##### `ProxyProtocol`<sup>Required</sup> <a name="ProxyProtocol" id="@cdktn/provider-cloudflare.dataCloudflareSpectrumApplications.DataCloudflareSpectrumApplicationsResultOutputReference.property.proxyProtocol"></a>

```go
func ProxyProtocol() *string
```

- *Type:* *string

---

##### `Tls`<sup>Required</sup> <a name="Tls" id="@cdktn/provider-cloudflare.dataCloudflareSpectrumApplications.DataCloudflareSpectrumApplicationsResultOutputReference.property.tls"></a>

```go
func Tls() *string
```

- *Type:* *string

---

##### `TrafficType`<sup>Required</sup> <a name="TrafficType" id="@cdktn/provider-cloudflare.dataCloudflareSpectrumApplications.DataCloudflareSpectrumApplicationsResultOutputReference.property.trafficType"></a>

```go
func TrafficType() *string
```

- *Type:* *string

---

##### `InternalValue`<sup>Optional</sup> <a name="InternalValue" id="@cdktn/provider-cloudflare.dataCloudflareSpectrumApplications.DataCloudflareSpectrumApplicationsResultOutputReference.property.internalValue"></a>

```go
func InternalValue() DataCloudflareSpectrumApplicationsResult
```

- *Type:* <a href="#@cdktn/provider-cloudflare.dataCloudflareSpectrumApplications.DataCloudflareSpectrumApplicationsResult">DataCloudflareSpectrumApplicationsResult</a>

---



