# `worker` Submodule <a name="`worker` Submodule" id="@cdktn/provider-cloudflare.worker"></a>

## Constructs <a name="Constructs" id="Constructs"></a>

### Worker <a name="Worker" id="@cdktn/provider-cloudflare.worker.Worker"></a>

Represents a {@link https://registry.terraform.io/providers/cloudflare/cloudflare/5.26.0/docs/resources/worker cloudflare_worker}.

#### Initializers <a name="Initializers" id="@cdktn/provider-cloudflare.worker.Worker.Initializer"></a>

```go
import "github.com/cdktn-io/cdktn-provider-cloudflare-go/cloudflare/v16/worker"

worker.NewWorker(scope Construct, id *string, config WorkerConfig) Worker
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-cloudflare.worker.Worker.Initializer.parameter.scope">scope</a></code> | <code>github.com/aws/constructs-go/constructs/v10.Construct</code> | The scope in which to define this construct. |
| <code><a href="#@cdktn/provider-cloudflare.worker.Worker.Initializer.parameter.id">id</a></code> | <code>*string</code> | The scoped construct ID. |
| <code><a href="#@cdktn/provider-cloudflare.worker.Worker.Initializer.parameter.config">config</a></code> | <code><a href="#@cdktn/provider-cloudflare.worker.WorkerConfig">WorkerConfig</a></code> | *No description.* |

---

##### `scope`<sup>Required</sup> <a name="scope" id="@cdktn/provider-cloudflare.worker.Worker.Initializer.parameter.scope"></a>

- *Type:* github.com/aws/constructs-go/constructs/v10.Construct

The scope in which to define this construct.

---

##### `id`<sup>Required</sup> <a name="id" id="@cdktn/provider-cloudflare.worker.Worker.Initializer.parameter.id"></a>

- *Type:* *string

The scoped construct ID.

Must be unique amongst siblings in the same scope

---

##### `config`<sup>Required</sup> <a name="config" id="@cdktn/provider-cloudflare.worker.Worker.Initializer.parameter.config"></a>

- *Type:* <a href="#@cdktn/provider-cloudflare.worker.WorkerConfig">WorkerConfig</a>

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-cloudflare.worker.Worker.toString">ToString</a></code> | Returns a string representation of this construct. |
| <code><a href="#@cdktn/provider-cloudflare.worker.Worker.with">With</a></code> | Applies one or more mixins to this construct. |
| <code><a href="#@cdktn/provider-cloudflare.worker.Worker.addOverride">AddOverride</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-cloudflare.worker.Worker.overrideLogicalId">OverrideLogicalId</a></code> | Overrides the auto-generated logical ID with a specific ID. |
| <code><a href="#@cdktn/provider-cloudflare.worker.Worker.resetOverrideLogicalId">ResetOverrideLogicalId</a></code> | Resets a previously passed logical Id to use the auto-generated logical id again. |
| <code><a href="#@cdktn/provider-cloudflare.worker.Worker.toHclTerraform">ToHclTerraform</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-cloudflare.worker.Worker.toMetadata">ToMetadata</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-cloudflare.worker.Worker.toTerraform">ToTerraform</a></code> | Adds this resource to the terraform JSON output. |
| <code><a href="#@cdktn/provider-cloudflare.worker.Worker.addMoveTarget">AddMoveTarget</a></code> | Adds a user defined moveTarget string to this resource to be later used in .moveTo(moveTarget) to resolve the location of the move. |
| <code><a href="#@cdktn/provider-cloudflare.worker.Worker.getAnyMapAttribute">GetAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-cloudflare.worker.Worker.getBooleanAttribute">GetBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-cloudflare.worker.Worker.getBooleanMapAttribute">GetBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-cloudflare.worker.Worker.getListAttribute">GetListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-cloudflare.worker.Worker.getNumberAttribute">GetNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-cloudflare.worker.Worker.getNumberListAttribute">GetNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-cloudflare.worker.Worker.getNumberMapAttribute">GetNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-cloudflare.worker.Worker.getStringAttribute">GetStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-cloudflare.worker.Worker.getStringMapAttribute">GetStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-cloudflare.worker.Worker.hasResourceMove">HasResourceMove</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-cloudflare.worker.Worker.importFrom">ImportFrom</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-cloudflare.worker.Worker.interpolationForAttribute">InterpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-cloudflare.worker.Worker.moveFromId">MoveFromId</a></code> | Move the resource corresponding to "id" to this resource. |
| <code><a href="#@cdktn/provider-cloudflare.worker.Worker.moveTo">MoveTo</a></code> | Moves this resource to the target resource given by moveTarget. |
| <code><a href="#@cdktn/provider-cloudflare.worker.Worker.moveToId">MoveToId</a></code> | Moves this resource to the resource corresponding to "id". |
| <code><a href="#@cdktn/provider-cloudflare.worker.Worker.putObservability">PutObservability</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-cloudflare.worker.Worker.putPreviewsBaseConfig">PutPreviewsBaseConfig</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-cloudflare.worker.Worker.putSubdomain">PutSubdomain</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-cloudflare.worker.Worker.putTailConsumers">PutTailConsumers</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-cloudflare.worker.Worker.resetForce">ResetForce</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-cloudflare.worker.Worker.resetLogpush">ResetLogpush</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-cloudflare.worker.Worker.resetObservability">ResetObservability</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-cloudflare.worker.Worker.resetPreviewsBaseConfig">ResetPreviewsBaseConfig</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-cloudflare.worker.Worker.resetSubdomain">ResetSubdomain</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-cloudflare.worker.Worker.resetTags">ResetTags</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-cloudflare.worker.Worker.resetTailConsumers">ResetTailConsumers</a></code> | *No description.* |

---

##### `ToString` <a name="ToString" id="@cdktn/provider-cloudflare.worker.Worker.toString"></a>

```go
func ToString() *string
```

Returns a string representation of this construct.

##### `With` <a name="With" id="@cdktn/provider-cloudflare.worker.Worker.with"></a>

```go
func With(mixins ...IMixin) IConstruct
```

Applies one or more mixins to this construct.

Mixins are applied in order. The list of constructs is captured at the
start of the call, so constructs added by a mixin will not be visited.
Use multiple `with()` calls if subsequent mixins should apply to added
constructs.

###### `mixins`<sup>Required</sup> <a name="mixins" id="@cdktn/provider-cloudflare.worker.Worker.with.parameter.mixins"></a>

- *Type:* ...github.com/aws/constructs-go/constructs/v10.IMixin

The mixins to apply.

---

##### `AddOverride` <a name="AddOverride" id="@cdktn/provider-cloudflare.worker.Worker.addOverride"></a>

```go
func AddOverride(path *string, value interface{})
```

###### `path`<sup>Required</sup> <a name="path" id="@cdktn/provider-cloudflare.worker.Worker.addOverride.parameter.path"></a>

- *Type:* *string

---

###### `value`<sup>Required</sup> <a name="value" id="@cdktn/provider-cloudflare.worker.Worker.addOverride.parameter.value"></a>

- *Type:* interface{}

---

##### `OverrideLogicalId` <a name="OverrideLogicalId" id="@cdktn/provider-cloudflare.worker.Worker.overrideLogicalId"></a>

```go
func OverrideLogicalId(newLogicalId *string)
```

Overrides the auto-generated logical ID with a specific ID.

###### `newLogicalId`<sup>Required</sup> <a name="newLogicalId" id="@cdktn/provider-cloudflare.worker.Worker.overrideLogicalId.parameter.newLogicalId"></a>

- *Type:* *string

The new logical ID to use for this stack element.

---

##### `ResetOverrideLogicalId` <a name="ResetOverrideLogicalId" id="@cdktn/provider-cloudflare.worker.Worker.resetOverrideLogicalId"></a>

```go
func ResetOverrideLogicalId()
```

Resets a previously passed logical Id to use the auto-generated logical id again.

##### `ToHclTerraform` <a name="ToHclTerraform" id="@cdktn/provider-cloudflare.worker.Worker.toHclTerraform"></a>

```go
func ToHclTerraform() interface{}
```

##### `ToMetadata` <a name="ToMetadata" id="@cdktn/provider-cloudflare.worker.Worker.toMetadata"></a>

```go
func ToMetadata() interface{}
```

##### `ToTerraform` <a name="ToTerraform" id="@cdktn/provider-cloudflare.worker.Worker.toTerraform"></a>

```go
func ToTerraform() interface{}
```

Adds this resource to the terraform JSON output.

##### `AddMoveTarget` <a name="AddMoveTarget" id="@cdktn/provider-cloudflare.worker.Worker.addMoveTarget"></a>

```go
func AddMoveTarget(moveTarget *string)
```

Adds a user defined moveTarget string to this resource to be later used in .moveTo(moveTarget) to resolve the location of the move.

###### `moveTarget`<sup>Required</sup> <a name="moveTarget" id="@cdktn/provider-cloudflare.worker.Worker.addMoveTarget.parameter.moveTarget"></a>

- *Type:* *string

The string move target that will correspond to this resource.

---

##### `GetAnyMapAttribute` <a name="GetAnyMapAttribute" id="@cdktn/provider-cloudflare.worker.Worker.getAnyMapAttribute"></a>

```go
func GetAnyMapAttribute(terraformAttribute *string) *map[string]interface{}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-cloudflare.worker.Worker.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetBooleanAttribute` <a name="GetBooleanAttribute" id="@cdktn/provider-cloudflare.worker.Worker.getBooleanAttribute"></a>

```go
func GetBooleanAttribute(terraformAttribute *string) IResolvable
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-cloudflare.worker.Worker.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetBooleanMapAttribute` <a name="GetBooleanMapAttribute" id="@cdktn/provider-cloudflare.worker.Worker.getBooleanMapAttribute"></a>

```go
func GetBooleanMapAttribute(terraformAttribute *string) *map[string]*bool
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-cloudflare.worker.Worker.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetListAttribute` <a name="GetListAttribute" id="@cdktn/provider-cloudflare.worker.Worker.getListAttribute"></a>

```go
func GetListAttribute(terraformAttribute *string) *[]*string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-cloudflare.worker.Worker.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberAttribute` <a name="GetNumberAttribute" id="@cdktn/provider-cloudflare.worker.Worker.getNumberAttribute"></a>

```go
func GetNumberAttribute(terraformAttribute *string) *f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-cloudflare.worker.Worker.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberListAttribute` <a name="GetNumberListAttribute" id="@cdktn/provider-cloudflare.worker.Worker.getNumberListAttribute"></a>

```go
func GetNumberListAttribute(terraformAttribute *string) *[]*f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-cloudflare.worker.Worker.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberMapAttribute` <a name="GetNumberMapAttribute" id="@cdktn/provider-cloudflare.worker.Worker.getNumberMapAttribute"></a>

```go
func GetNumberMapAttribute(terraformAttribute *string) *map[string]*f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-cloudflare.worker.Worker.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetStringAttribute` <a name="GetStringAttribute" id="@cdktn/provider-cloudflare.worker.Worker.getStringAttribute"></a>

```go
func GetStringAttribute(terraformAttribute *string) *string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-cloudflare.worker.Worker.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetStringMapAttribute` <a name="GetStringMapAttribute" id="@cdktn/provider-cloudflare.worker.Worker.getStringMapAttribute"></a>

```go
func GetStringMapAttribute(terraformAttribute *string) *map[string]*string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-cloudflare.worker.Worker.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `HasResourceMove` <a name="HasResourceMove" id="@cdktn/provider-cloudflare.worker.Worker.hasResourceMove"></a>

```go
func HasResourceMove() interface{}
```

##### `ImportFrom` <a name="ImportFrom" id="@cdktn/provider-cloudflare.worker.Worker.importFrom"></a>

```go
func ImportFrom(id *string, provider TerraformProvider)
```

###### `id`<sup>Required</sup> <a name="id" id="@cdktn/provider-cloudflare.worker.Worker.importFrom.parameter.id"></a>

- *Type:* *string

---

###### `provider`<sup>Optional</sup> <a name="provider" id="@cdktn/provider-cloudflare.worker.Worker.importFrom.parameter.provider"></a>

- *Type:* github.com/open-constructs/cdk-terrain-go/cdktn.TerraformProvider

---

##### `InterpolationForAttribute` <a name="InterpolationForAttribute" id="@cdktn/provider-cloudflare.worker.Worker.interpolationForAttribute"></a>

```go
func InterpolationForAttribute(terraformAttribute *string) IResolvable
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-cloudflare.worker.Worker.interpolationForAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `MoveFromId` <a name="MoveFromId" id="@cdktn/provider-cloudflare.worker.Worker.moveFromId"></a>

```go
func MoveFromId(id *string)
```

Move the resource corresponding to "id" to this resource.

Note that the resource being moved from must be marked as moved using its instance function.

###### `id`<sup>Required</sup> <a name="id" id="@cdktn/provider-cloudflare.worker.Worker.moveFromId.parameter.id"></a>

- *Type:* *string

Full id of resource being moved from, e.g. "aws_s3_bucket.example".

---

##### `MoveTo` <a name="MoveTo" id="@cdktn/provider-cloudflare.worker.Worker.moveTo"></a>

```go
func MoveTo(moveTarget *string, index interface{})
```

Moves this resource to the target resource given by moveTarget.

###### `moveTarget`<sup>Required</sup> <a name="moveTarget" id="@cdktn/provider-cloudflare.worker.Worker.moveTo.parameter.moveTarget"></a>

- *Type:* *string

The previously set user defined string set by .addMoveTarget() corresponding to the resource to move to.

---

###### `index`<sup>Optional</sup> <a name="index" id="@cdktn/provider-cloudflare.worker.Worker.moveTo.parameter.index"></a>

- *Type:* interface{}

Optional The index corresponding to the key the resource is to appear in the foreach of a resource to move to.

---

##### `MoveToId` <a name="MoveToId" id="@cdktn/provider-cloudflare.worker.Worker.moveToId"></a>

```go
func MoveToId(id *string)
```

Moves this resource to the resource corresponding to "id".

###### `id`<sup>Required</sup> <a name="id" id="@cdktn/provider-cloudflare.worker.Worker.moveToId.parameter.id"></a>

- *Type:* *string

Full id of resource to move to, e.g. "aws_s3_bucket.example".

---

##### `PutObservability` <a name="PutObservability" id="@cdktn/provider-cloudflare.worker.Worker.putObservability"></a>

```go
func PutObservability(value WorkerObservability)
```

###### `value`<sup>Required</sup> <a name="value" id="@cdktn/provider-cloudflare.worker.Worker.putObservability.parameter.value"></a>

- *Type:* <a href="#@cdktn/provider-cloudflare.worker.WorkerObservability">WorkerObservability</a>

---

##### `PutPreviewsBaseConfig` <a name="PutPreviewsBaseConfig" id="@cdktn/provider-cloudflare.worker.Worker.putPreviewsBaseConfig"></a>

```go
func PutPreviewsBaseConfig(value WorkerPreviewsBaseConfig)
```

###### `value`<sup>Required</sup> <a name="value" id="@cdktn/provider-cloudflare.worker.Worker.putPreviewsBaseConfig.parameter.value"></a>

- *Type:* <a href="#@cdktn/provider-cloudflare.worker.WorkerPreviewsBaseConfig">WorkerPreviewsBaseConfig</a>

---

##### `PutSubdomain` <a name="PutSubdomain" id="@cdktn/provider-cloudflare.worker.Worker.putSubdomain"></a>

```go
func PutSubdomain(value WorkerSubdomain)
```

###### `value`<sup>Required</sup> <a name="value" id="@cdktn/provider-cloudflare.worker.Worker.putSubdomain.parameter.value"></a>

- *Type:* <a href="#@cdktn/provider-cloudflare.worker.WorkerSubdomain">WorkerSubdomain</a>

---

##### `PutTailConsumers` <a name="PutTailConsumers" id="@cdktn/provider-cloudflare.worker.Worker.putTailConsumers"></a>

```go
func PutTailConsumers(value interface{})
```

###### `value`<sup>Required</sup> <a name="value" id="@cdktn/provider-cloudflare.worker.Worker.putTailConsumers.parameter.value"></a>

- *Type:* interface{}

---

##### `ResetForce` <a name="ResetForce" id="@cdktn/provider-cloudflare.worker.Worker.resetForce"></a>

```go
func ResetForce()
```

##### `ResetLogpush` <a name="ResetLogpush" id="@cdktn/provider-cloudflare.worker.Worker.resetLogpush"></a>

```go
func ResetLogpush()
```

##### `ResetObservability` <a name="ResetObservability" id="@cdktn/provider-cloudflare.worker.Worker.resetObservability"></a>

```go
func ResetObservability()
```

##### `ResetPreviewsBaseConfig` <a name="ResetPreviewsBaseConfig" id="@cdktn/provider-cloudflare.worker.Worker.resetPreviewsBaseConfig"></a>

```go
func ResetPreviewsBaseConfig()
```

##### `ResetSubdomain` <a name="ResetSubdomain" id="@cdktn/provider-cloudflare.worker.Worker.resetSubdomain"></a>

```go
func ResetSubdomain()
```

##### `ResetTags` <a name="ResetTags" id="@cdktn/provider-cloudflare.worker.Worker.resetTags"></a>

```go
func ResetTags()
```

##### `ResetTailConsumers` <a name="ResetTailConsumers" id="@cdktn/provider-cloudflare.worker.Worker.resetTailConsumers"></a>

```go
func ResetTailConsumers()
```

#### Static Functions <a name="Static Functions" id="Static Functions"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-cloudflare.worker.Worker.isConstruct">IsConstruct</a></code> | Checks if `x` is a construct. |
| <code><a href="#@cdktn/provider-cloudflare.worker.Worker.isTerraformElement">IsTerraformElement</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-cloudflare.worker.Worker.isTerraformResource">IsTerraformResource</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-cloudflare.worker.Worker.generateConfigForImport">GenerateConfigForImport</a></code> | Generates CDKTN code for importing a Worker resource upon running "cdktn plan <stack-name>". |

---

##### `IsConstruct` <a name="IsConstruct" id="@cdktn/provider-cloudflare.worker.Worker.isConstruct"></a>

```go
import "github.com/cdktn-io/cdktn-provider-cloudflare-go/cloudflare/v16/worker"

worker.Worker_IsConstruct(x interface{}) *bool
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

###### `x`<sup>Required</sup> <a name="x" id="@cdktn/provider-cloudflare.worker.Worker.isConstruct.parameter.x"></a>

- *Type:* interface{}

Any object.

---

##### `IsTerraformElement` <a name="IsTerraformElement" id="@cdktn/provider-cloudflare.worker.Worker.isTerraformElement"></a>

```go
import "github.com/cdktn-io/cdktn-provider-cloudflare-go/cloudflare/v16/worker"

worker.Worker_IsTerraformElement(x interface{}) *bool
```

###### `x`<sup>Required</sup> <a name="x" id="@cdktn/provider-cloudflare.worker.Worker.isTerraformElement.parameter.x"></a>

- *Type:* interface{}

---

##### `IsTerraformResource` <a name="IsTerraformResource" id="@cdktn/provider-cloudflare.worker.Worker.isTerraformResource"></a>

```go
import "github.com/cdktn-io/cdktn-provider-cloudflare-go/cloudflare/v16/worker"

worker.Worker_IsTerraformResource(x interface{}) *bool
```

###### `x`<sup>Required</sup> <a name="x" id="@cdktn/provider-cloudflare.worker.Worker.isTerraformResource.parameter.x"></a>

- *Type:* interface{}

---

##### `GenerateConfigForImport` <a name="GenerateConfigForImport" id="@cdktn/provider-cloudflare.worker.Worker.generateConfigForImport"></a>

```go
import "github.com/cdktn-io/cdktn-provider-cloudflare-go/cloudflare/v16/worker"

worker.Worker_GenerateConfigForImport(scope Construct, importToId *string, importFromId *string, provider TerraformProvider) ImportableResource
```

Generates CDKTN code for importing a Worker resource upon running "cdktn plan <stack-name>".

###### `scope`<sup>Required</sup> <a name="scope" id="@cdktn/provider-cloudflare.worker.Worker.generateConfigForImport.parameter.scope"></a>

- *Type:* github.com/aws/constructs-go/constructs/v10.Construct

The scope in which to define this construct.

---

###### `importToId`<sup>Required</sup> <a name="importToId" id="@cdktn/provider-cloudflare.worker.Worker.generateConfigForImport.parameter.importToId"></a>

- *Type:* *string

The construct id used in the generated config for the Worker to import.

---

###### `importFromId`<sup>Required</sup> <a name="importFromId" id="@cdktn/provider-cloudflare.worker.Worker.generateConfigForImport.parameter.importFromId"></a>

- *Type:* *string

The id of the existing Worker that should be imported.

Refer to the {@link https://registry.terraform.io/providers/cloudflare/cloudflare/5.26.0/docs/resources/worker#import import section} in the documentation of this resource for the id to use

---

###### `provider`<sup>Optional</sup> <a name="provider" id="@cdktn/provider-cloudflare.worker.Worker.generateConfigForImport.parameter.provider"></a>

- *Type:* github.com/open-constructs/cdk-terrain-go/cdktn.TerraformProvider

? Optional instance of the provider where the Worker to import is found.

---

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-cloudflare.worker.Worker.property.node">Node</a></code> | <code>github.com/aws/constructs-go/constructs/v10.Node</code> | The tree node. |
| <code><a href="#@cdktn/provider-cloudflare.worker.Worker.property.cdktfStack">CdktfStack</a></code> | <code>github.com/open-constructs/cdk-terrain-go/cdktn.TerraformStack</code> | *No description.* |
| <code><a href="#@cdktn/provider-cloudflare.worker.Worker.property.fqn">Fqn</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktn/provider-cloudflare.worker.Worker.property.friendlyUniqueId">FriendlyUniqueId</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktn/provider-cloudflare.worker.Worker.property.terraformMetaArguments">TerraformMetaArguments</a></code> | <code>*map[string]interface{}</code> | *No description.* |
| <code><a href="#@cdktn/provider-cloudflare.worker.Worker.property.terraformResourceType">TerraformResourceType</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktn/provider-cloudflare.worker.Worker.property.terraformGeneratorMetadata">TerraformGeneratorMetadata</a></code> | <code>github.com/open-constructs/cdk-terrain-go/cdktn.TerraformProviderGeneratorMetadata</code> | *No description.* |
| <code><a href="#@cdktn/provider-cloudflare.worker.Worker.property.connection">Connection</a></code> | <code>interface{}</code> | *No description.* |
| <code><a href="#@cdktn/provider-cloudflare.worker.Worker.property.count">Count</a></code> | <code>interface{}</code> | *No description.* |
| <code><a href="#@cdktn/provider-cloudflare.worker.Worker.property.dependsOn">DependsOn</a></code> | <code>*[]*string</code> | *No description.* |
| <code><a href="#@cdktn/provider-cloudflare.worker.Worker.property.forEach">ForEach</a></code> | <code>github.com/open-constructs/cdk-terrain-go/cdktn.ITerraformIterator</code> | *No description.* |
| <code><a href="#@cdktn/provider-cloudflare.worker.Worker.property.lifecycle">Lifecycle</a></code> | <code>github.com/open-constructs/cdk-terrain-go/cdktn.TerraformResourceLifecycle</code> | *No description.* |
| <code><a href="#@cdktn/provider-cloudflare.worker.Worker.property.provider">Provider</a></code> | <code>github.com/open-constructs/cdk-terrain-go/cdktn.TerraformProvider</code> | *No description.* |
| <code><a href="#@cdktn/provider-cloudflare.worker.Worker.property.provisioners">Provisioners</a></code> | <code>*[]interface{}</code> | *No description.* |
| <code><a href="#@cdktn/provider-cloudflare.worker.Worker.property.createdOn">CreatedOn</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktn/provider-cloudflare.worker.Worker.property.deployedOn">DeployedOn</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktn/provider-cloudflare.worker.Worker.property.id">Id</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktn/provider-cloudflare.worker.Worker.property.observability">Observability</a></code> | <code><a href="#@cdktn/provider-cloudflare.worker.WorkerObservabilityOutputReference">WorkerObservabilityOutputReference</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-cloudflare.worker.Worker.property.previewsBaseConfig">PreviewsBaseConfig</a></code> | <code><a href="#@cdktn/provider-cloudflare.worker.WorkerPreviewsBaseConfigOutputReference">WorkerPreviewsBaseConfigOutputReference</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-cloudflare.worker.Worker.property.references">References</a></code> | <code><a href="#@cdktn/provider-cloudflare.worker.WorkerReferencesOutputReference">WorkerReferencesOutputReference</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-cloudflare.worker.Worker.property.subdomain">Subdomain</a></code> | <code><a href="#@cdktn/provider-cloudflare.worker.WorkerSubdomainOutputReference">WorkerSubdomainOutputReference</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-cloudflare.worker.Worker.property.tailConsumers">TailConsumers</a></code> | <code><a href="#@cdktn/provider-cloudflare.worker.WorkerTailConsumersList">WorkerTailConsumersList</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-cloudflare.worker.Worker.property.updatedOn">UpdatedOn</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktn/provider-cloudflare.worker.Worker.property.accountIdInput">AccountIdInput</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktn/provider-cloudflare.worker.Worker.property.forceInput">ForceInput</a></code> | <code>interface{}</code> | *No description.* |
| <code><a href="#@cdktn/provider-cloudflare.worker.Worker.property.logpushInput">LogpushInput</a></code> | <code>interface{}</code> | *No description.* |
| <code><a href="#@cdktn/provider-cloudflare.worker.Worker.property.nameInput">NameInput</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktn/provider-cloudflare.worker.Worker.property.observabilityInput">ObservabilityInput</a></code> | <code>interface{}</code> | *No description.* |
| <code><a href="#@cdktn/provider-cloudflare.worker.Worker.property.previewsBaseConfigInput">PreviewsBaseConfigInput</a></code> | <code>interface{}</code> | *No description.* |
| <code><a href="#@cdktn/provider-cloudflare.worker.Worker.property.subdomainInput">SubdomainInput</a></code> | <code>interface{}</code> | *No description.* |
| <code><a href="#@cdktn/provider-cloudflare.worker.Worker.property.tagsInput">TagsInput</a></code> | <code>*[]*string</code> | *No description.* |
| <code><a href="#@cdktn/provider-cloudflare.worker.Worker.property.tailConsumersInput">TailConsumersInput</a></code> | <code>interface{}</code> | *No description.* |
| <code><a href="#@cdktn/provider-cloudflare.worker.Worker.property.accountId">AccountId</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktn/provider-cloudflare.worker.Worker.property.force">Force</a></code> | <code>interface{}</code> | *No description.* |
| <code><a href="#@cdktn/provider-cloudflare.worker.Worker.property.logpush">Logpush</a></code> | <code>interface{}</code> | *No description.* |
| <code><a href="#@cdktn/provider-cloudflare.worker.Worker.property.name">Name</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktn/provider-cloudflare.worker.Worker.property.tags">Tags</a></code> | <code>*[]*string</code> | *No description.* |

---

##### `Node`<sup>Required</sup> <a name="Node" id="@cdktn/provider-cloudflare.worker.Worker.property.node"></a>

```go
func Node() Node
```

- *Type:* github.com/aws/constructs-go/constructs/v10.Node

The tree node.

---

##### `CdktfStack`<sup>Required</sup> <a name="CdktfStack" id="@cdktn/provider-cloudflare.worker.Worker.property.cdktfStack"></a>

```go
func CdktfStack() TerraformStack
```

- *Type:* github.com/open-constructs/cdk-terrain-go/cdktn.TerraformStack

---

##### `Fqn`<sup>Required</sup> <a name="Fqn" id="@cdktn/provider-cloudflare.worker.Worker.property.fqn"></a>

```go
func Fqn() *string
```

- *Type:* *string

---

##### `FriendlyUniqueId`<sup>Required</sup> <a name="FriendlyUniqueId" id="@cdktn/provider-cloudflare.worker.Worker.property.friendlyUniqueId"></a>

```go
func FriendlyUniqueId() *string
```

- *Type:* *string

---

##### `TerraformMetaArguments`<sup>Required</sup> <a name="TerraformMetaArguments" id="@cdktn/provider-cloudflare.worker.Worker.property.terraformMetaArguments"></a>

```go
func TerraformMetaArguments() *map[string]interface{}
```

- *Type:* *map[string]interface{}

---

##### `TerraformResourceType`<sup>Required</sup> <a name="TerraformResourceType" id="@cdktn/provider-cloudflare.worker.Worker.property.terraformResourceType"></a>

```go
func TerraformResourceType() *string
```

- *Type:* *string

---

##### `TerraformGeneratorMetadata`<sup>Optional</sup> <a name="TerraformGeneratorMetadata" id="@cdktn/provider-cloudflare.worker.Worker.property.terraformGeneratorMetadata"></a>

```go
func TerraformGeneratorMetadata() TerraformProviderGeneratorMetadata
```

- *Type:* github.com/open-constructs/cdk-terrain-go/cdktn.TerraformProviderGeneratorMetadata

---

##### `Connection`<sup>Optional</sup> <a name="Connection" id="@cdktn/provider-cloudflare.worker.Worker.property.connection"></a>

```go
func Connection() interface{}
```

- *Type:* interface{}

---

##### `Count`<sup>Optional</sup> <a name="Count" id="@cdktn/provider-cloudflare.worker.Worker.property.count"></a>

```go
func Count() interface{}
```

- *Type:* interface{}

---

##### `DependsOn`<sup>Optional</sup> <a name="DependsOn" id="@cdktn/provider-cloudflare.worker.Worker.property.dependsOn"></a>

```go
func DependsOn() *[]*string
```

- *Type:* *[]*string

---

##### `ForEach`<sup>Optional</sup> <a name="ForEach" id="@cdktn/provider-cloudflare.worker.Worker.property.forEach"></a>

```go
func ForEach() ITerraformIterator
```

- *Type:* github.com/open-constructs/cdk-terrain-go/cdktn.ITerraformIterator

---

##### `Lifecycle`<sup>Optional</sup> <a name="Lifecycle" id="@cdktn/provider-cloudflare.worker.Worker.property.lifecycle"></a>

```go
func Lifecycle() TerraformResourceLifecycle
```

- *Type:* github.com/open-constructs/cdk-terrain-go/cdktn.TerraformResourceLifecycle

---

##### `Provider`<sup>Optional</sup> <a name="Provider" id="@cdktn/provider-cloudflare.worker.Worker.property.provider"></a>

```go
func Provider() TerraformProvider
```

- *Type:* github.com/open-constructs/cdk-terrain-go/cdktn.TerraformProvider

---

##### `Provisioners`<sup>Optional</sup> <a name="Provisioners" id="@cdktn/provider-cloudflare.worker.Worker.property.provisioners"></a>

```go
func Provisioners() *[]interface{}
```

- *Type:* *[]interface{}

---

##### `CreatedOn`<sup>Required</sup> <a name="CreatedOn" id="@cdktn/provider-cloudflare.worker.Worker.property.createdOn"></a>

```go
func CreatedOn() *string
```

- *Type:* *string

---

##### `DeployedOn`<sup>Required</sup> <a name="DeployedOn" id="@cdktn/provider-cloudflare.worker.Worker.property.deployedOn"></a>

```go
func DeployedOn() *string
```

- *Type:* *string

---

##### `Id`<sup>Required</sup> <a name="Id" id="@cdktn/provider-cloudflare.worker.Worker.property.id"></a>

```go
func Id() *string
```

- *Type:* *string

---

##### `Observability`<sup>Required</sup> <a name="Observability" id="@cdktn/provider-cloudflare.worker.Worker.property.observability"></a>

```go
func Observability() WorkerObservabilityOutputReference
```

- *Type:* <a href="#@cdktn/provider-cloudflare.worker.WorkerObservabilityOutputReference">WorkerObservabilityOutputReference</a>

---

##### `PreviewsBaseConfig`<sup>Required</sup> <a name="PreviewsBaseConfig" id="@cdktn/provider-cloudflare.worker.Worker.property.previewsBaseConfig"></a>

```go
func PreviewsBaseConfig() WorkerPreviewsBaseConfigOutputReference
```

- *Type:* <a href="#@cdktn/provider-cloudflare.worker.WorkerPreviewsBaseConfigOutputReference">WorkerPreviewsBaseConfigOutputReference</a>

---

##### `References`<sup>Required</sup> <a name="References" id="@cdktn/provider-cloudflare.worker.Worker.property.references"></a>

```go
func References() WorkerReferencesOutputReference
```

- *Type:* <a href="#@cdktn/provider-cloudflare.worker.WorkerReferencesOutputReference">WorkerReferencesOutputReference</a>

---

##### `Subdomain`<sup>Required</sup> <a name="Subdomain" id="@cdktn/provider-cloudflare.worker.Worker.property.subdomain"></a>

```go
func Subdomain() WorkerSubdomainOutputReference
```

- *Type:* <a href="#@cdktn/provider-cloudflare.worker.WorkerSubdomainOutputReference">WorkerSubdomainOutputReference</a>

---

##### `TailConsumers`<sup>Required</sup> <a name="TailConsumers" id="@cdktn/provider-cloudflare.worker.Worker.property.tailConsumers"></a>

```go
func TailConsumers() WorkerTailConsumersList
```

- *Type:* <a href="#@cdktn/provider-cloudflare.worker.WorkerTailConsumersList">WorkerTailConsumersList</a>

---

##### `UpdatedOn`<sup>Required</sup> <a name="UpdatedOn" id="@cdktn/provider-cloudflare.worker.Worker.property.updatedOn"></a>

```go
func UpdatedOn() *string
```

- *Type:* *string

---

##### `AccountIdInput`<sup>Optional</sup> <a name="AccountIdInput" id="@cdktn/provider-cloudflare.worker.Worker.property.accountIdInput"></a>

```go
func AccountIdInput() *string
```

- *Type:* *string

---

##### `ForceInput`<sup>Optional</sup> <a name="ForceInput" id="@cdktn/provider-cloudflare.worker.Worker.property.forceInput"></a>

```go
func ForceInput() interface{}
```

- *Type:* interface{}

---

##### `LogpushInput`<sup>Optional</sup> <a name="LogpushInput" id="@cdktn/provider-cloudflare.worker.Worker.property.logpushInput"></a>

```go
func LogpushInput() interface{}
```

- *Type:* interface{}

---

##### `NameInput`<sup>Optional</sup> <a name="NameInput" id="@cdktn/provider-cloudflare.worker.Worker.property.nameInput"></a>

```go
func NameInput() *string
```

- *Type:* *string

---

##### `ObservabilityInput`<sup>Optional</sup> <a name="ObservabilityInput" id="@cdktn/provider-cloudflare.worker.Worker.property.observabilityInput"></a>

```go
func ObservabilityInput() interface{}
```

- *Type:* interface{}

---

##### `PreviewsBaseConfigInput`<sup>Optional</sup> <a name="PreviewsBaseConfigInput" id="@cdktn/provider-cloudflare.worker.Worker.property.previewsBaseConfigInput"></a>

```go
func PreviewsBaseConfigInput() interface{}
```

- *Type:* interface{}

---

##### `SubdomainInput`<sup>Optional</sup> <a name="SubdomainInput" id="@cdktn/provider-cloudflare.worker.Worker.property.subdomainInput"></a>

```go
func SubdomainInput() interface{}
```

- *Type:* interface{}

---

##### `TagsInput`<sup>Optional</sup> <a name="TagsInput" id="@cdktn/provider-cloudflare.worker.Worker.property.tagsInput"></a>

```go
func TagsInput() *[]*string
```

- *Type:* *[]*string

---

##### `TailConsumersInput`<sup>Optional</sup> <a name="TailConsumersInput" id="@cdktn/provider-cloudflare.worker.Worker.property.tailConsumersInput"></a>

```go
func TailConsumersInput() interface{}
```

- *Type:* interface{}

---

##### `AccountId`<sup>Required</sup> <a name="AccountId" id="@cdktn/provider-cloudflare.worker.Worker.property.accountId"></a>

```go
func AccountId() *string
```

- *Type:* *string

---

##### `Force`<sup>Required</sup> <a name="Force" id="@cdktn/provider-cloudflare.worker.Worker.property.force"></a>

```go
func Force() interface{}
```

- *Type:* interface{}

---

##### `Logpush`<sup>Required</sup> <a name="Logpush" id="@cdktn/provider-cloudflare.worker.Worker.property.logpush"></a>

```go
func Logpush() interface{}
```

- *Type:* interface{}

---

##### `Name`<sup>Required</sup> <a name="Name" id="@cdktn/provider-cloudflare.worker.Worker.property.name"></a>

```go
func Name() *string
```

- *Type:* *string

---

##### `Tags`<sup>Required</sup> <a name="Tags" id="@cdktn/provider-cloudflare.worker.Worker.property.tags"></a>

```go
func Tags() *[]*string
```

- *Type:* *[]*string

---

#### Constants <a name="Constants" id="Constants"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-cloudflare.worker.Worker.property.tfResourceType">TfResourceType</a></code> | <code>*string</code> | *No description.* |

---

##### `TfResourceType`<sup>Required</sup> <a name="TfResourceType" id="@cdktn/provider-cloudflare.worker.Worker.property.tfResourceType"></a>

```go
func TfResourceType() *string
```

- *Type:* *string

---

## Structs <a name="Structs" id="Structs"></a>

### WorkerConfig <a name="WorkerConfig" id="@cdktn/provider-cloudflare.worker.WorkerConfig"></a>

#### Initializer <a name="Initializer" id="@cdktn/provider-cloudflare.worker.WorkerConfig.Initializer"></a>

```go
import "github.com/cdktn-io/cdktn-provider-cloudflare-go/cloudflare/v16/worker"

&worker.WorkerConfig {
	Connection: interface{},
	Count: interface{},
	DependsOn: *[]github.com/open-constructs/cdk-terrain-go/cdktn.ITerraformDependable,
	ForEach: github.com/open-constructs/cdk-terrain-go/cdktn.ITerraformIterator,
	Lifecycle: github.com/open-constructs/cdk-terrain-go/cdktn.TerraformResourceLifecycle,
	Provider: github.com/open-constructs/cdk-terrain-go/cdktn.TerraformProvider,
	Provisioners: *[]interface{},
	AccountId: *string,
	Name: *string,
	Force: interface{},
	Logpush: interface{},
	Observability: github.com/cdktn-io/cdktn-provider-cloudflare-go/cloudflare/v16.worker.WorkerObservability,
	PreviewsBaseConfig: github.com/cdktn-io/cdktn-provider-cloudflare-go/cloudflare/v16.worker.WorkerPreviewsBaseConfig,
	Subdomain: github.com/cdktn-io/cdktn-provider-cloudflare-go/cloudflare/v16.worker.WorkerSubdomain,
	Tags: *[]*string,
	TailConsumers: interface{},
}
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-cloudflare.worker.WorkerConfig.property.connection">Connection</a></code> | <code>interface{}</code> | *No description.* |
| <code><a href="#@cdktn/provider-cloudflare.worker.WorkerConfig.property.count">Count</a></code> | <code>interface{}</code> | *No description.* |
| <code><a href="#@cdktn/provider-cloudflare.worker.WorkerConfig.property.dependsOn">DependsOn</a></code> | <code>*[]github.com/open-constructs/cdk-terrain-go/cdktn.ITerraformDependable</code> | *No description.* |
| <code><a href="#@cdktn/provider-cloudflare.worker.WorkerConfig.property.forEach">ForEach</a></code> | <code>github.com/open-constructs/cdk-terrain-go/cdktn.ITerraformIterator</code> | *No description.* |
| <code><a href="#@cdktn/provider-cloudflare.worker.WorkerConfig.property.lifecycle">Lifecycle</a></code> | <code>github.com/open-constructs/cdk-terrain-go/cdktn.TerraformResourceLifecycle</code> | *No description.* |
| <code><a href="#@cdktn/provider-cloudflare.worker.WorkerConfig.property.provider">Provider</a></code> | <code>github.com/open-constructs/cdk-terrain-go/cdktn.TerraformProvider</code> | *No description.* |
| <code><a href="#@cdktn/provider-cloudflare.worker.WorkerConfig.property.provisioners">Provisioners</a></code> | <code>*[]interface{}</code> | *No description.* |
| <code><a href="#@cdktn/provider-cloudflare.worker.WorkerConfig.property.accountId">AccountId</a></code> | <code>*string</code> | Identifier. |
| <code><a href="#@cdktn/provider-cloudflare.worker.WorkerConfig.property.name">Name</a></code> | <code>*string</code> | Name of the Worker. |
| <code><a href="#@cdktn/provider-cloudflare.worker.WorkerConfig.property.force">Force</a></code> | <code>interface{}</code> | If true, delete the Worker even when other Workers still reference it. |
| <code><a href="#@cdktn/provider-cloudflare.worker.WorkerConfig.property.logpush">Logpush</a></code> | <code>interface{}</code> | Whether logpush is enabled for the Worker. |
| <code><a href="#@cdktn/provider-cloudflare.worker.WorkerConfig.property.observability">Observability</a></code> | <code><a href="#@cdktn/provider-cloudflare.worker.WorkerObservability">WorkerObservability</a></code> | Observability settings for the Worker. |
| <code><a href="#@cdktn/provider-cloudflare.worker.WorkerConfig.property.previewsBaseConfig">PreviewsBaseConfig</a></code> | <code><a href="#@cdktn/provider-cloudflare.worker.WorkerPreviewsBaseConfig">WorkerPreviewsBaseConfig</a></code> | Template configuration used when creating new Previews for this Worker. |
| <code><a href="#@cdktn/provider-cloudflare.worker.WorkerConfig.property.subdomain">Subdomain</a></code> | <code><a href="#@cdktn/provider-cloudflare.worker.WorkerSubdomain">WorkerSubdomain</a></code> | Subdomain settings for the Worker. |
| <code><a href="#@cdktn/provider-cloudflare.worker.WorkerConfig.property.tags">Tags</a></code> | <code>*[]*string</code> | Tags associated with the Worker. |
| <code><a href="#@cdktn/provider-cloudflare.worker.WorkerConfig.property.tailConsumers">TailConsumers</a></code> | <code>interface{}</code> | Other Workers that should consume logs from the Worker. |

---

##### `Connection`<sup>Optional</sup> <a name="Connection" id="@cdktn/provider-cloudflare.worker.WorkerConfig.property.connection"></a>

```go
Connection interface{}
```

- *Type:* interface{}

---

##### `Count`<sup>Optional</sup> <a name="Count" id="@cdktn/provider-cloudflare.worker.WorkerConfig.property.count"></a>

```go
Count interface{}
```

- *Type:* interface{}

---

##### `DependsOn`<sup>Optional</sup> <a name="DependsOn" id="@cdktn/provider-cloudflare.worker.WorkerConfig.property.dependsOn"></a>

```go
DependsOn *[]ITerraformDependable
```

- *Type:* *[]github.com/open-constructs/cdk-terrain-go/cdktn.ITerraformDependable

---

##### `ForEach`<sup>Optional</sup> <a name="ForEach" id="@cdktn/provider-cloudflare.worker.WorkerConfig.property.forEach"></a>

```go
ForEach ITerraformIterator
```

- *Type:* github.com/open-constructs/cdk-terrain-go/cdktn.ITerraformIterator

---

##### `Lifecycle`<sup>Optional</sup> <a name="Lifecycle" id="@cdktn/provider-cloudflare.worker.WorkerConfig.property.lifecycle"></a>

```go
Lifecycle TerraformResourceLifecycle
```

- *Type:* github.com/open-constructs/cdk-terrain-go/cdktn.TerraformResourceLifecycle

---

##### `Provider`<sup>Optional</sup> <a name="Provider" id="@cdktn/provider-cloudflare.worker.WorkerConfig.property.provider"></a>

```go
Provider TerraformProvider
```

- *Type:* github.com/open-constructs/cdk-terrain-go/cdktn.TerraformProvider

---

##### `Provisioners`<sup>Optional</sup> <a name="Provisioners" id="@cdktn/provider-cloudflare.worker.WorkerConfig.property.provisioners"></a>

```go
Provisioners *[]interface{}
```

- *Type:* *[]interface{}

---

##### `AccountId`<sup>Required</sup> <a name="AccountId" id="@cdktn/provider-cloudflare.worker.WorkerConfig.property.accountId"></a>

```go
AccountId *string
```

- *Type:* *string

Identifier.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/cloudflare/cloudflare/5.26.0/docs/resources/worker#account_id Worker#account_id}

---

##### `Name`<sup>Required</sup> <a name="Name" id="@cdktn/provider-cloudflare.worker.WorkerConfig.property.name"></a>

```go
Name *string
```

- *Type:* *string

Name of the Worker.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/cloudflare/cloudflare/5.26.0/docs/resources/worker#name Worker#name}

---

##### `Force`<sup>Optional</sup> <a name="Force" id="@cdktn/provider-cloudflare.worker.WorkerConfig.property.force"></a>

```go
Force interface{}
```

- *Type:* interface{}

If true, delete the Worker even when other Workers still reference it.

Service bindings in those Workers may be left broken. Durable Object namespaces implemented by the deleted Worker are deleted even if other Workers reference them.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/cloudflare/cloudflare/5.26.0/docs/resources/worker#force Worker#force}

---

##### `Logpush`<sup>Optional</sup> <a name="Logpush" id="@cdktn/provider-cloudflare.worker.WorkerConfig.property.logpush"></a>

```go
Logpush interface{}
```

- *Type:* interface{}

Whether logpush is enabled for the Worker.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/cloudflare/cloudflare/5.26.0/docs/resources/worker#logpush Worker#logpush}

---

##### `Observability`<sup>Optional</sup> <a name="Observability" id="@cdktn/provider-cloudflare.worker.WorkerConfig.property.observability"></a>

```go
Observability WorkerObservability
```

- *Type:* <a href="#@cdktn/provider-cloudflare.worker.WorkerObservability">WorkerObservability</a>

Observability settings for the Worker.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/cloudflare/cloudflare/5.26.0/docs/resources/worker#observability Worker#observability}

---

##### `PreviewsBaseConfig`<sup>Optional</sup> <a name="PreviewsBaseConfig" id="@cdktn/provider-cloudflare.worker.WorkerConfig.property.previewsBaseConfig"></a>

```go
PreviewsBaseConfig WorkerPreviewsBaseConfig
```

- *Type:* <a href="#@cdktn/provider-cloudflare.worker.WorkerPreviewsBaseConfig">WorkerPreviewsBaseConfig</a>

Template configuration used when creating new Previews for this Worker.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/cloudflare/cloudflare/5.26.0/docs/resources/worker#previews_base_config Worker#previews_base_config}

---

##### `Subdomain`<sup>Optional</sup> <a name="Subdomain" id="@cdktn/provider-cloudflare.worker.WorkerConfig.property.subdomain"></a>

```go
Subdomain WorkerSubdomain
```

- *Type:* <a href="#@cdktn/provider-cloudflare.worker.WorkerSubdomain">WorkerSubdomain</a>

Subdomain settings for the Worker.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/cloudflare/cloudflare/5.26.0/docs/resources/worker#subdomain Worker#subdomain}

---

##### `Tags`<sup>Optional</sup> <a name="Tags" id="@cdktn/provider-cloudflare.worker.WorkerConfig.property.tags"></a>

```go
Tags *[]*string
```

- *Type:* *[]*string

Tags associated with the Worker.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/cloudflare/cloudflare/5.26.0/docs/resources/worker#tags Worker#tags}

---

##### `TailConsumers`<sup>Optional</sup> <a name="TailConsumers" id="@cdktn/provider-cloudflare.worker.WorkerConfig.property.tailConsumers"></a>

```go
TailConsumers interface{}
```

- *Type:* interface{}

Other Workers that should consume logs from the Worker.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/cloudflare/cloudflare/5.26.0/docs/resources/worker#tail_consumers Worker#tail_consumers}

---

### WorkerObservability <a name="WorkerObservability" id="@cdktn/provider-cloudflare.worker.WorkerObservability"></a>

#### Initializer <a name="Initializer" id="@cdktn/provider-cloudflare.worker.WorkerObservability.Initializer"></a>

```go
import "github.com/cdktn-io/cdktn-provider-cloudflare-go/cloudflare/v16/worker"

&worker.WorkerObservability {
	Enabled: interface{},
	HeadSamplingRate: *f64,
	Issues: github.com/cdktn-io/cdktn-provider-cloudflare-go/cloudflare/v16.worker.WorkerObservabilityIssues,
	Logs: github.com/cdktn-io/cdktn-provider-cloudflare-go/cloudflare/v16.worker.WorkerObservabilityLogs,
	Traces: github.com/cdktn-io/cdktn-provider-cloudflare-go/cloudflare/v16.worker.WorkerObservabilityTraces,
}
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-cloudflare.worker.WorkerObservability.property.enabled">Enabled</a></code> | <code>interface{}</code> | Whether observability is enabled for the Worker. |
| <code><a href="#@cdktn/provider-cloudflare.worker.WorkerObservability.property.headSamplingRate">HeadSamplingRate</a></code> | <code>*f64</code> | The sampling rate for observability. From 0 to 1 (1 = 100%, 0.1 = 10%). |
| <code><a href="#@cdktn/provider-cloudflare.worker.WorkerObservability.property.issues">Issues</a></code> | <code><a href="#@cdktn/provider-cloudflare.worker.WorkerObservabilityIssues">WorkerObservabilityIssues</a></code> | Real-time Issues settings for the Worker. |
| <code><a href="#@cdktn/provider-cloudflare.worker.WorkerObservability.property.logs">Logs</a></code> | <code><a href="#@cdktn/provider-cloudflare.worker.WorkerObservabilityLogs">WorkerObservabilityLogs</a></code> | Log settings for the Worker. |
| <code><a href="#@cdktn/provider-cloudflare.worker.WorkerObservability.property.traces">Traces</a></code> | <code><a href="#@cdktn/provider-cloudflare.worker.WorkerObservabilityTraces">WorkerObservabilityTraces</a></code> | Trace settings for the Worker. |

---

##### `Enabled`<sup>Optional</sup> <a name="Enabled" id="@cdktn/provider-cloudflare.worker.WorkerObservability.property.enabled"></a>

```go
Enabled interface{}
```

- *Type:* interface{}

Whether observability is enabled for the Worker.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/cloudflare/cloudflare/5.26.0/docs/resources/worker#enabled Worker#enabled}

---

##### `HeadSamplingRate`<sup>Optional</sup> <a name="HeadSamplingRate" id="@cdktn/provider-cloudflare.worker.WorkerObservability.property.headSamplingRate"></a>

```go
HeadSamplingRate *f64
```

- *Type:* *f64

The sampling rate for observability. From 0 to 1 (1 = 100%, 0.1 = 10%).

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/cloudflare/cloudflare/5.26.0/docs/resources/worker#head_sampling_rate Worker#head_sampling_rate}

---

##### `Issues`<sup>Optional</sup> <a name="Issues" id="@cdktn/provider-cloudflare.worker.WorkerObservability.property.issues"></a>

```go
Issues WorkerObservabilityIssues
```

- *Type:* <a href="#@cdktn/provider-cloudflare.worker.WorkerObservabilityIssues">WorkerObservabilityIssues</a>

Real-time Issues settings for the Worker.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/cloudflare/cloudflare/5.26.0/docs/resources/worker#issues Worker#issues}

---

##### `Logs`<sup>Optional</sup> <a name="Logs" id="@cdktn/provider-cloudflare.worker.WorkerObservability.property.logs"></a>

```go
Logs WorkerObservabilityLogs
```

- *Type:* <a href="#@cdktn/provider-cloudflare.worker.WorkerObservabilityLogs">WorkerObservabilityLogs</a>

Log settings for the Worker.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/cloudflare/cloudflare/5.26.0/docs/resources/worker#logs Worker#logs}

---

##### `Traces`<sup>Optional</sup> <a name="Traces" id="@cdktn/provider-cloudflare.worker.WorkerObservability.property.traces"></a>

```go
Traces WorkerObservabilityTraces
```

- *Type:* <a href="#@cdktn/provider-cloudflare.worker.WorkerObservabilityTraces">WorkerObservabilityTraces</a>

Trace settings for the Worker.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/cloudflare/cloudflare/5.26.0/docs/resources/worker#traces Worker#traces}

---

### WorkerObservabilityIssues <a name="WorkerObservabilityIssues" id="@cdktn/provider-cloudflare.worker.WorkerObservabilityIssues"></a>

#### Initializer <a name="Initializer" id="@cdktn/provider-cloudflare.worker.WorkerObservabilityIssues.Initializer"></a>

```go
import "github.com/cdktn-io/cdktn-provider-cloudflare-go/cloudflare/v16/worker"

&worker.WorkerObservabilityIssues {
	Enabled: interface{},
}
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-cloudflare.worker.WorkerObservabilityIssues.property.enabled">Enabled</a></code> | <code>interface{}</code> | Whether real-time Issues are enabled for the Worker. |

---

##### `Enabled`<sup>Optional</sup> <a name="Enabled" id="@cdktn/provider-cloudflare.worker.WorkerObservabilityIssues.property.enabled"></a>

```go
Enabled interface{}
```

- *Type:* interface{}

Whether real-time Issues are enabled for the Worker.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/cloudflare/cloudflare/5.26.0/docs/resources/worker#enabled Worker#enabled}

---

### WorkerObservabilityLogs <a name="WorkerObservabilityLogs" id="@cdktn/provider-cloudflare.worker.WorkerObservabilityLogs"></a>

#### Initializer <a name="Initializer" id="@cdktn/provider-cloudflare.worker.WorkerObservabilityLogs.Initializer"></a>

```go
import "github.com/cdktn-io/cdktn-provider-cloudflare-go/cloudflare/v16/worker"

&worker.WorkerObservabilityLogs {
	Destinations: *[]*string,
	Enabled: interface{},
	HeadSamplingRate: *f64,
	InvocationLogs: interface{},
	Persist: interface{},
}
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-cloudflare.worker.WorkerObservabilityLogs.property.destinations">Destinations</a></code> | <code>*[]*string</code> | A list of destinations where logs will be exported to. |
| <code><a href="#@cdktn/provider-cloudflare.worker.WorkerObservabilityLogs.property.enabled">Enabled</a></code> | <code>interface{}</code> | Whether logs are enabled for the Worker. |
| <code><a href="#@cdktn/provider-cloudflare.worker.WorkerObservabilityLogs.property.headSamplingRate">HeadSamplingRate</a></code> | <code>*f64</code> | The sampling rate for logs. From 0 to 1 (1 = 100%, 0.1 = 10%). |
| <code><a href="#@cdktn/provider-cloudflare.worker.WorkerObservabilityLogs.property.invocationLogs">InvocationLogs</a></code> | <code>interface{}</code> | Whether [invocation logs](https://developers.cloudflare.com/workers/observability/logs/workers-logs/#invocation-logs) are enabled for the Worker. |
| <code><a href="#@cdktn/provider-cloudflare.worker.WorkerObservabilityLogs.property.persist">Persist</a></code> | <code>interface{}</code> | Whether log persistence is enabled for the Worker. |

---

##### `Destinations`<sup>Optional</sup> <a name="Destinations" id="@cdktn/provider-cloudflare.worker.WorkerObservabilityLogs.property.destinations"></a>

```go
Destinations *[]*string
```

- *Type:* *[]*string

A list of destinations where logs will be exported to.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/cloudflare/cloudflare/5.26.0/docs/resources/worker#destinations Worker#destinations}

---

##### `Enabled`<sup>Optional</sup> <a name="Enabled" id="@cdktn/provider-cloudflare.worker.WorkerObservabilityLogs.property.enabled"></a>

```go
Enabled interface{}
```

- *Type:* interface{}

Whether logs are enabled for the Worker.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/cloudflare/cloudflare/5.26.0/docs/resources/worker#enabled Worker#enabled}

---

##### `HeadSamplingRate`<sup>Optional</sup> <a name="HeadSamplingRate" id="@cdktn/provider-cloudflare.worker.WorkerObservabilityLogs.property.headSamplingRate"></a>

```go
HeadSamplingRate *f64
```

- *Type:* *f64

The sampling rate for logs. From 0 to 1 (1 = 100%, 0.1 = 10%).

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/cloudflare/cloudflare/5.26.0/docs/resources/worker#head_sampling_rate Worker#head_sampling_rate}

---

##### `InvocationLogs`<sup>Optional</sup> <a name="InvocationLogs" id="@cdktn/provider-cloudflare.worker.WorkerObservabilityLogs.property.invocationLogs"></a>

```go
InvocationLogs interface{}
```

- *Type:* interface{}

Whether [invocation logs](https://developers.cloudflare.com/workers/observability/logs/workers-logs/#invocation-logs) are enabled for the Worker.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/cloudflare/cloudflare/5.26.0/docs/resources/worker#invocation_logs Worker#invocation_logs}

---

##### `Persist`<sup>Optional</sup> <a name="Persist" id="@cdktn/provider-cloudflare.worker.WorkerObservabilityLogs.property.persist"></a>

```go
Persist interface{}
```

- *Type:* interface{}

Whether log persistence is enabled for the Worker.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/cloudflare/cloudflare/5.26.0/docs/resources/worker#persist Worker#persist}

---

### WorkerObservabilityTraces <a name="WorkerObservabilityTraces" id="@cdktn/provider-cloudflare.worker.WorkerObservabilityTraces"></a>

#### Initializer <a name="Initializer" id="@cdktn/provider-cloudflare.worker.WorkerObservabilityTraces.Initializer"></a>

```go
import "github.com/cdktn-io/cdktn-provider-cloudflare-go/cloudflare/v16/worker"

&worker.WorkerObservabilityTraces {
	Destinations: *[]*string,
	Enabled: interface{},
	HeadSamplingRate: *f64,
	Persist: interface{},
	PropagationPolicy: *string,
}
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-cloudflare.worker.WorkerObservabilityTraces.property.destinations">Destinations</a></code> | <code>*[]*string</code> | A list of destinations where traces will be exported to. |
| <code><a href="#@cdktn/provider-cloudflare.worker.WorkerObservabilityTraces.property.enabled">Enabled</a></code> | <code>interface{}</code> | Whether traces are enabled for the Worker. |
| <code><a href="#@cdktn/provider-cloudflare.worker.WorkerObservabilityTraces.property.headSamplingRate">HeadSamplingRate</a></code> | <code>*f64</code> | The sampling rate for traces. From 0 to 1 (1 = 100%, 0.1 = 10%). |
| <code><a href="#@cdktn/provider-cloudflare.worker.WorkerObservabilityTraces.property.persist">Persist</a></code> | <code>interface{}</code> | Whether trace persistence is enabled for the Worker. |
| <code><a href="#@cdktn/provider-cloudflare.worker.WorkerObservabilityTraces.property.propagationPolicy">PropagationPolicy</a></code> | <code>*string</code> | Controls how inbound trace context (traceparent/tracestate) headers on incoming requests are handled. |

---

##### `Destinations`<sup>Optional</sup> <a name="Destinations" id="@cdktn/provider-cloudflare.worker.WorkerObservabilityTraces.property.destinations"></a>

```go
Destinations *[]*string
```

- *Type:* *[]*string

A list of destinations where traces will be exported to.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/cloudflare/cloudflare/5.26.0/docs/resources/worker#destinations Worker#destinations}

---

##### `Enabled`<sup>Optional</sup> <a name="Enabled" id="@cdktn/provider-cloudflare.worker.WorkerObservabilityTraces.property.enabled"></a>

```go
Enabled interface{}
```

- *Type:* interface{}

Whether traces are enabled for the Worker.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/cloudflare/cloudflare/5.26.0/docs/resources/worker#enabled Worker#enabled}

---

##### `HeadSamplingRate`<sup>Optional</sup> <a name="HeadSamplingRate" id="@cdktn/provider-cloudflare.worker.WorkerObservabilityTraces.property.headSamplingRate"></a>

```go
HeadSamplingRate *f64
```

- *Type:* *f64

The sampling rate for traces. From 0 to 1 (1 = 100%, 0.1 = 10%).

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/cloudflare/cloudflare/5.26.0/docs/resources/worker#head_sampling_rate Worker#head_sampling_rate}

---

##### `Persist`<sup>Optional</sup> <a name="Persist" id="@cdktn/provider-cloudflare.worker.WorkerObservabilityTraces.property.persist"></a>

```go
Persist interface{}
```

- *Type:* interface{}

Whether trace persistence is enabled for the Worker.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/cloudflare/cloudflare/5.26.0/docs/resources/worker#persist Worker#persist}

---

##### `PropagationPolicy`<sup>Optional</sup> <a name="PropagationPolicy" id="@cdktn/provider-cloudflare.worker.WorkerObservabilityTraces.property.propagationPolicy"></a>

```go
PropagationPolicy *string
```

- *Type:* *string

Controls how inbound trace context (traceparent/tracestate) headers on incoming requests are handled.

"authenticated" (default) honors inbound trace context only when accompanied by a valid trace auth token. "accept" unconditionally accepts inbound trace context. Requires the trace propagation feature to be enabled.
Available values: "authenticated", "accept".

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/cloudflare/cloudflare/5.26.0/docs/resources/worker#propagation_policy Worker#propagation_policy}

---

### WorkerPreviewsBaseConfig <a name="WorkerPreviewsBaseConfig" id="@cdktn/provider-cloudflare.worker.WorkerPreviewsBaseConfig"></a>

#### Initializer <a name="Initializer" id="@cdktn/provider-cloudflare.worker.WorkerPreviewsBaseConfig.Initializer"></a>

```go
import "github.com/cdktn-io/cdktn-provider-cloudflare-go/cloudflare/v16/worker"

&worker.WorkerPreviewsBaseConfig {
	CacheOptions: github.com/cdktn-io/cdktn-provider-cloudflare-go/cloudflare/v16.worker.WorkerPreviewsBaseConfigCacheOptions,
	Env: interface{},
	Limits: github.com/cdktn-io/cdktn-provider-cloudflare-go/cloudflare/v16.worker.WorkerPreviewsBaseConfigLimits,
	Logpush: interface{},
	Observability: github.com/cdktn-io/cdktn-provider-cloudflare-go/cloudflare/v16.worker.WorkerPreviewsBaseConfigObservability,
	Placement: github.com/cdktn-io/cdktn-provider-cloudflare-go/cloudflare/v16.worker.WorkerPreviewsBaseConfigPlacement,
	TailConsumers: interface{},
}
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-cloudflare.worker.WorkerPreviewsBaseConfig.property.cacheOptions">CacheOptions</a></code> | <code><a href="#@cdktn/provider-cloudflare.worker.WorkerPreviewsBaseConfigCacheOptions">WorkerPreviewsBaseConfigCacheOptions</a></code> | Cache options used when creating new Previews. |
| <code><a href="#@cdktn/provider-cloudflare.worker.WorkerPreviewsBaseConfig.property.env">Env</a></code> | <code>interface{}</code> | Bindings used when creating new Previews, keyed by binding name. |
| <code><a href="#@cdktn/provider-cloudflare.worker.WorkerPreviewsBaseConfig.property.limits">Limits</a></code> | <code><a href="#@cdktn/provider-cloudflare.worker.WorkerPreviewsBaseConfigLimits">WorkerPreviewsBaseConfigLimits</a></code> | Resource limits enforced at runtime for newly created Previews. |
| <code><a href="#@cdktn/provider-cloudflare.worker.WorkerPreviewsBaseConfig.property.logpush">Logpush</a></code> | <code>interface{}</code> | Whether logpush is enabled when creating new Previews. |
| <code><a href="#@cdktn/provider-cloudflare.worker.WorkerPreviewsBaseConfig.property.observability">Observability</a></code> | <code><a href="#@cdktn/provider-cloudflare.worker.WorkerPreviewsBaseConfigObservability">WorkerPreviewsBaseConfigObservability</a></code> | Observability settings used when creating new Previews. |
| <code><a href="#@cdktn/provider-cloudflare.worker.WorkerPreviewsBaseConfig.property.placement">Placement</a></code> | <code><a href="#@cdktn/provider-cloudflare.worker.WorkerPreviewsBaseConfigPlacement">WorkerPreviewsBaseConfigPlacement</a></code> | Placement configuration used when creating new Previews. |
| <code><a href="#@cdktn/provider-cloudflare.worker.WorkerPreviewsBaseConfig.property.tailConsumers">TailConsumers</a></code> | <code>interface{}</code> | Other Workers that should consume logs from newly created Previews. |

---

##### `CacheOptions`<sup>Optional</sup> <a name="CacheOptions" id="@cdktn/provider-cloudflare.worker.WorkerPreviewsBaseConfig.property.cacheOptions"></a>

```go
CacheOptions WorkerPreviewsBaseConfigCacheOptions
```

- *Type:* <a href="#@cdktn/provider-cloudflare.worker.WorkerPreviewsBaseConfigCacheOptions">WorkerPreviewsBaseConfigCacheOptions</a>

Cache options used when creating new Previews.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/cloudflare/cloudflare/5.26.0/docs/resources/worker#cache_options Worker#cache_options}

---

##### `Env`<sup>Optional</sup> <a name="Env" id="@cdktn/provider-cloudflare.worker.WorkerPreviewsBaseConfig.property.env"></a>

```go
Env interface{}
```

- *Type:* interface{}

Bindings used when creating new Previews, keyed by binding name.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/cloudflare/cloudflare/5.26.0/docs/resources/worker#env Worker#env}

---

##### `Limits`<sup>Optional</sup> <a name="Limits" id="@cdktn/provider-cloudflare.worker.WorkerPreviewsBaseConfig.property.limits"></a>

```go
Limits WorkerPreviewsBaseConfigLimits
```

- *Type:* <a href="#@cdktn/provider-cloudflare.worker.WorkerPreviewsBaseConfigLimits">WorkerPreviewsBaseConfigLimits</a>

Resource limits enforced at runtime for newly created Previews.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/cloudflare/cloudflare/5.26.0/docs/resources/worker#limits Worker#limits}

---

##### `Logpush`<sup>Optional</sup> <a name="Logpush" id="@cdktn/provider-cloudflare.worker.WorkerPreviewsBaseConfig.property.logpush"></a>

```go
Logpush interface{}
```

- *Type:* interface{}

Whether logpush is enabled when creating new Previews.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/cloudflare/cloudflare/5.26.0/docs/resources/worker#logpush Worker#logpush}

---

##### `Observability`<sup>Optional</sup> <a name="Observability" id="@cdktn/provider-cloudflare.worker.WorkerPreviewsBaseConfig.property.observability"></a>

```go
Observability WorkerPreviewsBaseConfigObservability
```

- *Type:* <a href="#@cdktn/provider-cloudflare.worker.WorkerPreviewsBaseConfigObservability">WorkerPreviewsBaseConfigObservability</a>

Observability settings used when creating new Previews.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/cloudflare/cloudflare/5.26.0/docs/resources/worker#observability Worker#observability}

---

##### `Placement`<sup>Optional</sup> <a name="Placement" id="@cdktn/provider-cloudflare.worker.WorkerPreviewsBaseConfig.property.placement"></a>

```go
Placement WorkerPreviewsBaseConfigPlacement
```

- *Type:* <a href="#@cdktn/provider-cloudflare.worker.WorkerPreviewsBaseConfigPlacement">WorkerPreviewsBaseConfigPlacement</a>

Placement configuration used when creating new Previews.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/cloudflare/cloudflare/5.26.0/docs/resources/worker#placement Worker#placement}

---

##### `TailConsumers`<sup>Optional</sup> <a name="TailConsumers" id="@cdktn/provider-cloudflare.worker.WorkerPreviewsBaseConfig.property.tailConsumers"></a>

```go
TailConsumers interface{}
```

- *Type:* interface{}

Other Workers that should consume logs from newly created Previews.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/cloudflare/cloudflare/5.26.0/docs/resources/worker#tail_consumers Worker#tail_consumers}

---

### WorkerPreviewsBaseConfigCacheOptions <a name="WorkerPreviewsBaseConfigCacheOptions" id="@cdktn/provider-cloudflare.worker.WorkerPreviewsBaseConfigCacheOptions"></a>

#### Initializer <a name="Initializer" id="@cdktn/provider-cloudflare.worker.WorkerPreviewsBaseConfigCacheOptions.Initializer"></a>

```go
import "github.com/cdktn-io/cdktn-provider-cloudflare-go/cloudflare/v16/worker"

&worker.WorkerPreviewsBaseConfigCacheOptions {
	CrossVersionCache: interface{},
	Enabled: interface{},
}
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-cloudflare.worker.WorkerPreviewsBaseConfigCacheOptions.property.crossVersionCache">CrossVersionCache</a></code> | <code>interface{}</code> | Whether cached responses are shared across Worker version uploads. |
| <code><a href="#@cdktn/provider-cloudflare.worker.WorkerPreviewsBaseConfigCacheOptions.property.enabled">Enabled</a></code> | <code>interface{}</code> | Whether caching is enabled for this Worker. |

---

##### `CrossVersionCache`<sup>Optional</sup> <a name="CrossVersionCache" id="@cdktn/provider-cloudflare.worker.WorkerPreviewsBaseConfigCacheOptions.property.crossVersionCache"></a>

```go
CrossVersionCache interface{}
```

- *Type:* interface{}

Whether cached responses are shared across Worker version uploads.

This is independent of `enabled`. It can stay true
while caching is off, so the preference survives turning
caching off and back on.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/cloudflare/cloudflare/5.26.0/docs/resources/worker#cross_version_cache Worker#cross_version_cache}

---

##### `Enabled`<sup>Optional</sup> <a name="Enabled" id="@cdktn/provider-cloudflare.worker.WorkerPreviewsBaseConfigCacheOptions.property.enabled"></a>

```go
Enabled interface{}
```

- *Type:* interface{}

Whether caching is enabled for this Worker.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/cloudflare/cloudflare/5.26.0/docs/resources/worker#enabled Worker#enabled}

---

### WorkerPreviewsBaseConfigEnv <a name="WorkerPreviewsBaseConfigEnv" id="@cdktn/provider-cloudflare.worker.WorkerPreviewsBaseConfigEnv"></a>

#### Initializer <a name="Initializer" id="@cdktn/provider-cloudflare.worker.WorkerPreviewsBaseConfigEnv.Initializer"></a>

```go
import "github.com/cdktn-io/cdktn-provider-cloudflare-go/cloudflare/v16/worker"

&worker.WorkerPreviewsBaseConfigEnv {
	Type: *string,
}
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-cloudflare.worker.WorkerPreviewsBaseConfigEnv.property.type">Type</a></code> | <code>*string</code> | The kind of resource that the binding provides. |

---

##### `Type`<sup>Required</sup> <a name="Type" id="@cdktn/provider-cloudflare.worker.WorkerPreviewsBaseConfigEnv.property.type"></a>

```go
Type *string
```

- *Type:* *string

The kind of resource that the binding provides.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/cloudflare/cloudflare/5.26.0/docs/resources/worker#type Worker#type}

---

### WorkerPreviewsBaseConfigLimits <a name="WorkerPreviewsBaseConfigLimits" id="@cdktn/provider-cloudflare.worker.WorkerPreviewsBaseConfigLimits"></a>

#### Initializer <a name="Initializer" id="@cdktn/provider-cloudflare.worker.WorkerPreviewsBaseConfigLimits.Initializer"></a>

```go
import "github.com/cdktn-io/cdktn-provider-cloudflare-go/cloudflare/v16/worker"

&worker.WorkerPreviewsBaseConfigLimits {
	CpuMs: *f64,
	Subrequests: *f64,
}
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-cloudflare.worker.WorkerPreviewsBaseConfigLimits.property.cpuMs">CpuMs</a></code> | <code>*f64</code> | The amount of CPU time this Worker can use in milliseconds. |
| <code><a href="#@cdktn/provider-cloudflare.worker.WorkerPreviewsBaseConfigLimits.property.subrequests">Subrequests</a></code> | <code>*f64</code> | The number of subrequests this Worker can make per request. |

---

##### `CpuMs`<sup>Optional</sup> <a name="CpuMs" id="@cdktn/provider-cloudflare.worker.WorkerPreviewsBaseConfigLimits.property.cpuMs"></a>

```go
CpuMs *f64
```

- *Type:* *f64

The amount of CPU time this Worker can use in milliseconds.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/cloudflare/cloudflare/5.26.0/docs/resources/worker#cpu_ms Worker#cpu_ms}

---

##### `Subrequests`<sup>Optional</sup> <a name="Subrequests" id="@cdktn/provider-cloudflare.worker.WorkerPreviewsBaseConfigLimits.property.subrequests"></a>

```go
Subrequests *f64
```

- *Type:* *f64

The number of subrequests this Worker can make per request.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/cloudflare/cloudflare/5.26.0/docs/resources/worker#subrequests Worker#subrequests}

---

### WorkerPreviewsBaseConfigObservability <a name="WorkerPreviewsBaseConfigObservability" id="@cdktn/provider-cloudflare.worker.WorkerPreviewsBaseConfigObservability"></a>

#### Initializer <a name="Initializer" id="@cdktn/provider-cloudflare.worker.WorkerPreviewsBaseConfigObservability.Initializer"></a>

```go
import "github.com/cdktn-io/cdktn-provider-cloudflare-go/cloudflare/v16/worker"

&worker.WorkerPreviewsBaseConfigObservability {
	Enabled: interface{},
	HeadSamplingRate: *f64,
	Issues: github.com/cdktn-io/cdktn-provider-cloudflare-go/cloudflare/v16.worker.WorkerPreviewsBaseConfigObservabilityIssues,
	Logs: github.com/cdktn-io/cdktn-provider-cloudflare-go/cloudflare/v16.worker.WorkerPreviewsBaseConfigObservabilityLogs,
	RedactQueryString: interface{},
	Traces: github.com/cdktn-io/cdktn-provider-cloudflare-go/cloudflare/v16.worker.WorkerPreviewsBaseConfigObservabilityTraces,
}
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-cloudflare.worker.WorkerPreviewsBaseConfigObservability.property.enabled">Enabled</a></code> | <code>interface{}</code> | Whether observability is enabled for the Worker. |
| <code><a href="#@cdktn/provider-cloudflare.worker.WorkerPreviewsBaseConfigObservability.property.headSamplingRate">HeadSamplingRate</a></code> | <code>*f64</code> | The sampling rate for observability. From 0 to 1 (1 = 100%, 0.1 = 10%). |
| <code><a href="#@cdktn/provider-cloudflare.worker.WorkerPreviewsBaseConfigObservability.property.issues">Issues</a></code> | <code><a href="#@cdktn/provider-cloudflare.worker.WorkerPreviewsBaseConfigObservabilityIssues">WorkerPreviewsBaseConfigObservabilityIssues</a></code> | Real-time Issues settings for the Worker. |
| <code><a href="#@cdktn/provider-cloudflare.worker.WorkerPreviewsBaseConfigObservability.property.logs">Logs</a></code> | <code><a href="#@cdktn/provider-cloudflare.worker.WorkerPreviewsBaseConfigObservabilityLogs">WorkerPreviewsBaseConfigObservabilityLogs</a></code> | Log settings for the Worker. |
| <code><a href="#@cdktn/provider-cloudflare.worker.WorkerPreviewsBaseConfigObservability.property.redactQueryString">RedactQueryString</a></code> | <code>interface{}</code> | Whether query strings are removed from request URLs in logs and traces. |
| <code><a href="#@cdktn/provider-cloudflare.worker.WorkerPreviewsBaseConfigObservability.property.traces">Traces</a></code> | <code><a href="#@cdktn/provider-cloudflare.worker.WorkerPreviewsBaseConfigObservabilityTraces">WorkerPreviewsBaseConfigObservabilityTraces</a></code> | Trace settings for the Worker. |

---

##### `Enabled`<sup>Optional</sup> <a name="Enabled" id="@cdktn/provider-cloudflare.worker.WorkerPreviewsBaseConfigObservability.property.enabled"></a>

```go
Enabled interface{}
```

- *Type:* interface{}

Whether observability is enabled for the Worker.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/cloudflare/cloudflare/5.26.0/docs/resources/worker#enabled Worker#enabled}

---

##### `HeadSamplingRate`<sup>Optional</sup> <a name="HeadSamplingRate" id="@cdktn/provider-cloudflare.worker.WorkerPreviewsBaseConfigObservability.property.headSamplingRate"></a>

```go
HeadSamplingRate *f64
```

- *Type:* *f64

The sampling rate for observability. From 0 to 1 (1 = 100%, 0.1 = 10%).

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/cloudflare/cloudflare/5.26.0/docs/resources/worker#head_sampling_rate Worker#head_sampling_rate}

---

##### `Issues`<sup>Optional</sup> <a name="Issues" id="@cdktn/provider-cloudflare.worker.WorkerPreviewsBaseConfigObservability.property.issues"></a>

```go
Issues WorkerPreviewsBaseConfigObservabilityIssues
```

- *Type:* <a href="#@cdktn/provider-cloudflare.worker.WorkerPreviewsBaseConfigObservabilityIssues">WorkerPreviewsBaseConfigObservabilityIssues</a>

Real-time Issues settings for the Worker.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/cloudflare/cloudflare/5.26.0/docs/resources/worker#issues Worker#issues}

---

##### `Logs`<sup>Optional</sup> <a name="Logs" id="@cdktn/provider-cloudflare.worker.WorkerPreviewsBaseConfigObservability.property.logs"></a>

```go
Logs WorkerPreviewsBaseConfigObservabilityLogs
```

- *Type:* <a href="#@cdktn/provider-cloudflare.worker.WorkerPreviewsBaseConfigObservabilityLogs">WorkerPreviewsBaseConfigObservabilityLogs</a>

Log settings for the Worker.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/cloudflare/cloudflare/5.26.0/docs/resources/worker#logs Worker#logs}

---

##### `RedactQueryString`<sup>Optional</sup> <a name="RedactQueryString" id="@cdktn/provider-cloudflare.worker.WorkerPreviewsBaseConfigObservability.property.redactQueryString"></a>

```go
RedactQueryString interface{}
```

- *Type:* interface{}

Whether query strings are removed from request URLs in logs and traces.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/cloudflare/cloudflare/5.26.0/docs/resources/worker#redact_query_string Worker#redact_query_string}

---

##### `Traces`<sup>Optional</sup> <a name="Traces" id="@cdktn/provider-cloudflare.worker.WorkerPreviewsBaseConfigObservability.property.traces"></a>

```go
Traces WorkerPreviewsBaseConfigObservabilityTraces
```

- *Type:* <a href="#@cdktn/provider-cloudflare.worker.WorkerPreviewsBaseConfigObservabilityTraces">WorkerPreviewsBaseConfigObservabilityTraces</a>

Trace settings for the Worker.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/cloudflare/cloudflare/5.26.0/docs/resources/worker#traces Worker#traces}

---

### WorkerPreviewsBaseConfigObservabilityIssues <a name="WorkerPreviewsBaseConfigObservabilityIssues" id="@cdktn/provider-cloudflare.worker.WorkerPreviewsBaseConfigObservabilityIssues"></a>

#### Initializer <a name="Initializer" id="@cdktn/provider-cloudflare.worker.WorkerPreviewsBaseConfigObservabilityIssues.Initializer"></a>

```go
import "github.com/cdktn-io/cdktn-provider-cloudflare-go/cloudflare/v16/worker"

&worker.WorkerPreviewsBaseConfigObservabilityIssues {
	Enabled: interface{},
}
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-cloudflare.worker.WorkerPreviewsBaseConfigObservabilityIssues.property.enabled">Enabled</a></code> | <code>interface{}</code> | Whether real-time Issues are enabled for the Worker. |

---

##### `Enabled`<sup>Optional</sup> <a name="Enabled" id="@cdktn/provider-cloudflare.worker.WorkerPreviewsBaseConfigObservabilityIssues.property.enabled"></a>

```go
Enabled interface{}
```

- *Type:* interface{}

Whether real-time Issues are enabled for the Worker.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/cloudflare/cloudflare/5.26.0/docs/resources/worker#enabled Worker#enabled}

---

### WorkerPreviewsBaseConfigObservabilityLogs <a name="WorkerPreviewsBaseConfigObservabilityLogs" id="@cdktn/provider-cloudflare.worker.WorkerPreviewsBaseConfigObservabilityLogs"></a>

#### Initializer <a name="Initializer" id="@cdktn/provider-cloudflare.worker.WorkerPreviewsBaseConfigObservabilityLogs.Initializer"></a>

```go
import "github.com/cdktn-io/cdktn-provider-cloudflare-go/cloudflare/v16/worker"

&worker.WorkerPreviewsBaseConfigObservabilityLogs {
	Destinations: *[]*string,
	Enabled: interface{},
	HeadSamplingRate: *f64,
	InvocationLogs: interface{},
	Persist: interface{},
}
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-cloudflare.worker.WorkerPreviewsBaseConfigObservabilityLogs.property.destinations">Destinations</a></code> | <code>*[]*string</code> | A list of destinations where logs will be exported to. |
| <code><a href="#@cdktn/provider-cloudflare.worker.WorkerPreviewsBaseConfigObservabilityLogs.property.enabled">Enabled</a></code> | <code>interface{}</code> | Whether logs are enabled for the Worker. |
| <code><a href="#@cdktn/provider-cloudflare.worker.WorkerPreviewsBaseConfigObservabilityLogs.property.headSamplingRate">HeadSamplingRate</a></code> | <code>*f64</code> | The sampling rate for logs. From 0 to 1 (1 = 100%, 0.1 = 10%). |
| <code><a href="#@cdktn/provider-cloudflare.worker.WorkerPreviewsBaseConfigObservabilityLogs.property.invocationLogs">InvocationLogs</a></code> | <code>interface{}</code> | Whether [invocation logs](https://developers.cloudflare.com/workers/observability/logs/workers-logs/#invocation-logs) are enabled for the Worker. |
| <code><a href="#@cdktn/provider-cloudflare.worker.WorkerPreviewsBaseConfigObservabilityLogs.property.persist">Persist</a></code> | <code>interface{}</code> | Whether log persistence is enabled for the Worker. |

---

##### `Destinations`<sup>Optional</sup> <a name="Destinations" id="@cdktn/provider-cloudflare.worker.WorkerPreviewsBaseConfigObservabilityLogs.property.destinations"></a>

```go
Destinations *[]*string
```

- *Type:* *[]*string

A list of destinations where logs will be exported to.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/cloudflare/cloudflare/5.26.0/docs/resources/worker#destinations Worker#destinations}

---

##### `Enabled`<sup>Optional</sup> <a name="Enabled" id="@cdktn/provider-cloudflare.worker.WorkerPreviewsBaseConfigObservabilityLogs.property.enabled"></a>

```go
Enabled interface{}
```

- *Type:* interface{}

Whether logs are enabled for the Worker.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/cloudflare/cloudflare/5.26.0/docs/resources/worker#enabled Worker#enabled}

---

##### `HeadSamplingRate`<sup>Optional</sup> <a name="HeadSamplingRate" id="@cdktn/provider-cloudflare.worker.WorkerPreviewsBaseConfigObservabilityLogs.property.headSamplingRate"></a>

```go
HeadSamplingRate *f64
```

- *Type:* *f64

The sampling rate for logs. From 0 to 1 (1 = 100%, 0.1 = 10%).

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/cloudflare/cloudflare/5.26.0/docs/resources/worker#head_sampling_rate Worker#head_sampling_rate}

---

##### `InvocationLogs`<sup>Optional</sup> <a name="InvocationLogs" id="@cdktn/provider-cloudflare.worker.WorkerPreviewsBaseConfigObservabilityLogs.property.invocationLogs"></a>

```go
InvocationLogs interface{}
```

- *Type:* interface{}

Whether [invocation logs](https://developers.cloudflare.com/workers/observability/logs/workers-logs/#invocation-logs) are enabled for the Worker.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/cloudflare/cloudflare/5.26.0/docs/resources/worker#invocation_logs Worker#invocation_logs}

---

##### `Persist`<sup>Optional</sup> <a name="Persist" id="@cdktn/provider-cloudflare.worker.WorkerPreviewsBaseConfigObservabilityLogs.property.persist"></a>

```go
Persist interface{}
```

- *Type:* interface{}

Whether log persistence is enabled for the Worker.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/cloudflare/cloudflare/5.26.0/docs/resources/worker#persist Worker#persist}

---

### WorkerPreviewsBaseConfigObservabilityTraces <a name="WorkerPreviewsBaseConfigObservabilityTraces" id="@cdktn/provider-cloudflare.worker.WorkerPreviewsBaseConfigObservabilityTraces"></a>

#### Initializer <a name="Initializer" id="@cdktn/provider-cloudflare.worker.WorkerPreviewsBaseConfigObservabilityTraces.Initializer"></a>

```go
import "github.com/cdktn-io/cdktn-provider-cloudflare-go/cloudflare/v16/worker"

&worker.WorkerPreviewsBaseConfigObservabilityTraces {
	Destinations: *[]*string,
	Enabled: interface{},
	HeadSamplingRate: *f64,
	Persist: interface{},
	PropagationPolicy: *string,
}
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-cloudflare.worker.WorkerPreviewsBaseConfigObservabilityTraces.property.destinations">Destinations</a></code> | <code>*[]*string</code> | A list of destinations where traces will be exported to. |
| <code><a href="#@cdktn/provider-cloudflare.worker.WorkerPreviewsBaseConfigObservabilityTraces.property.enabled">Enabled</a></code> | <code>interface{}</code> | Whether traces are enabled for the Worker. |
| <code><a href="#@cdktn/provider-cloudflare.worker.WorkerPreviewsBaseConfigObservabilityTraces.property.headSamplingRate">HeadSamplingRate</a></code> | <code>*f64</code> | The sampling rate for traces. From 0 to 1 (1 = 100%, 0.1 = 10%). |
| <code><a href="#@cdktn/provider-cloudflare.worker.WorkerPreviewsBaseConfigObservabilityTraces.property.persist">Persist</a></code> | <code>interface{}</code> | Whether trace persistence is enabled for the Worker. |
| <code><a href="#@cdktn/provider-cloudflare.worker.WorkerPreviewsBaseConfigObservabilityTraces.property.propagationPolicy">PropagationPolicy</a></code> | <code>*string</code> | Controls how inbound trace context (traceparent/tracestate) headers on incoming requests are handled. |

---

##### `Destinations`<sup>Optional</sup> <a name="Destinations" id="@cdktn/provider-cloudflare.worker.WorkerPreviewsBaseConfigObservabilityTraces.property.destinations"></a>

```go
Destinations *[]*string
```

- *Type:* *[]*string

A list of destinations where traces will be exported to.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/cloudflare/cloudflare/5.26.0/docs/resources/worker#destinations Worker#destinations}

---

##### `Enabled`<sup>Optional</sup> <a name="Enabled" id="@cdktn/provider-cloudflare.worker.WorkerPreviewsBaseConfigObservabilityTraces.property.enabled"></a>

```go
Enabled interface{}
```

- *Type:* interface{}

Whether traces are enabled for the Worker.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/cloudflare/cloudflare/5.26.0/docs/resources/worker#enabled Worker#enabled}

---

##### `HeadSamplingRate`<sup>Optional</sup> <a name="HeadSamplingRate" id="@cdktn/provider-cloudflare.worker.WorkerPreviewsBaseConfigObservabilityTraces.property.headSamplingRate"></a>

```go
HeadSamplingRate *f64
```

- *Type:* *f64

The sampling rate for traces. From 0 to 1 (1 = 100%, 0.1 = 10%).

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/cloudflare/cloudflare/5.26.0/docs/resources/worker#head_sampling_rate Worker#head_sampling_rate}

---

##### `Persist`<sup>Optional</sup> <a name="Persist" id="@cdktn/provider-cloudflare.worker.WorkerPreviewsBaseConfigObservabilityTraces.property.persist"></a>

```go
Persist interface{}
```

- *Type:* interface{}

Whether trace persistence is enabled for the Worker.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/cloudflare/cloudflare/5.26.0/docs/resources/worker#persist Worker#persist}

---

##### `PropagationPolicy`<sup>Optional</sup> <a name="PropagationPolicy" id="@cdktn/provider-cloudflare.worker.WorkerPreviewsBaseConfigObservabilityTraces.property.propagationPolicy"></a>

```go
PropagationPolicy *string
```

- *Type:* *string

Controls how inbound trace context (traceparent/tracestate) headers on incoming requests are handled.

"authenticated" honors inbound trace context only when accompanied by a valid trace auth token. "accept" unconditionally accepts inbound trace context. Requires the trace propagation feature to be enabled. Returns null when the trace propagation feature is not enabled for the account.
Available values: "authenticated", "accept".

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/cloudflare/cloudflare/5.26.0/docs/resources/worker#propagation_policy Worker#propagation_policy}

---

### WorkerPreviewsBaseConfigPlacement <a name="WorkerPreviewsBaseConfigPlacement" id="@cdktn/provider-cloudflare.worker.WorkerPreviewsBaseConfigPlacement"></a>

#### Initializer <a name="Initializer" id="@cdktn/provider-cloudflare.worker.WorkerPreviewsBaseConfigPlacement.Initializer"></a>

```go
import "github.com/cdktn-io/cdktn-provider-cloudflare-go/cloudflare/v16/worker"

&worker.WorkerPreviewsBaseConfigPlacement {
	Host: *string,
	Hostname: *string,
	Mode: *string,
	Region: *string,
	Target: interface{},
}
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-cloudflare.worker.WorkerPreviewsBaseConfigPlacement.property.host">Host</a></code> | <code>*string</code> | TCP host and port for targeted placement. |
| <code><a href="#@cdktn/provider-cloudflare.worker.WorkerPreviewsBaseConfigPlacement.property.hostname">Hostname</a></code> | <code>*string</code> | HTTP hostname for targeted placement. |
| <code><a href="#@cdktn/provider-cloudflare.worker.WorkerPreviewsBaseConfigPlacement.property.mode">Mode</a></code> | <code>*string</code> | Enables [Smart Placement](https://developers.cloudflare.com/workers/configuration/smart-placement). Available values: "smart", "targeted". |
| <code><a href="#@cdktn/provider-cloudflare.worker.WorkerPreviewsBaseConfigPlacement.property.region">Region</a></code> | <code>*string</code> | Cloud region for targeted placement in format 'provider:region'. |
| <code><a href="#@cdktn/provider-cloudflare.worker.WorkerPreviewsBaseConfigPlacement.property.target">Target</a></code> | <code>interface{}</code> | Array of placement targets (currently limited to single target). |

---

##### `Host`<sup>Optional</sup> <a name="Host" id="@cdktn/provider-cloudflare.worker.WorkerPreviewsBaseConfigPlacement.property.host"></a>

```go
Host *string
```

- *Type:* *string

TCP host and port for targeted placement.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/cloudflare/cloudflare/5.26.0/docs/resources/worker#host Worker#host}

---

##### `Hostname`<sup>Optional</sup> <a name="Hostname" id="@cdktn/provider-cloudflare.worker.WorkerPreviewsBaseConfigPlacement.property.hostname"></a>

```go
Hostname *string
```

- *Type:* *string

HTTP hostname for targeted placement.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/cloudflare/cloudflare/5.26.0/docs/resources/worker#hostname Worker#hostname}

---

##### `Mode`<sup>Optional</sup> <a name="Mode" id="@cdktn/provider-cloudflare.worker.WorkerPreviewsBaseConfigPlacement.property.mode"></a>

```go
Mode *string
```

- *Type:* *string

Enables [Smart Placement](https://developers.cloudflare.com/workers/configuration/smart-placement). Available values: "smart", "targeted".

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/cloudflare/cloudflare/5.26.0/docs/resources/worker#mode Worker#mode}

---

##### `Region`<sup>Optional</sup> <a name="Region" id="@cdktn/provider-cloudflare.worker.WorkerPreviewsBaseConfigPlacement.property.region"></a>

```go
Region *string
```

- *Type:* *string

Cloud region for targeted placement in format 'provider:region'.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/cloudflare/cloudflare/5.26.0/docs/resources/worker#region Worker#region}

---

##### `Target`<sup>Optional</sup> <a name="Target" id="@cdktn/provider-cloudflare.worker.WorkerPreviewsBaseConfigPlacement.property.target"></a>

```go
Target interface{}
```

- *Type:* interface{}

Array of placement targets (currently limited to single target).

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/cloudflare/cloudflare/5.26.0/docs/resources/worker#target Worker#target}

---

### WorkerPreviewsBaseConfigPlacementTarget <a name="WorkerPreviewsBaseConfigPlacementTarget" id="@cdktn/provider-cloudflare.worker.WorkerPreviewsBaseConfigPlacementTarget"></a>

#### Initializer <a name="Initializer" id="@cdktn/provider-cloudflare.worker.WorkerPreviewsBaseConfigPlacementTarget.Initializer"></a>

```go
import "github.com/cdktn-io/cdktn-provider-cloudflare-go/cloudflare/v16/worker"

&worker.WorkerPreviewsBaseConfigPlacementTarget {
	Host: *string,
	Hostname: *string,
	Region: *string,
}
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-cloudflare.worker.WorkerPreviewsBaseConfigPlacementTarget.property.host">Host</a></code> | <code>*string</code> | TCP host:port for targeted placement. |
| <code><a href="#@cdktn/provider-cloudflare.worker.WorkerPreviewsBaseConfigPlacementTarget.property.hostname">Hostname</a></code> | <code>*string</code> | HTTP hostname for targeted placement. |
| <code><a href="#@cdktn/provider-cloudflare.worker.WorkerPreviewsBaseConfigPlacementTarget.property.region">Region</a></code> | <code>*string</code> | Cloud region in format 'provider:region'. |

---

##### `Host`<sup>Optional</sup> <a name="Host" id="@cdktn/provider-cloudflare.worker.WorkerPreviewsBaseConfigPlacementTarget.property.host"></a>

```go
Host *string
```

- *Type:* *string

TCP host:port for targeted placement.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/cloudflare/cloudflare/5.26.0/docs/resources/worker#host Worker#host}

---

##### `Hostname`<sup>Optional</sup> <a name="Hostname" id="@cdktn/provider-cloudflare.worker.WorkerPreviewsBaseConfigPlacementTarget.property.hostname"></a>

```go
Hostname *string
```

- *Type:* *string

HTTP hostname for targeted placement.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/cloudflare/cloudflare/5.26.0/docs/resources/worker#hostname Worker#hostname}

---

##### `Region`<sup>Optional</sup> <a name="Region" id="@cdktn/provider-cloudflare.worker.WorkerPreviewsBaseConfigPlacementTarget.property.region"></a>

```go
Region *string
```

- *Type:* *string

Cloud region in format 'provider:region'.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/cloudflare/cloudflare/5.26.0/docs/resources/worker#region Worker#region}

---

### WorkerPreviewsBaseConfigTailConsumers <a name="WorkerPreviewsBaseConfigTailConsumers" id="@cdktn/provider-cloudflare.worker.WorkerPreviewsBaseConfigTailConsumers"></a>

#### Initializer <a name="Initializer" id="@cdktn/provider-cloudflare.worker.WorkerPreviewsBaseConfigTailConsumers.Initializer"></a>

```go
import "github.com/cdktn-io/cdktn-provider-cloudflare-go/cloudflare/v16/worker"

&worker.WorkerPreviewsBaseConfigTailConsumers {
	Name: *string,
}
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-cloudflare.worker.WorkerPreviewsBaseConfigTailConsumers.property.name">Name</a></code> | <code>*string</code> | Name of the consumer Worker. |

---

##### `Name`<sup>Required</sup> <a name="Name" id="@cdktn/provider-cloudflare.worker.WorkerPreviewsBaseConfigTailConsumers.property.name"></a>

```go
Name *string
```

- *Type:* *string

Name of the consumer Worker.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/cloudflare/cloudflare/5.26.0/docs/resources/worker#name Worker#name}

---

### WorkerReferences <a name="WorkerReferences" id="@cdktn/provider-cloudflare.worker.WorkerReferences"></a>

#### Initializer <a name="Initializer" id="@cdktn/provider-cloudflare.worker.WorkerReferences.Initializer"></a>

```go
import "github.com/cdktn-io/cdktn-provider-cloudflare-go/cloudflare/v16/worker"

&worker.WorkerReferences {

}
```


### WorkerReferencesDispatchNamespaceOutbounds <a name="WorkerReferencesDispatchNamespaceOutbounds" id="@cdktn/provider-cloudflare.worker.WorkerReferencesDispatchNamespaceOutbounds"></a>

#### Initializer <a name="Initializer" id="@cdktn/provider-cloudflare.worker.WorkerReferencesDispatchNamespaceOutbounds.Initializer"></a>

```go
import "github.com/cdktn-io/cdktn-provider-cloudflare-go/cloudflare/v16/worker"

&worker.WorkerReferencesDispatchNamespaceOutbounds {

}
```


### WorkerReferencesDomains <a name="WorkerReferencesDomains" id="@cdktn/provider-cloudflare.worker.WorkerReferencesDomains"></a>

#### Initializer <a name="Initializer" id="@cdktn/provider-cloudflare.worker.WorkerReferencesDomains.Initializer"></a>

```go
import "github.com/cdktn-io/cdktn-provider-cloudflare-go/cloudflare/v16/worker"

&worker.WorkerReferencesDomains {

}
```


### WorkerReferencesDurableObjects <a name="WorkerReferencesDurableObjects" id="@cdktn/provider-cloudflare.worker.WorkerReferencesDurableObjects"></a>

#### Initializer <a name="Initializer" id="@cdktn/provider-cloudflare.worker.WorkerReferencesDurableObjects.Initializer"></a>

```go
import "github.com/cdktn-io/cdktn-provider-cloudflare-go/cloudflare/v16/worker"

&worker.WorkerReferencesDurableObjects {

}
```


### WorkerReferencesQueues <a name="WorkerReferencesQueues" id="@cdktn/provider-cloudflare.worker.WorkerReferencesQueues"></a>

#### Initializer <a name="Initializer" id="@cdktn/provider-cloudflare.worker.WorkerReferencesQueues.Initializer"></a>

```go
import "github.com/cdktn-io/cdktn-provider-cloudflare-go/cloudflare/v16/worker"

&worker.WorkerReferencesQueues {

}
```


### WorkerReferencesWorkers <a name="WorkerReferencesWorkers" id="@cdktn/provider-cloudflare.worker.WorkerReferencesWorkers"></a>

#### Initializer <a name="Initializer" id="@cdktn/provider-cloudflare.worker.WorkerReferencesWorkers.Initializer"></a>

```go
import "github.com/cdktn-io/cdktn-provider-cloudflare-go/cloudflare/v16/worker"

&worker.WorkerReferencesWorkers {

}
```


### WorkerSubdomain <a name="WorkerSubdomain" id="@cdktn/provider-cloudflare.worker.WorkerSubdomain"></a>

#### Initializer <a name="Initializer" id="@cdktn/provider-cloudflare.worker.WorkerSubdomain.Initializer"></a>

```go
import "github.com/cdktn-io/cdktn-provider-cloudflare-go/cloudflare/v16/worker"

&worker.WorkerSubdomain {
	Enabled: interface{},
	PreviewsEnabled: interface{},
}
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-cloudflare.worker.WorkerSubdomain.property.enabled">Enabled</a></code> | <code>interface{}</code> | Whether the *.workers.dev subdomain is enabled for the Worker. |
| <code><a href="#@cdktn/provider-cloudflare.worker.WorkerSubdomain.property.previewsEnabled">PreviewsEnabled</a></code> | <code>interface{}</code> | Whether [preview URLs](https://developers.cloudflare.com/workers/configuration/previews/) are enabled for the Worker. |

---

##### `Enabled`<sup>Optional</sup> <a name="Enabled" id="@cdktn/provider-cloudflare.worker.WorkerSubdomain.property.enabled"></a>

```go
Enabled interface{}
```

- *Type:* interface{}

Whether the *.workers.dev subdomain is enabled for the Worker.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/cloudflare/cloudflare/5.26.0/docs/resources/worker#enabled Worker#enabled}

---

##### `PreviewsEnabled`<sup>Optional</sup> <a name="PreviewsEnabled" id="@cdktn/provider-cloudflare.worker.WorkerSubdomain.property.previewsEnabled"></a>

```go
PreviewsEnabled interface{}
```

- *Type:* interface{}

Whether [preview URLs](https://developers.cloudflare.com/workers/configuration/previews/) are enabled for the Worker.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/cloudflare/cloudflare/5.26.0/docs/resources/worker#previews_enabled Worker#previews_enabled}

---

### WorkerTailConsumers <a name="WorkerTailConsumers" id="@cdktn/provider-cloudflare.worker.WorkerTailConsumers"></a>

#### Initializer <a name="Initializer" id="@cdktn/provider-cloudflare.worker.WorkerTailConsumers.Initializer"></a>

```go
import "github.com/cdktn-io/cdktn-provider-cloudflare-go/cloudflare/v16/worker"

&worker.WorkerTailConsumers {
	Name: *string,
}
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-cloudflare.worker.WorkerTailConsumers.property.name">Name</a></code> | <code>*string</code> | Name of the consumer Worker. |

---

##### `Name`<sup>Required</sup> <a name="Name" id="@cdktn/provider-cloudflare.worker.WorkerTailConsumers.property.name"></a>

```go
Name *string
```

- *Type:* *string

Name of the consumer Worker.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/cloudflare/cloudflare/5.26.0/docs/resources/worker#name Worker#name}

---

## Classes <a name="Classes" id="Classes"></a>

### WorkerObservabilityIssuesOutputReference <a name="WorkerObservabilityIssuesOutputReference" id="@cdktn/provider-cloudflare.worker.WorkerObservabilityIssuesOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktn/provider-cloudflare.worker.WorkerObservabilityIssuesOutputReference.Initializer"></a>

```go
import "github.com/cdktn-io/cdktn-provider-cloudflare-go/cloudflare/v16/worker"

worker.NewWorkerObservabilityIssuesOutputReference(terraformResource IInterpolatingParent, terraformAttribute *string) WorkerObservabilityIssuesOutputReference
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-cloudflare.worker.WorkerObservabilityIssuesOutputReference.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>github.com/open-constructs/cdk-terrain-go/cdktn.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktn/provider-cloudflare.worker.WorkerObservabilityIssuesOutputReference.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>*string</code> | The attribute on the parent resource this class is referencing. |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktn/provider-cloudflare.worker.WorkerObservabilityIssuesOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* github.com/open-constructs/cdk-terrain-go/cdktn.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-cloudflare.worker.WorkerObservabilityIssuesOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* *string

The attribute on the parent resource this class is referencing.

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-cloudflare.worker.WorkerObservabilityIssuesOutputReference.computeFqn">ComputeFqn</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-cloudflare.worker.WorkerObservabilityIssuesOutputReference.getAnyMapAttribute">GetAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-cloudflare.worker.WorkerObservabilityIssuesOutputReference.getBooleanAttribute">GetBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-cloudflare.worker.WorkerObservabilityIssuesOutputReference.getBooleanMapAttribute">GetBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-cloudflare.worker.WorkerObservabilityIssuesOutputReference.getListAttribute">GetListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-cloudflare.worker.WorkerObservabilityIssuesOutputReference.getNumberAttribute">GetNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-cloudflare.worker.WorkerObservabilityIssuesOutputReference.getNumberListAttribute">GetNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-cloudflare.worker.WorkerObservabilityIssuesOutputReference.getNumberMapAttribute">GetNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-cloudflare.worker.WorkerObservabilityIssuesOutputReference.getStringAttribute">GetStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-cloudflare.worker.WorkerObservabilityIssuesOutputReference.getStringMapAttribute">GetStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-cloudflare.worker.WorkerObservabilityIssuesOutputReference.interpolationForAttribute">InterpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-cloudflare.worker.WorkerObservabilityIssuesOutputReference.resolve">Resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktn/provider-cloudflare.worker.WorkerObservabilityIssuesOutputReference.toString">ToString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktn/provider-cloudflare.worker.WorkerObservabilityIssuesOutputReference.resetEnabled">ResetEnabled</a></code> | *No description.* |

---

##### `ComputeFqn` <a name="ComputeFqn" id="@cdktn/provider-cloudflare.worker.WorkerObservabilityIssuesOutputReference.computeFqn"></a>

```go
func ComputeFqn() *string
```

##### `GetAnyMapAttribute` <a name="GetAnyMapAttribute" id="@cdktn/provider-cloudflare.worker.WorkerObservabilityIssuesOutputReference.getAnyMapAttribute"></a>

```go
func GetAnyMapAttribute(terraformAttribute *string) *map[string]interface{}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-cloudflare.worker.WorkerObservabilityIssuesOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetBooleanAttribute` <a name="GetBooleanAttribute" id="@cdktn/provider-cloudflare.worker.WorkerObservabilityIssuesOutputReference.getBooleanAttribute"></a>

```go
func GetBooleanAttribute(terraformAttribute *string) IResolvable
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-cloudflare.worker.WorkerObservabilityIssuesOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetBooleanMapAttribute` <a name="GetBooleanMapAttribute" id="@cdktn/provider-cloudflare.worker.WorkerObservabilityIssuesOutputReference.getBooleanMapAttribute"></a>

```go
func GetBooleanMapAttribute(terraformAttribute *string) *map[string]*bool
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-cloudflare.worker.WorkerObservabilityIssuesOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetListAttribute` <a name="GetListAttribute" id="@cdktn/provider-cloudflare.worker.WorkerObservabilityIssuesOutputReference.getListAttribute"></a>

```go
func GetListAttribute(terraformAttribute *string) *[]*string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-cloudflare.worker.WorkerObservabilityIssuesOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberAttribute` <a name="GetNumberAttribute" id="@cdktn/provider-cloudflare.worker.WorkerObservabilityIssuesOutputReference.getNumberAttribute"></a>

```go
func GetNumberAttribute(terraformAttribute *string) *f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-cloudflare.worker.WorkerObservabilityIssuesOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberListAttribute` <a name="GetNumberListAttribute" id="@cdktn/provider-cloudflare.worker.WorkerObservabilityIssuesOutputReference.getNumberListAttribute"></a>

```go
func GetNumberListAttribute(terraformAttribute *string) *[]*f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-cloudflare.worker.WorkerObservabilityIssuesOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberMapAttribute` <a name="GetNumberMapAttribute" id="@cdktn/provider-cloudflare.worker.WorkerObservabilityIssuesOutputReference.getNumberMapAttribute"></a>

```go
func GetNumberMapAttribute(terraformAttribute *string) *map[string]*f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-cloudflare.worker.WorkerObservabilityIssuesOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetStringAttribute` <a name="GetStringAttribute" id="@cdktn/provider-cloudflare.worker.WorkerObservabilityIssuesOutputReference.getStringAttribute"></a>

```go
func GetStringAttribute(terraformAttribute *string) *string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-cloudflare.worker.WorkerObservabilityIssuesOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetStringMapAttribute` <a name="GetStringMapAttribute" id="@cdktn/provider-cloudflare.worker.WorkerObservabilityIssuesOutputReference.getStringMapAttribute"></a>

```go
func GetStringMapAttribute(terraformAttribute *string) *map[string]*string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-cloudflare.worker.WorkerObservabilityIssuesOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `InterpolationForAttribute` <a name="InterpolationForAttribute" id="@cdktn/provider-cloudflare.worker.WorkerObservabilityIssuesOutputReference.interpolationForAttribute"></a>

```go
func InterpolationForAttribute(property *string) IResolvable
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktn/provider-cloudflare.worker.WorkerObservabilityIssuesOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* *string

---

##### `Resolve` <a name="Resolve" id="@cdktn/provider-cloudflare.worker.WorkerObservabilityIssuesOutputReference.resolve"></a>

```go
func Resolve(_context IResolveContext) interface{}
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktn/provider-cloudflare.worker.WorkerObservabilityIssuesOutputReference.resolve.parameter._context"></a>

- *Type:* github.com/open-constructs/cdk-terrain-go/cdktn.IResolveContext

---

##### `ToString` <a name="ToString" id="@cdktn/provider-cloudflare.worker.WorkerObservabilityIssuesOutputReference.toString"></a>

```go
func ToString() *string
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `ResetEnabled` <a name="ResetEnabled" id="@cdktn/provider-cloudflare.worker.WorkerObservabilityIssuesOutputReference.resetEnabled"></a>

```go
func ResetEnabled()
```


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-cloudflare.worker.WorkerObservabilityIssuesOutputReference.property.creationStack">CreationStack</a></code> | <code>*[]*string</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktn/provider-cloudflare.worker.WorkerObservabilityIssuesOutputReference.property.fqn">Fqn</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktn/provider-cloudflare.worker.WorkerObservabilityIssuesOutputReference.property.enabledInput">EnabledInput</a></code> | <code>interface{}</code> | *No description.* |
| <code><a href="#@cdktn/provider-cloudflare.worker.WorkerObservabilityIssuesOutputReference.property.enabled">Enabled</a></code> | <code>interface{}</code> | *No description.* |
| <code><a href="#@cdktn/provider-cloudflare.worker.WorkerObservabilityIssuesOutputReference.property.internalValue">InternalValue</a></code> | <code>interface{}</code> | *No description.* |

---

##### `CreationStack`<sup>Required</sup> <a name="CreationStack" id="@cdktn/provider-cloudflare.worker.WorkerObservabilityIssuesOutputReference.property.creationStack"></a>

```go
func CreationStack() *[]*string
```

- *Type:* *[]*string

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `Fqn`<sup>Required</sup> <a name="Fqn" id="@cdktn/provider-cloudflare.worker.WorkerObservabilityIssuesOutputReference.property.fqn"></a>

```go
func Fqn() *string
```

- *Type:* *string

---

##### `EnabledInput`<sup>Optional</sup> <a name="EnabledInput" id="@cdktn/provider-cloudflare.worker.WorkerObservabilityIssuesOutputReference.property.enabledInput"></a>

```go
func EnabledInput() interface{}
```

- *Type:* interface{}

---

##### `Enabled`<sup>Required</sup> <a name="Enabled" id="@cdktn/provider-cloudflare.worker.WorkerObservabilityIssuesOutputReference.property.enabled"></a>

```go
func Enabled() interface{}
```

- *Type:* interface{}

---

##### `InternalValue`<sup>Optional</sup> <a name="InternalValue" id="@cdktn/provider-cloudflare.worker.WorkerObservabilityIssuesOutputReference.property.internalValue"></a>

```go
func InternalValue() interface{}
```

- *Type:* interface{}

---


### WorkerObservabilityLogsOutputReference <a name="WorkerObservabilityLogsOutputReference" id="@cdktn/provider-cloudflare.worker.WorkerObservabilityLogsOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktn/provider-cloudflare.worker.WorkerObservabilityLogsOutputReference.Initializer"></a>

```go
import "github.com/cdktn-io/cdktn-provider-cloudflare-go/cloudflare/v16/worker"

worker.NewWorkerObservabilityLogsOutputReference(terraformResource IInterpolatingParent, terraformAttribute *string) WorkerObservabilityLogsOutputReference
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-cloudflare.worker.WorkerObservabilityLogsOutputReference.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>github.com/open-constructs/cdk-terrain-go/cdktn.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktn/provider-cloudflare.worker.WorkerObservabilityLogsOutputReference.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>*string</code> | The attribute on the parent resource this class is referencing. |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktn/provider-cloudflare.worker.WorkerObservabilityLogsOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* github.com/open-constructs/cdk-terrain-go/cdktn.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-cloudflare.worker.WorkerObservabilityLogsOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* *string

The attribute on the parent resource this class is referencing.

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-cloudflare.worker.WorkerObservabilityLogsOutputReference.computeFqn">ComputeFqn</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-cloudflare.worker.WorkerObservabilityLogsOutputReference.getAnyMapAttribute">GetAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-cloudflare.worker.WorkerObservabilityLogsOutputReference.getBooleanAttribute">GetBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-cloudflare.worker.WorkerObservabilityLogsOutputReference.getBooleanMapAttribute">GetBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-cloudflare.worker.WorkerObservabilityLogsOutputReference.getListAttribute">GetListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-cloudflare.worker.WorkerObservabilityLogsOutputReference.getNumberAttribute">GetNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-cloudflare.worker.WorkerObservabilityLogsOutputReference.getNumberListAttribute">GetNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-cloudflare.worker.WorkerObservabilityLogsOutputReference.getNumberMapAttribute">GetNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-cloudflare.worker.WorkerObservabilityLogsOutputReference.getStringAttribute">GetStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-cloudflare.worker.WorkerObservabilityLogsOutputReference.getStringMapAttribute">GetStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-cloudflare.worker.WorkerObservabilityLogsOutputReference.interpolationForAttribute">InterpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-cloudflare.worker.WorkerObservabilityLogsOutputReference.resolve">Resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktn/provider-cloudflare.worker.WorkerObservabilityLogsOutputReference.toString">ToString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktn/provider-cloudflare.worker.WorkerObservabilityLogsOutputReference.resetDestinations">ResetDestinations</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-cloudflare.worker.WorkerObservabilityLogsOutputReference.resetEnabled">ResetEnabled</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-cloudflare.worker.WorkerObservabilityLogsOutputReference.resetHeadSamplingRate">ResetHeadSamplingRate</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-cloudflare.worker.WorkerObservabilityLogsOutputReference.resetInvocationLogs">ResetInvocationLogs</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-cloudflare.worker.WorkerObservabilityLogsOutputReference.resetPersist">ResetPersist</a></code> | *No description.* |

---

##### `ComputeFqn` <a name="ComputeFqn" id="@cdktn/provider-cloudflare.worker.WorkerObservabilityLogsOutputReference.computeFqn"></a>

```go
func ComputeFqn() *string
```

##### `GetAnyMapAttribute` <a name="GetAnyMapAttribute" id="@cdktn/provider-cloudflare.worker.WorkerObservabilityLogsOutputReference.getAnyMapAttribute"></a>

```go
func GetAnyMapAttribute(terraformAttribute *string) *map[string]interface{}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-cloudflare.worker.WorkerObservabilityLogsOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetBooleanAttribute` <a name="GetBooleanAttribute" id="@cdktn/provider-cloudflare.worker.WorkerObservabilityLogsOutputReference.getBooleanAttribute"></a>

```go
func GetBooleanAttribute(terraformAttribute *string) IResolvable
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-cloudflare.worker.WorkerObservabilityLogsOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetBooleanMapAttribute` <a name="GetBooleanMapAttribute" id="@cdktn/provider-cloudflare.worker.WorkerObservabilityLogsOutputReference.getBooleanMapAttribute"></a>

```go
func GetBooleanMapAttribute(terraformAttribute *string) *map[string]*bool
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-cloudflare.worker.WorkerObservabilityLogsOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetListAttribute` <a name="GetListAttribute" id="@cdktn/provider-cloudflare.worker.WorkerObservabilityLogsOutputReference.getListAttribute"></a>

```go
func GetListAttribute(terraformAttribute *string) *[]*string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-cloudflare.worker.WorkerObservabilityLogsOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberAttribute` <a name="GetNumberAttribute" id="@cdktn/provider-cloudflare.worker.WorkerObservabilityLogsOutputReference.getNumberAttribute"></a>

```go
func GetNumberAttribute(terraformAttribute *string) *f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-cloudflare.worker.WorkerObservabilityLogsOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberListAttribute` <a name="GetNumberListAttribute" id="@cdktn/provider-cloudflare.worker.WorkerObservabilityLogsOutputReference.getNumberListAttribute"></a>

```go
func GetNumberListAttribute(terraformAttribute *string) *[]*f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-cloudflare.worker.WorkerObservabilityLogsOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberMapAttribute` <a name="GetNumberMapAttribute" id="@cdktn/provider-cloudflare.worker.WorkerObservabilityLogsOutputReference.getNumberMapAttribute"></a>

```go
func GetNumberMapAttribute(terraformAttribute *string) *map[string]*f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-cloudflare.worker.WorkerObservabilityLogsOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetStringAttribute` <a name="GetStringAttribute" id="@cdktn/provider-cloudflare.worker.WorkerObservabilityLogsOutputReference.getStringAttribute"></a>

```go
func GetStringAttribute(terraformAttribute *string) *string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-cloudflare.worker.WorkerObservabilityLogsOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetStringMapAttribute` <a name="GetStringMapAttribute" id="@cdktn/provider-cloudflare.worker.WorkerObservabilityLogsOutputReference.getStringMapAttribute"></a>

```go
func GetStringMapAttribute(terraformAttribute *string) *map[string]*string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-cloudflare.worker.WorkerObservabilityLogsOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `InterpolationForAttribute` <a name="InterpolationForAttribute" id="@cdktn/provider-cloudflare.worker.WorkerObservabilityLogsOutputReference.interpolationForAttribute"></a>

```go
func InterpolationForAttribute(property *string) IResolvable
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktn/provider-cloudflare.worker.WorkerObservabilityLogsOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* *string

---

##### `Resolve` <a name="Resolve" id="@cdktn/provider-cloudflare.worker.WorkerObservabilityLogsOutputReference.resolve"></a>

```go
func Resolve(_context IResolveContext) interface{}
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktn/provider-cloudflare.worker.WorkerObservabilityLogsOutputReference.resolve.parameter._context"></a>

- *Type:* github.com/open-constructs/cdk-terrain-go/cdktn.IResolveContext

---

##### `ToString` <a name="ToString" id="@cdktn/provider-cloudflare.worker.WorkerObservabilityLogsOutputReference.toString"></a>

```go
func ToString() *string
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `ResetDestinations` <a name="ResetDestinations" id="@cdktn/provider-cloudflare.worker.WorkerObservabilityLogsOutputReference.resetDestinations"></a>

```go
func ResetDestinations()
```

##### `ResetEnabled` <a name="ResetEnabled" id="@cdktn/provider-cloudflare.worker.WorkerObservabilityLogsOutputReference.resetEnabled"></a>

```go
func ResetEnabled()
```

##### `ResetHeadSamplingRate` <a name="ResetHeadSamplingRate" id="@cdktn/provider-cloudflare.worker.WorkerObservabilityLogsOutputReference.resetHeadSamplingRate"></a>

```go
func ResetHeadSamplingRate()
```

##### `ResetInvocationLogs` <a name="ResetInvocationLogs" id="@cdktn/provider-cloudflare.worker.WorkerObservabilityLogsOutputReference.resetInvocationLogs"></a>

```go
func ResetInvocationLogs()
```

##### `ResetPersist` <a name="ResetPersist" id="@cdktn/provider-cloudflare.worker.WorkerObservabilityLogsOutputReference.resetPersist"></a>

```go
func ResetPersist()
```


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-cloudflare.worker.WorkerObservabilityLogsOutputReference.property.creationStack">CreationStack</a></code> | <code>*[]*string</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktn/provider-cloudflare.worker.WorkerObservabilityLogsOutputReference.property.fqn">Fqn</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktn/provider-cloudflare.worker.WorkerObservabilityLogsOutputReference.property.destinationsInput">DestinationsInput</a></code> | <code>*[]*string</code> | *No description.* |
| <code><a href="#@cdktn/provider-cloudflare.worker.WorkerObservabilityLogsOutputReference.property.enabledInput">EnabledInput</a></code> | <code>interface{}</code> | *No description.* |
| <code><a href="#@cdktn/provider-cloudflare.worker.WorkerObservabilityLogsOutputReference.property.headSamplingRateInput">HeadSamplingRateInput</a></code> | <code>*f64</code> | *No description.* |
| <code><a href="#@cdktn/provider-cloudflare.worker.WorkerObservabilityLogsOutputReference.property.invocationLogsInput">InvocationLogsInput</a></code> | <code>interface{}</code> | *No description.* |
| <code><a href="#@cdktn/provider-cloudflare.worker.WorkerObservabilityLogsOutputReference.property.persistInput">PersistInput</a></code> | <code>interface{}</code> | *No description.* |
| <code><a href="#@cdktn/provider-cloudflare.worker.WorkerObservabilityLogsOutputReference.property.destinations">Destinations</a></code> | <code>*[]*string</code> | *No description.* |
| <code><a href="#@cdktn/provider-cloudflare.worker.WorkerObservabilityLogsOutputReference.property.enabled">Enabled</a></code> | <code>interface{}</code> | *No description.* |
| <code><a href="#@cdktn/provider-cloudflare.worker.WorkerObservabilityLogsOutputReference.property.headSamplingRate">HeadSamplingRate</a></code> | <code>*f64</code> | *No description.* |
| <code><a href="#@cdktn/provider-cloudflare.worker.WorkerObservabilityLogsOutputReference.property.invocationLogs">InvocationLogs</a></code> | <code>interface{}</code> | *No description.* |
| <code><a href="#@cdktn/provider-cloudflare.worker.WorkerObservabilityLogsOutputReference.property.persist">Persist</a></code> | <code>interface{}</code> | *No description.* |
| <code><a href="#@cdktn/provider-cloudflare.worker.WorkerObservabilityLogsOutputReference.property.internalValue">InternalValue</a></code> | <code>interface{}</code> | *No description.* |

---

##### `CreationStack`<sup>Required</sup> <a name="CreationStack" id="@cdktn/provider-cloudflare.worker.WorkerObservabilityLogsOutputReference.property.creationStack"></a>

```go
func CreationStack() *[]*string
```

- *Type:* *[]*string

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `Fqn`<sup>Required</sup> <a name="Fqn" id="@cdktn/provider-cloudflare.worker.WorkerObservabilityLogsOutputReference.property.fqn"></a>

```go
func Fqn() *string
```

- *Type:* *string

---

##### `DestinationsInput`<sup>Optional</sup> <a name="DestinationsInput" id="@cdktn/provider-cloudflare.worker.WorkerObservabilityLogsOutputReference.property.destinationsInput"></a>

```go
func DestinationsInput() *[]*string
```

- *Type:* *[]*string

---

##### `EnabledInput`<sup>Optional</sup> <a name="EnabledInput" id="@cdktn/provider-cloudflare.worker.WorkerObservabilityLogsOutputReference.property.enabledInput"></a>

```go
func EnabledInput() interface{}
```

- *Type:* interface{}

---

##### `HeadSamplingRateInput`<sup>Optional</sup> <a name="HeadSamplingRateInput" id="@cdktn/provider-cloudflare.worker.WorkerObservabilityLogsOutputReference.property.headSamplingRateInput"></a>

```go
func HeadSamplingRateInput() *f64
```

- *Type:* *f64

---

##### `InvocationLogsInput`<sup>Optional</sup> <a name="InvocationLogsInput" id="@cdktn/provider-cloudflare.worker.WorkerObservabilityLogsOutputReference.property.invocationLogsInput"></a>

```go
func InvocationLogsInput() interface{}
```

- *Type:* interface{}

---

##### `PersistInput`<sup>Optional</sup> <a name="PersistInput" id="@cdktn/provider-cloudflare.worker.WorkerObservabilityLogsOutputReference.property.persistInput"></a>

```go
func PersistInput() interface{}
```

- *Type:* interface{}

---

##### `Destinations`<sup>Required</sup> <a name="Destinations" id="@cdktn/provider-cloudflare.worker.WorkerObservabilityLogsOutputReference.property.destinations"></a>

```go
func Destinations() *[]*string
```

- *Type:* *[]*string

---

##### `Enabled`<sup>Required</sup> <a name="Enabled" id="@cdktn/provider-cloudflare.worker.WorkerObservabilityLogsOutputReference.property.enabled"></a>

```go
func Enabled() interface{}
```

- *Type:* interface{}

---

##### `HeadSamplingRate`<sup>Required</sup> <a name="HeadSamplingRate" id="@cdktn/provider-cloudflare.worker.WorkerObservabilityLogsOutputReference.property.headSamplingRate"></a>

```go
func HeadSamplingRate() *f64
```

- *Type:* *f64

---

##### `InvocationLogs`<sup>Required</sup> <a name="InvocationLogs" id="@cdktn/provider-cloudflare.worker.WorkerObservabilityLogsOutputReference.property.invocationLogs"></a>

```go
func InvocationLogs() interface{}
```

- *Type:* interface{}

---

##### `Persist`<sup>Required</sup> <a name="Persist" id="@cdktn/provider-cloudflare.worker.WorkerObservabilityLogsOutputReference.property.persist"></a>

```go
func Persist() interface{}
```

- *Type:* interface{}

---

##### `InternalValue`<sup>Optional</sup> <a name="InternalValue" id="@cdktn/provider-cloudflare.worker.WorkerObservabilityLogsOutputReference.property.internalValue"></a>

```go
func InternalValue() interface{}
```

- *Type:* interface{}

---


### WorkerObservabilityOutputReference <a name="WorkerObservabilityOutputReference" id="@cdktn/provider-cloudflare.worker.WorkerObservabilityOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktn/provider-cloudflare.worker.WorkerObservabilityOutputReference.Initializer"></a>

```go
import "github.com/cdktn-io/cdktn-provider-cloudflare-go/cloudflare/v16/worker"

worker.NewWorkerObservabilityOutputReference(terraformResource IInterpolatingParent, terraformAttribute *string) WorkerObservabilityOutputReference
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-cloudflare.worker.WorkerObservabilityOutputReference.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>github.com/open-constructs/cdk-terrain-go/cdktn.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktn/provider-cloudflare.worker.WorkerObservabilityOutputReference.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>*string</code> | The attribute on the parent resource this class is referencing. |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktn/provider-cloudflare.worker.WorkerObservabilityOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* github.com/open-constructs/cdk-terrain-go/cdktn.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-cloudflare.worker.WorkerObservabilityOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* *string

The attribute on the parent resource this class is referencing.

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-cloudflare.worker.WorkerObservabilityOutputReference.computeFqn">ComputeFqn</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-cloudflare.worker.WorkerObservabilityOutputReference.getAnyMapAttribute">GetAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-cloudflare.worker.WorkerObservabilityOutputReference.getBooleanAttribute">GetBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-cloudflare.worker.WorkerObservabilityOutputReference.getBooleanMapAttribute">GetBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-cloudflare.worker.WorkerObservabilityOutputReference.getListAttribute">GetListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-cloudflare.worker.WorkerObservabilityOutputReference.getNumberAttribute">GetNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-cloudflare.worker.WorkerObservabilityOutputReference.getNumberListAttribute">GetNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-cloudflare.worker.WorkerObservabilityOutputReference.getNumberMapAttribute">GetNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-cloudflare.worker.WorkerObservabilityOutputReference.getStringAttribute">GetStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-cloudflare.worker.WorkerObservabilityOutputReference.getStringMapAttribute">GetStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-cloudflare.worker.WorkerObservabilityOutputReference.interpolationForAttribute">InterpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-cloudflare.worker.WorkerObservabilityOutputReference.resolve">Resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktn/provider-cloudflare.worker.WorkerObservabilityOutputReference.toString">ToString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktn/provider-cloudflare.worker.WorkerObservabilityOutputReference.putIssues">PutIssues</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-cloudflare.worker.WorkerObservabilityOutputReference.putLogs">PutLogs</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-cloudflare.worker.WorkerObservabilityOutputReference.putTraces">PutTraces</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-cloudflare.worker.WorkerObservabilityOutputReference.resetEnabled">ResetEnabled</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-cloudflare.worker.WorkerObservabilityOutputReference.resetHeadSamplingRate">ResetHeadSamplingRate</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-cloudflare.worker.WorkerObservabilityOutputReference.resetIssues">ResetIssues</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-cloudflare.worker.WorkerObservabilityOutputReference.resetLogs">ResetLogs</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-cloudflare.worker.WorkerObservabilityOutputReference.resetTraces">ResetTraces</a></code> | *No description.* |

---

##### `ComputeFqn` <a name="ComputeFqn" id="@cdktn/provider-cloudflare.worker.WorkerObservabilityOutputReference.computeFqn"></a>

```go
func ComputeFqn() *string
```

##### `GetAnyMapAttribute` <a name="GetAnyMapAttribute" id="@cdktn/provider-cloudflare.worker.WorkerObservabilityOutputReference.getAnyMapAttribute"></a>

```go
func GetAnyMapAttribute(terraformAttribute *string) *map[string]interface{}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-cloudflare.worker.WorkerObservabilityOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetBooleanAttribute` <a name="GetBooleanAttribute" id="@cdktn/provider-cloudflare.worker.WorkerObservabilityOutputReference.getBooleanAttribute"></a>

```go
func GetBooleanAttribute(terraformAttribute *string) IResolvable
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-cloudflare.worker.WorkerObservabilityOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetBooleanMapAttribute` <a name="GetBooleanMapAttribute" id="@cdktn/provider-cloudflare.worker.WorkerObservabilityOutputReference.getBooleanMapAttribute"></a>

```go
func GetBooleanMapAttribute(terraformAttribute *string) *map[string]*bool
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-cloudflare.worker.WorkerObservabilityOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetListAttribute` <a name="GetListAttribute" id="@cdktn/provider-cloudflare.worker.WorkerObservabilityOutputReference.getListAttribute"></a>

```go
func GetListAttribute(terraformAttribute *string) *[]*string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-cloudflare.worker.WorkerObservabilityOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberAttribute` <a name="GetNumberAttribute" id="@cdktn/provider-cloudflare.worker.WorkerObservabilityOutputReference.getNumberAttribute"></a>

```go
func GetNumberAttribute(terraformAttribute *string) *f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-cloudflare.worker.WorkerObservabilityOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberListAttribute` <a name="GetNumberListAttribute" id="@cdktn/provider-cloudflare.worker.WorkerObservabilityOutputReference.getNumberListAttribute"></a>

```go
func GetNumberListAttribute(terraformAttribute *string) *[]*f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-cloudflare.worker.WorkerObservabilityOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberMapAttribute` <a name="GetNumberMapAttribute" id="@cdktn/provider-cloudflare.worker.WorkerObservabilityOutputReference.getNumberMapAttribute"></a>

```go
func GetNumberMapAttribute(terraformAttribute *string) *map[string]*f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-cloudflare.worker.WorkerObservabilityOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetStringAttribute` <a name="GetStringAttribute" id="@cdktn/provider-cloudflare.worker.WorkerObservabilityOutputReference.getStringAttribute"></a>

```go
func GetStringAttribute(terraformAttribute *string) *string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-cloudflare.worker.WorkerObservabilityOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetStringMapAttribute` <a name="GetStringMapAttribute" id="@cdktn/provider-cloudflare.worker.WorkerObservabilityOutputReference.getStringMapAttribute"></a>

```go
func GetStringMapAttribute(terraformAttribute *string) *map[string]*string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-cloudflare.worker.WorkerObservabilityOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `InterpolationForAttribute` <a name="InterpolationForAttribute" id="@cdktn/provider-cloudflare.worker.WorkerObservabilityOutputReference.interpolationForAttribute"></a>

```go
func InterpolationForAttribute(property *string) IResolvable
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktn/provider-cloudflare.worker.WorkerObservabilityOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* *string

---

##### `Resolve` <a name="Resolve" id="@cdktn/provider-cloudflare.worker.WorkerObservabilityOutputReference.resolve"></a>

```go
func Resolve(_context IResolveContext) interface{}
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktn/provider-cloudflare.worker.WorkerObservabilityOutputReference.resolve.parameter._context"></a>

- *Type:* github.com/open-constructs/cdk-terrain-go/cdktn.IResolveContext

---

##### `ToString` <a name="ToString" id="@cdktn/provider-cloudflare.worker.WorkerObservabilityOutputReference.toString"></a>

```go
func ToString() *string
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `PutIssues` <a name="PutIssues" id="@cdktn/provider-cloudflare.worker.WorkerObservabilityOutputReference.putIssues"></a>

```go
func PutIssues(value WorkerObservabilityIssues)
```

###### `value`<sup>Required</sup> <a name="value" id="@cdktn/provider-cloudflare.worker.WorkerObservabilityOutputReference.putIssues.parameter.value"></a>

- *Type:* <a href="#@cdktn/provider-cloudflare.worker.WorkerObservabilityIssues">WorkerObservabilityIssues</a>

---

##### `PutLogs` <a name="PutLogs" id="@cdktn/provider-cloudflare.worker.WorkerObservabilityOutputReference.putLogs"></a>

```go
func PutLogs(value WorkerObservabilityLogs)
```

###### `value`<sup>Required</sup> <a name="value" id="@cdktn/provider-cloudflare.worker.WorkerObservabilityOutputReference.putLogs.parameter.value"></a>

- *Type:* <a href="#@cdktn/provider-cloudflare.worker.WorkerObservabilityLogs">WorkerObservabilityLogs</a>

---

##### `PutTraces` <a name="PutTraces" id="@cdktn/provider-cloudflare.worker.WorkerObservabilityOutputReference.putTraces"></a>

```go
func PutTraces(value WorkerObservabilityTraces)
```

###### `value`<sup>Required</sup> <a name="value" id="@cdktn/provider-cloudflare.worker.WorkerObservabilityOutputReference.putTraces.parameter.value"></a>

- *Type:* <a href="#@cdktn/provider-cloudflare.worker.WorkerObservabilityTraces">WorkerObservabilityTraces</a>

---

##### `ResetEnabled` <a name="ResetEnabled" id="@cdktn/provider-cloudflare.worker.WorkerObservabilityOutputReference.resetEnabled"></a>

```go
func ResetEnabled()
```

##### `ResetHeadSamplingRate` <a name="ResetHeadSamplingRate" id="@cdktn/provider-cloudflare.worker.WorkerObservabilityOutputReference.resetHeadSamplingRate"></a>

```go
func ResetHeadSamplingRate()
```

##### `ResetIssues` <a name="ResetIssues" id="@cdktn/provider-cloudflare.worker.WorkerObservabilityOutputReference.resetIssues"></a>

```go
func ResetIssues()
```

##### `ResetLogs` <a name="ResetLogs" id="@cdktn/provider-cloudflare.worker.WorkerObservabilityOutputReference.resetLogs"></a>

```go
func ResetLogs()
```

##### `ResetTraces` <a name="ResetTraces" id="@cdktn/provider-cloudflare.worker.WorkerObservabilityOutputReference.resetTraces"></a>

```go
func ResetTraces()
```


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-cloudflare.worker.WorkerObservabilityOutputReference.property.creationStack">CreationStack</a></code> | <code>*[]*string</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktn/provider-cloudflare.worker.WorkerObservabilityOutputReference.property.fqn">Fqn</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktn/provider-cloudflare.worker.WorkerObservabilityOutputReference.property.issues">Issues</a></code> | <code><a href="#@cdktn/provider-cloudflare.worker.WorkerObservabilityIssuesOutputReference">WorkerObservabilityIssuesOutputReference</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-cloudflare.worker.WorkerObservabilityOutputReference.property.logs">Logs</a></code> | <code><a href="#@cdktn/provider-cloudflare.worker.WorkerObservabilityLogsOutputReference">WorkerObservabilityLogsOutputReference</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-cloudflare.worker.WorkerObservabilityOutputReference.property.traces">Traces</a></code> | <code><a href="#@cdktn/provider-cloudflare.worker.WorkerObservabilityTracesOutputReference">WorkerObservabilityTracesOutputReference</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-cloudflare.worker.WorkerObservabilityOutputReference.property.enabledInput">EnabledInput</a></code> | <code>interface{}</code> | *No description.* |
| <code><a href="#@cdktn/provider-cloudflare.worker.WorkerObservabilityOutputReference.property.headSamplingRateInput">HeadSamplingRateInput</a></code> | <code>*f64</code> | *No description.* |
| <code><a href="#@cdktn/provider-cloudflare.worker.WorkerObservabilityOutputReference.property.issuesInput">IssuesInput</a></code> | <code>interface{}</code> | *No description.* |
| <code><a href="#@cdktn/provider-cloudflare.worker.WorkerObservabilityOutputReference.property.logsInput">LogsInput</a></code> | <code>interface{}</code> | *No description.* |
| <code><a href="#@cdktn/provider-cloudflare.worker.WorkerObservabilityOutputReference.property.tracesInput">TracesInput</a></code> | <code>interface{}</code> | *No description.* |
| <code><a href="#@cdktn/provider-cloudflare.worker.WorkerObservabilityOutputReference.property.enabled">Enabled</a></code> | <code>interface{}</code> | *No description.* |
| <code><a href="#@cdktn/provider-cloudflare.worker.WorkerObservabilityOutputReference.property.headSamplingRate">HeadSamplingRate</a></code> | <code>*f64</code> | *No description.* |
| <code><a href="#@cdktn/provider-cloudflare.worker.WorkerObservabilityOutputReference.property.internalValue">InternalValue</a></code> | <code>interface{}</code> | *No description.* |

---

##### `CreationStack`<sup>Required</sup> <a name="CreationStack" id="@cdktn/provider-cloudflare.worker.WorkerObservabilityOutputReference.property.creationStack"></a>

```go
func CreationStack() *[]*string
```

- *Type:* *[]*string

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `Fqn`<sup>Required</sup> <a name="Fqn" id="@cdktn/provider-cloudflare.worker.WorkerObservabilityOutputReference.property.fqn"></a>

```go
func Fqn() *string
```

- *Type:* *string

---

##### `Issues`<sup>Required</sup> <a name="Issues" id="@cdktn/provider-cloudflare.worker.WorkerObservabilityOutputReference.property.issues"></a>

```go
func Issues() WorkerObservabilityIssuesOutputReference
```

- *Type:* <a href="#@cdktn/provider-cloudflare.worker.WorkerObservabilityIssuesOutputReference">WorkerObservabilityIssuesOutputReference</a>

---

##### `Logs`<sup>Required</sup> <a name="Logs" id="@cdktn/provider-cloudflare.worker.WorkerObservabilityOutputReference.property.logs"></a>

```go
func Logs() WorkerObservabilityLogsOutputReference
```

- *Type:* <a href="#@cdktn/provider-cloudflare.worker.WorkerObservabilityLogsOutputReference">WorkerObservabilityLogsOutputReference</a>

---

##### `Traces`<sup>Required</sup> <a name="Traces" id="@cdktn/provider-cloudflare.worker.WorkerObservabilityOutputReference.property.traces"></a>

```go
func Traces() WorkerObservabilityTracesOutputReference
```

- *Type:* <a href="#@cdktn/provider-cloudflare.worker.WorkerObservabilityTracesOutputReference">WorkerObservabilityTracesOutputReference</a>

---

##### `EnabledInput`<sup>Optional</sup> <a name="EnabledInput" id="@cdktn/provider-cloudflare.worker.WorkerObservabilityOutputReference.property.enabledInput"></a>

```go
func EnabledInput() interface{}
```

- *Type:* interface{}

---

##### `HeadSamplingRateInput`<sup>Optional</sup> <a name="HeadSamplingRateInput" id="@cdktn/provider-cloudflare.worker.WorkerObservabilityOutputReference.property.headSamplingRateInput"></a>

```go
func HeadSamplingRateInput() *f64
```

- *Type:* *f64

---

##### `IssuesInput`<sup>Optional</sup> <a name="IssuesInput" id="@cdktn/provider-cloudflare.worker.WorkerObservabilityOutputReference.property.issuesInput"></a>

```go
func IssuesInput() interface{}
```

- *Type:* interface{}

---

##### `LogsInput`<sup>Optional</sup> <a name="LogsInput" id="@cdktn/provider-cloudflare.worker.WorkerObservabilityOutputReference.property.logsInput"></a>

```go
func LogsInput() interface{}
```

- *Type:* interface{}

---

##### `TracesInput`<sup>Optional</sup> <a name="TracesInput" id="@cdktn/provider-cloudflare.worker.WorkerObservabilityOutputReference.property.tracesInput"></a>

```go
func TracesInput() interface{}
```

- *Type:* interface{}

---

##### `Enabled`<sup>Required</sup> <a name="Enabled" id="@cdktn/provider-cloudflare.worker.WorkerObservabilityOutputReference.property.enabled"></a>

```go
func Enabled() interface{}
```

- *Type:* interface{}

---

##### `HeadSamplingRate`<sup>Required</sup> <a name="HeadSamplingRate" id="@cdktn/provider-cloudflare.worker.WorkerObservabilityOutputReference.property.headSamplingRate"></a>

```go
func HeadSamplingRate() *f64
```

- *Type:* *f64

---

##### `InternalValue`<sup>Optional</sup> <a name="InternalValue" id="@cdktn/provider-cloudflare.worker.WorkerObservabilityOutputReference.property.internalValue"></a>

```go
func InternalValue() interface{}
```

- *Type:* interface{}

---


### WorkerObservabilityTracesOutputReference <a name="WorkerObservabilityTracesOutputReference" id="@cdktn/provider-cloudflare.worker.WorkerObservabilityTracesOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktn/provider-cloudflare.worker.WorkerObservabilityTracesOutputReference.Initializer"></a>

```go
import "github.com/cdktn-io/cdktn-provider-cloudflare-go/cloudflare/v16/worker"

worker.NewWorkerObservabilityTracesOutputReference(terraformResource IInterpolatingParent, terraformAttribute *string) WorkerObservabilityTracesOutputReference
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-cloudflare.worker.WorkerObservabilityTracesOutputReference.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>github.com/open-constructs/cdk-terrain-go/cdktn.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktn/provider-cloudflare.worker.WorkerObservabilityTracesOutputReference.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>*string</code> | The attribute on the parent resource this class is referencing. |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktn/provider-cloudflare.worker.WorkerObservabilityTracesOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* github.com/open-constructs/cdk-terrain-go/cdktn.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-cloudflare.worker.WorkerObservabilityTracesOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* *string

The attribute on the parent resource this class is referencing.

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-cloudflare.worker.WorkerObservabilityTracesOutputReference.computeFqn">ComputeFqn</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-cloudflare.worker.WorkerObservabilityTracesOutputReference.getAnyMapAttribute">GetAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-cloudflare.worker.WorkerObservabilityTracesOutputReference.getBooleanAttribute">GetBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-cloudflare.worker.WorkerObservabilityTracesOutputReference.getBooleanMapAttribute">GetBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-cloudflare.worker.WorkerObservabilityTracesOutputReference.getListAttribute">GetListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-cloudflare.worker.WorkerObservabilityTracesOutputReference.getNumberAttribute">GetNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-cloudflare.worker.WorkerObservabilityTracesOutputReference.getNumberListAttribute">GetNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-cloudflare.worker.WorkerObservabilityTracesOutputReference.getNumberMapAttribute">GetNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-cloudflare.worker.WorkerObservabilityTracesOutputReference.getStringAttribute">GetStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-cloudflare.worker.WorkerObservabilityTracesOutputReference.getStringMapAttribute">GetStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-cloudflare.worker.WorkerObservabilityTracesOutputReference.interpolationForAttribute">InterpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-cloudflare.worker.WorkerObservabilityTracesOutputReference.resolve">Resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktn/provider-cloudflare.worker.WorkerObservabilityTracesOutputReference.toString">ToString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktn/provider-cloudflare.worker.WorkerObservabilityTracesOutputReference.resetDestinations">ResetDestinations</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-cloudflare.worker.WorkerObservabilityTracesOutputReference.resetEnabled">ResetEnabled</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-cloudflare.worker.WorkerObservabilityTracesOutputReference.resetHeadSamplingRate">ResetHeadSamplingRate</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-cloudflare.worker.WorkerObservabilityTracesOutputReference.resetPersist">ResetPersist</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-cloudflare.worker.WorkerObservabilityTracesOutputReference.resetPropagationPolicy">ResetPropagationPolicy</a></code> | *No description.* |

---

##### `ComputeFqn` <a name="ComputeFqn" id="@cdktn/provider-cloudflare.worker.WorkerObservabilityTracesOutputReference.computeFqn"></a>

```go
func ComputeFqn() *string
```

##### `GetAnyMapAttribute` <a name="GetAnyMapAttribute" id="@cdktn/provider-cloudflare.worker.WorkerObservabilityTracesOutputReference.getAnyMapAttribute"></a>

```go
func GetAnyMapAttribute(terraformAttribute *string) *map[string]interface{}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-cloudflare.worker.WorkerObservabilityTracesOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetBooleanAttribute` <a name="GetBooleanAttribute" id="@cdktn/provider-cloudflare.worker.WorkerObservabilityTracesOutputReference.getBooleanAttribute"></a>

```go
func GetBooleanAttribute(terraformAttribute *string) IResolvable
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-cloudflare.worker.WorkerObservabilityTracesOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetBooleanMapAttribute` <a name="GetBooleanMapAttribute" id="@cdktn/provider-cloudflare.worker.WorkerObservabilityTracesOutputReference.getBooleanMapAttribute"></a>

```go
func GetBooleanMapAttribute(terraformAttribute *string) *map[string]*bool
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-cloudflare.worker.WorkerObservabilityTracesOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetListAttribute` <a name="GetListAttribute" id="@cdktn/provider-cloudflare.worker.WorkerObservabilityTracesOutputReference.getListAttribute"></a>

```go
func GetListAttribute(terraformAttribute *string) *[]*string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-cloudflare.worker.WorkerObservabilityTracesOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberAttribute` <a name="GetNumberAttribute" id="@cdktn/provider-cloudflare.worker.WorkerObservabilityTracesOutputReference.getNumberAttribute"></a>

```go
func GetNumberAttribute(terraformAttribute *string) *f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-cloudflare.worker.WorkerObservabilityTracesOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberListAttribute` <a name="GetNumberListAttribute" id="@cdktn/provider-cloudflare.worker.WorkerObservabilityTracesOutputReference.getNumberListAttribute"></a>

```go
func GetNumberListAttribute(terraformAttribute *string) *[]*f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-cloudflare.worker.WorkerObservabilityTracesOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberMapAttribute` <a name="GetNumberMapAttribute" id="@cdktn/provider-cloudflare.worker.WorkerObservabilityTracesOutputReference.getNumberMapAttribute"></a>

```go
func GetNumberMapAttribute(terraformAttribute *string) *map[string]*f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-cloudflare.worker.WorkerObservabilityTracesOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetStringAttribute` <a name="GetStringAttribute" id="@cdktn/provider-cloudflare.worker.WorkerObservabilityTracesOutputReference.getStringAttribute"></a>

```go
func GetStringAttribute(terraformAttribute *string) *string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-cloudflare.worker.WorkerObservabilityTracesOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetStringMapAttribute` <a name="GetStringMapAttribute" id="@cdktn/provider-cloudflare.worker.WorkerObservabilityTracesOutputReference.getStringMapAttribute"></a>

```go
func GetStringMapAttribute(terraformAttribute *string) *map[string]*string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-cloudflare.worker.WorkerObservabilityTracesOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `InterpolationForAttribute` <a name="InterpolationForAttribute" id="@cdktn/provider-cloudflare.worker.WorkerObservabilityTracesOutputReference.interpolationForAttribute"></a>

```go
func InterpolationForAttribute(property *string) IResolvable
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktn/provider-cloudflare.worker.WorkerObservabilityTracesOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* *string

---

##### `Resolve` <a name="Resolve" id="@cdktn/provider-cloudflare.worker.WorkerObservabilityTracesOutputReference.resolve"></a>

```go
func Resolve(_context IResolveContext) interface{}
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktn/provider-cloudflare.worker.WorkerObservabilityTracesOutputReference.resolve.parameter._context"></a>

- *Type:* github.com/open-constructs/cdk-terrain-go/cdktn.IResolveContext

---

##### `ToString` <a name="ToString" id="@cdktn/provider-cloudflare.worker.WorkerObservabilityTracesOutputReference.toString"></a>

```go
func ToString() *string
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `ResetDestinations` <a name="ResetDestinations" id="@cdktn/provider-cloudflare.worker.WorkerObservabilityTracesOutputReference.resetDestinations"></a>

```go
func ResetDestinations()
```

##### `ResetEnabled` <a name="ResetEnabled" id="@cdktn/provider-cloudflare.worker.WorkerObservabilityTracesOutputReference.resetEnabled"></a>

```go
func ResetEnabled()
```

##### `ResetHeadSamplingRate` <a name="ResetHeadSamplingRate" id="@cdktn/provider-cloudflare.worker.WorkerObservabilityTracesOutputReference.resetHeadSamplingRate"></a>

```go
func ResetHeadSamplingRate()
```

##### `ResetPersist` <a name="ResetPersist" id="@cdktn/provider-cloudflare.worker.WorkerObservabilityTracesOutputReference.resetPersist"></a>

```go
func ResetPersist()
```

##### `ResetPropagationPolicy` <a name="ResetPropagationPolicy" id="@cdktn/provider-cloudflare.worker.WorkerObservabilityTracesOutputReference.resetPropagationPolicy"></a>

```go
func ResetPropagationPolicy()
```


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-cloudflare.worker.WorkerObservabilityTracesOutputReference.property.creationStack">CreationStack</a></code> | <code>*[]*string</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktn/provider-cloudflare.worker.WorkerObservabilityTracesOutputReference.property.fqn">Fqn</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktn/provider-cloudflare.worker.WorkerObservabilityTracesOutputReference.property.destinationsInput">DestinationsInput</a></code> | <code>*[]*string</code> | *No description.* |
| <code><a href="#@cdktn/provider-cloudflare.worker.WorkerObservabilityTracesOutputReference.property.enabledInput">EnabledInput</a></code> | <code>interface{}</code> | *No description.* |
| <code><a href="#@cdktn/provider-cloudflare.worker.WorkerObservabilityTracesOutputReference.property.headSamplingRateInput">HeadSamplingRateInput</a></code> | <code>*f64</code> | *No description.* |
| <code><a href="#@cdktn/provider-cloudflare.worker.WorkerObservabilityTracesOutputReference.property.persistInput">PersistInput</a></code> | <code>interface{}</code> | *No description.* |
| <code><a href="#@cdktn/provider-cloudflare.worker.WorkerObservabilityTracesOutputReference.property.propagationPolicyInput">PropagationPolicyInput</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktn/provider-cloudflare.worker.WorkerObservabilityTracesOutputReference.property.destinations">Destinations</a></code> | <code>*[]*string</code> | *No description.* |
| <code><a href="#@cdktn/provider-cloudflare.worker.WorkerObservabilityTracesOutputReference.property.enabled">Enabled</a></code> | <code>interface{}</code> | *No description.* |
| <code><a href="#@cdktn/provider-cloudflare.worker.WorkerObservabilityTracesOutputReference.property.headSamplingRate">HeadSamplingRate</a></code> | <code>*f64</code> | *No description.* |
| <code><a href="#@cdktn/provider-cloudflare.worker.WorkerObservabilityTracesOutputReference.property.persist">Persist</a></code> | <code>interface{}</code> | *No description.* |
| <code><a href="#@cdktn/provider-cloudflare.worker.WorkerObservabilityTracesOutputReference.property.propagationPolicy">PropagationPolicy</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktn/provider-cloudflare.worker.WorkerObservabilityTracesOutputReference.property.internalValue">InternalValue</a></code> | <code>interface{}</code> | *No description.* |

---

##### `CreationStack`<sup>Required</sup> <a name="CreationStack" id="@cdktn/provider-cloudflare.worker.WorkerObservabilityTracesOutputReference.property.creationStack"></a>

```go
func CreationStack() *[]*string
```

- *Type:* *[]*string

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `Fqn`<sup>Required</sup> <a name="Fqn" id="@cdktn/provider-cloudflare.worker.WorkerObservabilityTracesOutputReference.property.fqn"></a>

```go
func Fqn() *string
```

- *Type:* *string

---

##### `DestinationsInput`<sup>Optional</sup> <a name="DestinationsInput" id="@cdktn/provider-cloudflare.worker.WorkerObservabilityTracesOutputReference.property.destinationsInput"></a>

```go
func DestinationsInput() *[]*string
```

- *Type:* *[]*string

---

##### `EnabledInput`<sup>Optional</sup> <a name="EnabledInput" id="@cdktn/provider-cloudflare.worker.WorkerObservabilityTracesOutputReference.property.enabledInput"></a>

```go
func EnabledInput() interface{}
```

- *Type:* interface{}

---

##### `HeadSamplingRateInput`<sup>Optional</sup> <a name="HeadSamplingRateInput" id="@cdktn/provider-cloudflare.worker.WorkerObservabilityTracesOutputReference.property.headSamplingRateInput"></a>

```go
func HeadSamplingRateInput() *f64
```

- *Type:* *f64

---

##### `PersistInput`<sup>Optional</sup> <a name="PersistInput" id="@cdktn/provider-cloudflare.worker.WorkerObservabilityTracesOutputReference.property.persistInput"></a>

```go
func PersistInput() interface{}
```

- *Type:* interface{}

---

##### `PropagationPolicyInput`<sup>Optional</sup> <a name="PropagationPolicyInput" id="@cdktn/provider-cloudflare.worker.WorkerObservabilityTracesOutputReference.property.propagationPolicyInput"></a>

```go
func PropagationPolicyInput() *string
```

- *Type:* *string

---

##### `Destinations`<sup>Required</sup> <a name="Destinations" id="@cdktn/provider-cloudflare.worker.WorkerObservabilityTracesOutputReference.property.destinations"></a>

```go
func Destinations() *[]*string
```

- *Type:* *[]*string

---

##### `Enabled`<sup>Required</sup> <a name="Enabled" id="@cdktn/provider-cloudflare.worker.WorkerObservabilityTracesOutputReference.property.enabled"></a>

```go
func Enabled() interface{}
```

- *Type:* interface{}

---

##### `HeadSamplingRate`<sup>Required</sup> <a name="HeadSamplingRate" id="@cdktn/provider-cloudflare.worker.WorkerObservabilityTracesOutputReference.property.headSamplingRate"></a>

```go
func HeadSamplingRate() *f64
```

- *Type:* *f64

---

##### `Persist`<sup>Required</sup> <a name="Persist" id="@cdktn/provider-cloudflare.worker.WorkerObservabilityTracesOutputReference.property.persist"></a>

```go
func Persist() interface{}
```

- *Type:* interface{}

---

##### `PropagationPolicy`<sup>Required</sup> <a name="PropagationPolicy" id="@cdktn/provider-cloudflare.worker.WorkerObservabilityTracesOutputReference.property.propagationPolicy"></a>

```go
func PropagationPolicy() *string
```

- *Type:* *string

---

##### `InternalValue`<sup>Optional</sup> <a name="InternalValue" id="@cdktn/provider-cloudflare.worker.WorkerObservabilityTracesOutputReference.property.internalValue"></a>

```go
func InternalValue() interface{}
```

- *Type:* interface{}

---


### WorkerPreviewsBaseConfigCacheOptionsOutputReference <a name="WorkerPreviewsBaseConfigCacheOptionsOutputReference" id="@cdktn/provider-cloudflare.worker.WorkerPreviewsBaseConfigCacheOptionsOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktn/provider-cloudflare.worker.WorkerPreviewsBaseConfigCacheOptionsOutputReference.Initializer"></a>

```go
import "github.com/cdktn-io/cdktn-provider-cloudflare-go/cloudflare/v16/worker"

worker.NewWorkerPreviewsBaseConfigCacheOptionsOutputReference(terraformResource IInterpolatingParent, terraformAttribute *string) WorkerPreviewsBaseConfigCacheOptionsOutputReference
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-cloudflare.worker.WorkerPreviewsBaseConfigCacheOptionsOutputReference.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>github.com/open-constructs/cdk-terrain-go/cdktn.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktn/provider-cloudflare.worker.WorkerPreviewsBaseConfigCacheOptionsOutputReference.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>*string</code> | The attribute on the parent resource this class is referencing. |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktn/provider-cloudflare.worker.WorkerPreviewsBaseConfigCacheOptionsOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* github.com/open-constructs/cdk-terrain-go/cdktn.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-cloudflare.worker.WorkerPreviewsBaseConfigCacheOptionsOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* *string

The attribute on the parent resource this class is referencing.

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-cloudflare.worker.WorkerPreviewsBaseConfigCacheOptionsOutputReference.computeFqn">ComputeFqn</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-cloudflare.worker.WorkerPreviewsBaseConfigCacheOptionsOutputReference.getAnyMapAttribute">GetAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-cloudflare.worker.WorkerPreviewsBaseConfigCacheOptionsOutputReference.getBooleanAttribute">GetBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-cloudflare.worker.WorkerPreviewsBaseConfigCacheOptionsOutputReference.getBooleanMapAttribute">GetBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-cloudflare.worker.WorkerPreviewsBaseConfigCacheOptionsOutputReference.getListAttribute">GetListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-cloudflare.worker.WorkerPreviewsBaseConfigCacheOptionsOutputReference.getNumberAttribute">GetNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-cloudflare.worker.WorkerPreviewsBaseConfigCacheOptionsOutputReference.getNumberListAttribute">GetNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-cloudflare.worker.WorkerPreviewsBaseConfigCacheOptionsOutputReference.getNumberMapAttribute">GetNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-cloudflare.worker.WorkerPreviewsBaseConfigCacheOptionsOutputReference.getStringAttribute">GetStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-cloudflare.worker.WorkerPreviewsBaseConfigCacheOptionsOutputReference.getStringMapAttribute">GetStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-cloudflare.worker.WorkerPreviewsBaseConfigCacheOptionsOutputReference.interpolationForAttribute">InterpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-cloudflare.worker.WorkerPreviewsBaseConfigCacheOptionsOutputReference.resolve">Resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktn/provider-cloudflare.worker.WorkerPreviewsBaseConfigCacheOptionsOutputReference.toString">ToString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktn/provider-cloudflare.worker.WorkerPreviewsBaseConfigCacheOptionsOutputReference.resetCrossVersionCache">ResetCrossVersionCache</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-cloudflare.worker.WorkerPreviewsBaseConfigCacheOptionsOutputReference.resetEnabled">ResetEnabled</a></code> | *No description.* |

---

##### `ComputeFqn` <a name="ComputeFqn" id="@cdktn/provider-cloudflare.worker.WorkerPreviewsBaseConfigCacheOptionsOutputReference.computeFqn"></a>

```go
func ComputeFqn() *string
```

##### `GetAnyMapAttribute` <a name="GetAnyMapAttribute" id="@cdktn/provider-cloudflare.worker.WorkerPreviewsBaseConfigCacheOptionsOutputReference.getAnyMapAttribute"></a>

```go
func GetAnyMapAttribute(terraformAttribute *string) *map[string]interface{}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-cloudflare.worker.WorkerPreviewsBaseConfigCacheOptionsOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetBooleanAttribute` <a name="GetBooleanAttribute" id="@cdktn/provider-cloudflare.worker.WorkerPreviewsBaseConfigCacheOptionsOutputReference.getBooleanAttribute"></a>

```go
func GetBooleanAttribute(terraformAttribute *string) IResolvable
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-cloudflare.worker.WorkerPreviewsBaseConfigCacheOptionsOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetBooleanMapAttribute` <a name="GetBooleanMapAttribute" id="@cdktn/provider-cloudflare.worker.WorkerPreviewsBaseConfigCacheOptionsOutputReference.getBooleanMapAttribute"></a>

```go
func GetBooleanMapAttribute(terraformAttribute *string) *map[string]*bool
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-cloudflare.worker.WorkerPreviewsBaseConfigCacheOptionsOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetListAttribute` <a name="GetListAttribute" id="@cdktn/provider-cloudflare.worker.WorkerPreviewsBaseConfigCacheOptionsOutputReference.getListAttribute"></a>

```go
func GetListAttribute(terraformAttribute *string) *[]*string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-cloudflare.worker.WorkerPreviewsBaseConfigCacheOptionsOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberAttribute` <a name="GetNumberAttribute" id="@cdktn/provider-cloudflare.worker.WorkerPreviewsBaseConfigCacheOptionsOutputReference.getNumberAttribute"></a>

```go
func GetNumberAttribute(terraformAttribute *string) *f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-cloudflare.worker.WorkerPreviewsBaseConfigCacheOptionsOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberListAttribute` <a name="GetNumberListAttribute" id="@cdktn/provider-cloudflare.worker.WorkerPreviewsBaseConfigCacheOptionsOutputReference.getNumberListAttribute"></a>

```go
func GetNumberListAttribute(terraformAttribute *string) *[]*f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-cloudflare.worker.WorkerPreviewsBaseConfigCacheOptionsOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberMapAttribute` <a name="GetNumberMapAttribute" id="@cdktn/provider-cloudflare.worker.WorkerPreviewsBaseConfigCacheOptionsOutputReference.getNumberMapAttribute"></a>

```go
func GetNumberMapAttribute(terraformAttribute *string) *map[string]*f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-cloudflare.worker.WorkerPreviewsBaseConfigCacheOptionsOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetStringAttribute` <a name="GetStringAttribute" id="@cdktn/provider-cloudflare.worker.WorkerPreviewsBaseConfigCacheOptionsOutputReference.getStringAttribute"></a>

```go
func GetStringAttribute(terraformAttribute *string) *string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-cloudflare.worker.WorkerPreviewsBaseConfigCacheOptionsOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetStringMapAttribute` <a name="GetStringMapAttribute" id="@cdktn/provider-cloudflare.worker.WorkerPreviewsBaseConfigCacheOptionsOutputReference.getStringMapAttribute"></a>

```go
func GetStringMapAttribute(terraformAttribute *string) *map[string]*string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-cloudflare.worker.WorkerPreviewsBaseConfigCacheOptionsOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `InterpolationForAttribute` <a name="InterpolationForAttribute" id="@cdktn/provider-cloudflare.worker.WorkerPreviewsBaseConfigCacheOptionsOutputReference.interpolationForAttribute"></a>

```go
func InterpolationForAttribute(property *string) IResolvable
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktn/provider-cloudflare.worker.WorkerPreviewsBaseConfigCacheOptionsOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* *string

---

##### `Resolve` <a name="Resolve" id="@cdktn/provider-cloudflare.worker.WorkerPreviewsBaseConfigCacheOptionsOutputReference.resolve"></a>

```go
func Resolve(_context IResolveContext) interface{}
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktn/provider-cloudflare.worker.WorkerPreviewsBaseConfigCacheOptionsOutputReference.resolve.parameter._context"></a>

- *Type:* github.com/open-constructs/cdk-terrain-go/cdktn.IResolveContext

---

##### `ToString` <a name="ToString" id="@cdktn/provider-cloudflare.worker.WorkerPreviewsBaseConfigCacheOptionsOutputReference.toString"></a>

```go
func ToString() *string
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `ResetCrossVersionCache` <a name="ResetCrossVersionCache" id="@cdktn/provider-cloudflare.worker.WorkerPreviewsBaseConfigCacheOptionsOutputReference.resetCrossVersionCache"></a>

```go
func ResetCrossVersionCache()
```

##### `ResetEnabled` <a name="ResetEnabled" id="@cdktn/provider-cloudflare.worker.WorkerPreviewsBaseConfigCacheOptionsOutputReference.resetEnabled"></a>

```go
func ResetEnabled()
```


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-cloudflare.worker.WorkerPreviewsBaseConfigCacheOptionsOutputReference.property.creationStack">CreationStack</a></code> | <code>*[]*string</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktn/provider-cloudflare.worker.WorkerPreviewsBaseConfigCacheOptionsOutputReference.property.fqn">Fqn</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktn/provider-cloudflare.worker.WorkerPreviewsBaseConfigCacheOptionsOutputReference.property.crossVersionCacheInput">CrossVersionCacheInput</a></code> | <code>interface{}</code> | *No description.* |
| <code><a href="#@cdktn/provider-cloudflare.worker.WorkerPreviewsBaseConfigCacheOptionsOutputReference.property.enabledInput">EnabledInput</a></code> | <code>interface{}</code> | *No description.* |
| <code><a href="#@cdktn/provider-cloudflare.worker.WorkerPreviewsBaseConfigCacheOptionsOutputReference.property.crossVersionCache">CrossVersionCache</a></code> | <code>interface{}</code> | *No description.* |
| <code><a href="#@cdktn/provider-cloudflare.worker.WorkerPreviewsBaseConfigCacheOptionsOutputReference.property.enabled">Enabled</a></code> | <code>interface{}</code> | *No description.* |
| <code><a href="#@cdktn/provider-cloudflare.worker.WorkerPreviewsBaseConfigCacheOptionsOutputReference.property.internalValue">InternalValue</a></code> | <code>interface{}</code> | *No description.* |

---

##### `CreationStack`<sup>Required</sup> <a name="CreationStack" id="@cdktn/provider-cloudflare.worker.WorkerPreviewsBaseConfigCacheOptionsOutputReference.property.creationStack"></a>

```go
func CreationStack() *[]*string
```

- *Type:* *[]*string

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `Fqn`<sup>Required</sup> <a name="Fqn" id="@cdktn/provider-cloudflare.worker.WorkerPreviewsBaseConfigCacheOptionsOutputReference.property.fqn"></a>

```go
func Fqn() *string
```

- *Type:* *string

---

##### `CrossVersionCacheInput`<sup>Optional</sup> <a name="CrossVersionCacheInput" id="@cdktn/provider-cloudflare.worker.WorkerPreviewsBaseConfigCacheOptionsOutputReference.property.crossVersionCacheInput"></a>

```go
func CrossVersionCacheInput() interface{}
```

- *Type:* interface{}

---

##### `EnabledInput`<sup>Optional</sup> <a name="EnabledInput" id="@cdktn/provider-cloudflare.worker.WorkerPreviewsBaseConfigCacheOptionsOutputReference.property.enabledInput"></a>

```go
func EnabledInput() interface{}
```

- *Type:* interface{}

---

##### `CrossVersionCache`<sup>Required</sup> <a name="CrossVersionCache" id="@cdktn/provider-cloudflare.worker.WorkerPreviewsBaseConfigCacheOptionsOutputReference.property.crossVersionCache"></a>

```go
func CrossVersionCache() interface{}
```

- *Type:* interface{}

---

##### `Enabled`<sup>Required</sup> <a name="Enabled" id="@cdktn/provider-cloudflare.worker.WorkerPreviewsBaseConfigCacheOptionsOutputReference.property.enabled"></a>

```go
func Enabled() interface{}
```

- *Type:* interface{}

---

##### `InternalValue`<sup>Optional</sup> <a name="InternalValue" id="@cdktn/provider-cloudflare.worker.WorkerPreviewsBaseConfigCacheOptionsOutputReference.property.internalValue"></a>

```go
func InternalValue() interface{}
```

- *Type:* interface{}

---


### WorkerPreviewsBaseConfigEnvMap <a name="WorkerPreviewsBaseConfigEnvMap" id="@cdktn/provider-cloudflare.worker.WorkerPreviewsBaseConfigEnvMap"></a>

#### Initializers <a name="Initializers" id="@cdktn/provider-cloudflare.worker.WorkerPreviewsBaseConfigEnvMap.Initializer"></a>

```go
import "github.com/cdktn-io/cdktn-provider-cloudflare-go/cloudflare/v16/worker"

worker.NewWorkerPreviewsBaseConfigEnvMap(terraformResource IInterpolatingParent, terraformAttribute *string) WorkerPreviewsBaseConfigEnvMap
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-cloudflare.worker.WorkerPreviewsBaseConfigEnvMap.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>github.com/open-constructs/cdk-terrain-go/cdktn.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktn/provider-cloudflare.worker.WorkerPreviewsBaseConfigEnvMap.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>*string</code> | The attribute on the parent resource this class is referencing. |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktn/provider-cloudflare.worker.WorkerPreviewsBaseConfigEnvMap.Initializer.parameter.terraformResource"></a>

- *Type:* github.com/open-constructs/cdk-terrain-go/cdktn.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-cloudflare.worker.WorkerPreviewsBaseConfigEnvMap.Initializer.parameter.terraformAttribute"></a>

- *Type:* *string

The attribute on the parent resource this class is referencing.

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-cloudflare.worker.WorkerPreviewsBaseConfigEnvMap.computeFqn">ComputeFqn</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-cloudflare.worker.WorkerPreviewsBaseConfigEnvMap.interpolationForAttribute">InterpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-cloudflare.worker.WorkerPreviewsBaseConfigEnvMap.resolve">Resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktn/provider-cloudflare.worker.WorkerPreviewsBaseConfigEnvMap.toString">ToString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktn/provider-cloudflare.worker.WorkerPreviewsBaseConfigEnvMap.get">Get</a></code> | *No description.* |

---

##### `ComputeFqn` <a name="ComputeFqn" id="@cdktn/provider-cloudflare.worker.WorkerPreviewsBaseConfigEnvMap.computeFqn"></a>

```go
func ComputeFqn() *string
```

##### `InterpolationForAttribute` <a name="InterpolationForAttribute" id="@cdktn/provider-cloudflare.worker.WorkerPreviewsBaseConfigEnvMap.interpolationForAttribute"></a>

```go
func InterpolationForAttribute(property *string) IResolvable
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktn/provider-cloudflare.worker.WorkerPreviewsBaseConfigEnvMap.interpolationForAttribute.parameter.property"></a>

- *Type:* *string

---

##### `Resolve` <a name="Resolve" id="@cdktn/provider-cloudflare.worker.WorkerPreviewsBaseConfigEnvMap.resolve"></a>

```go
func Resolve(_context IResolveContext) interface{}
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktn/provider-cloudflare.worker.WorkerPreviewsBaseConfigEnvMap.resolve.parameter._context"></a>

- *Type:* github.com/open-constructs/cdk-terrain-go/cdktn.IResolveContext

---

##### `ToString` <a name="ToString" id="@cdktn/provider-cloudflare.worker.WorkerPreviewsBaseConfigEnvMap.toString"></a>

```go
func ToString() *string
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `Get` <a name="Get" id="@cdktn/provider-cloudflare.worker.WorkerPreviewsBaseConfigEnvMap.get"></a>

```go
func Get(key *string) WorkerPreviewsBaseConfigEnvOutputReference
```

###### `key`<sup>Required</sup> <a name="key" id="@cdktn/provider-cloudflare.worker.WorkerPreviewsBaseConfigEnvMap.get.parameter.key"></a>

- *Type:* *string

the key of the item to return.

---


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-cloudflare.worker.WorkerPreviewsBaseConfigEnvMap.property.creationStack">CreationStack</a></code> | <code>*[]*string</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktn/provider-cloudflare.worker.WorkerPreviewsBaseConfigEnvMap.property.fqn">Fqn</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktn/provider-cloudflare.worker.WorkerPreviewsBaseConfigEnvMap.property.internalValue">InternalValue</a></code> | <code>interface{}</code> | *No description.* |

---

##### `CreationStack`<sup>Required</sup> <a name="CreationStack" id="@cdktn/provider-cloudflare.worker.WorkerPreviewsBaseConfigEnvMap.property.creationStack"></a>

```go
func CreationStack() *[]*string
```

- *Type:* *[]*string

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `Fqn`<sup>Required</sup> <a name="Fqn" id="@cdktn/provider-cloudflare.worker.WorkerPreviewsBaseConfigEnvMap.property.fqn"></a>

```go
func Fqn() *string
```

- *Type:* *string

---

##### `InternalValue`<sup>Optional</sup> <a name="InternalValue" id="@cdktn/provider-cloudflare.worker.WorkerPreviewsBaseConfigEnvMap.property.internalValue"></a>

```go
func InternalValue() interface{}
```

- *Type:* interface{}

---


### WorkerPreviewsBaseConfigEnvOutputReference <a name="WorkerPreviewsBaseConfigEnvOutputReference" id="@cdktn/provider-cloudflare.worker.WorkerPreviewsBaseConfigEnvOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktn/provider-cloudflare.worker.WorkerPreviewsBaseConfigEnvOutputReference.Initializer"></a>

```go
import "github.com/cdktn-io/cdktn-provider-cloudflare-go/cloudflare/v16/worker"

worker.NewWorkerPreviewsBaseConfigEnvOutputReference(terraformResource IInterpolatingParent, terraformAttribute *string, complexObjectKey *string) WorkerPreviewsBaseConfigEnvOutputReference
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-cloudflare.worker.WorkerPreviewsBaseConfigEnvOutputReference.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>github.com/open-constructs/cdk-terrain-go/cdktn.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktn/provider-cloudflare.worker.WorkerPreviewsBaseConfigEnvOutputReference.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>*string</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#@cdktn/provider-cloudflare.worker.WorkerPreviewsBaseConfigEnvOutputReference.Initializer.parameter.complexObjectKey">complexObjectKey</a></code> | <code>*string</code> | the key of this item in the map. |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktn/provider-cloudflare.worker.WorkerPreviewsBaseConfigEnvOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* github.com/open-constructs/cdk-terrain-go/cdktn.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-cloudflare.worker.WorkerPreviewsBaseConfigEnvOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* *string

The attribute on the parent resource this class is referencing.

---

##### `complexObjectKey`<sup>Required</sup> <a name="complexObjectKey" id="@cdktn/provider-cloudflare.worker.WorkerPreviewsBaseConfigEnvOutputReference.Initializer.parameter.complexObjectKey"></a>

- *Type:* *string

the key of this item in the map.

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-cloudflare.worker.WorkerPreviewsBaseConfigEnvOutputReference.computeFqn">ComputeFqn</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-cloudflare.worker.WorkerPreviewsBaseConfigEnvOutputReference.getAnyMapAttribute">GetAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-cloudflare.worker.WorkerPreviewsBaseConfigEnvOutputReference.getBooleanAttribute">GetBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-cloudflare.worker.WorkerPreviewsBaseConfigEnvOutputReference.getBooleanMapAttribute">GetBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-cloudflare.worker.WorkerPreviewsBaseConfigEnvOutputReference.getListAttribute">GetListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-cloudflare.worker.WorkerPreviewsBaseConfigEnvOutputReference.getNumberAttribute">GetNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-cloudflare.worker.WorkerPreviewsBaseConfigEnvOutputReference.getNumberListAttribute">GetNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-cloudflare.worker.WorkerPreviewsBaseConfigEnvOutputReference.getNumberMapAttribute">GetNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-cloudflare.worker.WorkerPreviewsBaseConfigEnvOutputReference.getStringAttribute">GetStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-cloudflare.worker.WorkerPreviewsBaseConfigEnvOutputReference.getStringMapAttribute">GetStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-cloudflare.worker.WorkerPreviewsBaseConfigEnvOutputReference.interpolationForAttribute">InterpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-cloudflare.worker.WorkerPreviewsBaseConfigEnvOutputReference.resolve">Resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktn/provider-cloudflare.worker.WorkerPreviewsBaseConfigEnvOutputReference.toString">ToString</a></code> | Return a string representation of this resolvable object. |

---

##### `ComputeFqn` <a name="ComputeFqn" id="@cdktn/provider-cloudflare.worker.WorkerPreviewsBaseConfigEnvOutputReference.computeFqn"></a>

```go
func ComputeFqn() *string
```

##### `GetAnyMapAttribute` <a name="GetAnyMapAttribute" id="@cdktn/provider-cloudflare.worker.WorkerPreviewsBaseConfigEnvOutputReference.getAnyMapAttribute"></a>

```go
func GetAnyMapAttribute(terraformAttribute *string) *map[string]interface{}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-cloudflare.worker.WorkerPreviewsBaseConfigEnvOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetBooleanAttribute` <a name="GetBooleanAttribute" id="@cdktn/provider-cloudflare.worker.WorkerPreviewsBaseConfigEnvOutputReference.getBooleanAttribute"></a>

```go
func GetBooleanAttribute(terraformAttribute *string) IResolvable
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-cloudflare.worker.WorkerPreviewsBaseConfigEnvOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetBooleanMapAttribute` <a name="GetBooleanMapAttribute" id="@cdktn/provider-cloudflare.worker.WorkerPreviewsBaseConfigEnvOutputReference.getBooleanMapAttribute"></a>

```go
func GetBooleanMapAttribute(terraformAttribute *string) *map[string]*bool
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-cloudflare.worker.WorkerPreviewsBaseConfigEnvOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetListAttribute` <a name="GetListAttribute" id="@cdktn/provider-cloudflare.worker.WorkerPreviewsBaseConfigEnvOutputReference.getListAttribute"></a>

```go
func GetListAttribute(terraformAttribute *string) *[]*string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-cloudflare.worker.WorkerPreviewsBaseConfigEnvOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberAttribute` <a name="GetNumberAttribute" id="@cdktn/provider-cloudflare.worker.WorkerPreviewsBaseConfigEnvOutputReference.getNumberAttribute"></a>

```go
func GetNumberAttribute(terraformAttribute *string) *f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-cloudflare.worker.WorkerPreviewsBaseConfigEnvOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberListAttribute` <a name="GetNumberListAttribute" id="@cdktn/provider-cloudflare.worker.WorkerPreviewsBaseConfigEnvOutputReference.getNumberListAttribute"></a>

```go
func GetNumberListAttribute(terraformAttribute *string) *[]*f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-cloudflare.worker.WorkerPreviewsBaseConfigEnvOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberMapAttribute` <a name="GetNumberMapAttribute" id="@cdktn/provider-cloudflare.worker.WorkerPreviewsBaseConfigEnvOutputReference.getNumberMapAttribute"></a>

```go
func GetNumberMapAttribute(terraformAttribute *string) *map[string]*f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-cloudflare.worker.WorkerPreviewsBaseConfigEnvOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetStringAttribute` <a name="GetStringAttribute" id="@cdktn/provider-cloudflare.worker.WorkerPreviewsBaseConfigEnvOutputReference.getStringAttribute"></a>

```go
func GetStringAttribute(terraformAttribute *string) *string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-cloudflare.worker.WorkerPreviewsBaseConfigEnvOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetStringMapAttribute` <a name="GetStringMapAttribute" id="@cdktn/provider-cloudflare.worker.WorkerPreviewsBaseConfigEnvOutputReference.getStringMapAttribute"></a>

```go
func GetStringMapAttribute(terraformAttribute *string) *map[string]*string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-cloudflare.worker.WorkerPreviewsBaseConfigEnvOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `InterpolationForAttribute` <a name="InterpolationForAttribute" id="@cdktn/provider-cloudflare.worker.WorkerPreviewsBaseConfigEnvOutputReference.interpolationForAttribute"></a>

```go
func InterpolationForAttribute(property *string) IResolvable
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktn/provider-cloudflare.worker.WorkerPreviewsBaseConfigEnvOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* *string

---

##### `Resolve` <a name="Resolve" id="@cdktn/provider-cloudflare.worker.WorkerPreviewsBaseConfigEnvOutputReference.resolve"></a>

```go
func Resolve(_context IResolveContext) interface{}
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktn/provider-cloudflare.worker.WorkerPreviewsBaseConfigEnvOutputReference.resolve.parameter._context"></a>

- *Type:* github.com/open-constructs/cdk-terrain-go/cdktn.IResolveContext

---

##### `ToString` <a name="ToString" id="@cdktn/provider-cloudflare.worker.WorkerPreviewsBaseConfigEnvOutputReference.toString"></a>

```go
func ToString() *string
```

Return a string representation of this resolvable object.

Returns a reversible string representation.


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-cloudflare.worker.WorkerPreviewsBaseConfigEnvOutputReference.property.creationStack">CreationStack</a></code> | <code>*[]*string</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktn/provider-cloudflare.worker.WorkerPreviewsBaseConfigEnvOutputReference.property.fqn">Fqn</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktn/provider-cloudflare.worker.WorkerPreviewsBaseConfigEnvOutputReference.property.typeInput">TypeInput</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktn/provider-cloudflare.worker.WorkerPreviewsBaseConfigEnvOutputReference.property.type">Type</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktn/provider-cloudflare.worker.WorkerPreviewsBaseConfigEnvOutputReference.property.internalValue">InternalValue</a></code> | <code>interface{}</code> | *No description.* |

---

##### `CreationStack`<sup>Required</sup> <a name="CreationStack" id="@cdktn/provider-cloudflare.worker.WorkerPreviewsBaseConfigEnvOutputReference.property.creationStack"></a>

```go
func CreationStack() *[]*string
```

- *Type:* *[]*string

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `Fqn`<sup>Required</sup> <a name="Fqn" id="@cdktn/provider-cloudflare.worker.WorkerPreviewsBaseConfigEnvOutputReference.property.fqn"></a>

```go
func Fqn() *string
```

- *Type:* *string

---

##### `TypeInput`<sup>Optional</sup> <a name="TypeInput" id="@cdktn/provider-cloudflare.worker.WorkerPreviewsBaseConfigEnvOutputReference.property.typeInput"></a>

```go
func TypeInput() *string
```

- *Type:* *string

---

##### `Type`<sup>Required</sup> <a name="Type" id="@cdktn/provider-cloudflare.worker.WorkerPreviewsBaseConfigEnvOutputReference.property.type"></a>

```go
func Type() *string
```

- *Type:* *string

---

##### `InternalValue`<sup>Optional</sup> <a name="InternalValue" id="@cdktn/provider-cloudflare.worker.WorkerPreviewsBaseConfigEnvOutputReference.property.internalValue"></a>

```go
func InternalValue() interface{}
```

- *Type:* interface{}

---


### WorkerPreviewsBaseConfigLimitsOutputReference <a name="WorkerPreviewsBaseConfigLimitsOutputReference" id="@cdktn/provider-cloudflare.worker.WorkerPreviewsBaseConfigLimitsOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktn/provider-cloudflare.worker.WorkerPreviewsBaseConfigLimitsOutputReference.Initializer"></a>

```go
import "github.com/cdktn-io/cdktn-provider-cloudflare-go/cloudflare/v16/worker"

worker.NewWorkerPreviewsBaseConfigLimitsOutputReference(terraformResource IInterpolatingParent, terraformAttribute *string) WorkerPreviewsBaseConfigLimitsOutputReference
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-cloudflare.worker.WorkerPreviewsBaseConfigLimitsOutputReference.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>github.com/open-constructs/cdk-terrain-go/cdktn.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktn/provider-cloudflare.worker.WorkerPreviewsBaseConfigLimitsOutputReference.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>*string</code> | The attribute on the parent resource this class is referencing. |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktn/provider-cloudflare.worker.WorkerPreviewsBaseConfigLimitsOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* github.com/open-constructs/cdk-terrain-go/cdktn.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-cloudflare.worker.WorkerPreviewsBaseConfigLimitsOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* *string

The attribute on the parent resource this class is referencing.

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-cloudflare.worker.WorkerPreviewsBaseConfigLimitsOutputReference.computeFqn">ComputeFqn</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-cloudflare.worker.WorkerPreviewsBaseConfigLimitsOutputReference.getAnyMapAttribute">GetAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-cloudflare.worker.WorkerPreviewsBaseConfigLimitsOutputReference.getBooleanAttribute">GetBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-cloudflare.worker.WorkerPreviewsBaseConfigLimitsOutputReference.getBooleanMapAttribute">GetBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-cloudflare.worker.WorkerPreviewsBaseConfigLimitsOutputReference.getListAttribute">GetListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-cloudflare.worker.WorkerPreviewsBaseConfigLimitsOutputReference.getNumberAttribute">GetNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-cloudflare.worker.WorkerPreviewsBaseConfigLimitsOutputReference.getNumberListAttribute">GetNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-cloudflare.worker.WorkerPreviewsBaseConfigLimitsOutputReference.getNumberMapAttribute">GetNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-cloudflare.worker.WorkerPreviewsBaseConfigLimitsOutputReference.getStringAttribute">GetStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-cloudflare.worker.WorkerPreviewsBaseConfigLimitsOutputReference.getStringMapAttribute">GetStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-cloudflare.worker.WorkerPreviewsBaseConfigLimitsOutputReference.interpolationForAttribute">InterpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-cloudflare.worker.WorkerPreviewsBaseConfigLimitsOutputReference.resolve">Resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktn/provider-cloudflare.worker.WorkerPreviewsBaseConfigLimitsOutputReference.toString">ToString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktn/provider-cloudflare.worker.WorkerPreviewsBaseConfigLimitsOutputReference.resetCpuMs">ResetCpuMs</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-cloudflare.worker.WorkerPreviewsBaseConfigLimitsOutputReference.resetSubrequests">ResetSubrequests</a></code> | *No description.* |

---

##### `ComputeFqn` <a name="ComputeFqn" id="@cdktn/provider-cloudflare.worker.WorkerPreviewsBaseConfigLimitsOutputReference.computeFqn"></a>

```go
func ComputeFqn() *string
```

##### `GetAnyMapAttribute` <a name="GetAnyMapAttribute" id="@cdktn/provider-cloudflare.worker.WorkerPreviewsBaseConfigLimitsOutputReference.getAnyMapAttribute"></a>

```go
func GetAnyMapAttribute(terraformAttribute *string) *map[string]interface{}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-cloudflare.worker.WorkerPreviewsBaseConfigLimitsOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetBooleanAttribute` <a name="GetBooleanAttribute" id="@cdktn/provider-cloudflare.worker.WorkerPreviewsBaseConfigLimitsOutputReference.getBooleanAttribute"></a>

```go
func GetBooleanAttribute(terraformAttribute *string) IResolvable
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-cloudflare.worker.WorkerPreviewsBaseConfigLimitsOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetBooleanMapAttribute` <a name="GetBooleanMapAttribute" id="@cdktn/provider-cloudflare.worker.WorkerPreviewsBaseConfigLimitsOutputReference.getBooleanMapAttribute"></a>

```go
func GetBooleanMapAttribute(terraformAttribute *string) *map[string]*bool
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-cloudflare.worker.WorkerPreviewsBaseConfigLimitsOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetListAttribute` <a name="GetListAttribute" id="@cdktn/provider-cloudflare.worker.WorkerPreviewsBaseConfigLimitsOutputReference.getListAttribute"></a>

```go
func GetListAttribute(terraformAttribute *string) *[]*string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-cloudflare.worker.WorkerPreviewsBaseConfigLimitsOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberAttribute` <a name="GetNumberAttribute" id="@cdktn/provider-cloudflare.worker.WorkerPreviewsBaseConfigLimitsOutputReference.getNumberAttribute"></a>

```go
func GetNumberAttribute(terraformAttribute *string) *f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-cloudflare.worker.WorkerPreviewsBaseConfigLimitsOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberListAttribute` <a name="GetNumberListAttribute" id="@cdktn/provider-cloudflare.worker.WorkerPreviewsBaseConfigLimitsOutputReference.getNumberListAttribute"></a>

```go
func GetNumberListAttribute(terraformAttribute *string) *[]*f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-cloudflare.worker.WorkerPreviewsBaseConfigLimitsOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberMapAttribute` <a name="GetNumberMapAttribute" id="@cdktn/provider-cloudflare.worker.WorkerPreviewsBaseConfigLimitsOutputReference.getNumberMapAttribute"></a>

```go
func GetNumberMapAttribute(terraformAttribute *string) *map[string]*f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-cloudflare.worker.WorkerPreviewsBaseConfigLimitsOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetStringAttribute` <a name="GetStringAttribute" id="@cdktn/provider-cloudflare.worker.WorkerPreviewsBaseConfigLimitsOutputReference.getStringAttribute"></a>

```go
func GetStringAttribute(terraformAttribute *string) *string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-cloudflare.worker.WorkerPreviewsBaseConfigLimitsOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetStringMapAttribute` <a name="GetStringMapAttribute" id="@cdktn/provider-cloudflare.worker.WorkerPreviewsBaseConfigLimitsOutputReference.getStringMapAttribute"></a>

```go
func GetStringMapAttribute(terraformAttribute *string) *map[string]*string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-cloudflare.worker.WorkerPreviewsBaseConfigLimitsOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `InterpolationForAttribute` <a name="InterpolationForAttribute" id="@cdktn/provider-cloudflare.worker.WorkerPreviewsBaseConfigLimitsOutputReference.interpolationForAttribute"></a>

```go
func InterpolationForAttribute(property *string) IResolvable
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktn/provider-cloudflare.worker.WorkerPreviewsBaseConfigLimitsOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* *string

---

##### `Resolve` <a name="Resolve" id="@cdktn/provider-cloudflare.worker.WorkerPreviewsBaseConfigLimitsOutputReference.resolve"></a>

```go
func Resolve(_context IResolveContext) interface{}
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktn/provider-cloudflare.worker.WorkerPreviewsBaseConfigLimitsOutputReference.resolve.parameter._context"></a>

- *Type:* github.com/open-constructs/cdk-terrain-go/cdktn.IResolveContext

---

##### `ToString` <a name="ToString" id="@cdktn/provider-cloudflare.worker.WorkerPreviewsBaseConfigLimitsOutputReference.toString"></a>

```go
func ToString() *string
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `ResetCpuMs` <a name="ResetCpuMs" id="@cdktn/provider-cloudflare.worker.WorkerPreviewsBaseConfigLimitsOutputReference.resetCpuMs"></a>

```go
func ResetCpuMs()
```

##### `ResetSubrequests` <a name="ResetSubrequests" id="@cdktn/provider-cloudflare.worker.WorkerPreviewsBaseConfigLimitsOutputReference.resetSubrequests"></a>

```go
func ResetSubrequests()
```


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-cloudflare.worker.WorkerPreviewsBaseConfigLimitsOutputReference.property.creationStack">CreationStack</a></code> | <code>*[]*string</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktn/provider-cloudflare.worker.WorkerPreviewsBaseConfigLimitsOutputReference.property.fqn">Fqn</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktn/provider-cloudflare.worker.WorkerPreviewsBaseConfigLimitsOutputReference.property.cpuMsInput">CpuMsInput</a></code> | <code>*f64</code> | *No description.* |
| <code><a href="#@cdktn/provider-cloudflare.worker.WorkerPreviewsBaseConfigLimitsOutputReference.property.subrequestsInput">SubrequestsInput</a></code> | <code>*f64</code> | *No description.* |
| <code><a href="#@cdktn/provider-cloudflare.worker.WorkerPreviewsBaseConfigLimitsOutputReference.property.cpuMs">CpuMs</a></code> | <code>*f64</code> | *No description.* |
| <code><a href="#@cdktn/provider-cloudflare.worker.WorkerPreviewsBaseConfigLimitsOutputReference.property.subrequests">Subrequests</a></code> | <code>*f64</code> | *No description.* |
| <code><a href="#@cdktn/provider-cloudflare.worker.WorkerPreviewsBaseConfigLimitsOutputReference.property.internalValue">InternalValue</a></code> | <code>interface{}</code> | *No description.* |

---

##### `CreationStack`<sup>Required</sup> <a name="CreationStack" id="@cdktn/provider-cloudflare.worker.WorkerPreviewsBaseConfigLimitsOutputReference.property.creationStack"></a>

```go
func CreationStack() *[]*string
```

- *Type:* *[]*string

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `Fqn`<sup>Required</sup> <a name="Fqn" id="@cdktn/provider-cloudflare.worker.WorkerPreviewsBaseConfigLimitsOutputReference.property.fqn"></a>

```go
func Fqn() *string
```

- *Type:* *string

---

##### `CpuMsInput`<sup>Optional</sup> <a name="CpuMsInput" id="@cdktn/provider-cloudflare.worker.WorkerPreviewsBaseConfigLimitsOutputReference.property.cpuMsInput"></a>

```go
func CpuMsInput() *f64
```

- *Type:* *f64

---

##### `SubrequestsInput`<sup>Optional</sup> <a name="SubrequestsInput" id="@cdktn/provider-cloudflare.worker.WorkerPreviewsBaseConfigLimitsOutputReference.property.subrequestsInput"></a>

```go
func SubrequestsInput() *f64
```

- *Type:* *f64

---

##### `CpuMs`<sup>Required</sup> <a name="CpuMs" id="@cdktn/provider-cloudflare.worker.WorkerPreviewsBaseConfigLimitsOutputReference.property.cpuMs"></a>

```go
func CpuMs() *f64
```

- *Type:* *f64

---

##### `Subrequests`<sup>Required</sup> <a name="Subrequests" id="@cdktn/provider-cloudflare.worker.WorkerPreviewsBaseConfigLimitsOutputReference.property.subrequests"></a>

```go
func Subrequests() *f64
```

- *Type:* *f64

---

##### `InternalValue`<sup>Optional</sup> <a name="InternalValue" id="@cdktn/provider-cloudflare.worker.WorkerPreviewsBaseConfigLimitsOutputReference.property.internalValue"></a>

```go
func InternalValue() interface{}
```

- *Type:* interface{}

---


### WorkerPreviewsBaseConfigObservabilityIssuesOutputReference <a name="WorkerPreviewsBaseConfigObservabilityIssuesOutputReference" id="@cdktn/provider-cloudflare.worker.WorkerPreviewsBaseConfigObservabilityIssuesOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktn/provider-cloudflare.worker.WorkerPreviewsBaseConfigObservabilityIssuesOutputReference.Initializer"></a>

```go
import "github.com/cdktn-io/cdktn-provider-cloudflare-go/cloudflare/v16/worker"

worker.NewWorkerPreviewsBaseConfigObservabilityIssuesOutputReference(terraformResource IInterpolatingParent, terraformAttribute *string) WorkerPreviewsBaseConfigObservabilityIssuesOutputReference
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-cloudflare.worker.WorkerPreviewsBaseConfigObservabilityIssuesOutputReference.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>github.com/open-constructs/cdk-terrain-go/cdktn.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktn/provider-cloudflare.worker.WorkerPreviewsBaseConfigObservabilityIssuesOutputReference.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>*string</code> | The attribute on the parent resource this class is referencing. |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktn/provider-cloudflare.worker.WorkerPreviewsBaseConfigObservabilityIssuesOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* github.com/open-constructs/cdk-terrain-go/cdktn.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-cloudflare.worker.WorkerPreviewsBaseConfigObservabilityIssuesOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* *string

The attribute on the parent resource this class is referencing.

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-cloudflare.worker.WorkerPreviewsBaseConfigObservabilityIssuesOutputReference.computeFqn">ComputeFqn</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-cloudflare.worker.WorkerPreviewsBaseConfigObservabilityIssuesOutputReference.getAnyMapAttribute">GetAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-cloudflare.worker.WorkerPreviewsBaseConfigObservabilityIssuesOutputReference.getBooleanAttribute">GetBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-cloudflare.worker.WorkerPreviewsBaseConfigObservabilityIssuesOutputReference.getBooleanMapAttribute">GetBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-cloudflare.worker.WorkerPreviewsBaseConfigObservabilityIssuesOutputReference.getListAttribute">GetListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-cloudflare.worker.WorkerPreviewsBaseConfigObservabilityIssuesOutputReference.getNumberAttribute">GetNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-cloudflare.worker.WorkerPreviewsBaseConfigObservabilityIssuesOutputReference.getNumberListAttribute">GetNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-cloudflare.worker.WorkerPreviewsBaseConfigObservabilityIssuesOutputReference.getNumberMapAttribute">GetNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-cloudflare.worker.WorkerPreviewsBaseConfigObservabilityIssuesOutputReference.getStringAttribute">GetStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-cloudflare.worker.WorkerPreviewsBaseConfigObservabilityIssuesOutputReference.getStringMapAttribute">GetStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-cloudflare.worker.WorkerPreviewsBaseConfigObservabilityIssuesOutputReference.interpolationForAttribute">InterpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-cloudflare.worker.WorkerPreviewsBaseConfigObservabilityIssuesOutputReference.resolve">Resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktn/provider-cloudflare.worker.WorkerPreviewsBaseConfigObservabilityIssuesOutputReference.toString">ToString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktn/provider-cloudflare.worker.WorkerPreviewsBaseConfigObservabilityIssuesOutputReference.resetEnabled">ResetEnabled</a></code> | *No description.* |

---

##### `ComputeFqn` <a name="ComputeFqn" id="@cdktn/provider-cloudflare.worker.WorkerPreviewsBaseConfigObservabilityIssuesOutputReference.computeFqn"></a>

```go
func ComputeFqn() *string
```

##### `GetAnyMapAttribute` <a name="GetAnyMapAttribute" id="@cdktn/provider-cloudflare.worker.WorkerPreviewsBaseConfigObservabilityIssuesOutputReference.getAnyMapAttribute"></a>

```go
func GetAnyMapAttribute(terraformAttribute *string) *map[string]interface{}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-cloudflare.worker.WorkerPreviewsBaseConfigObservabilityIssuesOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetBooleanAttribute` <a name="GetBooleanAttribute" id="@cdktn/provider-cloudflare.worker.WorkerPreviewsBaseConfigObservabilityIssuesOutputReference.getBooleanAttribute"></a>

```go
func GetBooleanAttribute(terraformAttribute *string) IResolvable
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-cloudflare.worker.WorkerPreviewsBaseConfigObservabilityIssuesOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetBooleanMapAttribute` <a name="GetBooleanMapAttribute" id="@cdktn/provider-cloudflare.worker.WorkerPreviewsBaseConfigObservabilityIssuesOutputReference.getBooleanMapAttribute"></a>

```go
func GetBooleanMapAttribute(terraformAttribute *string) *map[string]*bool
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-cloudflare.worker.WorkerPreviewsBaseConfigObservabilityIssuesOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetListAttribute` <a name="GetListAttribute" id="@cdktn/provider-cloudflare.worker.WorkerPreviewsBaseConfigObservabilityIssuesOutputReference.getListAttribute"></a>

```go
func GetListAttribute(terraformAttribute *string) *[]*string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-cloudflare.worker.WorkerPreviewsBaseConfigObservabilityIssuesOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberAttribute` <a name="GetNumberAttribute" id="@cdktn/provider-cloudflare.worker.WorkerPreviewsBaseConfigObservabilityIssuesOutputReference.getNumberAttribute"></a>

```go
func GetNumberAttribute(terraformAttribute *string) *f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-cloudflare.worker.WorkerPreviewsBaseConfigObservabilityIssuesOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberListAttribute` <a name="GetNumberListAttribute" id="@cdktn/provider-cloudflare.worker.WorkerPreviewsBaseConfigObservabilityIssuesOutputReference.getNumberListAttribute"></a>

```go
func GetNumberListAttribute(terraformAttribute *string) *[]*f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-cloudflare.worker.WorkerPreviewsBaseConfigObservabilityIssuesOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberMapAttribute` <a name="GetNumberMapAttribute" id="@cdktn/provider-cloudflare.worker.WorkerPreviewsBaseConfigObservabilityIssuesOutputReference.getNumberMapAttribute"></a>

```go
func GetNumberMapAttribute(terraformAttribute *string) *map[string]*f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-cloudflare.worker.WorkerPreviewsBaseConfigObservabilityIssuesOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetStringAttribute` <a name="GetStringAttribute" id="@cdktn/provider-cloudflare.worker.WorkerPreviewsBaseConfigObservabilityIssuesOutputReference.getStringAttribute"></a>

```go
func GetStringAttribute(terraformAttribute *string) *string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-cloudflare.worker.WorkerPreviewsBaseConfigObservabilityIssuesOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetStringMapAttribute` <a name="GetStringMapAttribute" id="@cdktn/provider-cloudflare.worker.WorkerPreviewsBaseConfigObservabilityIssuesOutputReference.getStringMapAttribute"></a>

```go
func GetStringMapAttribute(terraformAttribute *string) *map[string]*string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-cloudflare.worker.WorkerPreviewsBaseConfigObservabilityIssuesOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `InterpolationForAttribute` <a name="InterpolationForAttribute" id="@cdktn/provider-cloudflare.worker.WorkerPreviewsBaseConfigObservabilityIssuesOutputReference.interpolationForAttribute"></a>

```go
func InterpolationForAttribute(property *string) IResolvable
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktn/provider-cloudflare.worker.WorkerPreviewsBaseConfigObservabilityIssuesOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* *string

---

##### `Resolve` <a name="Resolve" id="@cdktn/provider-cloudflare.worker.WorkerPreviewsBaseConfigObservabilityIssuesOutputReference.resolve"></a>

```go
func Resolve(_context IResolveContext) interface{}
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktn/provider-cloudflare.worker.WorkerPreviewsBaseConfigObservabilityIssuesOutputReference.resolve.parameter._context"></a>

- *Type:* github.com/open-constructs/cdk-terrain-go/cdktn.IResolveContext

---

##### `ToString` <a name="ToString" id="@cdktn/provider-cloudflare.worker.WorkerPreviewsBaseConfigObservabilityIssuesOutputReference.toString"></a>

```go
func ToString() *string
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `ResetEnabled` <a name="ResetEnabled" id="@cdktn/provider-cloudflare.worker.WorkerPreviewsBaseConfigObservabilityIssuesOutputReference.resetEnabled"></a>

```go
func ResetEnabled()
```


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-cloudflare.worker.WorkerPreviewsBaseConfigObservabilityIssuesOutputReference.property.creationStack">CreationStack</a></code> | <code>*[]*string</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktn/provider-cloudflare.worker.WorkerPreviewsBaseConfigObservabilityIssuesOutputReference.property.fqn">Fqn</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktn/provider-cloudflare.worker.WorkerPreviewsBaseConfigObservabilityIssuesOutputReference.property.enabledInput">EnabledInput</a></code> | <code>interface{}</code> | *No description.* |
| <code><a href="#@cdktn/provider-cloudflare.worker.WorkerPreviewsBaseConfigObservabilityIssuesOutputReference.property.enabled">Enabled</a></code> | <code>interface{}</code> | *No description.* |
| <code><a href="#@cdktn/provider-cloudflare.worker.WorkerPreviewsBaseConfigObservabilityIssuesOutputReference.property.internalValue">InternalValue</a></code> | <code>interface{}</code> | *No description.* |

---

##### `CreationStack`<sup>Required</sup> <a name="CreationStack" id="@cdktn/provider-cloudflare.worker.WorkerPreviewsBaseConfigObservabilityIssuesOutputReference.property.creationStack"></a>

```go
func CreationStack() *[]*string
```

- *Type:* *[]*string

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `Fqn`<sup>Required</sup> <a name="Fqn" id="@cdktn/provider-cloudflare.worker.WorkerPreviewsBaseConfigObservabilityIssuesOutputReference.property.fqn"></a>

```go
func Fqn() *string
```

- *Type:* *string

---

##### `EnabledInput`<sup>Optional</sup> <a name="EnabledInput" id="@cdktn/provider-cloudflare.worker.WorkerPreviewsBaseConfigObservabilityIssuesOutputReference.property.enabledInput"></a>

```go
func EnabledInput() interface{}
```

- *Type:* interface{}

---

##### `Enabled`<sup>Required</sup> <a name="Enabled" id="@cdktn/provider-cloudflare.worker.WorkerPreviewsBaseConfigObservabilityIssuesOutputReference.property.enabled"></a>

```go
func Enabled() interface{}
```

- *Type:* interface{}

---

##### `InternalValue`<sup>Optional</sup> <a name="InternalValue" id="@cdktn/provider-cloudflare.worker.WorkerPreviewsBaseConfigObservabilityIssuesOutputReference.property.internalValue"></a>

```go
func InternalValue() interface{}
```

- *Type:* interface{}

---


### WorkerPreviewsBaseConfigObservabilityLogsOutputReference <a name="WorkerPreviewsBaseConfigObservabilityLogsOutputReference" id="@cdktn/provider-cloudflare.worker.WorkerPreviewsBaseConfigObservabilityLogsOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktn/provider-cloudflare.worker.WorkerPreviewsBaseConfigObservabilityLogsOutputReference.Initializer"></a>

```go
import "github.com/cdktn-io/cdktn-provider-cloudflare-go/cloudflare/v16/worker"

worker.NewWorkerPreviewsBaseConfigObservabilityLogsOutputReference(terraformResource IInterpolatingParent, terraformAttribute *string) WorkerPreviewsBaseConfigObservabilityLogsOutputReference
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-cloudflare.worker.WorkerPreviewsBaseConfigObservabilityLogsOutputReference.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>github.com/open-constructs/cdk-terrain-go/cdktn.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktn/provider-cloudflare.worker.WorkerPreviewsBaseConfigObservabilityLogsOutputReference.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>*string</code> | The attribute on the parent resource this class is referencing. |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktn/provider-cloudflare.worker.WorkerPreviewsBaseConfigObservabilityLogsOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* github.com/open-constructs/cdk-terrain-go/cdktn.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-cloudflare.worker.WorkerPreviewsBaseConfigObservabilityLogsOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* *string

The attribute on the parent resource this class is referencing.

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-cloudflare.worker.WorkerPreviewsBaseConfigObservabilityLogsOutputReference.computeFqn">ComputeFqn</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-cloudflare.worker.WorkerPreviewsBaseConfigObservabilityLogsOutputReference.getAnyMapAttribute">GetAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-cloudflare.worker.WorkerPreviewsBaseConfigObservabilityLogsOutputReference.getBooleanAttribute">GetBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-cloudflare.worker.WorkerPreviewsBaseConfigObservabilityLogsOutputReference.getBooleanMapAttribute">GetBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-cloudflare.worker.WorkerPreviewsBaseConfigObservabilityLogsOutputReference.getListAttribute">GetListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-cloudflare.worker.WorkerPreviewsBaseConfigObservabilityLogsOutputReference.getNumberAttribute">GetNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-cloudflare.worker.WorkerPreviewsBaseConfigObservabilityLogsOutputReference.getNumberListAttribute">GetNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-cloudflare.worker.WorkerPreviewsBaseConfigObservabilityLogsOutputReference.getNumberMapAttribute">GetNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-cloudflare.worker.WorkerPreviewsBaseConfigObservabilityLogsOutputReference.getStringAttribute">GetStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-cloudflare.worker.WorkerPreviewsBaseConfigObservabilityLogsOutputReference.getStringMapAttribute">GetStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-cloudflare.worker.WorkerPreviewsBaseConfigObservabilityLogsOutputReference.interpolationForAttribute">InterpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-cloudflare.worker.WorkerPreviewsBaseConfigObservabilityLogsOutputReference.resolve">Resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktn/provider-cloudflare.worker.WorkerPreviewsBaseConfigObservabilityLogsOutputReference.toString">ToString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktn/provider-cloudflare.worker.WorkerPreviewsBaseConfigObservabilityLogsOutputReference.resetDestinations">ResetDestinations</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-cloudflare.worker.WorkerPreviewsBaseConfigObservabilityLogsOutputReference.resetEnabled">ResetEnabled</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-cloudflare.worker.WorkerPreviewsBaseConfigObservabilityLogsOutputReference.resetHeadSamplingRate">ResetHeadSamplingRate</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-cloudflare.worker.WorkerPreviewsBaseConfigObservabilityLogsOutputReference.resetInvocationLogs">ResetInvocationLogs</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-cloudflare.worker.WorkerPreviewsBaseConfigObservabilityLogsOutputReference.resetPersist">ResetPersist</a></code> | *No description.* |

---

##### `ComputeFqn` <a name="ComputeFqn" id="@cdktn/provider-cloudflare.worker.WorkerPreviewsBaseConfigObservabilityLogsOutputReference.computeFqn"></a>

```go
func ComputeFqn() *string
```

##### `GetAnyMapAttribute` <a name="GetAnyMapAttribute" id="@cdktn/provider-cloudflare.worker.WorkerPreviewsBaseConfigObservabilityLogsOutputReference.getAnyMapAttribute"></a>

```go
func GetAnyMapAttribute(terraformAttribute *string) *map[string]interface{}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-cloudflare.worker.WorkerPreviewsBaseConfigObservabilityLogsOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetBooleanAttribute` <a name="GetBooleanAttribute" id="@cdktn/provider-cloudflare.worker.WorkerPreviewsBaseConfigObservabilityLogsOutputReference.getBooleanAttribute"></a>

```go
func GetBooleanAttribute(terraformAttribute *string) IResolvable
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-cloudflare.worker.WorkerPreviewsBaseConfigObservabilityLogsOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetBooleanMapAttribute` <a name="GetBooleanMapAttribute" id="@cdktn/provider-cloudflare.worker.WorkerPreviewsBaseConfigObservabilityLogsOutputReference.getBooleanMapAttribute"></a>

```go
func GetBooleanMapAttribute(terraformAttribute *string) *map[string]*bool
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-cloudflare.worker.WorkerPreviewsBaseConfigObservabilityLogsOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetListAttribute` <a name="GetListAttribute" id="@cdktn/provider-cloudflare.worker.WorkerPreviewsBaseConfigObservabilityLogsOutputReference.getListAttribute"></a>

```go
func GetListAttribute(terraformAttribute *string) *[]*string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-cloudflare.worker.WorkerPreviewsBaseConfigObservabilityLogsOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberAttribute` <a name="GetNumberAttribute" id="@cdktn/provider-cloudflare.worker.WorkerPreviewsBaseConfigObservabilityLogsOutputReference.getNumberAttribute"></a>

```go
func GetNumberAttribute(terraformAttribute *string) *f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-cloudflare.worker.WorkerPreviewsBaseConfigObservabilityLogsOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberListAttribute` <a name="GetNumberListAttribute" id="@cdktn/provider-cloudflare.worker.WorkerPreviewsBaseConfigObservabilityLogsOutputReference.getNumberListAttribute"></a>

```go
func GetNumberListAttribute(terraformAttribute *string) *[]*f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-cloudflare.worker.WorkerPreviewsBaseConfigObservabilityLogsOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberMapAttribute` <a name="GetNumberMapAttribute" id="@cdktn/provider-cloudflare.worker.WorkerPreviewsBaseConfigObservabilityLogsOutputReference.getNumberMapAttribute"></a>

```go
func GetNumberMapAttribute(terraformAttribute *string) *map[string]*f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-cloudflare.worker.WorkerPreviewsBaseConfigObservabilityLogsOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetStringAttribute` <a name="GetStringAttribute" id="@cdktn/provider-cloudflare.worker.WorkerPreviewsBaseConfigObservabilityLogsOutputReference.getStringAttribute"></a>

```go
func GetStringAttribute(terraformAttribute *string) *string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-cloudflare.worker.WorkerPreviewsBaseConfigObservabilityLogsOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetStringMapAttribute` <a name="GetStringMapAttribute" id="@cdktn/provider-cloudflare.worker.WorkerPreviewsBaseConfigObservabilityLogsOutputReference.getStringMapAttribute"></a>

```go
func GetStringMapAttribute(terraformAttribute *string) *map[string]*string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-cloudflare.worker.WorkerPreviewsBaseConfigObservabilityLogsOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `InterpolationForAttribute` <a name="InterpolationForAttribute" id="@cdktn/provider-cloudflare.worker.WorkerPreviewsBaseConfigObservabilityLogsOutputReference.interpolationForAttribute"></a>

```go
func InterpolationForAttribute(property *string) IResolvable
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktn/provider-cloudflare.worker.WorkerPreviewsBaseConfigObservabilityLogsOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* *string

---

##### `Resolve` <a name="Resolve" id="@cdktn/provider-cloudflare.worker.WorkerPreviewsBaseConfigObservabilityLogsOutputReference.resolve"></a>

```go
func Resolve(_context IResolveContext) interface{}
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktn/provider-cloudflare.worker.WorkerPreviewsBaseConfigObservabilityLogsOutputReference.resolve.parameter._context"></a>

- *Type:* github.com/open-constructs/cdk-terrain-go/cdktn.IResolveContext

---

##### `ToString` <a name="ToString" id="@cdktn/provider-cloudflare.worker.WorkerPreviewsBaseConfigObservabilityLogsOutputReference.toString"></a>

```go
func ToString() *string
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `ResetDestinations` <a name="ResetDestinations" id="@cdktn/provider-cloudflare.worker.WorkerPreviewsBaseConfigObservabilityLogsOutputReference.resetDestinations"></a>

```go
func ResetDestinations()
```

##### `ResetEnabled` <a name="ResetEnabled" id="@cdktn/provider-cloudflare.worker.WorkerPreviewsBaseConfigObservabilityLogsOutputReference.resetEnabled"></a>

```go
func ResetEnabled()
```

##### `ResetHeadSamplingRate` <a name="ResetHeadSamplingRate" id="@cdktn/provider-cloudflare.worker.WorkerPreviewsBaseConfigObservabilityLogsOutputReference.resetHeadSamplingRate"></a>

```go
func ResetHeadSamplingRate()
```

##### `ResetInvocationLogs` <a name="ResetInvocationLogs" id="@cdktn/provider-cloudflare.worker.WorkerPreviewsBaseConfigObservabilityLogsOutputReference.resetInvocationLogs"></a>

```go
func ResetInvocationLogs()
```

##### `ResetPersist` <a name="ResetPersist" id="@cdktn/provider-cloudflare.worker.WorkerPreviewsBaseConfigObservabilityLogsOutputReference.resetPersist"></a>

```go
func ResetPersist()
```


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-cloudflare.worker.WorkerPreviewsBaseConfigObservabilityLogsOutputReference.property.creationStack">CreationStack</a></code> | <code>*[]*string</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktn/provider-cloudflare.worker.WorkerPreviewsBaseConfigObservabilityLogsOutputReference.property.fqn">Fqn</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktn/provider-cloudflare.worker.WorkerPreviewsBaseConfigObservabilityLogsOutputReference.property.destinationsInput">DestinationsInput</a></code> | <code>*[]*string</code> | *No description.* |
| <code><a href="#@cdktn/provider-cloudflare.worker.WorkerPreviewsBaseConfigObservabilityLogsOutputReference.property.enabledInput">EnabledInput</a></code> | <code>interface{}</code> | *No description.* |
| <code><a href="#@cdktn/provider-cloudflare.worker.WorkerPreviewsBaseConfigObservabilityLogsOutputReference.property.headSamplingRateInput">HeadSamplingRateInput</a></code> | <code>*f64</code> | *No description.* |
| <code><a href="#@cdktn/provider-cloudflare.worker.WorkerPreviewsBaseConfigObservabilityLogsOutputReference.property.invocationLogsInput">InvocationLogsInput</a></code> | <code>interface{}</code> | *No description.* |
| <code><a href="#@cdktn/provider-cloudflare.worker.WorkerPreviewsBaseConfigObservabilityLogsOutputReference.property.persistInput">PersistInput</a></code> | <code>interface{}</code> | *No description.* |
| <code><a href="#@cdktn/provider-cloudflare.worker.WorkerPreviewsBaseConfigObservabilityLogsOutputReference.property.destinations">Destinations</a></code> | <code>*[]*string</code> | *No description.* |
| <code><a href="#@cdktn/provider-cloudflare.worker.WorkerPreviewsBaseConfigObservabilityLogsOutputReference.property.enabled">Enabled</a></code> | <code>interface{}</code> | *No description.* |
| <code><a href="#@cdktn/provider-cloudflare.worker.WorkerPreviewsBaseConfigObservabilityLogsOutputReference.property.headSamplingRate">HeadSamplingRate</a></code> | <code>*f64</code> | *No description.* |
| <code><a href="#@cdktn/provider-cloudflare.worker.WorkerPreviewsBaseConfigObservabilityLogsOutputReference.property.invocationLogs">InvocationLogs</a></code> | <code>interface{}</code> | *No description.* |
| <code><a href="#@cdktn/provider-cloudflare.worker.WorkerPreviewsBaseConfigObservabilityLogsOutputReference.property.persist">Persist</a></code> | <code>interface{}</code> | *No description.* |
| <code><a href="#@cdktn/provider-cloudflare.worker.WorkerPreviewsBaseConfigObservabilityLogsOutputReference.property.internalValue">InternalValue</a></code> | <code>interface{}</code> | *No description.* |

---

##### `CreationStack`<sup>Required</sup> <a name="CreationStack" id="@cdktn/provider-cloudflare.worker.WorkerPreviewsBaseConfigObservabilityLogsOutputReference.property.creationStack"></a>

```go
func CreationStack() *[]*string
```

- *Type:* *[]*string

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `Fqn`<sup>Required</sup> <a name="Fqn" id="@cdktn/provider-cloudflare.worker.WorkerPreviewsBaseConfigObservabilityLogsOutputReference.property.fqn"></a>

```go
func Fqn() *string
```

- *Type:* *string

---

##### `DestinationsInput`<sup>Optional</sup> <a name="DestinationsInput" id="@cdktn/provider-cloudflare.worker.WorkerPreviewsBaseConfigObservabilityLogsOutputReference.property.destinationsInput"></a>

```go
func DestinationsInput() *[]*string
```

- *Type:* *[]*string

---

##### `EnabledInput`<sup>Optional</sup> <a name="EnabledInput" id="@cdktn/provider-cloudflare.worker.WorkerPreviewsBaseConfigObservabilityLogsOutputReference.property.enabledInput"></a>

```go
func EnabledInput() interface{}
```

- *Type:* interface{}

---

##### `HeadSamplingRateInput`<sup>Optional</sup> <a name="HeadSamplingRateInput" id="@cdktn/provider-cloudflare.worker.WorkerPreviewsBaseConfigObservabilityLogsOutputReference.property.headSamplingRateInput"></a>

```go
func HeadSamplingRateInput() *f64
```

- *Type:* *f64

---

##### `InvocationLogsInput`<sup>Optional</sup> <a name="InvocationLogsInput" id="@cdktn/provider-cloudflare.worker.WorkerPreviewsBaseConfigObservabilityLogsOutputReference.property.invocationLogsInput"></a>

```go
func InvocationLogsInput() interface{}
```

- *Type:* interface{}

---

##### `PersistInput`<sup>Optional</sup> <a name="PersistInput" id="@cdktn/provider-cloudflare.worker.WorkerPreviewsBaseConfigObservabilityLogsOutputReference.property.persistInput"></a>

```go
func PersistInput() interface{}
```

- *Type:* interface{}

---

##### `Destinations`<sup>Required</sup> <a name="Destinations" id="@cdktn/provider-cloudflare.worker.WorkerPreviewsBaseConfigObservabilityLogsOutputReference.property.destinations"></a>

```go
func Destinations() *[]*string
```

- *Type:* *[]*string

---

##### `Enabled`<sup>Required</sup> <a name="Enabled" id="@cdktn/provider-cloudflare.worker.WorkerPreviewsBaseConfigObservabilityLogsOutputReference.property.enabled"></a>

```go
func Enabled() interface{}
```

- *Type:* interface{}

---

##### `HeadSamplingRate`<sup>Required</sup> <a name="HeadSamplingRate" id="@cdktn/provider-cloudflare.worker.WorkerPreviewsBaseConfigObservabilityLogsOutputReference.property.headSamplingRate"></a>

```go
func HeadSamplingRate() *f64
```

- *Type:* *f64

---

##### `InvocationLogs`<sup>Required</sup> <a name="InvocationLogs" id="@cdktn/provider-cloudflare.worker.WorkerPreviewsBaseConfigObservabilityLogsOutputReference.property.invocationLogs"></a>

```go
func InvocationLogs() interface{}
```

- *Type:* interface{}

---

##### `Persist`<sup>Required</sup> <a name="Persist" id="@cdktn/provider-cloudflare.worker.WorkerPreviewsBaseConfigObservabilityLogsOutputReference.property.persist"></a>

```go
func Persist() interface{}
```

- *Type:* interface{}

---

##### `InternalValue`<sup>Optional</sup> <a name="InternalValue" id="@cdktn/provider-cloudflare.worker.WorkerPreviewsBaseConfigObservabilityLogsOutputReference.property.internalValue"></a>

```go
func InternalValue() interface{}
```

- *Type:* interface{}

---


### WorkerPreviewsBaseConfigObservabilityOutputReference <a name="WorkerPreviewsBaseConfigObservabilityOutputReference" id="@cdktn/provider-cloudflare.worker.WorkerPreviewsBaseConfigObservabilityOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktn/provider-cloudflare.worker.WorkerPreviewsBaseConfigObservabilityOutputReference.Initializer"></a>

```go
import "github.com/cdktn-io/cdktn-provider-cloudflare-go/cloudflare/v16/worker"

worker.NewWorkerPreviewsBaseConfigObservabilityOutputReference(terraformResource IInterpolatingParent, terraformAttribute *string) WorkerPreviewsBaseConfigObservabilityOutputReference
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-cloudflare.worker.WorkerPreviewsBaseConfigObservabilityOutputReference.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>github.com/open-constructs/cdk-terrain-go/cdktn.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktn/provider-cloudflare.worker.WorkerPreviewsBaseConfigObservabilityOutputReference.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>*string</code> | The attribute on the parent resource this class is referencing. |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktn/provider-cloudflare.worker.WorkerPreviewsBaseConfigObservabilityOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* github.com/open-constructs/cdk-terrain-go/cdktn.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-cloudflare.worker.WorkerPreviewsBaseConfigObservabilityOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* *string

The attribute on the parent resource this class is referencing.

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-cloudflare.worker.WorkerPreviewsBaseConfigObservabilityOutputReference.computeFqn">ComputeFqn</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-cloudflare.worker.WorkerPreviewsBaseConfigObservabilityOutputReference.getAnyMapAttribute">GetAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-cloudflare.worker.WorkerPreviewsBaseConfigObservabilityOutputReference.getBooleanAttribute">GetBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-cloudflare.worker.WorkerPreviewsBaseConfigObservabilityOutputReference.getBooleanMapAttribute">GetBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-cloudflare.worker.WorkerPreviewsBaseConfigObservabilityOutputReference.getListAttribute">GetListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-cloudflare.worker.WorkerPreviewsBaseConfigObservabilityOutputReference.getNumberAttribute">GetNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-cloudflare.worker.WorkerPreviewsBaseConfigObservabilityOutputReference.getNumberListAttribute">GetNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-cloudflare.worker.WorkerPreviewsBaseConfigObservabilityOutputReference.getNumberMapAttribute">GetNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-cloudflare.worker.WorkerPreviewsBaseConfigObservabilityOutputReference.getStringAttribute">GetStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-cloudflare.worker.WorkerPreviewsBaseConfigObservabilityOutputReference.getStringMapAttribute">GetStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-cloudflare.worker.WorkerPreviewsBaseConfigObservabilityOutputReference.interpolationForAttribute">InterpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-cloudflare.worker.WorkerPreviewsBaseConfigObservabilityOutputReference.resolve">Resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktn/provider-cloudflare.worker.WorkerPreviewsBaseConfigObservabilityOutputReference.toString">ToString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktn/provider-cloudflare.worker.WorkerPreviewsBaseConfigObservabilityOutputReference.putIssues">PutIssues</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-cloudflare.worker.WorkerPreviewsBaseConfigObservabilityOutputReference.putLogs">PutLogs</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-cloudflare.worker.WorkerPreviewsBaseConfigObservabilityOutputReference.putTraces">PutTraces</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-cloudflare.worker.WorkerPreviewsBaseConfigObservabilityOutputReference.resetEnabled">ResetEnabled</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-cloudflare.worker.WorkerPreviewsBaseConfigObservabilityOutputReference.resetHeadSamplingRate">ResetHeadSamplingRate</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-cloudflare.worker.WorkerPreviewsBaseConfigObservabilityOutputReference.resetIssues">ResetIssues</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-cloudflare.worker.WorkerPreviewsBaseConfigObservabilityOutputReference.resetLogs">ResetLogs</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-cloudflare.worker.WorkerPreviewsBaseConfigObservabilityOutputReference.resetRedactQueryString">ResetRedactQueryString</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-cloudflare.worker.WorkerPreviewsBaseConfigObservabilityOutputReference.resetTraces">ResetTraces</a></code> | *No description.* |

---

##### `ComputeFqn` <a name="ComputeFqn" id="@cdktn/provider-cloudflare.worker.WorkerPreviewsBaseConfigObservabilityOutputReference.computeFqn"></a>

```go
func ComputeFqn() *string
```

##### `GetAnyMapAttribute` <a name="GetAnyMapAttribute" id="@cdktn/provider-cloudflare.worker.WorkerPreviewsBaseConfigObservabilityOutputReference.getAnyMapAttribute"></a>

```go
func GetAnyMapAttribute(terraformAttribute *string) *map[string]interface{}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-cloudflare.worker.WorkerPreviewsBaseConfigObservabilityOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetBooleanAttribute` <a name="GetBooleanAttribute" id="@cdktn/provider-cloudflare.worker.WorkerPreviewsBaseConfigObservabilityOutputReference.getBooleanAttribute"></a>

```go
func GetBooleanAttribute(terraformAttribute *string) IResolvable
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-cloudflare.worker.WorkerPreviewsBaseConfigObservabilityOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetBooleanMapAttribute` <a name="GetBooleanMapAttribute" id="@cdktn/provider-cloudflare.worker.WorkerPreviewsBaseConfigObservabilityOutputReference.getBooleanMapAttribute"></a>

```go
func GetBooleanMapAttribute(terraformAttribute *string) *map[string]*bool
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-cloudflare.worker.WorkerPreviewsBaseConfigObservabilityOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetListAttribute` <a name="GetListAttribute" id="@cdktn/provider-cloudflare.worker.WorkerPreviewsBaseConfigObservabilityOutputReference.getListAttribute"></a>

```go
func GetListAttribute(terraformAttribute *string) *[]*string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-cloudflare.worker.WorkerPreviewsBaseConfigObservabilityOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberAttribute` <a name="GetNumberAttribute" id="@cdktn/provider-cloudflare.worker.WorkerPreviewsBaseConfigObservabilityOutputReference.getNumberAttribute"></a>

```go
func GetNumberAttribute(terraformAttribute *string) *f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-cloudflare.worker.WorkerPreviewsBaseConfigObservabilityOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberListAttribute` <a name="GetNumberListAttribute" id="@cdktn/provider-cloudflare.worker.WorkerPreviewsBaseConfigObservabilityOutputReference.getNumberListAttribute"></a>

```go
func GetNumberListAttribute(terraformAttribute *string) *[]*f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-cloudflare.worker.WorkerPreviewsBaseConfigObservabilityOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberMapAttribute` <a name="GetNumberMapAttribute" id="@cdktn/provider-cloudflare.worker.WorkerPreviewsBaseConfigObservabilityOutputReference.getNumberMapAttribute"></a>

```go
func GetNumberMapAttribute(terraformAttribute *string) *map[string]*f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-cloudflare.worker.WorkerPreviewsBaseConfigObservabilityOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetStringAttribute` <a name="GetStringAttribute" id="@cdktn/provider-cloudflare.worker.WorkerPreviewsBaseConfigObservabilityOutputReference.getStringAttribute"></a>

```go
func GetStringAttribute(terraformAttribute *string) *string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-cloudflare.worker.WorkerPreviewsBaseConfigObservabilityOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetStringMapAttribute` <a name="GetStringMapAttribute" id="@cdktn/provider-cloudflare.worker.WorkerPreviewsBaseConfigObservabilityOutputReference.getStringMapAttribute"></a>

```go
func GetStringMapAttribute(terraformAttribute *string) *map[string]*string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-cloudflare.worker.WorkerPreviewsBaseConfigObservabilityOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `InterpolationForAttribute` <a name="InterpolationForAttribute" id="@cdktn/provider-cloudflare.worker.WorkerPreviewsBaseConfigObservabilityOutputReference.interpolationForAttribute"></a>

```go
func InterpolationForAttribute(property *string) IResolvable
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktn/provider-cloudflare.worker.WorkerPreviewsBaseConfigObservabilityOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* *string

---

##### `Resolve` <a name="Resolve" id="@cdktn/provider-cloudflare.worker.WorkerPreviewsBaseConfigObservabilityOutputReference.resolve"></a>

```go
func Resolve(_context IResolveContext) interface{}
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktn/provider-cloudflare.worker.WorkerPreviewsBaseConfigObservabilityOutputReference.resolve.parameter._context"></a>

- *Type:* github.com/open-constructs/cdk-terrain-go/cdktn.IResolveContext

---

##### `ToString` <a name="ToString" id="@cdktn/provider-cloudflare.worker.WorkerPreviewsBaseConfigObservabilityOutputReference.toString"></a>

```go
func ToString() *string
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `PutIssues` <a name="PutIssues" id="@cdktn/provider-cloudflare.worker.WorkerPreviewsBaseConfigObservabilityOutputReference.putIssues"></a>

```go
func PutIssues(value WorkerPreviewsBaseConfigObservabilityIssues)
```

###### `value`<sup>Required</sup> <a name="value" id="@cdktn/provider-cloudflare.worker.WorkerPreviewsBaseConfigObservabilityOutputReference.putIssues.parameter.value"></a>

- *Type:* <a href="#@cdktn/provider-cloudflare.worker.WorkerPreviewsBaseConfigObservabilityIssues">WorkerPreviewsBaseConfigObservabilityIssues</a>

---

##### `PutLogs` <a name="PutLogs" id="@cdktn/provider-cloudflare.worker.WorkerPreviewsBaseConfigObservabilityOutputReference.putLogs"></a>

```go
func PutLogs(value WorkerPreviewsBaseConfigObservabilityLogs)
```

###### `value`<sup>Required</sup> <a name="value" id="@cdktn/provider-cloudflare.worker.WorkerPreviewsBaseConfigObservabilityOutputReference.putLogs.parameter.value"></a>

- *Type:* <a href="#@cdktn/provider-cloudflare.worker.WorkerPreviewsBaseConfigObservabilityLogs">WorkerPreviewsBaseConfigObservabilityLogs</a>

---

##### `PutTraces` <a name="PutTraces" id="@cdktn/provider-cloudflare.worker.WorkerPreviewsBaseConfigObservabilityOutputReference.putTraces"></a>

```go
func PutTraces(value WorkerPreviewsBaseConfigObservabilityTraces)
```

###### `value`<sup>Required</sup> <a name="value" id="@cdktn/provider-cloudflare.worker.WorkerPreviewsBaseConfigObservabilityOutputReference.putTraces.parameter.value"></a>

- *Type:* <a href="#@cdktn/provider-cloudflare.worker.WorkerPreviewsBaseConfigObservabilityTraces">WorkerPreviewsBaseConfigObservabilityTraces</a>

---

##### `ResetEnabled` <a name="ResetEnabled" id="@cdktn/provider-cloudflare.worker.WorkerPreviewsBaseConfigObservabilityOutputReference.resetEnabled"></a>

```go
func ResetEnabled()
```

##### `ResetHeadSamplingRate` <a name="ResetHeadSamplingRate" id="@cdktn/provider-cloudflare.worker.WorkerPreviewsBaseConfigObservabilityOutputReference.resetHeadSamplingRate"></a>

```go
func ResetHeadSamplingRate()
```

##### `ResetIssues` <a name="ResetIssues" id="@cdktn/provider-cloudflare.worker.WorkerPreviewsBaseConfigObservabilityOutputReference.resetIssues"></a>

```go
func ResetIssues()
```

##### `ResetLogs` <a name="ResetLogs" id="@cdktn/provider-cloudflare.worker.WorkerPreviewsBaseConfigObservabilityOutputReference.resetLogs"></a>

```go
func ResetLogs()
```

##### `ResetRedactQueryString` <a name="ResetRedactQueryString" id="@cdktn/provider-cloudflare.worker.WorkerPreviewsBaseConfigObservabilityOutputReference.resetRedactQueryString"></a>

```go
func ResetRedactQueryString()
```

##### `ResetTraces` <a name="ResetTraces" id="@cdktn/provider-cloudflare.worker.WorkerPreviewsBaseConfigObservabilityOutputReference.resetTraces"></a>

```go
func ResetTraces()
```


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-cloudflare.worker.WorkerPreviewsBaseConfigObservabilityOutputReference.property.creationStack">CreationStack</a></code> | <code>*[]*string</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktn/provider-cloudflare.worker.WorkerPreviewsBaseConfigObservabilityOutputReference.property.fqn">Fqn</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktn/provider-cloudflare.worker.WorkerPreviewsBaseConfigObservabilityOutputReference.property.issues">Issues</a></code> | <code><a href="#@cdktn/provider-cloudflare.worker.WorkerPreviewsBaseConfigObservabilityIssuesOutputReference">WorkerPreviewsBaseConfigObservabilityIssuesOutputReference</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-cloudflare.worker.WorkerPreviewsBaseConfigObservabilityOutputReference.property.logs">Logs</a></code> | <code><a href="#@cdktn/provider-cloudflare.worker.WorkerPreviewsBaseConfigObservabilityLogsOutputReference">WorkerPreviewsBaseConfigObservabilityLogsOutputReference</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-cloudflare.worker.WorkerPreviewsBaseConfigObservabilityOutputReference.property.traces">Traces</a></code> | <code><a href="#@cdktn/provider-cloudflare.worker.WorkerPreviewsBaseConfigObservabilityTracesOutputReference">WorkerPreviewsBaseConfigObservabilityTracesOutputReference</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-cloudflare.worker.WorkerPreviewsBaseConfigObservabilityOutputReference.property.enabledInput">EnabledInput</a></code> | <code>interface{}</code> | *No description.* |
| <code><a href="#@cdktn/provider-cloudflare.worker.WorkerPreviewsBaseConfigObservabilityOutputReference.property.headSamplingRateInput">HeadSamplingRateInput</a></code> | <code>*f64</code> | *No description.* |
| <code><a href="#@cdktn/provider-cloudflare.worker.WorkerPreviewsBaseConfigObservabilityOutputReference.property.issuesInput">IssuesInput</a></code> | <code>interface{}</code> | *No description.* |
| <code><a href="#@cdktn/provider-cloudflare.worker.WorkerPreviewsBaseConfigObservabilityOutputReference.property.logsInput">LogsInput</a></code> | <code>interface{}</code> | *No description.* |
| <code><a href="#@cdktn/provider-cloudflare.worker.WorkerPreviewsBaseConfigObservabilityOutputReference.property.redactQueryStringInput">RedactQueryStringInput</a></code> | <code>interface{}</code> | *No description.* |
| <code><a href="#@cdktn/provider-cloudflare.worker.WorkerPreviewsBaseConfigObservabilityOutputReference.property.tracesInput">TracesInput</a></code> | <code>interface{}</code> | *No description.* |
| <code><a href="#@cdktn/provider-cloudflare.worker.WorkerPreviewsBaseConfigObservabilityOutputReference.property.enabled">Enabled</a></code> | <code>interface{}</code> | *No description.* |
| <code><a href="#@cdktn/provider-cloudflare.worker.WorkerPreviewsBaseConfigObservabilityOutputReference.property.headSamplingRate">HeadSamplingRate</a></code> | <code>*f64</code> | *No description.* |
| <code><a href="#@cdktn/provider-cloudflare.worker.WorkerPreviewsBaseConfigObservabilityOutputReference.property.redactQueryString">RedactQueryString</a></code> | <code>interface{}</code> | *No description.* |
| <code><a href="#@cdktn/provider-cloudflare.worker.WorkerPreviewsBaseConfigObservabilityOutputReference.property.internalValue">InternalValue</a></code> | <code>interface{}</code> | *No description.* |

---

##### `CreationStack`<sup>Required</sup> <a name="CreationStack" id="@cdktn/provider-cloudflare.worker.WorkerPreviewsBaseConfigObservabilityOutputReference.property.creationStack"></a>

```go
func CreationStack() *[]*string
```

- *Type:* *[]*string

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `Fqn`<sup>Required</sup> <a name="Fqn" id="@cdktn/provider-cloudflare.worker.WorkerPreviewsBaseConfigObservabilityOutputReference.property.fqn"></a>

```go
func Fqn() *string
```

- *Type:* *string

---

##### `Issues`<sup>Required</sup> <a name="Issues" id="@cdktn/provider-cloudflare.worker.WorkerPreviewsBaseConfigObservabilityOutputReference.property.issues"></a>

```go
func Issues() WorkerPreviewsBaseConfigObservabilityIssuesOutputReference
```

- *Type:* <a href="#@cdktn/provider-cloudflare.worker.WorkerPreviewsBaseConfigObservabilityIssuesOutputReference">WorkerPreviewsBaseConfigObservabilityIssuesOutputReference</a>

---

##### `Logs`<sup>Required</sup> <a name="Logs" id="@cdktn/provider-cloudflare.worker.WorkerPreviewsBaseConfigObservabilityOutputReference.property.logs"></a>

```go
func Logs() WorkerPreviewsBaseConfigObservabilityLogsOutputReference
```

- *Type:* <a href="#@cdktn/provider-cloudflare.worker.WorkerPreviewsBaseConfigObservabilityLogsOutputReference">WorkerPreviewsBaseConfigObservabilityLogsOutputReference</a>

---

##### `Traces`<sup>Required</sup> <a name="Traces" id="@cdktn/provider-cloudflare.worker.WorkerPreviewsBaseConfigObservabilityOutputReference.property.traces"></a>

```go
func Traces() WorkerPreviewsBaseConfigObservabilityTracesOutputReference
```

- *Type:* <a href="#@cdktn/provider-cloudflare.worker.WorkerPreviewsBaseConfigObservabilityTracesOutputReference">WorkerPreviewsBaseConfigObservabilityTracesOutputReference</a>

---

##### `EnabledInput`<sup>Optional</sup> <a name="EnabledInput" id="@cdktn/provider-cloudflare.worker.WorkerPreviewsBaseConfigObservabilityOutputReference.property.enabledInput"></a>

```go
func EnabledInput() interface{}
```

- *Type:* interface{}

---

##### `HeadSamplingRateInput`<sup>Optional</sup> <a name="HeadSamplingRateInput" id="@cdktn/provider-cloudflare.worker.WorkerPreviewsBaseConfigObservabilityOutputReference.property.headSamplingRateInput"></a>

```go
func HeadSamplingRateInput() *f64
```

- *Type:* *f64

---

##### `IssuesInput`<sup>Optional</sup> <a name="IssuesInput" id="@cdktn/provider-cloudflare.worker.WorkerPreviewsBaseConfigObservabilityOutputReference.property.issuesInput"></a>

```go
func IssuesInput() interface{}
```

- *Type:* interface{}

---

##### `LogsInput`<sup>Optional</sup> <a name="LogsInput" id="@cdktn/provider-cloudflare.worker.WorkerPreviewsBaseConfigObservabilityOutputReference.property.logsInput"></a>

```go
func LogsInput() interface{}
```

- *Type:* interface{}

---

##### `RedactQueryStringInput`<sup>Optional</sup> <a name="RedactQueryStringInput" id="@cdktn/provider-cloudflare.worker.WorkerPreviewsBaseConfigObservabilityOutputReference.property.redactQueryStringInput"></a>

```go
func RedactQueryStringInput() interface{}
```

- *Type:* interface{}

---

##### `TracesInput`<sup>Optional</sup> <a name="TracesInput" id="@cdktn/provider-cloudflare.worker.WorkerPreviewsBaseConfigObservabilityOutputReference.property.tracesInput"></a>

```go
func TracesInput() interface{}
```

- *Type:* interface{}

---

##### `Enabled`<sup>Required</sup> <a name="Enabled" id="@cdktn/provider-cloudflare.worker.WorkerPreviewsBaseConfigObservabilityOutputReference.property.enabled"></a>

```go
func Enabled() interface{}
```

- *Type:* interface{}

---

##### `HeadSamplingRate`<sup>Required</sup> <a name="HeadSamplingRate" id="@cdktn/provider-cloudflare.worker.WorkerPreviewsBaseConfigObservabilityOutputReference.property.headSamplingRate"></a>

```go
func HeadSamplingRate() *f64
```

- *Type:* *f64

---

##### `RedactQueryString`<sup>Required</sup> <a name="RedactQueryString" id="@cdktn/provider-cloudflare.worker.WorkerPreviewsBaseConfigObservabilityOutputReference.property.redactQueryString"></a>

```go
func RedactQueryString() interface{}
```

- *Type:* interface{}

---

##### `InternalValue`<sup>Optional</sup> <a name="InternalValue" id="@cdktn/provider-cloudflare.worker.WorkerPreviewsBaseConfigObservabilityOutputReference.property.internalValue"></a>

```go
func InternalValue() interface{}
```

- *Type:* interface{}

---


### WorkerPreviewsBaseConfigObservabilityTracesOutputReference <a name="WorkerPreviewsBaseConfigObservabilityTracesOutputReference" id="@cdktn/provider-cloudflare.worker.WorkerPreviewsBaseConfigObservabilityTracesOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktn/provider-cloudflare.worker.WorkerPreviewsBaseConfigObservabilityTracesOutputReference.Initializer"></a>

```go
import "github.com/cdktn-io/cdktn-provider-cloudflare-go/cloudflare/v16/worker"

worker.NewWorkerPreviewsBaseConfigObservabilityTracesOutputReference(terraformResource IInterpolatingParent, terraformAttribute *string) WorkerPreviewsBaseConfigObservabilityTracesOutputReference
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-cloudflare.worker.WorkerPreviewsBaseConfigObservabilityTracesOutputReference.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>github.com/open-constructs/cdk-terrain-go/cdktn.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktn/provider-cloudflare.worker.WorkerPreviewsBaseConfigObservabilityTracesOutputReference.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>*string</code> | The attribute on the parent resource this class is referencing. |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktn/provider-cloudflare.worker.WorkerPreviewsBaseConfigObservabilityTracesOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* github.com/open-constructs/cdk-terrain-go/cdktn.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-cloudflare.worker.WorkerPreviewsBaseConfigObservabilityTracesOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* *string

The attribute on the parent resource this class is referencing.

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-cloudflare.worker.WorkerPreviewsBaseConfigObservabilityTracesOutputReference.computeFqn">ComputeFqn</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-cloudflare.worker.WorkerPreviewsBaseConfigObservabilityTracesOutputReference.getAnyMapAttribute">GetAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-cloudflare.worker.WorkerPreviewsBaseConfigObservabilityTracesOutputReference.getBooleanAttribute">GetBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-cloudflare.worker.WorkerPreviewsBaseConfigObservabilityTracesOutputReference.getBooleanMapAttribute">GetBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-cloudflare.worker.WorkerPreviewsBaseConfigObservabilityTracesOutputReference.getListAttribute">GetListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-cloudflare.worker.WorkerPreviewsBaseConfigObservabilityTracesOutputReference.getNumberAttribute">GetNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-cloudflare.worker.WorkerPreviewsBaseConfigObservabilityTracesOutputReference.getNumberListAttribute">GetNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-cloudflare.worker.WorkerPreviewsBaseConfigObservabilityTracesOutputReference.getNumberMapAttribute">GetNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-cloudflare.worker.WorkerPreviewsBaseConfigObservabilityTracesOutputReference.getStringAttribute">GetStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-cloudflare.worker.WorkerPreviewsBaseConfigObservabilityTracesOutputReference.getStringMapAttribute">GetStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-cloudflare.worker.WorkerPreviewsBaseConfigObservabilityTracesOutputReference.interpolationForAttribute">InterpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-cloudflare.worker.WorkerPreviewsBaseConfigObservabilityTracesOutputReference.resolve">Resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktn/provider-cloudflare.worker.WorkerPreviewsBaseConfigObservabilityTracesOutputReference.toString">ToString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktn/provider-cloudflare.worker.WorkerPreviewsBaseConfigObservabilityTracesOutputReference.resetDestinations">ResetDestinations</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-cloudflare.worker.WorkerPreviewsBaseConfigObservabilityTracesOutputReference.resetEnabled">ResetEnabled</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-cloudflare.worker.WorkerPreviewsBaseConfigObservabilityTracesOutputReference.resetHeadSamplingRate">ResetHeadSamplingRate</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-cloudflare.worker.WorkerPreviewsBaseConfigObservabilityTracesOutputReference.resetPersist">ResetPersist</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-cloudflare.worker.WorkerPreviewsBaseConfigObservabilityTracesOutputReference.resetPropagationPolicy">ResetPropagationPolicy</a></code> | *No description.* |

---

##### `ComputeFqn` <a name="ComputeFqn" id="@cdktn/provider-cloudflare.worker.WorkerPreviewsBaseConfigObservabilityTracesOutputReference.computeFqn"></a>

```go
func ComputeFqn() *string
```

##### `GetAnyMapAttribute` <a name="GetAnyMapAttribute" id="@cdktn/provider-cloudflare.worker.WorkerPreviewsBaseConfigObservabilityTracesOutputReference.getAnyMapAttribute"></a>

```go
func GetAnyMapAttribute(terraformAttribute *string) *map[string]interface{}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-cloudflare.worker.WorkerPreviewsBaseConfigObservabilityTracesOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetBooleanAttribute` <a name="GetBooleanAttribute" id="@cdktn/provider-cloudflare.worker.WorkerPreviewsBaseConfigObservabilityTracesOutputReference.getBooleanAttribute"></a>

```go
func GetBooleanAttribute(terraformAttribute *string) IResolvable
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-cloudflare.worker.WorkerPreviewsBaseConfigObservabilityTracesOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetBooleanMapAttribute` <a name="GetBooleanMapAttribute" id="@cdktn/provider-cloudflare.worker.WorkerPreviewsBaseConfigObservabilityTracesOutputReference.getBooleanMapAttribute"></a>

```go
func GetBooleanMapAttribute(terraformAttribute *string) *map[string]*bool
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-cloudflare.worker.WorkerPreviewsBaseConfigObservabilityTracesOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetListAttribute` <a name="GetListAttribute" id="@cdktn/provider-cloudflare.worker.WorkerPreviewsBaseConfigObservabilityTracesOutputReference.getListAttribute"></a>

```go
func GetListAttribute(terraformAttribute *string) *[]*string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-cloudflare.worker.WorkerPreviewsBaseConfigObservabilityTracesOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberAttribute` <a name="GetNumberAttribute" id="@cdktn/provider-cloudflare.worker.WorkerPreviewsBaseConfigObservabilityTracesOutputReference.getNumberAttribute"></a>

```go
func GetNumberAttribute(terraformAttribute *string) *f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-cloudflare.worker.WorkerPreviewsBaseConfigObservabilityTracesOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberListAttribute` <a name="GetNumberListAttribute" id="@cdktn/provider-cloudflare.worker.WorkerPreviewsBaseConfigObservabilityTracesOutputReference.getNumberListAttribute"></a>

```go
func GetNumberListAttribute(terraformAttribute *string) *[]*f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-cloudflare.worker.WorkerPreviewsBaseConfigObservabilityTracesOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberMapAttribute` <a name="GetNumberMapAttribute" id="@cdktn/provider-cloudflare.worker.WorkerPreviewsBaseConfigObservabilityTracesOutputReference.getNumberMapAttribute"></a>

```go
func GetNumberMapAttribute(terraformAttribute *string) *map[string]*f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-cloudflare.worker.WorkerPreviewsBaseConfigObservabilityTracesOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetStringAttribute` <a name="GetStringAttribute" id="@cdktn/provider-cloudflare.worker.WorkerPreviewsBaseConfigObservabilityTracesOutputReference.getStringAttribute"></a>

```go
func GetStringAttribute(terraformAttribute *string) *string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-cloudflare.worker.WorkerPreviewsBaseConfigObservabilityTracesOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetStringMapAttribute` <a name="GetStringMapAttribute" id="@cdktn/provider-cloudflare.worker.WorkerPreviewsBaseConfigObservabilityTracesOutputReference.getStringMapAttribute"></a>

```go
func GetStringMapAttribute(terraformAttribute *string) *map[string]*string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-cloudflare.worker.WorkerPreviewsBaseConfigObservabilityTracesOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `InterpolationForAttribute` <a name="InterpolationForAttribute" id="@cdktn/provider-cloudflare.worker.WorkerPreviewsBaseConfigObservabilityTracesOutputReference.interpolationForAttribute"></a>

```go
func InterpolationForAttribute(property *string) IResolvable
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktn/provider-cloudflare.worker.WorkerPreviewsBaseConfigObservabilityTracesOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* *string

---

##### `Resolve` <a name="Resolve" id="@cdktn/provider-cloudflare.worker.WorkerPreviewsBaseConfigObservabilityTracesOutputReference.resolve"></a>

```go
func Resolve(_context IResolveContext) interface{}
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktn/provider-cloudflare.worker.WorkerPreviewsBaseConfigObservabilityTracesOutputReference.resolve.parameter._context"></a>

- *Type:* github.com/open-constructs/cdk-terrain-go/cdktn.IResolveContext

---

##### `ToString` <a name="ToString" id="@cdktn/provider-cloudflare.worker.WorkerPreviewsBaseConfigObservabilityTracesOutputReference.toString"></a>

```go
func ToString() *string
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `ResetDestinations` <a name="ResetDestinations" id="@cdktn/provider-cloudflare.worker.WorkerPreviewsBaseConfigObservabilityTracesOutputReference.resetDestinations"></a>

```go
func ResetDestinations()
```

##### `ResetEnabled` <a name="ResetEnabled" id="@cdktn/provider-cloudflare.worker.WorkerPreviewsBaseConfigObservabilityTracesOutputReference.resetEnabled"></a>

```go
func ResetEnabled()
```

##### `ResetHeadSamplingRate` <a name="ResetHeadSamplingRate" id="@cdktn/provider-cloudflare.worker.WorkerPreviewsBaseConfigObservabilityTracesOutputReference.resetHeadSamplingRate"></a>

```go
func ResetHeadSamplingRate()
```

##### `ResetPersist` <a name="ResetPersist" id="@cdktn/provider-cloudflare.worker.WorkerPreviewsBaseConfigObservabilityTracesOutputReference.resetPersist"></a>

```go
func ResetPersist()
```

##### `ResetPropagationPolicy` <a name="ResetPropagationPolicy" id="@cdktn/provider-cloudflare.worker.WorkerPreviewsBaseConfigObservabilityTracesOutputReference.resetPropagationPolicy"></a>

```go
func ResetPropagationPolicy()
```


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-cloudflare.worker.WorkerPreviewsBaseConfigObservabilityTracesOutputReference.property.creationStack">CreationStack</a></code> | <code>*[]*string</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktn/provider-cloudflare.worker.WorkerPreviewsBaseConfigObservabilityTracesOutputReference.property.fqn">Fqn</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktn/provider-cloudflare.worker.WorkerPreviewsBaseConfigObservabilityTracesOutputReference.property.destinationsInput">DestinationsInput</a></code> | <code>*[]*string</code> | *No description.* |
| <code><a href="#@cdktn/provider-cloudflare.worker.WorkerPreviewsBaseConfigObservabilityTracesOutputReference.property.enabledInput">EnabledInput</a></code> | <code>interface{}</code> | *No description.* |
| <code><a href="#@cdktn/provider-cloudflare.worker.WorkerPreviewsBaseConfigObservabilityTracesOutputReference.property.headSamplingRateInput">HeadSamplingRateInput</a></code> | <code>*f64</code> | *No description.* |
| <code><a href="#@cdktn/provider-cloudflare.worker.WorkerPreviewsBaseConfigObservabilityTracesOutputReference.property.persistInput">PersistInput</a></code> | <code>interface{}</code> | *No description.* |
| <code><a href="#@cdktn/provider-cloudflare.worker.WorkerPreviewsBaseConfigObservabilityTracesOutputReference.property.propagationPolicyInput">PropagationPolicyInput</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktn/provider-cloudflare.worker.WorkerPreviewsBaseConfigObservabilityTracesOutputReference.property.destinations">Destinations</a></code> | <code>*[]*string</code> | *No description.* |
| <code><a href="#@cdktn/provider-cloudflare.worker.WorkerPreviewsBaseConfigObservabilityTracesOutputReference.property.enabled">Enabled</a></code> | <code>interface{}</code> | *No description.* |
| <code><a href="#@cdktn/provider-cloudflare.worker.WorkerPreviewsBaseConfigObservabilityTracesOutputReference.property.headSamplingRate">HeadSamplingRate</a></code> | <code>*f64</code> | *No description.* |
| <code><a href="#@cdktn/provider-cloudflare.worker.WorkerPreviewsBaseConfigObservabilityTracesOutputReference.property.persist">Persist</a></code> | <code>interface{}</code> | *No description.* |
| <code><a href="#@cdktn/provider-cloudflare.worker.WorkerPreviewsBaseConfigObservabilityTracesOutputReference.property.propagationPolicy">PropagationPolicy</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktn/provider-cloudflare.worker.WorkerPreviewsBaseConfigObservabilityTracesOutputReference.property.internalValue">InternalValue</a></code> | <code>interface{}</code> | *No description.* |

---

##### `CreationStack`<sup>Required</sup> <a name="CreationStack" id="@cdktn/provider-cloudflare.worker.WorkerPreviewsBaseConfigObservabilityTracesOutputReference.property.creationStack"></a>

```go
func CreationStack() *[]*string
```

- *Type:* *[]*string

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `Fqn`<sup>Required</sup> <a name="Fqn" id="@cdktn/provider-cloudflare.worker.WorkerPreviewsBaseConfigObservabilityTracesOutputReference.property.fqn"></a>

```go
func Fqn() *string
```

- *Type:* *string

---

##### `DestinationsInput`<sup>Optional</sup> <a name="DestinationsInput" id="@cdktn/provider-cloudflare.worker.WorkerPreviewsBaseConfigObservabilityTracesOutputReference.property.destinationsInput"></a>

```go
func DestinationsInput() *[]*string
```

- *Type:* *[]*string

---

##### `EnabledInput`<sup>Optional</sup> <a name="EnabledInput" id="@cdktn/provider-cloudflare.worker.WorkerPreviewsBaseConfigObservabilityTracesOutputReference.property.enabledInput"></a>

```go
func EnabledInput() interface{}
```

- *Type:* interface{}

---

##### `HeadSamplingRateInput`<sup>Optional</sup> <a name="HeadSamplingRateInput" id="@cdktn/provider-cloudflare.worker.WorkerPreviewsBaseConfigObservabilityTracesOutputReference.property.headSamplingRateInput"></a>

```go
func HeadSamplingRateInput() *f64
```

- *Type:* *f64

---

##### `PersistInput`<sup>Optional</sup> <a name="PersistInput" id="@cdktn/provider-cloudflare.worker.WorkerPreviewsBaseConfigObservabilityTracesOutputReference.property.persistInput"></a>

```go
func PersistInput() interface{}
```

- *Type:* interface{}

---

##### `PropagationPolicyInput`<sup>Optional</sup> <a name="PropagationPolicyInput" id="@cdktn/provider-cloudflare.worker.WorkerPreviewsBaseConfigObservabilityTracesOutputReference.property.propagationPolicyInput"></a>

```go
func PropagationPolicyInput() *string
```

- *Type:* *string

---

##### `Destinations`<sup>Required</sup> <a name="Destinations" id="@cdktn/provider-cloudflare.worker.WorkerPreviewsBaseConfigObservabilityTracesOutputReference.property.destinations"></a>

```go
func Destinations() *[]*string
```

- *Type:* *[]*string

---

##### `Enabled`<sup>Required</sup> <a name="Enabled" id="@cdktn/provider-cloudflare.worker.WorkerPreviewsBaseConfigObservabilityTracesOutputReference.property.enabled"></a>

```go
func Enabled() interface{}
```

- *Type:* interface{}

---

##### `HeadSamplingRate`<sup>Required</sup> <a name="HeadSamplingRate" id="@cdktn/provider-cloudflare.worker.WorkerPreviewsBaseConfigObservabilityTracesOutputReference.property.headSamplingRate"></a>

```go
func HeadSamplingRate() *f64
```

- *Type:* *f64

---

##### `Persist`<sup>Required</sup> <a name="Persist" id="@cdktn/provider-cloudflare.worker.WorkerPreviewsBaseConfigObservabilityTracesOutputReference.property.persist"></a>

```go
func Persist() interface{}
```

- *Type:* interface{}

---

##### `PropagationPolicy`<sup>Required</sup> <a name="PropagationPolicy" id="@cdktn/provider-cloudflare.worker.WorkerPreviewsBaseConfigObservabilityTracesOutputReference.property.propagationPolicy"></a>

```go
func PropagationPolicy() *string
```

- *Type:* *string

---

##### `InternalValue`<sup>Optional</sup> <a name="InternalValue" id="@cdktn/provider-cloudflare.worker.WorkerPreviewsBaseConfigObservabilityTracesOutputReference.property.internalValue"></a>

```go
func InternalValue() interface{}
```

- *Type:* interface{}

---


### WorkerPreviewsBaseConfigOutputReference <a name="WorkerPreviewsBaseConfigOutputReference" id="@cdktn/provider-cloudflare.worker.WorkerPreviewsBaseConfigOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktn/provider-cloudflare.worker.WorkerPreviewsBaseConfigOutputReference.Initializer"></a>

```go
import "github.com/cdktn-io/cdktn-provider-cloudflare-go/cloudflare/v16/worker"

worker.NewWorkerPreviewsBaseConfigOutputReference(terraformResource IInterpolatingParent, terraformAttribute *string) WorkerPreviewsBaseConfigOutputReference
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-cloudflare.worker.WorkerPreviewsBaseConfigOutputReference.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>github.com/open-constructs/cdk-terrain-go/cdktn.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktn/provider-cloudflare.worker.WorkerPreviewsBaseConfigOutputReference.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>*string</code> | The attribute on the parent resource this class is referencing. |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktn/provider-cloudflare.worker.WorkerPreviewsBaseConfigOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* github.com/open-constructs/cdk-terrain-go/cdktn.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-cloudflare.worker.WorkerPreviewsBaseConfigOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* *string

The attribute on the parent resource this class is referencing.

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-cloudflare.worker.WorkerPreviewsBaseConfigOutputReference.computeFqn">ComputeFqn</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-cloudflare.worker.WorkerPreviewsBaseConfigOutputReference.getAnyMapAttribute">GetAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-cloudflare.worker.WorkerPreviewsBaseConfigOutputReference.getBooleanAttribute">GetBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-cloudflare.worker.WorkerPreviewsBaseConfigOutputReference.getBooleanMapAttribute">GetBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-cloudflare.worker.WorkerPreviewsBaseConfigOutputReference.getListAttribute">GetListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-cloudflare.worker.WorkerPreviewsBaseConfigOutputReference.getNumberAttribute">GetNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-cloudflare.worker.WorkerPreviewsBaseConfigOutputReference.getNumberListAttribute">GetNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-cloudflare.worker.WorkerPreviewsBaseConfigOutputReference.getNumberMapAttribute">GetNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-cloudflare.worker.WorkerPreviewsBaseConfigOutputReference.getStringAttribute">GetStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-cloudflare.worker.WorkerPreviewsBaseConfigOutputReference.getStringMapAttribute">GetStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-cloudflare.worker.WorkerPreviewsBaseConfigOutputReference.interpolationForAttribute">InterpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-cloudflare.worker.WorkerPreviewsBaseConfigOutputReference.resolve">Resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktn/provider-cloudflare.worker.WorkerPreviewsBaseConfigOutputReference.toString">ToString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktn/provider-cloudflare.worker.WorkerPreviewsBaseConfigOutputReference.putCacheOptions">PutCacheOptions</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-cloudflare.worker.WorkerPreviewsBaseConfigOutputReference.putEnv">PutEnv</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-cloudflare.worker.WorkerPreviewsBaseConfigOutputReference.putLimits">PutLimits</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-cloudflare.worker.WorkerPreviewsBaseConfigOutputReference.putObservability">PutObservability</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-cloudflare.worker.WorkerPreviewsBaseConfigOutputReference.putPlacement">PutPlacement</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-cloudflare.worker.WorkerPreviewsBaseConfigOutputReference.putTailConsumers">PutTailConsumers</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-cloudflare.worker.WorkerPreviewsBaseConfigOutputReference.resetCacheOptions">ResetCacheOptions</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-cloudflare.worker.WorkerPreviewsBaseConfigOutputReference.resetEnv">ResetEnv</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-cloudflare.worker.WorkerPreviewsBaseConfigOutputReference.resetLimits">ResetLimits</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-cloudflare.worker.WorkerPreviewsBaseConfigOutputReference.resetLogpush">ResetLogpush</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-cloudflare.worker.WorkerPreviewsBaseConfigOutputReference.resetObservability">ResetObservability</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-cloudflare.worker.WorkerPreviewsBaseConfigOutputReference.resetPlacement">ResetPlacement</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-cloudflare.worker.WorkerPreviewsBaseConfigOutputReference.resetTailConsumers">ResetTailConsumers</a></code> | *No description.* |

---

##### `ComputeFqn` <a name="ComputeFqn" id="@cdktn/provider-cloudflare.worker.WorkerPreviewsBaseConfigOutputReference.computeFqn"></a>

```go
func ComputeFqn() *string
```

##### `GetAnyMapAttribute` <a name="GetAnyMapAttribute" id="@cdktn/provider-cloudflare.worker.WorkerPreviewsBaseConfigOutputReference.getAnyMapAttribute"></a>

```go
func GetAnyMapAttribute(terraformAttribute *string) *map[string]interface{}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-cloudflare.worker.WorkerPreviewsBaseConfigOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetBooleanAttribute` <a name="GetBooleanAttribute" id="@cdktn/provider-cloudflare.worker.WorkerPreviewsBaseConfigOutputReference.getBooleanAttribute"></a>

```go
func GetBooleanAttribute(terraformAttribute *string) IResolvable
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-cloudflare.worker.WorkerPreviewsBaseConfigOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetBooleanMapAttribute` <a name="GetBooleanMapAttribute" id="@cdktn/provider-cloudflare.worker.WorkerPreviewsBaseConfigOutputReference.getBooleanMapAttribute"></a>

```go
func GetBooleanMapAttribute(terraformAttribute *string) *map[string]*bool
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-cloudflare.worker.WorkerPreviewsBaseConfigOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetListAttribute` <a name="GetListAttribute" id="@cdktn/provider-cloudflare.worker.WorkerPreviewsBaseConfigOutputReference.getListAttribute"></a>

```go
func GetListAttribute(terraformAttribute *string) *[]*string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-cloudflare.worker.WorkerPreviewsBaseConfigOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberAttribute` <a name="GetNumberAttribute" id="@cdktn/provider-cloudflare.worker.WorkerPreviewsBaseConfigOutputReference.getNumberAttribute"></a>

```go
func GetNumberAttribute(terraformAttribute *string) *f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-cloudflare.worker.WorkerPreviewsBaseConfigOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberListAttribute` <a name="GetNumberListAttribute" id="@cdktn/provider-cloudflare.worker.WorkerPreviewsBaseConfigOutputReference.getNumberListAttribute"></a>

```go
func GetNumberListAttribute(terraformAttribute *string) *[]*f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-cloudflare.worker.WorkerPreviewsBaseConfigOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberMapAttribute` <a name="GetNumberMapAttribute" id="@cdktn/provider-cloudflare.worker.WorkerPreviewsBaseConfigOutputReference.getNumberMapAttribute"></a>

```go
func GetNumberMapAttribute(terraformAttribute *string) *map[string]*f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-cloudflare.worker.WorkerPreviewsBaseConfigOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetStringAttribute` <a name="GetStringAttribute" id="@cdktn/provider-cloudflare.worker.WorkerPreviewsBaseConfigOutputReference.getStringAttribute"></a>

```go
func GetStringAttribute(terraformAttribute *string) *string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-cloudflare.worker.WorkerPreviewsBaseConfigOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetStringMapAttribute` <a name="GetStringMapAttribute" id="@cdktn/provider-cloudflare.worker.WorkerPreviewsBaseConfigOutputReference.getStringMapAttribute"></a>

```go
func GetStringMapAttribute(terraformAttribute *string) *map[string]*string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-cloudflare.worker.WorkerPreviewsBaseConfigOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `InterpolationForAttribute` <a name="InterpolationForAttribute" id="@cdktn/provider-cloudflare.worker.WorkerPreviewsBaseConfigOutputReference.interpolationForAttribute"></a>

```go
func InterpolationForAttribute(property *string) IResolvable
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktn/provider-cloudflare.worker.WorkerPreviewsBaseConfigOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* *string

---

##### `Resolve` <a name="Resolve" id="@cdktn/provider-cloudflare.worker.WorkerPreviewsBaseConfigOutputReference.resolve"></a>

```go
func Resolve(_context IResolveContext) interface{}
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktn/provider-cloudflare.worker.WorkerPreviewsBaseConfigOutputReference.resolve.parameter._context"></a>

- *Type:* github.com/open-constructs/cdk-terrain-go/cdktn.IResolveContext

---

##### `ToString` <a name="ToString" id="@cdktn/provider-cloudflare.worker.WorkerPreviewsBaseConfigOutputReference.toString"></a>

```go
func ToString() *string
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `PutCacheOptions` <a name="PutCacheOptions" id="@cdktn/provider-cloudflare.worker.WorkerPreviewsBaseConfigOutputReference.putCacheOptions"></a>

```go
func PutCacheOptions(value WorkerPreviewsBaseConfigCacheOptions)
```

###### `value`<sup>Required</sup> <a name="value" id="@cdktn/provider-cloudflare.worker.WorkerPreviewsBaseConfigOutputReference.putCacheOptions.parameter.value"></a>

- *Type:* <a href="#@cdktn/provider-cloudflare.worker.WorkerPreviewsBaseConfigCacheOptions">WorkerPreviewsBaseConfigCacheOptions</a>

---

##### `PutEnv` <a name="PutEnv" id="@cdktn/provider-cloudflare.worker.WorkerPreviewsBaseConfigOutputReference.putEnv"></a>

```go
func PutEnv(value interface{})
```

###### `value`<sup>Required</sup> <a name="value" id="@cdktn/provider-cloudflare.worker.WorkerPreviewsBaseConfigOutputReference.putEnv.parameter.value"></a>

- *Type:* interface{}

---

##### `PutLimits` <a name="PutLimits" id="@cdktn/provider-cloudflare.worker.WorkerPreviewsBaseConfigOutputReference.putLimits"></a>

```go
func PutLimits(value WorkerPreviewsBaseConfigLimits)
```

###### `value`<sup>Required</sup> <a name="value" id="@cdktn/provider-cloudflare.worker.WorkerPreviewsBaseConfigOutputReference.putLimits.parameter.value"></a>

- *Type:* <a href="#@cdktn/provider-cloudflare.worker.WorkerPreviewsBaseConfigLimits">WorkerPreviewsBaseConfigLimits</a>

---

##### `PutObservability` <a name="PutObservability" id="@cdktn/provider-cloudflare.worker.WorkerPreviewsBaseConfigOutputReference.putObservability"></a>

```go
func PutObservability(value WorkerPreviewsBaseConfigObservability)
```

###### `value`<sup>Required</sup> <a name="value" id="@cdktn/provider-cloudflare.worker.WorkerPreviewsBaseConfigOutputReference.putObservability.parameter.value"></a>

- *Type:* <a href="#@cdktn/provider-cloudflare.worker.WorkerPreviewsBaseConfigObservability">WorkerPreviewsBaseConfigObservability</a>

---

##### `PutPlacement` <a name="PutPlacement" id="@cdktn/provider-cloudflare.worker.WorkerPreviewsBaseConfigOutputReference.putPlacement"></a>

```go
func PutPlacement(value WorkerPreviewsBaseConfigPlacement)
```

###### `value`<sup>Required</sup> <a name="value" id="@cdktn/provider-cloudflare.worker.WorkerPreviewsBaseConfigOutputReference.putPlacement.parameter.value"></a>

- *Type:* <a href="#@cdktn/provider-cloudflare.worker.WorkerPreviewsBaseConfigPlacement">WorkerPreviewsBaseConfigPlacement</a>

---

##### `PutTailConsumers` <a name="PutTailConsumers" id="@cdktn/provider-cloudflare.worker.WorkerPreviewsBaseConfigOutputReference.putTailConsumers"></a>

```go
func PutTailConsumers(value interface{})
```

###### `value`<sup>Required</sup> <a name="value" id="@cdktn/provider-cloudflare.worker.WorkerPreviewsBaseConfigOutputReference.putTailConsumers.parameter.value"></a>

- *Type:* interface{}

---

##### `ResetCacheOptions` <a name="ResetCacheOptions" id="@cdktn/provider-cloudflare.worker.WorkerPreviewsBaseConfigOutputReference.resetCacheOptions"></a>

```go
func ResetCacheOptions()
```

##### `ResetEnv` <a name="ResetEnv" id="@cdktn/provider-cloudflare.worker.WorkerPreviewsBaseConfigOutputReference.resetEnv"></a>

```go
func ResetEnv()
```

##### `ResetLimits` <a name="ResetLimits" id="@cdktn/provider-cloudflare.worker.WorkerPreviewsBaseConfigOutputReference.resetLimits"></a>

```go
func ResetLimits()
```

##### `ResetLogpush` <a name="ResetLogpush" id="@cdktn/provider-cloudflare.worker.WorkerPreviewsBaseConfigOutputReference.resetLogpush"></a>

```go
func ResetLogpush()
```

##### `ResetObservability` <a name="ResetObservability" id="@cdktn/provider-cloudflare.worker.WorkerPreviewsBaseConfigOutputReference.resetObservability"></a>

```go
func ResetObservability()
```

##### `ResetPlacement` <a name="ResetPlacement" id="@cdktn/provider-cloudflare.worker.WorkerPreviewsBaseConfigOutputReference.resetPlacement"></a>

```go
func ResetPlacement()
```

##### `ResetTailConsumers` <a name="ResetTailConsumers" id="@cdktn/provider-cloudflare.worker.WorkerPreviewsBaseConfigOutputReference.resetTailConsumers"></a>

```go
func ResetTailConsumers()
```


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-cloudflare.worker.WorkerPreviewsBaseConfigOutputReference.property.creationStack">CreationStack</a></code> | <code>*[]*string</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktn/provider-cloudflare.worker.WorkerPreviewsBaseConfigOutputReference.property.fqn">Fqn</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktn/provider-cloudflare.worker.WorkerPreviewsBaseConfigOutputReference.property.cacheOptions">CacheOptions</a></code> | <code><a href="#@cdktn/provider-cloudflare.worker.WorkerPreviewsBaseConfigCacheOptionsOutputReference">WorkerPreviewsBaseConfigCacheOptionsOutputReference</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-cloudflare.worker.WorkerPreviewsBaseConfigOutputReference.property.env">Env</a></code> | <code><a href="#@cdktn/provider-cloudflare.worker.WorkerPreviewsBaseConfigEnvMap">WorkerPreviewsBaseConfigEnvMap</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-cloudflare.worker.WorkerPreviewsBaseConfigOutputReference.property.limits">Limits</a></code> | <code><a href="#@cdktn/provider-cloudflare.worker.WorkerPreviewsBaseConfigLimitsOutputReference">WorkerPreviewsBaseConfigLimitsOutputReference</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-cloudflare.worker.WorkerPreviewsBaseConfigOutputReference.property.observability">Observability</a></code> | <code><a href="#@cdktn/provider-cloudflare.worker.WorkerPreviewsBaseConfigObservabilityOutputReference">WorkerPreviewsBaseConfigObservabilityOutputReference</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-cloudflare.worker.WorkerPreviewsBaseConfigOutputReference.property.placement">Placement</a></code> | <code><a href="#@cdktn/provider-cloudflare.worker.WorkerPreviewsBaseConfigPlacementOutputReference">WorkerPreviewsBaseConfigPlacementOutputReference</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-cloudflare.worker.WorkerPreviewsBaseConfigOutputReference.property.tailConsumers">TailConsumers</a></code> | <code><a href="#@cdktn/provider-cloudflare.worker.WorkerPreviewsBaseConfigTailConsumersList">WorkerPreviewsBaseConfigTailConsumersList</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-cloudflare.worker.WorkerPreviewsBaseConfigOutputReference.property.cacheOptionsInput">CacheOptionsInput</a></code> | <code>interface{}</code> | *No description.* |
| <code><a href="#@cdktn/provider-cloudflare.worker.WorkerPreviewsBaseConfigOutputReference.property.envInput">EnvInput</a></code> | <code>interface{}</code> | *No description.* |
| <code><a href="#@cdktn/provider-cloudflare.worker.WorkerPreviewsBaseConfigOutputReference.property.limitsInput">LimitsInput</a></code> | <code>interface{}</code> | *No description.* |
| <code><a href="#@cdktn/provider-cloudflare.worker.WorkerPreviewsBaseConfigOutputReference.property.logpushInput">LogpushInput</a></code> | <code>interface{}</code> | *No description.* |
| <code><a href="#@cdktn/provider-cloudflare.worker.WorkerPreviewsBaseConfigOutputReference.property.observabilityInput">ObservabilityInput</a></code> | <code>interface{}</code> | *No description.* |
| <code><a href="#@cdktn/provider-cloudflare.worker.WorkerPreviewsBaseConfigOutputReference.property.placementInput">PlacementInput</a></code> | <code>interface{}</code> | *No description.* |
| <code><a href="#@cdktn/provider-cloudflare.worker.WorkerPreviewsBaseConfigOutputReference.property.tailConsumersInput">TailConsumersInput</a></code> | <code>interface{}</code> | *No description.* |
| <code><a href="#@cdktn/provider-cloudflare.worker.WorkerPreviewsBaseConfigOutputReference.property.logpush">Logpush</a></code> | <code>interface{}</code> | *No description.* |
| <code><a href="#@cdktn/provider-cloudflare.worker.WorkerPreviewsBaseConfigOutputReference.property.internalValue">InternalValue</a></code> | <code>interface{}</code> | *No description.* |

---

##### `CreationStack`<sup>Required</sup> <a name="CreationStack" id="@cdktn/provider-cloudflare.worker.WorkerPreviewsBaseConfigOutputReference.property.creationStack"></a>

```go
func CreationStack() *[]*string
```

- *Type:* *[]*string

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `Fqn`<sup>Required</sup> <a name="Fqn" id="@cdktn/provider-cloudflare.worker.WorkerPreviewsBaseConfigOutputReference.property.fqn"></a>

```go
func Fqn() *string
```

- *Type:* *string

---

##### `CacheOptions`<sup>Required</sup> <a name="CacheOptions" id="@cdktn/provider-cloudflare.worker.WorkerPreviewsBaseConfigOutputReference.property.cacheOptions"></a>

```go
func CacheOptions() WorkerPreviewsBaseConfigCacheOptionsOutputReference
```

- *Type:* <a href="#@cdktn/provider-cloudflare.worker.WorkerPreviewsBaseConfigCacheOptionsOutputReference">WorkerPreviewsBaseConfigCacheOptionsOutputReference</a>

---

##### `Env`<sup>Required</sup> <a name="Env" id="@cdktn/provider-cloudflare.worker.WorkerPreviewsBaseConfigOutputReference.property.env"></a>

```go
func Env() WorkerPreviewsBaseConfigEnvMap
```

- *Type:* <a href="#@cdktn/provider-cloudflare.worker.WorkerPreviewsBaseConfigEnvMap">WorkerPreviewsBaseConfigEnvMap</a>

---

##### `Limits`<sup>Required</sup> <a name="Limits" id="@cdktn/provider-cloudflare.worker.WorkerPreviewsBaseConfigOutputReference.property.limits"></a>

```go
func Limits() WorkerPreviewsBaseConfigLimitsOutputReference
```

- *Type:* <a href="#@cdktn/provider-cloudflare.worker.WorkerPreviewsBaseConfigLimitsOutputReference">WorkerPreviewsBaseConfigLimitsOutputReference</a>

---

##### `Observability`<sup>Required</sup> <a name="Observability" id="@cdktn/provider-cloudflare.worker.WorkerPreviewsBaseConfigOutputReference.property.observability"></a>

```go
func Observability() WorkerPreviewsBaseConfigObservabilityOutputReference
```

- *Type:* <a href="#@cdktn/provider-cloudflare.worker.WorkerPreviewsBaseConfigObservabilityOutputReference">WorkerPreviewsBaseConfigObservabilityOutputReference</a>

---

##### `Placement`<sup>Required</sup> <a name="Placement" id="@cdktn/provider-cloudflare.worker.WorkerPreviewsBaseConfigOutputReference.property.placement"></a>

```go
func Placement() WorkerPreviewsBaseConfigPlacementOutputReference
```

- *Type:* <a href="#@cdktn/provider-cloudflare.worker.WorkerPreviewsBaseConfigPlacementOutputReference">WorkerPreviewsBaseConfigPlacementOutputReference</a>

---

##### `TailConsumers`<sup>Required</sup> <a name="TailConsumers" id="@cdktn/provider-cloudflare.worker.WorkerPreviewsBaseConfigOutputReference.property.tailConsumers"></a>

```go
func TailConsumers() WorkerPreviewsBaseConfigTailConsumersList
```

- *Type:* <a href="#@cdktn/provider-cloudflare.worker.WorkerPreviewsBaseConfigTailConsumersList">WorkerPreviewsBaseConfigTailConsumersList</a>

---

##### `CacheOptionsInput`<sup>Optional</sup> <a name="CacheOptionsInput" id="@cdktn/provider-cloudflare.worker.WorkerPreviewsBaseConfigOutputReference.property.cacheOptionsInput"></a>

```go
func CacheOptionsInput() interface{}
```

- *Type:* interface{}

---

##### `EnvInput`<sup>Optional</sup> <a name="EnvInput" id="@cdktn/provider-cloudflare.worker.WorkerPreviewsBaseConfigOutputReference.property.envInput"></a>

```go
func EnvInput() interface{}
```

- *Type:* interface{}

---

##### `LimitsInput`<sup>Optional</sup> <a name="LimitsInput" id="@cdktn/provider-cloudflare.worker.WorkerPreviewsBaseConfigOutputReference.property.limitsInput"></a>

```go
func LimitsInput() interface{}
```

- *Type:* interface{}

---

##### `LogpushInput`<sup>Optional</sup> <a name="LogpushInput" id="@cdktn/provider-cloudflare.worker.WorkerPreviewsBaseConfigOutputReference.property.logpushInput"></a>

```go
func LogpushInput() interface{}
```

- *Type:* interface{}

---

##### `ObservabilityInput`<sup>Optional</sup> <a name="ObservabilityInput" id="@cdktn/provider-cloudflare.worker.WorkerPreviewsBaseConfigOutputReference.property.observabilityInput"></a>

```go
func ObservabilityInput() interface{}
```

- *Type:* interface{}

---

##### `PlacementInput`<sup>Optional</sup> <a name="PlacementInput" id="@cdktn/provider-cloudflare.worker.WorkerPreviewsBaseConfigOutputReference.property.placementInput"></a>

```go
func PlacementInput() interface{}
```

- *Type:* interface{}

---

##### `TailConsumersInput`<sup>Optional</sup> <a name="TailConsumersInput" id="@cdktn/provider-cloudflare.worker.WorkerPreviewsBaseConfigOutputReference.property.tailConsumersInput"></a>

```go
func TailConsumersInput() interface{}
```

- *Type:* interface{}

---

##### `Logpush`<sup>Required</sup> <a name="Logpush" id="@cdktn/provider-cloudflare.worker.WorkerPreviewsBaseConfigOutputReference.property.logpush"></a>

```go
func Logpush() interface{}
```

- *Type:* interface{}

---

##### `InternalValue`<sup>Optional</sup> <a name="InternalValue" id="@cdktn/provider-cloudflare.worker.WorkerPreviewsBaseConfigOutputReference.property.internalValue"></a>

```go
func InternalValue() interface{}
```

- *Type:* interface{}

---


### WorkerPreviewsBaseConfigPlacementOutputReference <a name="WorkerPreviewsBaseConfigPlacementOutputReference" id="@cdktn/provider-cloudflare.worker.WorkerPreviewsBaseConfigPlacementOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktn/provider-cloudflare.worker.WorkerPreviewsBaseConfigPlacementOutputReference.Initializer"></a>

```go
import "github.com/cdktn-io/cdktn-provider-cloudflare-go/cloudflare/v16/worker"

worker.NewWorkerPreviewsBaseConfigPlacementOutputReference(terraformResource IInterpolatingParent, terraformAttribute *string) WorkerPreviewsBaseConfigPlacementOutputReference
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-cloudflare.worker.WorkerPreviewsBaseConfigPlacementOutputReference.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>github.com/open-constructs/cdk-terrain-go/cdktn.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktn/provider-cloudflare.worker.WorkerPreviewsBaseConfigPlacementOutputReference.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>*string</code> | The attribute on the parent resource this class is referencing. |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktn/provider-cloudflare.worker.WorkerPreviewsBaseConfigPlacementOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* github.com/open-constructs/cdk-terrain-go/cdktn.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-cloudflare.worker.WorkerPreviewsBaseConfigPlacementOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* *string

The attribute on the parent resource this class is referencing.

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-cloudflare.worker.WorkerPreviewsBaseConfigPlacementOutputReference.computeFqn">ComputeFqn</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-cloudflare.worker.WorkerPreviewsBaseConfigPlacementOutputReference.getAnyMapAttribute">GetAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-cloudflare.worker.WorkerPreviewsBaseConfigPlacementOutputReference.getBooleanAttribute">GetBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-cloudflare.worker.WorkerPreviewsBaseConfigPlacementOutputReference.getBooleanMapAttribute">GetBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-cloudflare.worker.WorkerPreviewsBaseConfigPlacementOutputReference.getListAttribute">GetListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-cloudflare.worker.WorkerPreviewsBaseConfigPlacementOutputReference.getNumberAttribute">GetNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-cloudflare.worker.WorkerPreviewsBaseConfigPlacementOutputReference.getNumberListAttribute">GetNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-cloudflare.worker.WorkerPreviewsBaseConfigPlacementOutputReference.getNumberMapAttribute">GetNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-cloudflare.worker.WorkerPreviewsBaseConfigPlacementOutputReference.getStringAttribute">GetStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-cloudflare.worker.WorkerPreviewsBaseConfigPlacementOutputReference.getStringMapAttribute">GetStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-cloudflare.worker.WorkerPreviewsBaseConfigPlacementOutputReference.interpolationForAttribute">InterpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-cloudflare.worker.WorkerPreviewsBaseConfigPlacementOutputReference.resolve">Resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktn/provider-cloudflare.worker.WorkerPreviewsBaseConfigPlacementOutputReference.toString">ToString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktn/provider-cloudflare.worker.WorkerPreviewsBaseConfigPlacementOutputReference.putTarget">PutTarget</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-cloudflare.worker.WorkerPreviewsBaseConfigPlacementOutputReference.resetHost">ResetHost</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-cloudflare.worker.WorkerPreviewsBaseConfigPlacementOutputReference.resetHostname">ResetHostname</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-cloudflare.worker.WorkerPreviewsBaseConfigPlacementOutputReference.resetMode">ResetMode</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-cloudflare.worker.WorkerPreviewsBaseConfigPlacementOutputReference.resetRegion">ResetRegion</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-cloudflare.worker.WorkerPreviewsBaseConfigPlacementOutputReference.resetTarget">ResetTarget</a></code> | *No description.* |

---

##### `ComputeFqn` <a name="ComputeFqn" id="@cdktn/provider-cloudflare.worker.WorkerPreviewsBaseConfigPlacementOutputReference.computeFqn"></a>

```go
func ComputeFqn() *string
```

##### `GetAnyMapAttribute` <a name="GetAnyMapAttribute" id="@cdktn/provider-cloudflare.worker.WorkerPreviewsBaseConfigPlacementOutputReference.getAnyMapAttribute"></a>

```go
func GetAnyMapAttribute(terraformAttribute *string) *map[string]interface{}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-cloudflare.worker.WorkerPreviewsBaseConfigPlacementOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetBooleanAttribute` <a name="GetBooleanAttribute" id="@cdktn/provider-cloudflare.worker.WorkerPreviewsBaseConfigPlacementOutputReference.getBooleanAttribute"></a>

```go
func GetBooleanAttribute(terraformAttribute *string) IResolvable
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-cloudflare.worker.WorkerPreviewsBaseConfigPlacementOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetBooleanMapAttribute` <a name="GetBooleanMapAttribute" id="@cdktn/provider-cloudflare.worker.WorkerPreviewsBaseConfigPlacementOutputReference.getBooleanMapAttribute"></a>

```go
func GetBooleanMapAttribute(terraformAttribute *string) *map[string]*bool
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-cloudflare.worker.WorkerPreviewsBaseConfigPlacementOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetListAttribute` <a name="GetListAttribute" id="@cdktn/provider-cloudflare.worker.WorkerPreviewsBaseConfigPlacementOutputReference.getListAttribute"></a>

```go
func GetListAttribute(terraformAttribute *string) *[]*string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-cloudflare.worker.WorkerPreviewsBaseConfigPlacementOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberAttribute` <a name="GetNumberAttribute" id="@cdktn/provider-cloudflare.worker.WorkerPreviewsBaseConfigPlacementOutputReference.getNumberAttribute"></a>

```go
func GetNumberAttribute(terraformAttribute *string) *f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-cloudflare.worker.WorkerPreviewsBaseConfigPlacementOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberListAttribute` <a name="GetNumberListAttribute" id="@cdktn/provider-cloudflare.worker.WorkerPreviewsBaseConfigPlacementOutputReference.getNumberListAttribute"></a>

```go
func GetNumberListAttribute(terraformAttribute *string) *[]*f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-cloudflare.worker.WorkerPreviewsBaseConfigPlacementOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberMapAttribute` <a name="GetNumberMapAttribute" id="@cdktn/provider-cloudflare.worker.WorkerPreviewsBaseConfigPlacementOutputReference.getNumberMapAttribute"></a>

```go
func GetNumberMapAttribute(terraformAttribute *string) *map[string]*f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-cloudflare.worker.WorkerPreviewsBaseConfigPlacementOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetStringAttribute` <a name="GetStringAttribute" id="@cdktn/provider-cloudflare.worker.WorkerPreviewsBaseConfigPlacementOutputReference.getStringAttribute"></a>

```go
func GetStringAttribute(terraformAttribute *string) *string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-cloudflare.worker.WorkerPreviewsBaseConfigPlacementOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetStringMapAttribute` <a name="GetStringMapAttribute" id="@cdktn/provider-cloudflare.worker.WorkerPreviewsBaseConfigPlacementOutputReference.getStringMapAttribute"></a>

```go
func GetStringMapAttribute(terraformAttribute *string) *map[string]*string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-cloudflare.worker.WorkerPreviewsBaseConfigPlacementOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `InterpolationForAttribute` <a name="InterpolationForAttribute" id="@cdktn/provider-cloudflare.worker.WorkerPreviewsBaseConfigPlacementOutputReference.interpolationForAttribute"></a>

```go
func InterpolationForAttribute(property *string) IResolvable
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktn/provider-cloudflare.worker.WorkerPreviewsBaseConfigPlacementOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* *string

---

##### `Resolve` <a name="Resolve" id="@cdktn/provider-cloudflare.worker.WorkerPreviewsBaseConfigPlacementOutputReference.resolve"></a>

```go
func Resolve(_context IResolveContext) interface{}
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktn/provider-cloudflare.worker.WorkerPreviewsBaseConfigPlacementOutputReference.resolve.parameter._context"></a>

- *Type:* github.com/open-constructs/cdk-terrain-go/cdktn.IResolveContext

---

##### `ToString` <a name="ToString" id="@cdktn/provider-cloudflare.worker.WorkerPreviewsBaseConfigPlacementOutputReference.toString"></a>

```go
func ToString() *string
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `PutTarget` <a name="PutTarget" id="@cdktn/provider-cloudflare.worker.WorkerPreviewsBaseConfigPlacementOutputReference.putTarget"></a>

```go
func PutTarget(value interface{})
```

###### `value`<sup>Required</sup> <a name="value" id="@cdktn/provider-cloudflare.worker.WorkerPreviewsBaseConfigPlacementOutputReference.putTarget.parameter.value"></a>

- *Type:* interface{}

---

##### `ResetHost` <a name="ResetHost" id="@cdktn/provider-cloudflare.worker.WorkerPreviewsBaseConfigPlacementOutputReference.resetHost"></a>

```go
func ResetHost()
```

##### `ResetHostname` <a name="ResetHostname" id="@cdktn/provider-cloudflare.worker.WorkerPreviewsBaseConfigPlacementOutputReference.resetHostname"></a>

```go
func ResetHostname()
```

##### `ResetMode` <a name="ResetMode" id="@cdktn/provider-cloudflare.worker.WorkerPreviewsBaseConfigPlacementOutputReference.resetMode"></a>

```go
func ResetMode()
```

##### `ResetRegion` <a name="ResetRegion" id="@cdktn/provider-cloudflare.worker.WorkerPreviewsBaseConfigPlacementOutputReference.resetRegion"></a>

```go
func ResetRegion()
```

##### `ResetTarget` <a name="ResetTarget" id="@cdktn/provider-cloudflare.worker.WorkerPreviewsBaseConfigPlacementOutputReference.resetTarget"></a>

```go
func ResetTarget()
```


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-cloudflare.worker.WorkerPreviewsBaseConfigPlacementOutputReference.property.creationStack">CreationStack</a></code> | <code>*[]*string</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktn/provider-cloudflare.worker.WorkerPreviewsBaseConfigPlacementOutputReference.property.fqn">Fqn</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktn/provider-cloudflare.worker.WorkerPreviewsBaseConfigPlacementOutputReference.property.target">Target</a></code> | <code><a href="#@cdktn/provider-cloudflare.worker.WorkerPreviewsBaseConfigPlacementTargetList">WorkerPreviewsBaseConfigPlacementTargetList</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-cloudflare.worker.WorkerPreviewsBaseConfigPlacementOutputReference.property.hostInput">HostInput</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktn/provider-cloudflare.worker.WorkerPreviewsBaseConfigPlacementOutputReference.property.hostnameInput">HostnameInput</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktn/provider-cloudflare.worker.WorkerPreviewsBaseConfigPlacementOutputReference.property.modeInput">ModeInput</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktn/provider-cloudflare.worker.WorkerPreviewsBaseConfigPlacementOutputReference.property.regionInput">RegionInput</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktn/provider-cloudflare.worker.WorkerPreviewsBaseConfigPlacementOutputReference.property.targetInput">TargetInput</a></code> | <code>interface{}</code> | *No description.* |
| <code><a href="#@cdktn/provider-cloudflare.worker.WorkerPreviewsBaseConfigPlacementOutputReference.property.host">Host</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktn/provider-cloudflare.worker.WorkerPreviewsBaseConfigPlacementOutputReference.property.hostname">Hostname</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktn/provider-cloudflare.worker.WorkerPreviewsBaseConfigPlacementOutputReference.property.mode">Mode</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktn/provider-cloudflare.worker.WorkerPreviewsBaseConfigPlacementOutputReference.property.region">Region</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktn/provider-cloudflare.worker.WorkerPreviewsBaseConfigPlacementOutputReference.property.internalValue">InternalValue</a></code> | <code>interface{}</code> | *No description.* |

---

##### `CreationStack`<sup>Required</sup> <a name="CreationStack" id="@cdktn/provider-cloudflare.worker.WorkerPreviewsBaseConfigPlacementOutputReference.property.creationStack"></a>

```go
func CreationStack() *[]*string
```

- *Type:* *[]*string

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `Fqn`<sup>Required</sup> <a name="Fqn" id="@cdktn/provider-cloudflare.worker.WorkerPreviewsBaseConfigPlacementOutputReference.property.fqn"></a>

```go
func Fqn() *string
```

- *Type:* *string

---

##### `Target`<sup>Required</sup> <a name="Target" id="@cdktn/provider-cloudflare.worker.WorkerPreviewsBaseConfigPlacementOutputReference.property.target"></a>

```go
func Target() WorkerPreviewsBaseConfigPlacementTargetList
```

- *Type:* <a href="#@cdktn/provider-cloudflare.worker.WorkerPreviewsBaseConfigPlacementTargetList">WorkerPreviewsBaseConfigPlacementTargetList</a>

---

##### `HostInput`<sup>Optional</sup> <a name="HostInput" id="@cdktn/provider-cloudflare.worker.WorkerPreviewsBaseConfigPlacementOutputReference.property.hostInput"></a>

```go
func HostInput() *string
```

- *Type:* *string

---

##### `HostnameInput`<sup>Optional</sup> <a name="HostnameInput" id="@cdktn/provider-cloudflare.worker.WorkerPreviewsBaseConfigPlacementOutputReference.property.hostnameInput"></a>

```go
func HostnameInput() *string
```

- *Type:* *string

---

##### `ModeInput`<sup>Optional</sup> <a name="ModeInput" id="@cdktn/provider-cloudflare.worker.WorkerPreviewsBaseConfigPlacementOutputReference.property.modeInput"></a>

```go
func ModeInput() *string
```

- *Type:* *string

---

##### `RegionInput`<sup>Optional</sup> <a name="RegionInput" id="@cdktn/provider-cloudflare.worker.WorkerPreviewsBaseConfigPlacementOutputReference.property.regionInput"></a>

```go
func RegionInput() *string
```

- *Type:* *string

---

##### `TargetInput`<sup>Optional</sup> <a name="TargetInput" id="@cdktn/provider-cloudflare.worker.WorkerPreviewsBaseConfigPlacementOutputReference.property.targetInput"></a>

```go
func TargetInput() interface{}
```

- *Type:* interface{}

---

##### `Host`<sup>Required</sup> <a name="Host" id="@cdktn/provider-cloudflare.worker.WorkerPreviewsBaseConfigPlacementOutputReference.property.host"></a>

```go
func Host() *string
```

- *Type:* *string

---

##### `Hostname`<sup>Required</sup> <a name="Hostname" id="@cdktn/provider-cloudflare.worker.WorkerPreviewsBaseConfigPlacementOutputReference.property.hostname"></a>

```go
func Hostname() *string
```

- *Type:* *string

---

##### `Mode`<sup>Required</sup> <a name="Mode" id="@cdktn/provider-cloudflare.worker.WorkerPreviewsBaseConfigPlacementOutputReference.property.mode"></a>

```go
func Mode() *string
```

- *Type:* *string

---

##### `Region`<sup>Required</sup> <a name="Region" id="@cdktn/provider-cloudflare.worker.WorkerPreviewsBaseConfigPlacementOutputReference.property.region"></a>

```go
func Region() *string
```

- *Type:* *string

---

##### `InternalValue`<sup>Optional</sup> <a name="InternalValue" id="@cdktn/provider-cloudflare.worker.WorkerPreviewsBaseConfigPlacementOutputReference.property.internalValue"></a>

```go
func InternalValue() interface{}
```

- *Type:* interface{}

---


### WorkerPreviewsBaseConfigPlacementTargetList <a name="WorkerPreviewsBaseConfigPlacementTargetList" id="@cdktn/provider-cloudflare.worker.WorkerPreviewsBaseConfigPlacementTargetList"></a>

#### Initializers <a name="Initializers" id="@cdktn/provider-cloudflare.worker.WorkerPreviewsBaseConfigPlacementTargetList.Initializer"></a>

```go
import "github.com/cdktn-io/cdktn-provider-cloudflare-go/cloudflare/v16/worker"

worker.NewWorkerPreviewsBaseConfigPlacementTargetList(terraformResource IInterpolatingParent, terraformAttribute *string, wrapsSet *bool) WorkerPreviewsBaseConfigPlacementTargetList
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-cloudflare.worker.WorkerPreviewsBaseConfigPlacementTargetList.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>github.com/open-constructs/cdk-terrain-go/cdktn.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktn/provider-cloudflare.worker.WorkerPreviewsBaseConfigPlacementTargetList.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>*string</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#@cdktn/provider-cloudflare.worker.WorkerPreviewsBaseConfigPlacementTargetList.Initializer.parameter.wrapsSet">wrapsSet</a></code> | <code>*bool</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktn/provider-cloudflare.worker.WorkerPreviewsBaseConfigPlacementTargetList.Initializer.parameter.terraformResource"></a>

- *Type:* github.com/open-constructs/cdk-terrain-go/cdktn.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-cloudflare.worker.WorkerPreviewsBaseConfigPlacementTargetList.Initializer.parameter.terraformAttribute"></a>

- *Type:* *string

The attribute on the parent resource this class is referencing.

---

##### `wrapsSet`<sup>Required</sup> <a name="wrapsSet" id="@cdktn/provider-cloudflare.worker.WorkerPreviewsBaseConfigPlacementTargetList.Initializer.parameter.wrapsSet"></a>

- *Type:* *bool

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-cloudflare.worker.WorkerPreviewsBaseConfigPlacementTargetList.allWithMapKey">AllWithMapKey</a></code> | Creating an iterator for this complex list. |
| <code><a href="#@cdktn/provider-cloudflare.worker.WorkerPreviewsBaseConfigPlacementTargetList.computeFqn">ComputeFqn</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-cloudflare.worker.WorkerPreviewsBaseConfigPlacementTargetList.resolve">Resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktn/provider-cloudflare.worker.WorkerPreviewsBaseConfigPlacementTargetList.toString">ToString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktn/provider-cloudflare.worker.WorkerPreviewsBaseConfigPlacementTargetList.get">Get</a></code> | *No description.* |

---

##### `AllWithMapKey` <a name="AllWithMapKey" id="@cdktn/provider-cloudflare.worker.WorkerPreviewsBaseConfigPlacementTargetList.allWithMapKey"></a>

```go
func AllWithMapKey(mapKeyAttributeName *string) DynamicListTerraformIterator
```

Creating an iterator for this complex list.

The list will be converted into a map with the mapKeyAttributeName as the key.

###### `mapKeyAttributeName`<sup>Required</sup> <a name="mapKeyAttributeName" id="@cdktn/provider-cloudflare.worker.WorkerPreviewsBaseConfigPlacementTargetList.allWithMapKey.parameter.mapKeyAttributeName"></a>

- *Type:* *string

---

##### `ComputeFqn` <a name="ComputeFqn" id="@cdktn/provider-cloudflare.worker.WorkerPreviewsBaseConfigPlacementTargetList.computeFqn"></a>

```go
func ComputeFqn() *string
```

##### `Resolve` <a name="Resolve" id="@cdktn/provider-cloudflare.worker.WorkerPreviewsBaseConfigPlacementTargetList.resolve"></a>

```go
func Resolve(_context IResolveContext) interface{}
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktn/provider-cloudflare.worker.WorkerPreviewsBaseConfigPlacementTargetList.resolve.parameter._context"></a>

- *Type:* github.com/open-constructs/cdk-terrain-go/cdktn.IResolveContext

---

##### `ToString` <a name="ToString" id="@cdktn/provider-cloudflare.worker.WorkerPreviewsBaseConfigPlacementTargetList.toString"></a>

```go
func ToString() *string
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `Get` <a name="Get" id="@cdktn/provider-cloudflare.worker.WorkerPreviewsBaseConfigPlacementTargetList.get"></a>

```go
func Get(index *f64) WorkerPreviewsBaseConfigPlacementTargetOutputReference
```

###### `index`<sup>Required</sup> <a name="index" id="@cdktn/provider-cloudflare.worker.WorkerPreviewsBaseConfigPlacementTargetList.get.parameter.index"></a>

- *Type:* *f64

the index of the item to return.

---


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-cloudflare.worker.WorkerPreviewsBaseConfigPlacementTargetList.property.creationStack">CreationStack</a></code> | <code>*[]*string</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktn/provider-cloudflare.worker.WorkerPreviewsBaseConfigPlacementTargetList.property.fqn">Fqn</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktn/provider-cloudflare.worker.WorkerPreviewsBaseConfigPlacementTargetList.property.internalValue">InternalValue</a></code> | <code>interface{}</code> | *No description.* |

---

##### `CreationStack`<sup>Required</sup> <a name="CreationStack" id="@cdktn/provider-cloudflare.worker.WorkerPreviewsBaseConfigPlacementTargetList.property.creationStack"></a>

```go
func CreationStack() *[]*string
```

- *Type:* *[]*string

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `Fqn`<sup>Required</sup> <a name="Fqn" id="@cdktn/provider-cloudflare.worker.WorkerPreviewsBaseConfigPlacementTargetList.property.fqn"></a>

```go
func Fqn() *string
```

- *Type:* *string

---

##### `InternalValue`<sup>Optional</sup> <a name="InternalValue" id="@cdktn/provider-cloudflare.worker.WorkerPreviewsBaseConfigPlacementTargetList.property.internalValue"></a>

```go
func InternalValue() interface{}
```

- *Type:* interface{}

---


### WorkerPreviewsBaseConfigPlacementTargetOutputReference <a name="WorkerPreviewsBaseConfigPlacementTargetOutputReference" id="@cdktn/provider-cloudflare.worker.WorkerPreviewsBaseConfigPlacementTargetOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktn/provider-cloudflare.worker.WorkerPreviewsBaseConfigPlacementTargetOutputReference.Initializer"></a>

```go
import "github.com/cdktn-io/cdktn-provider-cloudflare-go/cloudflare/v16/worker"

worker.NewWorkerPreviewsBaseConfigPlacementTargetOutputReference(terraformResource IInterpolatingParent, terraformAttribute *string, complexObjectIndex *f64, complexObjectIsFromSet *bool) WorkerPreviewsBaseConfigPlacementTargetOutputReference
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-cloudflare.worker.WorkerPreviewsBaseConfigPlacementTargetOutputReference.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>github.com/open-constructs/cdk-terrain-go/cdktn.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktn/provider-cloudflare.worker.WorkerPreviewsBaseConfigPlacementTargetOutputReference.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>*string</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#@cdktn/provider-cloudflare.worker.WorkerPreviewsBaseConfigPlacementTargetOutputReference.Initializer.parameter.complexObjectIndex">complexObjectIndex</a></code> | <code>*f64</code> | the index of this item in the list. |
| <code><a href="#@cdktn/provider-cloudflare.worker.WorkerPreviewsBaseConfigPlacementTargetOutputReference.Initializer.parameter.complexObjectIsFromSet">complexObjectIsFromSet</a></code> | <code>*bool</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktn/provider-cloudflare.worker.WorkerPreviewsBaseConfigPlacementTargetOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* github.com/open-constructs/cdk-terrain-go/cdktn.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-cloudflare.worker.WorkerPreviewsBaseConfigPlacementTargetOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* *string

The attribute on the parent resource this class is referencing.

---

##### `complexObjectIndex`<sup>Required</sup> <a name="complexObjectIndex" id="@cdktn/provider-cloudflare.worker.WorkerPreviewsBaseConfigPlacementTargetOutputReference.Initializer.parameter.complexObjectIndex"></a>

- *Type:* *f64

the index of this item in the list.

---

##### `complexObjectIsFromSet`<sup>Required</sup> <a name="complexObjectIsFromSet" id="@cdktn/provider-cloudflare.worker.WorkerPreviewsBaseConfigPlacementTargetOutputReference.Initializer.parameter.complexObjectIsFromSet"></a>

- *Type:* *bool

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-cloudflare.worker.WorkerPreviewsBaseConfigPlacementTargetOutputReference.computeFqn">ComputeFqn</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-cloudflare.worker.WorkerPreviewsBaseConfigPlacementTargetOutputReference.getAnyMapAttribute">GetAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-cloudflare.worker.WorkerPreviewsBaseConfigPlacementTargetOutputReference.getBooleanAttribute">GetBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-cloudflare.worker.WorkerPreviewsBaseConfigPlacementTargetOutputReference.getBooleanMapAttribute">GetBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-cloudflare.worker.WorkerPreviewsBaseConfigPlacementTargetOutputReference.getListAttribute">GetListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-cloudflare.worker.WorkerPreviewsBaseConfigPlacementTargetOutputReference.getNumberAttribute">GetNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-cloudflare.worker.WorkerPreviewsBaseConfigPlacementTargetOutputReference.getNumberListAttribute">GetNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-cloudflare.worker.WorkerPreviewsBaseConfigPlacementTargetOutputReference.getNumberMapAttribute">GetNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-cloudflare.worker.WorkerPreviewsBaseConfigPlacementTargetOutputReference.getStringAttribute">GetStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-cloudflare.worker.WorkerPreviewsBaseConfigPlacementTargetOutputReference.getStringMapAttribute">GetStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-cloudflare.worker.WorkerPreviewsBaseConfigPlacementTargetOutputReference.interpolationForAttribute">InterpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-cloudflare.worker.WorkerPreviewsBaseConfigPlacementTargetOutputReference.resolve">Resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktn/provider-cloudflare.worker.WorkerPreviewsBaseConfigPlacementTargetOutputReference.toString">ToString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktn/provider-cloudflare.worker.WorkerPreviewsBaseConfigPlacementTargetOutputReference.resetHost">ResetHost</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-cloudflare.worker.WorkerPreviewsBaseConfigPlacementTargetOutputReference.resetHostname">ResetHostname</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-cloudflare.worker.WorkerPreviewsBaseConfigPlacementTargetOutputReference.resetRegion">ResetRegion</a></code> | *No description.* |

---

##### `ComputeFqn` <a name="ComputeFqn" id="@cdktn/provider-cloudflare.worker.WorkerPreviewsBaseConfigPlacementTargetOutputReference.computeFqn"></a>

```go
func ComputeFqn() *string
```

##### `GetAnyMapAttribute` <a name="GetAnyMapAttribute" id="@cdktn/provider-cloudflare.worker.WorkerPreviewsBaseConfigPlacementTargetOutputReference.getAnyMapAttribute"></a>

```go
func GetAnyMapAttribute(terraformAttribute *string) *map[string]interface{}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-cloudflare.worker.WorkerPreviewsBaseConfigPlacementTargetOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetBooleanAttribute` <a name="GetBooleanAttribute" id="@cdktn/provider-cloudflare.worker.WorkerPreviewsBaseConfigPlacementTargetOutputReference.getBooleanAttribute"></a>

```go
func GetBooleanAttribute(terraformAttribute *string) IResolvable
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-cloudflare.worker.WorkerPreviewsBaseConfigPlacementTargetOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetBooleanMapAttribute` <a name="GetBooleanMapAttribute" id="@cdktn/provider-cloudflare.worker.WorkerPreviewsBaseConfigPlacementTargetOutputReference.getBooleanMapAttribute"></a>

```go
func GetBooleanMapAttribute(terraformAttribute *string) *map[string]*bool
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-cloudflare.worker.WorkerPreviewsBaseConfigPlacementTargetOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetListAttribute` <a name="GetListAttribute" id="@cdktn/provider-cloudflare.worker.WorkerPreviewsBaseConfigPlacementTargetOutputReference.getListAttribute"></a>

```go
func GetListAttribute(terraformAttribute *string) *[]*string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-cloudflare.worker.WorkerPreviewsBaseConfigPlacementTargetOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberAttribute` <a name="GetNumberAttribute" id="@cdktn/provider-cloudflare.worker.WorkerPreviewsBaseConfigPlacementTargetOutputReference.getNumberAttribute"></a>

```go
func GetNumberAttribute(terraformAttribute *string) *f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-cloudflare.worker.WorkerPreviewsBaseConfigPlacementTargetOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberListAttribute` <a name="GetNumberListAttribute" id="@cdktn/provider-cloudflare.worker.WorkerPreviewsBaseConfigPlacementTargetOutputReference.getNumberListAttribute"></a>

```go
func GetNumberListAttribute(terraformAttribute *string) *[]*f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-cloudflare.worker.WorkerPreviewsBaseConfigPlacementTargetOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberMapAttribute` <a name="GetNumberMapAttribute" id="@cdktn/provider-cloudflare.worker.WorkerPreviewsBaseConfigPlacementTargetOutputReference.getNumberMapAttribute"></a>

```go
func GetNumberMapAttribute(terraformAttribute *string) *map[string]*f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-cloudflare.worker.WorkerPreviewsBaseConfigPlacementTargetOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetStringAttribute` <a name="GetStringAttribute" id="@cdktn/provider-cloudflare.worker.WorkerPreviewsBaseConfigPlacementTargetOutputReference.getStringAttribute"></a>

```go
func GetStringAttribute(terraformAttribute *string) *string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-cloudflare.worker.WorkerPreviewsBaseConfigPlacementTargetOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetStringMapAttribute` <a name="GetStringMapAttribute" id="@cdktn/provider-cloudflare.worker.WorkerPreviewsBaseConfigPlacementTargetOutputReference.getStringMapAttribute"></a>

```go
func GetStringMapAttribute(terraformAttribute *string) *map[string]*string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-cloudflare.worker.WorkerPreviewsBaseConfigPlacementTargetOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `InterpolationForAttribute` <a name="InterpolationForAttribute" id="@cdktn/provider-cloudflare.worker.WorkerPreviewsBaseConfigPlacementTargetOutputReference.interpolationForAttribute"></a>

```go
func InterpolationForAttribute(property *string) IResolvable
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktn/provider-cloudflare.worker.WorkerPreviewsBaseConfigPlacementTargetOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* *string

---

##### `Resolve` <a name="Resolve" id="@cdktn/provider-cloudflare.worker.WorkerPreviewsBaseConfigPlacementTargetOutputReference.resolve"></a>

```go
func Resolve(_context IResolveContext) interface{}
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktn/provider-cloudflare.worker.WorkerPreviewsBaseConfigPlacementTargetOutputReference.resolve.parameter._context"></a>

- *Type:* github.com/open-constructs/cdk-terrain-go/cdktn.IResolveContext

---

##### `ToString` <a name="ToString" id="@cdktn/provider-cloudflare.worker.WorkerPreviewsBaseConfigPlacementTargetOutputReference.toString"></a>

```go
func ToString() *string
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `ResetHost` <a name="ResetHost" id="@cdktn/provider-cloudflare.worker.WorkerPreviewsBaseConfigPlacementTargetOutputReference.resetHost"></a>

```go
func ResetHost()
```

##### `ResetHostname` <a name="ResetHostname" id="@cdktn/provider-cloudflare.worker.WorkerPreviewsBaseConfigPlacementTargetOutputReference.resetHostname"></a>

```go
func ResetHostname()
```

##### `ResetRegion` <a name="ResetRegion" id="@cdktn/provider-cloudflare.worker.WorkerPreviewsBaseConfigPlacementTargetOutputReference.resetRegion"></a>

```go
func ResetRegion()
```


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-cloudflare.worker.WorkerPreviewsBaseConfigPlacementTargetOutputReference.property.creationStack">CreationStack</a></code> | <code>*[]*string</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktn/provider-cloudflare.worker.WorkerPreviewsBaseConfigPlacementTargetOutputReference.property.fqn">Fqn</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktn/provider-cloudflare.worker.WorkerPreviewsBaseConfigPlacementTargetOutputReference.property.hostInput">HostInput</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktn/provider-cloudflare.worker.WorkerPreviewsBaseConfigPlacementTargetOutputReference.property.hostnameInput">HostnameInput</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktn/provider-cloudflare.worker.WorkerPreviewsBaseConfigPlacementTargetOutputReference.property.regionInput">RegionInput</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktn/provider-cloudflare.worker.WorkerPreviewsBaseConfigPlacementTargetOutputReference.property.host">Host</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktn/provider-cloudflare.worker.WorkerPreviewsBaseConfigPlacementTargetOutputReference.property.hostname">Hostname</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktn/provider-cloudflare.worker.WorkerPreviewsBaseConfigPlacementTargetOutputReference.property.region">Region</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktn/provider-cloudflare.worker.WorkerPreviewsBaseConfigPlacementTargetOutputReference.property.internalValue">InternalValue</a></code> | <code>interface{}</code> | *No description.* |

---

##### `CreationStack`<sup>Required</sup> <a name="CreationStack" id="@cdktn/provider-cloudflare.worker.WorkerPreviewsBaseConfigPlacementTargetOutputReference.property.creationStack"></a>

```go
func CreationStack() *[]*string
```

- *Type:* *[]*string

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `Fqn`<sup>Required</sup> <a name="Fqn" id="@cdktn/provider-cloudflare.worker.WorkerPreviewsBaseConfigPlacementTargetOutputReference.property.fqn"></a>

```go
func Fqn() *string
```

- *Type:* *string

---

##### `HostInput`<sup>Optional</sup> <a name="HostInput" id="@cdktn/provider-cloudflare.worker.WorkerPreviewsBaseConfigPlacementTargetOutputReference.property.hostInput"></a>

```go
func HostInput() *string
```

- *Type:* *string

---

##### `HostnameInput`<sup>Optional</sup> <a name="HostnameInput" id="@cdktn/provider-cloudflare.worker.WorkerPreviewsBaseConfigPlacementTargetOutputReference.property.hostnameInput"></a>

```go
func HostnameInput() *string
```

- *Type:* *string

---

##### `RegionInput`<sup>Optional</sup> <a name="RegionInput" id="@cdktn/provider-cloudflare.worker.WorkerPreviewsBaseConfigPlacementTargetOutputReference.property.regionInput"></a>

```go
func RegionInput() *string
```

- *Type:* *string

---

##### `Host`<sup>Required</sup> <a name="Host" id="@cdktn/provider-cloudflare.worker.WorkerPreviewsBaseConfigPlacementTargetOutputReference.property.host"></a>

```go
func Host() *string
```

- *Type:* *string

---

##### `Hostname`<sup>Required</sup> <a name="Hostname" id="@cdktn/provider-cloudflare.worker.WorkerPreviewsBaseConfigPlacementTargetOutputReference.property.hostname"></a>

```go
func Hostname() *string
```

- *Type:* *string

---

##### `Region`<sup>Required</sup> <a name="Region" id="@cdktn/provider-cloudflare.worker.WorkerPreviewsBaseConfigPlacementTargetOutputReference.property.region"></a>

```go
func Region() *string
```

- *Type:* *string

---

##### `InternalValue`<sup>Optional</sup> <a name="InternalValue" id="@cdktn/provider-cloudflare.worker.WorkerPreviewsBaseConfigPlacementTargetOutputReference.property.internalValue"></a>

```go
func InternalValue() interface{}
```

- *Type:* interface{}

---


### WorkerPreviewsBaseConfigTailConsumersList <a name="WorkerPreviewsBaseConfigTailConsumersList" id="@cdktn/provider-cloudflare.worker.WorkerPreviewsBaseConfigTailConsumersList"></a>

#### Initializers <a name="Initializers" id="@cdktn/provider-cloudflare.worker.WorkerPreviewsBaseConfigTailConsumersList.Initializer"></a>

```go
import "github.com/cdktn-io/cdktn-provider-cloudflare-go/cloudflare/v16/worker"

worker.NewWorkerPreviewsBaseConfigTailConsumersList(terraformResource IInterpolatingParent, terraformAttribute *string, wrapsSet *bool) WorkerPreviewsBaseConfigTailConsumersList
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-cloudflare.worker.WorkerPreviewsBaseConfigTailConsumersList.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>github.com/open-constructs/cdk-terrain-go/cdktn.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktn/provider-cloudflare.worker.WorkerPreviewsBaseConfigTailConsumersList.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>*string</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#@cdktn/provider-cloudflare.worker.WorkerPreviewsBaseConfigTailConsumersList.Initializer.parameter.wrapsSet">wrapsSet</a></code> | <code>*bool</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktn/provider-cloudflare.worker.WorkerPreviewsBaseConfigTailConsumersList.Initializer.parameter.terraformResource"></a>

- *Type:* github.com/open-constructs/cdk-terrain-go/cdktn.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-cloudflare.worker.WorkerPreviewsBaseConfigTailConsumersList.Initializer.parameter.terraformAttribute"></a>

- *Type:* *string

The attribute on the parent resource this class is referencing.

---

##### `wrapsSet`<sup>Required</sup> <a name="wrapsSet" id="@cdktn/provider-cloudflare.worker.WorkerPreviewsBaseConfigTailConsumersList.Initializer.parameter.wrapsSet"></a>

- *Type:* *bool

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-cloudflare.worker.WorkerPreviewsBaseConfigTailConsumersList.allWithMapKey">AllWithMapKey</a></code> | Creating an iterator for this complex list. |
| <code><a href="#@cdktn/provider-cloudflare.worker.WorkerPreviewsBaseConfigTailConsumersList.computeFqn">ComputeFqn</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-cloudflare.worker.WorkerPreviewsBaseConfigTailConsumersList.resolve">Resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktn/provider-cloudflare.worker.WorkerPreviewsBaseConfigTailConsumersList.toString">ToString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktn/provider-cloudflare.worker.WorkerPreviewsBaseConfigTailConsumersList.get">Get</a></code> | *No description.* |

---

##### `AllWithMapKey` <a name="AllWithMapKey" id="@cdktn/provider-cloudflare.worker.WorkerPreviewsBaseConfigTailConsumersList.allWithMapKey"></a>

```go
func AllWithMapKey(mapKeyAttributeName *string) DynamicListTerraformIterator
```

Creating an iterator for this complex list.

The list will be converted into a map with the mapKeyAttributeName as the key.

###### `mapKeyAttributeName`<sup>Required</sup> <a name="mapKeyAttributeName" id="@cdktn/provider-cloudflare.worker.WorkerPreviewsBaseConfigTailConsumersList.allWithMapKey.parameter.mapKeyAttributeName"></a>

- *Type:* *string

---

##### `ComputeFqn` <a name="ComputeFqn" id="@cdktn/provider-cloudflare.worker.WorkerPreviewsBaseConfigTailConsumersList.computeFqn"></a>

```go
func ComputeFqn() *string
```

##### `Resolve` <a name="Resolve" id="@cdktn/provider-cloudflare.worker.WorkerPreviewsBaseConfigTailConsumersList.resolve"></a>

```go
func Resolve(_context IResolveContext) interface{}
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktn/provider-cloudflare.worker.WorkerPreviewsBaseConfigTailConsumersList.resolve.parameter._context"></a>

- *Type:* github.com/open-constructs/cdk-terrain-go/cdktn.IResolveContext

---

##### `ToString` <a name="ToString" id="@cdktn/provider-cloudflare.worker.WorkerPreviewsBaseConfigTailConsumersList.toString"></a>

```go
func ToString() *string
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `Get` <a name="Get" id="@cdktn/provider-cloudflare.worker.WorkerPreviewsBaseConfigTailConsumersList.get"></a>

```go
func Get(index *f64) WorkerPreviewsBaseConfigTailConsumersOutputReference
```

###### `index`<sup>Required</sup> <a name="index" id="@cdktn/provider-cloudflare.worker.WorkerPreviewsBaseConfigTailConsumersList.get.parameter.index"></a>

- *Type:* *f64

the index of the item to return.

---


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-cloudflare.worker.WorkerPreviewsBaseConfigTailConsumersList.property.creationStack">CreationStack</a></code> | <code>*[]*string</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktn/provider-cloudflare.worker.WorkerPreviewsBaseConfigTailConsumersList.property.fqn">Fqn</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktn/provider-cloudflare.worker.WorkerPreviewsBaseConfigTailConsumersList.property.internalValue">InternalValue</a></code> | <code>interface{}</code> | *No description.* |

---

##### `CreationStack`<sup>Required</sup> <a name="CreationStack" id="@cdktn/provider-cloudflare.worker.WorkerPreviewsBaseConfigTailConsumersList.property.creationStack"></a>

```go
func CreationStack() *[]*string
```

- *Type:* *[]*string

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `Fqn`<sup>Required</sup> <a name="Fqn" id="@cdktn/provider-cloudflare.worker.WorkerPreviewsBaseConfigTailConsumersList.property.fqn"></a>

```go
func Fqn() *string
```

- *Type:* *string

---

##### `InternalValue`<sup>Optional</sup> <a name="InternalValue" id="@cdktn/provider-cloudflare.worker.WorkerPreviewsBaseConfigTailConsumersList.property.internalValue"></a>

```go
func InternalValue() interface{}
```

- *Type:* interface{}

---


### WorkerPreviewsBaseConfigTailConsumersOutputReference <a name="WorkerPreviewsBaseConfigTailConsumersOutputReference" id="@cdktn/provider-cloudflare.worker.WorkerPreviewsBaseConfigTailConsumersOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktn/provider-cloudflare.worker.WorkerPreviewsBaseConfigTailConsumersOutputReference.Initializer"></a>

```go
import "github.com/cdktn-io/cdktn-provider-cloudflare-go/cloudflare/v16/worker"

worker.NewWorkerPreviewsBaseConfigTailConsumersOutputReference(terraformResource IInterpolatingParent, terraformAttribute *string, complexObjectIndex *f64, complexObjectIsFromSet *bool) WorkerPreviewsBaseConfigTailConsumersOutputReference
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-cloudflare.worker.WorkerPreviewsBaseConfigTailConsumersOutputReference.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>github.com/open-constructs/cdk-terrain-go/cdktn.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktn/provider-cloudflare.worker.WorkerPreviewsBaseConfigTailConsumersOutputReference.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>*string</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#@cdktn/provider-cloudflare.worker.WorkerPreviewsBaseConfigTailConsumersOutputReference.Initializer.parameter.complexObjectIndex">complexObjectIndex</a></code> | <code>*f64</code> | the index of this item in the list. |
| <code><a href="#@cdktn/provider-cloudflare.worker.WorkerPreviewsBaseConfigTailConsumersOutputReference.Initializer.parameter.complexObjectIsFromSet">complexObjectIsFromSet</a></code> | <code>*bool</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktn/provider-cloudflare.worker.WorkerPreviewsBaseConfigTailConsumersOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* github.com/open-constructs/cdk-terrain-go/cdktn.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-cloudflare.worker.WorkerPreviewsBaseConfigTailConsumersOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* *string

The attribute on the parent resource this class is referencing.

---

##### `complexObjectIndex`<sup>Required</sup> <a name="complexObjectIndex" id="@cdktn/provider-cloudflare.worker.WorkerPreviewsBaseConfigTailConsumersOutputReference.Initializer.parameter.complexObjectIndex"></a>

- *Type:* *f64

the index of this item in the list.

---

##### `complexObjectIsFromSet`<sup>Required</sup> <a name="complexObjectIsFromSet" id="@cdktn/provider-cloudflare.worker.WorkerPreviewsBaseConfigTailConsumersOutputReference.Initializer.parameter.complexObjectIsFromSet"></a>

- *Type:* *bool

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-cloudflare.worker.WorkerPreviewsBaseConfigTailConsumersOutputReference.computeFqn">ComputeFqn</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-cloudflare.worker.WorkerPreviewsBaseConfigTailConsumersOutputReference.getAnyMapAttribute">GetAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-cloudflare.worker.WorkerPreviewsBaseConfigTailConsumersOutputReference.getBooleanAttribute">GetBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-cloudflare.worker.WorkerPreviewsBaseConfigTailConsumersOutputReference.getBooleanMapAttribute">GetBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-cloudflare.worker.WorkerPreviewsBaseConfigTailConsumersOutputReference.getListAttribute">GetListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-cloudflare.worker.WorkerPreviewsBaseConfigTailConsumersOutputReference.getNumberAttribute">GetNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-cloudflare.worker.WorkerPreviewsBaseConfigTailConsumersOutputReference.getNumberListAttribute">GetNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-cloudflare.worker.WorkerPreviewsBaseConfigTailConsumersOutputReference.getNumberMapAttribute">GetNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-cloudflare.worker.WorkerPreviewsBaseConfigTailConsumersOutputReference.getStringAttribute">GetStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-cloudflare.worker.WorkerPreviewsBaseConfigTailConsumersOutputReference.getStringMapAttribute">GetStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-cloudflare.worker.WorkerPreviewsBaseConfigTailConsumersOutputReference.interpolationForAttribute">InterpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-cloudflare.worker.WorkerPreviewsBaseConfigTailConsumersOutputReference.resolve">Resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktn/provider-cloudflare.worker.WorkerPreviewsBaseConfigTailConsumersOutputReference.toString">ToString</a></code> | Return a string representation of this resolvable object. |

---

##### `ComputeFqn` <a name="ComputeFqn" id="@cdktn/provider-cloudflare.worker.WorkerPreviewsBaseConfigTailConsumersOutputReference.computeFqn"></a>

```go
func ComputeFqn() *string
```

##### `GetAnyMapAttribute` <a name="GetAnyMapAttribute" id="@cdktn/provider-cloudflare.worker.WorkerPreviewsBaseConfigTailConsumersOutputReference.getAnyMapAttribute"></a>

```go
func GetAnyMapAttribute(terraformAttribute *string) *map[string]interface{}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-cloudflare.worker.WorkerPreviewsBaseConfigTailConsumersOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetBooleanAttribute` <a name="GetBooleanAttribute" id="@cdktn/provider-cloudflare.worker.WorkerPreviewsBaseConfigTailConsumersOutputReference.getBooleanAttribute"></a>

```go
func GetBooleanAttribute(terraformAttribute *string) IResolvable
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-cloudflare.worker.WorkerPreviewsBaseConfigTailConsumersOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetBooleanMapAttribute` <a name="GetBooleanMapAttribute" id="@cdktn/provider-cloudflare.worker.WorkerPreviewsBaseConfigTailConsumersOutputReference.getBooleanMapAttribute"></a>

```go
func GetBooleanMapAttribute(terraformAttribute *string) *map[string]*bool
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-cloudflare.worker.WorkerPreviewsBaseConfigTailConsumersOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetListAttribute` <a name="GetListAttribute" id="@cdktn/provider-cloudflare.worker.WorkerPreviewsBaseConfigTailConsumersOutputReference.getListAttribute"></a>

```go
func GetListAttribute(terraformAttribute *string) *[]*string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-cloudflare.worker.WorkerPreviewsBaseConfigTailConsumersOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberAttribute` <a name="GetNumberAttribute" id="@cdktn/provider-cloudflare.worker.WorkerPreviewsBaseConfigTailConsumersOutputReference.getNumberAttribute"></a>

```go
func GetNumberAttribute(terraformAttribute *string) *f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-cloudflare.worker.WorkerPreviewsBaseConfigTailConsumersOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberListAttribute` <a name="GetNumberListAttribute" id="@cdktn/provider-cloudflare.worker.WorkerPreviewsBaseConfigTailConsumersOutputReference.getNumberListAttribute"></a>

```go
func GetNumberListAttribute(terraformAttribute *string) *[]*f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-cloudflare.worker.WorkerPreviewsBaseConfigTailConsumersOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberMapAttribute` <a name="GetNumberMapAttribute" id="@cdktn/provider-cloudflare.worker.WorkerPreviewsBaseConfigTailConsumersOutputReference.getNumberMapAttribute"></a>

```go
func GetNumberMapAttribute(terraformAttribute *string) *map[string]*f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-cloudflare.worker.WorkerPreviewsBaseConfigTailConsumersOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetStringAttribute` <a name="GetStringAttribute" id="@cdktn/provider-cloudflare.worker.WorkerPreviewsBaseConfigTailConsumersOutputReference.getStringAttribute"></a>

```go
func GetStringAttribute(terraformAttribute *string) *string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-cloudflare.worker.WorkerPreviewsBaseConfigTailConsumersOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetStringMapAttribute` <a name="GetStringMapAttribute" id="@cdktn/provider-cloudflare.worker.WorkerPreviewsBaseConfigTailConsumersOutputReference.getStringMapAttribute"></a>

```go
func GetStringMapAttribute(terraformAttribute *string) *map[string]*string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-cloudflare.worker.WorkerPreviewsBaseConfigTailConsumersOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `InterpolationForAttribute` <a name="InterpolationForAttribute" id="@cdktn/provider-cloudflare.worker.WorkerPreviewsBaseConfigTailConsumersOutputReference.interpolationForAttribute"></a>

```go
func InterpolationForAttribute(property *string) IResolvable
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktn/provider-cloudflare.worker.WorkerPreviewsBaseConfigTailConsumersOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* *string

---

##### `Resolve` <a name="Resolve" id="@cdktn/provider-cloudflare.worker.WorkerPreviewsBaseConfigTailConsumersOutputReference.resolve"></a>

```go
func Resolve(_context IResolveContext) interface{}
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktn/provider-cloudflare.worker.WorkerPreviewsBaseConfigTailConsumersOutputReference.resolve.parameter._context"></a>

- *Type:* github.com/open-constructs/cdk-terrain-go/cdktn.IResolveContext

---

##### `ToString` <a name="ToString" id="@cdktn/provider-cloudflare.worker.WorkerPreviewsBaseConfigTailConsumersOutputReference.toString"></a>

```go
func ToString() *string
```

Return a string representation of this resolvable object.

Returns a reversible string representation.


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-cloudflare.worker.WorkerPreviewsBaseConfigTailConsumersOutputReference.property.creationStack">CreationStack</a></code> | <code>*[]*string</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktn/provider-cloudflare.worker.WorkerPreviewsBaseConfigTailConsumersOutputReference.property.fqn">Fqn</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktn/provider-cloudflare.worker.WorkerPreviewsBaseConfigTailConsumersOutputReference.property.nameInput">NameInput</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktn/provider-cloudflare.worker.WorkerPreviewsBaseConfigTailConsumersOutputReference.property.name">Name</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktn/provider-cloudflare.worker.WorkerPreviewsBaseConfigTailConsumersOutputReference.property.internalValue">InternalValue</a></code> | <code>interface{}</code> | *No description.* |

---

##### `CreationStack`<sup>Required</sup> <a name="CreationStack" id="@cdktn/provider-cloudflare.worker.WorkerPreviewsBaseConfigTailConsumersOutputReference.property.creationStack"></a>

```go
func CreationStack() *[]*string
```

- *Type:* *[]*string

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `Fqn`<sup>Required</sup> <a name="Fqn" id="@cdktn/provider-cloudflare.worker.WorkerPreviewsBaseConfigTailConsumersOutputReference.property.fqn"></a>

```go
func Fqn() *string
```

- *Type:* *string

---

##### `NameInput`<sup>Optional</sup> <a name="NameInput" id="@cdktn/provider-cloudflare.worker.WorkerPreviewsBaseConfigTailConsumersOutputReference.property.nameInput"></a>

```go
func NameInput() *string
```

- *Type:* *string

---

##### `Name`<sup>Required</sup> <a name="Name" id="@cdktn/provider-cloudflare.worker.WorkerPreviewsBaseConfigTailConsumersOutputReference.property.name"></a>

```go
func Name() *string
```

- *Type:* *string

---

##### `InternalValue`<sup>Optional</sup> <a name="InternalValue" id="@cdktn/provider-cloudflare.worker.WorkerPreviewsBaseConfigTailConsumersOutputReference.property.internalValue"></a>

```go
func InternalValue() interface{}
```

- *Type:* interface{}

---


### WorkerReferencesDispatchNamespaceOutboundsList <a name="WorkerReferencesDispatchNamespaceOutboundsList" id="@cdktn/provider-cloudflare.worker.WorkerReferencesDispatchNamespaceOutboundsList"></a>

#### Initializers <a name="Initializers" id="@cdktn/provider-cloudflare.worker.WorkerReferencesDispatchNamespaceOutboundsList.Initializer"></a>

```go
import "github.com/cdktn-io/cdktn-provider-cloudflare-go/cloudflare/v16/worker"

worker.NewWorkerReferencesDispatchNamespaceOutboundsList(terraformResource IInterpolatingParent, terraformAttribute *string, wrapsSet *bool) WorkerReferencesDispatchNamespaceOutboundsList
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-cloudflare.worker.WorkerReferencesDispatchNamespaceOutboundsList.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>github.com/open-constructs/cdk-terrain-go/cdktn.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktn/provider-cloudflare.worker.WorkerReferencesDispatchNamespaceOutboundsList.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>*string</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#@cdktn/provider-cloudflare.worker.WorkerReferencesDispatchNamespaceOutboundsList.Initializer.parameter.wrapsSet">wrapsSet</a></code> | <code>*bool</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktn/provider-cloudflare.worker.WorkerReferencesDispatchNamespaceOutboundsList.Initializer.parameter.terraformResource"></a>

- *Type:* github.com/open-constructs/cdk-terrain-go/cdktn.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-cloudflare.worker.WorkerReferencesDispatchNamespaceOutboundsList.Initializer.parameter.terraformAttribute"></a>

- *Type:* *string

The attribute on the parent resource this class is referencing.

---

##### `wrapsSet`<sup>Required</sup> <a name="wrapsSet" id="@cdktn/provider-cloudflare.worker.WorkerReferencesDispatchNamespaceOutboundsList.Initializer.parameter.wrapsSet"></a>

- *Type:* *bool

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-cloudflare.worker.WorkerReferencesDispatchNamespaceOutboundsList.allWithMapKey">AllWithMapKey</a></code> | Creating an iterator for this complex list. |
| <code><a href="#@cdktn/provider-cloudflare.worker.WorkerReferencesDispatchNamespaceOutboundsList.computeFqn">ComputeFqn</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-cloudflare.worker.WorkerReferencesDispatchNamespaceOutboundsList.resolve">Resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktn/provider-cloudflare.worker.WorkerReferencesDispatchNamespaceOutboundsList.toString">ToString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktn/provider-cloudflare.worker.WorkerReferencesDispatchNamespaceOutboundsList.get">Get</a></code> | *No description.* |

---

##### `AllWithMapKey` <a name="AllWithMapKey" id="@cdktn/provider-cloudflare.worker.WorkerReferencesDispatchNamespaceOutboundsList.allWithMapKey"></a>

```go
func AllWithMapKey(mapKeyAttributeName *string) DynamicListTerraformIterator
```

Creating an iterator for this complex list.

The list will be converted into a map with the mapKeyAttributeName as the key.

###### `mapKeyAttributeName`<sup>Required</sup> <a name="mapKeyAttributeName" id="@cdktn/provider-cloudflare.worker.WorkerReferencesDispatchNamespaceOutboundsList.allWithMapKey.parameter.mapKeyAttributeName"></a>

- *Type:* *string

---

##### `ComputeFqn` <a name="ComputeFqn" id="@cdktn/provider-cloudflare.worker.WorkerReferencesDispatchNamespaceOutboundsList.computeFqn"></a>

```go
func ComputeFqn() *string
```

##### `Resolve` <a name="Resolve" id="@cdktn/provider-cloudflare.worker.WorkerReferencesDispatchNamespaceOutboundsList.resolve"></a>

```go
func Resolve(_context IResolveContext) interface{}
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktn/provider-cloudflare.worker.WorkerReferencesDispatchNamespaceOutboundsList.resolve.parameter._context"></a>

- *Type:* github.com/open-constructs/cdk-terrain-go/cdktn.IResolveContext

---

##### `ToString` <a name="ToString" id="@cdktn/provider-cloudflare.worker.WorkerReferencesDispatchNamespaceOutboundsList.toString"></a>

```go
func ToString() *string
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `Get` <a name="Get" id="@cdktn/provider-cloudflare.worker.WorkerReferencesDispatchNamespaceOutboundsList.get"></a>

```go
func Get(index *f64) WorkerReferencesDispatchNamespaceOutboundsOutputReference
```

###### `index`<sup>Required</sup> <a name="index" id="@cdktn/provider-cloudflare.worker.WorkerReferencesDispatchNamespaceOutboundsList.get.parameter.index"></a>

- *Type:* *f64

the index of the item to return.

---


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-cloudflare.worker.WorkerReferencesDispatchNamespaceOutboundsList.property.creationStack">CreationStack</a></code> | <code>*[]*string</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktn/provider-cloudflare.worker.WorkerReferencesDispatchNamespaceOutboundsList.property.fqn">Fqn</a></code> | <code>*string</code> | *No description.* |

---

##### `CreationStack`<sup>Required</sup> <a name="CreationStack" id="@cdktn/provider-cloudflare.worker.WorkerReferencesDispatchNamespaceOutboundsList.property.creationStack"></a>

```go
func CreationStack() *[]*string
```

- *Type:* *[]*string

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `Fqn`<sup>Required</sup> <a name="Fqn" id="@cdktn/provider-cloudflare.worker.WorkerReferencesDispatchNamespaceOutboundsList.property.fqn"></a>

```go
func Fqn() *string
```

- *Type:* *string

---


### WorkerReferencesDispatchNamespaceOutboundsOutputReference <a name="WorkerReferencesDispatchNamespaceOutboundsOutputReference" id="@cdktn/provider-cloudflare.worker.WorkerReferencesDispatchNamespaceOutboundsOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktn/provider-cloudflare.worker.WorkerReferencesDispatchNamespaceOutboundsOutputReference.Initializer"></a>

```go
import "github.com/cdktn-io/cdktn-provider-cloudflare-go/cloudflare/v16/worker"

worker.NewWorkerReferencesDispatchNamespaceOutboundsOutputReference(terraformResource IInterpolatingParent, terraformAttribute *string, complexObjectIndex *f64, complexObjectIsFromSet *bool) WorkerReferencesDispatchNamespaceOutboundsOutputReference
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-cloudflare.worker.WorkerReferencesDispatchNamespaceOutboundsOutputReference.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>github.com/open-constructs/cdk-terrain-go/cdktn.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktn/provider-cloudflare.worker.WorkerReferencesDispatchNamespaceOutboundsOutputReference.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>*string</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#@cdktn/provider-cloudflare.worker.WorkerReferencesDispatchNamespaceOutboundsOutputReference.Initializer.parameter.complexObjectIndex">complexObjectIndex</a></code> | <code>*f64</code> | the index of this item in the list. |
| <code><a href="#@cdktn/provider-cloudflare.worker.WorkerReferencesDispatchNamespaceOutboundsOutputReference.Initializer.parameter.complexObjectIsFromSet">complexObjectIsFromSet</a></code> | <code>*bool</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktn/provider-cloudflare.worker.WorkerReferencesDispatchNamespaceOutboundsOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* github.com/open-constructs/cdk-terrain-go/cdktn.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-cloudflare.worker.WorkerReferencesDispatchNamespaceOutboundsOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* *string

The attribute on the parent resource this class is referencing.

---

##### `complexObjectIndex`<sup>Required</sup> <a name="complexObjectIndex" id="@cdktn/provider-cloudflare.worker.WorkerReferencesDispatchNamespaceOutboundsOutputReference.Initializer.parameter.complexObjectIndex"></a>

- *Type:* *f64

the index of this item in the list.

---

##### `complexObjectIsFromSet`<sup>Required</sup> <a name="complexObjectIsFromSet" id="@cdktn/provider-cloudflare.worker.WorkerReferencesDispatchNamespaceOutboundsOutputReference.Initializer.parameter.complexObjectIsFromSet"></a>

- *Type:* *bool

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-cloudflare.worker.WorkerReferencesDispatchNamespaceOutboundsOutputReference.computeFqn">ComputeFqn</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-cloudflare.worker.WorkerReferencesDispatchNamespaceOutboundsOutputReference.getAnyMapAttribute">GetAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-cloudflare.worker.WorkerReferencesDispatchNamespaceOutboundsOutputReference.getBooleanAttribute">GetBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-cloudflare.worker.WorkerReferencesDispatchNamespaceOutboundsOutputReference.getBooleanMapAttribute">GetBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-cloudflare.worker.WorkerReferencesDispatchNamespaceOutboundsOutputReference.getListAttribute">GetListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-cloudflare.worker.WorkerReferencesDispatchNamespaceOutboundsOutputReference.getNumberAttribute">GetNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-cloudflare.worker.WorkerReferencesDispatchNamespaceOutboundsOutputReference.getNumberListAttribute">GetNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-cloudflare.worker.WorkerReferencesDispatchNamespaceOutboundsOutputReference.getNumberMapAttribute">GetNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-cloudflare.worker.WorkerReferencesDispatchNamespaceOutboundsOutputReference.getStringAttribute">GetStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-cloudflare.worker.WorkerReferencesDispatchNamespaceOutboundsOutputReference.getStringMapAttribute">GetStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-cloudflare.worker.WorkerReferencesDispatchNamespaceOutboundsOutputReference.interpolationForAttribute">InterpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-cloudflare.worker.WorkerReferencesDispatchNamespaceOutboundsOutputReference.resolve">Resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktn/provider-cloudflare.worker.WorkerReferencesDispatchNamespaceOutboundsOutputReference.toString">ToString</a></code> | Return a string representation of this resolvable object. |

---

##### `ComputeFqn` <a name="ComputeFqn" id="@cdktn/provider-cloudflare.worker.WorkerReferencesDispatchNamespaceOutboundsOutputReference.computeFqn"></a>

```go
func ComputeFqn() *string
```

##### `GetAnyMapAttribute` <a name="GetAnyMapAttribute" id="@cdktn/provider-cloudflare.worker.WorkerReferencesDispatchNamespaceOutboundsOutputReference.getAnyMapAttribute"></a>

```go
func GetAnyMapAttribute(terraformAttribute *string) *map[string]interface{}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-cloudflare.worker.WorkerReferencesDispatchNamespaceOutboundsOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetBooleanAttribute` <a name="GetBooleanAttribute" id="@cdktn/provider-cloudflare.worker.WorkerReferencesDispatchNamespaceOutboundsOutputReference.getBooleanAttribute"></a>

```go
func GetBooleanAttribute(terraformAttribute *string) IResolvable
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-cloudflare.worker.WorkerReferencesDispatchNamespaceOutboundsOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetBooleanMapAttribute` <a name="GetBooleanMapAttribute" id="@cdktn/provider-cloudflare.worker.WorkerReferencesDispatchNamespaceOutboundsOutputReference.getBooleanMapAttribute"></a>

```go
func GetBooleanMapAttribute(terraformAttribute *string) *map[string]*bool
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-cloudflare.worker.WorkerReferencesDispatchNamespaceOutboundsOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetListAttribute` <a name="GetListAttribute" id="@cdktn/provider-cloudflare.worker.WorkerReferencesDispatchNamespaceOutboundsOutputReference.getListAttribute"></a>

```go
func GetListAttribute(terraformAttribute *string) *[]*string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-cloudflare.worker.WorkerReferencesDispatchNamespaceOutboundsOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberAttribute` <a name="GetNumberAttribute" id="@cdktn/provider-cloudflare.worker.WorkerReferencesDispatchNamespaceOutboundsOutputReference.getNumberAttribute"></a>

```go
func GetNumberAttribute(terraformAttribute *string) *f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-cloudflare.worker.WorkerReferencesDispatchNamespaceOutboundsOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberListAttribute` <a name="GetNumberListAttribute" id="@cdktn/provider-cloudflare.worker.WorkerReferencesDispatchNamespaceOutboundsOutputReference.getNumberListAttribute"></a>

```go
func GetNumberListAttribute(terraformAttribute *string) *[]*f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-cloudflare.worker.WorkerReferencesDispatchNamespaceOutboundsOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberMapAttribute` <a name="GetNumberMapAttribute" id="@cdktn/provider-cloudflare.worker.WorkerReferencesDispatchNamespaceOutboundsOutputReference.getNumberMapAttribute"></a>

```go
func GetNumberMapAttribute(terraformAttribute *string) *map[string]*f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-cloudflare.worker.WorkerReferencesDispatchNamespaceOutboundsOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetStringAttribute` <a name="GetStringAttribute" id="@cdktn/provider-cloudflare.worker.WorkerReferencesDispatchNamespaceOutboundsOutputReference.getStringAttribute"></a>

```go
func GetStringAttribute(terraformAttribute *string) *string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-cloudflare.worker.WorkerReferencesDispatchNamespaceOutboundsOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetStringMapAttribute` <a name="GetStringMapAttribute" id="@cdktn/provider-cloudflare.worker.WorkerReferencesDispatchNamespaceOutboundsOutputReference.getStringMapAttribute"></a>

```go
func GetStringMapAttribute(terraformAttribute *string) *map[string]*string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-cloudflare.worker.WorkerReferencesDispatchNamespaceOutboundsOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `InterpolationForAttribute` <a name="InterpolationForAttribute" id="@cdktn/provider-cloudflare.worker.WorkerReferencesDispatchNamespaceOutboundsOutputReference.interpolationForAttribute"></a>

```go
func InterpolationForAttribute(property *string) IResolvable
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktn/provider-cloudflare.worker.WorkerReferencesDispatchNamespaceOutboundsOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* *string

---

##### `Resolve` <a name="Resolve" id="@cdktn/provider-cloudflare.worker.WorkerReferencesDispatchNamespaceOutboundsOutputReference.resolve"></a>

```go
func Resolve(_context IResolveContext) interface{}
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktn/provider-cloudflare.worker.WorkerReferencesDispatchNamespaceOutboundsOutputReference.resolve.parameter._context"></a>

- *Type:* github.com/open-constructs/cdk-terrain-go/cdktn.IResolveContext

---

##### `ToString` <a name="ToString" id="@cdktn/provider-cloudflare.worker.WorkerReferencesDispatchNamespaceOutboundsOutputReference.toString"></a>

```go
func ToString() *string
```

Return a string representation of this resolvable object.

Returns a reversible string representation.


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-cloudflare.worker.WorkerReferencesDispatchNamespaceOutboundsOutputReference.property.creationStack">CreationStack</a></code> | <code>*[]*string</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktn/provider-cloudflare.worker.WorkerReferencesDispatchNamespaceOutboundsOutputReference.property.fqn">Fqn</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktn/provider-cloudflare.worker.WorkerReferencesDispatchNamespaceOutboundsOutputReference.property.namespaceId">NamespaceId</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktn/provider-cloudflare.worker.WorkerReferencesDispatchNamespaceOutboundsOutputReference.property.namespaceName">NamespaceName</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktn/provider-cloudflare.worker.WorkerReferencesDispatchNamespaceOutboundsOutputReference.property.workerId">WorkerId</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktn/provider-cloudflare.worker.WorkerReferencesDispatchNamespaceOutboundsOutputReference.property.workerName">WorkerName</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktn/provider-cloudflare.worker.WorkerReferencesDispatchNamespaceOutboundsOutputReference.property.internalValue">InternalValue</a></code> | <code><a href="#@cdktn/provider-cloudflare.worker.WorkerReferencesDispatchNamespaceOutbounds">WorkerReferencesDispatchNamespaceOutbounds</a></code> | *No description.* |

---

##### `CreationStack`<sup>Required</sup> <a name="CreationStack" id="@cdktn/provider-cloudflare.worker.WorkerReferencesDispatchNamespaceOutboundsOutputReference.property.creationStack"></a>

```go
func CreationStack() *[]*string
```

- *Type:* *[]*string

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `Fqn`<sup>Required</sup> <a name="Fqn" id="@cdktn/provider-cloudflare.worker.WorkerReferencesDispatchNamespaceOutboundsOutputReference.property.fqn"></a>

```go
func Fqn() *string
```

- *Type:* *string

---

##### `NamespaceId`<sup>Required</sup> <a name="NamespaceId" id="@cdktn/provider-cloudflare.worker.WorkerReferencesDispatchNamespaceOutboundsOutputReference.property.namespaceId"></a>

```go
func NamespaceId() *string
```

- *Type:* *string

---

##### `NamespaceName`<sup>Required</sup> <a name="NamespaceName" id="@cdktn/provider-cloudflare.worker.WorkerReferencesDispatchNamespaceOutboundsOutputReference.property.namespaceName"></a>

```go
func NamespaceName() *string
```

- *Type:* *string

---

##### `WorkerId`<sup>Required</sup> <a name="WorkerId" id="@cdktn/provider-cloudflare.worker.WorkerReferencesDispatchNamespaceOutboundsOutputReference.property.workerId"></a>

```go
func WorkerId() *string
```

- *Type:* *string

---

##### `WorkerName`<sup>Required</sup> <a name="WorkerName" id="@cdktn/provider-cloudflare.worker.WorkerReferencesDispatchNamespaceOutboundsOutputReference.property.workerName"></a>

```go
func WorkerName() *string
```

- *Type:* *string

---

##### `InternalValue`<sup>Optional</sup> <a name="InternalValue" id="@cdktn/provider-cloudflare.worker.WorkerReferencesDispatchNamespaceOutboundsOutputReference.property.internalValue"></a>

```go
func InternalValue() WorkerReferencesDispatchNamespaceOutbounds
```

- *Type:* <a href="#@cdktn/provider-cloudflare.worker.WorkerReferencesDispatchNamespaceOutbounds">WorkerReferencesDispatchNamespaceOutbounds</a>

---


### WorkerReferencesDomainsList <a name="WorkerReferencesDomainsList" id="@cdktn/provider-cloudflare.worker.WorkerReferencesDomainsList"></a>

#### Initializers <a name="Initializers" id="@cdktn/provider-cloudflare.worker.WorkerReferencesDomainsList.Initializer"></a>

```go
import "github.com/cdktn-io/cdktn-provider-cloudflare-go/cloudflare/v16/worker"

worker.NewWorkerReferencesDomainsList(terraformResource IInterpolatingParent, terraformAttribute *string, wrapsSet *bool) WorkerReferencesDomainsList
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-cloudflare.worker.WorkerReferencesDomainsList.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>github.com/open-constructs/cdk-terrain-go/cdktn.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktn/provider-cloudflare.worker.WorkerReferencesDomainsList.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>*string</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#@cdktn/provider-cloudflare.worker.WorkerReferencesDomainsList.Initializer.parameter.wrapsSet">wrapsSet</a></code> | <code>*bool</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktn/provider-cloudflare.worker.WorkerReferencesDomainsList.Initializer.parameter.terraformResource"></a>

- *Type:* github.com/open-constructs/cdk-terrain-go/cdktn.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-cloudflare.worker.WorkerReferencesDomainsList.Initializer.parameter.terraformAttribute"></a>

- *Type:* *string

The attribute on the parent resource this class is referencing.

---

##### `wrapsSet`<sup>Required</sup> <a name="wrapsSet" id="@cdktn/provider-cloudflare.worker.WorkerReferencesDomainsList.Initializer.parameter.wrapsSet"></a>

- *Type:* *bool

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-cloudflare.worker.WorkerReferencesDomainsList.allWithMapKey">AllWithMapKey</a></code> | Creating an iterator for this complex list. |
| <code><a href="#@cdktn/provider-cloudflare.worker.WorkerReferencesDomainsList.computeFqn">ComputeFqn</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-cloudflare.worker.WorkerReferencesDomainsList.resolve">Resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktn/provider-cloudflare.worker.WorkerReferencesDomainsList.toString">ToString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktn/provider-cloudflare.worker.WorkerReferencesDomainsList.get">Get</a></code> | *No description.* |

---

##### `AllWithMapKey` <a name="AllWithMapKey" id="@cdktn/provider-cloudflare.worker.WorkerReferencesDomainsList.allWithMapKey"></a>

```go
func AllWithMapKey(mapKeyAttributeName *string) DynamicListTerraformIterator
```

Creating an iterator for this complex list.

The list will be converted into a map with the mapKeyAttributeName as the key.

###### `mapKeyAttributeName`<sup>Required</sup> <a name="mapKeyAttributeName" id="@cdktn/provider-cloudflare.worker.WorkerReferencesDomainsList.allWithMapKey.parameter.mapKeyAttributeName"></a>

- *Type:* *string

---

##### `ComputeFqn` <a name="ComputeFqn" id="@cdktn/provider-cloudflare.worker.WorkerReferencesDomainsList.computeFqn"></a>

```go
func ComputeFqn() *string
```

##### `Resolve` <a name="Resolve" id="@cdktn/provider-cloudflare.worker.WorkerReferencesDomainsList.resolve"></a>

```go
func Resolve(_context IResolveContext) interface{}
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktn/provider-cloudflare.worker.WorkerReferencesDomainsList.resolve.parameter._context"></a>

- *Type:* github.com/open-constructs/cdk-terrain-go/cdktn.IResolveContext

---

##### `ToString` <a name="ToString" id="@cdktn/provider-cloudflare.worker.WorkerReferencesDomainsList.toString"></a>

```go
func ToString() *string
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `Get` <a name="Get" id="@cdktn/provider-cloudflare.worker.WorkerReferencesDomainsList.get"></a>

```go
func Get(index *f64) WorkerReferencesDomainsOutputReference
```

###### `index`<sup>Required</sup> <a name="index" id="@cdktn/provider-cloudflare.worker.WorkerReferencesDomainsList.get.parameter.index"></a>

- *Type:* *f64

the index of the item to return.

---


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-cloudflare.worker.WorkerReferencesDomainsList.property.creationStack">CreationStack</a></code> | <code>*[]*string</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktn/provider-cloudflare.worker.WorkerReferencesDomainsList.property.fqn">Fqn</a></code> | <code>*string</code> | *No description.* |

---

##### `CreationStack`<sup>Required</sup> <a name="CreationStack" id="@cdktn/provider-cloudflare.worker.WorkerReferencesDomainsList.property.creationStack"></a>

```go
func CreationStack() *[]*string
```

- *Type:* *[]*string

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `Fqn`<sup>Required</sup> <a name="Fqn" id="@cdktn/provider-cloudflare.worker.WorkerReferencesDomainsList.property.fqn"></a>

```go
func Fqn() *string
```

- *Type:* *string

---


### WorkerReferencesDomainsOutputReference <a name="WorkerReferencesDomainsOutputReference" id="@cdktn/provider-cloudflare.worker.WorkerReferencesDomainsOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktn/provider-cloudflare.worker.WorkerReferencesDomainsOutputReference.Initializer"></a>

```go
import "github.com/cdktn-io/cdktn-provider-cloudflare-go/cloudflare/v16/worker"

worker.NewWorkerReferencesDomainsOutputReference(terraformResource IInterpolatingParent, terraformAttribute *string, complexObjectIndex *f64, complexObjectIsFromSet *bool) WorkerReferencesDomainsOutputReference
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-cloudflare.worker.WorkerReferencesDomainsOutputReference.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>github.com/open-constructs/cdk-terrain-go/cdktn.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktn/provider-cloudflare.worker.WorkerReferencesDomainsOutputReference.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>*string</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#@cdktn/provider-cloudflare.worker.WorkerReferencesDomainsOutputReference.Initializer.parameter.complexObjectIndex">complexObjectIndex</a></code> | <code>*f64</code> | the index of this item in the list. |
| <code><a href="#@cdktn/provider-cloudflare.worker.WorkerReferencesDomainsOutputReference.Initializer.parameter.complexObjectIsFromSet">complexObjectIsFromSet</a></code> | <code>*bool</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktn/provider-cloudflare.worker.WorkerReferencesDomainsOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* github.com/open-constructs/cdk-terrain-go/cdktn.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-cloudflare.worker.WorkerReferencesDomainsOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* *string

The attribute on the parent resource this class is referencing.

---

##### `complexObjectIndex`<sup>Required</sup> <a name="complexObjectIndex" id="@cdktn/provider-cloudflare.worker.WorkerReferencesDomainsOutputReference.Initializer.parameter.complexObjectIndex"></a>

- *Type:* *f64

the index of this item in the list.

---

##### `complexObjectIsFromSet`<sup>Required</sup> <a name="complexObjectIsFromSet" id="@cdktn/provider-cloudflare.worker.WorkerReferencesDomainsOutputReference.Initializer.parameter.complexObjectIsFromSet"></a>

- *Type:* *bool

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-cloudflare.worker.WorkerReferencesDomainsOutputReference.computeFqn">ComputeFqn</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-cloudflare.worker.WorkerReferencesDomainsOutputReference.getAnyMapAttribute">GetAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-cloudflare.worker.WorkerReferencesDomainsOutputReference.getBooleanAttribute">GetBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-cloudflare.worker.WorkerReferencesDomainsOutputReference.getBooleanMapAttribute">GetBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-cloudflare.worker.WorkerReferencesDomainsOutputReference.getListAttribute">GetListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-cloudflare.worker.WorkerReferencesDomainsOutputReference.getNumberAttribute">GetNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-cloudflare.worker.WorkerReferencesDomainsOutputReference.getNumberListAttribute">GetNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-cloudflare.worker.WorkerReferencesDomainsOutputReference.getNumberMapAttribute">GetNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-cloudflare.worker.WorkerReferencesDomainsOutputReference.getStringAttribute">GetStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-cloudflare.worker.WorkerReferencesDomainsOutputReference.getStringMapAttribute">GetStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-cloudflare.worker.WorkerReferencesDomainsOutputReference.interpolationForAttribute">InterpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-cloudflare.worker.WorkerReferencesDomainsOutputReference.resolve">Resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktn/provider-cloudflare.worker.WorkerReferencesDomainsOutputReference.toString">ToString</a></code> | Return a string representation of this resolvable object. |

---

##### `ComputeFqn` <a name="ComputeFqn" id="@cdktn/provider-cloudflare.worker.WorkerReferencesDomainsOutputReference.computeFqn"></a>

```go
func ComputeFqn() *string
```

##### `GetAnyMapAttribute` <a name="GetAnyMapAttribute" id="@cdktn/provider-cloudflare.worker.WorkerReferencesDomainsOutputReference.getAnyMapAttribute"></a>

```go
func GetAnyMapAttribute(terraformAttribute *string) *map[string]interface{}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-cloudflare.worker.WorkerReferencesDomainsOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetBooleanAttribute` <a name="GetBooleanAttribute" id="@cdktn/provider-cloudflare.worker.WorkerReferencesDomainsOutputReference.getBooleanAttribute"></a>

```go
func GetBooleanAttribute(terraformAttribute *string) IResolvable
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-cloudflare.worker.WorkerReferencesDomainsOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetBooleanMapAttribute` <a name="GetBooleanMapAttribute" id="@cdktn/provider-cloudflare.worker.WorkerReferencesDomainsOutputReference.getBooleanMapAttribute"></a>

```go
func GetBooleanMapAttribute(terraformAttribute *string) *map[string]*bool
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-cloudflare.worker.WorkerReferencesDomainsOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetListAttribute` <a name="GetListAttribute" id="@cdktn/provider-cloudflare.worker.WorkerReferencesDomainsOutputReference.getListAttribute"></a>

```go
func GetListAttribute(terraformAttribute *string) *[]*string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-cloudflare.worker.WorkerReferencesDomainsOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberAttribute` <a name="GetNumberAttribute" id="@cdktn/provider-cloudflare.worker.WorkerReferencesDomainsOutputReference.getNumberAttribute"></a>

```go
func GetNumberAttribute(terraformAttribute *string) *f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-cloudflare.worker.WorkerReferencesDomainsOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberListAttribute` <a name="GetNumberListAttribute" id="@cdktn/provider-cloudflare.worker.WorkerReferencesDomainsOutputReference.getNumberListAttribute"></a>

```go
func GetNumberListAttribute(terraformAttribute *string) *[]*f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-cloudflare.worker.WorkerReferencesDomainsOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberMapAttribute` <a name="GetNumberMapAttribute" id="@cdktn/provider-cloudflare.worker.WorkerReferencesDomainsOutputReference.getNumberMapAttribute"></a>

```go
func GetNumberMapAttribute(terraformAttribute *string) *map[string]*f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-cloudflare.worker.WorkerReferencesDomainsOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetStringAttribute` <a name="GetStringAttribute" id="@cdktn/provider-cloudflare.worker.WorkerReferencesDomainsOutputReference.getStringAttribute"></a>

```go
func GetStringAttribute(terraformAttribute *string) *string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-cloudflare.worker.WorkerReferencesDomainsOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetStringMapAttribute` <a name="GetStringMapAttribute" id="@cdktn/provider-cloudflare.worker.WorkerReferencesDomainsOutputReference.getStringMapAttribute"></a>

```go
func GetStringMapAttribute(terraformAttribute *string) *map[string]*string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-cloudflare.worker.WorkerReferencesDomainsOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `InterpolationForAttribute` <a name="InterpolationForAttribute" id="@cdktn/provider-cloudflare.worker.WorkerReferencesDomainsOutputReference.interpolationForAttribute"></a>

```go
func InterpolationForAttribute(property *string) IResolvable
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktn/provider-cloudflare.worker.WorkerReferencesDomainsOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* *string

---

##### `Resolve` <a name="Resolve" id="@cdktn/provider-cloudflare.worker.WorkerReferencesDomainsOutputReference.resolve"></a>

```go
func Resolve(_context IResolveContext) interface{}
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktn/provider-cloudflare.worker.WorkerReferencesDomainsOutputReference.resolve.parameter._context"></a>

- *Type:* github.com/open-constructs/cdk-terrain-go/cdktn.IResolveContext

---

##### `ToString` <a name="ToString" id="@cdktn/provider-cloudflare.worker.WorkerReferencesDomainsOutputReference.toString"></a>

```go
func ToString() *string
```

Return a string representation of this resolvable object.

Returns a reversible string representation.


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-cloudflare.worker.WorkerReferencesDomainsOutputReference.property.creationStack">CreationStack</a></code> | <code>*[]*string</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktn/provider-cloudflare.worker.WorkerReferencesDomainsOutputReference.property.fqn">Fqn</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktn/provider-cloudflare.worker.WorkerReferencesDomainsOutputReference.property.certificateId">CertificateId</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktn/provider-cloudflare.worker.WorkerReferencesDomainsOutputReference.property.hostname">Hostname</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktn/provider-cloudflare.worker.WorkerReferencesDomainsOutputReference.property.id">Id</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktn/provider-cloudflare.worker.WorkerReferencesDomainsOutputReference.property.zoneId">ZoneId</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktn/provider-cloudflare.worker.WorkerReferencesDomainsOutputReference.property.zoneName">ZoneName</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktn/provider-cloudflare.worker.WorkerReferencesDomainsOutputReference.property.internalValue">InternalValue</a></code> | <code><a href="#@cdktn/provider-cloudflare.worker.WorkerReferencesDomains">WorkerReferencesDomains</a></code> | *No description.* |

---

##### `CreationStack`<sup>Required</sup> <a name="CreationStack" id="@cdktn/provider-cloudflare.worker.WorkerReferencesDomainsOutputReference.property.creationStack"></a>

```go
func CreationStack() *[]*string
```

- *Type:* *[]*string

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `Fqn`<sup>Required</sup> <a name="Fqn" id="@cdktn/provider-cloudflare.worker.WorkerReferencesDomainsOutputReference.property.fqn"></a>

```go
func Fqn() *string
```

- *Type:* *string

---

##### `CertificateId`<sup>Required</sup> <a name="CertificateId" id="@cdktn/provider-cloudflare.worker.WorkerReferencesDomainsOutputReference.property.certificateId"></a>

```go
func CertificateId() *string
```

- *Type:* *string

---

##### `Hostname`<sup>Required</sup> <a name="Hostname" id="@cdktn/provider-cloudflare.worker.WorkerReferencesDomainsOutputReference.property.hostname"></a>

```go
func Hostname() *string
```

- *Type:* *string

---

##### `Id`<sup>Required</sup> <a name="Id" id="@cdktn/provider-cloudflare.worker.WorkerReferencesDomainsOutputReference.property.id"></a>

```go
func Id() *string
```

- *Type:* *string

---

##### `ZoneId`<sup>Required</sup> <a name="ZoneId" id="@cdktn/provider-cloudflare.worker.WorkerReferencesDomainsOutputReference.property.zoneId"></a>

```go
func ZoneId() *string
```

- *Type:* *string

---

##### `ZoneName`<sup>Required</sup> <a name="ZoneName" id="@cdktn/provider-cloudflare.worker.WorkerReferencesDomainsOutputReference.property.zoneName"></a>

```go
func ZoneName() *string
```

- *Type:* *string

---

##### `InternalValue`<sup>Optional</sup> <a name="InternalValue" id="@cdktn/provider-cloudflare.worker.WorkerReferencesDomainsOutputReference.property.internalValue"></a>

```go
func InternalValue() WorkerReferencesDomains
```

- *Type:* <a href="#@cdktn/provider-cloudflare.worker.WorkerReferencesDomains">WorkerReferencesDomains</a>

---


### WorkerReferencesDurableObjectsList <a name="WorkerReferencesDurableObjectsList" id="@cdktn/provider-cloudflare.worker.WorkerReferencesDurableObjectsList"></a>

#### Initializers <a name="Initializers" id="@cdktn/provider-cloudflare.worker.WorkerReferencesDurableObjectsList.Initializer"></a>

```go
import "github.com/cdktn-io/cdktn-provider-cloudflare-go/cloudflare/v16/worker"

worker.NewWorkerReferencesDurableObjectsList(terraformResource IInterpolatingParent, terraformAttribute *string, wrapsSet *bool) WorkerReferencesDurableObjectsList
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-cloudflare.worker.WorkerReferencesDurableObjectsList.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>github.com/open-constructs/cdk-terrain-go/cdktn.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktn/provider-cloudflare.worker.WorkerReferencesDurableObjectsList.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>*string</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#@cdktn/provider-cloudflare.worker.WorkerReferencesDurableObjectsList.Initializer.parameter.wrapsSet">wrapsSet</a></code> | <code>*bool</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktn/provider-cloudflare.worker.WorkerReferencesDurableObjectsList.Initializer.parameter.terraformResource"></a>

- *Type:* github.com/open-constructs/cdk-terrain-go/cdktn.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-cloudflare.worker.WorkerReferencesDurableObjectsList.Initializer.parameter.terraformAttribute"></a>

- *Type:* *string

The attribute on the parent resource this class is referencing.

---

##### `wrapsSet`<sup>Required</sup> <a name="wrapsSet" id="@cdktn/provider-cloudflare.worker.WorkerReferencesDurableObjectsList.Initializer.parameter.wrapsSet"></a>

- *Type:* *bool

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-cloudflare.worker.WorkerReferencesDurableObjectsList.allWithMapKey">AllWithMapKey</a></code> | Creating an iterator for this complex list. |
| <code><a href="#@cdktn/provider-cloudflare.worker.WorkerReferencesDurableObjectsList.computeFqn">ComputeFqn</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-cloudflare.worker.WorkerReferencesDurableObjectsList.resolve">Resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktn/provider-cloudflare.worker.WorkerReferencesDurableObjectsList.toString">ToString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktn/provider-cloudflare.worker.WorkerReferencesDurableObjectsList.get">Get</a></code> | *No description.* |

---

##### `AllWithMapKey` <a name="AllWithMapKey" id="@cdktn/provider-cloudflare.worker.WorkerReferencesDurableObjectsList.allWithMapKey"></a>

```go
func AllWithMapKey(mapKeyAttributeName *string) DynamicListTerraformIterator
```

Creating an iterator for this complex list.

The list will be converted into a map with the mapKeyAttributeName as the key.

###### `mapKeyAttributeName`<sup>Required</sup> <a name="mapKeyAttributeName" id="@cdktn/provider-cloudflare.worker.WorkerReferencesDurableObjectsList.allWithMapKey.parameter.mapKeyAttributeName"></a>

- *Type:* *string

---

##### `ComputeFqn` <a name="ComputeFqn" id="@cdktn/provider-cloudflare.worker.WorkerReferencesDurableObjectsList.computeFqn"></a>

```go
func ComputeFqn() *string
```

##### `Resolve` <a name="Resolve" id="@cdktn/provider-cloudflare.worker.WorkerReferencesDurableObjectsList.resolve"></a>

```go
func Resolve(_context IResolveContext) interface{}
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktn/provider-cloudflare.worker.WorkerReferencesDurableObjectsList.resolve.parameter._context"></a>

- *Type:* github.com/open-constructs/cdk-terrain-go/cdktn.IResolveContext

---

##### `ToString` <a name="ToString" id="@cdktn/provider-cloudflare.worker.WorkerReferencesDurableObjectsList.toString"></a>

```go
func ToString() *string
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `Get` <a name="Get" id="@cdktn/provider-cloudflare.worker.WorkerReferencesDurableObjectsList.get"></a>

```go
func Get(index *f64) WorkerReferencesDurableObjectsOutputReference
```

###### `index`<sup>Required</sup> <a name="index" id="@cdktn/provider-cloudflare.worker.WorkerReferencesDurableObjectsList.get.parameter.index"></a>

- *Type:* *f64

the index of the item to return.

---


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-cloudflare.worker.WorkerReferencesDurableObjectsList.property.creationStack">CreationStack</a></code> | <code>*[]*string</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktn/provider-cloudflare.worker.WorkerReferencesDurableObjectsList.property.fqn">Fqn</a></code> | <code>*string</code> | *No description.* |

---

##### `CreationStack`<sup>Required</sup> <a name="CreationStack" id="@cdktn/provider-cloudflare.worker.WorkerReferencesDurableObjectsList.property.creationStack"></a>

```go
func CreationStack() *[]*string
```

- *Type:* *[]*string

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `Fqn`<sup>Required</sup> <a name="Fqn" id="@cdktn/provider-cloudflare.worker.WorkerReferencesDurableObjectsList.property.fqn"></a>

```go
func Fqn() *string
```

- *Type:* *string

---


### WorkerReferencesDurableObjectsOutputReference <a name="WorkerReferencesDurableObjectsOutputReference" id="@cdktn/provider-cloudflare.worker.WorkerReferencesDurableObjectsOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktn/provider-cloudflare.worker.WorkerReferencesDurableObjectsOutputReference.Initializer"></a>

```go
import "github.com/cdktn-io/cdktn-provider-cloudflare-go/cloudflare/v16/worker"

worker.NewWorkerReferencesDurableObjectsOutputReference(terraformResource IInterpolatingParent, terraformAttribute *string, complexObjectIndex *f64, complexObjectIsFromSet *bool) WorkerReferencesDurableObjectsOutputReference
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-cloudflare.worker.WorkerReferencesDurableObjectsOutputReference.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>github.com/open-constructs/cdk-terrain-go/cdktn.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktn/provider-cloudflare.worker.WorkerReferencesDurableObjectsOutputReference.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>*string</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#@cdktn/provider-cloudflare.worker.WorkerReferencesDurableObjectsOutputReference.Initializer.parameter.complexObjectIndex">complexObjectIndex</a></code> | <code>*f64</code> | the index of this item in the list. |
| <code><a href="#@cdktn/provider-cloudflare.worker.WorkerReferencesDurableObjectsOutputReference.Initializer.parameter.complexObjectIsFromSet">complexObjectIsFromSet</a></code> | <code>*bool</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktn/provider-cloudflare.worker.WorkerReferencesDurableObjectsOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* github.com/open-constructs/cdk-terrain-go/cdktn.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-cloudflare.worker.WorkerReferencesDurableObjectsOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* *string

The attribute on the parent resource this class is referencing.

---

##### `complexObjectIndex`<sup>Required</sup> <a name="complexObjectIndex" id="@cdktn/provider-cloudflare.worker.WorkerReferencesDurableObjectsOutputReference.Initializer.parameter.complexObjectIndex"></a>

- *Type:* *f64

the index of this item in the list.

---

##### `complexObjectIsFromSet`<sup>Required</sup> <a name="complexObjectIsFromSet" id="@cdktn/provider-cloudflare.worker.WorkerReferencesDurableObjectsOutputReference.Initializer.parameter.complexObjectIsFromSet"></a>

- *Type:* *bool

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-cloudflare.worker.WorkerReferencesDurableObjectsOutputReference.computeFqn">ComputeFqn</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-cloudflare.worker.WorkerReferencesDurableObjectsOutputReference.getAnyMapAttribute">GetAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-cloudflare.worker.WorkerReferencesDurableObjectsOutputReference.getBooleanAttribute">GetBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-cloudflare.worker.WorkerReferencesDurableObjectsOutputReference.getBooleanMapAttribute">GetBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-cloudflare.worker.WorkerReferencesDurableObjectsOutputReference.getListAttribute">GetListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-cloudflare.worker.WorkerReferencesDurableObjectsOutputReference.getNumberAttribute">GetNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-cloudflare.worker.WorkerReferencesDurableObjectsOutputReference.getNumberListAttribute">GetNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-cloudflare.worker.WorkerReferencesDurableObjectsOutputReference.getNumberMapAttribute">GetNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-cloudflare.worker.WorkerReferencesDurableObjectsOutputReference.getStringAttribute">GetStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-cloudflare.worker.WorkerReferencesDurableObjectsOutputReference.getStringMapAttribute">GetStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-cloudflare.worker.WorkerReferencesDurableObjectsOutputReference.interpolationForAttribute">InterpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-cloudflare.worker.WorkerReferencesDurableObjectsOutputReference.resolve">Resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktn/provider-cloudflare.worker.WorkerReferencesDurableObjectsOutputReference.toString">ToString</a></code> | Return a string representation of this resolvable object. |

---

##### `ComputeFqn` <a name="ComputeFqn" id="@cdktn/provider-cloudflare.worker.WorkerReferencesDurableObjectsOutputReference.computeFqn"></a>

```go
func ComputeFqn() *string
```

##### `GetAnyMapAttribute` <a name="GetAnyMapAttribute" id="@cdktn/provider-cloudflare.worker.WorkerReferencesDurableObjectsOutputReference.getAnyMapAttribute"></a>

```go
func GetAnyMapAttribute(terraformAttribute *string) *map[string]interface{}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-cloudflare.worker.WorkerReferencesDurableObjectsOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetBooleanAttribute` <a name="GetBooleanAttribute" id="@cdktn/provider-cloudflare.worker.WorkerReferencesDurableObjectsOutputReference.getBooleanAttribute"></a>

```go
func GetBooleanAttribute(terraformAttribute *string) IResolvable
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-cloudflare.worker.WorkerReferencesDurableObjectsOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetBooleanMapAttribute` <a name="GetBooleanMapAttribute" id="@cdktn/provider-cloudflare.worker.WorkerReferencesDurableObjectsOutputReference.getBooleanMapAttribute"></a>

```go
func GetBooleanMapAttribute(terraformAttribute *string) *map[string]*bool
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-cloudflare.worker.WorkerReferencesDurableObjectsOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetListAttribute` <a name="GetListAttribute" id="@cdktn/provider-cloudflare.worker.WorkerReferencesDurableObjectsOutputReference.getListAttribute"></a>

```go
func GetListAttribute(terraformAttribute *string) *[]*string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-cloudflare.worker.WorkerReferencesDurableObjectsOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberAttribute` <a name="GetNumberAttribute" id="@cdktn/provider-cloudflare.worker.WorkerReferencesDurableObjectsOutputReference.getNumberAttribute"></a>

```go
func GetNumberAttribute(terraformAttribute *string) *f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-cloudflare.worker.WorkerReferencesDurableObjectsOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberListAttribute` <a name="GetNumberListAttribute" id="@cdktn/provider-cloudflare.worker.WorkerReferencesDurableObjectsOutputReference.getNumberListAttribute"></a>

```go
func GetNumberListAttribute(terraformAttribute *string) *[]*f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-cloudflare.worker.WorkerReferencesDurableObjectsOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberMapAttribute` <a name="GetNumberMapAttribute" id="@cdktn/provider-cloudflare.worker.WorkerReferencesDurableObjectsOutputReference.getNumberMapAttribute"></a>

```go
func GetNumberMapAttribute(terraformAttribute *string) *map[string]*f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-cloudflare.worker.WorkerReferencesDurableObjectsOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetStringAttribute` <a name="GetStringAttribute" id="@cdktn/provider-cloudflare.worker.WorkerReferencesDurableObjectsOutputReference.getStringAttribute"></a>

```go
func GetStringAttribute(terraformAttribute *string) *string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-cloudflare.worker.WorkerReferencesDurableObjectsOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetStringMapAttribute` <a name="GetStringMapAttribute" id="@cdktn/provider-cloudflare.worker.WorkerReferencesDurableObjectsOutputReference.getStringMapAttribute"></a>

```go
func GetStringMapAttribute(terraformAttribute *string) *map[string]*string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-cloudflare.worker.WorkerReferencesDurableObjectsOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `InterpolationForAttribute` <a name="InterpolationForAttribute" id="@cdktn/provider-cloudflare.worker.WorkerReferencesDurableObjectsOutputReference.interpolationForAttribute"></a>

```go
func InterpolationForAttribute(property *string) IResolvable
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktn/provider-cloudflare.worker.WorkerReferencesDurableObjectsOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* *string

---

##### `Resolve` <a name="Resolve" id="@cdktn/provider-cloudflare.worker.WorkerReferencesDurableObjectsOutputReference.resolve"></a>

```go
func Resolve(_context IResolveContext) interface{}
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktn/provider-cloudflare.worker.WorkerReferencesDurableObjectsOutputReference.resolve.parameter._context"></a>

- *Type:* github.com/open-constructs/cdk-terrain-go/cdktn.IResolveContext

---

##### `ToString` <a name="ToString" id="@cdktn/provider-cloudflare.worker.WorkerReferencesDurableObjectsOutputReference.toString"></a>

```go
func ToString() *string
```

Return a string representation of this resolvable object.

Returns a reversible string representation.


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-cloudflare.worker.WorkerReferencesDurableObjectsOutputReference.property.creationStack">CreationStack</a></code> | <code>*[]*string</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktn/provider-cloudflare.worker.WorkerReferencesDurableObjectsOutputReference.property.fqn">Fqn</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktn/provider-cloudflare.worker.WorkerReferencesDurableObjectsOutputReference.property.namespaceId">NamespaceId</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktn/provider-cloudflare.worker.WorkerReferencesDurableObjectsOutputReference.property.namespaceName">NamespaceName</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktn/provider-cloudflare.worker.WorkerReferencesDurableObjectsOutputReference.property.workerId">WorkerId</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktn/provider-cloudflare.worker.WorkerReferencesDurableObjectsOutputReference.property.workerName">WorkerName</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktn/provider-cloudflare.worker.WorkerReferencesDurableObjectsOutputReference.property.internalValue">InternalValue</a></code> | <code><a href="#@cdktn/provider-cloudflare.worker.WorkerReferencesDurableObjects">WorkerReferencesDurableObjects</a></code> | *No description.* |

---

##### `CreationStack`<sup>Required</sup> <a name="CreationStack" id="@cdktn/provider-cloudflare.worker.WorkerReferencesDurableObjectsOutputReference.property.creationStack"></a>

```go
func CreationStack() *[]*string
```

- *Type:* *[]*string

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `Fqn`<sup>Required</sup> <a name="Fqn" id="@cdktn/provider-cloudflare.worker.WorkerReferencesDurableObjectsOutputReference.property.fqn"></a>

```go
func Fqn() *string
```

- *Type:* *string

---

##### `NamespaceId`<sup>Required</sup> <a name="NamespaceId" id="@cdktn/provider-cloudflare.worker.WorkerReferencesDurableObjectsOutputReference.property.namespaceId"></a>

```go
func NamespaceId() *string
```

- *Type:* *string

---

##### `NamespaceName`<sup>Required</sup> <a name="NamespaceName" id="@cdktn/provider-cloudflare.worker.WorkerReferencesDurableObjectsOutputReference.property.namespaceName"></a>

```go
func NamespaceName() *string
```

- *Type:* *string

---

##### `WorkerId`<sup>Required</sup> <a name="WorkerId" id="@cdktn/provider-cloudflare.worker.WorkerReferencesDurableObjectsOutputReference.property.workerId"></a>

```go
func WorkerId() *string
```

- *Type:* *string

---

##### `WorkerName`<sup>Required</sup> <a name="WorkerName" id="@cdktn/provider-cloudflare.worker.WorkerReferencesDurableObjectsOutputReference.property.workerName"></a>

```go
func WorkerName() *string
```

- *Type:* *string

---

##### `InternalValue`<sup>Optional</sup> <a name="InternalValue" id="@cdktn/provider-cloudflare.worker.WorkerReferencesDurableObjectsOutputReference.property.internalValue"></a>

```go
func InternalValue() WorkerReferencesDurableObjects
```

- *Type:* <a href="#@cdktn/provider-cloudflare.worker.WorkerReferencesDurableObjects">WorkerReferencesDurableObjects</a>

---


### WorkerReferencesOutputReference <a name="WorkerReferencesOutputReference" id="@cdktn/provider-cloudflare.worker.WorkerReferencesOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktn/provider-cloudflare.worker.WorkerReferencesOutputReference.Initializer"></a>

```go
import "github.com/cdktn-io/cdktn-provider-cloudflare-go/cloudflare/v16/worker"

worker.NewWorkerReferencesOutputReference(terraformResource IInterpolatingParent, terraformAttribute *string) WorkerReferencesOutputReference
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-cloudflare.worker.WorkerReferencesOutputReference.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>github.com/open-constructs/cdk-terrain-go/cdktn.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktn/provider-cloudflare.worker.WorkerReferencesOutputReference.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>*string</code> | The attribute on the parent resource this class is referencing. |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktn/provider-cloudflare.worker.WorkerReferencesOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* github.com/open-constructs/cdk-terrain-go/cdktn.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-cloudflare.worker.WorkerReferencesOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* *string

The attribute on the parent resource this class is referencing.

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-cloudflare.worker.WorkerReferencesOutputReference.computeFqn">ComputeFqn</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-cloudflare.worker.WorkerReferencesOutputReference.getAnyMapAttribute">GetAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-cloudflare.worker.WorkerReferencesOutputReference.getBooleanAttribute">GetBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-cloudflare.worker.WorkerReferencesOutputReference.getBooleanMapAttribute">GetBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-cloudflare.worker.WorkerReferencesOutputReference.getListAttribute">GetListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-cloudflare.worker.WorkerReferencesOutputReference.getNumberAttribute">GetNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-cloudflare.worker.WorkerReferencesOutputReference.getNumberListAttribute">GetNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-cloudflare.worker.WorkerReferencesOutputReference.getNumberMapAttribute">GetNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-cloudflare.worker.WorkerReferencesOutputReference.getStringAttribute">GetStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-cloudflare.worker.WorkerReferencesOutputReference.getStringMapAttribute">GetStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-cloudflare.worker.WorkerReferencesOutputReference.interpolationForAttribute">InterpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-cloudflare.worker.WorkerReferencesOutputReference.resolve">Resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktn/provider-cloudflare.worker.WorkerReferencesOutputReference.toString">ToString</a></code> | Return a string representation of this resolvable object. |

---

##### `ComputeFqn` <a name="ComputeFqn" id="@cdktn/provider-cloudflare.worker.WorkerReferencesOutputReference.computeFqn"></a>

```go
func ComputeFqn() *string
```

##### `GetAnyMapAttribute` <a name="GetAnyMapAttribute" id="@cdktn/provider-cloudflare.worker.WorkerReferencesOutputReference.getAnyMapAttribute"></a>

```go
func GetAnyMapAttribute(terraformAttribute *string) *map[string]interface{}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-cloudflare.worker.WorkerReferencesOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetBooleanAttribute` <a name="GetBooleanAttribute" id="@cdktn/provider-cloudflare.worker.WorkerReferencesOutputReference.getBooleanAttribute"></a>

```go
func GetBooleanAttribute(terraformAttribute *string) IResolvable
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-cloudflare.worker.WorkerReferencesOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetBooleanMapAttribute` <a name="GetBooleanMapAttribute" id="@cdktn/provider-cloudflare.worker.WorkerReferencesOutputReference.getBooleanMapAttribute"></a>

```go
func GetBooleanMapAttribute(terraformAttribute *string) *map[string]*bool
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-cloudflare.worker.WorkerReferencesOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetListAttribute` <a name="GetListAttribute" id="@cdktn/provider-cloudflare.worker.WorkerReferencesOutputReference.getListAttribute"></a>

```go
func GetListAttribute(terraformAttribute *string) *[]*string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-cloudflare.worker.WorkerReferencesOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberAttribute` <a name="GetNumberAttribute" id="@cdktn/provider-cloudflare.worker.WorkerReferencesOutputReference.getNumberAttribute"></a>

```go
func GetNumberAttribute(terraformAttribute *string) *f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-cloudflare.worker.WorkerReferencesOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberListAttribute` <a name="GetNumberListAttribute" id="@cdktn/provider-cloudflare.worker.WorkerReferencesOutputReference.getNumberListAttribute"></a>

```go
func GetNumberListAttribute(terraformAttribute *string) *[]*f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-cloudflare.worker.WorkerReferencesOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberMapAttribute` <a name="GetNumberMapAttribute" id="@cdktn/provider-cloudflare.worker.WorkerReferencesOutputReference.getNumberMapAttribute"></a>

```go
func GetNumberMapAttribute(terraformAttribute *string) *map[string]*f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-cloudflare.worker.WorkerReferencesOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetStringAttribute` <a name="GetStringAttribute" id="@cdktn/provider-cloudflare.worker.WorkerReferencesOutputReference.getStringAttribute"></a>

```go
func GetStringAttribute(terraformAttribute *string) *string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-cloudflare.worker.WorkerReferencesOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetStringMapAttribute` <a name="GetStringMapAttribute" id="@cdktn/provider-cloudflare.worker.WorkerReferencesOutputReference.getStringMapAttribute"></a>

```go
func GetStringMapAttribute(terraformAttribute *string) *map[string]*string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-cloudflare.worker.WorkerReferencesOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `InterpolationForAttribute` <a name="InterpolationForAttribute" id="@cdktn/provider-cloudflare.worker.WorkerReferencesOutputReference.interpolationForAttribute"></a>

```go
func InterpolationForAttribute(property *string) IResolvable
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktn/provider-cloudflare.worker.WorkerReferencesOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* *string

---

##### `Resolve` <a name="Resolve" id="@cdktn/provider-cloudflare.worker.WorkerReferencesOutputReference.resolve"></a>

```go
func Resolve(_context IResolveContext) interface{}
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktn/provider-cloudflare.worker.WorkerReferencesOutputReference.resolve.parameter._context"></a>

- *Type:* github.com/open-constructs/cdk-terrain-go/cdktn.IResolveContext

---

##### `ToString` <a name="ToString" id="@cdktn/provider-cloudflare.worker.WorkerReferencesOutputReference.toString"></a>

```go
func ToString() *string
```

Return a string representation of this resolvable object.

Returns a reversible string representation.


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-cloudflare.worker.WorkerReferencesOutputReference.property.creationStack">CreationStack</a></code> | <code>*[]*string</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktn/provider-cloudflare.worker.WorkerReferencesOutputReference.property.fqn">Fqn</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktn/provider-cloudflare.worker.WorkerReferencesOutputReference.property.dispatchNamespaceOutbounds">DispatchNamespaceOutbounds</a></code> | <code><a href="#@cdktn/provider-cloudflare.worker.WorkerReferencesDispatchNamespaceOutboundsList">WorkerReferencesDispatchNamespaceOutboundsList</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-cloudflare.worker.WorkerReferencesOutputReference.property.domains">Domains</a></code> | <code><a href="#@cdktn/provider-cloudflare.worker.WorkerReferencesDomainsList">WorkerReferencesDomainsList</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-cloudflare.worker.WorkerReferencesOutputReference.property.durableObjects">DurableObjects</a></code> | <code><a href="#@cdktn/provider-cloudflare.worker.WorkerReferencesDurableObjectsList">WorkerReferencesDurableObjectsList</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-cloudflare.worker.WorkerReferencesOutputReference.property.queues">Queues</a></code> | <code><a href="#@cdktn/provider-cloudflare.worker.WorkerReferencesQueuesList">WorkerReferencesQueuesList</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-cloudflare.worker.WorkerReferencesOutputReference.property.workers">Workers</a></code> | <code><a href="#@cdktn/provider-cloudflare.worker.WorkerReferencesWorkersList">WorkerReferencesWorkersList</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-cloudflare.worker.WorkerReferencesOutputReference.property.internalValue">InternalValue</a></code> | <code><a href="#@cdktn/provider-cloudflare.worker.WorkerReferences">WorkerReferences</a></code> | *No description.* |

---

##### `CreationStack`<sup>Required</sup> <a name="CreationStack" id="@cdktn/provider-cloudflare.worker.WorkerReferencesOutputReference.property.creationStack"></a>

```go
func CreationStack() *[]*string
```

- *Type:* *[]*string

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `Fqn`<sup>Required</sup> <a name="Fqn" id="@cdktn/provider-cloudflare.worker.WorkerReferencesOutputReference.property.fqn"></a>

```go
func Fqn() *string
```

- *Type:* *string

---

##### `DispatchNamespaceOutbounds`<sup>Required</sup> <a name="DispatchNamespaceOutbounds" id="@cdktn/provider-cloudflare.worker.WorkerReferencesOutputReference.property.dispatchNamespaceOutbounds"></a>

```go
func DispatchNamespaceOutbounds() WorkerReferencesDispatchNamespaceOutboundsList
```

- *Type:* <a href="#@cdktn/provider-cloudflare.worker.WorkerReferencesDispatchNamespaceOutboundsList">WorkerReferencesDispatchNamespaceOutboundsList</a>

---

##### `Domains`<sup>Required</sup> <a name="Domains" id="@cdktn/provider-cloudflare.worker.WorkerReferencesOutputReference.property.domains"></a>

```go
func Domains() WorkerReferencesDomainsList
```

- *Type:* <a href="#@cdktn/provider-cloudflare.worker.WorkerReferencesDomainsList">WorkerReferencesDomainsList</a>

---

##### `DurableObjects`<sup>Required</sup> <a name="DurableObjects" id="@cdktn/provider-cloudflare.worker.WorkerReferencesOutputReference.property.durableObjects"></a>

```go
func DurableObjects() WorkerReferencesDurableObjectsList
```

- *Type:* <a href="#@cdktn/provider-cloudflare.worker.WorkerReferencesDurableObjectsList">WorkerReferencesDurableObjectsList</a>

---

##### `Queues`<sup>Required</sup> <a name="Queues" id="@cdktn/provider-cloudflare.worker.WorkerReferencesOutputReference.property.queues"></a>

```go
func Queues() WorkerReferencesQueuesList
```

- *Type:* <a href="#@cdktn/provider-cloudflare.worker.WorkerReferencesQueuesList">WorkerReferencesQueuesList</a>

---

##### `Workers`<sup>Required</sup> <a name="Workers" id="@cdktn/provider-cloudflare.worker.WorkerReferencesOutputReference.property.workers"></a>

```go
func Workers() WorkerReferencesWorkersList
```

- *Type:* <a href="#@cdktn/provider-cloudflare.worker.WorkerReferencesWorkersList">WorkerReferencesWorkersList</a>

---

##### `InternalValue`<sup>Optional</sup> <a name="InternalValue" id="@cdktn/provider-cloudflare.worker.WorkerReferencesOutputReference.property.internalValue"></a>

```go
func InternalValue() WorkerReferences
```

- *Type:* <a href="#@cdktn/provider-cloudflare.worker.WorkerReferences">WorkerReferences</a>

---


### WorkerReferencesQueuesList <a name="WorkerReferencesQueuesList" id="@cdktn/provider-cloudflare.worker.WorkerReferencesQueuesList"></a>

#### Initializers <a name="Initializers" id="@cdktn/provider-cloudflare.worker.WorkerReferencesQueuesList.Initializer"></a>

```go
import "github.com/cdktn-io/cdktn-provider-cloudflare-go/cloudflare/v16/worker"

worker.NewWorkerReferencesQueuesList(terraformResource IInterpolatingParent, terraformAttribute *string, wrapsSet *bool) WorkerReferencesQueuesList
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-cloudflare.worker.WorkerReferencesQueuesList.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>github.com/open-constructs/cdk-terrain-go/cdktn.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktn/provider-cloudflare.worker.WorkerReferencesQueuesList.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>*string</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#@cdktn/provider-cloudflare.worker.WorkerReferencesQueuesList.Initializer.parameter.wrapsSet">wrapsSet</a></code> | <code>*bool</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktn/provider-cloudflare.worker.WorkerReferencesQueuesList.Initializer.parameter.terraformResource"></a>

- *Type:* github.com/open-constructs/cdk-terrain-go/cdktn.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-cloudflare.worker.WorkerReferencesQueuesList.Initializer.parameter.terraformAttribute"></a>

- *Type:* *string

The attribute on the parent resource this class is referencing.

---

##### `wrapsSet`<sup>Required</sup> <a name="wrapsSet" id="@cdktn/provider-cloudflare.worker.WorkerReferencesQueuesList.Initializer.parameter.wrapsSet"></a>

- *Type:* *bool

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-cloudflare.worker.WorkerReferencesQueuesList.allWithMapKey">AllWithMapKey</a></code> | Creating an iterator for this complex list. |
| <code><a href="#@cdktn/provider-cloudflare.worker.WorkerReferencesQueuesList.computeFqn">ComputeFqn</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-cloudflare.worker.WorkerReferencesQueuesList.resolve">Resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktn/provider-cloudflare.worker.WorkerReferencesQueuesList.toString">ToString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktn/provider-cloudflare.worker.WorkerReferencesQueuesList.get">Get</a></code> | *No description.* |

---

##### `AllWithMapKey` <a name="AllWithMapKey" id="@cdktn/provider-cloudflare.worker.WorkerReferencesQueuesList.allWithMapKey"></a>

```go
func AllWithMapKey(mapKeyAttributeName *string) DynamicListTerraformIterator
```

Creating an iterator for this complex list.

The list will be converted into a map with the mapKeyAttributeName as the key.

###### `mapKeyAttributeName`<sup>Required</sup> <a name="mapKeyAttributeName" id="@cdktn/provider-cloudflare.worker.WorkerReferencesQueuesList.allWithMapKey.parameter.mapKeyAttributeName"></a>

- *Type:* *string

---

##### `ComputeFqn` <a name="ComputeFqn" id="@cdktn/provider-cloudflare.worker.WorkerReferencesQueuesList.computeFqn"></a>

```go
func ComputeFqn() *string
```

##### `Resolve` <a name="Resolve" id="@cdktn/provider-cloudflare.worker.WorkerReferencesQueuesList.resolve"></a>

```go
func Resolve(_context IResolveContext) interface{}
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktn/provider-cloudflare.worker.WorkerReferencesQueuesList.resolve.parameter._context"></a>

- *Type:* github.com/open-constructs/cdk-terrain-go/cdktn.IResolveContext

---

##### `ToString` <a name="ToString" id="@cdktn/provider-cloudflare.worker.WorkerReferencesQueuesList.toString"></a>

```go
func ToString() *string
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `Get` <a name="Get" id="@cdktn/provider-cloudflare.worker.WorkerReferencesQueuesList.get"></a>

```go
func Get(index *f64) WorkerReferencesQueuesOutputReference
```

###### `index`<sup>Required</sup> <a name="index" id="@cdktn/provider-cloudflare.worker.WorkerReferencesQueuesList.get.parameter.index"></a>

- *Type:* *f64

the index of the item to return.

---


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-cloudflare.worker.WorkerReferencesQueuesList.property.creationStack">CreationStack</a></code> | <code>*[]*string</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktn/provider-cloudflare.worker.WorkerReferencesQueuesList.property.fqn">Fqn</a></code> | <code>*string</code> | *No description.* |

---

##### `CreationStack`<sup>Required</sup> <a name="CreationStack" id="@cdktn/provider-cloudflare.worker.WorkerReferencesQueuesList.property.creationStack"></a>

```go
func CreationStack() *[]*string
```

- *Type:* *[]*string

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `Fqn`<sup>Required</sup> <a name="Fqn" id="@cdktn/provider-cloudflare.worker.WorkerReferencesQueuesList.property.fqn"></a>

```go
func Fqn() *string
```

- *Type:* *string

---


### WorkerReferencesQueuesOutputReference <a name="WorkerReferencesQueuesOutputReference" id="@cdktn/provider-cloudflare.worker.WorkerReferencesQueuesOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktn/provider-cloudflare.worker.WorkerReferencesQueuesOutputReference.Initializer"></a>

```go
import "github.com/cdktn-io/cdktn-provider-cloudflare-go/cloudflare/v16/worker"

worker.NewWorkerReferencesQueuesOutputReference(terraformResource IInterpolatingParent, terraformAttribute *string, complexObjectIndex *f64, complexObjectIsFromSet *bool) WorkerReferencesQueuesOutputReference
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-cloudflare.worker.WorkerReferencesQueuesOutputReference.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>github.com/open-constructs/cdk-terrain-go/cdktn.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktn/provider-cloudflare.worker.WorkerReferencesQueuesOutputReference.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>*string</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#@cdktn/provider-cloudflare.worker.WorkerReferencesQueuesOutputReference.Initializer.parameter.complexObjectIndex">complexObjectIndex</a></code> | <code>*f64</code> | the index of this item in the list. |
| <code><a href="#@cdktn/provider-cloudflare.worker.WorkerReferencesQueuesOutputReference.Initializer.parameter.complexObjectIsFromSet">complexObjectIsFromSet</a></code> | <code>*bool</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktn/provider-cloudflare.worker.WorkerReferencesQueuesOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* github.com/open-constructs/cdk-terrain-go/cdktn.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-cloudflare.worker.WorkerReferencesQueuesOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* *string

The attribute on the parent resource this class is referencing.

---

##### `complexObjectIndex`<sup>Required</sup> <a name="complexObjectIndex" id="@cdktn/provider-cloudflare.worker.WorkerReferencesQueuesOutputReference.Initializer.parameter.complexObjectIndex"></a>

- *Type:* *f64

the index of this item in the list.

---

##### `complexObjectIsFromSet`<sup>Required</sup> <a name="complexObjectIsFromSet" id="@cdktn/provider-cloudflare.worker.WorkerReferencesQueuesOutputReference.Initializer.parameter.complexObjectIsFromSet"></a>

- *Type:* *bool

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-cloudflare.worker.WorkerReferencesQueuesOutputReference.computeFqn">ComputeFqn</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-cloudflare.worker.WorkerReferencesQueuesOutputReference.getAnyMapAttribute">GetAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-cloudflare.worker.WorkerReferencesQueuesOutputReference.getBooleanAttribute">GetBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-cloudflare.worker.WorkerReferencesQueuesOutputReference.getBooleanMapAttribute">GetBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-cloudflare.worker.WorkerReferencesQueuesOutputReference.getListAttribute">GetListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-cloudflare.worker.WorkerReferencesQueuesOutputReference.getNumberAttribute">GetNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-cloudflare.worker.WorkerReferencesQueuesOutputReference.getNumberListAttribute">GetNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-cloudflare.worker.WorkerReferencesQueuesOutputReference.getNumberMapAttribute">GetNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-cloudflare.worker.WorkerReferencesQueuesOutputReference.getStringAttribute">GetStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-cloudflare.worker.WorkerReferencesQueuesOutputReference.getStringMapAttribute">GetStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-cloudflare.worker.WorkerReferencesQueuesOutputReference.interpolationForAttribute">InterpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-cloudflare.worker.WorkerReferencesQueuesOutputReference.resolve">Resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktn/provider-cloudflare.worker.WorkerReferencesQueuesOutputReference.toString">ToString</a></code> | Return a string representation of this resolvable object. |

---

##### `ComputeFqn` <a name="ComputeFqn" id="@cdktn/provider-cloudflare.worker.WorkerReferencesQueuesOutputReference.computeFqn"></a>

```go
func ComputeFqn() *string
```

##### `GetAnyMapAttribute` <a name="GetAnyMapAttribute" id="@cdktn/provider-cloudflare.worker.WorkerReferencesQueuesOutputReference.getAnyMapAttribute"></a>

```go
func GetAnyMapAttribute(terraformAttribute *string) *map[string]interface{}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-cloudflare.worker.WorkerReferencesQueuesOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetBooleanAttribute` <a name="GetBooleanAttribute" id="@cdktn/provider-cloudflare.worker.WorkerReferencesQueuesOutputReference.getBooleanAttribute"></a>

```go
func GetBooleanAttribute(terraformAttribute *string) IResolvable
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-cloudflare.worker.WorkerReferencesQueuesOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetBooleanMapAttribute` <a name="GetBooleanMapAttribute" id="@cdktn/provider-cloudflare.worker.WorkerReferencesQueuesOutputReference.getBooleanMapAttribute"></a>

```go
func GetBooleanMapAttribute(terraformAttribute *string) *map[string]*bool
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-cloudflare.worker.WorkerReferencesQueuesOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetListAttribute` <a name="GetListAttribute" id="@cdktn/provider-cloudflare.worker.WorkerReferencesQueuesOutputReference.getListAttribute"></a>

```go
func GetListAttribute(terraformAttribute *string) *[]*string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-cloudflare.worker.WorkerReferencesQueuesOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberAttribute` <a name="GetNumberAttribute" id="@cdktn/provider-cloudflare.worker.WorkerReferencesQueuesOutputReference.getNumberAttribute"></a>

```go
func GetNumberAttribute(terraformAttribute *string) *f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-cloudflare.worker.WorkerReferencesQueuesOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberListAttribute` <a name="GetNumberListAttribute" id="@cdktn/provider-cloudflare.worker.WorkerReferencesQueuesOutputReference.getNumberListAttribute"></a>

```go
func GetNumberListAttribute(terraformAttribute *string) *[]*f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-cloudflare.worker.WorkerReferencesQueuesOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberMapAttribute` <a name="GetNumberMapAttribute" id="@cdktn/provider-cloudflare.worker.WorkerReferencesQueuesOutputReference.getNumberMapAttribute"></a>

```go
func GetNumberMapAttribute(terraformAttribute *string) *map[string]*f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-cloudflare.worker.WorkerReferencesQueuesOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetStringAttribute` <a name="GetStringAttribute" id="@cdktn/provider-cloudflare.worker.WorkerReferencesQueuesOutputReference.getStringAttribute"></a>

```go
func GetStringAttribute(terraformAttribute *string) *string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-cloudflare.worker.WorkerReferencesQueuesOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetStringMapAttribute` <a name="GetStringMapAttribute" id="@cdktn/provider-cloudflare.worker.WorkerReferencesQueuesOutputReference.getStringMapAttribute"></a>

```go
func GetStringMapAttribute(terraformAttribute *string) *map[string]*string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-cloudflare.worker.WorkerReferencesQueuesOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `InterpolationForAttribute` <a name="InterpolationForAttribute" id="@cdktn/provider-cloudflare.worker.WorkerReferencesQueuesOutputReference.interpolationForAttribute"></a>

```go
func InterpolationForAttribute(property *string) IResolvable
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktn/provider-cloudflare.worker.WorkerReferencesQueuesOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* *string

---

##### `Resolve` <a name="Resolve" id="@cdktn/provider-cloudflare.worker.WorkerReferencesQueuesOutputReference.resolve"></a>

```go
func Resolve(_context IResolveContext) interface{}
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktn/provider-cloudflare.worker.WorkerReferencesQueuesOutputReference.resolve.parameter._context"></a>

- *Type:* github.com/open-constructs/cdk-terrain-go/cdktn.IResolveContext

---

##### `ToString` <a name="ToString" id="@cdktn/provider-cloudflare.worker.WorkerReferencesQueuesOutputReference.toString"></a>

```go
func ToString() *string
```

Return a string representation of this resolvable object.

Returns a reversible string representation.


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-cloudflare.worker.WorkerReferencesQueuesOutputReference.property.creationStack">CreationStack</a></code> | <code>*[]*string</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktn/provider-cloudflare.worker.WorkerReferencesQueuesOutputReference.property.fqn">Fqn</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktn/provider-cloudflare.worker.WorkerReferencesQueuesOutputReference.property.queueConsumerId">QueueConsumerId</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktn/provider-cloudflare.worker.WorkerReferencesQueuesOutputReference.property.queueId">QueueId</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktn/provider-cloudflare.worker.WorkerReferencesQueuesOutputReference.property.queueName">QueueName</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktn/provider-cloudflare.worker.WorkerReferencesQueuesOutputReference.property.internalValue">InternalValue</a></code> | <code><a href="#@cdktn/provider-cloudflare.worker.WorkerReferencesQueues">WorkerReferencesQueues</a></code> | *No description.* |

---

##### `CreationStack`<sup>Required</sup> <a name="CreationStack" id="@cdktn/provider-cloudflare.worker.WorkerReferencesQueuesOutputReference.property.creationStack"></a>

```go
func CreationStack() *[]*string
```

- *Type:* *[]*string

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `Fqn`<sup>Required</sup> <a name="Fqn" id="@cdktn/provider-cloudflare.worker.WorkerReferencesQueuesOutputReference.property.fqn"></a>

```go
func Fqn() *string
```

- *Type:* *string

---

##### `QueueConsumerId`<sup>Required</sup> <a name="QueueConsumerId" id="@cdktn/provider-cloudflare.worker.WorkerReferencesQueuesOutputReference.property.queueConsumerId"></a>

```go
func QueueConsumerId() *string
```

- *Type:* *string

---

##### `QueueId`<sup>Required</sup> <a name="QueueId" id="@cdktn/provider-cloudflare.worker.WorkerReferencesQueuesOutputReference.property.queueId"></a>

```go
func QueueId() *string
```

- *Type:* *string

---

##### `QueueName`<sup>Required</sup> <a name="QueueName" id="@cdktn/provider-cloudflare.worker.WorkerReferencesQueuesOutputReference.property.queueName"></a>

```go
func QueueName() *string
```

- *Type:* *string

---

##### `InternalValue`<sup>Optional</sup> <a name="InternalValue" id="@cdktn/provider-cloudflare.worker.WorkerReferencesQueuesOutputReference.property.internalValue"></a>

```go
func InternalValue() WorkerReferencesQueues
```

- *Type:* <a href="#@cdktn/provider-cloudflare.worker.WorkerReferencesQueues">WorkerReferencesQueues</a>

---


### WorkerReferencesWorkersList <a name="WorkerReferencesWorkersList" id="@cdktn/provider-cloudflare.worker.WorkerReferencesWorkersList"></a>

#### Initializers <a name="Initializers" id="@cdktn/provider-cloudflare.worker.WorkerReferencesWorkersList.Initializer"></a>

```go
import "github.com/cdktn-io/cdktn-provider-cloudflare-go/cloudflare/v16/worker"

worker.NewWorkerReferencesWorkersList(terraformResource IInterpolatingParent, terraformAttribute *string, wrapsSet *bool) WorkerReferencesWorkersList
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-cloudflare.worker.WorkerReferencesWorkersList.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>github.com/open-constructs/cdk-terrain-go/cdktn.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktn/provider-cloudflare.worker.WorkerReferencesWorkersList.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>*string</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#@cdktn/provider-cloudflare.worker.WorkerReferencesWorkersList.Initializer.parameter.wrapsSet">wrapsSet</a></code> | <code>*bool</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktn/provider-cloudflare.worker.WorkerReferencesWorkersList.Initializer.parameter.terraformResource"></a>

- *Type:* github.com/open-constructs/cdk-terrain-go/cdktn.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-cloudflare.worker.WorkerReferencesWorkersList.Initializer.parameter.terraformAttribute"></a>

- *Type:* *string

The attribute on the parent resource this class is referencing.

---

##### `wrapsSet`<sup>Required</sup> <a name="wrapsSet" id="@cdktn/provider-cloudflare.worker.WorkerReferencesWorkersList.Initializer.parameter.wrapsSet"></a>

- *Type:* *bool

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-cloudflare.worker.WorkerReferencesWorkersList.allWithMapKey">AllWithMapKey</a></code> | Creating an iterator for this complex list. |
| <code><a href="#@cdktn/provider-cloudflare.worker.WorkerReferencesWorkersList.computeFqn">ComputeFqn</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-cloudflare.worker.WorkerReferencesWorkersList.resolve">Resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktn/provider-cloudflare.worker.WorkerReferencesWorkersList.toString">ToString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktn/provider-cloudflare.worker.WorkerReferencesWorkersList.get">Get</a></code> | *No description.* |

---

##### `AllWithMapKey` <a name="AllWithMapKey" id="@cdktn/provider-cloudflare.worker.WorkerReferencesWorkersList.allWithMapKey"></a>

```go
func AllWithMapKey(mapKeyAttributeName *string) DynamicListTerraformIterator
```

Creating an iterator for this complex list.

The list will be converted into a map with the mapKeyAttributeName as the key.

###### `mapKeyAttributeName`<sup>Required</sup> <a name="mapKeyAttributeName" id="@cdktn/provider-cloudflare.worker.WorkerReferencesWorkersList.allWithMapKey.parameter.mapKeyAttributeName"></a>

- *Type:* *string

---

##### `ComputeFqn` <a name="ComputeFqn" id="@cdktn/provider-cloudflare.worker.WorkerReferencesWorkersList.computeFqn"></a>

```go
func ComputeFqn() *string
```

##### `Resolve` <a name="Resolve" id="@cdktn/provider-cloudflare.worker.WorkerReferencesWorkersList.resolve"></a>

```go
func Resolve(_context IResolveContext) interface{}
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktn/provider-cloudflare.worker.WorkerReferencesWorkersList.resolve.parameter._context"></a>

- *Type:* github.com/open-constructs/cdk-terrain-go/cdktn.IResolveContext

---

##### `ToString` <a name="ToString" id="@cdktn/provider-cloudflare.worker.WorkerReferencesWorkersList.toString"></a>

```go
func ToString() *string
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `Get` <a name="Get" id="@cdktn/provider-cloudflare.worker.WorkerReferencesWorkersList.get"></a>

```go
func Get(index *f64) WorkerReferencesWorkersOutputReference
```

###### `index`<sup>Required</sup> <a name="index" id="@cdktn/provider-cloudflare.worker.WorkerReferencesWorkersList.get.parameter.index"></a>

- *Type:* *f64

the index of the item to return.

---


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-cloudflare.worker.WorkerReferencesWorkersList.property.creationStack">CreationStack</a></code> | <code>*[]*string</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktn/provider-cloudflare.worker.WorkerReferencesWorkersList.property.fqn">Fqn</a></code> | <code>*string</code> | *No description.* |

---

##### `CreationStack`<sup>Required</sup> <a name="CreationStack" id="@cdktn/provider-cloudflare.worker.WorkerReferencesWorkersList.property.creationStack"></a>

```go
func CreationStack() *[]*string
```

- *Type:* *[]*string

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `Fqn`<sup>Required</sup> <a name="Fqn" id="@cdktn/provider-cloudflare.worker.WorkerReferencesWorkersList.property.fqn"></a>

```go
func Fqn() *string
```

- *Type:* *string

---


### WorkerReferencesWorkersOutputReference <a name="WorkerReferencesWorkersOutputReference" id="@cdktn/provider-cloudflare.worker.WorkerReferencesWorkersOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktn/provider-cloudflare.worker.WorkerReferencesWorkersOutputReference.Initializer"></a>

```go
import "github.com/cdktn-io/cdktn-provider-cloudflare-go/cloudflare/v16/worker"

worker.NewWorkerReferencesWorkersOutputReference(terraformResource IInterpolatingParent, terraformAttribute *string, complexObjectIndex *f64, complexObjectIsFromSet *bool) WorkerReferencesWorkersOutputReference
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-cloudflare.worker.WorkerReferencesWorkersOutputReference.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>github.com/open-constructs/cdk-terrain-go/cdktn.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktn/provider-cloudflare.worker.WorkerReferencesWorkersOutputReference.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>*string</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#@cdktn/provider-cloudflare.worker.WorkerReferencesWorkersOutputReference.Initializer.parameter.complexObjectIndex">complexObjectIndex</a></code> | <code>*f64</code> | the index of this item in the list. |
| <code><a href="#@cdktn/provider-cloudflare.worker.WorkerReferencesWorkersOutputReference.Initializer.parameter.complexObjectIsFromSet">complexObjectIsFromSet</a></code> | <code>*bool</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktn/provider-cloudflare.worker.WorkerReferencesWorkersOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* github.com/open-constructs/cdk-terrain-go/cdktn.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-cloudflare.worker.WorkerReferencesWorkersOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* *string

The attribute on the parent resource this class is referencing.

---

##### `complexObjectIndex`<sup>Required</sup> <a name="complexObjectIndex" id="@cdktn/provider-cloudflare.worker.WorkerReferencesWorkersOutputReference.Initializer.parameter.complexObjectIndex"></a>

- *Type:* *f64

the index of this item in the list.

---

##### `complexObjectIsFromSet`<sup>Required</sup> <a name="complexObjectIsFromSet" id="@cdktn/provider-cloudflare.worker.WorkerReferencesWorkersOutputReference.Initializer.parameter.complexObjectIsFromSet"></a>

- *Type:* *bool

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-cloudflare.worker.WorkerReferencesWorkersOutputReference.computeFqn">ComputeFqn</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-cloudflare.worker.WorkerReferencesWorkersOutputReference.getAnyMapAttribute">GetAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-cloudflare.worker.WorkerReferencesWorkersOutputReference.getBooleanAttribute">GetBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-cloudflare.worker.WorkerReferencesWorkersOutputReference.getBooleanMapAttribute">GetBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-cloudflare.worker.WorkerReferencesWorkersOutputReference.getListAttribute">GetListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-cloudflare.worker.WorkerReferencesWorkersOutputReference.getNumberAttribute">GetNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-cloudflare.worker.WorkerReferencesWorkersOutputReference.getNumberListAttribute">GetNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-cloudflare.worker.WorkerReferencesWorkersOutputReference.getNumberMapAttribute">GetNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-cloudflare.worker.WorkerReferencesWorkersOutputReference.getStringAttribute">GetStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-cloudflare.worker.WorkerReferencesWorkersOutputReference.getStringMapAttribute">GetStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-cloudflare.worker.WorkerReferencesWorkersOutputReference.interpolationForAttribute">InterpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-cloudflare.worker.WorkerReferencesWorkersOutputReference.resolve">Resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktn/provider-cloudflare.worker.WorkerReferencesWorkersOutputReference.toString">ToString</a></code> | Return a string representation of this resolvable object. |

---

##### `ComputeFqn` <a name="ComputeFqn" id="@cdktn/provider-cloudflare.worker.WorkerReferencesWorkersOutputReference.computeFqn"></a>

```go
func ComputeFqn() *string
```

##### `GetAnyMapAttribute` <a name="GetAnyMapAttribute" id="@cdktn/provider-cloudflare.worker.WorkerReferencesWorkersOutputReference.getAnyMapAttribute"></a>

```go
func GetAnyMapAttribute(terraformAttribute *string) *map[string]interface{}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-cloudflare.worker.WorkerReferencesWorkersOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetBooleanAttribute` <a name="GetBooleanAttribute" id="@cdktn/provider-cloudflare.worker.WorkerReferencesWorkersOutputReference.getBooleanAttribute"></a>

```go
func GetBooleanAttribute(terraformAttribute *string) IResolvable
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-cloudflare.worker.WorkerReferencesWorkersOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetBooleanMapAttribute` <a name="GetBooleanMapAttribute" id="@cdktn/provider-cloudflare.worker.WorkerReferencesWorkersOutputReference.getBooleanMapAttribute"></a>

```go
func GetBooleanMapAttribute(terraformAttribute *string) *map[string]*bool
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-cloudflare.worker.WorkerReferencesWorkersOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetListAttribute` <a name="GetListAttribute" id="@cdktn/provider-cloudflare.worker.WorkerReferencesWorkersOutputReference.getListAttribute"></a>

```go
func GetListAttribute(terraformAttribute *string) *[]*string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-cloudflare.worker.WorkerReferencesWorkersOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberAttribute` <a name="GetNumberAttribute" id="@cdktn/provider-cloudflare.worker.WorkerReferencesWorkersOutputReference.getNumberAttribute"></a>

```go
func GetNumberAttribute(terraformAttribute *string) *f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-cloudflare.worker.WorkerReferencesWorkersOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberListAttribute` <a name="GetNumberListAttribute" id="@cdktn/provider-cloudflare.worker.WorkerReferencesWorkersOutputReference.getNumberListAttribute"></a>

```go
func GetNumberListAttribute(terraformAttribute *string) *[]*f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-cloudflare.worker.WorkerReferencesWorkersOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberMapAttribute` <a name="GetNumberMapAttribute" id="@cdktn/provider-cloudflare.worker.WorkerReferencesWorkersOutputReference.getNumberMapAttribute"></a>

```go
func GetNumberMapAttribute(terraformAttribute *string) *map[string]*f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-cloudflare.worker.WorkerReferencesWorkersOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetStringAttribute` <a name="GetStringAttribute" id="@cdktn/provider-cloudflare.worker.WorkerReferencesWorkersOutputReference.getStringAttribute"></a>

```go
func GetStringAttribute(terraformAttribute *string) *string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-cloudflare.worker.WorkerReferencesWorkersOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetStringMapAttribute` <a name="GetStringMapAttribute" id="@cdktn/provider-cloudflare.worker.WorkerReferencesWorkersOutputReference.getStringMapAttribute"></a>

```go
func GetStringMapAttribute(terraformAttribute *string) *map[string]*string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-cloudflare.worker.WorkerReferencesWorkersOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `InterpolationForAttribute` <a name="InterpolationForAttribute" id="@cdktn/provider-cloudflare.worker.WorkerReferencesWorkersOutputReference.interpolationForAttribute"></a>

```go
func InterpolationForAttribute(property *string) IResolvable
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktn/provider-cloudflare.worker.WorkerReferencesWorkersOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* *string

---

##### `Resolve` <a name="Resolve" id="@cdktn/provider-cloudflare.worker.WorkerReferencesWorkersOutputReference.resolve"></a>

```go
func Resolve(_context IResolveContext) interface{}
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktn/provider-cloudflare.worker.WorkerReferencesWorkersOutputReference.resolve.parameter._context"></a>

- *Type:* github.com/open-constructs/cdk-terrain-go/cdktn.IResolveContext

---

##### `ToString` <a name="ToString" id="@cdktn/provider-cloudflare.worker.WorkerReferencesWorkersOutputReference.toString"></a>

```go
func ToString() *string
```

Return a string representation of this resolvable object.

Returns a reversible string representation.


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-cloudflare.worker.WorkerReferencesWorkersOutputReference.property.creationStack">CreationStack</a></code> | <code>*[]*string</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktn/provider-cloudflare.worker.WorkerReferencesWorkersOutputReference.property.fqn">Fqn</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktn/provider-cloudflare.worker.WorkerReferencesWorkersOutputReference.property.id">Id</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktn/provider-cloudflare.worker.WorkerReferencesWorkersOutputReference.property.name">Name</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktn/provider-cloudflare.worker.WorkerReferencesWorkersOutputReference.property.internalValue">InternalValue</a></code> | <code><a href="#@cdktn/provider-cloudflare.worker.WorkerReferencesWorkers">WorkerReferencesWorkers</a></code> | *No description.* |

---

##### `CreationStack`<sup>Required</sup> <a name="CreationStack" id="@cdktn/provider-cloudflare.worker.WorkerReferencesWorkersOutputReference.property.creationStack"></a>

```go
func CreationStack() *[]*string
```

- *Type:* *[]*string

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `Fqn`<sup>Required</sup> <a name="Fqn" id="@cdktn/provider-cloudflare.worker.WorkerReferencesWorkersOutputReference.property.fqn"></a>

```go
func Fqn() *string
```

- *Type:* *string

---

##### `Id`<sup>Required</sup> <a name="Id" id="@cdktn/provider-cloudflare.worker.WorkerReferencesWorkersOutputReference.property.id"></a>

```go
func Id() *string
```

- *Type:* *string

---

##### `Name`<sup>Required</sup> <a name="Name" id="@cdktn/provider-cloudflare.worker.WorkerReferencesWorkersOutputReference.property.name"></a>

```go
func Name() *string
```

- *Type:* *string

---

##### `InternalValue`<sup>Optional</sup> <a name="InternalValue" id="@cdktn/provider-cloudflare.worker.WorkerReferencesWorkersOutputReference.property.internalValue"></a>

```go
func InternalValue() WorkerReferencesWorkers
```

- *Type:* <a href="#@cdktn/provider-cloudflare.worker.WorkerReferencesWorkers">WorkerReferencesWorkers</a>

---


### WorkerSubdomainOutputReference <a name="WorkerSubdomainOutputReference" id="@cdktn/provider-cloudflare.worker.WorkerSubdomainOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktn/provider-cloudflare.worker.WorkerSubdomainOutputReference.Initializer"></a>

```go
import "github.com/cdktn-io/cdktn-provider-cloudflare-go/cloudflare/v16/worker"

worker.NewWorkerSubdomainOutputReference(terraformResource IInterpolatingParent, terraformAttribute *string) WorkerSubdomainOutputReference
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-cloudflare.worker.WorkerSubdomainOutputReference.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>github.com/open-constructs/cdk-terrain-go/cdktn.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktn/provider-cloudflare.worker.WorkerSubdomainOutputReference.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>*string</code> | The attribute on the parent resource this class is referencing. |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktn/provider-cloudflare.worker.WorkerSubdomainOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* github.com/open-constructs/cdk-terrain-go/cdktn.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-cloudflare.worker.WorkerSubdomainOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* *string

The attribute on the parent resource this class is referencing.

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-cloudflare.worker.WorkerSubdomainOutputReference.computeFqn">ComputeFqn</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-cloudflare.worker.WorkerSubdomainOutputReference.getAnyMapAttribute">GetAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-cloudflare.worker.WorkerSubdomainOutputReference.getBooleanAttribute">GetBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-cloudflare.worker.WorkerSubdomainOutputReference.getBooleanMapAttribute">GetBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-cloudflare.worker.WorkerSubdomainOutputReference.getListAttribute">GetListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-cloudflare.worker.WorkerSubdomainOutputReference.getNumberAttribute">GetNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-cloudflare.worker.WorkerSubdomainOutputReference.getNumberListAttribute">GetNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-cloudflare.worker.WorkerSubdomainOutputReference.getNumberMapAttribute">GetNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-cloudflare.worker.WorkerSubdomainOutputReference.getStringAttribute">GetStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-cloudflare.worker.WorkerSubdomainOutputReference.getStringMapAttribute">GetStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-cloudflare.worker.WorkerSubdomainOutputReference.interpolationForAttribute">InterpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-cloudflare.worker.WorkerSubdomainOutputReference.resolve">Resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktn/provider-cloudflare.worker.WorkerSubdomainOutputReference.toString">ToString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktn/provider-cloudflare.worker.WorkerSubdomainOutputReference.resetEnabled">ResetEnabled</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-cloudflare.worker.WorkerSubdomainOutputReference.resetPreviewsEnabled">ResetPreviewsEnabled</a></code> | *No description.* |

---

##### `ComputeFqn` <a name="ComputeFqn" id="@cdktn/provider-cloudflare.worker.WorkerSubdomainOutputReference.computeFqn"></a>

```go
func ComputeFqn() *string
```

##### `GetAnyMapAttribute` <a name="GetAnyMapAttribute" id="@cdktn/provider-cloudflare.worker.WorkerSubdomainOutputReference.getAnyMapAttribute"></a>

```go
func GetAnyMapAttribute(terraformAttribute *string) *map[string]interface{}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-cloudflare.worker.WorkerSubdomainOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetBooleanAttribute` <a name="GetBooleanAttribute" id="@cdktn/provider-cloudflare.worker.WorkerSubdomainOutputReference.getBooleanAttribute"></a>

```go
func GetBooleanAttribute(terraformAttribute *string) IResolvable
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-cloudflare.worker.WorkerSubdomainOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetBooleanMapAttribute` <a name="GetBooleanMapAttribute" id="@cdktn/provider-cloudflare.worker.WorkerSubdomainOutputReference.getBooleanMapAttribute"></a>

```go
func GetBooleanMapAttribute(terraformAttribute *string) *map[string]*bool
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-cloudflare.worker.WorkerSubdomainOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetListAttribute` <a name="GetListAttribute" id="@cdktn/provider-cloudflare.worker.WorkerSubdomainOutputReference.getListAttribute"></a>

```go
func GetListAttribute(terraformAttribute *string) *[]*string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-cloudflare.worker.WorkerSubdomainOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberAttribute` <a name="GetNumberAttribute" id="@cdktn/provider-cloudflare.worker.WorkerSubdomainOutputReference.getNumberAttribute"></a>

```go
func GetNumberAttribute(terraformAttribute *string) *f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-cloudflare.worker.WorkerSubdomainOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberListAttribute` <a name="GetNumberListAttribute" id="@cdktn/provider-cloudflare.worker.WorkerSubdomainOutputReference.getNumberListAttribute"></a>

```go
func GetNumberListAttribute(terraformAttribute *string) *[]*f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-cloudflare.worker.WorkerSubdomainOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberMapAttribute` <a name="GetNumberMapAttribute" id="@cdktn/provider-cloudflare.worker.WorkerSubdomainOutputReference.getNumberMapAttribute"></a>

```go
func GetNumberMapAttribute(terraformAttribute *string) *map[string]*f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-cloudflare.worker.WorkerSubdomainOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetStringAttribute` <a name="GetStringAttribute" id="@cdktn/provider-cloudflare.worker.WorkerSubdomainOutputReference.getStringAttribute"></a>

```go
func GetStringAttribute(terraformAttribute *string) *string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-cloudflare.worker.WorkerSubdomainOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetStringMapAttribute` <a name="GetStringMapAttribute" id="@cdktn/provider-cloudflare.worker.WorkerSubdomainOutputReference.getStringMapAttribute"></a>

```go
func GetStringMapAttribute(terraformAttribute *string) *map[string]*string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-cloudflare.worker.WorkerSubdomainOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `InterpolationForAttribute` <a name="InterpolationForAttribute" id="@cdktn/provider-cloudflare.worker.WorkerSubdomainOutputReference.interpolationForAttribute"></a>

```go
func InterpolationForAttribute(property *string) IResolvable
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktn/provider-cloudflare.worker.WorkerSubdomainOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* *string

---

##### `Resolve` <a name="Resolve" id="@cdktn/provider-cloudflare.worker.WorkerSubdomainOutputReference.resolve"></a>

```go
func Resolve(_context IResolveContext) interface{}
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktn/provider-cloudflare.worker.WorkerSubdomainOutputReference.resolve.parameter._context"></a>

- *Type:* github.com/open-constructs/cdk-terrain-go/cdktn.IResolveContext

---

##### `ToString` <a name="ToString" id="@cdktn/provider-cloudflare.worker.WorkerSubdomainOutputReference.toString"></a>

```go
func ToString() *string
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `ResetEnabled` <a name="ResetEnabled" id="@cdktn/provider-cloudflare.worker.WorkerSubdomainOutputReference.resetEnabled"></a>

```go
func ResetEnabled()
```

##### `ResetPreviewsEnabled` <a name="ResetPreviewsEnabled" id="@cdktn/provider-cloudflare.worker.WorkerSubdomainOutputReference.resetPreviewsEnabled"></a>

```go
func ResetPreviewsEnabled()
```


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-cloudflare.worker.WorkerSubdomainOutputReference.property.creationStack">CreationStack</a></code> | <code>*[]*string</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktn/provider-cloudflare.worker.WorkerSubdomainOutputReference.property.fqn">Fqn</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktn/provider-cloudflare.worker.WorkerSubdomainOutputReference.property.previewUrlSuffix">PreviewUrlSuffix</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktn/provider-cloudflare.worker.WorkerSubdomainOutputReference.property.url">Url</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktn/provider-cloudflare.worker.WorkerSubdomainOutputReference.property.enabledInput">EnabledInput</a></code> | <code>interface{}</code> | *No description.* |
| <code><a href="#@cdktn/provider-cloudflare.worker.WorkerSubdomainOutputReference.property.previewsEnabledInput">PreviewsEnabledInput</a></code> | <code>interface{}</code> | *No description.* |
| <code><a href="#@cdktn/provider-cloudflare.worker.WorkerSubdomainOutputReference.property.enabled">Enabled</a></code> | <code>interface{}</code> | *No description.* |
| <code><a href="#@cdktn/provider-cloudflare.worker.WorkerSubdomainOutputReference.property.previewsEnabled">PreviewsEnabled</a></code> | <code>interface{}</code> | *No description.* |
| <code><a href="#@cdktn/provider-cloudflare.worker.WorkerSubdomainOutputReference.property.internalValue">InternalValue</a></code> | <code>interface{}</code> | *No description.* |

---

##### `CreationStack`<sup>Required</sup> <a name="CreationStack" id="@cdktn/provider-cloudflare.worker.WorkerSubdomainOutputReference.property.creationStack"></a>

```go
func CreationStack() *[]*string
```

- *Type:* *[]*string

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `Fqn`<sup>Required</sup> <a name="Fqn" id="@cdktn/provider-cloudflare.worker.WorkerSubdomainOutputReference.property.fqn"></a>

```go
func Fqn() *string
```

- *Type:* *string

---

##### `PreviewUrlSuffix`<sup>Required</sup> <a name="PreviewUrlSuffix" id="@cdktn/provider-cloudflare.worker.WorkerSubdomainOutputReference.property.previewUrlSuffix"></a>

```go
func PreviewUrlSuffix() *string
```

- *Type:* *string

---

##### `Url`<sup>Required</sup> <a name="Url" id="@cdktn/provider-cloudflare.worker.WorkerSubdomainOutputReference.property.url"></a>

```go
func Url() *string
```

- *Type:* *string

---

##### `EnabledInput`<sup>Optional</sup> <a name="EnabledInput" id="@cdktn/provider-cloudflare.worker.WorkerSubdomainOutputReference.property.enabledInput"></a>

```go
func EnabledInput() interface{}
```

- *Type:* interface{}

---

##### `PreviewsEnabledInput`<sup>Optional</sup> <a name="PreviewsEnabledInput" id="@cdktn/provider-cloudflare.worker.WorkerSubdomainOutputReference.property.previewsEnabledInput"></a>

```go
func PreviewsEnabledInput() interface{}
```

- *Type:* interface{}

---

##### `Enabled`<sup>Required</sup> <a name="Enabled" id="@cdktn/provider-cloudflare.worker.WorkerSubdomainOutputReference.property.enabled"></a>

```go
func Enabled() interface{}
```

- *Type:* interface{}

---

##### `PreviewsEnabled`<sup>Required</sup> <a name="PreviewsEnabled" id="@cdktn/provider-cloudflare.worker.WorkerSubdomainOutputReference.property.previewsEnabled"></a>

```go
func PreviewsEnabled() interface{}
```

- *Type:* interface{}

---

##### `InternalValue`<sup>Optional</sup> <a name="InternalValue" id="@cdktn/provider-cloudflare.worker.WorkerSubdomainOutputReference.property.internalValue"></a>

```go
func InternalValue() interface{}
```

- *Type:* interface{}

---


### WorkerTailConsumersList <a name="WorkerTailConsumersList" id="@cdktn/provider-cloudflare.worker.WorkerTailConsumersList"></a>

#### Initializers <a name="Initializers" id="@cdktn/provider-cloudflare.worker.WorkerTailConsumersList.Initializer"></a>

```go
import "github.com/cdktn-io/cdktn-provider-cloudflare-go/cloudflare/v16/worker"

worker.NewWorkerTailConsumersList(terraformResource IInterpolatingParent, terraformAttribute *string, wrapsSet *bool) WorkerTailConsumersList
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-cloudflare.worker.WorkerTailConsumersList.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>github.com/open-constructs/cdk-terrain-go/cdktn.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktn/provider-cloudflare.worker.WorkerTailConsumersList.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>*string</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#@cdktn/provider-cloudflare.worker.WorkerTailConsumersList.Initializer.parameter.wrapsSet">wrapsSet</a></code> | <code>*bool</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktn/provider-cloudflare.worker.WorkerTailConsumersList.Initializer.parameter.terraformResource"></a>

- *Type:* github.com/open-constructs/cdk-terrain-go/cdktn.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-cloudflare.worker.WorkerTailConsumersList.Initializer.parameter.terraformAttribute"></a>

- *Type:* *string

The attribute on the parent resource this class is referencing.

---

##### `wrapsSet`<sup>Required</sup> <a name="wrapsSet" id="@cdktn/provider-cloudflare.worker.WorkerTailConsumersList.Initializer.parameter.wrapsSet"></a>

- *Type:* *bool

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-cloudflare.worker.WorkerTailConsumersList.allWithMapKey">AllWithMapKey</a></code> | Creating an iterator for this complex list. |
| <code><a href="#@cdktn/provider-cloudflare.worker.WorkerTailConsumersList.computeFqn">ComputeFqn</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-cloudflare.worker.WorkerTailConsumersList.resolve">Resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktn/provider-cloudflare.worker.WorkerTailConsumersList.toString">ToString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktn/provider-cloudflare.worker.WorkerTailConsumersList.get">Get</a></code> | *No description.* |

---

##### `AllWithMapKey` <a name="AllWithMapKey" id="@cdktn/provider-cloudflare.worker.WorkerTailConsumersList.allWithMapKey"></a>

```go
func AllWithMapKey(mapKeyAttributeName *string) DynamicListTerraformIterator
```

Creating an iterator for this complex list.

The list will be converted into a map with the mapKeyAttributeName as the key.

###### `mapKeyAttributeName`<sup>Required</sup> <a name="mapKeyAttributeName" id="@cdktn/provider-cloudflare.worker.WorkerTailConsumersList.allWithMapKey.parameter.mapKeyAttributeName"></a>

- *Type:* *string

---

##### `ComputeFqn` <a name="ComputeFqn" id="@cdktn/provider-cloudflare.worker.WorkerTailConsumersList.computeFqn"></a>

```go
func ComputeFqn() *string
```

##### `Resolve` <a name="Resolve" id="@cdktn/provider-cloudflare.worker.WorkerTailConsumersList.resolve"></a>

```go
func Resolve(_context IResolveContext) interface{}
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktn/provider-cloudflare.worker.WorkerTailConsumersList.resolve.parameter._context"></a>

- *Type:* github.com/open-constructs/cdk-terrain-go/cdktn.IResolveContext

---

##### `ToString` <a name="ToString" id="@cdktn/provider-cloudflare.worker.WorkerTailConsumersList.toString"></a>

```go
func ToString() *string
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `Get` <a name="Get" id="@cdktn/provider-cloudflare.worker.WorkerTailConsumersList.get"></a>

```go
func Get(index *f64) WorkerTailConsumersOutputReference
```

###### `index`<sup>Required</sup> <a name="index" id="@cdktn/provider-cloudflare.worker.WorkerTailConsumersList.get.parameter.index"></a>

- *Type:* *f64

the index of the item to return.

---


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-cloudflare.worker.WorkerTailConsumersList.property.creationStack">CreationStack</a></code> | <code>*[]*string</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktn/provider-cloudflare.worker.WorkerTailConsumersList.property.fqn">Fqn</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktn/provider-cloudflare.worker.WorkerTailConsumersList.property.internalValue">InternalValue</a></code> | <code>interface{}</code> | *No description.* |

---

##### `CreationStack`<sup>Required</sup> <a name="CreationStack" id="@cdktn/provider-cloudflare.worker.WorkerTailConsumersList.property.creationStack"></a>

```go
func CreationStack() *[]*string
```

- *Type:* *[]*string

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `Fqn`<sup>Required</sup> <a name="Fqn" id="@cdktn/provider-cloudflare.worker.WorkerTailConsumersList.property.fqn"></a>

```go
func Fqn() *string
```

- *Type:* *string

---

##### `InternalValue`<sup>Optional</sup> <a name="InternalValue" id="@cdktn/provider-cloudflare.worker.WorkerTailConsumersList.property.internalValue"></a>

```go
func InternalValue() interface{}
```

- *Type:* interface{}

---


### WorkerTailConsumersOutputReference <a name="WorkerTailConsumersOutputReference" id="@cdktn/provider-cloudflare.worker.WorkerTailConsumersOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktn/provider-cloudflare.worker.WorkerTailConsumersOutputReference.Initializer"></a>

```go
import "github.com/cdktn-io/cdktn-provider-cloudflare-go/cloudflare/v16/worker"

worker.NewWorkerTailConsumersOutputReference(terraformResource IInterpolatingParent, terraformAttribute *string, complexObjectIndex *f64, complexObjectIsFromSet *bool) WorkerTailConsumersOutputReference
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-cloudflare.worker.WorkerTailConsumersOutputReference.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>github.com/open-constructs/cdk-terrain-go/cdktn.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktn/provider-cloudflare.worker.WorkerTailConsumersOutputReference.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>*string</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#@cdktn/provider-cloudflare.worker.WorkerTailConsumersOutputReference.Initializer.parameter.complexObjectIndex">complexObjectIndex</a></code> | <code>*f64</code> | the index of this item in the list. |
| <code><a href="#@cdktn/provider-cloudflare.worker.WorkerTailConsumersOutputReference.Initializer.parameter.complexObjectIsFromSet">complexObjectIsFromSet</a></code> | <code>*bool</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktn/provider-cloudflare.worker.WorkerTailConsumersOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* github.com/open-constructs/cdk-terrain-go/cdktn.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-cloudflare.worker.WorkerTailConsumersOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* *string

The attribute on the parent resource this class is referencing.

---

##### `complexObjectIndex`<sup>Required</sup> <a name="complexObjectIndex" id="@cdktn/provider-cloudflare.worker.WorkerTailConsumersOutputReference.Initializer.parameter.complexObjectIndex"></a>

- *Type:* *f64

the index of this item in the list.

---

##### `complexObjectIsFromSet`<sup>Required</sup> <a name="complexObjectIsFromSet" id="@cdktn/provider-cloudflare.worker.WorkerTailConsumersOutputReference.Initializer.parameter.complexObjectIsFromSet"></a>

- *Type:* *bool

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-cloudflare.worker.WorkerTailConsumersOutputReference.computeFqn">ComputeFqn</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-cloudflare.worker.WorkerTailConsumersOutputReference.getAnyMapAttribute">GetAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-cloudflare.worker.WorkerTailConsumersOutputReference.getBooleanAttribute">GetBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-cloudflare.worker.WorkerTailConsumersOutputReference.getBooleanMapAttribute">GetBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-cloudflare.worker.WorkerTailConsumersOutputReference.getListAttribute">GetListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-cloudflare.worker.WorkerTailConsumersOutputReference.getNumberAttribute">GetNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-cloudflare.worker.WorkerTailConsumersOutputReference.getNumberListAttribute">GetNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-cloudflare.worker.WorkerTailConsumersOutputReference.getNumberMapAttribute">GetNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-cloudflare.worker.WorkerTailConsumersOutputReference.getStringAttribute">GetStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-cloudflare.worker.WorkerTailConsumersOutputReference.getStringMapAttribute">GetStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-cloudflare.worker.WorkerTailConsumersOutputReference.interpolationForAttribute">InterpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-cloudflare.worker.WorkerTailConsumersOutputReference.resolve">Resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktn/provider-cloudflare.worker.WorkerTailConsumersOutputReference.toString">ToString</a></code> | Return a string representation of this resolvable object. |

---

##### `ComputeFqn` <a name="ComputeFqn" id="@cdktn/provider-cloudflare.worker.WorkerTailConsumersOutputReference.computeFqn"></a>

```go
func ComputeFqn() *string
```

##### `GetAnyMapAttribute` <a name="GetAnyMapAttribute" id="@cdktn/provider-cloudflare.worker.WorkerTailConsumersOutputReference.getAnyMapAttribute"></a>

```go
func GetAnyMapAttribute(terraformAttribute *string) *map[string]interface{}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-cloudflare.worker.WorkerTailConsumersOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetBooleanAttribute` <a name="GetBooleanAttribute" id="@cdktn/provider-cloudflare.worker.WorkerTailConsumersOutputReference.getBooleanAttribute"></a>

```go
func GetBooleanAttribute(terraformAttribute *string) IResolvable
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-cloudflare.worker.WorkerTailConsumersOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetBooleanMapAttribute` <a name="GetBooleanMapAttribute" id="@cdktn/provider-cloudflare.worker.WorkerTailConsumersOutputReference.getBooleanMapAttribute"></a>

```go
func GetBooleanMapAttribute(terraformAttribute *string) *map[string]*bool
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-cloudflare.worker.WorkerTailConsumersOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetListAttribute` <a name="GetListAttribute" id="@cdktn/provider-cloudflare.worker.WorkerTailConsumersOutputReference.getListAttribute"></a>

```go
func GetListAttribute(terraformAttribute *string) *[]*string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-cloudflare.worker.WorkerTailConsumersOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberAttribute` <a name="GetNumberAttribute" id="@cdktn/provider-cloudflare.worker.WorkerTailConsumersOutputReference.getNumberAttribute"></a>

```go
func GetNumberAttribute(terraformAttribute *string) *f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-cloudflare.worker.WorkerTailConsumersOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberListAttribute` <a name="GetNumberListAttribute" id="@cdktn/provider-cloudflare.worker.WorkerTailConsumersOutputReference.getNumberListAttribute"></a>

```go
func GetNumberListAttribute(terraformAttribute *string) *[]*f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-cloudflare.worker.WorkerTailConsumersOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberMapAttribute` <a name="GetNumberMapAttribute" id="@cdktn/provider-cloudflare.worker.WorkerTailConsumersOutputReference.getNumberMapAttribute"></a>

```go
func GetNumberMapAttribute(terraformAttribute *string) *map[string]*f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-cloudflare.worker.WorkerTailConsumersOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetStringAttribute` <a name="GetStringAttribute" id="@cdktn/provider-cloudflare.worker.WorkerTailConsumersOutputReference.getStringAttribute"></a>

```go
func GetStringAttribute(terraformAttribute *string) *string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-cloudflare.worker.WorkerTailConsumersOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetStringMapAttribute` <a name="GetStringMapAttribute" id="@cdktn/provider-cloudflare.worker.WorkerTailConsumersOutputReference.getStringMapAttribute"></a>

```go
func GetStringMapAttribute(terraformAttribute *string) *map[string]*string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-cloudflare.worker.WorkerTailConsumersOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `InterpolationForAttribute` <a name="InterpolationForAttribute" id="@cdktn/provider-cloudflare.worker.WorkerTailConsumersOutputReference.interpolationForAttribute"></a>

```go
func InterpolationForAttribute(property *string) IResolvable
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktn/provider-cloudflare.worker.WorkerTailConsumersOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* *string

---

##### `Resolve` <a name="Resolve" id="@cdktn/provider-cloudflare.worker.WorkerTailConsumersOutputReference.resolve"></a>

```go
func Resolve(_context IResolveContext) interface{}
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktn/provider-cloudflare.worker.WorkerTailConsumersOutputReference.resolve.parameter._context"></a>

- *Type:* github.com/open-constructs/cdk-terrain-go/cdktn.IResolveContext

---

##### `ToString` <a name="ToString" id="@cdktn/provider-cloudflare.worker.WorkerTailConsumersOutputReference.toString"></a>

```go
func ToString() *string
```

Return a string representation of this resolvable object.

Returns a reversible string representation.


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-cloudflare.worker.WorkerTailConsumersOutputReference.property.creationStack">CreationStack</a></code> | <code>*[]*string</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktn/provider-cloudflare.worker.WorkerTailConsumersOutputReference.property.fqn">Fqn</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktn/provider-cloudflare.worker.WorkerTailConsumersOutputReference.property.nameInput">NameInput</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktn/provider-cloudflare.worker.WorkerTailConsumersOutputReference.property.name">Name</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktn/provider-cloudflare.worker.WorkerTailConsumersOutputReference.property.internalValue">InternalValue</a></code> | <code>interface{}</code> | *No description.* |

---

##### `CreationStack`<sup>Required</sup> <a name="CreationStack" id="@cdktn/provider-cloudflare.worker.WorkerTailConsumersOutputReference.property.creationStack"></a>

```go
func CreationStack() *[]*string
```

- *Type:* *[]*string

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `Fqn`<sup>Required</sup> <a name="Fqn" id="@cdktn/provider-cloudflare.worker.WorkerTailConsumersOutputReference.property.fqn"></a>

```go
func Fqn() *string
```

- *Type:* *string

---

##### `NameInput`<sup>Optional</sup> <a name="NameInput" id="@cdktn/provider-cloudflare.worker.WorkerTailConsumersOutputReference.property.nameInput"></a>

```go
func NameInput() *string
```

- *Type:* *string

---

##### `Name`<sup>Required</sup> <a name="Name" id="@cdktn/provider-cloudflare.worker.WorkerTailConsumersOutputReference.property.name"></a>

```go
func Name() *string
```

- *Type:* *string

---

##### `InternalValue`<sup>Optional</sup> <a name="InternalValue" id="@cdktn/provider-cloudflare.worker.WorkerTailConsumersOutputReference.property.internalValue"></a>

```go
func InternalValue() interface{}
```

- *Type:* interface{}

---



