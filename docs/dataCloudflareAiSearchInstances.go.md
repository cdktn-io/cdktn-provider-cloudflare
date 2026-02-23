# `dataCloudflareAiSearchInstances` Submodule <a name="`dataCloudflareAiSearchInstances` Submodule" id="@cdktn/provider-cloudflare.dataCloudflareAiSearchInstances"></a>

## Constructs <a name="Constructs" id="Constructs"></a>

### DataCloudflareAiSearchInstances <a name="DataCloudflareAiSearchInstances" id="@cdktn/provider-cloudflare.dataCloudflareAiSearchInstances.DataCloudflareAiSearchInstances"></a>

Represents a {@link https://registry.terraform.io/providers/cloudflare/cloudflare/5.17.0/docs/data-sources/ai_search_instances cloudflare_ai_search_instances}.

#### Initializers <a name="Initializers" id="@cdktn/provider-cloudflare.dataCloudflareAiSearchInstances.DataCloudflareAiSearchInstances.Initializer"></a>

```go
import "github.com/cdktn-io/cdktn-provider-cloudflare-go/cloudflare/v14/datacloudflareaisearchinstances"

datacloudflareaisearchinstances.NewDataCloudflareAiSearchInstances(scope Construct, id *string, config DataCloudflareAiSearchInstancesConfig) DataCloudflareAiSearchInstances
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-cloudflare.dataCloudflareAiSearchInstances.DataCloudflareAiSearchInstances.Initializer.parameter.scope">scope</a></code> | <code>github.com/aws/constructs-go/constructs/v10.Construct</code> | The scope in which to define this construct. |
| <code><a href="#@cdktn/provider-cloudflare.dataCloudflareAiSearchInstances.DataCloudflareAiSearchInstances.Initializer.parameter.id">id</a></code> | <code>*string</code> | The scoped construct ID. |
| <code><a href="#@cdktn/provider-cloudflare.dataCloudflareAiSearchInstances.DataCloudflareAiSearchInstances.Initializer.parameter.config">config</a></code> | <code><a href="#@cdktn/provider-cloudflare.dataCloudflareAiSearchInstances.DataCloudflareAiSearchInstancesConfig">DataCloudflareAiSearchInstancesConfig</a></code> | *No description.* |

---

##### `scope`<sup>Required</sup> <a name="scope" id="@cdktn/provider-cloudflare.dataCloudflareAiSearchInstances.DataCloudflareAiSearchInstances.Initializer.parameter.scope"></a>

- *Type:* github.com/aws/constructs-go/constructs/v10.Construct

The scope in which to define this construct.

---

##### `id`<sup>Required</sup> <a name="id" id="@cdktn/provider-cloudflare.dataCloudflareAiSearchInstances.DataCloudflareAiSearchInstances.Initializer.parameter.id"></a>

- *Type:* *string

The scoped construct ID.

Must be unique amongst siblings in the same scope

---

##### `config`<sup>Required</sup> <a name="config" id="@cdktn/provider-cloudflare.dataCloudflareAiSearchInstances.DataCloudflareAiSearchInstances.Initializer.parameter.config"></a>

- *Type:* <a href="#@cdktn/provider-cloudflare.dataCloudflareAiSearchInstances.DataCloudflareAiSearchInstancesConfig">DataCloudflareAiSearchInstancesConfig</a>

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-cloudflare.dataCloudflareAiSearchInstances.DataCloudflareAiSearchInstances.toString">ToString</a></code> | Returns a string representation of this construct. |
| <code><a href="#@cdktn/provider-cloudflare.dataCloudflareAiSearchInstances.DataCloudflareAiSearchInstances.with">With</a></code> | Applies one or more mixins to this construct. |
| <code><a href="#@cdktn/provider-cloudflare.dataCloudflareAiSearchInstances.DataCloudflareAiSearchInstances.addOverride">AddOverride</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-cloudflare.dataCloudflareAiSearchInstances.DataCloudflareAiSearchInstances.overrideLogicalId">OverrideLogicalId</a></code> | Overrides the auto-generated logical ID with a specific ID. |
| <code><a href="#@cdktn/provider-cloudflare.dataCloudflareAiSearchInstances.DataCloudflareAiSearchInstances.resetOverrideLogicalId">ResetOverrideLogicalId</a></code> | Resets a previously passed logical Id to use the auto-generated logical id again. |
| <code><a href="#@cdktn/provider-cloudflare.dataCloudflareAiSearchInstances.DataCloudflareAiSearchInstances.toHclTerraform">ToHclTerraform</a></code> | Adds this resource to the terraform JSON output. |
| <code><a href="#@cdktn/provider-cloudflare.dataCloudflareAiSearchInstances.DataCloudflareAiSearchInstances.toMetadata">ToMetadata</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-cloudflare.dataCloudflareAiSearchInstances.DataCloudflareAiSearchInstances.toTerraform">ToTerraform</a></code> | Adds this resource to the terraform JSON output. |
| <code><a href="#@cdktn/provider-cloudflare.dataCloudflareAiSearchInstances.DataCloudflareAiSearchInstances.getAnyMapAttribute">GetAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-cloudflare.dataCloudflareAiSearchInstances.DataCloudflareAiSearchInstances.getBooleanAttribute">GetBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-cloudflare.dataCloudflareAiSearchInstances.DataCloudflareAiSearchInstances.getBooleanMapAttribute">GetBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-cloudflare.dataCloudflareAiSearchInstances.DataCloudflareAiSearchInstances.getListAttribute">GetListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-cloudflare.dataCloudflareAiSearchInstances.DataCloudflareAiSearchInstances.getNumberAttribute">GetNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-cloudflare.dataCloudflareAiSearchInstances.DataCloudflareAiSearchInstances.getNumberListAttribute">GetNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-cloudflare.dataCloudflareAiSearchInstances.DataCloudflareAiSearchInstances.getNumberMapAttribute">GetNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-cloudflare.dataCloudflareAiSearchInstances.DataCloudflareAiSearchInstances.getStringAttribute">GetStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-cloudflare.dataCloudflareAiSearchInstances.DataCloudflareAiSearchInstances.getStringMapAttribute">GetStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-cloudflare.dataCloudflareAiSearchInstances.DataCloudflareAiSearchInstances.interpolationForAttribute">InterpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-cloudflare.dataCloudflareAiSearchInstances.DataCloudflareAiSearchInstances.resetMaxItems">ResetMaxItems</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-cloudflare.dataCloudflareAiSearchInstances.DataCloudflareAiSearchInstances.resetSearch">ResetSearch</a></code> | *No description.* |

---

##### `ToString` <a name="ToString" id="@cdktn/provider-cloudflare.dataCloudflareAiSearchInstances.DataCloudflareAiSearchInstances.toString"></a>

```go
func ToString() *string
```

Returns a string representation of this construct.

##### `With` <a name="With" id="@cdktn/provider-cloudflare.dataCloudflareAiSearchInstances.DataCloudflareAiSearchInstances.with"></a>

```go
func With(mixins ...IMixin) IConstruct
```

Applies one or more mixins to this construct.

Mixins are applied in order. The list of constructs is captured at the
start of the call, so constructs added by a mixin will not be visited.
Use multiple `with()` calls if subsequent mixins should apply to added
constructs.

###### `mixins`<sup>Required</sup> <a name="mixins" id="@cdktn/provider-cloudflare.dataCloudflareAiSearchInstances.DataCloudflareAiSearchInstances.with.parameter.mixins"></a>

- *Type:* ...github.com/aws/constructs-go/constructs/v10.IMixin

The mixins to apply.

---

##### `AddOverride` <a name="AddOverride" id="@cdktn/provider-cloudflare.dataCloudflareAiSearchInstances.DataCloudflareAiSearchInstances.addOverride"></a>

```go
func AddOverride(path *string, value interface{})
```

###### `path`<sup>Required</sup> <a name="path" id="@cdktn/provider-cloudflare.dataCloudflareAiSearchInstances.DataCloudflareAiSearchInstances.addOverride.parameter.path"></a>

- *Type:* *string

---

###### `value`<sup>Required</sup> <a name="value" id="@cdktn/provider-cloudflare.dataCloudflareAiSearchInstances.DataCloudflareAiSearchInstances.addOverride.parameter.value"></a>

- *Type:* interface{}

---

##### `OverrideLogicalId` <a name="OverrideLogicalId" id="@cdktn/provider-cloudflare.dataCloudflareAiSearchInstances.DataCloudflareAiSearchInstances.overrideLogicalId"></a>

```go
func OverrideLogicalId(newLogicalId *string)
```

Overrides the auto-generated logical ID with a specific ID.

###### `newLogicalId`<sup>Required</sup> <a name="newLogicalId" id="@cdktn/provider-cloudflare.dataCloudflareAiSearchInstances.DataCloudflareAiSearchInstances.overrideLogicalId.parameter.newLogicalId"></a>

- *Type:* *string

The new logical ID to use for this stack element.

---

##### `ResetOverrideLogicalId` <a name="ResetOverrideLogicalId" id="@cdktn/provider-cloudflare.dataCloudflareAiSearchInstances.DataCloudflareAiSearchInstances.resetOverrideLogicalId"></a>

```go
func ResetOverrideLogicalId()
```

Resets a previously passed logical Id to use the auto-generated logical id again.

##### `ToHclTerraform` <a name="ToHclTerraform" id="@cdktn/provider-cloudflare.dataCloudflareAiSearchInstances.DataCloudflareAiSearchInstances.toHclTerraform"></a>

```go
func ToHclTerraform() interface{}
```

Adds this resource to the terraform JSON output.

##### `ToMetadata` <a name="ToMetadata" id="@cdktn/provider-cloudflare.dataCloudflareAiSearchInstances.DataCloudflareAiSearchInstances.toMetadata"></a>

```go
func ToMetadata() interface{}
```

##### `ToTerraform` <a name="ToTerraform" id="@cdktn/provider-cloudflare.dataCloudflareAiSearchInstances.DataCloudflareAiSearchInstances.toTerraform"></a>

```go
func ToTerraform() interface{}
```

Adds this resource to the terraform JSON output.

##### `GetAnyMapAttribute` <a name="GetAnyMapAttribute" id="@cdktn/provider-cloudflare.dataCloudflareAiSearchInstances.DataCloudflareAiSearchInstances.getAnyMapAttribute"></a>

```go
func GetAnyMapAttribute(terraformAttribute *string) *map[string]interface{}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-cloudflare.dataCloudflareAiSearchInstances.DataCloudflareAiSearchInstances.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetBooleanAttribute` <a name="GetBooleanAttribute" id="@cdktn/provider-cloudflare.dataCloudflareAiSearchInstances.DataCloudflareAiSearchInstances.getBooleanAttribute"></a>

```go
func GetBooleanAttribute(terraformAttribute *string) IResolvable
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-cloudflare.dataCloudflareAiSearchInstances.DataCloudflareAiSearchInstances.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetBooleanMapAttribute` <a name="GetBooleanMapAttribute" id="@cdktn/provider-cloudflare.dataCloudflareAiSearchInstances.DataCloudflareAiSearchInstances.getBooleanMapAttribute"></a>

```go
func GetBooleanMapAttribute(terraformAttribute *string) *map[string]*bool
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-cloudflare.dataCloudflareAiSearchInstances.DataCloudflareAiSearchInstances.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetListAttribute` <a name="GetListAttribute" id="@cdktn/provider-cloudflare.dataCloudflareAiSearchInstances.DataCloudflareAiSearchInstances.getListAttribute"></a>

```go
func GetListAttribute(terraformAttribute *string) *[]*string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-cloudflare.dataCloudflareAiSearchInstances.DataCloudflareAiSearchInstances.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberAttribute` <a name="GetNumberAttribute" id="@cdktn/provider-cloudflare.dataCloudflareAiSearchInstances.DataCloudflareAiSearchInstances.getNumberAttribute"></a>

```go
func GetNumberAttribute(terraformAttribute *string) *f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-cloudflare.dataCloudflareAiSearchInstances.DataCloudflareAiSearchInstances.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberListAttribute` <a name="GetNumberListAttribute" id="@cdktn/provider-cloudflare.dataCloudflareAiSearchInstances.DataCloudflareAiSearchInstances.getNumberListAttribute"></a>

```go
func GetNumberListAttribute(terraformAttribute *string) *[]*f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-cloudflare.dataCloudflareAiSearchInstances.DataCloudflareAiSearchInstances.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberMapAttribute` <a name="GetNumberMapAttribute" id="@cdktn/provider-cloudflare.dataCloudflareAiSearchInstances.DataCloudflareAiSearchInstances.getNumberMapAttribute"></a>

```go
func GetNumberMapAttribute(terraformAttribute *string) *map[string]*f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-cloudflare.dataCloudflareAiSearchInstances.DataCloudflareAiSearchInstances.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetStringAttribute` <a name="GetStringAttribute" id="@cdktn/provider-cloudflare.dataCloudflareAiSearchInstances.DataCloudflareAiSearchInstances.getStringAttribute"></a>

```go
func GetStringAttribute(terraformAttribute *string) *string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-cloudflare.dataCloudflareAiSearchInstances.DataCloudflareAiSearchInstances.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetStringMapAttribute` <a name="GetStringMapAttribute" id="@cdktn/provider-cloudflare.dataCloudflareAiSearchInstances.DataCloudflareAiSearchInstances.getStringMapAttribute"></a>

```go
func GetStringMapAttribute(terraformAttribute *string) *map[string]*string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-cloudflare.dataCloudflareAiSearchInstances.DataCloudflareAiSearchInstances.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `InterpolationForAttribute` <a name="InterpolationForAttribute" id="@cdktn/provider-cloudflare.dataCloudflareAiSearchInstances.DataCloudflareAiSearchInstances.interpolationForAttribute"></a>

```go
func InterpolationForAttribute(terraformAttribute *string) IResolvable
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-cloudflare.dataCloudflareAiSearchInstances.DataCloudflareAiSearchInstances.interpolationForAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `ResetMaxItems` <a name="ResetMaxItems" id="@cdktn/provider-cloudflare.dataCloudflareAiSearchInstances.DataCloudflareAiSearchInstances.resetMaxItems"></a>

```go
func ResetMaxItems()
```

##### `ResetSearch` <a name="ResetSearch" id="@cdktn/provider-cloudflare.dataCloudflareAiSearchInstances.DataCloudflareAiSearchInstances.resetSearch"></a>

```go
func ResetSearch()
```

#### Static Functions <a name="Static Functions" id="Static Functions"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-cloudflare.dataCloudflareAiSearchInstances.DataCloudflareAiSearchInstances.isConstruct">IsConstruct</a></code> | Checks if `x` is a construct. |
| <code><a href="#@cdktn/provider-cloudflare.dataCloudflareAiSearchInstances.DataCloudflareAiSearchInstances.isTerraformElement">IsTerraformElement</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-cloudflare.dataCloudflareAiSearchInstances.DataCloudflareAiSearchInstances.isTerraformDataSource">IsTerraformDataSource</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-cloudflare.dataCloudflareAiSearchInstances.DataCloudflareAiSearchInstances.generateConfigForImport">GenerateConfigForImport</a></code> | Generates CDKTN code for importing a DataCloudflareAiSearchInstances resource upon running "cdktn plan <stack-name>". |

---

##### `IsConstruct` <a name="IsConstruct" id="@cdktn/provider-cloudflare.dataCloudflareAiSearchInstances.DataCloudflareAiSearchInstances.isConstruct"></a>

```go
import "github.com/cdktn-io/cdktn-provider-cloudflare-go/cloudflare/v14/datacloudflareaisearchinstances"

datacloudflareaisearchinstances.DataCloudflareAiSearchInstances_IsConstruct(x interface{}) *bool
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

###### `x`<sup>Required</sup> <a name="x" id="@cdktn/provider-cloudflare.dataCloudflareAiSearchInstances.DataCloudflareAiSearchInstances.isConstruct.parameter.x"></a>

- *Type:* interface{}

Any object.

---

##### `IsTerraformElement` <a name="IsTerraformElement" id="@cdktn/provider-cloudflare.dataCloudflareAiSearchInstances.DataCloudflareAiSearchInstances.isTerraformElement"></a>

```go
import "github.com/cdktn-io/cdktn-provider-cloudflare-go/cloudflare/v14/datacloudflareaisearchinstances"

datacloudflareaisearchinstances.DataCloudflareAiSearchInstances_IsTerraformElement(x interface{}) *bool
```

###### `x`<sup>Required</sup> <a name="x" id="@cdktn/provider-cloudflare.dataCloudflareAiSearchInstances.DataCloudflareAiSearchInstances.isTerraformElement.parameter.x"></a>

- *Type:* interface{}

---

##### `IsTerraformDataSource` <a name="IsTerraformDataSource" id="@cdktn/provider-cloudflare.dataCloudflareAiSearchInstances.DataCloudflareAiSearchInstances.isTerraformDataSource"></a>

```go
import "github.com/cdktn-io/cdktn-provider-cloudflare-go/cloudflare/v14/datacloudflareaisearchinstances"

datacloudflareaisearchinstances.DataCloudflareAiSearchInstances_IsTerraformDataSource(x interface{}) *bool
```

###### `x`<sup>Required</sup> <a name="x" id="@cdktn/provider-cloudflare.dataCloudflareAiSearchInstances.DataCloudflareAiSearchInstances.isTerraformDataSource.parameter.x"></a>

- *Type:* interface{}

---

##### `GenerateConfigForImport` <a name="GenerateConfigForImport" id="@cdktn/provider-cloudflare.dataCloudflareAiSearchInstances.DataCloudflareAiSearchInstances.generateConfigForImport"></a>

```go
import "github.com/cdktn-io/cdktn-provider-cloudflare-go/cloudflare/v14/datacloudflareaisearchinstances"

datacloudflareaisearchinstances.DataCloudflareAiSearchInstances_GenerateConfigForImport(scope Construct, importToId *string, importFromId *string, provider TerraformProvider) ImportableResource
```

Generates CDKTN code for importing a DataCloudflareAiSearchInstances resource upon running "cdktn plan <stack-name>".

###### `scope`<sup>Required</sup> <a name="scope" id="@cdktn/provider-cloudflare.dataCloudflareAiSearchInstances.DataCloudflareAiSearchInstances.generateConfigForImport.parameter.scope"></a>

- *Type:* github.com/aws/constructs-go/constructs/v10.Construct

The scope in which to define this construct.

---

###### `importToId`<sup>Required</sup> <a name="importToId" id="@cdktn/provider-cloudflare.dataCloudflareAiSearchInstances.DataCloudflareAiSearchInstances.generateConfigForImport.parameter.importToId"></a>

- *Type:* *string

The construct id used in the generated config for the DataCloudflareAiSearchInstances to import.

---

###### `importFromId`<sup>Required</sup> <a name="importFromId" id="@cdktn/provider-cloudflare.dataCloudflareAiSearchInstances.DataCloudflareAiSearchInstances.generateConfigForImport.parameter.importFromId"></a>

- *Type:* *string

The id of the existing DataCloudflareAiSearchInstances that should be imported.

Refer to the {@link https://registry.terraform.io/providers/cloudflare/cloudflare/5.17.0/docs/data-sources/ai_search_instances#import import section} in the documentation of this resource for the id to use

---

###### `provider`<sup>Optional</sup> <a name="provider" id="@cdktn/provider-cloudflare.dataCloudflareAiSearchInstances.DataCloudflareAiSearchInstances.generateConfigForImport.parameter.provider"></a>

- *Type:* github.com/open-constructs/cdk-terrain-go/cdktn.TerraformProvider

? Optional instance of the provider where the DataCloudflareAiSearchInstances to import is found.

---

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-cloudflare.dataCloudflareAiSearchInstances.DataCloudflareAiSearchInstances.property.node">Node</a></code> | <code>github.com/aws/constructs-go/constructs/v10.Node</code> | The tree node. |
| <code><a href="#@cdktn/provider-cloudflare.dataCloudflareAiSearchInstances.DataCloudflareAiSearchInstances.property.cdktfStack">CdktfStack</a></code> | <code>github.com/open-constructs/cdk-terrain-go/cdktn.TerraformStack</code> | *No description.* |
| <code><a href="#@cdktn/provider-cloudflare.dataCloudflareAiSearchInstances.DataCloudflareAiSearchInstances.property.fqn">Fqn</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktn/provider-cloudflare.dataCloudflareAiSearchInstances.DataCloudflareAiSearchInstances.property.friendlyUniqueId">FriendlyUniqueId</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktn/provider-cloudflare.dataCloudflareAiSearchInstances.DataCloudflareAiSearchInstances.property.terraformMetaArguments">TerraformMetaArguments</a></code> | <code>*map[string]interface{}</code> | *No description.* |
| <code><a href="#@cdktn/provider-cloudflare.dataCloudflareAiSearchInstances.DataCloudflareAiSearchInstances.property.terraformResourceType">TerraformResourceType</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktn/provider-cloudflare.dataCloudflareAiSearchInstances.DataCloudflareAiSearchInstances.property.terraformGeneratorMetadata">TerraformGeneratorMetadata</a></code> | <code>github.com/open-constructs/cdk-terrain-go/cdktn.TerraformProviderGeneratorMetadata</code> | *No description.* |
| <code><a href="#@cdktn/provider-cloudflare.dataCloudflareAiSearchInstances.DataCloudflareAiSearchInstances.property.count">Count</a></code> | <code>interface{}</code> | *No description.* |
| <code><a href="#@cdktn/provider-cloudflare.dataCloudflareAiSearchInstances.DataCloudflareAiSearchInstances.property.dependsOn">DependsOn</a></code> | <code>*[]*string</code> | *No description.* |
| <code><a href="#@cdktn/provider-cloudflare.dataCloudflareAiSearchInstances.DataCloudflareAiSearchInstances.property.forEach">ForEach</a></code> | <code>github.com/open-constructs/cdk-terrain-go/cdktn.ITerraformIterator</code> | *No description.* |
| <code><a href="#@cdktn/provider-cloudflare.dataCloudflareAiSearchInstances.DataCloudflareAiSearchInstances.property.lifecycle">Lifecycle</a></code> | <code>github.com/open-constructs/cdk-terrain-go/cdktn.TerraformResourceLifecycle</code> | *No description.* |
| <code><a href="#@cdktn/provider-cloudflare.dataCloudflareAiSearchInstances.DataCloudflareAiSearchInstances.property.provider">Provider</a></code> | <code>github.com/open-constructs/cdk-terrain-go/cdktn.TerraformProvider</code> | *No description.* |
| <code><a href="#@cdktn/provider-cloudflare.dataCloudflareAiSearchInstances.DataCloudflareAiSearchInstances.property.result">Result</a></code> | <code><a href="#@cdktn/provider-cloudflare.dataCloudflareAiSearchInstances.DataCloudflareAiSearchInstancesResultList">DataCloudflareAiSearchInstancesResultList</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-cloudflare.dataCloudflareAiSearchInstances.DataCloudflareAiSearchInstances.property.accountIdInput">AccountIdInput</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktn/provider-cloudflare.dataCloudflareAiSearchInstances.DataCloudflareAiSearchInstances.property.maxItemsInput">MaxItemsInput</a></code> | <code>*f64</code> | *No description.* |
| <code><a href="#@cdktn/provider-cloudflare.dataCloudflareAiSearchInstances.DataCloudflareAiSearchInstances.property.searchInput">SearchInput</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktn/provider-cloudflare.dataCloudflareAiSearchInstances.DataCloudflareAiSearchInstances.property.accountId">AccountId</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktn/provider-cloudflare.dataCloudflareAiSearchInstances.DataCloudflareAiSearchInstances.property.maxItems">MaxItems</a></code> | <code>*f64</code> | *No description.* |
| <code><a href="#@cdktn/provider-cloudflare.dataCloudflareAiSearchInstances.DataCloudflareAiSearchInstances.property.search">Search</a></code> | <code>*string</code> | *No description.* |

---

##### `Node`<sup>Required</sup> <a name="Node" id="@cdktn/provider-cloudflare.dataCloudflareAiSearchInstances.DataCloudflareAiSearchInstances.property.node"></a>

```go
func Node() Node
```

- *Type:* github.com/aws/constructs-go/constructs/v10.Node

The tree node.

---

##### `CdktfStack`<sup>Required</sup> <a name="CdktfStack" id="@cdktn/provider-cloudflare.dataCloudflareAiSearchInstances.DataCloudflareAiSearchInstances.property.cdktfStack"></a>

```go
func CdktfStack() TerraformStack
```

- *Type:* github.com/open-constructs/cdk-terrain-go/cdktn.TerraformStack

---

##### `Fqn`<sup>Required</sup> <a name="Fqn" id="@cdktn/provider-cloudflare.dataCloudflareAiSearchInstances.DataCloudflareAiSearchInstances.property.fqn"></a>

```go
func Fqn() *string
```

- *Type:* *string

---

##### `FriendlyUniqueId`<sup>Required</sup> <a name="FriendlyUniqueId" id="@cdktn/provider-cloudflare.dataCloudflareAiSearchInstances.DataCloudflareAiSearchInstances.property.friendlyUniqueId"></a>

```go
func FriendlyUniqueId() *string
```

- *Type:* *string

---

##### `TerraformMetaArguments`<sup>Required</sup> <a name="TerraformMetaArguments" id="@cdktn/provider-cloudflare.dataCloudflareAiSearchInstances.DataCloudflareAiSearchInstances.property.terraformMetaArguments"></a>

```go
func TerraformMetaArguments() *map[string]interface{}
```

- *Type:* *map[string]interface{}

---

##### `TerraformResourceType`<sup>Required</sup> <a name="TerraformResourceType" id="@cdktn/provider-cloudflare.dataCloudflareAiSearchInstances.DataCloudflareAiSearchInstances.property.terraformResourceType"></a>

```go
func TerraformResourceType() *string
```

- *Type:* *string

---

##### `TerraformGeneratorMetadata`<sup>Optional</sup> <a name="TerraformGeneratorMetadata" id="@cdktn/provider-cloudflare.dataCloudflareAiSearchInstances.DataCloudflareAiSearchInstances.property.terraformGeneratorMetadata"></a>

```go
func TerraformGeneratorMetadata() TerraformProviderGeneratorMetadata
```

- *Type:* github.com/open-constructs/cdk-terrain-go/cdktn.TerraformProviderGeneratorMetadata

---

##### `Count`<sup>Optional</sup> <a name="Count" id="@cdktn/provider-cloudflare.dataCloudflareAiSearchInstances.DataCloudflareAiSearchInstances.property.count"></a>

```go
func Count() interface{}
```

- *Type:* interface{}

---

##### `DependsOn`<sup>Optional</sup> <a name="DependsOn" id="@cdktn/provider-cloudflare.dataCloudflareAiSearchInstances.DataCloudflareAiSearchInstances.property.dependsOn"></a>

```go
func DependsOn() *[]*string
```

- *Type:* *[]*string

---

##### `ForEach`<sup>Optional</sup> <a name="ForEach" id="@cdktn/provider-cloudflare.dataCloudflareAiSearchInstances.DataCloudflareAiSearchInstances.property.forEach"></a>

```go
func ForEach() ITerraformIterator
```

- *Type:* github.com/open-constructs/cdk-terrain-go/cdktn.ITerraformIterator

---

##### `Lifecycle`<sup>Optional</sup> <a name="Lifecycle" id="@cdktn/provider-cloudflare.dataCloudflareAiSearchInstances.DataCloudflareAiSearchInstances.property.lifecycle"></a>

```go
func Lifecycle() TerraformResourceLifecycle
```

- *Type:* github.com/open-constructs/cdk-terrain-go/cdktn.TerraformResourceLifecycle

---

##### `Provider`<sup>Optional</sup> <a name="Provider" id="@cdktn/provider-cloudflare.dataCloudflareAiSearchInstances.DataCloudflareAiSearchInstances.property.provider"></a>

```go
func Provider() TerraformProvider
```

- *Type:* github.com/open-constructs/cdk-terrain-go/cdktn.TerraformProvider

---

##### `Result`<sup>Required</sup> <a name="Result" id="@cdktn/provider-cloudflare.dataCloudflareAiSearchInstances.DataCloudflareAiSearchInstances.property.result"></a>

```go
func Result() DataCloudflareAiSearchInstancesResultList
```

- *Type:* <a href="#@cdktn/provider-cloudflare.dataCloudflareAiSearchInstances.DataCloudflareAiSearchInstancesResultList">DataCloudflareAiSearchInstancesResultList</a>

---

##### `AccountIdInput`<sup>Optional</sup> <a name="AccountIdInput" id="@cdktn/provider-cloudflare.dataCloudflareAiSearchInstances.DataCloudflareAiSearchInstances.property.accountIdInput"></a>

```go
func AccountIdInput() *string
```

- *Type:* *string

---

##### `MaxItemsInput`<sup>Optional</sup> <a name="MaxItemsInput" id="@cdktn/provider-cloudflare.dataCloudflareAiSearchInstances.DataCloudflareAiSearchInstances.property.maxItemsInput"></a>

```go
func MaxItemsInput() *f64
```

- *Type:* *f64

---

##### `SearchInput`<sup>Optional</sup> <a name="SearchInput" id="@cdktn/provider-cloudflare.dataCloudflareAiSearchInstances.DataCloudflareAiSearchInstances.property.searchInput"></a>

```go
func SearchInput() *string
```

- *Type:* *string

---

##### `AccountId`<sup>Required</sup> <a name="AccountId" id="@cdktn/provider-cloudflare.dataCloudflareAiSearchInstances.DataCloudflareAiSearchInstances.property.accountId"></a>

```go
func AccountId() *string
```

- *Type:* *string

---

##### `MaxItems`<sup>Required</sup> <a name="MaxItems" id="@cdktn/provider-cloudflare.dataCloudflareAiSearchInstances.DataCloudflareAiSearchInstances.property.maxItems"></a>

```go
func MaxItems() *f64
```

- *Type:* *f64

---

##### `Search`<sup>Required</sup> <a name="Search" id="@cdktn/provider-cloudflare.dataCloudflareAiSearchInstances.DataCloudflareAiSearchInstances.property.search"></a>

```go
func Search() *string
```

- *Type:* *string

---

#### Constants <a name="Constants" id="Constants"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-cloudflare.dataCloudflareAiSearchInstances.DataCloudflareAiSearchInstances.property.tfResourceType">TfResourceType</a></code> | <code>*string</code> | *No description.* |

---

##### `TfResourceType`<sup>Required</sup> <a name="TfResourceType" id="@cdktn/provider-cloudflare.dataCloudflareAiSearchInstances.DataCloudflareAiSearchInstances.property.tfResourceType"></a>

```go
func TfResourceType() *string
```

- *Type:* *string

---

## Structs <a name="Structs" id="Structs"></a>

### DataCloudflareAiSearchInstancesConfig <a name="DataCloudflareAiSearchInstancesConfig" id="@cdktn/provider-cloudflare.dataCloudflareAiSearchInstances.DataCloudflareAiSearchInstancesConfig"></a>

#### Initializer <a name="Initializer" id="@cdktn/provider-cloudflare.dataCloudflareAiSearchInstances.DataCloudflareAiSearchInstancesConfig.Initializer"></a>

```go
import "github.com/cdktn-io/cdktn-provider-cloudflare-go/cloudflare/v14/datacloudflareaisearchinstances"

&datacloudflareaisearchinstances.DataCloudflareAiSearchInstancesConfig {
	Connection: interface{},
	Count: interface{},
	DependsOn: *[]github.com/open-constructs/cdk-terrain-go/cdktn.ITerraformDependable,
	ForEach: github.com/open-constructs/cdk-terrain-go/cdktn.ITerraformIterator,
	Lifecycle: github.com/open-constructs/cdk-terrain-go/cdktn.TerraformResourceLifecycle,
	Provider: github.com/open-constructs/cdk-terrain-go/cdktn.TerraformProvider,
	Provisioners: *[]interface{},
	AccountId: *string,
	MaxItems: *f64,
	Search: *string,
}
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-cloudflare.dataCloudflareAiSearchInstances.DataCloudflareAiSearchInstancesConfig.property.connection">Connection</a></code> | <code>interface{}</code> | *No description.* |
| <code><a href="#@cdktn/provider-cloudflare.dataCloudflareAiSearchInstances.DataCloudflareAiSearchInstancesConfig.property.count">Count</a></code> | <code>interface{}</code> | *No description.* |
| <code><a href="#@cdktn/provider-cloudflare.dataCloudflareAiSearchInstances.DataCloudflareAiSearchInstancesConfig.property.dependsOn">DependsOn</a></code> | <code>*[]github.com/open-constructs/cdk-terrain-go/cdktn.ITerraformDependable</code> | *No description.* |
| <code><a href="#@cdktn/provider-cloudflare.dataCloudflareAiSearchInstances.DataCloudflareAiSearchInstancesConfig.property.forEach">ForEach</a></code> | <code>github.com/open-constructs/cdk-terrain-go/cdktn.ITerraformIterator</code> | *No description.* |
| <code><a href="#@cdktn/provider-cloudflare.dataCloudflareAiSearchInstances.DataCloudflareAiSearchInstancesConfig.property.lifecycle">Lifecycle</a></code> | <code>github.com/open-constructs/cdk-terrain-go/cdktn.TerraformResourceLifecycle</code> | *No description.* |
| <code><a href="#@cdktn/provider-cloudflare.dataCloudflareAiSearchInstances.DataCloudflareAiSearchInstancesConfig.property.provider">Provider</a></code> | <code>github.com/open-constructs/cdk-terrain-go/cdktn.TerraformProvider</code> | *No description.* |
| <code><a href="#@cdktn/provider-cloudflare.dataCloudflareAiSearchInstances.DataCloudflareAiSearchInstancesConfig.property.provisioners">Provisioners</a></code> | <code>*[]interface{}</code> | *No description.* |
| <code><a href="#@cdktn/provider-cloudflare.dataCloudflareAiSearchInstances.DataCloudflareAiSearchInstancesConfig.property.accountId">AccountId</a></code> | <code>*string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/cloudflare/cloudflare/5.17.0/docs/data-sources/ai_search_instances#account_id DataCloudflareAiSearchInstances#account_id}. |
| <code><a href="#@cdktn/provider-cloudflare.dataCloudflareAiSearchInstances.DataCloudflareAiSearchInstancesConfig.property.maxItems">MaxItems</a></code> | <code>*f64</code> | Max items to fetch, default: 1000. |
| <code><a href="#@cdktn/provider-cloudflare.dataCloudflareAiSearchInstances.DataCloudflareAiSearchInstancesConfig.property.search">Search</a></code> | <code>*string</code> | Search by id. |

---

##### `Connection`<sup>Optional</sup> <a name="Connection" id="@cdktn/provider-cloudflare.dataCloudflareAiSearchInstances.DataCloudflareAiSearchInstancesConfig.property.connection"></a>

```go
Connection interface{}
```

- *Type:* interface{}

---

##### `Count`<sup>Optional</sup> <a name="Count" id="@cdktn/provider-cloudflare.dataCloudflareAiSearchInstances.DataCloudflareAiSearchInstancesConfig.property.count"></a>

```go
Count interface{}
```

- *Type:* interface{}

---

##### `DependsOn`<sup>Optional</sup> <a name="DependsOn" id="@cdktn/provider-cloudflare.dataCloudflareAiSearchInstances.DataCloudflareAiSearchInstancesConfig.property.dependsOn"></a>

```go
DependsOn *[]ITerraformDependable
```

- *Type:* *[]github.com/open-constructs/cdk-terrain-go/cdktn.ITerraformDependable

---

##### `ForEach`<sup>Optional</sup> <a name="ForEach" id="@cdktn/provider-cloudflare.dataCloudflareAiSearchInstances.DataCloudflareAiSearchInstancesConfig.property.forEach"></a>

```go
ForEach ITerraformIterator
```

- *Type:* github.com/open-constructs/cdk-terrain-go/cdktn.ITerraformIterator

---

##### `Lifecycle`<sup>Optional</sup> <a name="Lifecycle" id="@cdktn/provider-cloudflare.dataCloudflareAiSearchInstances.DataCloudflareAiSearchInstancesConfig.property.lifecycle"></a>

```go
Lifecycle TerraformResourceLifecycle
```

- *Type:* github.com/open-constructs/cdk-terrain-go/cdktn.TerraformResourceLifecycle

---

##### `Provider`<sup>Optional</sup> <a name="Provider" id="@cdktn/provider-cloudflare.dataCloudflareAiSearchInstances.DataCloudflareAiSearchInstancesConfig.property.provider"></a>

```go
Provider TerraformProvider
```

- *Type:* github.com/open-constructs/cdk-terrain-go/cdktn.TerraformProvider

---

##### `Provisioners`<sup>Optional</sup> <a name="Provisioners" id="@cdktn/provider-cloudflare.dataCloudflareAiSearchInstances.DataCloudflareAiSearchInstancesConfig.property.provisioners"></a>

```go
Provisioners *[]interface{}
```

- *Type:* *[]interface{}

---

##### `AccountId`<sup>Required</sup> <a name="AccountId" id="@cdktn/provider-cloudflare.dataCloudflareAiSearchInstances.DataCloudflareAiSearchInstancesConfig.property.accountId"></a>

```go
AccountId *string
```

- *Type:* *string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/cloudflare/cloudflare/5.17.0/docs/data-sources/ai_search_instances#account_id DataCloudflareAiSearchInstances#account_id}.

---

##### `MaxItems`<sup>Optional</sup> <a name="MaxItems" id="@cdktn/provider-cloudflare.dataCloudflareAiSearchInstances.DataCloudflareAiSearchInstancesConfig.property.maxItems"></a>

```go
MaxItems *f64
```

- *Type:* *f64

Max items to fetch, default: 1000.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/cloudflare/cloudflare/5.17.0/docs/data-sources/ai_search_instances#max_items DataCloudflareAiSearchInstances#max_items}

---

##### `Search`<sup>Optional</sup> <a name="Search" id="@cdktn/provider-cloudflare.dataCloudflareAiSearchInstances.DataCloudflareAiSearchInstancesConfig.property.search"></a>

```go
Search *string
```

- *Type:* *string

Search by id.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/cloudflare/cloudflare/5.17.0/docs/data-sources/ai_search_instances#search DataCloudflareAiSearchInstances#search}

---

### DataCloudflareAiSearchInstancesResult <a name="DataCloudflareAiSearchInstancesResult" id="@cdktn/provider-cloudflare.dataCloudflareAiSearchInstances.DataCloudflareAiSearchInstancesResult"></a>

#### Initializer <a name="Initializer" id="@cdktn/provider-cloudflare.dataCloudflareAiSearchInstances.DataCloudflareAiSearchInstancesResult.Initializer"></a>

```go
import "github.com/cdktn-io/cdktn-provider-cloudflare-go/cloudflare/v14/datacloudflareaisearchinstances"

&datacloudflareaisearchinstances.DataCloudflareAiSearchInstancesResult {

}
```


### DataCloudflareAiSearchInstancesResultCustomMetadata <a name="DataCloudflareAiSearchInstancesResultCustomMetadata" id="@cdktn/provider-cloudflare.dataCloudflareAiSearchInstances.DataCloudflareAiSearchInstancesResultCustomMetadata"></a>

#### Initializer <a name="Initializer" id="@cdktn/provider-cloudflare.dataCloudflareAiSearchInstances.DataCloudflareAiSearchInstancesResultCustomMetadata.Initializer"></a>

```go
import "github.com/cdktn-io/cdktn-provider-cloudflare-go/cloudflare/v14/datacloudflareaisearchinstances"

&datacloudflareaisearchinstances.DataCloudflareAiSearchInstancesResultCustomMetadata {

}
```


### DataCloudflareAiSearchInstancesResultMetadata <a name="DataCloudflareAiSearchInstancesResultMetadata" id="@cdktn/provider-cloudflare.dataCloudflareAiSearchInstances.DataCloudflareAiSearchInstancesResultMetadata"></a>

#### Initializer <a name="Initializer" id="@cdktn/provider-cloudflare.dataCloudflareAiSearchInstances.DataCloudflareAiSearchInstancesResultMetadata.Initializer"></a>

```go
import "github.com/cdktn-io/cdktn-provider-cloudflare-go/cloudflare/v14/datacloudflareaisearchinstances"

&datacloudflareaisearchinstances.DataCloudflareAiSearchInstancesResultMetadata {

}
```


### DataCloudflareAiSearchInstancesResultPublicEndpointParams <a name="DataCloudflareAiSearchInstancesResultPublicEndpointParams" id="@cdktn/provider-cloudflare.dataCloudflareAiSearchInstances.DataCloudflareAiSearchInstancesResultPublicEndpointParams"></a>

#### Initializer <a name="Initializer" id="@cdktn/provider-cloudflare.dataCloudflareAiSearchInstances.DataCloudflareAiSearchInstancesResultPublicEndpointParams.Initializer"></a>

```go
import "github.com/cdktn-io/cdktn-provider-cloudflare-go/cloudflare/v14/datacloudflareaisearchinstances"

&datacloudflareaisearchinstances.DataCloudflareAiSearchInstancesResultPublicEndpointParams {

}
```


### DataCloudflareAiSearchInstancesResultPublicEndpointParamsChatCompletionsEndpoint <a name="DataCloudflareAiSearchInstancesResultPublicEndpointParamsChatCompletionsEndpoint" id="@cdktn/provider-cloudflare.dataCloudflareAiSearchInstances.DataCloudflareAiSearchInstancesResultPublicEndpointParamsChatCompletionsEndpoint"></a>

#### Initializer <a name="Initializer" id="@cdktn/provider-cloudflare.dataCloudflareAiSearchInstances.DataCloudflareAiSearchInstancesResultPublicEndpointParamsChatCompletionsEndpoint.Initializer"></a>

```go
import "github.com/cdktn-io/cdktn-provider-cloudflare-go/cloudflare/v14/datacloudflareaisearchinstances"

&datacloudflareaisearchinstances.DataCloudflareAiSearchInstancesResultPublicEndpointParamsChatCompletionsEndpoint {

}
```


### DataCloudflareAiSearchInstancesResultPublicEndpointParamsMcp <a name="DataCloudflareAiSearchInstancesResultPublicEndpointParamsMcp" id="@cdktn/provider-cloudflare.dataCloudflareAiSearchInstances.DataCloudflareAiSearchInstancesResultPublicEndpointParamsMcp"></a>

#### Initializer <a name="Initializer" id="@cdktn/provider-cloudflare.dataCloudflareAiSearchInstances.DataCloudflareAiSearchInstancesResultPublicEndpointParamsMcp.Initializer"></a>

```go
import "github.com/cdktn-io/cdktn-provider-cloudflare-go/cloudflare/v14/datacloudflareaisearchinstances"

&datacloudflareaisearchinstances.DataCloudflareAiSearchInstancesResultPublicEndpointParamsMcp {

}
```


### DataCloudflareAiSearchInstancesResultPublicEndpointParamsRateLimit <a name="DataCloudflareAiSearchInstancesResultPublicEndpointParamsRateLimit" id="@cdktn/provider-cloudflare.dataCloudflareAiSearchInstances.DataCloudflareAiSearchInstancesResultPublicEndpointParamsRateLimit"></a>

#### Initializer <a name="Initializer" id="@cdktn/provider-cloudflare.dataCloudflareAiSearchInstances.DataCloudflareAiSearchInstancesResultPublicEndpointParamsRateLimit.Initializer"></a>

```go
import "github.com/cdktn-io/cdktn-provider-cloudflare-go/cloudflare/v14/datacloudflareaisearchinstances"

&datacloudflareaisearchinstances.DataCloudflareAiSearchInstancesResultPublicEndpointParamsRateLimit {

}
```


### DataCloudflareAiSearchInstancesResultPublicEndpointParamsSearchEndpoint <a name="DataCloudflareAiSearchInstancesResultPublicEndpointParamsSearchEndpoint" id="@cdktn/provider-cloudflare.dataCloudflareAiSearchInstances.DataCloudflareAiSearchInstancesResultPublicEndpointParamsSearchEndpoint"></a>

#### Initializer <a name="Initializer" id="@cdktn/provider-cloudflare.dataCloudflareAiSearchInstances.DataCloudflareAiSearchInstancesResultPublicEndpointParamsSearchEndpoint.Initializer"></a>

```go
import "github.com/cdktn-io/cdktn-provider-cloudflare-go/cloudflare/v14/datacloudflareaisearchinstances"

&datacloudflareaisearchinstances.DataCloudflareAiSearchInstancesResultPublicEndpointParamsSearchEndpoint {

}
```


### DataCloudflareAiSearchInstancesResultSourceParams <a name="DataCloudflareAiSearchInstancesResultSourceParams" id="@cdktn/provider-cloudflare.dataCloudflareAiSearchInstances.DataCloudflareAiSearchInstancesResultSourceParams"></a>

#### Initializer <a name="Initializer" id="@cdktn/provider-cloudflare.dataCloudflareAiSearchInstances.DataCloudflareAiSearchInstancesResultSourceParams.Initializer"></a>

```go
import "github.com/cdktn-io/cdktn-provider-cloudflare-go/cloudflare/v14/datacloudflareaisearchinstances"

&datacloudflareaisearchinstances.DataCloudflareAiSearchInstancesResultSourceParams {

}
```


### DataCloudflareAiSearchInstancesResultSourceParamsWebCrawler <a name="DataCloudflareAiSearchInstancesResultSourceParamsWebCrawler" id="@cdktn/provider-cloudflare.dataCloudflareAiSearchInstances.DataCloudflareAiSearchInstancesResultSourceParamsWebCrawler"></a>

#### Initializer <a name="Initializer" id="@cdktn/provider-cloudflare.dataCloudflareAiSearchInstances.DataCloudflareAiSearchInstancesResultSourceParamsWebCrawler.Initializer"></a>

```go
import "github.com/cdktn-io/cdktn-provider-cloudflare-go/cloudflare/v14/datacloudflareaisearchinstances"

&datacloudflareaisearchinstances.DataCloudflareAiSearchInstancesResultSourceParamsWebCrawler {

}
```


### DataCloudflareAiSearchInstancesResultSourceParamsWebCrawlerParseOptions <a name="DataCloudflareAiSearchInstancesResultSourceParamsWebCrawlerParseOptions" id="@cdktn/provider-cloudflare.dataCloudflareAiSearchInstances.DataCloudflareAiSearchInstancesResultSourceParamsWebCrawlerParseOptions"></a>

#### Initializer <a name="Initializer" id="@cdktn/provider-cloudflare.dataCloudflareAiSearchInstances.DataCloudflareAiSearchInstancesResultSourceParamsWebCrawlerParseOptions.Initializer"></a>

```go
import "github.com/cdktn-io/cdktn-provider-cloudflare-go/cloudflare/v14/datacloudflareaisearchinstances"

&datacloudflareaisearchinstances.DataCloudflareAiSearchInstancesResultSourceParamsWebCrawlerParseOptions {

}
```


### DataCloudflareAiSearchInstancesResultSourceParamsWebCrawlerStoreOptions <a name="DataCloudflareAiSearchInstancesResultSourceParamsWebCrawlerStoreOptions" id="@cdktn/provider-cloudflare.dataCloudflareAiSearchInstances.DataCloudflareAiSearchInstancesResultSourceParamsWebCrawlerStoreOptions"></a>

#### Initializer <a name="Initializer" id="@cdktn/provider-cloudflare.dataCloudflareAiSearchInstances.DataCloudflareAiSearchInstancesResultSourceParamsWebCrawlerStoreOptions.Initializer"></a>

```go
import "github.com/cdktn-io/cdktn-provider-cloudflare-go/cloudflare/v14/datacloudflareaisearchinstances"

&datacloudflareaisearchinstances.DataCloudflareAiSearchInstancesResultSourceParamsWebCrawlerStoreOptions {

}
```


## Classes <a name="Classes" id="Classes"></a>

### DataCloudflareAiSearchInstancesResultCustomMetadataList <a name="DataCloudflareAiSearchInstancesResultCustomMetadataList" id="@cdktn/provider-cloudflare.dataCloudflareAiSearchInstances.DataCloudflareAiSearchInstancesResultCustomMetadataList"></a>

#### Initializers <a name="Initializers" id="@cdktn/provider-cloudflare.dataCloudflareAiSearchInstances.DataCloudflareAiSearchInstancesResultCustomMetadataList.Initializer"></a>

```go
import "github.com/cdktn-io/cdktn-provider-cloudflare-go/cloudflare/v14/datacloudflareaisearchinstances"

datacloudflareaisearchinstances.NewDataCloudflareAiSearchInstancesResultCustomMetadataList(terraformResource IInterpolatingParent, terraformAttribute *string, wrapsSet *bool) DataCloudflareAiSearchInstancesResultCustomMetadataList
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-cloudflare.dataCloudflareAiSearchInstances.DataCloudflareAiSearchInstancesResultCustomMetadataList.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>github.com/open-constructs/cdk-terrain-go/cdktn.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktn/provider-cloudflare.dataCloudflareAiSearchInstances.DataCloudflareAiSearchInstancesResultCustomMetadataList.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>*string</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#@cdktn/provider-cloudflare.dataCloudflareAiSearchInstances.DataCloudflareAiSearchInstancesResultCustomMetadataList.Initializer.parameter.wrapsSet">wrapsSet</a></code> | <code>*bool</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktn/provider-cloudflare.dataCloudflareAiSearchInstances.DataCloudflareAiSearchInstancesResultCustomMetadataList.Initializer.parameter.terraformResource"></a>

- *Type:* github.com/open-constructs/cdk-terrain-go/cdktn.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-cloudflare.dataCloudflareAiSearchInstances.DataCloudflareAiSearchInstancesResultCustomMetadataList.Initializer.parameter.terraformAttribute"></a>

- *Type:* *string

The attribute on the parent resource this class is referencing.

---

##### `wrapsSet`<sup>Required</sup> <a name="wrapsSet" id="@cdktn/provider-cloudflare.dataCloudflareAiSearchInstances.DataCloudflareAiSearchInstancesResultCustomMetadataList.Initializer.parameter.wrapsSet"></a>

- *Type:* *bool

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-cloudflare.dataCloudflareAiSearchInstances.DataCloudflareAiSearchInstancesResultCustomMetadataList.allWithMapKey">AllWithMapKey</a></code> | Creating an iterator for this complex list. |
| <code><a href="#@cdktn/provider-cloudflare.dataCloudflareAiSearchInstances.DataCloudflareAiSearchInstancesResultCustomMetadataList.computeFqn">ComputeFqn</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-cloudflare.dataCloudflareAiSearchInstances.DataCloudflareAiSearchInstancesResultCustomMetadataList.resolve">Resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktn/provider-cloudflare.dataCloudflareAiSearchInstances.DataCloudflareAiSearchInstancesResultCustomMetadataList.toString">ToString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktn/provider-cloudflare.dataCloudflareAiSearchInstances.DataCloudflareAiSearchInstancesResultCustomMetadataList.get">Get</a></code> | *No description.* |

---

##### `AllWithMapKey` <a name="AllWithMapKey" id="@cdktn/provider-cloudflare.dataCloudflareAiSearchInstances.DataCloudflareAiSearchInstancesResultCustomMetadataList.allWithMapKey"></a>

```go
func AllWithMapKey(mapKeyAttributeName *string) DynamicListTerraformIterator
```

Creating an iterator for this complex list.

The list will be converted into a map with the mapKeyAttributeName as the key.

###### `mapKeyAttributeName`<sup>Required</sup> <a name="mapKeyAttributeName" id="@cdktn/provider-cloudflare.dataCloudflareAiSearchInstances.DataCloudflareAiSearchInstancesResultCustomMetadataList.allWithMapKey.parameter.mapKeyAttributeName"></a>

- *Type:* *string

---

##### `ComputeFqn` <a name="ComputeFqn" id="@cdktn/provider-cloudflare.dataCloudflareAiSearchInstances.DataCloudflareAiSearchInstancesResultCustomMetadataList.computeFqn"></a>

```go
func ComputeFqn() *string
```

##### `Resolve` <a name="Resolve" id="@cdktn/provider-cloudflare.dataCloudflareAiSearchInstances.DataCloudflareAiSearchInstancesResultCustomMetadataList.resolve"></a>

```go
func Resolve(_context IResolveContext) interface{}
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktn/provider-cloudflare.dataCloudflareAiSearchInstances.DataCloudflareAiSearchInstancesResultCustomMetadataList.resolve.parameter._context"></a>

- *Type:* github.com/open-constructs/cdk-terrain-go/cdktn.IResolveContext

---

##### `ToString` <a name="ToString" id="@cdktn/provider-cloudflare.dataCloudflareAiSearchInstances.DataCloudflareAiSearchInstancesResultCustomMetadataList.toString"></a>

```go
func ToString() *string
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `Get` <a name="Get" id="@cdktn/provider-cloudflare.dataCloudflareAiSearchInstances.DataCloudflareAiSearchInstancesResultCustomMetadataList.get"></a>

```go
func Get(index *f64) DataCloudflareAiSearchInstancesResultCustomMetadataOutputReference
```

###### `index`<sup>Required</sup> <a name="index" id="@cdktn/provider-cloudflare.dataCloudflareAiSearchInstances.DataCloudflareAiSearchInstancesResultCustomMetadataList.get.parameter.index"></a>

- *Type:* *f64

the index of the item to return.

---


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-cloudflare.dataCloudflareAiSearchInstances.DataCloudflareAiSearchInstancesResultCustomMetadataList.property.creationStack">CreationStack</a></code> | <code>*[]*string</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktn/provider-cloudflare.dataCloudflareAiSearchInstances.DataCloudflareAiSearchInstancesResultCustomMetadataList.property.fqn">Fqn</a></code> | <code>*string</code> | *No description.* |

---

##### `CreationStack`<sup>Required</sup> <a name="CreationStack" id="@cdktn/provider-cloudflare.dataCloudflareAiSearchInstances.DataCloudflareAiSearchInstancesResultCustomMetadataList.property.creationStack"></a>

```go
func CreationStack() *[]*string
```

- *Type:* *[]*string

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `Fqn`<sup>Required</sup> <a name="Fqn" id="@cdktn/provider-cloudflare.dataCloudflareAiSearchInstances.DataCloudflareAiSearchInstancesResultCustomMetadataList.property.fqn"></a>

```go
func Fqn() *string
```

- *Type:* *string

---


### DataCloudflareAiSearchInstancesResultCustomMetadataOutputReference <a name="DataCloudflareAiSearchInstancesResultCustomMetadataOutputReference" id="@cdktn/provider-cloudflare.dataCloudflareAiSearchInstances.DataCloudflareAiSearchInstancesResultCustomMetadataOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktn/provider-cloudflare.dataCloudflareAiSearchInstances.DataCloudflareAiSearchInstancesResultCustomMetadataOutputReference.Initializer"></a>

```go
import "github.com/cdktn-io/cdktn-provider-cloudflare-go/cloudflare/v14/datacloudflareaisearchinstances"

datacloudflareaisearchinstances.NewDataCloudflareAiSearchInstancesResultCustomMetadataOutputReference(terraformResource IInterpolatingParent, terraformAttribute *string, complexObjectIndex *f64, complexObjectIsFromSet *bool) DataCloudflareAiSearchInstancesResultCustomMetadataOutputReference
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-cloudflare.dataCloudflareAiSearchInstances.DataCloudflareAiSearchInstancesResultCustomMetadataOutputReference.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>github.com/open-constructs/cdk-terrain-go/cdktn.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktn/provider-cloudflare.dataCloudflareAiSearchInstances.DataCloudflareAiSearchInstancesResultCustomMetadataOutputReference.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>*string</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#@cdktn/provider-cloudflare.dataCloudflareAiSearchInstances.DataCloudflareAiSearchInstancesResultCustomMetadataOutputReference.Initializer.parameter.complexObjectIndex">complexObjectIndex</a></code> | <code>*f64</code> | the index of this item in the list. |
| <code><a href="#@cdktn/provider-cloudflare.dataCloudflareAiSearchInstances.DataCloudflareAiSearchInstancesResultCustomMetadataOutputReference.Initializer.parameter.complexObjectIsFromSet">complexObjectIsFromSet</a></code> | <code>*bool</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktn/provider-cloudflare.dataCloudflareAiSearchInstances.DataCloudflareAiSearchInstancesResultCustomMetadataOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* github.com/open-constructs/cdk-terrain-go/cdktn.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-cloudflare.dataCloudflareAiSearchInstances.DataCloudflareAiSearchInstancesResultCustomMetadataOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* *string

The attribute on the parent resource this class is referencing.

---

##### `complexObjectIndex`<sup>Required</sup> <a name="complexObjectIndex" id="@cdktn/provider-cloudflare.dataCloudflareAiSearchInstances.DataCloudflareAiSearchInstancesResultCustomMetadataOutputReference.Initializer.parameter.complexObjectIndex"></a>

- *Type:* *f64

the index of this item in the list.

---

##### `complexObjectIsFromSet`<sup>Required</sup> <a name="complexObjectIsFromSet" id="@cdktn/provider-cloudflare.dataCloudflareAiSearchInstances.DataCloudflareAiSearchInstancesResultCustomMetadataOutputReference.Initializer.parameter.complexObjectIsFromSet"></a>

- *Type:* *bool

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-cloudflare.dataCloudflareAiSearchInstances.DataCloudflareAiSearchInstancesResultCustomMetadataOutputReference.computeFqn">ComputeFqn</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-cloudflare.dataCloudflareAiSearchInstances.DataCloudflareAiSearchInstancesResultCustomMetadataOutputReference.getAnyMapAttribute">GetAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-cloudflare.dataCloudflareAiSearchInstances.DataCloudflareAiSearchInstancesResultCustomMetadataOutputReference.getBooleanAttribute">GetBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-cloudflare.dataCloudflareAiSearchInstances.DataCloudflareAiSearchInstancesResultCustomMetadataOutputReference.getBooleanMapAttribute">GetBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-cloudflare.dataCloudflareAiSearchInstances.DataCloudflareAiSearchInstancesResultCustomMetadataOutputReference.getListAttribute">GetListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-cloudflare.dataCloudflareAiSearchInstances.DataCloudflareAiSearchInstancesResultCustomMetadataOutputReference.getNumberAttribute">GetNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-cloudflare.dataCloudflareAiSearchInstances.DataCloudflareAiSearchInstancesResultCustomMetadataOutputReference.getNumberListAttribute">GetNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-cloudflare.dataCloudflareAiSearchInstances.DataCloudflareAiSearchInstancesResultCustomMetadataOutputReference.getNumberMapAttribute">GetNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-cloudflare.dataCloudflareAiSearchInstances.DataCloudflareAiSearchInstancesResultCustomMetadataOutputReference.getStringAttribute">GetStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-cloudflare.dataCloudflareAiSearchInstances.DataCloudflareAiSearchInstancesResultCustomMetadataOutputReference.getStringMapAttribute">GetStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-cloudflare.dataCloudflareAiSearchInstances.DataCloudflareAiSearchInstancesResultCustomMetadataOutputReference.interpolationForAttribute">InterpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-cloudflare.dataCloudflareAiSearchInstances.DataCloudflareAiSearchInstancesResultCustomMetadataOutputReference.resolve">Resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktn/provider-cloudflare.dataCloudflareAiSearchInstances.DataCloudflareAiSearchInstancesResultCustomMetadataOutputReference.toString">ToString</a></code> | Return a string representation of this resolvable object. |

---

##### `ComputeFqn` <a name="ComputeFqn" id="@cdktn/provider-cloudflare.dataCloudflareAiSearchInstances.DataCloudflareAiSearchInstancesResultCustomMetadataOutputReference.computeFqn"></a>

```go
func ComputeFqn() *string
```

##### `GetAnyMapAttribute` <a name="GetAnyMapAttribute" id="@cdktn/provider-cloudflare.dataCloudflareAiSearchInstances.DataCloudflareAiSearchInstancesResultCustomMetadataOutputReference.getAnyMapAttribute"></a>

```go
func GetAnyMapAttribute(terraformAttribute *string) *map[string]interface{}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-cloudflare.dataCloudflareAiSearchInstances.DataCloudflareAiSearchInstancesResultCustomMetadataOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetBooleanAttribute` <a name="GetBooleanAttribute" id="@cdktn/provider-cloudflare.dataCloudflareAiSearchInstances.DataCloudflareAiSearchInstancesResultCustomMetadataOutputReference.getBooleanAttribute"></a>

```go
func GetBooleanAttribute(terraformAttribute *string) IResolvable
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-cloudflare.dataCloudflareAiSearchInstances.DataCloudflareAiSearchInstancesResultCustomMetadataOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetBooleanMapAttribute` <a name="GetBooleanMapAttribute" id="@cdktn/provider-cloudflare.dataCloudflareAiSearchInstances.DataCloudflareAiSearchInstancesResultCustomMetadataOutputReference.getBooleanMapAttribute"></a>

```go
func GetBooleanMapAttribute(terraformAttribute *string) *map[string]*bool
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-cloudflare.dataCloudflareAiSearchInstances.DataCloudflareAiSearchInstancesResultCustomMetadataOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetListAttribute` <a name="GetListAttribute" id="@cdktn/provider-cloudflare.dataCloudflareAiSearchInstances.DataCloudflareAiSearchInstancesResultCustomMetadataOutputReference.getListAttribute"></a>

```go
func GetListAttribute(terraformAttribute *string) *[]*string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-cloudflare.dataCloudflareAiSearchInstances.DataCloudflareAiSearchInstancesResultCustomMetadataOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberAttribute` <a name="GetNumberAttribute" id="@cdktn/provider-cloudflare.dataCloudflareAiSearchInstances.DataCloudflareAiSearchInstancesResultCustomMetadataOutputReference.getNumberAttribute"></a>

```go
func GetNumberAttribute(terraformAttribute *string) *f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-cloudflare.dataCloudflareAiSearchInstances.DataCloudflareAiSearchInstancesResultCustomMetadataOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberListAttribute` <a name="GetNumberListAttribute" id="@cdktn/provider-cloudflare.dataCloudflareAiSearchInstances.DataCloudflareAiSearchInstancesResultCustomMetadataOutputReference.getNumberListAttribute"></a>

```go
func GetNumberListAttribute(terraformAttribute *string) *[]*f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-cloudflare.dataCloudflareAiSearchInstances.DataCloudflareAiSearchInstancesResultCustomMetadataOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberMapAttribute` <a name="GetNumberMapAttribute" id="@cdktn/provider-cloudflare.dataCloudflareAiSearchInstances.DataCloudflareAiSearchInstancesResultCustomMetadataOutputReference.getNumberMapAttribute"></a>

```go
func GetNumberMapAttribute(terraformAttribute *string) *map[string]*f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-cloudflare.dataCloudflareAiSearchInstances.DataCloudflareAiSearchInstancesResultCustomMetadataOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetStringAttribute` <a name="GetStringAttribute" id="@cdktn/provider-cloudflare.dataCloudflareAiSearchInstances.DataCloudflareAiSearchInstancesResultCustomMetadataOutputReference.getStringAttribute"></a>

```go
func GetStringAttribute(terraformAttribute *string) *string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-cloudflare.dataCloudflareAiSearchInstances.DataCloudflareAiSearchInstancesResultCustomMetadataOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetStringMapAttribute` <a name="GetStringMapAttribute" id="@cdktn/provider-cloudflare.dataCloudflareAiSearchInstances.DataCloudflareAiSearchInstancesResultCustomMetadataOutputReference.getStringMapAttribute"></a>

```go
func GetStringMapAttribute(terraformAttribute *string) *map[string]*string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-cloudflare.dataCloudflareAiSearchInstances.DataCloudflareAiSearchInstancesResultCustomMetadataOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `InterpolationForAttribute` <a name="InterpolationForAttribute" id="@cdktn/provider-cloudflare.dataCloudflareAiSearchInstances.DataCloudflareAiSearchInstancesResultCustomMetadataOutputReference.interpolationForAttribute"></a>

```go
func InterpolationForAttribute(property *string) IResolvable
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktn/provider-cloudflare.dataCloudflareAiSearchInstances.DataCloudflareAiSearchInstancesResultCustomMetadataOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* *string

---

##### `Resolve` <a name="Resolve" id="@cdktn/provider-cloudflare.dataCloudflareAiSearchInstances.DataCloudflareAiSearchInstancesResultCustomMetadataOutputReference.resolve"></a>

```go
func Resolve(_context IResolveContext) interface{}
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktn/provider-cloudflare.dataCloudflareAiSearchInstances.DataCloudflareAiSearchInstancesResultCustomMetadataOutputReference.resolve.parameter._context"></a>

- *Type:* github.com/open-constructs/cdk-terrain-go/cdktn.IResolveContext

---

##### `ToString` <a name="ToString" id="@cdktn/provider-cloudflare.dataCloudflareAiSearchInstances.DataCloudflareAiSearchInstancesResultCustomMetadataOutputReference.toString"></a>

```go
func ToString() *string
```

Return a string representation of this resolvable object.

Returns a reversible string representation.


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-cloudflare.dataCloudflareAiSearchInstances.DataCloudflareAiSearchInstancesResultCustomMetadataOutputReference.property.creationStack">CreationStack</a></code> | <code>*[]*string</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktn/provider-cloudflare.dataCloudflareAiSearchInstances.DataCloudflareAiSearchInstancesResultCustomMetadataOutputReference.property.fqn">Fqn</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktn/provider-cloudflare.dataCloudflareAiSearchInstances.DataCloudflareAiSearchInstancesResultCustomMetadataOutputReference.property.dataType">DataType</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktn/provider-cloudflare.dataCloudflareAiSearchInstances.DataCloudflareAiSearchInstancesResultCustomMetadataOutputReference.property.fieldName">FieldName</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktn/provider-cloudflare.dataCloudflareAiSearchInstances.DataCloudflareAiSearchInstancesResultCustomMetadataOutputReference.property.internalValue">InternalValue</a></code> | <code><a href="#@cdktn/provider-cloudflare.dataCloudflareAiSearchInstances.DataCloudflareAiSearchInstancesResultCustomMetadata">DataCloudflareAiSearchInstancesResultCustomMetadata</a></code> | *No description.* |

---

##### `CreationStack`<sup>Required</sup> <a name="CreationStack" id="@cdktn/provider-cloudflare.dataCloudflareAiSearchInstances.DataCloudflareAiSearchInstancesResultCustomMetadataOutputReference.property.creationStack"></a>

```go
func CreationStack() *[]*string
```

- *Type:* *[]*string

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `Fqn`<sup>Required</sup> <a name="Fqn" id="@cdktn/provider-cloudflare.dataCloudflareAiSearchInstances.DataCloudflareAiSearchInstancesResultCustomMetadataOutputReference.property.fqn"></a>

```go
func Fqn() *string
```

- *Type:* *string

---

##### `DataType`<sup>Required</sup> <a name="DataType" id="@cdktn/provider-cloudflare.dataCloudflareAiSearchInstances.DataCloudflareAiSearchInstancesResultCustomMetadataOutputReference.property.dataType"></a>

```go
func DataType() *string
```

- *Type:* *string

---

##### `FieldName`<sup>Required</sup> <a name="FieldName" id="@cdktn/provider-cloudflare.dataCloudflareAiSearchInstances.DataCloudflareAiSearchInstancesResultCustomMetadataOutputReference.property.fieldName"></a>

```go
func FieldName() *string
```

- *Type:* *string

---

##### `InternalValue`<sup>Optional</sup> <a name="InternalValue" id="@cdktn/provider-cloudflare.dataCloudflareAiSearchInstances.DataCloudflareAiSearchInstancesResultCustomMetadataOutputReference.property.internalValue"></a>

```go
func InternalValue() DataCloudflareAiSearchInstancesResultCustomMetadata
```

- *Type:* <a href="#@cdktn/provider-cloudflare.dataCloudflareAiSearchInstances.DataCloudflareAiSearchInstancesResultCustomMetadata">DataCloudflareAiSearchInstancesResultCustomMetadata</a>

---


### DataCloudflareAiSearchInstancesResultList <a name="DataCloudflareAiSearchInstancesResultList" id="@cdktn/provider-cloudflare.dataCloudflareAiSearchInstances.DataCloudflareAiSearchInstancesResultList"></a>

#### Initializers <a name="Initializers" id="@cdktn/provider-cloudflare.dataCloudflareAiSearchInstances.DataCloudflareAiSearchInstancesResultList.Initializer"></a>

```go
import "github.com/cdktn-io/cdktn-provider-cloudflare-go/cloudflare/v14/datacloudflareaisearchinstances"

datacloudflareaisearchinstances.NewDataCloudflareAiSearchInstancesResultList(terraformResource IInterpolatingParent, terraformAttribute *string, wrapsSet *bool) DataCloudflareAiSearchInstancesResultList
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-cloudflare.dataCloudflareAiSearchInstances.DataCloudflareAiSearchInstancesResultList.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>github.com/open-constructs/cdk-terrain-go/cdktn.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktn/provider-cloudflare.dataCloudflareAiSearchInstances.DataCloudflareAiSearchInstancesResultList.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>*string</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#@cdktn/provider-cloudflare.dataCloudflareAiSearchInstances.DataCloudflareAiSearchInstancesResultList.Initializer.parameter.wrapsSet">wrapsSet</a></code> | <code>*bool</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktn/provider-cloudflare.dataCloudflareAiSearchInstances.DataCloudflareAiSearchInstancesResultList.Initializer.parameter.terraformResource"></a>

- *Type:* github.com/open-constructs/cdk-terrain-go/cdktn.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-cloudflare.dataCloudflareAiSearchInstances.DataCloudflareAiSearchInstancesResultList.Initializer.parameter.terraformAttribute"></a>

- *Type:* *string

The attribute on the parent resource this class is referencing.

---

##### `wrapsSet`<sup>Required</sup> <a name="wrapsSet" id="@cdktn/provider-cloudflare.dataCloudflareAiSearchInstances.DataCloudflareAiSearchInstancesResultList.Initializer.parameter.wrapsSet"></a>

- *Type:* *bool

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-cloudflare.dataCloudflareAiSearchInstances.DataCloudflareAiSearchInstancesResultList.allWithMapKey">AllWithMapKey</a></code> | Creating an iterator for this complex list. |
| <code><a href="#@cdktn/provider-cloudflare.dataCloudflareAiSearchInstances.DataCloudflareAiSearchInstancesResultList.computeFqn">ComputeFqn</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-cloudflare.dataCloudflareAiSearchInstances.DataCloudflareAiSearchInstancesResultList.resolve">Resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktn/provider-cloudflare.dataCloudflareAiSearchInstances.DataCloudflareAiSearchInstancesResultList.toString">ToString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktn/provider-cloudflare.dataCloudflareAiSearchInstances.DataCloudflareAiSearchInstancesResultList.get">Get</a></code> | *No description.* |

---

##### `AllWithMapKey` <a name="AllWithMapKey" id="@cdktn/provider-cloudflare.dataCloudflareAiSearchInstances.DataCloudflareAiSearchInstancesResultList.allWithMapKey"></a>

```go
func AllWithMapKey(mapKeyAttributeName *string) DynamicListTerraformIterator
```

Creating an iterator for this complex list.

The list will be converted into a map with the mapKeyAttributeName as the key.

###### `mapKeyAttributeName`<sup>Required</sup> <a name="mapKeyAttributeName" id="@cdktn/provider-cloudflare.dataCloudflareAiSearchInstances.DataCloudflareAiSearchInstancesResultList.allWithMapKey.parameter.mapKeyAttributeName"></a>

- *Type:* *string

---

##### `ComputeFqn` <a name="ComputeFqn" id="@cdktn/provider-cloudflare.dataCloudflareAiSearchInstances.DataCloudflareAiSearchInstancesResultList.computeFqn"></a>

```go
func ComputeFqn() *string
```

##### `Resolve` <a name="Resolve" id="@cdktn/provider-cloudflare.dataCloudflareAiSearchInstances.DataCloudflareAiSearchInstancesResultList.resolve"></a>

```go
func Resolve(_context IResolveContext) interface{}
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktn/provider-cloudflare.dataCloudflareAiSearchInstances.DataCloudflareAiSearchInstancesResultList.resolve.parameter._context"></a>

- *Type:* github.com/open-constructs/cdk-terrain-go/cdktn.IResolveContext

---

##### `ToString` <a name="ToString" id="@cdktn/provider-cloudflare.dataCloudflareAiSearchInstances.DataCloudflareAiSearchInstancesResultList.toString"></a>

```go
func ToString() *string
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `Get` <a name="Get" id="@cdktn/provider-cloudflare.dataCloudflareAiSearchInstances.DataCloudflareAiSearchInstancesResultList.get"></a>

```go
func Get(index *f64) DataCloudflareAiSearchInstancesResultOutputReference
```

###### `index`<sup>Required</sup> <a name="index" id="@cdktn/provider-cloudflare.dataCloudflareAiSearchInstances.DataCloudflareAiSearchInstancesResultList.get.parameter.index"></a>

- *Type:* *f64

the index of the item to return.

---


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-cloudflare.dataCloudflareAiSearchInstances.DataCloudflareAiSearchInstancesResultList.property.creationStack">CreationStack</a></code> | <code>*[]*string</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktn/provider-cloudflare.dataCloudflareAiSearchInstances.DataCloudflareAiSearchInstancesResultList.property.fqn">Fqn</a></code> | <code>*string</code> | *No description.* |

---

##### `CreationStack`<sup>Required</sup> <a name="CreationStack" id="@cdktn/provider-cloudflare.dataCloudflareAiSearchInstances.DataCloudflareAiSearchInstancesResultList.property.creationStack"></a>

```go
func CreationStack() *[]*string
```

- *Type:* *[]*string

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `Fqn`<sup>Required</sup> <a name="Fqn" id="@cdktn/provider-cloudflare.dataCloudflareAiSearchInstances.DataCloudflareAiSearchInstancesResultList.property.fqn"></a>

```go
func Fqn() *string
```

- *Type:* *string

---


### DataCloudflareAiSearchInstancesResultMetadataOutputReference <a name="DataCloudflareAiSearchInstancesResultMetadataOutputReference" id="@cdktn/provider-cloudflare.dataCloudflareAiSearchInstances.DataCloudflareAiSearchInstancesResultMetadataOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktn/provider-cloudflare.dataCloudflareAiSearchInstances.DataCloudflareAiSearchInstancesResultMetadataOutputReference.Initializer"></a>

```go
import "github.com/cdktn-io/cdktn-provider-cloudflare-go/cloudflare/v14/datacloudflareaisearchinstances"

datacloudflareaisearchinstances.NewDataCloudflareAiSearchInstancesResultMetadataOutputReference(terraformResource IInterpolatingParent, terraformAttribute *string) DataCloudflareAiSearchInstancesResultMetadataOutputReference
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-cloudflare.dataCloudflareAiSearchInstances.DataCloudflareAiSearchInstancesResultMetadataOutputReference.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>github.com/open-constructs/cdk-terrain-go/cdktn.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktn/provider-cloudflare.dataCloudflareAiSearchInstances.DataCloudflareAiSearchInstancesResultMetadataOutputReference.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>*string</code> | The attribute on the parent resource this class is referencing. |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktn/provider-cloudflare.dataCloudflareAiSearchInstances.DataCloudflareAiSearchInstancesResultMetadataOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* github.com/open-constructs/cdk-terrain-go/cdktn.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-cloudflare.dataCloudflareAiSearchInstances.DataCloudflareAiSearchInstancesResultMetadataOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* *string

The attribute on the parent resource this class is referencing.

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-cloudflare.dataCloudflareAiSearchInstances.DataCloudflareAiSearchInstancesResultMetadataOutputReference.computeFqn">ComputeFqn</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-cloudflare.dataCloudflareAiSearchInstances.DataCloudflareAiSearchInstancesResultMetadataOutputReference.getAnyMapAttribute">GetAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-cloudflare.dataCloudflareAiSearchInstances.DataCloudflareAiSearchInstancesResultMetadataOutputReference.getBooleanAttribute">GetBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-cloudflare.dataCloudflareAiSearchInstances.DataCloudflareAiSearchInstancesResultMetadataOutputReference.getBooleanMapAttribute">GetBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-cloudflare.dataCloudflareAiSearchInstances.DataCloudflareAiSearchInstancesResultMetadataOutputReference.getListAttribute">GetListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-cloudflare.dataCloudflareAiSearchInstances.DataCloudflareAiSearchInstancesResultMetadataOutputReference.getNumberAttribute">GetNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-cloudflare.dataCloudflareAiSearchInstances.DataCloudflareAiSearchInstancesResultMetadataOutputReference.getNumberListAttribute">GetNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-cloudflare.dataCloudflareAiSearchInstances.DataCloudflareAiSearchInstancesResultMetadataOutputReference.getNumberMapAttribute">GetNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-cloudflare.dataCloudflareAiSearchInstances.DataCloudflareAiSearchInstancesResultMetadataOutputReference.getStringAttribute">GetStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-cloudflare.dataCloudflareAiSearchInstances.DataCloudflareAiSearchInstancesResultMetadataOutputReference.getStringMapAttribute">GetStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-cloudflare.dataCloudflareAiSearchInstances.DataCloudflareAiSearchInstancesResultMetadataOutputReference.interpolationForAttribute">InterpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-cloudflare.dataCloudflareAiSearchInstances.DataCloudflareAiSearchInstancesResultMetadataOutputReference.resolve">Resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktn/provider-cloudflare.dataCloudflareAiSearchInstances.DataCloudflareAiSearchInstancesResultMetadataOutputReference.toString">ToString</a></code> | Return a string representation of this resolvable object. |

---

##### `ComputeFqn` <a name="ComputeFqn" id="@cdktn/provider-cloudflare.dataCloudflareAiSearchInstances.DataCloudflareAiSearchInstancesResultMetadataOutputReference.computeFqn"></a>

```go
func ComputeFqn() *string
```

##### `GetAnyMapAttribute` <a name="GetAnyMapAttribute" id="@cdktn/provider-cloudflare.dataCloudflareAiSearchInstances.DataCloudflareAiSearchInstancesResultMetadataOutputReference.getAnyMapAttribute"></a>

```go
func GetAnyMapAttribute(terraformAttribute *string) *map[string]interface{}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-cloudflare.dataCloudflareAiSearchInstances.DataCloudflareAiSearchInstancesResultMetadataOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetBooleanAttribute` <a name="GetBooleanAttribute" id="@cdktn/provider-cloudflare.dataCloudflareAiSearchInstances.DataCloudflareAiSearchInstancesResultMetadataOutputReference.getBooleanAttribute"></a>

```go
func GetBooleanAttribute(terraformAttribute *string) IResolvable
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-cloudflare.dataCloudflareAiSearchInstances.DataCloudflareAiSearchInstancesResultMetadataOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetBooleanMapAttribute` <a name="GetBooleanMapAttribute" id="@cdktn/provider-cloudflare.dataCloudflareAiSearchInstances.DataCloudflareAiSearchInstancesResultMetadataOutputReference.getBooleanMapAttribute"></a>

```go
func GetBooleanMapAttribute(terraformAttribute *string) *map[string]*bool
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-cloudflare.dataCloudflareAiSearchInstances.DataCloudflareAiSearchInstancesResultMetadataOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetListAttribute` <a name="GetListAttribute" id="@cdktn/provider-cloudflare.dataCloudflareAiSearchInstances.DataCloudflareAiSearchInstancesResultMetadataOutputReference.getListAttribute"></a>

```go
func GetListAttribute(terraformAttribute *string) *[]*string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-cloudflare.dataCloudflareAiSearchInstances.DataCloudflareAiSearchInstancesResultMetadataOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberAttribute` <a name="GetNumberAttribute" id="@cdktn/provider-cloudflare.dataCloudflareAiSearchInstances.DataCloudflareAiSearchInstancesResultMetadataOutputReference.getNumberAttribute"></a>

```go
func GetNumberAttribute(terraformAttribute *string) *f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-cloudflare.dataCloudflareAiSearchInstances.DataCloudflareAiSearchInstancesResultMetadataOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberListAttribute` <a name="GetNumberListAttribute" id="@cdktn/provider-cloudflare.dataCloudflareAiSearchInstances.DataCloudflareAiSearchInstancesResultMetadataOutputReference.getNumberListAttribute"></a>

```go
func GetNumberListAttribute(terraformAttribute *string) *[]*f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-cloudflare.dataCloudflareAiSearchInstances.DataCloudflareAiSearchInstancesResultMetadataOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberMapAttribute` <a name="GetNumberMapAttribute" id="@cdktn/provider-cloudflare.dataCloudflareAiSearchInstances.DataCloudflareAiSearchInstancesResultMetadataOutputReference.getNumberMapAttribute"></a>

```go
func GetNumberMapAttribute(terraformAttribute *string) *map[string]*f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-cloudflare.dataCloudflareAiSearchInstances.DataCloudflareAiSearchInstancesResultMetadataOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetStringAttribute` <a name="GetStringAttribute" id="@cdktn/provider-cloudflare.dataCloudflareAiSearchInstances.DataCloudflareAiSearchInstancesResultMetadataOutputReference.getStringAttribute"></a>

```go
func GetStringAttribute(terraformAttribute *string) *string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-cloudflare.dataCloudflareAiSearchInstances.DataCloudflareAiSearchInstancesResultMetadataOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetStringMapAttribute` <a name="GetStringMapAttribute" id="@cdktn/provider-cloudflare.dataCloudflareAiSearchInstances.DataCloudflareAiSearchInstancesResultMetadataOutputReference.getStringMapAttribute"></a>

```go
func GetStringMapAttribute(terraformAttribute *string) *map[string]*string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-cloudflare.dataCloudflareAiSearchInstances.DataCloudflareAiSearchInstancesResultMetadataOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `InterpolationForAttribute` <a name="InterpolationForAttribute" id="@cdktn/provider-cloudflare.dataCloudflareAiSearchInstances.DataCloudflareAiSearchInstancesResultMetadataOutputReference.interpolationForAttribute"></a>

```go
func InterpolationForAttribute(property *string) IResolvable
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktn/provider-cloudflare.dataCloudflareAiSearchInstances.DataCloudflareAiSearchInstancesResultMetadataOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* *string

---

##### `Resolve` <a name="Resolve" id="@cdktn/provider-cloudflare.dataCloudflareAiSearchInstances.DataCloudflareAiSearchInstancesResultMetadataOutputReference.resolve"></a>

```go
func Resolve(_context IResolveContext) interface{}
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktn/provider-cloudflare.dataCloudflareAiSearchInstances.DataCloudflareAiSearchInstancesResultMetadataOutputReference.resolve.parameter._context"></a>

- *Type:* github.com/open-constructs/cdk-terrain-go/cdktn.IResolveContext

---

##### `ToString` <a name="ToString" id="@cdktn/provider-cloudflare.dataCloudflareAiSearchInstances.DataCloudflareAiSearchInstancesResultMetadataOutputReference.toString"></a>

```go
func ToString() *string
```

Return a string representation of this resolvable object.

Returns a reversible string representation.


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-cloudflare.dataCloudflareAiSearchInstances.DataCloudflareAiSearchInstancesResultMetadataOutputReference.property.creationStack">CreationStack</a></code> | <code>*[]*string</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktn/provider-cloudflare.dataCloudflareAiSearchInstances.DataCloudflareAiSearchInstancesResultMetadataOutputReference.property.fqn">Fqn</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktn/provider-cloudflare.dataCloudflareAiSearchInstances.DataCloudflareAiSearchInstancesResultMetadataOutputReference.property.createdFromAisearchWizard">CreatedFromAisearchWizard</a></code> | <code>github.com/open-constructs/cdk-terrain-go/cdktn.IResolvable</code> | *No description.* |
| <code><a href="#@cdktn/provider-cloudflare.dataCloudflareAiSearchInstances.DataCloudflareAiSearchInstancesResultMetadataOutputReference.property.workerDomain">WorkerDomain</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktn/provider-cloudflare.dataCloudflareAiSearchInstances.DataCloudflareAiSearchInstancesResultMetadataOutputReference.property.internalValue">InternalValue</a></code> | <code><a href="#@cdktn/provider-cloudflare.dataCloudflareAiSearchInstances.DataCloudflareAiSearchInstancesResultMetadata">DataCloudflareAiSearchInstancesResultMetadata</a></code> | *No description.* |

---

##### `CreationStack`<sup>Required</sup> <a name="CreationStack" id="@cdktn/provider-cloudflare.dataCloudflareAiSearchInstances.DataCloudflareAiSearchInstancesResultMetadataOutputReference.property.creationStack"></a>

```go
func CreationStack() *[]*string
```

- *Type:* *[]*string

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `Fqn`<sup>Required</sup> <a name="Fqn" id="@cdktn/provider-cloudflare.dataCloudflareAiSearchInstances.DataCloudflareAiSearchInstancesResultMetadataOutputReference.property.fqn"></a>

```go
func Fqn() *string
```

- *Type:* *string

---

##### `CreatedFromAisearchWizard`<sup>Required</sup> <a name="CreatedFromAisearchWizard" id="@cdktn/provider-cloudflare.dataCloudflareAiSearchInstances.DataCloudflareAiSearchInstancesResultMetadataOutputReference.property.createdFromAisearchWizard"></a>

```go
func CreatedFromAisearchWizard() IResolvable
```

- *Type:* github.com/open-constructs/cdk-terrain-go/cdktn.IResolvable

---

##### `WorkerDomain`<sup>Required</sup> <a name="WorkerDomain" id="@cdktn/provider-cloudflare.dataCloudflareAiSearchInstances.DataCloudflareAiSearchInstancesResultMetadataOutputReference.property.workerDomain"></a>

```go
func WorkerDomain() *string
```

- *Type:* *string

---

##### `InternalValue`<sup>Optional</sup> <a name="InternalValue" id="@cdktn/provider-cloudflare.dataCloudflareAiSearchInstances.DataCloudflareAiSearchInstancesResultMetadataOutputReference.property.internalValue"></a>

```go
func InternalValue() DataCloudflareAiSearchInstancesResultMetadata
```

- *Type:* <a href="#@cdktn/provider-cloudflare.dataCloudflareAiSearchInstances.DataCloudflareAiSearchInstancesResultMetadata">DataCloudflareAiSearchInstancesResultMetadata</a>

---


### DataCloudflareAiSearchInstancesResultOutputReference <a name="DataCloudflareAiSearchInstancesResultOutputReference" id="@cdktn/provider-cloudflare.dataCloudflareAiSearchInstances.DataCloudflareAiSearchInstancesResultOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktn/provider-cloudflare.dataCloudflareAiSearchInstances.DataCloudflareAiSearchInstancesResultOutputReference.Initializer"></a>

```go
import "github.com/cdktn-io/cdktn-provider-cloudflare-go/cloudflare/v14/datacloudflareaisearchinstances"

datacloudflareaisearchinstances.NewDataCloudflareAiSearchInstancesResultOutputReference(terraformResource IInterpolatingParent, terraformAttribute *string, complexObjectIndex *f64, complexObjectIsFromSet *bool) DataCloudflareAiSearchInstancesResultOutputReference
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-cloudflare.dataCloudflareAiSearchInstances.DataCloudflareAiSearchInstancesResultOutputReference.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>github.com/open-constructs/cdk-terrain-go/cdktn.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktn/provider-cloudflare.dataCloudflareAiSearchInstances.DataCloudflareAiSearchInstancesResultOutputReference.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>*string</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#@cdktn/provider-cloudflare.dataCloudflareAiSearchInstances.DataCloudflareAiSearchInstancesResultOutputReference.Initializer.parameter.complexObjectIndex">complexObjectIndex</a></code> | <code>*f64</code> | the index of this item in the list. |
| <code><a href="#@cdktn/provider-cloudflare.dataCloudflareAiSearchInstances.DataCloudflareAiSearchInstancesResultOutputReference.Initializer.parameter.complexObjectIsFromSet">complexObjectIsFromSet</a></code> | <code>*bool</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktn/provider-cloudflare.dataCloudflareAiSearchInstances.DataCloudflareAiSearchInstancesResultOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* github.com/open-constructs/cdk-terrain-go/cdktn.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-cloudflare.dataCloudflareAiSearchInstances.DataCloudflareAiSearchInstancesResultOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* *string

The attribute on the parent resource this class is referencing.

---

##### `complexObjectIndex`<sup>Required</sup> <a name="complexObjectIndex" id="@cdktn/provider-cloudflare.dataCloudflareAiSearchInstances.DataCloudflareAiSearchInstancesResultOutputReference.Initializer.parameter.complexObjectIndex"></a>

- *Type:* *f64

the index of this item in the list.

---

##### `complexObjectIsFromSet`<sup>Required</sup> <a name="complexObjectIsFromSet" id="@cdktn/provider-cloudflare.dataCloudflareAiSearchInstances.DataCloudflareAiSearchInstancesResultOutputReference.Initializer.parameter.complexObjectIsFromSet"></a>

- *Type:* *bool

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-cloudflare.dataCloudflareAiSearchInstances.DataCloudflareAiSearchInstancesResultOutputReference.computeFqn">ComputeFqn</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-cloudflare.dataCloudflareAiSearchInstances.DataCloudflareAiSearchInstancesResultOutputReference.getAnyMapAttribute">GetAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-cloudflare.dataCloudflareAiSearchInstances.DataCloudflareAiSearchInstancesResultOutputReference.getBooleanAttribute">GetBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-cloudflare.dataCloudflareAiSearchInstances.DataCloudflareAiSearchInstancesResultOutputReference.getBooleanMapAttribute">GetBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-cloudflare.dataCloudflareAiSearchInstances.DataCloudflareAiSearchInstancesResultOutputReference.getListAttribute">GetListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-cloudflare.dataCloudflareAiSearchInstances.DataCloudflareAiSearchInstancesResultOutputReference.getNumberAttribute">GetNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-cloudflare.dataCloudflareAiSearchInstances.DataCloudflareAiSearchInstancesResultOutputReference.getNumberListAttribute">GetNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-cloudflare.dataCloudflareAiSearchInstances.DataCloudflareAiSearchInstancesResultOutputReference.getNumberMapAttribute">GetNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-cloudflare.dataCloudflareAiSearchInstances.DataCloudflareAiSearchInstancesResultOutputReference.getStringAttribute">GetStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-cloudflare.dataCloudflareAiSearchInstances.DataCloudflareAiSearchInstancesResultOutputReference.getStringMapAttribute">GetStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-cloudflare.dataCloudflareAiSearchInstances.DataCloudflareAiSearchInstancesResultOutputReference.interpolationForAttribute">InterpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-cloudflare.dataCloudflareAiSearchInstances.DataCloudflareAiSearchInstancesResultOutputReference.resolve">Resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktn/provider-cloudflare.dataCloudflareAiSearchInstances.DataCloudflareAiSearchInstancesResultOutputReference.toString">ToString</a></code> | Return a string representation of this resolvable object. |

---

##### `ComputeFqn` <a name="ComputeFqn" id="@cdktn/provider-cloudflare.dataCloudflareAiSearchInstances.DataCloudflareAiSearchInstancesResultOutputReference.computeFqn"></a>

```go
func ComputeFqn() *string
```

##### `GetAnyMapAttribute` <a name="GetAnyMapAttribute" id="@cdktn/provider-cloudflare.dataCloudflareAiSearchInstances.DataCloudflareAiSearchInstancesResultOutputReference.getAnyMapAttribute"></a>

```go
func GetAnyMapAttribute(terraformAttribute *string) *map[string]interface{}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-cloudflare.dataCloudflareAiSearchInstances.DataCloudflareAiSearchInstancesResultOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetBooleanAttribute` <a name="GetBooleanAttribute" id="@cdktn/provider-cloudflare.dataCloudflareAiSearchInstances.DataCloudflareAiSearchInstancesResultOutputReference.getBooleanAttribute"></a>

```go
func GetBooleanAttribute(terraformAttribute *string) IResolvable
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-cloudflare.dataCloudflareAiSearchInstances.DataCloudflareAiSearchInstancesResultOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetBooleanMapAttribute` <a name="GetBooleanMapAttribute" id="@cdktn/provider-cloudflare.dataCloudflareAiSearchInstances.DataCloudflareAiSearchInstancesResultOutputReference.getBooleanMapAttribute"></a>

```go
func GetBooleanMapAttribute(terraformAttribute *string) *map[string]*bool
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-cloudflare.dataCloudflareAiSearchInstances.DataCloudflareAiSearchInstancesResultOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetListAttribute` <a name="GetListAttribute" id="@cdktn/provider-cloudflare.dataCloudflareAiSearchInstances.DataCloudflareAiSearchInstancesResultOutputReference.getListAttribute"></a>

```go
func GetListAttribute(terraformAttribute *string) *[]*string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-cloudflare.dataCloudflareAiSearchInstances.DataCloudflareAiSearchInstancesResultOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberAttribute` <a name="GetNumberAttribute" id="@cdktn/provider-cloudflare.dataCloudflareAiSearchInstances.DataCloudflareAiSearchInstancesResultOutputReference.getNumberAttribute"></a>

```go
func GetNumberAttribute(terraformAttribute *string) *f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-cloudflare.dataCloudflareAiSearchInstances.DataCloudflareAiSearchInstancesResultOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberListAttribute` <a name="GetNumberListAttribute" id="@cdktn/provider-cloudflare.dataCloudflareAiSearchInstances.DataCloudflareAiSearchInstancesResultOutputReference.getNumberListAttribute"></a>

```go
func GetNumberListAttribute(terraformAttribute *string) *[]*f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-cloudflare.dataCloudflareAiSearchInstances.DataCloudflareAiSearchInstancesResultOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberMapAttribute` <a name="GetNumberMapAttribute" id="@cdktn/provider-cloudflare.dataCloudflareAiSearchInstances.DataCloudflareAiSearchInstancesResultOutputReference.getNumberMapAttribute"></a>

```go
func GetNumberMapAttribute(terraformAttribute *string) *map[string]*f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-cloudflare.dataCloudflareAiSearchInstances.DataCloudflareAiSearchInstancesResultOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetStringAttribute` <a name="GetStringAttribute" id="@cdktn/provider-cloudflare.dataCloudflareAiSearchInstances.DataCloudflareAiSearchInstancesResultOutputReference.getStringAttribute"></a>

```go
func GetStringAttribute(terraformAttribute *string) *string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-cloudflare.dataCloudflareAiSearchInstances.DataCloudflareAiSearchInstancesResultOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetStringMapAttribute` <a name="GetStringMapAttribute" id="@cdktn/provider-cloudflare.dataCloudflareAiSearchInstances.DataCloudflareAiSearchInstancesResultOutputReference.getStringMapAttribute"></a>

```go
func GetStringMapAttribute(terraformAttribute *string) *map[string]*string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-cloudflare.dataCloudflareAiSearchInstances.DataCloudflareAiSearchInstancesResultOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `InterpolationForAttribute` <a name="InterpolationForAttribute" id="@cdktn/provider-cloudflare.dataCloudflareAiSearchInstances.DataCloudflareAiSearchInstancesResultOutputReference.interpolationForAttribute"></a>

```go
func InterpolationForAttribute(property *string) IResolvable
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktn/provider-cloudflare.dataCloudflareAiSearchInstances.DataCloudflareAiSearchInstancesResultOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* *string

---

##### `Resolve` <a name="Resolve" id="@cdktn/provider-cloudflare.dataCloudflareAiSearchInstances.DataCloudflareAiSearchInstancesResultOutputReference.resolve"></a>

```go
func Resolve(_context IResolveContext) interface{}
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktn/provider-cloudflare.dataCloudflareAiSearchInstances.DataCloudflareAiSearchInstancesResultOutputReference.resolve.parameter._context"></a>

- *Type:* github.com/open-constructs/cdk-terrain-go/cdktn.IResolveContext

---

##### `ToString` <a name="ToString" id="@cdktn/provider-cloudflare.dataCloudflareAiSearchInstances.DataCloudflareAiSearchInstancesResultOutputReference.toString"></a>

```go
func ToString() *string
```

Return a string representation of this resolvable object.

Returns a reversible string representation.


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-cloudflare.dataCloudflareAiSearchInstances.DataCloudflareAiSearchInstancesResultOutputReference.property.creationStack">CreationStack</a></code> | <code>*[]*string</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktn/provider-cloudflare.dataCloudflareAiSearchInstances.DataCloudflareAiSearchInstancesResultOutputReference.property.fqn">Fqn</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktn/provider-cloudflare.dataCloudflareAiSearchInstances.DataCloudflareAiSearchInstancesResultOutputReference.property.accountId">AccountId</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktn/provider-cloudflare.dataCloudflareAiSearchInstances.DataCloudflareAiSearchInstancesResultOutputReference.property.accountTag">AccountTag</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktn/provider-cloudflare.dataCloudflareAiSearchInstances.DataCloudflareAiSearchInstancesResultOutputReference.property.aiGatewayId">AiGatewayId</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktn/provider-cloudflare.dataCloudflareAiSearchInstances.DataCloudflareAiSearchInstancesResultOutputReference.property.aisearchModel">AisearchModel</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktn/provider-cloudflare.dataCloudflareAiSearchInstances.DataCloudflareAiSearchInstancesResultOutputReference.property.cache">Cache</a></code> | <code>github.com/open-constructs/cdk-terrain-go/cdktn.IResolvable</code> | *No description.* |
| <code><a href="#@cdktn/provider-cloudflare.dataCloudflareAiSearchInstances.DataCloudflareAiSearchInstancesResultOutputReference.property.cacheThreshold">CacheThreshold</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktn/provider-cloudflare.dataCloudflareAiSearchInstances.DataCloudflareAiSearchInstancesResultOutputReference.property.chunk">Chunk</a></code> | <code>github.com/open-constructs/cdk-terrain-go/cdktn.IResolvable</code> | *No description.* |
| <code><a href="#@cdktn/provider-cloudflare.dataCloudflareAiSearchInstances.DataCloudflareAiSearchInstancesResultOutputReference.property.chunkOverlap">ChunkOverlap</a></code> | <code>*f64</code> | *No description.* |
| <code><a href="#@cdktn/provider-cloudflare.dataCloudflareAiSearchInstances.DataCloudflareAiSearchInstancesResultOutputReference.property.chunkSize">ChunkSize</a></code> | <code>*f64</code> | *No description.* |
| <code><a href="#@cdktn/provider-cloudflare.dataCloudflareAiSearchInstances.DataCloudflareAiSearchInstancesResultOutputReference.property.createdAt">CreatedAt</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktn/provider-cloudflare.dataCloudflareAiSearchInstances.DataCloudflareAiSearchInstancesResultOutputReference.property.createdBy">CreatedBy</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktn/provider-cloudflare.dataCloudflareAiSearchInstances.DataCloudflareAiSearchInstancesResultOutputReference.property.customMetadata">CustomMetadata</a></code> | <code><a href="#@cdktn/provider-cloudflare.dataCloudflareAiSearchInstances.DataCloudflareAiSearchInstancesResultCustomMetadataList">DataCloudflareAiSearchInstancesResultCustomMetadataList</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-cloudflare.dataCloudflareAiSearchInstances.DataCloudflareAiSearchInstancesResultOutputReference.property.embeddingModel">EmbeddingModel</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktn/provider-cloudflare.dataCloudflareAiSearchInstances.DataCloudflareAiSearchInstancesResultOutputReference.property.enable">Enable</a></code> | <code>github.com/open-constructs/cdk-terrain-go/cdktn.IResolvable</code> | *No description.* |
| <code><a href="#@cdktn/provider-cloudflare.dataCloudflareAiSearchInstances.DataCloudflareAiSearchInstancesResultOutputReference.property.engineVersion">EngineVersion</a></code> | <code>*f64</code> | *No description.* |
| <code><a href="#@cdktn/provider-cloudflare.dataCloudflareAiSearchInstances.DataCloudflareAiSearchInstancesResultOutputReference.property.hybridSearchEnabled">HybridSearchEnabled</a></code> | <code>github.com/open-constructs/cdk-terrain-go/cdktn.IResolvable</code> | *No description.* |
| <code><a href="#@cdktn/provider-cloudflare.dataCloudflareAiSearchInstances.DataCloudflareAiSearchInstancesResultOutputReference.property.id">Id</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktn/provider-cloudflare.dataCloudflareAiSearchInstances.DataCloudflareAiSearchInstancesResultOutputReference.property.internalId">InternalId</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktn/provider-cloudflare.dataCloudflareAiSearchInstances.DataCloudflareAiSearchInstancesResultOutputReference.property.lastActivity">LastActivity</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktn/provider-cloudflare.dataCloudflareAiSearchInstances.DataCloudflareAiSearchInstancesResultOutputReference.property.maxNumResults">MaxNumResults</a></code> | <code>*f64</code> | *No description.* |
| <code><a href="#@cdktn/provider-cloudflare.dataCloudflareAiSearchInstances.DataCloudflareAiSearchInstancesResultOutputReference.property.metadata">Metadata</a></code> | <code><a href="#@cdktn/provider-cloudflare.dataCloudflareAiSearchInstances.DataCloudflareAiSearchInstancesResultMetadataOutputReference">DataCloudflareAiSearchInstancesResultMetadataOutputReference</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-cloudflare.dataCloudflareAiSearchInstances.DataCloudflareAiSearchInstancesResultOutputReference.property.modifiedAt">ModifiedAt</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktn/provider-cloudflare.dataCloudflareAiSearchInstances.DataCloudflareAiSearchInstancesResultOutputReference.property.modifiedBy">ModifiedBy</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktn/provider-cloudflare.dataCloudflareAiSearchInstances.DataCloudflareAiSearchInstancesResultOutputReference.property.paused">Paused</a></code> | <code>github.com/open-constructs/cdk-terrain-go/cdktn.IResolvable</code> | *No description.* |
| <code><a href="#@cdktn/provider-cloudflare.dataCloudflareAiSearchInstances.DataCloudflareAiSearchInstancesResultOutputReference.property.publicEndpointId">PublicEndpointId</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktn/provider-cloudflare.dataCloudflareAiSearchInstances.DataCloudflareAiSearchInstancesResultOutputReference.property.publicEndpointParams">PublicEndpointParams</a></code> | <code><a href="#@cdktn/provider-cloudflare.dataCloudflareAiSearchInstances.DataCloudflareAiSearchInstancesResultPublicEndpointParamsOutputReference">DataCloudflareAiSearchInstancesResultPublicEndpointParamsOutputReference</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-cloudflare.dataCloudflareAiSearchInstances.DataCloudflareAiSearchInstancesResultOutputReference.property.reranking">Reranking</a></code> | <code>github.com/open-constructs/cdk-terrain-go/cdktn.IResolvable</code> | *No description.* |
| <code><a href="#@cdktn/provider-cloudflare.dataCloudflareAiSearchInstances.DataCloudflareAiSearchInstancesResultOutputReference.property.rerankingModel">RerankingModel</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktn/provider-cloudflare.dataCloudflareAiSearchInstances.DataCloudflareAiSearchInstancesResultOutputReference.property.rewriteModel">RewriteModel</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktn/provider-cloudflare.dataCloudflareAiSearchInstances.DataCloudflareAiSearchInstancesResultOutputReference.property.rewriteQuery">RewriteQuery</a></code> | <code>github.com/open-constructs/cdk-terrain-go/cdktn.IResolvable</code> | *No description.* |
| <code><a href="#@cdktn/provider-cloudflare.dataCloudflareAiSearchInstances.DataCloudflareAiSearchInstancesResultOutputReference.property.scoreThreshold">ScoreThreshold</a></code> | <code>*f64</code> | *No description.* |
| <code><a href="#@cdktn/provider-cloudflare.dataCloudflareAiSearchInstances.DataCloudflareAiSearchInstancesResultOutputReference.property.source">Source</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktn/provider-cloudflare.dataCloudflareAiSearchInstances.DataCloudflareAiSearchInstancesResultOutputReference.property.sourceParams">SourceParams</a></code> | <code><a href="#@cdktn/provider-cloudflare.dataCloudflareAiSearchInstances.DataCloudflareAiSearchInstancesResultSourceParamsOutputReference">DataCloudflareAiSearchInstancesResultSourceParamsOutputReference</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-cloudflare.dataCloudflareAiSearchInstances.DataCloudflareAiSearchInstancesResultOutputReference.property.status">Status</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktn/provider-cloudflare.dataCloudflareAiSearchInstances.DataCloudflareAiSearchInstancesResultOutputReference.property.summarization">Summarization</a></code> | <code>github.com/open-constructs/cdk-terrain-go/cdktn.IResolvable</code> | *No description.* |
| <code><a href="#@cdktn/provider-cloudflare.dataCloudflareAiSearchInstances.DataCloudflareAiSearchInstancesResultOutputReference.property.summarizationModel">SummarizationModel</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktn/provider-cloudflare.dataCloudflareAiSearchInstances.DataCloudflareAiSearchInstancesResultOutputReference.property.systemPromptAisearch">SystemPromptAisearch</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktn/provider-cloudflare.dataCloudflareAiSearchInstances.DataCloudflareAiSearchInstancesResultOutputReference.property.systemPromptIndexSummarization">SystemPromptIndexSummarization</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktn/provider-cloudflare.dataCloudflareAiSearchInstances.DataCloudflareAiSearchInstancesResultOutputReference.property.systemPromptRewriteQuery">SystemPromptRewriteQuery</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktn/provider-cloudflare.dataCloudflareAiSearchInstances.DataCloudflareAiSearchInstancesResultOutputReference.property.tokenId">TokenId</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktn/provider-cloudflare.dataCloudflareAiSearchInstances.DataCloudflareAiSearchInstancesResultOutputReference.property.type">Type</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktn/provider-cloudflare.dataCloudflareAiSearchInstances.DataCloudflareAiSearchInstancesResultOutputReference.property.vectorizeActiveNamespace">VectorizeActiveNamespace</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktn/provider-cloudflare.dataCloudflareAiSearchInstances.DataCloudflareAiSearchInstancesResultOutputReference.property.vectorizeName">VectorizeName</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktn/provider-cloudflare.dataCloudflareAiSearchInstances.DataCloudflareAiSearchInstancesResultOutputReference.property.internalValue">InternalValue</a></code> | <code><a href="#@cdktn/provider-cloudflare.dataCloudflareAiSearchInstances.DataCloudflareAiSearchInstancesResult">DataCloudflareAiSearchInstancesResult</a></code> | *No description.* |

---

##### `CreationStack`<sup>Required</sup> <a name="CreationStack" id="@cdktn/provider-cloudflare.dataCloudflareAiSearchInstances.DataCloudflareAiSearchInstancesResultOutputReference.property.creationStack"></a>

```go
func CreationStack() *[]*string
```

- *Type:* *[]*string

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `Fqn`<sup>Required</sup> <a name="Fqn" id="@cdktn/provider-cloudflare.dataCloudflareAiSearchInstances.DataCloudflareAiSearchInstancesResultOutputReference.property.fqn"></a>

```go
func Fqn() *string
```

- *Type:* *string

---

##### `AccountId`<sup>Required</sup> <a name="AccountId" id="@cdktn/provider-cloudflare.dataCloudflareAiSearchInstances.DataCloudflareAiSearchInstancesResultOutputReference.property.accountId"></a>

```go
func AccountId() *string
```

- *Type:* *string

---

##### `AccountTag`<sup>Required</sup> <a name="AccountTag" id="@cdktn/provider-cloudflare.dataCloudflareAiSearchInstances.DataCloudflareAiSearchInstancesResultOutputReference.property.accountTag"></a>

```go
func AccountTag() *string
```

- *Type:* *string

---

##### `AiGatewayId`<sup>Required</sup> <a name="AiGatewayId" id="@cdktn/provider-cloudflare.dataCloudflareAiSearchInstances.DataCloudflareAiSearchInstancesResultOutputReference.property.aiGatewayId"></a>

```go
func AiGatewayId() *string
```

- *Type:* *string

---

##### `AisearchModel`<sup>Required</sup> <a name="AisearchModel" id="@cdktn/provider-cloudflare.dataCloudflareAiSearchInstances.DataCloudflareAiSearchInstancesResultOutputReference.property.aisearchModel"></a>

```go
func AisearchModel() *string
```

- *Type:* *string

---

##### `Cache`<sup>Required</sup> <a name="Cache" id="@cdktn/provider-cloudflare.dataCloudflareAiSearchInstances.DataCloudflareAiSearchInstancesResultOutputReference.property.cache"></a>

```go
func Cache() IResolvable
```

- *Type:* github.com/open-constructs/cdk-terrain-go/cdktn.IResolvable

---

##### `CacheThreshold`<sup>Required</sup> <a name="CacheThreshold" id="@cdktn/provider-cloudflare.dataCloudflareAiSearchInstances.DataCloudflareAiSearchInstancesResultOutputReference.property.cacheThreshold"></a>

```go
func CacheThreshold() *string
```

- *Type:* *string

---

##### `Chunk`<sup>Required</sup> <a name="Chunk" id="@cdktn/provider-cloudflare.dataCloudflareAiSearchInstances.DataCloudflareAiSearchInstancesResultOutputReference.property.chunk"></a>

```go
func Chunk() IResolvable
```

- *Type:* github.com/open-constructs/cdk-terrain-go/cdktn.IResolvable

---

##### `ChunkOverlap`<sup>Required</sup> <a name="ChunkOverlap" id="@cdktn/provider-cloudflare.dataCloudflareAiSearchInstances.DataCloudflareAiSearchInstancesResultOutputReference.property.chunkOverlap"></a>

```go
func ChunkOverlap() *f64
```

- *Type:* *f64

---

##### `ChunkSize`<sup>Required</sup> <a name="ChunkSize" id="@cdktn/provider-cloudflare.dataCloudflareAiSearchInstances.DataCloudflareAiSearchInstancesResultOutputReference.property.chunkSize"></a>

```go
func ChunkSize() *f64
```

- *Type:* *f64

---

##### `CreatedAt`<sup>Required</sup> <a name="CreatedAt" id="@cdktn/provider-cloudflare.dataCloudflareAiSearchInstances.DataCloudflareAiSearchInstancesResultOutputReference.property.createdAt"></a>

```go
func CreatedAt() *string
```

- *Type:* *string

---

##### `CreatedBy`<sup>Required</sup> <a name="CreatedBy" id="@cdktn/provider-cloudflare.dataCloudflareAiSearchInstances.DataCloudflareAiSearchInstancesResultOutputReference.property.createdBy"></a>

```go
func CreatedBy() *string
```

- *Type:* *string

---

##### `CustomMetadata`<sup>Required</sup> <a name="CustomMetadata" id="@cdktn/provider-cloudflare.dataCloudflareAiSearchInstances.DataCloudflareAiSearchInstancesResultOutputReference.property.customMetadata"></a>

```go
func CustomMetadata() DataCloudflareAiSearchInstancesResultCustomMetadataList
```

- *Type:* <a href="#@cdktn/provider-cloudflare.dataCloudflareAiSearchInstances.DataCloudflareAiSearchInstancesResultCustomMetadataList">DataCloudflareAiSearchInstancesResultCustomMetadataList</a>

---

##### `EmbeddingModel`<sup>Required</sup> <a name="EmbeddingModel" id="@cdktn/provider-cloudflare.dataCloudflareAiSearchInstances.DataCloudflareAiSearchInstancesResultOutputReference.property.embeddingModel"></a>

```go
func EmbeddingModel() *string
```

- *Type:* *string

---

##### `Enable`<sup>Required</sup> <a name="Enable" id="@cdktn/provider-cloudflare.dataCloudflareAiSearchInstances.DataCloudflareAiSearchInstancesResultOutputReference.property.enable"></a>

```go
func Enable() IResolvable
```

- *Type:* github.com/open-constructs/cdk-terrain-go/cdktn.IResolvable

---

##### `EngineVersion`<sup>Required</sup> <a name="EngineVersion" id="@cdktn/provider-cloudflare.dataCloudflareAiSearchInstances.DataCloudflareAiSearchInstancesResultOutputReference.property.engineVersion"></a>

```go
func EngineVersion() *f64
```

- *Type:* *f64

---

##### `HybridSearchEnabled`<sup>Required</sup> <a name="HybridSearchEnabled" id="@cdktn/provider-cloudflare.dataCloudflareAiSearchInstances.DataCloudflareAiSearchInstancesResultOutputReference.property.hybridSearchEnabled"></a>

```go
func HybridSearchEnabled() IResolvable
```

- *Type:* github.com/open-constructs/cdk-terrain-go/cdktn.IResolvable

---

##### `Id`<sup>Required</sup> <a name="Id" id="@cdktn/provider-cloudflare.dataCloudflareAiSearchInstances.DataCloudflareAiSearchInstancesResultOutputReference.property.id"></a>

```go
func Id() *string
```

- *Type:* *string

---

##### `InternalId`<sup>Required</sup> <a name="InternalId" id="@cdktn/provider-cloudflare.dataCloudflareAiSearchInstances.DataCloudflareAiSearchInstancesResultOutputReference.property.internalId"></a>

```go
func InternalId() *string
```

- *Type:* *string

---

##### `LastActivity`<sup>Required</sup> <a name="LastActivity" id="@cdktn/provider-cloudflare.dataCloudflareAiSearchInstances.DataCloudflareAiSearchInstancesResultOutputReference.property.lastActivity"></a>

```go
func LastActivity() *string
```

- *Type:* *string

---

##### `MaxNumResults`<sup>Required</sup> <a name="MaxNumResults" id="@cdktn/provider-cloudflare.dataCloudflareAiSearchInstances.DataCloudflareAiSearchInstancesResultOutputReference.property.maxNumResults"></a>

```go
func MaxNumResults() *f64
```

- *Type:* *f64

---

##### `Metadata`<sup>Required</sup> <a name="Metadata" id="@cdktn/provider-cloudflare.dataCloudflareAiSearchInstances.DataCloudflareAiSearchInstancesResultOutputReference.property.metadata"></a>

```go
func Metadata() DataCloudflareAiSearchInstancesResultMetadataOutputReference
```

- *Type:* <a href="#@cdktn/provider-cloudflare.dataCloudflareAiSearchInstances.DataCloudflareAiSearchInstancesResultMetadataOutputReference">DataCloudflareAiSearchInstancesResultMetadataOutputReference</a>

---

##### `ModifiedAt`<sup>Required</sup> <a name="ModifiedAt" id="@cdktn/provider-cloudflare.dataCloudflareAiSearchInstances.DataCloudflareAiSearchInstancesResultOutputReference.property.modifiedAt"></a>

```go
func ModifiedAt() *string
```

- *Type:* *string

---

##### `ModifiedBy`<sup>Required</sup> <a name="ModifiedBy" id="@cdktn/provider-cloudflare.dataCloudflareAiSearchInstances.DataCloudflareAiSearchInstancesResultOutputReference.property.modifiedBy"></a>

```go
func ModifiedBy() *string
```

- *Type:* *string

---

##### `Paused`<sup>Required</sup> <a name="Paused" id="@cdktn/provider-cloudflare.dataCloudflareAiSearchInstances.DataCloudflareAiSearchInstancesResultOutputReference.property.paused"></a>

```go
func Paused() IResolvable
```

- *Type:* github.com/open-constructs/cdk-terrain-go/cdktn.IResolvable

---

##### `PublicEndpointId`<sup>Required</sup> <a name="PublicEndpointId" id="@cdktn/provider-cloudflare.dataCloudflareAiSearchInstances.DataCloudflareAiSearchInstancesResultOutputReference.property.publicEndpointId"></a>

```go
func PublicEndpointId() *string
```

- *Type:* *string

---

##### `PublicEndpointParams`<sup>Required</sup> <a name="PublicEndpointParams" id="@cdktn/provider-cloudflare.dataCloudflareAiSearchInstances.DataCloudflareAiSearchInstancesResultOutputReference.property.publicEndpointParams"></a>

```go
func PublicEndpointParams() DataCloudflareAiSearchInstancesResultPublicEndpointParamsOutputReference
```

- *Type:* <a href="#@cdktn/provider-cloudflare.dataCloudflareAiSearchInstances.DataCloudflareAiSearchInstancesResultPublicEndpointParamsOutputReference">DataCloudflareAiSearchInstancesResultPublicEndpointParamsOutputReference</a>

---

##### `Reranking`<sup>Required</sup> <a name="Reranking" id="@cdktn/provider-cloudflare.dataCloudflareAiSearchInstances.DataCloudflareAiSearchInstancesResultOutputReference.property.reranking"></a>

```go
func Reranking() IResolvable
```

- *Type:* github.com/open-constructs/cdk-terrain-go/cdktn.IResolvable

---

##### `RerankingModel`<sup>Required</sup> <a name="RerankingModel" id="@cdktn/provider-cloudflare.dataCloudflareAiSearchInstances.DataCloudflareAiSearchInstancesResultOutputReference.property.rerankingModel"></a>

```go
func RerankingModel() *string
```

- *Type:* *string

---

##### `RewriteModel`<sup>Required</sup> <a name="RewriteModel" id="@cdktn/provider-cloudflare.dataCloudflareAiSearchInstances.DataCloudflareAiSearchInstancesResultOutputReference.property.rewriteModel"></a>

```go
func RewriteModel() *string
```

- *Type:* *string

---

##### `RewriteQuery`<sup>Required</sup> <a name="RewriteQuery" id="@cdktn/provider-cloudflare.dataCloudflareAiSearchInstances.DataCloudflareAiSearchInstancesResultOutputReference.property.rewriteQuery"></a>

```go
func RewriteQuery() IResolvable
```

- *Type:* github.com/open-constructs/cdk-terrain-go/cdktn.IResolvable

---

##### `ScoreThreshold`<sup>Required</sup> <a name="ScoreThreshold" id="@cdktn/provider-cloudflare.dataCloudflareAiSearchInstances.DataCloudflareAiSearchInstancesResultOutputReference.property.scoreThreshold"></a>

```go
func ScoreThreshold() *f64
```

- *Type:* *f64

---

##### `Source`<sup>Required</sup> <a name="Source" id="@cdktn/provider-cloudflare.dataCloudflareAiSearchInstances.DataCloudflareAiSearchInstancesResultOutputReference.property.source"></a>

```go
func Source() *string
```

- *Type:* *string

---

##### `SourceParams`<sup>Required</sup> <a name="SourceParams" id="@cdktn/provider-cloudflare.dataCloudflareAiSearchInstances.DataCloudflareAiSearchInstancesResultOutputReference.property.sourceParams"></a>

```go
func SourceParams() DataCloudflareAiSearchInstancesResultSourceParamsOutputReference
```

- *Type:* <a href="#@cdktn/provider-cloudflare.dataCloudflareAiSearchInstances.DataCloudflareAiSearchInstancesResultSourceParamsOutputReference">DataCloudflareAiSearchInstancesResultSourceParamsOutputReference</a>

---

##### `Status`<sup>Required</sup> <a name="Status" id="@cdktn/provider-cloudflare.dataCloudflareAiSearchInstances.DataCloudflareAiSearchInstancesResultOutputReference.property.status"></a>

```go
func Status() *string
```

- *Type:* *string

---

##### `Summarization`<sup>Required</sup> <a name="Summarization" id="@cdktn/provider-cloudflare.dataCloudflareAiSearchInstances.DataCloudflareAiSearchInstancesResultOutputReference.property.summarization"></a>

```go
func Summarization() IResolvable
```

- *Type:* github.com/open-constructs/cdk-terrain-go/cdktn.IResolvable

---

##### `SummarizationModel`<sup>Required</sup> <a name="SummarizationModel" id="@cdktn/provider-cloudflare.dataCloudflareAiSearchInstances.DataCloudflareAiSearchInstancesResultOutputReference.property.summarizationModel"></a>

```go
func SummarizationModel() *string
```

- *Type:* *string

---

##### `SystemPromptAisearch`<sup>Required</sup> <a name="SystemPromptAisearch" id="@cdktn/provider-cloudflare.dataCloudflareAiSearchInstances.DataCloudflareAiSearchInstancesResultOutputReference.property.systemPromptAisearch"></a>

```go
func SystemPromptAisearch() *string
```

- *Type:* *string

---

##### `SystemPromptIndexSummarization`<sup>Required</sup> <a name="SystemPromptIndexSummarization" id="@cdktn/provider-cloudflare.dataCloudflareAiSearchInstances.DataCloudflareAiSearchInstancesResultOutputReference.property.systemPromptIndexSummarization"></a>

```go
func SystemPromptIndexSummarization() *string
```

- *Type:* *string

---

##### `SystemPromptRewriteQuery`<sup>Required</sup> <a name="SystemPromptRewriteQuery" id="@cdktn/provider-cloudflare.dataCloudflareAiSearchInstances.DataCloudflareAiSearchInstancesResultOutputReference.property.systemPromptRewriteQuery"></a>

```go
func SystemPromptRewriteQuery() *string
```

- *Type:* *string

---

##### `TokenId`<sup>Required</sup> <a name="TokenId" id="@cdktn/provider-cloudflare.dataCloudflareAiSearchInstances.DataCloudflareAiSearchInstancesResultOutputReference.property.tokenId"></a>

```go
func TokenId() *string
```

- *Type:* *string

---

##### `Type`<sup>Required</sup> <a name="Type" id="@cdktn/provider-cloudflare.dataCloudflareAiSearchInstances.DataCloudflareAiSearchInstancesResultOutputReference.property.type"></a>

```go
func Type() *string
```

- *Type:* *string

---

##### `VectorizeActiveNamespace`<sup>Required</sup> <a name="VectorizeActiveNamespace" id="@cdktn/provider-cloudflare.dataCloudflareAiSearchInstances.DataCloudflareAiSearchInstancesResultOutputReference.property.vectorizeActiveNamespace"></a>

```go
func VectorizeActiveNamespace() *string
```

- *Type:* *string

---

##### `VectorizeName`<sup>Required</sup> <a name="VectorizeName" id="@cdktn/provider-cloudflare.dataCloudflareAiSearchInstances.DataCloudflareAiSearchInstancesResultOutputReference.property.vectorizeName"></a>

```go
func VectorizeName() *string
```

- *Type:* *string

---

##### `InternalValue`<sup>Optional</sup> <a name="InternalValue" id="@cdktn/provider-cloudflare.dataCloudflareAiSearchInstances.DataCloudflareAiSearchInstancesResultOutputReference.property.internalValue"></a>

```go
func InternalValue() DataCloudflareAiSearchInstancesResult
```

- *Type:* <a href="#@cdktn/provider-cloudflare.dataCloudflareAiSearchInstances.DataCloudflareAiSearchInstancesResult">DataCloudflareAiSearchInstancesResult</a>

---


### DataCloudflareAiSearchInstancesResultPublicEndpointParamsChatCompletionsEndpointOutputReference <a name="DataCloudflareAiSearchInstancesResultPublicEndpointParamsChatCompletionsEndpointOutputReference" id="@cdktn/provider-cloudflare.dataCloudflareAiSearchInstances.DataCloudflareAiSearchInstancesResultPublicEndpointParamsChatCompletionsEndpointOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktn/provider-cloudflare.dataCloudflareAiSearchInstances.DataCloudflareAiSearchInstancesResultPublicEndpointParamsChatCompletionsEndpointOutputReference.Initializer"></a>

```go
import "github.com/cdktn-io/cdktn-provider-cloudflare-go/cloudflare/v14/datacloudflareaisearchinstances"

datacloudflareaisearchinstances.NewDataCloudflareAiSearchInstancesResultPublicEndpointParamsChatCompletionsEndpointOutputReference(terraformResource IInterpolatingParent, terraformAttribute *string) DataCloudflareAiSearchInstancesResultPublicEndpointParamsChatCompletionsEndpointOutputReference
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-cloudflare.dataCloudflareAiSearchInstances.DataCloudflareAiSearchInstancesResultPublicEndpointParamsChatCompletionsEndpointOutputReference.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>github.com/open-constructs/cdk-terrain-go/cdktn.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktn/provider-cloudflare.dataCloudflareAiSearchInstances.DataCloudflareAiSearchInstancesResultPublicEndpointParamsChatCompletionsEndpointOutputReference.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>*string</code> | The attribute on the parent resource this class is referencing. |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktn/provider-cloudflare.dataCloudflareAiSearchInstances.DataCloudflareAiSearchInstancesResultPublicEndpointParamsChatCompletionsEndpointOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* github.com/open-constructs/cdk-terrain-go/cdktn.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-cloudflare.dataCloudflareAiSearchInstances.DataCloudflareAiSearchInstancesResultPublicEndpointParamsChatCompletionsEndpointOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* *string

The attribute on the parent resource this class is referencing.

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-cloudflare.dataCloudflareAiSearchInstances.DataCloudflareAiSearchInstancesResultPublicEndpointParamsChatCompletionsEndpointOutputReference.computeFqn">ComputeFqn</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-cloudflare.dataCloudflareAiSearchInstances.DataCloudflareAiSearchInstancesResultPublicEndpointParamsChatCompletionsEndpointOutputReference.getAnyMapAttribute">GetAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-cloudflare.dataCloudflareAiSearchInstances.DataCloudflareAiSearchInstancesResultPublicEndpointParamsChatCompletionsEndpointOutputReference.getBooleanAttribute">GetBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-cloudflare.dataCloudflareAiSearchInstances.DataCloudflareAiSearchInstancesResultPublicEndpointParamsChatCompletionsEndpointOutputReference.getBooleanMapAttribute">GetBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-cloudflare.dataCloudflareAiSearchInstances.DataCloudflareAiSearchInstancesResultPublicEndpointParamsChatCompletionsEndpointOutputReference.getListAttribute">GetListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-cloudflare.dataCloudflareAiSearchInstances.DataCloudflareAiSearchInstancesResultPublicEndpointParamsChatCompletionsEndpointOutputReference.getNumberAttribute">GetNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-cloudflare.dataCloudflareAiSearchInstances.DataCloudflareAiSearchInstancesResultPublicEndpointParamsChatCompletionsEndpointOutputReference.getNumberListAttribute">GetNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-cloudflare.dataCloudflareAiSearchInstances.DataCloudflareAiSearchInstancesResultPublicEndpointParamsChatCompletionsEndpointOutputReference.getNumberMapAttribute">GetNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-cloudflare.dataCloudflareAiSearchInstances.DataCloudflareAiSearchInstancesResultPublicEndpointParamsChatCompletionsEndpointOutputReference.getStringAttribute">GetStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-cloudflare.dataCloudflareAiSearchInstances.DataCloudflareAiSearchInstancesResultPublicEndpointParamsChatCompletionsEndpointOutputReference.getStringMapAttribute">GetStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-cloudflare.dataCloudflareAiSearchInstances.DataCloudflareAiSearchInstancesResultPublicEndpointParamsChatCompletionsEndpointOutputReference.interpolationForAttribute">InterpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-cloudflare.dataCloudflareAiSearchInstances.DataCloudflareAiSearchInstancesResultPublicEndpointParamsChatCompletionsEndpointOutputReference.resolve">Resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktn/provider-cloudflare.dataCloudflareAiSearchInstances.DataCloudflareAiSearchInstancesResultPublicEndpointParamsChatCompletionsEndpointOutputReference.toString">ToString</a></code> | Return a string representation of this resolvable object. |

---

##### `ComputeFqn` <a name="ComputeFqn" id="@cdktn/provider-cloudflare.dataCloudflareAiSearchInstances.DataCloudflareAiSearchInstancesResultPublicEndpointParamsChatCompletionsEndpointOutputReference.computeFqn"></a>

```go
func ComputeFqn() *string
```

##### `GetAnyMapAttribute` <a name="GetAnyMapAttribute" id="@cdktn/provider-cloudflare.dataCloudflareAiSearchInstances.DataCloudflareAiSearchInstancesResultPublicEndpointParamsChatCompletionsEndpointOutputReference.getAnyMapAttribute"></a>

```go
func GetAnyMapAttribute(terraformAttribute *string) *map[string]interface{}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-cloudflare.dataCloudflareAiSearchInstances.DataCloudflareAiSearchInstancesResultPublicEndpointParamsChatCompletionsEndpointOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetBooleanAttribute` <a name="GetBooleanAttribute" id="@cdktn/provider-cloudflare.dataCloudflareAiSearchInstances.DataCloudflareAiSearchInstancesResultPublicEndpointParamsChatCompletionsEndpointOutputReference.getBooleanAttribute"></a>

```go
func GetBooleanAttribute(terraformAttribute *string) IResolvable
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-cloudflare.dataCloudflareAiSearchInstances.DataCloudflareAiSearchInstancesResultPublicEndpointParamsChatCompletionsEndpointOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetBooleanMapAttribute` <a name="GetBooleanMapAttribute" id="@cdktn/provider-cloudflare.dataCloudflareAiSearchInstances.DataCloudflareAiSearchInstancesResultPublicEndpointParamsChatCompletionsEndpointOutputReference.getBooleanMapAttribute"></a>

```go
func GetBooleanMapAttribute(terraformAttribute *string) *map[string]*bool
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-cloudflare.dataCloudflareAiSearchInstances.DataCloudflareAiSearchInstancesResultPublicEndpointParamsChatCompletionsEndpointOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetListAttribute` <a name="GetListAttribute" id="@cdktn/provider-cloudflare.dataCloudflareAiSearchInstances.DataCloudflareAiSearchInstancesResultPublicEndpointParamsChatCompletionsEndpointOutputReference.getListAttribute"></a>

```go
func GetListAttribute(terraformAttribute *string) *[]*string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-cloudflare.dataCloudflareAiSearchInstances.DataCloudflareAiSearchInstancesResultPublicEndpointParamsChatCompletionsEndpointOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberAttribute` <a name="GetNumberAttribute" id="@cdktn/provider-cloudflare.dataCloudflareAiSearchInstances.DataCloudflareAiSearchInstancesResultPublicEndpointParamsChatCompletionsEndpointOutputReference.getNumberAttribute"></a>

```go
func GetNumberAttribute(terraformAttribute *string) *f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-cloudflare.dataCloudflareAiSearchInstances.DataCloudflareAiSearchInstancesResultPublicEndpointParamsChatCompletionsEndpointOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberListAttribute` <a name="GetNumberListAttribute" id="@cdktn/provider-cloudflare.dataCloudflareAiSearchInstances.DataCloudflareAiSearchInstancesResultPublicEndpointParamsChatCompletionsEndpointOutputReference.getNumberListAttribute"></a>

```go
func GetNumberListAttribute(terraformAttribute *string) *[]*f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-cloudflare.dataCloudflareAiSearchInstances.DataCloudflareAiSearchInstancesResultPublicEndpointParamsChatCompletionsEndpointOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberMapAttribute` <a name="GetNumberMapAttribute" id="@cdktn/provider-cloudflare.dataCloudflareAiSearchInstances.DataCloudflareAiSearchInstancesResultPublicEndpointParamsChatCompletionsEndpointOutputReference.getNumberMapAttribute"></a>

```go
func GetNumberMapAttribute(terraformAttribute *string) *map[string]*f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-cloudflare.dataCloudflareAiSearchInstances.DataCloudflareAiSearchInstancesResultPublicEndpointParamsChatCompletionsEndpointOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetStringAttribute` <a name="GetStringAttribute" id="@cdktn/provider-cloudflare.dataCloudflareAiSearchInstances.DataCloudflareAiSearchInstancesResultPublicEndpointParamsChatCompletionsEndpointOutputReference.getStringAttribute"></a>

```go
func GetStringAttribute(terraformAttribute *string) *string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-cloudflare.dataCloudflareAiSearchInstances.DataCloudflareAiSearchInstancesResultPublicEndpointParamsChatCompletionsEndpointOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetStringMapAttribute` <a name="GetStringMapAttribute" id="@cdktn/provider-cloudflare.dataCloudflareAiSearchInstances.DataCloudflareAiSearchInstancesResultPublicEndpointParamsChatCompletionsEndpointOutputReference.getStringMapAttribute"></a>

```go
func GetStringMapAttribute(terraformAttribute *string) *map[string]*string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-cloudflare.dataCloudflareAiSearchInstances.DataCloudflareAiSearchInstancesResultPublicEndpointParamsChatCompletionsEndpointOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `InterpolationForAttribute` <a name="InterpolationForAttribute" id="@cdktn/provider-cloudflare.dataCloudflareAiSearchInstances.DataCloudflareAiSearchInstancesResultPublicEndpointParamsChatCompletionsEndpointOutputReference.interpolationForAttribute"></a>

```go
func InterpolationForAttribute(property *string) IResolvable
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktn/provider-cloudflare.dataCloudflareAiSearchInstances.DataCloudflareAiSearchInstancesResultPublicEndpointParamsChatCompletionsEndpointOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* *string

---

##### `Resolve` <a name="Resolve" id="@cdktn/provider-cloudflare.dataCloudflareAiSearchInstances.DataCloudflareAiSearchInstancesResultPublicEndpointParamsChatCompletionsEndpointOutputReference.resolve"></a>

```go
func Resolve(_context IResolveContext) interface{}
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktn/provider-cloudflare.dataCloudflareAiSearchInstances.DataCloudflareAiSearchInstancesResultPublicEndpointParamsChatCompletionsEndpointOutputReference.resolve.parameter._context"></a>

- *Type:* github.com/open-constructs/cdk-terrain-go/cdktn.IResolveContext

---

##### `ToString` <a name="ToString" id="@cdktn/provider-cloudflare.dataCloudflareAiSearchInstances.DataCloudflareAiSearchInstancesResultPublicEndpointParamsChatCompletionsEndpointOutputReference.toString"></a>

```go
func ToString() *string
```

Return a string representation of this resolvable object.

Returns a reversible string representation.


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-cloudflare.dataCloudflareAiSearchInstances.DataCloudflareAiSearchInstancesResultPublicEndpointParamsChatCompletionsEndpointOutputReference.property.creationStack">CreationStack</a></code> | <code>*[]*string</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktn/provider-cloudflare.dataCloudflareAiSearchInstances.DataCloudflareAiSearchInstancesResultPublicEndpointParamsChatCompletionsEndpointOutputReference.property.fqn">Fqn</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktn/provider-cloudflare.dataCloudflareAiSearchInstances.DataCloudflareAiSearchInstancesResultPublicEndpointParamsChatCompletionsEndpointOutputReference.property.disabled">Disabled</a></code> | <code>github.com/open-constructs/cdk-terrain-go/cdktn.IResolvable</code> | *No description.* |
| <code><a href="#@cdktn/provider-cloudflare.dataCloudflareAiSearchInstances.DataCloudflareAiSearchInstancesResultPublicEndpointParamsChatCompletionsEndpointOutputReference.property.internalValue">InternalValue</a></code> | <code><a href="#@cdktn/provider-cloudflare.dataCloudflareAiSearchInstances.DataCloudflareAiSearchInstancesResultPublicEndpointParamsChatCompletionsEndpoint">DataCloudflareAiSearchInstancesResultPublicEndpointParamsChatCompletionsEndpoint</a></code> | *No description.* |

---

##### `CreationStack`<sup>Required</sup> <a name="CreationStack" id="@cdktn/provider-cloudflare.dataCloudflareAiSearchInstances.DataCloudflareAiSearchInstancesResultPublicEndpointParamsChatCompletionsEndpointOutputReference.property.creationStack"></a>

```go
func CreationStack() *[]*string
```

- *Type:* *[]*string

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `Fqn`<sup>Required</sup> <a name="Fqn" id="@cdktn/provider-cloudflare.dataCloudflareAiSearchInstances.DataCloudflareAiSearchInstancesResultPublicEndpointParamsChatCompletionsEndpointOutputReference.property.fqn"></a>

```go
func Fqn() *string
```

- *Type:* *string

---

##### `Disabled`<sup>Required</sup> <a name="Disabled" id="@cdktn/provider-cloudflare.dataCloudflareAiSearchInstances.DataCloudflareAiSearchInstancesResultPublicEndpointParamsChatCompletionsEndpointOutputReference.property.disabled"></a>

```go
func Disabled() IResolvable
```

- *Type:* github.com/open-constructs/cdk-terrain-go/cdktn.IResolvable

---

##### `InternalValue`<sup>Optional</sup> <a name="InternalValue" id="@cdktn/provider-cloudflare.dataCloudflareAiSearchInstances.DataCloudflareAiSearchInstancesResultPublicEndpointParamsChatCompletionsEndpointOutputReference.property.internalValue"></a>

```go
func InternalValue() DataCloudflareAiSearchInstancesResultPublicEndpointParamsChatCompletionsEndpoint
```

- *Type:* <a href="#@cdktn/provider-cloudflare.dataCloudflareAiSearchInstances.DataCloudflareAiSearchInstancesResultPublicEndpointParamsChatCompletionsEndpoint">DataCloudflareAiSearchInstancesResultPublicEndpointParamsChatCompletionsEndpoint</a>

---


### DataCloudflareAiSearchInstancesResultPublicEndpointParamsMcpOutputReference <a name="DataCloudflareAiSearchInstancesResultPublicEndpointParamsMcpOutputReference" id="@cdktn/provider-cloudflare.dataCloudflareAiSearchInstances.DataCloudflareAiSearchInstancesResultPublicEndpointParamsMcpOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktn/provider-cloudflare.dataCloudflareAiSearchInstances.DataCloudflareAiSearchInstancesResultPublicEndpointParamsMcpOutputReference.Initializer"></a>

```go
import "github.com/cdktn-io/cdktn-provider-cloudflare-go/cloudflare/v14/datacloudflareaisearchinstances"

datacloudflareaisearchinstances.NewDataCloudflareAiSearchInstancesResultPublicEndpointParamsMcpOutputReference(terraformResource IInterpolatingParent, terraformAttribute *string) DataCloudflareAiSearchInstancesResultPublicEndpointParamsMcpOutputReference
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-cloudflare.dataCloudflareAiSearchInstances.DataCloudflareAiSearchInstancesResultPublicEndpointParamsMcpOutputReference.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>github.com/open-constructs/cdk-terrain-go/cdktn.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktn/provider-cloudflare.dataCloudflareAiSearchInstances.DataCloudflareAiSearchInstancesResultPublicEndpointParamsMcpOutputReference.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>*string</code> | The attribute on the parent resource this class is referencing. |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktn/provider-cloudflare.dataCloudflareAiSearchInstances.DataCloudflareAiSearchInstancesResultPublicEndpointParamsMcpOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* github.com/open-constructs/cdk-terrain-go/cdktn.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-cloudflare.dataCloudflareAiSearchInstances.DataCloudflareAiSearchInstancesResultPublicEndpointParamsMcpOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* *string

The attribute on the parent resource this class is referencing.

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-cloudflare.dataCloudflareAiSearchInstances.DataCloudflareAiSearchInstancesResultPublicEndpointParamsMcpOutputReference.computeFqn">ComputeFqn</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-cloudflare.dataCloudflareAiSearchInstances.DataCloudflareAiSearchInstancesResultPublicEndpointParamsMcpOutputReference.getAnyMapAttribute">GetAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-cloudflare.dataCloudflareAiSearchInstances.DataCloudflareAiSearchInstancesResultPublicEndpointParamsMcpOutputReference.getBooleanAttribute">GetBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-cloudflare.dataCloudflareAiSearchInstances.DataCloudflareAiSearchInstancesResultPublicEndpointParamsMcpOutputReference.getBooleanMapAttribute">GetBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-cloudflare.dataCloudflareAiSearchInstances.DataCloudflareAiSearchInstancesResultPublicEndpointParamsMcpOutputReference.getListAttribute">GetListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-cloudflare.dataCloudflareAiSearchInstances.DataCloudflareAiSearchInstancesResultPublicEndpointParamsMcpOutputReference.getNumberAttribute">GetNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-cloudflare.dataCloudflareAiSearchInstances.DataCloudflareAiSearchInstancesResultPublicEndpointParamsMcpOutputReference.getNumberListAttribute">GetNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-cloudflare.dataCloudflareAiSearchInstances.DataCloudflareAiSearchInstancesResultPublicEndpointParamsMcpOutputReference.getNumberMapAttribute">GetNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-cloudflare.dataCloudflareAiSearchInstances.DataCloudflareAiSearchInstancesResultPublicEndpointParamsMcpOutputReference.getStringAttribute">GetStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-cloudflare.dataCloudflareAiSearchInstances.DataCloudflareAiSearchInstancesResultPublicEndpointParamsMcpOutputReference.getStringMapAttribute">GetStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-cloudflare.dataCloudflareAiSearchInstances.DataCloudflareAiSearchInstancesResultPublicEndpointParamsMcpOutputReference.interpolationForAttribute">InterpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-cloudflare.dataCloudflareAiSearchInstances.DataCloudflareAiSearchInstancesResultPublicEndpointParamsMcpOutputReference.resolve">Resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktn/provider-cloudflare.dataCloudflareAiSearchInstances.DataCloudflareAiSearchInstancesResultPublicEndpointParamsMcpOutputReference.toString">ToString</a></code> | Return a string representation of this resolvable object. |

---

##### `ComputeFqn` <a name="ComputeFqn" id="@cdktn/provider-cloudflare.dataCloudflareAiSearchInstances.DataCloudflareAiSearchInstancesResultPublicEndpointParamsMcpOutputReference.computeFqn"></a>

```go
func ComputeFqn() *string
```

##### `GetAnyMapAttribute` <a name="GetAnyMapAttribute" id="@cdktn/provider-cloudflare.dataCloudflareAiSearchInstances.DataCloudflareAiSearchInstancesResultPublicEndpointParamsMcpOutputReference.getAnyMapAttribute"></a>

```go
func GetAnyMapAttribute(terraformAttribute *string) *map[string]interface{}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-cloudflare.dataCloudflareAiSearchInstances.DataCloudflareAiSearchInstancesResultPublicEndpointParamsMcpOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetBooleanAttribute` <a name="GetBooleanAttribute" id="@cdktn/provider-cloudflare.dataCloudflareAiSearchInstances.DataCloudflareAiSearchInstancesResultPublicEndpointParamsMcpOutputReference.getBooleanAttribute"></a>

```go
func GetBooleanAttribute(terraformAttribute *string) IResolvable
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-cloudflare.dataCloudflareAiSearchInstances.DataCloudflareAiSearchInstancesResultPublicEndpointParamsMcpOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetBooleanMapAttribute` <a name="GetBooleanMapAttribute" id="@cdktn/provider-cloudflare.dataCloudflareAiSearchInstances.DataCloudflareAiSearchInstancesResultPublicEndpointParamsMcpOutputReference.getBooleanMapAttribute"></a>

```go
func GetBooleanMapAttribute(terraformAttribute *string) *map[string]*bool
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-cloudflare.dataCloudflareAiSearchInstances.DataCloudflareAiSearchInstancesResultPublicEndpointParamsMcpOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetListAttribute` <a name="GetListAttribute" id="@cdktn/provider-cloudflare.dataCloudflareAiSearchInstances.DataCloudflareAiSearchInstancesResultPublicEndpointParamsMcpOutputReference.getListAttribute"></a>

```go
func GetListAttribute(terraformAttribute *string) *[]*string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-cloudflare.dataCloudflareAiSearchInstances.DataCloudflareAiSearchInstancesResultPublicEndpointParamsMcpOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberAttribute` <a name="GetNumberAttribute" id="@cdktn/provider-cloudflare.dataCloudflareAiSearchInstances.DataCloudflareAiSearchInstancesResultPublicEndpointParamsMcpOutputReference.getNumberAttribute"></a>

```go
func GetNumberAttribute(terraformAttribute *string) *f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-cloudflare.dataCloudflareAiSearchInstances.DataCloudflareAiSearchInstancesResultPublicEndpointParamsMcpOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberListAttribute` <a name="GetNumberListAttribute" id="@cdktn/provider-cloudflare.dataCloudflareAiSearchInstances.DataCloudflareAiSearchInstancesResultPublicEndpointParamsMcpOutputReference.getNumberListAttribute"></a>

```go
func GetNumberListAttribute(terraformAttribute *string) *[]*f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-cloudflare.dataCloudflareAiSearchInstances.DataCloudflareAiSearchInstancesResultPublicEndpointParamsMcpOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberMapAttribute` <a name="GetNumberMapAttribute" id="@cdktn/provider-cloudflare.dataCloudflareAiSearchInstances.DataCloudflareAiSearchInstancesResultPublicEndpointParamsMcpOutputReference.getNumberMapAttribute"></a>

```go
func GetNumberMapAttribute(terraformAttribute *string) *map[string]*f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-cloudflare.dataCloudflareAiSearchInstances.DataCloudflareAiSearchInstancesResultPublicEndpointParamsMcpOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetStringAttribute` <a name="GetStringAttribute" id="@cdktn/provider-cloudflare.dataCloudflareAiSearchInstances.DataCloudflareAiSearchInstancesResultPublicEndpointParamsMcpOutputReference.getStringAttribute"></a>

```go
func GetStringAttribute(terraformAttribute *string) *string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-cloudflare.dataCloudflareAiSearchInstances.DataCloudflareAiSearchInstancesResultPublicEndpointParamsMcpOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetStringMapAttribute` <a name="GetStringMapAttribute" id="@cdktn/provider-cloudflare.dataCloudflareAiSearchInstances.DataCloudflareAiSearchInstancesResultPublicEndpointParamsMcpOutputReference.getStringMapAttribute"></a>

```go
func GetStringMapAttribute(terraformAttribute *string) *map[string]*string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-cloudflare.dataCloudflareAiSearchInstances.DataCloudflareAiSearchInstancesResultPublicEndpointParamsMcpOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `InterpolationForAttribute` <a name="InterpolationForAttribute" id="@cdktn/provider-cloudflare.dataCloudflareAiSearchInstances.DataCloudflareAiSearchInstancesResultPublicEndpointParamsMcpOutputReference.interpolationForAttribute"></a>

```go
func InterpolationForAttribute(property *string) IResolvable
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktn/provider-cloudflare.dataCloudflareAiSearchInstances.DataCloudflareAiSearchInstancesResultPublicEndpointParamsMcpOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* *string

---

##### `Resolve` <a name="Resolve" id="@cdktn/provider-cloudflare.dataCloudflareAiSearchInstances.DataCloudflareAiSearchInstancesResultPublicEndpointParamsMcpOutputReference.resolve"></a>

```go
func Resolve(_context IResolveContext) interface{}
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktn/provider-cloudflare.dataCloudflareAiSearchInstances.DataCloudflareAiSearchInstancesResultPublicEndpointParamsMcpOutputReference.resolve.parameter._context"></a>

- *Type:* github.com/open-constructs/cdk-terrain-go/cdktn.IResolveContext

---

##### `ToString` <a name="ToString" id="@cdktn/provider-cloudflare.dataCloudflareAiSearchInstances.DataCloudflareAiSearchInstancesResultPublicEndpointParamsMcpOutputReference.toString"></a>

```go
func ToString() *string
```

Return a string representation of this resolvable object.

Returns a reversible string representation.


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-cloudflare.dataCloudflareAiSearchInstances.DataCloudflareAiSearchInstancesResultPublicEndpointParamsMcpOutputReference.property.creationStack">CreationStack</a></code> | <code>*[]*string</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktn/provider-cloudflare.dataCloudflareAiSearchInstances.DataCloudflareAiSearchInstancesResultPublicEndpointParamsMcpOutputReference.property.fqn">Fqn</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktn/provider-cloudflare.dataCloudflareAiSearchInstances.DataCloudflareAiSearchInstancesResultPublicEndpointParamsMcpOutputReference.property.disabled">Disabled</a></code> | <code>github.com/open-constructs/cdk-terrain-go/cdktn.IResolvable</code> | *No description.* |
| <code><a href="#@cdktn/provider-cloudflare.dataCloudflareAiSearchInstances.DataCloudflareAiSearchInstancesResultPublicEndpointParamsMcpOutputReference.property.internalValue">InternalValue</a></code> | <code><a href="#@cdktn/provider-cloudflare.dataCloudflareAiSearchInstances.DataCloudflareAiSearchInstancesResultPublicEndpointParamsMcp">DataCloudflareAiSearchInstancesResultPublicEndpointParamsMcp</a></code> | *No description.* |

---

##### `CreationStack`<sup>Required</sup> <a name="CreationStack" id="@cdktn/provider-cloudflare.dataCloudflareAiSearchInstances.DataCloudflareAiSearchInstancesResultPublicEndpointParamsMcpOutputReference.property.creationStack"></a>

```go
func CreationStack() *[]*string
```

- *Type:* *[]*string

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `Fqn`<sup>Required</sup> <a name="Fqn" id="@cdktn/provider-cloudflare.dataCloudflareAiSearchInstances.DataCloudflareAiSearchInstancesResultPublicEndpointParamsMcpOutputReference.property.fqn"></a>

```go
func Fqn() *string
```

- *Type:* *string

---

##### `Disabled`<sup>Required</sup> <a name="Disabled" id="@cdktn/provider-cloudflare.dataCloudflareAiSearchInstances.DataCloudflareAiSearchInstancesResultPublicEndpointParamsMcpOutputReference.property.disabled"></a>

```go
func Disabled() IResolvable
```

- *Type:* github.com/open-constructs/cdk-terrain-go/cdktn.IResolvable

---

##### `InternalValue`<sup>Optional</sup> <a name="InternalValue" id="@cdktn/provider-cloudflare.dataCloudflareAiSearchInstances.DataCloudflareAiSearchInstancesResultPublicEndpointParamsMcpOutputReference.property.internalValue"></a>

```go
func InternalValue() DataCloudflareAiSearchInstancesResultPublicEndpointParamsMcp
```

- *Type:* <a href="#@cdktn/provider-cloudflare.dataCloudflareAiSearchInstances.DataCloudflareAiSearchInstancesResultPublicEndpointParamsMcp">DataCloudflareAiSearchInstancesResultPublicEndpointParamsMcp</a>

---


### DataCloudflareAiSearchInstancesResultPublicEndpointParamsOutputReference <a name="DataCloudflareAiSearchInstancesResultPublicEndpointParamsOutputReference" id="@cdktn/provider-cloudflare.dataCloudflareAiSearchInstances.DataCloudflareAiSearchInstancesResultPublicEndpointParamsOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktn/provider-cloudflare.dataCloudflareAiSearchInstances.DataCloudflareAiSearchInstancesResultPublicEndpointParamsOutputReference.Initializer"></a>

```go
import "github.com/cdktn-io/cdktn-provider-cloudflare-go/cloudflare/v14/datacloudflareaisearchinstances"

datacloudflareaisearchinstances.NewDataCloudflareAiSearchInstancesResultPublicEndpointParamsOutputReference(terraformResource IInterpolatingParent, terraformAttribute *string) DataCloudflareAiSearchInstancesResultPublicEndpointParamsOutputReference
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-cloudflare.dataCloudflareAiSearchInstances.DataCloudflareAiSearchInstancesResultPublicEndpointParamsOutputReference.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>github.com/open-constructs/cdk-terrain-go/cdktn.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktn/provider-cloudflare.dataCloudflareAiSearchInstances.DataCloudflareAiSearchInstancesResultPublicEndpointParamsOutputReference.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>*string</code> | The attribute on the parent resource this class is referencing. |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktn/provider-cloudflare.dataCloudflareAiSearchInstances.DataCloudflareAiSearchInstancesResultPublicEndpointParamsOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* github.com/open-constructs/cdk-terrain-go/cdktn.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-cloudflare.dataCloudflareAiSearchInstances.DataCloudflareAiSearchInstancesResultPublicEndpointParamsOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* *string

The attribute on the parent resource this class is referencing.

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-cloudflare.dataCloudflareAiSearchInstances.DataCloudflareAiSearchInstancesResultPublicEndpointParamsOutputReference.computeFqn">ComputeFqn</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-cloudflare.dataCloudflareAiSearchInstances.DataCloudflareAiSearchInstancesResultPublicEndpointParamsOutputReference.getAnyMapAttribute">GetAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-cloudflare.dataCloudflareAiSearchInstances.DataCloudflareAiSearchInstancesResultPublicEndpointParamsOutputReference.getBooleanAttribute">GetBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-cloudflare.dataCloudflareAiSearchInstances.DataCloudflareAiSearchInstancesResultPublicEndpointParamsOutputReference.getBooleanMapAttribute">GetBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-cloudflare.dataCloudflareAiSearchInstances.DataCloudflareAiSearchInstancesResultPublicEndpointParamsOutputReference.getListAttribute">GetListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-cloudflare.dataCloudflareAiSearchInstances.DataCloudflareAiSearchInstancesResultPublicEndpointParamsOutputReference.getNumberAttribute">GetNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-cloudflare.dataCloudflareAiSearchInstances.DataCloudflareAiSearchInstancesResultPublicEndpointParamsOutputReference.getNumberListAttribute">GetNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-cloudflare.dataCloudflareAiSearchInstances.DataCloudflareAiSearchInstancesResultPublicEndpointParamsOutputReference.getNumberMapAttribute">GetNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-cloudflare.dataCloudflareAiSearchInstances.DataCloudflareAiSearchInstancesResultPublicEndpointParamsOutputReference.getStringAttribute">GetStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-cloudflare.dataCloudflareAiSearchInstances.DataCloudflareAiSearchInstancesResultPublicEndpointParamsOutputReference.getStringMapAttribute">GetStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-cloudflare.dataCloudflareAiSearchInstances.DataCloudflareAiSearchInstancesResultPublicEndpointParamsOutputReference.interpolationForAttribute">InterpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-cloudflare.dataCloudflareAiSearchInstances.DataCloudflareAiSearchInstancesResultPublicEndpointParamsOutputReference.resolve">Resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktn/provider-cloudflare.dataCloudflareAiSearchInstances.DataCloudflareAiSearchInstancesResultPublicEndpointParamsOutputReference.toString">ToString</a></code> | Return a string representation of this resolvable object. |

---

##### `ComputeFqn` <a name="ComputeFqn" id="@cdktn/provider-cloudflare.dataCloudflareAiSearchInstances.DataCloudflareAiSearchInstancesResultPublicEndpointParamsOutputReference.computeFqn"></a>

```go
func ComputeFqn() *string
```

##### `GetAnyMapAttribute` <a name="GetAnyMapAttribute" id="@cdktn/provider-cloudflare.dataCloudflareAiSearchInstances.DataCloudflareAiSearchInstancesResultPublicEndpointParamsOutputReference.getAnyMapAttribute"></a>

```go
func GetAnyMapAttribute(terraformAttribute *string) *map[string]interface{}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-cloudflare.dataCloudflareAiSearchInstances.DataCloudflareAiSearchInstancesResultPublicEndpointParamsOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetBooleanAttribute` <a name="GetBooleanAttribute" id="@cdktn/provider-cloudflare.dataCloudflareAiSearchInstances.DataCloudflareAiSearchInstancesResultPublicEndpointParamsOutputReference.getBooleanAttribute"></a>

```go
func GetBooleanAttribute(terraformAttribute *string) IResolvable
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-cloudflare.dataCloudflareAiSearchInstances.DataCloudflareAiSearchInstancesResultPublicEndpointParamsOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetBooleanMapAttribute` <a name="GetBooleanMapAttribute" id="@cdktn/provider-cloudflare.dataCloudflareAiSearchInstances.DataCloudflareAiSearchInstancesResultPublicEndpointParamsOutputReference.getBooleanMapAttribute"></a>

```go
func GetBooleanMapAttribute(terraformAttribute *string) *map[string]*bool
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-cloudflare.dataCloudflareAiSearchInstances.DataCloudflareAiSearchInstancesResultPublicEndpointParamsOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetListAttribute` <a name="GetListAttribute" id="@cdktn/provider-cloudflare.dataCloudflareAiSearchInstances.DataCloudflareAiSearchInstancesResultPublicEndpointParamsOutputReference.getListAttribute"></a>

```go
func GetListAttribute(terraformAttribute *string) *[]*string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-cloudflare.dataCloudflareAiSearchInstances.DataCloudflareAiSearchInstancesResultPublicEndpointParamsOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberAttribute` <a name="GetNumberAttribute" id="@cdktn/provider-cloudflare.dataCloudflareAiSearchInstances.DataCloudflareAiSearchInstancesResultPublicEndpointParamsOutputReference.getNumberAttribute"></a>

```go
func GetNumberAttribute(terraformAttribute *string) *f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-cloudflare.dataCloudflareAiSearchInstances.DataCloudflareAiSearchInstancesResultPublicEndpointParamsOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberListAttribute` <a name="GetNumberListAttribute" id="@cdktn/provider-cloudflare.dataCloudflareAiSearchInstances.DataCloudflareAiSearchInstancesResultPublicEndpointParamsOutputReference.getNumberListAttribute"></a>

```go
func GetNumberListAttribute(terraformAttribute *string) *[]*f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-cloudflare.dataCloudflareAiSearchInstances.DataCloudflareAiSearchInstancesResultPublicEndpointParamsOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberMapAttribute` <a name="GetNumberMapAttribute" id="@cdktn/provider-cloudflare.dataCloudflareAiSearchInstances.DataCloudflareAiSearchInstancesResultPublicEndpointParamsOutputReference.getNumberMapAttribute"></a>

```go
func GetNumberMapAttribute(terraformAttribute *string) *map[string]*f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-cloudflare.dataCloudflareAiSearchInstances.DataCloudflareAiSearchInstancesResultPublicEndpointParamsOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetStringAttribute` <a name="GetStringAttribute" id="@cdktn/provider-cloudflare.dataCloudflareAiSearchInstances.DataCloudflareAiSearchInstancesResultPublicEndpointParamsOutputReference.getStringAttribute"></a>

```go
func GetStringAttribute(terraformAttribute *string) *string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-cloudflare.dataCloudflareAiSearchInstances.DataCloudflareAiSearchInstancesResultPublicEndpointParamsOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetStringMapAttribute` <a name="GetStringMapAttribute" id="@cdktn/provider-cloudflare.dataCloudflareAiSearchInstances.DataCloudflareAiSearchInstancesResultPublicEndpointParamsOutputReference.getStringMapAttribute"></a>

```go
func GetStringMapAttribute(terraformAttribute *string) *map[string]*string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-cloudflare.dataCloudflareAiSearchInstances.DataCloudflareAiSearchInstancesResultPublicEndpointParamsOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `InterpolationForAttribute` <a name="InterpolationForAttribute" id="@cdktn/provider-cloudflare.dataCloudflareAiSearchInstances.DataCloudflareAiSearchInstancesResultPublicEndpointParamsOutputReference.interpolationForAttribute"></a>

```go
func InterpolationForAttribute(property *string) IResolvable
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktn/provider-cloudflare.dataCloudflareAiSearchInstances.DataCloudflareAiSearchInstancesResultPublicEndpointParamsOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* *string

---

##### `Resolve` <a name="Resolve" id="@cdktn/provider-cloudflare.dataCloudflareAiSearchInstances.DataCloudflareAiSearchInstancesResultPublicEndpointParamsOutputReference.resolve"></a>

```go
func Resolve(_context IResolveContext) interface{}
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktn/provider-cloudflare.dataCloudflareAiSearchInstances.DataCloudflareAiSearchInstancesResultPublicEndpointParamsOutputReference.resolve.parameter._context"></a>

- *Type:* github.com/open-constructs/cdk-terrain-go/cdktn.IResolveContext

---

##### `ToString` <a name="ToString" id="@cdktn/provider-cloudflare.dataCloudflareAiSearchInstances.DataCloudflareAiSearchInstancesResultPublicEndpointParamsOutputReference.toString"></a>

```go
func ToString() *string
```

Return a string representation of this resolvable object.

Returns a reversible string representation.


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-cloudflare.dataCloudflareAiSearchInstances.DataCloudflareAiSearchInstancesResultPublicEndpointParamsOutputReference.property.creationStack">CreationStack</a></code> | <code>*[]*string</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktn/provider-cloudflare.dataCloudflareAiSearchInstances.DataCloudflareAiSearchInstancesResultPublicEndpointParamsOutputReference.property.fqn">Fqn</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktn/provider-cloudflare.dataCloudflareAiSearchInstances.DataCloudflareAiSearchInstancesResultPublicEndpointParamsOutputReference.property.authorizedHosts">AuthorizedHosts</a></code> | <code>*[]*string</code> | *No description.* |
| <code><a href="#@cdktn/provider-cloudflare.dataCloudflareAiSearchInstances.DataCloudflareAiSearchInstancesResultPublicEndpointParamsOutputReference.property.chatCompletionsEndpoint">ChatCompletionsEndpoint</a></code> | <code><a href="#@cdktn/provider-cloudflare.dataCloudflareAiSearchInstances.DataCloudflareAiSearchInstancesResultPublicEndpointParamsChatCompletionsEndpointOutputReference">DataCloudflareAiSearchInstancesResultPublicEndpointParamsChatCompletionsEndpointOutputReference</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-cloudflare.dataCloudflareAiSearchInstances.DataCloudflareAiSearchInstancesResultPublicEndpointParamsOutputReference.property.enabled">Enabled</a></code> | <code>github.com/open-constructs/cdk-terrain-go/cdktn.IResolvable</code> | *No description.* |
| <code><a href="#@cdktn/provider-cloudflare.dataCloudflareAiSearchInstances.DataCloudflareAiSearchInstancesResultPublicEndpointParamsOutputReference.property.mcp">Mcp</a></code> | <code><a href="#@cdktn/provider-cloudflare.dataCloudflareAiSearchInstances.DataCloudflareAiSearchInstancesResultPublicEndpointParamsMcpOutputReference">DataCloudflareAiSearchInstancesResultPublicEndpointParamsMcpOutputReference</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-cloudflare.dataCloudflareAiSearchInstances.DataCloudflareAiSearchInstancesResultPublicEndpointParamsOutputReference.property.rateLimit">RateLimit</a></code> | <code><a href="#@cdktn/provider-cloudflare.dataCloudflareAiSearchInstances.DataCloudflareAiSearchInstancesResultPublicEndpointParamsRateLimitOutputReference">DataCloudflareAiSearchInstancesResultPublicEndpointParamsRateLimitOutputReference</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-cloudflare.dataCloudflareAiSearchInstances.DataCloudflareAiSearchInstancesResultPublicEndpointParamsOutputReference.property.searchEndpoint">SearchEndpoint</a></code> | <code><a href="#@cdktn/provider-cloudflare.dataCloudflareAiSearchInstances.DataCloudflareAiSearchInstancesResultPublicEndpointParamsSearchEndpointOutputReference">DataCloudflareAiSearchInstancesResultPublicEndpointParamsSearchEndpointOutputReference</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-cloudflare.dataCloudflareAiSearchInstances.DataCloudflareAiSearchInstancesResultPublicEndpointParamsOutputReference.property.internalValue">InternalValue</a></code> | <code><a href="#@cdktn/provider-cloudflare.dataCloudflareAiSearchInstances.DataCloudflareAiSearchInstancesResultPublicEndpointParams">DataCloudflareAiSearchInstancesResultPublicEndpointParams</a></code> | *No description.* |

---

##### `CreationStack`<sup>Required</sup> <a name="CreationStack" id="@cdktn/provider-cloudflare.dataCloudflareAiSearchInstances.DataCloudflareAiSearchInstancesResultPublicEndpointParamsOutputReference.property.creationStack"></a>

```go
func CreationStack() *[]*string
```

- *Type:* *[]*string

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `Fqn`<sup>Required</sup> <a name="Fqn" id="@cdktn/provider-cloudflare.dataCloudflareAiSearchInstances.DataCloudflareAiSearchInstancesResultPublicEndpointParamsOutputReference.property.fqn"></a>

```go
func Fqn() *string
```

- *Type:* *string

---

##### `AuthorizedHosts`<sup>Required</sup> <a name="AuthorizedHosts" id="@cdktn/provider-cloudflare.dataCloudflareAiSearchInstances.DataCloudflareAiSearchInstancesResultPublicEndpointParamsOutputReference.property.authorizedHosts"></a>

```go
func AuthorizedHosts() *[]*string
```

- *Type:* *[]*string

---

##### `ChatCompletionsEndpoint`<sup>Required</sup> <a name="ChatCompletionsEndpoint" id="@cdktn/provider-cloudflare.dataCloudflareAiSearchInstances.DataCloudflareAiSearchInstancesResultPublicEndpointParamsOutputReference.property.chatCompletionsEndpoint"></a>

```go
func ChatCompletionsEndpoint() DataCloudflareAiSearchInstancesResultPublicEndpointParamsChatCompletionsEndpointOutputReference
```

- *Type:* <a href="#@cdktn/provider-cloudflare.dataCloudflareAiSearchInstances.DataCloudflareAiSearchInstancesResultPublicEndpointParamsChatCompletionsEndpointOutputReference">DataCloudflareAiSearchInstancesResultPublicEndpointParamsChatCompletionsEndpointOutputReference</a>

---

##### `Enabled`<sup>Required</sup> <a name="Enabled" id="@cdktn/provider-cloudflare.dataCloudflareAiSearchInstances.DataCloudflareAiSearchInstancesResultPublicEndpointParamsOutputReference.property.enabled"></a>

```go
func Enabled() IResolvable
```

- *Type:* github.com/open-constructs/cdk-terrain-go/cdktn.IResolvable

---

##### `Mcp`<sup>Required</sup> <a name="Mcp" id="@cdktn/provider-cloudflare.dataCloudflareAiSearchInstances.DataCloudflareAiSearchInstancesResultPublicEndpointParamsOutputReference.property.mcp"></a>

```go
func Mcp() DataCloudflareAiSearchInstancesResultPublicEndpointParamsMcpOutputReference
```

- *Type:* <a href="#@cdktn/provider-cloudflare.dataCloudflareAiSearchInstances.DataCloudflareAiSearchInstancesResultPublicEndpointParamsMcpOutputReference">DataCloudflareAiSearchInstancesResultPublicEndpointParamsMcpOutputReference</a>

---

##### `RateLimit`<sup>Required</sup> <a name="RateLimit" id="@cdktn/provider-cloudflare.dataCloudflareAiSearchInstances.DataCloudflareAiSearchInstancesResultPublicEndpointParamsOutputReference.property.rateLimit"></a>

```go
func RateLimit() DataCloudflareAiSearchInstancesResultPublicEndpointParamsRateLimitOutputReference
```

- *Type:* <a href="#@cdktn/provider-cloudflare.dataCloudflareAiSearchInstances.DataCloudflareAiSearchInstancesResultPublicEndpointParamsRateLimitOutputReference">DataCloudflareAiSearchInstancesResultPublicEndpointParamsRateLimitOutputReference</a>

---

##### `SearchEndpoint`<sup>Required</sup> <a name="SearchEndpoint" id="@cdktn/provider-cloudflare.dataCloudflareAiSearchInstances.DataCloudflareAiSearchInstancesResultPublicEndpointParamsOutputReference.property.searchEndpoint"></a>

```go
func SearchEndpoint() DataCloudflareAiSearchInstancesResultPublicEndpointParamsSearchEndpointOutputReference
```

- *Type:* <a href="#@cdktn/provider-cloudflare.dataCloudflareAiSearchInstances.DataCloudflareAiSearchInstancesResultPublicEndpointParamsSearchEndpointOutputReference">DataCloudflareAiSearchInstancesResultPublicEndpointParamsSearchEndpointOutputReference</a>

---

##### `InternalValue`<sup>Optional</sup> <a name="InternalValue" id="@cdktn/provider-cloudflare.dataCloudflareAiSearchInstances.DataCloudflareAiSearchInstancesResultPublicEndpointParamsOutputReference.property.internalValue"></a>

```go
func InternalValue() DataCloudflareAiSearchInstancesResultPublicEndpointParams
```

- *Type:* <a href="#@cdktn/provider-cloudflare.dataCloudflareAiSearchInstances.DataCloudflareAiSearchInstancesResultPublicEndpointParams">DataCloudflareAiSearchInstancesResultPublicEndpointParams</a>

---


### DataCloudflareAiSearchInstancesResultPublicEndpointParamsRateLimitOutputReference <a name="DataCloudflareAiSearchInstancesResultPublicEndpointParamsRateLimitOutputReference" id="@cdktn/provider-cloudflare.dataCloudflareAiSearchInstances.DataCloudflareAiSearchInstancesResultPublicEndpointParamsRateLimitOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktn/provider-cloudflare.dataCloudflareAiSearchInstances.DataCloudflareAiSearchInstancesResultPublicEndpointParamsRateLimitOutputReference.Initializer"></a>

```go
import "github.com/cdktn-io/cdktn-provider-cloudflare-go/cloudflare/v14/datacloudflareaisearchinstances"

datacloudflareaisearchinstances.NewDataCloudflareAiSearchInstancesResultPublicEndpointParamsRateLimitOutputReference(terraformResource IInterpolatingParent, terraformAttribute *string) DataCloudflareAiSearchInstancesResultPublicEndpointParamsRateLimitOutputReference
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-cloudflare.dataCloudflareAiSearchInstances.DataCloudflareAiSearchInstancesResultPublicEndpointParamsRateLimitOutputReference.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>github.com/open-constructs/cdk-terrain-go/cdktn.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktn/provider-cloudflare.dataCloudflareAiSearchInstances.DataCloudflareAiSearchInstancesResultPublicEndpointParamsRateLimitOutputReference.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>*string</code> | The attribute on the parent resource this class is referencing. |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktn/provider-cloudflare.dataCloudflareAiSearchInstances.DataCloudflareAiSearchInstancesResultPublicEndpointParamsRateLimitOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* github.com/open-constructs/cdk-terrain-go/cdktn.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-cloudflare.dataCloudflareAiSearchInstances.DataCloudflareAiSearchInstancesResultPublicEndpointParamsRateLimitOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* *string

The attribute on the parent resource this class is referencing.

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-cloudflare.dataCloudflareAiSearchInstances.DataCloudflareAiSearchInstancesResultPublicEndpointParamsRateLimitOutputReference.computeFqn">ComputeFqn</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-cloudflare.dataCloudflareAiSearchInstances.DataCloudflareAiSearchInstancesResultPublicEndpointParamsRateLimitOutputReference.getAnyMapAttribute">GetAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-cloudflare.dataCloudflareAiSearchInstances.DataCloudflareAiSearchInstancesResultPublicEndpointParamsRateLimitOutputReference.getBooleanAttribute">GetBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-cloudflare.dataCloudflareAiSearchInstances.DataCloudflareAiSearchInstancesResultPublicEndpointParamsRateLimitOutputReference.getBooleanMapAttribute">GetBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-cloudflare.dataCloudflareAiSearchInstances.DataCloudflareAiSearchInstancesResultPublicEndpointParamsRateLimitOutputReference.getListAttribute">GetListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-cloudflare.dataCloudflareAiSearchInstances.DataCloudflareAiSearchInstancesResultPublicEndpointParamsRateLimitOutputReference.getNumberAttribute">GetNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-cloudflare.dataCloudflareAiSearchInstances.DataCloudflareAiSearchInstancesResultPublicEndpointParamsRateLimitOutputReference.getNumberListAttribute">GetNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-cloudflare.dataCloudflareAiSearchInstances.DataCloudflareAiSearchInstancesResultPublicEndpointParamsRateLimitOutputReference.getNumberMapAttribute">GetNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-cloudflare.dataCloudflareAiSearchInstances.DataCloudflareAiSearchInstancesResultPublicEndpointParamsRateLimitOutputReference.getStringAttribute">GetStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-cloudflare.dataCloudflareAiSearchInstances.DataCloudflareAiSearchInstancesResultPublicEndpointParamsRateLimitOutputReference.getStringMapAttribute">GetStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-cloudflare.dataCloudflareAiSearchInstances.DataCloudflareAiSearchInstancesResultPublicEndpointParamsRateLimitOutputReference.interpolationForAttribute">InterpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-cloudflare.dataCloudflareAiSearchInstances.DataCloudflareAiSearchInstancesResultPublicEndpointParamsRateLimitOutputReference.resolve">Resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktn/provider-cloudflare.dataCloudflareAiSearchInstances.DataCloudflareAiSearchInstancesResultPublicEndpointParamsRateLimitOutputReference.toString">ToString</a></code> | Return a string representation of this resolvable object. |

---

##### `ComputeFqn` <a name="ComputeFqn" id="@cdktn/provider-cloudflare.dataCloudflareAiSearchInstances.DataCloudflareAiSearchInstancesResultPublicEndpointParamsRateLimitOutputReference.computeFqn"></a>

```go
func ComputeFqn() *string
```

##### `GetAnyMapAttribute` <a name="GetAnyMapAttribute" id="@cdktn/provider-cloudflare.dataCloudflareAiSearchInstances.DataCloudflareAiSearchInstancesResultPublicEndpointParamsRateLimitOutputReference.getAnyMapAttribute"></a>

```go
func GetAnyMapAttribute(terraformAttribute *string) *map[string]interface{}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-cloudflare.dataCloudflareAiSearchInstances.DataCloudflareAiSearchInstancesResultPublicEndpointParamsRateLimitOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetBooleanAttribute` <a name="GetBooleanAttribute" id="@cdktn/provider-cloudflare.dataCloudflareAiSearchInstances.DataCloudflareAiSearchInstancesResultPublicEndpointParamsRateLimitOutputReference.getBooleanAttribute"></a>

```go
func GetBooleanAttribute(terraformAttribute *string) IResolvable
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-cloudflare.dataCloudflareAiSearchInstances.DataCloudflareAiSearchInstancesResultPublicEndpointParamsRateLimitOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetBooleanMapAttribute` <a name="GetBooleanMapAttribute" id="@cdktn/provider-cloudflare.dataCloudflareAiSearchInstances.DataCloudflareAiSearchInstancesResultPublicEndpointParamsRateLimitOutputReference.getBooleanMapAttribute"></a>

```go
func GetBooleanMapAttribute(terraformAttribute *string) *map[string]*bool
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-cloudflare.dataCloudflareAiSearchInstances.DataCloudflareAiSearchInstancesResultPublicEndpointParamsRateLimitOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetListAttribute` <a name="GetListAttribute" id="@cdktn/provider-cloudflare.dataCloudflareAiSearchInstances.DataCloudflareAiSearchInstancesResultPublicEndpointParamsRateLimitOutputReference.getListAttribute"></a>

```go
func GetListAttribute(terraformAttribute *string) *[]*string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-cloudflare.dataCloudflareAiSearchInstances.DataCloudflareAiSearchInstancesResultPublicEndpointParamsRateLimitOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberAttribute` <a name="GetNumberAttribute" id="@cdktn/provider-cloudflare.dataCloudflareAiSearchInstances.DataCloudflareAiSearchInstancesResultPublicEndpointParamsRateLimitOutputReference.getNumberAttribute"></a>

```go
func GetNumberAttribute(terraformAttribute *string) *f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-cloudflare.dataCloudflareAiSearchInstances.DataCloudflareAiSearchInstancesResultPublicEndpointParamsRateLimitOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberListAttribute` <a name="GetNumberListAttribute" id="@cdktn/provider-cloudflare.dataCloudflareAiSearchInstances.DataCloudflareAiSearchInstancesResultPublicEndpointParamsRateLimitOutputReference.getNumberListAttribute"></a>

```go
func GetNumberListAttribute(terraformAttribute *string) *[]*f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-cloudflare.dataCloudflareAiSearchInstances.DataCloudflareAiSearchInstancesResultPublicEndpointParamsRateLimitOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberMapAttribute` <a name="GetNumberMapAttribute" id="@cdktn/provider-cloudflare.dataCloudflareAiSearchInstances.DataCloudflareAiSearchInstancesResultPublicEndpointParamsRateLimitOutputReference.getNumberMapAttribute"></a>

```go
func GetNumberMapAttribute(terraformAttribute *string) *map[string]*f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-cloudflare.dataCloudflareAiSearchInstances.DataCloudflareAiSearchInstancesResultPublicEndpointParamsRateLimitOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetStringAttribute` <a name="GetStringAttribute" id="@cdktn/provider-cloudflare.dataCloudflareAiSearchInstances.DataCloudflareAiSearchInstancesResultPublicEndpointParamsRateLimitOutputReference.getStringAttribute"></a>

```go
func GetStringAttribute(terraformAttribute *string) *string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-cloudflare.dataCloudflareAiSearchInstances.DataCloudflareAiSearchInstancesResultPublicEndpointParamsRateLimitOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetStringMapAttribute` <a name="GetStringMapAttribute" id="@cdktn/provider-cloudflare.dataCloudflareAiSearchInstances.DataCloudflareAiSearchInstancesResultPublicEndpointParamsRateLimitOutputReference.getStringMapAttribute"></a>

```go
func GetStringMapAttribute(terraformAttribute *string) *map[string]*string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-cloudflare.dataCloudflareAiSearchInstances.DataCloudflareAiSearchInstancesResultPublicEndpointParamsRateLimitOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `InterpolationForAttribute` <a name="InterpolationForAttribute" id="@cdktn/provider-cloudflare.dataCloudflareAiSearchInstances.DataCloudflareAiSearchInstancesResultPublicEndpointParamsRateLimitOutputReference.interpolationForAttribute"></a>

```go
func InterpolationForAttribute(property *string) IResolvable
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktn/provider-cloudflare.dataCloudflareAiSearchInstances.DataCloudflareAiSearchInstancesResultPublicEndpointParamsRateLimitOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* *string

---

##### `Resolve` <a name="Resolve" id="@cdktn/provider-cloudflare.dataCloudflareAiSearchInstances.DataCloudflareAiSearchInstancesResultPublicEndpointParamsRateLimitOutputReference.resolve"></a>

```go
func Resolve(_context IResolveContext) interface{}
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktn/provider-cloudflare.dataCloudflareAiSearchInstances.DataCloudflareAiSearchInstancesResultPublicEndpointParamsRateLimitOutputReference.resolve.parameter._context"></a>

- *Type:* github.com/open-constructs/cdk-terrain-go/cdktn.IResolveContext

---

##### `ToString` <a name="ToString" id="@cdktn/provider-cloudflare.dataCloudflareAiSearchInstances.DataCloudflareAiSearchInstancesResultPublicEndpointParamsRateLimitOutputReference.toString"></a>

```go
func ToString() *string
```

Return a string representation of this resolvable object.

Returns a reversible string representation.


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-cloudflare.dataCloudflareAiSearchInstances.DataCloudflareAiSearchInstancesResultPublicEndpointParamsRateLimitOutputReference.property.creationStack">CreationStack</a></code> | <code>*[]*string</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktn/provider-cloudflare.dataCloudflareAiSearchInstances.DataCloudflareAiSearchInstancesResultPublicEndpointParamsRateLimitOutputReference.property.fqn">Fqn</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktn/provider-cloudflare.dataCloudflareAiSearchInstances.DataCloudflareAiSearchInstancesResultPublicEndpointParamsRateLimitOutputReference.property.periodMs">PeriodMs</a></code> | <code>*f64</code> | *No description.* |
| <code><a href="#@cdktn/provider-cloudflare.dataCloudflareAiSearchInstances.DataCloudflareAiSearchInstancesResultPublicEndpointParamsRateLimitOutputReference.property.requests">Requests</a></code> | <code>*f64</code> | *No description.* |
| <code><a href="#@cdktn/provider-cloudflare.dataCloudflareAiSearchInstances.DataCloudflareAiSearchInstancesResultPublicEndpointParamsRateLimitOutputReference.property.technique">Technique</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktn/provider-cloudflare.dataCloudflareAiSearchInstances.DataCloudflareAiSearchInstancesResultPublicEndpointParamsRateLimitOutputReference.property.internalValue">InternalValue</a></code> | <code><a href="#@cdktn/provider-cloudflare.dataCloudflareAiSearchInstances.DataCloudflareAiSearchInstancesResultPublicEndpointParamsRateLimit">DataCloudflareAiSearchInstancesResultPublicEndpointParamsRateLimit</a></code> | *No description.* |

---

##### `CreationStack`<sup>Required</sup> <a name="CreationStack" id="@cdktn/provider-cloudflare.dataCloudflareAiSearchInstances.DataCloudflareAiSearchInstancesResultPublicEndpointParamsRateLimitOutputReference.property.creationStack"></a>

```go
func CreationStack() *[]*string
```

- *Type:* *[]*string

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `Fqn`<sup>Required</sup> <a name="Fqn" id="@cdktn/provider-cloudflare.dataCloudflareAiSearchInstances.DataCloudflareAiSearchInstancesResultPublicEndpointParamsRateLimitOutputReference.property.fqn"></a>

```go
func Fqn() *string
```

- *Type:* *string

---

##### `PeriodMs`<sup>Required</sup> <a name="PeriodMs" id="@cdktn/provider-cloudflare.dataCloudflareAiSearchInstances.DataCloudflareAiSearchInstancesResultPublicEndpointParamsRateLimitOutputReference.property.periodMs"></a>

```go
func PeriodMs() *f64
```

- *Type:* *f64

---

##### `Requests`<sup>Required</sup> <a name="Requests" id="@cdktn/provider-cloudflare.dataCloudflareAiSearchInstances.DataCloudflareAiSearchInstancesResultPublicEndpointParamsRateLimitOutputReference.property.requests"></a>

```go
func Requests() *f64
```

- *Type:* *f64

---

##### `Technique`<sup>Required</sup> <a name="Technique" id="@cdktn/provider-cloudflare.dataCloudflareAiSearchInstances.DataCloudflareAiSearchInstancesResultPublicEndpointParamsRateLimitOutputReference.property.technique"></a>

```go
func Technique() *string
```

- *Type:* *string

---

##### `InternalValue`<sup>Optional</sup> <a name="InternalValue" id="@cdktn/provider-cloudflare.dataCloudflareAiSearchInstances.DataCloudflareAiSearchInstancesResultPublicEndpointParamsRateLimitOutputReference.property.internalValue"></a>

```go
func InternalValue() DataCloudflareAiSearchInstancesResultPublicEndpointParamsRateLimit
```

- *Type:* <a href="#@cdktn/provider-cloudflare.dataCloudflareAiSearchInstances.DataCloudflareAiSearchInstancesResultPublicEndpointParamsRateLimit">DataCloudflareAiSearchInstancesResultPublicEndpointParamsRateLimit</a>

---


### DataCloudflareAiSearchInstancesResultPublicEndpointParamsSearchEndpointOutputReference <a name="DataCloudflareAiSearchInstancesResultPublicEndpointParamsSearchEndpointOutputReference" id="@cdktn/provider-cloudflare.dataCloudflareAiSearchInstances.DataCloudflareAiSearchInstancesResultPublicEndpointParamsSearchEndpointOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktn/provider-cloudflare.dataCloudflareAiSearchInstances.DataCloudflareAiSearchInstancesResultPublicEndpointParamsSearchEndpointOutputReference.Initializer"></a>

```go
import "github.com/cdktn-io/cdktn-provider-cloudflare-go/cloudflare/v14/datacloudflareaisearchinstances"

datacloudflareaisearchinstances.NewDataCloudflareAiSearchInstancesResultPublicEndpointParamsSearchEndpointOutputReference(terraformResource IInterpolatingParent, terraformAttribute *string) DataCloudflareAiSearchInstancesResultPublicEndpointParamsSearchEndpointOutputReference
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-cloudflare.dataCloudflareAiSearchInstances.DataCloudflareAiSearchInstancesResultPublicEndpointParamsSearchEndpointOutputReference.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>github.com/open-constructs/cdk-terrain-go/cdktn.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktn/provider-cloudflare.dataCloudflareAiSearchInstances.DataCloudflareAiSearchInstancesResultPublicEndpointParamsSearchEndpointOutputReference.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>*string</code> | The attribute on the parent resource this class is referencing. |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktn/provider-cloudflare.dataCloudflareAiSearchInstances.DataCloudflareAiSearchInstancesResultPublicEndpointParamsSearchEndpointOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* github.com/open-constructs/cdk-terrain-go/cdktn.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-cloudflare.dataCloudflareAiSearchInstances.DataCloudflareAiSearchInstancesResultPublicEndpointParamsSearchEndpointOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* *string

The attribute on the parent resource this class is referencing.

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-cloudflare.dataCloudflareAiSearchInstances.DataCloudflareAiSearchInstancesResultPublicEndpointParamsSearchEndpointOutputReference.computeFqn">ComputeFqn</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-cloudflare.dataCloudflareAiSearchInstances.DataCloudflareAiSearchInstancesResultPublicEndpointParamsSearchEndpointOutputReference.getAnyMapAttribute">GetAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-cloudflare.dataCloudflareAiSearchInstances.DataCloudflareAiSearchInstancesResultPublicEndpointParamsSearchEndpointOutputReference.getBooleanAttribute">GetBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-cloudflare.dataCloudflareAiSearchInstances.DataCloudflareAiSearchInstancesResultPublicEndpointParamsSearchEndpointOutputReference.getBooleanMapAttribute">GetBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-cloudflare.dataCloudflareAiSearchInstances.DataCloudflareAiSearchInstancesResultPublicEndpointParamsSearchEndpointOutputReference.getListAttribute">GetListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-cloudflare.dataCloudflareAiSearchInstances.DataCloudflareAiSearchInstancesResultPublicEndpointParamsSearchEndpointOutputReference.getNumberAttribute">GetNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-cloudflare.dataCloudflareAiSearchInstances.DataCloudflareAiSearchInstancesResultPublicEndpointParamsSearchEndpointOutputReference.getNumberListAttribute">GetNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-cloudflare.dataCloudflareAiSearchInstances.DataCloudflareAiSearchInstancesResultPublicEndpointParamsSearchEndpointOutputReference.getNumberMapAttribute">GetNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-cloudflare.dataCloudflareAiSearchInstances.DataCloudflareAiSearchInstancesResultPublicEndpointParamsSearchEndpointOutputReference.getStringAttribute">GetStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-cloudflare.dataCloudflareAiSearchInstances.DataCloudflareAiSearchInstancesResultPublicEndpointParamsSearchEndpointOutputReference.getStringMapAttribute">GetStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-cloudflare.dataCloudflareAiSearchInstances.DataCloudflareAiSearchInstancesResultPublicEndpointParamsSearchEndpointOutputReference.interpolationForAttribute">InterpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-cloudflare.dataCloudflareAiSearchInstances.DataCloudflareAiSearchInstancesResultPublicEndpointParamsSearchEndpointOutputReference.resolve">Resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktn/provider-cloudflare.dataCloudflareAiSearchInstances.DataCloudflareAiSearchInstancesResultPublicEndpointParamsSearchEndpointOutputReference.toString">ToString</a></code> | Return a string representation of this resolvable object. |

---

##### `ComputeFqn` <a name="ComputeFqn" id="@cdktn/provider-cloudflare.dataCloudflareAiSearchInstances.DataCloudflareAiSearchInstancesResultPublicEndpointParamsSearchEndpointOutputReference.computeFqn"></a>

```go
func ComputeFqn() *string
```

##### `GetAnyMapAttribute` <a name="GetAnyMapAttribute" id="@cdktn/provider-cloudflare.dataCloudflareAiSearchInstances.DataCloudflareAiSearchInstancesResultPublicEndpointParamsSearchEndpointOutputReference.getAnyMapAttribute"></a>

```go
func GetAnyMapAttribute(terraformAttribute *string) *map[string]interface{}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-cloudflare.dataCloudflareAiSearchInstances.DataCloudflareAiSearchInstancesResultPublicEndpointParamsSearchEndpointOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetBooleanAttribute` <a name="GetBooleanAttribute" id="@cdktn/provider-cloudflare.dataCloudflareAiSearchInstances.DataCloudflareAiSearchInstancesResultPublicEndpointParamsSearchEndpointOutputReference.getBooleanAttribute"></a>

```go
func GetBooleanAttribute(terraformAttribute *string) IResolvable
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-cloudflare.dataCloudflareAiSearchInstances.DataCloudflareAiSearchInstancesResultPublicEndpointParamsSearchEndpointOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetBooleanMapAttribute` <a name="GetBooleanMapAttribute" id="@cdktn/provider-cloudflare.dataCloudflareAiSearchInstances.DataCloudflareAiSearchInstancesResultPublicEndpointParamsSearchEndpointOutputReference.getBooleanMapAttribute"></a>

```go
func GetBooleanMapAttribute(terraformAttribute *string) *map[string]*bool
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-cloudflare.dataCloudflareAiSearchInstances.DataCloudflareAiSearchInstancesResultPublicEndpointParamsSearchEndpointOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetListAttribute` <a name="GetListAttribute" id="@cdktn/provider-cloudflare.dataCloudflareAiSearchInstances.DataCloudflareAiSearchInstancesResultPublicEndpointParamsSearchEndpointOutputReference.getListAttribute"></a>

```go
func GetListAttribute(terraformAttribute *string) *[]*string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-cloudflare.dataCloudflareAiSearchInstances.DataCloudflareAiSearchInstancesResultPublicEndpointParamsSearchEndpointOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberAttribute` <a name="GetNumberAttribute" id="@cdktn/provider-cloudflare.dataCloudflareAiSearchInstances.DataCloudflareAiSearchInstancesResultPublicEndpointParamsSearchEndpointOutputReference.getNumberAttribute"></a>

```go
func GetNumberAttribute(terraformAttribute *string) *f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-cloudflare.dataCloudflareAiSearchInstances.DataCloudflareAiSearchInstancesResultPublicEndpointParamsSearchEndpointOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberListAttribute` <a name="GetNumberListAttribute" id="@cdktn/provider-cloudflare.dataCloudflareAiSearchInstances.DataCloudflareAiSearchInstancesResultPublicEndpointParamsSearchEndpointOutputReference.getNumberListAttribute"></a>

```go
func GetNumberListAttribute(terraformAttribute *string) *[]*f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-cloudflare.dataCloudflareAiSearchInstances.DataCloudflareAiSearchInstancesResultPublicEndpointParamsSearchEndpointOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberMapAttribute` <a name="GetNumberMapAttribute" id="@cdktn/provider-cloudflare.dataCloudflareAiSearchInstances.DataCloudflareAiSearchInstancesResultPublicEndpointParamsSearchEndpointOutputReference.getNumberMapAttribute"></a>

```go
func GetNumberMapAttribute(terraformAttribute *string) *map[string]*f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-cloudflare.dataCloudflareAiSearchInstances.DataCloudflareAiSearchInstancesResultPublicEndpointParamsSearchEndpointOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetStringAttribute` <a name="GetStringAttribute" id="@cdktn/provider-cloudflare.dataCloudflareAiSearchInstances.DataCloudflareAiSearchInstancesResultPublicEndpointParamsSearchEndpointOutputReference.getStringAttribute"></a>

```go
func GetStringAttribute(terraformAttribute *string) *string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-cloudflare.dataCloudflareAiSearchInstances.DataCloudflareAiSearchInstancesResultPublicEndpointParamsSearchEndpointOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetStringMapAttribute` <a name="GetStringMapAttribute" id="@cdktn/provider-cloudflare.dataCloudflareAiSearchInstances.DataCloudflareAiSearchInstancesResultPublicEndpointParamsSearchEndpointOutputReference.getStringMapAttribute"></a>

```go
func GetStringMapAttribute(terraformAttribute *string) *map[string]*string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-cloudflare.dataCloudflareAiSearchInstances.DataCloudflareAiSearchInstancesResultPublicEndpointParamsSearchEndpointOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `InterpolationForAttribute` <a name="InterpolationForAttribute" id="@cdktn/provider-cloudflare.dataCloudflareAiSearchInstances.DataCloudflareAiSearchInstancesResultPublicEndpointParamsSearchEndpointOutputReference.interpolationForAttribute"></a>

```go
func InterpolationForAttribute(property *string) IResolvable
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktn/provider-cloudflare.dataCloudflareAiSearchInstances.DataCloudflareAiSearchInstancesResultPublicEndpointParamsSearchEndpointOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* *string

---

##### `Resolve` <a name="Resolve" id="@cdktn/provider-cloudflare.dataCloudflareAiSearchInstances.DataCloudflareAiSearchInstancesResultPublicEndpointParamsSearchEndpointOutputReference.resolve"></a>

```go
func Resolve(_context IResolveContext) interface{}
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktn/provider-cloudflare.dataCloudflareAiSearchInstances.DataCloudflareAiSearchInstancesResultPublicEndpointParamsSearchEndpointOutputReference.resolve.parameter._context"></a>

- *Type:* github.com/open-constructs/cdk-terrain-go/cdktn.IResolveContext

---

##### `ToString` <a name="ToString" id="@cdktn/provider-cloudflare.dataCloudflareAiSearchInstances.DataCloudflareAiSearchInstancesResultPublicEndpointParamsSearchEndpointOutputReference.toString"></a>

```go
func ToString() *string
```

Return a string representation of this resolvable object.

Returns a reversible string representation.


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-cloudflare.dataCloudflareAiSearchInstances.DataCloudflareAiSearchInstancesResultPublicEndpointParamsSearchEndpointOutputReference.property.creationStack">CreationStack</a></code> | <code>*[]*string</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktn/provider-cloudflare.dataCloudflareAiSearchInstances.DataCloudflareAiSearchInstancesResultPublicEndpointParamsSearchEndpointOutputReference.property.fqn">Fqn</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktn/provider-cloudflare.dataCloudflareAiSearchInstances.DataCloudflareAiSearchInstancesResultPublicEndpointParamsSearchEndpointOutputReference.property.disabled">Disabled</a></code> | <code>github.com/open-constructs/cdk-terrain-go/cdktn.IResolvable</code> | *No description.* |
| <code><a href="#@cdktn/provider-cloudflare.dataCloudflareAiSearchInstances.DataCloudflareAiSearchInstancesResultPublicEndpointParamsSearchEndpointOutputReference.property.internalValue">InternalValue</a></code> | <code><a href="#@cdktn/provider-cloudflare.dataCloudflareAiSearchInstances.DataCloudflareAiSearchInstancesResultPublicEndpointParamsSearchEndpoint">DataCloudflareAiSearchInstancesResultPublicEndpointParamsSearchEndpoint</a></code> | *No description.* |

---

##### `CreationStack`<sup>Required</sup> <a name="CreationStack" id="@cdktn/provider-cloudflare.dataCloudflareAiSearchInstances.DataCloudflareAiSearchInstancesResultPublicEndpointParamsSearchEndpointOutputReference.property.creationStack"></a>

```go
func CreationStack() *[]*string
```

- *Type:* *[]*string

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `Fqn`<sup>Required</sup> <a name="Fqn" id="@cdktn/provider-cloudflare.dataCloudflareAiSearchInstances.DataCloudflareAiSearchInstancesResultPublicEndpointParamsSearchEndpointOutputReference.property.fqn"></a>

```go
func Fqn() *string
```

- *Type:* *string

---

##### `Disabled`<sup>Required</sup> <a name="Disabled" id="@cdktn/provider-cloudflare.dataCloudflareAiSearchInstances.DataCloudflareAiSearchInstancesResultPublicEndpointParamsSearchEndpointOutputReference.property.disabled"></a>

```go
func Disabled() IResolvable
```

- *Type:* github.com/open-constructs/cdk-terrain-go/cdktn.IResolvable

---

##### `InternalValue`<sup>Optional</sup> <a name="InternalValue" id="@cdktn/provider-cloudflare.dataCloudflareAiSearchInstances.DataCloudflareAiSearchInstancesResultPublicEndpointParamsSearchEndpointOutputReference.property.internalValue"></a>

```go
func InternalValue() DataCloudflareAiSearchInstancesResultPublicEndpointParamsSearchEndpoint
```

- *Type:* <a href="#@cdktn/provider-cloudflare.dataCloudflareAiSearchInstances.DataCloudflareAiSearchInstancesResultPublicEndpointParamsSearchEndpoint">DataCloudflareAiSearchInstancesResultPublicEndpointParamsSearchEndpoint</a>

---


### DataCloudflareAiSearchInstancesResultSourceParamsOutputReference <a name="DataCloudflareAiSearchInstancesResultSourceParamsOutputReference" id="@cdktn/provider-cloudflare.dataCloudflareAiSearchInstances.DataCloudflareAiSearchInstancesResultSourceParamsOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktn/provider-cloudflare.dataCloudflareAiSearchInstances.DataCloudflareAiSearchInstancesResultSourceParamsOutputReference.Initializer"></a>

```go
import "github.com/cdktn-io/cdktn-provider-cloudflare-go/cloudflare/v14/datacloudflareaisearchinstances"

datacloudflareaisearchinstances.NewDataCloudflareAiSearchInstancesResultSourceParamsOutputReference(terraformResource IInterpolatingParent, terraformAttribute *string) DataCloudflareAiSearchInstancesResultSourceParamsOutputReference
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-cloudflare.dataCloudflareAiSearchInstances.DataCloudflareAiSearchInstancesResultSourceParamsOutputReference.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>github.com/open-constructs/cdk-terrain-go/cdktn.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktn/provider-cloudflare.dataCloudflareAiSearchInstances.DataCloudflareAiSearchInstancesResultSourceParamsOutputReference.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>*string</code> | The attribute on the parent resource this class is referencing. |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktn/provider-cloudflare.dataCloudflareAiSearchInstances.DataCloudflareAiSearchInstancesResultSourceParamsOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* github.com/open-constructs/cdk-terrain-go/cdktn.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-cloudflare.dataCloudflareAiSearchInstances.DataCloudflareAiSearchInstancesResultSourceParamsOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* *string

The attribute on the parent resource this class is referencing.

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-cloudflare.dataCloudflareAiSearchInstances.DataCloudflareAiSearchInstancesResultSourceParamsOutputReference.computeFqn">ComputeFqn</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-cloudflare.dataCloudflareAiSearchInstances.DataCloudflareAiSearchInstancesResultSourceParamsOutputReference.getAnyMapAttribute">GetAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-cloudflare.dataCloudflareAiSearchInstances.DataCloudflareAiSearchInstancesResultSourceParamsOutputReference.getBooleanAttribute">GetBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-cloudflare.dataCloudflareAiSearchInstances.DataCloudflareAiSearchInstancesResultSourceParamsOutputReference.getBooleanMapAttribute">GetBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-cloudflare.dataCloudflareAiSearchInstances.DataCloudflareAiSearchInstancesResultSourceParamsOutputReference.getListAttribute">GetListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-cloudflare.dataCloudflareAiSearchInstances.DataCloudflareAiSearchInstancesResultSourceParamsOutputReference.getNumberAttribute">GetNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-cloudflare.dataCloudflareAiSearchInstances.DataCloudflareAiSearchInstancesResultSourceParamsOutputReference.getNumberListAttribute">GetNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-cloudflare.dataCloudflareAiSearchInstances.DataCloudflareAiSearchInstancesResultSourceParamsOutputReference.getNumberMapAttribute">GetNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-cloudflare.dataCloudflareAiSearchInstances.DataCloudflareAiSearchInstancesResultSourceParamsOutputReference.getStringAttribute">GetStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-cloudflare.dataCloudflareAiSearchInstances.DataCloudflareAiSearchInstancesResultSourceParamsOutputReference.getStringMapAttribute">GetStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-cloudflare.dataCloudflareAiSearchInstances.DataCloudflareAiSearchInstancesResultSourceParamsOutputReference.interpolationForAttribute">InterpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-cloudflare.dataCloudflareAiSearchInstances.DataCloudflareAiSearchInstancesResultSourceParamsOutputReference.resolve">Resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktn/provider-cloudflare.dataCloudflareAiSearchInstances.DataCloudflareAiSearchInstancesResultSourceParamsOutputReference.toString">ToString</a></code> | Return a string representation of this resolvable object. |

---

##### `ComputeFqn` <a name="ComputeFqn" id="@cdktn/provider-cloudflare.dataCloudflareAiSearchInstances.DataCloudflareAiSearchInstancesResultSourceParamsOutputReference.computeFqn"></a>

```go
func ComputeFqn() *string
```

##### `GetAnyMapAttribute` <a name="GetAnyMapAttribute" id="@cdktn/provider-cloudflare.dataCloudflareAiSearchInstances.DataCloudflareAiSearchInstancesResultSourceParamsOutputReference.getAnyMapAttribute"></a>

```go
func GetAnyMapAttribute(terraformAttribute *string) *map[string]interface{}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-cloudflare.dataCloudflareAiSearchInstances.DataCloudflareAiSearchInstancesResultSourceParamsOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetBooleanAttribute` <a name="GetBooleanAttribute" id="@cdktn/provider-cloudflare.dataCloudflareAiSearchInstances.DataCloudflareAiSearchInstancesResultSourceParamsOutputReference.getBooleanAttribute"></a>

```go
func GetBooleanAttribute(terraformAttribute *string) IResolvable
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-cloudflare.dataCloudflareAiSearchInstances.DataCloudflareAiSearchInstancesResultSourceParamsOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetBooleanMapAttribute` <a name="GetBooleanMapAttribute" id="@cdktn/provider-cloudflare.dataCloudflareAiSearchInstances.DataCloudflareAiSearchInstancesResultSourceParamsOutputReference.getBooleanMapAttribute"></a>

```go
func GetBooleanMapAttribute(terraformAttribute *string) *map[string]*bool
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-cloudflare.dataCloudflareAiSearchInstances.DataCloudflareAiSearchInstancesResultSourceParamsOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetListAttribute` <a name="GetListAttribute" id="@cdktn/provider-cloudflare.dataCloudflareAiSearchInstances.DataCloudflareAiSearchInstancesResultSourceParamsOutputReference.getListAttribute"></a>

```go
func GetListAttribute(terraformAttribute *string) *[]*string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-cloudflare.dataCloudflareAiSearchInstances.DataCloudflareAiSearchInstancesResultSourceParamsOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberAttribute` <a name="GetNumberAttribute" id="@cdktn/provider-cloudflare.dataCloudflareAiSearchInstances.DataCloudflareAiSearchInstancesResultSourceParamsOutputReference.getNumberAttribute"></a>

```go
func GetNumberAttribute(terraformAttribute *string) *f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-cloudflare.dataCloudflareAiSearchInstances.DataCloudflareAiSearchInstancesResultSourceParamsOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberListAttribute` <a name="GetNumberListAttribute" id="@cdktn/provider-cloudflare.dataCloudflareAiSearchInstances.DataCloudflareAiSearchInstancesResultSourceParamsOutputReference.getNumberListAttribute"></a>

```go
func GetNumberListAttribute(terraformAttribute *string) *[]*f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-cloudflare.dataCloudflareAiSearchInstances.DataCloudflareAiSearchInstancesResultSourceParamsOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberMapAttribute` <a name="GetNumberMapAttribute" id="@cdktn/provider-cloudflare.dataCloudflareAiSearchInstances.DataCloudflareAiSearchInstancesResultSourceParamsOutputReference.getNumberMapAttribute"></a>

```go
func GetNumberMapAttribute(terraformAttribute *string) *map[string]*f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-cloudflare.dataCloudflareAiSearchInstances.DataCloudflareAiSearchInstancesResultSourceParamsOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetStringAttribute` <a name="GetStringAttribute" id="@cdktn/provider-cloudflare.dataCloudflareAiSearchInstances.DataCloudflareAiSearchInstancesResultSourceParamsOutputReference.getStringAttribute"></a>

```go
func GetStringAttribute(terraformAttribute *string) *string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-cloudflare.dataCloudflareAiSearchInstances.DataCloudflareAiSearchInstancesResultSourceParamsOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetStringMapAttribute` <a name="GetStringMapAttribute" id="@cdktn/provider-cloudflare.dataCloudflareAiSearchInstances.DataCloudflareAiSearchInstancesResultSourceParamsOutputReference.getStringMapAttribute"></a>

```go
func GetStringMapAttribute(terraformAttribute *string) *map[string]*string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-cloudflare.dataCloudflareAiSearchInstances.DataCloudflareAiSearchInstancesResultSourceParamsOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `InterpolationForAttribute` <a name="InterpolationForAttribute" id="@cdktn/provider-cloudflare.dataCloudflareAiSearchInstances.DataCloudflareAiSearchInstancesResultSourceParamsOutputReference.interpolationForAttribute"></a>

```go
func InterpolationForAttribute(property *string) IResolvable
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktn/provider-cloudflare.dataCloudflareAiSearchInstances.DataCloudflareAiSearchInstancesResultSourceParamsOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* *string

---

##### `Resolve` <a name="Resolve" id="@cdktn/provider-cloudflare.dataCloudflareAiSearchInstances.DataCloudflareAiSearchInstancesResultSourceParamsOutputReference.resolve"></a>

```go
func Resolve(_context IResolveContext) interface{}
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktn/provider-cloudflare.dataCloudflareAiSearchInstances.DataCloudflareAiSearchInstancesResultSourceParamsOutputReference.resolve.parameter._context"></a>

- *Type:* github.com/open-constructs/cdk-terrain-go/cdktn.IResolveContext

---

##### `ToString` <a name="ToString" id="@cdktn/provider-cloudflare.dataCloudflareAiSearchInstances.DataCloudflareAiSearchInstancesResultSourceParamsOutputReference.toString"></a>

```go
func ToString() *string
```

Return a string representation of this resolvable object.

Returns a reversible string representation.


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-cloudflare.dataCloudflareAiSearchInstances.DataCloudflareAiSearchInstancesResultSourceParamsOutputReference.property.creationStack">CreationStack</a></code> | <code>*[]*string</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktn/provider-cloudflare.dataCloudflareAiSearchInstances.DataCloudflareAiSearchInstancesResultSourceParamsOutputReference.property.fqn">Fqn</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktn/provider-cloudflare.dataCloudflareAiSearchInstances.DataCloudflareAiSearchInstancesResultSourceParamsOutputReference.property.excludeItems">ExcludeItems</a></code> | <code>*[]*string</code> | *No description.* |
| <code><a href="#@cdktn/provider-cloudflare.dataCloudflareAiSearchInstances.DataCloudflareAiSearchInstancesResultSourceParamsOutputReference.property.includeItems">IncludeItems</a></code> | <code>*[]*string</code> | *No description.* |
| <code><a href="#@cdktn/provider-cloudflare.dataCloudflareAiSearchInstances.DataCloudflareAiSearchInstancesResultSourceParamsOutputReference.property.prefix">Prefix</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktn/provider-cloudflare.dataCloudflareAiSearchInstances.DataCloudflareAiSearchInstancesResultSourceParamsOutputReference.property.r2Jurisdiction">R2Jurisdiction</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktn/provider-cloudflare.dataCloudflareAiSearchInstances.DataCloudflareAiSearchInstancesResultSourceParamsOutputReference.property.webCrawler">WebCrawler</a></code> | <code><a href="#@cdktn/provider-cloudflare.dataCloudflareAiSearchInstances.DataCloudflareAiSearchInstancesResultSourceParamsWebCrawlerOutputReference">DataCloudflareAiSearchInstancesResultSourceParamsWebCrawlerOutputReference</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-cloudflare.dataCloudflareAiSearchInstances.DataCloudflareAiSearchInstancesResultSourceParamsOutputReference.property.internalValue">InternalValue</a></code> | <code><a href="#@cdktn/provider-cloudflare.dataCloudflareAiSearchInstances.DataCloudflareAiSearchInstancesResultSourceParams">DataCloudflareAiSearchInstancesResultSourceParams</a></code> | *No description.* |

---

##### `CreationStack`<sup>Required</sup> <a name="CreationStack" id="@cdktn/provider-cloudflare.dataCloudflareAiSearchInstances.DataCloudflareAiSearchInstancesResultSourceParamsOutputReference.property.creationStack"></a>

```go
func CreationStack() *[]*string
```

- *Type:* *[]*string

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `Fqn`<sup>Required</sup> <a name="Fqn" id="@cdktn/provider-cloudflare.dataCloudflareAiSearchInstances.DataCloudflareAiSearchInstancesResultSourceParamsOutputReference.property.fqn"></a>

```go
func Fqn() *string
```

- *Type:* *string

---

##### `ExcludeItems`<sup>Required</sup> <a name="ExcludeItems" id="@cdktn/provider-cloudflare.dataCloudflareAiSearchInstances.DataCloudflareAiSearchInstancesResultSourceParamsOutputReference.property.excludeItems"></a>

```go
func ExcludeItems() *[]*string
```

- *Type:* *[]*string

---

##### `IncludeItems`<sup>Required</sup> <a name="IncludeItems" id="@cdktn/provider-cloudflare.dataCloudflareAiSearchInstances.DataCloudflareAiSearchInstancesResultSourceParamsOutputReference.property.includeItems"></a>

```go
func IncludeItems() *[]*string
```

- *Type:* *[]*string

---

##### `Prefix`<sup>Required</sup> <a name="Prefix" id="@cdktn/provider-cloudflare.dataCloudflareAiSearchInstances.DataCloudflareAiSearchInstancesResultSourceParamsOutputReference.property.prefix"></a>

```go
func Prefix() *string
```

- *Type:* *string

---

##### `R2Jurisdiction`<sup>Required</sup> <a name="R2Jurisdiction" id="@cdktn/provider-cloudflare.dataCloudflareAiSearchInstances.DataCloudflareAiSearchInstancesResultSourceParamsOutputReference.property.r2Jurisdiction"></a>

```go
func R2Jurisdiction() *string
```

- *Type:* *string

---

##### `WebCrawler`<sup>Required</sup> <a name="WebCrawler" id="@cdktn/provider-cloudflare.dataCloudflareAiSearchInstances.DataCloudflareAiSearchInstancesResultSourceParamsOutputReference.property.webCrawler"></a>

```go
func WebCrawler() DataCloudflareAiSearchInstancesResultSourceParamsWebCrawlerOutputReference
```

- *Type:* <a href="#@cdktn/provider-cloudflare.dataCloudflareAiSearchInstances.DataCloudflareAiSearchInstancesResultSourceParamsWebCrawlerOutputReference">DataCloudflareAiSearchInstancesResultSourceParamsWebCrawlerOutputReference</a>

---

##### `InternalValue`<sup>Optional</sup> <a name="InternalValue" id="@cdktn/provider-cloudflare.dataCloudflareAiSearchInstances.DataCloudflareAiSearchInstancesResultSourceParamsOutputReference.property.internalValue"></a>

```go
func InternalValue() DataCloudflareAiSearchInstancesResultSourceParams
```

- *Type:* <a href="#@cdktn/provider-cloudflare.dataCloudflareAiSearchInstances.DataCloudflareAiSearchInstancesResultSourceParams">DataCloudflareAiSearchInstancesResultSourceParams</a>

---


### DataCloudflareAiSearchInstancesResultSourceParamsWebCrawlerOutputReference <a name="DataCloudflareAiSearchInstancesResultSourceParamsWebCrawlerOutputReference" id="@cdktn/provider-cloudflare.dataCloudflareAiSearchInstances.DataCloudflareAiSearchInstancesResultSourceParamsWebCrawlerOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktn/provider-cloudflare.dataCloudflareAiSearchInstances.DataCloudflareAiSearchInstancesResultSourceParamsWebCrawlerOutputReference.Initializer"></a>

```go
import "github.com/cdktn-io/cdktn-provider-cloudflare-go/cloudflare/v14/datacloudflareaisearchinstances"

datacloudflareaisearchinstances.NewDataCloudflareAiSearchInstancesResultSourceParamsWebCrawlerOutputReference(terraformResource IInterpolatingParent, terraformAttribute *string) DataCloudflareAiSearchInstancesResultSourceParamsWebCrawlerOutputReference
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-cloudflare.dataCloudflareAiSearchInstances.DataCloudflareAiSearchInstancesResultSourceParamsWebCrawlerOutputReference.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>github.com/open-constructs/cdk-terrain-go/cdktn.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktn/provider-cloudflare.dataCloudflareAiSearchInstances.DataCloudflareAiSearchInstancesResultSourceParamsWebCrawlerOutputReference.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>*string</code> | The attribute on the parent resource this class is referencing. |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktn/provider-cloudflare.dataCloudflareAiSearchInstances.DataCloudflareAiSearchInstancesResultSourceParamsWebCrawlerOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* github.com/open-constructs/cdk-terrain-go/cdktn.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-cloudflare.dataCloudflareAiSearchInstances.DataCloudflareAiSearchInstancesResultSourceParamsWebCrawlerOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* *string

The attribute on the parent resource this class is referencing.

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-cloudflare.dataCloudflareAiSearchInstances.DataCloudflareAiSearchInstancesResultSourceParamsWebCrawlerOutputReference.computeFqn">ComputeFqn</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-cloudflare.dataCloudflareAiSearchInstances.DataCloudflareAiSearchInstancesResultSourceParamsWebCrawlerOutputReference.getAnyMapAttribute">GetAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-cloudflare.dataCloudflareAiSearchInstances.DataCloudflareAiSearchInstancesResultSourceParamsWebCrawlerOutputReference.getBooleanAttribute">GetBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-cloudflare.dataCloudflareAiSearchInstances.DataCloudflareAiSearchInstancesResultSourceParamsWebCrawlerOutputReference.getBooleanMapAttribute">GetBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-cloudflare.dataCloudflareAiSearchInstances.DataCloudflareAiSearchInstancesResultSourceParamsWebCrawlerOutputReference.getListAttribute">GetListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-cloudflare.dataCloudflareAiSearchInstances.DataCloudflareAiSearchInstancesResultSourceParamsWebCrawlerOutputReference.getNumberAttribute">GetNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-cloudflare.dataCloudflareAiSearchInstances.DataCloudflareAiSearchInstancesResultSourceParamsWebCrawlerOutputReference.getNumberListAttribute">GetNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-cloudflare.dataCloudflareAiSearchInstances.DataCloudflareAiSearchInstancesResultSourceParamsWebCrawlerOutputReference.getNumberMapAttribute">GetNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-cloudflare.dataCloudflareAiSearchInstances.DataCloudflareAiSearchInstancesResultSourceParamsWebCrawlerOutputReference.getStringAttribute">GetStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-cloudflare.dataCloudflareAiSearchInstances.DataCloudflareAiSearchInstancesResultSourceParamsWebCrawlerOutputReference.getStringMapAttribute">GetStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-cloudflare.dataCloudflareAiSearchInstances.DataCloudflareAiSearchInstancesResultSourceParamsWebCrawlerOutputReference.interpolationForAttribute">InterpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-cloudflare.dataCloudflareAiSearchInstances.DataCloudflareAiSearchInstancesResultSourceParamsWebCrawlerOutputReference.resolve">Resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktn/provider-cloudflare.dataCloudflareAiSearchInstances.DataCloudflareAiSearchInstancesResultSourceParamsWebCrawlerOutputReference.toString">ToString</a></code> | Return a string representation of this resolvable object. |

---

##### `ComputeFqn` <a name="ComputeFqn" id="@cdktn/provider-cloudflare.dataCloudflareAiSearchInstances.DataCloudflareAiSearchInstancesResultSourceParamsWebCrawlerOutputReference.computeFqn"></a>

```go
func ComputeFqn() *string
```

##### `GetAnyMapAttribute` <a name="GetAnyMapAttribute" id="@cdktn/provider-cloudflare.dataCloudflareAiSearchInstances.DataCloudflareAiSearchInstancesResultSourceParamsWebCrawlerOutputReference.getAnyMapAttribute"></a>

```go
func GetAnyMapAttribute(terraformAttribute *string) *map[string]interface{}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-cloudflare.dataCloudflareAiSearchInstances.DataCloudflareAiSearchInstancesResultSourceParamsWebCrawlerOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetBooleanAttribute` <a name="GetBooleanAttribute" id="@cdktn/provider-cloudflare.dataCloudflareAiSearchInstances.DataCloudflareAiSearchInstancesResultSourceParamsWebCrawlerOutputReference.getBooleanAttribute"></a>

```go
func GetBooleanAttribute(terraformAttribute *string) IResolvable
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-cloudflare.dataCloudflareAiSearchInstances.DataCloudflareAiSearchInstancesResultSourceParamsWebCrawlerOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetBooleanMapAttribute` <a name="GetBooleanMapAttribute" id="@cdktn/provider-cloudflare.dataCloudflareAiSearchInstances.DataCloudflareAiSearchInstancesResultSourceParamsWebCrawlerOutputReference.getBooleanMapAttribute"></a>

```go
func GetBooleanMapAttribute(terraformAttribute *string) *map[string]*bool
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-cloudflare.dataCloudflareAiSearchInstances.DataCloudflareAiSearchInstancesResultSourceParamsWebCrawlerOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetListAttribute` <a name="GetListAttribute" id="@cdktn/provider-cloudflare.dataCloudflareAiSearchInstances.DataCloudflareAiSearchInstancesResultSourceParamsWebCrawlerOutputReference.getListAttribute"></a>

```go
func GetListAttribute(terraformAttribute *string) *[]*string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-cloudflare.dataCloudflareAiSearchInstances.DataCloudflareAiSearchInstancesResultSourceParamsWebCrawlerOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberAttribute` <a name="GetNumberAttribute" id="@cdktn/provider-cloudflare.dataCloudflareAiSearchInstances.DataCloudflareAiSearchInstancesResultSourceParamsWebCrawlerOutputReference.getNumberAttribute"></a>

```go
func GetNumberAttribute(terraformAttribute *string) *f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-cloudflare.dataCloudflareAiSearchInstances.DataCloudflareAiSearchInstancesResultSourceParamsWebCrawlerOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberListAttribute` <a name="GetNumberListAttribute" id="@cdktn/provider-cloudflare.dataCloudflareAiSearchInstances.DataCloudflareAiSearchInstancesResultSourceParamsWebCrawlerOutputReference.getNumberListAttribute"></a>

```go
func GetNumberListAttribute(terraformAttribute *string) *[]*f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-cloudflare.dataCloudflareAiSearchInstances.DataCloudflareAiSearchInstancesResultSourceParamsWebCrawlerOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberMapAttribute` <a name="GetNumberMapAttribute" id="@cdktn/provider-cloudflare.dataCloudflareAiSearchInstances.DataCloudflareAiSearchInstancesResultSourceParamsWebCrawlerOutputReference.getNumberMapAttribute"></a>

```go
func GetNumberMapAttribute(terraformAttribute *string) *map[string]*f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-cloudflare.dataCloudflareAiSearchInstances.DataCloudflareAiSearchInstancesResultSourceParamsWebCrawlerOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetStringAttribute` <a name="GetStringAttribute" id="@cdktn/provider-cloudflare.dataCloudflareAiSearchInstances.DataCloudflareAiSearchInstancesResultSourceParamsWebCrawlerOutputReference.getStringAttribute"></a>

```go
func GetStringAttribute(terraformAttribute *string) *string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-cloudflare.dataCloudflareAiSearchInstances.DataCloudflareAiSearchInstancesResultSourceParamsWebCrawlerOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetStringMapAttribute` <a name="GetStringMapAttribute" id="@cdktn/provider-cloudflare.dataCloudflareAiSearchInstances.DataCloudflareAiSearchInstancesResultSourceParamsWebCrawlerOutputReference.getStringMapAttribute"></a>

```go
func GetStringMapAttribute(terraformAttribute *string) *map[string]*string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-cloudflare.dataCloudflareAiSearchInstances.DataCloudflareAiSearchInstancesResultSourceParamsWebCrawlerOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `InterpolationForAttribute` <a name="InterpolationForAttribute" id="@cdktn/provider-cloudflare.dataCloudflareAiSearchInstances.DataCloudflareAiSearchInstancesResultSourceParamsWebCrawlerOutputReference.interpolationForAttribute"></a>

```go
func InterpolationForAttribute(property *string) IResolvable
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktn/provider-cloudflare.dataCloudflareAiSearchInstances.DataCloudflareAiSearchInstancesResultSourceParamsWebCrawlerOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* *string

---

##### `Resolve` <a name="Resolve" id="@cdktn/provider-cloudflare.dataCloudflareAiSearchInstances.DataCloudflareAiSearchInstancesResultSourceParamsWebCrawlerOutputReference.resolve"></a>

```go
func Resolve(_context IResolveContext) interface{}
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktn/provider-cloudflare.dataCloudflareAiSearchInstances.DataCloudflareAiSearchInstancesResultSourceParamsWebCrawlerOutputReference.resolve.parameter._context"></a>

- *Type:* github.com/open-constructs/cdk-terrain-go/cdktn.IResolveContext

---

##### `ToString` <a name="ToString" id="@cdktn/provider-cloudflare.dataCloudflareAiSearchInstances.DataCloudflareAiSearchInstancesResultSourceParamsWebCrawlerOutputReference.toString"></a>

```go
func ToString() *string
```

Return a string representation of this resolvable object.

Returns a reversible string representation.


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-cloudflare.dataCloudflareAiSearchInstances.DataCloudflareAiSearchInstancesResultSourceParamsWebCrawlerOutputReference.property.creationStack">CreationStack</a></code> | <code>*[]*string</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktn/provider-cloudflare.dataCloudflareAiSearchInstances.DataCloudflareAiSearchInstancesResultSourceParamsWebCrawlerOutputReference.property.fqn">Fqn</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktn/provider-cloudflare.dataCloudflareAiSearchInstances.DataCloudflareAiSearchInstancesResultSourceParamsWebCrawlerOutputReference.property.parseOptions">ParseOptions</a></code> | <code><a href="#@cdktn/provider-cloudflare.dataCloudflareAiSearchInstances.DataCloudflareAiSearchInstancesResultSourceParamsWebCrawlerParseOptionsOutputReference">DataCloudflareAiSearchInstancesResultSourceParamsWebCrawlerParseOptionsOutputReference</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-cloudflare.dataCloudflareAiSearchInstances.DataCloudflareAiSearchInstancesResultSourceParamsWebCrawlerOutputReference.property.parseType">ParseType</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktn/provider-cloudflare.dataCloudflareAiSearchInstances.DataCloudflareAiSearchInstancesResultSourceParamsWebCrawlerOutputReference.property.storeOptions">StoreOptions</a></code> | <code><a href="#@cdktn/provider-cloudflare.dataCloudflareAiSearchInstances.DataCloudflareAiSearchInstancesResultSourceParamsWebCrawlerStoreOptionsOutputReference">DataCloudflareAiSearchInstancesResultSourceParamsWebCrawlerStoreOptionsOutputReference</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-cloudflare.dataCloudflareAiSearchInstances.DataCloudflareAiSearchInstancesResultSourceParamsWebCrawlerOutputReference.property.internalValue">InternalValue</a></code> | <code><a href="#@cdktn/provider-cloudflare.dataCloudflareAiSearchInstances.DataCloudflareAiSearchInstancesResultSourceParamsWebCrawler">DataCloudflareAiSearchInstancesResultSourceParamsWebCrawler</a></code> | *No description.* |

---

##### `CreationStack`<sup>Required</sup> <a name="CreationStack" id="@cdktn/provider-cloudflare.dataCloudflareAiSearchInstances.DataCloudflareAiSearchInstancesResultSourceParamsWebCrawlerOutputReference.property.creationStack"></a>

```go
func CreationStack() *[]*string
```

- *Type:* *[]*string

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `Fqn`<sup>Required</sup> <a name="Fqn" id="@cdktn/provider-cloudflare.dataCloudflareAiSearchInstances.DataCloudflareAiSearchInstancesResultSourceParamsWebCrawlerOutputReference.property.fqn"></a>

```go
func Fqn() *string
```

- *Type:* *string

---

##### `ParseOptions`<sup>Required</sup> <a name="ParseOptions" id="@cdktn/provider-cloudflare.dataCloudflareAiSearchInstances.DataCloudflareAiSearchInstancesResultSourceParamsWebCrawlerOutputReference.property.parseOptions"></a>

```go
func ParseOptions() DataCloudflareAiSearchInstancesResultSourceParamsWebCrawlerParseOptionsOutputReference
```

- *Type:* <a href="#@cdktn/provider-cloudflare.dataCloudflareAiSearchInstances.DataCloudflareAiSearchInstancesResultSourceParamsWebCrawlerParseOptionsOutputReference">DataCloudflareAiSearchInstancesResultSourceParamsWebCrawlerParseOptionsOutputReference</a>

---

##### `ParseType`<sup>Required</sup> <a name="ParseType" id="@cdktn/provider-cloudflare.dataCloudflareAiSearchInstances.DataCloudflareAiSearchInstancesResultSourceParamsWebCrawlerOutputReference.property.parseType"></a>

```go
func ParseType() *string
```

- *Type:* *string

---

##### `StoreOptions`<sup>Required</sup> <a name="StoreOptions" id="@cdktn/provider-cloudflare.dataCloudflareAiSearchInstances.DataCloudflareAiSearchInstancesResultSourceParamsWebCrawlerOutputReference.property.storeOptions"></a>

```go
func StoreOptions() DataCloudflareAiSearchInstancesResultSourceParamsWebCrawlerStoreOptionsOutputReference
```

- *Type:* <a href="#@cdktn/provider-cloudflare.dataCloudflareAiSearchInstances.DataCloudflareAiSearchInstancesResultSourceParamsWebCrawlerStoreOptionsOutputReference">DataCloudflareAiSearchInstancesResultSourceParamsWebCrawlerStoreOptionsOutputReference</a>

---

##### `InternalValue`<sup>Optional</sup> <a name="InternalValue" id="@cdktn/provider-cloudflare.dataCloudflareAiSearchInstances.DataCloudflareAiSearchInstancesResultSourceParamsWebCrawlerOutputReference.property.internalValue"></a>

```go
func InternalValue() DataCloudflareAiSearchInstancesResultSourceParamsWebCrawler
```

- *Type:* <a href="#@cdktn/provider-cloudflare.dataCloudflareAiSearchInstances.DataCloudflareAiSearchInstancesResultSourceParamsWebCrawler">DataCloudflareAiSearchInstancesResultSourceParamsWebCrawler</a>

---


### DataCloudflareAiSearchInstancesResultSourceParamsWebCrawlerParseOptionsOutputReference <a name="DataCloudflareAiSearchInstancesResultSourceParamsWebCrawlerParseOptionsOutputReference" id="@cdktn/provider-cloudflare.dataCloudflareAiSearchInstances.DataCloudflareAiSearchInstancesResultSourceParamsWebCrawlerParseOptionsOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktn/provider-cloudflare.dataCloudflareAiSearchInstances.DataCloudflareAiSearchInstancesResultSourceParamsWebCrawlerParseOptionsOutputReference.Initializer"></a>

```go
import "github.com/cdktn-io/cdktn-provider-cloudflare-go/cloudflare/v14/datacloudflareaisearchinstances"

datacloudflareaisearchinstances.NewDataCloudflareAiSearchInstancesResultSourceParamsWebCrawlerParseOptionsOutputReference(terraformResource IInterpolatingParent, terraformAttribute *string) DataCloudflareAiSearchInstancesResultSourceParamsWebCrawlerParseOptionsOutputReference
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-cloudflare.dataCloudflareAiSearchInstances.DataCloudflareAiSearchInstancesResultSourceParamsWebCrawlerParseOptionsOutputReference.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>github.com/open-constructs/cdk-terrain-go/cdktn.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktn/provider-cloudflare.dataCloudflareAiSearchInstances.DataCloudflareAiSearchInstancesResultSourceParamsWebCrawlerParseOptionsOutputReference.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>*string</code> | The attribute on the parent resource this class is referencing. |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktn/provider-cloudflare.dataCloudflareAiSearchInstances.DataCloudflareAiSearchInstancesResultSourceParamsWebCrawlerParseOptionsOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* github.com/open-constructs/cdk-terrain-go/cdktn.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-cloudflare.dataCloudflareAiSearchInstances.DataCloudflareAiSearchInstancesResultSourceParamsWebCrawlerParseOptionsOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* *string

The attribute on the parent resource this class is referencing.

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-cloudflare.dataCloudflareAiSearchInstances.DataCloudflareAiSearchInstancesResultSourceParamsWebCrawlerParseOptionsOutputReference.computeFqn">ComputeFqn</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-cloudflare.dataCloudflareAiSearchInstances.DataCloudflareAiSearchInstancesResultSourceParamsWebCrawlerParseOptionsOutputReference.getAnyMapAttribute">GetAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-cloudflare.dataCloudflareAiSearchInstances.DataCloudflareAiSearchInstancesResultSourceParamsWebCrawlerParseOptionsOutputReference.getBooleanAttribute">GetBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-cloudflare.dataCloudflareAiSearchInstances.DataCloudflareAiSearchInstancesResultSourceParamsWebCrawlerParseOptionsOutputReference.getBooleanMapAttribute">GetBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-cloudflare.dataCloudflareAiSearchInstances.DataCloudflareAiSearchInstancesResultSourceParamsWebCrawlerParseOptionsOutputReference.getListAttribute">GetListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-cloudflare.dataCloudflareAiSearchInstances.DataCloudflareAiSearchInstancesResultSourceParamsWebCrawlerParseOptionsOutputReference.getNumberAttribute">GetNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-cloudflare.dataCloudflareAiSearchInstances.DataCloudflareAiSearchInstancesResultSourceParamsWebCrawlerParseOptionsOutputReference.getNumberListAttribute">GetNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-cloudflare.dataCloudflareAiSearchInstances.DataCloudflareAiSearchInstancesResultSourceParamsWebCrawlerParseOptionsOutputReference.getNumberMapAttribute">GetNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-cloudflare.dataCloudflareAiSearchInstances.DataCloudflareAiSearchInstancesResultSourceParamsWebCrawlerParseOptionsOutputReference.getStringAttribute">GetStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-cloudflare.dataCloudflareAiSearchInstances.DataCloudflareAiSearchInstancesResultSourceParamsWebCrawlerParseOptionsOutputReference.getStringMapAttribute">GetStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-cloudflare.dataCloudflareAiSearchInstances.DataCloudflareAiSearchInstancesResultSourceParamsWebCrawlerParseOptionsOutputReference.interpolationForAttribute">InterpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-cloudflare.dataCloudflareAiSearchInstances.DataCloudflareAiSearchInstancesResultSourceParamsWebCrawlerParseOptionsOutputReference.resolve">Resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktn/provider-cloudflare.dataCloudflareAiSearchInstances.DataCloudflareAiSearchInstancesResultSourceParamsWebCrawlerParseOptionsOutputReference.toString">ToString</a></code> | Return a string representation of this resolvable object. |

---

##### `ComputeFqn` <a name="ComputeFqn" id="@cdktn/provider-cloudflare.dataCloudflareAiSearchInstances.DataCloudflareAiSearchInstancesResultSourceParamsWebCrawlerParseOptionsOutputReference.computeFqn"></a>

```go
func ComputeFqn() *string
```

##### `GetAnyMapAttribute` <a name="GetAnyMapAttribute" id="@cdktn/provider-cloudflare.dataCloudflareAiSearchInstances.DataCloudflareAiSearchInstancesResultSourceParamsWebCrawlerParseOptionsOutputReference.getAnyMapAttribute"></a>

```go
func GetAnyMapAttribute(terraformAttribute *string) *map[string]interface{}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-cloudflare.dataCloudflareAiSearchInstances.DataCloudflareAiSearchInstancesResultSourceParamsWebCrawlerParseOptionsOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetBooleanAttribute` <a name="GetBooleanAttribute" id="@cdktn/provider-cloudflare.dataCloudflareAiSearchInstances.DataCloudflareAiSearchInstancesResultSourceParamsWebCrawlerParseOptionsOutputReference.getBooleanAttribute"></a>

```go
func GetBooleanAttribute(terraformAttribute *string) IResolvable
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-cloudflare.dataCloudflareAiSearchInstances.DataCloudflareAiSearchInstancesResultSourceParamsWebCrawlerParseOptionsOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetBooleanMapAttribute` <a name="GetBooleanMapAttribute" id="@cdktn/provider-cloudflare.dataCloudflareAiSearchInstances.DataCloudflareAiSearchInstancesResultSourceParamsWebCrawlerParseOptionsOutputReference.getBooleanMapAttribute"></a>

```go
func GetBooleanMapAttribute(terraformAttribute *string) *map[string]*bool
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-cloudflare.dataCloudflareAiSearchInstances.DataCloudflareAiSearchInstancesResultSourceParamsWebCrawlerParseOptionsOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetListAttribute` <a name="GetListAttribute" id="@cdktn/provider-cloudflare.dataCloudflareAiSearchInstances.DataCloudflareAiSearchInstancesResultSourceParamsWebCrawlerParseOptionsOutputReference.getListAttribute"></a>

```go
func GetListAttribute(terraformAttribute *string) *[]*string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-cloudflare.dataCloudflareAiSearchInstances.DataCloudflareAiSearchInstancesResultSourceParamsWebCrawlerParseOptionsOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberAttribute` <a name="GetNumberAttribute" id="@cdktn/provider-cloudflare.dataCloudflareAiSearchInstances.DataCloudflareAiSearchInstancesResultSourceParamsWebCrawlerParseOptionsOutputReference.getNumberAttribute"></a>

```go
func GetNumberAttribute(terraformAttribute *string) *f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-cloudflare.dataCloudflareAiSearchInstances.DataCloudflareAiSearchInstancesResultSourceParamsWebCrawlerParseOptionsOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberListAttribute` <a name="GetNumberListAttribute" id="@cdktn/provider-cloudflare.dataCloudflareAiSearchInstances.DataCloudflareAiSearchInstancesResultSourceParamsWebCrawlerParseOptionsOutputReference.getNumberListAttribute"></a>

```go
func GetNumberListAttribute(terraformAttribute *string) *[]*f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-cloudflare.dataCloudflareAiSearchInstances.DataCloudflareAiSearchInstancesResultSourceParamsWebCrawlerParseOptionsOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberMapAttribute` <a name="GetNumberMapAttribute" id="@cdktn/provider-cloudflare.dataCloudflareAiSearchInstances.DataCloudflareAiSearchInstancesResultSourceParamsWebCrawlerParseOptionsOutputReference.getNumberMapAttribute"></a>

```go
func GetNumberMapAttribute(terraformAttribute *string) *map[string]*f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-cloudflare.dataCloudflareAiSearchInstances.DataCloudflareAiSearchInstancesResultSourceParamsWebCrawlerParseOptionsOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetStringAttribute` <a name="GetStringAttribute" id="@cdktn/provider-cloudflare.dataCloudflareAiSearchInstances.DataCloudflareAiSearchInstancesResultSourceParamsWebCrawlerParseOptionsOutputReference.getStringAttribute"></a>

```go
func GetStringAttribute(terraformAttribute *string) *string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-cloudflare.dataCloudflareAiSearchInstances.DataCloudflareAiSearchInstancesResultSourceParamsWebCrawlerParseOptionsOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetStringMapAttribute` <a name="GetStringMapAttribute" id="@cdktn/provider-cloudflare.dataCloudflareAiSearchInstances.DataCloudflareAiSearchInstancesResultSourceParamsWebCrawlerParseOptionsOutputReference.getStringMapAttribute"></a>

```go
func GetStringMapAttribute(terraformAttribute *string) *map[string]*string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-cloudflare.dataCloudflareAiSearchInstances.DataCloudflareAiSearchInstancesResultSourceParamsWebCrawlerParseOptionsOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `InterpolationForAttribute` <a name="InterpolationForAttribute" id="@cdktn/provider-cloudflare.dataCloudflareAiSearchInstances.DataCloudflareAiSearchInstancesResultSourceParamsWebCrawlerParseOptionsOutputReference.interpolationForAttribute"></a>

```go
func InterpolationForAttribute(property *string) IResolvable
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktn/provider-cloudflare.dataCloudflareAiSearchInstances.DataCloudflareAiSearchInstancesResultSourceParamsWebCrawlerParseOptionsOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* *string

---

##### `Resolve` <a name="Resolve" id="@cdktn/provider-cloudflare.dataCloudflareAiSearchInstances.DataCloudflareAiSearchInstancesResultSourceParamsWebCrawlerParseOptionsOutputReference.resolve"></a>

```go
func Resolve(_context IResolveContext) interface{}
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktn/provider-cloudflare.dataCloudflareAiSearchInstances.DataCloudflareAiSearchInstancesResultSourceParamsWebCrawlerParseOptionsOutputReference.resolve.parameter._context"></a>

- *Type:* github.com/open-constructs/cdk-terrain-go/cdktn.IResolveContext

---

##### `ToString` <a name="ToString" id="@cdktn/provider-cloudflare.dataCloudflareAiSearchInstances.DataCloudflareAiSearchInstancesResultSourceParamsWebCrawlerParseOptionsOutputReference.toString"></a>

```go
func ToString() *string
```

Return a string representation of this resolvable object.

Returns a reversible string representation.


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-cloudflare.dataCloudflareAiSearchInstances.DataCloudflareAiSearchInstancesResultSourceParamsWebCrawlerParseOptionsOutputReference.property.creationStack">CreationStack</a></code> | <code>*[]*string</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktn/provider-cloudflare.dataCloudflareAiSearchInstances.DataCloudflareAiSearchInstancesResultSourceParamsWebCrawlerParseOptionsOutputReference.property.fqn">Fqn</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktn/provider-cloudflare.dataCloudflareAiSearchInstances.DataCloudflareAiSearchInstancesResultSourceParamsWebCrawlerParseOptionsOutputReference.property.includeHeaders">IncludeHeaders</a></code> | <code>github.com/open-constructs/cdk-terrain-go/cdktn.StringMap</code> | *No description.* |
| <code><a href="#@cdktn/provider-cloudflare.dataCloudflareAiSearchInstances.DataCloudflareAiSearchInstancesResultSourceParamsWebCrawlerParseOptionsOutputReference.property.includeImages">IncludeImages</a></code> | <code>github.com/open-constructs/cdk-terrain-go/cdktn.IResolvable</code> | *No description.* |
| <code><a href="#@cdktn/provider-cloudflare.dataCloudflareAiSearchInstances.DataCloudflareAiSearchInstancesResultSourceParamsWebCrawlerParseOptionsOutputReference.property.specificSitemaps">SpecificSitemaps</a></code> | <code>*[]*string</code> | *No description.* |
| <code><a href="#@cdktn/provider-cloudflare.dataCloudflareAiSearchInstances.DataCloudflareAiSearchInstancesResultSourceParamsWebCrawlerParseOptionsOutputReference.property.useBrowserRendering">UseBrowserRendering</a></code> | <code>github.com/open-constructs/cdk-terrain-go/cdktn.IResolvable</code> | *No description.* |
| <code><a href="#@cdktn/provider-cloudflare.dataCloudflareAiSearchInstances.DataCloudflareAiSearchInstancesResultSourceParamsWebCrawlerParseOptionsOutputReference.property.internalValue">InternalValue</a></code> | <code><a href="#@cdktn/provider-cloudflare.dataCloudflareAiSearchInstances.DataCloudflareAiSearchInstancesResultSourceParamsWebCrawlerParseOptions">DataCloudflareAiSearchInstancesResultSourceParamsWebCrawlerParseOptions</a></code> | *No description.* |

---

##### `CreationStack`<sup>Required</sup> <a name="CreationStack" id="@cdktn/provider-cloudflare.dataCloudflareAiSearchInstances.DataCloudflareAiSearchInstancesResultSourceParamsWebCrawlerParseOptionsOutputReference.property.creationStack"></a>

```go
func CreationStack() *[]*string
```

- *Type:* *[]*string

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `Fqn`<sup>Required</sup> <a name="Fqn" id="@cdktn/provider-cloudflare.dataCloudflareAiSearchInstances.DataCloudflareAiSearchInstancesResultSourceParamsWebCrawlerParseOptionsOutputReference.property.fqn"></a>

```go
func Fqn() *string
```

- *Type:* *string

---

##### `IncludeHeaders`<sup>Required</sup> <a name="IncludeHeaders" id="@cdktn/provider-cloudflare.dataCloudflareAiSearchInstances.DataCloudflareAiSearchInstancesResultSourceParamsWebCrawlerParseOptionsOutputReference.property.includeHeaders"></a>

```go
func IncludeHeaders() StringMap
```

- *Type:* github.com/open-constructs/cdk-terrain-go/cdktn.StringMap

---

##### `IncludeImages`<sup>Required</sup> <a name="IncludeImages" id="@cdktn/provider-cloudflare.dataCloudflareAiSearchInstances.DataCloudflareAiSearchInstancesResultSourceParamsWebCrawlerParseOptionsOutputReference.property.includeImages"></a>

```go
func IncludeImages() IResolvable
```

- *Type:* github.com/open-constructs/cdk-terrain-go/cdktn.IResolvable

---

##### `SpecificSitemaps`<sup>Required</sup> <a name="SpecificSitemaps" id="@cdktn/provider-cloudflare.dataCloudflareAiSearchInstances.DataCloudflareAiSearchInstancesResultSourceParamsWebCrawlerParseOptionsOutputReference.property.specificSitemaps"></a>

```go
func SpecificSitemaps() *[]*string
```

- *Type:* *[]*string

---

##### `UseBrowserRendering`<sup>Required</sup> <a name="UseBrowserRendering" id="@cdktn/provider-cloudflare.dataCloudflareAiSearchInstances.DataCloudflareAiSearchInstancesResultSourceParamsWebCrawlerParseOptionsOutputReference.property.useBrowserRendering"></a>

```go
func UseBrowserRendering() IResolvable
```

- *Type:* github.com/open-constructs/cdk-terrain-go/cdktn.IResolvable

---

##### `InternalValue`<sup>Optional</sup> <a name="InternalValue" id="@cdktn/provider-cloudflare.dataCloudflareAiSearchInstances.DataCloudflareAiSearchInstancesResultSourceParamsWebCrawlerParseOptionsOutputReference.property.internalValue"></a>

```go
func InternalValue() DataCloudflareAiSearchInstancesResultSourceParamsWebCrawlerParseOptions
```

- *Type:* <a href="#@cdktn/provider-cloudflare.dataCloudflareAiSearchInstances.DataCloudflareAiSearchInstancesResultSourceParamsWebCrawlerParseOptions">DataCloudflareAiSearchInstancesResultSourceParamsWebCrawlerParseOptions</a>

---


### DataCloudflareAiSearchInstancesResultSourceParamsWebCrawlerStoreOptionsOutputReference <a name="DataCloudflareAiSearchInstancesResultSourceParamsWebCrawlerStoreOptionsOutputReference" id="@cdktn/provider-cloudflare.dataCloudflareAiSearchInstances.DataCloudflareAiSearchInstancesResultSourceParamsWebCrawlerStoreOptionsOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktn/provider-cloudflare.dataCloudflareAiSearchInstances.DataCloudflareAiSearchInstancesResultSourceParamsWebCrawlerStoreOptionsOutputReference.Initializer"></a>

```go
import "github.com/cdktn-io/cdktn-provider-cloudflare-go/cloudflare/v14/datacloudflareaisearchinstances"

datacloudflareaisearchinstances.NewDataCloudflareAiSearchInstancesResultSourceParamsWebCrawlerStoreOptionsOutputReference(terraformResource IInterpolatingParent, terraformAttribute *string) DataCloudflareAiSearchInstancesResultSourceParamsWebCrawlerStoreOptionsOutputReference
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-cloudflare.dataCloudflareAiSearchInstances.DataCloudflareAiSearchInstancesResultSourceParamsWebCrawlerStoreOptionsOutputReference.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>github.com/open-constructs/cdk-terrain-go/cdktn.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktn/provider-cloudflare.dataCloudflareAiSearchInstances.DataCloudflareAiSearchInstancesResultSourceParamsWebCrawlerStoreOptionsOutputReference.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>*string</code> | The attribute on the parent resource this class is referencing. |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktn/provider-cloudflare.dataCloudflareAiSearchInstances.DataCloudflareAiSearchInstancesResultSourceParamsWebCrawlerStoreOptionsOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* github.com/open-constructs/cdk-terrain-go/cdktn.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-cloudflare.dataCloudflareAiSearchInstances.DataCloudflareAiSearchInstancesResultSourceParamsWebCrawlerStoreOptionsOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* *string

The attribute on the parent resource this class is referencing.

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-cloudflare.dataCloudflareAiSearchInstances.DataCloudflareAiSearchInstancesResultSourceParamsWebCrawlerStoreOptionsOutputReference.computeFqn">ComputeFqn</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-cloudflare.dataCloudflareAiSearchInstances.DataCloudflareAiSearchInstancesResultSourceParamsWebCrawlerStoreOptionsOutputReference.getAnyMapAttribute">GetAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-cloudflare.dataCloudflareAiSearchInstances.DataCloudflareAiSearchInstancesResultSourceParamsWebCrawlerStoreOptionsOutputReference.getBooleanAttribute">GetBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-cloudflare.dataCloudflareAiSearchInstances.DataCloudflareAiSearchInstancesResultSourceParamsWebCrawlerStoreOptionsOutputReference.getBooleanMapAttribute">GetBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-cloudflare.dataCloudflareAiSearchInstances.DataCloudflareAiSearchInstancesResultSourceParamsWebCrawlerStoreOptionsOutputReference.getListAttribute">GetListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-cloudflare.dataCloudflareAiSearchInstances.DataCloudflareAiSearchInstancesResultSourceParamsWebCrawlerStoreOptionsOutputReference.getNumberAttribute">GetNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-cloudflare.dataCloudflareAiSearchInstances.DataCloudflareAiSearchInstancesResultSourceParamsWebCrawlerStoreOptionsOutputReference.getNumberListAttribute">GetNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-cloudflare.dataCloudflareAiSearchInstances.DataCloudflareAiSearchInstancesResultSourceParamsWebCrawlerStoreOptionsOutputReference.getNumberMapAttribute">GetNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-cloudflare.dataCloudflareAiSearchInstances.DataCloudflareAiSearchInstancesResultSourceParamsWebCrawlerStoreOptionsOutputReference.getStringAttribute">GetStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-cloudflare.dataCloudflareAiSearchInstances.DataCloudflareAiSearchInstancesResultSourceParamsWebCrawlerStoreOptionsOutputReference.getStringMapAttribute">GetStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-cloudflare.dataCloudflareAiSearchInstances.DataCloudflareAiSearchInstancesResultSourceParamsWebCrawlerStoreOptionsOutputReference.interpolationForAttribute">InterpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-cloudflare.dataCloudflareAiSearchInstances.DataCloudflareAiSearchInstancesResultSourceParamsWebCrawlerStoreOptionsOutputReference.resolve">Resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktn/provider-cloudflare.dataCloudflareAiSearchInstances.DataCloudflareAiSearchInstancesResultSourceParamsWebCrawlerStoreOptionsOutputReference.toString">ToString</a></code> | Return a string representation of this resolvable object. |

---

##### `ComputeFqn` <a name="ComputeFqn" id="@cdktn/provider-cloudflare.dataCloudflareAiSearchInstances.DataCloudflareAiSearchInstancesResultSourceParamsWebCrawlerStoreOptionsOutputReference.computeFqn"></a>

```go
func ComputeFqn() *string
```

##### `GetAnyMapAttribute` <a name="GetAnyMapAttribute" id="@cdktn/provider-cloudflare.dataCloudflareAiSearchInstances.DataCloudflareAiSearchInstancesResultSourceParamsWebCrawlerStoreOptionsOutputReference.getAnyMapAttribute"></a>

```go
func GetAnyMapAttribute(terraformAttribute *string) *map[string]interface{}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-cloudflare.dataCloudflareAiSearchInstances.DataCloudflareAiSearchInstancesResultSourceParamsWebCrawlerStoreOptionsOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetBooleanAttribute` <a name="GetBooleanAttribute" id="@cdktn/provider-cloudflare.dataCloudflareAiSearchInstances.DataCloudflareAiSearchInstancesResultSourceParamsWebCrawlerStoreOptionsOutputReference.getBooleanAttribute"></a>

```go
func GetBooleanAttribute(terraformAttribute *string) IResolvable
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-cloudflare.dataCloudflareAiSearchInstances.DataCloudflareAiSearchInstancesResultSourceParamsWebCrawlerStoreOptionsOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetBooleanMapAttribute` <a name="GetBooleanMapAttribute" id="@cdktn/provider-cloudflare.dataCloudflareAiSearchInstances.DataCloudflareAiSearchInstancesResultSourceParamsWebCrawlerStoreOptionsOutputReference.getBooleanMapAttribute"></a>

```go
func GetBooleanMapAttribute(terraformAttribute *string) *map[string]*bool
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-cloudflare.dataCloudflareAiSearchInstances.DataCloudflareAiSearchInstancesResultSourceParamsWebCrawlerStoreOptionsOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetListAttribute` <a name="GetListAttribute" id="@cdktn/provider-cloudflare.dataCloudflareAiSearchInstances.DataCloudflareAiSearchInstancesResultSourceParamsWebCrawlerStoreOptionsOutputReference.getListAttribute"></a>

```go
func GetListAttribute(terraformAttribute *string) *[]*string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-cloudflare.dataCloudflareAiSearchInstances.DataCloudflareAiSearchInstancesResultSourceParamsWebCrawlerStoreOptionsOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberAttribute` <a name="GetNumberAttribute" id="@cdktn/provider-cloudflare.dataCloudflareAiSearchInstances.DataCloudflareAiSearchInstancesResultSourceParamsWebCrawlerStoreOptionsOutputReference.getNumberAttribute"></a>

```go
func GetNumberAttribute(terraformAttribute *string) *f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-cloudflare.dataCloudflareAiSearchInstances.DataCloudflareAiSearchInstancesResultSourceParamsWebCrawlerStoreOptionsOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberListAttribute` <a name="GetNumberListAttribute" id="@cdktn/provider-cloudflare.dataCloudflareAiSearchInstances.DataCloudflareAiSearchInstancesResultSourceParamsWebCrawlerStoreOptionsOutputReference.getNumberListAttribute"></a>

```go
func GetNumberListAttribute(terraformAttribute *string) *[]*f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-cloudflare.dataCloudflareAiSearchInstances.DataCloudflareAiSearchInstancesResultSourceParamsWebCrawlerStoreOptionsOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberMapAttribute` <a name="GetNumberMapAttribute" id="@cdktn/provider-cloudflare.dataCloudflareAiSearchInstances.DataCloudflareAiSearchInstancesResultSourceParamsWebCrawlerStoreOptionsOutputReference.getNumberMapAttribute"></a>

```go
func GetNumberMapAttribute(terraformAttribute *string) *map[string]*f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-cloudflare.dataCloudflareAiSearchInstances.DataCloudflareAiSearchInstancesResultSourceParamsWebCrawlerStoreOptionsOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetStringAttribute` <a name="GetStringAttribute" id="@cdktn/provider-cloudflare.dataCloudflareAiSearchInstances.DataCloudflareAiSearchInstancesResultSourceParamsWebCrawlerStoreOptionsOutputReference.getStringAttribute"></a>

```go
func GetStringAttribute(terraformAttribute *string) *string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-cloudflare.dataCloudflareAiSearchInstances.DataCloudflareAiSearchInstancesResultSourceParamsWebCrawlerStoreOptionsOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetStringMapAttribute` <a name="GetStringMapAttribute" id="@cdktn/provider-cloudflare.dataCloudflareAiSearchInstances.DataCloudflareAiSearchInstancesResultSourceParamsWebCrawlerStoreOptionsOutputReference.getStringMapAttribute"></a>

```go
func GetStringMapAttribute(terraformAttribute *string) *map[string]*string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-cloudflare.dataCloudflareAiSearchInstances.DataCloudflareAiSearchInstancesResultSourceParamsWebCrawlerStoreOptionsOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `InterpolationForAttribute` <a name="InterpolationForAttribute" id="@cdktn/provider-cloudflare.dataCloudflareAiSearchInstances.DataCloudflareAiSearchInstancesResultSourceParamsWebCrawlerStoreOptionsOutputReference.interpolationForAttribute"></a>

```go
func InterpolationForAttribute(property *string) IResolvable
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktn/provider-cloudflare.dataCloudflareAiSearchInstances.DataCloudflareAiSearchInstancesResultSourceParamsWebCrawlerStoreOptionsOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* *string

---

##### `Resolve` <a name="Resolve" id="@cdktn/provider-cloudflare.dataCloudflareAiSearchInstances.DataCloudflareAiSearchInstancesResultSourceParamsWebCrawlerStoreOptionsOutputReference.resolve"></a>

```go
func Resolve(_context IResolveContext) interface{}
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktn/provider-cloudflare.dataCloudflareAiSearchInstances.DataCloudflareAiSearchInstancesResultSourceParamsWebCrawlerStoreOptionsOutputReference.resolve.parameter._context"></a>

- *Type:* github.com/open-constructs/cdk-terrain-go/cdktn.IResolveContext

---

##### `ToString` <a name="ToString" id="@cdktn/provider-cloudflare.dataCloudflareAiSearchInstances.DataCloudflareAiSearchInstancesResultSourceParamsWebCrawlerStoreOptionsOutputReference.toString"></a>

```go
func ToString() *string
```

Return a string representation of this resolvable object.

Returns a reversible string representation.


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-cloudflare.dataCloudflareAiSearchInstances.DataCloudflareAiSearchInstancesResultSourceParamsWebCrawlerStoreOptionsOutputReference.property.creationStack">CreationStack</a></code> | <code>*[]*string</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktn/provider-cloudflare.dataCloudflareAiSearchInstances.DataCloudflareAiSearchInstancesResultSourceParamsWebCrawlerStoreOptionsOutputReference.property.fqn">Fqn</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktn/provider-cloudflare.dataCloudflareAiSearchInstances.DataCloudflareAiSearchInstancesResultSourceParamsWebCrawlerStoreOptionsOutputReference.property.r2Jurisdiction">R2Jurisdiction</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktn/provider-cloudflare.dataCloudflareAiSearchInstances.DataCloudflareAiSearchInstancesResultSourceParamsWebCrawlerStoreOptionsOutputReference.property.storageId">StorageId</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktn/provider-cloudflare.dataCloudflareAiSearchInstances.DataCloudflareAiSearchInstancesResultSourceParamsWebCrawlerStoreOptionsOutputReference.property.storageType">StorageType</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktn/provider-cloudflare.dataCloudflareAiSearchInstances.DataCloudflareAiSearchInstancesResultSourceParamsWebCrawlerStoreOptionsOutputReference.property.internalValue">InternalValue</a></code> | <code><a href="#@cdktn/provider-cloudflare.dataCloudflareAiSearchInstances.DataCloudflareAiSearchInstancesResultSourceParamsWebCrawlerStoreOptions">DataCloudflareAiSearchInstancesResultSourceParamsWebCrawlerStoreOptions</a></code> | *No description.* |

---

##### `CreationStack`<sup>Required</sup> <a name="CreationStack" id="@cdktn/provider-cloudflare.dataCloudflareAiSearchInstances.DataCloudflareAiSearchInstancesResultSourceParamsWebCrawlerStoreOptionsOutputReference.property.creationStack"></a>

```go
func CreationStack() *[]*string
```

- *Type:* *[]*string

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `Fqn`<sup>Required</sup> <a name="Fqn" id="@cdktn/provider-cloudflare.dataCloudflareAiSearchInstances.DataCloudflareAiSearchInstancesResultSourceParamsWebCrawlerStoreOptionsOutputReference.property.fqn"></a>

```go
func Fqn() *string
```

- *Type:* *string

---

##### `R2Jurisdiction`<sup>Required</sup> <a name="R2Jurisdiction" id="@cdktn/provider-cloudflare.dataCloudflareAiSearchInstances.DataCloudflareAiSearchInstancesResultSourceParamsWebCrawlerStoreOptionsOutputReference.property.r2Jurisdiction"></a>

```go
func R2Jurisdiction() *string
```

- *Type:* *string

---

##### `StorageId`<sup>Required</sup> <a name="StorageId" id="@cdktn/provider-cloudflare.dataCloudflareAiSearchInstances.DataCloudflareAiSearchInstancesResultSourceParamsWebCrawlerStoreOptionsOutputReference.property.storageId"></a>

```go
func StorageId() *string
```

- *Type:* *string

---

##### `StorageType`<sup>Required</sup> <a name="StorageType" id="@cdktn/provider-cloudflare.dataCloudflareAiSearchInstances.DataCloudflareAiSearchInstancesResultSourceParamsWebCrawlerStoreOptionsOutputReference.property.storageType"></a>

```go
func StorageType() *string
```

- *Type:* *string

---

##### `InternalValue`<sup>Optional</sup> <a name="InternalValue" id="@cdktn/provider-cloudflare.dataCloudflareAiSearchInstances.DataCloudflareAiSearchInstancesResultSourceParamsWebCrawlerStoreOptionsOutputReference.property.internalValue"></a>

```go
func InternalValue() DataCloudflareAiSearchInstancesResultSourceParamsWebCrawlerStoreOptions
```

- *Type:* <a href="#@cdktn/provider-cloudflare.dataCloudflareAiSearchInstances.DataCloudflareAiSearchInstancesResultSourceParamsWebCrawlerStoreOptions">DataCloudflareAiSearchInstancesResultSourceParamsWebCrawlerStoreOptions</a>

---



