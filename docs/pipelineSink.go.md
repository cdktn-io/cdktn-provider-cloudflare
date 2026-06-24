# `pipelineSink` Submodule <a name="`pipelineSink` Submodule" id="@cdktn/provider-cloudflare.pipelineSink"></a>

## Constructs <a name="Constructs" id="Constructs"></a>

### PipelineSink <a name="PipelineSink" id="@cdktn/provider-cloudflare.pipelineSink.PipelineSink"></a>

Represents a {@link https://registry.terraform.io/providers/cloudflare/cloudflare/5.21.1/docs/resources/pipeline_sink cloudflare_pipeline_sink}.

#### Initializers <a name="Initializers" id="@cdktn/provider-cloudflare.pipelineSink.PipelineSink.Initializer"></a>

```go
import "github.com/cdktn-io/cdktn-provider-cloudflare-go/cloudflare/v15/pipelinesink"

pipelinesink.NewPipelineSink(scope Construct, id *string, config PipelineSinkConfig) PipelineSink
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-cloudflare.pipelineSink.PipelineSink.Initializer.parameter.scope">scope</a></code> | <code>github.com/aws/constructs-go/constructs/v10.Construct</code> | The scope in which to define this construct. |
| <code><a href="#@cdktn/provider-cloudflare.pipelineSink.PipelineSink.Initializer.parameter.id">id</a></code> | <code>*string</code> | The scoped construct ID. |
| <code><a href="#@cdktn/provider-cloudflare.pipelineSink.PipelineSink.Initializer.parameter.config">config</a></code> | <code><a href="#@cdktn/provider-cloudflare.pipelineSink.PipelineSinkConfig">PipelineSinkConfig</a></code> | *No description.* |

---

##### `scope`<sup>Required</sup> <a name="scope" id="@cdktn/provider-cloudflare.pipelineSink.PipelineSink.Initializer.parameter.scope"></a>

- *Type:* github.com/aws/constructs-go/constructs/v10.Construct

The scope in which to define this construct.

---

##### `id`<sup>Required</sup> <a name="id" id="@cdktn/provider-cloudflare.pipelineSink.PipelineSink.Initializer.parameter.id"></a>

- *Type:* *string

The scoped construct ID.

Must be unique amongst siblings in the same scope

---

##### `config`<sup>Required</sup> <a name="config" id="@cdktn/provider-cloudflare.pipelineSink.PipelineSink.Initializer.parameter.config"></a>

- *Type:* <a href="#@cdktn/provider-cloudflare.pipelineSink.PipelineSinkConfig">PipelineSinkConfig</a>

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-cloudflare.pipelineSink.PipelineSink.toString">ToString</a></code> | Returns a string representation of this construct. |
| <code><a href="#@cdktn/provider-cloudflare.pipelineSink.PipelineSink.with">With</a></code> | Applies one or more mixins to this construct. |
| <code><a href="#@cdktn/provider-cloudflare.pipelineSink.PipelineSink.addOverride">AddOverride</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-cloudflare.pipelineSink.PipelineSink.overrideLogicalId">OverrideLogicalId</a></code> | Overrides the auto-generated logical ID with a specific ID. |
| <code><a href="#@cdktn/provider-cloudflare.pipelineSink.PipelineSink.resetOverrideLogicalId">ResetOverrideLogicalId</a></code> | Resets a previously passed logical Id to use the auto-generated logical id again. |
| <code><a href="#@cdktn/provider-cloudflare.pipelineSink.PipelineSink.toHclTerraform">ToHclTerraform</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-cloudflare.pipelineSink.PipelineSink.toMetadata">ToMetadata</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-cloudflare.pipelineSink.PipelineSink.toTerraform">ToTerraform</a></code> | Adds this resource to the terraform JSON output. |
| <code><a href="#@cdktn/provider-cloudflare.pipelineSink.PipelineSink.addMoveTarget">AddMoveTarget</a></code> | Adds a user defined moveTarget string to this resource to be later used in .moveTo(moveTarget) to resolve the location of the move. |
| <code><a href="#@cdktn/provider-cloudflare.pipelineSink.PipelineSink.getAnyMapAttribute">GetAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-cloudflare.pipelineSink.PipelineSink.getBooleanAttribute">GetBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-cloudflare.pipelineSink.PipelineSink.getBooleanMapAttribute">GetBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-cloudflare.pipelineSink.PipelineSink.getListAttribute">GetListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-cloudflare.pipelineSink.PipelineSink.getNumberAttribute">GetNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-cloudflare.pipelineSink.PipelineSink.getNumberListAttribute">GetNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-cloudflare.pipelineSink.PipelineSink.getNumberMapAttribute">GetNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-cloudflare.pipelineSink.PipelineSink.getStringAttribute">GetStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-cloudflare.pipelineSink.PipelineSink.getStringMapAttribute">GetStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-cloudflare.pipelineSink.PipelineSink.hasResourceMove">HasResourceMove</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-cloudflare.pipelineSink.PipelineSink.importFrom">ImportFrom</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-cloudflare.pipelineSink.PipelineSink.interpolationForAttribute">InterpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-cloudflare.pipelineSink.PipelineSink.moveFromId">MoveFromId</a></code> | Move the resource corresponding to "id" to this resource. |
| <code><a href="#@cdktn/provider-cloudflare.pipelineSink.PipelineSink.moveTo">MoveTo</a></code> | Moves this resource to the target resource given by moveTarget. |
| <code><a href="#@cdktn/provider-cloudflare.pipelineSink.PipelineSink.moveToId">MoveToId</a></code> | Moves this resource to the resource corresponding to "id". |
| <code><a href="#@cdktn/provider-cloudflare.pipelineSink.PipelineSink.putConfig">PutConfig</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-cloudflare.pipelineSink.PipelineSink.putFormat">PutFormat</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-cloudflare.pipelineSink.PipelineSink.putSchema">PutSchema</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-cloudflare.pipelineSink.PipelineSink.resetConfig">ResetConfig</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-cloudflare.pipelineSink.PipelineSink.resetFormat">ResetFormat</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-cloudflare.pipelineSink.PipelineSink.resetSchema">ResetSchema</a></code> | *No description.* |

---

##### `ToString` <a name="ToString" id="@cdktn/provider-cloudflare.pipelineSink.PipelineSink.toString"></a>

```go
func ToString() *string
```

Returns a string representation of this construct.

##### `With` <a name="With" id="@cdktn/provider-cloudflare.pipelineSink.PipelineSink.with"></a>

```go
func With(mixins ...IMixin) IConstruct
```

Applies one or more mixins to this construct.

Mixins are applied in order. The list of constructs is captured at the
start of the call, so constructs added by a mixin will not be visited.
Use multiple `with()` calls if subsequent mixins should apply to added
constructs.

###### `mixins`<sup>Required</sup> <a name="mixins" id="@cdktn/provider-cloudflare.pipelineSink.PipelineSink.with.parameter.mixins"></a>

- *Type:* ...github.com/aws/constructs-go/constructs/v10.IMixin

The mixins to apply.

---

##### `AddOverride` <a name="AddOverride" id="@cdktn/provider-cloudflare.pipelineSink.PipelineSink.addOverride"></a>

```go
func AddOverride(path *string, value interface{})
```

###### `path`<sup>Required</sup> <a name="path" id="@cdktn/provider-cloudflare.pipelineSink.PipelineSink.addOverride.parameter.path"></a>

- *Type:* *string

---

###### `value`<sup>Required</sup> <a name="value" id="@cdktn/provider-cloudflare.pipelineSink.PipelineSink.addOverride.parameter.value"></a>

- *Type:* interface{}

---

##### `OverrideLogicalId` <a name="OverrideLogicalId" id="@cdktn/provider-cloudflare.pipelineSink.PipelineSink.overrideLogicalId"></a>

```go
func OverrideLogicalId(newLogicalId *string)
```

Overrides the auto-generated logical ID with a specific ID.

###### `newLogicalId`<sup>Required</sup> <a name="newLogicalId" id="@cdktn/provider-cloudflare.pipelineSink.PipelineSink.overrideLogicalId.parameter.newLogicalId"></a>

- *Type:* *string

The new logical ID to use for this stack element.

---

##### `ResetOverrideLogicalId` <a name="ResetOverrideLogicalId" id="@cdktn/provider-cloudflare.pipelineSink.PipelineSink.resetOverrideLogicalId"></a>

```go
func ResetOverrideLogicalId()
```

Resets a previously passed logical Id to use the auto-generated logical id again.

##### `ToHclTerraform` <a name="ToHclTerraform" id="@cdktn/provider-cloudflare.pipelineSink.PipelineSink.toHclTerraform"></a>

```go
func ToHclTerraform() interface{}
```

##### `ToMetadata` <a name="ToMetadata" id="@cdktn/provider-cloudflare.pipelineSink.PipelineSink.toMetadata"></a>

```go
func ToMetadata() interface{}
```

##### `ToTerraform` <a name="ToTerraform" id="@cdktn/provider-cloudflare.pipelineSink.PipelineSink.toTerraform"></a>

```go
func ToTerraform() interface{}
```

Adds this resource to the terraform JSON output.

##### `AddMoveTarget` <a name="AddMoveTarget" id="@cdktn/provider-cloudflare.pipelineSink.PipelineSink.addMoveTarget"></a>

```go
func AddMoveTarget(moveTarget *string)
```

Adds a user defined moveTarget string to this resource to be later used in .moveTo(moveTarget) to resolve the location of the move.

###### `moveTarget`<sup>Required</sup> <a name="moveTarget" id="@cdktn/provider-cloudflare.pipelineSink.PipelineSink.addMoveTarget.parameter.moveTarget"></a>

- *Type:* *string

The string move target that will correspond to this resource.

---

##### `GetAnyMapAttribute` <a name="GetAnyMapAttribute" id="@cdktn/provider-cloudflare.pipelineSink.PipelineSink.getAnyMapAttribute"></a>

```go
func GetAnyMapAttribute(terraformAttribute *string) *map[string]interface{}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-cloudflare.pipelineSink.PipelineSink.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetBooleanAttribute` <a name="GetBooleanAttribute" id="@cdktn/provider-cloudflare.pipelineSink.PipelineSink.getBooleanAttribute"></a>

```go
func GetBooleanAttribute(terraformAttribute *string) IResolvable
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-cloudflare.pipelineSink.PipelineSink.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetBooleanMapAttribute` <a name="GetBooleanMapAttribute" id="@cdktn/provider-cloudflare.pipelineSink.PipelineSink.getBooleanMapAttribute"></a>

```go
func GetBooleanMapAttribute(terraformAttribute *string) *map[string]*bool
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-cloudflare.pipelineSink.PipelineSink.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetListAttribute` <a name="GetListAttribute" id="@cdktn/provider-cloudflare.pipelineSink.PipelineSink.getListAttribute"></a>

```go
func GetListAttribute(terraformAttribute *string) *[]*string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-cloudflare.pipelineSink.PipelineSink.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberAttribute` <a name="GetNumberAttribute" id="@cdktn/provider-cloudflare.pipelineSink.PipelineSink.getNumberAttribute"></a>

```go
func GetNumberAttribute(terraformAttribute *string) *f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-cloudflare.pipelineSink.PipelineSink.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberListAttribute` <a name="GetNumberListAttribute" id="@cdktn/provider-cloudflare.pipelineSink.PipelineSink.getNumberListAttribute"></a>

```go
func GetNumberListAttribute(terraformAttribute *string) *[]*f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-cloudflare.pipelineSink.PipelineSink.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberMapAttribute` <a name="GetNumberMapAttribute" id="@cdktn/provider-cloudflare.pipelineSink.PipelineSink.getNumberMapAttribute"></a>

```go
func GetNumberMapAttribute(terraformAttribute *string) *map[string]*f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-cloudflare.pipelineSink.PipelineSink.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetStringAttribute` <a name="GetStringAttribute" id="@cdktn/provider-cloudflare.pipelineSink.PipelineSink.getStringAttribute"></a>

```go
func GetStringAttribute(terraformAttribute *string) *string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-cloudflare.pipelineSink.PipelineSink.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetStringMapAttribute` <a name="GetStringMapAttribute" id="@cdktn/provider-cloudflare.pipelineSink.PipelineSink.getStringMapAttribute"></a>

```go
func GetStringMapAttribute(terraformAttribute *string) *map[string]*string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-cloudflare.pipelineSink.PipelineSink.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `HasResourceMove` <a name="HasResourceMove" id="@cdktn/provider-cloudflare.pipelineSink.PipelineSink.hasResourceMove"></a>

```go
func HasResourceMove() interface{}
```

##### `ImportFrom` <a name="ImportFrom" id="@cdktn/provider-cloudflare.pipelineSink.PipelineSink.importFrom"></a>

```go
func ImportFrom(id *string, provider TerraformProvider)
```

###### `id`<sup>Required</sup> <a name="id" id="@cdktn/provider-cloudflare.pipelineSink.PipelineSink.importFrom.parameter.id"></a>

- *Type:* *string

---

###### `provider`<sup>Optional</sup> <a name="provider" id="@cdktn/provider-cloudflare.pipelineSink.PipelineSink.importFrom.parameter.provider"></a>

- *Type:* github.com/open-constructs/cdk-terrain-go/cdktn.TerraformProvider

---

##### `InterpolationForAttribute` <a name="InterpolationForAttribute" id="@cdktn/provider-cloudflare.pipelineSink.PipelineSink.interpolationForAttribute"></a>

```go
func InterpolationForAttribute(terraformAttribute *string) IResolvable
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-cloudflare.pipelineSink.PipelineSink.interpolationForAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `MoveFromId` <a name="MoveFromId" id="@cdktn/provider-cloudflare.pipelineSink.PipelineSink.moveFromId"></a>

```go
func MoveFromId(id *string)
```

Move the resource corresponding to "id" to this resource.

Note that the resource being moved from must be marked as moved using it's instance function.

###### `id`<sup>Required</sup> <a name="id" id="@cdktn/provider-cloudflare.pipelineSink.PipelineSink.moveFromId.parameter.id"></a>

- *Type:* *string

Full id of resource being moved from, e.g. "aws_s3_bucket.example".

---

##### `MoveTo` <a name="MoveTo" id="@cdktn/provider-cloudflare.pipelineSink.PipelineSink.moveTo"></a>

```go
func MoveTo(moveTarget *string, index interface{})
```

Moves this resource to the target resource given by moveTarget.

###### `moveTarget`<sup>Required</sup> <a name="moveTarget" id="@cdktn/provider-cloudflare.pipelineSink.PipelineSink.moveTo.parameter.moveTarget"></a>

- *Type:* *string

The previously set user defined string set by .addMoveTarget() corresponding to the resource to move to.

---

###### `index`<sup>Optional</sup> <a name="index" id="@cdktn/provider-cloudflare.pipelineSink.PipelineSink.moveTo.parameter.index"></a>

- *Type:* interface{}

Optional The index corresponding to the key the resource is to appear in the foreach of a resource to move to.

---

##### `MoveToId` <a name="MoveToId" id="@cdktn/provider-cloudflare.pipelineSink.PipelineSink.moveToId"></a>

```go
func MoveToId(id *string)
```

Moves this resource to the resource corresponding to "id".

###### `id`<sup>Required</sup> <a name="id" id="@cdktn/provider-cloudflare.pipelineSink.PipelineSink.moveToId.parameter.id"></a>

- *Type:* *string

Full id of resource to move to, e.g. "aws_s3_bucket.example".

---

##### `PutConfig` <a name="PutConfig" id="@cdktn/provider-cloudflare.pipelineSink.PipelineSink.putConfig"></a>

```go
func PutConfig(value PipelineSinkConfigA)
```

###### `value`<sup>Required</sup> <a name="value" id="@cdktn/provider-cloudflare.pipelineSink.PipelineSink.putConfig.parameter.value"></a>

- *Type:* <a href="#@cdktn/provider-cloudflare.pipelineSink.PipelineSinkConfigA">PipelineSinkConfigA</a>

---

##### `PutFormat` <a name="PutFormat" id="@cdktn/provider-cloudflare.pipelineSink.PipelineSink.putFormat"></a>

```go
func PutFormat(value PipelineSinkFormat)
```

###### `value`<sup>Required</sup> <a name="value" id="@cdktn/provider-cloudflare.pipelineSink.PipelineSink.putFormat.parameter.value"></a>

- *Type:* <a href="#@cdktn/provider-cloudflare.pipelineSink.PipelineSinkFormat">PipelineSinkFormat</a>

---

##### `PutSchema` <a name="PutSchema" id="@cdktn/provider-cloudflare.pipelineSink.PipelineSink.putSchema"></a>

```go
func PutSchema(value PipelineSinkSchema)
```

###### `value`<sup>Required</sup> <a name="value" id="@cdktn/provider-cloudflare.pipelineSink.PipelineSink.putSchema.parameter.value"></a>

- *Type:* <a href="#@cdktn/provider-cloudflare.pipelineSink.PipelineSinkSchema">PipelineSinkSchema</a>

---

##### `ResetConfig` <a name="ResetConfig" id="@cdktn/provider-cloudflare.pipelineSink.PipelineSink.resetConfig"></a>

```go
func ResetConfig()
```

##### `ResetFormat` <a name="ResetFormat" id="@cdktn/provider-cloudflare.pipelineSink.PipelineSink.resetFormat"></a>

```go
func ResetFormat()
```

##### `ResetSchema` <a name="ResetSchema" id="@cdktn/provider-cloudflare.pipelineSink.PipelineSink.resetSchema"></a>

```go
func ResetSchema()
```

#### Static Functions <a name="Static Functions" id="Static Functions"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-cloudflare.pipelineSink.PipelineSink.isConstruct">IsConstruct</a></code> | Checks if `x` is a construct. |
| <code><a href="#@cdktn/provider-cloudflare.pipelineSink.PipelineSink.isTerraformElement">IsTerraformElement</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-cloudflare.pipelineSink.PipelineSink.isTerraformResource">IsTerraformResource</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-cloudflare.pipelineSink.PipelineSink.generateConfigForImport">GenerateConfigForImport</a></code> | Generates CDKTN code for importing a PipelineSink resource upon running "cdktn plan <stack-name>". |

---

##### `IsConstruct` <a name="IsConstruct" id="@cdktn/provider-cloudflare.pipelineSink.PipelineSink.isConstruct"></a>

```go
import "github.com/cdktn-io/cdktn-provider-cloudflare-go/cloudflare/v15/pipelinesink"

pipelinesink.PipelineSink_IsConstruct(x interface{}) *bool
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

###### `x`<sup>Required</sup> <a name="x" id="@cdktn/provider-cloudflare.pipelineSink.PipelineSink.isConstruct.parameter.x"></a>

- *Type:* interface{}

Any object.

---

##### `IsTerraformElement` <a name="IsTerraformElement" id="@cdktn/provider-cloudflare.pipelineSink.PipelineSink.isTerraformElement"></a>

```go
import "github.com/cdktn-io/cdktn-provider-cloudflare-go/cloudflare/v15/pipelinesink"

pipelinesink.PipelineSink_IsTerraformElement(x interface{}) *bool
```

###### `x`<sup>Required</sup> <a name="x" id="@cdktn/provider-cloudflare.pipelineSink.PipelineSink.isTerraformElement.parameter.x"></a>

- *Type:* interface{}

---

##### `IsTerraformResource` <a name="IsTerraformResource" id="@cdktn/provider-cloudflare.pipelineSink.PipelineSink.isTerraformResource"></a>

```go
import "github.com/cdktn-io/cdktn-provider-cloudflare-go/cloudflare/v15/pipelinesink"

pipelinesink.PipelineSink_IsTerraformResource(x interface{}) *bool
```

###### `x`<sup>Required</sup> <a name="x" id="@cdktn/provider-cloudflare.pipelineSink.PipelineSink.isTerraformResource.parameter.x"></a>

- *Type:* interface{}

---

##### `GenerateConfigForImport` <a name="GenerateConfigForImport" id="@cdktn/provider-cloudflare.pipelineSink.PipelineSink.generateConfigForImport"></a>

```go
import "github.com/cdktn-io/cdktn-provider-cloudflare-go/cloudflare/v15/pipelinesink"

pipelinesink.PipelineSink_GenerateConfigForImport(scope Construct, importToId *string, importFromId *string, provider TerraformProvider) ImportableResource
```

Generates CDKTN code for importing a PipelineSink resource upon running "cdktn plan <stack-name>".

###### `scope`<sup>Required</sup> <a name="scope" id="@cdktn/provider-cloudflare.pipelineSink.PipelineSink.generateConfigForImport.parameter.scope"></a>

- *Type:* github.com/aws/constructs-go/constructs/v10.Construct

The scope in which to define this construct.

---

###### `importToId`<sup>Required</sup> <a name="importToId" id="@cdktn/provider-cloudflare.pipelineSink.PipelineSink.generateConfigForImport.parameter.importToId"></a>

- *Type:* *string

The construct id used in the generated config for the PipelineSink to import.

---

###### `importFromId`<sup>Required</sup> <a name="importFromId" id="@cdktn/provider-cloudflare.pipelineSink.PipelineSink.generateConfigForImport.parameter.importFromId"></a>

- *Type:* *string

The id of the existing PipelineSink that should be imported.

Refer to the {@link https://registry.terraform.io/providers/cloudflare/cloudflare/5.21.1/docs/resources/pipeline_sink#import import section} in the documentation of this resource for the id to use

---

###### `provider`<sup>Optional</sup> <a name="provider" id="@cdktn/provider-cloudflare.pipelineSink.PipelineSink.generateConfigForImport.parameter.provider"></a>

- *Type:* github.com/open-constructs/cdk-terrain-go/cdktn.TerraformProvider

? Optional instance of the provider where the PipelineSink to import is found.

---

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-cloudflare.pipelineSink.PipelineSink.property.node">Node</a></code> | <code>github.com/aws/constructs-go/constructs/v10.Node</code> | The tree node. |
| <code><a href="#@cdktn/provider-cloudflare.pipelineSink.PipelineSink.property.cdktfStack">CdktfStack</a></code> | <code>github.com/open-constructs/cdk-terrain-go/cdktn.TerraformStack</code> | *No description.* |
| <code><a href="#@cdktn/provider-cloudflare.pipelineSink.PipelineSink.property.fqn">Fqn</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktn/provider-cloudflare.pipelineSink.PipelineSink.property.friendlyUniqueId">FriendlyUniqueId</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktn/provider-cloudflare.pipelineSink.PipelineSink.property.terraformMetaArguments">TerraformMetaArguments</a></code> | <code>*map[string]interface{}</code> | *No description.* |
| <code><a href="#@cdktn/provider-cloudflare.pipelineSink.PipelineSink.property.terraformResourceType">TerraformResourceType</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktn/provider-cloudflare.pipelineSink.PipelineSink.property.terraformGeneratorMetadata">TerraformGeneratorMetadata</a></code> | <code>github.com/open-constructs/cdk-terrain-go/cdktn.TerraformProviderGeneratorMetadata</code> | *No description.* |
| <code><a href="#@cdktn/provider-cloudflare.pipelineSink.PipelineSink.property.connection">Connection</a></code> | <code>interface{}</code> | *No description.* |
| <code><a href="#@cdktn/provider-cloudflare.pipelineSink.PipelineSink.property.count">Count</a></code> | <code>interface{}</code> | *No description.* |
| <code><a href="#@cdktn/provider-cloudflare.pipelineSink.PipelineSink.property.dependsOn">DependsOn</a></code> | <code>*[]*string</code> | *No description.* |
| <code><a href="#@cdktn/provider-cloudflare.pipelineSink.PipelineSink.property.forEach">ForEach</a></code> | <code>github.com/open-constructs/cdk-terrain-go/cdktn.ITerraformIterator</code> | *No description.* |
| <code><a href="#@cdktn/provider-cloudflare.pipelineSink.PipelineSink.property.lifecycle">Lifecycle</a></code> | <code>github.com/open-constructs/cdk-terrain-go/cdktn.TerraformResourceLifecycle</code> | *No description.* |
| <code><a href="#@cdktn/provider-cloudflare.pipelineSink.PipelineSink.property.provider">Provider</a></code> | <code>github.com/open-constructs/cdk-terrain-go/cdktn.TerraformProvider</code> | *No description.* |
| <code><a href="#@cdktn/provider-cloudflare.pipelineSink.PipelineSink.property.provisioners">Provisioners</a></code> | <code>*[]interface{}</code> | *No description.* |
| <code><a href="#@cdktn/provider-cloudflare.pipelineSink.PipelineSink.property.config">Config</a></code> | <code><a href="#@cdktn/provider-cloudflare.pipelineSink.PipelineSinkConfigAOutputReference">PipelineSinkConfigAOutputReference</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-cloudflare.pipelineSink.PipelineSink.property.createdAt">CreatedAt</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktn/provider-cloudflare.pipelineSink.PipelineSink.property.format">Format</a></code> | <code><a href="#@cdktn/provider-cloudflare.pipelineSink.PipelineSinkFormatOutputReference">PipelineSinkFormatOutputReference</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-cloudflare.pipelineSink.PipelineSink.property.id">Id</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktn/provider-cloudflare.pipelineSink.PipelineSink.property.modifiedAt">ModifiedAt</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktn/provider-cloudflare.pipelineSink.PipelineSink.property.schema">Schema</a></code> | <code><a href="#@cdktn/provider-cloudflare.pipelineSink.PipelineSinkSchemaOutputReference">PipelineSinkSchemaOutputReference</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-cloudflare.pipelineSink.PipelineSink.property.accountIdInput">AccountIdInput</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktn/provider-cloudflare.pipelineSink.PipelineSink.property.configInput">ConfigInput</a></code> | <code>interface{}</code> | *No description.* |
| <code><a href="#@cdktn/provider-cloudflare.pipelineSink.PipelineSink.property.formatInput">FormatInput</a></code> | <code>interface{}</code> | *No description.* |
| <code><a href="#@cdktn/provider-cloudflare.pipelineSink.PipelineSink.property.nameInput">NameInput</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktn/provider-cloudflare.pipelineSink.PipelineSink.property.schemaInput">SchemaInput</a></code> | <code>interface{}</code> | *No description.* |
| <code><a href="#@cdktn/provider-cloudflare.pipelineSink.PipelineSink.property.typeInput">TypeInput</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktn/provider-cloudflare.pipelineSink.PipelineSink.property.accountId">AccountId</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktn/provider-cloudflare.pipelineSink.PipelineSink.property.name">Name</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktn/provider-cloudflare.pipelineSink.PipelineSink.property.type">Type</a></code> | <code>*string</code> | *No description.* |

---

##### `Node`<sup>Required</sup> <a name="Node" id="@cdktn/provider-cloudflare.pipelineSink.PipelineSink.property.node"></a>

```go
func Node() Node
```

- *Type:* github.com/aws/constructs-go/constructs/v10.Node

The tree node.

---

##### `CdktfStack`<sup>Required</sup> <a name="CdktfStack" id="@cdktn/provider-cloudflare.pipelineSink.PipelineSink.property.cdktfStack"></a>

```go
func CdktfStack() TerraformStack
```

- *Type:* github.com/open-constructs/cdk-terrain-go/cdktn.TerraformStack

---

##### `Fqn`<sup>Required</sup> <a name="Fqn" id="@cdktn/provider-cloudflare.pipelineSink.PipelineSink.property.fqn"></a>

```go
func Fqn() *string
```

- *Type:* *string

---

##### `FriendlyUniqueId`<sup>Required</sup> <a name="FriendlyUniqueId" id="@cdktn/provider-cloudflare.pipelineSink.PipelineSink.property.friendlyUniqueId"></a>

```go
func FriendlyUniqueId() *string
```

- *Type:* *string

---

##### `TerraformMetaArguments`<sup>Required</sup> <a name="TerraformMetaArguments" id="@cdktn/provider-cloudflare.pipelineSink.PipelineSink.property.terraformMetaArguments"></a>

```go
func TerraformMetaArguments() *map[string]interface{}
```

- *Type:* *map[string]interface{}

---

##### `TerraformResourceType`<sup>Required</sup> <a name="TerraformResourceType" id="@cdktn/provider-cloudflare.pipelineSink.PipelineSink.property.terraformResourceType"></a>

```go
func TerraformResourceType() *string
```

- *Type:* *string

---

##### `TerraformGeneratorMetadata`<sup>Optional</sup> <a name="TerraformGeneratorMetadata" id="@cdktn/provider-cloudflare.pipelineSink.PipelineSink.property.terraformGeneratorMetadata"></a>

```go
func TerraformGeneratorMetadata() TerraformProviderGeneratorMetadata
```

- *Type:* github.com/open-constructs/cdk-terrain-go/cdktn.TerraformProviderGeneratorMetadata

---

##### `Connection`<sup>Optional</sup> <a name="Connection" id="@cdktn/provider-cloudflare.pipelineSink.PipelineSink.property.connection"></a>

```go
func Connection() interface{}
```

- *Type:* interface{}

---

##### `Count`<sup>Optional</sup> <a name="Count" id="@cdktn/provider-cloudflare.pipelineSink.PipelineSink.property.count"></a>

```go
func Count() interface{}
```

- *Type:* interface{}

---

##### `DependsOn`<sup>Optional</sup> <a name="DependsOn" id="@cdktn/provider-cloudflare.pipelineSink.PipelineSink.property.dependsOn"></a>

```go
func DependsOn() *[]*string
```

- *Type:* *[]*string

---

##### `ForEach`<sup>Optional</sup> <a name="ForEach" id="@cdktn/provider-cloudflare.pipelineSink.PipelineSink.property.forEach"></a>

```go
func ForEach() ITerraformIterator
```

- *Type:* github.com/open-constructs/cdk-terrain-go/cdktn.ITerraformIterator

---

##### `Lifecycle`<sup>Optional</sup> <a name="Lifecycle" id="@cdktn/provider-cloudflare.pipelineSink.PipelineSink.property.lifecycle"></a>

```go
func Lifecycle() TerraformResourceLifecycle
```

- *Type:* github.com/open-constructs/cdk-terrain-go/cdktn.TerraformResourceLifecycle

---

##### `Provider`<sup>Optional</sup> <a name="Provider" id="@cdktn/provider-cloudflare.pipelineSink.PipelineSink.property.provider"></a>

```go
func Provider() TerraformProvider
```

- *Type:* github.com/open-constructs/cdk-terrain-go/cdktn.TerraformProvider

---

##### `Provisioners`<sup>Optional</sup> <a name="Provisioners" id="@cdktn/provider-cloudflare.pipelineSink.PipelineSink.property.provisioners"></a>

```go
func Provisioners() *[]interface{}
```

- *Type:* *[]interface{}

---

##### `Config`<sup>Required</sup> <a name="Config" id="@cdktn/provider-cloudflare.pipelineSink.PipelineSink.property.config"></a>

```go
func Config() PipelineSinkConfigAOutputReference
```

- *Type:* <a href="#@cdktn/provider-cloudflare.pipelineSink.PipelineSinkConfigAOutputReference">PipelineSinkConfigAOutputReference</a>

---

##### `CreatedAt`<sup>Required</sup> <a name="CreatedAt" id="@cdktn/provider-cloudflare.pipelineSink.PipelineSink.property.createdAt"></a>

```go
func CreatedAt() *string
```

- *Type:* *string

---

##### `Format`<sup>Required</sup> <a name="Format" id="@cdktn/provider-cloudflare.pipelineSink.PipelineSink.property.format"></a>

```go
func Format() PipelineSinkFormatOutputReference
```

- *Type:* <a href="#@cdktn/provider-cloudflare.pipelineSink.PipelineSinkFormatOutputReference">PipelineSinkFormatOutputReference</a>

---

##### `Id`<sup>Required</sup> <a name="Id" id="@cdktn/provider-cloudflare.pipelineSink.PipelineSink.property.id"></a>

```go
func Id() *string
```

- *Type:* *string

---

##### `ModifiedAt`<sup>Required</sup> <a name="ModifiedAt" id="@cdktn/provider-cloudflare.pipelineSink.PipelineSink.property.modifiedAt"></a>

```go
func ModifiedAt() *string
```

- *Type:* *string

---

##### `Schema`<sup>Required</sup> <a name="Schema" id="@cdktn/provider-cloudflare.pipelineSink.PipelineSink.property.schema"></a>

```go
func Schema() PipelineSinkSchemaOutputReference
```

- *Type:* <a href="#@cdktn/provider-cloudflare.pipelineSink.PipelineSinkSchemaOutputReference">PipelineSinkSchemaOutputReference</a>

---

##### `AccountIdInput`<sup>Optional</sup> <a name="AccountIdInput" id="@cdktn/provider-cloudflare.pipelineSink.PipelineSink.property.accountIdInput"></a>

```go
func AccountIdInput() *string
```

- *Type:* *string

---

##### `ConfigInput`<sup>Optional</sup> <a name="ConfigInput" id="@cdktn/provider-cloudflare.pipelineSink.PipelineSink.property.configInput"></a>

```go
func ConfigInput() interface{}
```

- *Type:* interface{}

---

##### `FormatInput`<sup>Optional</sup> <a name="FormatInput" id="@cdktn/provider-cloudflare.pipelineSink.PipelineSink.property.formatInput"></a>

```go
func FormatInput() interface{}
```

- *Type:* interface{}

---

##### `NameInput`<sup>Optional</sup> <a name="NameInput" id="@cdktn/provider-cloudflare.pipelineSink.PipelineSink.property.nameInput"></a>

```go
func NameInput() *string
```

- *Type:* *string

---

##### `SchemaInput`<sup>Optional</sup> <a name="SchemaInput" id="@cdktn/provider-cloudflare.pipelineSink.PipelineSink.property.schemaInput"></a>

```go
func SchemaInput() interface{}
```

- *Type:* interface{}

---

##### `TypeInput`<sup>Optional</sup> <a name="TypeInput" id="@cdktn/provider-cloudflare.pipelineSink.PipelineSink.property.typeInput"></a>

```go
func TypeInput() *string
```

- *Type:* *string

---

##### `AccountId`<sup>Required</sup> <a name="AccountId" id="@cdktn/provider-cloudflare.pipelineSink.PipelineSink.property.accountId"></a>

```go
func AccountId() *string
```

- *Type:* *string

---

##### `Name`<sup>Required</sup> <a name="Name" id="@cdktn/provider-cloudflare.pipelineSink.PipelineSink.property.name"></a>

```go
func Name() *string
```

- *Type:* *string

---

##### `Type`<sup>Required</sup> <a name="Type" id="@cdktn/provider-cloudflare.pipelineSink.PipelineSink.property.type"></a>

```go
func Type() *string
```

- *Type:* *string

---

#### Constants <a name="Constants" id="Constants"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-cloudflare.pipelineSink.PipelineSink.property.tfResourceType">TfResourceType</a></code> | <code>*string</code> | *No description.* |

---

##### `TfResourceType`<sup>Required</sup> <a name="TfResourceType" id="@cdktn/provider-cloudflare.pipelineSink.PipelineSink.property.tfResourceType"></a>

```go
func TfResourceType() *string
```

- *Type:* *string

---

## Structs <a name="Structs" id="Structs"></a>

### PipelineSinkConfig <a name="PipelineSinkConfig" id="@cdktn/provider-cloudflare.pipelineSink.PipelineSinkConfig"></a>

#### Initializer <a name="Initializer" id="@cdktn/provider-cloudflare.pipelineSink.PipelineSinkConfig.Initializer"></a>

```go
import "github.com/cdktn-io/cdktn-provider-cloudflare-go/cloudflare/v15/pipelinesink"

&pipelinesink.PipelineSinkConfig {
	Connection: interface{},
	Count: interface{},
	DependsOn: *[]github.com/open-constructs/cdk-terrain-go/cdktn.ITerraformDependable,
	ForEach: github.com/open-constructs/cdk-terrain-go/cdktn.ITerraformIterator,
	Lifecycle: github.com/open-constructs/cdk-terrain-go/cdktn.TerraformResourceLifecycle,
	Provider: github.com/open-constructs/cdk-terrain-go/cdktn.TerraformProvider,
	Provisioners: *[]interface{},
	AccountId: *string,
	Name: *string,
	Type: *string,
	Config: github.com/cdktn-io/cdktn-provider-cloudflare-go/cloudflare/v15.pipelineSink.PipelineSinkConfigA,
	Format: github.com/cdktn-io/cdktn-provider-cloudflare-go/cloudflare/v15.pipelineSink.PipelineSinkFormat,
	Schema: github.com/cdktn-io/cdktn-provider-cloudflare-go/cloudflare/v15.pipelineSink.PipelineSinkSchema,
}
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-cloudflare.pipelineSink.PipelineSinkConfig.property.connection">Connection</a></code> | <code>interface{}</code> | *No description.* |
| <code><a href="#@cdktn/provider-cloudflare.pipelineSink.PipelineSinkConfig.property.count">Count</a></code> | <code>interface{}</code> | *No description.* |
| <code><a href="#@cdktn/provider-cloudflare.pipelineSink.PipelineSinkConfig.property.dependsOn">DependsOn</a></code> | <code>*[]github.com/open-constructs/cdk-terrain-go/cdktn.ITerraformDependable</code> | *No description.* |
| <code><a href="#@cdktn/provider-cloudflare.pipelineSink.PipelineSinkConfig.property.forEach">ForEach</a></code> | <code>github.com/open-constructs/cdk-terrain-go/cdktn.ITerraformIterator</code> | *No description.* |
| <code><a href="#@cdktn/provider-cloudflare.pipelineSink.PipelineSinkConfig.property.lifecycle">Lifecycle</a></code> | <code>github.com/open-constructs/cdk-terrain-go/cdktn.TerraformResourceLifecycle</code> | *No description.* |
| <code><a href="#@cdktn/provider-cloudflare.pipelineSink.PipelineSinkConfig.property.provider">Provider</a></code> | <code>github.com/open-constructs/cdk-terrain-go/cdktn.TerraformProvider</code> | *No description.* |
| <code><a href="#@cdktn/provider-cloudflare.pipelineSink.PipelineSinkConfig.property.provisioners">Provisioners</a></code> | <code>*[]interface{}</code> | *No description.* |
| <code><a href="#@cdktn/provider-cloudflare.pipelineSink.PipelineSinkConfig.property.accountId">AccountId</a></code> | <code>*string</code> | Specifies the public ID of the account. |
| <code><a href="#@cdktn/provider-cloudflare.pipelineSink.PipelineSinkConfig.property.name">Name</a></code> | <code>*string</code> | Defines the name of the Sink. |
| <code><a href="#@cdktn/provider-cloudflare.pipelineSink.PipelineSinkConfig.property.type">Type</a></code> | <code>*string</code> | Specifies the type of sink. Available values: "r2", "r2_data_catalog". |
| <code><a href="#@cdktn/provider-cloudflare.pipelineSink.PipelineSinkConfig.property.config">Config</a></code> | <code><a href="#@cdktn/provider-cloudflare.pipelineSink.PipelineSinkConfigA">PipelineSinkConfigA</a></code> | Defines the configuration of the R2 Sink. |
| <code><a href="#@cdktn/provider-cloudflare.pipelineSink.PipelineSinkConfig.property.format">Format</a></code> | <code><a href="#@cdktn/provider-cloudflare.pipelineSink.PipelineSinkFormat">PipelineSinkFormat</a></code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/cloudflare/cloudflare/5.21.1/docs/resources/pipeline_sink#format PipelineSink#format}. |
| <code><a href="#@cdktn/provider-cloudflare.pipelineSink.PipelineSinkConfig.property.schema">Schema</a></code> | <code><a href="#@cdktn/provider-cloudflare.pipelineSink.PipelineSinkSchema">PipelineSinkSchema</a></code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/cloudflare/cloudflare/5.21.1/docs/resources/pipeline_sink#schema PipelineSink#schema}. |

---

##### `Connection`<sup>Optional</sup> <a name="Connection" id="@cdktn/provider-cloudflare.pipelineSink.PipelineSinkConfig.property.connection"></a>

```go
Connection interface{}
```

- *Type:* interface{}

---

##### `Count`<sup>Optional</sup> <a name="Count" id="@cdktn/provider-cloudflare.pipelineSink.PipelineSinkConfig.property.count"></a>

```go
Count interface{}
```

- *Type:* interface{}

---

##### `DependsOn`<sup>Optional</sup> <a name="DependsOn" id="@cdktn/provider-cloudflare.pipelineSink.PipelineSinkConfig.property.dependsOn"></a>

```go
DependsOn *[]ITerraformDependable
```

- *Type:* *[]github.com/open-constructs/cdk-terrain-go/cdktn.ITerraformDependable

---

##### `ForEach`<sup>Optional</sup> <a name="ForEach" id="@cdktn/provider-cloudflare.pipelineSink.PipelineSinkConfig.property.forEach"></a>

```go
ForEach ITerraformIterator
```

- *Type:* github.com/open-constructs/cdk-terrain-go/cdktn.ITerraformIterator

---

##### `Lifecycle`<sup>Optional</sup> <a name="Lifecycle" id="@cdktn/provider-cloudflare.pipelineSink.PipelineSinkConfig.property.lifecycle"></a>

```go
Lifecycle TerraformResourceLifecycle
```

- *Type:* github.com/open-constructs/cdk-terrain-go/cdktn.TerraformResourceLifecycle

---

##### `Provider`<sup>Optional</sup> <a name="Provider" id="@cdktn/provider-cloudflare.pipelineSink.PipelineSinkConfig.property.provider"></a>

```go
Provider TerraformProvider
```

- *Type:* github.com/open-constructs/cdk-terrain-go/cdktn.TerraformProvider

---

##### `Provisioners`<sup>Optional</sup> <a name="Provisioners" id="@cdktn/provider-cloudflare.pipelineSink.PipelineSinkConfig.property.provisioners"></a>

```go
Provisioners *[]interface{}
```

- *Type:* *[]interface{}

---

##### `AccountId`<sup>Required</sup> <a name="AccountId" id="@cdktn/provider-cloudflare.pipelineSink.PipelineSinkConfig.property.accountId"></a>

```go
AccountId *string
```

- *Type:* *string

Specifies the public ID of the account.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/cloudflare/cloudflare/5.21.1/docs/resources/pipeline_sink#account_id PipelineSink#account_id}

---

##### `Name`<sup>Required</sup> <a name="Name" id="@cdktn/provider-cloudflare.pipelineSink.PipelineSinkConfig.property.name"></a>

```go
Name *string
```

- *Type:* *string

Defines the name of the Sink.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/cloudflare/cloudflare/5.21.1/docs/resources/pipeline_sink#name PipelineSink#name}

---

##### `Type`<sup>Required</sup> <a name="Type" id="@cdktn/provider-cloudflare.pipelineSink.PipelineSinkConfig.property.type"></a>

```go
Type *string
```

- *Type:* *string

Specifies the type of sink. Available values: "r2", "r2_data_catalog".

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/cloudflare/cloudflare/5.21.1/docs/resources/pipeline_sink#type PipelineSink#type}

---

##### `Config`<sup>Optional</sup> <a name="Config" id="@cdktn/provider-cloudflare.pipelineSink.PipelineSinkConfig.property.config"></a>

```go
Config PipelineSinkConfigA
```

- *Type:* <a href="#@cdktn/provider-cloudflare.pipelineSink.PipelineSinkConfigA">PipelineSinkConfigA</a>

Defines the configuration of the R2 Sink.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/cloudflare/cloudflare/5.21.1/docs/resources/pipeline_sink#config PipelineSink#config}

---

##### `Format`<sup>Optional</sup> <a name="Format" id="@cdktn/provider-cloudflare.pipelineSink.PipelineSinkConfig.property.format"></a>

```go
Format PipelineSinkFormat
```

- *Type:* <a href="#@cdktn/provider-cloudflare.pipelineSink.PipelineSinkFormat">PipelineSinkFormat</a>

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/cloudflare/cloudflare/5.21.1/docs/resources/pipeline_sink#format PipelineSink#format}.

---

##### `Schema`<sup>Optional</sup> <a name="Schema" id="@cdktn/provider-cloudflare.pipelineSink.PipelineSinkConfig.property.schema"></a>

```go
Schema PipelineSinkSchema
```

- *Type:* <a href="#@cdktn/provider-cloudflare.pipelineSink.PipelineSinkSchema">PipelineSinkSchema</a>

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/cloudflare/cloudflare/5.21.1/docs/resources/pipeline_sink#schema PipelineSink#schema}.

---

### PipelineSinkConfigA <a name="PipelineSinkConfigA" id="@cdktn/provider-cloudflare.pipelineSink.PipelineSinkConfigA"></a>

#### Initializer <a name="Initializer" id="@cdktn/provider-cloudflare.pipelineSink.PipelineSinkConfigA.Initializer"></a>

```go
import "github.com/cdktn-io/cdktn-provider-cloudflare-go/cloudflare/v15/pipelinesink"

&pipelinesink.PipelineSinkConfigA {
	AccountId: *string,
	Bucket: *string,
	Credentials: github.com/cdktn-io/cdktn-provider-cloudflare-go/cloudflare/v15.pipelineSink.PipelineSinkConfigCredentials,
	FileNaming: github.com/cdktn-io/cdktn-provider-cloudflare-go/cloudflare/v15.pipelineSink.PipelineSinkConfigFileNaming,
	Jurisdiction: *string,
	Namespace: *string,
	Partitioning: github.com/cdktn-io/cdktn-provider-cloudflare-go/cloudflare/v15.pipelineSink.PipelineSinkConfigPartitioning,
	Path: *string,
	RollingPolicy: github.com/cdktn-io/cdktn-provider-cloudflare-go/cloudflare/v15.pipelineSink.PipelineSinkConfigRollingPolicy,
	TableName: *string,
	Token: *string,
}
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-cloudflare.pipelineSink.PipelineSinkConfigA.property.accountId">AccountId</a></code> | <code>*string</code> | Cloudflare Account ID for the bucket. |
| <code><a href="#@cdktn/provider-cloudflare.pipelineSink.PipelineSinkConfigA.property.bucket">Bucket</a></code> | <code>*string</code> | R2 Bucket to write to. |
| <code><a href="#@cdktn/provider-cloudflare.pipelineSink.PipelineSinkConfigA.property.credentials">Credentials</a></code> | <code><a href="#@cdktn/provider-cloudflare.pipelineSink.PipelineSinkConfigCredentials">PipelineSinkConfigCredentials</a></code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/cloudflare/cloudflare/5.21.1/docs/resources/pipeline_sink#credentials PipelineSink#credentials}. |
| <code><a href="#@cdktn/provider-cloudflare.pipelineSink.PipelineSinkConfigA.property.fileNaming">FileNaming</a></code> | <code><a href="#@cdktn/provider-cloudflare.pipelineSink.PipelineSinkConfigFileNaming">PipelineSinkConfigFileNaming</a></code> | Controls filename prefix/suffix and strategy. |
| <code><a href="#@cdktn/provider-cloudflare.pipelineSink.PipelineSinkConfigA.property.jurisdiction">Jurisdiction</a></code> | <code>*string</code> | Jurisdiction this bucket is hosted in. |
| <code><a href="#@cdktn/provider-cloudflare.pipelineSink.PipelineSinkConfigA.property.namespace">Namespace</a></code> | <code>*string</code> | Table namespace. |
| <code><a href="#@cdktn/provider-cloudflare.pipelineSink.PipelineSinkConfigA.property.partitioning">Partitioning</a></code> | <code><a href="#@cdktn/provider-cloudflare.pipelineSink.PipelineSinkConfigPartitioning">PipelineSinkConfigPartitioning</a></code> | Data-layout partitioning for sinks. |
| <code><a href="#@cdktn/provider-cloudflare.pipelineSink.PipelineSinkConfigA.property.path">Path</a></code> | <code>*string</code> | Subpath within the bucket to write to. |
| <code><a href="#@cdktn/provider-cloudflare.pipelineSink.PipelineSinkConfigA.property.rollingPolicy">RollingPolicy</a></code> | <code><a href="#@cdktn/provider-cloudflare.pipelineSink.PipelineSinkConfigRollingPolicy">PipelineSinkConfigRollingPolicy</a></code> | Rolling policy for file sinks (when & why to close a file and open a new one). |
| <code><a href="#@cdktn/provider-cloudflare.pipelineSink.PipelineSinkConfigA.property.tableName">TableName</a></code> | <code>*string</code> | Table name. |
| <code><a href="#@cdktn/provider-cloudflare.pipelineSink.PipelineSinkConfigA.property.token">Token</a></code> | <code>*string</code> | Authentication token. |

---

##### `AccountId`<sup>Required</sup> <a name="AccountId" id="@cdktn/provider-cloudflare.pipelineSink.PipelineSinkConfigA.property.accountId"></a>

```go
AccountId *string
```

- *Type:* *string

Cloudflare Account ID for the bucket.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/cloudflare/cloudflare/5.21.1/docs/resources/pipeline_sink#account_id PipelineSink#account_id}

---

##### `Bucket`<sup>Required</sup> <a name="Bucket" id="@cdktn/provider-cloudflare.pipelineSink.PipelineSinkConfigA.property.bucket"></a>

```go
Bucket *string
```

- *Type:* *string

R2 Bucket to write to.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/cloudflare/cloudflare/5.21.1/docs/resources/pipeline_sink#bucket PipelineSink#bucket}

---

##### `Credentials`<sup>Optional</sup> <a name="Credentials" id="@cdktn/provider-cloudflare.pipelineSink.PipelineSinkConfigA.property.credentials"></a>

```go
Credentials PipelineSinkConfigCredentials
```

- *Type:* <a href="#@cdktn/provider-cloudflare.pipelineSink.PipelineSinkConfigCredentials">PipelineSinkConfigCredentials</a>

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/cloudflare/cloudflare/5.21.1/docs/resources/pipeline_sink#credentials PipelineSink#credentials}.

---

##### `FileNaming`<sup>Optional</sup> <a name="FileNaming" id="@cdktn/provider-cloudflare.pipelineSink.PipelineSinkConfigA.property.fileNaming"></a>

```go
FileNaming PipelineSinkConfigFileNaming
```

- *Type:* <a href="#@cdktn/provider-cloudflare.pipelineSink.PipelineSinkConfigFileNaming">PipelineSinkConfigFileNaming</a>

Controls filename prefix/suffix and strategy.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/cloudflare/cloudflare/5.21.1/docs/resources/pipeline_sink#file_naming PipelineSink#file_naming}

---

##### `Jurisdiction`<sup>Optional</sup> <a name="Jurisdiction" id="@cdktn/provider-cloudflare.pipelineSink.PipelineSinkConfigA.property.jurisdiction"></a>

```go
Jurisdiction *string
```

- *Type:* *string

Jurisdiction this bucket is hosted in.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/cloudflare/cloudflare/5.21.1/docs/resources/pipeline_sink#jurisdiction PipelineSink#jurisdiction}

---

##### `Namespace`<sup>Optional</sup> <a name="Namespace" id="@cdktn/provider-cloudflare.pipelineSink.PipelineSinkConfigA.property.namespace"></a>

```go
Namespace *string
```

- *Type:* *string

Table namespace.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/cloudflare/cloudflare/5.21.1/docs/resources/pipeline_sink#namespace PipelineSink#namespace}

---

##### `Partitioning`<sup>Optional</sup> <a name="Partitioning" id="@cdktn/provider-cloudflare.pipelineSink.PipelineSinkConfigA.property.partitioning"></a>

```go
Partitioning PipelineSinkConfigPartitioning
```

- *Type:* <a href="#@cdktn/provider-cloudflare.pipelineSink.PipelineSinkConfigPartitioning">PipelineSinkConfigPartitioning</a>

Data-layout partitioning for sinks.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/cloudflare/cloudflare/5.21.1/docs/resources/pipeline_sink#partitioning PipelineSink#partitioning}

---

##### `Path`<sup>Optional</sup> <a name="Path" id="@cdktn/provider-cloudflare.pipelineSink.PipelineSinkConfigA.property.path"></a>

```go
Path *string
```

- *Type:* *string

Subpath within the bucket to write to.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/cloudflare/cloudflare/5.21.1/docs/resources/pipeline_sink#path PipelineSink#path}

---

##### `RollingPolicy`<sup>Optional</sup> <a name="RollingPolicy" id="@cdktn/provider-cloudflare.pipelineSink.PipelineSinkConfigA.property.rollingPolicy"></a>

```go
RollingPolicy PipelineSinkConfigRollingPolicy
```

- *Type:* <a href="#@cdktn/provider-cloudflare.pipelineSink.PipelineSinkConfigRollingPolicy">PipelineSinkConfigRollingPolicy</a>

Rolling policy for file sinks (when & why to close a file and open a new one).

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/cloudflare/cloudflare/5.21.1/docs/resources/pipeline_sink#rolling_policy PipelineSink#rolling_policy}

---

##### `TableName`<sup>Optional</sup> <a name="TableName" id="@cdktn/provider-cloudflare.pipelineSink.PipelineSinkConfigA.property.tableName"></a>

```go
TableName *string
```

- *Type:* *string

Table name.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/cloudflare/cloudflare/5.21.1/docs/resources/pipeline_sink#table_name PipelineSink#table_name}

---

##### `Token`<sup>Optional</sup> <a name="Token" id="@cdktn/provider-cloudflare.pipelineSink.PipelineSinkConfigA.property.token"></a>

```go
Token *string
```

- *Type:* *string

Authentication token.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/cloudflare/cloudflare/5.21.1/docs/resources/pipeline_sink#token PipelineSink#token}

---

### PipelineSinkConfigCredentials <a name="PipelineSinkConfigCredentials" id="@cdktn/provider-cloudflare.pipelineSink.PipelineSinkConfigCredentials"></a>

#### Initializer <a name="Initializer" id="@cdktn/provider-cloudflare.pipelineSink.PipelineSinkConfigCredentials.Initializer"></a>

```go
import "github.com/cdktn-io/cdktn-provider-cloudflare-go/cloudflare/v15/pipelinesink"

&pipelinesink.PipelineSinkConfigCredentials {
	AccessKeyId: *string,
	SecretAccessKey: *string,
}
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-cloudflare.pipelineSink.PipelineSinkConfigCredentials.property.accessKeyId">AccessKeyId</a></code> | <code>*string</code> | Cloudflare Account ID for the bucket. |
| <code><a href="#@cdktn/provider-cloudflare.pipelineSink.PipelineSinkConfigCredentials.property.secretAccessKey">SecretAccessKey</a></code> | <code>*string</code> | Cloudflare Account ID for the bucket. |

---

##### `AccessKeyId`<sup>Required</sup> <a name="AccessKeyId" id="@cdktn/provider-cloudflare.pipelineSink.PipelineSinkConfigCredentials.property.accessKeyId"></a>

```go
AccessKeyId *string
```

- *Type:* *string

Cloudflare Account ID for the bucket.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/cloudflare/cloudflare/5.21.1/docs/resources/pipeline_sink#access_key_id PipelineSink#access_key_id}

---

##### `SecretAccessKey`<sup>Required</sup> <a name="SecretAccessKey" id="@cdktn/provider-cloudflare.pipelineSink.PipelineSinkConfigCredentials.property.secretAccessKey"></a>

```go
SecretAccessKey *string
```

- *Type:* *string

Cloudflare Account ID for the bucket.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/cloudflare/cloudflare/5.21.1/docs/resources/pipeline_sink#secret_access_key PipelineSink#secret_access_key}

---

### PipelineSinkConfigFileNaming <a name="PipelineSinkConfigFileNaming" id="@cdktn/provider-cloudflare.pipelineSink.PipelineSinkConfigFileNaming"></a>

#### Initializer <a name="Initializer" id="@cdktn/provider-cloudflare.pipelineSink.PipelineSinkConfigFileNaming.Initializer"></a>

```go
import "github.com/cdktn-io/cdktn-provider-cloudflare-go/cloudflare/v15/pipelinesink"

&pipelinesink.PipelineSinkConfigFileNaming {
	Prefix: *string,
	Strategy: *string,
	Suffix: *string,
}
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-cloudflare.pipelineSink.PipelineSinkConfigFileNaming.property.prefix">Prefix</a></code> | <code>*string</code> | The prefix to use in file name. i.e prefix-<uuid>.parquet. |
| <code><a href="#@cdktn/provider-cloudflare.pipelineSink.PipelineSinkConfigFileNaming.property.strategy">Strategy</a></code> | <code>*string</code> | Filename generation strategy. Available values: "serial", "uuid", "uuid_v7", "ulid". |
| <code><a href="#@cdktn/provider-cloudflare.pipelineSink.PipelineSinkConfigFileNaming.property.suffix">Suffix</a></code> | <code>*string</code> | This will overwrite the default file suffix. i.e .parquet, use with caution. |

---

##### `Prefix`<sup>Optional</sup> <a name="Prefix" id="@cdktn/provider-cloudflare.pipelineSink.PipelineSinkConfigFileNaming.property.prefix"></a>

```go
Prefix *string
```

- *Type:* *string

The prefix to use in file name. i.e prefix-<uuid>.parquet.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/cloudflare/cloudflare/5.21.1/docs/resources/pipeline_sink#prefix PipelineSink#prefix}

---

##### `Strategy`<sup>Optional</sup> <a name="Strategy" id="@cdktn/provider-cloudflare.pipelineSink.PipelineSinkConfigFileNaming.property.strategy"></a>

```go
Strategy *string
```

- *Type:* *string

Filename generation strategy. Available values: "serial", "uuid", "uuid_v7", "ulid".

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/cloudflare/cloudflare/5.21.1/docs/resources/pipeline_sink#strategy PipelineSink#strategy}

---

##### `Suffix`<sup>Optional</sup> <a name="Suffix" id="@cdktn/provider-cloudflare.pipelineSink.PipelineSinkConfigFileNaming.property.suffix"></a>

```go
Suffix *string
```

- *Type:* *string

This will overwrite the default file suffix. i.e .parquet, use with caution.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/cloudflare/cloudflare/5.21.1/docs/resources/pipeline_sink#suffix PipelineSink#suffix}

---

### PipelineSinkConfigPartitioning <a name="PipelineSinkConfigPartitioning" id="@cdktn/provider-cloudflare.pipelineSink.PipelineSinkConfigPartitioning"></a>

#### Initializer <a name="Initializer" id="@cdktn/provider-cloudflare.pipelineSink.PipelineSinkConfigPartitioning.Initializer"></a>

```go
import "github.com/cdktn-io/cdktn-provider-cloudflare-go/cloudflare/v15/pipelinesink"

&pipelinesink.PipelineSinkConfigPartitioning {
	TimePattern: *string,
}
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-cloudflare.pipelineSink.PipelineSinkConfigPartitioning.property.timePattern">TimePattern</a></code> | <code>*string</code> | The pattern of the date string. |

---

##### `TimePattern`<sup>Optional</sup> <a name="TimePattern" id="@cdktn/provider-cloudflare.pipelineSink.PipelineSinkConfigPartitioning.property.timePattern"></a>

```go
TimePattern *string
```

- *Type:* *string

The pattern of the date string.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/cloudflare/cloudflare/5.21.1/docs/resources/pipeline_sink#time_pattern PipelineSink#time_pattern}

---

### PipelineSinkConfigRollingPolicy <a name="PipelineSinkConfigRollingPolicy" id="@cdktn/provider-cloudflare.pipelineSink.PipelineSinkConfigRollingPolicy"></a>

#### Initializer <a name="Initializer" id="@cdktn/provider-cloudflare.pipelineSink.PipelineSinkConfigRollingPolicy.Initializer"></a>

```go
import "github.com/cdktn-io/cdktn-provider-cloudflare-go/cloudflare/v15/pipelinesink"

&pipelinesink.PipelineSinkConfigRollingPolicy {
	FileSizeBytes: *f64,
	InactivitySeconds: *f64,
	IntervalSeconds: *f64,
}
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-cloudflare.pipelineSink.PipelineSinkConfigRollingPolicy.property.fileSizeBytes">FileSizeBytes</a></code> | <code>*f64</code> | Files will be rolled after reaching this number of bytes. |
| <code><a href="#@cdktn/provider-cloudflare.pipelineSink.PipelineSinkConfigRollingPolicy.property.inactivitySeconds">InactivitySeconds</a></code> | <code>*f64</code> | Number of seconds of inactivity to wait before rolling over to a new file. |
| <code><a href="#@cdktn/provider-cloudflare.pipelineSink.PipelineSinkConfigRollingPolicy.property.intervalSeconds">IntervalSeconds</a></code> | <code>*f64</code> | Number of seconds to wait before rolling over to a new file. |

---

##### `FileSizeBytes`<sup>Optional</sup> <a name="FileSizeBytes" id="@cdktn/provider-cloudflare.pipelineSink.PipelineSinkConfigRollingPolicy.property.fileSizeBytes"></a>

```go
FileSizeBytes *f64
```

- *Type:* *f64

Files will be rolled after reaching this number of bytes.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/cloudflare/cloudflare/5.21.1/docs/resources/pipeline_sink#file_size_bytes PipelineSink#file_size_bytes}

---

##### `InactivitySeconds`<sup>Optional</sup> <a name="InactivitySeconds" id="@cdktn/provider-cloudflare.pipelineSink.PipelineSinkConfigRollingPolicy.property.inactivitySeconds"></a>

```go
InactivitySeconds *f64
```

- *Type:* *f64

Number of seconds of inactivity to wait before rolling over to a new file.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/cloudflare/cloudflare/5.21.1/docs/resources/pipeline_sink#inactivity_seconds PipelineSink#inactivity_seconds}

---

##### `IntervalSeconds`<sup>Optional</sup> <a name="IntervalSeconds" id="@cdktn/provider-cloudflare.pipelineSink.PipelineSinkConfigRollingPolicy.property.intervalSeconds"></a>

```go
IntervalSeconds *f64
```

- *Type:* *f64

Number of seconds to wait before rolling over to a new file.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/cloudflare/cloudflare/5.21.1/docs/resources/pipeline_sink#interval_seconds PipelineSink#interval_seconds}

---

### PipelineSinkFormat <a name="PipelineSinkFormat" id="@cdktn/provider-cloudflare.pipelineSink.PipelineSinkFormat"></a>

#### Initializer <a name="Initializer" id="@cdktn/provider-cloudflare.pipelineSink.PipelineSinkFormat.Initializer"></a>

```go
import "github.com/cdktn-io/cdktn-provider-cloudflare-go/cloudflare/v15/pipelinesink"

&pipelinesink.PipelineSinkFormat {
	Type: *string,
	Compression: *string,
	DecimalEncoding: *string,
	RowGroupBytes: *f64,
	TimestampFormat: *string,
	Unstructured: interface{},
}
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-cloudflare.pipelineSink.PipelineSinkFormat.property.type">Type</a></code> | <code>*string</code> | Available values: "json", "parquet". |
| <code><a href="#@cdktn/provider-cloudflare.pipelineSink.PipelineSinkFormat.property.compression">Compression</a></code> | <code>*string</code> | Available values: "uncompressed", "snappy", "gzip", "zstd", "lz4". |
| <code><a href="#@cdktn/provider-cloudflare.pipelineSink.PipelineSinkFormat.property.decimalEncoding">DecimalEncoding</a></code> | <code>*string</code> | Available values: "number", "string", "bytes". |
| <code><a href="#@cdktn/provider-cloudflare.pipelineSink.PipelineSinkFormat.property.rowGroupBytes">RowGroupBytes</a></code> | <code>*f64</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/cloudflare/cloudflare/5.21.1/docs/resources/pipeline_sink#row_group_bytes PipelineSink#row_group_bytes}. |
| <code><a href="#@cdktn/provider-cloudflare.pipelineSink.PipelineSinkFormat.property.timestampFormat">TimestampFormat</a></code> | <code>*string</code> | Available values: "rfc3339", "unix_millis". |
| <code><a href="#@cdktn/provider-cloudflare.pipelineSink.PipelineSinkFormat.property.unstructured">Unstructured</a></code> | <code>interface{}</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/cloudflare/cloudflare/5.21.1/docs/resources/pipeline_sink#unstructured PipelineSink#unstructured}. |

---

##### `Type`<sup>Required</sup> <a name="Type" id="@cdktn/provider-cloudflare.pipelineSink.PipelineSinkFormat.property.type"></a>

```go
Type *string
```

- *Type:* *string

Available values: "json", "parquet".

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/cloudflare/cloudflare/5.21.1/docs/resources/pipeline_sink#type PipelineSink#type}

---

##### `Compression`<sup>Optional</sup> <a name="Compression" id="@cdktn/provider-cloudflare.pipelineSink.PipelineSinkFormat.property.compression"></a>

```go
Compression *string
```

- *Type:* *string

Available values: "uncompressed", "snappy", "gzip", "zstd", "lz4".

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/cloudflare/cloudflare/5.21.1/docs/resources/pipeline_sink#compression PipelineSink#compression}

---

##### `DecimalEncoding`<sup>Optional</sup> <a name="DecimalEncoding" id="@cdktn/provider-cloudflare.pipelineSink.PipelineSinkFormat.property.decimalEncoding"></a>

```go
DecimalEncoding *string
```

- *Type:* *string

Available values: "number", "string", "bytes".

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/cloudflare/cloudflare/5.21.1/docs/resources/pipeline_sink#decimal_encoding PipelineSink#decimal_encoding}

---

##### `RowGroupBytes`<sup>Optional</sup> <a name="RowGroupBytes" id="@cdktn/provider-cloudflare.pipelineSink.PipelineSinkFormat.property.rowGroupBytes"></a>

```go
RowGroupBytes *f64
```

- *Type:* *f64

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/cloudflare/cloudflare/5.21.1/docs/resources/pipeline_sink#row_group_bytes PipelineSink#row_group_bytes}.

---

##### `TimestampFormat`<sup>Optional</sup> <a name="TimestampFormat" id="@cdktn/provider-cloudflare.pipelineSink.PipelineSinkFormat.property.timestampFormat"></a>

```go
TimestampFormat *string
```

- *Type:* *string

Available values: "rfc3339", "unix_millis".

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/cloudflare/cloudflare/5.21.1/docs/resources/pipeline_sink#timestamp_format PipelineSink#timestamp_format}

---

##### `Unstructured`<sup>Optional</sup> <a name="Unstructured" id="@cdktn/provider-cloudflare.pipelineSink.PipelineSinkFormat.property.unstructured"></a>

```go
Unstructured interface{}
```

- *Type:* interface{}

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/cloudflare/cloudflare/5.21.1/docs/resources/pipeline_sink#unstructured PipelineSink#unstructured}.

---

### PipelineSinkSchema <a name="PipelineSinkSchema" id="@cdktn/provider-cloudflare.pipelineSink.PipelineSinkSchema"></a>

#### Initializer <a name="Initializer" id="@cdktn/provider-cloudflare.pipelineSink.PipelineSinkSchema.Initializer"></a>

```go
import "github.com/cdktn-io/cdktn-provider-cloudflare-go/cloudflare/v15/pipelinesink"

&pipelinesink.PipelineSinkSchema {
	Fields: interface{},
	Format: github.com/cdktn-io/cdktn-provider-cloudflare-go/cloudflare/v15.pipelineSink.PipelineSinkSchemaFormat,
	Inferred: interface{},
}
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-cloudflare.pipelineSink.PipelineSinkSchema.property.fields">Fields</a></code> | <code>interface{}</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/cloudflare/cloudflare/5.21.1/docs/resources/pipeline_sink#fields PipelineSink#fields}. |
| <code><a href="#@cdktn/provider-cloudflare.pipelineSink.PipelineSinkSchema.property.format">Format</a></code> | <code><a href="#@cdktn/provider-cloudflare.pipelineSink.PipelineSinkSchemaFormat">PipelineSinkSchemaFormat</a></code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/cloudflare/cloudflare/5.21.1/docs/resources/pipeline_sink#format PipelineSink#format}. |
| <code><a href="#@cdktn/provider-cloudflare.pipelineSink.PipelineSinkSchema.property.inferred">Inferred</a></code> | <code>interface{}</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/cloudflare/cloudflare/5.21.1/docs/resources/pipeline_sink#inferred PipelineSink#inferred}. |

---

##### `Fields`<sup>Optional</sup> <a name="Fields" id="@cdktn/provider-cloudflare.pipelineSink.PipelineSinkSchema.property.fields"></a>

```go
Fields interface{}
```

- *Type:* interface{}

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/cloudflare/cloudflare/5.21.1/docs/resources/pipeline_sink#fields PipelineSink#fields}.

---

##### `Format`<sup>Optional</sup> <a name="Format" id="@cdktn/provider-cloudflare.pipelineSink.PipelineSinkSchema.property.format"></a>

```go
Format PipelineSinkSchemaFormat
```

- *Type:* <a href="#@cdktn/provider-cloudflare.pipelineSink.PipelineSinkSchemaFormat">PipelineSinkSchemaFormat</a>

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/cloudflare/cloudflare/5.21.1/docs/resources/pipeline_sink#format PipelineSink#format}.

---

##### `Inferred`<sup>Optional</sup> <a name="Inferred" id="@cdktn/provider-cloudflare.pipelineSink.PipelineSinkSchema.property.inferred"></a>

```go
Inferred interface{}
```

- *Type:* interface{}

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/cloudflare/cloudflare/5.21.1/docs/resources/pipeline_sink#inferred PipelineSink#inferred}.

---

### PipelineSinkSchemaFields <a name="PipelineSinkSchemaFields" id="@cdktn/provider-cloudflare.pipelineSink.PipelineSinkSchemaFields"></a>

#### Initializer <a name="Initializer" id="@cdktn/provider-cloudflare.pipelineSink.PipelineSinkSchemaFields.Initializer"></a>

```go
import "github.com/cdktn-io/cdktn-provider-cloudflare-go/cloudflare/v15/pipelinesink"

&pipelinesink.PipelineSinkSchemaFields {
	Type: *string,
	MetadataKey: *string,
	Name: *string,
	Required: interface{},
	SqlName: *string,
	Unit: *string,
}
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-cloudflare.pipelineSink.PipelineSinkSchemaFields.property.type">Type</a></code> | <code>*string</code> | Available values: "int32", "int64", "float32", "float64", "bool", "string", "binary", "timestamp", "json". |
| <code><a href="#@cdktn/provider-cloudflare.pipelineSink.PipelineSinkSchemaFields.property.metadataKey">MetadataKey</a></code> | <code>*string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/cloudflare/cloudflare/5.21.1/docs/resources/pipeline_sink#metadata_key PipelineSink#metadata_key}. |
| <code><a href="#@cdktn/provider-cloudflare.pipelineSink.PipelineSinkSchemaFields.property.name">Name</a></code> | <code>*string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/cloudflare/cloudflare/5.21.1/docs/resources/pipeline_sink#name PipelineSink#name}. |
| <code><a href="#@cdktn/provider-cloudflare.pipelineSink.PipelineSinkSchemaFields.property.required">Required</a></code> | <code>interface{}</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/cloudflare/cloudflare/5.21.1/docs/resources/pipeline_sink#required PipelineSink#required}. |
| <code><a href="#@cdktn/provider-cloudflare.pipelineSink.PipelineSinkSchemaFields.property.sqlName">SqlName</a></code> | <code>*string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/cloudflare/cloudflare/5.21.1/docs/resources/pipeline_sink#sql_name PipelineSink#sql_name}. |
| <code><a href="#@cdktn/provider-cloudflare.pipelineSink.PipelineSinkSchemaFields.property.unit">Unit</a></code> | <code>*string</code> | Available values: "second", "millisecond", "microsecond", "nanosecond". |

---

##### `Type`<sup>Required</sup> <a name="Type" id="@cdktn/provider-cloudflare.pipelineSink.PipelineSinkSchemaFields.property.type"></a>

```go
Type *string
```

- *Type:* *string

Available values: "int32", "int64", "float32", "float64", "bool", "string", "binary", "timestamp", "json".

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/cloudflare/cloudflare/5.21.1/docs/resources/pipeline_sink#type PipelineSink#type}

---

##### `MetadataKey`<sup>Optional</sup> <a name="MetadataKey" id="@cdktn/provider-cloudflare.pipelineSink.PipelineSinkSchemaFields.property.metadataKey"></a>

```go
MetadataKey *string
```

- *Type:* *string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/cloudflare/cloudflare/5.21.1/docs/resources/pipeline_sink#metadata_key PipelineSink#metadata_key}.

---

##### `Name`<sup>Optional</sup> <a name="Name" id="@cdktn/provider-cloudflare.pipelineSink.PipelineSinkSchemaFields.property.name"></a>

```go
Name *string
```

- *Type:* *string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/cloudflare/cloudflare/5.21.1/docs/resources/pipeline_sink#name PipelineSink#name}.

---

##### `Required`<sup>Optional</sup> <a name="Required" id="@cdktn/provider-cloudflare.pipelineSink.PipelineSinkSchemaFields.property.required"></a>

```go
Required interface{}
```

- *Type:* interface{}

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/cloudflare/cloudflare/5.21.1/docs/resources/pipeline_sink#required PipelineSink#required}.

---

##### `SqlName`<sup>Optional</sup> <a name="SqlName" id="@cdktn/provider-cloudflare.pipelineSink.PipelineSinkSchemaFields.property.sqlName"></a>

```go
SqlName *string
```

- *Type:* *string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/cloudflare/cloudflare/5.21.1/docs/resources/pipeline_sink#sql_name PipelineSink#sql_name}.

---

##### `Unit`<sup>Optional</sup> <a name="Unit" id="@cdktn/provider-cloudflare.pipelineSink.PipelineSinkSchemaFields.property.unit"></a>

```go
Unit *string
```

- *Type:* *string

Available values: "second", "millisecond", "microsecond", "nanosecond".

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/cloudflare/cloudflare/5.21.1/docs/resources/pipeline_sink#unit PipelineSink#unit}

---

### PipelineSinkSchemaFormat <a name="PipelineSinkSchemaFormat" id="@cdktn/provider-cloudflare.pipelineSink.PipelineSinkSchemaFormat"></a>

#### Initializer <a name="Initializer" id="@cdktn/provider-cloudflare.pipelineSink.PipelineSinkSchemaFormat.Initializer"></a>

```go
import "github.com/cdktn-io/cdktn-provider-cloudflare-go/cloudflare/v15/pipelinesink"

&pipelinesink.PipelineSinkSchemaFormat {
	Type: *string,
	Compression: *string,
	DecimalEncoding: *string,
	RowGroupBytes: *f64,
	TimestampFormat: *string,
	Unstructured: interface{},
}
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-cloudflare.pipelineSink.PipelineSinkSchemaFormat.property.type">Type</a></code> | <code>*string</code> | Available values: "json", "parquet". |
| <code><a href="#@cdktn/provider-cloudflare.pipelineSink.PipelineSinkSchemaFormat.property.compression">Compression</a></code> | <code>*string</code> | Available values: "uncompressed", "snappy", "gzip", "zstd", "lz4". |
| <code><a href="#@cdktn/provider-cloudflare.pipelineSink.PipelineSinkSchemaFormat.property.decimalEncoding">DecimalEncoding</a></code> | <code>*string</code> | Available values: "number", "string", "bytes". |
| <code><a href="#@cdktn/provider-cloudflare.pipelineSink.PipelineSinkSchemaFormat.property.rowGroupBytes">RowGroupBytes</a></code> | <code>*f64</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/cloudflare/cloudflare/5.21.1/docs/resources/pipeline_sink#row_group_bytes PipelineSink#row_group_bytes}. |
| <code><a href="#@cdktn/provider-cloudflare.pipelineSink.PipelineSinkSchemaFormat.property.timestampFormat">TimestampFormat</a></code> | <code>*string</code> | Available values: "rfc3339", "unix_millis". |
| <code><a href="#@cdktn/provider-cloudflare.pipelineSink.PipelineSinkSchemaFormat.property.unstructured">Unstructured</a></code> | <code>interface{}</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/cloudflare/cloudflare/5.21.1/docs/resources/pipeline_sink#unstructured PipelineSink#unstructured}. |

---

##### `Type`<sup>Required</sup> <a name="Type" id="@cdktn/provider-cloudflare.pipelineSink.PipelineSinkSchemaFormat.property.type"></a>

```go
Type *string
```

- *Type:* *string

Available values: "json", "parquet".

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/cloudflare/cloudflare/5.21.1/docs/resources/pipeline_sink#type PipelineSink#type}

---

##### `Compression`<sup>Optional</sup> <a name="Compression" id="@cdktn/provider-cloudflare.pipelineSink.PipelineSinkSchemaFormat.property.compression"></a>

```go
Compression *string
```

- *Type:* *string

Available values: "uncompressed", "snappy", "gzip", "zstd", "lz4".

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/cloudflare/cloudflare/5.21.1/docs/resources/pipeline_sink#compression PipelineSink#compression}

---

##### `DecimalEncoding`<sup>Optional</sup> <a name="DecimalEncoding" id="@cdktn/provider-cloudflare.pipelineSink.PipelineSinkSchemaFormat.property.decimalEncoding"></a>

```go
DecimalEncoding *string
```

- *Type:* *string

Available values: "number", "string", "bytes".

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/cloudflare/cloudflare/5.21.1/docs/resources/pipeline_sink#decimal_encoding PipelineSink#decimal_encoding}

---

##### `RowGroupBytes`<sup>Optional</sup> <a name="RowGroupBytes" id="@cdktn/provider-cloudflare.pipelineSink.PipelineSinkSchemaFormat.property.rowGroupBytes"></a>

```go
RowGroupBytes *f64
```

- *Type:* *f64

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/cloudflare/cloudflare/5.21.1/docs/resources/pipeline_sink#row_group_bytes PipelineSink#row_group_bytes}.

---

##### `TimestampFormat`<sup>Optional</sup> <a name="TimestampFormat" id="@cdktn/provider-cloudflare.pipelineSink.PipelineSinkSchemaFormat.property.timestampFormat"></a>

```go
TimestampFormat *string
```

- *Type:* *string

Available values: "rfc3339", "unix_millis".

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/cloudflare/cloudflare/5.21.1/docs/resources/pipeline_sink#timestamp_format PipelineSink#timestamp_format}

---

##### `Unstructured`<sup>Optional</sup> <a name="Unstructured" id="@cdktn/provider-cloudflare.pipelineSink.PipelineSinkSchemaFormat.property.unstructured"></a>

```go
Unstructured interface{}
```

- *Type:* interface{}

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/cloudflare/cloudflare/5.21.1/docs/resources/pipeline_sink#unstructured PipelineSink#unstructured}.

---

## Classes <a name="Classes" id="Classes"></a>

### PipelineSinkConfigAOutputReference <a name="PipelineSinkConfigAOutputReference" id="@cdktn/provider-cloudflare.pipelineSink.PipelineSinkConfigAOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktn/provider-cloudflare.pipelineSink.PipelineSinkConfigAOutputReference.Initializer"></a>

```go
import "github.com/cdktn-io/cdktn-provider-cloudflare-go/cloudflare/v15/pipelinesink"

pipelinesink.NewPipelineSinkConfigAOutputReference(terraformResource IInterpolatingParent, terraformAttribute *string) PipelineSinkConfigAOutputReference
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-cloudflare.pipelineSink.PipelineSinkConfigAOutputReference.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>github.com/open-constructs/cdk-terrain-go/cdktn.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktn/provider-cloudflare.pipelineSink.PipelineSinkConfigAOutputReference.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>*string</code> | The attribute on the parent resource this class is referencing. |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktn/provider-cloudflare.pipelineSink.PipelineSinkConfigAOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* github.com/open-constructs/cdk-terrain-go/cdktn.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-cloudflare.pipelineSink.PipelineSinkConfigAOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* *string

The attribute on the parent resource this class is referencing.

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-cloudflare.pipelineSink.PipelineSinkConfigAOutputReference.computeFqn">ComputeFqn</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-cloudflare.pipelineSink.PipelineSinkConfigAOutputReference.getAnyMapAttribute">GetAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-cloudflare.pipelineSink.PipelineSinkConfigAOutputReference.getBooleanAttribute">GetBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-cloudflare.pipelineSink.PipelineSinkConfigAOutputReference.getBooleanMapAttribute">GetBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-cloudflare.pipelineSink.PipelineSinkConfigAOutputReference.getListAttribute">GetListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-cloudflare.pipelineSink.PipelineSinkConfigAOutputReference.getNumberAttribute">GetNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-cloudflare.pipelineSink.PipelineSinkConfigAOutputReference.getNumberListAttribute">GetNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-cloudflare.pipelineSink.PipelineSinkConfigAOutputReference.getNumberMapAttribute">GetNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-cloudflare.pipelineSink.PipelineSinkConfigAOutputReference.getStringAttribute">GetStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-cloudflare.pipelineSink.PipelineSinkConfigAOutputReference.getStringMapAttribute">GetStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-cloudflare.pipelineSink.PipelineSinkConfigAOutputReference.interpolationForAttribute">InterpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-cloudflare.pipelineSink.PipelineSinkConfigAOutputReference.resolve">Resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktn/provider-cloudflare.pipelineSink.PipelineSinkConfigAOutputReference.toString">ToString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktn/provider-cloudflare.pipelineSink.PipelineSinkConfigAOutputReference.putCredentials">PutCredentials</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-cloudflare.pipelineSink.PipelineSinkConfigAOutputReference.putFileNaming">PutFileNaming</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-cloudflare.pipelineSink.PipelineSinkConfigAOutputReference.putPartitioning">PutPartitioning</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-cloudflare.pipelineSink.PipelineSinkConfigAOutputReference.putRollingPolicy">PutRollingPolicy</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-cloudflare.pipelineSink.PipelineSinkConfigAOutputReference.resetCredentials">ResetCredentials</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-cloudflare.pipelineSink.PipelineSinkConfigAOutputReference.resetFileNaming">ResetFileNaming</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-cloudflare.pipelineSink.PipelineSinkConfigAOutputReference.resetJurisdiction">ResetJurisdiction</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-cloudflare.pipelineSink.PipelineSinkConfigAOutputReference.resetNamespace">ResetNamespace</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-cloudflare.pipelineSink.PipelineSinkConfigAOutputReference.resetPartitioning">ResetPartitioning</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-cloudflare.pipelineSink.PipelineSinkConfigAOutputReference.resetPath">ResetPath</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-cloudflare.pipelineSink.PipelineSinkConfigAOutputReference.resetRollingPolicy">ResetRollingPolicy</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-cloudflare.pipelineSink.PipelineSinkConfigAOutputReference.resetTableName">ResetTableName</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-cloudflare.pipelineSink.PipelineSinkConfigAOutputReference.resetToken">ResetToken</a></code> | *No description.* |

---

##### `ComputeFqn` <a name="ComputeFqn" id="@cdktn/provider-cloudflare.pipelineSink.PipelineSinkConfigAOutputReference.computeFqn"></a>

```go
func ComputeFqn() *string
```

##### `GetAnyMapAttribute` <a name="GetAnyMapAttribute" id="@cdktn/provider-cloudflare.pipelineSink.PipelineSinkConfigAOutputReference.getAnyMapAttribute"></a>

```go
func GetAnyMapAttribute(terraformAttribute *string) *map[string]interface{}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-cloudflare.pipelineSink.PipelineSinkConfigAOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetBooleanAttribute` <a name="GetBooleanAttribute" id="@cdktn/provider-cloudflare.pipelineSink.PipelineSinkConfigAOutputReference.getBooleanAttribute"></a>

```go
func GetBooleanAttribute(terraformAttribute *string) IResolvable
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-cloudflare.pipelineSink.PipelineSinkConfigAOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetBooleanMapAttribute` <a name="GetBooleanMapAttribute" id="@cdktn/provider-cloudflare.pipelineSink.PipelineSinkConfigAOutputReference.getBooleanMapAttribute"></a>

```go
func GetBooleanMapAttribute(terraformAttribute *string) *map[string]*bool
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-cloudflare.pipelineSink.PipelineSinkConfigAOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetListAttribute` <a name="GetListAttribute" id="@cdktn/provider-cloudflare.pipelineSink.PipelineSinkConfigAOutputReference.getListAttribute"></a>

```go
func GetListAttribute(terraformAttribute *string) *[]*string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-cloudflare.pipelineSink.PipelineSinkConfigAOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberAttribute` <a name="GetNumberAttribute" id="@cdktn/provider-cloudflare.pipelineSink.PipelineSinkConfigAOutputReference.getNumberAttribute"></a>

```go
func GetNumberAttribute(terraformAttribute *string) *f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-cloudflare.pipelineSink.PipelineSinkConfigAOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberListAttribute` <a name="GetNumberListAttribute" id="@cdktn/provider-cloudflare.pipelineSink.PipelineSinkConfigAOutputReference.getNumberListAttribute"></a>

```go
func GetNumberListAttribute(terraformAttribute *string) *[]*f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-cloudflare.pipelineSink.PipelineSinkConfigAOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberMapAttribute` <a name="GetNumberMapAttribute" id="@cdktn/provider-cloudflare.pipelineSink.PipelineSinkConfigAOutputReference.getNumberMapAttribute"></a>

```go
func GetNumberMapAttribute(terraformAttribute *string) *map[string]*f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-cloudflare.pipelineSink.PipelineSinkConfigAOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetStringAttribute` <a name="GetStringAttribute" id="@cdktn/provider-cloudflare.pipelineSink.PipelineSinkConfigAOutputReference.getStringAttribute"></a>

```go
func GetStringAttribute(terraformAttribute *string) *string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-cloudflare.pipelineSink.PipelineSinkConfigAOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetStringMapAttribute` <a name="GetStringMapAttribute" id="@cdktn/provider-cloudflare.pipelineSink.PipelineSinkConfigAOutputReference.getStringMapAttribute"></a>

```go
func GetStringMapAttribute(terraformAttribute *string) *map[string]*string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-cloudflare.pipelineSink.PipelineSinkConfigAOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `InterpolationForAttribute` <a name="InterpolationForAttribute" id="@cdktn/provider-cloudflare.pipelineSink.PipelineSinkConfigAOutputReference.interpolationForAttribute"></a>

```go
func InterpolationForAttribute(property *string) IResolvable
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktn/provider-cloudflare.pipelineSink.PipelineSinkConfigAOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* *string

---

##### `Resolve` <a name="Resolve" id="@cdktn/provider-cloudflare.pipelineSink.PipelineSinkConfigAOutputReference.resolve"></a>

```go
func Resolve(_context IResolveContext) interface{}
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktn/provider-cloudflare.pipelineSink.PipelineSinkConfigAOutputReference.resolve.parameter._context"></a>

- *Type:* github.com/open-constructs/cdk-terrain-go/cdktn.IResolveContext

---

##### `ToString` <a name="ToString" id="@cdktn/provider-cloudflare.pipelineSink.PipelineSinkConfigAOutputReference.toString"></a>

```go
func ToString() *string
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `PutCredentials` <a name="PutCredentials" id="@cdktn/provider-cloudflare.pipelineSink.PipelineSinkConfigAOutputReference.putCredentials"></a>

```go
func PutCredentials(value PipelineSinkConfigCredentials)
```

###### `value`<sup>Required</sup> <a name="value" id="@cdktn/provider-cloudflare.pipelineSink.PipelineSinkConfigAOutputReference.putCredentials.parameter.value"></a>

- *Type:* <a href="#@cdktn/provider-cloudflare.pipelineSink.PipelineSinkConfigCredentials">PipelineSinkConfigCredentials</a>

---

##### `PutFileNaming` <a name="PutFileNaming" id="@cdktn/provider-cloudflare.pipelineSink.PipelineSinkConfigAOutputReference.putFileNaming"></a>

```go
func PutFileNaming(value PipelineSinkConfigFileNaming)
```

###### `value`<sup>Required</sup> <a name="value" id="@cdktn/provider-cloudflare.pipelineSink.PipelineSinkConfigAOutputReference.putFileNaming.parameter.value"></a>

- *Type:* <a href="#@cdktn/provider-cloudflare.pipelineSink.PipelineSinkConfigFileNaming">PipelineSinkConfigFileNaming</a>

---

##### `PutPartitioning` <a name="PutPartitioning" id="@cdktn/provider-cloudflare.pipelineSink.PipelineSinkConfigAOutputReference.putPartitioning"></a>

```go
func PutPartitioning(value PipelineSinkConfigPartitioning)
```

###### `value`<sup>Required</sup> <a name="value" id="@cdktn/provider-cloudflare.pipelineSink.PipelineSinkConfigAOutputReference.putPartitioning.parameter.value"></a>

- *Type:* <a href="#@cdktn/provider-cloudflare.pipelineSink.PipelineSinkConfigPartitioning">PipelineSinkConfigPartitioning</a>

---

##### `PutRollingPolicy` <a name="PutRollingPolicy" id="@cdktn/provider-cloudflare.pipelineSink.PipelineSinkConfigAOutputReference.putRollingPolicy"></a>

```go
func PutRollingPolicy(value PipelineSinkConfigRollingPolicy)
```

###### `value`<sup>Required</sup> <a name="value" id="@cdktn/provider-cloudflare.pipelineSink.PipelineSinkConfigAOutputReference.putRollingPolicy.parameter.value"></a>

- *Type:* <a href="#@cdktn/provider-cloudflare.pipelineSink.PipelineSinkConfigRollingPolicy">PipelineSinkConfigRollingPolicy</a>

---

##### `ResetCredentials` <a name="ResetCredentials" id="@cdktn/provider-cloudflare.pipelineSink.PipelineSinkConfigAOutputReference.resetCredentials"></a>

```go
func ResetCredentials()
```

##### `ResetFileNaming` <a name="ResetFileNaming" id="@cdktn/provider-cloudflare.pipelineSink.PipelineSinkConfigAOutputReference.resetFileNaming"></a>

```go
func ResetFileNaming()
```

##### `ResetJurisdiction` <a name="ResetJurisdiction" id="@cdktn/provider-cloudflare.pipelineSink.PipelineSinkConfigAOutputReference.resetJurisdiction"></a>

```go
func ResetJurisdiction()
```

##### `ResetNamespace` <a name="ResetNamespace" id="@cdktn/provider-cloudflare.pipelineSink.PipelineSinkConfigAOutputReference.resetNamespace"></a>

```go
func ResetNamespace()
```

##### `ResetPartitioning` <a name="ResetPartitioning" id="@cdktn/provider-cloudflare.pipelineSink.PipelineSinkConfigAOutputReference.resetPartitioning"></a>

```go
func ResetPartitioning()
```

##### `ResetPath` <a name="ResetPath" id="@cdktn/provider-cloudflare.pipelineSink.PipelineSinkConfigAOutputReference.resetPath"></a>

```go
func ResetPath()
```

##### `ResetRollingPolicy` <a name="ResetRollingPolicy" id="@cdktn/provider-cloudflare.pipelineSink.PipelineSinkConfigAOutputReference.resetRollingPolicy"></a>

```go
func ResetRollingPolicy()
```

##### `ResetTableName` <a name="ResetTableName" id="@cdktn/provider-cloudflare.pipelineSink.PipelineSinkConfigAOutputReference.resetTableName"></a>

```go
func ResetTableName()
```

##### `ResetToken` <a name="ResetToken" id="@cdktn/provider-cloudflare.pipelineSink.PipelineSinkConfigAOutputReference.resetToken"></a>

```go
func ResetToken()
```


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-cloudflare.pipelineSink.PipelineSinkConfigAOutputReference.property.creationStack">CreationStack</a></code> | <code>*[]*string</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktn/provider-cloudflare.pipelineSink.PipelineSinkConfigAOutputReference.property.fqn">Fqn</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktn/provider-cloudflare.pipelineSink.PipelineSinkConfigAOutputReference.property.credentials">Credentials</a></code> | <code><a href="#@cdktn/provider-cloudflare.pipelineSink.PipelineSinkConfigCredentialsOutputReference">PipelineSinkConfigCredentialsOutputReference</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-cloudflare.pipelineSink.PipelineSinkConfigAOutputReference.property.fileNaming">FileNaming</a></code> | <code><a href="#@cdktn/provider-cloudflare.pipelineSink.PipelineSinkConfigFileNamingOutputReference">PipelineSinkConfigFileNamingOutputReference</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-cloudflare.pipelineSink.PipelineSinkConfigAOutputReference.property.partitioning">Partitioning</a></code> | <code><a href="#@cdktn/provider-cloudflare.pipelineSink.PipelineSinkConfigPartitioningOutputReference">PipelineSinkConfigPartitioningOutputReference</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-cloudflare.pipelineSink.PipelineSinkConfigAOutputReference.property.rollingPolicy">RollingPolicy</a></code> | <code><a href="#@cdktn/provider-cloudflare.pipelineSink.PipelineSinkConfigRollingPolicyOutputReference">PipelineSinkConfigRollingPolicyOutputReference</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-cloudflare.pipelineSink.PipelineSinkConfigAOutputReference.property.accountIdInput">AccountIdInput</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktn/provider-cloudflare.pipelineSink.PipelineSinkConfigAOutputReference.property.bucketInput">BucketInput</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktn/provider-cloudflare.pipelineSink.PipelineSinkConfigAOutputReference.property.credentialsInput">CredentialsInput</a></code> | <code>interface{}</code> | *No description.* |
| <code><a href="#@cdktn/provider-cloudflare.pipelineSink.PipelineSinkConfigAOutputReference.property.fileNamingInput">FileNamingInput</a></code> | <code>interface{}</code> | *No description.* |
| <code><a href="#@cdktn/provider-cloudflare.pipelineSink.PipelineSinkConfigAOutputReference.property.jurisdictionInput">JurisdictionInput</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktn/provider-cloudflare.pipelineSink.PipelineSinkConfigAOutputReference.property.namespaceInput">NamespaceInput</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktn/provider-cloudflare.pipelineSink.PipelineSinkConfigAOutputReference.property.partitioningInput">PartitioningInput</a></code> | <code>interface{}</code> | *No description.* |
| <code><a href="#@cdktn/provider-cloudflare.pipelineSink.PipelineSinkConfigAOutputReference.property.pathInput">PathInput</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktn/provider-cloudflare.pipelineSink.PipelineSinkConfigAOutputReference.property.rollingPolicyInput">RollingPolicyInput</a></code> | <code>interface{}</code> | *No description.* |
| <code><a href="#@cdktn/provider-cloudflare.pipelineSink.PipelineSinkConfigAOutputReference.property.tableNameInput">TableNameInput</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktn/provider-cloudflare.pipelineSink.PipelineSinkConfigAOutputReference.property.tokenInput">TokenInput</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktn/provider-cloudflare.pipelineSink.PipelineSinkConfigAOutputReference.property.accountId">AccountId</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktn/provider-cloudflare.pipelineSink.PipelineSinkConfigAOutputReference.property.bucket">Bucket</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktn/provider-cloudflare.pipelineSink.PipelineSinkConfigAOutputReference.property.jurisdiction">Jurisdiction</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktn/provider-cloudflare.pipelineSink.PipelineSinkConfigAOutputReference.property.namespace">Namespace</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktn/provider-cloudflare.pipelineSink.PipelineSinkConfigAOutputReference.property.path">Path</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktn/provider-cloudflare.pipelineSink.PipelineSinkConfigAOutputReference.property.tableName">TableName</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktn/provider-cloudflare.pipelineSink.PipelineSinkConfigAOutputReference.property.token">Token</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktn/provider-cloudflare.pipelineSink.PipelineSinkConfigAOutputReference.property.internalValue">InternalValue</a></code> | <code>interface{}</code> | *No description.* |

---

##### `CreationStack`<sup>Required</sup> <a name="CreationStack" id="@cdktn/provider-cloudflare.pipelineSink.PipelineSinkConfigAOutputReference.property.creationStack"></a>

```go
func CreationStack() *[]*string
```

- *Type:* *[]*string

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `Fqn`<sup>Required</sup> <a name="Fqn" id="@cdktn/provider-cloudflare.pipelineSink.PipelineSinkConfigAOutputReference.property.fqn"></a>

```go
func Fqn() *string
```

- *Type:* *string

---

##### `Credentials`<sup>Required</sup> <a name="Credentials" id="@cdktn/provider-cloudflare.pipelineSink.PipelineSinkConfigAOutputReference.property.credentials"></a>

```go
func Credentials() PipelineSinkConfigCredentialsOutputReference
```

- *Type:* <a href="#@cdktn/provider-cloudflare.pipelineSink.PipelineSinkConfigCredentialsOutputReference">PipelineSinkConfigCredentialsOutputReference</a>

---

##### `FileNaming`<sup>Required</sup> <a name="FileNaming" id="@cdktn/provider-cloudflare.pipelineSink.PipelineSinkConfigAOutputReference.property.fileNaming"></a>

```go
func FileNaming() PipelineSinkConfigFileNamingOutputReference
```

- *Type:* <a href="#@cdktn/provider-cloudflare.pipelineSink.PipelineSinkConfigFileNamingOutputReference">PipelineSinkConfigFileNamingOutputReference</a>

---

##### `Partitioning`<sup>Required</sup> <a name="Partitioning" id="@cdktn/provider-cloudflare.pipelineSink.PipelineSinkConfigAOutputReference.property.partitioning"></a>

```go
func Partitioning() PipelineSinkConfigPartitioningOutputReference
```

- *Type:* <a href="#@cdktn/provider-cloudflare.pipelineSink.PipelineSinkConfigPartitioningOutputReference">PipelineSinkConfigPartitioningOutputReference</a>

---

##### `RollingPolicy`<sup>Required</sup> <a name="RollingPolicy" id="@cdktn/provider-cloudflare.pipelineSink.PipelineSinkConfigAOutputReference.property.rollingPolicy"></a>

```go
func RollingPolicy() PipelineSinkConfigRollingPolicyOutputReference
```

- *Type:* <a href="#@cdktn/provider-cloudflare.pipelineSink.PipelineSinkConfigRollingPolicyOutputReference">PipelineSinkConfigRollingPolicyOutputReference</a>

---

##### `AccountIdInput`<sup>Optional</sup> <a name="AccountIdInput" id="@cdktn/provider-cloudflare.pipelineSink.PipelineSinkConfigAOutputReference.property.accountIdInput"></a>

```go
func AccountIdInput() *string
```

- *Type:* *string

---

##### `BucketInput`<sup>Optional</sup> <a name="BucketInput" id="@cdktn/provider-cloudflare.pipelineSink.PipelineSinkConfigAOutputReference.property.bucketInput"></a>

```go
func BucketInput() *string
```

- *Type:* *string

---

##### `CredentialsInput`<sup>Optional</sup> <a name="CredentialsInput" id="@cdktn/provider-cloudflare.pipelineSink.PipelineSinkConfigAOutputReference.property.credentialsInput"></a>

```go
func CredentialsInput() interface{}
```

- *Type:* interface{}

---

##### `FileNamingInput`<sup>Optional</sup> <a name="FileNamingInput" id="@cdktn/provider-cloudflare.pipelineSink.PipelineSinkConfigAOutputReference.property.fileNamingInput"></a>

```go
func FileNamingInput() interface{}
```

- *Type:* interface{}

---

##### `JurisdictionInput`<sup>Optional</sup> <a name="JurisdictionInput" id="@cdktn/provider-cloudflare.pipelineSink.PipelineSinkConfigAOutputReference.property.jurisdictionInput"></a>

```go
func JurisdictionInput() *string
```

- *Type:* *string

---

##### `NamespaceInput`<sup>Optional</sup> <a name="NamespaceInput" id="@cdktn/provider-cloudflare.pipelineSink.PipelineSinkConfigAOutputReference.property.namespaceInput"></a>

```go
func NamespaceInput() *string
```

- *Type:* *string

---

##### `PartitioningInput`<sup>Optional</sup> <a name="PartitioningInput" id="@cdktn/provider-cloudflare.pipelineSink.PipelineSinkConfigAOutputReference.property.partitioningInput"></a>

```go
func PartitioningInput() interface{}
```

- *Type:* interface{}

---

##### `PathInput`<sup>Optional</sup> <a name="PathInput" id="@cdktn/provider-cloudflare.pipelineSink.PipelineSinkConfigAOutputReference.property.pathInput"></a>

```go
func PathInput() *string
```

- *Type:* *string

---

##### `RollingPolicyInput`<sup>Optional</sup> <a name="RollingPolicyInput" id="@cdktn/provider-cloudflare.pipelineSink.PipelineSinkConfigAOutputReference.property.rollingPolicyInput"></a>

```go
func RollingPolicyInput() interface{}
```

- *Type:* interface{}

---

##### `TableNameInput`<sup>Optional</sup> <a name="TableNameInput" id="@cdktn/provider-cloudflare.pipelineSink.PipelineSinkConfigAOutputReference.property.tableNameInput"></a>

```go
func TableNameInput() *string
```

- *Type:* *string

---

##### `TokenInput`<sup>Optional</sup> <a name="TokenInput" id="@cdktn/provider-cloudflare.pipelineSink.PipelineSinkConfigAOutputReference.property.tokenInput"></a>

```go
func TokenInput() *string
```

- *Type:* *string

---

##### `AccountId`<sup>Required</sup> <a name="AccountId" id="@cdktn/provider-cloudflare.pipelineSink.PipelineSinkConfigAOutputReference.property.accountId"></a>

```go
func AccountId() *string
```

- *Type:* *string

---

##### `Bucket`<sup>Required</sup> <a name="Bucket" id="@cdktn/provider-cloudflare.pipelineSink.PipelineSinkConfigAOutputReference.property.bucket"></a>

```go
func Bucket() *string
```

- *Type:* *string

---

##### `Jurisdiction`<sup>Required</sup> <a name="Jurisdiction" id="@cdktn/provider-cloudflare.pipelineSink.PipelineSinkConfigAOutputReference.property.jurisdiction"></a>

```go
func Jurisdiction() *string
```

- *Type:* *string

---

##### `Namespace`<sup>Required</sup> <a name="Namespace" id="@cdktn/provider-cloudflare.pipelineSink.PipelineSinkConfigAOutputReference.property.namespace"></a>

```go
func Namespace() *string
```

- *Type:* *string

---

##### `Path`<sup>Required</sup> <a name="Path" id="@cdktn/provider-cloudflare.pipelineSink.PipelineSinkConfigAOutputReference.property.path"></a>

```go
func Path() *string
```

- *Type:* *string

---

##### `TableName`<sup>Required</sup> <a name="TableName" id="@cdktn/provider-cloudflare.pipelineSink.PipelineSinkConfigAOutputReference.property.tableName"></a>

```go
func TableName() *string
```

- *Type:* *string

---

##### `Token`<sup>Required</sup> <a name="Token" id="@cdktn/provider-cloudflare.pipelineSink.PipelineSinkConfigAOutputReference.property.token"></a>

```go
func Token() *string
```

- *Type:* *string

---

##### `InternalValue`<sup>Optional</sup> <a name="InternalValue" id="@cdktn/provider-cloudflare.pipelineSink.PipelineSinkConfigAOutputReference.property.internalValue"></a>

```go
func InternalValue() interface{}
```

- *Type:* interface{}

---


### PipelineSinkConfigCredentialsOutputReference <a name="PipelineSinkConfigCredentialsOutputReference" id="@cdktn/provider-cloudflare.pipelineSink.PipelineSinkConfigCredentialsOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktn/provider-cloudflare.pipelineSink.PipelineSinkConfigCredentialsOutputReference.Initializer"></a>

```go
import "github.com/cdktn-io/cdktn-provider-cloudflare-go/cloudflare/v15/pipelinesink"

pipelinesink.NewPipelineSinkConfigCredentialsOutputReference(terraformResource IInterpolatingParent, terraformAttribute *string) PipelineSinkConfigCredentialsOutputReference
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-cloudflare.pipelineSink.PipelineSinkConfigCredentialsOutputReference.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>github.com/open-constructs/cdk-terrain-go/cdktn.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktn/provider-cloudflare.pipelineSink.PipelineSinkConfigCredentialsOutputReference.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>*string</code> | The attribute on the parent resource this class is referencing. |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktn/provider-cloudflare.pipelineSink.PipelineSinkConfigCredentialsOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* github.com/open-constructs/cdk-terrain-go/cdktn.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-cloudflare.pipelineSink.PipelineSinkConfigCredentialsOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* *string

The attribute on the parent resource this class is referencing.

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-cloudflare.pipelineSink.PipelineSinkConfigCredentialsOutputReference.computeFqn">ComputeFqn</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-cloudflare.pipelineSink.PipelineSinkConfigCredentialsOutputReference.getAnyMapAttribute">GetAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-cloudflare.pipelineSink.PipelineSinkConfigCredentialsOutputReference.getBooleanAttribute">GetBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-cloudflare.pipelineSink.PipelineSinkConfigCredentialsOutputReference.getBooleanMapAttribute">GetBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-cloudflare.pipelineSink.PipelineSinkConfigCredentialsOutputReference.getListAttribute">GetListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-cloudflare.pipelineSink.PipelineSinkConfigCredentialsOutputReference.getNumberAttribute">GetNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-cloudflare.pipelineSink.PipelineSinkConfigCredentialsOutputReference.getNumberListAttribute">GetNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-cloudflare.pipelineSink.PipelineSinkConfigCredentialsOutputReference.getNumberMapAttribute">GetNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-cloudflare.pipelineSink.PipelineSinkConfigCredentialsOutputReference.getStringAttribute">GetStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-cloudflare.pipelineSink.PipelineSinkConfigCredentialsOutputReference.getStringMapAttribute">GetStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-cloudflare.pipelineSink.PipelineSinkConfigCredentialsOutputReference.interpolationForAttribute">InterpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-cloudflare.pipelineSink.PipelineSinkConfigCredentialsOutputReference.resolve">Resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktn/provider-cloudflare.pipelineSink.PipelineSinkConfigCredentialsOutputReference.toString">ToString</a></code> | Return a string representation of this resolvable object. |

---

##### `ComputeFqn` <a name="ComputeFqn" id="@cdktn/provider-cloudflare.pipelineSink.PipelineSinkConfigCredentialsOutputReference.computeFqn"></a>

```go
func ComputeFqn() *string
```

##### `GetAnyMapAttribute` <a name="GetAnyMapAttribute" id="@cdktn/provider-cloudflare.pipelineSink.PipelineSinkConfigCredentialsOutputReference.getAnyMapAttribute"></a>

```go
func GetAnyMapAttribute(terraformAttribute *string) *map[string]interface{}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-cloudflare.pipelineSink.PipelineSinkConfigCredentialsOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetBooleanAttribute` <a name="GetBooleanAttribute" id="@cdktn/provider-cloudflare.pipelineSink.PipelineSinkConfigCredentialsOutputReference.getBooleanAttribute"></a>

```go
func GetBooleanAttribute(terraformAttribute *string) IResolvable
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-cloudflare.pipelineSink.PipelineSinkConfigCredentialsOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetBooleanMapAttribute` <a name="GetBooleanMapAttribute" id="@cdktn/provider-cloudflare.pipelineSink.PipelineSinkConfigCredentialsOutputReference.getBooleanMapAttribute"></a>

```go
func GetBooleanMapAttribute(terraformAttribute *string) *map[string]*bool
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-cloudflare.pipelineSink.PipelineSinkConfigCredentialsOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetListAttribute` <a name="GetListAttribute" id="@cdktn/provider-cloudflare.pipelineSink.PipelineSinkConfigCredentialsOutputReference.getListAttribute"></a>

```go
func GetListAttribute(terraformAttribute *string) *[]*string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-cloudflare.pipelineSink.PipelineSinkConfigCredentialsOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberAttribute` <a name="GetNumberAttribute" id="@cdktn/provider-cloudflare.pipelineSink.PipelineSinkConfigCredentialsOutputReference.getNumberAttribute"></a>

```go
func GetNumberAttribute(terraformAttribute *string) *f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-cloudflare.pipelineSink.PipelineSinkConfigCredentialsOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberListAttribute` <a name="GetNumberListAttribute" id="@cdktn/provider-cloudflare.pipelineSink.PipelineSinkConfigCredentialsOutputReference.getNumberListAttribute"></a>

```go
func GetNumberListAttribute(terraformAttribute *string) *[]*f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-cloudflare.pipelineSink.PipelineSinkConfigCredentialsOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberMapAttribute` <a name="GetNumberMapAttribute" id="@cdktn/provider-cloudflare.pipelineSink.PipelineSinkConfigCredentialsOutputReference.getNumberMapAttribute"></a>

```go
func GetNumberMapAttribute(terraformAttribute *string) *map[string]*f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-cloudflare.pipelineSink.PipelineSinkConfigCredentialsOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetStringAttribute` <a name="GetStringAttribute" id="@cdktn/provider-cloudflare.pipelineSink.PipelineSinkConfigCredentialsOutputReference.getStringAttribute"></a>

```go
func GetStringAttribute(terraformAttribute *string) *string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-cloudflare.pipelineSink.PipelineSinkConfigCredentialsOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetStringMapAttribute` <a name="GetStringMapAttribute" id="@cdktn/provider-cloudflare.pipelineSink.PipelineSinkConfigCredentialsOutputReference.getStringMapAttribute"></a>

```go
func GetStringMapAttribute(terraformAttribute *string) *map[string]*string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-cloudflare.pipelineSink.PipelineSinkConfigCredentialsOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `InterpolationForAttribute` <a name="InterpolationForAttribute" id="@cdktn/provider-cloudflare.pipelineSink.PipelineSinkConfigCredentialsOutputReference.interpolationForAttribute"></a>

```go
func InterpolationForAttribute(property *string) IResolvable
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktn/provider-cloudflare.pipelineSink.PipelineSinkConfigCredentialsOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* *string

---

##### `Resolve` <a name="Resolve" id="@cdktn/provider-cloudflare.pipelineSink.PipelineSinkConfigCredentialsOutputReference.resolve"></a>

```go
func Resolve(_context IResolveContext) interface{}
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktn/provider-cloudflare.pipelineSink.PipelineSinkConfigCredentialsOutputReference.resolve.parameter._context"></a>

- *Type:* github.com/open-constructs/cdk-terrain-go/cdktn.IResolveContext

---

##### `ToString` <a name="ToString" id="@cdktn/provider-cloudflare.pipelineSink.PipelineSinkConfigCredentialsOutputReference.toString"></a>

```go
func ToString() *string
```

Return a string representation of this resolvable object.

Returns a reversible string representation.


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-cloudflare.pipelineSink.PipelineSinkConfigCredentialsOutputReference.property.creationStack">CreationStack</a></code> | <code>*[]*string</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktn/provider-cloudflare.pipelineSink.PipelineSinkConfigCredentialsOutputReference.property.fqn">Fqn</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktn/provider-cloudflare.pipelineSink.PipelineSinkConfigCredentialsOutputReference.property.accessKeyIdInput">AccessKeyIdInput</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktn/provider-cloudflare.pipelineSink.PipelineSinkConfigCredentialsOutputReference.property.secretAccessKeyInput">SecretAccessKeyInput</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktn/provider-cloudflare.pipelineSink.PipelineSinkConfigCredentialsOutputReference.property.accessKeyId">AccessKeyId</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktn/provider-cloudflare.pipelineSink.PipelineSinkConfigCredentialsOutputReference.property.secretAccessKey">SecretAccessKey</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktn/provider-cloudflare.pipelineSink.PipelineSinkConfigCredentialsOutputReference.property.internalValue">InternalValue</a></code> | <code>interface{}</code> | *No description.* |

---

##### `CreationStack`<sup>Required</sup> <a name="CreationStack" id="@cdktn/provider-cloudflare.pipelineSink.PipelineSinkConfigCredentialsOutputReference.property.creationStack"></a>

```go
func CreationStack() *[]*string
```

- *Type:* *[]*string

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `Fqn`<sup>Required</sup> <a name="Fqn" id="@cdktn/provider-cloudflare.pipelineSink.PipelineSinkConfigCredentialsOutputReference.property.fqn"></a>

```go
func Fqn() *string
```

- *Type:* *string

---

##### `AccessKeyIdInput`<sup>Optional</sup> <a name="AccessKeyIdInput" id="@cdktn/provider-cloudflare.pipelineSink.PipelineSinkConfigCredentialsOutputReference.property.accessKeyIdInput"></a>

```go
func AccessKeyIdInput() *string
```

- *Type:* *string

---

##### `SecretAccessKeyInput`<sup>Optional</sup> <a name="SecretAccessKeyInput" id="@cdktn/provider-cloudflare.pipelineSink.PipelineSinkConfigCredentialsOutputReference.property.secretAccessKeyInput"></a>

```go
func SecretAccessKeyInput() *string
```

- *Type:* *string

---

##### `AccessKeyId`<sup>Required</sup> <a name="AccessKeyId" id="@cdktn/provider-cloudflare.pipelineSink.PipelineSinkConfigCredentialsOutputReference.property.accessKeyId"></a>

```go
func AccessKeyId() *string
```

- *Type:* *string

---

##### `SecretAccessKey`<sup>Required</sup> <a name="SecretAccessKey" id="@cdktn/provider-cloudflare.pipelineSink.PipelineSinkConfigCredentialsOutputReference.property.secretAccessKey"></a>

```go
func SecretAccessKey() *string
```

- *Type:* *string

---

##### `InternalValue`<sup>Optional</sup> <a name="InternalValue" id="@cdktn/provider-cloudflare.pipelineSink.PipelineSinkConfigCredentialsOutputReference.property.internalValue"></a>

```go
func InternalValue() interface{}
```

- *Type:* interface{}

---


### PipelineSinkConfigFileNamingOutputReference <a name="PipelineSinkConfigFileNamingOutputReference" id="@cdktn/provider-cloudflare.pipelineSink.PipelineSinkConfigFileNamingOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktn/provider-cloudflare.pipelineSink.PipelineSinkConfigFileNamingOutputReference.Initializer"></a>

```go
import "github.com/cdktn-io/cdktn-provider-cloudflare-go/cloudflare/v15/pipelinesink"

pipelinesink.NewPipelineSinkConfigFileNamingOutputReference(terraformResource IInterpolatingParent, terraformAttribute *string) PipelineSinkConfigFileNamingOutputReference
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-cloudflare.pipelineSink.PipelineSinkConfigFileNamingOutputReference.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>github.com/open-constructs/cdk-terrain-go/cdktn.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktn/provider-cloudflare.pipelineSink.PipelineSinkConfigFileNamingOutputReference.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>*string</code> | The attribute on the parent resource this class is referencing. |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktn/provider-cloudflare.pipelineSink.PipelineSinkConfigFileNamingOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* github.com/open-constructs/cdk-terrain-go/cdktn.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-cloudflare.pipelineSink.PipelineSinkConfigFileNamingOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* *string

The attribute on the parent resource this class is referencing.

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-cloudflare.pipelineSink.PipelineSinkConfigFileNamingOutputReference.computeFqn">ComputeFqn</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-cloudflare.pipelineSink.PipelineSinkConfigFileNamingOutputReference.getAnyMapAttribute">GetAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-cloudflare.pipelineSink.PipelineSinkConfigFileNamingOutputReference.getBooleanAttribute">GetBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-cloudflare.pipelineSink.PipelineSinkConfigFileNamingOutputReference.getBooleanMapAttribute">GetBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-cloudflare.pipelineSink.PipelineSinkConfigFileNamingOutputReference.getListAttribute">GetListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-cloudflare.pipelineSink.PipelineSinkConfigFileNamingOutputReference.getNumberAttribute">GetNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-cloudflare.pipelineSink.PipelineSinkConfigFileNamingOutputReference.getNumberListAttribute">GetNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-cloudflare.pipelineSink.PipelineSinkConfigFileNamingOutputReference.getNumberMapAttribute">GetNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-cloudflare.pipelineSink.PipelineSinkConfigFileNamingOutputReference.getStringAttribute">GetStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-cloudflare.pipelineSink.PipelineSinkConfigFileNamingOutputReference.getStringMapAttribute">GetStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-cloudflare.pipelineSink.PipelineSinkConfigFileNamingOutputReference.interpolationForAttribute">InterpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-cloudflare.pipelineSink.PipelineSinkConfigFileNamingOutputReference.resolve">Resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktn/provider-cloudflare.pipelineSink.PipelineSinkConfigFileNamingOutputReference.toString">ToString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktn/provider-cloudflare.pipelineSink.PipelineSinkConfigFileNamingOutputReference.resetPrefix">ResetPrefix</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-cloudflare.pipelineSink.PipelineSinkConfigFileNamingOutputReference.resetStrategy">ResetStrategy</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-cloudflare.pipelineSink.PipelineSinkConfigFileNamingOutputReference.resetSuffix">ResetSuffix</a></code> | *No description.* |

---

##### `ComputeFqn` <a name="ComputeFqn" id="@cdktn/provider-cloudflare.pipelineSink.PipelineSinkConfigFileNamingOutputReference.computeFqn"></a>

```go
func ComputeFqn() *string
```

##### `GetAnyMapAttribute` <a name="GetAnyMapAttribute" id="@cdktn/provider-cloudflare.pipelineSink.PipelineSinkConfigFileNamingOutputReference.getAnyMapAttribute"></a>

```go
func GetAnyMapAttribute(terraformAttribute *string) *map[string]interface{}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-cloudflare.pipelineSink.PipelineSinkConfigFileNamingOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetBooleanAttribute` <a name="GetBooleanAttribute" id="@cdktn/provider-cloudflare.pipelineSink.PipelineSinkConfigFileNamingOutputReference.getBooleanAttribute"></a>

```go
func GetBooleanAttribute(terraformAttribute *string) IResolvable
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-cloudflare.pipelineSink.PipelineSinkConfigFileNamingOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetBooleanMapAttribute` <a name="GetBooleanMapAttribute" id="@cdktn/provider-cloudflare.pipelineSink.PipelineSinkConfigFileNamingOutputReference.getBooleanMapAttribute"></a>

```go
func GetBooleanMapAttribute(terraformAttribute *string) *map[string]*bool
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-cloudflare.pipelineSink.PipelineSinkConfigFileNamingOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetListAttribute` <a name="GetListAttribute" id="@cdktn/provider-cloudflare.pipelineSink.PipelineSinkConfigFileNamingOutputReference.getListAttribute"></a>

```go
func GetListAttribute(terraformAttribute *string) *[]*string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-cloudflare.pipelineSink.PipelineSinkConfigFileNamingOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberAttribute` <a name="GetNumberAttribute" id="@cdktn/provider-cloudflare.pipelineSink.PipelineSinkConfigFileNamingOutputReference.getNumberAttribute"></a>

```go
func GetNumberAttribute(terraformAttribute *string) *f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-cloudflare.pipelineSink.PipelineSinkConfigFileNamingOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberListAttribute` <a name="GetNumberListAttribute" id="@cdktn/provider-cloudflare.pipelineSink.PipelineSinkConfigFileNamingOutputReference.getNumberListAttribute"></a>

```go
func GetNumberListAttribute(terraformAttribute *string) *[]*f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-cloudflare.pipelineSink.PipelineSinkConfigFileNamingOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberMapAttribute` <a name="GetNumberMapAttribute" id="@cdktn/provider-cloudflare.pipelineSink.PipelineSinkConfigFileNamingOutputReference.getNumberMapAttribute"></a>

```go
func GetNumberMapAttribute(terraformAttribute *string) *map[string]*f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-cloudflare.pipelineSink.PipelineSinkConfigFileNamingOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetStringAttribute` <a name="GetStringAttribute" id="@cdktn/provider-cloudflare.pipelineSink.PipelineSinkConfigFileNamingOutputReference.getStringAttribute"></a>

```go
func GetStringAttribute(terraformAttribute *string) *string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-cloudflare.pipelineSink.PipelineSinkConfigFileNamingOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetStringMapAttribute` <a name="GetStringMapAttribute" id="@cdktn/provider-cloudflare.pipelineSink.PipelineSinkConfigFileNamingOutputReference.getStringMapAttribute"></a>

```go
func GetStringMapAttribute(terraformAttribute *string) *map[string]*string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-cloudflare.pipelineSink.PipelineSinkConfigFileNamingOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `InterpolationForAttribute` <a name="InterpolationForAttribute" id="@cdktn/provider-cloudflare.pipelineSink.PipelineSinkConfigFileNamingOutputReference.interpolationForAttribute"></a>

```go
func InterpolationForAttribute(property *string) IResolvable
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktn/provider-cloudflare.pipelineSink.PipelineSinkConfigFileNamingOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* *string

---

##### `Resolve` <a name="Resolve" id="@cdktn/provider-cloudflare.pipelineSink.PipelineSinkConfigFileNamingOutputReference.resolve"></a>

```go
func Resolve(_context IResolveContext) interface{}
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktn/provider-cloudflare.pipelineSink.PipelineSinkConfigFileNamingOutputReference.resolve.parameter._context"></a>

- *Type:* github.com/open-constructs/cdk-terrain-go/cdktn.IResolveContext

---

##### `ToString` <a name="ToString" id="@cdktn/provider-cloudflare.pipelineSink.PipelineSinkConfigFileNamingOutputReference.toString"></a>

```go
func ToString() *string
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `ResetPrefix` <a name="ResetPrefix" id="@cdktn/provider-cloudflare.pipelineSink.PipelineSinkConfigFileNamingOutputReference.resetPrefix"></a>

```go
func ResetPrefix()
```

##### `ResetStrategy` <a name="ResetStrategy" id="@cdktn/provider-cloudflare.pipelineSink.PipelineSinkConfigFileNamingOutputReference.resetStrategy"></a>

```go
func ResetStrategy()
```

##### `ResetSuffix` <a name="ResetSuffix" id="@cdktn/provider-cloudflare.pipelineSink.PipelineSinkConfigFileNamingOutputReference.resetSuffix"></a>

```go
func ResetSuffix()
```


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-cloudflare.pipelineSink.PipelineSinkConfigFileNamingOutputReference.property.creationStack">CreationStack</a></code> | <code>*[]*string</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktn/provider-cloudflare.pipelineSink.PipelineSinkConfigFileNamingOutputReference.property.fqn">Fqn</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktn/provider-cloudflare.pipelineSink.PipelineSinkConfigFileNamingOutputReference.property.prefixInput">PrefixInput</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktn/provider-cloudflare.pipelineSink.PipelineSinkConfigFileNamingOutputReference.property.strategyInput">StrategyInput</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktn/provider-cloudflare.pipelineSink.PipelineSinkConfigFileNamingOutputReference.property.suffixInput">SuffixInput</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktn/provider-cloudflare.pipelineSink.PipelineSinkConfigFileNamingOutputReference.property.prefix">Prefix</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktn/provider-cloudflare.pipelineSink.PipelineSinkConfigFileNamingOutputReference.property.strategy">Strategy</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktn/provider-cloudflare.pipelineSink.PipelineSinkConfigFileNamingOutputReference.property.suffix">Suffix</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktn/provider-cloudflare.pipelineSink.PipelineSinkConfigFileNamingOutputReference.property.internalValue">InternalValue</a></code> | <code>interface{}</code> | *No description.* |

---

##### `CreationStack`<sup>Required</sup> <a name="CreationStack" id="@cdktn/provider-cloudflare.pipelineSink.PipelineSinkConfigFileNamingOutputReference.property.creationStack"></a>

```go
func CreationStack() *[]*string
```

- *Type:* *[]*string

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `Fqn`<sup>Required</sup> <a name="Fqn" id="@cdktn/provider-cloudflare.pipelineSink.PipelineSinkConfigFileNamingOutputReference.property.fqn"></a>

```go
func Fqn() *string
```

- *Type:* *string

---

##### `PrefixInput`<sup>Optional</sup> <a name="PrefixInput" id="@cdktn/provider-cloudflare.pipelineSink.PipelineSinkConfigFileNamingOutputReference.property.prefixInput"></a>

```go
func PrefixInput() *string
```

- *Type:* *string

---

##### `StrategyInput`<sup>Optional</sup> <a name="StrategyInput" id="@cdktn/provider-cloudflare.pipelineSink.PipelineSinkConfigFileNamingOutputReference.property.strategyInput"></a>

```go
func StrategyInput() *string
```

- *Type:* *string

---

##### `SuffixInput`<sup>Optional</sup> <a name="SuffixInput" id="@cdktn/provider-cloudflare.pipelineSink.PipelineSinkConfigFileNamingOutputReference.property.suffixInput"></a>

```go
func SuffixInput() *string
```

- *Type:* *string

---

##### `Prefix`<sup>Required</sup> <a name="Prefix" id="@cdktn/provider-cloudflare.pipelineSink.PipelineSinkConfigFileNamingOutputReference.property.prefix"></a>

```go
func Prefix() *string
```

- *Type:* *string

---

##### `Strategy`<sup>Required</sup> <a name="Strategy" id="@cdktn/provider-cloudflare.pipelineSink.PipelineSinkConfigFileNamingOutputReference.property.strategy"></a>

```go
func Strategy() *string
```

- *Type:* *string

---

##### `Suffix`<sup>Required</sup> <a name="Suffix" id="@cdktn/provider-cloudflare.pipelineSink.PipelineSinkConfigFileNamingOutputReference.property.suffix"></a>

```go
func Suffix() *string
```

- *Type:* *string

---

##### `InternalValue`<sup>Optional</sup> <a name="InternalValue" id="@cdktn/provider-cloudflare.pipelineSink.PipelineSinkConfigFileNamingOutputReference.property.internalValue"></a>

```go
func InternalValue() interface{}
```

- *Type:* interface{}

---


### PipelineSinkConfigPartitioningOutputReference <a name="PipelineSinkConfigPartitioningOutputReference" id="@cdktn/provider-cloudflare.pipelineSink.PipelineSinkConfigPartitioningOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktn/provider-cloudflare.pipelineSink.PipelineSinkConfigPartitioningOutputReference.Initializer"></a>

```go
import "github.com/cdktn-io/cdktn-provider-cloudflare-go/cloudflare/v15/pipelinesink"

pipelinesink.NewPipelineSinkConfigPartitioningOutputReference(terraformResource IInterpolatingParent, terraformAttribute *string) PipelineSinkConfigPartitioningOutputReference
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-cloudflare.pipelineSink.PipelineSinkConfigPartitioningOutputReference.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>github.com/open-constructs/cdk-terrain-go/cdktn.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktn/provider-cloudflare.pipelineSink.PipelineSinkConfigPartitioningOutputReference.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>*string</code> | The attribute on the parent resource this class is referencing. |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktn/provider-cloudflare.pipelineSink.PipelineSinkConfigPartitioningOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* github.com/open-constructs/cdk-terrain-go/cdktn.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-cloudflare.pipelineSink.PipelineSinkConfigPartitioningOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* *string

The attribute on the parent resource this class is referencing.

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-cloudflare.pipelineSink.PipelineSinkConfigPartitioningOutputReference.computeFqn">ComputeFqn</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-cloudflare.pipelineSink.PipelineSinkConfigPartitioningOutputReference.getAnyMapAttribute">GetAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-cloudflare.pipelineSink.PipelineSinkConfigPartitioningOutputReference.getBooleanAttribute">GetBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-cloudflare.pipelineSink.PipelineSinkConfigPartitioningOutputReference.getBooleanMapAttribute">GetBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-cloudflare.pipelineSink.PipelineSinkConfigPartitioningOutputReference.getListAttribute">GetListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-cloudflare.pipelineSink.PipelineSinkConfigPartitioningOutputReference.getNumberAttribute">GetNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-cloudflare.pipelineSink.PipelineSinkConfigPartitioningOutputReference.getNumberListAttribute">GetNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-cloudflare.pipelineSink.PipelineSinkConfigPartitioningOutputReference.getNumberMapAttribute">GetNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-cloudflare.pipelineSink.PipelineSinkConfigPartitioningOutputReference.getStringAttribute">GetStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-cloudflare.pipelineSink.PipelineSinkConfigPartitioningOutputReference.getStringMapAttribute">GetStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-cloudflare.pipelineSink.PipelineSinkConfigPartitioningOutputReference.interpolationForAttribute">InterpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-cloudflare.pipelineSink.PipelineSinkConfigPartitioningOutputReference.resolve">Resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktn/provider-cloudflare.pipelineSink.PipelineSinkConfigPartitioningOutputReference.toString">ToString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktn/provider-cloudflare.pipelineSink.PipelineSinkConfigPartitioningOutputReference.resetTimePattern">ResetTimePattern</a></code> | *No description.* |

---

##### `ComputeFqn` <a name="ComputeFqn" id="@cdktn/provider-cloudflare.pipelineSink.PipelineSinkConfigPartitioningOutputReference.computeFqn"></a>

```go
func ComputeFqn() *string
```

##### `GetAnyMapAttribute` <a name="GetAnyMapAttribute" id="@cdktn/provider-cloudflare.pipelineSink.PipelineSinkConfigPartitioningOutputReference.getAnyMapAttribute"></a>

```go
func GetAnyMapAttribute(terraformAttribute *string) *map[string]interface{}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-cloudflare.pipelineSink.PipelineSinkConfigPartitioningOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetBooleanAttribute` <a name="GetBooleanAttribute" id="@cdktn/provider-cloudflare.pipelineSink.PipelineSinkConfigPartitioningOutputReference.getBooleanAttribute"></a>

```go
func GetBooleanAttribute(terraformAttribute *string) IResolvable
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-cloudflare.pipelineSink.PipelineSinkConfigPartitioningOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetBooleanMapAttribute` <a name="GetBooleanMapAttribute" id="@cdktn/provider-cloudflare.pipelineSink.PipelineSinkConfigPartitioningOutputReference.getBooleanMapAttribute"></a>

```go
func GetBooleanMapAttribute(terraformAttribute *string) *map[string]*bool
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-cloudflare.pipelineSink.PipelineSinkConfigPartitioningOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetListAttribute` <a name="GetListAttribute" id="@cdktn/provider-cloudflare.pipelineSink.PipelineSinkConfigPartitioningOutputReference.getListAttribute"></a>

```go
func GetListAttribute(terraformAttribute *string) *[]*string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-cloudflare.pipelineSink.PipelineSinkConfigPartitioningOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberAttribute` <a name="GetNumberAttribute" id="@cdktn/provider-cloudflare.pipelineSink.PipelineSinkConfigPartitioningOutputReference.getNumberAttribute"></a>

```go
func GetNumberAttribute(terraformAttribute *string) *f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-cloudflare.pipelineSink.PipelineSinkConfigPartitioningOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberListAttribute` <a name="GetNumberListAttribute" id="@cdktn/provider-cloudflare.pipelineSink.PipelineSinkConfigPartitioningOutputReference.getNumberListAttribute"></a>

```go
func GetNumberListAttribute(terraformAttribute *string) *[]*f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-cloudflare.pipelineSink.PipelineSinkConfigPartitioningOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberMapAttribute` <a name="GetNumberMapAttribute" id="@cdktn/provider-cloudflare.pipelineSink.PipelineSinkConfigPartitioningOutputReference.getNumberMapAttribute"></a>

```go
func GetNumberMapAttribute(terraformAttribute *string) *map[string]*f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-cloudflare.pipelineSink.PipelineSinkConfigPartitioningOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetStringAttribute` <a name="GetStringAttribute" id="@cdktn/provider-cloudflare.pipelineSink.PipelineSinkConfigPartitioningOutputReference.getStringAttribute"></a>

```go
func GetStringAttribute(terraformAttribute *string) *string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-cloudflare.pipelineSink.PipelineSinkConfigPartitioningOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetStringMapAttribute` <a name="GetStringMapAttribute" id="@cdktn/provider-cloudflare.pipelineSink.PipelineSinkConfigPartitioningOutputReference.getStringMapAttribute"></a>

```go
func GetStringMapAttribute(terraformAttribute *string) *map[string]*string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-cloudflare.pipelineSink.PipelineSinkConfigPartitioningOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `InterpolationForAttribute` <a name="InterpolationForAttribute" id="@cdktn/provider-cloudflare.pipelineSink.PipelineSinkConfigPartitioningOutputReference.interpolationForAttribute"></a>

```go
func InterpolationForAttribute(property *string) IResolvable
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktn/provider-cloudflare.pipelineSink.PipelineSinkConfigPartitioningOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* *string

---

##### `Resolve` <a name="Resolve" id="@cdktn/provider-cloudflare.pipelineSink.PipelineSinkConfigPartitioningOutputReference.resolve"></a>

```go
func Resolve(_context IResolveContext) interface{}
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktn/provider-cloudflare.pipelineSink.PipelineSinkConfigPartitioningOutputReference.resolve.parameter._context"></a>

- *Type:* github.com/open-constructs/cdk-terrain-go/cdktn.IResolveContext

---

##### `ToString` <a name="ToString" id="@cdktn/provider-cloudflare.pipelineSink.PipelineSinkConfigPartitioningOutputReference.toString"></a>

```go
func ToString() *string
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `ResetTimePattern` <a name="ResetTimePattern" id="@cdktn/provider-cloudflare.pipelineSink.PipelineSinkConfigPartitioningOutputReference.resetTimePattern"></a>

```go
func ResetTimePattern()
```


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-cloudflare.pipelineSink.PipelineSinkConfigPartitioningOutputReference.property.creationStack">CreationStack</a></code> | <code>*[]*string</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktn/provider-cloudflare.pipelineSink.PipelineSinkConfigPartitioningOutputReference.property.fqn">Fqn</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktn/provider-cloudflare.pipelineSink.PipelineSinkConfigPartitioningOutputReference.property.timePatternInput">TimePatternInput</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktn/provider-cloudflare.pipelineSink.PipelineSinkConfigPartitioningOutputReference.property.timePattern">TimePattern</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktn/provider-cloudflare.pipelineSink.PipelineSinkConfigPartitioningOutputReference.property.internalValue">InternalValue</a></code> | <code>interface{}</code> | *No description.* |

---

##### `CreationStack`<sup>Required</sup> <a name="CreationStack" id="@cdktn/provider-cloudflare.pipelineSink.PipelineSinkConfigPartitioningOutputReference.property.creationStack"></a>

```go
func CreationStack() *[]*string
```

- *Type:* *[]*string

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `Fqn`<sup>Required</sup> <a name="Fqn" id="@cdktn/provider-cloudflare.pipelineSink.PipelineSinkConfigPartitioningOutputReference.property.fqn"></a>

```go
func Fqn() *string
```

- *Type:* *string

---

##### `TimePatternInput`<sup>Optional</sup> <a name="TimePatternInput" id="@cdktn/provider-cloudflare.pipelineSink.PipelineSinkConfigPartitioningOutputReference.property.timePatternInput"></a>

```go
func TimePatternInput() *string
```

- *Type:* *string

---

##### `TimePattern`<sup>Required</sup> <a name="TimePattern" id="@cdktn/provider-cloudflare.pipelineSink.PipelineSinkConfigPartitioningOutputReference.property.timePattern"></a>

```go
func TimePattern() *string
```

- *Type:* *string

---

##### `InternalValue`<sup>Optional</sup> <a name="InternalValue" id="@cdktn/provider-cloudflare.pipelineSink.PipelineSinkConfigPartitioningOutputReference.property.internalValue"></a>

```go
func InternalValue() interface{}
```

- *Type:* interface{}

---


### PipelineSinkConfigRollingPolicyOutputReference <a name="PipelineSinkConfigRollingPolicyOutputReference" id="@cdktn/provider-cloudflare.pipelineSink.PipelineSinkConfigRollingPolicyOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktn/provider-cloudflare.pipelineSink.PipelineSinkConfigRollingPolicyOutputReference.Initializer"></a>

```go
import "github.com/cdktn-io/cdktn-provider-cloudflare-go/cloudflare/v15/pipelinesink"

pipelinesink.NewPipelineSinkConfigRollingPolicyOutputReference(terraformResource IInterpolatingParent, terraformAttribute *string) PipelineSinkConfigRollingPolicyOutputReference
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-cloudflare.pipelineSink.PipelineSinkConfigRollingPolicyOutputReference.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>github.com/open-constructs/cdk-terrain-go/cdktn.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktn/provider-cloudflare.pipelineSink.PipelineSinkConfigRollingPolicyOutputReference.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>*string</code> | The attribute on the parent resource this class is referencing. |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktn/provider-cloudflare.pipelineSink.PipelineSinkConfigRollingPolicyOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* github.com/open-constructs/cdk-terrain-go/cdktn.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-cloudflare.pipelineSink.PipelineSinkConfigRollingPolicyOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* *string

The attribute on the parent resource this class is referencing.

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-cloudflare.pipelineSink.PipelineSinkConfigRollingPolicyOutputReference.computeFqn">ComputeFqn</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-cloudflare.pipelineSink.PipelineSinkConfigRollingPolicyOutputReference.getAnyMapAttribute">GetAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-cloudflare.pipelineSink.PipelineSinkConfigRollingPolicyOutputReference.getBooleanAttribute">GetBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-cloudflare.pipelineSink.PipelineSinkConfigRollingPolicyOutputReference.getBooleanMapAttribute">GetBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-cloudflare.pipelineSink.PipelineSinkConfigRollingPolicyOutputReference.getListAttribute">GetListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-cloudflare.pipelineSink.PipelineSinkConfigRollingPolicyOutputReference.getNumberAttribute">GetNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-cloudflare.pipelineSink.PipelineSinkConfigRollingPolicyOutputReference.getNumberListAttribute">GetNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-cloudflare.pipelineSink.PipelineSinkConfigRollingPolicyOutputReference.getNumberMapAttribute">GetNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-cloudflare.pipelineSink.PipelineSinkConfigRollingPolicyOutputReference.getStringAttribute">GetStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-cloudflare.pipelineSink.PipelineSinkConfigRollingPolicyOutputReference.getStringMapAttribute">GetStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-cloudflare.pipelineSink.PipelineSinkConfigRollingPolicyOutputReference.interpolationForAttribute">InterpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-cloudflare.pipelineSink.PipelineSinkConfigRollingPolicyOutputReference.resolve">Resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktn/provider-cloudflare.pipelineSink.PipelineSinkConfigRollingPolicyOutputReference.toString">ToString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktn/provider-cloudflare.pipelineSink.PipelineSinkConfigRollingPolicyOutputReference.resetFileSizeBytes">ResetFileSizeBytes</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-cloudflare.pipelineSink.PipelineSinkConfigRollingPolicyOutputReference.resetInactivitySeconds">ResetInactivitySeconds</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-cloudflare.pipelineSink.PipelineSinkConfigRollingPolicyOutputReference.resetIntervalSeconds">ResetIntervalSeconds</a></code> | *No description.* |

---

##### `ComputeFqn` <a name="ComputeFqn" id="@cdktn/provider-cloudflare.pipelineSink.PipelineSinkConfigRollingPolicyOutputReference.computeFqn"></a>

```go
func ComputeFqn() *string
```

##### `GetAnyMapAttribute` <a name="GetAnyMapAttribute" id="@cdktn/provider-cloudflare.pipelineSink.PipelineSinkConfigRollingPolicyOutputReference.getAnyMapAttribute"></a>

```go
func GetAnyMapAttribute(terraformAttribute *string) *map[string]interface{}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-cloudflare.pipelineSink.PipelineSinkConfigRollingPolicyOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetBooleanAttribute` <a name="GetBooleanAttribute" id="@cdktn/provider-cloudflare.pipelineSink.PipelineSinkConfigRollingPolicyOutputReference.getBooleanAttribute"></a>

```go
func GetBooleanAttribute(terraformAttribute *string) IResolvable
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-cloudflare.pipelineSink.PipelineSinkConfigRollingPolicyOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetBooleanMapAttribute` <a name="GetBooleanMapAttribute" id="@cdktn/provider-cloudflare.pipelineSink.PipelineSinkConfigRollingPolicyOutputReference.getBooleanMapAttribute"></a>

```go
func GetBooleanMapAttribute(terraformAttribute *string) *map[string]*bool
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-cloudflare.pipelineSink.PipelineSinkConfigRollingPolicyOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetListAttribute` <a name="GetListAttribute" id="@cdktn/provider-cloudflare.pipelineSink.PipelineSinkConfigRollingPolicyOutputReference.getListAttribute"></a>

```go
func GetListAttribute(terraformAttribute *string) *[]*string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-cloudflare.pipelineSink.PipelineSinkConfigRollingPolicyOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberAttribute` <a name="GetNumberAttribute" id="@cdktn/provider-cloudflare.pipelineSink.PipelineSinkConfigRollingPolicyOutputReference.getNumberAttribute"></a>

```go
func GetNumberAttribute(terraformAttribute *string) *f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-cloudflare.pipelineSink.PipelineSinkConfigRollingPolicyOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberListAttribute` <a name="GetNumberListAttribute" id="@cdktn/provider-cloudflare.pipelineSink.PipelineSinkConfigRollingPolicyOutputReference.getNumberListAttribute"></a>

```go
func GetNumberListAttribute(terraformAttribute *string) *[]*f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-cloudflare.pipelineSink.PipelineSinkConfigRollingPolicyOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberMapAttribute` <a name="GetNumberMapAttribute" id="@cdktn/provider-cloudflare.pipelineSink.PipelineSinkConfigRollingPolicyOutputReference.getNumberMapAttribute"></a>

```go
func GetNumberMapAttribute(terraformAttribute *string) *map[string]*f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-cloudflare.pipelineSink.PipelineSinkConfigRollingPolicyOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetStringAttribute` <a name="GetStringAttribute" id="@cdktn/provider-cloudflare.pipelineSink.PipelineSinkConfigRollingPolicyOutputReference.getStringAttribute"></a>

```go
func GetStringAttribute(terraformAttribute *string) *string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-cloudflare.pipelineSink.PipelineSinkConfigRollingPolicyOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetStringMapAttribute` <a name="GetStringMapAttribute" id="@cdktn/provider-cloudflare.pipelineSink.PipelineSinkConfigRollingPolicyOutputReference.getStringMapAttribute"></a>

```go
func GetStringMapAttribute(terraformAttribute *string) *map[string]*string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-cloudflare.pipelineSink.PipelineSinkConfigRollingPolicyOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `InterpolationForAttribute` <a name="InterpolationForAttribute" id="@cdktn/provider-cloudflare.pipelineSink.PipelineSinkConfigRollingPolicyOutputReference.interpolationForAttribute"></a>

```go
func InterpolationForAttribute(property *string) IResolvable
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktn/provider-cloudflare.pipelineSink.PipelineSinkConfigRollingPolicyOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* *string

---

##### `Resolve` <a name="Resolve" id="@cdktn/provider-cloudflare.pipelineSink.PipelineSinkConfigRollingPolicyOutputReference.resolve"></a>

```go
func Resolve(_context IResolveContext) interface{}
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktn/provider-cloudflare.pipelineSink.PipelineSinkConfigRollingPolicyOutputReference.resolve.parameter._context"></a>

- *Type:* github.com/open-constructs/cdk-terrain-go/cdktn.IResolveContext

---

##### `ToString` <a name="ToString" id="@cdktn/provider-cloudflare.pipelineSink.PipelineSinkConfigRollingPolicyOutputReference.toString"></a>

```go
func ToString() *string
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `ResetFileSizeBytes` <a name="ResetFileSizeBytes" id="@cdktn/provider-cloudflare.pipelineSink.PipelineSinkConfigRollingPolicyOutputReference.resetFileSizeBytes"></a>

```go
func ResetFileSizeBytes()
```

##### `ResetInactivitySeconds` <a name="ResetInactivitySeconds" id="@cdktn/provider-cloudflare.pipelineSink.PipelineSinkConfigRollingPolicyOutputReference.resetInactivitySeconds"></a>

```go
func ResetInactivitySeconds()
```

##### `ResetIntervalSeconds` <a name="ResetIntervalSeconds" id="@cdktn/provider-cloudflare.pipelineSink.PipelineSinkConfigRollingPolicyOutputReference.resetIntervalSeconds"></a>

```go
func ResetIntervalSeconds()
```


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-cloudflare.pipelineSink.PipelineSinkConfigRollingPolicyOutputReference.property.creationStack">CreationStack</a></code> | <code>*[]*string</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktn/provider-cloudflare.pipelineSink.PipelineSinkConfigRollingPolicyOutputReference.property.fqn">Fqn</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktn/provider-cloudflare.pipelineSink.PipelineSinkConfigRollingPolicyOutputReference.property.fileSizeBytesInput">FileSizeBytesInput</a></code> | <code>*f64</code> | *No description.* |
| <code><a href="#@cdktn/provider-cloudflare.pipelineSink.PipelineSinkConfigRollingPolicyOutputReference.property.inactivitySecondsInput">InactivitySecondsInput</a></code> | <code>*f64</code> | *No description.* |
| <code><a href="#@cdktn/provider-cloudflare.pipelineSink.PipelineSinkConfigRollingPolicyOutputReference.property.intervalSecondsInput">IntervalSecondsInput</a></code> | <code>*f64</code> | *No description.* |
| <code><a href="#@cdktn/provider-cloudflare.pipelineSink.PipelineSinkConfigRollingPolicyOutputReference.property.fileSizeBytes">FileSizeBytes</a></code> | <code>*f64</code> | *No description.* |
| <code><a href="#@cdktn/provider-cloudflare.pipelineSink.PipelineSinkConfigRollingPolicyOutputReference.property.inactivitySeconds">InactivitySeconds</a></code> | <code>*f64</code> | *No description.* |
| <code><a href="#@cdktn/provider-cloudflare.pipelineSink.PipelineSinkConfigRollingPolicyOutputReference.property.intervalSeconds">IntervalSeconds</a></code> | <code>*f64</code> | *No description.* |
| <code><a href="#@cdktn/provider-cloudflare.pipelineSink.PipelineSinkConfigRollingPolicyOutputReference.property.internalValue">InternalValue</a></code> | <code>interface{}</code> | *No description.* |

---

##### `CreationStack`<sup>Required</sup> <a name="CreationStack" id="@cdktn/provider-cloudflare.pipelineSink.PipelineSinkConfigRollingPolicyOutputReference.property.creationStack"></a>

```go
func CreationStack() *[]*string
```

- *Type:* *[]*string

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `Fqn`<sup>Required</sup> <a name="Fqn" id="@cdktn/provider-cloudflare.pipelineSink.PipelineSinkConfigRollingPolicyOutputReference.property.fqn"></a>

```go
func Fqn() *string
```

- *Type:* *string

---

##### `FileSizeBytesInput`<sup>Optional</sup> <a name="FileSizeBytesInput" id="@cdktn/provider-cloudflare.pipelineSink.PipelineSinkConfigRollingPolicyOutputReference.property.fileSizeBytesInput"></a>

```go
func FileSizeBytesInput() *f64
```

- *Type:* *f64

---

##### `InactivitySecondsInput`<sup>Optional</sup> <a name="InactivitySecondsInput" id="@cdktn/provider-cloudflare.pipelineSink.PipelineSinkConfigRollingPolicyOutputReference.property.inactivitySecondsInput"></a>

```go
func InactivitySecondsInput() *f64
```

- *Type:* *f64

---

##### `IntervalSecondsInput`<sup>Optional</sup> <a name="IntervalSecondsInput" id="@cdktn/provider-cloudflare.pipelineSink.PipelineSinkConfigRollingPolicyOutputReference.property.intervalSecondsInput"></a>

```go
func IntervalSecondsInput() *f64
```

- *Type:* *f64

---

##### `FileSizeBytes`<sup>Required</sup> <a name="FileSizeBytes" id="@cdktn/provider-cloudflare.pipelineSink.PipelineSinkConfigRollingPolicyOutputReference.property.fileSizeBytes"></a>

```go
func FileSizeBytes() *f64
```

- *Type:* *f64

---

##### `InactivitySeconds`<sup>Required</sup> <a name="InactivitySeconds" id="@cdktn/provider-cloudflare.pipelineSink.PipelineSinkConfigRollingPolicyOutputReference.property.inactivitySeconds"></a>

```go
func InactivitySeconds() *f64
```

- *Type:* *f64

---

##### `IntervalSeconds`<sup>Required</sup> <a name="IntervalSeconds" id="@cdktn/provider-cloudflare.pipelineSink.PipelineSinkConfigRollingPolicyOutputReference.property.intervalSeconds"></a>

```go
func IntervalSeconds() *f64
```

- *Type:* *f64

---

##### `InternalValue`<sup>Optional</sup> <a name="InternalValue" id="@cdktn/provider-cloudflare.pipelineSink.PipelineSinkConfigRollingPolicyOutputReference.property.internalValue"></a>

```go
func InternalValue() interface{}
```

- *Type:* interface{}

---


### PipelineSinkFormatOutputReference <a name="PipelineSinkFormatOutputReference" id="@cdktn/provider-cloudflare.pipelineSink.PipelineSinkFormatOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktn/provider-cloudflare.pipelineSink.PipelineSinkFormatOutputReference.Initializer"></a>

```go
import "github.com/cdktn-io/cdktn-provider-cloudflare-go/cloudflare/v15/pipelinesink"

pipelinesink.NewPipelineSinkFormatOutputReference(terraformResource IInterpolatingParent, terraformAttribute *string) PipelineSinkFormatOutputReference
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-cloudflare.pipelineSink.PipelineSinkFormatOutputReference.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>github.com/open-constructs/cdk-terrain-go/cdktn.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktn/provider-cloudflare.pipelineSink.PipelineSinkFormatOutputReference.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>*string</code> | The attribute on the parent resource this class is referencing. |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktn/provider-cloudflare.pipelineSink.PipelineSinkFormatOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* github.com/open-constructs/cdk-terrain-go/cdktn.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-cloudflare.pipelineSink.PipelineSinkFormatOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* *string

The attribute on the parent resource this class is referencing.

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-cloudflare.pipelineSink.PipelineSinkFormatOutputReference.computeFqn">ComputeFqn</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-cloudflare.pipelineSink.PipelineSinkFormatOutputReference.getAnyMapAttribute">GetAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-cloudflare.pipelineSink.PipelineSinkFormatOutputReference.getBooleanAttribute">GetBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-cloudflare.pipelineSink.PipelineSinkFormatOutputReference.getBooleanMapAttribute">GetBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-cloudflare.pipelineSink.PipelineSinkFormatOutputReference.getListAttribute">GetListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-cloudflare.pipelineSink.PipelineSinkFormatOutputReference.getNumberAttribute">GetNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-cloudflare.pipelineSink.PipelineSinkFormatOutputReference.getNumberListAttribute">GetNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-cloudflare.pipelineSink.PipelineSinkFormatOutputReference.getNumberMapAttribute">GetNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-cloudflare.pipelineSink.PipelineSinkFormatOutputReference.getStringAttribute">GetStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-cloudflare.pipelineSink.PipelineSinkFormatOutputReference.getStringMapAttribute">GetStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-cloudflare.pipelineSink.PipelineSinkFormatOutputReference.interpolationForAttribute">InterpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-cloudflare.pipelineSink.PipelineSinkFormatOutputReference.resolve">Resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktn/provider-cloudflare.pipelineSink.PipelineSinkFormatOutputReference.toString">ToString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktn/provider-cloudflare.pipelineSink.PipelineSinkFormatOutputReference.resetCompression">ResetCompression</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-cloudflare.pipelineSink.PipelineSinkFormatOutputReference.resetDecimalEncoding">ResetDecimalEncoding</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-cloudflare.pipelineSink.PipelineSinkFormatOutputReference.resetRowGroupBytes">ResetRowGroupBytes</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-cloudflare.pipelineSink.PipelineSinkFormatOutputReference.resetTimestampFormat">ResetTimestampFormat</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-cloudflare.pipelineSink.PipelineSinkFormatOutputReference.resetUnstructured">ResetUnstructured</a></code> | *No description.* |

---

##### `ComputeFqn` <a name="ComputeFqn" id="@cdktn/provider-cloudflare.pipelineSink.PipelineSinkFormatOutputReference.computeFqn"></a>

```go
func ComputeFqn() *string
```

##### `GetAnyMapAttribute` <a name="GetAnyMapAttribute" id="@cdktn/provider-cloudflare.pipelineSink.PipelineSinkFormatOutputReference.getAnyMapAttribute"></a>

```go
func GetAnyMapAttribute(terraformAttribute *string) *map[string]interface{}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-cloudflare.pipelineSink.PipelineSinkFormatOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetBooleanAttribute` <a name="GetBooleanAttribute" id="@cdktn/provider-cloudflare.pipelineSink.PipelineSinkFormatOutputReference.getBooleanAttribute"></a>

```go
func GetBooleanAttribute(terraformAttribute *string) IResolvable
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-cloudflare.pipelineSink.PipelineSinkFormatOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetBooleanMapAttribute` <a name="GetBooleanMapAttribute" id="@cdktn/provider-cloudflare.pipelineSink.PipelineSinkFormatOutputReference.getBooleanMapAttribute"></a>

```go
func GetBooleanMapAttribute(terraformAttribute *string) *map[string]*bool
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-cloudflare.pipelineSink.PipelineSinkFormatOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetListAttribute` <a name="GetListAttribute" id="@cdktn/provider-cloudflare.pipelineSink.PipelineSinkFormatOutputReference.getListAttribute"></a>

```go
func GetListAttribute(terraformAttribute *string) *[]*string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-cloudflare.pipelineSink.PipelineSinkFormatOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberAttribute` <a name="GetNumberAttribute" id="@cdktn/provider-cloudflare.pipelineSink.PipelineSinkFormatOutputReference.getNumberAttribute"></a>

```go
func GetNumberAttribute(terraformAttribute *string) *f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-cloudflare.pipelineSink.PipelineSinkFormatOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberListAttribute` <a name="GetNumberListAttribute" id="@cdktn/provider-cloudflare.pipelineSink.PipelineSinkFormatOutputReference.getNumberListAttribute"></a>

```go
func GetNumberListAttribute(terraformAttribute *string) *[]*f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-cloudflare.pipelineSink.PipelineSinkFormatOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberMapAttribute` <a name="GetNumberMapAttribute" id="@cdktn/provider-cloudflare.pipelineSink.PipelineSinkFormatOutputReference.getNumberMapAttribute"></a>

```go
func GetNumberMapAttribute(terraformAttribute *string) *map[string]*f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-cloudflare.pipelineSink.PipelineSinkFormatOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetStringAttribute` <a name="GetStringAttribute" id="@cdktn/provider-cloudflare.pipelineSink.PipelineSinkFormatOutputReference.getStringAttribute"></a>

```go
func GetStringAttribute(terraformAttribute *string) *string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-cloudflare.pipelineSink.PipelineSinkFormatOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetStringMapAttribute` <a name="GetStringMapAttribute" id="@cdktn/provider-cloudflare.pipelineSink.PipelineSinkFormatOutputReference.getStringMapAttribute"></a>

```go
func GetStringMapAttribute(terraformAttribute *string) *map[string]*string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-cloudflare.pipelineSink.PipelineSinkFormatOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `InterpolationForAttribute` <a name="InterpolationForAttribute" id="@cdktn/provider-cloudflare.pipelineSink.PipelineSinkFormatOutputReference.interpolationForAttribute"></a>

```go
func InterpolationForAttribute(property *string) IResolvable
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktn/provider-cloudflare.pipelineSink.PipelineSinkFormatOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* *string

---

##### `Resolve` <a name="Resolve" id="@cdktn/provider-cloudflare.pipelineSink.PipelineSinkFormatOutputReference.resolve"></a>

```go
func Resolve(_context IResolveContext) interface{}
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktn/provider-cloudflare.pipelineSink.PipelineSinkFormatOutputReference.resolve.parameter._context"></a>

- *Type:* github.com/open-constructs/cdk-terrain-go/cdktn.IResolveContext

---

##### `ToString` <a name="ToString" id="@cdktn/provider-cloudflare.pipelineSink.PipelineSinkFormatOutputReference.toString"></a>

```go
func ToString() *string
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `ResetCompression` <a name="ResetCompression" id="@cdktn/provider-cloudflare.pipelineSink.PipelineSinkFormatOutputReference.resetCompression"></a>

```go
func ResetCompression()
```

##### `ResetDecimalEncoding` <a name="ResetDecimalEncoding" id="@cdktn/provider-cloudflare.pipelineSink.PipelineSinkFormatOutputReference.resetDecimalEncoding"></a>

```go
func ResetDecimalEncoding()
```

##### `ResetRowGroupBytes` <a name="ResetRowGroupBytes" id="@cdktn/provider-cloudflare.pipelineSink.PipelineSinkFormatOutputReference.resetRowGroupBytes"></a>

```go
func ResetRowGroupBytes()
```

##### `ResetTimestampFormat` <a name="ResetTimestampFormat" id="@cdktn/provider-cloudflare.pipelineSink.PipelineSinkFormatOutputReference.resetTimestampFormat"></a>

```go
func ResetTimestampFormat()
```

##### `ResetUnstructured` <a name="ResetUnstructured" id="@cdktn/provider-cloudflare.pipelineSink.PipelineSinkFormatOutputReference.resetUnstructured"></a>

```go
func ResetUnstructured()
```


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-cloudflare.pipelineSink.PipelineSinkFormatOutputReference.property.creationStack">CreationStack</a></code> | <code>*[]*string</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktn/provider-cloudflare.pipelineSink.PipelineSinkFormatOutputReference.property.fqn">Fqn</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktn/provider-cloudflare.pipelineSink.PipelineSinkFormatOutputReference.property.compressionInput">CompressionInput</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktn/provider-cloudflare.pipelineSink.PipelineSinkFormatOutputReference.property.decimalEncodingInput">DecimalEncodingInput</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktn/provider-cloudflare.pipelineSink.PipelineSinkFormatOutputReference.property.rowGroupBytesInput">RowGroupBytesInput</a></code> | <code>*f64</code> | *No description.* |
| <code><a href="#@cdktn/provider-cloudflare.pipelineSink.PipelineSinkFormatOutputReference.property.timestampFormatInput">TimestampFormatInput</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktn/provider-cloudflare.pipelineSink.PipelineSinkFormatOutputReference.property.typeInput">TypeInput</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktn/provider-cloudflare.pipelineSink.PipelineSinkFormatOutputReference.property.unstructuredInput">UnstructuredInput</a></code> | <code>interface{}</code> | *No description.* |
| <code><a href="#@cdktn/provider-cloudflare.pipelineSink.PipelineSinkFormatOutputReference.property.compression">Compression</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktn/provider-cloudflare.pipelineSink.PipelineSinkFormatOutputReference.property.decimalEncoding">DecimalEncoding</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktn/provider-cloudflare.pipelineSink.PipelineSinkFormatOutputReference.property.rowGroupBytes">RowGroupBytes</a></code> | <code>*f64</code> | *No description.* |
| <code><a href="#@cdktn/provider-cloudflare.pipelineSink.PipelineSinkFormatOutputReference.property.timestampFormat">TimestampFormat</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktn/provider-cloudflare.pipelineSink.PipelineSinkFormatOutputReference.property.type">Type</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktn/provider-cloudflare.pipelineSink.PipelineSinkFormatOutputReference.property.unstructured">Unstructured</a></code> | <code>interface{}</code> | *No description.* |
| <code><a href="#@cdktn/provider-cloudflare.pipelineSink.PipelineSinkFormatOutputReference.property.internalValue">InternalValue</a></code> | <code>interface{}</code> | *No description.* |

---

##### `CreationStack`<sup>Required</sup> <a name="CreationStack" id="@cdktn/provider-cloudflare.pipelineSink.PipelineSinkFormatOutputReference.property.creationStack"></a>

```go
func CreationStack() *[]*string
```

- *Type:* *[]*string

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `Fqn`<sup>Required</sup> <a name="Fqn" id="@cdktn/provider-cloudflare.pipelineSink.PipelineSinkFormatOutputReference.property.fqn"></a>

```go
func Fqn() *string
```

- *Type:* *string

---

##### `CompressionInput`<sup>Optional</sup> <a name="CompressionInput" id="@cdktn/provider-cloudflare.pipelineSink.PipelineSinkFormatOutputReference.property.compressionInput"></a>

```go
func CompressionInput() *string
```

- *Type:* *string

---

##### `DecimalEncodingInput`<sup>Optional</sup> <a name="DecimalEncodingInput" id="@cdktn/provider-cloudflare.pipelineSink.PipelineSinkFormatOutputReference.property.decimalEncodingInput"></a>

```go
func DecimalEncodingInput() *string
```

- *Type:* *string

---

##### `RowGroupBytesInput`<sup>Optional</sup> <a name="RowGroupBytesInput" id="@cdktn/provider-cloudflare.pipelineSink.PipelineSinkFormatOutputReference.property.rowGroupBytesInput"></a>

```go
func RowGroupBytesInput() *f64
```

- *Type:* *f64

---

##### `TimestampFormatInput`<sup>Optional</sup> <a name="TimestampFormatInput" id="@cdktn/provider-cloudflare.pipelineSink.PipelineSinkFormatOutputReference.property.timestampFormatInput"></a>

```go
func TimestampFormatInput() *string
```

- *Type:* *string

---

##### `TypeInput`<sup>Optional</sup> <a name="TypeInput" id="@cdktn/provider-cloudflare.pipelineSink.PipelineSinkFormatOutputReference.property.typeInput"></a>

```go
func TypeInput() *string
```

- *Type:* *string

---

##### `UnstructuredInput`<sup>Optional</sup> <a name="UnstructuredInput" id="@cdktn/provider-cloudflare.pipelineSink.PipelineSinkFormatOutputReference.property.unstructuredInput"></a>

```go
func UnstructuredInput() interface{}
```

- *Type:* interface{}

---

##### `Compression`<sup>Required</sup> <a name="Compression" id="@cdktn/provider-cloudflare.pipelineSink.PipelineSinkFormatOutputReference.property.compression"></a>

```go
func Compression() *string
```

- *Type:* *string

---

##### `DecimalEncoding`<sup>Required</sup> <a name="DecimalEncoding" id="@cdktn/provider-cloudflare.pipelineSink.PipelineSinkFormatOutputReference.property.decimalEncoding"></a>

```go
func DecimalEncoding() *string
```

- *Type:* *string

---

##### `RowGroupBytes`<sup>Required</sup> <a name="RowGroupBytes" id="@cdktn/provider-cloudflare.pipelineSink.PipelineSinkFormatOutputReference.property.rowGroupBytes"></a>

```go
func RowGroupBytes() *f64
```

- *Type:* *f64

---

##### `TimestampFormat`<sup>Required</sup> <a name="TimestampFormat" id="@cdktn/provider-cloudflare.pipelineSink.PipelineSinkFormatOutputReference.property.timestampFormat"></a>

```go
func TimestampFormat() *string
```

- *Type:* *string

---

##### `Type`<sup>Required</sup> <a name="Type" id="@cdktn/provider-cloudflare.pipelineSink.PipelineSinkFormatOutputReference.property.type"></a>

```go
func Type() *string
```

- *Type:* *string

---

##### `Unstructured`<sup>Required</sup> <a name="Unstructured" id="@cdktn/provider-cloudflare.pipelineSink.PipelineSinkFormatOutputReference.property.unstructured"></a>

```go
func Unstructured() interface{}
```

- *Type:* interface{}

---

##### `InternalValue`<sup>Optional</sup> <a name="InternalValue" id="@cdktn/provider-cloudflare.pipelineSink.PipelineSinkFormatOutputReference.property.internalValue"></a>

```go
func InternalValue() interface{}
```

- *Type:* interface{}

---


### PipelineSinkSchemaFieldsList <a name="PipelineSinkSchemaFieldsList" id="@cdktn/provider-cloudflare.pipelineSink.PipelineSinkSchemaFieldsList"></a>

#### Initializers <a name="Initializers" id="@cdktn/provider-cloudflare.pipelineSink.PipelineSinkSchemaFieldsList.Initializer"></a>

```go
import "github.com/cdktn-io/cdktn-provider-cloudflare-go/cloudflare/v15/pipelinesink"

pipelinesink.NewPipelineSinkSchemaFieldsList(terraformResource IInterpolatingParent, terraformAttribute *string, wrapsSet *bool) PipelineSinkSchemaFieldsList
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-cloudflare.pipelineSink.PipelineSinkSchemaFieldsList.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>github.com/open-constructs/cdk-terrain-go/cdktn.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktn/provider-cloudflare.pipelineSink.PipelineSinkSchemaFieldsList.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>*string</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#@cdktn/provider-cloudflare.pipelineSink.PipelineSinkSchemaFieldsList.Initializer.parameter.wrapsSet">wrapsSet</a></code> | <code>*bool</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktn/provider-cloudflare.pipelineSink.PipelineSinkSchemaFieldsList.Initializer.parameter.terraformResource"></a>

- *Type:* github.com/open-constructs/cdk-terrain-go/cdktn.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-cloudflare.pipelineSink.PipelineSinkSchemaFieldsList.Initializer.parameter.terraformAttribute"></a>

- *Type:* *string

The attribute on the parent resource this class is referencing.

---

##### `wrapsSet`<sup>Required</sup> <a name="wrapsSet" id="@cdktn/provider-cloudflare.pipelineSink.PipelineSinkSchemaFieldsList.Initializer.parameter.wrapsSet"></a>

- *Type:* *bool

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-cloudflare.pipelineSink.PipelineSinkSchemaFieldsList.allWithMapKey">AllWithMapKey</a></code> | Creating an iterator for this complex list. |
| <code><a href="#@cdktn/provider-cloudflare.pipelineSink.PipelineSinkSchemaFieldsList.computeFqn">ComputeFqn</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-cloudflare.pipelineSink.PipelineSinkSchemaFieldsList.resolve">Resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktn/provider-cloudflare.pipelineSink.PipelineSinkSchemaFieldsList.toString">ToString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktn/provider-cloudflare.pipelineSink.PipelineSinkSchemaFieldsList.get">Get</a></code> | *No description.* |

---

##### `AllWithMapKey` <a name="AllWithMapKey" id="@cdktn/provider-cloudflare.pipelineSink.PipelineSinkSchemaFieldsList.allWithMapKey"></a>

```go
func AllWithMapKey(mapKeyAttributeName *string) DynamicListTerraformIterator
```

Creating an iterator for this complex list.

The list will be converted into a map with the mapKeyAttributeName as the key.

###### `mapKeyAttributeName`<sup>Required</sup> <a name="mapKeyAttributeName" id="@cdktn/provider-cloudflare.pipelineSink.PipelineSinkSchemaFieldsList.allWithMapKey.parameter.mapKeyAttributeName"></a>

- *Type:* *string

---

##### `ComputeFqn` <a name="ComputeFqn" id="@cdktn/provider-cloudflare.pipelineSink.PipelineSinkSchemaFieldsList.computeFqn"></a>

```go
func ComputeFqn() *string
```

##### `Resolve` <a name="Resolve" id="@cdktn/provider-cloudflare.pipelineSink.PipelineSinkSchemaFieldsList.resolve"></a>

```go
func Resolve(_context IResolveContext) interface{}
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktn/provider-cloudflare.pipelineSink.PipelineSinkSchemaFieldsList.resolve.parameter._context"></a>

- *Type:* github.com/open-constructs/cdk-terrain-go/cdktn.IResolveContext

---

##### `ToString` <a name="ToString" id="@cdktn/provider-cloudflare.pipelineSink.PipelineSinkSchemaFieldsList.toString"></a>

```go
func ToString() *string
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `Get` <a name="Get" id="@cdktn/provider-cloudflare.pipelineSink.PipelineSinkSchemaFieldsList.get"></a>

```go
func Get(index *f64) PipelineSinkSchemaFieldsOutputReference
```

###### `index`<sup>Required</sup> <a name="index" id="@cdktn/provider-cloudflare.pipelineSink.PipelineSinkSchemaFieldsList.get.parameter.index"></a>

- *Type:* *f64

the index of the item to return.

---


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-cloudflare.pipelineSink.PipelineSinkSchemaFieldsList.property.creationStack">CreationStack</a></code> | <code>*[]*string</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktn/provider-cloudflare.pipelineSink.PipelineSinkSchemaFieldsList.property.fqn">Fqn</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktn/provider-cloudflare.pipelineSink.PipelineSinkSchemaFieldsList.property.internalValue">InternalValue</a></code> | <code>interface{}</code> | *No description.* |

---

##### `CreationStack`<sup>Required</sup> <a name="CreationStack" id="@cdktn/provider-cloudflare.pipelineSink.PipelineSinkSchemaFieldsList.property.creationStack"></a>

```go
func CreationStack() *[]*string
```

- *Type:* *[]*string

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `Fqn`<sup>Required</sup> <a name="Fqn" id="@cdktn/provider-cloudflare.pipelineSink.PipelineSinkSchemaFieldsList.property.fqn"></a>

```go
func Fqn() *string
```

- *Type:* *string

---

##### `InternalValue`<sup>Optional</sup> <a name="InternalValue" id="@cdktn/provider-cloudflare.pipelineSink.PipelineSinkSchemaFieldsList.property.internalValue"></a>

```go
func InternalValue() interface{}
```

- *Type:* interface{}

---


### PipelineSinkSchemaFieldsOutputReference <a name="PipelineSinkSchemaFieldsOutputReference" id="@cdktn/provider-cloudflare.pipelineSink.PipelineSinkSchemaFieldsOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktn/provider-cloudflare.pipelineSink.PipelineSinkSchemaFieldsOutputReference.Initializer"></a>

```go
import "github.com/cdktn-io/cdktn-provider-cloudflare-go/cloudflare/v15/pipelinesink"

pipelinesink.NewPipelineSinkSchemaFieldsOutputReference(terraformResource IInterpolatingParent, terraformAttribute *string, complexObjectIndex *f64, complexObjectIsFromSet *bool) PipelineSinkSchemaFieldsOutputReference
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-cloudflare.pipelineSink.PipelineSinkSchemaFieldsOutputReference.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>github.com/open-constructs/cdk-terrain-go/cdktn.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktn/provider-cloudflare.pipelineSink.PipelineSinkSchemaFieldsOutputReference.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>*string</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#@cdktn/provider-cloudflare.pipelineSink.PipelineSinkSchemaFieldsOutputReference.Initializer.parameter.complexObjectIndex">complexObjectIndex</a></code> | <code>*f64</code> | the index of this item in the list. |
| <code><a href="#@cdktn/provider-cloudflare.pipelineSink.PipelineSinkSchemaFieldsOutputReference.Initializer.parameter.complexObjectIsFromSet">complexObjectIsFromSet</a></code> | <code>*bool</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktn/provider-cloudflare.pipelineSink.PipelineSinkSchemaFieldsOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* github.com/open-constructs/cdk-terrain-go/cdktn.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-cloudflare.pipelineSink.PipelineSinkSchemaFieldsOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* *string

The attribute on the parent resource this class is referencing.

---

##### `complexObjectIndex`<sup>Required</sup> <a name="complexObjectIndex" id="@cdktn/provider-cloudflare.pipelineSink.PipelineSinkSchemaFieldsOutputReference.Initializer.parameter.complexObjectIndex"></a>

- *Type:* *f64

the index of this item in the list.

---

##### `complexObjectIsFromSet`<sup>Required</sup> <a name="complexObjectIsFromSet" id="@cdktn/provider-cloudflare.pipelineSink.PipelineSinkSchemaFieldsOutputReference.Initializer.parameter.complexObjectIsFromSet"></a>

- *Type:* *bool

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-cloudflare.pipelineSink.PipelineSinkSchemaFieldsOutputReference.computeFqn">ComputeFqn</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-cloudflare.pipelineSink.PipelineSinkSchemaFieldsOutputReference.getAnyMapAttribute">GetAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-cloudflare.pipelineSink.PipelineSinkSchemaFieldsOutputReference.getBooleanAttribute">GetBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-cloudflare.pipelineSink.PipelineSinkSchemaFieldsOutputReference.getBooleanMapAttribute">GetBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-cloudflare.pipelineSink.PipelineSinkSchemaFieldsOutputReference.getListAttribute">GetListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-cloudflare.pipelineSink.PipelineSinkSchemaFieldsOutputReference.getNumberAttribute">GetNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-cloudflare.pipelineSink.PipelineSinkSchemaFieldsOutputReference.getNumberListAttribute">GetNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-cloudflare.pipelineSink.PipelineSinkSchemaFieldsOutputReference.getNumberMapAttribute">GetNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-cloudflare.pipelineSink.PipelineSinkSchemaFieldsOutputReference.getStringAttribute">GetStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-cloudflare.pipelineSink.PipelineSinkSchemaFieldsOutputReference.getStringMapAttribute">GetStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-cloudflare.pipelineSink.PipelineSinkSchemaFieldsOutputReference.interpolationForAttribute">InterpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-cloudflare.pipelineSink.PipelineSinkSchemaFieldsOutputReference.resolve">Resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktn/provider-cloudflare.pipelineSink.PipelineSinkSchemaFieldsOutputReference.toString">ToString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktn/provider-cloudflare.pipelineSink.PipelineSinkSchemaFieldsOutputReference.resetMetadataKey">ResetMetadataKey</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-cloudflare.pipelineSink.PipelineSinkSchemaFieldsOutputReference.resetName">ResetName</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-cloudflare.pipelineSink.PipelineSinkSchemaFieldsOutputReference.resetRequired">ResetRequired</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-cloudflare.pipelineSink.PipelineSinkSchemaFieldsOutputReference.resetSqlName">ResetSqlName</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-cloudflare.pipelineSink.PipelineSinkSchemaFieldsOutputReference.resetUnit">ResetUnit</a></code> | *No description.* |

---

##### `ComputeFqn` <a name="ComputeFqn" id="@cdktn/provider-cloudflare.pipelineSink.PipelineSinkSchemaFieldsOutputReference.computeFqn"></a>

```go
func ComputeFqn() *string
```

##### `GetAnyMapAttribute` <a name="GetAnyMapAttribute" id="@cdktn/provider-cloudflare.pipelineSink.PipelineSinkSchemaFieldsOutputReference.getAnyMapAttribute"></a>

```go
func GetAnyMapAttribute(terraformAttribute *string) *map[string]interface{}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-cloudflare.pipelineSink.PipelineSinkSchemaFieldsOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetBooleanAttribute` <a name="GetBooleanAttribute" id="@cdktn/provider-cloudflare.pipelineSink.PipelineSinkSchemaFieldsOutputReference.getBooleanAttribute"></a>

```go
func GetBooleanAttribute(terraformAttribute *string) IResolvable
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-cloudflare.pipelineSink.PipelineSinkSchemaFieldsOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetBooleanMapAttribute` <a name="GetBooleanMapAttribute" id="@cdktn/provider-cloudflare.pipelineSink.PipelineSinkSchemaFieldsOutputReference.getBooleanMapAttribute"></a>

```go
func GetBooleanMapAttribute(terraformAttribute *string) *map[string]*bool
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-cloudflare.pipelineSink.PipelineSinkSchemaFieldsOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetListAttribute` <a name="GetListAttribute" id="@cdktn/provider-cloudflare.pipelineSink.PipelineSinkSchemaFieldsOutputReference.getListAttribute"></a>

```go
func GetListAttribute(terraformAttribute *string) *[]*string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-cloudflare.pipelineSink.PipelineSinkSchemaFieldsOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberAttribute` <a name="GetNumberAttribute" id="@cdktn/provider-cloudflare.pipelineSink.PipelineSinkSchemaFieldsOutputReference.getNumberAttribute"></a>

```go
func GetNumberAttribute(terraformAttribute *string) *f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-cloudflare.pipelineSink.PipelineSinkSchemaFieldsOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberListAttribute` <a name="GetNumberListAttribute" id="@cdktn/provider-cloudflare.pipelineSink.PipelineSinkSchemaFieldsOutputReference.getNumberListAttribute"></a>

```go
func GetNumberListAttribute(terraformAttribute *string) *[]*f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-cloudflare.pipelineSink.PipelineSinkSchemaFieldsOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberMapAttribute` <a name="GetNumberMapAttribute" id="@cdktn/provider-cloudflare.pipelineSink.PipelineSinkSchemaFieldsOutputReference.getNumberMapAttribute"></a>

```go
func GetNumberMapAttribute(terraformAttribute *string) *map[string]*f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-cloudflare.pipelineSink.PipelineSinkSchemaFieldsOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetStringAttribute` <a name="GetStringAttribute" id="@cdktn/provider-cloudflare.pipelineSink.PipelineSinkSchemaFieldsOutputReference.getStringAttribute"></a>

```go
func GetStringAttribute(terraformAttribute *string) *string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-cloudflare.pipelineSink.PipelineSinkSchemaFieldsOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetStringMapAttribute` <a name="GetStringMapAttribute" id="@cdktn/provider-cloudflare.pipelineSink.PipelineSinkSchemaFieldsOutputReference.getStringMapAttribute"></a>

```go
func GetStringMapAttribute(terraformAttribute *string) *map[string]*string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-cloudflare.pipelineSink.PipelineSinkSchemaFieldsOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `InterpolationForAttribute` <a name="InterpolationForAttribute" id="@cdktn/provider-cloudflare.pipelineSink.PipelineSinkSchemaFieldsOutputReference.interpolationForAttribute"></a>

```go
func InterpolationForAttribute(property *string) IResolvable
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktn/provider-cloudflare.pipelineSink.PipelineSinkSchemaFieldsOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* *string

---

##### `Resolve` <a name="Resolve" id="@cdktn/provider-cloudflare.pipelineSink.PipelineSinkSchemaFieldsOutputReference.resolve"></a>

```go
func Resolve(_context IResolveContext) interface{}
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktn/provider-cloudflare.pipelineSink.PipelineSinkSchemaFieldsOutputReference.resolve.parameter._context"></a>

- *Type:* github.com/open-constructs/cdk-terrain-go/cdktn.IResolveContext

---

##### `ToString` <a name="ToString" id="@cdktn/provider-cloudflare.pipelineSink.PipelineSinkSchemaFieldsOutputReference.toString"></a>

```go
func ToString() *string
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `ResetMetadataKey` <a name="ResetMetadataKey" id="@cdktn/provider-cloudflare.pipelineSink.PipelineSinkSchemaFieldsOutputReference.resetMetadataKey"></a>

```go
func ResetMetadataKey()
```

##### `ResetName` <a name="ResetName" id="@cdktn/provider-cloudflare.pipelineSink.PipelineSinkSchemaFieldsOutputReference.resetName"></a>

```go
func ResetName()
```

##### `ResetRequired` <a name="ResetRequired" id="@cdktn/provider-cloudflare.pipelineSink.PipelineSinkSchemaFieldsOutputReference.resetRequired"></a>

```go
func ResetRequired()
```

##### `ResetSqlName` <a name="ResetSqlName" id="@cdktn/provider-cloudflare.pipelineSink.PipelineSinkSchemaFieldsOutputReference.resetSqlName"></a>

```go
func ResetSqlName()
```

##### `ResetUnit` <a name="ResetUnit" id="@cdktn/provider-cloudflare.pipelineSink.PipelineSinkSchemaFieldsOutputReference.resetUnit"></a>

```go
func ResetUnit()
```


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-cloudflare.pipelineSink.PipelineSinkSchemaFieldsOutputReference.property.creationStack">CreationStack</a></code> | <code>*[]*string</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktn/provider-cloudflare.pipelineSink.PipelineSinkSchemaFieldsOutputReference.property.fqn">Fqn</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktn/provider-cloudflare.pipelineSink.PipelineSinkSchemaFieldsOutputReference.property.metadataKeyInput">MetadataKeyInput</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktn/provider-cloudflare.pipelineSink.PipelineSinkSchemaFieldsOutputReference.property.nameInput">NameInput</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktn/provider-cloudflare.pipelineSink.PipelineSinkSchemaFieldsOutputReference.property.requiredInput">RequiredInput</a></code> | <code>interface{}</code> | *No description.* |
| <code><a href="#@cdktn/provider-cloudflare.pipelineSink.PipelineSinkSchemaFieldsOutputReference.property.sqlNameInput">SqlNameInput</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktn/provider-cloudflare.pipelineSink.PipelineSinkSchemaFieldsOutputReference.property.typeInput">TypeInput</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktn/provider-cloudflare.pipelineSink.PipelineSinkSchemaFieldsOutputReference.property.unitInput">UnitInput</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktn/provider-cloudflare.pipelineSink.PipelineSinkSchemaFieldsOutputReference.property.metadataKey">MetadataKey</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktn/provider-cloudflare.pipelineSink.PipelineSinkSchemaFieldsOutputReference.property.name">Name</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktn/provider-cloudflare.pipelineSink.PipelineSinkSchemaFieldsOutputReference.property.required">Required</a></code> | <code>interface{}</code> | *No description.* |
| <code><a href="#@cdktn/provider-cloudflare.pipelineSink.PipelineSinkSchemaFieldsOutputReference.property.sqlName">SqlName</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktn/provider-cloudflare.pipelineSink.PipelineSinkSchemaFieldsOutputReference.property.type">Type</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktn/provider-cloudflare.pipelineSink.PipelineSinkSchemaFieldsOutputReference.property.unit">Unit</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktn/provider-cloudflare.pipelineSink.PipelineSinkSchemaFieldsOutputReference.property.internalValue">InternalValue</a></code> | <code>interface{}</code> | *No description.* |

---

##### `CreationStack`<sup>Required</sup> <a name="CreationStack" id="@cdktn/provider-cloudflare.pipelineSink.PipelineSinkSchemaFieldsOutputReference.property.creationStack"></a>

```go
func CreationStack() *[]*string
```

- *Type:* *[]*string

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `Fqn`<sup>Required</sup> <a name="Fqn" id="@cdktn/provider-cloudflare.pipelineSink.PipelineSinkSchemaFieldsOutputReference.property.fqn"></a>

```go
func Fqn() *string
```

- *Type:* *string

---

##### `MetadataKeyInput`<sup>Optional</sup> <a name="MetadataKeyInput" id="@cdktn/provider-cloudflare.pipelineSink.PipelineSinkSchemaFieldsOutputReference.property.metadataKeyInput"></a>

```go
func MetadataKeyInput() *string
```

- *Type:* *string

---

##### `NameInput`<sup>Optional</sup> <a name="NameInput" id="@cdktn/provider-cloudflare.pipelineSink.PipelineSinkSchemaFieldsOutputReference.property.nameInput"></a>

```go
func NameInput() *string
```

- *Type:* *string

---

##### `RequiredInput`<sup>Optional</sup> <a name="RequiredInput" id="@cdktn/provider-cloudflare.pipelineSink.PipelineSinkSchemaFieldsOutputReference.property.requiredInput"></a>

```go
func RequiredInput() interface{}
```

- *Type:* interface{}

---

##### `SqlNameInput`<sup>Optional</sup> <a name="SqlNameInput" id="@cdktn/provider-cloudflare.pipelineSink.PipelineSinkSchemaFieldsOutputReference.property.sqlNameInput"></a>

```go
func SqlNameInput() *string
```

- *Type:* *string

---

##### `TypeInput`<sup>Optional</sup> <a name="TypeInput" id="@cdktn/provider-cloudflare.pipelineSink.PipelineSinkSchemaFieldsOutputReference.property.typeInput"></a>

```go
func TypeInput() *string
```

- *Type:* *string

---

##### `UnitInput`<sup>Optional</sup> <a name="UnitInput" id="@cdktn/provider-cloudflare.pipelineSink.PipelineSinkSchemaFieldsOutputReference.property.unitInput"></a>

```go
func UnitInput() *string
```

- *Type:* *string

---

##### `MetadataKey`<sup>Required</sup> <a name="MetadataKey" id="@cdktn/provider-cloudflare.pipelineSink.PipelineSinkSchemaFieldsOutputReference.property.metadataKey"></a>

```go
func MetadataKey() *string
```

- *Type:* *string

---

##### `Name`<sup>Required</sup> <a name="Name" id="@cdktn/provider-cloudflare.pipelineSink.PipelineSinkSchemaFieldsOutputReference.property.name"></a>

```go
func Name() *string
```

- *Type:* *string

---

##### `Required`<sup>Required</sup> <a name="Required" id="@cdktn/provider-cloudflare.pipelineSink.PipelineSinkSchemaFieldsOutputReference.property.required"></a>

```go
func Required() interface{}
```

- *Type:* interface{}

---

##### `SqlName`<sup>Required</sup> <a name="SqlName" id="@cdktn/provider-cloudflare.pipelineSink.PipelineSinkSchemaFieldsOutputReference.property.sqlName"></a>

```go
func SqlName() *string
```

- *Type:* *string

---

##### `Type`<sup>Required</sup> <a name="Type" id="@cdktn/provider-cloudflare.pipelineSink.PipelineSinkSchemaFieldsOutputReference.property.type"></a>

```go
func Type() *string
```

- *Type:* *string

---

##### `Unit`<sup>Required</sup> <a name="Unit" id="@cdktn/provider-cloudflare.pipelineSink.PipelineSinkSchemaFieldsOutputReference.property.unit"></a>

```go
func Unit() *string
```

- *Type:* *string

---

##### `InternalValue`<sup>Optional</sup> <a name="InternalValue" id="@cdktn/provider-cloudflare.pipelineSink.PipelineSinkSchemaFieldsOutputReference.property.internalValue"></a>

```go
func InternalValue() interface{}
```

- *Type:* interface{}

---


### PipelineSinkSchemaFormatOutputReference <a name="PipelineSinkSchemaFormatOutputReference" id="@cdktn/provider-cloudflare.pipelineSink.PipelineSinkSchemaFormatOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktn/provider-cloudflare.pipelineSink.PipelineSinkSchemaFormatOutputReference.Initializer"></a>

```go
import "github.com/cdktn-io/cdktn-provider-cloudflare-go/cloudflare/v15/pipelinesink"

pipelinesink.NewPipelineSinkSchemaFormatOutputReference(terraformResource IInterpolatingParent, terraformAttribute *string) PipelineSinkSchemaFormatOutputReference
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-cloudflare.pipelineSink.PipelineSinkSchemaFormatOutputReference.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>github.com/open-constructs/cdk-terrain-go/cdktn.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktn/provider-cloudflare.pipelineSink.PipelineSinkSchemaFormatOutputReference.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>*string</code> | The attribute on the parent resource this class is referencing. |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktn/provider-cloudflare.pipelineSink.PipelineSinkSchemaFormatOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* github.com/open-constructs/cdk-terrain-go/cdktn.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-cloudflare.pipelineSink.PipelineSinkSchemaFormatOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* *string

The attribute on the parent resource this class is referencing.

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-cloudflare.pipelineSink.PipelineSinkSchemaFormatOutputReference.computeFqn">ComputeFqn</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-cloudflare.pipelineSink.PipelineSinkSchemaFormatOutputReference.getAnyMapAttribute">GetAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-cloudflare.pipelineSink.PipelineSinkSchemaFormatOutputReference.getBooleanAttribute">GetBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-cloudflare.pipelineSink.PipelineSinkSchemaFormatOutputReference.getBooleanMapAttribute">GetBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-cloudflare.pipelineSink.PipelineSinkSchemaFormatOutputReference.getListAttribute">GetListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-cloudflare.pipelineSink.PipelineSinkSchemaFormatOutputReference.getNumberAttribute">GetNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-cloudflare.pipelineSink.PipelineSinkSchemaFormatOutputReference.getNumberListAttribute">GetNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-cloudflare.pipelineSink.PipelineSinkSchemaFormatOutputReference.getNumberMapAttribute">GetNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-cloudflare.pipelineSink.PipelineSinkSchemaFormatOutputReference.getStringAttribute">GetStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-cloudflare.pipelineSink.PipelineSinkSchemaFormatOutputReference.getStringMapAttribute">GetStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-cloudflare.pipelineSink.PipelineSinkSchemaFormatOutputReference.interpolationForAttribute">InterpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-cloudflare.pipelineSink.PipelineSinkSchemaFormatOutputReference.resolve">Resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktn/provider-cloudflare.pipelineSink.PipelineSinkSchemaFormatOutputReference.toString">ToString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktn/provider-cloudflare.pipelineSink.PipelineSinkSchemaFormatOutputReference.resetCompression">ResetCompression</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-cloudflare.pipelineSink.PipelineSinkSchemaFormatOutputReference.resetDecimalEncoding">ResetDecimalEncoding</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-cloudflare.pipelineSink.PipelineSinkSchemaFormatOutputReference.resetRowGroupBytes">ResetRowGroupBytes</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-cloudflare.pipelineSink.PipelineSinkSchemaFormatOutputReference.resetTimestampFormat">ResetTimestampFormat</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-cloudflare.pipelineSink.PipelineSinkSchemaFormatOutputReference.resetUnstructured">ResetUnstructured</a></code> | *No description.* |

---

##### `ComputeFqn` <a name="ComputeFqn" id="@cdktn/provider-cloudflare.pipelineSink.PipelineSinkSchemaFormatOutputReference.computeFqn"></a>

```go
func ComputeFqn() *string
```

##### `GetAnyMapAttribute` <a name="GetAnyMapAttribute" id="@cdktn/provider-cloudflare.pipelineSink.PipelineSinkSchemaFormatOutputReference.getAnyMapAttribute"></a>

```go
func GetAnyMapAttribute(terraformAttribute *string) *map[string]interface{}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-cloudflare.pipelineSink.PipelineSinkSchemaFormatOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetBooleanAttribute` <a name="GetBooleanAttribute" id="@cdktn/provider-cloudflare.pipelineSink.PipelineSinkSchemaFormatOutputReference.getBooleanAttribute"></a>

```go
func GetBooleanAttribute(terraformAttribute *string) IResolvable
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-cloudflare.pipelineSink.PipelineSinkSchemaFormatOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetBooleanMapAttribute` <a name="GetBooleanMapAttribute" id="@cdktn/provider-cloudflare.pipelineSink.PipelineSinkSchemaFormatOutputReference.getBooleanMapAttribute"></a>

```go
func GetBooleanMapAttribute(terraformAttribute *string) *map[string]*bool
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-cloudflare.pipelineSink.PipelineSinkSchemaFormatOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetListAttribute` <a name="GetListAttribute" id="@cdktn/provider-cloudflare.pipelineSink.PipelineSinkSchemaFormatOutputReference.getListAttribute"></a>

```go
func GetListAttribute(terraformAttribute *string) *[]*string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-cloudflare.pipelineSink.PipelineSinkSchemaFormatOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberAttribute` <a name="GetNumberAttribute" id="@cdktn/provider-cloudflare.pipelineSink.PipelineSinkSchemaFormatOutputReference.getNumberAttribute"></a>

```go
func GetNumberAttribute(terraformAttribute *string) *f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-cloudflare.pipelineSink.PipelineSinkSchemaFormatOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberListAttribute` <a name="GetNumberListAttribute" id="@cdktn/provider-cloudflare.pipelineSink.PipelineSinkSchemaFormatOutputReference.getNumberListAttribute"></a>

```go
func GetNumberListAttribute(terraformAttribute *string) *[]*f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-cloudflare.pipelineSink.PipelineSinkSchemaFormatOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberMapAttribute` <a name="GetNumberMapAttribute" id="@cdktn/provider-cloudflare.pipelineSink.PipelineSinkSchemaFormatOutputReference.getNumberMapAttribute"></a>

```go
func GetNumberMapAttribute(terraformAttribute *string) *map[string]*f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-cloudflare.pipelineSink.PipelineSinkSchemaFormatOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetStringAttribute` <a name="GetStringAttribute" id="@cdktn/provider-cloudflare.pipelineSink.PipelineSinkSchemaFormatOutputReference.getStringAttribute"></a>

```go
func GetStringAttribute(terraformAttribute *string) *string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-cloudflare.pipelineSink.PipelineSinkSchemaFormatOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetStringMapAttribute` <a name="GetStringMapAttribute" id="@cdktn/provider-cloudflare.pipelineSink.PipelineSinkSchemaFormatOutputReference.getStringMapAttribute"></a>

```go
func GetStringMapAttribute(terraformAttribute *string) *map[string]*string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-cloudflare.pipelineSink.PipelineSinkSchemaFormatOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `InterpolationForAttribute` <a name="InterpolationForAttribute" id="@cdktn/provider-cloudflare.pipelineSink.PipelineSinkSchemaFormatOutputReference.interpolationForAttribute"></a>

```go
func InterpolationForAttribute(property *string) IResolvable
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktn/provider-cloudflare.pipelineSink.PipelineSinkSchemaFormatOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* *string

---

##### `Resolve` <a name="Resolve" id="@cdktn/provider-cloudflare.pipelineSink.PipelineSinkSchemaFormatOutputReference.resolve"></a>

```go
func Resolve(_context IResolveContext) interface{}
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktn/provider-cloudflare.pipelineSink.PipelineSinkSchemaFormatOutputReference.resolve.parameter._context"></a>

- *Type:* github.com/open-constructs/cdk-terrain-go/cdktn.IResolveContext

---

##### `ToString` <a name="ToString" id="@cdktn/provider-cloudflare.pipelineSink.PipelineSinkSchemaFormatOutputReference.toString"></a>

```go
func ToString() *string
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `ResetCompression` <a name="ResetCompression" id="@cdktn/provider-cloudflare.pipelineSink.PipelineSinkSchemaFormatOutputReference.resetCompression"></a>

```go
func ResetCompression()
```

##### `ResetDecimalEncoding` <a name="ResetDecimalEncoding" id="@cdktn/provider-cloudflare.pipelineSink.PipelineSinkSchemaFormatOutputReference.resetDecimalEncoding"></a>

```go
func ResetDecimalEncoding()
```

##### `ResetRowGroupBytes` <a name="ResetRowGroupBytes" id="@cdktn/provider-cloudflare.pipelineSink.PipelineSinkSchemaFormatOutputReference.resetRowGroupBytes"></a>

```go
func ResetRowGroupBytes()
```

##### `ResetTimestampFormat` <a name="ResetTimestampFormat" id="@cdktn/provider-cloudflare.pipelineSink.PipelineSinkSchemaFormatOutputReference.resetTimestampFormat"></a>

```go
func ResetTimestampFormat()
```

##### `ResetUnstructured` <a name="ResetUnstructured" id="@cdktn/provider-cloudflare.pipelineSink.PipelineSinkSchemaFormatOutputReference.resetUnstructured"></a>

```go
func ResetUnstructured()
```


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-cloudflare.pipelineSink.PipelineSinkSchemaFormatOutputReference.property.creationStack">CreationStack</a></code> | <code>*[]*string</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktn/provider-cloudflare.pipelineSink.PipelineSinkSchemaFormatOutputReference.property.fqn">Fqn</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktn/provider-cloudflare.pipelineSink.PipelineSinkSchemaFormatOutputReference.property.compressionInput">CompressionInput</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktn/provider-cloudflare.pipelineSink.PipelineSinkSchemaFormatOutputReference.property.decimalEncodingInput">DecimalEncodingInput</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktn/provider-cloudflare.pipelineSink.PipelineSinkSchemaFormatOutputReference.property.rowGroupBytesInput">RowGroupBytesInput</a></code> | <code>*f64</code> | *No description.* |
| <code><a href="#@cdktn/provider-cloudflare.pipelineSink.PipelineSinkSchemaFormatOutputReference.property.timestampFormatInput">TimestampFormatInput</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktn/provider-cloudflare.pipelineSink.PipelineSinkSchemaFormatOutputReference.property.typeInput">TypeInput</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktn/provider-cloudflare.pipelineSink.PipelineSinkSchemaFormatOutputReference.property.unstructuredInput">UnstructuredInput</a></code> | <code>interface{}</code> | *No description.* |
| <code><a href="#@cdktn/provider-cloudflare.pipelineSink.PipelineSinkSchemaFormatOutputReference.property.compression">Compression</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktn/provider-cloudflare.pipelineSink.PipelineSinkSchemaFormatOutputReference.property.decimalEncoding">DecimalEncoding</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktn/provider-cloudflare.pipelineSink.PipelineSinkSchemaFormatOutputReference.property.rowGroupBytes">RowGroupBytes</a></code> | <code>*f64</code> | *No description.* |
| <code><a href="#@cdktn/provider-cloudflare.pipelineSink.PipelineSinkSchemaFormatOutputReference.property.timestampFormat">TimestampFormat</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktn/provider-cloudflare.pipelineSink.PipelineSinkSchemaFormatOutputReference.property.type">Type</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktn/provider-cloudflare.pipelineSink.PipelineSinkSchemaFormatOutputReference.property.unstructured">Unstructured</a></code> | <code>interface{}</code> | *No description.* |
| <code><a href="#@cdktn/provider-cloudflare.pipelineSink.PipelineSinkSchemaFormatOutputReference.property.internalValue">InternalValue</a></code> | <code>interface{}</code> | *No description.* |

---

##### `CreationStack`<sup>Required</sup> <a name="CreationStack" id="@cdktn/provider-cloudflare.pipelineSink.PipelineSinkSchemaFormatOutputReference.property.creationStack"></a>

```go
func CreationStack() *[]*string
```

- *Type:* *[]*string

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `Fqn`<sup>Required</sup> <a name="Fqn" id="@cdktn/provider-cloudflare.pipelineSink.PipelineSinkSchemaFormatOutputReference.property.fqn"></a>

```go
func Fqn() *string
```

- *Type:* *string

---

##### `CompressionInput`<sup>Optional</sup> <a name="CompressionInput" id="@cdktn/provider-cloudflare.pipelineSink.PipelineSinkSchemaFormatOutputReference.property.compressionInput"></a>

```go
func CompressionInput() *string
```

- *Type:* *string

---

##### `DecimalEncodingInput`<sup>Optional</sup> <a name="DecimalEncodingInput" id="@cdktn/provider-cloudflare.pipelineSink.PipelineSinkSchemaFormatOutputReference.property.decimalEncodingInput"></a>

```go
func DecimalEncodingInput() *string
```

- *Type:* *string

---

##### `RowGroupBytesInput`<sup>Optional</sup> <a name="RowGroupBytesInput" id="@cdktn/provider-cloudflare.pipelineSink.PipelineSinkSchemaFormatOutputReference.property.rowGroupBytesInput"></a>

```go
func RowGroupBytesInput() *f64
```

- *Type:* *f64

---

##### `TimestampFormatInput`<sup>Optional</sup> <a name="TimestampFormatInput" id="@cdktn/provider-cloudflare.pipelineSink.PipelineSinkSchemaFormatOutputReference.property.timestampFormatInput"></a>

```go
func TimestampFormatInput() *string
```

- *Type:* *string

---

##### `TypeInput`<sup>Optional</sup> <a name="TypeInput" id="@cdktn/provider-cloudflare.pipelineSink.PipelineSinkSchemaFormatOutputReference.property.typeInput"></a>

```go
func TypeInput() *string
```

- *Type:* *string

---

##### `UnstructuredInput`<sup>Optional</sup> <a name="UnstructuredInput" id="@cdktn/provider-cloudflare.pipelineSink.PipelineSinkSchemaFormatOutputReference.property.unstructuredInput"></a>

```go
func UnstructuredInput() interface{}
```

- *Type:* interface{}

---

##### `Compression`<sup>Required</sup> <a name="Compression" id="@cdktn/provider-cloudflare.pipelineSink.PipelineSinkSchemaFormatOutputReference.property.compression"></a>

```go
func Compression() *string
```

- *Type:* *string

---

##### `DecimalEncoding`<sup>Required</sup> <a name="DecimalEncoding" id="@cdktn/provider-cloudflare.pipelineSink.PipelineSinkSchemaFormatOutputReference.property.decimalEncoding"></a>

```go
func DecimalEncoding() *string
```

- *Type:* *string

---

##### `RowGroupBytes`<sup>Required</sup> <a name="RowGroupBytes" id="@cdktn/provider-cloudflare.pipelineSink.PipelineSinkSchemaFormatOutputReference.property.rowGroupBytes"></a>

```go
func RowGroupBytes() *f64
```

- *Type:* *f64

---

##### `TimestampFormat`<sup>Required</sup> <a name="TimestampFormat" id="@cdktn/provider-cloudflare.pipelineSink.PipelineSinkSchemaFormatOutputReference.property.timestampFormat"></a>

```go
func TimestampFormat() *string
```

- *Type:* *string

---

##### `Type`<sup>Required</sup> <a name="Type" id="@cdktn/provider-cloudflare.pipelineSink.PipelineSinkSchemaFormatOutputReference.property.type"></a>

```go
func Type() *string
```

- *Type:* *string

---

##### `Unstructured`<sup>Required</sup> <a name="Unstructured" id="@cdktn/provider-cloudflare.pipelineSink.PipelineSinkSchemaFormatOutputReference.property.unstructured"></a>

```go
func Unstructured() interface{}
```

- *Type:* interface{}

---

##### `InternalValue`<sup>Optional</sup> <a name="InternalValue" id="@cdktn/provider-cloudflare.pipelineSink.PipelineSinkSchemaFormatOutputReference.property.internalValue"></a>

```go
func InternalValue() interface{}
```

- *Type:* interface{}

---


### PipelineSinkSchemaOutputReference <a name="PipelineSinkSchemaOutputReference" id="@cdktn/provider-cloudflare.pipelineSink.PipelineSinkSchemaOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktn/provider-cloudflare.pipelineSink.PipelineSinkSchemaOutputReference.Initializer"></a>

```go
import "github.com/cdktn-io/cdktn-provider-cloudflare-go/cloudflare/v15/pipelinesink"

pipelinesink.NewPipelineSinkSchemaOutputReference(terraformResource IInterpolatingParent, terraformAttribute *string) PipelineSinkSchemaOutputReference
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-cloudflare.pipelineSink.PipelineSinkSchemaOutputReference.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>github.com/open-constructs/cdk-terrain-go/cdktn.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktn/provider-cloudflare.pipelineSink.PipelineSinkSchemaOutputReference.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>*string</code> | The attribute on the parent resource this class is referencing. |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktn/provider-cloudflare.pipelineSink.PipelineSinkSchemaOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* github.com/open-constructs/cdk-terrain-go/cdktn.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-cloudflare.pipelineSink.PipelineSinkSchemaOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* *string

The attribute on the parent resource this class is referencing.

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-cloudflare.pipelineSink.PipelineSinkSchemaOutputReference.computeFqn">ComputeFqn</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-cloudflare.pipelineSink.PipelineSinkSchemaOutputReference.getAnyMapAttribute">GetAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-cloudflare.pipelineSink.PipelineSinkSchemaOutputReference.getBooleanAttribute">GetBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-cloudflare.pipelineSink.PipelineSinkSchemaOutputReference.getBooleanMapAttribute">GetBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-cloudflare.pipelineSink.PipelineSinkSchemaOutputReference.getListAttribute">GetListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-cloudflare.pipelineSink.PipelineSinkSchemaOutputReference.getNumberAttribute">GetNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-cloudflare.pipelineSink.PipelineSinkSchemaOutputReference.getNumberListAttribute">GetNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-cloudflare.pipelineSink.PipelineSinkSchemaOutputReference.getNumberMapAttribute">GetNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-cloudflare.pipelineSink.PipelineSinkSchemaOutputReference.getStringAttribute">GetStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-cloudflare.pipelineSink.PipelineSinkSchemaOutputReference.getStringMapAttribute">GetStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-cloudflare.pipelineSink.PipelineSinkSchemaOutputReference.interpolationForAttribute">InterpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-cloudflare.pipelineSink.PipelineSinkSchemaOutputReference.resolve">Resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktn/provider-cloudflare.pipelineSink.PipelineSinkSchemaOutputReference.toString">ToString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktn/provider-cloudflare.pipelineSink.PipelineSinkSchemaOutputReference.putFields">PutFields</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-cloudflare.pipelineSink.PipelineSinkSchemaOutputReference.putFormat">PutFormat</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-cloudflare.pipelineSink.PipelineSinkSchemaOutputReference.resetFields">ResetFields</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-cloudflare.pipelineSink.PipelineSinkSchemaOutputReference.resetFormat">ResetFormat</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-cloudflare.pipelineSink.PipelineSinkSchemaOutputReference.resetInferred">ResetInferred</a></code> | *No description.* |

---

##### `ComputeFqn` <a name="ComputeFqn" id="@cdktn/provider-cloudflare.pipelineSink.PipelineSinkSchemaOutputReference.computeFqn"></a>

```go
func ComputeFqn() *string
```

##### `GetAnyMapAttribute` <a name="GetAnyMapAttribute" id="@cdktn/provider-cloudflare.pipelineSink.PipelineSinkSchemaOutputReference.getAnyMapAttribute"></a>

```go
func GetAnyMapAttribute(terraformAttribute *string) *map[string]interface{}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-cloudflare.pipelineSink.PipelineSinkSchemaOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetBooleanAttribute` <a name="GetBooleanAttribute" id="@cdktn/provider-cloudflare.pipelineSink.PipelineSinkSchemaOutputReference.getBooleanAttribute"></a>

```go
func GetBooleanAttribute(terraformAttribute *string) IResolvable
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-cloudflare.pipelineSink.PipelineSinkSchemaOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetBooleanMapAttribute` <a name="GetBooleanMapAttribute" id="@cdktn/provider-cloudflare.pipelineSink.PipelineSinkSchemaOutputReference.getBooleanMapAttribute"></a>

```go
func GetBooleanMapAttribute(terraformAttribute *string) *map[string]*bool
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-cloudflare.pipelineSink.PipelineSinkSchemaOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetListAttribute` <a name="GetListAttribute" id="@cdktn/provider-cloudflare.pipelineSink.PipelineSinkSchemaOutputReference.getListAttribute"></a>

```go
func GetListAttribute(terraformAttribute *string) *[]*string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-cloudflare.pipelineSink.PipelineSinkSchemaOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberAttribute` <a name="GetNumberAttribute" id="@cdktn/provider-cloudflare.pipelineSink.PipelineSinkSchemaOutputReference.getNumberAttribute"></a>

```go
func GetNumberAttribute(terraformAttribute *string) *f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-cloudflare.pipelineSink.PipelineSinkSchemaOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberListAttribute` <a name="GetNumberListAttribute" id="@cdktn/provider-cloudflare.pipelineSink.PipelineSinkSchemaOutputReference.getNumberListAttribute"></a>

```go
func GetNumberListAttribute(terraformAttribute *string) *[]*f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-cloudflare.pipelineSink.PipelineSinkSchemaOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberMapAttribute` <a name="GetNumberMapAttribute" id="@cdktn/provider-cloudflare.pipelineSink.PipelineSinkSchemaOutputReference.getNumberMapAttribute"></a>

```go
func GetNumberMapAttribute(terraformAttribute *string) *map[string]*f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-cloudflare.pipelineSink.PipelineSinkSchemaOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetStringAttribute` <a name="GetStringAttribute" id="@cdktn/provider-cloudflare.pipelineSink.PipelineSinkSchemaOutputReference.getStringAttribute"></a>

```go
func GetStringAttribute(terraformAttribute *string) *string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-cloudflare.pipelineSink.PipelineSinkSchemaOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetStringMapAttribute` <a name="GetStringMapAttribute" id="@cdktn/provider-cloudflare.pipelineSink.PipelineSinkSchemaOutputReference.getStringMapAttribute"></a>

```go
func GetStringMapAttribute(terraformAttribute *string) *map[string]*string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-cloudflare.pipelineSink.PipelineSinkSchemaOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `InterpolationForAttribute` <a name="InterpolationForAttribute" id="@cdktn/provider-cloudflare.pipelineSink.PipelineSinkSchemaOutputReference.interpolationForAttribute"></a>

```go
func InterpolationForAttribute(property *string) IResolvable
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktn/provider-cloudflare.pipelineSink.PipelineSinkSchemaOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* *string

---

##### `Resolve` <a name="Resolve" id="@cdktn/provider-cloudflare.pipelineSink.PipelineSinkSchemaOutputReference.resolve"></a>

```go
func Resolve(_context IResolveContext) interface{}
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktn/provider-cloudflare.pipelineSink.PipelineSinkSchemaOutputReference.resolve.parameter._context"></a>

- *Type:* github.com/open-constructs/cdk-terrain-go/cdktn.IResolveContext

---

##### `ToString` <a name="ToString" id="@cdktn/provider-cloudflare.pipelineSink.PipelineSinkSchemaOutputReference.toString"></a>

```go
func ToString() *string
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `PutFields` <a name="PutFields" id="@cdktn/provider-cloudflare.pipelineSink.PipelineSinkSchemaOutputReference.putFields"></a>

```go
func PutFields(value interface{})
```

###### `value`<sup>Required</sup> <a name="value" id="@cdktn/provider-cloudflare.pipelineSink.PipelineSinkSchemaOutputReference.putFields.parameter.value"></a>

- *Type:* interface{}

---

##### `PutFormat` <a name="PutFormat" id="@cdktn/provider-cloudflare.pipelineSink.PipelineSinkSchemaOutputReference.putFormat"></a>

```go
func PutFormat(value PipelineSinkSchemaFormat)
```

###### `value`<sup>Required</sup> <a name="value" id="@cdktn/provider-cloudflare.pipelineSink.PipelineSinkSchemaOutputReference.putFormat.parameter.value"></a>

- *Type:* <a href="#@cdktn/provider-cloudflare.pipelineSink.PipelineSinkSchemaFormat">PipelineSinkSchemaFormat</a>

---

##### `ResetFields` <a name="ResetFields" id="@cdktn/provider-cloudflare.pipelineSink.PipelineSinkSchemaOutputReference.resetFields"></a>

```go
func ResetFields()
```

##### `ResetFormat` <a name="ResetFormat" id="@cdktn/provider-cloudflare.pipelineSink.PipelineSinkSchemaOutputReference.resetFormat"></a>

```go
func ResetFormat()
```

##### `ResetInferred` <a name="ResetInferred" id="@cdktn/provider-cloudflare.pipelineSink.PipelineSinkSchemaOutputReference.resetInferred"></a>

```go
func ResetInferred()
```


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-cloudflare.pipelineSink.PipelineSinkSchemaOutputReference.property.creationStack">CreationStack</a></code> | <code>*[]*string</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktn/provider-cloudflare.pipelineSink.PipelineSinkSchemaOutputReference.property.fqn">Fqn</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktn/provider-cloudflare.pipelineSink.PipelineSinkSchemaOutputReference.property.fields">Fields</a></code> | <code><a href="#@cdktn/provider-cloudflare.pipelineSink.PipelineSinkSchemaFieldsList">PipelineSinkSchemaFieldsList</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-cloudflare.pipelineSink.PipelineSinkSchemaOutputReference.property.format">Format</a></code> | <code><a href="#@cdktn/provider-cloudflare.pipelineSink.PipelineSinkSchemaFormatOutputReference">PipelineSinkSchemaFormatOutputReference</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-cloudflare.pipelineSink.PipelineSinkSchemaOutputReference.property.fieldsInput">FieldsInput</a></code> | <code>interface{}</code> | *No description.* |
| <code><a href="#@cdktn/provider-cloudflare.pipelineSink.PipelineSinkSchemaOutputReference.property.formatInput">FormatInput</a></code> | <code>interface{}</code> | *No description.* |
| <code><a href="#@cdktn/provider-cloudflare.pipelineSink.PipelineSinkSchemaOutputReference.property.inferredInput">InferredInput</a></code> | <code>interface{}</code> | *No description.* |
| <code><a href="#@cdktn/provider-cloudflare.pipelineSink.PipelineSinkSchemaOutputReference.property.inferred">Inferred</a></code> | <code>interface{}</code> | *No description.* |
| <code><a href="#@cdktn/provider-cloudflare.pipelineSink.PipelineSinkSchemaOutputReference.property.internalValue">InternalValue</a></code> | <code>interface{}</code> | *No description.* |

---

##### `CreationStack`<sup>Required</sup> <a name="CreationStack" id="@cdktn/provider-cloudflare.pipelineSink.PipelineSinkSchemaOutputReference.property.creationStack"></a>

```go
func CreationStack() *[]*string
```

- *Type:* *[]*string

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `Fqn`<sup>Required</sup> <a name="Fqn" id="@cdktn/provider-cloudflare.pipelineSink.PipelineSinkSchemaOutputReference.property.fqn"></a>

```go
func Fqn() *string
```

- *Type:* *string

---

##### `Fields`<sup>Required</sup> <a name="Fields" id="@cdktn/provider-cloudflare.pipelineSink.PipelineSinkSchemaOutputReference.property.fields"></a>

```go
func Fields() PipelineSinkSchemaFieldsList
```

- *Type:* <a href="#@cdktn/provider-cloudflare.pipelineSink.PipelineSinkSchemaFieldsList">PipelineSinkSchemaFieldsList</a>

---

##### `Format`<sup>Required</sup> <a name="Format" id="@cdktn/provider-cloudflare.pipelineSink.PipelineSinkSchemaOutputReference.property.format"></a>

```go
func Format() PipelineSinkSchemaFormatOutputReference
```

- *Type:* <a href="#@cdktn/provider-cloudflare.pipelineSink.PipelineSinkSchemaFormatOutputReference">PipelineSinkSchemaFormatOutputReference</a>

---

##### `FieldsInput`<sup>Optional</sup> <a name="FieldsInput" id="@cdktn/provider-cloudflare.pipelineSink.PipelineSinkSchemaOutputReference.property.fieldsInput"></a>

```go
func FieldsInput() interface{}
```

- *Type:* interface{}

---

##### `FormatInput`<sup>Optional</sup> <a name="FormatInput" id="@cdktn/provider-cloudflare.pipelineSink.PipelineSinkSchemaOutputReference.property.formatInput"></a>

```go
func FormatInput() interface{}
```

- *Type:* interface{}

---

##### `InferredInput`<sup>Optional</sup> <a name="InferredInput" id="@cdktn/provider-cloudflare.pipelineSink.PipelineSinkSchemaOutputReference.property.inferredInput"></a>

```go
func InferredInput() interface{}
```

- *Type:* interface{}

---

##### `Inferred`<sup>Required</sup> <a name="Inferred" id="@cdktn/provider-cloudflare.pipelineSink.PipelineSinkSchemaOutputReference.property.inferred"></a>

```go
func Inferred() interface{}
```

- *Type:* interface{}

---

##### `InternalValue`<sup>Optional</sup> <a name="InternalValue" id="@cdktn/provider-cloudflare.pipelineSink.PipelineSinkSchemaOutputReference.property.internalValue"></a>

```go
func InternalValue() interface{}
```

- *Type:* interface{}

---



