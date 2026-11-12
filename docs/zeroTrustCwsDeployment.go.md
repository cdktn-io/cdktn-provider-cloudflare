# `zeroTrustCwsDeployment` Submodule <a name="`zeroTrustCwsDeployment` Submodule" id="@cdktn/provider-cloudflare.zeroTrustCwsDeployment"></a>

## Constructs <a name="Constructs" id="Constructs"></a>

### ZeroTrustCwsDeployment <a name="ZeroTrustCwsDeployment" id="@cdktn/provider-cloudflare.zeroTrustCwsDeployment.ZeroTrustCwsDeployment"></a>

Represents a {@link https://registry.terraform.io/providers/cloudflare/cloudflare/5.29.0/docs/resources/zero_trust_cws_deployment cloudflare_zero_trust_cws_deployment}.

#### Initializers <a name="Initializers" id="@cdktn/provider-cloudflare.zeroTrustCwsDeployment.ZeroTrustCwsDeployment.Initializer"></a>

```go
import "github.com/cdktn-io/cdktn-provider-cloudflare-go/cloudflare/v17/zerotrustcwsdeployment"

zerotrustcwsdeployment.NewZeroTrustCwsDeployment(scope Construct, id *string, config ZeroTrustCwsDeploymentConfig) ZeroTrustCwsDeployment
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-cloudflare.zeroTrustCwsDeployment.ZeroTrustCwsDeployment.Initializer.parameter.scope">scope</a></code> | <code>github.com/aws/constructs-go/constructs/v10.Construct</code> | The scope in which to define this construct. |
| <code><a href="#@cdktn/provider-cloudflare.zeroTrustCwsDeployment.ZeroTrustCwsDeployment.Initializer.parameter.id">id</a></code> | <code>*string</code> | The scoped construct ID. |
| <code><a href="#@cdktn/provider-cloudflare.zeroTrustCwsDeployment.ZeroTrustCwsDeployment.Initializer.parameter.config">config</a></code> | <code><a href="#@cdktn/provider-cloudflare.zeroTrustCwsDeployment.ZeroTrustCwsDeploymentConfig">ZeroTrustCwsDeploymentConfig</a></code> | *No description.* |

---

##### `scope`<sup>Required</sup> <a name="scope" id="@cdktn/provider-cloudflare.zeroTrustCwsDeployment.ZeroTrustCwsDeployment.Initializer.parameter.scope"></a>

- *Type:* github.com/aws/constructs-go/constructs/v10.Construct

The scope in which to define this construct.

---

##### `id`<sup>Required</sup> <a name="id" id="@cdktn/provider-cloudflare.zeroTrustCwsDeployment.ZeroTrustCwsDeployment.Initializer.parameter.id"></a>

- *Type:* *string

The scoped construct ID.

Must be unique amongst siblings in the same scope

---

##### `config`<sup>Required</sup> <a name="config" id="@cdktn/provider-cloudflare.zeroTrustCwsDeployment.ZeroTrustCwsDeployment.Initializer.parameter.config"></a>

- *Type:* <a href="#@cdktn/provider-cloudflare.zeroTrustCwsDeployment.ZeroTrustCwsDeploymentConfig">ZeroTrustCwsDeploymentConfig</a>

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-cloudflare.zeroTrustCwsDeployment.ZeroTrustCwsDeployment.toString">ToString</a></code> | Returns a string representation of this construct. |
| <code><a href="#@cdktn/provider-cloudflare.zeroTrustCwsDeployment.ZeroTrustCwsDeployment.with">With</a></code> | Applies one or more mixins to this construct. |
| <code><a href="#@cdktn/provider-cloudflare.zeroTrustCwsDeployment.ZeroTrustCwsDeployment.addOverride">AddOverride</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-cloudflare.zeroTrustCwsDeployment.ZeroTrustCwsDeployment.overrideLogicalId">OverrideLogicalId</a></code> | Overrides the auto-generated logical ID with a specific ID. |
| <code><a href="#@cdktn/provider-cloudflare.zeroTrustCwsDeployment.ZeroTrustCwsDeployment.resetOverrideLogicalId">ResetOverrideLogicalId</a></code> | Resets a previously passed logical Id to use the auto-generated logical id again. |
| <code><a href="#@cdktn/provider-cloudflare.zeroTrustCwsDeployment.ZeroTrustCwsDeployment.toHclTerraform">ToHclTerraform</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-cloudflare.zeroTrustCwsDeployment.ZeroTrustCwsDeployment.toMetadata">ToMetadata</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-cloudflare.zeroTrustCwsDeployment.ZeroTrustCwsDeployment.toTerraform">ToTerraform</a></code> | Adds this resource to the terraform JSON output. |
| <code><a href="#@cdktn/provider-cloudflare.zeroTrustCwsDeployment.ZeroTrustCwsDeployment.addMoveTarget">AddMoveTarget</a></code> | Adds a user defined moveTarget string to this resource to be later used in .moveTo(moveTarget) to resolve the location of the move. |
| <code><a href="#@cdktn/provider-cloudflare.zeroTrustCwsDeployment.ZeroTrustCwsDeployment.getAnyMapAttribute">GetAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-cloudflare.zeroTrustCwsDeployment.ZeroTrustCwsDeployment.getBooleanAttribute">GetBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-cloudflare.zeroTrustCwsDeployment.ZeroTrustCwsDeployment.getBooleanMapAttribute">GetBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-cloudflare.zeroTrustCwsDeployment.ZeroTrustCwsDeployment.getListAttribute">GetListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-cloudflare.zeroTrustCwsDeployment.ZeroTrustCwsDeployment.getNumberAttribute">GetNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-cloudflare.zeroTrustCwsDeployment.ZeroTrustCwsDeployment.getNumberListAttribute">GetNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-cloudflare.zeroTrustCwsDeployment.ZeroTrustCwsDeployment.getNumberMapAttribute">GetNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-cloudflare.zeroTrustCwsDeployment.ZeroTrustCwsDeployment.getStringAttribute">GetStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-cloudflare.zeroTrustCwsDeployment.ZeroTrustCwsDeployment.getStringMapAttribute">GetStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-cloudflare.zeroTrustCwsDeployment.ZeroTrustCwsDeployment.hasResourceMove">HasResourceMove</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-cloudflare.zeroTrustCwsDeployment.ZeroTrustCwsDeployment.importFrom">ImportFrom</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-cloudflare.zeroTrustCwsDeployment.ZeroTrustCwsDeployment.interpolationForAttribute">InterpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-cloudflare.zeroTrustCwsDeployment.ZeroTrustCwsDeployment.moveFromId">MoveFromId</a></code> | Move the resource corresponding to "id" to this resource. |
| <code><a href="#@cdktn/provider-cloudflare.zeroTrustCwsDeployment.ZeroTrustCwsDeployment.moveTo">MoveTo</a></code> | Moves this resource to the target resource given by moveTarget. |
| <code><a href="#@cdktn/provider-cloudflare.zeroTrustCwsDeployment.ZeroTrustCwsDeployment.moveToId">MoveToId</a></code> | Moves this resource to the resource corresponding to "id". |
| <code><a href="#@cdktn/provider-cloudflare.zeroTrustCwsDeployment.ZeroTrustCwsDeployment.resetDescription">ResetDescription</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-cloudflare.zeroTrustCwsDeployment.ZeroTrustCwsDeployment.resetDomainAclId">ResetDomainAclId</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-cloudflare.zeroTrustCwsDeployment.ZeroTrustCwsDeployment.resetOnErrorAction">ResetOnErrorAction</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-cloudflare.zeroTrustCwsDeployment.ZeroTrustCwsDeployment.resetRegoRaiseError">ResetRegoRaiseError</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-cloudflare.zeroTrustCwsDeployment.ZeroTrustCwsDeployment.resetTags">ResetTags</a></code> | *No description.* |

---

##### `ToString` <a name="ToString" id="@cdktn/provider-cloudflare.zeroTrustCwsDeployment.ZeroTrustCwsDeployment.toString"></a>

```go
func ToString() *string
```

Returns a string representation of this construct.

##### `With` <a name="With" id="@cdktn/provider-cloudflare.zeroTrustCwsDeployment.ZeroTrustCwsDeployment.with"></a>

```go
func With(mixins ...IMixin) IConstruct
```

Applies one or more mixins to this construct.

Mixins are applied in order. The list of constructs is captured at the
start of the call, so constructs added by a mixin will not be visited.
Use multiple `with()` calls if subsequent mixins should apply to added
constructs.

###### `mixins`<sup>Required</sup> <a name="mixins" id="@cdktn/provider-cloudflare.zeroTrustCwsDeployment.ZeroTrustCwsDeployment.with.parameter.mixins"></a>

- *Type:* ...github.com/aws/constructs-go/constructs/v10.IMixin

The mixins to apply.

---

##### `AddOverride` <a name="AddOverride" id="@cdktn/provider-cloudflare.zeroTrustCwsDeployment.ZeroTrustCwsDeployment.addOverride"></a>

```go
func AddOverride(path *string, value interface{})
```

###### `path`<sup>Required</sup> <a name="path" id="@cdktn/provider-cloudflare.zeroTrustCwsDeployment.ZeroTrustCwsDeployment.addOverride.parameter.path"></a>

- *Type:* *string

---

###### `value`<sup>Required</sup> <a name="value" id="@cdktn/provider-cloudflare.zeroTrustCwsDeployment.ZeroTrustCwsDeployment.addOverride.parameter.value"></a>

- *Type:* interface{}

---

##### `OverrideLogicalId` <a name="OverrideLogicalId" id="@cdktn/provider-cloudflare.zeroTrustCwsDeployment.ZeroTrustCwsDeployment.overrideLogicalId"></a>

```go
func OverrideLogicalId(newLogicalId *string)
```

Overrides the auto-generated logical ID with a specific ID.

###### `newLogicalId`<sup>Required</sup> <a name="newLogicalId" id="@cdktn/provider-cloudflare.zeroTrustCwsDeployment.ZeroTrustCwsDeployment.overrideLogicalId.parameter.newLogicalId"></a>

- *Type:* *string

The new logical ID to use for this stack element.

---

##### `ResetOverrideLogicalId` <a name="ResetOverrideLogicalId" id="@cdktn/provider-cloudflare.zeroTrustCwsDeployment.ZeroTrustCwsDeployment.resetOverrideLogicalId"></a>

```go
func ResetOverrideLogicalId()
```

Resets a previously passed logical Id to use the auto-generated logical id again.

##### `ToHclTerraform` <a name="ToHclTerraform" id="@cdktn/provider-cloudflare.zeroTrustCwsDeployment.ZeroTrustCwsDeployment.toHclTerraform"></a>

```go
func ToHclTerraform() interface{}
```

##### `ToMetadata` <a name="ToMetadata" id="@cdktn/provider-cloudflare.zeroTrustCwsDeployment.ZeroTrustCwsDeployment.toMetadata"></a>

```go
func ToMetadata() interface{}
```

##### `ToTerraform` <a name="ToTerraform" id="@cdktn/provider-cloudflare.zeroTrustCwsDeployment.ZeroTrustCwsDeployment.toTerraform"></a>

```go
func ToTerraform() interface{}
```

Adds this resource to the terraform JSON output.

##### `AddMoveTarget` <a name="AddMoveTarget" id="@cdktn/provider-cloudflare.zeroTrustCwsDeployment.ZeroTrustCwsDeployment.addMoveTarget"></a>

```go
func AddMoveTarget(moveTarget *string)
```

Adds a user defined moveTarget string to this resource to be later used in .moveTo(moveTarget) to resolve the location of the move.

###### `moveTarget`<sup>Required</sup> <a name="moveTarget" id="@cdktn/provider-cloudflare.zeroTrustCwsDeployment.ZeroTrustCwsDeployment.addMoveTarget.parameter.moveTarget"></a>

- *Type:* *string

The string move target that will correspond to this resource.

---

##### `GetAnyMapAttribute` <a name="GetAnyMapAttribute" id="@cdktn/provider-cloudflare.zeroTrustCwsDeployment.ZeroTrustCwsDeployment.getAnyMapAttribute"></a>

```go
func GetAnyMapAttribute(terraformAttribute *string) *map[string]interface{}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-cloudflare.zeroTrustCwsDeployment.ZeroTrustCwsDeployment.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetBooleanAttribute` <a name="GetBooleanAttribute" id="@cdktn/provider-cloudflare.zeroTrustCwsDeployment.ZeroTrustCwsDeployment.getBooleanAttribute"></a>

```go
func GetBooleanAttribute(terraformAttribute *string) IResolvable
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-cloudflare.zeroTrustCwsDeployment.ZeroTrustCwsDeployment.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetBooleanMapAttribute` <a name="GetBooleanMapAttribute" id="@cdktn/provider-cloudflare.zeroTrustCwsDeployment.ZeroTrustCwsDeployment.getBooleanMapAttribute"></a>

```go
func GetBooleanMapAttribute(terraformAttribute *string) *map[string]*bool
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-cloudflare.zeroTrustCwsDeployment.ZeroTrustCwsDeployment.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetListAttribute` <a name="GetListAttribute" id="@cdktn/provider-cloudflare.zeroTrustCwsDeployment.ZeroTrustCwsDeployment.getListAttribute"></a>

```go
func GetListAttribute(terraformAttribute *string) *[]*string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-cloudflare.zeroTrustCwsDeployment.ZeroTrustCwsDeployment.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberAttribute` <a name="GetNumberAttribute" id="@cdktn/provider-cloudflare.zeroTrustCwsDeployment.ZeroTrustCwsDeployment.getNumberAttribute"></a>

```go
func GetNumberAttribute(terraformAttribute *string) *f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-cloudflare.zeroTrustCwsDeployment.ZeroTrustCwsDeployment.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberListAttribute` <a name="GetNumberListAttribute" id="@cdktn/provider-cloudflare.zeroTrustCwsDeployment.ZeroTrustCwsDeployment.getNumberListAttribute"></a>

```go
func GetNumberListAttribute(terraformAttribute *string) *[]*f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-cloudflare.zeroTrustCwsDeployment.ZeroTrustCwsDeployment.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberMapAttribute` <a name="GetNumberMapAttribute" id="@cdktn/provider-cloudflare.zeroTrustCwsDeployment.ZeroTrustCwsDeployment.getNumberMapAttribute"></a>

```go
func GetNumberMapAttribute(terraformAttribute *string) *map[string]*f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-cloudflare.zeroTrustCwsDeployment.ZeroTrustCwsDeployment.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetStringAttribute` <a name="GetStringAttribute" id="@cdktn/provider-cloudflare.zeroTrustCwsDeployment.ZeroTrustCwsDeployment.getStringAttribute"></a>

```go
func GetStringAttribute(terraformAttribute *string) *string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-cloudflare.zeroTrustCwsDeployment.ZeroTrustCwsDeployment.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetStringMapAttribute` <a name="GetStringMapAttribute" id="@cdktn/provider-cloudflare.zeroTrustCwsDeployment.ZeroTrustCwsDeployment.getStringMapAttribute"></a>

```go
func GetStringMapAttribute(terraformAttribute *string) *map[string]*string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-cloudflare.zeroTrustCwsDeployment.ZeroTrustCwsDeployment.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `HasResourceMove` <a name="HasResourceMove" id="@cdktn/provider-cloudflare.zeroTrustCwsDeployment.ZeroTrustCwsDeployment.hasResourceMove"></a>

```go
func HasResourceMove() interface{}
```

##### `ImportFrom` <a name="ImportFrom" id="@cdktn/provider-cloudflare.zeroTrustCwsDeployment.ZeroTrustCwsDeployment.importFrom"></a>

```go
func ImportFrom(id *string, provider TerraformProvider)
```

###### `id`<sup>Required</sup> <a name="id" id="@cdktn/provider-cloudflare.zeroTrustCwsDeployment.ZeroTrustCwsDeployment.importFrom.parameter.id"></a>

- *Type:* *string

---

###### `provider`<sup>Optional</sup> <a name="provider" id="@cdktn/provider-cloudflare.zeroTrustCwsDeployment.ZeroTrustCwsDeployment.importFrom.parameter.provider"></a>

- *Type:* github.com/open-constructs/cdk-terrain-go/cdktn.TerraformProvider

---

##### `InterpolationForAttribute` <a name="InterpolationForAttribute" id="@cdktn/provider-cloudflare.zeroTrustCwsDeployment.ZeroTrustCwsDeployment.interpolationForAttribute"></a>

```go
func InterpolationForAttribute(terraformAttribute *string) IResolvable
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-cloudflare.zeroTrustCwsDeployment.ZeroTrustCwsDeployment.interpolationForAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `MoveFromId` <a name="MoveFromId" id="@cdktn/provider-cloudflare.zeroTrustCwsDeployment.ZeroTrustCwsDeployment.moveFromId"></a>

```go
func MoveFromId(id *string)
```

Move the resource corresponding to "id" to this resource.

Note that the resource being moved from must be marked as moved using its instance function.

###### `id`<sup>Required</sup> <a name="id" id="@cdktn/provider-cloudflare.zeroTrustCwsDeployment.ZeroTrustCwsDeployment.moveFromId.parameter.id"></a>

- *Type:* *string

Full id of resource being moved from, e.g. "aws_s3_bucket.example".

---

##### `MoveTo` <a name="MoveTo" id="@cdktn/provider-cloudflare.zeroTrustCwsDeployment.ZeroTrustCwsDeployment.moveTo"></a>

```go
func MoveTo(moveTarget *string, index interface{})
```

Moves this resource to the target resource given by moveTarget.

###### `moveTarget`<sup>Required</sup> <a name="moveTarget" id="@cdktn/provider-cloudflare.zeroTrustCwsDeployment.ZeroTrustCwsDeployment.moveTo.parameter.moveTarget"></a>

- *Type:* *string

The previously set user defined string set by .addMoveTarget() corresponding to the resource to move to.

---

###### `index`<sup>Optional</sup> <a name="index" id="@cdktn/provider-cloudflare.zeroTrustCwsDeployment.ZeroTrustCwsDeployment.moveTo.parameter.index"></a>

- *Type:* interface{}

Optional The index corresponding to the key the resource is to appear in the foreach of a resource to move to.

---

##### `MoveToId` <a name="MoveToId" id="@cdktn/provider-cloudflare.zeroTrustCwsDeployment.ZeroTrustCwsDeployment.moveToId"></a>

```go
func MoveToId(id *string)
```

Moves this resource to the resource corresponding to "id".

###### `id`<sup>Required</sup> <a name="id" id="@cdktn/provider-cloudflare.zeroTrustCwsDeployment.ZeroTrustCwsDeployment.moveToId.parameter.id"></a>

- *Type:* *string

Full id of resource to move to, e.g. "aws_s3_bucket.example".

---

##### `ResetDescription` <a name="ResetDescription" id="@cdktn/provider-cloudflare.zeroTrustCwsDeployment.ZeroTrustCwsDeployment.resetDescription"></a>

```go
func ResetDescription()
```

##### `ResetDomainAclId` <a name="ResetDomainAclId" id="@cdktn/provider-cloudflare.zeroTrustCwsDeployment.ZeroTrustCwsDeployment.resetDomainAclId"></a>

```go
func ResetDomainAclId()
```

##### `ResetOnErrorAction` <a name="ResetOnErrorAction" id="@cdktn/provider-cloudflare.zeroTrustCwsDeployment.ZeroTrustCwsDeployment.resetOnErrorAction"></a>

```go
func ResetOnErrorAction()
```

##### `ResetRegoRaiseError` <a name="ResetRegoRaiseError" id="@cdktn/provider-cloudflare.zeroTrustCwsDeployment.ZeroTrustCwsDeployment.resetRegoRaiseError"></a>

```go
func ResetRegoRaiseError()
```

##### `ResetTags` <a name="ResetTags" id="@cdktn/provider-cloudflare.zeroTrustCwsDeployment.ZeroTrustCwsDeployment.resetTags"></a>

```go
func ResetTags()
```

#### Static Functions <a name="Static Functions" id="Static Functions"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-cloudflare.zeroTrustCwsDeployment.ZeroTrustCwsDeployment.isConstruct">IsConstruct</a></code> | Checks if `x` is a construct. |
| <code><a href="#@cdktn/provider-cloudflare.zeroTrustCwsDeployment.ZeroTrustCwsDeployment.isTerraformElement">IsTerraformElement</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-cloudflare.zeroTrustCwsDeployment.ZeroTrustCwsDeployment.isTerraformResource">IsTerraformResource</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-cloudflare.zeroTrustCwsDeployment.ZeroTrustCwsDeployment.generateConfigForImport">GenerateConfigForImport</a></code> | Generates CDKTN code for importing a ZeroTrustCwsDeployment resource upon running "cdktn plan <stack-name>". |

---

##### `IsConstruct` <a name="IsConstruct" id="@cdktn/provider-cloudflare.zeroTrustCwsDeployment.ZeroTrustCwsDeployment.isConstruct"></a>

```go
import "github.com/cdktn-io/cdktn-provider-cloudflare-go/cloudflare/v17/zerotrustcwsdeployment"

zerotrustcwsdeployment.ZeroTrustCwsDeployment_IsConstruct(x interface{}) *bool
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

###### `x`<sup>Required</sup> <a name="x" id="@cdktn/provider-cloudflare.zeroTrustCwsDeployment.ZeroTrustCwsDeployment.isConstruct.parameter.x"></a>

- *Type:* interface{}

Any object.

---

##### `IsTerraformElement` <a name="IsTerraformElement" id="@cdktn/provider-cloudflare.zeroTrustCwsDeployment.ZeroTrustCwsDeployment.isTerraformElement"></a>

```go
import "github.com/cdktn-io/cdktn-provider-cloudflare-go/cloudflare/v17/zerotrustcwsdeployment"

zerotrustcwsdeployment.ZeroTrustCwsDeployment_IsTerraformElement(x interface{}) *bool
```

###### `x`<sup>Required</sup> <a name="x" id="@cdktn/provider-cloudflare.zeroTrustCwsDeployment.ZeroTrustCwsDeployment.isTerraformElement.parameter.x"></a>

- *Type:* interface{}

---

##### `IsTerraformResource` <a name="IsTerraformResource" id="@cdktn/provider-cloudflare.zeroTrustCwsDeployment.ZeroTrustCwsDeployment.isTerraformResource"></a>

```go
import "github.com/cdktn-io/cdktn-provider-cloudflare-go/cloudflare/v17/zerotrustcwsdeployment"

zerotrustcwsdeployment.ZeroTrustCwsDeployment_IsTerraformResource(x interface{}) *bool
```

###### `x`<sup>Required</sup> <a name="x" id="@cdktn/provider-cloudflare.zeroTrustCwsDeployment.ZeroTrustCwsDeployment.isTerraformResource.parameter.x"></a>

- *Type:* interface{}

---

##### `GenerateConfigForImport` <a name="GenerateConfigForImport" id="@cdktn/provider-cloudflare.zeroTrustCwsDeployment.ZeroTrustCwsDeployment.generateConfigForImport"></a>

```go
import "github.com/cdktn-io/cdktn-provider-cloudflare-go/cloudflare/v17/zerotrustcwsdeployment"

zerotrustcwsdeployment.ZeroTrustCwsDeployment_GenerateConfigForImport(scope Construct, importToId *string, importFromId *string, provider TerraformProvider) ImportableResource
```

Generates CDKTN code for importing a ZeroTrustCwsDeployment resource upon running "cdktn plan <stack-name>".

###### `scope`<sup>Required</sup> <a name="scope" id="@cdktn/provider-cloudflare.zeroTrustCwsDeployment.ZeroTrustCwsDeployment.generateConfigForImport.parameter.scope"></a>

- *Type:* github.com/aws/constructs-go/constructs/v10.Construct

The scope in which to define this construct.

---

###### `importToId`<sup>Required</sup> <a name="importToId" id="@cdktn/provider-cloudflare.zeroTrustCwsDeployment.ZeroTrustCwsDeployment.generateConfigForImport.parameter.importToId"></a>

- *Type:* *string

The construct id used in the generated config for the ZeroTrustCwsDeployment to import.

---

###### `importFromId`<sup>Required</sup> <a name="importFromId" id="@cdktn/provider-cloudflare.zeroTrustCwsDeployment.ZeroTrustCwsDeployment.generateConfigForImport.parameter.importFromId"></a>

- *Type:* *string

The id of the existing ZeroTrustCwsDeployment that should be imported.

Refer to the {@link https://registry.terraform.io/providers/cloudflare/cloudflare/5.29.0/docs/resources/zero_trust_cws_deployment#import import section} in the documentation of this resource for the id to use

---

###### `provider`<sup>Optional</sup> <a name="provider" id="@cdktn/provider-cloudflare.zeroTrustCwsDeployment.ZeroTrustCwsDeployment.generateConfigForImport.parameter.provider"></a>

- *Type:* github.com/open-constructs/cdk-terrain-go/cdktn.TerraformProvider

? Optional instance of the provider where the ZeroTrustCwsDeployment to import is found.

---

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-cloudflare.zeroTrustCwsDeployment.ZeroTrustCwsDeployment.property.node">Node</a></code> | <code>github.com/aws/constructs-go/constructs/v10.Node</code> | The tree node. |
| <code><a href="#@cdktn/provider-cloudflare.zeroTrustCwsDeployment.ZeroTrustCwsDeployment.property.cdktfStack">CdktfStack</a></code> | <code>github.com/open-constructs/cdk-terrain-go/cdktn.TerraformStack</code> | *No description.* |
| <code><a href="#@cdktn/provider-cloudflare.zeroTrustCwsDeployment.ZeroTrustCwsDeployment.property.fqn">Fqn</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktn/provider-cloudflare.zeroTrustCwsDeployment.ZeroTrustCwsDeployment.property.friendlyUniqueId">FriendlyUniqueId</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktn/provider-cloudflare.zeroTrustCwsDeployment.ZeroTrustCwsDeployment.property.terraformMetaArguments">TerraformMetaArguments</a></code> | <code>*map[string]interface{}</code> | *No description.* |
| <code><a href="#@cdktn/provider-cloudflare.zeroTrustCwsDeployment.ZeroTrustCwsDeployment.property.terraformResourceType">TerraformResourceType</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktn/provider-cloudflare.zeroTrustCwsDeployment.ZeroTrustCwsDeployment.property.terraformGeneratorMetadata">TerraformGeneratorMetadata</a></code> | <code>github.com/open-constructs/cdk-terrain-go/cdktn.TerraformProviderGeneratorMetadata</code> | *No description.* |
| <code><a href="#@cdktn/provider-cloudflare.zeroTrustCwsDeployment.ZeroTrustCwsDeployment.property.connection">Connection</a></code> | <code>interface{}</code> | *No description.* |
| <code><a href="#@cdktn/provider-cloudflare.zeroTrustCwsDeployment.ZeroTrustCwsDeployment.property.count">Count</a></code> | <code>interface{}</code> | *No description.* |
| <code><a href="#@cdktn/provider-cloudflare.zeroTrustCwsDeployment.ZeroTrustCwsDeployment.property.dependsOn">DependsOn</a></code> | <code>*[]*string</code> | *No description.* |
| <code><a href="#@cdktn/provider-cloudflare.zeroTrustCwsDeployment.ZeroTrustCwsDeployment.property.forEach">ForEach</a></code> | <code>github.com/open-constructs/cdk-terrain-go/cdktn.ITerraformIterator</code> | *No description.* |
| <code><a href="#@cdktn/provider-cloudflare.zeroTrustCwsDeployment.ZeroTrustCwsDeployment.property.lifecycle">Lifecycle</a></code> | <code>github.com/open-constructs/cdk-terrain-go/cdktn.TerraformResourceLifecycle</code> | *No description.* |
| <code><a href="#@cdktn/provider-cloudflare.zeroTrustCwsDeployment.ZeroTrustCwsDeployment.property.provider">Provider</a></code> | <code>github.com/open-constructs/cdk-terrain-go/cdktn.TerraformProvider</code> | *No description.* |
| <code><a href="#@cdktn/provider-cloudflare.zeroTrustCwsDeployment.ZeroTrustCwsDeployment.property.provisioners">Provisioners</a></code> | <code>*[]interface{}</code> | *No description.* |
| <code><a href="#@cdktn/provider-cloudflare.zeroTrustCwsDeployment.ZeroTrustCwsDeployment.property.createdAt">CreatedAt</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktn/provider-cloudflare.zeroTrustCwsDeployment.ZeroTrustCwsDeployment.property.id">Id</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktn/provider-cloudflare.zeroTrustCwsDeployment.ZeroTrustCwsDeployment.property.updatedAt">UpdatedAt</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktn/provider-cloudflare.zeroTrustCwsDeployment.ZeroTrustCwsDeployment.property.accountIdInput">AccountIdInput</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktn/provider-cloudflare.zeroTrustCwsDeployment.ZeroTrustCwsDeployment.property.basicAuthCredentialIdsInput">BasicAuthCredentialIdsInput</a></code> | <code>*[]*string</code> | *No description.* |
| <code><a href="#@cdktn/provider-cloudflare.zeroTrustCwsDeployment.ZeroTrustCwsDeployment.property.defaultModeInput">DefaultModeInput</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktn/provider-cloudflare.zeroTrustCwsDeployment.ZeroTrustCwsDeployment.property.descriptionInput">DescriptionInput</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktn/provider-cloudflare.zeroTrustCwsDeployment.ZeroTrustCwsDeployment.property.domainAclIdInput">DomainAclIdInput</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktn/provider-cloudflare.zeroTrustCwsDeployment.ZeroTrustCwsDeployment.property.nameInput">NameInput</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktn/provider-cloudflare.zeroTrustCwsDeployment.ZeroTrustCwsDeployment.property.onErrorActionInput">OnErrorActionInput</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktn/provider-cloudflare.zeroTrustCwsDeployment.ZeroTrustCwsDeployment.property.policySetIdsInput">PolicySetIdsInput</a></code> | <code>*[]*string</code> | *No description.* |
| <code><a href="#@cdktn/provider-cloudflare.zeroTrustCwsDeployment.ZeroTrustCwsDeployment.property.regoRaiseErrorInput">RegoRaiseErrorInput</a></code> | <code>interface{}</code> | *No description.* |
| <code><a href="#@cdktn/provider-cloudflare.zeroTrustCwsDeployment.ZeroTrustCwsDeployment.property.tagsInput">TagsInput</a></code> | <code>*map[string]*string</code> | *No description.* |
| <code><a href="#@cdktn/provider-cloudflare.zeroTrustCwsDeployment.ZeroTrustCwsDeployment.property.accountId">AccountId</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktn/provider-cloudflare.zeroTrustCwsDeployment.ZeroTrustCwsDeployment.property.basicAuthCredentialIds">BasicAuthCredentialIds</a></code> | <code>*[]*string</code> | *No description.* |
| <code><a href="#@cdktn/provider-cloudflare.zeroTrustCwsDeployment.ZeroTrustCwsDeployment.property.defaultMode">DefaultMode</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktn/provider-cloudflare.zeroTrustCwsDeployment.ZeroTrustCwsDeployment.property.description">Description</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktn/provider-cloudflare.zeroTrustCwsDeployment.ZeroTrustCwsDeployment.property.domainAclId">DomainAclId</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktn/provider-cloudflare.zeroTrustCwsDeployment.ZeroTrustCwsDeployment.property.name">Name</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktn/provider-cloudflare.zeroTrustCwsDeployment.ZeroTrustCwsDeployment.property.onErrorAction">OnErrorAction</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktn/provider-cloudflare.zeroTrustCwsDeployment.ZeroTrustCwsDeployment.property.policySetIds">PolicySetIds</a></code> | <code>*[]*string</code> | *No description.* |
| <code><a href="#@cdktn/provider-cloudflare.zeroTrustCwsDeployment.ZeroTrustCwsDeployment.property.regoRaiseError">RegoRaiseError</a></code> | <code>interface{}</code> | *No description.* |
| <code><a href="#@cdktn/provider-cloudflare.zeroTrustCwsDeployment.ZeroTrustCwsDeployment.property.tags">Tags</a></code> | <code>*map[string]*string</code> | *No description.* |

---

##### `Node`<sup>Required</sup> <a name="Node" id="@cdktn/provider-cloudflare.zeroTrustCwsDeployment.ZeroTrustCwsDeployment.property.node"></a>

```go
func Node() Node
```

- *Type:* github.com/aws/constructs-go/constructs/v10.Node

The tree node.

---

##### `CdktfStack`<sup>Required</sup> <a name="CdktfStack" id="@cdktn/provider-cloudflare.zeroTrustCwsDeployment.ZeroTrustCwsDeployment.property.cdktfStack"></a>

```go
func CdktfStack() TerraformStack
```

- *Type:* github.com/open-constructs/cdk-terrain-go/cdktn.TerraformStack

---

##### `Fqn`<sup>Required</sup> <a name="Fqn" id="@cdktn/provider-cloudflare.zeroTrustCwsDeployment.ZeroTrustCwsDeployment.property.fqn"></a>

```go
func Fqn() *string
```

- *Type:* *string

---

##### `FriendlyUniqueId`<sup>Required</sup> <a name="FriendlyUniqueId" id="@cdktn/provider-cloudflare.zeroTrustCwsDeployment.ZeroTrustCwsDeployment.property.friendlyUniqueId"></a>

```go
func FriendlyUniqueId() *string
```

- *Type:* *string

---

##### `TerraformMetaArguments`<sup>Required</sup> <a name="TerraformMetaArguments" id="@cdktn/provider-cloudflare.zeroTrustCwsDeployment.ZeroTrustCwsDeployment.property.terraformMetaArguments"></a>

```go
func TerraformMetaArguments() *map[string]interface{}
```

- *Type:* *map[string]interface{}

---

##### `TerraformResourceType`<sup>Required</sup> <a name="TerraformResourceType" id="@cdktn/provider-cloudflare.zeroTrustCwsDeployment.ZeroTrustCwsDeployment.property.terraformResourceType"></a>

```go
func TerraformResourceType() *string
```

- *Type:* *string

---

##### `TerraformGeneratorMetadata`<sup>Optional</sup> <a name="TerraformGeneratorMetadata" id="@cdktn/provider-cloudflare.zeroTrustCwsDeployment.ZeroTrustCwsDeployment.property.terraformGeneratorMetadata"></a>

```go
func TerraformGeneratorMetadata() TerraformProviderGeneratorMetadata
```

- *Type:* github.com/open-constructs/cdk-terrain-go/cdktn.TerraformProviderGeneratorMetadata

---

##### `Connection`<sup>Optional</sup> <a name="Connection" id="@cdktn/provider-cloudflare.zeroTrustCwsDeployment.ZeroTrustCwsDeployment.property.connection"></a>

```go
func Connection() interface{}
```

- *Type:* interface{}

---

##### `Count`<sup>Optional</sup> <a name="Count" id="@cdktn/provider-cloudflare.zeroTrustCwsDeployment.ZeroTrustCwsDeployment.property.count"></a>

```go
func Count() interface{}
```

- *Type:* interface{}

---

##### `DependsOn`<sup>Optional</sup> <a name="DependsOn" id="@cdktn/provider-cloudflare.zeroTrustCwsDeployment.ZeroTrustCwsDeployment.property.dependsOn"></a>

```go
func DependsOn() *[]*string
```

- *Type:* *[]*string

---

##### `ForEach`<sup>Optional</sup> <a name="ForEach" id="@cdktn/provider-cloudflare.zeroTrustCwsDeployment.ZeroTrustCwsDeployment.property.forEach"></a>

```go
func ForEach() ITerraformIterator
```

- *Type:* github.com/open-constructs/cdk-terrain-go/cdktn.ITerraformIterator

---

##### `Lifecycle`<sup>Optional</sup> <a name="Lifecycle" id="@cdktn/provider-cloudflare.zeroTrustCwsDeployment.ZeroTrustCwsDeployment.property.lifecycle"></a>

```go
func Lifecycle() TerraformResourceLifecycle
```

- *Type:* github.com/open-constructs/cdk-terrain-go/cdktn.TerraformResourceLifecycle

---

##### `Provider`<sup>Optional</sup> <a name="Provider" id="@cdktn/provider-cloudflare.zeroTrustCwsDeployment.ZeroTrustCwsDeployment.property.provider"></a>

```go
func Provider() TerraformProvider
```

- *Type:* github.com/open-constructs/cdk-terrain-go/cdktn.TerraformProvider

---

##### `Provisioners`<sup>Optional</sup> <a name="Provisioners" id="@cdktn/provider-cloudflare.zeroTrustCwsDeployment.ZeroTrustCwsDeployment.property.provisioners"></a>

```go
func Provisioners() *[]interface{}
```

- *Type:* *[]interface{}

---

##### `CreatedAt`<sup>Required</sup> <a name="CreatedAt" id="@cdktn/provider-cloudflare.zeroTrustCwsDeployment.ZeroTrustCwsDeployment.property.createdAt"></a>

```go
func CreatedAt() *string
```

- *Type:* *string

---

##### `Id`<sup>Required</sup> <a name="Id" id="@cdktn/provider-cloudflare.zeroTrustCwsDeployment.ZeroTrustCwsDeployment.property.id"></a>

```go
func Id() *string
```

- *Type:* *string

---

##### `UpdatedAt`<sup>Required</sup> <a name="UpdatedAt" id="@cdktn/provider-cloudflare.zeroTrustCwsDeployment.ZeroTrustCwsDeployment.property.updatedAt"></a>

```go
func UpdatedAt() *string
```

- *Type:* *string

---

##### `AccountIdInput`<sup>Optional</sup> <a name="AccountIdInput" id="@cdktn/provider-cloudflare.zeroTrustCwsDeployment.ZeroTrustCwsDeployment.property.accountIdInput"></a>

```go
func AccountIdInput() *string
```

- *Type:* *string

---

##### `BasicAuthCredentialIdsInput`<sup>Optional</sup> <a name="BasicAuthCredentialIdsInput" id="@cdktn/provider-cloudflare.zeroTrustCwsDeployment.ZeroTrustCwsDeployment.property.basicAuthCredentialIdsInput"></a>

```go
func BasicAuthCredentialIdsInput() *[]*string
```

- *Type:* *[]*string

---

##### `DefaultModeInput`<sup>Optional</sup> <a name="DefaultModeInput" id="@cdktn/provider-cloudflare.zeroTrustCwsDeployment.ZeroTrustCwsDeployment.property.defaultModeInput"></a>

```go
func DefaultModeInput() *string
```

- *Type:* *string

---

##### `DescriptionInput`<sup>Optional</sup> <a name="DescriptionInput" id="@cdktn/provider-cloudflare.zeroTrustCwsDeployment.ZeroTrustCwsDeployment.property.descriptionInput"></a>

```go
func DescriptionInput() *string
```

- *Type:* *string

---

##### `DomainAclIdInput`<sup>Optional</sup> <a name="DomainAclIdInput" id="@cdktn/provider-cloudflare.zeroTrustCwsDeployment.ZeroTrustCwsDeployment.property.domainAclIdInput"></a>

```go
func DomainAclIdInput() *string
```

- *Type:* *string

---

##### `NameInput`<sup>Optional</sup> <a name="NameInput" id="@cdktn/provider-cloudflare.zeroTrustCwsDeployment.ZeroTrustCwsDeployment.property.nameInput"></a>

```go
func NameInput() *string
```

- *Type:* *string

---

##### `OnErrorActionInput`<sup>Optional</sup> <a name="OnErrorActionInput" id="@cdktn/provider-cloudflare.zeroTrustCwsDeployment.ZeroTrustCwsDeployment.property.onErrorActionInput"></a>

```go
func OnErrorActionInput() *string
```

- *Type:* *string

---

##### `PolicySetIdsInput`<sup>Optional</sup> <a name="PolicySetIdsInput" id="@cdktn/provider-cloudflare.zeroTrustCwsDeployment.ZeroTrustCwsDeployment.property.policySetIdsInput"></a>

```go
func PolicySetIdsInput() *[]*string
```

- *Type:* *[]*string

---

##### `RegoRaiseErrorInput`<sup>Optional</sup> <a name="RegoRaiseErrorInput" id="@cdktn/provider-cloudflare.zeroTrustCwsDeployment.ZeroTrustCwsDeployment.property.regoRaiseErrorInput"></a>

```go
func RegoRaiseErrorInput() interface{}
```

- *Type:* interface{}

---

##### `TagsInput`<sup>Optional</sup> <a name="TagsInput" id="@cdktn/provider-cloudflare.zeroTrustCwsDeployment.ZeroTrustCwsDeployment.property.tagsInput"></a>

```go
func TagsInput() *map[string]*string
```

- *Type:* *map[string]*string

---

##### `AccountId`<sup>Required</sup> <a name="AccountId" id="@cdktn/provider-cloudflare.zeroTrustCwsDeployment.ZeroTrustCwsDeployment.property.accountId"></a>

```go
func AccountId() *string
```

- *Type:* *string

---

##### `BasicAuthCredentialIds`<sup>Required</sup> <a name="BasicAuthCredentialIds" id="@cdktn/provider-cloudflare.zeroTrustCwsDeployment.ZeroTrustCwsDeployment.property.basicAuthCredentialIds"></a>

```go
func BasicAuthCredentialIds() *[]*string
```

- *Type:* *[]*string

---

##### `DefaultMode`<sup>Required</sup> <a name="DefaultMode" id="@cdktn/provider-cloudflare.zeroTrustCwsDeployment.ZeroTrustCwsDeployment.property.defaultMode"></a>

```go
func DefaultMode() *string
```

- *Type:* *string

---

##### `Description`<sup>Required</sup> <a name="Description" id="@cdktn/provider-cloudflare.zeroTrustCwsDeployment.ZeroTrustCwsDeployment.property.description"></a>

```go
func Description() *string
```

- *Type:* *string

---

##### `DomainAclId`<sup>Required</sup> <a name="DomainAclId" id="@cdktn/provider-cloudflare.zeroTrustCwsDeployment.ZeroTrustCwsDeployment.property.domainAclId"></a>

```go
func DomainAclId() *string
```

- *Type:* *string

---

##### `Name`<sup>Required</sup> <a name="Name" id="@cdktn/provider-cloudflare.zeroTrustCwsDeployment.ZeroTrustCwsDeployment.property.name"></a>

```go
func Name() *string
```

- *Type:* *string

---

##### `OnErrorAction`<sup>Required</sup> <a name="OnErrorAction" id="@cdktn/provider-cloudflare.zeroTrustCwsDeployment.ZeroTrustCwsDeployment.property.onErrorAction"></a>

```go
func OnErrorAction() *string
```

- *Type:* *string

---

##### `PolicySetIds`<sup>Required</sup> <a name="PolicySetIds" id="@cdktn/provider-cloudflare.zeroTrustCwsDeployment.ZeroTrustCwsDeployment.property.policySetIds"></a>

```go
func PolicySetIds() *[]*string
```

- *Type:* *[]*string

---

##### `RegoRaiseError`<sup>Required</sup> <a name="RegoRaiseError" id="@cdktn/provider-cloudflare.zeroTrustCwsDeployment.ZeroTrustCwsDeployment.property.regoRaiseError"></a>

```go
func RegoRaiseError() interface{}
```

- *Type:* interface{}

---

##### `Tags`<sup>Required</sup> <a name="Tags" id="@cdktn/provider-cloudflare.zeroTrustCwsDeployment.ZeroTrustCwsDeployment.property.tags"></a>

```go
func Tags() *map[string]*string
```

- *Type:* *map[string]*string

---

#### Constants <a name="Constants" id="Constants"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-cloudflare.zeroTrustCwsDeployment.ZeroTrustCwsDeployment.property.tfResourceType">TfResourceType</a></code> | <code>*string</code> | *No description.* |

---

##### `TfResourceType`<sup>Required</sup> <a name="TfResourceType" id="@cdktn/provider-cloudflare.zeroTrustCwsDeployment.ZeroTrustCwsDeployment.property.tfResourceType"></a>

```go
func TfResourceType() *string
```

- *Type:* *string

---

## Structs <a name="Structs" id="Structs"></a>

### ZeroTrustCwsDeploymentConfig <a name="ZeroTrustCwsDeploymentConfig" id="@cdktn/provider-cloudflare.zeroTrustCwsDeployment.ZeroTrustCwsDeploymentConfig"></a>

#### Initializer <a name="Initializer" id="@cdktn/provider-cloudflare.zeroTrustCwsDeployment.ZeroTrustCwsDeploymentConfig.Initializer"></a>

```go
import "github.com/cdktn-io/cdktn-provider-cloudflare-go/cloudflare/v17/zerotrustcwsdeployment"

&zerotrustcwsdeployment.ZeroTrustCwsDeploymentConfig {
	Connection: interface{},
	Count: interface{},
	DependsOn: *[]github.com/open-constructs/cdk-terrain-go/cdktn.ITerraformDependable,
	ForEach: github.com/open-constructs/cdk-terrain-go/cdktn.ITerraformIterator,
	Lifecycle: github.com/open-constructs/cdk-terrain-go/cdktn.TerraformResourceLifecycle,
	Provider: github.com/open-constructs/cdk-terrain-go/cdktn.TerraformProvider,
	Provisioners: *[]interface{},
	AccountId: *string,
	BasicAuthCredentialIds: *[]*string,
	DefaultMode: *string,
	Name: *string,
	PolicySetIds: *[]*string,
	Description: *string,
	DomainAclId: *string,
	OnErrorAction: *string,
	RegoRaiseError: interface{},
	Tags: *map[string]*string,
}
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-cloudflare.zeroTrustCwsDeployment.ZeroTrustCwsDeploymentConfig.property.connection">Connection</a></code> | <code>interface{}</code> | *No description.* |
| <code><a href="#@cdktn/provider-cloudflare.zeroTrustCwsDeployment.ZeroTrustCwsDeploymentConfig.property.count">Count</a></code> | <code>interface{}</code> | *No description.* |
| <code><a href="#@cdktn/provider-cloudflare.zeroTrustCwsDeployment.ZeroTrustCwsDeploymentConfig.property.dependsOn">DependsOn</a></code> | <code>*[]github.com/open-constructs/cdk-terrain-go/cdktn.ITerraformDependable</code> | *No description.* |
| <code><a href="#@cdktn/provider-cloudflare.zeroTrustCwsDeployment.ZeroTrustCwsDeploymentConfig.property.forEach">ForEach</a></code> | <code>github.com/open-constructs/cdk-terrain-go/cdktn.ITerraformIterator</code> | *No description.* |
| <code><a href="#@cdktn/provider-cloudflare.zeroTrustCwsDeployment.ZeroTrustCwsDeploymentConfig.property.lifecycle">Lifecycle</a></code> | <code>github.com/open-constructs/cdk-terrain-go/cdktn.TerraformResourceLifecycle</code> | *No description.* |
| <code><a href="#@cdktn/provider-cloudflare.zeroTrustCwsDeployment.ZeroTrustCwsDeploymentConfig.property.provider">Provider</a></code> | <code>github.com/open-constructs/cdk-terrain-go/cdktn.TerraformProvider</code> | *No description.* |
| <code><a href="#@cdktn/provider-cloudflare.zeroTrustCwsDeployment.ZeroTrustCwsDeploymentConfig.property.provisioners">Provisioners</a></code> | <code>*[]interface{}</code> | *No description.* |
| <code><a href="#@cdktn/provider-cloudflare.zeroTrustCwsDeployment.ZeroTrustCwsDeploymentConfig.property.accountId">AccountId</a></code> | <code>*string</code> | Cloudflare account ID (32-character hexadecimal string). |
| <code><a href="#@cdktn/provider-cloudflare.zeroTrustCwsDeployment.ZeroTrustCwsDeploymentConfig.property.basicAuthCredentialIds">BasicAuthCredentialIds</a></code> | <code>*[]*string</code> | IDs of basic-auth credentials to attach. |
| <code><a href="#@cdktn/provider-cloudflare.zeroTrustCwsDeployment.ZeroTrustCwsDeploymentConfig.property.defaultMode">DefaultMode</a></code> | <code>*string</code> | Default traffic mode: ALLOW or BLOCK Available values: "ALLOW", "BLOCK". |
| <code><a href="#@cdktn/provider-cloudflare.zeroTrustCwsDeployment.ZeroTrustCwsDeploymentConfig.property.name">Name</a></code> | <code>*string</code> | Name of the deployment. |
| <code><a href="#@cdktn/provider-cloudflare.zeroTrustCwsDeployment.ZeroTrustCwsDeploymentConfig.property.policySetIds">PolicySetIds</a></code> | <code>*[]*string</code> | IDs of policy sets to attach. |
| <code><a href="#@cdktn/provider-cloudflare.zeroTrustCwsDeployment.ZeroTrustCwsDeploymentConfig.property.description">Description</a></code> | <code>*string</code> | Optional free-form description. |
| <code><a href="#@cdktn/provider-cloudflare.zeroTrustCwsDeployment.ZeroTrustCwsDeploymentConfig.property.domainAclId">DomainAclId</a></code> | <code>*string</code> | ID of the domain ACL to attach (omit or null for none). |
| <code><a href="#@cdktn/provider-cloudflare.zeroTrustCwsDeployment.ZeroTrustCwsDeploymentConfig.property.onErrorAction">OnErrorAction</a></code> | <code>*string</code> | Action for runtime Rego errors. Omit to use BLOCK. Available values: "BLOCK", "SKIP". |
| <code><a href="#@cdktn/provider-cloudflare.zeroTrustCwsDeployment.ZeroTrustCwsDeploymentConfig.property.regoRaiseError">RegoRaiseError</a></code> | <code>interface{}</code> | Whether OPA builtin failures are raised as runtime evaluation errors. Omit to use the default true value. |
| <code><a href="#@cdktn/provider-cloudflare.zeroTrustCwsDeployment.ZeroTrustCwsDeploymentConfig.property.tags">Tags</a></code> | <code>*map[string]*string</code> | Tags to attach. Keys are limited to 256 UTF-8 bytes and values to 1024 UTF-8 bytes. |

---

##### `Connection`<sup>Optional</sup> <a name="Connection" id="@cdktn/provider-cloudflare.zeroTrustCwsDeployment.ZeroTrustCwsDeploymentConfig.property.connection"></a>

```go
Connection interface{}
```

- *Type:* interface{}

---

##### `Count`<sup>Optional</sup> <a name="Count" id="@cdktn/provider-cloudflare.zeroTrustCwsDeployment.ZeroTrustCwsDeploymentConfig.property.count"></a>

```go
Count interface{}
```

- *Type:* interface{}

---

##### `DependsOn`<sup>Optional</sup> <a name="DependsOn" id="@cdktn/provider-cloudflare.zeroTrustCwsDeployment.ZeroTrustCwsDeploymentConfig.property.dependsOn"></a>

```go
DependsOn *[]ITerraformDependable
```

- *Type:* *[]github.com/open-constructs/cdk-terrain-go/cdktn.ITerraformDependable

---

##### `ForEach`<sup>Optional</sup> <a name="ForEach" id="@cdktn/provider-cloudflare.zeroTrustCwsDeployment.ZeroTrustCwsDeploymentConfig.property.forEach"></a>

```go
ForEach ITerraformIterator
```

- *Type:* github.com/open-constructs/cdk-terrain-go/cdktn.ITerraformIterator

---

##### `Lifecycle`<sup>Optional</sup> <a name="Lifecycle" id="@cdktn/provider-cloudflare.zeroTrustCwsDeployment.ZeroTrustCwsDeploymentConfig.property.lifecycle"></a>

```go
Lifecycle TerraformResourceLifecycle
```

- *Type:* github.com/open-constructs/cdk-terrain-go/cdktn.TerraformResourceLifecycle

---

##### `Provider`<sup>Optional</sup> <a name="Provider" id="@cdktn/provider-cloudflare.zeroTrustCwsDeployment.ZeroTrustCwsDeploymentConfig.property.provider"></a>

```go
Provider TerraformProvider
```

- *Type:* github.com/open-constructs/cdk-terrain-go/cdktn.TerraformProvider

---

##### `Provisioners`<sup>Optional</sup> <a name="Provisioners" id="@cdktn/provider-cloudflare.zeroTrustCwsDeployment.ZeroTrustCwsDeploymentConfig.property.provisioners"></a>

```go
Provisioners *[]interface{}
```

- *Type:* *[]interface{}

---

##### `AccountId`<sup>Required</sup> <a name="AccountId" id="@cdktn/provider-cloudflare.zeroTrustCwsDeployment.ZeroTrustCwsDeploymentConfig.property.accountId"></a>

```go
AccountId *string
```

- *Type:* *string

Cloudflare account ID (32-character hexadecimal string).

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/cloudflare/cloudflare/5.29.0/docs/resources/zero_trust_cws_deployment#account_id ZeroTrustCwsDeployment#account_id}

---

##### `BasicAuthCredentialIds`<sup>Required</sup> <a name="BasicAuthCredentialIds" id="@cdktn/provider-cloudflare.zeroTrustCwsDeployment.ZeroTrustCwsDeploymentConfig.property.basicAuthCredentialIds"></a>

```go
BasicAuthCredentialIds *[]*string
```

- *Type:* *[]*string

IDs of basic-auth credentials to attach.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/cloudflare/cloudflare/5.29.0/docs/resources/zero_trust_cws_deployment#basic_auth_credential_ids ZeroTrustCwsDeployment#basic_auth_credential_ids}

---

##### `DefaultMode`<sup>Required</sup> <a name="DefaultMode" id="@cdktn/provider-cloudflare.zeroTrustCwsDeployment.ZeroTrustCwsDeploymentConfig.property.defaultMode"></a>

```go
DefaultMode *string
```

- *Type:* *string

Default traffic mode: ALLOW or BLOCK Available values: "ALLOW", "BLOCK".

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/cloudflare/cloudflare/5.29.0/docs/resources/zero_trust_cws_deployment#default_mode ZeroTrustCwsDeployment#default_mode}

---

##### `Name`<sup>Required</sup> <a name="Name" id="@cdktn/provider-cloudflare.zeroTrustCwsDeployment.ZeroTrustCwsDeploymentConfig.property.name"></a>

```go
Name *string
```

- *Type:* *string

Name of the deployment.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/cloudflare/cloudflare/5.29.0/docs/resources/zero_trust_cws_deployment#name ZeroTrustCwsDeployment#name}

---

##### `PolicySetIds`<sup>Required</sup> <a name="PolicySetIds" id="@cdktn/provider-cloudflare.zeroTrustCwsDeployment.ZeroTrustCwsDeploymentConfig.property.policySetIds"></a>

```go
PolicySetIds *[]*string
```

- *Type:* *[]*string

IDs of policy sets to attach.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/cloudflare/cloudflare/5.29.0/docs/resources/zero_trust_cws_deployment#policy_set_ids ZeroTrustCwsDeployment#policy_set_ids}

---

##### `Description`<sup>Optional</sup> <a name="Description" id="@cdktn/provider-cloudflare.zeroTrustCwsDeployment.ZeroTrustCwsDeploymentConfig.property.description"></a>

```go
Description *string
```

- *Type:* *string

Optional free-form description.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/cloudflare/cloudflare/5.29.0/docs/resources/zero_trust_cws_deployment#description ZeroTrustCwsDeployment#description}

---

##### `DomainAclId`<sup>Optional</sup> <a name="DomainAclId" id="@cdktn/provider-cloudflare.zeroTrustCwsDeployment.ZeroTrustCwsDeploymentConfig.property.domainAclId"></a>

```go
DomainAclId *string
```

- *Type:* *string

ID of the domain ACL to attach (omit or null for none).

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/cloudflare/cloudflare/5.29.0/docs/resources/zero_trust_cws_deployment#domain_acl_id ZeroTrustCwsDeployment#domain_acl_id}

---

##### `OnErrorAction`<sup>Optional</sup> <a name="OnErrorAction" id="@cdktn/provider-cloudflare.zeroTrustCwsDeployment.ZeroTrustCwsDeploymentConfig.property.onErrorAction"></a>

```go
OnErrorAction *string
```

- *Type:* *string

Action for runtime Rego errors. Omit to use BLOCK. Available values: "BLOCK", "SKIP".

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/cloudflare/cloudflare/5.29.0/docs/resources/zero_trust_cws_deployment#on_error_action ZeroTrustCwsDeployment#on_error_action}

---

##### `RegoRaiseError`<sup>Optional</sup> <a name="RegoRaiseError" id="@cdktn/provider-cloudflare.zeroTrustCwsDeployment.ZeroTrustCwsDeploymentConfig.property.regoRaiseError"></a>

```go
RegoRaiseError interface{}
```

- *Type:* interface{}

Whether OPA builtin failures are raised as runtime evaluation errors. Omit to use the default true value.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/cloudflare/cloudflare/5.29.0/docs/resources/zero_trust_cws_deployment#rego_raise_error ZeroTrustCwsDeployment#rego_raise_error}

---

##### `Tags`<sup>Optional</sup> <a name="Tags" id="@cdktn/provider-cloudflare.zeroTrustCwsDeployment.ZeroTrustCwsDeploymentConfig.property.tags"></a>

```go
Tags *map[string]*string
```

- *Type:* *map[string]*string

Tags to attach. Keys are limited to 256 UTF-8 bytes and values to 1024 UTF-8 bytes.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/cloudflare/cloudflare/5.29.0/docs/resources/zero_trust_cws_deployment#tags ZeroTrustCwsDeployment#tags}

---



