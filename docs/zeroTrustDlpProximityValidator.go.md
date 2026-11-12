# `zeroTrustDlpProximityValidator` Submodule <a name="`zeroTrustDlpProximityValidator` Submodule" id="@cdktn/provider-cloudflare.zeroTrustDlpProximityValidator"></a>

## Constructs <a name="Constructs" id="Constructs"></a>

### ZeroTrustDlpProximityValidator <a name="ZeroTrustDlpProximityValidator" id="@cdktn/provider-cloudflare.zeroTrustDlpProximityValidator.ZeroTrustDlpProximityValidator"></a>

Represents a {@link https://registry.terraform.io/providers/cloudflare/cloudflare/5.29.0/docs/resources/zero_trust_dlp_proximity_validator cloudflare_zero_trust_dlp_proximity_validator}.

#### Initializers <a name="Initializers" id="@cdktn/provider-cloudflare.zeroTrustDlpProximityValidator.ZeroTrustDlpProximityValidator.Initializer"></a>

```go
import "github.com/cdktn-io/cdktn-provider-cloudflare-go/cloudflare/v17/zerotrustdlpproximityvalidator"

zerotrustdlpproximityvalidator.NewZeroTrustDlpProximityValidator(scope Construct, id *string, config ZeroTrustDlpProximityValidatorConfig) ZeroTrustDlpProximityValidator
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-cloudflare.zeroTrustDlpProximityValidator.ZeroTrustDlpProximityValidator.Initializer.parameter.scope">scope</a></code> | <code>github.com/aws/constructs-go/constructs/v10.Construct</code> | The scope in which to define this construct. |
| <code><a href="#@cdktn/provider-cloudflare.zeroTrustDlpProximityValidator.ZeroTrustDlpProximityValidator.Initializer.parameter.id">id</a></code> | <code>*string</code> | The scoped construct ID. |
| <code><a href="#@cdktn/provider-cloudflare.zeroTrustDlpProximityValidator.ZeroTrustDlpProximityValidator.Initializer.parameter.config">config</a></code> | <code><a href="#@cdktn/provider-cloudflare.zeroTrustDlpProximityValidator.ZeroTrustDlpProximityValidatorConfig">ZeroTrustDlpProximityValidatorConfig</a></code> | *No description.* |

---

##### `scope`<sup>Required</sup> <a name="scope" id="@cdktn/provider-cloudflare.zeroTrustDlpProximityValidator.ZeroTrustDlpProximityValidator.Initializer.parameter.scope"></a>

- *Type:* github.com/aws/constructs-go/constructs/v10.Construct

The scope in which to define this construct.

---

##### `id`<sup>Required</sup> <a name="id" id="@cdktn/provider-cloudflare.zeroTrustDlpProximityValidator.ZeroTrustDlpProximityValidator.Initializer.parameter.id"></a>

- *Type:* *string

The scoped construct ID.

Must be unique amongst siblings in the same scope

---

##### `config`<sup>Required</sup> <a name="config" id="@cdktn/provider-cloudflare.zeroTrustDlpProximityValidator.ZeroTrustDlpProximityValidator.Initializer.parameter.config"></a>

- *Type:* <a href="#@cdktn/provider-cloudflare.zeroTrustDlpProximityValidator.ZeroTrustDlpProximityValidatorConfig">ZeroTrustDlpProximityValidatorConfig</a>

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-cloudflare.zeroTrustDlpProximityValidator.ZeroTrustDlpProximityValidator.toString">ToString</a></code> | Returns a string representation of this construct. |
| <code><a href="#@cdktn/provider-cloudflare.zeroTrustDlpProximityValidator.ZeroTrustDlpProximityValidator.with">With</a></code> | Applies one or more mixins to this construct. |
| <code><a href="#@cdktn/provider-cloudflare.zeroTrustDlpProximityValidator.ZeroTrustDlpProximityValidator.addOverride">AddOverride</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-cloudflare.zeroTrustDlpProximityValidator.ZeroTrustDlpProximityValidator.overrideLogicalId">OverrideLogicalId</a></code> | Overrides the auto-generated logical ID with a specific ID. |
| <code><a href="#@cdktn/provider-cloudflare.zeroTrustDlpProximityValidator.ZeroTrustDlpProximityValidator.resetOverrideLogicalId">ResetOverrideLogicalId</a></code> | Resets a previously passed logical Id to use the auto-generated logical id again. |
| <code><a href="#@cdktn/provider-cloudflare.zeroTrustDlpProximityValidator.ZeroTrustDlpProximityValidator.toHclTerraform">ToHclTerraform</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-cloudflare.zeroTrustDlpProximityValidator.ZeroTrustDlpProximityValidator.toMetadata">ToMetadata</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-cloudflare.zeroTrustDlpProximityValidator.ZeroTrustDlpProximityValidator.toTerraform">ToTerraform</a></code> | Adds this resource to the terraform JSON output. |
| <code><a href="#@cdktn/provider-cloudflare.zeroTrustDlpProximityValidator.ZeroTrustDlpProximityValidator.addMoveTarget">AddMoveTarget</a></code> | Adds a user defined moveTarget string to this resource to be later used in .moveTo(moveTarget) to resolve the location of the move. |
| <code><a href="#@cdktn/provider-cloudflare.zeroTrustDlpProximityValidator.ZeroTrustDlpProximityValidator.getAnyMapAttribute">GetAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-cloudflare.zeroTrustDlpProximityValidator.ZeroTrustDlpProximityValidator.getBooleanAttribute">GetBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-cloudflare.zeroTrustDlpProximityValidator.ZeroTrustDlpProximityValidator.getBooleanMapAttribute">GetBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-cloudflare.zeroTrustDlpProximityValidator.ZeroTrustDlpProximityValidator.getListAttribute">GetListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-cloudflare.zeroTrustDlpProximityValidator.ZeroTrustDlpProximityValidator.getNumberAttribute">GetNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-cloudflare.zeroTrustDlpProximityValidator.ZeroTrustDlpProximityValidator.getNumberListAttribute">GetNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-cloudflare.zeroTrustDlpProximityValidator.ZeroTrustDlpProximityValidator.getNumberMapAttribute">GetNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-cloudflare.zeroTrustDlpProximityValidator.ZeroTrustDlpProximityValidator.getStringAttribute">GetStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-cloudflare.zeroTrustDlpProximityValidator.ZeroTrustDlpProximityValidator.getStringMapAttribute">GetStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-cloudflare.zeroTrustDlpProximityValidator.ZeroTrustDlpProximityValidator.hasResourceMove">HasResourceMove</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-cloudflare.zeroTrustDlpProximityValidator.ZeroTrustDlpProximityValidator.importFrom">ImportFrom</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-cloudflare.zeroTrustDlpProximityValidator.ZeroTrustDlpProximityValidator.interpolationForAttribute">InterpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-cloudflare.zeroTrustDlpProximityValidator.ZeroTrustDlpProximityValidator.moveFromId">MoveFromId</a></code> | Move the resource corresponding to "id" to this resource. |
| <code><a href="#@cdktn/provider-cloudflare.zeroTrustDlpProximityValidator.ZeroTrustDlpProximityValidator.moveTo">MoveTo</a></code> | Moves this resource to the target resource given by moveTarget. |
| <code><a href="#@cdktn/provider-cloudflare.zeroTrustDlpProximityValidator.ZeroTrustDlpProximityValidator.moveToId">MoveToId</a></code> | Moves this resource to the resource corresponding to "id". |
| <code><a href="#@cdktn/provider-cloudflare.zeroTrustDlpProximityValidator.ZeroTrustDlpProximityValidator.putWords">PutWords</a></code> | *No description.* |

---

##### `ToString` <a name="ToString" id="@cdktn/provider-cloudflare.zeroTrustDlpProximityValidator.ZeroTrustDlpProximityValidator.toString"></a>

```go
func ToString() *string
```

Returns a string representation of this construct.

##### `With` <a name="With" id="@cdktn/provider-cloudflare.zeroTrustDlpProximityValidator.ZeroTrustDlpProximityValidator.with"></a>

```go
func With(mixins ...IMixin) IConstruct
```

Applies one or more mixins to this construct.

Mixins are applied in order. The list of constructs is captured at the
start of the call, so constructs added by a mixin will not be visited.
Use multiple `with()` calls if subsequent mixins should apply to added
constructs.

###### `mixins`<sup>Required</sup> <a name="mixins" id="@cdktn/provider-cloudflare.zeroTrustDlpProximityValidator.ZeroTrustDlpProximityValidator.with.parameter.mixins"></a>

- *Type:* ...github.com/aws/constructs-go/constructs/v10.IMixin

The mixins to apply.

---

##### `AddOverride` <a name="AddOverride" id="@cdktn/provider-cloudflare.zeroTrustDlpProximityValidator.ZeroTrustDlpProximityValidator.addOverride"></a>

```go
func AddOverride(path *string, value interface{})
```

###### `path`<sup>Required</sup> <a name="path" id="@cdktn/provider-cloudflare.zeroTrustDlpProximityValidator.ZeroTrustDlpProximityValidator.addOverride.parameter.path"></a>

- *Type:* *string

---

###### `value`<sup>Required</sup> <a name="value" id="@cdktn/provider-cloudflare.zeroTrustDlpProximityValidator.ZeroTrustDlpProximityValidator.addOverride.parameter.value"></a>

- *Type:* interface{}

---

##### `OverrideLogicalId` <a name="OverrideLogicalId" id="@cdktn/provider-cloudflare.zeroTrustDlpProximityValidator.ZeroTrustDlpProximityValidator.overrideLogicalId"></a>

```go
func OverrideLogicalId(newLogicalId *string)
```

Overrides the auto-generated logical ID with a specific ID.

###### `newLogicalId`<sup>Required</sup> <a name="newLogicalId" id="@cdktn/provider-cloudflare.zeroTrustDlpProximityValidator.ZeroTrustDlpProximityValidator.overrideLogicalId.parameter.newLogicalId"></a>

- *Type:* *string

The new logical ID to use for this stack element.

---

##### `ResetOverrideLogicalId` <a name="ResetOverrideLogicalId" id="@cdktn/provider-cloudflare.zeroTrustDlpProximityValidator.ZeroTrustDlpProximityValidator.resetOverrideLogicalId"></a>

```go
func ResetOverrideLogicalId()
```

Resets a previously passed logical Id to use the auto-generated logical id again.

##### `ToHclTerraform` <a name="ToHclTerraform" id="@cdktn/provider-cloudflare.zeroTrustDlpProximityValidator.ZeroTrustDlpProximityValidator.toHclTerraform"></a>

```go
func ToHclTerraform() interface{}
```

##### `ToMetadata` <a name="ToMetadata" id="@cdktn/provider-cloudflare.zeroTrustDlpProximityValidator.ZeroTrustDlpProximityValidator.toMetadata"></a>

```go
func ToMetadata() interface{}
```

##### `ToTerraform` <a name="ToTerraform" id="@cdktn/provider-cloudflare.zeroTrustDlpProximityValidator.ZeroTrustDlpProximityValidator.toTerraform"></a>

```go
func ToTerraform() interface{}
```

Adds this resource to the terraform JSON output.

##### `AddMoveTarget` <a name="AddMoveTarget" id="@cdktn/provider-cloudflare.zeroTrustDlpProximityValidator.ZeroTrustDlpProximityValidator.addMoveTarget"></a>

```go
func AddMoveTarget(moveTarget *string)
```

Adds a user defined moveTarget string to this resource to be later used in .moveTo(moveTarget) to resolve the location of the move.

###### `moveTarget`<sup>Required</sup> <a name="moveTarget" id="@cdktn/provider-cloudflare.zeroTrustDlpProximityValidator.ZeroTrustDlpProximityValidator.addMoveTarget.parameter.moveTarget"></a>

- *Type:* *string

The string move target that will correspond to this resource.

---

##### `GetAnyMapAttribute` <a name="GetAnyMapAttribute" id="@cdktn/provider-cloudflare.zeroTrustDlpProximityValidator.ZeroTrustDlpProximityValidator.getAnyMapAttribute"></a>

```go
func GetAnyMapAttribute(terraformAttribute *string) *map[string]interface{}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-cloudflare.zeroTrustDlpProximityValidator.ZeroTrustDlpProximityValidator.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetBooleanAttribute` <a name="GetBooleanAttribute" id="@cdktn/provider-cloudflare.zeroTrustDlpProximityValidator.ZeroTrustDlpProximityValidator.getBooleanAttribute"></a>

```go
func GetBooleanAttribute(terraformAttribute *string) IResolvable
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-cloudflare.zeroTrustDlpProximityValidator.ZeroTrustDlpProximityValidator.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetBooleanMapAttribute` <a name="GetBooleanMapAttribute" id="@cdktn/provider-cloudflare.zeroTrustDlpProximityValidator.ZeroTrustDlpProximityValidator.getBooleanMapAttribute"></a>

```go
func GetBooleanMapAttribute(terraformAttribute *string) *map[string]*bool
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-cloudflare.zeroTrustDlpProximityValidator.ZeroTrustDlpProximityValidator.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetListAttribute` <a name="GetListAttribute" id="@cdktn/provider-cloudflare.zeroTrustDlpProximityValidator.ZeroTrustDlpProximityValidator.getListAttribute"></a>

```go
func GetListAttribute(terraformAttribute *string) *[]*string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-cloudflare.zeroTrustDlpProximityValidator.ZeroTrustDlpProximityValidator.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberAttribute` <a name="GetNumberAttribute" id="@cdktn/provider-cloudflare.zeroTrustDlpProximityValidator.ZeroTrustDlpProximityValidator.getNumberAttribute"></a>

```go
func GetNumberAttribute(terraformAttribute *string) *f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-cloudflare.zeroTrustDlpProximityValidator.ZeroTrustDlpProximityValidator.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberListAttribute` <a name="GetNumberListAttribute" id="@cdktn/provider-cloudflare.zeroTrustDlpProximityValidator.ZeroTrustDlpProximityValidator.getNumberListAttribute"></a>

```go
func GetNumberListAttribute(terraformAttribute *string) *[]*f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-cloudflare.zeroTrustDlpProximityValidator.ZeroTrustDlpProximityValidator.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberMapAttribute` <a name="GetNumberMapAttribute" id="@cdktn/provider-cloudflare.zeroTrustDlpProximityValidator.ZeroTrustDlpProximityValidator.getNumberMapAttribute"></a>

```go
func GetNumberMapAttribute(terraformAttribute *string) *map[string]*f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-cloudflare.zeroTrustDlpProximityValidator.ZeroTrustDlpProximityValidator.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetStringAttribute` <a name="GetStringAttribute" id="@cdktn/provider-cloudflare.zeroTrustDlpProximityValidator.ZeroTrustDlpProximityValidator.getStringAttribute"></a>

```go
func GetStringAttribute(terraformAttribute *string) *string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-cloudflare.zeroTrustDlpProximityValidator.ZeroTrustDlpProximityValidator.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetStringMapAttribute` <a name="GetStringMapAttribute" id="@cdktn/provider-cloudflare.zeroTrustDlpProximityValidator.ZeroTrustDlpProximityValidator.getStringMapAttribute"></a>

```go
func GetStringMapAttribute(terraformAttribute *string) *map[string]*string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-cloudflare.zeroTrustDlpProximityValidator.ZeroTrustDlpProximityValidator.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `HasResourceMove` <a name="HasResourceMove" id="@cdktn/provider-cloudflare.zeroTrustDlpProximityValidator.ZeroTrustDlpProximityValidator.hasResourceMove"></a>

```go
func HasResourceMove() interface{}
```

##### `ImportFrom` <a name="ImportFrom" id="@cdktn/provider-cloudflare.zeroTrustDlpProximityValidator.ZeroTrustDlpProximityValidator.importFrom"></a>

```go
func ImportFrom(id *string, provider TerraformProvider)
```

###### `id`<sup>Required</sup> <a name="id" id="@cdktn/provider-cloudflare.zeroTrustDlpProximityValidator.ZeroTrustDlpProximityValidator.importFrom.parameter.id"></a>

- *Type:* *string

---

###### `provider`<sup>Optional</sup> <a name="provider" id="@cdktn/provider-cloudflare.zeroTrustDlpProximityValidator.ZeroTrustDlpProximityValidator.importFrom.parameter.provider"></a>

- *Type:* github.com/open-constructs/cdk-terrain-go/cdktn.TerraformProvider

---

##### `InterpolationForAttribute` <a name="InterpolationForAttribute" id="@cdktn/provider-cloudflare.zeroTrustDlpProximityValidator.ZeroTrustDlpProximityValidator.interpolationForAttribute"></a>

```go
func InterpolationForAttribute(terraformAttribute *string) IResolvable
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-cloudflare.zeroTrustDlpProximityValidator.ZeroTrustDlpProximityValidator.interpolationForAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `MoveFromId` <a name="MoveFromId" id="@cdktn/provider-cloudflare.zeroTrustDlpProximityValidator.ZeroTrustDlpProximityValidator.moveFromId"></a>

```go
func MoveFromId(id *string)
```

Move the resource corresponding to "id" to this resource.

Note that the resource being moved from must be marked as moved using its instance function.

###### `id`<sup>Required</sup> <a name="id" id="@cdktn/provider-cloudflare.zeroTrustDlpProximityValidator.ZeroTrustDlpProximityValidator.moveFromId.parameter.id"></a>

- *Type:* *string

Full id of resource being moved from, e.g. "aws_s3_bucket.example".

---

##### `MoveTo` <a name="MoveTo" id="@cdktn/provider-cloudflare.zeroTrustDlpProximityValidator.ZeroTrustDlpProximityValidator.moveTo"></a>

```go
func MoveTo(moveTarget *string, index interface{})
```

Moves this resource to the target resource given by moveTarget.

###### `moveTarget`<sup>Required</sup> <a name="moveTarget" id="@cdktn/provider-cloudflare.zeroTrustDlpProximityValidator.ZeroTrustDlpProximityValidator.moveTo.parameter.moveTarget"></a>

- *Type:* *string

The previously set user defined string set by .addMoveTarget() corresponding to the resource to move to.

---

###### `index`<sup>Optional</sup> <a name="index" id="@cdktn/provider-cloudflare.zeroTrustDlpProximityValidator.ZeroTrustDlpProximityValidator.moveTo.parameter.index"></a>

- *Type:* interface{}

Optional The index corresponding to the key the resource is to appear in the foreach of a resource to move to.

---

##### `MoveToId` <a name="MoveToId" id="@cdktn/provider-cloudflare.zeroTrustDlpProximityValidator.ZeroTrustDlpProximityValidator.moveToId"></a>

```go
func MoveToId(id *string)
```

Moves this resource to the resource corresponding to "id".

###### `id`<sup>Required</sup> <a name="id" id="@cdktn/provider-cloudflare.zeroTrustDlpProximityValidator.ZeroTrustDlpProximityValidator.moveToId.parameter.id"></a>

- *Type:* *string

Full id of resource to move to, e.g. "aws_s3_bucket.example".

---

##### `PutWords` <a name="PutWords" id="@cdktn/provider-cloudflare.zeroTrustDlpProximityValidator.ZeroTrustDlpProximityValidator.putWords"></a>

```go
func PutWords(value interface{})
```

###### `value`<sup>Required</sup> <a name="value" id="@cdktn/provider-cloudflare.zeroTrustDlpProximityValidator.ZeroTrustDlpProximityValidator.putWords.parameter.value"></a>

- *Type:* interface{}

---

#### Static Functions <a name="Static Functions" id="Static Functions"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-cloudflare.zeroTrustDlpProximityValidator.ZeroTrustDlpProximityValidator.isConstruct">IsConstruct</a></code> | Checks if `x` is a construct. |
| <code><a href="#@cdktn/provider-cloudflare.zeroTrustDlpProximityValidator.ZeroTrustDlpProximityValidator.isTerraformElement">IsTerraformElement</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-cloudflare.zeroTrustDlpProximityValidator.ZeroTrustDlpProximityValidator.isTerraformResource">IsTerraformResource</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-cloudflare.zeroTrustDlpProximityValidator.ZeroTrustDlpProximityValidator.generateConfigForImport">GenerateConfigForImport</a></code> | Generates CDKTN code for importing a ZeroTrustDlpProximityValidator resource upon running "cdktn plan <stack-name>". |

---

##### `IsConstruct` <a name="IsConstruct" id="@cdktn/provider-cloudflare.zeroTrustDlpProximityValidator.ZeroTrustDlpProximityValidator.isConstruct"></a>

```go
import "github.com/cdktn-io/cdktn-provider-cloudflare-go/cloudflare/v17/zerotrustdlpproximityvalidator"

zerotrustdlpproximityvalidator.ZeroTrustDlpProximityValidator_IsConstruct(x interface{}) *bool
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

###### `x`<sup>Required</sup> <a name="x" id="@cdktn/provider-cloudflare.zeroTrustDlpProximityValidator.ZeroTrustDlpProximityValidator.isConstruct.parameter.x"></a>

- *Type:* interface{}

Any object.

---

##### `IsTerraformElement` <a name="IsTerraformElement" id="@cdktn/provider-cloudflare.zeroTrustDlpProximityValidator.ZeroTrustDlpProximityValidator.isTerraformElement"></a>

```go
import "github.com/cdktn-io/cdktn-provider-cloudflare-go/cloudflare/v17/zerotrustdlpproximityvalidator"

zerotrustdlpproximityvalidator.ZeroTrustDlpProximityValidator_IsTerraformElement(x interface{}) *bool
```

###### `x`<sup>Required</sup> <a name="x" id="@cdktn/provider-cloudflare.zeroTrustDlpProximityValidator.ZeroTrustDlpProximityValidator.isTerraformElement.parameter.x"></a>

- *Type:* interface{}

---

##### `IsTerraformResource` <a name="IsTerraformResource" id="@cdktn/provider-cloudflare.zeroTrustDlpProximityValidator.ZeroTrustDlpProximityValidator.isTerraformResource"></a>

```go
import "github.com/cdktn-io/cdktn-provider-cloudflare-go/cloudflare/v17/zerotrustdlpproximityvalidator"

zerotrustdlpproximityvalidator.ZeroTrustDlpProximityValidator_IsTerraformResource(x interface{}) *bool
```

###### `x`<sup>Required</sup> <a name="x" id="@cdktn/provider-cloudflare.zeroTrustDlpProximityValidator.ZeroTrustDlpProximityValidator.isTerraformResource.parameter.x"></a>

- *Type:* interface{}

---

##### `GenerateConfigForImport` <a name="GenerateConfigForImport" id="@cdktn/provider-cloudflare.zeroTrustDlpProximityValidator.ZeroTrustDlpProximityValidator.generateConfigForImport"></a>

```go
import "github.com/cdktn-io/cdktn-provider-cloudflare-go/cloudflare/v17/zerotrustdlpproximityvalidator"

zerotrustdlpproximityvalidator.ZeroTrustDlpProximityValidator_GenerateConfigForImport(scope Construct, importToId *string, importFromId *string, provider TerraformProvider) ImportableResource
```

Generates CDKTN code for importing a ZeroTrustDlpProximityValidator resource upon running "cdktn plan <stack-name>".

###### `scope`<sup>Required</sup> <a name="scope" id="@cdktn/provider-cloudflare.zeroTrustDlpProximityValidator.ZeroTrustDlpProximityValidator.generateConfigForImport.parameter.scope"></a>

- *Type:* github.com/aws/constructs-go/constructs/v10.Construct

The scope in which to define this construct.

---

###### `importToId`<sup>Required</sup> <a name="importToId" id="@cdktn/provider-cloudflare.zeroTrustDlpProximityValidator.ZeroTrustDlpProximityValidator.generateConfigForImport.parameter.importToId"></a>

- *Type:* *string

The construct id used in the generated config for the ZeroTrustDlpProximityValidator to import.

---

###### `importFromId`<sup>Required</sup> <a name="importFromId" id="@cdktn/provider-cloudflare.zeroTrustDlpProximityValidator.ZeroTrustDlpProximityValidator.generateConfigForImport.parameter.importFromId"></a>

- *Type:* *string

The id of the existing ZeroTrustDlpProximityValidator that should be imported.

Refer to the {@link https://registry.terraform.io/providers/cloudflare/cloudflare/5.29.0/docs/resources/zero_trust_dlp_proximity_validator#import import section} in the documentation of this resource for the id to use

---

###### `provider`<sup>Optional</sup> <a name="provider" id="@cdktn/provider-cloudflare.zeroTrustDlpProximityValidator.ZeroTrustDlpProximityValidator.generateConfigForImport.parameter.provider"></a>

- *Type:* github.com/open-constructs/cdk-terrain-go/cdktn.TerraformProvider

? Optional instance of the provider where the ZeroTrustDlpProximityValidator to import is found.

---

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-cloudflare.zeroTrustDlpProximityValidator.ZeroTrustDlpProximityValidator.property.node">Node</a></code> | <code>github.com/aws/constructs-go/constructs/v10.Node</code> | The tree node. |
| <code><a href="#@cdktn/provider-cloudflare.zeroTrustDlpProximityValidator.ZeroTrustDlpProximityValidator.property.cdktfStack">CdktfStack</a></code> | <code>github.com/open-constructs/cdk-terrain-go/cdktn.TerraformStack</code> | *No description.* |
| <code><a href="#@cdktn/provider-cloudflare.zeroTrustDlpProximityValidator.ZeroTrustDlpProximityValidator.property.fqn">Fqn</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktn/provider-cloudflare.zeroTrustDlpProximityValidator.ZeroTrustDlpProximityValidator.property.friendlyUniqueId">FriendlyUniqueId</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktn/provider-cloudflare.zeroTrustDlpProximityValidator.ZeroTrustDlpProximityValidator.property.terraformMetaArguments">TerraformMetaArguments</a></code> | <code>*map[string]interface{}</code> | *No description.* |
| <code><a href="#@cdktn/provider-cloudflare.zeroTrustDlpProximityValidator.ZeroTrustDlpProximityValidator.property.terraformResourceType">TerraformResourceType</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktn/provider-cloudflare.zeroTrustDlpProximityValidator.ZeroTrustDlpProximityValidator.property.terraformGeneratorMetadata">TerraformGeneratorMetadata</a></code> | <code>github.com/open-constructs/cdk-terrain-go/cdktn.TerraformProviderGeneratorMetadata</code> | *No description.* |
| <code><a href="#@cdktn/provider-cloudflare.zeroTrustDlpProximityValidator.ZeroTrustDlpProximityValidator.property.connection">Connection</a></code> | <code>interface{}</code> | *No description.* |
| <code><a href="#@cdktn/provider-cloudflare.zeroTrustDlpProximityValidator.ZeroTrustDlpProximityValidator.property.count">Count</a></code> | <code>interface{}</code> | *No description.* |
| <code><a href="#@cdktn/provider-cloudflare.zeroTrustDlpProximityValidator.ZeroTrustDlpProximityValidator.property.dependsOn">DependsOn</a></code> | <code>*[]*string</code> | *No description.* |
| <code><a href="#@cdktn/provider-cloudflare.zeroTrustDlpProximityValidator.ZeroTrustDlpProximityValidator.property.forEach">ForEach</a></code> | <code>github.com/open-constructs/cdk-terrain-go/cdktn.ITerraformIterator</code> | *No description.* |
| <code><a href="#@cdktn/provider-cloudflare.zeroTrustDlpProximityValidator.ZeroTrustDlpProximityValidator.property.lifecycle">Lifecycle</a></code> | <code>github.com/open-constructs/cdk-terrain-go/cdktn.TerraformResourceLifecycle</code> | *No description.* |
| <code><a href="#@cdktn/provider-cloudflare.zeroTrustDlpProximityValidator.ZeroTrustDlpProximityValidator.property.provider">Provider</a></code> | <code>github.com/open-constructs/cdk-terrain-go/cdktn.TerraformProvider</code> | *No description.* |
| <code><a href="#@cdktn/provider-cloudflare.zeroTrustDlpProximityValidator.ZeroTrustDlpProximityValidator.property.provisioners">Provisioners</a></code> | <code>*[]interface{}</code> | *No description.* |
| <code><a href="#@cdktn/provider-cloudflare.zeroTrustDlpProximityValidator.ZeroTrustDlpProximityValidator.property.createdAt">CreatedAt</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktn/provider-cloudflare.zeroTrustDlpProximityValidator.ZeroTrustDlpProximityValidator.property.id">Id</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktn/provider-cloudflare.zeroTrustDlpProximityValidator.ZeroTrustDlpProximityValidator.property.referencedBy">ReferencedBy</a></code> | <code><a href="#@cdktn/provider-cloudflare.zeroTrustDlpProximityValidator.ZeroTrustDlpProximityValidatorReferencedByOutputReference">ZeroTrustDlpProximityValidatorReferencedByOutputReference</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-cloudflare.zeroTrustDlpProximityValidator.ZeroTrustDlpProximityValidator.property.updatedAt">UpdatedAt</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktn/provider-cloudflare.zeroTrustDlpProximityValidator.ZeroTrustDlpProximityValidator.property.words">Words</a></code> | <code><a href="#@cdktn/provider-cloudflare.zeroTrustDlpProximityValidator.ZeroTrustDlpProximityValidatorWordsList">ZeroTrustDlpProximityValidatorWordsList</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-cloudflare.zeroTrustDlpProximityValidator.ZeroTrustDlpProximityValidator.property.accountIdInput">AccountIdInput</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktn/provider-cloudflare.zeroTrustDlpProximityValidator.ZeroTrustDlpProximityValidator.property.nameInput">NameInput</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktn/provider-cloudflare.zeroTrustDlpProximityValidator.ZeroTrustDlpProximityValidator.property.wordsInput">WordsInput</a></code> | <code>interface{}</code> | *No description.* |
| <code><a href="#@cdktn/provider-cloudflare.zeroTrustDlpProximityValidator.ZeroTrustDlpProximityValidator.property.accountId">AccountId</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktn/provider-cloudflare.zeroTrustDlpProximityValidator.ZeroTrustDlpProximityValidator.property.name">Name</a></code> | <code>*string</code> | *No description.* |

---

##### `Node`<sup>Required</sup> <a name="Node" id="@cdktn/provider-cloudflare.zeroTrustDlpProximityValidator.ZeroTrustDlpProximityValidator.property.node"></a>

```go
func Node() Node
```

- *Type:* github.com/aws/constructs-go/constructs/v10.Node

The tree node.

---

##### `CdktfStack`<sup>Required</sup> <a name="CdktfStack" id="@cdktn/provider-cloudflare.zeroTrustDlpProximityValidator.ZeroTrustDlpProximityValidator.property.cdktfStack"></a>

```go
func CdktfStack() TerraformStack
```

- *Type:* github.com/open-constructs/cdk-terrain-go/cdktn.TerraformStack

---

##### `Fqn`<sup>Required</sup> <a name="Fqn" id="@cdktn/provider-cloudflare.zeroTrustDlpProximityValidator.ZeroTrustDlpProximityValidator.property.fqn"></a>

```go
func Fqn() *string
```

- *Type:* *string

---

##### `FriendlyUniqueId`<sup>Required</sup> <a name="FriendlyUniqueId" id="@cdktn/provider-cloudflare.zeroTrustDlpProximityValidator.ZeroTrustDlpProximityValidator.property.friendlyUniqueId"></a>

```go
func FriendlyUniqueId() *string
```

- *Type:* *string

---

##### `TerraformMetaArguments`<sup>Required</sup> <a name="TerraformMetaArguments" id="@cdktn/provider-cloudflare.zeroTrustDlpProximityValidator.ZeroTrustDlpProximityValidator.property.terraformMetaArguments"></a>

```go
func TerraformMetaArguments() *map[string]interface{}
```

- *Type:* *map[string]interface{}

---

##### `TerraformResourceType`<sup>Required</sup> <a name="TerraformResourceType" id="@cdktn/provider-cloudflare.zeroTrustDlpProximityValidator.ZeroTrustDlpProximityValidator.property.terraformResourceType"></a>

```go
func TerraformResourceType() *string
```

- *Type:* *string

---

##### `TerraformGeneratorMetadata`<sup>Optional</sup> <a name="TerraformGeneratorMetadata" id="@cdktn/provider-cloudflare.zeroTrustDlpProximityValidator.ZeroTrustDlpProximityValidator.property.terraformGeneratorMetadata"></a>

```go
func TerraformGeneratorMetadata() TerraformProviderGeneratorMetadata
```

- *Type:* github.com/open-constructs/cdk-terrain-go/cdktn.TerraformProviderGeneratorMetadata

---

##### `Connection`<sup>Optional</sup> <a name="Connection" id="@cdktn/provider-cloudflare.zeroTrustDlpProximityValidator.ZeroTrustDlpProximityValidator.property.connection"></a>

```go
func Connection() interface{}
```

- *Type:* interface{}

---

##### `Count`<sup>Optional</sup> <a name="Count" id="@cdktn/provider-cloudflare.zeroTrustDlpProximityValidator.ZeroTrustDlpProximityValidator.property.count"></a>

```go
func Count() interface{}
```

- *Type:* interface{}

---

##### `DependsOn`<sup>Optional</sup> <a name="DependsOn" id="@cdktn/provider-cloudflare.zeroTrustDlpProximityValidator.ZeroTrustDlpProximityValidator.property.dependsOn"></a>

```go
func DependsOn() *[]*string
```

- *Type:* *[]*string

---

##### `ForEach`<sup>Optional</sup> <a name="ForEach" id="@cdktn/provider-cloudflare.zeroTrustDlpProximityValidator.ZeroTrustDlpProximityValidator.property.forEach"></a>

```go
func ForEach() ITerraformIterator
```

- *Type:* github.com/open-constructs/cdk-terrain-go/cdktn.ITerraformIterator

---

##### `Lifecycle`<sup>Optional</sup> <a name="Lifecycle" id="@cdktn/provider-cloudflare.zeroTrustDlpProximityValidator.ZeroTrustDlpProximityValidator.property.lifecycle"></a>

```go
func Lifecycle() TerraformResourceLifecycle
```

- *Type:* github.com/open-constructs/cdk-terrain-go/cdktn.TerraformResourceLifecycle

---

##### `Provider`<sup>Optional</sup> <a name="Provider" id="@cdktn/provider-cloudflare.zeroTrustDlpProximityValidator.ZeroTrustDlpProximityValidator.property.provider"></a>

```go
func Provider() TerraformProvider
```

- *Type:* github.com/open-constructs/cdk-terrain-go/cdktn.TerraformProvider

---

##### `Provisioners`<sup>Optional</sup> <a name="Provisioners" id="@cdktn/provider-cloudflare.zeroTrustDlpProximityValidator.ZeroTrustDlpProximityValidator.property.provisioners"></a>

```go
func Provisioners() *[]interface{}
```

- *Type:* *[]interface{}

---

##### `CreatedAt`<sup>Required</sup> <a name="CreatedAt" id="@cdktn/provider-cloudflare.zeroTrustDlpProximityValidator.ZeroTrustDlpProximityValidator.property.createdAt"></a>

```go
func CreatedAt() *string
```

- *Type:* *string

---

##### `Id`<sup>Required</sup> <a name="Id" id="@cdktn/provider-cloudflare.zeroTrustDlpProximityValidator.ZeroTrustDlpProximityValidator.property.id"></a>

```go
func Id() *string
```

- *Type:* *string

---

##### `ReferencedBy`<sup>Required</sup> <a name="ReferencedBy" id="@cdktn/provider-cloudflare.zeroTrustDlpProximityValidator.ZeroTrustDlpProximityValidator.property.referencedBy"></a>

```go
func ReferencedBy() ZeroTrustDlpProximityValidatorReferencedByOutputReference
```

- *Type:* <a href="#@cdktn/provider-cloudflare.zeroTrustDlpProximityValidator.ZeroTrustDlpProximityValidatorReferencedByOutputReference">ZeroTrustDlpProximityValidatorReferencedByOutputReference</a>

---

##### `UpdatedAt`<sup>Required</sup> <a name="UpdatedAt" id="@cdktn/provider-cloudflare.zeroTrustDlpProximityValidator.ZeroTrustDlpProximityValidator.property.updatedAt"></a>

```go
func UpdatedAt() *string
```

- *Type:* *string

---

##### `Words`<sup>Required</sup> <a name="Words" id="@cdktn/provider-cloudflare.zeroTrustDlpProximityValidator.ZeroTrustDlpProximityValidator.property.words"></a>

```go
func Words() ZeroTrustDlpProximityValidatorWordsList
```

- *Type:* <a href="#@cdktn/provider-cloudflare.zeroTrustDlpProximityValidator.ZeroTrustDlpProximityValidatorWordsList">ZeroTrustDlpProximityValidatorWordsList</a>

---

##### `AccountIdInput`<sup>Optional</sup> <a name="AccountIdInput" id="@cdktn/provider-cloudflare.zeroTrustDlpProximityValidator.ZeroTrustDlpProximityValidator.property.accountIdInput"></a>

```go
func AccountIdInput() *string
```

- *Type:* *string

---

##### `NameInput`<sup>Optional</sup> <a name="NameInput" id="@cdktn/provider-cloudflare.zeroTrustDlpProximityValidator.ZeroTrustDlpProximityValidator.property.nameInput"></a>

```go
func NameInput() *string
```

- *Type:* *string

---

##### `WordsInput`<sup>Optional</sup> <a name="WordsInput" id="@cdktn/provider-cloudflare.zeroTrustDlpProximityValidator.ZeroTrustDlpProximityValidator.property.wordsInput"></a>

```go
func WordsInput() interface{}
```

- *Type:* interface{}

---

##### `AccountId`<sup>Required</sup> <a name="AccountId" id="@cdktn/provider-cloudflare.zeroTrustDlpProximityValidator.ZeroTrustDlpProximityValidator.property.accountId"></a>

```go
func AccountId() *string
```

- *Type:* *string

---

##### `Name`<sup>Required</sup> <a name="Name" id="@cdktn/provider-cloudflare.zeroTrustDlpProximityValidator.ZeroTrustDlpProximityValidator.property.name"></a>

```go
func Name() *string
```

- *Type:* *string

---

#### Constants <a name="Constants" id="Constants"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-cloudflare.zeroTrustDlpProximityValidator.ZeroTrustDlpProximityValidator.property.tfResourceType">TfResourceType</a></code> | <code>*string</code> | *No description.* |

---

##### `TfResourceType`<sup>Required</sup> <a name="TfResourceType" id="@cdktn/provider-cloudflare.zeroTrustDlpProximityValidator.ZeroTrustDlpProximityValidator.property.tfResourceType"></a>

```go
func TfResourceType() *string
```

- *Type:* *string

---

## Structs <a name="Structs" id="Structs"></a>

### ZeroTrustDlpProximityValidatorConfig <a name="ZeroTrustDlpProximityValidatorConfig" id="@cdktn/provider-cloudflare.zeroTrustDlpProximityValidator.ZeroTrustDlpProximityValidatorConfig"></a>

#### Initializer <a name="Initializer" id="@cdktn/provider-cloudflare.zeroTrustDlpProximityValidator.ZeroTrustDlpProximityValidatorConfig.Initializer"></a>

```go
import "github.com/cdktn-io/cdktn-provider-cloudflare-go/cloudflare/v17/zerotrustdlpproximityvalidator"

&zerotrustdlpproximityvalidator.ZeroTrustDlpProximityValidatorConfig {
	Connection: interface{},
	Count: interface{},
	DependsOn: *[]github.com/open-constructs/cdk-terrain-go/cdktn.ITerraformDependable,
	ForEach: github.com/open-constructs/cdk-terrain-go/cdktn.ITerraformIterator,
	Lifecycle: github.com/open-constructs/cdk-terrain-go/cdktn.TerraformResourceLifecycle,
	Provider: github.com/open-constructs/cdk-terrain-go/cdktn.TerraformProvider,
	Provisioners: *[]interface{},
	AccountId: *string,
	Name: *string,
	Words: interface{},
}
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-cloudflare.zeroTrustDlpProximityValidator.ZeroTrustDlpProximityValidatorConfig.property.connection">Connection</a></code> | <code>interface{}</code> | *No description.* |
| <code><a href="#@cdktn/provider-cloudflare.zeroTrustDlpProximityValidator.ZeroTrustDlpProximityValidatorConfig.property.count">Count</a></code> | <code>interface{}</code> | *No description.* |
| <code><a href="#@cdktn/provider-cloudflare.zeroTrustDlpProximityValidator.ZeroTrustDlpProximityValidatorConfig.property.dependsOn">DependsOn</a></code> | <code>*[]github.com/open-constructs/cdk-terrain-go/cdktn.ITerraformDependable</code> | *No description.* |
| <code><a href="#@cdktn/provider-cloudflare.zeroTrustDlpProximityValidator.ZeroTrustDlpProximityValidatorConfig.property.forEach">ForEach</a></code> | <code>github.com/open-constructs/cdk-terrain-go/cdktn.ITerraformIterator</code> | *No description.* |
| <code><a href="#@cdktn/provider-cloudflare.zeroTrustDlpProximityValidator.ZeroTrustDlpProximityValidatorConfig.property.lifecycle">Lifecycle</a></code> | <code>github.com/open-constructs/cdk-terrain-go/cdktn.TerraformResourceLifecycle</code> | *No description.* |
| <code><a href="#@cdktn/provider-cloudflare.zeroTrustDlpProximityValidator.ZeroTrustDlpProximityValidatorConfig.property.provider">Provider</a></code> | <code>github.com/open-constructs/cdk-terrain-go/cdktn.TerraformProvider</code> | *No description.* |
| <code><a href="#@cdktn/provider-cloudflare.zeroTrustDlpProximityValidator.ZeroTrustDlpProximityValidatorConfig.property.provisioners">Provisioners</a></code> | <code>*[]interface{}</code> | *No description.* |
| <code><a href="#@cdktn/provider-cloudflare.zeroTrustDlpProximityValidator.ZeroTrustDlpProximityValidatorConfig.property.accountId">AccountId</a></code> | <code>*string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/cloudflare/cloudflare/5.29.0/docs/resources/zero_trust_dlp_proximity_validator#account_id ZeroTrustDlpProximityValidator#account_id}. |
| <code><a href="#@cdktn/provider-cloudflare.zeroTrustDlpProximityValidator.ZeroTrustDlpProximityValidatorConfig.property.name">Name</a></code> | <code>*string</code> | A name for this validator, at most 50 characters. |
| <code><a href="#@cdktn/provider-cloudflare.zeroTrustDlpProximityValidator.ZeroTrustDlpProximityValidatorConfig.property.words">Words</a></code> | <code>interface{}</code> | The words that raise confidence when found near a match, at most 100 per validator. |

---

##### `Connection`<sup>Optional</sup> <a name="Connection" id="@cdktn/provider-cloudflare.zeroTrustDlpProximityValidator.ZeroTrustDlpProximityValidatorConfig.property.connection"></a>

```go
Connection interface{}
```

- *Type:* interface{}

---

##### `Count`<sup>Optional</sup> <a name="Count" id="@cdktn/provider-cloudflare.zeroTrustDlpProximityValidator.ZeroTrustDlpProximityValidatorConfig.property.count"></a>

```go
Count interface{}
```

- *Type:* interface{}

---

##### `DependsOn`<sup>Optional</sup> <a name="DependsOn" id="@cdktn/provider-cloudflare.zeroTrustDlpProximityValidator.ZeroTrustDlpProximityValidatorConfig.property.dependsOn"></a>

```go
DependsOn *[]ITerraformDependable
```

- *Type:* *[]github.com/open-constructs/cdk-terrain-go/cdktn.ITerraformDependable

---

##### `ForEach`<sup>Optional</sup> <a name="ForEach" id="@cdktn/provider-cloudflare.zeroTrustDlpProximityValidator.ZeroTrustDlpProximityValidatorConfig.property.forEach"></a>

```go
ForEach ITerraformIterator
```

- *Type:* github.com/open-constructs/cdk-terrain-go/cdktn.ITerraformIterator

---

##### `Lifecycle`<sup>Optional</sup> <a name="Lifecycle" id="@cdktn/provider-cloudflare.zeroTrustDlpProximityValidator.ZeroTrustDlpProximityValidatorConfig.property.lifecycle"></a>

```go
Lifecycle TerraformResourceLifecycle
```

- *Type:* github.com/open-constructs/cdk-terrain-go/cdktn.TerraformResourceLifecycle

---

##### `Provider`<sup>Optional</sup> <a name="Provider" id="@cdktn/provider-cloudflare.zeroTrustDlpProximityValidator.ZeroTrustDlpProximityValidatorConfig.property.provider"></a>

```go
Provider TerraformProvider
```

- *Type:* github.com/open-constructs/cdk-terrain-go/cdktn.TerraformProvider

---

##### `Provisioners`<sup>Optional</sup> <a name="Provisioners" id="@cdktn/provider-cloudflare.zeroTrustDlpProximityValidator.ZeroTrustDlpProximityValidatorConfig.property.provisioners"></a>

```go
Provisioners *[]interface{}
```

- *Type:* *[]interface{}

---

##### `AccountId`<sup>Required</sup> <a name="AccountId" id="@cdktn/provider-cloudflare.zeroTrustDlpProximityValidator.ZeroTrustDlpProximityValidatorConfig.property.accountId"></a>

```go
AccountId *string
```

- *Type:* *string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/cloudflare/cloudflare/5.29.0/docs/resources/zero_trust_dlp_proximity_validator#account_id ZeroTrustDlpProximityValidator#account_id}.

---

##### `Name`<sup>Required</sup> <a name="Name" id="@cdktn/provider-cloudflare.zeroTrustDlpProximityValidator.ZeroTrustDlpProximityValidatorConfig.property.name"></a>

```go
Name *string
```

- *Type:* *string

A name for this validator, at most 50 characters.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/cloudflare/cloudflare/5.29.0/docs/resources/zero_trust_dlp_proximity_validator#name ZeroTrustDlpProximityValidator#name}

---

##### `Words`<sup>Required</sup> <a name="Words" id="@cdktn/provider-cloudflare.zeroTrustDlpProximityValidator.ZeroTrustDlpProximityValidatorConfig.property.words"></a>

```go
Words interface{}
```

- *Type:* interface{}

The words that raise confidence when found near a match, at most 100 per validator.

Matching
ignores case, so the list may not contain the same word twice with different capitalisation.
Words are stored as sent.

For example, a validator for medical record numbers might use
`[{"word": "patient", "weight": "strong"}, {"word": "diagnosis", "weight": "moderate"}, {"word": "mrn", "weight": "weak"}]`.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/cloudflare/cloudflare/5.29.0/docs/resources/zero_trust_dlp_proximity_validator#words ZeroTrustDlpProximityValidator#words}

---

### ZeroTrustDlpProximityValidatorReferencedBy <a name="ZeroTrustDlpProximityValidatorReferencedBy" id="@cdktn/provider-cloudflare.zeroTrustDlpProximityValidator.ZeroTrustDlpProximityValidatorReferencedBy"></a>

#### Initializer <a name="Initializer" id="@cdktn/provider-cloudflare.zeroTrustDlpProximityValidator.ZeroTrustDlpProximityValidatorReferencedBy.Initializer"></a>

```go
import "github.com/cdktn-io/cdktn-provider-cloudflare-go/cloudflare/v17/zerotrustdlpproximityvalidator"

&zerotrustdlpproximityvalidator.ZeroTrustDlpProximityValidatorReferencedBy {

}
```


### ZeroTrustDlpProximityValidatorReferencedByEntries <a name="ZeroTrustDlpProximityValidatorReferencedByEntries" id="@cdktn/provider-cloudflare.zeroTrustDlpProximityValidator.ZeroTrustDlpProximityValidatorReferencedByEntries"></a>

#### Initializer <a name="Initializer" id="@cdktn/provider-cloudflare.zeroTrustDlpProximityValidator.ZeroTrustDlpProximityValidatorReferencedByEntries.Initializer"></a>

```go
import "github.com/cdktn-io/cdktn-provider-cloudflare-go/cloudflare/v17/zerotrustdlpproximityvalidator"

&zerotrustdlpproximityvalidator.ZeroTrustDlpProximityValidatorReferencedByEntries {

}
```


### ZeroTrustDlpProximityValidatorWords <a name="ZeroTrustDlpProximityValidatorWords" id="@cdktn/provider-cloudflare.zeroTrustDlpProximityValidator.ZeroTrustDlpProximityValidatorWords"></a>

#### Initializer <a name="Initializer" id="@cdktn/provider-cloudflare.zeroTrustDlpProximityValidator.ZeroTrustDlpProximityValidatorWords.Initializer"></a>

```go
import "github.com/cdktn-io/cdktn-provider-cloudflare-go/cloudflare/v17/zerotrustdlpproximityvalidator"

&zerotrustdlpproximityvalidator.ZeroTrustDlpProximityValidatorWords {
	Weight: *string,
	Word: *string,
}
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-cloudflare.zeroTrustDlpProximityValidator.ZeroTrustDlpProximityValidatorWords.property.weight">Weight</a></code> | <code>*string</code> | How much a word contributes to a match's confidence when it is found nearby. |
| <code><a href="#@cdktn/provider-cloudflare.zeroTrustDlpProximityValidator.ZeroTrustDlpProximityValidatorWords.property.word">Word</a></code> | <code>*string</code> | The word or phrase to look for. Must contain 1–128 characters and is matched case-insensitively. |

---

##### `Weight`<sup>Required</sup> <a name="Weight" id="@cdktn/provider-cloudflare.zeroTrustDlpProximityValidator.ZeroTrustDlpProximityValidatorWords.property.weight"></a>

```go
Weight *string
```

- *Type:* *string

How much a word contributes to a match's confidence when it is found nearby.

Separate from a profile's high/medium/low confidence threshold: this describes how telling the
word is, not how confident the resulting match is.
Available values: "strong", "moderate", "weak".

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/cloudflare/cloudflare/5.29.0/docs/resources/zero_trust_dlp_proximity_validator#weight ZeroTrustDlpProximityValidator#weight}

---

##### `Word`<sup>Required</sup> <a name="Word" id="@cdktn/provider-cloudflare.zeroTrustDlpProximityValidator.ZeroTrustDlpProximityValidatorWords.property.word"></a>

```go
Word *string
```

- *Type:* *string

The word or phrase to look for. Must contain 1–128 characters and is matched case-insensitively.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/cloudflare/cloudflare/5.29.0/docs/resources/zero_trust_dlp_proximity_validator#word ZeroTrustDlpProximityValidator#word}

---

## Classes <a name="Classes" id="Classes"></a>

### ZeroTrustDlpProximityValidatorReferencedByEntriesList <a name="ZeroTrustDlpProximityValidatorReferencedByEntriesList" id="@cdktn/provider-cloudflare.zeroTrustDlpProximityValidator.ZeroTrustDlpProximityValidatorReferencedByEntriesList"></a>

#### Initializers <a name="Initializers" id="@cdktn/provider-cloudflare.zeroTrustDlpProximityValidator.ZeroTrustDlpProximityValidatorReferencedByEntriesList.Initializer"></a>

```go
import "github.com/cdktn-io/cdktn-provider-cloudflare-go/cloudflare/v17/zerotrustdlpproximityvalidator"

zerotrustdlpproximityvalidator.NewZeroTrustDlpProximityValidatorReferencedByEntriesList(terraformResource IInterpolatingParent, terraformAttribute *string, wrapsSet *bool) ZeroTrustDlpProximityValidatorReferencedByEntriesList
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-cloudflare.zeroTrustDlpProximityValidator.ZeroTrustDlpProximityValidatorReferencedByEntriesList.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>github.com/open-constructs/cdk-terrain-go/cdktn.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktn/provider-cloudflare.zeroTrustDlpProximityValidator.ZeroTrustDlpProximityValidatorReferencedByEntriesList.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>*string</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#@cdktn/provider-cloudflare.zeroTrustDlpProximityValidator.ZeroTrustDlpProximityValidatorReferencedByEntriesList.Initializer.parameter.wrapsSet">wrapsSet</a></code> | <code>*bool</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktn/provider-cloudflare.zeroTrustDlpProximityValidator.ZeroTrustDlpProximityValidatorReferencedByEntriesList.Initializer.parameter.terraformResource"></a>

- *Type:* github.com/open-constructs/cdk-terrain-go/cdktn.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-cloudflare.zeroTrustDlpProximityValidator.ZeroTrustDlpProximityValidatorReferencedByEntriesList.Initializer.parameter.terraformAttribute"></a>

- *Type:* *string

The attribute on the parent resource this class is referencing.

---

##### `wrapsSet`<sup>Required</sup> <a name="wrapsSet" id="@cdktn/provider-cloudflare.zeroTrustDlpProximityValidator.ZeroTrustDlpProximityValidatorReferencedByEntriesList.Initializer.parameter.wrapsSet"></a>

- *Type:* *bool

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-cloudflare.zeroTrustDlpProximityValidator.ZeroTrustDlpProximityValidatorReferencedByEntriesList.allWithMapKey">AllWithMapKey</a></code> | Creating an iterator for this complex list. |
| <code><a href="#@cdktn/provider-cloudflare.zeroTrustDlpProximityValidator.ZeroTrustDlpProximityValidatorReferencedByEntriesList.computeFqn">ComputeFqn</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-cloudflare.zeroTrustDlpProximityValidator.ZeroTrustDlpProximityValidatorReferencedByEntriesList.resolve">Resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktn/provider-cloudflare.zeroTrustDlpProximityValidator.ZeroTrustDlpProximityValidatorReferencedByEntriesList.toString">ToString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktn/provider-cloudflare.zeroTrustDlpProximityValidator.ZeroTrustDlpProximityValidatorReferencedByEntriesList.get">Get</a></code> | *No description.* |

---

##### `AllWithMapKey` <a name="AllWithMapKey" id="@cdktn/provider-cloudflare.zeroTrustDlpProximityValidator.ZeroTrustDlpProximityValidatorReferencedByEntriesList.allWithMapKey"></a>

```go
func AllWithMapKey(mapKeyAttributeName *string) DynamicListTerraformIterator
```

Creating an iterator for this complex list.

The list will be converted into a map with the mapKeyAttributeName as the key.

###### `mapKeyAttributeName`<sup>Required</sup> <a name="mapKeyAttributeName" id="@cdktn/provider-cloudflare.zeroTrustDlpProximityValidator.ZeroTrustDlpProximityValidatorReferencedByEntriesList.allWithMapKey.parameter.mapKeyAttributeName"></a>

- *Type:* *string

---

##### `ComputeFqn` <a name="ComputeFqn" id="@cdktn/provider-cloudflare.zeroTrustDlpProximityValidator.ZeroTrustDlpProximityValidatorReferencedByEntriesList.computeFqn"></a>

```go
func ComputeFqn() *string
```

##### `Resolve` <a name="Resolve" id="@cdktn/provider-cloudflare.zeroTrustDlpProximityValidator.ZeroTrustDlpProximityValidatorReferencedByEntriesList.resolve"></a>

```go
func Resolve(_context IResolveContext) interface{}
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktn/provider-cloudflare.zeroTrustDlpProximityValidator.ZeroTrustDlpProximityValidatorReferencedByEntriesList.resolve.parameter._context"></a>

- *Type:* github.com/open-constructs/cdk-terrain-go/cdktn.IResolveContext

---

##### `ToString` <a name="ToString" id="@cdktn/provider-cloudflare.zeroTrustDlpProximityValidator.ZeroTrustDlpProximityValidatorReferencedByEntriesList.toString"></a>

```go
func ToString() *string
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `Get` <a name="Get" id="@cdktn/provider-cloudflare.zeroTrustDlpProximityValidator.ZeroTrustDlpProximityValidatorReferencedByEntriesList.get"></a>

```go
func Get(index *f64) ZeroTrustDlpProximityValidatorReferencedByEntriesOutputReference
```

###### `index`<sup>Required</sup> <a name="index" id="@cdktn/provider-cloudflare.zeroTrustDlpProximityValidator.ZeroTrustDlpProximityValidatorReferencedByEntriesList.get.parameter.index"></a>

- *Type:* *f64

the index of the item to return.

---


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-cloudflare.zeroTrustDlpProximityValidator.ZeroTrustDlpProximityValidatorReferencedByEntriesList.property.creationStack">CreationStack</a></code> | <code>*[]*string</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktn/provider-cloudflare.zeroTrustDlpProximityValidator.ZeroTrustDlpProximityValidatorReferencedByEntriesList.property.fqn">Fqn</a></code> | <code>*string</code> | *No description.* |

---

##### `CreationStack`<sup>Required</sup> <a name="CreationStack" id="@cdktn/provider-cloudflare.zeroTrustDlpProximityValidator.ZeroTrustDlpProximityValidatorReferencedByEntriesList.property.creationStack"></a>

```go
func CreationStack() *[]*string
```

- *Type:* *[]*string

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `Fqn`<sup>Required</sup> <a name="Fqn" id="@cdktn/provider-cloudflare.zeroTrustDlpProximityValidator.ZeroTrustDlpProximityValidatorReferencedByEntriesList.property.fqn"></a>

```go
func Fqn() *string
```

- *Type:* *string

---


### ZeroTrustDlpProximityValidatorReferencedByEntriesOutputReference <a name="ZeroTrustDlpProximityValidatorReferencedByEntriesOutputReference" id="@cdktn/provider-cloudflare.zeroTrustDlpProximityValidator.ZeroTrustDlpProximityValidatorReferencedByEntriesOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktn/provider-cloudflare.zeroTrustDlpProximityValidator.ZeroTrustDlpProximityValidatorReferencedByEntriesOutputReference.Initializer"></a>

```go
import "github.com/cdktn-io/cdktn-provider-cloudflare-go/cloudflare/v17/zerotrustdlpproximityvalidator"

zerotrustdlpproximityvalidator.NewZeroTrustDlpProximityValidatorReferencedByEntriesOutputReference(terraformResource IInterpolatingParent, terraformAttribute *string, complexObjectIndex *f64, complexObjectIsFromSet *bool) ZeroTrustDlpProximityValidatorReferencedByEntriesOutputReference
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-cloudflare.zeroTrustDlpProximityValidator.ZeroTrustDlpProximityValidatorReferencedByEntriesOutputReference.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>github.com/open-constructs/cdk-terrain-go/cdktn.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktn/provider-cloudflare.zeroTrustDlpProximityValidator.ZeroTrustDlpProximityValidatorReferencedByEntriesOutputReference.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>*string</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#@cdktn/provider-cloudflare.zeroTrustDlpProximityValidator.ZeroTrustDlpProximityValidatorReferencedByEntriesOutputReference.Initializer.parameter.complexObjectIndex">complexObjectIndex</a></code> | <code>*f64</code> | the index of this item in the list. |
| <code><a href="#@cdktn/provider-cloudflare.zeroTrustDlpProximityValidator.ZeroTrustDlpProximityValidatorReferencedByEntriesOutputReference.Initializer.parameter.complexObjectIsFromSet">complexObjectIsFromSet</a></code> | <code>*bool</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktn/provider-cloudflare.zeroTrustDlpProximityValidator.ZeroTrustDlpProximityValidatorReferencedByEntriesOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* github.com/open-constructs/cdk-terrain-go/cdktn.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-cloudflare.zeroTrustDlpProximityValidator.ZeroTrustDlpProximityValidatorReferencedByEntriesOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* *string

The attribute on the parent resource this class is referencing.

---

##### `complexObjectIndex`<sup>Required</sup> <a name="complexObjectIndex" id="@cdktn/provider-cloudflare.zeroTrustDlpProximityValidator.ZeroTrustDlpProximityValidatorReferencedByEntriesOutputReference.Initializer.parameter.complexObjectIndex"></a>

- *Type:* *f64

the index of this item in the list.

---

##### `complexObjectIsFromSet`<sup>Required</sup> <a name="complexObjectIsFromSet" id="@cdktn/provider-cloudflare.zeroTrustDlpProximityValidator.ZeroTrustDlpProximityValidatorReferencedByEntriesOutputReference.Initializer.parameter.complexObjectIsFromSet"></a>

- *Type:* *bool

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-cloudflare.zeroTrustDlpProximityValidator.ZeroTrustDlpProximityValidatorReferencedByEntriesOutputReference.computeFqn">ComputeFqn</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-cloudflare.zeroTrustDlpProximityValidator.ZeroTrustDlpProximityValidatorReferencedByEntriesOutputReference.getAnyMapAttribute">GetAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-cloudflare.zeroTrustDlpProximityValidator.ZeroTrustDlpProximityValidatorReferencedByEntriesOutputReference.getBooleanAttribute">GetBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-cloudflare.zeroTrustDlpProximityValidator.ZeroTrustDlpProximityValidatorReferencedByEntriesOutputReference.getBooleanMapAttribute">GetBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-cloudflare.zeroTrustDlpProximityValidator.ZeroTrustDlpProximityValidatorReferencedByEntriesOutputReference.getListAttribute">GetListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-cloudflare.zeroTrustDlpProximityValidator.ZeroTrustDlpProximityValidatorReferencedByEntriesOutputReference.getNumberAttribute">GetNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-cloudflare.zeroTrustDlpProximityValidator.ZeroTrustDlpProximityValidatorReferencedByEntriesOutputReference.getNumberListAttribute">GetNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-cloudflare.zeroTrustDlpProximityValidator.ZeroTrustDlpProximityValidatorReferencedByEntriesOutputReference.getNumberMapAttribute">GetNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-cloudflare.zeroTrustDlpProximityValidator.ZeroTrustDlpProximityValidatorReferencedByEntriesOutputReference.getStringAttribute">GetStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-cloudflare.zeroTrustDlpProximityValidator.ZeroTrustDlpProximityValidatorReferencedByEntriesOutputReference.getStringMapAttribute">GetStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-cloudflare.zeroTrustDlpProximityValidator.ZeroTrustDlpProximityValidatorReferencedByEntriesOutputReference.interpolationForAttribute">InterpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-cloudflare.zeroTrustDlpProximityValidator.ZeroTrustDlpProximityValidatorReferencedByEntriesOutputReference.resolve">Resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktn/provider-cloudflare.zeroTrustDlpProximityValidator.ZeroTrustDlpProximityValidatorReferencedByEntriesOutputReference.toString">ToString</a></code> | Return a string representation of this resolvable object. |

---

##### `ComputeFqn` <a name="ComputeFqn" id="@cdktn/provider-cloudflare.zeroTrustDlpProximityValidator.ZeroTrustDlpProximityValidatorReferencedByEntriesOutputReference.computeFqn"></a>

```go
func ComputeFqn() *string
```

##### `GetAnyMapAttribute` <a name="GetAnyMapAttribute" id="@cdktn/provider-cloudflare.zeroTrustDlpProximityValidator.ZeroTrustDlpProximityValidatorReferencedByEntriesOutputReference.getAnyMapAttribute"></a>

```go
func GetAnyMapAttribute(terraformAttribute *string) *map[string]interface{}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-cloudflare.zeroTrustDlpProximityValidator.ZeroTrustDlpProximityValidatorReferencedByEntriesOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetBooleanAttribute` <a name="GetBooleanAttribute" id="@cdktn/provider-cloudflare.zeroTrustDlpProximityValidator.ZeroTrustDlpProximityValidatorReferencedByEntriesOutputReference.getBooleanAttribute"></a>

```go
func GetBooleanAttribute(terraformAttribute *string) IResolvable
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-cloudflare.zeroTrustDlpProximityValidator.ZeroTrustDlpProximityValidatorReferencedByEntriesOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetBooleanMapAttribute` <a name="GetBooleanMapAttribute" id="@cdktn/provider-cloudflare.zeroTrustDlpProximityValidator.ZeroTrustDlpProximityValidatorReferencedByEntriesOutputReference.getBooleanMapAttribute"></a>

```go
func GetBooleanMapAttribute(terraformAttribute *string) *map[string]*bool
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-cloudflare.zeroTrustDlpProximityValidator.ZeroTrustDlpProximityValidatorReferencedByEntriesOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetListAttribute` <a name="GetListAttribute" id="@cdktn/provider-cloudflare.zeroTrustDlpProximityValidator.ZeroTrustDlpProximityValidatorReferencedByEntriesOutputReference.getListAttribute"></a>

```go
func GetListAttribute(terraformAttribute *string) *[]*string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-cloudflare.zeroTrustDlpProximityValidator.ZeroTrustDlpProximityValidatorReferencedByEntriesOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberAttribute` <a name="GetNumberAttribute" id="@cdktn/provider-cloudflare.zeroTrustDlpProximityValidator.ZeroTrustDlpProximityValidatorReferencedByEntriesOutputReference.getNumberAttribute"></a>

```go
func GetNumberAttribute(terraformAttribute *string) *f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-cloudflare.zeroTrustDlpProximityValidator.ZeroTrustDlpProximityValidatorReferencedByEntriesOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberListAttribute` <a name="GetNumberListAttribute" id="@cdktn/provider-cloudflare.zeroTrustDlpProximityValidator.ZeroTrustDlpProximityValidatorReferencedByEntriesOutputReference.getNumberListAttribute"></a>

```go
func GetNumberListAttribute(terraformAttribute *string) *[]*f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-cloudflare.zeroTrustDlpProximityValidator.ZeroTrustDlpProximityValidatorReferencedByEntriesOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberMapAttribute` <a name="GetNumberMapAttribute" id="@cdktn/provider-cloudflare.zeroTrustDlpProximityValidator.ZeroTrustDlpProximityValidatorReferencedByEntriesOutputReference.getNumberMapAttribute"></a>

```go
func GetNumberMapAttribute(terraformAttribute *string) *map[string]*f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-cloudflare.zeroTrustDlpProximityValidator.ZeroTrustDlpProximityValidatorReferencedByEntriesOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetStringAttribute` <a name="GetStringAttribute" id="@cdktn/provider-cloudflare.zeroTrustDlpProximityValidator.ZeroTrustDlpProximityValidatorReferencedByEntriesOutputReference.getStringAttribute"></a>

```go
func GetStringAttribute(terraformAttribute *string) *string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-cloudflare.zeroTrustDlpProximityValidator.ZeroTrustDlpProximityValidatorReferencedByEntriesOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetStringMapAttribute` <a name="GetStringMapAttribute" id="@cdktn/provider-cloudflare.zeroTrustDlpProximityValidator.ZeroTrustDlpProximityValidatorReferencedByEntriesOutputReference.getStringMapAttribute"></a>

```go
func GetStringMapAttribute(terraformAttribute *string) *map[string]*string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-cloudflare.zeroTrustDlpProximityValidator.ZeroTrustDlpProximityValidatorReferencedByEntriesOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `InterpolationForAttribute` <a name="InterpolationForAttribute" id="@cdktn/provider-cloudflare.zeroTrustDlpProximityValidator.ZeroTrustDlpProximityValidatorReferencedByEntriesOutputReference.interpolationForAttribute"></a>

```go
func InterpolationForAttribute(property *string) IResolvable
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktn/provider-cloudflare.zeroTrustDlpProximityValidator.ZeroTrustDlpProximityValidatorReferencedByEntriesOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* *string

---

##### `Resolve` <a name="Resolve" id="@cdktn/provider-cloudflare.zeroTrustDlpProximityValidator.ZeroTrustDlpProximityValidatorReferencedByEntriesOutputReference.resolve"></a>

```go
func Resolve(_context IResolveContext) interface{}
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktn/provider-cloudflare.zeroTrustDlpProximityValidator.ZeroTrustDlpProximityValidatorReferencedByEntriesOutputReference.resolve.parameter._context"></a>

- *Type:* github.com/open-constructs/cdk-terrain-go/cdktn.IResolveContext

---

##### `ToString` <a name="ToString" id="@cdktn/provider-cloudflare.zeroTrustDlpProximityValidator.ZeroTrustDlpProximityValidatorReferencedByEntriesOutputReference.toString"></a>

```go
func ToString() *string
```

Return a string representation of this resolvable object.

Returns a reversible string representation.


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-cloudflare.zeroTrustDlpProximityValidator.ZeroTrustDlpProximityValidatorReferencedByEntriesOutputReference.property.creationStack">CreationStack</a></code> | <code>*[]*string</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktn/provider-cloudflare.zeroTrustDlpProximityValidator.ZeroTrustDlpProximityValidatorReferencedByEntriesOutputReference.property.fqn">Fqn</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktn/provider-cloudflare.zeroTrustDlpProximityValidator.ZeroTrustDlpProximityValidatorReferencedByEntriesOutputReference.property.id">Id</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktn/provider-cloudflare.zeroTrustDlpProximityValidator.ZeroTrustDlpProximityValidatorReferencedByEntriesOutputReference.property.name">Name</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktn/provider-cloudflare.zeroTrustDlpProximityValidator.ZeroTrustDlpProximityValidatorReferencedByEntriesOutputReference.property.type">Type</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktn/provider-cloudflare.zeroTrustDlpProximityValidator.ZeroTrustDlpProximityValidatorReferencedByEntriesOutputReference.property.internalValue">InternalValue</a></code> | <code><a href="#@cdktn/provider-cloudflare.zeroTrustDlpProximityValidator.ZeroTrustDlpProximityValidatorReferencedByEntries">ZeroTrustDlpProximityValidatorReferencedByEntries</a></code> | *No description.* |

---

##### `CreationStack`<sup>Required</sup> <a name="CreationStack" id="@cdktn/provider-cloudflare.zeroTrustDlpProximityValidator.ZeroTrustDlpProximityValidatorReferencedByEntriesOutputReference.property.creationStack"></a>

```go
func CreationStack() *[]*string
```

- *Type:* *[]*string

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `Fqn`<sup>Required</sup> <a name="Fqn" id="@cdktn/provider-cloudflare.zeroTrustDlpProximityValidator.ZeroTrustDlpProximityValidatorReferencedByEntriesOutputReference.property.fqn"></a>

```go
func Fqn() *string
```

- *Type:* *string

---

##### `Id`<sup>Required</sup> <a name="Id" id="@cdktn/provider-cloudflare.zeroTrustDlpProximityValidator.ZeroTrustDlpProximityValidatorReferencedByEntriesOutputReference.property.id"></a>

```go
func Id() *string
```

- *Type:* *string

---

##### `Name`<sup>Required</sup> <a name="Name" id="@cdktn/provider-cloudflare.zeroTrustDlpProximityValidator.ZeroTrustDlpProximityValidatorReferencedByEntriesOutputReference.property.name"></a>

```go
func Name() *string
```

- *Type:* *string

---

##### `Type`<sup>Required</sup> <a name="Type" id="@cdktn/provider-cloudflare.zeroTrustDlpProximityValidator.ZeroTrustDlpProximityValidatorReferencedByEntriesOutputReference.property.type"></a>

```go
func Type() *string
```

- *Type:* *string

---

##### `InternalValue`<sup>Optional</sup> <a name="InternalValue" id="@cdktn/provider-cloudflare.zeroTrustDlpProximityValidator.ZeroTrustDlpProximityValidatorReferencedByEntriesOutputReference.property.internalValue"></a>

```go
func InternalValue() ZeroTrustDlpProximityValidatorReferencedByEntries
```

- *Type:* <a href="#@cdktn/provider-cloudflare.zeroTrustDlpProximityValidator.ZeroTrustDlpProximityValidatorReferencedByEntries">ZeroTrustDlpProximityValidatorReferencedByEntries</a>

---


### ZeroTrustDlpProximityValidatorReferencedByOutputReference <a name="ZeroTrustDlpProximityValidatorReferencedByOutputReference" id="@cdktn/provider-cloudflare.zeroTrustDlpProximityValidator.ZeroTrustDlpProximityValidatorReferencedByOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktn/provider-cloudflare.zeroTrustDlpProximityValidator.ZeroTrustDlpProximityValidatorReferencedByOutputReference.Initializer"></a>

```go
import "github.com/cdktn-io/cdktn-provider-cloudflare-go/cloudflare/v17/zerotrustdlpproximityvalidator"

zerotrustdlpproximityvalidator.NewZeroTrustDlpProximityValidatorReferencedByOutputReference(terraformResource IInterpolatingParent, terraformAttribute *string) ZeroTrustDlpProximityValidatorReferencedByOutputReference
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-cloudflare.zeroTrustDlpProximityValidator.ZeroTrustDlpProximityValidatorReferencedByOutputReference.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>github.com/open-constructs/cdk-terrain-go/cdktn.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktn/provider-cloudflare.zeroTrustDlpProximityValidator.ZeroTrustDlpProximityValidatorReferencedByOutputReference.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>*string</code> | The attribute on the parent resource this class is referencing. |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktn/provider-cloudflare.zeroTrustDlpProximityValidator.ZeroTrustDlpProximityValidatorReferencedByOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* github.com/open-constructs/cdk-terrain-go/cdktn.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-cloudflare.zeroTrustDlpProximityValidator.ZeroTrustDlpProximityValidatorReferencedByOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* *string

The attribute on the parent resource this class is referencing.

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-cloudflare.zeroTrustDlpProximityValidator.ZeroTrustDlpProximityValidatorReferencedByOutputReference.computeFqn">ComputeFqn</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-cloudflare.zeroTrustDlpProximityValidator.ZeroTrustDlpProximityValidatorReferencedByOutputReference.getAnyMapAttribute">GetAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-cloudflare.zeroTrustDlpProximityValidator.ZeroTrustDlpProximityValidatorReferencedByOutputReference.getBooleanAttribute">GetBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-cloudflare.zeroTrustDlpProximityValidator.ZeroTrustDlpProximityValidatorReferencedByOutputReference.getBooleanMapAttribute">GetBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-cloudflare.zeroTrustDlpProximityValidator.ZeroTrustDlpProximityValidatorReferencedByOutputReference.getListAttribute">GetListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-cloudflare.zeroTrustDlpProximityValidator.ZeroTrustDlpProximityValidatorReferencedByOutputReference.getNumberAttribute">GetNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-cloudflare.zeroTrustDlpProximityValidator.ZeroTrustDlpProximityValidatorReferencedByOutputReference.getNumberListAttribute">GetNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-cloudflare.zeroTrustDlpProximityValidator.ZeroTrustDlpProximityValidatorReferencedByOutputReference.getNumberMapAttribute">GetNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-cloudflare.zeroTrustDlpProximityValidator.ZeroTrustDlpProximityValidatorReferencedByOutputReference.getStringAttribute">GetStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-cloudflare.zeroTrustDlpProximityValidator.ZeroTrustDlpProximityValidatorReferencedByOutputReference.getStringMapAttribute">GetStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-cloudflare.zeroTrustDlpProximityValidator.ZeroTrustDlpProximityValidatorReferencedByOutputReference.interpolationForAttribute">InterpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-cloudflare.zeroTrustDlpProximityValidator.ZeroTrustDlpProximityValidatorReferencedByOutputReference.resolve">Resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktn/provider-cloudflare.zeroTrustDlpProximityValidator.ZeroTrustDlpProximityValidatorReferencedByOutputReference.toString">ToString</a></code> | Return a string representation of this resolvable object. |

---

##### `ComputeFqn` <a name="ComputeFqn" id="@cdktn/provider-cloudflare.zeroTrustDlpProximityValidator.ZeroTrustDlpProximityValidatorReferencedByOutputReference.computeFqn"></a>

```go
func ComputeFqn() *string
```

##### `GetAnyMapAttribute` <a name="GetAnyMapAttribute" id="@cdktn/provider-cloudflare.zeroTrustDlpProximityValidator.ZeroTrustDlpProximityValidatorReferencedByOutputReference.getAnyMapAttribute"></a>

```go
func GetAnyMapAttribute(terraformAttribute *string) *map[string]interface{}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-cloudflare.zeroTrustDlpProximityValidator.ZeroTrustDlpProximityValidatorReferencedByOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetBooleanAttribute` <a name="GetBooleanAttribute" id="@cdktn/provider-cloudflare.zeroTrustDlpProximityValidator.ZeroTrustDlpProximityValidatorReferencedByOutputReference.getBooleanAttribute"></a>

```go
func GetBooleanAttribute(terraformAttribute *string) IResolvable
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-cloudflare.zeroTrustDlpProximityValidator.ZeroTrustDlpProximityValidatorReferencedByOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetBooleanMapAttribute` <a name="GetBooleanMapAttribute" id="@cdktn/provider-cloudflare.zeroTrustDlpProximityValidator.ZeroTrustDlpProximityValidatorReferencedByOutputReference.getBooleanMapAttribute"></a>

```go
func GetBooleanMapAttribute(terraformAttribute *string) *map[string]*bool
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-cloudflare.zeroTrustDlpProximityValidator.ZeroTrustDlpProximityValidatorReferencedByOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetListAttribute` <a name="GetListAttribute" id="@cdktn/provider-cloudflare.zeroTrustDlpProximityValidator.ZeroTrustDlpProximityValidatorReferencedByOutputReference.getListAttribute"></a>

```go
func GetListAttribute(terraformAttribute *string) *[]*string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-cloudflare.zeroTrustDlpProximityValidator.ZeroTrustDlpProximityValidatorReferencedByOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberAttribute` <a name="GetNumberAttribute" id="@cdktn/provider-cloudflare.zeroTrustDlpProximityValidator.ZeroTrustDlpProximityValidatorReferencedByOutputReference.getNumberAttribute"></a>

```go
func GetNumberAttribute(terraformAttribute *string) *f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-cloudflare.zeroTrustDlpProximityValidator.ZeroTrustDlpProximityValidatorReferencedByOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberListAttribute` <a name="GetNumberListAttribute" id="@cdktn/provider-cloudflare.zeroTrustDlpProximityValidator.ZeroTrustDlpProximityValidatorReferencedByOutputReference.getNumberListAttribute"></a>

```go
func GetNumberListAttribute(terraformAttribute *string) *[]*f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-cloudflare.zeroTrustDlpProximityValidator.ZeroTrustDlpProximityValidatorReferencedByOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberMapAttribute` <a name="GetNumberMapAttribute" id="@cdktn/provider-cloudflare.zeroTrustDlpProximityValidator.ZeroTrustDlpProximityValidatorReferencedByOutputReference.getNumberMapAttribute"></a>

```go
func GetNumberMapAttribute(terraformAttribute *string) *map[string]*f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-cloudflare.zeroTrustDlpProximityValidator.ZeroTrustDlpProximityValidatorReferencedByOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetStringAttribute` <a name="GetStringAttribute" id="@cdktn/provider-cloudflare.zeroTrustDlpProximityValidator.ZeroTrustDlpProximityValidatorReferencedByOutputReference.getStringAttribute"></a>

```go
func GetStringAttribute(terraformAttribute *string) *string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-cloudflare.zeroTrustDlpProximityValidator.ZeroTrustDlpProximityValidatorReferencedByOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetStringMapAttribute` <a name="GetStringMapAttribute" id="@cdktn/provider-cloudflare.zeroTrustDlpProximityValidator.ZeroTrustDlpProximityValidatorReferencedByOutputReference.getStringMapAttribute"></a>

```go
func GetStringMapAttribute(terraformAttribute *string) *map[string]*string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-cloudflare.zeroTrustDlpProximityValidator.ZeroTrustDlpProximityValidatorReferencedByOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `InterpolationForAttribute` <a name="InterpolationForAttribute" id="@cdktn/provider-cloudflare.zeroTrustDlpProximityValidator.ZeroTrustDlpProximityValidatorReferencedByOutputReference.interpolationForAttribute"></a>

```go
func InterpolationForAttribute(property *string) IResolvable
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktn/provider-cloudflare.zeroTrustDlpProximityValidator.ZeroTrustDlpProximityValidatorReferencedByOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* *string

---

##### `Resolve` <a name="Resolve" id="@cdktn/provider-cloudflare.zeroTrustDlpProximityValidator.ZeroTrustDlpProximityValidatorReferencedByOutputReference.resolve"></a>

```go
func Resolve(_context IResolveContext) interface{}
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktn/provider-cloudflare.zeroTrustDlpProximityValidator.ZeroTrustDlpProximityValidatorReferencedByOutputReference.resolve.parameter._context"></a>

- *Type:* github.com/open-constructs/cdk-terrain-go/cdktn.IResolveContext

---

##### `ToString` <a name="ToString" id="@cdktn/provider-cloudflare.zeroTrustDlpProximityValidator.ZeroTrustDlpProximityValidatorReferencedByOutputReference.toString"></a>

```go
func ToString() *string
```

Return a string representation of this resolvable object.

Returns a reversible string representation.


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-cloudflare.zeroTrustDlpProximityValidator.ZeroTrustDlpProximityValidatorReferencedByOutputReference.property.creationStack">CreationStack</a></code> | <code>*[]*string</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktn/provider-cloudflare.zeroTrustDlpProximityValidator.ZeroTrustDlpProximityValidatorReferencedByOutputReference.property.fqn">Fqn</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktn/provider-cloudflare.zeroTrustDlpProximityValidator.ZeroTrustDlpProximityValidatorReferencedByOutputReference.property.entries">Entries</a></code> | <code><a href="#@cdktn/provider-cloudflare.zeroTrustDlpProximityValidator.ZeroTrustDlpProximityValidatorReferencedByEntriesList">ZeroTrustDlpProximityValidatorReferencedByEntriesList</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-cloudflare.zeroTrustDlpProximityValidator.ZeroTrustDlpProximityValidatorReferencedByOutputReference.property.entryCount">EntryCount</a></code> | <code>*f64</code> | *No description.* |
| <code><a href="#@cdktn/provider-cloudflare.zeroTrustDlpProximityValidator.ZeroTrustDlpProximityValidatorReferencedByOutputReference.property.internalValue">InternalValue</a></code> | <code><a href="#@cdktn/provider-cloudflare.zeroTrustDlpProximityValidator.ZeroTrustDlpProximityValidatorReferencedBy">ZeroTrustDlpProximityValidatorReferencedBy</a></code> | *No description.* |

---

##### `CreationStack`<sup>Required</sup> <a name="CreationStack" id="@cdktn/provider-cloudflare.zeroTrustDlpProximityValidator.ZeroTrustDlpProximityValidatorReferencedByOutputReference.property.creationStack"></a>

```go
func CreationStack() *[]*string
```

- *Type:* *[]*string

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `Fqn`<sup>Required</sup> <a name="Fqn" id="@cdktn/provider-cloudflare.zeroTrustDlpProximityValidator.ZeroTrustDlpProximityValidatorReferencedByOutputReference.property.fqn"></a>

```go
func Fqn() *string
```

- *Type:* *string

---

##### `Entries`<sup>Required</sup> <a name="Entries" id="@cdktn/provider-cloudflare.zeroTrustDlpProximityValidator.ZeroTrustDlpProximityValidatorReferencedByOutputReference.property.entries"></a>

```go
func Entries() ZeroTrustDlpProximityValidatorReferencedByEntriesList
```

- *Type:* <a href="#@cdktn/provider-cloudflare.zeroTrustDlpProximityValidator.ZeroTrustDlpProximityValidatorReferencedByEntriesList">ZeroTrustDlpProximityValidatorReferencedByEntriesList</a>

---

##### `EntryCount`<sup>Required</sup> <a name="EntryCount" id="@cdktn/provider-cloudflare.zeroTrustDlpProximityValidator.ZeroTrustDlpProximityValidatorReferencedByOutputReference.property.entryCount"></a>

```go
func EntryCount() *f64
```

- *Type:* *f64

---

##### `InternalValue`<sup>Optional</sup> <a name="InternalValue" id="@cdktn/provider-cloudflare.zeroTrustDlpProximityValidator.ZeroTrustDlpProximityValidatorReferencedByOutputReference.property.internalValue"></a>

```go
func InternalValue() ZeroTrustDlpProximityValidatorReferencedBy
```

- *Type:* <a href="#@cdktn/provider-cloudflare.zeroTrustDlpProximityValidator.ZeroTrustDlpProximityValidatorReferencedBy">ZeroTrustDlpProximityValidatorReferencedBy</a>

---


### ZeroTrustDlpProximityValidatorWordsList <a name="ZeroTrustDlpProximityValidatorWordsList" id="@cdktn/provider-cloudflare.zeroTrustDlpProximityValidator.ZeroTrustDlpProximityValidatorWordsList"></a>

#### Initializers <a name="Initializers" id="@cdktn/provider-cloudflare.zeroTrustDlpProximityValidator.ZeroTrustDlpProximityValidatorWordsList.Initializer"></a>

```go
import "github.com/cdktn-io/cdktn-provider-cloudflare-go/cloudflare/v17/zerotrustdlpproximityvalidator"

zerotrustdlpproximityvalidator.NewZeroTrustDlpProximityValidatorWordsList(terraformResource IInterpolatingParent, terraformAttribute *string, wrapsSet *bool) ZeroTrustDlpProximityValidatorWordsList
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-cloudflare.zeroTrustDlpProximityValidator.ZeroTrustDlpProximityValidatorWordsList.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>github.com/open-constructs/cdk-terrain-go/cdktn.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktn/provider-cloudflare.zeroTrustDlpProximityValidator.ZeroTrustDlpProximityValidatorWordsList.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>*string</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#@cdktn/provider-cloudflare.zeroTrustDlpProximityValidator.ZeroTrustDlpProximityValidatorWordsList.Initializer.parameter.wrapsSet">wrapsSet</a></code> | <code>*bool</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktn/provider-cloudflare.zeroTrustDlpProximityValidator.ZeroTrustDlpProximityValidatorWordsList.Initializer.parameter.terraformResource"></a>

- *Type:* github.com/open-constructs/cdk-terrain-go/cdktn.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-cloudflare.zeroTrustDlpProximityValidator.ZeroTrustDlpProximityValidatorWordsList.Initializer.parameter.terraformAttribute"></a>

- *Type:* *string

The attribute on the parent resource this class is referencing.

---

##### `wrapsSet`<sup>Required</sup> <a name="wrapsSet" id="@cdktn/provider-cloudflare.zeroTrustDlpProximityValidator.ZeroTrustDlpProximityValidatorWordsList.Initializer.parameter.wrapsSet"></a>

- *Type:* *bool

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-cloudflare.zeroTrustDlpProximityValidator.ZeroTrustDlpProximityValidatorWordsList.allWithMapKey">AllWithMapKey</a></code> | Creating an iterator for this complex list. |
| <code><a href="#@cdktn/provider-cloudflare.zeroTrustDlpProximityValidator.ZeroTrustDlpProximityValidatorWordsList.computeFqn">ComputeFqn</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-cloudflare.zeroTrustDlpProximityValidator.ZeroTrustDlpProximityValidatorWordsList.resolve">Resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktn/provider-cloudflare.zeroTrustDlpProximityValidator.ZeroTrustDlpProximityValidatorWordsList.toString">ToString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktn/provider-cloudflare.zeroTrustDlpProximityValidator.ZeroTrustDlpProximityValidatorWordsList.get">Get</a></code> | *No description.* |

---

##### `AllWithMapKey` <a name="AllWithMapKey" id="@cdktn/provider-cloudflare.zeroTrustDlpProximityValidator.ZeroTrustDlpProximityValidatorWordsList.allWithMapKey"></a>

```go
func AllWithMapKey(mapKeyAttributeName *string) DynamicListTerraformIterator
```

Creating an iterator for this complex list.

The list will be converted into a map with the mapKeyAttributeName as the key.

###### `mapKeyAttributeName`<sup>Required</sup> <a name="mapKeyAttributeName" id="@cdktn/provider-cloudflare.zeroTrustDlpProximityValidator.ZeroTrustDlpProximityValidatorWordsList.allWithMapKey.parameter.mapKeyAttributeName"></a>

- *Type:* *string

---

##### `ComputeFqn` <a name="ComputeFqn" id="@cdktn/provider-cloudflare.zeroTrustDlpProximityValidator.ZeroTrustDlpProximityValidatorWordsList.computeFqn"></a>

```go
func ComputeFqn() *string
```

##### `Resolve` <a name="Resolve" id="@cdktn/provider-cloudflare.zeroTrustDlpProximityValidator.ZeroTrustDlpProximityValidatorWordsList.resolve"></a>

```go
func Resolve(_context IResolveContext) interface{}
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktn/provider-cloudflare.zeroTrustDlpProximityValidator.ZeroTrustDlpProximityValidatorWordsList.resolve.parameter._context"></a>

- *Type:* github.com/open-constructs/cdk-terrain-go/cdktn.IResolveContext

---

##### `ToString` <a name="ToString" id="@cdktn/provider-cloudflare.zeroTrustDlpProximityValidator.ZeroTrustDlpProximityValidatorWordsList.toString"></a>

```go
func ToString() *string
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `Get` <a name="Get" id="@cdktn/provider-cloudflare.zeroTrustDlpProximityValidator.ZeroTrustDlpProximityValidatorWordsList.get"></a>

```go
func Get(index *f64) ZeroTrustDlpProximityValidatorWordsOutputReference
```

###### `index`<sup>Required</sup> <a name="index" id="@cdktn/provider-cloudflare.zeroTrustDlpProximityValidator.ZeroTrustDlpProximityValidatorWordsList.get.parameter.index"></a>

- *Type:* *f64

the index of the item to return.

---


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-cloudflare.zeroTrustDlpProximityValidator.ZeroTrustDlpProximityValidatorWordsList.property.creationStack">CreationStack</a></code> | <code>*[]*string</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktn/provider-cloudflare.zeroTrustDlpProximityValidator.ZeroTrustDlpProximityValidatorWordsList.property.fqn">Fqn</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktn/provider-cloudflare.zeroTrustDlpProximityValidator.ZeroTrustDlpProximityValidatorWordsList.property.internalValue">InternalValue</a></code> | <code>interface{}</code> | *No description.* |

---

##### `CreationStack`<sup>Required</sup> <a name="CreationStack" id="@cdktn/provider-cloudflare.zeroTrustDlpProximityValidator.ZeroTrustDlpProximityValidatorWordsList.property.creationStack"></a>

```go
func CreationStack() *[]*string
```

- *Type:* *[]*string

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `Fqn`<sup>Required</sup> <a name="Fqn" id="@cdktn/provider-cloudflare.zeroTrustDlpProximityValidator.ZeroTrustDlpProximityValidatorWordsList.property.fqn"></a>

```go
func Fqn() *string
```

- *Type:* *string

---

##### `InternalValue`<sup>Optional</sup> <a name="InternalValue" id="@cdktn/provider-cloudflare.zeroTrustDlpProximityValidator.ZeroTrustDlpProximityValidatorWordsList.property.internalValue"></a>

```go
func InternalValue() interface{}
```

- *Type:* interface{}

---


### ZeroTrustDlpProximityValidatorWordsOutputReference <a name="ZeroTrustDlpProximityValidatorWordsOutputReference" id="@cdktn/provider-cloudflare.zeroTrustDlpProximityValidator.ZeroTrustDlpProximityValidatorWordsOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktn/provider-cloudflare.zeroTrustDlpProximityValidator.ZeroTrustDlpProximityValidatorWordsOutputReference.Initializer"></a>

```go
import "github.com/cdktn-io/cdktn-provider-cloudflare-go/cloudflare/v17/zerotrustdlpproximityvalidator"

zerotrustdlpproximityvalidator.NewZeroTrustDlpProximityValidatorWordsOutputReference(terraformResource IInterpolatingParent, terraformAttribute *string, complexObjectIndex *f64, complexObjectIsFromSet *bool) ZeroTrustDlpProximityValidatorWordsOutputReference
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-cloudflare.zeroTrustDlpProximityValidator.ZeroTrustDlpProximityValidatorWordsOutputReference.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>github.com/open-constructs/cdk-terrain-go/cdktn.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktn/provider-cloudflare.zeroTrustDlpProximityValidator.ZeroTrustDlpProximityValidatorWordsOutputReference.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>*string</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#@cdktn/provider-cloudflare.zeroTrustDlpProximityValidator.ZeroTrustDlpProximityValidatorWordsOutputReference.Initializer.parameter.complexObjectIndex">complexObjectIndex</a></code> | <code>*f64</code> | the index of this item in the list. |
| <code><a href="#@cdktn/provider-cloudflare.zeroTrustDlpProximityValidator.ZeroTrustDlpProximityValidatorWordsOutputReference.Initializer.parameter.complexObjectIsFromSet">complexObjectIsFromSet</a></code> | <code>*bool</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktn/provider-cloudflare.zeroTrustDlpProximityValidator.ZeroTrustDlpProximityValidatorWordsOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* github.com/open-constructs/cdk-terrain-go/cdktn.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-cloudflare.zeroTrustDlpProximityValidator.ZeroTrustDlpProximityValidatorWordsOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* *string

The attribute on the parent resource this class is referencing.

---

##### `complexObjectIndex`<sup>Required</sup> <a name="complexObjectIndex" id="@cdktn/provider-cloudflare.zeroTrustDlpProximityValidator.ZeroTrustDlpProximityValidatorWordsOutputReference.Initializer.parameter.complexObjectIndex"></a>

- *Type:* *f64

the index of this item in the list.

---

##### `complexObjectIsFromSet`<sup>Required</sup> <a name="complexObjectIsFromSet" id="@cdktn/provider-cloudflare.zeroTrustDlpProximityValidator.ZeroTrustDlpProximityValidatorWordsOutputReference.Initializer.parameter.complexObjectIsFromSet"></a>

- *Type:* *bool

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-cloudflare.zeroTrustDlpProximityValidator.ZeroTrustDlpProximityValidatorWordsOutputReference.computeFqn">ComputeFqn</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-cloudflare.zeroTrustDlpProximityValidator.ZeroTrustDlpProximityValidatorWordsOutputReference.getAnyMapAttribute">GetAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-cloudflare.zeroTrustDlpProximityValidator.ZeroTrustDlpProximityValidatorWordsOutputReference.getBooleanAttribute">GetBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-cloudflare.zeroTrustDlpProximityValidator.ZeroTrustDlpProximityValidatorWordsOutputReference.getBooleanMapAttribute">GetBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-cloudflare.zeroTrustDlpProximityValidator.ZeroTrustDlpProximityValidatorWordsOutputReference.getListAttribute">GetListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-cloudflare.zeroTrustDlpProximityValidator.ZeroTrustDlpProximityValidatorWordsOutputReference.getNumberAttribute">GetNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-cloudflare.zeroTrustDlpProximityValidator.ZeroTrustDlpProximityValidatorWordsOutputReference.getNumberListAttribute">GetNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-cloudflare.zeroTrustDlpProximityValidator.ZeroTrustDlpProximityValidatorWordsOutputReference.getNumberMapAttribute">GetNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-cloudflare.zeroTrustDlpProximityValidator.ZeroTrustDlpProximityValidatorWordsOutputReference.getStringAttribute">GetStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-cloudflare.zeroTrustDlpProximityValidator.ZeroTrustDlpProximityValidatorWordsOutputReference.getStringMapAttribute">GetStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-cloudflare.zeroTrustDlpProximityValidator.ZeroTrustDlpProximityValidatorWordsOutputReference.interpolationForAttribute">InterpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-cloudflare.zeroTrustDlpProximityValidator.ZeroTrustDlpProximityValidatorWordsOutputReference.resolve">Resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktn/provider-cloudflare.zeroTrustDlpProximityValidator.ZeroTrustDlpProximityValidatorWordsOutputReference.toString">ToString</a></code> | Return a string representation of this resolvable object. |

---

##### `ComputeFqn` <a name="ComputeFqn" id="@cdktn/provider-cloudflare.zeroTrustDlpProximityValidator.ZeroTrustDlpProximityValidatorWordsOutputReference.computeFqn"></a>

```go
func ComputeFqn() *string
```

##### `GetAnyMapAttribute` <a name="GetAnyMapAttribute" id="@cdktn/provider-cloudflare.zeroTrustDlpProximityValidator.ZeroTrustDlpProximityValidatorWordsOutputReference.getAnyMapAttribute"></a>

```go
func GetAnyMapAttribute(terraformAttribute *string) *map[string]interface{}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-cloudflare.zeroTrustDlpProximityValidator.ZeroTrustDlpProximityValidatorWordsOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetBooleanAttribute` <a name="GetBooleanAttribute" id="@cdktn/provider-cloudflare.zeroTrustDlpProximityValidator.ZeroTrustDlpProximityValidatorWordsOutputReference.getBooleanAttribute"></a>

```go
func GetBooleanAttribute(terraformAttribute *string) IResolvable
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-cloudflare.zeroTrustDlpProximityValidator.ZeroTrustDlpProximityValidatorWordsOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetBooleanMapAttribute` <a name="GetBooleanMapAttribute" id="@cdktn/provider-cloudflare.zeroTrustDlpProximityValidator.ZeroTrustDlpProximityValidatorWordsOutputReference.getBooleanMapAttribute"></a>

```go
func GetBooleanMapAttribute(terraformAttribute *string) *map[string]*bool
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-cloudflare.zeroTrustDlpProximityValidator.ZeroTrustDlpProximityValidatorWordsOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetListAttribute` <a name="GetListAttribute" id="@cdktn/provider-cloudflare.zeroTrustDlpProximityValidator.ZeroTrustDlpProximityValidatorWordsOutputReference.getListAttribute"></a>

```go
func GetListAttribute(terraformAttribute *string) *[]*string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-cloudflare.zeroTrustDlpProximityValidator.ZeroTrustDlpProximityValidatorWordsOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberAttribute` <a name="GetNumberAttribute" id="@cdktn/provider-cloudflare.zeroTrustDlpProximityValidator.ZeroTrustDlpProximityValidatorWordsOutputReference.getNumberAttribute"></a>

```go
func GetNumberAttribute(terraformAttribute *string) *f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-cloudflare.zeroTrustDlpProximityValidator.ZeroTrustDlpProximityValidatorWordsOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberListAttribute` <a name="GetNumberListAttribute" id="@cdktn/provider-cloudflare.zeroTrustDlpProximityValidator.ZeroTrustDlpProximityValidatorWordsOutputReference.getNumberListAttribute"></a>

```go
func GetNumberListAttribute(terraformAttribute *string) *[]*f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-cloudflare.zeroTrustDlpProximityValidator.ZeroTrustDlpProximityValidatorWordsOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberMapAttribute` <a name="GetNumberMapAttribute" id="@cdktn/provider-cloudflare.zeroTrustDlpProximityValidator.ZeroTrustDlpProximityValidatorWordsOutputReference.getNumberMapAttribute"></a>

```go
func GetNumberMapAttribute(terraformAttribute *string) *map[string]*f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-cloudflare.zeroTrustDlpProximityValidator.ZeroTrustDlpProximityValidatorWordsOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetStringAttribute` <a name="GetStringAttribute" id="@cdktn/provider-cloudflare.zeroTrustDlpProximityValidator.ZeroTrustDlpProximityValidatorWordsOutputReference.getStringAttribute"></a>

```go
func GetStringAttribute(terraformAttribute *string) *string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-cloudflare.zeroTrustDlpProximityValidator.ZeroTrustDlpProximityValidatorWordsOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetStringMapAttribute` <a name="GetStringMapAttribute" id="@cdktn/provider-cloudflare.zeroTrustDlpProximityValidator.ZeroTrustDlpProximityValidatorWordsOutputReference.getStringMapAttribute"></a>

```go
func GetStringMapAttribute(terraformAttribute *string) *map[string]*string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-cloudflare.zeroTrustDlpProximityValidator.ZeroTrustDlpProximityValidatorWordsOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `InterpolationForAttribute` <a name="InterpolationForAttribute" id="@cdktn/provider-cloudflare.zeroTrustDlpProximityValidator.ZeroTrustDlpProximityValidatorWordsOutputReference.interpolationForAttribute"></a>

```go
func InterpolationForAttribute(property *string) IResolvable
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktn/provider-cloudflare.zeroTrustDlpProximityValidator.ZeroTrustDlpProximityValidatorWordsOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* *string

---

##### `Resolve` <a name="Resolve" id="@cdktn/provider-cloudflare.zeroTrustDlpProximityValidator.ZeroTrustDlpProximityValidatorWordsOutputReference.resolve"></a>

```go
func Resolve(_context IResolveContext) interface{}
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktn/provider-cloudflare.zeroTrustDlpProximityValidator.ZeroTrustDlpProximityValidatorWordsOutputReference.resolve.parameter._context"></a>

- *Type:* github.com/open-constructs/cdk-terrain-go/cdktn.IResolveContext

---

##### `ToString` <a name="ToString" id="@cdktn/provider-cloudflare.zeroTrustDlpProximityValidator.ZeroTrustDlpProximityValidatorWordsOutputReference.toString"></a>

```go
func ToString() *string
```

Return a string representation of this resolvable object.

Returns a reversible string representation.


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-cloudflare.zeroTrustDlpProximityValidator.ZeroTrustDlpProximityValidatorWordsOutputReference.property.creationStack">CreationStack</a></code> | <code>*[]*string</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktn/provider-cloudflare.zeroTrustDlpProximityValidator.ZeroTrustDlpProximityValidatorWordsOutputReference.property.fqn">Fqn</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktn/provider-cloudflare.zeroTrustDlpProximityValidator.ZeroTrustDlpProximityValidatorWordsOutputReference.property.weightInput">WeightInput</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktn/provider-cloudflare.zeroTrustDlpProximityValidator.ZeroTrustDlpProximityValidatorWordsOutputReference.property.wordInput">WordInput</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktn/provider-cloudflare.zeroTrustDlpProximityValidator.ZeroTrustDlpProximityValidatorWordsOutputReference.property.weight">Weight</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktn/provider-cloudflare.zeroTrustDlpProximityValidator.ZeroTrustDlpProximityValidatorWordsOutputReference.property.word">Word</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktn/provider-cloudflare.zeroTrustDlpProximityValidator.ZeroTrustDlpProximityValidatorWordsOutputReference.property.internalValue">InternalValue</a></code> | <code>interface{}</code> | *No description.* |

---

##### `CreationStack`<sup>Required</sup> <a name="CreationStack" id="@cdktn/provider-cloudflare.zeroTrustDlpProximityValidator.ZeroTrustDlpProximityValidatorWordsOutputReference.property.creationStack"></a>

```go
func CreationStack() *[]*string
```

- *Type:* *[]*string

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `Fqn`<sup>Required</sup> <a name="Fqn" id="@cdktn/provider-cloudflare.zeroTrustDlpProximityValidator.ZeroTrustDlpProximityValidatorWordsOutputReference.property.fqn"></a>

```go
func Fqn() *string
```

- *Type:* *string

---

##### `WeightInput`<sup>Optional</sup> <a name="WeightInput" id="@cdktn/provider-cloudflare.zeroTrustDlpProximityValidator.ZeroTrustDlpProximityValidatorWordsOutputReference.property.weightInput"></a>

```go
func WeightInput() *string
```

- *Type:* *string

---

##### `WordInput`<sup>Optional</sup> <a name="WordInput" id="@cdktn/provider-cloudflare.zeroTrustDlpProximityValidator.ZeroTrustDlpProximityValidatorWordsOutputReference.property.wordInput"></a>

```go
func WordInput() *string
```

- *Type:* *string

---

##### `Weight`<sup>Required</sup> <a name="Weight" id="@cdktn/provider-cloudflare.zeroTrustDlpProximityValidator.ZeroTrustDlpProximityValidatorWordsOutputReference.property.weight"></a>

```go
func Weight() *string
```

- *Type:* *string

---

##### `Word`<sup>Required</sup> <a name="Word" id="@cdktn/provider-cloudflare.zeroTrustDlpProximityValidator.ZeroTrustDlpProximityValidatorWordsOutputReference.property.word"></a>

```go
func Word() *string
```

- *Type:* *string

---

##### `InternalValue`<sup>Optional</sup> <a name="InternalValue" id="@cdktn/provider-cloudflare.zeroTrustDlpProximityValidator.ZeroTrustDlpProximityValidatorWordsOutputReference.property.internalValue"></a>

```go
func InternalValue() interface{}
```

- *Type:* interface{}

---



