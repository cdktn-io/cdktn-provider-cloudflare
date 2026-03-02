# `r2BucketSippy` Submodule <a name="`r2BucketSippy` Submodule" id="@cdktn/provider-cloudflare.r2BucketSippy"></a>

## Constructs <a name="Constructs" id="Constructs"></a>

### R2BucketSippy <a name="R2BucketSippy" id="@cdktn/provider-cloudflare.r2BucketSippy.R2BucketSippy"></a>

Represents a {@link https://registry.terraform.io/providers/cloudflare/cloudflare/5.18.0/docs/resources/r2_bucket_sippy cloudflare_r2_bucket_sippy}.

#### Initializers <a name="Initializers" id="@cdktn/provider-cloudflare.r2BucketSippy.R2BucketSippy.Initializer"></a>

```go
import "github.com/cdktn-io/cdktn-provider-cloudflare-go/cloudflare/v14/r2bucketsippy"

r2bucketsippy.NewR2BucketSippy(scope Construct, id *string, config R2BucketSippyConfig) R2BucketSippy
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-cloudflare.r2BucketSippy.R2BucketSippy.Initializer.parameter.scope">scope</a></code> | <code>github.com/aws/constructs-go/constructs/v10.Construct</code> | The scope in which to define this construct. |
| <code><a href="#@cdktn/provider-cloudflare.r2BucketSippy.R2BucketSippy.Initializer.parameter.id">id</a></code> | <code>*string</code> | The scoped construct ID. |
| <code><a href="#@cdktn/provider-cloudflare.r2BucketSippy.R2BucketSippy.Initializer.parameter.config">config</a></code> | <code><a href="#@cdktn/provider-cloudflare.r2BucketSippy.R2BucketSippyConfig">R2BucketSippyConfig</a></code> | *No description.* |

---

##### `scope`<sup>Required</sup> <a name="scope" id="@cdktn/provider-cloudflare.r2BucketSippy.R2BucketSippy.Initializer.parameter.scope"></a>

- *Type:* github.com/aws/constructs-go/constructs/v10.Construct

The scope in which to define this construct.

---

##### `id`<sup>Required</sup> <a name="id" id="@cdktn/provider-cloudflare.r2BucketSippy.R2BucketSippy.Initializer.parameter.id"></a>

- *Type:* *string

The scoped construct ID.

Must be unique amongst siblings in the same scope

---

##### `config`<sup>Required</sup> <a name="config" id="@cdktn/provider-cloudflare.r2BucketSippy.R2BucketSippy.Initializer.parameter.config"></a>

- *Type:* <a href="#@cdktn/provider-cloudflare.r2BucketSippy.R2BucketSippyConfig">R2BucketSippyConfig</a>

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-cloudflare.r2BucketSippy.R2BucketSippy.toString">ToString</a></code> | Returns a string representation of this construct. |
| <code><a href="#@cdktn/provider-cloudflare.r2BucketSippy.R2BucketSippy.with">With</a></code> | Applies one or more mixins to this construct. |
| <code><a href="#@cdktn/provider-cloudflare.r2BucketSippy.R2BucketSippy.addOverride">AddOverride</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-cloudflare.r2BucketSippy.R2BucketSippy.overrideLogicalId">OverrideLogicalId</a></code> | Overrides the auto-generated logical ID with a specific ID. |
| <code><a href="#@cdktn/provider-cloudflare.r2BucketSippy.R2BucketSippy.resetOverrideLogicalId">ResetOverrideLogicalId</a></code> | Resets a previously passed logical Id to use the auto-generated logical id again. |
| <code><a href="#@cdktn/provider-cloudflare.r2BucketSippy.R2BucketSippy.toHclTerraform">ToHclTerraform</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-cloudflare.r2BucketSippy.R2BucketSippy.toMetadata">ToMetadata</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-cloudflare.r2BucketSippy.R2BucketSippy.toTerraform">ToTerraform</a></code> | Adds this resource to the terraform JSON output. |
| <code><a href="#@cdktn/provider-cloudflare.r2BucketSippy.R2BucketSippy.addMoveTarget">AddMoveTarget</a></code> | Adds a user defined moveTarget string to this resource to be later used in .moveTo(moveTarget) to resolve the location of the move. |
| <code><a href="#@cdktn/provider-cloudflare.r2BucketSippy.R2BucketSippy.getAnyMapAttribute">GetAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-cloudflare.r2BucketSippy.R2BucketSippy.getBooleanAttribute">GetBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-cloudflare.r2BucketSippy.R2BucketSippy.getBooleanMapAttribute">GetBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-cloudflare.r2BucketSippy.R2BucketSippy.getListAttribute">GetListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-cloudflare.r2BucketSippy.R2BucketSippy.getNumberAttribute">GetNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-cloudflare.r2BucketSippy.R2BucketSippy.getNumberListAttribute">GetNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-cloudflare.r2BucketSippy.R2BucketSippy.getNumberMapAttribute">GetNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-cloudflare.r2BucketSippy.R2BucketSippy.getStringAttribute">GetStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-cloudflare.r2BucketSippy.R2BucketSippy.getStringMapAttribute">GetStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-cloudflare.r2BucketSippy.R2BucketSippy.hasResourceMove">HasResourceMove</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-cloudflare.r2BucketSippy.R2BucketSippy.importFrom">ImportFrom</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-cloudflare.r2BucketSippy.R2BucketSippy.interpolationForAttribute">InterpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-cloudflare.r2BucketSippy.R2BucketSippy.moveFromId">MoveFromId</a></code> | Move the resource corresponding to "id" to this resource. |
| <code><a href="#@cdktn/provider-cloudflare.r2BucketSippy.R2BucketSippy.moveTo">MoveTo</a></code> | Moves this resource to the target resource given by moveTarget. |
| <code><a href="#@cdktn/provider-cloudflare.r2BucketSippy.R2BucketSippy.moveToId">MoveToId</a></code> | Moves this resource to the resource corresponding to "id". |
| <code><a href="#@cdktn/provider-cloudflare.r2BucketSippy.R2BucketSippy.putDestination">PutDestination</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-cloudflare.r2BucketSippy.R2BucketSippy.putSource">PutSource</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-cloudflare.r2BucketSippy.R2BucketSippy.resetDestination">ResetDestination</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-cloudflare.r2BucketSippy.R2BucketSippy.resetJurisdiction">ResetJurisdiction</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-cloudflare.r2BucketSippy.R2BucketSippy.resetSource">ResetSource</a></code> | *No description.* |

---

##### `ToString` <a name="ToString" id="@cdktn/provider-cloudflare.r2BucketSippy.R2BucketSippy.toString"></a>

```go
func ToString() *string
```

Returns a string representation of this construct.

##### `With` <a name="With" id="@cdktn/provider-cloudflare.r2BucketSippy.R2BucketSippy.with"></a>

```go
func With(mixins ...IMixin) IConstruct
```

Applies one or more mixins to this construct.

Mixins are applied in order. The list of constructs is captured at the
start of the call, so constructs added by a mixin will not be visited.
Use multiple `with()` calls if subsequent mixins should apply to added
constructs.

###### `mixins`<sup>Required</sup> <a name="mixins" id="@cdktn/provider-cloudflare.r2BucketSippy.R2BucketSippy.with.parameter.mixins"></a>

- *Type:* ...github.com/aws/constructs-go/constructs/v10.IMixin

The mixins to apply.

---

##### `AddOverride` <a name="AddOverride" id="@cdktn/provider-cloudflare.r2BucketSippy.R2BucketSippy.addOverride"></a>

```go
func AddOverride(path *string, value interface{})
```

###### `path`<sup>Required</sup> <a name="path" id="@cdktn/provider-cloudflare.r2BucketSippy.R2BucketSippy.addOverride.parameter.path"></a>

- *Type:* *string

---

###### `value`<sup>Required</sup> <a name="value" id="@cdktn/provider-cloudflare.r2BucketSippy.R2BucketSippy.addOverride.parameter.value"></a>

- *Type:* interface{}

---

##### `OverrideLogicalId` <a name="OverrideLogicalId" id="@cdktn/provider-cloudflare.r2BucketSippy.R2BucketSippy.overrideLogicalId"></a>

```go
func OverrideLogicalId(newLogicalId *string)
```

Overrides the auto-generated logical ID with a specific ID.

###### `newLogicalId`<sup>Required</sup> <a name="newLogicalId" id="@cdktn/provider-cloudflare.r2BucketSippy.R2BucketSippy.overrideLogicalId.parameter.newLogicalId"></a>

- *Type:* *string

The new logical ID to use for this stack element.

---

##### `ResetOverrideLogicalId` <a name="ResetOverrideLogicalId" id="@cdktn/provider-cloudflare.r2BucketSippy.R2BucketSippy.resetOverrideLogicalId"></a>

```go
func ResetOverrideLogicalId()
```

Resets a previously passed logical Id to use the auto-generated logical id again.

##### `ToHclTerraform` <a name="ToHclTerraform" id="@cdktn/provider-cloudflare.r2BucketSippy.R2BucketSippy.toHclTerraform"></a>

```go
func ToHclTerraform() interface{}
```

##### `ToMetadata` <a name="ToMetadata" id="@cdktn/provider-cloudflare.r2BucketSippy.R2BucketSippy.toMetadata"></a>

```go
func ToMetadata() interface{}
```

##### `ToTerraform` <a name="ToTerraform" id="@cdktn/provider-cloudflare.r2BucketSippy.R2BucketSippy.toTerraform"></a>

```go
func ToTerraform() interface{}
```

Adds this resource to the terraform JSON output.

##### `AddMoveTarget` <a name="AddMoveTarget" id="@cdktn/provider-cloudflare.r2BucketSippy.R2BucketSippy.addMoveTarget"></a>

```go
func AddMoveTarget(moveTarget *string)
```

Adds a user defined moveTarget string to this resource to be later used in .moveTo(moveTarget) to resolve the location of the move.

###### `moveTarget`<sup>Required</sup> <a name="moveTarget" id="@cdktn/provider-cloudflare.r2BucketSippy.R2BucketSippy.addMoveTarget.parameter.moveTarget"></a>

- *Type:* *string

The string move target that will correspond to this resource.

---

##### `GetAnyMapAttribute` <a name="GetAnyMapAttribute" id="@cdktn/provider-cloudflare.r2BucketSippy.R2BucketSippy.getAnyMapAttribute"></a>

```go
func GetAnyMapAttribute(terraformAttribute *string) *map[string]interface{}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-cloudflare.r2BucketSippy.R2BucketSippy.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetBooleanAttribute` <a name="GetBooleanAttribute" id="@cdktn/provider-cloudflare.r2BucketSippy.R2BucketSippy.getBooleanAttribute"></a>

```go
func GetBooleanAttribute(terraformAttribute *string) IResolvable
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-cloudflare.r2BucketSippy.R2BucketSippy.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetBooleanMapAttribute` <a name="GetBooleanMapAttribute" id="@cdktn/provider-cloudflare.r2BucketSippy.R2BucketSippy.getBooleanMapAttribute"></a>

```go
func GetBooleanMapAttribute(terraformAttribute *string) *map[string]*bool
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-cloudflare.r2BucketSippy.R2BucketSippy.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetListAttribute` <a name="GetListAttribute" id="@cdktn/provider-cloudflare.r2BucketSippy.R2BucketSippy.getListAttribute"></a>

```go
func GetListAttribute(terraformAttribute *string) *[]*string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-cloudflare.r2BucketSippy.R2BucketSippy.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberAttribute` <a name="GetNumberAttribute" id="@cdktn/provider-cloudflare.r2BucketSippy.R2BucketSippy.getNumberAttribute"></a>

```go
func GetNumberAttribute(terraformAttribute *string) *f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-cloudflare.r2BucketSippy.R2BucketSippy.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberListAttribute` <a name="GetNumberListAttribute" id="@cdktn/provider-cloudflare.r2BucketSippy.R2BucketSippy.getNumberListAttribute"></a>

```go
func GetNumberListAttribute(terraformAttribute *string) *[]*f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-cloudflare.r2BucketSippy.R2BucketSippy.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberMapAttribute` <a name="GetNumberMapAttribute" id="@cdktn/provider-cloudflare.r2BucketSippy.R2BucketSippy.getNumberMapAttribute"></a>

```go
func GetNumberMapAttribute(terraformAttribute *string) *map[string]*f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-cloudflare.r2BucketSippy.R2BucketSippy.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetStringAttribute` <a name="GetStringAttribute" id="@cdktn/provider-cloudflare.r2BucketSippy.R2BucketSippy.getStringAttribute"></a>

```go
func GetStringAttribute(terraformAttribute *string) *string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-cloudflare.r2BucketSippy.R2BucketSippy.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetStringMapAttribute` <a name="GetStringMapAttribute" id="@cdktn/provider-cloudflare.r2BucketSippy.R2BucketSippy.getStringMapAttribute"></a>

```go
func GetStringMapAttribute(terraformAttribute *string) *map[string]*string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-cloudflare.r2BucketSippy.R2BucketSippy.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `HasResourceMove` <a name="HasResourceMove" id="@cdktn/provider-cloudflare.r2BucketSippy.R2BucketSippy.hasResourceMove"></a>

```go
func HasResourceMove() interface{}
```

##### `ImportFrom` <a name="ImportFrom" id="@cdktn/provider-cloudflare.r2BucketSippy.R2BucketSippy.importFrom"></a>

```go
func ImportFrom(id *string, provider TerraformProvider)
```

###### `id`<sup>Required</sup> <a name="id" id="@cdktn/provider-cloudflare.r2BucketSippy.R2BucketSippy.importFrom.parameter.id"></a>

- *Type:* *string

---

###### `provider`<sup>Optional</sup> <a name="provider" id="@cdktn/provider-cloudflare.r2BucketSippy.R2BucketSippy.importFrom.parameter.provider"></a>

- *Type:* github.com/open-constructs/cdk-terrain-go/cdktn.TerraformProvider

---

##### `InterpolationForAttribute` <a name="InterpolationForAttribute" id="@cdktn/provider-cloudflare.r2BucketSippy.R2BucketSippy.interpolationForAttribute"></a>

```go
func InterpolationForAttribute(terraformAttribute *string) IResolvable
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-cloudflare.r2BucketSippy.R2BucketSippy.interpolationForAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `MoveFromId` <a name="MoveFromId" id="@cdktn/provider-cloudflare.r2BucketSippy.R2BucketSippy.moveFromId"></a>

```go
func MoveFromId(id *string)
```

Move the resource corresponding to "id" to this resource.

Note that the resource being moved from must be marked as moved using it's instance function.

###### `id`<sup>Required</sup> <a name="id" id="@cdktn/provider-cloudflare.r2BucketSippy.R2BucketSippy.moveFromId.parameter.id"></a>

- *Type:* *string

Full id of resource being moved from, e.g. "aws_s3_bucket.example".

---

##### `MoveTo` <a name="MoveTo" id="@cdktn/provider-cloudflare.r2BucketSippy.R2BucketSippy.moveTo"></a>

```go
func MoveTo(moveTarget *string, index interface{})
```

Moves this resource to the target resource given by moveTarget.

###### `moveTarget`<sup>Required</sup> <a name="moveTarget" id="@cdktn/provider-cloudflare.r2BucketSippy.R2BucketSippy.moveTo.parameter.moveTarget"></a>

- *Type:* *string

The previously set user defined string set by .addMoveTarget() corresponding to the resource to move to.

---

###### `index`<sup>Optional</sup> <a name="index" id="@cdktn/provider-cloudflare.r2BucketSippy.R2BucketSippy.moveTo.parameter.index"></a>

- *Type:* interface{}

Optional The index corresponding to the key the resource is to appear in the foreach of a resource to move to.

---

##### `MoveToId` <a name="MoveToId" id="@cdktn/provider-cloudflare.r2BucketSippy.R2BucketSippy.moveToId"></a>

```go
func MoveToId(id *string)
```

Moves this resource to the resource corresponding to "id".

###### `id`<sup>Required</sup> <a name="id" id="@cdktn/provider-cloudflare.r2BucketSippy.R2BucketSippy.moveToId.parameter.id"></a>

- *Type:* *string

Full id of resource to move to, e.g. "aws_s3_bucket.example".

---

##### `PutDestination` <a name="PutDestination" id="@cdktn/provider-cloudflare.r2BucketSippy.R2BucketSippy.putDestination"></a>

```go
func PutDestination(value R2BucketSippyDestination)
```

###### `value`<sup>Required</sup> <a name="value" id="@cdktn/provider-cloudflare.r2BucketSippy.R2BucketSippy.putDestination.parameter.value"></a>

- *Type:* <a href="#@cdktn/provider-cloudflare.r2BucketSippy.R2BucketSippyDestination">R2BucketSippyDestination</a>

---

##### `PutSource` <a name="PutSource" id="@cdktn/provider-cloudflare.r2BucketSippy.R2BucketSippy.putSource"></a>

```go
func PutSource(value R2BucketSippySource)
```

###### `value`<sup>Required</sup> <a name="value" id="@cdktn/provider-cloudflare.r2BucketSippy.R2BucketSippy.putSource.parameter.value"></a>

- *Type:* <a href="#@cdktn/provider-cloudflare.r2BucketSippy.R2BucketSippySource">R2BucketSippySource</a>

---

##### `ResetDestination` <a name="ResetDestination" id="@cdktn/provider-cloudflare.r2BucketSippy.R2BucketSippy.resetDestination"></a>

```go
func ResetDestination()
```

##### `ResetJurisdiction` <a name="ResetJurisdiction" id="@cdktn/provider-cloudflare.r2BucketSippy.R2BucketSippy.resetJurisdiction"></a>

```go
func ResetJurisdiction()
```

##### `ResetSource` <a name="ResetSource" id="@cdktn/provider-cloudflare.r2BucketSippy.R2BucketSippy.resetSource"></a>

```go
func ResetSource()
```

#### Static Functions <a name="Static Functions" id="Static Functions"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-cloudflare.r2BucketSippy.R2BucketSippy.isConstruct">IsConstruct</a></code> | Checks if `x` is a construct. |
| <code><a href="#@cdktn/provider-cloudflare.r2BucketSippy.R2BucketSippy.isTerraformElement">IsTerraformElement</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-cloudflare.r2BucketSippy.R2BucketSippy.isTerraformResource">IsTerraformResource</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-cloudflare.r2BucketSippy.R2BucketSippy.generateConfigForImport">GenerateConfigForImport</a></code> | Generates CDKTN code for importing a R2BucketSippy resource upon running "cdktn plan <stack-name>". |

---

##### `IsConstruct` <a name="IsConstruct" id="@cdktn/provider-cloudflare.r2BucketSippy.R2BucketSippy.isConstruct"></a>

```go
import "github.com/cdktn-io/cdktn-provider-cloudflare-go/cloudflare/v14/r2bucketsippy"

r2bucketsippy.R2BucketSippy_IsConstruct(x interface{}) *bool
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

###### `x`<sup>Required</sup> <a name="x" id="@cdktn/provider-cloudflare.r2BucketSippy.R2BucketSippy.isConstruct.parameter.x"></a>

- *Type:* interface{}

Any object.

---

##### `IsTerraformElement` <a name="IsTerraformElement" id="@cdktn/provider-cloudflare.r2BucketSippy.R2BucketSippy.isTerraformElement"></a>

```go
import "github.com/cdktn-io/cdktn-provider-cloudflare-go/cloudflare/v14/r2bucketsippy"

r2bucketsippy.R2BucketSippy_IsTerraformElement(x interface{}) *bool
```

###### `x`<sup>Required</sup> <a name="x" id="@cdktn/provider-cloudflare.r2BucketSippy.R2BucketSippy.isTerraformElement.parameter.x"></a>

- *Type:* interface{}

---

##### `IsTerraformResource` <a name="IsTerraformResource" id="@cdktn/provider-cloudflare.r2BucketSippy.R2BucketSippy.isTerraformResource"></a>

```go
import "github.com/cdktn-io/cdktn-provider-cloudflare-go/cloudflare/v14/r2bucketsippy"

r2bucketsippy.R2BucketSippy_IsTerraformResource(x interface{}) *bool
```

###### `x`<sup>Required</sup> <a name="x" id="@cdktn/provider-cloudflare.r2BucketSippy.R2BucketSippy.isTerraformResource.parameter.x"></a>

- *Type:* interface{}

---

##### `GenerateConfigForImport` <a name="GenerateConfigForImport" id="@cdktn/provider-cloudflare.r2BucketSippy.R2BucketSippy.generateConfigForImport"></a>

```go
import "github.com/cdktn-io/cdktn-provider-cloudflare-go/cloudflare/v14/r2bucketsippy"

r2bucketsippy.R2BucketSippy_GenerateConfigForImport(scope Construct, importToId *string, importFromId *string, provider TerraformProvider) ImportableResource
```

Generates CDKTN code for importing a R2BucketSippy resource upon running "cdktn plan <stack-name>".

###### `scope`<sup>Required</sup> <a name="scope" id="@cdktn/provider-cloudflare.r2BucketSippy.R2BucketSippy.generateConfigForImport.parameter.scope"></a>

- *Type:* github.com/aws/constructs-go/constructs/v10.Construct

The scope in which to define this construct.

---

###### `importToId`<sup>Required</sup> <a name="importToId" id="@cdktn/provider-cloudflare.r2BucketSippy.R2BucketSippy.generateConfigForImport.parameter.importToId"></a>

- *Type:* *string

The construct id used in the generated config for the R2BucketSippy to import.

---

###### `importFromId`<sup>Required</sup> <a name="importFromId" id="@cdktn/provider-cloudflare.r2BucketSippy.R2BucketSippy.generateConfigForImport.parameter.importFromId"></a>

- *Type:* *string

The id of the existing R2BucketSippy that should be imported.

Refer to the {@link https://registry.terraform.io/providers/cloudflare/cloudflare/5.18.0/docs/resources/r2_bucket_sippy#import import section} in the documentation of this resource for the id to use

---

###### `provider`<sup>Optional</sup> <a name="provider" id="@cdktn/provider-cloudflare.r2BucketSippy.R2BucketSippy.generateConfigForImport.parameter.provider"></a>

- *Type:* github.com/open-constructs/cdk-terrain-go/cdktn.TerraformProvider

? Optional instance of the provider where the R2BucketSippy to import is found.

---

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-cloudflare.r2BucketSippy.R2BucketSippy.property.node">Node</a></code> | <code>github.com/aws/constructs-go/constructs/v10.Node</code> | The tree node. |
| <code><a href="#@cdktn/provider-cloudflare.r2BucketSippy.R2BucketSippy.property.cdktfStack">CdktfStack</a></code> | <code>github.com/open-constructs/cdk-terrain-go/cdktn.TerraformStack</code> | *No description.* |
| <code><a href="#@cdktn/provider-cloudflare.r2BucketSippy.R2BucketSippy.property.fqn">Fqn</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktn/provider-cloudflare.r2BucketSippy.R2BucketSippy.property.friendlyUniqueId">FriendlyUniqueId</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktn/provider-cloudflare.r2BucketSippy.R2BucketSippy.property.terraformMetaArguments">TerraformMetaArguments</a></code> | <code>*map[string]interface{}</code> | *No description.* |
| <code><a href="#@cdktn/provider-cloudflare.r2BucketSippy.R2BucketSippy.property.terraformResourceType">TerraformResourceType</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktn/provider-cloudflare.r2BucketSippy.R2BucketSippy.property.terraformGeneratorMetadata">TerraformGeneratorMetadata</a></code> | <code>github.com/open-constructs/cdk-terrain-go/cdktn.TerraformProviderGeneratorMetadata</code> | *No description.* |
| <code><a href="#@cdktn/provider-cloudflare.r2BucketSippy.R2BucketSippy.property.connection">Connection</a></code> | <code>interface{}</code> | *No description.* |
| <code><a href="#@cdktn/provider-cloudflare.r2BucketSippy.R2BucketSippy.property.count">Count</a></code> | <code>interface{}</code> | *No description.* |
| <code><a href="#@cdktn/provider-cloudflare.r2BucketSippy.R2BucketSippy.property.dependsOn">DependsOn</a></code> | <code>*[]*string</code> | *No description.* |
| <code><a href="#@cdktn/provider-cloudflare.r2BucketSippy.R2BucketSippy.property.forEach">ForEach</a></code> | <code>github.com/open-constructs/cdk-terrain-go/cdktn.ITerraformIterator</code> | *No description.* |
| <code><a href="#@cdktn/provider-cloudflare.r2BucketSippy.R2BucketSippy.property.lifecycle">Lifecycle</a></code> | <code>github.com/open-constructs/cdk-terrain-go/cdktn.TerraformResourceLifecycle</code> | *No description.* |
| <code><a href="#@cdktn/provider-cloudflare.r2BucketSippy.R2BucketSippy.property.provider">Provider</a></code> | <code>github.com/open-constructs/cdk-terrain-go/cdktn.TerraformProvider</code> | *No description.* |
| <code><a href="#@cdktn/provider-cloudflare.r2BucketSippy.R2BucketSippy.property.provisioners">Provisioners</a></code> | <code>*[]interface{}</code> | *No description.* |
| <code><a href="#@cdktn/provider-cloudflare.r2BucketSippy.R2BucketSippy.property.destination">Destination</a></code> | <code><a href="#@cdktn/provider-cloudflare.r2BucketSippy.R2BucketSippyDestinationOutputReference">R2BucketSippyDestinationOutputReference</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-cloudflare.r2BucketSippy.R2BucketSippy.property.enabled">Enabled</a></code> | <code>github.com/open-constructs/cdk-terrain-go/cdktn.IResolvable</code> | *No description.* |
| <code><a href="#@cdktn/provider-cloudflare.r2BucketSippy.R2BucketSippy.property.source">Source</a></code> | <code><a href="#@cdktn/provider-cloudflare.r2BucketSippy.R2BucketSippySourceOutputReference">R2BucketSippySourceOutputReference</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-cloudflare.r2BucketSippy.R2BucketSippy.property.accountIdInput">AccountIdInput</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktn/provider-cloudflare.r2BucketSippy.R2BucketSippy.property.bucketNameInput">BucketNameInput</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktn/provider-cloudflare.r2BucketSippy.R2BucketSippy.property.destinationInput">DestinationInput</a></code> | <code>interface{}</code> | *No description.* |
| <code><a href="#@cdktn/provider-cloudflare.r2BucketSippy.R2BucketSippy.property.jurisdictionInput">JurisdictionInput</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktn/provider-cloudflare.r2BucketSippy.R2BucketSippy.property.sourceInput">SourceInput</a></code> | <code>interface{}</code> | *No description.* |
| <code><a href="#@cdktn/provider-cloudflare.r2BucketSippy.R2BucketSippy.property.accountId">AccountId</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktn/provider-cloudflare.r2BucketSippy.R2BucketSippy.property.bucketName">BucketName</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktn/provider-cloudflare.r2BucketSippy.R2BucketSippy.property.jurisdiction">Jurisdiction</a></code> | <code>*string</code> | *No description.* |

---

##### `Node`<sup>Required</sup> <a name="Node" id="@cdktn/provider-cloudflare.r2BucketSippy.R2BucketSippy.property.node"></a>

```go
func Node() Node
```

- *Type:* github.com/aws/constructs-go/constructs/v10.Node

The tree node.

---

##### `CdktfStack`<sup>Required</sup> <a name="CdktfStack" id="@cdktn/provider-cloudflare.r2BucketSippy.R2BucketSippy.property.cdktfStack"></a>

```go
func CdktfStack() TerraformStack
```

- *Type:* github.com/open-constructs/cdk-terrain-go/cdktn.TerraformStack

---

##### `Fqn`<sup>Required</sup> <a name="Fqn" id="@cdktn/provider-cloudflare.r2BucketSippy.R2BucketSippy.property.fqn"></a>

```go
func Fqn() *string
```

- *Type:* *string

---

##### `FriendlyUniqueId`<sup>Required</sup> <a name="FriendlyUniqueId" id="@cdktn/provider-cloudflare.r2BucketSippy.R2BucketSippy.property.friendlyUniqueId"></a>

```go
func FriendlyUniqueId() *string
```

- *Type:* *string

---

##### `TerraformMetaArguments`<sup>Required</sup> <a name="TerraformMetaArguments" id="@cdktn/provider-cloudflare.r2BucketSippy.R2BucketSippy.property.terraformMetaArguments"></a>

```go
func TerraformMetaArguments() *map[string]interface{}
```

- *Type:* *map[string]interface{}

---

##### `TerraformResourceType`<sup>Required</sup> <a name="TerraformResourceType" id="@cdktn/provider-cloudflare.r2BucketSippy.R2BucketSippy.property.terraformResourceType"></a>

```go
func TerraformResourceType() *string
```

- *Type:* *string

---

##### `TerraformGeneratorMetadata`<sup>Optional</sup> <a name="TerraformGeneratorMetadata" id="@cdktn/provider-cloudflare.r2BucketSippy.R2BucketSippy.property.terraformGeneratorMetadata"></a>

```go
func TerraformGeneratorMetadata() TerraformProviderGeneratorMetadata
```

- *Type:* github.com/open-constructs/cdk-terrain-go/cdktn.TerraformProviderGeneratorMetadata

---

##### `Connection`<sup>Optional</sup> <a name="Connection" id="@cdktn/provider-cloudflare.r2BucketSippy.R2BucketSippy.property.connection"></a>

```go
func Connection() interface{}
```

- *Type:* interface{}

---

##### `Count`<sup>Optional</sup> <a name="Count" id="@cdktn/provider-cloudflare.r2BucketSippy.R2BucketSippy.property.count"></a>

```go
func Count() interface{}
```

- *Type:* interface{}

---

##### `DependsOn`<sup>Optional</sup> <a name="DependsOn" id="@cdktn/provider-cloudflare.r2BucketSippy.R2BucketSippy.property.dependsOn"></a>

```go
func DependsOn() *[]*string
```

- *Type:* *[]*string

---

##### `ForEach`<sup>Optional</sup> <a name="ForEach" id="@cdktn/provider-cloudflare.r2BucketSippy.R2BucketSippy.property.forEach"></a>

```go
func ForEach() ITerraformIterator
```

- *Type:* github.com/open-constructs/cdk-terrain-go/cdktn.ITerraformIterator

---

##### `Lifecycle`<sup>Optional</sup> <a name="Lifecycle" id="@cdktn/provider-cloudflare.r2BucketSippy.R2BucketSippy.property.lifecycle"></a>

```go
func Lifecycle() TerraformResourceLifecycle
```

- *Type:* github.com/open-constructs/cdk-terrain-go/cdktn.TerraformResourceLifecycle

---

##### `Provider`<sup>Optional</sup> <a name="Provider" id="@cdktn/provider-cloudflare.r2BucketSippy.R2BucketSippy.property.provider"></a>

```go
func Provider() TerraformProvider
```

- *Type:* github.com/open-constructs/cdk-terrain-go/cdktn.TerraformProvider

---

##### `Provisioners`<sup>Optional</sup> <a name="Provisioners" id="@cdktn/provider-cloudflare.r2BucketSippy.R2BucketSippy.property.provisioners"></a>

```go
func Provisioners() *[]interface{}
```

- *Type:* *[]interface{}

---

##### `Destination`<sup>Required</sup> <a name="Destination" id="@cdktn/provider-cloudflare.r2BucketSippy.R2BucketSippy.property.destination"></a>

```go
func Destination() R2BucketSippyDestinationOutputReference
```

- *Type:* <a href="#@cdktn/provider-cloudflare.r2BucketSippy.R2BucketSippyDestinationOutputReference">R2BucketSippyDestinationOutputReference</a>

---

##### `Enabled`<sup>Required</sup> <a name="Enabled" id="@cdktn/provider-cloudflare.r2BucketSippy.R2BucketSippy.property.enabled"></a>

```go
func Enabled() IResolvable
```

- *Type:* github.com/open-constructs/cdk-terrain-go/cdktn.IResolvable

---

##### `Source`<sup>Required</sup> <a name="Source" id="@cdktn/provider-cloudflare.r2BucketSippy.R2BucketSippy.property.source"></a>

```go
func Source() R2BucketSippySourceOutputReference
```

- *Type:* <a href="#@cdktn/provider-cloudflare.r2BucketSippy.R2BucketSippySourceOutputReference">R2BucketSippySourceOutputReference</a>

---

##### `AccountIdInput`<sup>Optional</sup> <a name="AccountIdInput" id="@cdktn/provider-cloudflare.r2BucketSippy.R2BucketSippy.property.accountIdInput"></a>

```go
func AccountIdInput() *string
```

- *Type:* *string

---

##### `BucketNameInput`<sup>Optional</sup> <a name="BucketNameInput" id="@cdktn/provider-cloudflare.r2BucketSippy.R2BucketSippy.property.bucketNameInput"></a>

```go
func BucketNameInput() *string
```

- *Type:* *string

---

##### `DestinationInput`<sup>Optional</sup> <a name="DestinationInput" id="@cdktn/provider-cloudflare.r2BucketSippy.R2BucketSippy.property.destinationInput"></a>

```go
func DestinationInput() interface{}
```

- *Type:* interface{}

---

##### `JurisdictionInput`<sup>Optional</sup> <a name="JurisdictionInput" id="@cdktn/provider-cloudflare.r2BucketSippy.R2BucketSippy.property.jurisdictionInput"></a>

```go
func JurisdictionInput() *string
```

- *Type:* *string

---

##### `SourceInput`<sup>Optional</sup> <a name="SourceInput" id="@cdktn/provider-cloudflare.r2BucketSippy.R2BucketSippy.property.sourceInput"></a>

```go
func SourceInput() interface{}
```

- *Type:* interface{}

---

##### `AccountId`<sup>Required</sup> <a name="AccountId" id="@cdktn/provider-cloudflare.r2BucketSippy.R2BucketSippy.property.accountId"></a>

```go
func AccountId() *string
```

- *Type:* *string

---

##### `BucketName`<sup>Required</sup> <a name="BucketName" id="@cdktn/provider-cloudflare.r2BucketSippy.R2BucketSippy.property.bucketName"></a>

```go
func BucketName() *string
```

- *Type:* *string

---

##### `Jurisdiction`<sup>Required</sup> <a name="Jurisdiction" id="@cdktn/provider-cloudflare.r2BucketSippy.R2BucketSippy.property.jurisdiction"></a>

```go
func Jurisdiction() *string
```

- *Type:* *string

---

#### Constants <a name="Constants" id="Constants"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-cloudflare.r2BucketSippy.R2BucketSippy.property.tfResourceType">TfResourceType</a></code> | <code>*string</code> | *No description.* |

---

##### `TfResourceType`<sup>Required</sup> <a name="TfResourceType" id="@cdktn/provider-cloudflare.r2BucketSippy.R2BucketSippy.property.tfResourceType"></a>

```go
func TfResourceType() *string
```

- *Type:* *string

---

## Structs <a name="Structs" id="Structs"></a>

### R2BucketSippyConfig <a name="R2BucketSippyConfig" id="@cdktn/provider-cloudflare.r2BucketSippy.R2BucketSippyConfig"></a>

#### Initializer <a name="Initializer" id="@cdktn/provider-cloudflare.r2BucketSippy.R2BucketSippyConfig.Initializer"></a>

```go
import "github.com/cdktn-io/cdktn-provider-cloudflare-go/cloudflare/v14/r2bucketsippy"

&r2bucketsippy.R2BucketSippyConfig {
	Connection: interface{},
	Count: interface{},
	DependsOn: *[]github.com/open-constructs/cdk-terrain-go/cdktn.ITerraformDependable,
	ForEach: github.com/open-constructs/cdk-terrain-go/cdktn.ITerraformIterator,
	Lifecycle: github.com/open-constructs/cdk-terrain-go/cdktn.TerraformResourceLifecycle,
	Provider: github.com/open-constructs/cdk-terrain-go/cdktn.TerraformProvider,
	Provisioners: *[]interface{},
	AccountId: *string,
	BucketName: *string,
	Destination: github.com/cdktn-io/cdktn-provider-cloudflare-go/cloudflare/v14.r2BucketSippy.R2BucketSippyDestination,
	Jurisdiction: *string,
	Source: github.com/cdktn-io/cdktn-provider-cloudflare-go/cloudflare/v14.r2BucketSippy.R2BucketSippySource,
}
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-cloudflare.r2BucketSippy.R2BucketSippyConfig.property.connection">Connection</a></code> | <code>interface{}</code> | *No description.* |
| <code><a href="#@cdktn/provider-cloudflare.r2BucketSippy.R2BucketSippyConfig.property.count">Count</a></code> | <code>interface{}</code> | *No description.* |
| <code><a href="#@cdktn/provider-cloudflare.r2BucketSippy.R2BucketSippyConfig.property.dependsOn">DependsOn</a></code> | <code>*[]github.com/open-constructs/cdk-terrain-go/cdktn.ITerraformDependable</code> | *No description.* |
| <code><a href="#@cdktn/provider-cloudflare.r2BucketSippy.R2BucketSippyConfig.property.forEach">ForEach</a></code> | <code>github.com/open-constructs/cdk-terrain-go/cdktn.ITerraformIterator</code> | *No description.* |
| <code><a href="#@cdktn/provider-cloudflare.r2BucketSippy.R2BucketSippyConfig.property.lifecycle">Lifecycle</a></code> | <code>github.com/open-constructs/cdk-terrain-go/cdktn.TerraformResourceLifecycle</code> | *No description.* |
| <code><a href="#@cdktn/provider-cloudflare.r2BucketSippy.R2BucketSippyConfig.property.provider">Provider</a></code> | <code>github.com/open-constructs/cdk-terrain-go/cdktn.TerraformProvider</code> | *No description.* |
| <code><a href="#@cdktn/provider-cloudflare.r2BucketSippy.R2BucketSippyConfig.property.provisioners">Provisioners</a></code> | <code>*[]interface{}</code> | *No description.* |
| <code><a href="#@cdktn/provider-cloudflare.r2BucketSippy.R2BucketSippyConfig.property.accountId">AccountId</a></code> | <code>*string</code> | Account ID. |
| <code><a href="#@cdktn/provider-cloudflare.r2BucketSippy.R2BucketSippyConfig.property.bucketName">BucketName</a></code> | <code>*string</code> | Name of the bucket. |
| <code><a href="#@cdktn/provider-cloudflare.r2BucketSippy.R2BucketSippyConfig.property.destination">Destination</a></code> | <code><a href="#@cdktn/provider-cloudflare.r2BucketSippy.R2BucketSippyDestination">R2BucketSippyDestination</a></code> | R2 bucket to copy objects to. |
| <code><a href="#@cdktn/provider-cloudflare.r2BucketSippy.R2BucketSippyConfig.property.jurisdiction">Jurisdiction</a></code> | <code>*string</code> | Jurisdiction of the bucket. |
| <code><a href="#@cdktn/provider-cloudflare.r2BucketSippy.R2BucketSippyConfig.property.source">Source</a></code> | <code><a href="#@cdktn/provider-cloudflare.r2BucketSippy.R2BucketSippySource">R2BucketSippySource</a></code> | AWS S3 bucket to copy objects from. |

---

##### `Connection`<sup>Optional</sup> <a name="Connection" id="@cdktn/provider-cloudflare.r2BucketSippy.R2BucketSippyConfig.property.connection"></a>

```go
Connection interface{}
```

- *Type:* interface{}

---

##### `Count`<sup>Optional</sup> <a name="Count" id="@cdktn/provider-cloudflare.r2BucketSippy.R2BucketSippyConfig.property.count"></a>

```go
Count interface{}
```

- *Type:* interface{}

---

##### `DependsOn`<sup>Optional</sup> <a name="DependsOn" id="@cdktn/provider-cloudflare.r2BucketSippy.R2BucketSippyConfig.property.dependsOn"></a>

```go
DependsOn *[]ITerraformDependable
```

- *Type:* *[]github.com/open-constructs/cdk-terrain-go/cdktn.ITerraformDependable

---

##### `ForEach`<sup>Optional</sup> <a name="ForEach" id="@cdktn/provider-cloudflare.r2BucketSippy.R2BucketSippyConfig.property.forEach"></a>

```go
ForEach ITerraformIterator
```

- *Type:* github.com/open-constructs/cdk-terrain-go/cdktn.ITerraformIterator

---

##### `Lifecycle`<sup>Optional</sup> <a name="Lifecycle" id="@cdktn/provider-cloudflare.r2BucketSippy.R2BucketSippyConfig.property.lifecycle"></a>

```go
Lifecycle TerraformResourceLifecycle
```

- *Type:* github.com/open-constructs/cdk-terrain-go/cdktn.TerraformResourceLifecycle

---

##### `Provider`<sup>Optional</sup> <a name="Provider" id="@cdktn/provider-cloudflare.r2BucketSippy.R2BucketSippyConfig.property.provider"></a>

```go
Provider TerraformProvider
```

- *Type:* github.com/open-constructs/cdk-terrain-go/cdktn.TerraformProvider

---

##### `Provisioners`<sup>Optional</sup> <a name="Provisioners" id="@cdktn/provider-cloudflare.r2BucketSippy.R2BucketSippyConfig.property.provisioners"></a>

```go
Provisioners *[]interface{}
```

- *Type:* *[]interface{}

---

##### `AccountId`<sup>Required</sup> <a name="AccountId" id="@cdktn/provider-cloudflare.r2BucketSippy.R2BucketSippyConfig.property.accountId"></a>

```go
AccountId *string
```

- *Type:* *string

Account ID.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/cloudflare/cloudflare/5.18.0/docs/resources/r2_bucket_sippy#account_id R2BucketSippy#account_id}

---

##### `BucketName`<sup>Required</sup> <a name="BucketName" id="@cdktn/provider-cloudflare.r2BucketSippy.R2BucketSippyConfig.property.bucketName"></a>

```go
BucketName *string
```

- *Type:* *string

Name of the bucket.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/cloudflare/cloudflare/5.18.0/docs/resources/r2_bucket_sippy#bucket_name R2BucketSippy#bucket_name}

---

##### `Destination`<sup>Optional</sup> <a name="Destination" id="@cdktn/provider-cloudflare.r2BucketSippy.R2BucketSippyConfig.property.destination"></a>

```go
Destination R2BucketSippyDestination
```

- *Type:* <a href="#@cdktn/provider-cloudflare.r2BucketSippy.R2BucketSippyDestination">R2BucketSippyDestination</a>

R2 bucket to copy objects to.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/cloudflare/cloudflare/5.18.0/docs/resources/r2_bucket_sippy#destination R2BucketSippy#destination}

---

##### `Jurisdiction`<sup>Optional</sup> <a name="Jurisdiction" id="@cdktn/provider-cloudflare.r2BucketSippy.R2BucketSippyConfig.property.jurisdiction"></a>

```go
Jurisdiction *string
```

- *Type:* *string

Jurisdiction of the bucket.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/cloudflare/cloudflare/5.18.0/docs/resources/r2_bucket_sippy#jurisdiction R2BucketSippy#jurisdiction}

---

##### `Source`<sup>Optional</sup> <a name="Source" id="@cdktn/provider-cloudflare.r2BucketSippy.R2BucketSippyConfig.property.source"></a>

```go
Source R2BucketSippySource
```

- *Type:* <a href="#@cdktn/provider-cloudflare.r2BucketSippy.R2BucketSippySource">R2BucketSippySource</a>

AWS S3 bucket to copy objects from.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/cloudflare/cloudflare/5.18.0/docs/resources/r2_bucket_sippy#source R2BucketSippy#source}

---

### R2BucketSippyDestination <a name="R2BucketSippyDestination" id="@cdktn/provider-cloudflare.r2BucketSippy.R2BucketSippyDestination"></a>

#### Initializer <a name="Initializer" id="@cdktn/provider-cloudflare.r2BucketSippy.R2BucketSippyDestination.Initializer"></a>

```go
import "github.com/cdktn-io/cdktn-provider-cloudflare-go/cloudflare/v14/r2bucketsippy"

&r2bucketsippy.R2BucketSippyDestination {
	AccessKeyId: *string,
	CloudProvider: *string,
	SecretAccessKey: *string,
}
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-cloudflare.r2BucketSippy.R2BucketSippyDestination.property.accessKeyId">AccessKeyId</a></code> | <code>*string</code> | ID of a Cloudflare API token. |
| <code><a href="#@cdktn/provider-cloudflare.r2BucketSippy.R2BucketSippyDestination.property.cloudProvider">CloudProvider</a></code> | <code>*string</code> | Available values: "r2". |
| <code><a href="#@cdktn/provider-cloudflare.r2BucketSippy.R2BucketSippyDestination.property.secretAccessKey">SecretAccessKey</a></code> | <code>*string</code> | Value of a Cloudflare API token. |

---

##### `AccessKeyId`<sup>Optional</sup> <a name="AccessKeyId" id="@cdktn/provider-cloudflare.r2BucketSippy.R2BucketSippyDestination.property.accessKeyId"></a>

```go
AccessKeyId *string
```

- *Type:* *string

ID of a Cloudflare API token.

This is the value labelled "Access Key ID" when creating an API.
token from the [R2 dashboard](https://dash.cloudflare.com/?to=/:account/r2/api-tokens).

Sippy will use this token when writing objects to R2, so it is
best to scope this token to the bucket you're enabling Sippy for.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/cloudflare/cloudflare/5.18.0/docs/resources/r2_bucket_sippy#access_key_id R2BucketSippy#access_key_id}

---

##### `CloudProvider`<sup>Optional</sup> <a name="CloudProvider" id="@cdktn/provider-cloudflare.r2BucketSippy.R2BucketSippyDestination.property.cloudProvider"></a>

```go
CloudProvider *string
```

- *Type:* *string

Available values: "r2".

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/cloudflare/cloudflare/5.18.0/docs/resources/r2_bucket_sippy#cloud_provider R2BucketSippy#cloud_provider}

---

##### `SecretAccessKey`<sup>Optional</sup> <a name="SecretAccessKey" id="@cdktn/provider-cloudflare.r2BucketSippy.R2BucketSippyDestination.property.secretAccessKey"></a>

```go
SecretAccessKey *string
```

- *Type:* *string

Value of a Cloudflare API token.

This is the value labelled "Secret Access Key" when creating an API.
token from the [R2 dashboard](https://dash.cloudflare.com/?to=/:account/r2/api-tokens).

Sippy will use this token when writing objects to R2, so it is
best to scope this token to the bucket you're enabling Sippy for.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/cloudflare/cloudflare/5.18.0/docs/resources/r2_bucket_sippy#secret_access_key R2BucketSippy#secret_access_key}

---

### R2BucketSippySource <a name="R2BucketSippySource" id="@cdktn/provider-cloudflare.r2BucketSippy.R2BucketSippySource"></a>

#### Initializer <a name="Initializer" id="@cdktn/provider-cloudflare.r2BucketSippy.R2BucketSippySource.Initializer"></a>

```go
import "github.com/cdktn-io/cdktn-provider-cloudflare-go/cloudflare/v14/r2bucketsippy"

&r2bucketsippy.R2BucketSippySource {
	AccessKeyId: *string,
	Bucket: *string,
	BucketUrl: *string,
	ClientEmail: *string,
	CloudProvider: *string,
	PrivateKey: *string,
	Region: *string,
	SecretAccessKey: *string,
}
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-cloudflare.r2BucketSippy.R2BucketSippySource.property.accessKeyId">AccessKeyId</a></code> | <code>*string</code> | Access Key ID of an IAM credential (ideally scoped to a single S3 bucket). |
| <code><a href="#@cdktn/provider-cloudflare.r2BucketSippy.R2BucketSippySource.property.bucket">Bucket</a></code> | <code>*string</code> | Name of the AWS S3 bucket. |
| <code><a href="#@cdktn/provider-cloudflare.r2BucketSippy.R2BucketSippySource.property.bucketUrl">BucketUrl</a></code> | <code>*string</code> | URL to the S3-compatible API of the bucket. |
| <code><a href="#@cdktn/provider-cloudflare.r2BucketSippy.R2BucketSippySource.property.clientEmail">ClientEmail</a></code> | <code>*string</code> | Client email of an IAM credential (ideally scoped to a single GCS bucket). |
| <code><a href="#@cdktn/provider-cloudflare.r2BucketSippy.R2BucketSippySource.property.cloudProvider">CloudProvider</a></code> | <code>*string</code> | Available values: "aws", "gcs", "s3". |
| <code><a href="#@cdktn/provider-cloudflare.r2BucketSippy.R2BucketSippySource.property.privateKey">PrivateKey</a></code> | <code>*string</code> | Private Key of an IAM credential (ideally scoped to a single GCS bucket). |
| <code><a href="#@cdktn/provider-cloudflare.r2BucketSippy.R2BucketSippySource.property.region">Region</a></code> | <code>*string</code> | Name of the AWS availability zone. |
| <code><a href="#@cdktn/provider-cloudflare.r2BucketSippy.R2BucketSippySource.property.secretAccessKey">SecretAccessKey</a></code> | <code>*string</code> | Secret Access Key of an IAM credential (ideally scoped to a single S3 bucket). |

---

##### `AccessKeyId`<sup>Optional</sup> <a name="AccessKeyId" id="@cdktn/provider-cloudflare.r2BucketSippy.R2BucketSippySource.property.accessKeyId"></a>

```go
AccessKeyId *string
```

- *Type:* *string

Access Key ID of an IAM credential (ideally scoped to a single S3 bucket).

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/cloudflare/cloudflare/5.18.0/docs/resources/r2_bucket_sippy#access_key_id R2BucketSippy#access_key_id}

---

##### `Bucket`<sup>Optional</sup> <a name="Bucket" id="@cdktn/provider-cloudflare.r2BucketSippy.R2BucketSippySource.property.bucket"></a>

```go
Bucket *string
```

- *Type:* *string

Name of the AWS S3 bucket.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/cloudflare/cloudflare/5.18.0/docs/resources/r2_bucket_sippy#bucket R2BucketSippy#bucket}

---

##### `BucketUrl`<sup>Optional</sup> <a name="BucketUrl" id="@cdktn/provider-cloudflare.r2BucketSippy.R2BucketSippySource.property.bucketUrl"></a>

```go
BucketUrl *string
```

- *Type:* *string

URL to the S3-compatible API of the bucket.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/cloudflare/cloudflare/5.18.0/docs/resources/r2_bucket_sippy#bucket_url R2BucketSippy#bucket_url}

---

##### `ClientEmail`<sup>Optional</sup> <a name="ClientEmail" id="@cdktn/provider-cloudflare.r2BucketSippy.R2BucketSippySource.property.clientEmail"></a>

```go
ClientEmail *string
```

- *Type:* *string

Client email of an IAM credential (ideally scoped to a single GCS bucket).

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/cloudflare/cloudflare/5.18.0/docs/resources/r2_bucket_sippy#client_email R2BucketSippy#client_email}

---

##### `CloudProvider`<sup>Optional</sup> <a name="CloudProvider" id="@cdktn/provider-cloudflare.r2BucketSippy.R2BucketSippySource.property.cloudProvider"></a>

```go
CloudProvider *string
```

- *Type:* *string

Available values: "aws", "gcs", "s3".

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/cloudflare/cloudflare/5.18.0/docs/resources/r2_bucket_sippy#cloud_provider R2BucketSippy#cloud_provider}

---

##### `PrivateKey`<sup>Optional</sup> <a name="PrivateKey" id="@cdktn/provider-cloudflare.r2BucketSippy.R2BucketSippySource.property.privateKey"></a>

```go
PrivateKey *string
```

- *Type:* *string

Private Key of an IAM credential (ideally scoped to a single GCS bucket).

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/cloudflare/cloudflare/5.18.0/docs/resources/r2_bucket_sippy#private_key R2BucketSippy#private_key}

---

##### `Region`<sup>Optional</sup> <a name="Region" id="@cdktn/provider-cloudflare.r2BucketSippy.R2BucketSippySource.property.region"></a>

```go
Region *string
```

- *Type:* *string

Name of the AWS availability zone.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/cloudflare/cloudflare/5.18.0/docs/resources/r2_bucket_sippy#region R2BucketSippy#region}

---

##### `SecretAccessKey`<sup>Optional</sup> <a name="SecretAccessKey" id="@cdktn/provider-cloudflare.r2BucketSippy.R2BucketSippySource.property.secretAccessKey"></a>

```go
SecretAccessKey *string
```

- *Type:* *string

Secret Access Key of an IAM credential (ideally scoped to a single S3 bucket).

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/cloudflare/cloudflare/5.18.0/docs/resources/r2_bucket_sippy#secret_access_key R2BucketSippy#secret_access_key}

---

## Classes <a name="Classes" id="Classes"></a>

### R2BucketSippyDestinationOutputReference <a name="R2BucketSippyDestinationOutputReference" id="@cdktn/provider-cloudflare.r2BucketSippy.R2BucketSippyDestinationOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktn/provider-cloudflare.r2BucketSippy.R2BucketSippyDestinationOutputReference.Initializer"></a>

```go
import "github.com/cdktn-io/cdktn-provider-cloudflare-go/cloudflare/v14/r2bucketsippy"

r2bucketsippy.NewR2BucketSippyDestinationOutputReference(terraformResource IInterpolatingParent, terraformAttribute *string) R2BucketSippyDestinationOutputReference
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-cloudflare.r2BucketSippy.R2BucketSippyDestinationOutputReference.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>github.com/open-constructs/cdk-terrain-go/cdktn.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktn/provider-cloudflare.r2BucketSippy.R2BucketSippyDestinationOutputReference.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>*string</code> | The attribute on the parent resource this class is referencing. |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktn/provider-cloudflare.r2BucketSippy.R2BucketSippyDestinationOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* github.com/open-constructs/cdk-terrain-go/cdktn.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-cloudflare.r2BucketSippy.R2BucketSippyDestinationOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* *string

The attribute on the parent resource this class is referencing.

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-cloudflare.r2BucketSippy.R2BucketSippyDestinationOutputReference.computeFqn">ComputeFqn</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-cloudflare.r2BucketSippy.R2BucketSippyDestinationOutputReference.getAnyMapAttribute">GetAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-cloudflare.r2BucketSippy.R2BucketSippyDestinationOutputReference.getBooleanAttribute">GetBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-cloudflare.r2BucketSippy.R2BucketSippyDestinationOutputReference.getBooleanMapAttribute">GetBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-cloudflare.r2BucketSippy.R2BucketSippyDestinationOutputReference.getListAttribute">GetListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-cloudflare.r2BucketSippy.R2BucketSippyDestinationOutputReference.getNumberAttribute">GetNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-cloudflare.r2BucketSippy.R2BucketSippyDestinationOutputReference.getNumberListAttribute">GetNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-cloudflare.r2BucketSippy.R2BucketSippyDestinationOutputReference.getNumberMapAttribute">GetNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-cloudflare.r2BucketSippy.R2BucketSippyDestinationOutputReference.getStringAttribute">GetStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-cloudflare.r2BucketSippy.R2BucketSippyDestinationOutputReference.getStringMapAttribute">GetStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-cloudflare.r2BucketSippy.R2BucketSippyDestinationOutputReference.interpolationForAttribute">InterpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-cloudflare.r2BucketSippy.R2BucketSippyDestinationOutputReference.resolve">Resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktn/provider-cloudflare.r2BucketSippy.R2BucketSippyDestinationOutputReference.toString">ToString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktn/provider-cloudflare.r2BucketSippy.R2BucketSippyDestinationOutputReference.resetAccessKeyId">ResetAccessKeyId</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-cloudflare.r2BucketSippy.R2BucketSippyDestinationOutputReference.resetCloudProvider">ResetCloudProvider</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-cloudflare.r2BucketSippy.R2BucketSippyDestinationOutputReference.resetSecretAccessKey">ResetSecretAccessKey</a></code> | *No description.* |

---

##### `ComputeFqn` <a name="ComputeFqn" id="@cdktn/provider-cloudflare.r2BucketSippy.R2BucketSippyDestinationOutputReference.computeFqn"></a>

```go
func ComputeFqn() *string
```

##### `GetAnyMapAttribute` <a name="GetAnyMapAttribute" id="@cdktn/provider-cloudflare.r2BucketSippy.R2BucketSippyDestinationOutputReference.getAnyMapAttribute"></a>

```go
func GetAnyMapAttribute(terraformAttribute *string) *map[string]interface{}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-cloudflare.r2BucketSippy.R2BucketSippyDestinationOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetBooleanAttribute` <a name="GetBooleanAttribute" id="@cdktn/provider-cloudflare.r2BucketSippy.R2BucketSippyDestinationOutputReference.getBooleanAttribute"></a>

```go
func GetBooleanAttribute(terraformAttribute *string) IResolvable
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-cloudflare.r2BucketSippy.R2BucketSippyDestinationOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetBooleanMapAttribute` <a name="GetBooleanMapAttribute" id="@cdktn/provider-cloudflare.r2BucketSippy.R2BucketSippyDestinationOutputReference.getBooleanMapAttribute"></a>

```go
func GetBooleanMapAttribute(terraformAttribute *string) *map[string]*bool
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-cloudflare.r2BucketSippy.R2BucketSippyDestinationOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetListAttribute` <a name="GetListAttribute" id="@cdktn/provider-cloudflare.r2BucketSippy.R2BucketSippyDestinationOutputReference.getListAttribute"></a>

```go
func GetListAttribute(terraformAttribute *string) *[]*string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-cloudflare.r2BucketSippy.R2BucketSippyDestinationOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberAttribute` <a name="GetNumberAttribute" id="@cdktn/provider-cloudflare.r2BucketSippy.R2BucketSippyDestinationOutputReference.getNumberAttribute"></a>

```go
func GetNumberAttribute(terraformAttribute *string) *f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-cloudflare.r2BucketSippy.R2BucketSippyDestinationOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberListAttribute` <a name="GetNumberListAttribute" id="@cdktn/provider-cloudflare.r2BucketSippy.R2BucketSippyDestinationOutputReference.getNumberListAttribute"></a>

```go
func GetNumberListAttribute(terraformAttribute *string) *[]*f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-cloudflare.r2BucketSippy.R2BucketSippyDestinationOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberMapAttribute` <a name="GetNumberMapAttribute" id="@cdktn/provider-cloudflare.r2BucketSippy.R2BucketSippyDestinationOutputReference.getNumberMapAttribute"></a>

```go
func GetNumberMapAttribute(terraformAttribute *string) *map[string]*f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-cloudflare.r2BucketSippy.R2BucketSippyDestinationOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetStringAttribute` <a name="GetStringAttribute" id="@cdktn/provider-cloudflare.r2BucketSippy.R2BucketSippyDestinationOutputReference.getStringAttribute"></a>

```go
func GetStringAttribute(terraformAttribute *string) *string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-cloudflare.r2BucketSippy.R2BucketSippyDestinationOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetStringMapAttribute` <a name="GetStringMapAttribute" id="@cdktn/provider-cloudflare.r2BucketSippy.R2BucketSippyDestinationOutputReference.getStringMapAttribute"></a>

```go
func GetStringMapAttribute(terraformAttribute *string) *map[string]*string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-cloudflare.r2BucketSippy.R2BucketSippyDestinationOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `InterpolationForAttribute` <a name="InterpolationForAttribute" id="@cdktn/provider-cloudflare.r2BucketSippy.R2BucketSippyDestinationOutputReference.interpolationForAttribute"></a>

```go
func InterpolationForAttribute(property *string) IResolvable
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktn/provider-cloudflare.r2BucketSippy.R2BucketSippyDestinationOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* *string

---

##### `Resolve` <a name="Resolve" id="@cdktn/provider-cloudflare.r2BucketSippy.R2BucketSippyDestinationOutputReference.resolve"></a>

```go
func Resolve(_context IResolveContext) interface{}
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktn/provider-cloudflare.r2BucketSippy.R2BucketSippyDestinationOutputReference.resolve.parameter._context"></a>

- *Type:* github.com/open-constructs/cdk-terrain-go/cdktn.IResolveContext

---

##### `ToString` <a name="ToString" id="@cdktn/provider-cloudflare.r2BucketSippy.R2BucketSippyDestinationOutputReference.toString"></a>

```go
func ToString() *string
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `ResetAccessKeyId` <a name="ResetAccessKeyId" id="@cdktn/provider-cloudflare.r2BucketSippy.R2BucketSippyDestinationOutputReference.resetAccessKeyId"></a>

```go
func ResetAccessKeyId()
```

##### `ResetCloudProvider` <a name="ResetCloudProvider" id="@cdktn/provider-cloudflare.r2BucketSippy.R2BucketSippyDestinationOutputReference.resetCloudProvider"></a>

```go
func ResetCloudProvider()
```

##### `ResetSecretAccessKey` <a name="ResetSecretAccessKey" id="@cdktn/provider-cloudflare.r2BucketSippy.R2BucketSippyDestinationOutputReference.resetSecretAccessKey"></a>

```go
func ResetSecretAccessKey()
```


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-cloudflare.r2BucketSippy.R2BucketSippyDestinationOutputReference.property.creationStack">CreationStack</a></code> | <code>*[]*string</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktn/provider-cloudflare.r2BucketSippy.R2BucketSippyDestinationOutputReference.property.fqn">Fqn</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktn/provider-cloudflare.r2BucketSippy.R2BucketSippyDestinationOutputReference.property.accessKeyIdInput">AccessKeyIdInput</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktn/provider-cloudflare.r2BucketSippy.R2BucketSippyDestinationOutputReference.property.cloudProviderInput">CloudProviderInput</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktn/provider-cloudflare.r2BucketSippy.R2BucketSippyDestinationOutputReference.property.secretAccessKeyInput">SecretAccessKeyInput</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktn/provider-cloudflare.r2BucketSippy.R2BucketSippyDestinationOutputReference.property.accessKeyId">AccessKeyId</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktn/provider-cloudflare.r2BucketSippy.R2BucketSippyDestinationOutputReference.property.cloudProvider">CloudProvider</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktn/provider-cloudflare.r2BucketSippy.R2BucketSippyDestinationOutputReference.property.secretAccessKey">SecretAccessKey</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktn/provider-cloudflare.r2BucketSippy.R2BucketSippyDestinationOutputReference.property.internalValue">InternalValue</a></code> | <code>interface{}</code> | *No description.* |

---

##### `CreationStack`<sup>Required</sup> <a name="CreationStack" id="@cdktn/provider-cloudflare.r2BucketSippy.R2BucketSippyDestinationOutputReference.property.creationStack"></a>

```go
func CreationStack() *[]*string
```

- *Type:* *[]*string

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `Fqn`<sup>Required</sup> <a name="Fqn" id="@cdktn/provider-cloudflare.r2BucketSippy.R2BucketSippyDestinationOutputReference.property.fqn"></a>

```go
func Fqn() *string
```

- *Type:* *string

---

##### `AccessKeyIdInput`<sup>Optional</sup> <a name="AccessKeyIdInput" id="@cdktn/provider-cloudflare.r2BucketSippy.R2BucketSippyDestinationOutputReference.property.accessKeyIdInput"></a>

```go
func AccessKeyIdInput() *string
```

- *Type:* *string

---

##### `CloudProviderInput`<sup>Optional</sup> <a name="CloudProviderInput" id="@cdktn/provider-cloudflare.r2BucketSippy.R2BucketSippyDestinationOutputReference.property.cloudProviderInput"></a>

```go
func CloudProviderInput() *string
```

- *Type:* *string

---

##### `SecretAccessKeyInput`<sup>Optional</sup> <a name="SecretAccessKeyInput" id="@cdktn/provider-cloudflare.r2BucketSippy.R2BucketSippyDestinationOutputReference.property.secretAccessKeyInput"></a>

```go
func SecretAccessKeyInput() *string
```

- *Type:* *string

---

##### `AccessKeyId`<sup>Required</sup> <a name="AccessKeyId" id="@cdktn/provider-cloudflare.r2BucketSippy.R2BucketSippyDestinationOutputReference.property.accessKeyId"></a>

```go
func AccessKeyId() *string
```

- *Type:* *string

---

##### `CloudProvider`<sup>Required</sup> <a name="CloudProvider" id="@cdktn/provider-cloudflare.r2BucketSippy.R2BucketSippyDestinationOutputReference.property.cloudProvider"></a>

```go
func CloudProvider() *string
```

- *Type:* *string

---

##### `SecretAccessKey`<sup>Required</sup> <a name="SecretAccessKey" id="@cdktn/provider-cloudflare.r2BucketSippy.R2BucketSippyDestinationOutputReference.property.secretAccessKey"></a>

```go
func SecretAccessKey() *string
```

- *Type:* *string

---

##### `InternalValue`<sup>Optional</sup> <a name="InternalValue" id="@cdktn/provider-cloudflare.r2BucketSippy.R2BucketSippyDestinationOutputReference.property.internalValue"></a>

```go
func InternalValue() interface{}
```

- *Type:* interface{}

---


### R2BucketSippySourceOutputReference <a name="R2BucketSippySourceOutputReference" id="@cdktn/provider-cloudflare.r2BucketSippy.R2BucketSippySourceOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktn/provider-cloudflare.r2BucketSippy.R2BucketSippySourceOutputReference.Initializer"></a>

```go
import "github.com/cdktn-io/cdktn-provider-cloudflare-go/cloudflare/v14/r2bucketsippy"

r2bucketsippy.NewR2BucketSippySourceOutputReference(terraformResource IInterpolatingParent, terraformAttribute *string) R2BucketSippySourceOutputReference
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-cloudflare.r2BucketSippy.R2BucketSippySourceOutputReference.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>github.com/open-constructs/cdk-terrain-go/cdktn.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktn/provider-cloudflare.r2BucketSippy.R2BucketSippySourceOutputReference.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>*string</code> | The attribute on the parent resource this class is referencing. |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktn/provider-cloudflare.r2BucketSippy.R2BucketSippySourceOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* github.com/open-constructs/cdk-terrain-go/cdktn.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-cloudflare.r2BucketSippy.R2BucketSippySourceOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* *string

The attribute on the parent resource this class is referencing.

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-cloudflare.r2BucketSippy.R2BucketSippySourceOutputReference.computeFqn">ComputeFqn</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-cloudflare.r2BucketSippy.R2BucketSippySourceOutputReference.getAnyMapAttribute">GetAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-cloudflare.r2BucketSippy.R2BucketSippySourceOutputReference.getBooleanAttribute">GetBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-cloudflare.r2BucketSippy.R2BucketSippySourceOutputReference.getBooleanMapAttribute">GetBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-cloudflare.r2BucketSippy.R2BucketSippySourceOutputReference.getListAttribute">GetListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-cloudflare.r2BucketSippy.R2BucketSippySourceOutputReference.getNumberAttribute">GetNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-cloudflare.r2BucketSippy.R2BucketSippySourceOutputReference.getNumberListAttribute">GetNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-cloudflare.r2BucketSippy.R2BucketSippySourceOutputReference.getNumberMapAttribute">GetNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-cloudflare.r2BucketSippy.R2BucketSippySourceOutputReference.getStringAttribute">GetStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-cloudflare.r2BucketSippy.R2BucketSippySourceOutputReference.getStringMapAttribute">GetStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-cloudflare.r2BucketSippy.R2BucketSippySourceOutputReference.interpolationForAttribute">InterpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-cloudflare.r2BucketSippy.R2BucketSippySourceOutputReference.resolve">Resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktn/provider-cloudflare.r2BucketSippy.R2BucketSippySourceOutputReference.toString">ToString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktn/provider-cloudflare.r2BucketSippy.R2BucketSippySourceOutputReference.resetAccessKeyId">ResetAccessKeyId</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-cloudflare.r2BucketSippy.R2BucketSippySourceOutputReference.resetBucket">ResetBucket</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-cloudflare.r2BucketSippy.R2BucketSippySourceOutputReference.resetBucketUrl">ResetBucketUrl</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-cloudflare.r2BucketSippy.R2BucketSippySourceOutputReference.resetClientEmail">ResetClientEmail</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-cloudflare.r2BucketSippy.R2BucketSippySourceOutputReference.resetCloudProvider">ResetCloudProvider</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-cloudflare.r2BucketSippy.R2BucketSippySourceOutputReference.resetPrivateKey">ResetPrivateKey</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-cloudflare.r2BucketSippy.R2BucketSippySourceOutputReference.resetRegion">ResetRegion</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-cloudflare.r2BucketSippy.R2BucketSippySourceOutputReference.resetSecretAccessKey">ResetSecretAccessKey</a></code> | *No description.* |

---

##### `ComputeFqn` <a name="ComputeFqn" id="@cdktn/provider-cloudflare.r2BucketSippy.R2BucketSippySourceOutputReference.computeFqn"></a>

```go
func ComputeFqn() *string
```

##### `GetAnyMapAttribute` <a name="GetAnyMapAttribute" id="@cdktn/provider-cloudflare.r2BucketSippy.R2BucketSippySourceOutputReference.getAnyMapAttribute"></a>

```go
func GetAnyMapAttribute(terraformAttribute *string) *map[string]interface{}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-cloudflare.r2BucketSippy.R2BucketSippySourceOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetBooleanAttribute` <a name="GetBooleanAttribute" id="@cdktn/provider-cloudflare.r2BucketSippy.R2BucketSippySourceOutputReference.getBooleanAttribute"></a>

```go
func GetBooleanAttribute(terraformAttribute *string) IResolvable
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-cloudflare.r2BucketSippy.R2BucketSippySourceOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetBooleanMapAttribute` <a name="GetBooleanMapAttribute" id="@cdktn/provider-cloudflare.r2BucketSippy.R2BucketSippySourceOutputReference.getBooleanMapAttribute"></a>

```go
func GetBooleanMapAttribute(terraformAttribute *string) *map[string]*bool
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-cloudflare.r2BucketSippy.R2BucketSippySourceOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetListAttribute` <a name="GetListAttribute" id="@cdktn/provider-cloudflare.r2BucketSippy.R2BucketSippySourceOutputReference.getListAttribute"></a>

```go
func GetListAttribute(terraformAttribute *string) *[]*string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-cloudflare.r2BucketSippy.R2BucketSippySourceOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberAttribute` <a name="GetNumberAttribute" id="@cdktn/provider-cloudflare.r2BucketSippy.R2BucketSippySourceOutputReference.getNumberAttribute"></a>

```go
func GetNumberAttribute(terraformAttribute *string) *f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-cloudflare.r2BucketSippy.R2BucketSippySourceOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberListAttribute` <a name="GetNumberListAttribute" id="@cdktn/provider-cloudflare.r2BucketSippy.R2BucketSippySourceOutputReference.getNumberListAttribute"></a>

```go
func GetNumberListAttribute(terraformAttribute *string) *[]*f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-cloudflare.r2BucketSippy.R2BucketSippySourceOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberMapAttribute` <a name="GetNumberMapAttribute" id="@cdktn/provider-cloudflare.r2BucketSippy.R2BucketSippySourceOutputReference.getNumberMapAttribute"></a>

```go
func GetNumberMapAttribute(terraformAttribute *string) *map[string]*f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-cloudflare.r2BucketSippy.R2BucketSippySourceOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetStringAttribute` <a name="GetStringAttribute" id="@cdktn/provider-cloudflare.r2BucketSippy.R2BucketSippySourceOutputReference.getStringAttribute"></a>

```go
func GetStringAttribute(terraformAttribute *string) *string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-cloudflare.r2BucketSippy.R2BucketSippySourceOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetStringMapAttribute` <a name="GetStringMapAttribute" id="@cdktn/provider-cloudflare.r2BucketSippy.R2BucketSippySourceOutputReference.getStringMapAttribute"></a>

```go
func GetStringMapAttribute(terraformAttribute *string) *map[string]*string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-cloudflare.r2BucketSippy.R2BucketSippySourceOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `InterpolationForAttribute` <a name="InterpolationForAttribute" id="@cdktn/provider-cloudflare.r2BucketSippy.R2BucketSippySourceOutputReference.interpolationForAttribute"></a>

```go
func InterpolationForAttribute(property *string) IResolvable
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktn/provider-cloudflare.r2BucketSippy.R2BucketSippySourceOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* *string

---

##### `Resolve` <a name="Resolve" id="@cdktn/provider-cloudflare.r2BucketSippy.R2BucketSippySourceOutputReference.resolve"></a>

```go
func Resolve(_context IResolveContext) interface{}
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktn/provider-cloudflare.r2BucketSippy.R2BucketSippySourceOutputReference.resolve.parameter._context"></a>

- *Type:* github.com/open-constructs/cdk-terrain-go/cdktn.IResolveContext

---

##### `ToString` <a name="ToString" id="@cdktn/provider-cloudflare.r2BucketSippy.R2BucketSippySourceOutputReference.toString"></a>

```go
func ToString() *string
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `ResetAccessKeyId` <a name="ResetAccessKeyId" id="@cdktn/provider-cloudflare.r2BucketSippy.R2BucketSippySourceOutputReference.resetAccessKeyId"></a>

```go
func ResetAccessKeyId()
```

##### `ResetBucket` <a name="ResetBucket" id="@cdktn/provider-cloudflare.r2BucketSippy.R2BucketSippySourceOutputReference.resetBucket"></a>

```go
func ResetBucket()
```

##### `ResetBucketUrl` <a name="ResetBucketUrl" id="@cdktn/provider-cloudflare.r2BucketSippy.R2BucketSippySourceOutputReference.resetBucketUrl"></a>

```go
func ResetBucketUrl()
```

##### `ResetClientEmail` <a name="ResetClientEmail" id="@cdktn/provider-cloudflare.r2BucketSippy.R2BucketSippySourceOutputReference.resetClientEmail"></a>

```go
func ResetClientEmail()
```

##### `ResetCloudProvider` <a name="ResetCloudProvider" id="@cdktn/provider-cloudflare.r2BucketSippy.R2BucketSippySourceOutputReference.resetCloudProvider"></a>

```go
func ResetCloudProvider()
```

##### `ResetPrivateKey` <a name="ResetPrivateKey" id="@cdktn/provider-cloudflare.r2BucketSippy.R2BucketSippySourceOutputReference.resetPrivateKey"></a>

```go
func ResetPrivateKey()
```

##### `ResetRegion` <a name="ResetRegion" id="@cdktn/provider-cloudflare.r2BucketSippy.R2BucketSippySourceOutputReference.resetRegion"></a>

```go
func ResetRegion()
```

##### `ResetSecretAccessKey` <a name="ResetSecretAccessKey" id="@cdktn/provider-cloudflare.r2BucketSippy.R2BucketSippySourceOutputReference.resetSecretAccessKey"></a>

```go
func ResetSecretAccessKey()
```


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-cloudflare.r2BucketSippy.R2BucketSippySourceOutputReference.property.creationStack">CreationStack</a></code> | <code>*[]*string</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktn/provider-cloudflare.r2BucketSippy.R2BucketSippySourceOutputReference.property.fqn">Fqn</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktn/provider-cloudflare.r2BucketSippy.R2BucketSippySourceOutputReference.property.accessKeyIdInput">AccessKeyIdInput</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktn/provider-cloudflare.r2BucketSippy.R2BucketSippySourceOutputReference.property.bucketInput">BucketInput</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktn/provider-cloudflare.r2BucketSippy.R2BucketSippySourceOutputReference.property.bucketUrlInput">BucketUrlInput</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktn/provider-cloudflare.r2BucketSippy.R2BucketSippySourceOutputReference.property.clientEmailInput">ClientEmailInput</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktn/provider-cloudflare.r2BucketSippy.R2BucketSippySourceOutputReference.property.cloudProviderInput">CloudProviderInput</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktn/provider-cloudflare.r2BucketSippy.R2BucketSippySourceOutputReference.property.privateKeyInput">PrivateKeyInput</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktn/provider-cloudflare.r2BucketSippy.R2BucketSippySourceOutputReference.property.regionInput">RegionInput</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktn/provider-cloudflare.r2BucketSippy.R2BucketSippySourceOutputReference.property.secretAccessKeyInput">SecretAccessKeyInput</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktn/provider-cloudflare.r2BucketSippy.R2BucketSippySourceOutputReference.property.accessKeyId">AccessKeyId</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktn/provider-cloudflare.r2BucketSippy.R2BucketSippySourceOutputReference.property.bucket">Bucket</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktn/provider-cloudflare.r2BucketSippy.R2BucketSippySourceOutputReference.property.bucketUrl">BucketUrl</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktn/provider-cloudflare.r2BucketSippy.R2BucketSippySourceOutputReference.property.clientEmail">ClientEmail</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktn/provider-cloudflare.r2BucketSippy.R2BucketSippySourceOutputReference.property.cloudProvider">CloudProvider</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktn/provider-cloudflare.r2BucketSippy.R2BucketSippySourceOutputReference.property.privateKey">PrivateKey</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktn/provider-cloudflare.r2BucketSippy.R2BucketSippySourceOutputReference.property.region">Region</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktn/provider-cloudflare.r2BucketSippy.R2BucketSippySourceOutputReference.property.secretAccessKey">SecretAccessKey</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktn/provider-cloudflare.r2BucketSippy.R2BucketSippySourceOutputReference.property.internalValue">InternalValue</a></code> | <code>interface{}</code> | *No description.* |

---

##### `CreationStack`<sup>Required</sup> <a name="CreationStack" id="@cdktn/provider-cloudflare.r2BucketSippy.R2BucketSippySourceOutputReference.property.creationStack"></a>

```go
func CreationStack() *[]*string
```

- *Type:* *[]*string

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `Fqn`<sup>Required</sup> <a name="Fqn" id="@cdktn/provider-cloudflare.r2BucketSippy.R2BucketSippySourceOutputReference.property.fqn"></a>

```go
func Fqn() *string
```

- *Type:* *string

---

##### `AccessKeyIdInput`<sup>Optional</sup> <a name="AccessKeyIdInput" id="@cdktn/provider-cloudflare.r2BucketSippy.R2BucketSippySourceOutputReference.property.accessKeyIdInput"></a>

```go
func AccessKeyIdInput() *string
```

- *Type:* *string

---

##### `BucketInput`<sup>Optional</sup> <a name="BucketInput" id="@cdktn/provider-cloudflare.r2BucketSippy.R2BucketSippySourceOutputReference.property.bucketInput"></a>

```go
func BucketInput() *string
```

- *Type:* *string

---

##### `BucketUrlInput`<sup>Optional</sup> <a name="BucketUrlInput" id="@cdktn/provider-cloudflare.r2BucketSippy.R2BucketSippySourceOutputReference.property.bucketUrlInput"></a>

```go
func BucketUrlInput() *string
```

- *Type:* *string

---

##### `ClientEmailInput`<sup>Optional</sup> <a name="ClientEmailInput" id="@cdktn/provider-cloudflare.r2BucketSippy.R2BucketSippySourceOutputReference.property.clientEmailInput"></a>

```go
func ClientEmailInput() *string
```

- *Type:* *string

---

##### `CloudProviderInput`<sup>Optional</sup> <a name="CloudProviderInput" id="@cdktn/provider-cloudflare.r2BucketSippy.R2BucketSippySourceOutputReference.property.cloudProviderInput"></a>

```go
func CloudProviderInput() *string
```

- *Type:* *string

---

##### `PrivateKeyInput`<sup>Optional</sup> <a name="PrivateKeyInput" id="@cdktn/provider-cloudflare.r2BucketSippy.R2BucketSippySourceOutputReference.property.privateKeyInput"></a>

```go
func PrivateKeyInput() *string
```

- *Type:* *string

---

##### `RegionInput`<sup>Optional</sup> <a name="RegionInput" id="@cdktn/provider-cloudflare.r2BucketSippy.R2BucketSippySourceOutputReference.property.regionInput"></a>

```go
func RegionInput() *string
```

- *Type:* *string

---

##### `SecretAccessKeyInput`<sup>Optional</sup> <a name="SecretAccessKeyInput" id="@cdktn/provider-cloudflare.r2BucketSippy.R2BucketSippySourceOutputReference.property.secretAccessKeyInput"></a>

```go
func SecretAccessKeyInput() *string
```

- *Type:* *string

---

##### `AccessKeyId`<sup>Required</sup> <a name="AccessKeyId" id="@cdktn/provider-cloudflare.r2BucketSippy.R2BucketSippySourceOutputReference.property.accessKeyId"></a>

```go
func AccessKeyId() *string
```

- *Type:* *string

---

##### `Bucket`<sup>Required</sup> <a name="Bucket" id="@cdktn/provider-cloudflare.r2BucketSippy.R2BucketSippySourceOutputReference.property.bucket"></a>

```go
func Bucket() *string
```

- *Type:* *string

---

##### `BucketUrl`<sup>Required</sup> <a name="BucketUrl" id="@cdktn/provider-cloudflare.r2BucketSippy.R2BucketSippySourceOutputReference.property.bucketUrl"></a>

```go
func BucketUrl() *string
```

- *Type:* *string

---

##### `ClientEmail`<sup>Required</sup> <a name="ClientEmail" id="@cdktn/provider-cloudflare.r2BucketSippy.R2BucketSippySourceOutputReference.property.clientEmail"></a>

```go
func ClientEmail() *string
```

- *Type:* *string

---

##### `CloudProvider`<sup>Required</sup> <a name="CloudProvider" id="@cdktn/provider-cloudflare.r2BucketSippy.R2BucketSippySourceOutputReference.property.cloudProvider"></a>

```go
func CloudProvider() *string
```

- *Type:* *string

---

##### `PrivateKey`<sup>Required</sup> <a name="PrivateKey" id="@cdktn/provider-cloudflare.r2BucketSippy.R2BucketSippySourceOutputReference.property.privateKey"></a>

```go
func PrivateKey() *string
```

- *Type:* *string

---

##### `Region`<sup>Required</sup> <a name="Region" id="@cdktn/provider-cloudflare.r2BucketSippy.R2BucketSippySourceOutputReference.property.region"></a>

```go
func Region() *string
```

- *Type:* *string

---

##### `SecretAccessKey`<sup>Required</sup> <a name="SecretAccessKey" id="@cdktn/provider-cloudflare.r2BucketSippy.R2BucketSippySourceOutputReference.property.secretAccessKey"></a>

```go
func SecretAccessKey() *string
```

- *Type:* *string

---

##### `InternalValue`<sup>Optional</sup> <a name="InternalValue" id="@cdktn/provider-cloudflare.r2BucketSippy.R2BucketSippySourceOutputReference.property.internalValue"></a>

```go
func InternalValue() interface{}
```

- *Type:* interface{}

---



