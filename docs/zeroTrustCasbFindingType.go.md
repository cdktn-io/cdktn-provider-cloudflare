# `zeroTrustCasbFindingType` Submodule <a name="`zeroTrustCasbFindingType` Submodule" id="@cdktn/provider-cloudflare.zeroTrustCasbFindingType"></a>

## Constructs <a name="Constructs" id="Constructs"></a>

### ZeroTrustCasbFindingType <a name="ZeroTrustCasbFindingType" id="@cdktn/provider-cloudflare.zeroTrustCasbFindingType.ZeroTrustCasbFindingType"></a>

Represents a {@link https://registry.terraform.io/providers/cloudflare/cloudflare/5.29.0/docs/resources/zero_trust_casb_finding_type cloudflare_zero_trust_casb_finding_type}.

#### Initializers <a name="Initializers" id="@cdktn/provider-cloudflare.zeroTrustCasbFindingType.ZeroTrustCasbFindingType.Initializer"></a>

```go
import "github.com/cdktn-io/cdktn-provider-cloudflare-go/cloudflare/v17/zerotrustcasbfindingtype"

zerotrustcasbfindingtype.NewZeroTrustCasbFindingType(scope Construct, id *string, config ZeroTrustCasbFindingTypeConfig) ZeroTrustCasbFindingType
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-cloudflare.zeroTrustCasbFindingType.ZeroTrustCasbFindingType.Initializer.parameter.scope">scope</a></code> | <code>github.com/aws/constructs-go/constructs/v10.Construct</code> | The scope in which to define this construct. |
| <code><a href="#@cdktn/provider-cloudflare.zeroTrustCasbFindingType.ZeroTrustCasbFindingType.Initializer.parameter.id">id</a></code> | <code>*string</code> | The scoped construct ID. |
| <code><a href="#@cdktn/provider-cloudflare.zeroTrustCasbFindingType.ZeroTrustCasbFindingType.Initializer.parameter.config">config</a></code> | <code><a href="#@cdktn/provider-cloudflare.zeroTrustCasbFindingType.ZeroTrustCasbFindingTypeConfig">ZeroTrustCasbFindingTypeConfig</a></code> | *No description.* |

---

##### `scope`<sup>Required</sup> <a name="scope" id="@cdktn/provider-cloudflare.zeroTrustCasbFindingType.ZeroTrustCasbFindingType.Initializer.parameter.scope"></a>

- *Type:* github.com/aws/constructs-go/constructs/v10.Construct

The scope in which to define this construct.

---

##### `id`<sup>Required</sup> <a name="id" id="@cdktn/provider-cloudflare.zeroTrustCasbFindingType.ZeroTrustCasbFindingType.Initializer.parameter.id"></a>

- *Type:* *string

The scoped construct ID.

Must be unique amongst siblings in the same scope

---

##### `config`<sup>Required</sup> <a name="config" id="@cdktn/provider-cloudflare.zeroTrustCasbFindingType.ZeroTrustCasbFindingType.Initializer.parameter.config"></a>

- *Type:* <a href="#@cdktn/provider-cloudflare.zeroTrustCasbFindingType.ZeroTrustCasbFindingTypeConfig">ZeroTrustCasbFindingTypeConfig</a>

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-cloudflare.zeroTrustCasbFindingType.ZeroTrustCasbFindingType.toString">ToString</a></code> | Returns a string representation of this construct. |
| <code><a href="#@cdktn/provider-cloudflare.zeroTrustCasbFindingType.ZeroTrustCasbFindingType.with">With</a></code> | Applies one or more mixins to this construct. |
| <code><a href="#@cdktn/provider-cloudflare.zeroTrustCasbFindingType.ZeroTrustCasbFindingType.addOverride">AddOverride</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-cloudflare.zeroTrustCasbFindingType.ZeroTrustCasbFindingType.overrideLogicalId">OverrideLogicalId</a></code> | Overrides the auto-generated logical ID with a specific ID. |
| <code><a href="#@cdktn/provider-cloudflare.zeroTrustCasbFindingType.ZeroTrustCasbFindingType.resetOverrideLogicalId">ResetOverrideLogicalId</a></code> | Resets a previously passed logical Id to use the auto-generated logical id again. |
| <code><a href="#@cdktn/provider-cloudflare.zeroTrustCasbFindingType.ZeroTrustCasbFindingType.toHclTerraform">ToHclTerraform</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-cloudflare.zeroTrustCasbFindingType.ZeroTrustCasbFindingType.toMetadata">ToMetadata</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-cloudflare.zeroTrustCasbFindingType.ZeroTrustCasbFindingType.toTerraform">ToTerraform</a></code> | Adds this resource to the terraform JSON output. |
| <code><a href="#@cdktn/provider-cloudflare.zeroTrustCasbFindingType.ZeroTrustCasbFindingType.addMoveTarget">AddMoveTarget</a></code> | Adds a user defined moveTarget string to this resource to be later used in .moveTo(moveTarget) to resolve the location of the move. |
| <code><a href="#@cdktn/provider-cloudflare.zeroTrustCasbFindingType.ZeroTrustCasbFindingType.getAnyMapAttribute">GetAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-cloudflare.zeroTrustCasbFindingType.ZeroTrustCasbFindingType.getBooleanAttribute">GetBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-cloudflare.zeroTrustCasbFindingType.ZeroTrustCasbFindingType.getBooleanMapAttribute">GetBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-cloudflare.zeroTrustCasbFindingType.ZeroTrustCasbFindingType.getListAttribute">GetListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-cloudflare.zeroTrustCasbFindingType.ZeroTrustCasbFindingType.getNumberAttribute">GetNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-cloudflare.zeroTrustCasbFindingType.ZeroTrustCasbFindingType.getNumberListAttribute">GetNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-cloudflare.zeroTrustCasbFindingType.ZeroTrustCasbFindingType.getNumberMapAttribute">GetNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-cloudflare.zeroTrustCasbFindingType.ZeroTrustCasbFindingType.getStringAttribute">GetStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-cloudflare.zeroTrustCasbFindingType.ZeroTrustCasbFindingType.getStringMapAttribute">GetStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-cloudflare.zeroTrustCasbFindingType.ZeroTrustCasbFindingType.hasResourceMove">HasResourceMove</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-cloudflare.zeroTrustCasbFindingType.ZeroTrustCasbFindingType.importFrom">ImportFrom</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-cloudflare.zeroTrustCasbFindingType.ZeroTrustCasbFindingType.interpolationForAttribute">InterpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-cloudflare.zeroTrustCasbFindingType.ZeroTrustCasbFindingType.moveFromId">MoveFromId</a></code> | Move the resource corresponding to "id" to this resource. |
| <code><a href="#@cdktn/provider-cloudflare.zeroTrustCasbFindingType.ZeroTrustCasbFindingType.moveTo">MoveTo</a></code> | Moves this resource to the target resource given by moveTarget. |
| <code><a href="#@cdktn/provider-cloudflare.zeroTrustCasbFindingType.ZeroTrustCasbFindingType.moveToId">MoveToId</a></code> | Moves this resource to the resource corresponding to "id". |
| <code><a href="#@cdktn/provider-cloudflare.zeroTrustCasbFindingType.ZeroTrustCasbFindingType.resetIntegrationIds">ResetIntegrationIds</a></code> | *No description.* |

---

##### `ToString` <a name="ToString" id="@cdktn/provider-cloudflare.zeroTrustCasbFindingType.ZeroTrustCasbFindingType.toString"></a>

```go
func ToString() *string
```

Returns a string representation of this construct.

##### `With` <a name="With" id="@cdktn/provider-cloudflare.zeroTrustCasbFindingType.ZeroTrustCasbFindingType.with"></a>

```go
func With(mixins ...IMixin) IConstruct
```

Applies one or more mixins to this construct.

Mixins are applied in order. The list of constructs is captured at the
start of the call, so constructs added by a mixin will not be visited.
Use multiple `with()` calls if subsequent mixins should apply to added
constructs.

###### `mixins`<sup>Required</sup> <a name="mixins" id="@cdktn/provider-cloudflare.zeroTrustCasbFindingType.ZeroTrustCasbFindingType.with.parameter.mixins"></a>

- *Type:* ...github.com/aws/constructs-go/constructs/v10.IMixin

The mixins to apply.

---

##### `AddOverride` <a name="AddOverride" id="@cdktn/provider-cloudflare.zeroTrustCasbFindingType.ZeroTrustCasbFindingType.addOverride"></a>

```go
func AddOverride(path *string, value interface{})
```

###### `path`<sup>Required</sup> <a name="path" id="@cdktn/provider-cloudflare.zeroTrustCasbFindingType.ZeroTrustCasbFindingType.addOverride.parameter.path"></a>

- *Type:* *string

---

###### `value`<sup>Required</sup> <a name="value" id="@cdktn/provider-cloudflare.zeroTrustCasbFindingType.ZeroTrustCasbFindingType.addOverride.parameter.value"></a>

- *Type:* interface{}

---

##### `OverrideLogicalId` <a name="OverrideLogicalId" id="@cdktn/provider-cloudflare.zeroTrustCasbFindingType.ZeroTrustCasbFindingType.overrideLogicalId"></a>

```go
func OverrideLogicalId(newLogicalId *string)
```

Overrides the auto-generated logical ID with a specific ID.

###### `newLogicalId`<sup>Required</sup> <a name="newLogicalId" id="@cdktn/provider-cloudflare.zeroTrustCasbFindingType.ZeroTrustCasbFindingType.overrideLogicalId.parameter.newLogicalId"></a>

- *Type:* *string

The new logical ID to use for this stack element.

---

##### `ResetOverrideLogicalId` <a name="ResetOverrideLogicalId" id="@cdktn/provider-cloudflare.zeroTrustCasbFindingType.ZeroTrustCasbFindingType.resetOverrideLogicalId"></a>

```go
func ResetOverrideLogicalId()
```

Resets a previously passed logical Id to use the auto-generated logical id again.

##### `ToHclTerraform` <a name="ToHclTerraform" id="@cdktn/provider-cloudflare.zeroTrustCasbFindingType.ZeroTrustCasbFindingType.toHclTerraform"></a>

```go
func ToHclTerraform() interface{}
```

##### `ToMetadata` <a name="ToMetadata" id="@cdktn/provider-cloudflare.zeroTrustCasbFindingType.ZeroTrustCasbFindingType.toMetadata"></a>

```go
func ToMetadata() interface{}
```

##### `ToTerraform` <a name="ToTerraform" id="@cdktn/provider-cloudflare.zeroTrustCasbFindingType.ZeroTrustCasbFindingType.toTerraform"></a>

```go
func ToTerraform() interface{}
```

Adds this resource to the terraform JSON output.

##### `AddMoveTarget` <a name="AddMoveTarget" id="@cdktn/provider-cloudflare.zeroTrustCasbFindingType.ZeroTrustCasbFindingType.addMoveTarget"></a>

```go
func AddMoveTarget(moveTarget *string)
```

Adds a user defined moveTarget string to this resource to be later used in .moveTo(moveTarget) to resolve the location of the move.

###### `moveTarget`<sup>Required</sup> <a name="moveTarget" id="@cdktn/provider-cloudflare.zeroTrustCasbFindingType.ZeroTrustCasbFindingType.addMoveTarget.parameter.moveTarget"></a>

- *Type:* *string

The string move target that will correspond to this resource.

---

##### `GetAnyMapAttribute` <a name="GetAnyMapAttribute" id="@cdktn/provider-cloudflare.zeroTrustCasbFindingType.ZeroTrustCasbFindingType.getAnyMapAttribute"></a>

```go
func GetAnyMapAttribute(terraformAttribute *string) *map[string]interface{}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-cloudflare.zeroTrustCasbFindingType.ZeroTrustCasbFindingType.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetBooleanAttribute` <a name="GetBooleanAttribute" id="@cdktn/provider-cloudflare.zeroTrustCasbFindingType.ZeroTrustCasbFindingType.getBooleanAttribute"></a>

```go
func GetBooleanAttribute(terraformAttribute *string) IResolvable
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-cloudflare.zeroTrustCasbFindingType.ZeroTrustCasbFindingType.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetBooleanMapAttribute` <a name="GetBooleanMapAttribute" id="@cdktn/provider-cloudflare.zeroTrustCasbFindingType.ZeroTrustCasbFindingType.getBooleanMapAttribute"></a>

```go
func GetBooleanMapAttribute(terraformAttribute *string) *map[string]*bool
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-cloudflare.zeroTrustCasbFindingType.ZeroTrustCasbFindingType.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetListAttribute` <a name="GetListAttribute" id="@cdktn/provider-cloudflare.zeroTrustCasbFindingType.ZeroTrustCasbFindingType.getListAttribute"></a>

```go
func GetListAttribute(terraformAttribute *string) *[]*string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-cloudflare.zeroTrustCasbFindingType.ZeroTrustCasbFindingType.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberAttribute` <a name="GetNumberAttribute" id="@cdktn/provider-cloudflare.zeroTrustCasbFindingType.ZeroTrustCasbFindingType.getNumberAttribute"></a>

```go
func GetNumberAttribute(terraformAttribute *string) *f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-cloudflare.zeroTrustCasbFindingType.ZeroTrustCasbFindingType.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberListAttribute` <a name="GetNumberListAttribute" id="@cdktn/provider-cloudflare.zeroTrustCasbFindingType.ZeroTrustCasbFindingType.getNumberListAttribute"></a>

```go
func GetNumberListAttribute(terraformAttribute *string) *[]*f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-cloudflare.zeroTrustCasbFindingType.ZeroTrustCasbFindingType.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberMapAttribute` <a name="GetNumberMapAttribute" id="@cdktn/provider-cloudflare.zeroTrustCasbFindingType.ZeroTrustCasbFindingType.getNumberMapAttribute"></a>

```go
func GetNumberMapAttribute(terraformAttribute *string) *map[string]*f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-cloudflare.zeroTrustCasbFindingType.ZeroTrustCasbFindingType.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetStringAttribute` <a name="GetStringAttribute" id="@cdktn/provider-cloudflare.zeroTrustCasbFindingType.ZeroTrustCasbFindingType.getStringAttribute"></a>

```go
func GetStringAttribute(terraformAttribute *string) *string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-cloudflare.zeroTrustCasbFindingType.ZeroTrustCasbFindingType.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetStringMapAttribute` <a name="GetStringMapAttribute" id="@cdktn/provider-cloudflare.zeroTrustCasbFindingType.ZeroTrustCasbFindingType.getStringMapAttribute"></a>

```go
func GetStringMapAttribute(terraformAttribute *string) *map[string]*string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-cloudflare.zeroTrustCasbFindingType.ZeroTrustCasbFindingType.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `HasResourceMove` <a name="HasResourceMove" id="@cdktn/provider-cloudflare.zeroTrustCasbFindingType.ZeroTrustCasbFindingType.hasResourceMove"></a>

```go
func HasResourceMove() interface{}
```

##### `ImportFrom` <a name="ImportFrom" id="@cdktn/provider-cloudflare.zeroTrustCasbFindingType.ZeroTrustCasbFindingType.importFrom"></a>

```go
func ImportFrom(id *string, provider TerraformProvider)
```

###### `id`<sup>Required</sup> <a name="id" id="@cdktn/provider-cloudflare.zeroTrustCasbFindingType.ZeroTrustCasbFindingType.importFrom.parameter.id"></a>

- *Type:* *string

---

###### `provider`<sup>Optional</sup> <a name="provider" id="@cdktn/provider-cloudflare.zeroTrustCasbFindingType.ZeroTrustCasbFindingType.importFrom.parameter.provider"></a>

- *Type:* github.com/open-constructs/cdk-terrain-go/cdktn.TerraformProvider

---

##### `InterpolationForAttribute` <a name="InterpolationForAttribute" id="@cdktn/provider-cloudflare.zeroTrustCasbFindingType.ZeroTrustCasbFindingType.interpolationForAttribute"></a>

```go
func InterpolationForAttribute(terraformAttribute *string) IResolvable
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-cloudflare.zeroTrustCasbFindingType.ZeroTrustCasbFindingType.interpolationForAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `MoveFromId` <a name="MoveFromId" id="@cdktn/provider-cloudflare.zeroTrustCasbFindingType.ZeroTrustCasbFindingType.moveFromId"></a>

```go
func MoveFromId(id *string)
```

Move the resource corresponding to "id" to this resource.

Note that the resource being moved from must be marked as moved using its instance function.

###### `id`<sup>Required</sup> <a name="id" id="@cdktn/provider-cloudflare.zeroTrustCasbFindingType.ZeroTrustCasbFindingType.moveFromId.parameter.id"></a>

- *Type:* *string

Full id of resource being moved from, e.g. "aws_s3_bucket.example".

---

##### `MoveTo` <a name="MoveTo" id="@cdktn/provider-cloudflare.zeroTrustCasbFindingType.ZeroTrustCasbFindingType.moveTo"></a>

```go
func MoveTo(moveTarget *string, index interface{})
```

Moves this resource to the target resource given by moveTarget.

###### `moveTarget`<sup>Required</sup> <a name="moveTarget" id="@cdktn/provider-cloudflare.zeroTrustCasbFindingType.ZeroTrustCasbFindingType.moveTo.parameter.moveTarget"></a>

- *Type:* *string

The previously set user defined string set by .addMoveTarget() corresponding to the resource to move to.

---

###### `index`<sup>Optional</sup> <a name="index" id="@cdktn/provider-cloudflare.zeroTrustCasbFindingType.ZeroTrustCasbFindingType.moveTo.parameter.index"></a>

- *Type:* interface{}

Optional The index corresponding to the key the resource is to appear in the foreach of a resource to move to.

---

##### `MoveToId` <a name="MoveToId" id="@cdktn/provider-cloudflare.zeroTrustCasbFindingType.ZeroTrustCasbFindingType.moveToId"></a>

```go
func MoveToId(id *string)
```

Moves this resource to the resource corresponding to "id".

###### `id`<sup>Required</sup> <a name="id" id="@cdktn/provider-cloudflare.zeroTrustCasbFindingType.ZeroTrustCasbFindingType.moveToId.parameter.id"></a>

- *Type:* *string

Full id of resource to move to, e.g. "aws_s3_bucket.example".

---

##### `ResetIntegrationIds` <a name="ResetIntegrationIds" id="@cdktn/provider-cloudflare.zeroTrustCasbFindingType.ZeroTrustCasbFindingType.resetIntegrationIds"></a>

```go
func ResetIntegrationIds()
```

#### Static Functions <a name="Static Functions" id="Static Functions"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-cloudflare.zeroTrustCasbFindingType.ZeroTrustCasbFindingType.isConstruct">IsConstruct</a></code> | Checks if `x` is a construct. |
| <code><a href="#@cdktn/provider-cloudflare.zeroTrustCasbFindingType.ZeroTrustCasbFindingType.isTerraformElement">IsTerraformElement</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-cloudflare.zeroTrustCasbFindingType.ZeroTrustCasbFindingType.isTerraformResource">IsTerraformResource</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-cloudflare.zeroTrustCasbFindingType.ZeroTrustCasbFindingType.generateConfigForImport">GenerateConfigForImport</a></code> | Generates CDKTN code for importing a ZeroTrustCasbFindingType resource upon running "cdktn plan <stack-name>". |

---

##### `IsConstruct` <a name="IsConstruct" id="@cdktn/provider-cloudflare.zeroTrustCasbFindingType.ZeroTrustCasbFindingType.isConstruct"></a>

```go
import "github.com/cdktn-io/cdktn-provider-cloudflare-go/cloudflare/v17/zerotrustcasbfindingtype"

zerotrustcasbfindingtype.ZeroTrustCasbFindingType_IsConstruct(x interface{}) *bool
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

###### `x`<sup>Required</sup> <a name="x" id="@cdktn/provider-cloudflare.zeroTrustCasbFindingType.ZeroTrustCasbFindingType.isConstruct.parameter.x"></a>

- *Type:* interface{}

Any object.

---

##### `IsTerraformElement` <a name="IsTerraformElement" id="@cdktn/provider-cloudflare.zeroTrustCasbFindingType.ZeroTrustCasbFindingType.isTerraformElement"></a>

```go
import "github.com/cdktn-io/cdktn-provider-cloudflare-go/cloudflare/v17/zerotrustcasbfindingtype"

zerotrustcasbfindingtype.ZeroTrustCasbFindingType_IsTerraformElement(x interface{}) *bool
```

###### `x`<sup>Required</sup> <a name="x" id="@cdktn/provider-cloudflare.zeroTrustCasbFindingType.ZeroTrustCasbFindingType.isTerraformElement.parameter.x"></a>

- *Type:* interface{}

---

##### `IsTerraformResource` <a name="IsTerraformResource" id="@cdktn/provider-cloudflare.zeroTrustCasbFindingType.ZeroTrustCasbFindingType.isTerraformResource"></a>

```go
import "github.com/cdktn-io/cdktn-provider-cloudflare-go/cloudflare/v17/zerotrustcasbfindingtype"

zerotrustcasbfindingtype.ZeroTrustCasbFindingType_IsTerraformResource(x interface{}) *bool
```

###### `x`<sup>Required</sup> <a name="x" id="@cdktn/provider-cloudflare.zeroTrustCasbFindingType.ZeroTrustCasbFindingType.isTerraformResource.parameter.x"></a>

- *Type:* interface{}

---

##### `GenerateConfigForImport` <a name="GenerateConfigForImport" id="@cdktn/provider-cloudflare.zeroTrustCasbFindingType.ZeroTrustCasbFindingType.generateConfigForImport"></a>

```go
import "github.com/cdktn-io/cdktn-provider-cloudflare-go/cloudflare/v17/zerotrustcasbfindingtype"

zerotrustcasbfindingtype.ZeroTrustCasbFindingType_GenerateConfigForImport(scope Construct, importToId *string, importFromId *string, provider TerraformProvider) ImportableResource
```

Generates CDKTN code for importing a ZeroTrustCasbFindingType resource upon running "cdktn plan <stack-name>".

###### `scope`<sup>Required</sup> <a name="scope" id="@cdktn/provider-cloudflare.zeroTrustCasbFindingType.ZeroTrustCasbFindingType.generateConfigForImport.parameter.scope"></a>

- *Type:* github.com/aws/constructs-go/constructs/v10.Construct

The scope in which to define this construct.

---

###### `importToId`<sup>Required</sup> <a name="importToId" id="@cdktn/provider-cloudflare.zeroTrustCasbFindingType.ZeroTrustCasbFindingType.generateConfigForImport.parameter.importToId"></a>

- *Type:* *string

The construct id used in the generated config for the ZeroTrustCasbFindingType to import.

---

###### `importFromId`<sup>Required</sup> <a name="importFromId" id="@cdktn/provider-cloudflare.zeroTrustCasbFindingType.ZeroTrustCasbFindingType.generateConfigForImport.parameter.importFromId"></a>

- *Type:* *string

The id of the existing ZeroTrustCasbFindingType that should be imported.

Refer to the {@link https://registry.terraform.io/providers/cloudflare/cloudflare/5.29.0/docs/resources/zero_trust_casb_finding_type#import import section} in the documentation of this resource for the id to use

---

###### `provider`<sup>Optional</sup> <a name="provider" id="@cdktn/provider-cloudflare.zeroTrustCasbFindingType.ZeroTrustCasbFindingType.generateConfigForImport.parameter.provider"></a>

- *Type:* github.com/open-constructs/cdk-terrain-go/cdktn.TerraformProvider

? Optional instance of the provider where the ZeroTrustCasbFindingType to import is found.

---

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-cloudflare.zeroTrustCasbFindingType.ZeroTrustCasbFindingType.property.node">Node</a></code> | <code>github.com/aws/constructs-go/constructs/v10.Node</code> | The tree node. |
| <code><a href="#@cdktn/provider-cloudflare.zeroTrustCasbFindingType.ZeroTrustCasbFindingType.property.cdktfStack">CdktfStack</a></code> | <code>github.com/open-constructs/cdk-terrain-go/cdktn.TerraformStack</code> | *No description.* |
| <code><a href="#@cdktn/provider-cloudflare.zeroTrustCasbFindingType.ZeroTrustCasbFindingType.property.fqn">Fqn</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktn/provider-cloudflare.zeroTrustCasbFindingType.ZeroTrustCasbFindingType.property.friendlyUniqueId">FriendlyUniqueId</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktn/provider-cloudflare.zeroTrustCasbFindingType.ZeroTrustCasbFindingType.property.terraformMetaArguments">TerraformMetaArguments</a></code> | <code>*map[string]interface{}</code> | *No description.* |
| <code><a href="#@cdktn/provider-cloudflare.zeroTrustCasbFindingType.ZeroTrustCasbFindingType.property.terraformResourceType">TerraformResourceType</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktn/provider-cloudflare.zeroTrustCasbFindingType.ZeroTrustCasbFindingType.property.terraformGeneratorMetadata">TerraformGeneratorMetadata</a></code> | <code>github.com/open-constructs/cdk-terrain-go/cdktn.TerraformProviderGeneratorMetadata</code> | *No description.* |
| <code><a href="#@cdktn/provider-cloudflare.zeroTrustCasbFindingType.ZeroTrustCasbFindingType.property.connection">Connection</a></code> | <code>interface{}</code> | *No description.* |
| <code><a href="#@cdktn/provider-cloudflare.zeroTrustCasbFindingType.ZeroTrustCasbFindingType.property.count">Count</a></code> | <code>interface{}</code> | *No description.* |
| <code><a href="#@cdktn/provider-cloudflare.zeroTrustCasbFindingType.ZeroTrustCasbFindingType.property.dependsOn">DependsOn</a></code> | <code>*[]*string</code> | *No description.* |
| <code><a href="#@cdktn/provider-cloudflare.zeroTrustCasbFindingType.ZeroTrustCasbFindingType.property.forEach">ForEach</a></code> | <code>github.com/open-constructs/cdk-terrain-go/cdktn.ITerraformIterator</code> | *No description.* |
| <code><a href="#@cdktn/provider-cloudflare.zeroTrustCasbFindingType.ZeroTrustCasbFindingType.property.lifecycle">Lifecycle</a></code> | <code>github.com/open-constructs/cdk-terrain-go/cdktn.TerraformResourceLifecycle</code> | *No description.* |
| <code><a href="#@cdktn/provider-cloudflare.zeroTrustCasbFindingType.ZeroTrustCasbFindingType.property.provider">Provider</a></code> | <code>github.com/open-constructs/cdk-terrain-go/cdktn.TerraformProvider</code> | *No description.* |
| <code><a href="#@cdktn/provider-cloudflare.zeroTrustCasbFindingType.ZeroTrustCasbFindingType.property.provisioners">Provisioners</a></code> | <code>*[]interface{}</code> | *No description.* |
| <code><a href="#@cdktn/provider-cloudflare.zeroTrustCasbFindingType.ZeroTrustCasbFindingType.property.category">Category</a></code> | <code><a href="#@cdktn/provider-cloudflare.zeroTrustCasbFindingType.ZeroTrustCasbFindingTypeCategoryOutputReference">ZeroTrustCasbFindingTypeCategoryOutputReference</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-cloudflare.zeroTrustCasbFindingType.ZeroTrustCasbFindingType.property.createdAt">CreatedAt</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktn/provider-cloudflare.zeroTrustCasbFindingType.ZeroTrustCasbFindingType.property.id">Id</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktn/provider-cloudflare.zeroTrustCasbFindingType.ZeroTrustCasbFindingType.property.matchCount">MatchCount</a></code> | <code>*f64</code> | *No description.* |
| <code><a href="#@cdktn/provider-cloudflare.zeroTrustCasbFindingType.ZeroTrustCasbFindingType.property.origin">Origin</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktn/provider-cloudflare.zeroTrustCasbFindingType.ZeroTrustCasbFindingType.property.quarantined">Quarantined</a></code> | <code>github.com/open-constructs/cdk-terrain-go/cdktn.IResolvable</code> | *No description.* |
| <code><a href="#@cdktn/provider-cloudflare.zeroTrustCasbFindingType.ZeroTrustCasbFindingType.property.updatedAt">UpdatedAt</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktn/provider-cloudflare.zeroTrustCasbFindingType.ZeroTrustCasbFindingType.property.vendor">Vendor</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktn/provider-cloudflare.zeroTrustCasbFindingType.ZeroTrustCasbFindingType.property.version">Version</a></code> | <code>*f64</code> | *No description.* |
| <code><a href="#@cdktn/provider-cloudflare.zeroTrustCasbFindingType.ZeroTrustCasbFindingType.property.accountIdInput">AccountIdInput</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktn/provider-cloudflare.zeroTrustCasbFindingType.ZeroTrustCasbFindingType.property.appliesToAllIntegrationsInput">AppliesToAllIntegrationsInput</a></code> | <code>interface{}</code> | *No description.* |
| <code><a href="#@cdktn/provider-cloudflare.zeroTrustCasbFindingType.ZeroTrustCasbFindingType.property.assetClassInput">AssetClassInput</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktn/provider-cloudflare.zeroTrustCasbFindingType.ZeroTrustCasbFindingType.property.assetVendorInput">AssetVendorInput</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktn/provider-cloudflare.zeroTrustCasbFindingType.ZeroTrustCasbFindingType.property.descriptionInput">DescriptionInput</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktn/provider-cloudflare.zeroTrustCasbFindingType.ZeroTrustCasbFindingType.property.expressionInput">ExpressionInput</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktn/provider-cloudflare.zeroTrustCasbFindingType.ZeroTrustCasbFindingType.property.integrationIdsInput">IntegrationIdsInput</a></code> | <code>*[]*string</code> | *No description.* |
| <code><a href="#@cdktn/provider-cloudflare.zeroTrustCasbFindingType.ZeroTrustCasbFindingType.property.nameInput">NameInput</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktn/provider-cloudflare.zeroTrustCasbFindingType.ZeroTrustCasbFindingType.property.severityInput">SeverityInput</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktn/provider-cloudflare.zeroTrustCasbFindingType.ZeroTrustCasbFindingType.property.accountId">AccountId</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktn/provider-cloudflare.zeroTrustCasbFindingType.ZeroTrustCasbFindingType.property.appliesToAllIntegrations">AppliesToAllIntegrations</a></code> | <code>interface{}</code> | *No description.* |
| <code><a href="#@cdktn/provider-cloudflare.zeroTrustCasbFindingType.ZeroTrustCasbFindingType.property.assetClass">AssetClass</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktn/provider-cloudflare.zeroTrustCasbFindingType.ZeroTrustCasbFindingType.property.assetVendor">AssetVendor</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktn/provider-cloudflare.zeroTrustCasbFindingType.ZeroTrustCasbFindingType.property.description">Description</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktn/provider-cloudflare.zeroTrustCasbFindingType.ZeroTrustCasbFindingType.property.expression">Expression</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktn/provider-cloudflare.zeroTrustCasbFindingType.ZeroTrustCasbFindingType.property.integrationIds">IntegrationIds</a></code> | <code>*[]*string</code> | *No description.* |
| <code><a href="#@cdktn/provider-cloudflare.zeroTrustCasbFindingType.ZeroTrustCasbFindingType.property.name">Name</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktn/provider-cloudflare.zeroTrustCasbFindingType.ZeroTrustCasbFindingType.property.severity">Severity</a></code> | <code>*string</code> | *No description.* |

---

##### `Node`<sup>Required</sup> <a name="Node" id="@cdktn/provider-cloudflare.zeroTrustCasbFindingType.ZeroTrustCasbFindingType.property.node"></a>

```go
func Node() Node
```

- *Type:* github.com/aws/constructs-go/constructs/v10.Node

The tree node.

---

##### `CdktfStack`<sup>Required</sup> <a name="CdktfStack" id="@cdktn/provider-cloudflare.zeroTrustCasbFindingType.ZeroTrustCasbFindingType.property.cdktfStack"></a>

```go
func CdktfStack() TerraformStack
```

- *Type:* github.com/open-constructs/cdk-terrain-go/cdktn.TerraformStack

---

##### `Fqn`<sup>Required</sup> <a name="Fqn" id="@cdktn/provider-cloudflare.zeroTrustCasbFindingType.ZeroTrustCasbFindingType.property.fqn"></a>

```go
func Fqn() *string
```

- *Type:* *string

---

##### `FriendlyUniqueId`<sup>Required</sup> <a name="FriendlyUniqueId" id="@cdktn/provider-cloudflare.zeroTrustCasbFindingType.ZeroTrustCasbFindingType.property.friendlyUniqueId"></a>

```go
func FriendlyUniqueId() *string
```

- *Type:* *string

---

##### `TerraformMetaArguments`<sup>Required</sup> <a name="TerraformMetaArguments" id="@cdktn/provider-cloudflare.zeroTrustCasbFindingType.ZeroTrustCasbFindingType.property.terraformMetaArguments"></a>

```go
func TerraformMetaArguments() *map[string]interface{}
```

- *Type:* *map[string]interface{}

---

##### `TerraformResourceType`<sup>Required</sup> <a name="TerraformResourceType" id="@cdktn/provider-cloudflare.zeroTrustCasbFindingType.ZeroTrustCasbFindingType.property.terraformResourceType"></a>

```go
func TerraformResourceType() *string
```

- *Type:* *string

---

##### `TerraformGeneratorMetadata`<sup>Optional</sup> <a name="TerraformGeneratorMetadata" id="@cdktn/provider-cloudflare.zeroTrustCasbFindingType.ZeroTrustCasbFindingType.property.terraformGeneratorMetadata"></a>

```go
func TerraformGeneratorMetadata() TerraformProviderGeneratorMetadata
```

- *Type:* github.com/open-constructs/cdk-terrain-go/cdktn.TerraformProviderGeneratorMetadata

---

##### `Connection`<sup>Optional</sup> <a name="Connection" id="@cdktn/provider-cloudflare.zeroTrustCasbFindingType.ZeroTrustCasbFindingType.property.connection"></a>

```go
func Connection() interface{}
```

- *Type:* interface{}

---

##### `Count`<sup>Optional</sup> <a name="Count" id="@cdktn/provider-cloudflare.zeroTrustCasbFindingType.ZeroTrustCasbFindingType.property.count"></a>

```go
func Count() interface{}
```

- *Type:* interface{}

---

##### `DependsOn`<sup>Optional</sup> <a name="DependsOn" id="@cdktn/provider-cloudflare.zeroTrustCasbFindingType.ZeroTrustCasbFindingType.property.dependsOn"></a>

```go
func DependsOn() *[]*string
```

- *Type:* *[]*string

---

##### `ForEach`<sup>Optional</sup> <a name="ForEach" id="@cdktn/provider-cloudflare.zeroTrustCasbFindingType.ZeroTrustCasbFindingType.property.forEach"></a>

```go
func ForEach() ITerraformIterator
```

- *Type:* github.com/open-constructs/cdk-terrain-go/cdktn.ITerraformIterator

---

##### `Lifecycle`<sup>Optional</sup> <a name="Lifecycle" id="@cdktn/provider-cloudflare.zeroTrustCasbFindingType.ZeroTrustCasbFindingType.property.lifecycle"></a>

```go
func Lifecycle() TerraformResourceLifecycle
```

- *Type:* github.com/open-constructs/cdk-terrain-go/cdktn.TerraformResourceLifecycle

---

##### `Provider`<sup>Optional</sup> <a name="Provider" id="@cdktn/provider-cloudflare.zeroTrustCasbFindingType.ZeroTrustCasbFindingType.property.provider"></a>

```go
func Provider() TerraformProvider
```

- *Type:* github.com/open-constructs/cdk-terrain-go/cdktn.TerraformProvider

---

##### `Provisioners`<sup>Optional</sup> <a name="Provisioners" id="@cdktn/provider-cloudflare.zeroTrustCasbFindingType.ZeroTrustCasbFindingType.property.provisioners"></a>

```go
func Provisioners() *[]interface{}
```

- *Type:* *[]interface{}

---

##### `Category`<sup>Required</sup> <a name="Category" id="@cdktn/provider-cloudflare.zeroTrustCasbFindingType.ZeroTrustCasbFindingType.property.category"></a>

```go
func Category() ZeroTrustCasbFindingTypeCategoryOutputReference
```

- *Type:* <a href="#@cdktn/provider-cloudflare.zeroTrustCasbFindingType.ZeroTrustCasbFindingTypeCategoryOutputReference">ZeroTrustCasbFindingTypeCategoryOutputReference</a>

---

##### `CreatedAt`<sup>Required</sup> <a name="CreatedAt" id="@cdktn/provider-cloudflare.zeroTrustCasbFindingType.ZeroTrustCasbFindingType.property.createdAt"></a>

```go
func CreatedAt() *string
```

- *Type:* *string

---

##### `Id`<sup>Required</sup> <a name="Id" id="@cdktn/provider-cloudflare.zeroTrustCasbFindingType.ZeroTrustCasbFindingType.property.id"></a>

```go
func Id() *string
```

- *Type:* *string

---

##### `MatchCount`<sup>Required</sup> <a name="MatchCount" id="@cdktn/provider-cloudflare.zeroTrustCasbFindingType.ZeroTrustCasbFindingType.property.matchCount"></a>

```go
func MatchCount() *f64
```

- *Type:* *f64

---

##### `Origin`<sup>Required</sup> <a name="Origin" id="@cdktn/provider-cloudflare.zeroTrustCasbFindingType.ZeroTrustCasbFindingType.property.origin"></a>

```go
func Origin() *string
```

- *Type:* *string

---

##### `Quarantined`<sup>Required</sup> <a name="Quarantined" id="@cdktn/provider-cloudflare.zeroTrustCasbFindingType.ZeroTrustCasbFindingType.property.quarantined"></a>

```go
func Quarantined() IResolvable
```

- *Type:* github.com/open-constructs/cdk-terrain-go/cdktn.IResolvable

---

##### `UpdatedAt`<sup>Required</sup> <a name="UpdatedAt" id="@cdktn/provider-cloudflare.zeroTrustCasbFindingType.ZeroTrustCasbFindingType.property.updatedAt"></a>

```go
func UpdatedAt() *string
```

- *Type:* *string

---

##### `Vendor`<sup>Required</sup> <a name="Vendor" id="@cdktn/provider-cloudflare.zeroTrustCasbFindingType.ZeroTrustCasbFindingType.property.vendor"></a>

```go
func Vendor() *string
```

- *Type:* *string

---

##### `Version`<sup>Required</sup> <a name="Version" id="@cdktn/provider-cloudflare.zeroTrustCasbFindingType.ZeroTrustCasbFindingType.property.version"></a>

```go
func Version() *f64
```

- *Type:* *f64

---

##### `AccountIdInput`<sup>Optional</sup> <a name="AccountIdInput" id="@cdktn/provider-cloudflare.zeroTrustCasbFindingType.ZeroTrustCasbFindingType.property.accountIdInput"></a>

```go
func AccountIdInput() *string
```

- *Type:* *string

---

##### `AppliesToAllIntegrationsInput`<sup>Optional</sup> <a name="AppliesToAllIntegrationsInput" id="@cdktn/provider-cloudflare.zeroTrustCasbFindingType.ZeroTrustCasbFindingType.property.appliesToAllIntegrationsInput"></a>

```go
func AppliesToAllIntegrationsInput() interface{}
```

- *Type:* interface{}

---

##### `AssetClassInput`<sup>Optional</sup> <a name="AssetClassInput" id="@cdktn/provider-cloudflare.zeroTrustCasbFindingType.ZeroTrustCasbFindingType.property.assetClassInput"></a>

```go
func AssetClassInput() *string
```

- *Type:* *string

---

##### `AssetVendorInput`<sup>Optional</sup> <a name="AssetVendorInput" id="@cdktn/provider-cloudflare.zeroTrustCasbFindingType.ZeroTrustCasbFindingType.property.assetVendorInput"></a>

```go
func AssetVendorInput() *string
```

- *Type:* *string

---

##### `DescriptionInput`<sup>Optional</sup> <a name="DescriptionInput" id="@cdktn/provider-cloudflare.zeroTrustCasbFindingType.ZeroTrustCasbFindingType.property.descriptionInput"></a>

```go
func DescriptionInput() *string
```

- *Type:* *string

---

##### `ExpressionInput`<sup>Optional</sup> <a name="ExpressionInput" id="@cdktn/provider-cloudflare.zeroTrustCasbFindingType.ZeroTrustCasbFindingType.property.expressionInput"></a>

```go
func ExpressionInput() *string
```

- *Type:* *string

---

##### `IntegrationIdsInput`<sup>Optional</sup> <a name="IntegrationIdsInput" id="@cdktn/provider-cloudflare.zeroTrustCasbFindingType.ZeroTrustCasbFindingType.property.integrationIdsInput"></a>

```go
func IntegrationIdsInput() *[]*string
```

- *Type:* *[]*string

---

##### `NameInput`<sup>Optional</sup> <a name="NameInput" id="@cdktn/provider-cloudflare.zeroTrustCasbFindingType.ZeroTrustCasbFindingType.property.nameInput"></a>

```go
func NameInput() *string
```

- *Type:* *string

---

##### `SeverityInput`<sup>Optional</sup> <a name="SeverityInput" id="@cdktn/provider-cloudflare.zeroTrustCasbFindingType.ZeroTrustCasbFindingType.property.severityInput"></a>

```go
func SeverityInput() *string
```

- *Type:* *string

---

##### `AccountId`<sup>Required</sup> <a name="AccountId" id="@cdktn/provider-cloudflare.zeroTrustCasbFindingType.ZeroTrustCasbFindingType.property.accountId"></a>

```go
func AccountId() *string
```

- *Type:* *string

---

##### `AppliesToAllIntegrations`<sup>Required</sup> <a name="AppliesToAllIntegrations" id="@cdktn/provider-cloudflare.zeroTrustCasbFindingType.ZeroTrustCasbFindingType.property.appliesToAllIntegrations"></a>

```go
func AppliesToAllIntegrations() interface{}
```

- *Type:* interface{}

---

##### `AssetClass`<sup>Required</sup> <a name="AssetClass" id="@cdktn/provider-cloudflare.zeroTrustCasbFindingType.ZeroTrustCasbFindingType.property.assetClass"></a>

```go
func AssetClass() *string
```

- *Type:* *string

---

##### `AssetVendor`<sup>Required</sup> <a name="AssetVendor" id="@cdktn/provider-cloudflare.zeroTrustCasbFindingType.ZeroTrustCasbFindingType.property.assetVendor"></a>

```go
func AssetVendor() *string
```

- *Type:* *string

---

##### `Description`<sup>Required</sup> <a name="Description" id="@cdktn/provider-cloudflare.zeroTrustCasbFindingType.ZeroTrustCasbFindingType.property.description"></a>

```go
func Description() *string
```

- *Type:* *string

---

##### `Expression`<sup>Required</sup> <a name="Expression" id="@cdktn/provider-cloudflare.zeroTrustCasbFindingType.ZeroTrustCasbFindingType.property.expression"></a>

```go
func Expression() *string
```

- *Type:* *string

---

##### `IntegrationIds`<sup>Required</sup> <a name="IntegrationIds" id="@cdktn/provider-cloudflare.zeroTrustCasbFindingType.ZeroTrustCasbFindingType.property.integrationIds"></a>

```go
func IntegrationIds() *[]*string
```

- *Type:* *[]*string

---

##### `Name`<sup>Required</sup> <a name="Name" id="@cdktn/provider-cloudflare.zeroTrustCasbFindingType.ZeroTrustCasbFindingType.property.name"></a>

```go
func Name() *string
```

- *Type:* *string

---

##### `Severity`<sup>Required</sup> <a name="Severity" id="@cdktn/provider-cloudflare.zeroTrustCasbFindingType.ZeroTrustCasbFindingType.property.severity"></a>

```go
func Severity() *string
```

- *Type:* *string

---

#### Constants <a name="Constants" id="Constants"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-cloudflare.zeroTrustCasbFindingType.ZeroTrustCasbFindingType.property.tfResourceType">TfResourceType</a></code> | <code>*string</code> | *No description.* |

---

##### `TfResourceType`<sup>Required</sup> <a name="TfResourceType" id="@cdktn/provider-cloudflare.zeroTrustCasbFindingType.ZeroTrustCasbFindingType.property.tfResourceType"></a>

```go
func TfResourceType() *string
```

- *Type:* *string

---

## Structs <a name="Structs" id="Structs"></a>

### ZeroTrustCasbFindingTypeCategory <a name="ZeroTrustCasbFindingTypeCategory" id="@cdktn/provider-cloudflare.zeroTrustCasbFindingType.ZeroTrustCasbFindingTypeCategory"></a>

#### Initializer <a name="Initializer" id="@cdktn/provider-cloudflare.zeroTrustCasbFindingType.ZeroTrustCasbFindingTypeCategory.Initializer"></a>

```go
import "github.com/cdktn-io/cdktn-provider-cloudflare-go/cloudflare/v17/zerotrustcasbfindingtype"

&zerotrustcasbfindingtype.ZeroTrustCasbFindingTypeCategory {

}
```


### ZeroTrustCasbFindingTypeConfig <a name="ZeroTrustCasbFindingTypeConfig" id="@cdktn/provider-cloudflare.zeroTrustCasbFindingType.ZeroTrustCasbFindingTypeConfig"></a>

#### Initializer <a name="Initializer" id="@cdktn/provider-cloudflare.zeroTrustCasbFindingType.ZeroTrustCasbFindingTypeConfig.Initializer"></a>

```go
import "github.com/cdktn-io/cdktn-provider-cloudflare-go/cloudflare/v17/zerotrustcasbfindingtype"

&zerotrustcasbfindingtype.ZeroTrustCasbFindingTypeConfig {
	Connection: interface{},
	Count: interface{},
	DependsOn: *[]github.com/open-constructs/cdk-terrain-go/cdktn.ITerraformDependable,
	ForEach: github.com/open-constructs/cdk-terrain-go/cdktn.ITerraformIterator,
	Lifecycle: github.com/open-constructs/cdk-terrain-go/cdktn.TerraformResourceLifecycle,
	Provider: github.com/open-constructs/cdk-terrain-go/cdktn.TerraformProvider,
	Provisioners: *[]interface{},
	AccountId: *string,
	AppliesToAllIntegrations: interface{},
	AssetClass: *string,
	AssetVendor: *string,
	Description: *string,
	Expression: *string,
	Name: *string,
	Severity: *string,
	IntegrationIds: *[]*string,
}
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-cloudflare.zeroTrustCasbFindingType.ZeroTrustCasbFindingTypeConfig.property.connection">Connection</a></code> | <code>interface{}</code> | *No description.* |
| <code><a href="#@cdktn/provider-cloudflare.zeroTrustCasbFindingType.ZeroTrustCasbFindingTypeConfig.property.count">Count</a></code> | <code>interface{}</code> | *No description.* |
| <code><a href="#@cdktn/provider-cloudflare.zeroTrustCasbFindingType.ZeroTrustCasbFindingTypeConfig.property.dependsOn">DependsOn</a></code> | <code>*[]github.com/open-constructs/cdk-terrain-go/cdktn.ITerraformDependable</code> | *No description.* |
| <code><a href="#@cdktn/provider-cloudflare.zeroTrustCasbFindingType.ZeroTrustCasbFindingTypeConfig.property.forEach">ForEach</a></code> | <code>github.com/open-constructs/cdk-terrain-go/cdktn.ITerraformIterator</code> | *No description.* |
| <code><a href="#@cdktn/provider-cloudflare.zeroTrustCasbFindingType.ZeroTrustCasbFindingTypeConfig.property.lifecycle">Lifecycle</a></code> | <code>github.com/open-constructs/cdk-terrain-go/cdktn.TerraformResourceLifecycle</code> | *No description.* |
| <code><a href="#@cdktn/provider-cloudflare.zeroTrustCasbFindingType.ZeroTrustCasbFindingTypeConfig.property.provider">Provider</a></code> | <code>github.com/open-constructs/cdk-terrain-go/cdktn.TerraformProvider</code> | *No description.* |
| <code><a href="#@cdktn/provider-cloudflare.zeroTrustCasbFindingType.ZeroTrustCasbFindingTypeConfig.property.provisioners">Provisioners</a></code> | <code>*[]interface{}</code> | *No description.* |
| <code><a href="#@cdktn/provider-cloudflare.zeroTrustCasbFindingType.ZeroTrustCasbFindingTypeConfig.property.accountId">AccountId</a></code> | <code>*string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/cloudflare/cloudflare/5.29.0/docs/resources/zero_trust_casb_finding_type#account_id ZeroTrustCasbFindingType#account_id}. |
| <code><a href="#@cdktn/provider-cloudflare.zeroTrustCasbFindingType.ZeroTrustCasbFindingTypeConfig.property.appliesToAllIntegrations">AppliesToAllIntegrations</a></code> | <code>interface{}</code> | When true, this finding type applies to every current and future integration of the vendor. |
| <code><a href="#@cdktn/provider-cloudflare.zeroTrustCasbFindingType.ZeroTrustCasbFindingTypeConfig.property.assetClass">AssetClass</a></code> | <code>*string</code> | Asset class this finding type applies to (PascalCase, e.g. GoogleWorkspaceFile). |
| <code><a href="#@cdktn/provider-cloudflare.zeroTrustCasbFindingType.ZeroTrustCasbFindingTypeConfig.property.assetVendor">AssetVendor</a></code> | <code>*string</code> | Canonical vendor enum for the platform whose assets this finding type evaluates. |
| <code><a href="#@cdktn/provider-cloudflare.zeroTrustCasbFindingType.ZeroTrustCasbFindingTypeConfig.property.description">Description</a></code> | <code>*string</code> | Human-readable description of the finding type. Cannot be empty. Maximum 4096 characters. |
| <code><a href="#@cdktn/provider-cloudflare.zeroTrustCasbFindingType.ZeroTrustCasbFindingTypeConfig.property.expression">Expression</a></code> | <code>*string</code> | Rego expression body for the policy. |
| <code><a href="#@cdktn/provider-cloudflare.zeroTrustCasbFindingType.ZeroTrustCasbFindingTypeConfig.property.name">Name</a></code> | <code>*string</code> | Human-readable name for the finding type. Maximum 256 characters. |
| <code><a href="#@cdktn/provider-cloudflare.zeroTrustCasbFindingType.ZeroTrustCasbFindingTypeConfig.property.severity">Severity</a></code> | <code>*string</code> | Default severity used when no integration-specific severity override exists. Available values: "Critical", "High", "Medium", "Low". |
| <code><a href="#@cdktn/provider-cloudflare.zeroTrustCasbFindingType.ZeroTrustCasbFindingTypeConfig.property.integrationIds">IntegrationIds</a></code> | <code>*[]*string</code> | Required and non-empty when applies_to_all_integrations is false; omit when it is true. |

---

##### `Connection`<sup>Optional</sup> <a name="Connection" id="@cdktn/provider-cloudflare.zeroTrustCasbFindingType.ZeroTrustCasbFindingTypeConfig.property.connection"></a>

```go
Connection interface{}
```

- *Type:* interface{}

---

##### `Count`<sup>Optional</sup> <a name="Count" id="@cdktn/provider-cloudflare.zeroTrustCasbFindingType.ZeroTrustCasbFindingTypeConfig.property.count"></a>

```go
Count interface{}
```

- *Type:* interface{}

---

##### `DependsOn`<sup>Optional</sup> <a name="DependsOn" id="@cdktn/provider-cloudflare.zeroTrustCasbFindingType.ZeroTrustCasbFindingTypeConfig.property.dependsOn"></a>

```go
DependsOn *[]ITerraformDependable
```

- *Type:* *[]github.com/open-constructs/cdk-terrain-go/cdktn.ITerraformDependable

---

##### `ForEach`<sup>Optional</sup> <a name="ForEach" id="@cdktn/provider-cloudflare.zeroTrustCasbFindingType.ZeroTrustCasbFindingTypeConfig.property.forEach"></a>

```go
ForEach ITerraformIterator
```

- *Type:* github.com/open-constructs/cdk-terrain-go/cdktn.ITerraformIterator

---

##### `Lifecycle`<sup>Optional</sup> <a name="Lifecycle" id="@cdktn/provider-cloudflare.zeroTrustCasbFindingType.ZeroTrustCasbFindingTypeConfig.property.lifecycle"></a>

```go
Lifecycle TerraformResourceLifecycle
```

- *Type:* github.com/open-constructs/cdk-terrain-go/cdktn.TerraformResourceLifecycle

---

##### `Provider`<sup>Optional</sup> <a name="Provider" id="@cdktn/provider-cloudflare.zeroTrustCasbFindingType.ZeroTrustCasbFindingTypeConfig.property.provider"></a>

```go
Provider TerraformProvider
```

- *Type:* github.com/open-constructs/cdk-terrain-go/cdktn.TerraformProvider

---

##### `Provisioners`<sup>Optional</sup> <a name="Provisioners" id="@cdktn/provider-cloudflare.zeroTrustCasbFindingType.ZeroTrustCasbFindingTypeConfig.property.provisioners"></a>

```go
Provisioners *[]interface{}
```

- *Type:* *[]interface{}

---

##### `AccountId`<sup>Required</sup> <a name="AccountId" id="@cdktn/provider-cloudflare.zeroTrustCasbFindingType.ZeroTrustCasbFindingTypeConfig.property.accountId"></a>

```go
AccountId *string
```

- *Type:* *string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/cloudflare/cloudflare/5.29.0/docs/resources/zero_trust_casb_finding_type#account_id ZeroTrustCasbFindingType#account_id}.

---

##### `AppliesToAllIntegrations`<sup>Required</sup> <a name="AppliesToAllIntegrations" id="@cdktn/provider-cloudflare.zeroTrustCasbFindingType.ZeroTrustCasbFindingTypeConfig.property.appliesToAllIntegrations"></a>

```go
AppliesToAllIntegrations interface{}
```

- *Type:* interface{}

When true, this finding type applies to every current and future integration of the vendor.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/cloudflare/cloudflare/5.29.0/docs/resources/zero_trust_casb_finding_type#applies_to_all_integrations ZeroTrustCasbFindingType#applies_to_all_integrations}

---

##### `AssetClass`<sup>Required</sup> <a name="AssetClass" id="@cdktn/provider-cloudflare.zeroTrustCasbFindingType.ZeroTrustCasbFindingTypeConfig.property.assetClass"></a>

```go
AssetClass *string
```

- *Type:* *string

Asset class this finding type applies to (PascalCase, e.g. GoogleWorkspaceFile).

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/cloudflare/cloudflare/5.29.0/docs/resources/zero_trust_casb_finding_type#asset_class ZeroTrustCasbFindingType#asset_class}

---

##### `AssetVendor`<sup>Required</sup> <a name="AssetVendor" id="@cdktn/provider-cloudflare.zeroTrustCasbFindingType.ZeroTrustCasbFindingTypeConfig.property.assetVendor"></a>

```go
AssetVendor *string
```

- *Type:* *string

Canonical vendor enum for the platform whose assets this finding type evaluates.

Available values: "ANTHROPIC", "AWS", "BITBUCKET", "BOX", "CONFLUENCE", "DROPBOX", "GITHUB", "GOOGLE_CLOUD_PLATFORM", "GOOGLE_WORKSPACE", "JIRA", "MICROSOFT", "OPENAI", "SALESFORCE", "SERVICENOW", "SLACK", "ZOOM".

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/cloudflare/cloudflare/5.29.0/docs/resources/zero_trust_casb_finding_type#asset_vendor ZeroTrustCasbFindingType#asset_vendor}

---

##### `Description`<sup>Required</sup> <a name="Description" id="@cdktn/provider-cloudflare.zeroTrustCasbFindingType.ZeroTrustCasbFindingTypeConfig.property.description"></a>

```go
Description *string
```

- *Type:* *string

Human-readable description of the finding type. Cannot be empty. Maximum 4096 characters.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/cloudflare/cloudflare/5.29.0/docs/resources/zero_trust_casb_finding_type#description ZeroTrustCasbFindingType#description}

---

##### `Expression`<sup>Required</sup> <a name="Expression" id="@cdktn/provider-cloudflare.zeroTrustCasbFindingType.ZeroTrustCasbFindingTypeConfig.property.expression"></a>

```go
Expression *string
```

- *Type:* *string

Rego expression body for the policy.

`package cloudflare.casb.custom` and `import rego.v1` are added automatically. Do not include package or import declarations. This field cannot be changed after creation. Maximum 4096 characters.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/cloudflare/cloudflare/5.29.0/docs/resources/zero_trust_casb_finding_type#expression ZeroTrustCasbFindingType#expression}

---

##### `Name`<sup>Required</sup> <a name="Name" id="@cdktn/provider-cloudflare.zeroTrustCasbFindingType.ZeroTrustCasbFindingTypeConfig.property.name"></a>

```go
Name *string
```

- *Type:* *string

Human-readable name for the finding type. Maximum 256 characters.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/cloudflare/cloudflare/5.29.0/docs/resources/zero_trust_casb_finding_type#name ZeroTrustCasbFindingType#name}

---

##### `Severity`<sup>Required</sup> <a name="Severity" id="@cdktn/provider-cloudflare.zeroTrustCasbFindingType.ZeroTrustCasbFindingTypeConfig.property.severity"></a>

```go
Severity *string
```

- *Type:* *string

Default severity used when no integration-specific severity override exists. Available values: "Critical", "High", "Medium", "Low".

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/cloudflare/cloudflare/5.29.0/docs/resources/zero_trust_casb_finding_type#severity ZeroTrustCasbFindingType#severity}

---

##### `IntegrationIds`<sup>Optional</sup> <a name="IntegrationIds" id="@cdktn/provider-cloudflare.zeroTrustCasbFindingType.ZeroTrustCasbFindingTypeConfig.property.integrationIds"></a>

```go
IntegrationIds *[]*string
```

- *Type:* *[]*string

Required and non-empty when applies_to_all_integrations is false; omit when it is true.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/cloudflare/cloudflare/5.29.0/docs/resources/zero_trust_casb_finding_type#integration_ids ZeroTrustCasbFindingType#integration_ids}

---

## Classes <a name="Classes" id="Classes"></a>

### ZeroTrustCasbFindingTypeCategoryOutputReference <a name="ZeroTrustCasbFindingTypeCategoryOutputReference" id="@cdktn/provider-cloudflare.zeroTrustCasbFindingType.ZeroTrustCasbFindingTypeCategoryOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktn/provider-cloudflare.zeroTrustCasbFindingType.ZeroTrustCasbFindingTypeCategoryOutputReference.Initializer"></a>

```go
import "github.com/cdktn-io/cdktn-provider-cloudflare-go/cloudflare/v17/zerotrustcasbfindingtype"

zerotrustcasbfindingtype.NewZeroTrustCasbFindingTypeCategoryOutputReference(terraformResource IInterpolatingParent, terraformAttribute *string) ZeroTrustCasbFindingTypeCategoryOutputReference
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-cloudflare.zeroTrustCasbFindingType.ZeroTrustCasbFindingTypeCategoryOutputReference.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>github.com/open-constructs/cdk-terrain-go/cdktn.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktn/provider-cloudflare.zeroTrustCasbFindingType.ZeroTrustCasbFindingTypeCategoryOutputReference.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>*string</code> | The attribute on the parent resource this class is referencing. |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktn/provider-cloudflare.zeroTrustCasbFindingType.ZeroTrustCasbFindingTypeCategoryOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* github.com/open-constructs/cdk-terrain-go/cdktn.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-cloudflare.zeroTrustCasbFindingType.ZeroTrustCasbFindingTypeCategoryOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* *string

The attribute on the parent resource this class is referencing.

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-cloudflare.zeroTrustCasbFindingType.ZeroTrustCasbFindingTypeCategoryOutputReference.computeFqn">ComputeFqn</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-cloudflare.zeroTrustCasbFindingType.ZeroTrustCasbFindingTypeCategoryOutputReference.getAnyMapAttribute">GetAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-cloudflare.zeroTrustCasbFindingType.ZeroTrustCasbFindingTypeCategoryOutputReference.getBooleanAttribute">GetBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-cloudflare.zeroTrustCasbFindingType.ZeroTrustCasbFindingTypeCategoryOutputReference.getBooleanMapAttribute">GetBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-cloudflare.zeroTrustCasbFindingType.ZeroTrustCasbFindingTypeCategoryOutputReference.getListAttribute">GetListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-cloudflare.zeroTrustCasbFindingType.ZeroTrustCasbFindingTypeCategoryOutputReference.getNumberAttribute">GetNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-cloudflare.zeroTrustCasbFindingType.ZeroTrustCasbFindingTypeCategoryOutputReference.getNumberListAttribute">GetNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-cloudflare.zeroTrustCasbFindingType.ZeroTrustCasbFindingTypeCategoryOutputReference.getNumberMapAttribute">GetNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-cloudflare.zeroTrustCasbFindingType.ZeroTrustCasbFindingTypeCategoryOutputReference.getStringAttribute">GetStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-cloudflare.zeroTrustCasbFindingType.ZeroTrustCasbFindingTypeCategoryOutputReference.getStringMapAttribute">GetStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-cloudflare.zeroTrustCasbFindingType.ZeroTrustCasbFindingTypeCategoryOutputReference.interpolationForAttribute">InterpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-cloudflare.zeroTrustCasbFindingType.ZeroTrustCasbFindingTypeCategoryOutputReference.resolve">Resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktn/provider-cloudflare.zeroTrustCasbFindingType.ZeroTrustCasbFindingTypeCategoryOutputReference.toString">ToString</a></code> | Return a string representation of this resolvable object. |

---

##### `ComputeFqn` <a name="ComputeFqn" id="@cdktn/provider-cloudflare.zeroTrustCasbFindingType.ZeroTrustCasbFindingTypeCategoryOutputReference.computeFqn"></a>

```go
func ComputeFqn() *string
```

##### `GetAnyMapAttribute` <a name="GetAnyMapAttribute" id="@cdktn/provider-cloudflare.zeroTrustCasbFindingType.ZeroTrustCasbFindingTypeCategoryOutputReference.getAnyMapAttribute"></a>

```go
func GetAnyMapAttribute(terraformAttribute *string) *map[string]interface{}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-cloudflare.zeroTrustCasbFindingType.ZeroTrustCasbFindingTypeCategoryOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetBooleanAttribute` <a name="GetBooleanAttribute" id="@cdktn/provider-cloudflare.zeroTrustCasbFindingType.ZeroTrustCasbFindingTypeCategoryOutputReference.getBooleanAttribute"></a>

```go
func GetBooleanAttribute(terraformAttribute *string) IResolvable
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-cloudflare.zeroTrustCasbFindingType.ZeroTrustCasbFindingTypeCategoryOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetBooleanMapAttribute` <a name="GetBooleanMapAttribute" id="@cdktn/provider-cloudflare.zeroTrustCasbFindingType.ZeroTrustCasbFindingTypeCategoryOutputReference.getBooleanMapAttribute"></a>

```go
func GetBooleanMapAttribute(terraformAttribute *string) *map[string]*bool
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-cloudflare.zeroTrustCasbFindingType.ZeroTrustCasbFindingTypeCategoryOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetListAttribute` <a name="GetListAttribute" id="@cdktn/provider-cloudflare.zeroTrustCasbFindingType.ZeroTrustCasbFindingTypeCategoryOutputReference.getListAttribute"></a>

```go
func GetListAttribute(terraformAttribute *string) *[]*string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-cloudflare.zeroTrustCasbFindingType.ZeroTrustCasbFindingTypeCategoryOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberAttribute` <a name="GetNumberAttribute" id="@cdktn/provider-cloudflare.zeroTrustCasbFindingType.ZeroTrustCasbFindingTypeCategoryOutputReference.getNumberAttribute"></a>

```go
func GetNumberAttribute(terraformAttribute *string) *f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-cloudflare.zeroTrustCasbFindingType.ZeroTrustCasbFindingTypeCategoryOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberListAttribute` <a name="GetNumberListAttribute" id="@cdktn/provider-cloudflare.zeroTrustCasbFindingType.ZeroTrustCasbFindingTypeCategoryOutputReference.getNumberListAttribute"></a>

```go
func GetNumberListAttribute(terraformAttribute *string) *[]*f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-cloudflare.zeroTrustCasbFindingType.ZeroTrustCasbFindingTypeCategoryOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberMapAttribute` <a name="GetNumberMapAttribute" id="@cdktn/provider-cloudflare.zeroTrustCasbFindingType.ZeroTrustCasbFindingTypeCategoryOutputReference.getNumberMapAttribute"></a>

```go
func GetNumberMapAttribute(terraformAttribute *string) *map[string]*f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-cloudflare.zeroTrustCasbFindingType.ZeroTrustCasbFindingTypeCategoryOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetStringAttribute` <a name="GetStringAttribute" id="@cdktn/provider-cloudflare.zeroTrustCasbFindingType.ZeroTrustCasbFindingTypeCategoryOutputReference.getStringAttribute"></a>

```go
func GetStringAttribute(terraformAttribute *string) *string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-cloudflare.zeroTrustCasbFindingType.ZeroTrustCasbFindingTypeCategoryOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetStringMapAttribute` <a name="GetStringMapAttribute" id="@cdktn/provider-cloudflare.zeroTrustCasbFindingType.ZeroTrustCasbFindingTypeCategoryOutputReference.getStringMapAttribute"></a>

```go
func GetStringMapAttribute(terraformAttribute *string) *map[string]*string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-cloudflare.zeroTrustCasbFindingType.ZeroTrustCasbFindingTypeCategoryOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `InterpolationForAttribute` <a name="InterpolationForAttribute" id="@cdktn/provider-cloudflare.zeroTrustCasbFindingType.ZeroTrustCasbFindingTypeCategoryOutputReference.interpolationForAttribute"></a>

```go
func InterpolationForAttribute(property *string) IResolvable
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktn/provider-cloudflare.zeroTrustCasbFindingType.ZeroTrustCasbFindingTypeCategoryOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* *string

---

##### `Resolve` <a name="Resolve" id="@cdktn/provider-cloudflare.zeroTrustCasbFindingType.ZeroTrustCasbFindingTypeCategoryOutputReference.resolve"></a>

```go
func Resolve(_context IResolveContext) interface{}
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktn/provider-cloudflare.zeroTrustCasbFindingType.ZeroTrustCasbFindingTypeCategoryOutputReference.resolve.parameter._context"></a>

- *Type:* github.com/open-constructs/cdk-terrain-go/cdktn.IResolveContext

---

##### `ToString` <a name="ToString" id="@cdktn/provider-cloudflare.zeroTrustCasbFindingType.ZeroTrustCasbFindingTypeCategoryOutputReference.toString"></a>

```go
func ToString() *string
```

Return a string representation of this resolvable object.

Returns a reversible string representation.


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-cloudflare.zeroTrustCasbFindingType.ZeroTrustCasbFindingTypeCategoryOutputReference.property.creationStack">CreationStack</a></code> | <code>*[]*string</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktn/provider-cloudflare.zeroTrustCasbFindingType.ZeroTrustCasbFindingTypeCategoryOutputReference.property.fqn">Fqn</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktn/provider-cloudflare.zeroTrustCasbFindingType.ZeroTrustCasbFindingTypeCategoryOutputReference.property.observation">Observation</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktn/provider-cloudflare.zeroTrustCasbFindingType.ZeroTrustCasbFindingTypeCategoryOutputReference.property.product">Product</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktn/provider-cloudflare.zeroTrustCasbFindingType.ZeroTrustCasbFindingTypeCategoryOutputReference.property.type">Type</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktn/provider-cloudflare.zeroTrustCasbFindingType.ZeroTrustCasbFindingTypeCategoryOutputReference.property.internalValue">InternalValue</a></code> | <code><a href="#@cdktn/provider-cloudflare.zeroTrustCasbFindingType.ZeroTrustCasbFindingTypeCategory">ZeroTrustCasbFindingTypeCategory</a></code> | *No description.* |

---

##### `CreationStack`<sup>Required</sup> <a name="CreationStack" id="@cdktn/provider-cloudflare.zeroTrustCasbFindingType.ZeroTrustCasbFindingTypeCategoryOutputReference.property.creationStack"></a>

```go
func CreationStack() *[]*string
```

- *Type:* *[]*string

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `Fqn`<sup>Required</sup> <a name="Fqn" id="@cdktn/provider-cloudflare.zeroTrustCasbFindingType.ZeroTrustCasbFindingTypeCategoryOutputReference.property.fqn"></a>

```go
func Fqn() *string
```

- *Type:* *string

---

##### `Observation`<sup>Required</sup> <a name="Observation" id="@cdktn/provider-cloudflare.zeroTrustCasbFindingType.ZeroTrustCasbFindingTypeCategoryOutputReference.property.observation"></a>

```go
func Observation() *string
```

- *Type:* *string

---

##### `Product`<sup>Required</sup> <a name="Product" id="@cdktn/provider-cloudflare.zeroTrustCasbFindingType.ZeroTrustCasbFindingTypeCategoryOutputReference.property.product"></a>

```go
func Product() *string
```

- *Type:* *string

---

##### `Type`<sup>Required</sup> <a name="Type" id="@cdktn/provider-cloudflare.zeroTrustCasbFindingType.ZeroTrustCasbFindingTypeCategoryOutputReference.property.type"></a>

```go
func Type() *string
```

- *Type:* *string

---

##### `InternalValue`<sup>Optional</sup> <a name="InternalValue" id="@cdktn/provider-cloudflare.zeroTrustCasbFindingType.ZeroTrustCasbFindingTypeCategoryOutputReference.property.internalValue"></a>

```go
func InternalValue() ZeroTrustCasbFindingTypeCategory
```

- *Type:* <a href="#@cdktn/provider-cloudflare.zeroTrustCasbFindingType.ZeroTrustCasbFindingTypeCategory">ZeroTrustCasbFindingTypeCategory</a>

---



