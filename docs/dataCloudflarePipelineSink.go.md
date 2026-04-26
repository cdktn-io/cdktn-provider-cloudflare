# `dataCloudflarePipelineSink` Submodule <a name="`dataCloudflarePipelineSink` Submodule" id="@cdktn/provider-cloudflare.dataCloudflarePipelineSink"></a>

## Constructs <a name="Constructs" id="Constructs"></a>

### DataCloudflarePipelineSink <a name="DataCloudflarePipelineSink" id="@cdktn/provider-cloudflare.dataCloudflarePipelineSink.DataCloudflarePipelineSink"></a>

Represents a {@link https://registry.terraform.io/providers/cloudflare/cloudflare/5.19.0/docs/data-sources/pipeline_sink cloudflare_pipeline_sink}.

#### Initializers <a name="Initializers" id="@cdktn/provider-cloudflare.dataCloudflarePipelineSink.DataCloudflarePipelineSink.Initializer"></a>

```go
import "github.com/cdktn-io/cdktn-provider-cloudflare-go/cloudflare/v14/datacloudflarepipelinesink"

datacloudflarepipelinesink.NewDataCloudflarePipelineSink(scope Construct, id *string, config DataCloudflarePipelineSinkConfig) DataCloudflarePipelineSink
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-cloudflare.dataCloudflarePipelineSink.DataCloudflarePipelineSink.Initializer.parameter.scope">scope</a></code> | <code>github.com/aws/constructs-go/constructs/v10.Construct</code> | The scope in which to define this construct. |
| <code><a href="#@cdktn/provider-cloudflare.dataCloudflarePipelineSink.DataCloudflarePipelineSink.Initializer.parameter.id">id</a></code> | <code>*string</code> | The scoped construct ID. |
| <code><a href="#@cdktn/provider-cloudflare.dataCloudflarePipelineSink.DataCloudflarePipelineSink.Initializer.parameter.config">config</a></code> | <code><a href="#@cdktn/provider-cloudflare.dataCloudflarePipelineSink.DataCloudflarePipelineSinkConfig">DataCloudflarePipelineSinkConfig</a></code> | *No description.* |

---

##### `scope`<sup>Required</sup> <a name="scope" id="@cdktn/provider-cloudflare.dataCloudflarePipelineSink.DataCloudflarePipelineSink.Initializer.parameter.scope"></a>

- *Type:* github.com/aws/constructs-go/constructs/v10.Construct

The scope in which to define this construct.

---

##### `id`<sup>Required</sup> <a name="id" id="@cdktn/provider-cloudflare.dataCloudflarePipelineSink.DataCloudflarePipelineSink.Initializer.parameter.id"></a>

- *Type:* *string

The scoped construct ID.

Must be unique amongst siblings in the same scope

---

##### `config`<sup>Optional</sup> <a name="config" id="@cdktn/provider-cloudflare.dataCloudflarePipelineSink.DataCloudflarePipelineSink.Initializer.parameter.config"></a>

- *Type:* <a href="#@cdktn/provider-cloudflare.dataCloudflarePipelineSink.DataCloudflarePipelineSinkConfig">DataCloudflarePipelineSinkConfig</a>

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-cloudflare.dataCloudflarePipelineSink.DataCloudflarePipelineSink.toString">ToString</a></code> | Returns a string representation of this construct. |
| <code><a href="#@cdktn/provider-cloudflare.dataCloudflarePipelineSink.DataCloudflarePipelineSink.with">With</a></code> | Applies one or more mixins to this construct. |
| <code><a href="#@cdktn/provider-cloudflare.dataCloudflarePipelineSink.DataCloudflarePipelineSink.addOverride">AddOverride</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-cloudflare.dataCloudflarePipelineSink.DataCloudflarePipelineSink.overrideLogicalId">OverrideLogicalId</a></code> | Overrides the auto-generated logical ID with a specific ID. |
| <code><a href="#@cdktn/provider-cloudflare.dataCloudflarePipelineSink.DataCloudflarePipelineSink.resetOverrideLogicalId">ResetOverrideLogicalId</a></code> | Resets a previously passed logical Id to use the auto-generated logical id again. |
| <code><a href="#@cdktn/provider-cloudflare.dataCloudflarePipelineSink.DataCloudflarePipelineSink.toHclTerraform">ToHclTerraform</a></code> | Adds this resource to the terraform JSON output. |
| <code><a href="#@cdktn/provider-cloudflare.dataCloudflarePipelineSink.DataCloudflarePipelineSink.toMetadata">ToMetadata</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-cloudflare.dataCloudflarePipelineSink.DataCloudflarePipelineSink.toTerraform">ToTerraform</a></code> | Adds this resource to the terraform JSON output. |
| <code><a href="#@cdktn/provider-cloudflare.dataCloudflarePipelineSink.DataCloudflarePipelineSink.getAnyMapAttribute">GetAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-cloudflare.dataCloudflarePipelineSink.DataCloudflarePipelineSink.getBooleanAttribute">GetBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-cloudflare.dataCloudflarePipelineSink.DataCloudflarePipelineSink.getBooleanMapAttribute">GetBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-cloudflare.dataCloudflarePipelineSink.DataCloudflarePipelineSink.getListAttribute">GetListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-cloudflare.dataCloudflarePipelineSink.DataCloudflarePipelineSink.getNumberAttribute">GetNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-cloudflare.dataCloudflarePipelineSink.DataCloudflarePipelineSink.getNumberListAttribute">GetNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-cloudflare.dataCloudflarePipelineSink.DataCloudflarePipelineSink.getNumberMapAttribute">GetNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-cloudflare.dataCloudflarePipelineSink.DataCloudflarePipelineSink.getStringAttribute">GetStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-cloudflare.dataCloudflarePipelineSink.DataCloudflarePipelineSink.getStringMapAttribute">GetStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-cloudflare.dataCloudflarePipelineSink.DataCloudflarePipelineSink.interpolationForAttribute">InterpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-cloudflare.dataCloudflarePipelineSink.DataCloudflarePipelineSink.putFilter">PutFilter</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-cloudflare.dataCloudflarePipelineSink.DataCloudflarePipelineSink.resetAccountId">ResetAccountId</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-cloudflare.dataCloudflarePipelineSink.DataCloudflarePipelineSink.resetFilter">ResetFilter</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-cloudflare.dataCloudflarePipelineSink.DataCloudflarePipelineSink.resetSinkId">ResetSinkId</a></code> | *No description.* |

---

##### `ToString` <a name="ToString" id="@cdktn/provider-cloudflare.dataCloudflarePipelineSink.DataCloudflarePipelineSink.toString"></a>

```go
func ToString() *string
```

Returns a string representation of this construct.

##### `With` <a name="With" id="@cdktn/provider-cloudflare.dataCloudflarePipelineSink.DataCloudflarePipelineSink.with"></a>

```go
func With(mixins ...IMixin) IConstruct
```

Applies one or more mixins to this construct.

Mixins are applied in order. The list of constructs is captured at the
start of the call, so constructs added by a mixin will not be visited.
Use multiple `with()` calls if subsequent mixins should apply to added
constructs.

###### `mixins`<sup>Required</sup> <a name="mixins" id="@cdktn/provider-cloudflare.dataCloudflarePipelineSink.DataCloudflarePipelineSink.with.parameter.mixins"></a>

- *Type:* ...github.com/aws/constructs-go/constructs/v10.IMixin

The mixins to apply.

---

##### `AddOverride` <a name="AddOverride" id="@cdktn/provider-cloudflare.dataCloudflarePipelineSink.DataCloudflarePipelineSink.addOverride"></a>

```go
func AddOverride(path *string, value interface{})
```

###### `path`<sup>Required</sup> <a name="path" id="@cdktn/provider-cloudflare.dataCloudflarePipelineSink.DataCloudflarePipelineSink.addOverride.parameter.path"></a>

- *Type:* *string

---

###### `value`<sup>Required</sup> <a name="value" id="@cdktn/provider-cloudflare.dataCloudflarePipelineSink.DataCloudflarePipelineSink.addOverride.parameter.value"></a>

- *Type:* interface{}

---

##### `OverrideLogicalId` <a name="OverrideLogicalId" id="@cdktn/provider-cloudflare.dataCloudflarePipelineSink.DataCloudflarePipelineSink.overrideLogicalId"></a>

```go
func OverrideLogicalId(newLogicalId *string)
```

Overrides the auto-generated logical ID with a specific ID.

###### `newLogicalId`<sup>Required</sup> <a name="newLogicalId" id="@cdktn/provider-cloudflare.dataCloudflarePipelineSink.DataCloudflarePipelineSink.overrideLogicalId.parameter.newLogicalId"></a>

- *Type:* *string

The new logical ID to use for this stack element.

---

##### `ResetOverrideLogicalId` <a name="ResetOverrideLogicalId" id="@cdktn/provider-cloudflare.dataCloudflarePipelineSink.DataCloudflarePipelineSink.resetOverrideLogicalId"></a>

```go
func ResetOverrideLogicalId()
```

Resets a previously passed logical Id to use the auto-generated logical id again.

##### `ToHclTerraform` <a name="ToHclTerraform" id="@cdktn/provider-cloudflare.dataCloudflarePipelineSink.DataCloudflarePipelineSink.toHclTerraform"></a>

```go
func ToHclTerraform() interface{}
```

Adds this resource to the terraform JSON output.

##### `ToMetadata` <a name="ToMetadata" id="@cdktn/provider-cloudflare.dataCloudflarePipelineSink.DataCloudflarePipelineSink.toMetadata"></a>

```go
func ToMetadata() interface{}
```

##### `ToTerraform` <a name="ToTerraform" id="@cdktn/provider-cloudflare.dataCloudflarePipelineSink.DataCloudflarePipelineSink.toTerraform"></a>

```go
func ToTerraform() interface{}
```

Adds this resource to the terraform JSON output.

##### `GetAnyMapAttribute` <a name="GetAnyMapAttribute" id="@cdktn/provider-cloudflare.dataCloudflarePipelineSink.DataCloudflarePipelineSink.getAnyMapAttribute"></a>

```go
func GetAnyMapAttribute(terraformAttribute *string) *map[string]interface{}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-cloudflare.dataCloudflarePipelineSink.DataCloudflarePipelineSink.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetBooleanAttribute` <a name="GetBooleanAttribute" id="@cdktn/provider-cloudflare.dataCloudflarePipelineSink.DataCloudflarePipelineSink.getBooleanAttribute"></a>

```go
func GetBooleanAttribute(terraformAttribute *string) IResolvable
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-cloudflare.dataCloudflarePipelineSink.DataCloudflarePipelineSink.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetBooleanMapAttribute` <a name="GetBooleanMapAttribute" id="@cdktn/provider-cloudflare.dataCloudflarePipelineSink.DataCloudflarePipelineSink.getBooleanMapAttribute"></a>

```go
func GetBooleanMapAttribute(terraformAttribute *string) *map[string]*bool
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-cloudflare.dataCloudflarePipelineSink.DataCloudflarePipelineSink.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetListAttribute` <a name="GetListAttribute" id="@cdktn/provider-cloudflare.dataCloudflarePipelineSink.DataCloudflarePipelineSink.getListAttribute"></a>

```go
func GetListAttribute(terraformAttribute *string) *[]*string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-cloudflare.dataCloudflarePipelineSink.DataCloudflarePipelineSink.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberAttribute` <a name="GetNumberAttribute" id="@cdktn/provider-cloudflare.dataCloudflarePipelineSink.DataCloudflarePipelineSink.getNumberAttribute"></a>

```go
func GetNumberAttribute(terraformAttribute *string) *f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-cloudflare.dataCloudflarePipelineSink.DataCloudflarePipelineSink.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberListAttribute` <a name="GetNumberListAttribute" id="@cdktn/provider-cloudflare.dataCloudflarePipelineSink.DataCloudflarePipelineSink.getNumberListAttribute"></a>

```go
func GetNumberListAttribute(terraformAttribute *string) *[]*f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-cloudflare.dataCloudflarePipelineSink.DataCloudflarePipelineSink.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberMapAttribute` <a name="GetNumberMapAttribute" id="@cdktn/provider-cloudflare.dataCloudflarePipelineSink.DataCloudflarePipelineSink.getNumberMapAttribute"></a>

```go
func GetNumberMapAttribute(terraformAttribute *string) *map[string]*f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-cloudflare.dataCloudflarePipelineSink.DataCloudflarePipelineSink.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetStringAttribute` <a name="GetStringAttribute" id="@cdktn/provider-cloudflare.dataCloudflarePipelineSink.DataCloudflarePipelineSink.getStringAttribute"></a>

```go
func GetStringAttribute(terraformAttribute *string) *string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-cloudflare.dataCloudflarePipelineSink.DataCloudflarePipelineSink.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetStringMapAttribute` <a name="GetStringMapAttribute" id="@cdktn/provider-cloudflare.dataCloudflarePipelineSink.DataCloudflarePipelineSink.getStringMapAttribute"></a>

```go
func GetStringMapAttribute(terraformAttribute *string) *map[string]*string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-cloudflare.dataCloudflarePipelineSink.DataCloudflarePipelineSink.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `InterpolationForAttribute` <a name="InterpolationForAttribute" id="@cdktn/provider-cloudflare.dataCloudflarePipelineSink.DataCloudflarePipelineSink.interpolationForAttribute"></a>

```go
func InterpolationForAttribute(terraformAttribute *string) IResolvable
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-cloudflare.dataCloudflarePipelineSink.DataCloudflarePipelineSink.interpolationForAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `PutFilter` <a name="PutFilter" id="@cdktn/provider-cloudflare.dataCloudflarePipelineSink.DataCloudflarePipelineSink.putFilter"></a>

```go
func PutFilter(value DataCloudflarePipelineSinkFilter)
```

###### `value`<sup>Required</sup> <a name="value" id="@cdktn/provider-cloudflare.dataCloudflarePipelineSink.DataCloudflarePipelineSink.putFilter.parameter.value"></a>

- *Type:* <a href="#@cdktn/provider-cloudflare.dataCloudflarePipelineSink.DataCloudflarePipelineSinkFilter">DataCloudflarePipelineSinkFilter</a>

---

##### `ResetAccountId` <a name="ResetAccountId" id="@cdktn/provider-cloudflare.dataCloudflarePipelineSink.DataCloudflarePipelineSink.resetAccountId"></a>

```go
func ResetAccountId()
```

##### `ResetFilter` <a name="ResetFilter" id="@cdktn/provider-cloudflare.dataCloudflarePipelineSink.DataCloudflarePipelineSink.resetFilter"></a>

```go
func ResetFilter()
```

##### `ResetSinkId` <a name="ResetSinkId" id="@cdktn/provider-cloudflare.dataCloudflarePipelineSink.DataCloudflarePipelineSink.resetSinkId"></a>

```go
func ResetSinkId()
```

#### Static Functions <a name="Static Functions" id="Static Functions"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-cloudflare.dataCloudflarePipelineSink.DataCloudflarePipelineSink.isConstruct">IsConstruct</a></code> | Checks if `x` is a construct. |
| <code><a href="#@cdktn/provider-cloudflare.dataCloudflarePipelineSink.DataCloudflarePipelineSink.isTerraformElement">IsTerraformElement</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-cloudflare.dataCloudflarePipelineSink.DataCloudflarePipelineSink.isTerraformDataSource">IsTerraformDataSource</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-cloudflare.dataCloudflarePipelineSink.DataCloudflarePipelineSink.generateConfigForImport">GenerateConfigForImport</a></code> | Generates CDKTN code for importing a DataCloudflarePipelineSink resource upon running "cdktn plan <stack-name>". |

---

##### `IsConstruct` <a name="IsConstruct" id="@cdktn/provider-cloudflare.dataCloudflarePipelineSink.DataCloudflarePipelineSink.isConstruct"></a>

```go
import "github.com/cdktn-io/cdktn-provider-cloudflare-go/cloudflare/v14/datacloudflarepipelinesink"

datacloudflarepipelinesink.DataCloudflarePipelineSink_IsConstruct(x interface{}) *bool
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

###### `x`<sup>Required</sup> <a name="x" id="@cdktn/provider-cloudflare.dataCloudflarePipelineSink.DataCloudflarePipelineSink.isConstruct.parameter.x"></a>

- *Type:* interface{}

Any object.

---

##### `IsTerraformElement` <a name="IsTerraformElement" id="@cdktn/provider-cloudflare.dataCloudflarePipelineSink.DataCloudflarePipelineSink.isTerraformElement"></a>

```go
import "github.com/cdktn-io/cdktn-provider-cloudflare-go/cloudflare/v14/datacloudflarepipelinesink"

datacloudflarepipelinesink.DataCloudflarePipelineSink_IsTerraformElement(x interface{}) *bool
```

###### `x`<sup>Required</sup> <a name="x" id="@cdktn/provider-cloudflare.dataCloudflarePipelineSink.DataCloudflarePipelineSink.isTerraformElement.parameter.x"></a>

- *Type:* interface{}

---

##### `IsTerraformDataSource` <a name="IsTerraformDataSource" id="@cdktn/provider-cloudflare.dataCloudflarePipelineSink.DataCloudflarePipelineSink.isTerraformDataSource"></a>

```go
import "github.com/cdktn-io/cdktn-provider-cloudflare-go/cloudflare/v14/datacloudflarepipelinesink"

datacloudflarepipelinesink.DataCloudflarePipelineSink_IsTerraformDataSource(x interface{}) *bool
```

###### `x`<sup>Required</sup> <a name="x" id="@cdktn/provider-cloudflare.dataCloudflarePipelineSink.DataCloudflarePipelineSink.isTerraformDataSource.parameter.x"></a>

- *Type:* interface{}

---

##### `GenerateConfigForImport` <a name="GenerateConfigForImport" id="@cdktn/provider-cloudflare.dataCloudflarePipelineSink.DataCloudflarePipelineSink.generateConfigForImport"></a>

```go
import "github.com/cdktn-io/cdktn-provider-cloudflare-go/cloudflare/v14/datacloudflarepipelinesink"

datacloudflarepipelinesink.DataCloudflarePipelineSink_GenerateConfigForImport(scope Construct, importToId *string, importFromId *string, provider TerraformProvider) ImportableResource
```

Generates CDKTN code for importing a DataCloudflarePipelineSink resource upon running "cdktn plan <stack-name>".

###### `scope`<sup>Required</sup> <a name="scope" id="@cdktn/provider-cloudflare.dataCloudflarePipelineSink.DataCloudflarePipelineSink.generateConfigForImport.parameter.scope"></a>

- *Type:* github.com/aws/constructs-go/constructs/v10.Construct

The scope in which to define this construct.

---

###### `importToId`<sup>Required</sup> <a name="importToId" id="@cdktn/provider-cloudflare.dataCloudflarePipelineSink.DataCloudflarePipelineSink.generateConfigForImport.parameter.importToId"></a>

- *Type:* *string

The construct id used in the generated config for the DataCloudflarePipelineSink to import.

---

###### `importFromId`<sup>Required</sup> <a name="importFromId" id="@cdktn/provider-cloudflare.dataCloudflarePipelineSink.DataCloudflarePipelineSink.generateConfigForImport.parameter.importFromId"></a>

- *Type:* *string

The id of the existing DataCloudflarePipelineSink that should be imported.

Refer to the {@link https://registry.terraform.io/providers/cloudflare/cloudflare/5.19.0/docs/data-sources/pipeline_sink#import import section} in the documentation of this resource for the id to use

---

###### `provider`<sup>Optional</sup> <a name="provider" id="@cdktn/provider-cloudflare.dataCloudflarePipelineSink.DataCloudflarePipelineSink.generateConfigForImport.parameter.provider"></a>

- *Type:* github.com/open-constructs/cdk-terrain-go/cdktn.TerraformProvider

? Optional instance of the provider where the DataCloudflarePipelineSink to import is found.

---

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-cloudflare.dataCloudflarePipelineSink.DataCloudflarePipelineSink.property.node">Node</a></code> | <code>github.com/aws/constructs-go/constructs/v10.Node</code> | The tree node. |
| <code><a href="#@cdktn/provider-cloudflare.dataCloudflarePipelineSink.DataCloudflarePipelineSink.property.cdktfStack">CdktfStack</a></code> | <code>github.com/open-constructs/cdk-terrain-go/cdktn.TerraformStack</code> | *No description.* |
| <code><a href="#@cdktn/provider-cloudflare.dataCloudflarePipelineSink.DataCloudflarePipelineSink.property.fqn">Fqn</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktn/provider-cloudflare.dataCloudflarePipelineSink.DataCloudflarePipelineSink.property.friendlyUniqueId">FriendlyUniqueId</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktn/provider-cloudflare.dataCloudflarePipelineSink.DataCloudflarePipelineSink.property.terraformMetaArguments">TerraformMetaArguments</a></code> | <code>*map[string]interface{}</code> | *No description.* |
| <code><a href="#@cdktn/provider-cloudflare.dataCloudflarePipelineSink.DataCloudflarePipelineSink.property.terraformResourceType">TerraformResourceType</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktn/provider-cloudflare.dataCloudflarePipelineSink.DataCloudflarePipelineSink.property.terraformGeneratorMetadata">TerraformGeneratorMetadata</a></code> | <code>github.com/open-constructs/cdk-terrain-go/cdktn.TerraformProviderGeneratorMetadata</code> | *No description.* |
| <code><a href="#@cdktn/provider-cloudflare.dataCloudflarePipelineSink.DataCloudflarePipelineSink.property.count">Count</a></code> | <code>interface{}</code> | *No description.* |
| <code><a href="#@cdktn/provider-cloudflare.dataCloudflarePipelineSink.DataCloudflarePipelineSink.property.dependsOn">DependsOn</a></code> | <code>*[]*string</code> | *No description.* |
| <code><a href="#@cdktn/provider-cloudflare.dataCloudflarePipelineSink.DataCloudflarePipelineSink.property.forEach">ForEach</a></code> | <code>github.com/open-constructs/cdk-terrain-go/cdktn.ITerraformIterator</code> | *No description.* |
| <code><a href="#@cdktn/provider-cloudflare.dataCloudflarePipelineSink.DataCloudflarePipelineSink.property.lifecycle">Lifecycle</a></code> | <code>github.com/open-constructs/cdk-terrain-go/cdktn.TerraformResourceLifecycle</code> | *No description.* |
| <code><a href="#@cdktn/provider-cloudflare.dataCloudflarePipelineSink.DataCloudflarePipelineSink.property.provider">Provider</a></code> | <code>github.com/open-constructs/cdk-terrain-go/cdktn.TerraformProvider</code> | *No description.* |
| <code><a href="#@cdktn/provider-cloudflare.dataCloudflarePipelineSink.DataCloudflarePipelineSink.property.config">Config</a></code> | <code><a href="#@cdktn/provider-cloudflare.dataCloudflarePipelineSink.DataCloudflarePipelineSinkConfigAOutputReference">DataCloudflarePipelineSinkConfigAOutputReference</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-cloudflare.dataCloudflarePipelineSink.DataCloudflarePipelineSink.property.createdAt">CreatedAt</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktn/provider-cloudflare.dataCloudflarePipelineSink.DataCloudflarePipelineSink.property.filter">Filter</a></code> | <code><a href="#@cdktn/provider-cloudflare.dataCloudflarePipelineSink.DataCloudflarePipelineSinkFilterOutputReference">DataCloudflarePipelineSinkFilterOutputReference</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-cloudflare.dataCloudflarePipelineSink.DataCloudflarePipelineSink.property.format">Format</a></code> | <code><a href="#@cdktn/provider-cloudflare.dataCloudflarePipelineSink.DataCloudflarePipelineSinkFormatOutputReference">DataCloudflarePipelineSinkFormatOutputReference</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-cloudflare.dataCloudflarePipelineSink.DataCloudflarePipelineSink.property.id">Id</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktn/provider-cloudflare.dataCloudflarePipelineSink.DataCloudflarePipelineSink.property.modifiedAt">ModifiedAt</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktn/provider-cloudflare.dataCloudflarePipelineSink.DataCloudflarePipelineSink.property.name">Name</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktn/provider-cloudflare.dataCloudflarePipelineSink.DataCloudflarePipelineSink.property.schema">Schema</a></code> | <code><a href="#@cdktn/provider-cloudflare.dataCloudflarePipelineSink.DataCloudflarePipelineSinkSchemaOutputReference">DataCloudflarePipelineSinkSchemaOutputReference</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-cloudflare.dataCloudflarePipelineSink.DataCloudflarePipelineSink.property.type">Type</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktn/provider-cloudflare.dataCloudflarePipelineSink.DataCloudflarePipelineSink.property.accountIdInput">AccountIdInput</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktn/provider-cloudflare.dataCloudflarePipelineSink.DataCloudflarePipelineSink.property.filterInput">FilterInput</a></code> | <code>interface{}</code> | *No description.* |
| <code><a href="#@cdktn/provider-cloudflare.dataCloudflarePipelineSink.DataCloudflarePipelineSink.property.sinkIdInput">SinkIdInput</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktn/provider-cloudflare.dataCloudflarePipelineSink.DataCloudflarePipelineSink.property.accountId">AccountId</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktn/provider-cloudflare.dataCloudflarePipelineSink.DataCloudflarePipelineSink.property.sinkId">SinkId</a></code> | <code>*string</code> | *No description.* |

---

##### `Node`<sup>Required</sup> <a name="Node" id="@cdktn/provider-cloudflare.dataCloudflarePipelineSink.DataCloudflarePipelineSink.property.node"></a>

```go
func Node() Node
```

- *Type:* github.com/aws/constructs-go/constructs/v10.Node

The tree node.

---

##### `CdktfStack`<sup>Required</sup> <a name="CdktfStack" id="@cdktn/provider-cloudflare.dataCloudflarePipelineSink.DataCloudflarePipelineSink.property.cdktfStack"></a>

```go
func CdktfStack() TerraformStack
```

- *Type:* github.com/open-constructs/cdk-terrain-go/cdktn.TerraformStack

---

##### `Fqn`<sup>Required</sup> <a name="Fqn" id="@cdktn/provider-cloudflare.dataCloudflarePipelineSink.DataCloudflarePipelineSink.property.fqn"></a>

```go
func Fqn() *string
```

- *Type:* *string

---

##### `FriendlyUniqueId`<sup>Required</sup> <a name="FriendlyUniqueId" id="@cdktn/provider-cloudflare.dataCloudflarePipelineSink.DataCloudflarePipelineSink.property.friendlyUniqueId"></a>

```go
func FriendlyUniqueId() *string
```

- *Type:* *string

---

##### `TerraformMetaArguments`<sup>Required</sup> <a name="TerraformMetaArguments" id="@cdktn/provider-cloudflare.dataCloudflarePipelineSink.DataCloudflarePipelineSink.property.terraformMetaArguments"></a>

```go
func TerraformMetaArguments() *map[string]interface{}
```

- *Type:* *map[string]interface{}

---

##### `TerraformResourceType`<sup>Required</sup> <a name="TerraformResourceType" id="@cdktn/provider-cloudflare.dataCloudflarePipelineSink.DataCloudflarePipelineSink.property.terraformResourceType"></a>

```go
func TerraformResourceType() *string
```

- *Type:* *string

---

##### `TerraformGeneratorMetadata`<sup>Optional</sup> <a name="TerraformGeneratorMetadata" id="@cdktn/provider-cloudflare.dataCloudflarePipelineSink.DataCloudflarePipelineSink.property.terraformGeneratorMetadata"></a>

```go
func TerraformGeneratorMetadata() TerraformProviderGeneratorMetadata
```

- *Type:* github.com/open-constructs/cdk-terrain-go/cdktn.TerraformProviderGeneratorMetadata

---

##### `Count`<sup>Optional</sup> <a name="Count" id="@cdktn/provider-cloudflare.dataCloudflarePipelineSink.DataCloudflarePipelineSink.property.count"></a>

```go
func Count() interface{}
```

- *Type:* interface{}

---

##### `DependsOn`<sup>Optional</sup> <a name="DependsOn" id="@cdktn/provider-cloudflare.dataCloudflarePipelineSink.DataCloudflarePipelineSink.property.dependsOn"></a>

```go
func DependsOn() *[]*string
```

- *Type:* *[]*string

---

##### `ForEach`<sup>Optional</sup> <a name="ForEach" id="@cdktn/provider-cloudflare.dataCloudflarePipelineSink.DataCloudflarePipelineSink.property.forEach"></a>

```go
func ForEach() ITerraformIterator
```

- *Type:* github.com/open-constructs/cdk-terrain-go/cdktn.ITerraformIterator

---

##### `Lifecycle`<sup>Optional</sup> <a name="Lifecycle" id="@cdktn/provider-cloudflare.dataCloudflarePipelineSink.DataCloudflarePipelineSink.property.lifecycle"></a>

```go
func Lifecycle() TerraformResourceLifecycle
```

- *Type:* github.com/open-constructs/cdk-terrain-go/cdktn.TerraformResourceLifecycle

---

##### `Provider`<sup>Optional</sup> <a name="Provider" id="@cdktn/provider-cloudflare.dataCloudflarePipelineSink.DataCloudflarePipelineSink.property.provider"></a>

```go
func Provider() TerraformProvider
```

- *Type:* github.com/open-constructs/cdk-terrain-go/cdktn.TerraformProvider

---

##### `Config`<sup>Required</sup> <a name="Config" id="@cdktn/provider-cloudflare.dataCloudflarePipelineSink.DataCloudflarePipelineSink.property.config"></a>

```go
func Config() DataCloudflarePipelineSinkConfigAOutputReference
```

- *Type:* <a href="#@cdktn/provider-cloudflare.dataCloudflarePipelineSink.DataCloudflarePipelineSinkConfigAOutputReference">DataCloudflarePipelineSinkConfigAOutputReference</a>

---

##### `CreatedAt`<sup>Required</sup> <a name="CreatedAt" id="@cdktn/provider-cloudflare.dataCloudflarePipelineSink.DataCloudflarePipelineSink.property.createdAt"></a>

```go
func CreatedAt() *string
```

- *Type:* *string

---

##### `Filter`<sup>Required</sup> <a name="Filter" id="@cdktn/provider-cloudflare.dataCloudflarePipelineSink.DataCloudflarePipelineSink.property.filter"></a>

```go
func Filter() DataCloudflarePipelineSinkFilterOutputReference
```

- *Type:* <a href="#@cdktn/provider-cloudflare.dataCloudflarePipelineSink.DataCloudflarePipelineSinkFilterOutputReference">DataCloudflarePipelineSinkFilterOutputReference</a>

---

##### `Format`<sup>Required</sup> <a name="Format" id="@cdktn/provider-cloudflare.dataCloudflarePipelineSink.DataCloudflarePipelineSink.property.format"></a>

```go
func Format() DataCloudflarePipelineSinkFormatOutputReference
```

- *Type:* <a href="#@cdktn/provider-cloudflare.dataCloudflarePipelineSink.DataCloudflarePipelineSinkFormatOutputReference">DataCloudflarePipelineSinkFormatOutputReference</a>

---

##### `Id`<sup>Required</sup> <a name="Id" id="@cdktn/provider-cloudflare.dataCloudflarePipelineSink.DataCloudflarePipelineSink.property.id"></a>

```go
func Id() *string
```

- *Type:* *string

---

##### `ModifiedAt`<sup>Required</sup> <a name="ModifiedAt" id="@cdktn/provider-cloudflare.dataCloudflarePipelineSink.DataCloudflarePipelineSink.property.modifiedAt"></a>

```go
func ModifiedAt() *string
```

- *Type:* *string

---

##### `Name`<sup>Required</sup> <a name="Name" id="@cdktn/provider-cloudflare.dataCloudflarePipelineSink.DataCloudflarePipelineSink.property.name"></a>

```go
func Name() *string
```

- *Type:* *string

---

##### `Schema`<sup>Required</sup> <a name="Schema" id="@cdktn/provider-cloudflare.dataCloudflarePipelineSink.DataCloudflarePipelineSink.property.schema"></a>

```go
func Schema() DataCloudflarePipelineSinkSchemaOutputReference
```

- *Type:* <a href="#@cdktn/provider-cloudflare.dataCloudflarePipelineSink.DataCloudflarePipelineSinkSchemaOutputReference">DataCloudflarePipelineSinkSchemaOutputReference</a>

---

##### `Type`<sup>Required</sup> <a name="Type" id="@cdktn/provider-cloudflare.dataCloudflarePipelineSink.DataCloudflarePipelineSink.property.type"></a>

```go
func Type() *string
```

- *Type:* *string

---

##### `AccountIdInput`<sup>Optional</sup> <a name="AccountIdInput" id="@cdktn/provider-cloudflare.dataCloudflarePipelineSink.DataCloudflarePipelineSink.property.accountIdInput"></a>

```go
func AccountIdInput() *string
```

- *Type:* *string

---

##### `FilterInput`<sup>Optional</sup> <a name="FilterInput" id="@cdktn/provider-cloudflare.dataCloudflarePipelineSink.DataCloudflarePipelineSink.property.filterInput"></a>

```go
func FilterInput() interface{}
```

- *Type:* interface{}

---

##### `SinkIdInput`<sup>Optional</sup> <a name="SinkIdInput" id="@cdktn/provider-cloudflare.dataCloudflarePipelineSink.DataCloudflarePipelineSink.property.sinkIdInput"></a>

```go
func SinkIdInput() *string
```

- *Type:* *string

---

##### `AccountId`<sup>Required</sup> <a name="AccountId" id="@cdktn/provider-cloudflare.dataCloudflarePipelineSink.DataCloudflarePipelineSink.property.accountId"></a>

```go
func AccountId() *string
```

- *Type:* *string

---

##### `SinkId`<sup>Required</sup> <a name="SinkId" id="@cdktn/provider-cloudflare.dataCloudflarePipelineSink.DataCloudflarePipelineSink.property.sinkId"></a>

```go
func SinkId() *string
```

- *Type:* *string

---

#### Constants <a name="Constants" id="Constants"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-cloudflare.dataCloudflarePipelineSink.DataCloudflarePipelineSink.property.tfResourceType">TfResourceType</a></code> | <code>*string</code> | *No description.* |

---

##### `TfResourceType`<sup>Required</sup> <a name="TfResourceType" id="@cdktn/provider-cloudflare.dataCloudflarePipelineSink.DataCloudflarePipelineSink.property.tfResourceType"></a>

```go
func TfResourceType() *string
```

- *Type:* *string

---

## Structs <a name="Structs" id="Structs"></a>

### DataCloudflarePipelineSinkConfig <a name="DataCloudflarePipelineSinkConfig" id="@cdktn/provider-cloudflare.dataCloudflarePipelineSink.DataCloudflarePipelineSinkConfig"></a>

#### Initializer <a name="Initializer" id="@cdktn/provider-cloudflare.dataCloudflarePipelineSink.DataCloudflarePipelineSinkConfig.Initializer"></a>

```go
import "github.com/cdktn-io/cdktn-provider-cloudflare-go/cloudflare/v14/datacloudflarepipelinesink"

&datacloudflarepipelinesink.DataCloudflarePipelineSinkConfig {
	Connection: interface{},
	Count: interface{},
	DependsOn: *[]github.com/open-constructs/cdk-terrain-go/cdktn.ITerraformDependable,
	ForEach: github.com/open-constructs/cdk-terrain-go/cdktn.ITerraformIterator,
	Lifecycle: github.com/open-constructs/cdk-terrain-go/cdktn.TerraformResourceLifecycle,
	Provider: github.com/open-constructs/cdk-terrain-go/cdktn.TerraformProvider,
	Provisioners: *[]interface{},
	AccountId: *string,
	Filter: github.com/cdktn-io/cdktn-provider-cloudflare-go/cloudflare/v14.dataCloudflarePipelineSink.DataCloudflarePipelineSinkFilter,
	SinkId: *string,
}
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-cloudflare.dataCloudflarePipelineSink.DataCloudflarePipelineSinkConfig.property.connection">Connection</a></code> | <code>interface{}</code> | *No description.* |
| <code><a href="#@cdktn/provider-cloudflare.dataCloudflarePipelineSink.DataCloudflarePipelineSinkConfig.property.count">Count</a></code> | <code>interface{}</code> | *No description.* |
| <code><a href="#@cdktn/provider-cloudflare.dataCloudflarePipelineSink.DataCloudflarePipelineSinkConfig.property.dependsOn">DependsOn</a></code> | <code>*[]github.com/open-constructs/cdk-terrain-go/cdktn.ITerraformDependable</code> | *No description.* |
| <code><a href="#@cdktn/provider-cloudflare.dataCloudflarePipelineSink.DataCloudflarePipelineSinkConfig.property.forEach">ForEach</a></code> | <code>github.com/open-constructs/cdk-terrain-go/cdktn.ITerraformIterator</code> | *No description.* |
| <code><a href="#@cdktn/provider-cloudflare.dataCloudflarePipelineSink.DataCloudflarePipelineSinkConfig.property.lifecycle">Lifecycle</a></code> | <code>github.com/open-constructs/cdk-terrain-go/cdktn.TerraformResourceLifecycle</code> | *No description.* |
| <code><a href="#@cdktn/provider-cloudflare.dataCloudflarePipelineSink.DataCloudflarePipelineSinkConfig.property.provider">Provider</a></code> | <code>github.com/open-constructs/cdk-terrain-go/cdktn.TerraformProvider</code> | *No description.* |
| <code><a href="#@cdktn/provider-cloudflare.dataCloudflarePipelineSink.DataCloudflarePipelineSinkConfig.property.provisioners">Provisioners</a></code> | <code>*[]interface{}</code> | *No description.* |
| <code><a href="#@cdktn/provider-cloudflare.dataCloudflarePipelineSink.DataCloudflarePipelineSinkConfig.property.accountId">AccountId</a></code> | <code>*string</code> | Specifies the public ID of the account. |
| <code><a href="#@cdktn/provider-cloudflare.dataCloudflarePipelineSink.DataCloudflarePipelineSinkConfig.property.filter">Filter</a></code> | <code><a href="#@cdktn/provider-cloudflare.dataCloudflarePipelineSink.DataCloudflarePipelineSinkFilter">DataCloudflarePipelineSinkFilter</a></code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/cloudflare/cloudflare/5.19.0/docs/data-sources/pipeline_sink#filter DataCloudflarePipelineSink#filter}. |
| <code><a href="#@cdktn/provider-cloudflare.dataCloudflarePipelineSink.DataCloudflarePipelineSinkConfig.property.sinkId">SinkId</a></code> | <code>*string</code> | Specifies the publid ID of the sink. |

---

##### `Connection`<sup>Optional</sup> <a name="Connection" id="@cdktn/provider-cloudflare.dataCloudflarePipelineSink.DataCloudflarePipelineSinkConfig.property.connection"></a>

```go
Connection interface{}
```

- *Type:* interface{}

---

##### `Count`<sup>Optional</sup> <a name="Count" id="@cdktn/provider-cloudflare.dataCloudflarePipelineSink.DataCloudflarePipelineSinkConfig.property.count"></a>

```go
Count interface{}
```

- *Type:* interface{}

---

##### `DependsOn`<sup>Optional</sup> <a name="DependsOn" id="@cdktn/provider-cloudflare.dataCloudflarePipelineSink.DataCloudflarePipelineSinkConfig.property.dependsOn"></a>

```go
DependsOn *[]ITerraformDependable
```

- *Type:* *[]github.com/open-constructs/cdk-terrain-go/cdktn.ITerraformDependable

---

##### `ForEach`<sup>Optional</sup> <a name="ForEach" id="@cdktn/provider-cloudflare.dataCloudflarePipelineSink.DataCloudflarePipelineSinkConfig.property.forEach"></a>

```go
ForEach ITerraformIterator
```

- *Type:* github.com/open-constructs/cdk-terrain-go/cdktn.ITerraformIterator

---

##### `Lifecycle`<sup>Optional</sup> <a name="Lifecycle" id="@cdktn/provider-cloudflare.dataCloudflarePipelineSink.DataCloudflarePipelineSinkConfig.property.lifecycle"></a>

```go
Lifecycle TerraformResourceLifecycle
```

- *Type:* github.com/open-constructs/cdk-terrain-go/cdktn.TerraformResourceLifecycle

---

##### `Provider`<sup>Optional</sup> <a name="Provider" id="@cdktn/provider-cloudflare.dataCloudflarePipelineSink.DataCloudflarePipelineSinkConfig.property.provider"></a>

```go
Provider TerraformProvider
```

- *Type:* github.com/open-constructs/cdk-terrain-go/cdktn.TerraformProvider

---

##### `Provisioners`<sup>Optional</sup> <a name="Provisioners" id="@cdktn/provider-cloudflare.dataCloudflarePipelineSink.DataCloudflarePipelineSinkConfig.property.provisioners"></a>

```go
Provisioners *[]interface{}
```

- *Type:* *[]interface{}

---

##### `AccountId`<sup>Optional</sup> <a name="AccountId" id="@cdktn/provider-cloudflare.dataCloudflarePipelineSink.DataCloudflarePipelineSinkConfig.property.accountId"></a>

```go
AccountId *string
```

- *Type:* *string

Specifies the public ID of the account.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/cloudflare/cloudflare/5.19.0/docs/data-sources/pipeline_sink#account_id DataCloudflarePipelineSink#account_id}

---

##### `Filter`<sup>Optional</sup> <a name="Filter" id="@cdktn/provider-cloudflare.dataCloudflarePipelineSink.DataCloudflarePipelineSinkConfig.property.filter"></a>

```go
Filter DataCloudflarePipelineSinkFilter
```

- *Type:* <a href="#@cdktn/provider-cloudflare.dataCloudflarePipelineSink.DataCloudflarePipelineSinkFilter">DataCloudflarePipelineSinkFilter</a>

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/cloudflare/cloudflare/5.19.0/docs/data-sources/pipeline_sink#filter DataCloudflarePipelineSink#filter}.

---

##### `SinkId`<sup>Optional</sup> <a name="SinkId" id="@cdktn/provider-cloudflare.dataCloudflarePipelineSink.DataCloudflarePipelineSinkConfig.property.sinkId"></a>

```go
SinkId *string
```

- *Type:* *string

Specifies the publid ID of the sink.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/cloudflare/cloudflare/5.19.0/docs/data-sources/pipeline_sink#sink_id DataCloudflarePipelineSink#sink_id}

---

### DataCloudflarePipelineSinkConfigA <a name="DataCloudflarePipelineSinkConfigA" id="@cdktn/provider-cloudflare.dataCloudflarePipelineSink.DataCloudflarePipelineSinkConfigA"></a>

#### Initializer <a name="Initializer" id="@cdktn/provider-cloudflare.dataCloudflarePipelineSink.DataCloudflarePipelineSinkConfigA.Initializer"></a>

```go
import "github.com/cdktn-io/cdktn-provider-cloudflare-go/cloudflare/v14/datacloudflarepipelinesink"

&datacloudflarepipelinesink.DataCloudflarePipelineSinkConfigA {

}
```


### DataCloudflarePipelineSinkConfigFileNaming <a name="DataCloudflarePipelineSinkConfigFileNaming" id="@cdktn/provider-cloudflare.dataCloudflarePipelineSink.DataCloudflarePipelineSinkConfigFileNaming"></a>

#### Initializer <a name="Initializer" id="@cdktn/provider-cloudflare.dataCloudflarePipelineSink.DataCloudflarePipelineSinkConfigFileNaming.Initializer"></a>

```go
import "github.com/cdktn-io/cdktn-provider-cloudflare-go/cloudflare/v14/datacloudflarepipelinesink"

&datacloudflarepipelinesink.DataCloudflarePipelineSinkConfigFileNaming {

}
```


### DataCloudflarePipelineSinkConfigPartitioning <a name="DataCloudflarePipelineSinkConfigPartitioning" id="@cdktn/provider-cloudflare.dataCloudflarePipelineSink.DataCloudflarePipelineSinkConfigPartitioning"></a>

#### Initializer <a name="Initializer" id="@cdktn/provider-cloudflare.dataCloudflarePipelineSink.DataCloudflarePipelineSinkConfigPartitioning.Initializer"></a>

```go
import "github.com/cdktn-io/cdktn-provider-cloudflare-go/cloudflare/v14/datacloudflarepipelinesink"

&datacloudflarepipelinesink.DataCloudflarePipelineSinkConfigPartitioning {

}
```


### DataCloudflarePipelineSinkConfigRollingPolicy <a name="DataCloudflarePipelineSinkConfigRollingPolicy" id="@cdktn/provider-cloudflare.dataCloudflarePipelineSink.DataCloudflarePipelineSinkConfigRollingPolicy"></a>

#### Initializer <a name="Initializer" id="@cdktn/provider-cloudflare.dataCloudflarePipelineSink.DataCloudflarePipelineSinkConfigRollingPolicy.Initializer"></a>

```go
import "github.com/cdktn-io/cdktn-provider-cloudflare-go/cloudflare/v14/datacloudflarepipelinesink"

&datacloudflarepipelinesink.DataCloudflarePipelineSinkConfigRollingPolicy {

}
```


### DataCloudflarePipelineSinkFilter <a name="DataCloudflarePipelineSinkFilter" id="@cdktn/provider-cloudflare.dataCloudflarePipelineSink.DataCloudflarePipelineSinkFilter"></a>

#### Initializer <a name="Initializer" id="@cdktn/provider-cloudflare.dataCloudflarePipelineSink.DataCloudflarePipelineSinkFilter.Initializer"></a>

```go
import "github.com/cdktn-io/cdktn-provider-cloudflare-go/cloudflare/v14/datacloudflarepipelinesink"

&datacloudflarepipelinesink.DataCloudflarePipelineSinkFilter {
	PipelineId: *string,
}
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-cloudflare.dataCloudflarePipelineSink.DataCloudflarePipelineSinkFilter.property.pipelineId">PipelineId</a></code> | <code>*string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/cloudflare/cloudflare/5.19.0/docs/data-sources/pipeline_sink#pipeline_id DataCloudflarePipelineSink#pipeline_id}. |

---

##### `PipelineId`<sup>Optional</sup> <a name="PipelineId" id="@cdktn/provider-cloudflare.dataCloudflarePipelineSink.DataCloudflarePipelineSinkFilter.property.pipelineId"></a>

```go
PipelineId *string
```

- *Type:* *string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/cloudflare/cloudflare/5.19.0/docs/data-sources/pipeline_sink#pipeline_id DataCloudflarePipelineSink#pipeline_id}.

---

### DataCloudflarePipelineSinkFormat <a name="DataCloudflarePipelineSinkFormat" id="@cdktn/provider-cloudflare.dataCloudflarePipelineSink.DataCloudflarePipelineSinkFormat"></a>

#### Initializer <a name="Initializer" id="@cdktn/provider-cloudflare.dataCloudflarePipelineSink.DataCloudflarePipelineSinkFormat.Initializer"></a>

```go
import "github.com/cdktn-io/cdktn-provider-cloudflare-go/cloudflare/v14/datacloudflarepipelinesink"

&datacloudflarepipelinesink.DataCloudflarePipelineSinkFormat {

}
```


### DataCloudflarePipelineSinkSchema <a name="DataCloudflarePipelineSinkSchema" id="@cdktn/provider-cloudflare.dataCloudflarePipelineSink.DataCloudflarePipelineSinkSchema"></a>

#### Initializer <a name="Initializer" id="@cdktn/provider-cloudflare.dataCloudflarePipelineSink.DataCloudflarePipelineSinkSchema.Initializer"></a>

```go
import "github.com/cdktn-io/cdktn-provider-cloudflare-go/cloudflare/v14/datacloudflarepipelinesink"

&datacloudflarepipelinesink.DataCloudflarePipelineSinkSchema {

}
```


### DataCloudflarePipelineSinkSchemaFields <a name="DataCloudflarePipelineSinkSchemaFields" id="@cdktn/provider-cloudflare.dataCloudflarePipelineSink.DataCloudflarePipelineSinkSchemaFields"></a>

#### Initializer <a name="Initializer" id="@cdktn/provider-cloudflare.dataCloudflarePipelineSink.DataCloudflarePipelineSinkSchemaFields.Initializer"></a>

```go
import "github.com/cdktn-io/cdktn-provider-cloudflare-go/cloudflare/v14/datacloudflarepipelinesink"

&datacloudflarepipelinesink.DataCloudflarePipelineSinkSchemaFields {

}
```


### DataCloudflarePipelineSinkSchemaFormat <a name="DataCloudflarePipelineSinkSchemaFormat" id="@cdktn/provider-cloudflare.dataCloudflarePipelineSink.DataCloudflarePipelineSinkSchemaFormat"></a>

#### Initializer <a name="Initializer" id="@cdktn/provider-cloudflare.dataCloudflarePipelineSink.DataCloudflarePipelineSinkSchemaFormat.Initializer"></a>

```go
import "github.com/cdktn-io/cdktn-provider-cloudflare-go/cloudflare/v14/datacloudflarepipelinesink"

&datacloudflarepipelinesink.DataCloudflarePipelineSinkSchemaFormat {

}
```


## Classes <a name="Classes" id="Classes"></a>

### DataCloudflarePipelineSinkConfigAOutputReference <a name="DataCloudflarePipelineSinkConfigAOutputReference" id="@cdktn/provider-cloudflare.dataCloudflarePipelineSink.DataCloudflarePipelineSinkConfigAOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktn/provider-cloudflare.dataCloudflarePipelineSink.DataCloudflarePipelineSinkConfigAOutputReference.Initializer"></a>

```go
import "github.com/cdktn-io/cdktn-provider-cloudflare-go/cloudflare/v14/datacloudflarepipelinesink"

datacloudflarepipelinesink.NewDataCloudflarePipelineSinkConfigAOutputReference(terraformResource IInterpolatingParent, terraformAttribute *string) DataCloudflarePipelineSinkConfigAOutputReference
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-cloudflare.dataCloudflarePipelineSink.DataCloudflarePipelineSinkConfigAOutputReference.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>github.com/open-constructs/cdk-terrain-go/cdktn.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktn/provider-cloudflare.dataCloudflarePipelineSink.DataCloudflarePipelineSinkConfigAOutputReference.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>*string</code> | The attribute on the parent resource this class is referencing. |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktn/provider-cloudflare.dataCloudflarePipelineSink.DataCloudflarePipelineSinkConfigAOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* github.com/open-constructs/cdk-terrain-go/cdktn.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-cloudflare.dataCloudflarePipelineSink.DataCloudflarePipelineSinkConfigAOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* *string

The attribute on the parent resource this class is referencing.

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-cloudflare.dataCloudflarePipelineSink.DataCloudflarePipelineSinkConfigAOutputReference.computeFqn">ComputeFqn</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-cloudflare.dataCloudflarePipelineSink.DataCloudflarePipelineSinkConfigAOutputReference.getAnyMapAttribute">GetAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-cloudflare.dataCloudflarePipelineSink.DataCloudflarePipelineSinkConfigAOutputReference.getBooleanAttribute">GetBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-cloudflare.dataCloudflarePipelineSink.DataCloudflarePipelineSinkConfigAOutputReference.getBooleanMapAttribute">GetBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-cloudflare.dataCloudflarePipelineSink.DataCloudflarePipelineSinkConfigAOutputReference.getListAttribute">GetListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-cloudflare.dataCloudflarePipelineSink.DataCloudflarePipelineSinkConfigAOutputReference.getNumberAttribute">GetNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-cloudflare.dataCloudflarePipelineSink.DataCloudflarePipelineSinkConfigAOutputReference.getNumberListAttribute">GetNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-cloudflare.dataCloudflarePipelineSink.DataCloudflarePipelineSinkConfigAOutputReference.getNumberMapAttribute">GetNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-cloudflare.dataCloudflarePipelineSink.DataCloudflarePipelineSinkConfigAOutputReference.getStringAttribute">GetStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-cloudflare.dataCloudflarePipelineSink.DataCloudflarePipelineSinkConfigAOutputReference.getStringMapAttribute">GetStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-cloudflare.dataCloudflarePipelineSink.DataCloudflarePipelineSinkConfigAOutputReference.interpolationForAttribute">InterpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-cloudflare.dataCloudflarePipelineSink.DataCloudflarePipelineSinkConfigAOutputReference.resolve">Resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktn/provider-cloudflare.dataCloudflarePipelineSink.DataCloudflarePipelineSinkConfigAOutputReference.toString">ToString</a></code> | Return a string representation of this resolvable object. |

---

##### `ComputeFqn` <a name="ComputeFqn" id="@cdktn/provider-cloudflare.dataCloudflarePipelineSink.DataCloudflarePipelineSinkConfigAOutputReference.computeFqn"></a>

```go
func ComputeFqn() *string
```

##### `GetAnyMapAttribute` <a name="GetAnyMapAttribute" id="@cdktn/provider-cloudflare.dataCloudflarePipelineSink.DataCloudflarePipelineSinkConfigAOutputReference.getAnyMapAttribute"></a>

```go
func GetAnyMapAttribute(terraformAttribute *string) *map[string]interface{}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-cloudflare.dataCloudflarePipelineSink.DataCloudflarePipelineSinkConfigAOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetBooleanAttribute` <a name="GetBooleanAttribute" id="@cdktn/provider-cloudflare.dataCloudflarePipelineSink.DataCloudflarePipelineSinkConfigAOutputReference.getBooleanAttribute"></a>

```go
func GetBooleanAttribute(terraformAttribute *string) IResolvable
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-cloudflare.dataCloudflarePipelineSink.DataCloudflarePipelineSinkConfigAOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetBooleanMapAttribute` <a name="GetBooleanMapAttribute" id="@cdktn/provider-cloudflare.dataCloudflarePipelineSink.DataCloudflarePipelineSinkConfigAOutputReference.getBooleanMapAttribute"></a>

```go
func GetBooleanMapAttribute(terraformAttribute *string) *map[string]*bool
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-cloudflare.dataCloudflarePipelineSink.DataCloudflarePipelineSinkConfigAOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetListAttribute` <a name="GetListAttribute" id="@cdktn/provider-cloudflare.dataCloudflarePipelineSink.DataCloudflarePipelineSinkConfigAOutputReference.getListAttribute"></a>

```go
func GetListAttribute(terraformAttribute *string) *[]*string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-cloudflare.dataCloudflarePipelineSink.DataCloudflarePipelineSinkConfigAOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberAttribute` <a name="GetNumberAttribute" id="@cdktn/provider-cloudflare.dataCloudflarePipelineSink.DataCloudflarePipelineSinkConfigAOutputReference.getNumberAttribute"></a>

```go
func GetNumberAttribute(terraformAttribute *string) *f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-cloudflare.dataCloudflarePipelineSink.DataCloudflarePipelineSinkConfigAOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberListAttribute` <a name="GetNumberListAttribute" id="@cdktn/provider-cloudflare.dataCloudflarePipelineSink.DataCloudflarePipelineSinkConfigAOutputReference.getNumberListAttribute"></a>

```go
func GetNumberListAttribute(terraformAttribute *string) *[]*f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-cloudflare.dataCloudflarePipelineSink.DataCloudflarePipelineSinkConfigAOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberMapAttribute` <a name="GetNumberMapAttribute" id="@cdktn/provider-cloudflare.dataCloudflarePipelineSink.DataCloudflarePipelineSinkConfigAOutputReference.getNumberMapAttribute"></a>

```go
func GetNumberMapAttribute(terraformAttribute *string) *map[string]*f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-cloudflare.dataCloudflarePipelineSink.DataCloudflarePipelineSinkConfigAOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetStringAttribute` <a name="GetStringAttribute" id="@cdktn/provider-cloudflare.dataCloudflarePipelineSink.DataCloudflarePipelineSinkConfigAOutputReference.getStringAttribute"></a>

```go
func GetStringAttribute(terraformAttribute *string) *string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-cloudflare.dataCloudflarePipelineSink.DataCloudflarePipelineSinkConfigAOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetStringMapAttribute` <a name="GetStringMapAttribute" id="@cdktn/provider-cloudflare.dataCloudflarePipelineSink.DataCloudflarePipelineSinkConfigAOutputReference.getStringMapAttribute"></a>

```go
func GetStringMapAttribute(terraformAttribute *string) *map[string]*string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-cloudflare.dataCloudflarePipelineSink.DataCloudflarePipelineSinkConfigAOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `InterpolationForAttribute` <a name="InterpolationForAttribute" id="@cdktn/provider-cloudflare.dataCloudflarePipelineSink.DataCloudflarePipelineSinkConfigAOutputReference.interpolationForAttribute"></a>

```go
func InterpolationForAttribute(property *string) IResolvable
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktn/provider-cloudflare.dataCloudflarePipelineSink.DataCloudflarePipelineSinkConfigAOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* *string

---

##### `Resolve` <a name="Resolve" id="@cdktn/provider-cloudflare.dataCloudflarePipelineSink.DataCloudflarePipelineSinkConfigAOutputReference.resolve"></a>

```go
func Resolve(_context IResolveContext) interface{}
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktn/provider-cloudflare.dataCloudflarePipelineSink.DataCloudflarePipelineSinkConfigAOutputReference.resolve.parameter._context"></a>

- *Type:* github.com/open-constructs/cdk-terrain-go/cdktn.IResolveContext

---

##### `ToString` <a name="ToString" id="@cdktn/provider-cloudflare.dataCloudflarePipelineSink.DataCloudflarePipelineSinkConfigAOutputReference.toString"></a>

```go
func ToString() *string
```

Return a string representation of this resolvable object.

Returns a reversible string representation.


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-cloudflare.dataCloudflarePipelineSink.DataCloudflarePipelineSinkConfigAOutputReference.property.creationStack">CreationStack</a></code> | <code>*[]*string</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktn/provider-cloudflare.dataCloudflarePipelineSink.DataCloudflarePipelineSinkConfigAOutputReference.property.fqn">Fqn</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktn/provider-cloudflare.dataCloudflarePipelineSink.DataCloudflarePipelineSinkConfigAOutputReference.property.accountId">AccountId</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktn/provider-cloudflare.dataCloudflarePipelineSink.DataCloudflarePipelineSinkConfigAOutputReference.property.bucket">Bucket</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktn/provider-cloudflare.dataCloudflarePipelineSink.DataCloudflarePipelineSinkConfigAOutputReference.property.fileNaming">FileNaming</a></code> | <code><a href="#@cdktn/provider-cloudflare.dataCloudflarePipelineSink.DataCloudflarePipelineSinkConfigFileNamingOutputReference">DataCloudflarePipelineSinkConfigFileNamingOutputReference</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-cloudflare.dataCloudflarePipelineSink.DataCloudflarePipelineSinkConfigAOutputReference.property.jurisdiction">Jurisdiction</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktn/provider-cloudflare.dataCloudflarePipelineSink.DataCloudflarePipelineSinkConfigAOutputReference.property.namespace">Namespace</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktn/provider-cloudflare.dataCloudflarePipelineSink.DataCloudflarePipelineSinkConfigAOutputReference.property.partitioning">Partitioning</a></code> | <code><a href="#@cdktn/provider-cloudflare.dataCloudflarePipelineSink.DataCloudflarePipelineSinkConfigPartitioningOutputReference">DataCloudflarePipelineSinkConfigPartitioningOutputReference</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-cloudflare.dataCloudflarePipelineSink.DataCloudflarePipelineSinkConfigAOutputReference.property.path">Path</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktn/provider-cloudflare.dataCloudflarePipelineSink.DataCloudflarePipelineSinkConfigAOutputReference.property.rollingPolicy">RollingPolicy</a></code> | <code><a href="#@cdktn/provider-cloudflare.dataCloudflarePipelineSink.DataCloudflarePipelineSinkConfigRollingPolicyOutputReference">DataCloudflarePipelineSinkConfigRollingPolicyOutputReference</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-cloudflare.dataCloudflarePipelineSink.DataCloudflarePipelineSinkConfigAOutputReference.property.tableName">TableName</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktn/provider-cloudflare.dataCloudflarePipelineSink.DataCloudflarePipelineSinkConfigAOutputReference.property.internalValue">InternalValue</a></code> | <code><a href="#@cdktn/provider-cloudflare.dataCloudflarePipelineSink.DataCloudflarePipelineSinkConfigA">DataCloudflarePipelineSinkConfigA</a></code> | *No description.* |

---

##### `CreationStack`<sup>Required</sup> <a name="CreationStack" id="@cdktn/provider-cloudflare.dataCloudflarePipelineSink.DataCloudflarePipelineSinkConfigAOutputReference.property.creationStack"></a>

```go
func CreationStack() *[]*string
```

- *Type:* *[]*string

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `Fqn`<sup>Required</sup> <a name="Fqn" id="@cdktn/provider-cloudflare.dataCloudflarePipelineSink.DataCloudflarePipelineSinkConfigAOutputReference.property.fqn"></a>

```go
func Fqn() *string
```

- *Type:* *string

---

##### `AccountId`<sup>Required</sup> <a name="AccountId" id="@cdktn/provider-cloudflare.dataCloudflarePipelineSink.DataCloudflarePipelineSinkConfigAOutputReference.property.accountId"></a>

```go
func AccountId() *string
```

- *Type:* *string

---

##### `Bucket`<sup>Required</sup> <a name="Bucket" id="@cdktn/provider-cloudflare.dataCloudflarePipelineSink.DataCloudflarePipelineSinkConfigAOutputReference.property.bucket"></a>

```go
func Bucket() *string
```

- *Type:* *string

---

##### `FileNaming`<sup>Required</sup> <a name="FileNaming" id="@cdktn/provider-cloudflare.dataCloudflarePipelineSink.DataCloudflarePipelineSinkConfigAOutputReference.property.fileNaming"></a>

```go
func FileNaming() DataCloudflarePipelineSinkConfigFileNamingOutputReference
```

- *Type:* <a href="#@cdktn/provider-cloudflare.dataCloudflarePipelineSink.DataCloudflarePipelineSinkConfigFileNamingOutputReference">DataCloudflarePipelineSinkConfigFileNamingOutputReference</a>

---

##### `Jurisdiction`<sup>Required</sup> <a name="Jurisdiction" id="@cdktn/provider-cloudflare.dataCloudflarePipelineSink.DataCloudflarePipelineSinkConfigAOutputReference.property.jurisdiction"></a>

```go
func Jurisdiction() *string
```

- *Type:* *string

---

##### `Namespace`<sup>Required</sup> <a name="Namespace" id="@cdktn/provider-cloudflare.dataCloudflarePipelineSink.DataCloudflarePipelineSinkConfigAOutputReference.property.namespace"></a>

```go
func Namespace() *string
```

- *Type:* *string

---

##### `Partitioning`<sup>Required</sup> <a name="Partitioning" id="@cdktn/provider-cloudflare.dataCloudflarePipelineSink.DataCloudflarePipelineSinkConfigAOutputReference.property.partitioning"></a>

```go
func Partitioning() DataCloudflarePipelineSinkConfigPartitioningOutputReference
```

- *Type:* <a href="#@cdktn/provider-cloudflare.dataCloudflarePipelineSink.DataCloudflarePipelineSinkConfigPartitioningOutputReference">DataCloudflarePipelineSinkConfigPartitioningOutputReference</a>

---

##### `Path`<sup>Required</sup> <a name="Path" id="@cdktn/provider-cloudflare.dataCloudflarePipelineSink.DataCloudflarePipelineSinkConfigAOutputReference.property.path"></a>

```go
func Path() *string
```

- *Type:* *string

---

##### `RollingPolicy`<sup>Required</sup> <a name="RollingPolicy" id="@cdktn/provider-cloudflare.dataCloudflarePipelineSink.DataCloudflarePipelineSinkConfigAOutputReference.property.rollingPolicy"></a>

```go
func RollingPolicy() DataCloudflarePipelineSinkConfigRollingPolicyOutputReference
```

- *Type:* <a href="#@cdktn/provider-cloudflare.dataCloudflarePipelineSink.DataCloudflarePipelineSinkConfigRollingPolicyOutputReference">DataCloudflarePipelineSinkConfigRollingPolicyOutputReference</a>

---

##### `TableName`<sup>Required</sup> <a name="TableName" id="@cdktn/provider-cloudflare.dataCloudflarePipelineSink.DataCloudflarePipelineSinkConfigAOutputReference.property.tableName"></a>

```go
func TableName() *string
```

- *Type:* *string

---

##### `InternalValue`<sup>Optional</sup> <a name="InternalValue" id="@cdktn/provider-cloudflare.dataCloudflarePipelineSink.DataCloudflarePipelineSinkConfigAOutputReference.property.internalValue"></a>

```go
func InternalValue() DataCloudflarePipelineSinkConfigA
```

- *Type:* <a href="#@cdktn/provider-cloudflare.dataCloudflarePipelineSink.DataCloudflarePipelineSinkConfigA">DataCloudflarePipelineSinkConfigA</a>

---


### DataCloudflarePipelineSinkConfigFileNamingOutputReference <a name="DataCloudflarePipelineSinkConfigFileNamingOutputReference" id="@cdktn/provider-cloudflare.dataCloudflarePipelineSink.DataCloudflarePipelineSinkConfigFileNamingOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktn/provider-cloudflare.dataCloudflarePipelineSink.DataCloudflarePipelineSinkConfigFileNamingOutputReference.Initializer"></a>

```go
import "github.com/cdktn-io/cdktn-provider-cloudflare-go/cloudflare/v14/datacloudflarepipelinesink"

datacloudflarepipelinesink.NewDataCloudflarePipelineSinkConfigFileNamingOutputReference(terraformResource IInterpolatingParent, terraformAttribute *string) DataCloudflarePipelineSinkConfigFileNamingOutputReference
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-cloudflare.dataCloudflarePipelineSink.DataCloudflarePipelineSinkConfigFileNamingOutputReference.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>github.com/open-constructs/cdk-terrain-go/cdktn.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktn/provider-cloudflare.dataCloudflarePipelineSink.DataCloudflarePipelineSinkConfigFileNamingOutputReference.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>*string</code> | The attribute on the parent resource this class is referencing. |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktn/provider-cloudflare.dataCloudflarePipelineSink.DataCloudflarePipelineSinkConfigFileNamingOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* github.com/open-constructs/cdk-terrain-go/cdktn.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-cloudflare.dataCloudflarePipelineSink.DataCloudflarePipelineSinkConfigFileNamingOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* *string

The attribute on the parent resource this class is referencing.

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-cloudflare.dataCloudflarePipelineSink.DataCloudflarePipelineSinkConfigFileNamingOutputReference.computeFqn">ComputeFqn</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-cloudflare.dataCloudflarePipelineSink.DataCloudflarePipelineSinkConfigFileNamingOutputReference.getAnyMapAttribute">GetAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-cloudflare.dataCloudflarePipelineSink.DataCloudflarePipelineSinkConfigFileNamingOutputReference.getBooleanAttribute">GetBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-cloudflare.dataCloudflarePipelineSink.DataCloudflarePipelineSinkConfigFileNamingOutputReference.getBooleanMapAttribute">GetBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-cloudflare.dataCloudflarePipelineSink.DataCloudflarePipelineSinkConfigFileNamingOutputReference.getListAttribute">GetListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-cloudflare.dataCloudflarePipelineSink.DataCloudflarePipelineSinkConfigFileNamingOutputReference.getNumberAttribute">GetNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-cloudflare.dataCloudflarePipelineSink.DataCloudflarePipelineSinkConfigFileNamingOutputReference.getNumberListAttribute">GetNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-cloudflare.dataCloudflarePipelineSink.DataCloudflarePipelineSinkConfigFileNamingOutputReference.getNumberMapAttribute">GetNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-cloudflare.dataCloudflarePipelineSink.DataCloudflarePipelineSinkConfigFileNamingOutputReference.getStringAttribute">GetStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-cloudflare.dataCloudflarePipelineSink.DataCloudflarePipelineSinkConfigFileNamingOutputReference.getStringMapAttribute">GetStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-cloudflare.dataCloudflarePipelineSink.DataCloudflarePipelineSinkConfigFileNamingOutputReference.interpolationForAttribute">InterpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-cloudflare.dataCloudflarePipelineSink.DataCloudflarePipelineSinkConfigFileNamingOutputReference.resolve">Resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktn/provider-cloudflare.dataCloudflarePipelineSink.DataCloudflarePipelineSinkConfigFileNamingOutputReference.toString">ToString</a></code> | Return a string representation of this resolvable object. |

---

##### `ComputeFqn` <a name="ComputeFqn" id="@cdktn/provider-cloudflare.dataCloudflarePipelineSink.DataCloudflarePipelineSinkConfigFileNamingOutputReference.computeFqn"></a>

```go
func ComputeFqn() *string
```

##### `GetAnyMapAttribute` <a name="GetAnyMapAttribute" id="@cdktn/provider-cloudflare.dataCloudflarePipelineSink.DataCloudflarePipelineSinkConfigFileNamingOutputReference.getAnyMapAttribute"></a>

```go
func GetAnyMapAttribute(terraformAttribute *string) *map[string]interface{}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-cloudflare.dataCloudflarePipelineSink.DataCloudflarePipelineSinkConfigFileNamingOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetBooleanAttribute` <a name="GetBooleanAttribute" id="@cdktn/provider-cloudflare.dataCloudflarePipelineSink.DataCloudflarePipelineSinkConfigFileNamingOutputReference.getBooleanAttribute"></a>

```go
func GetBooleanAttribute(terraformAttribute *string) IResolvable
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-cloudflare.dataCloudflarePipelineSink.DataCloudflarePipelineSinkConfigFileNamingOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetBooleanMapAttribute` <a name="GetBooleanMapAttribute" id="@cdktn/provider-cloudflare.dataCloudflarePipelineSink.DataCloudflarePipelineSinkConfigFileNamingOutputReference.getBooleanMapAttribute"></a>

```go
func GetBooleanMapAttribute(terraformAttribute *string) *map[string]*bool
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-cloudflare.dataCloudflarePipelineSink.DataCloudflarePipelineSinkConfigFileNamingOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetListAttribute` <a name="GetListAttribute" id="@cdktn/provider-cloudflare.dataCloudflarePipelineSink.DataCloudflarePipelineSinkConfigFileNamingOutputReference.getListAttribute"></a>

```go
func GetListAttribute(terraformAttribute *string) *[]*string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-cloudflare.dataCloudflarePipelineSink.DataCloudflarePipelineSinkConfigFileNamingOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberAttribute` <a name="GetNumberAttribute" id="@cdktn/provider-cloudflare.dataCloudflarePipelineSink.DataCloudflarePipelineSinkConfigFileNamingOutputReference.getNumberAttribute"></a>

```go
func GetNumberAttribute(terraformAttribute *string) *f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-cloudflare.dataCloudflarePipelineSink.DataCloudflarePipelineSinkConfigFileNamingOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberListAttribute` <a name="GetNumberListAttribute" id="@cdktn/provider-cloudflare.dataCloudflarePipelineSink.DataCloudflarePipelineSinkConfigFileNamingOutputReference.getNumberListAttribute"></a>

```go
func GetNumberListAttribute(terraformAttribute *string) *[]*f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-cloudflare.dataCloudflarePipelineSink.DataCloudflarePipelineSinkConfigFileNamingOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberMapAttribute` <a name="GetNumberMapAttribute" id="@cdktn/provider-cloudflare.dataCloudflarePipelineSink.DataCloudflarePipelineSinkConfigFileNamingOutputReference.getNumberMapAttribute"></a>

```go
func GetNumberMapAttribute(terraformAttribute *string) *map[string]*f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-cloudflare.dataCloudflarePipelineSink.DataCloudflarePipelineSinkConfigFileNamingOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetStringAttribute` <a name="GetStringAttribute" id="@cdktn/provider-cloudflare.dataCloudflarePipelineSink.DataCloudflarePipelineSinkConfigFileNamingOutputReference.getStringAttribute"></a>

```go
func GetStringAttribute(terraformAttribute *string) *string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-cloudflare.dataCloudflarePipelineSink.DataCloudflarePipelineSinkConfigFileNamingOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetStringMapAttribute` <a name="GetStringMapAttribute" id="@cdktn/provider-cloudflare.dataCloudflarePipelineSink.DataCloudflarePipelineSinkConfigFileNamingOutputReference.getStringMapAttribute"></a>

```go
func GetStringMapAttribute(terraformAttribute *string) *map[string]*string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-cloudflare.dataCloudflarePipelineSink.DataCloudflarePipelineSinkConfigFileNamingOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `InterpolationForAttribute` <a name="InterpolationForAttribute" id="@cdktn/provider-cloudflare.dataCloudflarePipelineSink.DataCloudflarePipelineSinkConfigFileNamingOutputReference.interpolationForAttribute"></a>

```go
func InterpolationForAttribute(property *string) IResolvable
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktn/provider-cloudflare.dataCloudflarePipelineSink.DataCloudflarePipelineSinkConfigFileNamingOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* *string

---

##### `Resolve` <a name="Resolve" id="@cdktn/provider-cloudflare.dataCloudflarePipelineSink.DataCloudflarePipelineSinkConfigFileNamingOutputReference.resolve"></a>

```go
func Resolve(_context IResolveContext) interface{}
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktn/provider-cloudflare.dataCloudflarePipelineSink.DataCloudflarePipelineSinkConfigFileNamingOutputReference.resolve.parameter._context"></a>

- *Type:* github.com/open-constructs/cdk-terrain-go/cdktn.IResolveContext

---

##### `ToString` <a name="ToString" id="@cdktn/provider-cloudflare.dataCloudflarePipelineSink.DataCloudflarePipelineSinkConfigFileNamingOutputReference.toString"></a>

```go
func ToString() *string
```

Return a string representation of this resolvable object.

Returns a reversible string representation.


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-cloudflare.dataCloudflarePipelineSink.DataCloudflarePipelineSinkConfigFileNamingOutputReference.property.creationStack">CreationStack</a></code> | <code>*[]*string</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktn/provider-cloudflare.dataCloudflarePipelineSink.DataCloudflarePipelineSinkConfigFileNamingOutputReference.property.fqn">Fqn</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktn/provider-cloudflare.dataCloudflarePipelineSink.DataCloudflarePipelineSinkConfigFileNamingOutputReference.property.prefix">Prefix</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktn/provider-cloudflare.dataCloudflarePipelineSink.DataCloudflarePipelineSinkConfigFileNamingOutputReference.property.strategy">Strategy</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktn/provider-cloudflare.dataCloudflarePipelineSink.DataCloudflarePipelineSinkConfigFileNamingOutputReference.property.suffix">Suffix</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktn/provider-cloudflare.dataCloudflarePipelineSink.DataCloudflarePipelineSinkConfigFileNamingOutputReference.property.internalValue">InternalValue</a></code> | <code><a href="#@cdktn/provider-cloudflare.dataCloudflarePipelineSink.DataCloudflarePipelineSinkConfigFileNaming">DataCloudflarePipelineSinkConfigFileNaming</a></code> | *No description.* |

---

##### `CreationStack`<sup>Required</sup> <a name="CreationStack" id="@cdktn/provider-cloudflare.dataCloudflarePipelineSink.DataCloudflarePipelineSinkConfigFileNamingOutputReference.property.creationStack"></a>

```go
func CreationStack() *[]*string
```

- *Type:* *[]*string

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `Fqn`<sup>Required</sup> <a name="Fqn" id="@cdktn/provider-cloudflare.dataCloudflarePipelineSink.DataCloudflarePipelineSinkConfigFileNamingOutputReference.property.fqn"></a>

```go
func Fqn() *string
```

- *Type:* *string

---

##### `Prefix`<sup>Required</sup> <a name="Prefix" id="@cdktn/provider-cloudflare.dataCloudflarePipelineSink.DataCloudflarePipelineSinkConfigFileNamingOutputReference.property.prefix"></a>

```go
func Prefix() *string
```

- *Type:* *string

---

##### `Strategy`<sup>Required</sup> <a name="Strategy" id="@cdktn/provider-cloudflare.dataCloudflarePipelineSink.DataCloudflarePipelineSinkConfigFileNamingOutputReference.property.strategy"></a>

```go
func Strategy() *string
```

- *Type:* *string

---

##### `Suffix`<sup>Required</sup> <a name="Suffix" id="@cdktn/provider-cloudflare.dataCloudflarePipelineSink.DataCloudflarePipelineSinkConfigFileNamingOutputReference.property.suffix"></a>

```go
func Suffix() *string
```

- *Type:* *string

---

##### `InternalValue`<sup>Optional</sup> <a name="InternalValue" id="@cdktn/provider-cloudflare.dataCloudflarePipelineSink.DataCloudflarePipelineSinkConfigFileNamingOutputReference.property.internalValue"></a>

```go
func InternalValue() DataCloudflarePipelineSinkConfigFileNaming
```

- *Type:* <a href="#@cdktn/provider-cloudflare.dataCloudflarePipelineSink.DataCloudflarePipelineSinkConfigFileNaming">DataCloudflarePipelineSinkConfigFileNaming</a>

---


### DataCloudflarePipelineSinkConfigPartitioningOutputReference <a name="DataCloudflarePipelineSinkConfigPartitioningOutputReference" id="@cdktn/provider-cloudflare.dataCloudflarePipelineSink.DataCloudflarePipelineSinkConfigPartitioningOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktn/provider-cloudflare.dataCloudflarePipelineSink.DataCloudflarePipelineSinkConfigPartitioningOutputReference.Initializer"></a>

```go
import "github.com/cdktn-io/cdktn-provider-cloudflare-go/cloudflare/v14/datacloudflarepipelinesink"

datacloudflarepipelinesink.NewDataCloudflarePipelineSinkConfigPartitioningOutputReference(terraformResource IInterpolatingParent, terraformAttribute *string) DataCloudflarePipelineSinkConfigPartitioningOutputReference
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-cloudflare.dataCloudflarePipelineSink.DataCloudflarePipelineSinkConfigPartitioningOutputReference.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>github.com/open-constructs/cdk-terrain-go/cdktn.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktn/provider-cloudflare.dataCloudflarePipelineSink.DataCloudflarePipelineSinkConfigPartitioningOutputReference.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>*string</code> | The attribute on the parent resource this class is referencing. |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktn/provider-cloudflare.dataCloudflarePipelineSink.DataCloudflarePipelineSinkConfigPartitioningOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* github.com/open-constructs/cdk-terrain-go/cdktn.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-cloudflare.dataCloudflarePipelineSink.DataCloudflarePipelineSinkConfigPartitioningOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* *string

The attribute on the parent resource this class is referencing.

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-cloudflare.dataCloudflarePipelineSink.DataCloudflarePipelineSinkConfigPartitioningOutputReference.computeFqn">ComputeFqn</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-cloudflare.dataCloudflarePipelineSink.DataCloudflarePipelineSinkConfigPartitioningOutputReference.getAnyMapAttribute">GetAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-cloudflare.dataCloudflarePipelineSink.DataCloudflarePipelineSinkConfigPartitioningOutputReference.getBooleanAttribute">GetBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-cloudflare.dataCloudflarePipelineSink.DataCloudflarePipelineSinkConfigPartitioningOutputReference.getBooleanMapAttribute">GetBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-cloudflare.dataCloudflarePipelineSink.DataCloudflarePipelineSinkConfigPartitioningOutputReference.getListAttribute">GetListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-cloudflare.dataCloudflarePipelineSink.DataCloudflarePipelineSinkConfigPartitioningOutputReference.getNumberAttribute">GetNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-cloudflare.dataCloudflarePipelineSink.DataCloudflarePipelineSinkConfigPartitioningOutputReference.getNumberListAttribute">GetNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-cloudflare.dataCloudflarePipelineSink.DataCloudflarePipelineSinkConfigPartitioningOutputReference.getNumberMapAttribute">GetNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-cloudflare.dataCloudflarePipelineSink.DataCloudflarePipelineSinkConfigPartitioningOutputReference.getStringAttribute">GetStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-cloudflare.dataCloudflarePipelineSink.DataCloudflarePipelineSinkConfigPartitioningOutputReference.getStringMapAttribute">GetStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-cloudflare.dataCloudflarePipelineSink.DataCloudflarePipelineSinkConfigPartitioningOutputReference.interpolationForAttribute">InterpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-cloudflare.dataCloudflarePipelineSink.DataCloudflarePipelineSinkConfigPartitioningOutputReference.resolve">Resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktn/provider-cloudflare.dataCloudflarePipelineSink.DataCloudflarePipelineSinkConfigPartitioningOutputReference.toString">ToString</a></code> | Return a string representation of this resolvable object. |

---

##### `ComputeFqn` <a name="ComputeFqn" id="@cdktn/provider-cloudflare.dataCloudflarePipelineSink.DataCloudflarePipelineSinkConfigPartitioningOutputReference.computeFqn"></a>

```go
func ComputeFqn() *string
```

##### `GetAnyMapAttribute` <a name="GetAnyMapAttribute" id="@cdktn/provider-cloudflare.dataCloudflarePipelineSink.DataCloudflarePipelineSinkConfigPartitioningOutputReference.getAnyMapAttribute"></a>

```go
func GetAnyMapAttribute(terraformAttribute *string) *map[string]interface{}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-cloudflare.dataCloudflarePipelineSink.DataCloudflarePipelineSinkConfigPartitioningOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetBooleanAttribute` <a name="GetBooleanAttribute" id="@cdktn/provider-cloudflare.dataCloudflarePipelineSink.DataCloudflarePipelineSinkConfigPartitioningOutputReference.getBooleanAttribute"></a>

```go
func GetBooleanAttribute(terraformAttribute *string) IResolvable
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-cloudflare.dataCloudflarePipelineSink.DataCloudflarePipelineSinkConfigPartitioningOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetBooleanMapAttribute` <a name="GetBooleanMapAttribute" id="@cdktn/provider-cloudflare.dataCloudflarePipelineSink.DataCloudflarePipelineSinkConfigPartitioningOutputReference.getBooleanMapAttribute"></a>

```go
func GetBooleanMapAttribute(terraformAttribute *string) *map[string]*bool
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-cloudflare.dataCloudflarePipelineSink.DataCloudflarePipelineSinkConfigPartitioningOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetListAttribute` <a name="GetListAttribute" id="@cdktn/provider-cloudflare.dataCloudflarePipelineSink.DataCloudflarePipelineSinkConfigPartitioningOutputReference.getListAttribute"></a>

```go
func GetListAttribute(terraformAttribute *string) *[]*string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-cloudflare.dataCloudflarePipelineSink.DataCloudflarePipelineSinkConfigPartitioningOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberAttribute` <a name="GetNumberAttribute" id="@cdktn/provider-cloudflare.dataCloudflarePipelineSink.DataCloudflarePipelineSinkConfigPartitioningOutputReference.getNumberAttribute"></a>

```go
func GetNumberAttribute(terraformAttribute *string) *f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-cloudflare.dataCloudflarePipelineSink.DataCloudflarePipelineSinkConfigPartitioningOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberListAttribute` <a name="GetNumberListAttribute" id="@cdktn/provider-cloudflare.dataCloudflarePipelineSink.DataCloudflarePipelineSinkConfigPartitioningOutputReference.getNumberListAttribute"></a>

```go
func GetNumberListAttribute(terraformAttribute *string) *[]*f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-cloudflare.dataCloudflarePipelineSink.DataCloudflarePipelineSinkConfigPartitioningOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberMapAttribute` <a name="GetNumberMapAttribute" id="@cdktn/provider-cloudflare.dataCloudflarePipelineSink.DataCloudflarePipelineSinkConfigPartitioningOutputReference.getNumberMapAttribute"></a>

```go
func GetNumberMapAttribute(terraformAttribute *string) *map[string]*f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-cloudflare.dataCloudflarePipelineSink.DataCloudflarePipelineSinkConfigPartitioningOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetStringAttribute` <a name="GetStringAttribute" id="@cdktn/provider-cloudflare.dataCloudflarePipelineSink.DataCloudflarePipelineSinkConfigPartitioningOutputReference.getStringAttribute"></a>

```go
func GetStringAttribute(terraformAttribute *string) *string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-cloudflare.dataCloudflarePipelineSink.DataCloudflarePipelineSinkConfigPartitioningOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetStringMapAttribute` <a name="GetStringMapAttribute" id="@cdktn/provider-cloudflare.dataCloudflarePipelineSink.DataCloudflarePipelineSinkConfigPartitioningOutputReference.getStringMapAttribute"></a>

```go
func GetStringMapAttribute(terraformAttribute *string) *map[string]*string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-cloudflare.dataCloudflarePipelineSink.DataCloudflarePipelineSinkConfigPartitioningOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `InterpolationForAttribute` <a name="InterpolationForAttribute" id="@cdktn/provider-cloudflare.dataCloudflarePipelineSink.DataCloudflarePipelineSinkConfigPartitioningOutputReference.interpolationForAttribute"></a>

```go
func InterpolationForAttribute(property *string) IResolvable
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktn/provider-cloudflare.dataCloudflarePipelineSink.DataCloudflarePipelineSinkConfigPartitioningOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* *string

---

##### `Resolve` <a name="Resolve" id="@cdktn/provider-cloudflare.dataCloudflarePipelineSink.DataCloudflarePipelineSinkConfigPartitioningOutputReference.resolve"></a>

```go
func Resolve(_context IResolveContext) interface{}
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktn/provider-cloudflare.dataCloudflarePipelineSink.DataCloudflarePipelineSinkConfigPartitioningOutputReference.resolve.parameter._context"></a>

- *Type:* github.com/open-constructs/cdk-terrain-go/cdktn.IResolveContext

---

##### `ToString` <a name="ToString" id="@cdktn/provider-cloudflare.dataCloudflarePipelineSink.DataCloudflarePipelineSinkConfigPartitioningOutputReference.toString"></a>

```go
func ToString() *string
```

Return a string representation of this resolvable object.

Returns a reversible string representation.


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-cloudflare.dataCloudflarePipelineSink.DataCloudflarePipelineSinkConfigPartitioningOutputReference.property.creationStack">CreationStack</a></code> | <code>*[]*string</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktn/provider-cloudflare.dataCloudflarePipelineSink.DataCloudflarePipelineSinkConfigPartitioningOutputReference.property.fqn">Fqn</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktn/provider-cloudflare.dataCloudflarePipelineSink.DataCloudflarePipelineSinkConfigPartitioningOutputReference.property.timePattern">TimePattern</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktn/provider-cloudflare.dataCloudflarePipelineSink.DataCloudflarePipelineSinkConfigPartitioningOutputReference.property.internalValue">InternalValue</a></code> | <code><a href="#@cdktn/provider-cloudflare.dataCloudflarePipelineSink.DataCloudflarePipelineSinkConfigPartitioning">DataCloudflarePipelineSinkConfigPartitioning</a></code> | *No description.* |

---

##### `CreationStack`<sup>Required</sup> <a name="CreationStack" id="@cdktn/provider-cloudflare.dataCloudflarePipelineSink.DataCloudflarePipelineSinkConfigPartitioningOutputReference.property.creationStack"></a>

```go
func CreationStack() *[]*string
```

- *Type:* *[]*string

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `Fqn`<sup>Required</sup> <a name="Fqn" id="@cdktn/provider-cloudflare.dataCloudflarePipelineSink.DataCloudflarePipelineSinkConfigPartitioningOutputReference.property.fqn"></a>

```go
func Fqn() *string
```

- *Type:* *string

---

##### `TimePattern`<sup>Required</sup> <a name="TimePattern" id="@cdktn/provider-cloudflare.dataCloudflarePipelineSink.DataCloudflarePipelineSinkConfigPartitioningOutputReference.property.timePattern"></a>

```go
func TimePattern() *string
```

- *Type:* *string

---

##### `InternalValue`<sup>Optional</sup> <a name="InternalValue" id="@cdktn/provider-cloudflare.dataCloudflarePipelineSink.DataCloudflarePipelineSinkConfigPartitioningOutputReference.property.internalValue"></a>

```go
func InternalValue() DataCloudflarePipelineSinkConfigPartitioning
```

- *Type:* <a href="#@cdktn/provider-cloudflare.dataCloudflarePipelineSink.DataCloudflarePipelineSinkConfigPartitioning">DataCloudflarePipelineSinkConfigPartitioning</a>

---


### DataCloudflarePipelineSinkConfigRollingPolicyOutputReference <a name="DataCloudflarePipelineSinkConfigRollingPolicyOutputReference" id="@cdktn/provider-cloudflare.dataCloudflarePipelineSink.DataCloudflarePipelineSinkConfigRollingPolicyOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktn/provider-cloudflare.dataCloudflarePipelineSink.DataCloudflarePipelineSinkConfigRollingPolicyOutputReference.Initializer"></a>

```go
import "github.com/cdktn-io/cdktn-provider-cloudflare-go/cloudflare/v14/datacloudflarepipelinesink"

datacloudflarepipelinesink.NewDataCloudflarePipelineSinkConfigRollingPolicyOutputReference(terraformResource IInterpolatingParent, terraformAttribute *string) DataCloudflarePipelineSinkConfigRollingPolicyOutputReference
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-cloudflare.dataCloudflarePipelineSink.DataCloudflarePipelineSinkConfigRollingPolicyOutputReference.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>github.com/open-constructs/cdk-terrain-go/cdktn.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktn/provider-cloudflare.dataCloudflarePipelineSink.DataCloudflarePipelineSinkConfigRollingPolicyOutputReference.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>*string</code> | The attribute on the parent resource this class is referencing. |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktn/provider-cloudflare.dataCloudflarePipelineSink.DataCloudflarePipelineSinkConfigRollingPolicyOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* github.com/open-constructs/cdk-terrain-go/cdktn.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-cloudflare.dataCloudflarePipelineSink.DataCloudflarePipelineSinkConfigRollingPolicyOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* *string

The attribute on the parent resource this class is referencing.

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-cloudflare.dataCloudflarePipelineSink.DataCloudflarePipelineSinkConfigRollingPolicyOutputReference.computeFqn">ComputeFqn</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-cloudflare.dataCloudflarePipelineSink.DataCloudflarePipelineSinkConfigRollingPolicyOutputReference.getAnyMapAttribute">GetAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-cloudflare.dataCloudflarePipelineSink.DataCloudflarePipelineSinkConfigRollingPolicyOutputReference.getBooleanAttribute">GetBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-cloudflare.dataCloudflarePipelineSink.DataCloudflarePipelineSinkConfigRollingPolicyOutputReference.getBooleanMapAttribute">GetBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-cloudflare.dataCloudflarePipelineSink.DataCloudflarePipelineSinkConfigRollingPolicyOutputReference.getListAttribute">GetListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-cloudflare.dataCloudflarePipelineSink.DataCloudflarePipelineSinkConfigRollingPolicyOutputReference.getNumberAttribute">GetNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-cloudflare.dataCloudflarePipelineSink.DataCloudflarePipelineSinkConfigRollingPolicyOutputReference.getNumberListAttribute">GetNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-cloudflare.dataCloudflarePipelineSink.DataCloudflarePipelineSinkConfigRollingPolicyOutputReference.getNumberMapAttribute">GetNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-cloudflare.dataCloudflarePipelineSink.DataCloudflarePipelineSinkConfigRollingPolicyOutputReference.getStringAttribute">GetStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-cloudflare.dataCloudflarePipelineSink.DataCloudflarePipelineSinkConfigRollingPolicyOutputReference.getStringMapAttribute">GetStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-cloudflare.dataCloudflarePipelineSink.DataCloudflarePipelineSinkConfigRollingPolicyOutputReference.interpolationForAttribute">InterpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-cloudflare.dataCloudflarePipelineSink.DataCloudflarePipelineSinkConfigRollingPolicyOutputReference.resolve">Resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktn/provider-cloudflare.dataCloudflarePipelineSink.DataCloudflarePipelineSinkConfigRollingPolicyOutputReference.toString">ToString</a></code> | Return a string representation of this resolvable object. |

---

##### `ComputeFqn` <a name="ComputeFqn" id="@cdktn/provider-cloudflare.dataCloudflarePipelineSink.DataCloudflarePipelineSinkConfigRollingPolicyOutputReference.computeFqn"></a>

```go
func ComputeFqn() *string
```

##### `GetAnyMapAttribute` <a name="GetAnyMapAttribute" id="@cdktn/provider-cloudflare.dataCloudflarePipelineSink.DataCloudflarePipelineSinkConfigRollingPolicyOutputReference.getAnyMapAttribute"></a>

```go
func GetAnyMapAttribute(terraformAttribute *string) *map[string]interface{}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-cloudflare.dataCloudflarePipelineSink.DataCloudflarePipelineSinkConfigRollingPolicyOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetBooleanAttribute` <a name="GetBooleanAttribute" id="@cdktn/provider-cloudflare.dataCloudflarePipelineSink.DataCloudflarePipelineSinkConfigRollingPolicyOutputReference.getBooleanAttribute"></a>

```go
func GetBooleanAttribute(terraformAttribute *string) IResolvable
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-cloudflare.dataCloudflarePipelineSink.DataCloudflarePipelineSinkConfigRollingPolicyOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetBooleanMapAttribute` <a name="GetBooleanMapAttribute" id="@cdktn/provider-cloudflare.dataCloudflarePipelineSink.DataCloudflarePipelineSinkConfigRollingPolicyOutputReference.getBooleanMapAttribute"></a>

```go
func GetBooleanMapAttribute(terraformAttribute *string) *map[string]*bool
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-cloudflare.dataCloudflarePipelineSink.DataCloudflarePipelineSinkConfigRollingPolicyOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetListAttribute` <a name="GetListAttribute" id="@cdktn/provider-cloudflare.dataCloudflarePipelineSink.DataCloudflarePipelineSinkConfigRollingPolicyOutputReference.getListAttribute"></a>

```go
func GetListAttribute(terraformAttribute *string) *[]*string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-cloudflare.dataCloudflarePipelineSink.DataCloudflarePipelineSinkConfigRollingPolicyOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberAttribute` <a name="GetNumberAttribute" id="@cdktn/provider-cloudflare.dataCloudflarePipelineSink.DataCloudflarePipelineSinkConfigRollingPolicyOutputReference.getNumberAttribute"></a>

```go
func GetNumberAttribute(terraformAttribute *string) *f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-cloudflare.dataCloudflarePipelineSink.DataCloudflarePipelineSinkConfigRollingPolicyOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberListAttribute` <a name="GetNumberListAttribute" id="@cdktn/provider-cloudflare.dataCloudflarePipelineSink.DataCloudflarePipelineSinkConfigRollingPolicyOutputReference.getNumberListAttribute"></a>

```go
func GetNumberListAttribute(terraformAttribute *string) *[]*f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-cloudflare.dataCloudflarePipelineSink.DataCloudflarePipelineSinkConfigRollingPolicyOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberMapAttribute` <a name="GetNumberMapAttribute" id="@cdktn/provider-cloudflare.dataCloudflarePipelineSink.DataCloudflarePipelineSinkConfigRollingPolicyOutputReference.getNumberMapAttribute"></a>

```go
func GetNumberMapAttribute(terraformAttribute *string) *map[string]*f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-cloudflare.dataCloudflarePipelineSink.DataCloudflarePipelineSinkConfigRollingPolicyOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetStringAttribute` <a name="GetStringAttribute" id="@cdktn/provider-cloudflare.dataCloudflarePipelineSink.DataCloudflarePipelineSinkConfigRollingPolicyOutputReference.getStringAttribute"></a>

```go
func GetStringAttribute(terraformAttribute *string) *string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-cloudflare.dataCloudflarePipelineSink.DataCloudflarePipelineSinkConfigRollingPolicyOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetStringMapAttribute` <a name="GetStringMapAttribute" id="@cdktn/provider-cloudflare.dataCloudflarePipelineSink.DataCloudflarePipelineSinkConfigRollingPolicyOutputReference.getStringMapAttribute"></a>

```go
func GetStringMapAttribute(terraformAttribute *string) *map[string]*string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-cloudflare.dataCloudflarePipelineSink.DataCloudflarePipelineSinkConfigRollingPolicyOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `InterpolationForAttribute` <a name="InterpolationForAttribute" id="@cdktn/provider-cloudflare.dataCloudflarePipelineSink.DataCloudflarePipelineSinkConfigRollingPolicyOutputReference.interpolationForAttribute"></a>

```go
func InterpolationForAttribute(property *string) IResolvable
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktn/provider-cloudflare.dataCloudflarePipelineSink.DataCloudflarePipelineSinkConfigRollingPolicyOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* *string

---

##### `Resolve` <a name="Resolve" id="@cdktn/provider-cloudflare.dataCloudflarePipelineSink.DataCloudflarePipelineSinkConfigRollingPolicyOutputReference.resolve"></a>

```go
func Resolve(_context IResolveContext) interface{}
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktn/provider-cloudflare.dataCloudflarePipelineSink.DataCloudflarePipelineSinkConfigRollingPolicyOutputReference.resolve.parameter._context"></a>

- *Type:* github.com/open-constructs/cdk-terrain-go/cdktn.IResolveContext

---

##### `ToString` <a name="ToString" id="@cdktn/provider-cloudflare.dataCloudflarePipelineSink.DataCloudflarePipelineSinkConfigRollingPolicyOutputReference.toString"></a>

```go
func ToString() *string
```

Return a string representation of this resolvable object.

Returns a reversible string representation.


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-cloudflare.dataCloudflarePipelineSink.DataCloudflarePipelineSinkConfigRollingPolicyOutputReference.property.creationStack">CreationStack</a></code> | <code>*[]*string</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktn/provider-cloudflare.dataCloudflarePipelineSink.DataCloudflarePipelineSinkConfigRollingPolicyOutputReference.property.fqn">Fqn</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktn/provider-cloudflare.dataCloudflarePipelineSink.DataCloudflarePipelineSinkConfigRollingPolicyOutputReference.property.fileSizeBytes">FileSizeBytes</a></code> | <code>*f64</code> | *No description.* |
| <code><a href="#@cdktn/provider-cloudflare.dataCloudflarePipelineSink.DataCloudflarePipelineSinkConfigRollingPolicyOutputReference.property.inactivitySeconds">InactivitySeconds</a></code> | <code>*f64</code> | *No description.* |
| <code><a href="#@cdktn/provider-cloudflare.dataCloudflarePipelineSink.DataCloudflarePipelineSinkConfigRollingPolicyOutputReference.property.intervalSeconds">IntervalSeconds</a></code> | <code>*f64</code> | *No description.* |
| <code><a href="#@cdktn/provider-cloudflare.dataCloudflarePipelineSink.DataCloudflarePipelineSinkConfigRollingPolicyOutputReference.property.internalValue">InternalValue</a></code> | <code><a href="#@cdktn/provider-cloudflare.dataCloudflarePipelineSink.DataCloudflarePipelineSinkConfigRollingPolicy">DataCloudflarePipelineSinkConfigRollingPolicy</a></code> | *No description.* |

---

##### `CreationStack`<sup>Required</sup> <a name="CreationStack" id="@cdktn/provider-cloudflare.dataCloudflarePipelineSink.DataCloudflarePipelineSinkConfigRollingPolicyOutputReference.property.creationStack"></a>

```go
func CreationStack() *[]*string
```

- *Type:* *[]*string

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `Fqn`<sup>Required</sup> <a name="Fqn" id="@cdktn/provider-cloudflare.dataCloudflarePipelineSink.DataCloudflarePipelineSinkConfigRollingPolicyOutputReference.property.fqn"></a>

```go
func Fqn() *string
```

- *Type:* *string

---

##### `FileSizeBytes`<sup>Required</sup> <a name="FileSizeBytes" id="@cdktn/provider-cloudflare.dataCloudflarePipelineSink.DataCloudflarePipelineSinkConfigRollingPolicyOutputReference.property.fileSizeBytes"></a>

```go
func FileSizeBytes() *f64
```

- *Type:* *f64

---

##### `InactivitySeconds`<sup>Required</sup> <a name="InactivitySeconds" id="@cdktn/provider-cloudflare.dataCloudflarePipelineSink.DataCloudflarePipelineSinkConfigRollingPolicyOutputReference.property.inactivitySeconds"></a>

```go
func InactivitySeconds() *f64
```

- *Type:* *f64

---

##### `IntervalSeconds`<sup>Required</sup> <a name="IntervalSeconds" id="@cdktn/provider-cloudflare.dataCloudflarePipelineSink.DataCloudflarePipelineSinkConfigRollingPolicyOutputReference.property.intervalSeconds"></a>

```go
func IntervalSeconds() *f64
```

- *Type:* *f64

---

##### `InternalValue`<sup>Optional</sup> <a name="InternalValue" id="@cdktn/provider-cloudflare.dataCloudflarePipelineSink.DataCloudflarePipelineSinkConfigRollingPolicyOutputReference.property.internalValue"></a>

```go
func InternalValue() DataCloudflarePipelineSinkConfigRollingPolicy
```

- *Type:* <a href="#@cdktn/provider-cloudflare.dataCloudflarePipelineSink.DataCloudflarePipelineSinkConfigRollingPolicy">DataCloudflarePipelineSinkConfigRollingPolicy</a>

---


### DataCloudflarePipelineSinkFilterOutputReference <a name="DataCloudflarePipelineSinkFilterOutputReference" id="@cdktn/provider-cloudflare.dataCloudflarePipelineSink.DataCloudflarePipelineSinkFilterOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktn/provider-cloudflare.dataCloudflarePipelineSink.DataCloudflarePipelineSinkFilterOutputReference.Initializer"></a>

```go
import "github.com/cdktn-io/cdktn-provider-cloudflare-go/cloudflare/v14/datacloudflarepipelinesink"

datacloudflarepipelinesink.NewDataCloudflarePipelineSinkFilterOutputReference(terraformResource IInterpolatingParent, terraformAttribute *string) DataCloudflarePipelineSinkFilterOutputReference
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-cloudflare.dataCloudflarePipelineSink.DataCloudflarePipelineSinkFilterOutputReference.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>github.com/open-constructs/cdk-terrain-go/cdktn.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktn/provider-cloudflare.dataCloudflarePipelineSink.DataCloudflarePipelineSinkFilterOutputReference.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>*string</code> | The attribute on the parent resource this class is referencing. |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktn/provider-cloudflare.dataCloudflarePipelineSink.DataCloudflarePipelineSinkFilterOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* github.com/open-constructs/cdk-terrain-go/cdktn.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-cloudflare.dataCloudflarePipelineSink.DataCloudflarePipelineSinkFilterOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* *string

The attribute on the parent resource this class is referencing.

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-cloudflare.dataCloudflarePipelineSink.DataCloudflarePipelineSinkFilterOutputReference.computeFqn">ComputeFqn</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-cloudflare.dataCloudflarePipelineSink.DataCloudflarePipelineSinkFilterOutputReference.getAnyMapAttribute">GetAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-cloudflare.dataCloudflarePipelineSink.DataCloudflarePipelineSinkFilterOutputReference.getBooleanAttribute">GetBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-cloudflare.dataCloudflarePipelineSink.DataCloudflarePipelineSinkFilterOutputReference.getBooleanMapAttribute">GetBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-cloudflare.dataCloudflarePipelineSink.DataCloudflarePipelineSinkFilterOutputReference.getListAttribute">GetListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-cloudflare.dataCloudflarePipelineSink.DataCloudflarePipelineSinkFilterOutputReference.getNumberAttribute">GetNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-cloudflare.dataCloudflarePipelineSink.DataCloudflarePipelineSinkFilterOutputReference.getNumberListAttribute">GetNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-cloudflare.dataCloudflarePipelineSink.DataCloudflarePipelineSinkFilterOutputReference.getNumberMapAttribute">GetNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-cloudflare.dataCloudflarePipelineSink.DataCloudflarePipelineSinkFilterOutputReference.getStringAttribute">GetStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-cloudflare.dataCloudflarePipelineSink.DataCloudflarePipelineSinkFilterOutputReference.getStringMapAttribute">GetStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-cloudflare.dataCloudflarePipelineSink.DataCloudflarePipelineSinkFilterOutputReference.interpolationForAttribute">InterpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-cloudflare.dataCloudflarePipelineSink.DataCloudflarePipelineSinkFilterOutputReference.resolve">Resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktn/provider-cloudflare.dataCloudflarePipelineSink.DataCloudflarePipelineSinkFilterOutputReference.toString">ToString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktn/provider-cloudflare.dataCloudflarePipelineSink.DataCloudflarePipelineSinkFilterOutputReference.resetPipelineId">ResetPipelineId</a></code> | *No description.* |

---

##### `ComputeFqn` <a name="ComputeFqn" id="@cdktn/provider-cloudflare.dataCloudflarePipelineSink.DataCloudflarePipelineSinkFilterOutputReference.computeFqn"></a>

```go
func ComputeFqn() *string
```

##### `GetAnyMapAttribute` <a name="GetAnyMapAttribute" id="@cdktn/provider-cloudflare.dataCloudflarePipelineSink.DataCloudflarePipelineSinkFilterOutputReference.getAnyMapAttribute"></a>

```go
func GetAnyMapAttribute(terraformAttribute *string) *map[string]interface{}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-cloudflare.dataCloudflarePipelineSink.DataCloudflarePipelineSinkFilterOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetBooleanAttribute` <a name="GetBooleanAttribute" id="@cdktn/provider-cloudflare.dataCloudflarePipelineSink.DataCloudflarePipelineSinkFilterOutputReference.getBooleanAttribute"></a>

```go
func GetBooleanAttribute(terraformAttribute *string) IResolvable
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-cloudflare.dataCloudflarePipelineSink.DataCloudflarePipelineSinkFilterOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetBooleanMapAttribute` <a name="GetBooleanMapAttribute" id="@cdktn/provider-cloudflare.dataCloudflarePipelineSink.DataCloudflarePipelineSinkFilterOutputReference.getBooleanMapAttribute"></a>

```go
func GetBooleanMapAttribute(terraformAttribute *string) *map[string]*bool
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-cloudflare.dataCloudflarePipelineSink.DataCloudflarePipelineSinkFilterOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetListAttribute` <a name="GetListAttribute" id="@cdktn/provider-cloudflare.dataCloudflarePipelineSink.DataCloudflarePipelineSinkFilterOutputReference.getListAttribute"></a>

```go
func GetListAttribute(terraformAttribute *string) *[]*string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-cloudflare.dataCloudflarePipelineSink.DataCloudflarePipelineSinkFilterOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberAttribute` <a name="GetNumberAttribute" id="@cdktn/provider-cloudflare.dataCloudflarePipelineSink.DataCloudflarePipelineSinkFilterOutputReference.getNumberAttribute"></a>

```go
func GetNumberAttribute(terraformAttribute *string) *f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-cloudflare.dataCloudflarePipelineSink.DataCloudflarePipelineSinkFilterOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberListAttribute` <a name="GetNumberListAttribute" id="@cdktn/provider-cloudflare.dataCloudflarePipelineSink.DataCloudflarePipelineSinkFilterOutputReference.getNumberListAttribute"></a>

```go
func GetNumberListAttribute(terraformAttribute *string) *[]*f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-cloudflare.dataCloudflarePipelineSink.DataCloudflarePipelineSinkFilterOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberMapAttribute` <a name="GetNumberMapAttribute" id="@cdktn/provider-cloudflare.dataCloudflarePipelineSink.DataCloudflarePipelineSinkFilterOutputReference.getNumberMapAttribute"></a>

```go
func GetNumberMapAttribute(terraformAttribute *string) *map[string]*f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-cloudflare.dataCloudflarePipelineSink.DataCloudflarePipelineSinkFilterOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetStringAttribute` <a name="GetStringAttribute" id="@cdktn/provider-cloudflare.dataCloudflarePipelineSink.DataCloudflarePipelineSinkFilterOutputReference.getStringAttribute"></a>

```go
func GetStringAttribute(terraformAttribute *string) *string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-cloudflare.dataCloudflarePipelineSink.DataCloudflarePipelineSinkFilterOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetStringMapAttribute` <a name="GetStringMapAttribute" id="@cdktn/provider-cloudflare.dataCloudflarePipelineSink.DataCloudflarePipelineSinkFilterOutputReference.getStringMapAttribute"></a>

```go
func GetStringMapAttribute(terraformAttribute *string) *map[string]*string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-cloudflare.dataCloudflarePipelineSink.DataCloudflarePipelineSinkFilterOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `InterpolationForAttribute` <a name="InterpolationForAttribute" id="@cdktn/provider-cloudflare.dataCloudflarePipelineSink.DataCloudflarePipelineSinkFilterOutputReference.interpolationForAttribute"></a>

```go
func InterpolationForAttribute(property *string) IResolvable
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktn/provider-cloudflare.dataCloudflarePipelineSink.DataCloudflarePipelineSinkFilterOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* *string

---

##### `Resolve` <a name="Resolve" id="@cdktn/provider-cloudflare.dataCloudflarePipelineSink.DataCloudflarePipelineSinkFilterOutputReference.resolve"></a>

```go
func Resolve(_context IResolveContext) interface{}
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktn/provider-cloudflare.dataCloudflarePipelineSink.DataCloudflarePipelineSinkFilterOutputReference.resolve.parameter._context"></a>

- *Type:* github.com/open-constructs/cdk-terrain-go/cdktn.IResolveContext

---

##### `ToString` <a name="ToString" id="@cdktn/provider-cloudflare.dataCloudflarePipelineSink.DataCloudflarePipelineSinkFilterOutputReference.toString"></a>

```go
func ToString() *string
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `ResetPipelineId` <a name="ResetPipelineId" id="@cdktn/provider-cloudflare.dataCloudflarePipelineSink.DataCloudflarePipelineSinkFilterOutputReference.resetPipelineId"></a>

```go
func ResetPipelineId()
```


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-cloudflare.dataCloudflarePipelineSink.DataCloudflarePipelineSinkFilterOutputReference.property.creationStack">CreationStack</a></code> | <code>*[]*string</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktn/provider-cloudflare.dataCloudflarePipelineSink.DataCloudflarePipelineSinkFilterOutputReference.property.fqn">Fqn</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktn/provider-cloudflare.dataCloudflarePipelineSink.DataCloudflarePipelineSinkFilterOutputReference.property.pipelineIdInput">PipelineIdInput</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktn/provider-cloudflare.dataCloudflarePipelineSink.DataCloudflarePipelineSinkFilterOutputReference.property.pipelineId">PipelineId</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktn/provider-cloudflare.dataCloudflarePipelineSink.DataCloudflarePipelineSinkFilterOutputReference.property.internalValue">InternalValue</a></code> | <code>interface{}</code> | *No description.* |

---

##### `CreationStack`<sup>Required</sup> <a name="CreationStack" id="@cdktn/provider-cloudflare.dataCloudflarePipelineSink.DataCloudflarePipelineSinkFilterOutputReference.property.creationStack"></a>

```go
func CreationStack() *[]*string
```

- *Type:* *[]*string

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `Fqn`<sup>Required</sup> <a name="Fqn" id="@cdktn/provider-cloudflare.dataCloudflarePipelineSink.DataCloudflarePipelineSinkFilterOutputReference.property.fqn"></a>

```go
func Fqn() *string
```

- *Type:* *string

---

##### `PipelineIdInput`<sup>Optional</sup> <a name="PipelineIdInput" id="@cdktn/provider-cloudflare.dataCloudflarePipelineSink.DataCloudflarePipelineSinkFilterOutputReference.property.pipelineIdInput"></a>

```go
func PipelineIdInput() *string
```

- *Type:* *string

---

##### `PipelineId`<sup>Required</sup> <a name="PipelineId" id="@cdktn/provider-cloudflare.dataCloudflarePipelineSink.DataCloudflarePipelineSinkFilterOutputReference.property.pipelineId"></a>

```go
func PipelineId() *string
```

- *Type:* *string

---

##### `InternalValue`<sup>Optional</sup> <a name="InternalValue" id="@cdktn/provider-cloudflare.dataCloudflarePipelineSink.DataCloudflarePipelineSinkFilterOutputReference.property.internalValue"></a>

```go
func InternalValue() interface{}
```

- *Type:* interface{}

---


### DataCloudflarePipelineSinkFormatOutputReference <a name="DataCloudflarePipelineSinkFormatOutputReference" id="@cdktn/provider-cloudflare.dataCloudflarePipelineSink.DataCloudflarePipelineSinkFormatOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktn/provider-cloudflare.dataCloudflarePipelineSink.DataCloudflarePipelineSinkFormatOutputReference.Initializer"></a>

```go
import "github.com/cdktn-io/cdktn-provider-cloudflare-go/cloudflare/v14/datacloudflarepipelinesink"

datacloudflarepipelinesink.NewDataCloudflarePipelineSinkFormatOutputReference(terraformResource IInterpolatingParent, terraformAttribute *string) DataCloudflarePipelineSinkFormatOutputReference
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-cloudflare.dataCloudflarePipelineSink.DataCloudflarePipelineSinkFormatOutputReference.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>github.com/open-constructs/cdk-terrain-go/cdktn.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktn/provider-cloudflare.dataCloudflarePipelineSink.DataCloudflarePipelineSinkFormatOutputReference.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>*string</code> | The attribute on the parent resource this class is referencing. |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktn/provider-cloudflare.dataCloudflarePipelineSink.DataCloudflarePipelineSinkFormatOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* github.com/open-constructs/cdk-terrain-go/cdktn.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-cloudflare.dataCloudflarePipelineSink.DataCloudflarePipelineSinkFormatOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* *string

The attribute on the parent resource this class is referencing.

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-cloudflare.dataCloudflarePipelineSink.DataCloudflarePipelineSinkFormatOutputReference.computeFqn">ComputeFqn</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-cloudflare.dataCloudflarePipelineSink.DataCloudflarePipelineSinkFormatOutputReference.getAnyMapAttribute">GetAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-cloudflare.dataCloudflarePipelineSink.DataCloudflarePipelineSinkFormatOutputReference.getBooleanAttribute">GetBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-cloudflare.dataCloudflarePipelineSink.DataCloudflarePipelineSinkFormatOutputReference.getBooleanMapAttribute">GetBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-cloudflare.dataCloudflarePipelineSink.DataCloudflarePipelineSinkFormatOutputReference.getListAttribute">GetListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-cloudflare.dataCloudflarePipelineSink.DataCloudflarePipelineSinkFormatOutputReference.getNumberAttribute">GetNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-cloudflare.dataCloudflarePipelineSink.DataCloudflarePipelineSinkFormatOutputReference.getNumberListAttribute">GetNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-cloudflare.dataCloudflarePipelineSink.DataCloudflarePipelineSinkFormatOutputReference.getNumberMapAttribute">GetNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-cloudflare.dataCloudflarePipelineSink.DataCloudflarePipelineSinkFormatOutputReference.getStringAttribute">GetStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-cloudflare.dataCloudflarePipelineSink.DataCloudflarePipelineSinkFormatOutputReference.getStringMapAttribute">GetStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-cloudflare.dataCloudflarePipelineSink.DataCloudflarePipelineSinkFormatOutputReference.interpolationForAttribute">InterpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-cloudflare.dataCloudflarePipelineSink.DataCloudflarePipelineSinkFormatOutputReference.resolve">Resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktn/provider-cloudflare.dataCloudflarePipelineSink.DataCloudflarePipelineSinkFormatOutputReference.toString">ToString</a></code> | Return a string representation of this resolvable object. |

---

##### `ComputeFqn` <a name="ComputeFqn" id="@cdktn/provider-cloudflare.dataCloudflarePipelineSink.DataCloudflarePipelineSinkFormatOutputReference.computeFqn"></a>

```go
func ComputeFqn() *string
```

##### `GetAnyMapAttribute` <a name="GetAnyMapAttribute" id="@cdktn/provider-cloudflare.dataCloudflarePipelineSink.DataCloudflarePipelineSinkFormatOutputReference.getAnyMapAttribute"></a>

```go
func GetAnyMapAttribute(terraformAttribute *string) *map[string]interface{}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-cloudflare.dataCloudflarePipelineSink.DataCloudflarePipelineSinkFormatOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetBooleanAttribute` <a name="GetBooleanAttribute" id="@cdktn/provider-cloudflare.dataCloudflarePipelineSink.DataCloudflarePipelineSinkFormatOutputReference.getBooleanAttribute"></a>

```go
func GetBooleanAttribute(terraformAttribute *string) IResolvable
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-cloudflare.dataCloudflarePipelineSink.DataCloudflarePipelineSinkFormatOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetBooleanMapAttribute` <a name="GetBooleanMapAttribute" id="@cdktn/provider-cloudflare.dataCloudflarePipelineSink.DataCloudflarePipelineSinkFormatOutputReference.getBooleanMapAttribute"></a>

```go
func GetBooleanMapAttribute(terraformAttribute *string) *map[string]*bool
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-cloudflare.dataCloudflarePipelineSink.DataCloudflarePipelineSinkFormatOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetListAttribute` <a name="GetListAttribute" id="@cdktn/provider-cloudflare.dataCloudflarePipelineSink.DataCloudflarePipelineSinkFormatOutputReference.getListAttribute"></a>

```go
func GetListAttribute(terraformAttribute *string) *[]*string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-cloudflare.dataCloudflarePipelineSink.DataCloudflarePipelineSinkFormatOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberAttribute` <a name="GetNumberAttribute" id="@cdktn/provider-cloudflare.dataCloudflarePipelineSink.DataCloudflarePipelineSinkFormatOutputReference.getNumberAttribute"></a>

```go
func GetNumberAttribute(terraformAttribute *string) *f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-cloudflare.dataCloudflarePipelineSink.DataCloudflarePipelineSinkFormatOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberListAttribute` <a name="GetNumberListAttribute" id="@cdktn/provider-cloudflare.dataCloudflarePipelineSink.DataCloudflarePipelineSinkFormatOutputReference.getNumberListAttribute"></a>

```go
func GetNumberListAttribute(terraformAttribute *string) *[]*f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-cloudflare.dataCloudflarePipelineSink.DataCloudflarePipelineSinkFormatOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberMapAttribute` <a name="GetNumberMapAttribute" id="@cdktn/provider-cloudflare.dataCloudflarePipelineSink.DataCloudflarePipelineSinkFormatOutputReference.getNumberMapAttribute"></a>

```go
func GetNumberMapAttribute(terraformAttribute *string) *map[string]*f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-cloudflare.dataCloudflarePipelineSink.DataCloudflarePipelineSinkFormatOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetStringAttribute` <a name="GetStringAttribute" id="@cdktn/provider-cloudflare.dataCloudflarePipelineSink.DataCloudflarePipelineSinkFormatOutputReference.getStringAttribute"></a>

```go
func GetStringAttribute(terraformAttribute *string) *string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-cloudflare.dataCloudflarePipelineSink.DataCloudflarePipelineSinkFormatOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetStringMapAttribute` <a name="GetStringMapAttribute" id="@cdktn/provider-cloudflare.dataCloudflarePipelineSink.DataCloudflarePipelineSinkFormatOutputReference.getStringMapAttribute"></a>

```go
func GetStringMapAttribute(terraformAttribute *string) *map[string]*string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-cloudflare.dataCloudflarePipelineSink.DataCloudflarePipelineSinkFormatOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `InterpolationForAttribute` <a name="InterpolationForAttribute" id="@cdktn/provider-cloudflare.dataCloudflarePipelineSink.DataCloudflarePipelineSinkFormatOutputReference.interpolationForAttribute"></a>

```go
func InterpolationForAttribute(property *string) IResolvable
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktn/provider-cloudflare.dataCloudflarePipelineSink.DataCloudflarePipelineSinkFormatOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* *string

---

##### `Resolve` <a name="Resolve" id="@cdktn/provider-cloudflare.dataCloudflarePipelineSink.DataCloudflarePipelineSinkFormatOutputReference.resolve"></a>

```go
func Resolve(_context IResolveContext) interface{}
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktn/provider-cloudflare.dataCloudflarePipelineSink.DataCloudflarePipelineSinkFormatOutputReference.resolve.parameter._context"></a>

- *Type:* github.com/open-constructs/cdk-terrain-go/cdktn.IResolveContext

---

##### `ToString` <a name="ToString" id="@cdktn/provider-cloudflare.dataCloudflarePipelineSink.DataCloudflarePipelineSinkFormatOutputReference.toString"></a>

```go
func ToString() *string
```

Return a string representation of this resolvable object.

Returns a reversible string representation.


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-cloudflare.dataCloudflarePipelineSink.DataCloudflarePipelineSinkFormatOutputReference.property.creationStack">CreationStack</a></code> | <code>*[]*string</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktn/provider-cloudflare.dataCloudflarePipelineSink.DataCloudflarePipelineSinkFormatOutputReference.property.fqn">Fqn</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktn/provider-cloudflare.dataCloudflarePipelineSink.DataCloudflarePipelineSinkFormatOutputReference.property.compression">Compression</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktn/provider-cloudflare.dataCloudflarePipelineSink.DataCloudflarePipelineSinkFormatOutputReference.property.decimalEncoding">DecimalEncoding</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktn/provider-cloudflare.dataCloudflarePipelineSink.DataCloudflarePipelineSinkFormatOutputReference.property.rowGroupBytes">RowGroupBytes</a></code> | <code>*f64</code> | *No description.* |
| <code><a href="#@cdktn/provider-cloudflare.dataCloudflarePipelineSink.DataCloudflarePipelineSinkFormatOutputReference.property.timestampFormat">TimestampFormat</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktn/provider-cloudflare.dataCloudflarePipelineSink.DataCloudflarePipelineSinkFormatOutputReference.property.type">Type</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktn/provider-cloudflare.dataCloudflarePipelineSink.DataCloudflarePipelineSinkFormatOutputReference.property.unstructured">Unstructured</a></code> | <code>github.com/open-constructs/cdk-terrain-go/cdktn.IResolvable</code> | *No description.* |
| <code><a href="#@cdktn/provider-cloudflare.dataCloudflarePipelineSink.DataCloudflarePipelineSinkFormatOutputReference.property.internalValue">InternalValue</a></code> | <code><a href="#@cdktn/provider-cloudflare.dataCloudflarePipelineSink.DataCloudflarePipelineSinkFormat">DataCloudflarePipelineSinkFormat</a></code> | *No description.* |

---

##### `CreationStack`<sup>Required</sup> <a name="CreationStack" id="@cdktn/provider-cloudflare.dataCloudflarePipelineSink.DataCloudflarePipelineSinkFormatOutputReference.property.creationStack"></a>

```go
func CreationStack() *[]*string
```

- *Type:* *[]*string

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `Fqn`<sup>Required</sup> <a name="Fqn" id="@cdktn/provider-cloudflare.dataCloudflarePipelineSink.DataCloudflarePipelineSinkFormatOutputReference.property.fqn"></a>

```go
func Fqn() *string
```

- *Type:* *string

---

##### `Compression`<sup>Required</sup> <a name="Compression" id="@cdktn/provider-cloudflare.dataCloudflarePipelineSink.DataCloudflarePipelineSinkFormatOutputReference.property.compression"></a>

```go
func Compression() *string
```

- *Type:* *string

---

##### `DecimalEncoding`<sup>Required</sup> <a name="DecimalEncoding" id="@cdktn/provider-cloudflare.dataCloudflarePipelineSink.DataCloudflarePipelineSinkFormatOutputReference.property.decimalEncoding"></a>

```go
func DecimalEncoding() *string
```

- *Type:* *string

---

##### `RowGroupBytes`<sup>Required</sup> <a name="RowGroupBytes" id="@cdktn/provider-cloudflare.dataCloudflarePipelineSink.DataCloudflarePipelineSinkFormatOutputReference.property.rowGroupBytes"></a>

```go
func RowGroupBytes() *f64
```

- *Type:* *f64

---

##### `TimestampFormat`<sup>Required</sup> <a name="TimestampFormat" id="@cdktn/provider-cloudflare.dataCloudflarePipelineSink.DataCloudflarePipelineSinkFormatOutputReference.property.timestampFormat"></a>

```go
func TimestampFormat() *string
```

- *Type:* *string

---

##### `Type`<sup>Required</sup> <a name="Type" id="@cdktn/provider-cloudflare.dataCloudflarePipelineSink.DataCloudflarePipelineSinkFormatOutputReference.property.type"></a>

```go
func Type() *string
```

- *Type:* *string

---

##### `Unstructured`<sup>Required</sup> <a name="Unstructured" id="@cdktn/provider-cloudflare.dataCloudflarePipelineSink.DataCloudflarePipelineSinkFormatOutputReference.property.unstructured"></a>

```go
func Unstructured() IResolvable
```

- *Type:* github.com/open-constructs/cdk-terrain-go/cdktn.IResolvable

---

##### `InternalValue`<sup>Optional</sup> <a name="InternalValue" id="@cdktn/provider-cloudflare.dataCloudflarePipelineSink.DataCloudflarePipelineSinkFormatOutputReference.property.internalValue"></a>

```go
func InternalValue() DataCloudflarePipelineSinkFormat
```

- *Type:* <a href="#@cdktn/provider-cloudflare.dataCloudflarePipelineSink.DataCloudflarePipelineSinkFormat">DataCloudflarePipelineSinkFormat</a>

---


### DataCloudflarePipelineSinkSchemaFieldsList <a name="DataCloudflarePipelineSinkSchemaFieldsList" id="@cdktn/provider-cloudflare.dataCloudflarePipelineSink.DataCloudflarePipelineSinkSchemaFieldsList"></a>

#### Initializers <a name="Initializers" id="@cdktn/provider-cloudflare.dataCloudflarePipelineSink.DataCloudflarePipelineSinkSchemaFieldsList.Initializer"></a>

```go
import "github.com/cdktn-io/cdktn-provider-cloudflare-go/cloudflare/v14/datacloudflarepipelinesink"

datacloudflarepipelinesink.NewDataCloudflarePipelineSinkSchemaFieldsList(terraformResource IInterpolatingParent, terraformAttribute *string, wrapsSet *bool) DataCloudflarePipelineSinkSchemaFieldsList
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-cloudflare.dataCloudflarePipelineSink.DataCloudflarePipelineSinkSchemaFieldsList.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>github.com/open-constructs/cdk-terrain-go/cdktn.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktn/provider-cloudflare.dataCloudflarePipelineSink.DataCloudflarePipelineSinkSchemaFieldsList.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>*string</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#@cdktn/provider-cloudflare.dataCloudflarePipelineSink.DataCloudflarePipelineSinkSchemaFieldsList.Initializer.parameter.wrapsSet">wrapsSet</a></code> | <code>*bool</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktn/provider-cloudflare.dataCloudflarePipelineSink.DataCloudflarePipelineSinkSchemaFieldsList.Initializer.parameter.terraformResource"></a>

- *Type:* github.com/open-constructs/cdk-terrain-go/cdktn.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-cloudflare.dataCloudflarePipelineSink.DataCloudflarePipelineSinkSchemaFieldsList.Initializer.parameter.terraformAttribute"></a>

- *Type:* *string

The attribute on the parent resource this class is referencing.

---

##### `wrapsSet`<sup>Required</sup> <a name="wrapsSet" id="@cdktn/provider-cloudflare.dataCloudflarePipelineSink.DataCloudflarePipelineSinkSchemaFieldsList.Initializer.parameter.wrapsSet"></a>

- *Type:* *bool

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-cloudflare.dataCloudflarePipelineSink.DataCloudflarePipelineSinkSchemaFieldsList.allWithMapKey">AllWithMapKey</a></code> | Creating an iterator for this complex list. |
| <code><a href="#@cdktn/provider-cloudflare.dataCloudflarePipelineSink.DataCloudflarePipelineSinkSchemaFieldsList.computeFqn">ComputeFqn</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-cloudflare.dataCloudflarePipelineSink.DataCloudflarePipelineSinkSchemaFieldsList.resolve">Resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktn/provider-cloudflare.dataCloudflarePipelineSink.DataCloudflarePipelineSinkSchemaFieldsList.toString">ToString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktn/provider-cloudflare.dataCloudflarePipelineSink.DataCloudflarePipelineSinkSchemaFieldsList.get">Get</a></code> | *No description.* |

---

##### `AllWithMapKey` <a name="AllWithMapKey" id="@cdktn/provider-cloudflare.dataCloudflarePipelineSink.DataCloudflarePipelineSinkSchemaFieldsList.allWithMapKey"></a>

```go
func AllWithMapKey(mapKeyAttributeName *string) DynamicListTerraformIterator
```

Creating an iterator for this complex list.

The list will be converted into a map with the mapKeyAttributeName as the key.

###### `mapKeyAttributeName`<sup>Required</sup> <a name="mapKeyAttributeName" id="@cdktn/provider-cloudflare.dataCloudflarePipelineSink.DataCloudflarePipelineSinkSchemaFieldsList.allWithMapKey.parameter.mapKeyAttributeName"></a>

- *Type:* *string

---

##### `ComputeFqn` <a name="ComputeFqn" id="@cdktn/provider-cloudflare.dataCloudflarePipelineSink.DataCloudflarePipelineSinkSchemaFieldsList.computeFqn"></a>

```go
func ComputeFqn() *string
```

##### `Resolve` <a name="Resolve" id="@cdktn/provider-cloudflare.dataCloudflarePipelineSink.DataCloudflarePipelineSinkSchemaFieldsList.resolve"></a>

```go
func Resolve(_context IResolveContext) interface{}
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktn/provider-cloudflare.dataCloudflarePipelineSink.DataCloudflarePipelineSinkSchemaFieldsList.resolve.parameter._context"></a>

- *Type:* github.com/open-constructs/cdk-terrain-go/cdktn.IResolveContext

---

##### `ToString` <a name="ToString" id="@cdktn/provider-cloudflare.dataCloudflarePipelineSink.DataCloudflarePipelineSinkSchemaFieldsList.toString"></a>

```go
func ToString() *string
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `Get` <a name="Get" id="@cdktn/provider-cloudflare.dataCloudflarePipelineSink.DataCloudflarePipelineSinkSchemaFieldsList.get"></a>

```go
func Get(index *f64) DataCloudflarePipelineSinkSchemaFieldsOutputReference
```

###### `index`<sup>Required</sup> <a name="index" id="@cdktn/provider-cloudflare.dataCloudflarePipelineSink.DataCloudflarePipelineSinkSchemaFieldsList.get.parameter.index"></a>

- *Type:* *f64

the index of the item to return.

---


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-cloudflare.dataCloudflarePipelineSink.DataCloudflarePipelineSinkSchemaFieldsList.property.creationStack">CreationStack</a></code> | <code>*[]*string</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktn/provider-cloudflare.dataCloudflarePipelineSink.DataCloudflarePipelineSinkSchemaFieldsList.property.fqn">Fqn</a></code> | <code>*string</code> | *No description.* |

---

##### `CreationStack`<sup>Required</sup> <a name="CreationStack" id="@cdktn/provider-cloudflare.dataCloudflarePipelineSink.DataCloudflarePipelineSinkSchemaFieldsList.property.creationStack"></a>

```go
func CreationStack() *[]*string
```

- *Type:* *[]*string

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `Fqn`<sup>Required</sup> <a name="Fqn" id="@cdktn/provider-cloudflare.dataCloudflarePipelineSink.DataCloudflarePipelineSinkSchemaFieldsList.property.fqn"></a>

```go
func Fqn() *string
```

- *Type:* *string

---


### DataCloudflarePipelineSinkSchemaFieldsOutputReference <a name="DataCloudflarePipelineSinkSchemaFieldsOutputReference" id="@cdktn/provider-cloudflare.dataCloudflarePipelineSink.DataCloudflarePipelineSinkSchemaFieldsOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktn/provider-cloudflare.dataCloudflarePipelineSink.DataCloudflarePipelineSinkSchemaFieldsOutputReference.Initializer"></a>

```go
import "github.com/cdktn-io/cdktn-provider-cloudflare-go/cloudflare/v14/datacloudflarepipelinesink"

datacloudflarepipelinesink.NewDataCloudflarePipelineSinkSchemaFieldsOutputReference(terraformResource IInterpolatingParent, terraformAttribute *string, complexObjectIndex *f64, complexObjectIsFromSet *bool) DataCloudflarePipelineSinkSchemaFieldsOutputReference
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-cloudflare.dataCloudflarePipelineSink.DataCloudflarePipelineSinkSchemaFieldsOutputReference.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>github.com/open-constructs/cdk-terrain-go/cdktn.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktn/provider-cloudflare.dataCloudflarePipelineSink.DataCloudflarePipelineSinkSchemaFieldsOutputReference.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>*string</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#@cdktn/provider-cloudflare.dataCloudflarePipelineSink.DataCloudflarePipelineSinkSchemaFieldsOutputReference.Initializer.parameter.complexObjectIndex">complexObjectIndex</a></code> | <code>*f64</code> | the index of this item in the list. |
| <code><a href="#@cdktn/provider-cloudflare.dataCloudflarePipelineSink.DataCloudflarePipelineSinkSchemaFieldsOutputReference.Initializer.parameter.complexObjectIsFromSet">complexObjectIsFromSet</a></code> | <code>*bool</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktn/provider-cloudflare.dataCloudflarePipelineSink.DataCloudflarePipelineSinkSchemaFieldsOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* github.com/open-constructs/cdk-terrain-go/cdktn.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-cloudflare.dataCloudflarePipelineSink.DataCloudflarePipelineSinkSchemaFieldsOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* *string

The attribute on the parent resource this class is referencing.

---

##### `complexObjectIndex`<sup>Required</sup> <a name="complexObjectIndex" id="@cdktn/provider-cloudflare.dataCloudflarePipelineSink.DataCloudflarePipelineSinkSchemaFieldsOutputReference.Initializer.parameter.complexObjectIndex"></a>

- *Type:* *f64

the index of this item in the list.

---

##### `complexObjectIsFromSet`<sup>Required</sup> <a name="complexObjectIsFromSet" id="@cdktn/provider-cloudflare.dataCloudflarePipelineSink.DataCloudflarePipelineSinkSchemaFieldsOutputReference.Initializer.parameter.complexObjectIsFromSet"></a>

- *Type:* *bool

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-cloudflare.dataCloudflarePipelineSink.DataCloudflarePipelineSinkSchemaFieldsOutputReference.computeFqn">ComputeFqn</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-cloudflare.dataCloudflarePipelineSink.DataCloudflarePipelineSinkSchemaFieldsOutputReference.getAnyMapAttribute">GetAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-cloudflare.dataCloudflarePipelineSink.DataCloudflarePipelineSinkSchemaFieldsOutputReference.getBooleanAttribute">GetBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-cloudflare.dataCloudflarePipelineSink.DataCloudflarePipelineSinkSchemaFieldsOutputReference.getBooleanMapAttribute">GetBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-cloudflare.dataCloudflarePipelineSink.DataCloudflarePipelineSinkSchemaFieldsOutputReference.getListAttribute">GetListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-cloudflare.dataCloudflarePipelineSink.DataCloudflarePipelineSinkSchemaFieldsOutputReference.getNumberAttribute">GetNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-cloudflare.dataCloudflarePipelineSink.DataCloudflarePipelineSinkSchemaFieldsOutputReference.getNumberListAttribute">GetNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-cloudflare.dataCloudflarePipelineSink.DataCloudflarePipelineSinkSchemaFieldsOutputReference.getNumberMapAttribute">GetNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-cloudflare.dataCloudflarePipelineSink.DataCloudflarePipelineSinkSchemaFieldsOutputReference.getStringAttribute">GetStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-cloudflare.dataCloudflarePipelineSink.DataCloudflarePipelineSinkSchemaFieldsOutputReference.getStringMapAttribute">GetStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-cloudflare.dataCloudflarePipelineSink.DataCloudflarePipelineSinkSchemaFieldsOutputReference.interpolationForAttribute">InterpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-cloudflare.dataCloudflarePipelineSink.DataCloudflarePipelineSinkSchemaFieldsOutputReference.resolve">Resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktn/provider-cloudflare.dataCloudflarePipelineSink.DataCloudflarePipelineSinkSchemaFieldsOutputReference.toString">ToString</a></code> | Return a string representation of this resolvable object. |

---

##### `ComputeFqn` <a name="ComputeFqn" id="@cdktn/provider-cloudflare.dataCloudflarePipelineSink.DataCloudflarePipelineSinkSchemaFieldsOutputReference.computeFqn"></a>

```go
func ComputeFqn() *string
```

##### `GetAnyMapAttribute` <a name="GetAnyMapAttribute" id="@cdktn/provider-cloudflare.dataCloudflarePipelineSink.DataCloudflarePipelineSinkSchemaFieldsOutputReference.getAnyMapAttribute"></a>

```go
func GetAnyMapAttribute(terraformAttribute *string) *map[string]interface{}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-cloudflare.dataCloudflarePipelineSink.DataCloudflarePipelineSinkSchemaFieldsOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetBooleanAttribute` <a name="GetBooleanAttribute" id="@cdktn/provider-cloudflare.dataCloudflarePipelineSink.DataCloudflarePipelineSinkSchemaFieldsOutputReference.getBooleanAttribute"></a>

```go
func GetBooleanAttribute(terraformAttribute *string) IResolvable
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-cloudflare.dataCloudflarePipelineSink.DataCloudflarePipelineSinkSchemaFieldsOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetBooleanMapAttribute` <a name="GetBooleanMapAttribute" id="@cdktn/provider-cloudflare.dataCloudflarePipelineSink.DataCloudflarePipelineSinkSchemaFieldsOutputReference.getBooleanMapAttribute"></a>

```go
func GetBooleanMapAttribute(terraformAttribute *string) *map[string]*bool
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-cloudflare.dataCloudflarePipelineSink.DataCloudflarePipelineSinkSchemaFieldsOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetListAttribute` <a name="GetListAttribute" id="@cdktn/provider-cloudflare.dataCloudflarePipelineSink.DataCloudflarePipelineSinkSchemaFieldsOutputReference.getListAttribute"></a>

```go
func GetListAttribute(terraformAttribute *string) *[]*string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-cloudflare.dataCloudflarePipelineSink.DataCloudflarePipelineSinkSchemaFieldsOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberAttribute` <a name="GetNumberAttribute" id="@cdktn/provider-cloudflare.dataCloudflarePipelineSink.DataCloudflarePipelineSinkSchemaFieldsOutputReference.getNumberAttribute"></a>

```go
func GetNumberAttribute(terraformAttribute *string) *f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-cloudflare.dataCloudflarePipelineSink.DataCloudflarePipelineSinkSchemaFieldsOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberListAttribute` <a name="GetNumberListAttribute" id="@cdktn/provider-cloudflare.dataCloudflarePipelineSink.DataCloudflarePipelineSinkSchemaFieldsOutputReference.getNumberListAttribute"></a>

```go
func GetNumberListAttribute(terraformAttribute *string) *[]*f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-cloudflare.dataCloudflarePipelineSink.DataCloudflarePipelineSinkSchemaFieldsOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberMapAttribute` <a name="GetNumberMapAttribute" id="@cdktn/provider-cloudflare.dataCloudflarePipelineSink.DataCloudflarePipelineSinkSchemaFieldsOutputReference.getNumberMapAttribute"></a>

```go
func GetNumberMapAttribute(terraformAttribute *string) *map[string]*f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-cloudflare.dataCloudflarePipelineSink.DataCloudflarePipelineSinkSchemaFieldsOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetStringAttribute` <a name="GetStringAttribute" id="@cdktn/provider-cloudflare.dataCloudflarePipelineSink.DataCloudflarePipelineSinkSchemaFieldsOutputReference.getStringAttribute"></a>

```go
func GetStringAttribute(terraformAttribute *string) *string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-cloudflare.dataCloudflarePipelineSink.DataCloudflarePipelineSinkSchemaFieldsOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetStringMapAttribute` <a name="GetStringMapAttribute" id="@cdktn/provider-cloudflare.dataCloudflarePipelineSink.DataCloudflarePipelineSinkSchemaFieldsOutputReference.getStringMapAttribute"></a>

```go
func GetStringMapAttribute(terraformAttribute *string) *map[string]*string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-cloudflare.dataCloudflarePipelineSink.DataCloudflarePipelineSinkSchemaFieldsOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `InterpolationForAttribute` <a name="InterpolationForAttribute" id="@cdktn/provider-cloudflare.dataCloudflarePipelineSink.DataCloudflarePipelineSinkSchemaFieldsOutputReference.interpolationForAttribute"></a>

```go
func InterpolationForAttribute(property *string) IResolvable
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktn/provider-cloudflare.dataCloudflarePipelineSink.DataCloudflarePipelineSinkSchemaFieldsOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* *string

---

##### `Resolve` <a name="Resolve" id="@cdktn/provider-cloudflare.dataCloudflarePipelineSink.DataCloudflarePipelineSinkSchemaFieldsOutputReference.resolve"></a>

```go
func Resolve(_context IResolveContext) interface{}
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktn/provider-cloudflare.dataCloudflarePipelineSink.DataCloudflarePipelineSinkSchemaFieldsOutputReference.resolve.parameter._context"></a>

- *Type:* github.com/open-constructs/cdk-terrain-go/cdktn.IResolveContext

---

##### `ToString` <a name="ToString" id="@cdktn/provider-cloudflare.dataCloudflarePipelineSink.DataCloudflarePipelineSinkSchemaFieldsOutputReference.toString"></a>

```go
func ToString() *string
```

Return a string representation of this resolvable object.

Returns a reversible string representation.


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-cloudflare.dataCloudflarePipelineSink.DataCloudflarePipelineSinkSchemaFieldsOutputReference.property.creationStack">CreationStack</a></code> | <code>*[]*string</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktn/provider-cloudflare.dataCloudflarePipelineSink.DataCloudflarePipelineSinkSchemaFieldsOutputReference.property.fqn">Fqn</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktn/provider-cloudflare.dataCloudflarePipelineSink.DataCloudflarePipelineSinkSchemaFieldsOutputReference.property.metadataKey">MetadataKey</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktn/provider-cloudflare.dataCloudflarePipelineSink.DataCloudflarePipelineSinkSchemaFieldsOutputReference.property.name">Name</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktn/provider-cloudflare.dataCloudflarePipelineSink.DataCloudflarePipelineSinkSchemaFieldsOutputReference.property.required">Required</a></code> | <code>github.com/open-constructs/cdk-terrain-go/cdktn.IResolvable</code> | *No description.* |
| <code><a href="#@cdktn/provider-cloudflare.dataCloudflarePipelineSink.DataCloudflarePipelineSinkSchemaFieldsOutputReference.property.sqlName">SqlName</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktn/provider-cloudflare.dataCloudflarePipelineSink.DataCloudflarePipelineSinkSchemaFieldsOutputReference.property.type">Type</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktn/provider-cloudflare.dataCloudflarePipelineSink.DataCloudflarePipelineSinkSchemaFieldsOutputReference.property.unit">Unit</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktn/provider-cloudflare.dataCloudflarePipelineSink.DataCloudflarePipelineSinkSchemaFieldsOutputReference.property.internalValue">InternalValue</a></code> | <code><a href="#@cdktn/provider-cloudflare.dataCloudflarePipelineSink.DataCloudflarePipelineSinkSchemaFields">DataCloudflarePipelineSinkSchemaFields</a></code> | *No description.* |

---

##### `CreationStack`<sup>Required</sup> <a name="CreationStack" id="@cdktn/provider-cloudflare.dataCloudflarePipelineSink.DataCloudflarePipelineSinkSchemaFieldsOutputReference.property.creationStack"></a>

```go
func CreationStack() *[]*string
```

- *Type:* *[]*string

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `Fqn`<sup>Required</sup> <a name="Fqn" id="@cdktn/provider-cloudflare.dataCloudflarePipelineSink.DataCloudflarePipelineSinkSchemaFieldsOutputReference.property.fqn"></a>

```go
func Fqn() *string
```

- *Type:* *string

---

##### `MetadataKey`<sup>Required</sup> <a name="MetadataKey" id="@cdktn/provider-cloudflare.dataCloudflarePipelineSink.DataCloudflarePipelineSinkSchemaFieldsOutputReference.property.metadataKey"></a>

```go
func MetadataKey() *string
```

- *Type:* *string

---

##### `Name`<sup>Required</sup> <a name="Name" id="@cdktn/provider-cloudflare.dataCloudflarePipelineSink.DataCloudflarePipelineSinkSchemaFieldsOutputReference.property.name"></a>

```go
func Name() *string
```

- *Type:* *string

---

##### `Required`<sup>Required</sup> <a name="Required" id="@cdktn/provider-cloudflare.dataCloudflarePipelineSink.DataCloudflarePipelineSinkSchemaFieldsOutputReference.property.required"></a>

```go
func Required() IResolvable
```

- *Type:* github.com/open-constructs/cdk-terrain-go/cdktn.IResolvable

---

##### `SqlName`<sup>Required</sup> <a name="SqlName" id="@cdktn/provider-cloudflare.dataCloudflarePipelineSink.DataCloudflarePipelineSinkSchemaFieldsOutputReference.property.sqlName"></a>

```go
func SqlName() *string
```

- *Type:* *string

---

##### `Type`<sup>Required</sup> <a name="Type" id="@cdktn/provider-cloudflare.dataCloudflarePipelineSink.DataCloudflarePipelineSinkSchemaFieldsOutputReference.property.type"></a>

```go
func Type() *string
```

- *Type:* *string

---

##### `Unit`<sup>Required</sup> <a name="Unit" id="@cdktn/provider-cloudflare.dataCloudflarePipelineSink.DataCloudflarePipelineSinkSchemaFieldsOutputReference.property.unit"></a>

```go
func Unit() *string
```

- *Type:* *string

---

##### `InternalValue`<sup>Optional</sup> <a name="InternalValue" id="@cdktn/provider-cloudflare.dataCloudflarePipelineSink.DataCloudflarePipelineSinkSchemaFieldsOutputReference.property.internalValue"></a>

```go
func InternalValue() DataCloudflarePipelineSinkSchemaFields
```

- *Type:* <a href="#@cdktn/provider-cloudflare.dataCloudflarePipelineSink.DataCloudflarePipelineSinkSchemaFields">DataCloudflarePipelineSinkSchemaFields</a>

---


### DataCloudflarePipelineSinkSchemaFormatOutputReference <a name="DataCloudflarePipelineSinkSchemaFormatOutputReference" id="@cdktn/provider-cloudflare.dataCloudflarePipelineSink.DataCloudflarePipelineSinkSchemaFormatOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktn/provider-cloudflare.dataCloudflarePipelineSink.DataCloudflarePipelineSinkSchemaFormatOutputReference.Initializer"></a>

```go
import "github.com/cdktn-io/cdktn-provider-cloudflare-go/cloudflare/v14/datacloudflarepipelinesink"

datacloudflarepipelinesink.NewDataCloudflarePipelineSinkSchemaFormatOutputReference(terraformResource IInterpolatingParent, terraformAttribute *string) DataCloudflarePipelineSinkSchemaFormatOutputReference
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-cloudflare.dataCloudflarePipelineSink.DataCloudflarePipelineSinkSchemaFormatOutputReference.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>github.com/open-constructs/cdk-terrain-go/cdktn.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktn/provider-cloudflare.dataCloudflarePipelineSink.DataCloudflarePipelineSinkSchemaFormatOutputReference.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>*string</code> | The attribute on the parent resource this class is referencing. |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktn/provider-cloudflare.dataCloudflarePipelineSink.DataCloudflarePipelineSinkSchemaFormatOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* github.com/open-constructs/cdk-terrain-go/cdktn.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-cloudflare.dataCloudflarePipelineSink.DataCloudflarePipelineSinkSchemaFormatOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* *string

The attribute on the parent resource this class is referencing.

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-cloudflare.dataCloudflarePipelineSink.DataCloudflarePipelineSinkSchemaFormatOutputReference.computeFqn">ComputeFqn</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-cloudflare.dataCloudflarePipelineSink.DataCloudflarePipelineSinkSchemaFormatOutputReference.getAnyMapAttribute">GetAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-cloudflare.dataCloudflarePipelineSink.DataCloudflarePipelineSinkSchemaFormatOutputReference.getBooleanAttribute">GetBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-cloudflare.dataCloudflarePipelineSink.DataCloudflarePipelineSinkSchemaFormatOutputReference.getBooleanMapAttribute">GetBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-cloudflare.dataCloudflarePipelineSink.DataCloudflarePipelineSinkSchemaFormatOutputReference.getListAttribute">GetListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-cloudflare.dataCloudflarePipelineSink.DataCloudflarePipelineSinkSchemaFormatOutputReference.getNumberAttribute">GetNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-cloudflare.dataCloudflarePipelineSink.DataCloudflarePipelineSinkSchemaFormatOutputReference.getNumberListAttribute">GetNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-cloudflare.dataCloudflarePipelineSink.DataCloudflarePipelineSinkSchemaFormatOutputReference.getNumberMapAttribute">GetNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-cloudflare.dataCloudflarePipelineSink.DataCloudflarePipelineSinkSchemaFormatOutputReference.getStringAttribute">GetStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-cloudflare.dataCloudflarePipelineSink.DataCloudflarePipelineSinkSchemaFormatOutputReference.getStringMapAttribute">GetStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-cloudflare.dataCloudflarePipelineSink.DataCloudflarePipelineSinkSchemaFormatOutputReference.interpolationForAttribute">InterpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-cloudflare.dataCloudflarePipelineSink.DataCloudflarePipelineSinkSchemaFormatOutputReference.resolve">Resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktn/provider-cloudflare.dataCloudflarePipelineSink.DataCloudflarePipelineSinkSchemaFormatOutputReference.toString">ToString</a></code> | Return a string representation of this resolvable object. |

---

##### `ComputeFqn` <a name="ComputeFqn" id="@cdktn/provider-cloudflare.dataCloudflarePipelineSink.DataCloudflarePipelineSinkSchemaFormatOutputReference.computeFqn"></a>

```go
func ComputeFqn() *string
```

##### `GetAnyMapAttribute` <a name="GetAnyMapAttribute" id="@cdktn/provider-cloudflare.dataCloudflarePipelineSink.DataCloudflarePipelineSinkSchemaFormatOutputReference.getAnyMapAttribute"></a>

```go
func GetAnyMapAttribute(terraformAttribute *string) *map[string]interface{}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-cloudflare.dataCloudflarePipelineSink.DataCloudflarePipelineSinkSchemaFormatOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetBooleanAttribute` <a name="GetBooleanAttribute" id="@cdktn/provider-cloudflare.dataCloudflarePipelineSink.DataCloudflarePipelineSinkSchemaFormatOutputReference.getBooleanAttribute"></a>

```go
func GetBooleanAttribute(terraformAttribute *string) IResolvable
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-cloudflare.dataCloudflarePipelineSink.DataCloudflarePipelineSinkSchemaFormatOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetBooleanMapAttribute` <a name="GetBooleanMapAttribute" id="@cdktn/provider-cloudflare.dataCloudflarePipelineSink.DataCloudflarePipelineSinkSchemaFormatOutputReference.getBooleanMapAttribute"></a>

```go
func GetBooleanMapAttribute(terraformAttribute *string) *map[string]*bool
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-cloudflare.dataCloudflarePipelineSink.DataCloudflarePipelineSinkSchemaFormatOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetListAttribute` <a name="GetListAttribute" id="@cdktn/provider-cloudflare.dataCloudflarePipelineSink.DataCloudflarePipelineSinkSchemaFormatOutputReference.getListAttribute"></a>

```go
func GetListAttribute(terraformAttribute *string) *[]*string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-cloudflare.dataCloudflarePipelineSink.DataCloudflarePipelineSinkSchemaFormatOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberAttribute` <a name="GetNumberAttribute" id="@cdktn/provider-cloudflare.dataCloudflarePipelineSink.DataCloudflarePipelineSinkSchemaFormatOutputReference.getNumberAttribute"></a>

```go
func GetNumberAttribute(terraformAttribute *string) *f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-cloudflare.dataCloudflarePipelineSink.DataCloudflarePipelineSinkSchemaFormatOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberListAttribute` <a name="GetNumberListAttribute" id="@cdktn/provider-cloudflare.dataCloudflarePipelineSink.DataCloudflarePipelineSinkSchemaFormatOutputReference.getNumberListAttribute"></a>

```go
func GetNumberListAttribute(terraformAttribute *string) *[]*f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-cloudflare.dataCloudflarePipelineSink.DataCloudflarePipelineSinkSchemaFormatOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberMapAttribute` <a name="GetNumberMapAttribute" id="@cdktn/provider-cloudflare.dataCloudflarePipelineSink.DataCloudflarePipelineSinkSchemaFormatOutputReference.getNumberMapAttribute"></a>

```go
func GetNumberMapAttribute(terraformAttribute *string) *map[string]*f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-cloudflare.dataCloudflarePipelineSink.DataCloudflarePipelineSinkSchemaFormatOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetStringAttribute` <a name="GetStringAttribute" id="@cdktn/provider-cloudflare.dataCloudflarePipelineSink.DataCloudflarePipelineSinkSchemaFormatOutputReference.getStringAttribute"></a>

```go
func GetStringAttribute(terraformAttribute *string) *string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-cloudflare.dataCloudflarePipelineSink.DataCloudflarePipelineSinkSchemaFormatOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetStringMapAttribute` <a name="GetStringMapAttribute" id="@cdktn/provider-cloudflare.dataCloudflarePipelineSink.DataCloudflarePipelineSinkSchemaFormatOutputReference.getStringMapAttribute"></a>

```go
func GetStringMapAttribute(terraformAttribute *string) *map[string]*string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-cloudflare.dataCloudflarePipelineSink.DataCloudflarePipelineSinkSchemaFormatOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `InterpolationForAttribute` <a name="InterpolationForAttribute" id="@cdktn/provider-cloudflare.dataCloudflarePipelineSink.DataCloudflarePipelineSinkSchemaFormatOutputReference.interpolationForAttribute"></a>

```go
func InterpolationForAttribute(property *string) IResolvable
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktn/provider-cloudflare.dataCloudflarePipelineSink.DataCloudflarePipelineSinkSchemaFormatOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* *string

---

##### `Resolve` <a name="Resolve" id="@cdktn/provider-cloudflare.dataCloudflarePipelineSink.DataCloudflarePipelineSinkSchemaFormatOutputReference.resolve"></a>

```go
func Resolve(_context IResolveContext) interface{}
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktn/provider-cloudflare.dataCloudflarePipelineSink.DataCloudflarePipelineSinkSchemaFormatOutputReference.resolve.parameter._context"></a>

- *Type:* github.com/open-constructs/cdk-terrain-go/cdktn.IResolveContext

---

##### `ToString` <a name="ToString" id="@cdktn/provider-cloudflare.dataCloudflarePipelineSink.DataCloudflarePipelineSinkSchemaFormatOutputReference.toString"></a>

```go
func ToString() *string
```

Return a string representation of this resolvable object.

Returns a reversible string representation.


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-cloudflare.dataCloudflarePipelineSink.DataCloudflarePipelineSinkSchemaFormatOutputReference.property.creationStack">CreationStack</a></code> | <code>*[]*string</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktn/provider-cloudflare.dataCloudflarePipelineSink.DataCloudflarePipelineSinkSchemaFormatOutputReference.property.fqn">Fqn</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktn/provider-cloudflare.dataCloudflarePipelineSink.DataCloudflarePipelineSinkSchemaFormatOutputReference.property.compression">Compression</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktn/provider-cloudflare.dataCloudflarePipelineSink.DataCloudflarePipelineSinkSchemaFormatOutputReference.property.decimalEncoding">DecimalEncoding</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktn/provider-cloudflare.dataCloudflarePipelineSink.DataCloudflarePipelineSinkSchemaFormatOutputReference.property.rowGroupBytes">RowGroupBytes</a></code> | <code>*f64</code> | *No description.* |
| <code><a href="#@cdktn/provider-cloudflare.dataCloudflarePipelineSink.DataCloudflarePipelineSinkSchemaFormatOutputReference.property.timestampFormat">TimestampFormat</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktn/provider-cloudflare.dataCloudflarePipelineSink.DataCloudflarePipelineSinkSchemaFormatOutputReference.property.type">Type</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktn/provider-cloudflare.dataCloudflarePipelineSink.DataCloudflarePipelineSinkSchemaFormatOutputReference.property.unstructured">Unstructured</a></code> | <code>github.com/open-constructs/cdk-terrain-go/cdktn.IResolvable</code> | *No description.* |
| <code><a href="#@cdktn/provider-cloudflare.dataCloudflarePipelineSink.DataCloudflarePipelineSinkSchemaFormatOutputReference.property.internalValue">InternalValue</a></code> | <code><a href="#@cdktn/provider-cloudflare.dataCloudflarePipelineSink.DataCloudflarePipelineSinkSchemaFormat">DataCloudflarePipelineSinkSchemaFormat</a></code> | *No description.* |

---

##### `CreationStack`<sup>Required</sup> <a name="CreationStack" id="@cdktn/provider-cloudflare.dataCloudflarePipelineSink.DataCloudflarePipelineSinkSchemaFormatOutputReference.property.creationStack"></a>

```go
func CreationStack() *[]*string
```

- *Type:* *[]*string

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `Fqn`<sup>Required</sup> <a name="Fqn" id="@cdktn/provider-cloudflare.dataCloudflarePipelineSink.DataCloudflarePipelineSinkSchemaFormatOutputReference.property.fqn"></a>

```go
func Fqn() *string
```

- *Type:* *string

---

##### `Compression`<sup>Required</sup> <a name="Compression" id="@cdktn/provider-cloudflare.dataCloudflarePipelineSink.DataCloudflarePipelineSinkSchemaFormatOutputReference.property.compression"></a>

```go
func Compression() *string
```

- *Type:* *string

---

##### `DecimalEncoding`<sup>Required</sup> <a name="DecimalEncoding" id="@cdktn/provider-cloudflare.dataCloudflarePipelineSink.DataCloudflarePipelineSinkSchemaFormatOutputReference.property.decimalEncoding"></a>

```go
func DecimalEncoding() *string
```

- *Type:* *string

---

##### `RowGroupBytes`<sup>Required</sup> <a name="RowGroupBytes" id="@cdktn/provider-cloudflare.dataCloudflarePipelineSink.DataCloudflarePipelineSinkSchemaFormatOutputReference.property.rowGroupBytes"></a>

```go
func RowGroupBytes() *f64
```

- *Type:* *f64

---

##### `TimestampFormat`<sup>Required</sup> <a name="TimestampFormat" id="@cdktn/provider-cloudflare.dataCloudflarePipelineSink.DataCloudflarePipelineSinkSchemaFormatOutputReference.property.timestampFormat"></a>

```go
func TimestampFormat() *string
```

- *Type:* *string

---

##### `Type`<sup>Required</sup> <a name="Type" id="@cdktn/provider-cloudflare.dataCloudflarePipelineSink.DataCloudflarePipelineSinkSchemaFormatOutputReference.property.type"></a>

```go
func Type() *string
```

- *Type:* *string

---

##### `Unstructured`<sup>Required</sup> <a name="Unstructured" id="@cdktn/provider-cloudflare.dataCloudflarePipelineSink.DataCloudflarePipelineSinkSchemaFormatOutputReference.property.unstructured"></a>

```go
func Unstructured() IResolvable
```

- *Type:* github.com/open-constructs/cdk-terrain-go/cdktn.IResolvable

---

##### `InternalValue`<sup>Optional</sup> <a name="InternalValue" id="@cdktn/provider-cloudflare.dataCloudflarePipelineSink.DataCloudflarePipelineSinkSchemaFormatOutputReference.property.internalValue"></a>

```go
func InternalValue() DataCloudflarePipelineSinkSchemaFormat
```

- *Type:* <a href="#@cdktn/provider-cloudflare.dataCloudflarePipelineSink.DataCloudflarePipelineSinkSchemaFormat">DataCloudflarePipelineSinkSchemaFormat</a>

---


### DataCloudflarePipelineSinkSchemaOutputReference <a name="DataCloudflarePipelineSinkSchemaOutputReference" id="@cdktn/provider-cloudflare.dataCloudflarePipelineSink.DataCloudflarePipelineSinkSchemaOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktn/provider-cloudflare.dataCloudflarePipelineSink.DataCloudflarePipelineSinkSchemaOutputReference.Initializer"></a>

```go
import "github.com/cdktn-io/cdktn-provider-cloudflare-go/cloudflare/v14/datacloudflarepipelinesink"

datacloudflarepipelinesink.NewDataCloudflarePipelineSinkSchemaOutputReference(terraformResource IInterpolatingParent, terraformAttribute *string) DataCloudflarePipelineSinkSchemaOutputReference
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-cloudflare.dataCloudflarePipelineSink.DataCloudflarePipelineSinkSchemaOutputReference.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>github.com/open-constructs/cdk-terrain-go/cdktn.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktn/provider-cloudflare.dataCloudflarePipelineSink.DataCloudflarePipelineSinkSchemaOutputReference.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>*string</code> | The attribute on the parent resource this class is referencing. |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktn/provider-cloudflare.dataCloudflarePipelineSink.DataCloudflarePipelineSinkSchemaOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* github.com/open-constructs/cdk-terrain-go/cdktn.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-cloudflare.dataCloudflarePipelineSink.DataCloudflarePipelineSinkSchemaOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* *string

The attribute on the parent resource this class is referencing.

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-cloudflare.dataCloudflarePipelineSink.DataCloudflarePipelineSinkSchemaOutputReference.computeFqn">ComputeFqn</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-cloudflare.dataCloudflarePipelineSink.DataCloudflarePipelineSinkSchemaOutputReference.getAnyMapAttribute">GetAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-cloudflare.dataCloudflarePipelineSink.DataCloudflarePipelineSinkSchemaOutputReference.getBooleanAttribute">GetBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-cloudflare.dataCloudflarePipelineSink.DataCloudflarePipelineSinkSchemaOutputReference.getBooleanMapAttribute">GetBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-cloudflare.dataCloudflarePipelineSink.DataCloudflarePipelineSinkSchemaOutputReference.getListAttribute">GetListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-cloudflare.dataCloudflarePipelineSink.DataCloudflarePipelineSinkSchemaOutputReference.getNumberAttribute">GetNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-cloudflare.dataCloudflarePipelineSink.DataCloudflarePipelineSinkSchemaOutputReference.getNumberListAttribute">GetNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-cloudflare.dataCloudflarePipelineSink.DataCloudflarePipelineSinkSchemaOutputReference.getNumberMapAttribute">GetNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-cloudflare.dataCloudflarePipelineSink.DataCloudflarePipelineSinkSchemaOutputReference.getStringAttribute">GetStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-cloudflare.dataCloudflarePipelineSink.DataCloudflarePipelineSinkSchemaOutputReference.getStringMapAttribute">GetStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-cloudflare.dataCloudflarePipelineSink.DataCloudflarePipelineSinkSchemaOutputReference.interpolationForAttribute">InterpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-cloudflare.dataCloudflarePipelineSink.DataCloudflarePipelineSinkSchemaOutputReference.resolve">Resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktn/provider-cloudflare.dataCloudflarePipelineSink.DataCloudflarePipelineSinkSchemaOutputReference.toString">ToString</a></code> | Return a string representation of this resolvable object. |

---

##### `ComputeFqn` <a name="ComputeFqn" id="@cdktn/provider-cloudflare.dataCloudflarePipelineSink.DataCloudflarePipelineSinkSchemaOutputReference.computeFqn"></a>

```go
func ComputeFqn() *string
```

##### `GetAnyMapAttribute` <a name="GetAnyMapAttribute" id="@cdktn/provider-cloudflare.dataCloudflarePipelineSink.DataCloudflarePipelineSinkSchemaOutputReference.getAnyMapAttribute"></a>

```go
func GetAnyMapAttribute(terraformAttribute *string) *map[string]interface{}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-cloudflare.dataCloudflarePipelineSink.DataCloudflarePipelineSinkSchemaOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetBooleanAttribute` <a name="GetBooleanAttribute" id="@cdktn/provider-cloudflare.dataCloudflarePipelineSink.DataCloudflarePipelineSinkSchemaOutputReference.getBooleanAttribute"></a>

```go
func GetBooleanAttribute(terraformAttribute *string) IResolvable
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-cloudflare.dataCloudflarePipelineSink.DataCloudflarePipelineSinkSchemaOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetBooleanMapAttribute` <a name="GetBooleanMapAttribute" id="@cdktn/provider-cloudflare.dataCloudflarePipelineSink.DataCloudflarePipelineSinkSchemaOutputReference.getBooleanMapAttribute"></a>

```go
func GetBooleanMapAttribute(terraformAttribute *string) *map[string]*bool
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-cloudflare.dataCloudflarePipelineSink.DataCloudflarePipelineSinkSchemaOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetListAttribute` <a name="GetListAttribute" id="@cdktn/provider-cloudflare.dataCloudflarePipelineSink.DataCloudflarePipelineSinkSchemaOutputReference.getListAttribute"></a>

```go
func GetListAttribute(terraformAttribute *string) *[]*string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-cloudflare.dataCloudflarePipelineSink.DataCloudflarePipelineSinkSchemaOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberAttribute` <a name="GetNumberAttribute" id="@cdktn/provider-cloudflare.dataCloudflarePipelineSink.DataCloudflarePipelineSinkSchemaOutputReference.getNumberAttribute"></a>

```go
func GetNumberAttribute(terraformAttribute *string) *f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-cloudflare.dataCloudflarePipelineSink.DataCloudflarePipelineSinkSchemaOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberListAttribute` <a name="GetNumberListAttribute" id="@cdktn/provider-cloudflare.dataCloudflarePipelineSink.DataCloudflarePipelineSinkSchemaOutputReference.getNumberListAttribute"></a>

```go
func GetNumberListAttribute(terraformAttribute *string) *[]*f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-cloudflare.dataCloudflarePipelineSink.DataCloudflarePipelineSinkSchemaOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberMapAttribute` <a name="GetNumberMapAttribute" id="@cdktn/provider-cloudflare.dataCloudflarePipelineSink.DataCloudflarePipelineSinkSchemaOutputReference.getNumberMapAttribute"></a>

```go
func GetNumberMapAttribute(terraformAttribute *string) *map[string]*f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-cloudflare.dataCloudflarePipelineSink.DataCloudflarePipelineSinkSchemaOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetStringAttribute` <a name="GetStringAttribute" id="@cdktn/provider-cloudflare.dataCloudflarePipelineSink.DataCloudflarePipelineSinkSchemaOutputReference.getStringAttribute"></a>

```go
func GetStringAttribute(terraformAttribute *string) *string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-cloudflare.dataCloudflarePipelineSink.DataCloudflarePipelineSinkSchemaOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetStringMapAttribute` <a name="GetStringMapAttribute" id="@cdktn/provider-cloudflare.dataCloudflarePipelineSink.DataCloudflarePipelineSinkSchemaOutputReference.getStringMapAttribute"></a>

```go
func GetStringMapAttribute(terraformAttribute *string) *map[string]*string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-cloudflare.dataCloudflarePipelineSink.DataCloudflarePipelineSinkSchemaOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `InterpolationForAttribute` <a name="InterpolationForAttribute" id="@cdktn/provider-cloudflare.dataCloudflarePipelineSink.DataCloudflarePipelineSinkSchemaOutputReference.interpolationForAttribute"></a>

```go
func InterpolationForAttribute(property *string) IResolvable
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktn/provider-cloudflare.dataCloudflarePipelineSink.DataCloudflarePipelineSinkSchemaOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* *string

---

##### `Resolve` <a name="Resolve" id="@cdktn/provider-cloudflare.dataCloudflarePipelineSink.DataCloudflarePipelineSinkSchemaOutputReference.resolve"></a>

```go
func Resolve(_context IResolveContext) interface{}
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktn/provider-cloudflare.dataCloudflarePipelineSink.DataCloudflarePipelineSinkSchemaOutputReference.resolve.parameter._context"></a>

- *Type:* github.com/open-constructs/cdk-terrain-go/cdktn.IResolveContext

---

##### `ToString` <a name="ToString" id="@cdktn/provider-cloudflare.dataCloudflarePipelineSink.DataCloudflarePipelineSinkSchemaOutputReference.toString"></a>

```go
func ToString() *string
```

Return a string representation of this resolvable object.

Returns a reversible string representation.


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-cloudflare.dataCloudflarePipelineSink.DataCloudflarePipelineSinkSchemaOutputReference.property.creationStack">CreationStack</a></code> | <code>*[]*string</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktn/provider-cloudflare.dataCloudflarePipelineSink.DataCloudflarePipelineSinkSchemaOutputReference.property.fqn">Fqn</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktn/provider-cloudflare.dataCloudflarePipelineSink.DataCloudflarePipelineSinkSchemaOutputReference.property.fields">Fields</a></code> | <code><a href="#@cdktn/provider-cloudflare.dataCloudflarePipelineSink.DataCloudflarePipelineSinkSchemaFieldsList">DataCloudflarePipelineSinkSchemaFieldsList</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-cloudflare.dataCloudflarePipelineSink.DataCloudflarePipelineSinkSchemaOutputReference.property.format">Format</a></code> | <code><a href="#@cdktn/provider-cloudflare.dataCloudflarePipelineSink.DataCloudflarePipelineSinkSchemaFormatOutputReference">DataCloudflarePipelineSinkSchemaFormatOutputReference</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-cloudflare.dataCloudflarePipelineSink.DataCloudflarePipelineSinkSchemaOutputReference.property.inferred">Inferred</a></code> | <code>github.com/open-constructs/cdk-terrain-go/cdktn.IResolvable</code> | *No description.* |
| <code><a href="#@cdktn/provider-cloudflare.dataCloudflarePipelineSink.DataCloudflarePipelineSinkSchemaOutputReference.property.internalValue">InternalValue</a></code> | <code><a href="#@cdktn/provider-cloudflare.dataCloudflarePipelineSink.DataCloudflarePipelineSinkSchema">DataCloudflarePipelineSinkSchema</a></code> | *No description.* |

---

##### `CreationStack`<sup>Required</sup> <a name="CreationStack" id="@cdktn/provider-cloudflare.dataCloudflarePipelineSink.DataCloudflarePipelineSinkSchemaOutputReference.property.creationStack"></a>

```go
func CreationStack() *[]*string
```

- *Type:* *[]*string

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `Fqn`<sup>Required</sup> <a name="Fqn" id="@cdktn/provider-cloudflare.dataCloudflarePipelineSink.DataCloudflarePipelineSinkSchemaOutputReference.property.fqn"></a>

```go
func Fqn() *string
```

- *Type:* *string

---

##### `Fields`<sup>Required</sup> <a name="Fields" id="@cdktn/provider-cloudflare.dataCloudflarePipelineSink.DataCloudflarePipelineSinkSchemaOutputReference.property.fields"></a>

```go
func Fields() DataCloudflarePipelineSinkSchemaFieldsList
```

- *Type:* <a href="#@cdktn/provider-cloudflare.dataCloudflarePipelineSink.DataCloudflarePipelineSinkSchemaFieldsList">DataCloudflarePipelineSinkSchemaFieldsList</a>

---

##### `Format`<sup>Required</sup> <a name="Format" id="@cdktn/provider-cloudflare.dataCloudflarePipelineSink.DataCloudflarePipelineSinkSchemaOutputReference.property.format"></a>

```go
func Format() DataCloudflarePipelineSinkSchemaFormatOutputReference
```

- *Type:* <a href="#@cdktn/provider-cloudflare.dataCloudflarePipelineSink.DataCloudflarePipelineSinkSchemaFormatOutputReference">DataCloudflarePipelineSinkSchemaFormatOutputReference</a>

---

##### `Inferred`<sup>Required</sup> <a name="Inferred" id="@cdktn/provider-cloudflare.dataCloudflarePipelineSink.DataCloudflarePipelineSinkSchemaOutputReference.property.inferred"></a>

```go
func Inferred() IResolvable
```

- *Type:* github.com/open-constructs/cdk-terrain-go/cdktn.IResolvable

---

##### `InternalValue`<sup>Optional</sup> <a name="InternalValue" id="@cdktn/provider-cloudflare.dataCloudflarePipelineSink.DataCloudflarePipelineSinkSchemaOutputReference.property.internalValue"></a>

```go
func InternalValue() DataCloudflarePipelineSinkSchema
```

- *Type:* <a href="#@cdktn/provider-cloudflare.dataCloudflarePipelineSink.DataCloudflarePipelineSinkSchema">DataCloudflarePipelineSinkSchema</a>

---



