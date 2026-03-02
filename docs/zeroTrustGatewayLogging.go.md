# `zeroTrustGatewayLogging` Submodule <a name="`zeroTrustGatewayLogging` Submodule" id="@cdktn/provider-cloudflare.zeroTrustGatewayLogging"></a>

## Constructs <a name="Constructs" id="Constructs"></a>

### ZeroTrustGatewayLogging <a name="ZeroTrustGatewayLogging" id="@cdktn/provider-cloudflare.zeroTrustGatewayLogging.ZeroTrustGatewayLogging"></a>

Represents a {@link https://registry.terraform.io/providers/cloudflare/cloudflare/5.18.0/docs/resources/zero_trust_gateway_logging cloudflare_zero_trust_gateway_logging}.

#### Initializers <a name="Initializers" id="@cdktn/provider-cloudflare.zeroTrustGatewayLogging.ZeroTrustGatewayLogging.Initializer"></a>

```go
import "github.com/cdktn-io/cdktn-provider-cloudflare-go/cloudflare/v14/zerotrustgatewaylogging"

zerotrustgatewaylogging.NewZeroTrustGatewayLogging(scope Construct, id *string, config ZeroTrustGatewayLoggingConfig) ZeroTrustGatewayLogging
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-cloudflare.zeroTrustGatewayLogging.ZeroTrustGatewayLogging.Initializer.parameter.scope">scope</a></code> | <code>github.com/aws/constructs-go/constructs/v10.Construct</code> | The scope in which to define this construct. |
| <code><a href="#@cdktn/provider-cloudflare.zeroTrustGatewayLogging.ZeroTrustGatewayLogging.Initializer.parameter.id">id</a></code> | <code>*string</code> | The scoped construct ID. |
| <code><a href="#@cdktn/provider-cloudflare.zeroTrustGatewayLogging.ZeroTrustGatewayLogging.Initializer.parameter.config">config</a></code> | <code><a href="#@cdktn/provider-cloudflare.zeroTrustGatewayLogging.ZeroTrustGatewayLoggingConfig">ZeroTrustGatewayLoggingConfig</a></code> | *No description.* |

---

##### `scope`<sup>Required</sup> <a name="scope" id="@cdktn/provider-cloudflare.zeroTrustGatewayLogging.ZeroTrustGatewayLogging.Initializer.parameter.scope"></a>

- *Type:* github.com/aws/constructs-go/constructs/v10.Construct

The scope in which to define this construct.

---

##### `id`<sup>Required</sup> <a name="id" id="@cdktn/provider-cloudflare.zeroTrustGatewayLogging.ZeroTrustGatewayLogging.Initializer.parameter.id"></a>

- *Type:* *string

The scoped construct ID.

Must be unique amongst siblings in the same scope

---

##### `config`<sup>Required</sup> <a name="config" id="@cdktn/provider-cloudflare.zeroTrustGatewayLogging.ZeroTrustGatewayLogging.Initializer.parameter.config"></a>

- *Type:* <a href="#@cdktn/provider-cloudflare.zeroTrustGatewayLogging.ZeroTrustGatewayLoggingConfig">ZeroTrustGatewayLoggingConfig</a>

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-cloudflare.zeroTrustGatewayLogging.ZeroTrustGatewayLogging.toString">ToString</a></code> | Returns a string representation of this construct. |
| <code><a href="#@cdktn/provider-cloudflare.zeroTrustGatewayLogging.ZeroTrustGatewayLogging.with">With</a></code> | Applies one or more mixins to this construct. |
| <code><a href="#@cdktn/provider-cloudflare.zeroTrustGatewayLogging.ZeroTrustGatewayLogging.addOverride">AddOverride</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-cloudflare.zeroTrustGatewayLogging.ZeroTrustGatewayLogging.overrideLogicalId">OverrideLogicalId</a></code> | Overrides the auto-generated logical ID with a specific ID. |
| <code><a href="#@cdktn/provider-cloudflare.zeroTrustGatewayLogging.ZeroTrustGatewayLogging.resetOverrideLogicalId">ResetOverrideLogicalId</a></code> | Resets a previously passed logical Id to use the auto-generated logical id again. |
| <code><a href="#@cdktn/provider-cloudflare.zeroTrustGatewayLogging.ZeroTrustGatewayLogging.toHclTerraform">ToHclTerraform</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-cloudflare.zeroTrustGatewayLogging.ZeroTrustGatewayLogging.toMetadata">ToMetadata</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-cloudflare.zeroTrustGatewayLogging.ZeroTrustGatewayLogging.toTerraform">ToTerraform</a></code> | Adds this resource to the terraform JSON output. |
| <code><a href="#@cdktn/provider-cloudflare.zeroTrustGatewayLogging.ZeroTrustGatewayLogging.addMoveTarget">AddMoveTarget</a></code> | Adds a user defined moveTarget string to this resource to be later used in .moveTo(moveTarget) to resolve the location of the move. |
| <code><a href="#@cdktn/provider-cloudflare.zeroTrustGatewayLogging.ZeroTrustGatewayLogging.getAnyMapAttribute">GetAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-cloudflare.zeroTrustGatewayLogging.ZeroTrustGatewayLogging.getBooleanAttribute">GetBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-cloudflare.zeroTrustGatewayLogging.ZeroTrustGatewayLogging.getBooleanMapAttribute">GetBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-cloudflare.zeroTrustGatewayLogging.ZeroTrustGatewayLogging.getListAttribute">GetListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-cloudflare.zeroTrustGatewayLogging.ZeroTrustGatewayLogging.getNumberAttribute">GetNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-cloudflare.zeroTrustGatewayLogging.ZeroTrustGatewayLogging.getNumberListAttribute">GetNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-cloudflare.zeroTrustGatewayLogging.ZeroTrustGatewayLogging.getNumberMapAttribute">GetNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-cloudflare.zeroTrustGatewayLogging.ZeroTrustGatewayLogging.getStringAttribute">GetStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-cloudflare.zeroTrustGatewayLogging.ZeroTrustGatewayLogging.getStringMapAttribute">GetStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-cloudflare.zeroTrustGatewayLogging.ZeroTrustGatewayLogging.hasResourceMove">HasResourceMove</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-cloudflare.zeroTrustGatewayLogging.ZeroTrustGatewayLogging.importFrom">ImportFrom</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-cloudflare.zeroTrustGatewayLogging.ZeroTrustGatewayLogging.interpolationForAttribute">InterpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-cloudflare.zeroTrustGatewayLogging.ZeroTrustGatewayLogging.moveFromId">MoveFromId</a></code> | Move the resource corresponding to "id" to this resource. |
| <code><a href="#@cdktn/provider-cloudflare.zeroTrustGatewayLogging.ZeroTrustGatewayLogging.moveTo">MoveTo</a></code> | Moves this resource to the target resource given by moveTarget. |
| <code><a href="#@cdktn/provider-cloudflare.zeroTrustGatewayLogging.ZeroTrustGatewayLogging.moveToId">MoveToId</a></code> | Moves this resource to the resource corresponding to "id". |
| <code><a href="#@cdktn/provider-cloudflare.zeroTrustGatewayLogging.ZeroTrustGatewayLogging.putSettingsByRuleType">PutSettingsByRuleType</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-cloudflare.zeroTrustGatewayLogging.ZeroTrustGatewayLogging.resetRedactPii">ResetRedactPii</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-cloudflare.zeroTrustGatewayLogging.ZeroTrustGatewayLogging.resetSettingsByRuleType">ResetSettingsByRuleType</a></code> | *No description.* |

---

##### `ToString` <a name="ToString" id="@cdktn/provider-cloudflare.zeroTrustGatewayLogging.ZeroTrustGatewayLogging.toString"></a>

```go
func ToString() *string
```

Returns a string representation of this construct.

##### `With` <a name="With" id="@cdktn/provider-cloudflare.zeroTrustGatewayLogging.ZeroTrustGatewayLogging.with"></a>

```go
func With(mixins ...IMixin) IConstruct
```

Applies one or more mixins to this construct.

Mixins are applied in order. The list of constructs is captured at the
start of the call, so constructs added by a mixin will not be visited.
Use multiple `with()` calls if subsequent mixins should apply to added
constructs.

###### `mixins`<sup>Required</sup> <a name="mixins" id="@cdktn/provider-cloudflare.zeroTrustGatewayLogging.ZeroTrustGatewayLogging.with.parameter.mixins"></a>

- *Type:* ...github.com/aws/constructs-go/constructs/v10.IMixin

The mixins to apply.

---

##### `AddOverride` <a name="AddOverride" id="@cdktn/provider-cloudflare.zeroTrustGatewayLogging.ZeroTrustGatewayLogging.addOverride"></a>

```go
func AddOverride(path *string, value interface{})
```

###### `path`<sup>Required</sup> <a name="path" id="@cdktn/provider-cloudflare.zeroTrustGatewayLogging.ZeroTrustGatewayLogging.addOverride.parameter.path"></a>

- *Type:* *string

---

###### `value`<sup>Required</sup> <a name="value" id="@cdktn/provider-cloudflare.zeroTrustGatewayLogging.ZeroTrustGatewayLogging.addOverride.parameter.value"></a>

- *Type:* interface{}

---

##### `OverrideLogicalId` <a name="OverrideLogicalId" id="@cdktn/provider-cloudflare.zeroTrustGatewayLogging.ZeroTrustGatewayLogging.overrideLogicalId"></a>

```go
func OverrideLogicalId(newLogicalId *string)
```

Overrides the auto-generated logical ID with a specific ID.

###### `newLogicalId`<sup>Required</sup> <a name="newLogicalId" id="@cdktn/provider-cloudflare.zeroTrustGatewayLogging.ZeroTrustGatewayLogging.overrideLogicalId.parameter.newLogicalId"></a>

- *Type:* *string

The new logical ID to use for this stack element.

---

##### `ResetOverrideLogicalId` <a name="ResetOverrideLogicalId" id="@cdktn/provider-cloudflare.zeroTrustGatewayLogging.ZeroTrustGatewayLogging.resetOverrideLogicalId"></a>

```go
func ResetOverrideLogicalId()
```

Resets a previously passed logical Id to use the auto-generated logical id again.

##### `ToHclTerraform` <a name="ToHclTerraform" id="@cdktn/provider-cloudflare.zeroTrustGatewayLogging.ZeroTrustGatewayLogging.toHclTerraform"></a>

```go
func ToHclTerraform() interface{}
```

##### `ToMetadata` <a name="ToMetadata" id="@cdktn/provider-cloudflare.zeroTrustGatewayLogging.ZeroTrustGatewayLogging.toMetadata"></a>

```go
func ToMetadata() interface{}
```

##### `ToTerraform` <a name="ToTerraform" id="@cdktn/provider-cloudflare.zeroTrustGatewayLogging.ZeroTrustGatewayLogging.toTerraform"></a>

```go
func ToTerraform() interface{}
```

Adds this resource to the terraform JSON output.

##### `AddMoveTarget` <a name="AddMoveTarget" id="@cdktn/provider-cloudflare.zeroTrustGatewayLogging.ZeroTrustGatewayLogging.addMoveTarget"></a>

```go
func AddMoveTarget(moveTarget *string)
```

Adds a user defined moveTarget string to this resource to be later used in .moveTo(moveTarget) to resolve the location of the move.

###### `moveTarget`<sup>Required</sup> <a name="moveTarget" id="@cdktn/provider-cloudflare.zeroTrustGatewayLogging.ZeroTrustGatewayLogging.addMoveTarget.parameter.moveTarget"></a>

- *Type:* *string

The string move target that will correspond to this resource.

---

##### `GetAnyMapAttribute` <a name="GetAnyMapAttribute" id="@cdktn/provider-cloudflare.zeroTrustGatewayLogging.ZeroTrustGatewayLogging.getAnyMapAttribute"></a>

```go
func GetAnyMapAttribute(terraformAttribute *string) *map[string]interface{}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-cloudflare.zeroTrustGatewayLogging.ZeroTrustGatewayLogging.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetBooleanAttribute` <a name="GetBooleanAttribute" id="@cdktn/provider-cloudflare.zeroTrustGatewayLogging.ZeroTrustGatewayLogging.getBooleanAttribute"></a>

```go
func GetBooleanAttribute(terraformAttribute *string) IResolvable
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-cloudflare.zeroTrustGatewayLogging.ZeroTrustGatewayLogging.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetBooleanMapAttribute` <a name="GetBooleanMapAttribute" id="@cdktn/provider-cloudflare.zeroTrustGatewayLogging.ZeroTrustGatewayLogging.getBooleanMapAttribute"></a>

```go
func GetBooleanMapAttribute(terraformAttribute *string) *map[string]*bool
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-cloudflare.zeroTrustGatewayLogging.ZeroTrustGatewayLogging.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetListAttribute` <a name="GetListAttribute" id="@cdktn/provider-cloudflare.zeroTrustGatewayLogging.ZeroTrustGatewayLogging.getListAttribute"></a>

```go
func GetListAttribute(terraformAttribute *string) *[]*string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-cloudflare.zeroTrustGatewayLogging.ZeroTrustGatewayLogging.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberAttribute` <a name="GetNumberAttribute" id="@cdktn/provider-cloudflare.zeroTrustGatewayLogging.ZeroTrustGatewayLogging.getNumberAttribute"></a>

```go
func GetNumberAttribute(terraformAttribute *string) *f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-cloudflare.zeroTrustGatewayLogging.ZeroTrustGatewayLogging.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberListAttribute` <a name="GetNumberListAttribute" id="@cdktn/provider-cloudflare.zeroTrustGatewayLogging.ZeroTrustGatewayLogging.getNumberListAttribute"></a>

```go
func GetNumberListAttribute(terraformAttribute *string) *[]*f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-cloudflare.zeroTrustGatewayLogging.ZeroTrustGatewayLogging.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberMapAttribute` <a name="GetNumberMapAttribute" id="@cdktn/provider-cloudflare.zeroTrustGatewayLogging.ZeroTrustGatewayLogging.getNumberMapAttribute"></a>

```go
func GetNumberMapAttribute(terraformAttribute *string) *map[string]*f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-cloudflare.zeroTrustGatewayLogging.ZeroTrustGatewayLogging.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetStringAttribute` <a name="GetStringAttribute" id="@cdktn/provider-cloudflare.zeroTrustGatewayLogging.ZeroTrustGatewayLogging.getStringAttribute"></a>

```go
func GetStringAttribute(terraformAttribute *string) *string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-cloudflare.zeroTrustGatewayLogging.ZeroTrustGatewayLogging.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetStringMapAttribute` <a name="GetStringMapAttribute" id="@cdktn/provider-cloudflare.zeroTrustGatewayLogging.ZeroTrustGatewayLogging.getStringMapAttribute"></a>

```go
func GetStringMapAttribute(terraformAttribute *string) *map[string]*string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-cloudflare.zeroTrustGatewayLogging.ZeroTrustGatewayLogging.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `HasResourceMove` <a name="HasResourceMove" id="@cdktn/provider-cloudflare.zeroTrustGatewayLogging.ZeroTrustGatewayLogging.hasResourceMove"></a>

```go
func HasResourceMove() interface{}
```

##### `ImportFrom` <a name="ImportFrom" id="@cdktn/provider-cloudflare.zeroTrustGatewayLogging.ZeroTrustGatewayLogging.importFrom"></a>

```go
func ImportFrom(id *string, provider TerraformProvider)
```

###### `id`<sup>Required</sup> <a name="id" id="@cdktn/provider-cloudflare.zeroTrustGatewayLogging.ZeroTrustGatewayLogging.importFrom.parameter.id"></a>

- *Type:* *string

---

###### `provider`<sup>Optional</sup> <a name="provider" id="@cdktn/provider-cloudflare.zeroTrustGatewayLogging.ZeroTrustGatewayLogging.importFrom.parameter.provider"></a>

- *Type:* github.com/open-constructs/cdk-terrain-go/cdktn.TerraformProvider

---

##### `InterpolationForAttribute` <a name="InterpolationForAttribute" id="@cdktn/provider-cloudflare.zeroTrustGatewayLogging.ZeroTrustGatewayLogging.interpolationForAttribute"></a>

```go
func InterpolationForAttribute(terraformAttribute *string) IResolvable
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-cloudflare.zeroTrustGatewayLogging.ZeroTrustGatewayLogging.interpolationForAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `MoveFromId` <a name="MoveFromId" id="@cdktn/provider-cloudflare.zeroTrustGatewayLogging.ZeroTrustGatewayLogging.moveFromId"></a>

```go
func MoveFromId(id *string)
```

Move the resource corresponding to "id" to this resource.

Note that the resource being moved from must be marked as moved using it's instance function.

###### `id`<sup>Required</sup> <a name="id" id="@cdktn/provider-cloudflare.zeroTrustGatewayLogging.ZeroTrustGatewayLogging.moveFromId.parameter.id"></a>

- *Type:* *string

Full id of resource being moved from, e.g. "aws_s3_bucket.example".

---

##### `MoveTo` <a name="MoveTo" id="@cdktn/provider-cloudflare.zeroTrustGatewayLogging.ZeroTrustGatewayLogging.moveTo"></a>

```go
func MoveTo(moveTarget *string, index interface{})
```

Moves this resource to the target resource given by moveTarget.

###### `moveTarget`<sup>Required</sup> <a name="moveTarget" id="@cdktn/provider-cloudflare.zeroTrustGatewayLogging.ZeroTrustGatewayLogging.moveTo.parameter.moveTarget"></a>

- *Type:* *string

The previously set user defined string set by .addMoveTarget() corresponding to the resource to move to.

---

###### `index`<sup>Optional</sup> <a name="index" id="@cdktn/provider-cloudflare.zeroTrustGatewayLogging.ZeroTrustGatewayLogging.moveTo.parameter.index"></a>

- *Type:* interface{}

Optional The index corresponding to the key the resource is to appear in the foreach of a resource to move to.

---

##### `MoveToId` <a name="MoveToId" id="@cdktn/provider-cloudflare.zeroTrustGatewayLogging.ZeroTrustGatewayLogging.moveToId"></a>

```go
func MoveToId(id *string)
```

Moves this resource to the resource corresponding to "id".

###### `id`<sup>Required</sup> <a name="id" id="@cdktn/provider-cloudflare.zeroTrustGatewayLogging.ZeroTrustGatewayLogging.moveToId.parameter.id"></a>

- *Type:* *string

Full id of resource to move to, e.g. "aws_s3_bucket.example".

---

##### `PutSettingsByRuleType` <a name="PutSettingsByRuleType" id="@cdktn/provider-cloudflare.zeroTrustGatewayLogging.ZeroTrustGatewayLogging.putSettingsByRuleType"></a>

```go
func PutSettingsByRuleType(value ZeroTrustGatewayLoggingSettingsByRuleType)
```

###### `value`<sup>Required</sup> <a name="value" id="@cdktn/provider-cloudflare.zeroTrustGatewayLogging.ZeroTrustGatewayLogging.putSettingsByRuleType.parameter.value"></a>

- *Type:* <a href="#@cdktn/provider-cloudflare.zeroTrustGatewayLogging.ZeroTrustGatewayLoggingSettingsByRuleType">ZeroTrustGatewayLoggingSettingsByRuleType</a>

---

##### `ResetRedactPii` <a name="ResetRedactPii" id="@cdktn/provider-cloudflare.zeroTrustGatewayLogging.ZeroTrustGatewayLogging.resetRedactPii"></a>

```go
func ResetRedactPii()
```

##### `ResetSettingsByRuleType` <a name="ResetSettingsByRuleType" id="@cdktn/provider-cloudflare.zeroTrustGatewayLogging.ZeroTrustGatewayLogging.resetSettingsByRuleType"></a>

```go
func ResetSettingsByRuleType()
```

#### Static Functions <a name="Static Functions" id="Static Functions"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-cloudflare.zeroTrustGatewayLogging.ZeroTrustGatewayLogging.isConstruct">IsConstruct</a></code> | Checks if `x` is a construct. |
| <code><a href="#@cdktn/provider-cloudflare.zeroTrustGatewayLogging.ZeroTrustGatewayLogging.isTerraformElement">IsTerraformElement</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-cloudflare.zeroTrustGatewayLogging.ZeroTrustGatewayLogging.isTerraformResource">IsTerraformResource</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-cloudflare.zeroTrustGatewayLogging.ZeroTrustGatewayLogging.generateConfigForImport">GenerateConfigForImport</a></code> | Generates CDKTN code for importing a ZeroTrustGatewayLogging resource upon running "cdktn plan <stack-name>". |

---

##### `IsConstruct` <a name="IsConstruct" id="@cdktn/provider-cloudflare.zeroTrustGatewayLogging.ZeroTrustGatewayLogging.isConstruct"></a>

```go
import "github.com/cdktn-io/cdktn-provider-cloudflare-go/cloudflare/v14/zerotrustgatewaylogging"

zerotrustgatewaylogging.ZeroTrustGatewayLogging_IsConstruct(x interface{}) *bool
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

###### `x`<sup>Required</sup> <a name="x" id="@cdktn/provider-cloudflare.zeroTrustGatewayLogging.ZeroTrustGatewayLogging.isConstruct.parameter.x"></a>

- *Type:* interface{}

Any object.

---

##### `IsTerraformElement` <a name="IsTerraformElement" id="@cdktn/provider-cloudflare.zeroTrustGatewayLogging.ZeroTrustGatewayLogging.isTerraformElement"></a>

```go
import "github.com/cdktn-io/cdktn-provider-cloudflare-go/cloudflare/v14/zerotrustgatewaylogging"

zerotrustgatewaylogging.ZeroTrustGatewayLogging_IsTerraformElement(x interface{}) *bool
```

###### `x`<sup>Required</sup> <a name="x" id="@cdktn/provider-cloudflare.zeroTrustGatewayLogging.ZeroTrustGatewayLogging.isTerraformElement.parameter.x"></a>

- *Type:* interface{}

---

##### `IsTerraformResource` <a name="IsTerraformResource" id="@cdktn/provider-cloudflare.zeroTrustGatewayLogging.ZeroTrustGatewayLogging.isTerraformResource"></a>

```go
import "github.com/cdktn-io/cdktn-provider-cloudflare-go/cloudflare/v14/zerotrustgatewaylogging"

zerotrustgatewaylogging.ZeroTrustGatewayLogging_IsTerraformResource(x interface{}) *bool
```

###### `x`<sup>Required</sup> <a name="x" id="@cdktn/provider-cloudflare.zeroTrustGatewayLogging.ZeroTrustGatewayLogging.isTerraformResource.parameter.x"></a>

- *Type:* interface{}

---

##### `GenerateConfigForImport` <a name="GenerateConfigForImport" id="@cdktn/provider-cloudflare.zeroTrustGatewayLogging.ZeroTrustGatewayLogging.generateConfigForImport"></a>

```go
import "github.com/cdktn-io/cdktn-provider-cloudflare-go/cloudflare/v14/zerotrustgatewaylogging"

zerotrustgatewaylogging.ZeroTrustGatewayLogging_GenerateConfigForImport(scope Construct, importToId *string, importFromId *string, provider TerraformProvider) ImportableResource
```

Generates CDKTN code for importing a ZeroTrustGatewayLogging resource upon running "cdktn plan <stack-name>".

###### `scope`<sup>Required</sup> <a name="scope" id="@cdktn/provider-cloudflare.zeroTrustGatewayLogging.ZeroTrustGatewayLogging.generateConfigForImport.parameter.scope"></a>

- *Type:* github.com/aws/constructs-go/constructs/v10.Construct

The scope in which to define this construct.

---

###### `importToId`<sup>Required</sup> <a name="importToId" id="@cdktn/provider-cloudflare.zeroTrustGatewayLogging.ZeroTrustGatewayLogging.generateConfigForImport.parameter.importToId"></a>

- *Type:* *string

The construct id used in the generated config for the ZeroTrustGatewayLogging to import.

---

###### `importFromId`<sup>Required</sup> <a name="importFromId" id="@cdktn/provider-cloudflare.zeroTrustGatewayLogging.ZeroTrustGatewayLogging.generateConfigForImport.parameter.importFromId"></a>

- *Type:* *string

The id of the existing ZeroTrustGatewayLogging that should be imported.

Refer to the {@link https://registry.terraform.io/providers/cloudflare/cloudflare/5.18.0/docs/resources/zero_trust_gateway_logging#import import section} in the documentation of this resource for the id to use

---

###### `provider`<sup>Optional</sup> <a name="provider" id="@cdktn/provider-cloudflare.zeroTrustGatewayLogging.ZeroTrustGatewayLogging.generateConfigForImport.parameter.provider"></a>

- *Type:* github.com/open-constructs/cdk-terrain-go/cdktn.TerraformProvider

? Optional instance of the provider where the ZeroTrustGatewayLogging to import is found.

---

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-cloudflare.zeroTrustGatewayLogging.ZeroTrustGatewayLogging.property.node">Node</a></code> | <code>github.com/aws/constructs-go/constructs/v10.Node</code> | The tree node. |
| <code><a href="#@cdktn/provider-cloudflare.zeroTrustGatewayLogging.ZeroTrustGatewayLogging.property.cdktfStack">CdktfStack</a></code> | <code>github.com/open-constructs/cdk-terrain-go/cdktn.TerraformStack</code> | *No description.* |
| <code><a href="#@cdktn/provider-cloudflare.zeroTrustGatewayLogging.ZeroTrustGatewayLogging.property.fqn">Fqn</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktn/provider-cloudflare.zeroTrustGatewayLogging.ZeroTrustGatewayLogging.property.friendlyUniqueId">FriendlyUniqueId</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktn/provider-cloudflare.zeroTrustGatewayLogging.ZeroTrustGatewayLogging.property.terraformMetaArguments">TerraformMetaArguments</a></code> | <code>*map[string]interface{}</code> | *No description.* |
| <code><a href="#@cdktn/provider-cloudflare.zeroTrustGatewayLogging.ZeroTrustGatewayLogging.property.terraformResourceType">TerraformResourceType</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktn/provider-cloudflare.zeroTrustGatewayLogging.ZeroTrustGatewayLogging.property.terraformGeneratorMetadata">TerraformGeneratorMetadata</a></code> | <code>github.com/open-constructs/cdk-terrain-go/cdktn.TerraformProviderGeneratorMetadata</code> | *No description.* |
| <code><a href="#@cdktn/provider-cloudflare.zeroTrustGatewayLogging.ZeroTrustGatewayLogging.property.connection">Connection</a></code> | <code>interface{}</code> | *No description.* |
| <code><a href="#@cdktn/provider-cloudflare.zeroTrustGatewayLogging.ZeroTrustGatewayLogging.property.count">Count</a></code> | <code>interface{}</code> | *No description.* |
| <code><a href="#@cdktn/provider-cloudflare.zeroTrustGatewayLogging.ZeroTrustGatewayLogging.property.dependsOn">DependsOn</a></code> | <code>*[]*string</code> | *No description.* |
| <code><a href="#@cdktn/provider-cloudflare.zeroTrustGatewayLogging.ZeroTrustGatewayLogging.property.forEach">ForEach</a></code> | <code>github.com/open-constructs/cdk-terrain-go/cdktn.ITerraformIterator</code> | *No description.* |
| <code><a href="#@cdktn/provider-cloudflare.zeroTrustGatewayLogging.ZeroTrustGatewayLogging.property.lifecycle">Lifecycle</a></code> | <code>github.com/open-constructs/cdk-terrain-go/cdktn.TerraformResourceLifecycle</code> | *No description.* |
| <code><a href="#@cdktn/provider-cloudflare.zeroTrustGatewayLogging.ZeroTrustGatewayLogging.property.provider">Provider</a></code> | <code>github.com/open-constructs/cdk-terrain-go/cdktn.TerraformProvider</code> | *No description.* |
| <code><a href="#@cdktn/provider-cloudflare.zeroTrustGatewayLogging.ZeroTrustGatewayLogging.property.provisioners">Provisioners</a></code> | <code>*[]interface{}</code> | *No description.* |
| <code><a href="#@cdktn/provider-cloudflare.zeroTrustGatewayLogging.ZeroTrustGatewayLogging.property.settingsByRuleType">SettingsByRuleType</a></code> | <code><a href="#@cdktn/provider-cloudflare.zeroTrustGatewayLogging.ZeroTrustGatewayLoggingSettingsByRuleTypeOutputReference">ZeroTrustGatewayLoggingSettingsByRuleTypeOutputReference</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-cloudflare.zeroTrustGatewayLogging.ZeroTrustGatewayLogging.property.accountIdInput">AccountIdInput</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktn/provider-cloudflare.zeroTrustGatewayLogging.ZeroTrustGatewayLogging.property.redactPiiInput">RedactPiiInput</a></code> | <code>interface{}</code> | *No description.* |
| <code><a href="#@cdktn/provider-cloudflare.zeroTrustGatewayLogging.ZeroTrustGatewayLogging.property.settingsByRuleTypeInput">SettingsByRuleTypeInput</a></code> | <code>interface{}</code> | *No description.* |
| <code><a href="#@cdktn/provider-cloudflare.zeroTrustGatewayLogging.ZeroTrustGatewayLogging.property.accountId">AccountId</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktn/provider-cloudflare.zeroTrustGatewayLogging.ZeroTrustGatewayLogging.property.redactPii">RedactPii</a></code> | <code>interface{}</code> | *No description.* |

---

##### `Node`<sup>Required</sup> <a name="Node" id="@cdktn/provider-cloudflare.zeroTrustGatewayLogging.ZeroTrustGatewayLogging.property.node"></a>

```go
func Node() Node
```

- *Type:* github.com/aws/constructs-go/constructs/v10.Node

The tree node.

---

##### `CdktfStack`<sup>Required</sup> <a name="CdktfStack" id="@cdktn/provider-cloudflare.zeroTrustGatewayLogging.ZeroTrustGatewayLogging.property.cdktfStack"></a>

```go
func CdktfStack() TerraformStack
```

- *Type:* github.com/open-constructs/cdk-terrain-go/cdktn.TerraformStack

---

##### `Fqn`<sup>Required</sup> <a name="Fqn" id="@cdktn/provider-cloudflare.zeroTrustGatewayLogging.ZeroTrustGatewayLogging.property.fqn"></a>

```go
func Fqn() *string
```

- *Type:* *string

---

##### `FriendlyUniqueId`<sup>Required</sup> <a name="FriendlyUniqueId" id="@cdktn/provider-cloudflare.zeroTrustGatewayLogging.ZeroTrustGatewayLogging.property.friendlyUniqueId"></a>

```go
func FriendlyUniqueId() *string
```

- *Type:* *string

---

##### `TerraformMetaArguments`<sup>Required</sup> <a name="TerraformMetaArguments" id="@cdktn/provider-cloudflare.zeroTrustGatewayLogging.ZeroTrustGatewayLogging.property.terraformMetaArguments"></a>

```go
func TerraformMetaArguments() *map[string]interface{}
```

- *Type:* *map[string]interface{}

---

##### `TerraformResourceType`<sup>Required</sup> <a name="TerraformResourceType" id="@cdktn/provider-cloudflare.zeroTrustGatewayLogging.ZeroTrustGatewayLogging.property.terraformResourceType"></a>

```go
func TerraformResourceType() *string
```

- *Type:* *string

---

##### `TerraformGeneratorMetadata`<sup>Optional</sup> <a name="TerraformGeneratorMetadata" id="@cdktn/provider-cloudflare.zeroTrustGatewayLogging.ZeroTrustGatewayLogging.property.terraformGeneratorMetadata"></a>

```go
func TerraformGeneratorMetadata() TerraformProviderGeneratorMetadata
```

- *Type:* github.com/open-constructs/cdk-terrain-go/cdktn.TerraformProviderGeneratorMetadata

---

##### `Connection`<sup>Optional</sup> <a name="Connection" id="@cdktn/provider-cloudflare.zeroTrustGatewayLogging.ZeroTrustGatewayLogging.property.connection"></a>

```go
func Connection() interface{}
```

- *Type:* interface{}

---

##### `Count`<sup>Optional</sup> <a name="Count" id="@cdktn/provider-cloudflare.zeroTrustGatewayLogging.ZeroTrustGatewayLogging.property.count"></a>

```go
func Count() interface{}
```

- *Type:* interface{}

---

##### `DependsOn`<sup>Optional</sup> <a name="DependsOn" id="@cdktn/provider-cloudflare.zeroTrustGatewayLogging.ZeroTrustGatewayLogging.property.dependsOn"></a>

```go
func DependsOn() *[]*string
```

- *Type:* *[]*string

---

##### `ForEach`<sup>Optional</sup> <a name="ForEach" id="@cdktn/provider-cloudflare.zeroTrustGatewayLogging.ZeroTrustGatewayLogging.property.forEach"></a>

```go
func ForEach() ITerraformIterator
```

- *Type:* github.com/open-constructs/cdk-terrain-go/cdktn.ITerraformIterator

---

##### `Lifecycle`<sup>Optional</sup> <a name="Lifecycle" id="@cdktn/provider-cloudflare.zeroTrustGatewayLogging.ZeroTrustGatewayLogging.property.lifecycle"></a>

```go
func Lifecycle() TerraformResourceLifecycle
```

- *Type:* github.com/open-constructs/cdk-terrain-go/cdktn.TerraformResourceLifecycle

---

##### `Provider`<sup>Optional</sup> <a name="Provider" id="@cdktn/provider-cloudflare.zeroTrustGatewayLogging.ZeroTrustGatewayLogging.property.provider"></a>

```go
func Provider() TerraformProvider
```

- *Type:* github.com/open-constructs/cdk-terrain-go/cdktn.TerraformProvider

---

##### `Provisioners`<sup>Optional</sup> <a name="Provisioners" id="@cdktn/provider-cloudflare.zeroTrustGatewayLogging.ZeroTrustGatewayLogging.property.provisioners"></a>

```go
func Provisioners() *[]interface{}
```

- *Type:* *[]interface{}

---

##### `SettingsByRuleType`<sup>Required</sup> <a name="SettingsByRuleType" id="@cdktn/provider-cloudflare.zeroTrustGatewayLogging.ZeroTrustGatewayLogging.property.settingsByRuleType"></a>

```go
func SettingsByRuleType() ZeroTrustGatewayLoggingSettingsByRuleTypeOutputReference
```

- *Type:* <a href="#@cdktn/provider-cloudflare.zeroTrustGatewayLogging.ZeroTrustGatewayLoggingSettingsByRuleTypeOutputReference">ZeroTrustGatewayLoggingSettingsByRuleTypeOutputReference</a>

---

##### `AccountIdInput`<sup>Optional</sup> <a name="AccountIdInput" id="@cdktn/provider-cloudflare.zeroTrustGatewayLogging.ZeroTrustGatewayLogging.property.accountIdInput"></a>

```go
func AccountIdInput() *string
```

- *Type:* *string

---

##### `RedactPiiInput`<sup>Optional</sup> <a name="RedactPiiInput" id="@cdktn/provider-cloudflare.zeroTrustGatewayLogging.ZeroTrustGatewayLogging.property.redactPiiInput"></a>

```go
func RedactPiiInput() interface{}
```

- *Type:* interface{}

---

##### `SettingsByRuleTypeInput`<sup>Optional</sup> <a name="SettingsByRuleTypeInput" id="@cdktn/provider-cloudflare.zeroTrustGatewayLogging.ZeroTrustGatewayLogging.property.settingsByRuleTypeInput"></a>

```go
func SettingsByRuleTypeInput() interface{}
```

- *Type:* interface{}

---

##### `AccountId`<sup>Required</sup> <a name="AccountId" id="@cdktn/provider-cloudflare.zeroTrustGatewayLogging.ZeroTrustGatewayLogging.property.accountId"></a>

```go
func AccountId() *string
```

- *Type:* *string

---

##### `RedactPii`<sup>Required</sup> <a name="RedactPii" id="@cdktn/provider-cloudflare.zeroTrustGatewayLogging.ZeroTrustGatewayLogging.property.redactPii"></a>

```go
func RedactPii() interface{}
```

- *Type:* interface{}

---

#### Constants <a name="Constants" id="Constants"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-cloudflare.zeroTrustGatewayLogging.ZeroTrustGatewayLogging.property.tfResourceType">TfResourceType</a></code> | <code>*string</code> | *No description.* |

---

##### `TfResourceType`<sup>Required</sup> <a name="TfResourceType" id="@cdktn/provider-cloudflare.zeroTrustGatewayLogging.ZeroTrustGatewayLogging.property.tfResourceType"></a>

```go
func TfResourceType() *string
```

- *Type:* *string

---

## Structs <a name="Structs" id="Structs"></a>

### ZeroTrustGatewayLoggingConfig <a name="ZeroTrustGatewayLoggingConfig" id="@cdktn/provider-cloudflare.zeroTrustGatewayLogging.ZeroTrustGatewayLoggingConfig"></a>

#### Initializer <a name="Initializer" id="@cdktn/provider-cloudflare.zeroTrustGatewayLogging.ZeroTrustGatewayLoggingConfig.Initializer"></a>

```go
import "github.com/cdktn-io/cdktn-provider-cloudflare-go/cloudflare/v14/zerotrustgatewaylogging"

&zerotrustgatewaylogging.ZeroTrustGatewayLoggingConfig {
	Connection: interface{},
	Count: interface{},
	DependsOn: *[]github.com/open-constructs/cdk-terrain-go/cdktn.ITerraformDependable,
	ForEach: github.com/open-constructs/cdk-terrain-go/cdktn.ITerraformIterator,
	Lifecycle: github.com/open-constructs/cdk-terrain-go/cdktn.TerraformResourceLifecycle,
	Provider: github.com/open-constructs/cdk-terrain-go/cdktn.TerraformProvider,
	Provisioners: *[]interface{},
	AccountId: *string,
	RedactPii: interface{},
	SettingsByRuleType: github.com/cdktn-io/cdktn-provider-cloudflare-go/cloudflare/v14.zeroTrustGatewayLogging.ZeroTrustGatewayLoggingSettingsByRuleType,
}
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-cloudflare.zeroTrustGatewayLogging.ZeroTrustGatewayLoggingConfig.property.connection">Connection</a></code> | <code>interface{}</code> | *No description.* |
| <code><a href="#@cdktn/provider-cloudflare.zeroTrustGatewayLogging.ZeroTrustGatewayLoggingConfig.property.count">Count</a></code> | <code>interface{}</code> | *No description.* |
| <code><a href="#@cdktn/provider-cloudflare.zeroTrustGatewayLogging.ZeroTrustGatewayLoggingConfig.property.dependsOn">DependsOn</a></code> | <code>*[]github.com/open-constructs/cdk-terrain-go/cdktn.ITerraformDependable</code> | *No description.* |
| <code><a href="#@cdktn/provider-cloudflare.zeroTrustGatewayLogging.ZeroTrustGatewayLoggingConfig.property.forEach">ForEach</a></code> | <code>github.com/open-constructs/cdk-terrain-go/cdktn.ITerraformIterator</code> | *No description.* |
| <code><a href="#@cdktn/provider-cloudflare.zeroTrustGatewayLogging.ZeroTrustGatewayLoggingConfig.property.lifecycle">Lifecycle</a></code> | <code>github.com/open-constructs/cdk-terrain-go/cdktn.TerraformResourceLifecycle</code> | *No description.* |
| <code><a href="#@cdktn/provider-cloudflare.zeroTrustGatewayLogging.ZeroTrustGatewayLoggingConfig.property.provider">Provider</a></code> | <code>github.com/open-constructs/cdk-terrain-go/cdktn.TerraformProvider</code> | *No description.* |
| <code><a href="#@cdktn/provider-cloudflare.zeroTrustGatewayLogging.ZeroTrustGatewayLoggingConfig.property.provisioners">Provisioners</a></code> | <code>*[]interface{}</code> | *No description.* |
| <code><a href="#@cdktn/provider-cloudflare.zeroTrustGatewayLogging.ZeroTrustGatewayLoggingConfig.property.accountId">AccountId</a></code> | <code>*string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/cloudflare/cloudflare/5.18.0/docs/resources/zero_trust_gateway_logging#account_id ZeroTrustGatewayLogging#account_id}. |
| <code><a href="#@cdktn/provider-cloudflare.zeroTrustGatewayLogging.ZeroTrustGatewayLoggingConfig.property.redactPii">RedactPii</a></code> | <code>interface{}</code> | Indicate whether to redact personally identifiable information from activity logging (PII fields include source IP, user email, user ID, device ID, URL, referrer, and user agent). |
| <code><a href="#@cdktn/provider-cloudflare.zeroTrustGatewayLogging.ZeroTrustGatewayLoggingConfig.property.settingsByRuleType">SettingsByRuleType</a></code> | <code><a href="#@cdktn/provider-cloudflare.zeroTrustGatewayLogging.ZeroTrustGatewayLoggingSettingsByRuleType">ZeroTrustGatewayLoggingSettingsByRuleType</a></code> | Configure logging settings for each rule type. |

---

##### `Connection`<sup>Optional</sup> <a name="Connection" id="@cdktn/provider-cloudflare.zeroTrustGatewayLogging.ZeroTrustGatewayLoggingConfig.property.connection"></a>

```go
Connection interface{}
```

- *Type:* interface{}

---

##### `Count`<sup>Optional</sup> <a name="Count" id="@cdktn/provider-cloudflare.zeroTrustGatewayLogging.ZeroTrustGatewayLoggingConfig.property.count"></a>

```go
Count interface{}
```

- *Type:* interface{}

---

##### `DependsOn`<sup>Optional</sup> <a name="DependsOn" id="@cdktn/provider-cloudflare.zeroTrustGatewayLogging.ZeroTrustGatewayLoggingConfig.property.dependsOn"></a>

```go
DependsOn *[]ITerraformDependable
```

- *Type:* *[]github.com/open-constructs/cdk-terrain-go/cdktn.ITerraformDependable

---

##### `ForEach`<sup>Optional</sup> <a name="ForEach" id="@cdktn/provider-cloudflare.zeroTrustGatewayLogging.ZeroTrustGatewayLoggingConfig.property.forEach"></a>

```go
ForEach ITerraformIterator
```

- *Type:* github.com/open-constructs/cdk-terrain-go/cdktn.ITerraformIterator

---

##### `Lifecycle`<sup>Optional</sup> <a name="Lifecycle" id="@cdktn/provider-cloudflare.zeroTrustGatewayLogging.ZeroTrustGatewayLoggingConfig.property.lifecycle"></a>

```go
Lifecycle TerraformResourceLifecycle
```

- *Type:* github.com/open-constructs/cdk-terrain-go/cdktn.TerraformResourceLifecycle

---

##### `Provider`<sup>Optional</sup> <a name="Provider" id="@cdktn/provider-cloudflare.zeroTrustGatewayLogging.ZeroTrustGatewayLoggingConfig.property.provider"></a>

```go
Provider TerraformProvider
```

- *Type:* github.com/open-constructs/cdk-terrain-go/cdktn.TerraformProvider

---

##### `Provisioners`<sup>Optional</sup> <a name="Provisioners" id="@cdktn/provider-cloudflare.zeroTrustGatewayLogging.ZeroTrustGatewayLoggingConfig.property.provisioners"></a>

```go
Provisioners *[]interface{}
```

- *Type:* *[]interface{}

---

##### `AccountId`<sup>Required</sup> <a name="AccountId" id="@cdktn/provider-cloudflare.zeroTrustGatewayLogging.ZeroTrustGatewayLoggingConfig.property.accountId"></a>

```go
AccountId *string
```

- *Type:* *string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/cloudflare/cloudflare/5.18.0/docs/resources/zero_trust_gateway_logging#account_id ZeroTrustGatewayLogging#account_id}.

---

##### `RedactPii`<sup>Optional</sup> <a name="RedactPii" id="@cdktn/provider-cloudflare.zeroTrustGatewayLogging.ZeroTrustGatewayLoggingConfig.property.redactPii"></a>

```go
RedactPii interface{}
```

- *Type:* interface{}

Indicate whether to redact personally identifiable information from activity logging (PII fields include source IP, user email, user ID, device ID, URL, referrer, and user agent).

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/cloudflare/cloudflare/5.18.0/docs/resources/zero_trust_gateway_logging#redact_pii ZeroTrustGatewayLogging#redact_pii}

---

##### `SettingsByRuleType`<sup>Optional</sup> <a name="SettingsByRuleType" id="@cdktn/provider-cloudflare.zeroTrustGatewayLogging.ZeroTrustGatewayLoggingConfig.property.settingsByRuleType"></a>

```go
SettingsByRuleType ZeroTrustGatewayLoggingSettingsByRuleType
```

- *Type:* <a href="#@cdktn/provider-cloudflare.zeroTrustGatewayLogging.ZeroTrustGatewayLoggingSettingsByRuleType">ZeroTrustGatewayLoggingSettingsByRuleType</a>

Configure logging settings for each rule type.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/cloudflare/cloudflare/5.18.0/docs/resources/zero_trust_gateway_logging#settings_by_rule_type ZeroTrustGatewayLogging#settings_by_rule_type}

---

### ZeroTrustGatewayLoggingSettingsByRuleType <a name="ZeroTrustGatewayLoggingSettingsByRuleType" id="@cdktn/provider-cloudflare.zeroTrustGatewayLogging.ZeroTrustGatewayLoggingSettingsByRuleType"></a>

#### Initializer <a name="Initializer" id="@cdktn/provider-cloudflare.zeroTrustGatewayLogging.ZeroTrustGatewayLoggingSettingsByRuleType.Initializer"></a>

```go
import "github.com/cdktn-io/cdktn-provider-cloudflare-go/cloudflare/v14/zerotrustgatewaylogging"

&zerotrustgatewaylogging.ZeroTrustGatewayLoggingSettingsByRuleType {
	Dns: github.com/cdktn-io/cdktn-provider-cloudflare-go/cloudflare/v14.zeroTrustGatewayLogging.ZeroTrustGatewayLoggingSettingsByRuleTypeDns,
	Http: github.com/cdktn-io/cdktn-provider-cloudflare-go/cloudflare/v14.zeroTrustGatewayLogging.ZeroTrustGatewayLoggingSettingsByRuleTypeHttp,
	L4: github.com/cdktn-io/cdktn-provider-cloudflare-go/cloudflare/v14.zeroTrustGatewayLogging.ZeroTrustGatewayLoggingSettingsByRuleTypeL4,
}
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-cloudflare.zeroTrustGatewayLogging.ZeroTrustGatewayLoggingSettingsByRuleType.property.dns">Dns</a></code> | <code><a href="#@cdktn/provider-cloudflare.zeroTrustGatewayLogging.ZeroTrustGatewayLoggingSettingsByRuleTypeDns">ZeroTrustGatewayLoggingSettingsByRuleTypeDns</a></code> | Configure logging settings for DNS firewall. |
| <code><a href="#@cdktn/provider-cloudflare.zeroTrustGatewayLogging.ZeroTrustGatewayLoggingSettingsByRuleType.property.http">Http</a></code> | <code><a href="#@cdktn/provider-cloudflare.zeroTrustGatewayLogging.ZeroTrustGatewayLoggingSettingsByRuleTypeHttp">ZeroTrustGatewayLoggingSettingsByRuleTypeHttp</a></code> | Configure logging settings for HTTP/HTTPS firewall. |
| <code><a href="#@cdktn/provider-cloudflare.zeroTrustGatewayLogging.ZeroTrustGatewayLoggingSettingsByRuleType.property.l4">L4</a></code> | <code><a href="#@cdktn/provider-cloudflare.zeroTrustGatewayLogging.ZeroTrustGatewayLoggingSettingsByRuleTypeL4">ZeroTrustGatewayLoggingSettingsByRuleTypeL4</a></code> | Configure logging settings for Network firewall. |

---

##### `Dns`<sup>Optional</sup> <a name="Dns" id="@cdktn/provider-cloudflare.zeroTrustGatewayLogging.ZeroTrustGatewayLoggingSettingsByRuleType.property.dns"></a>

```go
Dns ZeroTrustGatewayLoggingSettingsByRuleTypeDns
```

- *Type:* <a href="#@cdktn/provider-cloudflare.zeroTrustGatewayLogging.ZeroTrustGatewayLoggingSettingsByRuleTypeDns">ZeroTrustGatewayLoggingSettingsByRuleTypeDns</a>

Configure logging settings for DNS firewall.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/cloudflare/cloudflare/5.18.0/docs/resources/zero_trust_gateway_logging#dns ZeroTrustGatewayLogging#dns}

---

##### `Http`<sup>Optional</sup> <a name="Http" id="@cdktn/provider-cloudflare.zeroTrustGatewayLogging.ZeroTrustGatewayLoggingSettingsByRuleType.property.http"></a>

```go
Http ZeroTrustGatewayLoggingSettingsByRuleTypeHttp
```

- *Type:* <a href="#@cdktn/provider-cloudflare.zeroTrustGatewayLogging.ZeroTrustGatewayLoggingSettingsByRuleTypeHttp">ZeroTrustGatewayLoggingSettingsByRuleTypeHttp</a>

Configure logging settings for HTTP/HTTPS firewall.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/cloudflare/cloudflare/5.18.0/docs/resources/zero_trust_gateway_logging#http ZeroTrustGatewayLogging#http}

---

##### `L4`<sup>Optional</sup> <a name="L4" id="@cdktn/provider-cloudflare.zeroTrustGatewayLogging.ZeroTrustGatewayLoggingSettingsByRuleType.property.l4"></a>

```go
L4 ZeroTrustGatewayLoggingSettingsByRuleTypeL4
```

- *Type:* <a href="#@cdktn/provider-cloudflare.zeroTrustGatewayLogging.ZeroTrustGatewayLoggingSettingsByRuleTypeL4">ZeroTrustGatewayLoggingSettingsByRuleTypeL4</a>

Configure logging settings for Network firewall.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/cloudflare/cloudflare/5.18.0/docs/resources/zero_trust_gateway_logging#l4 ZeroTrustGatewayLogging#l4}

---

### ZeroTrustGatewayLoggingSettingsByRuleTypeDns <a name="ZeroTrustGatewayLoggingSettingsByRuleTypeDns" id="@cdktn/provider-cloudflare.zeroTrustGatewayLogging.ZeroTrustGatewayLoggingSettingsByRuleTypeDns"></a>

#### Initializer <a name="Initializer" id="@cdktn/provider-cloudflare.zeroTrustGatewayLogging.ZeroTrustGatewayLoggingSettingsByRuleTypeDns.Initializer"></a>

```go
import "github.com/cdktn-io/cdktn-provider-cloudflare-go/cloudflare/v14/zerotrustgatewaylogging"

&zerotrustgatewaylogging.ZeroTrustGatewayLoggingSettingsByRuleTypeDns {
	LogAll: interface{},
	LogBlocks: interface{},
}
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-cloudflare.zeroTrustGatewayLogging.ZeroTrustGatewayLoggingSettingsByRuleTypeDns.property.logAll">LogAll</a></code> | <code>interface{}</code> | Specify whether to log all requests to this service. |
| <code><a href="#@cdktn/provider-cloudflare.zeroTrustGatewayLogging.ZeroTrustGatewayLoggingSettingsByRuleTypeDns.property.logBlocks">LogBlocks</a></code> | <code>interface{}</code> | Specify whether to log only blocking requests to this service. |

---

##### `LogAll`<sup>Optional</sup> <a name="LogAll" id="@cdktn/provider-cloudflare.zeroTrustGatewayLogging.ZeroTrustGatewayLoggingSettingsByRuleTypeDns.property.logAll"></a>

```go
LogAll interface{}
```

- *Type:* interface{}

Specify whether to log all requests to this service.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/cloudflare/cloudflare/5.18.0/docs/resources/zero_trust_gateway_logging#log_all ZeroTrustGatewayLogging#log_all}

---

##### `LogBlocks`<sup>Optional</sup> <a name="LogBlocks" id="@cdktn/provider-cloudflare.zeroTrustGatewayLogging.ZeroTrustGatewayLoggingSettingsByRuleTypeDns.property.logBlocks"></a>

```go
LogBlocks interface{}
```

- *Type:* interface{}

Specify whether to log only blocking requests to this service.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/cloudflare/cloudflare/5.18.0/docs/resources/zero_trust_gateway_logging#log_blocks ZeroTrustGatewayLogging#log_blocks}

---

### ZeroTrustGatewayLoggingSettingsByRuleTypeHttp <a name="ZeroTrustGatewayLoggingSettingsByRuleTypeHttp" id="@cdktn/provider-cloudflare.zeroTrustGatewayLogging.ZeroTrustGatewayLoggingSettingsByRuleTypeHttp"></a>

#### Initializer <a name="Initializer" id="@cdktn/provider-cloudflare.zeroTrustGatewayLogging.ZeroTrustGatewayLoggingSettingsByRuleTypeHttp.Initializer"></a>

```go
import "github.com/cdktn-io/cdktn-provider-cloudflare-go/cloudflare/v14/zerotrustgatewaylogging"

&zerotrustgatewaylogging.ZeroTrustGatewayLoggingSettingsByRuleTypeHttp {
	LogAll: interface{},
	LogBlocks: interface{},
}
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-cloudflare.zeroTrustGatewayLogging.ZeroTrustGatewayLoggingSettingsByRuleTypeHttp.property.logAll">LogAll</a></code> | <code>interface{}</code> | Specify whether to log all requests to this service. |
| <code><a href="#@cdktn/provider-cloudflare.zeroTrustGatewayLogging.ZeroTrustGatewayLoggingSettingsByRuleTypeHttp.property.logBlocks">LogBlocks</a></code> | <code>interface{}</code> | Specify whether to log only blocking requests to this service. |

---

##### `LogAll`<sup>Optional</sup> <a name="LogAll" id="@cdktn/provider-cloudflare.zeroTrustGatewayLogging.ZeroTrustGatewayLoggingSettingsByRuleTypeHttp.property.logAll"></a>

```go
LogAll interface{}
```

- *Type:* interface{}

Specify whether to log all requests to this service.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/cloudflare/cloudflare/5.18.0/docs/resources/zero_trust_gateway_logging#log_all ZeroTrustGatewayLogging#log_all}

---

##### `LogBlocks`<sup>Optional</sup> <a name="LogBlocks" id="@cdktn/provider-cloudflare.zeroTrustGatewayLogging.ZeroTrustGatewayLoggingSettingsByRuleTypeHttp.property.logBlocks"></a>

```go
LogBlocks interface{}
```

- *Type:* interface{}

Specify whether to log only blocking requests to this service.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/cloudflare/cloudflare/5.18.0/docs/resources/zero_trust_gateway_logging#log_blocks ZeroTrustGatewayLogging#log_blocks}

---

### ZeroTrustGatewayLoggingSettingsByRuleTypeL4 <a name="ZeroTrustGatewayLoggingSettingsByRuleTypeL4" id="@cdktn/provider-cloudflare.zeroTrustGatewayLogging.ZeroTrustGatewayLoggingSettingsByRuleTypeL4"></a>

#### Initializer <a name="Initializer" id="@cdktn/provider-cloudflare.zeroTrustGatewayLogging.ZeroTrustGatewayLoggingSettingsByRuleTypeL4.Initializer"></a>

```go
import "github.com/cdktn-io/cdktn-provider-cloudflare-go/cloudflare/v14/zerotrustgatewaylogging"

&zerotrustgatewaylogging.ZeroTrustGatewayLoggingSettingsByRuleTypeL4 {
	LogAll: interface{},
	LogBlocks: interface{},
}
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-cloudflare.zeroTrustGatewayLogging.ZeroTrustGatewayLoggingSettingsByRuleTypeL4.property.logAll">LogAll</a></code> | <code>interface{}</code> | Specify whether to log all requests to this service. |
| <code><a href="#@cdktn/provider-cloudflare.zeroTrustGatewayLogging.ZeroTrustGatewayLoggingSettingsByRuleTypeL4.property.logBlocks">LogBlocks</a></code> | <code>interface{}</code> | Specify whether to log only blocking requests to this service. |

---

##### `LogAll`<sup>Optional</sup> <a name="LogAll" id="@cdktn/provider-cloudflare.zeroTrustGatewayLogging.ZeroTrustGatewayLoggingSettingsByRuleTypeL4.property.logAll"></a>

```go
LogAll interface{}
```

- *Type:* interface{}

Specify whether to log all requests to this service.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/cloudflare/cloudflare/5.18.0/docs/resources/zero_trust_gateway_logging#log_all ZeroTrustGatewayLogging#log_all}

---

##### `LogBlocks`<sup>Optional</sup> <a name="LogBlocks" id="@cdktn/provider-cloudflare.zeroTrustGatewayLogging.ZeroTrustGatewayLoggingSettingsByRuleTypeL4.property.logBlocks"></a>

```go
LogBlocks interface{}
```

- *Type:* interface{}

Specify whether to log only blocking requests to this service.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/cloudflare/cloudflare/5.18.0/docs/resources/zero_trust_gateway_logging#log_blocks ZeroTrustGatewayLogging#log_blocks}

---

## Classes <a name="Classes" id="Classes"></a>

### ZeroTrustGatewayLoggingSettingsByRuleTypeDnsOutputReference <a name="ZeroTrustGatewayLoggingSettingsByRuleTypeDnsOutputReference" id="@cdktn/provider-cloudflare.zeroTrustGatewayLogging.ZeroTrustGatewayLoggingSettingsByRuleTypeDnsOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktn/provider-cloudflare.zeroTrustGatewayLogging.ZeroTrustGatewayLoggingSettingsByRuleTypeDnsOutputReference.Initializer"></a>

```go
import "github.com/cdktn-io/cdktn-provider-cloudflare-go/cloudflare/v14/zerotrustgatewaylogging"

zerotrustgatewaylogging.NewZeroTrustGatewayLoggingSettingsByRuleTypeDnsOutputReference(terraformResource IInterpolatingParent, terraformAttribute *string) ZeroTrustGatewayLoggingSettingsByRuleTypeDnsOutputReference
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-cloudflare.zeroTrustGatewayLogging.ZeroTrustGatewayLoggingSettingsByRuleTypeDnsOutputReference.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>github.com/open-constructs/cdk-terrain-go/cdktn.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktn/provider-cloudflare.zeroTrustGatewayLogging.ZeroTrustGatewayLoggingSettingsByRuleTypeDnsOutputReference.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>*string</code> | The attribute on the parent resource this class is referencing. |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktn/provider-cloudflare.zeroTrustGatewayLogging.ZeroTrustGatewayLoggingSettingsByRuleTypeDnsOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* github.com/open-constructs/cdk-terrain-go/cdktn.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-cloudflare.zeroTrustGatewayLogging.ZeroTrustGatewayLoggingSettingsByRuleTypeDnsOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* *string

The attribute on the parent resource this class is referencing.

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-cloudflare.zeroTrustGatewayLogging.ZeroTrustGatewayLoggingSettingsByRuleTypeDnsOutputReference.computeFqn">ComputeFqn</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-cloudflare.zeroTrustGatewayLogging.ZeroTrustGatewayLoggingSettingsByRuleTypeDnsOutputReference.getAnyMapAttribute">GetAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-cloudflare.zeroTrustGatewayLogging.ZeroTrustGatewayLoggingSettingsByRuleTypeDnsOutputReference.getBooleanAttribute">GetBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-cloudflare.zeroTrustGatewayLogging.ZeroTrustGatewayLoggingSettingsByRuleTypeDnsOutputReference.getBooleanMapAttribute">GetBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-cloudflare.zeroTrustGatewayLogging.ZeroTrustGatewayLoggingSettingsByRuleTypeDnsOutputReference.getListAttribute">GetListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-cloudflare.zeroTrustGatewayLogging.ZeroTrustGatewayLoggingSettingsByRuleTypeDnsOutputReference.getNumberAttribute">GetNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-cloudflare.zeroTrustGatewayLogging.ZeroTrustGatewayLoggingSettingsByRuleTypeDnsOutputReference.getNumberListAttribute">GetNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-cloudflare.zeroTrustGatewayLogging.ZeroTrustGatewayLoggingSettingsByRuleTypeDnsOutputReference.getNumberMapAttribute">GetNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-cloudflare.zeroTrustGatewayLogging.ZeroTrustGatewayLoggingSettingsByRuleTypeDnsOutputReference.getStringAttribute">GetStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-cloudflare.zeroTrustGatewayLogging.ZeroTrustGatewayLoggingSettingsByRuleTypeDnsOutputReference.getStringMapAttribute">GetStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-cloudflare.zeroTrustGatewayLogging.ZeroTrustGatewayLoggingSettingsByRuleTypeDnsOutputReference.interpolationForAttribute">InterpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-cloudflare.zeroTrustGatewayLogging.ZeroTrustGatewayLoggingSettingsByRuleTypeDnsOutputReference.resolve">Resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktn/provider-cloudflare.zeroTrustGatewayLogging.ZeroTrustGatewayLoggingSettingsByRuleTypeDnsOutputReference.toString">ToString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktn/provider-cloudflare.zeroTrustGatewayLogging.ZeroTrustGatewayLoggingSettingsByRuleTypeDnsOutputReference.resetLogAll">ResetLogAll</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-cloudflare.zeroTrustGatewayLogging.ZeroTrustGatewayLoggingSettingsByRuleTypeDnsOutputReference.resetLogBlocks">ResetLogBlocks</a></code> | *No description.* |

---

##### `ComputeFqn` <a name="ComputeFqn" id="@cdktn/provider-cloudflare.zeroTrustGatewayLogging.ZeroTrustGatewayLoggingSettingsByRuleTypeDnsOutputReference.computeFqn"></a>

```go
func ComputeFqn() *string
```

##### `GetAnyMapAttribute` <a name="GetAnyMapAttribute" id="@cdktn/provider-cloudflare.zeroTrustGatewayLogging.ZeroTrustGatewayLoggingSettingsByRuleTypeDnsOutputReference.getAnyMapAttribute"></a>

```go
func GetAnyMapAttribute(terraformAttribute *string) *map[string]interface{}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-cloudflare.zeroTrustGatewayLogging.ZeroTrustGatewayLoggingSettingsByRuleTypeDnsOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetBooleanAttribute` <a name="GetBooleanAttribute" id="@cdktn/provider-cloudflare.zeroTrustGatewayLogging.ZeroTrustGatewayLoggingSettingsByRuleTypeDnsOutputReference.getBooleanAttribute"></a>

```go
func GetBooleanAttribute(terraformAttribute *string) IResolvable
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-cloudflare.zeroTrustGatewayLogging.ZeroTrustGatewayLoggingSettingsByRuleTypeDnsOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetBooleanMapAttribute` <a name="GetBooleanMapAttribute" id="@cdktn/provider-cloudflare.zeroTrustGatewayLogging.ZeroTrustGatewayLoggingSettingsByRuleTypeDnsOutputReference.getBooleanMapAttribute"></a>

```go
func GetBooleanMapAttribute(terraformAttribute *string) *map[string]*bool
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-cloudflare.zeroTrustGatewayLogging.ZeroTrustGatewayLoggingSettingsByRuleTypeDnsOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetListAttribute` <a name="GetListAttribute" id="@cdktn/provider-cloudflare.zeroTrustGatewayLogging.ZeroTrustGatewayLoggingSettingsByRuleTypeDnsOutputReference.getListAttribute"></a>

```go
func GetListAttribute(terraformAttribute *string) *[]*string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-cloudflare.zeroTrustGatewayLogging.ZeroTrustGatewayLoggingSettingsByRuleTypeDnsOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberAttribute` <a name="GetNumberAttribute" id="@cdktn/provider-cloudflare.zeroTrustGatewayLogging.ZeroTrustGatewayLoggingSettingsByRuleTypeDnsOutputReference.getNumberAttribute"></a>

```go
func GetNumberAttribute(terraformAttribute *string) *f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-cloudflare.zeroTrustGatewayLogging.ZeroTrustGatewayLoggingSettingsByRuleTypeDnsOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberListAttribute` <a name="GetNumberListAttribute" id="@cdktn/provider-cloudflare.zeroTrustGatewayLogging.ZeroTrustGatewayLoggingSettingsByRuleTypeDnsOutputReference.getNumberListAttribute"></a>

```go
func GetNumberListAttribute(terraformAttribute *string) *[]*f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-cloudflare.zeroTrustGatewayLogging.ZeroTrustGatewayLoggingSettingsByRuleTypeDnsOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberMapAttribute` <a name="GetNumberMapAttribute" id="@cdktn/provider-cloudflare.zeroTrustGatewayLogging.ZeroTrustGatewayLoggingSettingsByRuleTypeDnsOutputReference.getNumberMapAttribute"></a>

```go
func GetNumberMapAttribute(terraformAttribute *string) *map[string]*f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-cloudflare.zeroTrustGatewayLogging.ZeroTrustGatewayLoggingSettingsByRuleTypeDnsOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetStringAttribute` <a name="GetStringAttribute" id="@cdktn/provider-cloudflare.zeroTrustGatewayLogging.ZeroTrustGatewayLoggingSettingsByRuleTypeDnsOutputReference.getStringAttribute"></a>

```go
func GetStringAttribute(terraformAttribute *string) *string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-cloudflare.zeroTrustGatewayLogging.ZeroTrustGatewayLoggingSettingsByRuleTypeDnsOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetStringMapAttribute` <a name="GetStringMapAttribute" id="@cdktn/provider-cloudflare.zeroTrustGatewayLogging.ZeroTrustGatewayLoggingSettingsByRuleTypeDnsOutputReference.getStringMapAttribute"></a>

```go
func GetStringMapAttribute(terraformAttribute *string) *map[string]*string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-cloudflare.zeroTrustGatewayLogging.ZeroTrustGatewayLoggingSettingsByRuleTypeDnsOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `InterpolationForAttribute` <a name="InterpolationForAttribute" id="@cdktn/provider-cloudflare.zeroTrustGatewayLogging.ZeroTrustGatewayLoggingSettingsByRuleTypeDnsOutputReference.interpolationForAttribute"></a>

```go
func InterpolationForAttribute(property *string) IResolvable
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktn/provider-cloudflare.zeroTrustGatewayLogging.ZeroTrustGatewayLoggingSettingsByRuleTypeDnsOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* *string

---

##### `Resolve` <a name="Resolve" id="@cdktn/provider-cloudflare.zeroTrustGatewayLogging.ZeroTrustGatewayLoggingSettingsByRuleTypeDnsOutputReference.resolve"></a>

```go
func Resolve(_context IResolveContext) interface{}
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktn/provider-cloudflare.zeroTrustGatewayLogging.ZeroTrustGatewayLoggingSettingsByRuleTypeDnsOutputReference.resolve.parameter._context"></a>

- *Type:* github.com/open-constructs/cdk-terrain-go/cdktn.IResolveContext

---

##### `ToString` <a name="ToString" id="@cdktn/provider-cloudflare.zeroTrustGatewayLogging.ZeroTrustGatewayLoggingSettingsByRuleTypeDnsOutputReference.toString"></a>

```go
func ToString() *string
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `ResetLogAll` <a name="ResetLogAll" id="@cdktn/provider-cloudflare.zeroTrustGatewayLogging.ZeroTrustGatewayLoggingSettingsByRuleTypeDnsOutputReference.resetLogAll"></a>

```go
func ResetLogAll()
```

##### `ResetLogBlocks` <a name="ResetLogBlocks" id="@cdktn/provider-cloudflare.zeroTrustGatewayLogging.ZeroTrustGatewayLoggingSettingsByRuleTypeDnsOutputReference.resetLogBlocks"></a>

```go
func ResetLogBlocks()
```


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-cloudflare.zeroTrustGatewayLogging.ZeroTrustGatewayLoggingSettingsByRuleTypeDnsOutputReference.property.creationStack">CreationStack</a></code> | <code>*[]*string</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktn/provider-cloudflare.zeroTrustGatewayLogging.ZeroTrustGatewayLoggingSettingsByRuleTypeDnsOutputReference.property.fqn">Fqn</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktn/provider-cloudflare.zeroTrustGatewayLogging.ZeroTrustGatewayLoggingSettingsByRuleTypeDnsOutputReference.property.logAllInput">LogAllInput</a></code> | <code>interface{}</code> | *No description.* |
| <code><a href="#@cdktn/provider-cloudflare.zeroTrustGatewayLogging.ZeroTrustGatewayLoggingSettingsByRuleTypeDnsOutputReference.property.logBlocksInput">LogBlocksInput</a></code> | <code>interface{}</code> | *No description.* |
| <code><a href="#@cdktn/provider-cloudflare.zeroTrustGatewayLogging.ZeroTrustGatewayLoggingSettingsByRuleTypeDnsOutputReference.property.logAll">LogAll</a></code> | <code>interface{}</code> | *No description.* |
| <code><a href="#@cdktn/provider-cloudflare.zeroTrustGatewayLogging.ZeroTrustGatewayLoggingSettingsByRuleTypeDnsOutputReference.property.logBlocks">LogBlocks</a></code> | <code>interface{}</code> | *No description.* |
| <code><a href="#@cdktn/provider-cloudflare.zeroTrustGatewayLogging.ZeroTrustGatewayLoggingSettingsByRuleTypeDnsOutputReference.property.internalValue">InternalValue</a></code> | <code>interface{}</code> | *No description.* |

---

##### `CreationStack`<sup>Required</sup> <a name="CreationStack" id="@cdktn/provider-cloudflare.zeroTrustGatewayLogging.ZeroTrustGatewayLoggingSettingsByRuleTypeDnsOutputReference.property.creationStack"></a>

```go
func CreationStack() *[]*string
```

- *Type:* *[]*string

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `Fqn`<sup>Required</sup> <a name="Fqn" id="@cdktn/provider-cloudflare.zeroTrustGatewayLogging.ZeroTrustGatewayLoggingSettingsByRuleTypeDnsOutputReference.property.fqn"></a>

```go
func Fqn() *string
```

- *Type:* *string

---

##### `LogAllInput`<sup>Optional</sup> <a name="LogAllInput" id="@cdktn/provider-cloudflare.zeroTrustGatewayLogging.ZeroTrustGatewayLoggingSettingsByRuleTypeDnsOutputReference.property.logAllInput"></a>

```go
func LogAllInput() interface{}
```

- *Type:* interface{}

---

##### `LogBlocksInput`<sup>Optional</sup> <a name="LogBlocksInput" id="@cdktn/provider-cloudflare.zeroTrustGatewayLogging.ZeroTrustGatewayLoggingSettingsByRuleTypeDnsOutputReference.property.logBlocksInput"></a>

```go
func LogBlocksInput() interface{}
```

- *Type:* interface{}

---

##### `LogAll`<sup>Required</sup> <a name="LogAll" id="@cdktn/provider-cloudflare.zeroTrustGatewayLogging.ZeroTrustGatewayLoggingSettingsByRuleTypeDnsOutputReference.property.logAll"></a>

```go
func LogAll() interface{}
```

- *Type:* interface{}

---

##### `LogBlocks`<sup>Required</sup> <a name="LogBlocks" id="@cdktn/provider-cloudflare.zeroTrustGatewayLogging.ZeroTrustGatewayLoggingSettingsByRuleTypeDnsOutputReference.property.logBlocks"></a>

```go
func LogBlocks() interface{}
```

- *Type:* interface{}

---

##### `InternalValue`<sup>Optional</sup> <a name="InternalValue" id="@cdktn/provider-cloudflare.zeroTrustGatewayLogging.ZeroTrustGatewayLoggingSettingsByRuleTypeDnsOutputReference.property.internalValue"></a>

```go
func InternalValue() interface{}
```

- *Type:* interface{}

---


### ZeroTrustGatewayLoggingSettingsByRuleTypeHttpOutputReference <a name="ZeroTrustGatewayLoggingSettingsByRuleTypeHttpOutputReference" id="@cdktn/provider-cloudflare.zeroTrustGatewayLogging.ZeroTrustGatewayLoggingSettingsByRuleTypeHttpOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktn/provider-cloudflare.zeroTrustGatewayLogging.ZeroTrustGatewayLoggingSettingsByRuleTypeHttpOutputReference.Initializer"></a>

```go
import "github.com/cdktn-io/cdktn-provider-cloudflare-go/cloudflare/v14/zerotrustgatewaylogging"

zerotrustgatewaylogging.NewZeroTrustGatewayLoggingSettingsByRuleTypeHttpOutputReference(terraformResource IInterpolatingParent, terraformAttribute *string) ZeroTrustGatewayLoggingSettingsByRuleTypeHttpOutputReference
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-cloudflare.zeroTrustGatewayLogging.ZeroTrustGatewayLoggingSettingsByRuleTypeHttpOutputReference.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>github.com/open-constructs/cdk-terrain-go/cdktn.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktn/provider-cloudflare.zeroTrustGatewayLogging.ZeroTrustGatewayLoggingSettingsByRuleTypeHttpOutputReference.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>*string</code> | The attribute on the parent resource this class is referencing. |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktn/provider-cloudflare.zeroTrustGatewayLogging.ZeroTrustGatewayLoggingSettingsByRuleTypeHttpOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* github.com/open-constructs/cdk-terrain-go/cdktn.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-cloudflare.zeroTrustGatewayLogging.ZeroTrustGatewayLoggingSettingsByRuleTypeHttpOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* *string

The attribute on the parent resource this class is referencing.

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-cloudflare.zeroTrustGatewayLogging.ZeroTrustGatewayLoggingSettingsByRuleTypeHttpOutputReference.computeFqn">ComputeFqn</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-cloudflare.zeroTrustGatewayLogging.ZeroTrustGatewayLoggingSettingsByRuleTypeHttpOutputReference.getAnyMapAttribute">GetAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-cloudflare.zeroTrustGatewayLogging.ZeroTrustGatewayLoggingSettingsByRuleTypeHttpOutputReference.getBooleanAttribute">GetBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-cloudflare.zeroTrustGatewayLogging.ZeroTrustGatewayLoggingSettingsByRuleTypeHttpOutputReference.getBooleanMapAttribute">GetBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-cloudflare.zeroTrustGatewayLogging.ZeroTrustGatewayLoggingSettingsByRuleTypeHttpOutputReference.getListAttribute">GetListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-cloudflare.zeroTrustGatewayLogging.ZeroTrustGatewayLoggingSettingsByRuleTypeHttpOutputReference.getNumberAttribute">GetNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-cloudflare.zeroTrustGatewayLogging.ZeroTrustGatewayLoggingSettingsByRuleTypeHttpOutputReference.getNumberListAttribute">GetNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-cloudflare.zeroTrustGatewayLogging.ZeroTrustGatewayLoggingSettingsByRuleTypeHttpOutputReference.getNumberMapAttribute">GetNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-cloudflare.zeroTrustGatewayLogging.ZeroTrustGatewayLoggingSettingsByRuleTypeHttpOutputReference.getStringAttribute">GetStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-cloudflare.zeroTrustGatewayLogging.ZeroTrustGatewayLoggingSettingsByRuleTypeHttpOutputReference.getStringMapAttribute">GetStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-cloudflare.zeroTrustGatewayLogging.ZeroTrustGatewayLoggingSettingsByRuleTypeHttpOutputReference.interpolationForAttribute">InterpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-cloudflare.zeroTrustGatewayLogging.ZeroTrustGatewayLoggingSettingsByRuleTypeHttpOutputReference.resolve">Resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktn/provider-cloudflare.zeroTrustGatewayLogging.ZeroTrustGatewayLoggingSettingsByRuleTypeHttpOutputReference.toString">ToString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktn/provider-cloudflare.zeroTrustGatewayLogging.ZeroTrustGatewayLoggingSettingsByRuleTypeHttpOutputReference.resetLogAll">ResetLogAll</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-cloudflare.zeroTrustGatewayLogging.ZeroTrustGatewayLoggingSettingsByRuleTypeHttpOutputReference.resetLogBlocks">ResetLogBlocks</a></code> | *No description.* |

---

##### `ComputeFqn` <a name="ComputeFqn" id="@cdktn/provider-cloudflare.zeroTrustGatewayLogging.ZeroTrustGatewayLoggingSettingsByRuleTypeHttpOutputReference.computeFqn"></a>

```go
func ComputeFqn() *string
```

##### `GetAnyMapAttribute` <a name="GetAnyMapAttribute" id="@cdktn/provider-cloudflare.zeroTrustGatewayLogging.ZeroTrustGatewayLoggingSettingsByRuleTypeHttpOutputReference.getAnyMapAttribute"></a>

```go
func GetAnyMapAttribute(terraformAttribute *string) *map[string]interface{}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-cloudflare.zeroTrustGatewayLogging.ZeroTrustGatewayLoggingSettingsByRuleTypeHttpOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetBooleanAttribute` <a name="GetBooleanAttribute" id="@cdktn/provider-cloudflare.zeroTrustGatewayLogging.ZeroTrustGatewayLoggingSettingsByRuleTypeHttpOutputReference.getBooleanAttribute"></a>

```go
func GetBooleanAttribute(terraformAttribute *string) IResolvable
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-cloudflare.zeroTrustGatewayLogging.ZeroTrustGatewayLoggingSettingsByRuleTypeHttpOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetBooleanMapAttribute` <a name="GetBooleanMapAttribute" id="@cdktn/provider-cloudflare.zeroTrustGatewayLogging.ZeroTrustGatewayLoggingSettingsByRuleTypeHttpOutputReference.getBooleanMapAttribute"></a>

```go
func GetBooleanMapAttribute(terraformAttribute *string) *map[string]*bool
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-cloudflare.zeroTrustGatewayLogging.ZeroTrustGatewayLoggingSettingsByRuleTypeHttpOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetListAttribute` <a name="GetListAttribute" id="@cdktn/provider-cloudflare.zeroTrustGatewayLogging.ZeroTrustGatewayLoggingSettingsByRuleTypeHttpOutputReference.getListAttribute"></a>

```go
func GetListAttribute(terraformAttribute *string) *[]*string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-cloudflare.zeroTrustGatewayLogging.ZeroTrustGatewayLoggingSettingsByRuleTypeHttpOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberAttribute` <a name="GetNumberAttribute" id="@cdktn/provider-cloudflare.zeroTrustGatewayLogging.ZeroTrustGatewayLoggingSettingsByRuleTypeHttpOutputReference.getNumberAttribute"></a>

```go
func GetNumberAttribute(terraformAttribute *string) *f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-cloudflare.zeroTrustGatewayLogging.ZeroTrustGatewayLoggingSettingsByRuleTypeHttpOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberListAttribute` <a name="GetNumberListAttribute" id="@cdktn/provider-cloudflare.zeroTrustGatewayLogging.ZeroTrustGatewayLoggingSettingsByRuleTypeHttpOutputReference.getNumberListAttribute"></a>

```go
func GetNumberListAttribute(terraformAttribute *string) *[]*f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-cloudflare.zeroTrustGatewayLogging.ZeroTrustGatewayLoggingSettingsByRuleTypeHttpOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberMapAttribute` <a name="GetNumberMapAttribute" id="@cdktn/provider-cloudflare.zeroTrustGatewayLogging.ZeroTrustGatewayLoggingSettingsByRuleTypeHttpOutputReference.getNumberMapAttribute"></a>

```go
func GetNumberMapAttribute(terraformAttribute *string) *map[string]*f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-cloudflare.zeroTrustGatewayLogging.ZeroTrustGatewayLoggingSettingsByRuleTypeHttpOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetStringAttribute` <a name="GetStringAttribute" id="@cdktn/provider-cloudflare.zeroTrustGatewayLogging.ZeroTrustGatewayLoggingSettingsByRuleTypeHttpOutputReference.getStringAttribute"></a>

```go
func GetStringAttribute(terraformAttribute *string) *string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-cloudflare.zeroTrustGatewayLogging.ZeroTrustGatewayLoggingSettingsByRuleTypeHttpOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetStringMapAttribute` <a name="GetStringMapAttribute" id="@cdktn/provider-cloudflare.zeroTrustGatewayLogging.ZeroTrustGatewayLoggingSettingsByRuleTypeHttpOutputReference.getStringMapAttribute"></a>

```go
func GetStringMapAttribute(terraformAttribute *string) *map[string]*string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-cloudflare.zeroTrustGatewayLogging.ZeroTrustGatewayLoggingSettingsByRuleTypeHttpOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `InterpolationForAttribute` <a name="InterpolationForAttribute" id="@cdktn/provider-cloudflare.zeroTrustGatewayLogging.ZeroTrustGatewayLoggingSettingsByRuleTypeHttpOutputReference.interpolationForAttribute"></a>

```go
func InterpolationForAttribute(property *string) IResolvable
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktn/provider-cloudflare.zeroTrustGatewayLogging.ZeroTrustGatewayLoggingSettingsByRuleTypeHttpOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* *string

---

##### `Resolve` <a name="Resolve" id="@cdktn/provider-cloudflare.zeroTrustGatewayLogging.ZeroTrustGatewayLoggingSettingsByRuleTypeHttpOutputReference.resolve"></a>

```go
func Resolve(_context IResolveContext) interface{}
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktn/provider-cloudflare.zeroTrustGatewayLogging.ZeroTrustGatewayLoggingSettingsByRuleTypeHttpOutputReference.resolve.parameter._context"></a>

- *Type:* github.com/open-constructs/cdk-terrain-go/cdktn.IResolveContext

---

##### `ToString` <a name="ToString" id="@cdktn/provider-cloudflare.zeroTrustGatewayLogging.ZeroTrustGatewayLoggingSettingsByRuleTypeHttpOutputReference.toString"></a>

```go
func ToString() *string
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `ResetLogAll` <a name="ResetLogAll" id="@cdktn/provider-cloudflare.zeroTrustGatewayLogging.ZeroTrustGatewayLoggingSettingsByRuleTypeHttpOutputReference.resetLogAll"></a>

```go
func ResetLogAll()
```

##### `ResetLogBlocks` <a name="ResetLogBlocks" id="@cdktn/provider-cloudflare.zeroTrustGatewayLogging.ZeroTrustGatewayLoggingSettingsByRuleTypeHttpOutputReference.resetLogBlocks"></a>

```go
func ResetLogBlocks()
```


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-cloudflare.zeroTrustGatewayLogging.ZeroTrustGatewayLoggingSettingsByRuleTypeHttpOutputReference.property.creationStack">CreationStack</a></code> | <code>*[]*string</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktn/provider-cloudflare.zeroTrustGatewayLogging.ZeroTrustGatewayLoggingSettingsByRuleTypeHttpOutputReference.property.fqn">Fqn</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktn/provider-cloudflare.zeroTrustGatewayLogging.ZeroTrustGatewayLoggingSettingsByRuleTypeHttpOutputReference.property.logAllInput">LogAllInput</a></code> | <code>interface{}</code> | *No description.* |
| <code><a href="#@cdktn/provider-cloudflare.zeroTrustGatewayLogging.ZeroTrustGatewayLoggingSettingsByRuleTypeHttpOutputReference.property.logBlocksInput">LogBlocksInput</a></code> | <code>interface{}</code> | *No description.* |
| <code><a href="#@cdktn/provider-cloudflare.zeroTrustGatewayLogging.ZeroTrustGatewayLoggingSettingsByRuleTypeHttpOutputReference.property.logAll">LogAll</a></code> | <code>interface{}</code> | *No description.* |
| <code><a href="#@cdktn/provider-cloudflare.zeroTrustGatewayLogging.ZeroTrustGatewayLoggingSettingsByRuleTypeHttpOutputReference.property.logBlocks">LogBlocks</a></code> | <code>interface{}</code> | *No description.* |
| <code><a href="#@cdktn/provider-cloudflare.zeroTrustGatewayLogging.ZeroTrustGatewayLoggingSettingsByRuleTypeHttpOutputReference.property.internalValue">InternalValue</a></code> | <code>interface{}</code> | *No description.* |

---

##### `CreationStack`<sup>Required</sup> <a name="CreationStack" id="@cdktn/provider-cloudflare.zeroTrustGatewayLogging.ZeroTrustGatewayLoggingSettingsByRuleTypeHttpOutputReference.property.creationStack"></a>

```go
func CreationStack() *[]*string
```

- *Type:* *[]*string

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `Fqn`<sup>Required</sup> <a name="Fqn" id="@cdktn/provider-cloudflare.zeroTrustGatewayLogging.ZeroTrustGatewayLoggingSettingsByRuleTypeHttpOutputReference.property.fqn"></a>

```go
func Fqn() *string
```

- *Type:* *string

---

##### `LogAllInput`<sup>Optional</sup> <a name="LogAllInput" id="@cdktn/provider-cloudflare.zeroTrustGatewayLogging.ZeroTrustGatewayLoggingSettingsByRuleTypeHttpOutputReference.property.logAllInput"></a>

```go
func LogAllInput() interface{}
```

- *Type:* interface{}

---

##### `LogBlocksInput`<sup>Optional</sup> <a name="LogBlocksInput" id="@cdktn/provider-cloudflare.zeroTrustGatewayLogging.ZeroTrustGatewayLoggingSettingsByRuleTypeHttpOutputReference.property.logBlocksInput"></a>

```go
func LogBlocksInput() interface{}
```

- *Type:* interface{}

---

##### `LogAll`<sup>Required</sup> <a name="LogAll" id="@cdktn/provider-cloudflare.zeroTrustGatewayLogging.ZeroTrustGatewayLoggingSettingsByRuleTypeHttpOutputReference.property.logAll"></a>

```go
func LogAll() interface{}
```

- *Type:* interface{}

---

##### `LogBlocks`<sup>Required</sup> <a name="LogBlocks" id="@cdktn/provider-cloudflare.zeroTrustGatewayLogging.ZeroTrustGatewayLoggingSettingsByRuleTypeHttpOutputReference.property.logBlocks"></a>

```go
func LogBlocks() interface{}
```

- *Type:* interface{}

---

##### `InternalValue`<sup>Optional</sup> <a name="InternalValue" id="@cdktn/provider-cloudflare.zeroTrustGatewayLogging.ZeroTrustGatewayLoggingSettingsByRuleTypeHttpOutputReference.property.internalValue"></a>

```go
func InternalValue() interface{}
```

- *Type:* interface{}

---


### ZeroTrustGatewayLoggingSettingsByRuleTypeL4OutputReference <a name="ZeroTrustGatewayLoggingSettingsByRuleTypeL4OutputReference" id="@cdktn/provider-cloudflare.zeroTrustGatewayLogging.ZeroTrustGatewayLoggingSettingsByRuleTypeL4OutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktn/provider-cloudflare.zeroTrustGatewayLogging.ZeroTrustGatewayLoggingSettingsByRuleTypeL4OutputReference.Initializer"></a>

```go
import "github.com/cdktn-io/cdktn-provider-cloudflare-go/cloudflare/v14/zerotrustgatewaylogging"

zerotrustgatewaylogging.NewZeroTrustGatewayLoggingSettingsByRuleTypeL4OutputReference(terraformResource IInterpolatingParent, terraformAttribute *string) ZeroTrustGatewayLoggingSettingsByRuleTypeL4OutputReference
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-cloudflare.zeroTrustGatewayLogging.ZeroTrustGatewayLoggingSettingsByRuleTypeL4OutputReference.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>github.com/open-constructs/cdk-terrain-go/cdktn.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktn/provider-cloudflare.zeroTrustGatewayLogging.ZeroTrustGatewayLoggingSettingsByRuleTypeL4OutputReference.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>*string</code> | The attribute on the parent resource this class is referencing. |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktn/provider-cloudflare.zeroTrustGatewayLogging.ZeroTrustGatewayLoggingSettingsByRuleTypeL4OutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* github.com/open-constructs/cdk-terrain-go/cdktn.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-cloudflare.zeroTrustGatewayLogging.ZeroTrustGatewayLoggingSettingsByRuleTypeL4OutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* *string

The attribute on the parent resource this class is referencing.

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-cloudflare.zeroTrustGatewayLogging.ZeroTrustGatewayLoggingSettingsByRuleTypeL4OutputReference.computeFqn">ComputeFqn</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-cloudflare.zeroTrustGatewayLogging.ZeroTrustGatewayLoggingSettingsByRuleTypeL4OutputReference.getAnyMapAttribute">GetAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-cloudflare.zeroTrustGatewayLogging.ZeroTrustGatewayLoggingSettingsByRuleTypeL4OutputReference.getBooleanAttribute">GetBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-cloudflare.zeroTrustGatewayLogging.ZeroTrustGatewayLoggingSettingsByRuleTypeL4OutputReference.getBooleanMapAttribute">GetBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-cloudflare.zeroTrustGatewayLogging.ZeroTrustGatewayLoggingSettingsByRuleTypeL4OutputReference.getListAttribute">GetListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-cloudflare.zeroTrustGatewayLogging.ZeroTrustGatewayLoggingSettingsByRuleTypeL4OutputReference.getNumberAttribute">GetNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-cloudflare.zeroTrustGatewayLogging.ZeroTrustGatewayLoggingSettingsByRuleTypeL4OutputReference.getNumberListAttribute">GetNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-cloudflare.zeroTrustGatewayLogging.ZeroTrustGatewayLoggingSettingsByRuleTypeL4OutputReference.getNumberMapAttribute">GetNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-cloudflare.zeroTrustGatewayLogging.ZeroTrustGatewayLoggingSettingsByRuleTypeL4OutputReference.getStringAttribute">GetStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-cloudflare.zeroTrustGatewayLogging.ZeroTrustGatewayLoggingSettingsByRuleTypeL4OutputReference.getStringMapAttribute">GetStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-cloudflare.zeroTrustGatewayLogging.ZeroTrustGatewayLoggingSettingsByRuleTypeL4OutputReference.interpolationForAttribute">InterpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-cloudflare.zeroTrustGatewayLogging.ZeroTrustGatewayLoggingSettingsByRuleTypeL4OutputReference.resolve">Resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktn/provider-cloudflare.zeroTrustGatewayLogging.ZeroTrustGatewayLoggingSettingsByRuleTypeL4OutputReference.toString">ToString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktn/provider-cloudflare.zeroTrustGatewayLogging.ZeroTrustGatewayLoggingSettingsByRuleTypeL4OutputReference.resetLogAll">ResetLogAll</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-cloudflare.zeroTrustGatewayLogging.ZeroTrustGatewayLoggingSettingsByRuleTypeL4OutputReference.resetLogBlocks">ResetLogBlocks</a></code> | *No description.* |

---

##### `ComputeFqn` <a name="ComputeFqn" id="@cdktn/provider-cloudflare.zeroTrustGatewayLogging.ZeroTrustGatewayLoggingSettingsByRuleTypeL4OutputReference.computeFqn"></a>

```go
func ComputeFqn() *string
```

##### `GetAnyMapAttribute` <a name="GetAnyMapAttribute" id="@cdktn/provider-cloudflare.zeroTrustGatewayLogging.ZeroTrustGatewayLoggingSettingsByRuleTypeL4OutputReference.getAnyMapAttribute"></a>

```go
func GetAnyMapAttribute(terraformAttribute *string) *map[string]interface{}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-cloudflare.zeroTrustGatewayLogging.ZeroTrustGatewayLoggingSettingsByRuleTypeL4OutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetBooleanAttribute` <a name="GetBooleanAttribute" id="@cdktn/provider-cloudflare.zeroTrustGatewayLogging.ZeroTrustGatewayLoggingSettingsByRuleTypeL4OutputReference.getBooleanAttribute"></a>

```go
func GetBooleanAttribute(terraformAttribute *string) IResolvable
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-cloudflare.zeroTrustGatewayLogging.ZeroTrustGatewayLoggingSettingsByRuleTypeL4OutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetBooleanMapAttribute` <a name="GetBooleanMapAttribute" id="@cdktn/provider-cloudflare.zeroTrustGatewayLogging.ZeroTrustGatewayLoggingSettingsByRuleTypeL4OutputReference.getBooleanMapAttribute"></a>

```go
func GetBooleanMapAttribute(terraformAttribute *string) *map[string]*bool
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-cloudflare.zeroTrustGatewayLogging.ZeroTrustGatewayLoggingSettingsByRuleTypeL4OutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetListAttribute` <a name="GetListAttribute" id="@cdktn/provider-cloudflare.zeroTrustGatewayLogging.ZeroTrustGatewayLoggingSettingsByRuleTypeL4OutputReference.getListAttribute"></a>

```go
func GetListAttribute(terraformAttribute *string) *[]*string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-cloudflare.zeroTrustGatewayLogging.ZeroTrustGatewayLoggingSettingsByRuleTypeL4OutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberAttribute` <a name="GetNumberAttribute" id="@cdktn/provider-cloudflare.zeroTrustGatewayLogging.ZeroTrustGatewayLoggingSettingsByRuleTypeL4OutputReference.getNumberAttribute"></a>

```go
func GetNumberAttribute(terraformAttribute *string) *f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-cloudflare.zeroTrustGatewayLogging.ZeroTrustGatewayLoggingSettingsByRuleTypeL4OutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberListAttribute` <a name="GetNumberListAttribute" id="@cdktn/provider-cloudflare.zeroTrustGatewayLogging.ZeroTrustGatewayLoggingSettingsByRuleTypeL4OutputReference.getNumberListAttribute"></a>

```go
func GetNumberListAttribute(terraformAttribute *string) *[]*f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-cloudflare.zeroTrustGatewayLogging.ZeroTrustGatewayLoggingSettingsByRuleTypeL4OutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberMapAttribute` <a name="GetNumberMapAttribute" id="@cdktn/provider-cloudflare.zeroTrustGatewayLogging.ZeroTrustGatewayLoggingSettingsByRuleTypeL4OutputReference.getNumberMapAttribute"></a>

```go
func GetNumberMapAttribute(terraformAttribute *string) *map[string]*f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-cloudflare.zeroTrustGatewayLogging.ZeroTrustGatewayLoggingSettingsByRuleTypeL4OutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetStringAttribute` <a name="GetStringAttribute" id="@cdktn/provider-cloudflare.zeroTrustGatewayLogging.ZeroTrustGatewayLoggingSettingsByRuleTypeL4OutputReference.getStringAttribute"></a>

```go
func GetStringAttribute(terraformAttribute *string) *string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-cloudflare.zeroTrustGatewayLogging.ZeroTrustGatewayLoggingSettingsByRuleTypeL4OutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetStringMapAttribute` <a name="GetStringMapAttribute" id="@cdktn/provider-cloudflare.zeroTrustGatewayLogging.ZeroTrustGatewayLoggingSettingsByRuleTypeL4OutputReference.getStringMapAttribute"></a>

```go
func GetStringMapAttribute(terraformAttribute *string) *map[string]*string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-cloudflare.zeroTrustGatewayLogging.ZeroTrustGatewayLoggingSettingsByRuleTypeL4OutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `InterpolationForAttribute` <a name="InterpolationForAttribute" id="@cdktn/provider-cloudflare.zeroTrustGatewayLogging.ZeroTrustGatewayLoggingSettingsByRuleTypeL4OutputReference.interpolationForAttribute"></a>

```go
func InterpolationForAttribute(property *string) IResolvable
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktn/provider-cloudflare.zeroTrustGatewayLogging.ZeroTrustGatewayLoggingSettingsByRuleTypeL4OutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* *string

---

##### `Resolve` <a name="Resolve" id="@cdktn/provider-cloudflare.zeroTrustGatewayLogging.ZeroTrustGatewayLoggingSettingsByRuleTypeL4OutputReference.resolve"></a>

```go
func Resolve(_context IResolveContext) interface{}
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktn/provider-cloudflare.zeroTrustGatewayLogging.ZeroTrustGatewayLoggingSettingsByRuleTypeL4OutputReference.resolve.parameter._context"></a>

- *Type:* github.com/open-constructs/cdk-terrain-go/cdktn.IResolveContext

---

##### `ToString` <a name="ToString" id="@cdktn/provider-cloudflare.zeroTrustGatewayLogging.ZeroTrustGatewayLoggingSettingsByRuleTypeL4OutputReference.toString"></a>

```go
func ToString() *string
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `ResetLogAll` <a name="ResetLogAll" id="@cdktn/provider-cloudflare.zeroTrustGatewayLogging.ZeroTrustGatewayLoggingSettingsByRuleTypeL4OutputReference.resetLogAll"></a>

```go
func ResetLogAll()
```

##### `ResetLogBlocks` <a name="ResetLogBlocks" id="@cdktn/provider-cloudflare.zeroTrustGatewayLogging.ZeroTrustGatewayLoggingSettingsByRuleTypeL4OutputReference.resetLogBlocks"></a>

```go
func ResetLogBlocks()
```


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-cloudflare.zeroTrustGatewayLogging.ZeroTrustGatewayLoggingSettingsByRuleTypeL4OutputReference.property.creationStack">CreationStack</a></code> | <code>*[]*string</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktn/provider-cloudflare.zeroTrustGatewayLogging.ZeroTrustGatewayLoggingSettingsByRuleTypeL4OutputReference.property.fqn">Fqn</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktn/provider-cloudflare.zeroTrustGatewayLogging.ZeroTrustGatewayLoggingSettingsByRuleTypeL4OutputReference.property.logAllInput">LogAllInput</a></code> | <code>interface{}</code> | *No description.* |
| <code><a href="#@cdktn/provider-cloudflare.zeroTrustGatewayLogging.ZeroTrustGatewayLoggingSettingsByRuleTypeL4OutputReference.property.logBlocksInput">LogBlocksInput</a></code> | <code>interface{}</code> | *No description.* |
| <code><a href="#@cdktn/provider-cloudflare.zeroTrustGatewayLogging.ZeroTrustGatewayLoggingSettingsByRuleTypeL4OutputReference.property.logAll">LogAll</a></code> | <code>interface{}</code> | *No description.* |
| <code><a href="#@cdktn/provider-cloudflare.zeroTrustGatewayLogging.ZeroTrustGatewayLoggingSettingsByRuleTypeL4OutputReference.property.logBlocks">LogBlocks</a></code> | <code>interface{}</code> | *No description.* |
| <code><a href="#@cdktn/provider-cloudflare.zeroTrustGatewayLogging.ZeroTrustGatewayLoggingSettingsByRuleTypeL4OutputReference.property.internalValue">InternalValue</a></code> | <code>interface{}</code> | *No description.* |

---

##### `CreationStack`<sup>Required</sup> <a name="CreationStack" id="@cdktn/provider-cloudflare.zeroTrustGatewayLogging.ZeroTrustGatewayLoggingSettingsByRuleTypeL4OutputReference.property.creationStack"></a>

```go
func CreationStack() *[]*string
```

- *Type:* *[]*string

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `Fqn`<sup>Required</sup> <a name="Fqn" id="@cdktn/provider-cloudflare.zeroTrustGatewayLogging.ZeroTrustGatewayLoggingSettingsByRuleTypeL4OutputReference.property.fqn"></a>

```go
func Fqn() *string
```

- *Type:* *string

---

##### `LogAllInput`<sup>Optional</sup> <a name="LogAllInput" id="@cdktn/provider-cloudflare.zeroTrustGatewayLogging.ZeroTrustGatewayLoggingSettingsByRuleTypeL4OutputReference.property.logAllInput"></a>

```go
func LogAllInput() interface{}
```

- *Type:* interface{}

---

##### `LogBlocksInput`<sup>Optional</sup> <a name="LogBlocksInput" id="@cdktn/provider-cloudflare.zeroTrustGatewayLogging.ZeroTrustGatewayLoggingSettingsByRuleTypeL4OutputReference.property.logBlocksInput"></a>

```go
func LogBlocksInput() interface{}
```

- *Type:* interface{}

---

##### `LogAll`<sup>Required</sup> <a name="LogAll" id="@cdktn/provider-cloudflare.zeroTrustGatewayLogging.ZeroTrustGatewayLoggingSettingsByRuleTypeL4OutputReference.property.logAll"></a>

```go
func LogAll() interface{}
```

- *Type:* interface{}

---

##### `LogBlocks`<sup>Required</sup> <a name="LogBlocks" id="@cdktn/provider-cloudflare.zeroTrustGatewayLogging.ZeroTrustGatewayLoggingSettingsByRuleTypeL4OutputReference.property.logBlocks"></a>

```go
func LogBlocks() interface{}
```

- *Type:* interface{}

---

##### `InternalValue`<sup>Optional</sup> <a name="InternalValue" id="@cdktn/provider-cloudflare.zeroTrustGatewayLogging.ZeroTrustGatewayLoggingSettingsByRuleTypeL4OutputReference.property.internalValue"></a>

```go
func InternalValue() interface{}
```

- *Type:* interface{}

---


### ZeroTrustGatewayLoggingSettingsByRuleTypeOutputReference <a name="ZeroTrustGatewayLoggingSettingsByRuleTypeOutputReference" id="@cdktn/provider-cloudflare.zeroTrustGatewayLogging.ZeroTrustGatewayLoggingSettingsByRuleTypeOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktn/provider-cloudflare.zeroTrustGatewayLogging.ZeroTrustGatewayLoggingSettingsByRuleTypeOutputReference.Initializer"></a>

```go
import "github.com/cdktn-io/cdktn-provider-cloudflare-go/cloudflare/v14/zerotrustgatewaylogging"

zerotrustgatewaylogging.NewZeroTrustGatewayLoggingSettingsByRuleTypeOutputReference(terraformResource IInterpolatingParent, terraformAttribute *string) ZeroTrustGatewayLoggingSettingsByRuleTypeOutputReference
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-cloudflare.zeroTrustGatewayLogging.ZeroTrustGatewayLoggingSettingsByRuleTypeOutputReference.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>github.com/open-constructs/cdk-terrain-go/cdktn.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktn/provider-cloudflare.zeroTrustGatewayLogging.ZeroTrustGatewayLoggingSettingsByRuleTypeOutputReference.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>*string</code> | The attribute on the parent resource this class is referencing. |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktn/provider-cloudflare.zeroTrustGatewayLogging.ZeroTrustGatewayLoggingSettingsByRuleTypeOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* github.com/open-constructs/cdk-terrain-go/cdktn.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-cloudflare.zeroTrustGatewayLogging.ZeroTrustGatewayLoggingSettingsByRuleTypeOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* *string

The attribute on the parent resource this class is referencing.

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-cloudflare.zeroTrustGatewayLogging.ZeroTrustGatewayLoggingSettingsByRuleTypeOutputReference.computeFqn">ComputeFqn</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-cloudflare.zeroTrustGatewayLogging.ZeroTrustGatewayLoggingSettingsByRuleTypeOutputReference.getAnyMapAttribute">GetAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-cloudflare.zeroTrustGatewayLogging.ZeroTrustGatewayLoggingSettingsByRuleTypeOutputReference.getBooleanAttribute">GetBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-cloudflare.zeroTrustGatewayLogging.ZeroTrustGatewayLoggingSettingsByRuleTypeOutputReference.getBooleanMapAttribute">GetBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-cloudflare.zeroTrustGatewayLogging.ZeroTrustGatewayLoggingSettingsByRuleTypeOutputReference.getListAttribute">GetListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-cloudflare.zeroTrustGatewayLogging.ZeroTrustGatewayLoggingSettingsByRuleTypeOutputReference.getNumberAttribute">GetNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-cloudflare.zeroTrustGatewayLogging.ZeroTrustGatewayLoggingSettingsByRuleTypeOutputReference.getNumberListAttribute">GetNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-cloudflare.zeroTrustGatewayLogging.ZeroTrustGatewayLoggingSettingsByRuleTypeOutputReference.getNumberMapAttribute">GetNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-cloudflare.zeroTrustGatewayLogging.ZeroTrustGatewayLoggingSettingsByRuleTypeOutputReference.getStringAttribute">GetStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-cloudflare.zeroTrustGatewayLogging.ZeroTrustGatewayLoggingSettingsByRuleTypeOutputReference.getStringMapAttribute">GetStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-cloudflare.zeroTrustGatewayLogging.ZeroTrustGatewayLoggingSettingsByRuleTypeOutputReference.interpolationForAttribute">InterpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-cloudflare.zeroTrustGatewayLogging.ZeroTrustGatewayLoggingSettingsByRuleTypeOutputReference.resolve">Resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktn/provider-cloudflare.zeroTrustGatewayLogging.ZeroTrustGatewayLoggingSettingsByRuleTypeOutputReference.toString">ToString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktn/provider-cloudflare.zeroTrustGatewayLogging.ZeroTrustGatewayLoggingSettingsByRuleTypeOutputReference.putDns">PutDns</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-cloudflare.zeroTrustGatewayLogging.ZeroTrustGatewayLoggingSettingsByRuleTypeOutputReference.putHttp">PutHttp</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-cloudflare.zeroTrustGatewayLogging.ZeroTrustGatewayLoggingSettingsByRuleTypeOutputReference.putL4">PutL4</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-cloudflare.zeroTrustGatewayLogging.ZeroTrustGatewayLoggingSettingsByRuleTypeOutputReference.resetDns">ResetDns</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-cloudflare.zeroTrustGatewayLogging.ZeroTrustGatewayLoggingSettingsByRuleTypeOutputReference.resetHttp">ResetHttp</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-cloudflare.zeroTrustGatewayLogging.ZeroTrustGatewayLoggingSettingsByRuleTypeOutputReference.resetL4">ResetL4</a></code> | *No description.* |

---

##### `ComputeFqn` <a name="ComputeFqn" id="@cdktn/provider-cloudflare.zeroTrustGatewayLogging.ZeroTrustGatewayLoggingSettingsByRuleTypeOutputReference.computeFqn"></a>

```go
func ComputeFqn() *string
```

##### `GetAnyMapAttribute` <a name="GetAnyMapAttribute" id="@cdktn/provider-cloudflare.zeroTrustGatewayLogging.ZeroTrustGatewayLoggingSettingsByRuleTypeOutputReference.getAnyMapAttribute"></a>

```go
func GetAnyMapAttribute(terraformAttribute *string) *map[string]interface{}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-cloudflare.zeroTrustGatewayLogging.ZeroTrustGatewayLoggingSettingsByRuleTypeOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetBooleanAttribute` <a name="GetBooleanAttribute" id="@cdktn/provider-cloudflare.zeroTrustGatewayLogging.ZeroTrustGatewayLoggingSettingsByRuleTypeOutputReference.getBooleanAttribute"></a>

```go
func GetBooleanAttribute(terraformAttribute *string) IResolvable
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-cloudflare.zeroTrustGatewayLogging.ZeroTrustGatewayLoggingSettingsByRuleTypeOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetBooleanMapAttribute` <a name="GetBooleanMapAttribute" id="@cdktn/provider-cloudflare.zeroTrustGatewayLogging.ZeroTrustGatewayLoggingSettingsByRuleTypeOutputReference.getBooleanMapAttribute"></a>

```go
func GetBooleanMapAttribute(terraformAttribute *string) *map[string]*bool
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-cloudflare.zeroTrustGatewayLogging.ZeroTrustGatewayLoggingSettingsByRuleTypeOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetListAttribute` <a name="GetListAttribute" id="@cdktn/provider-cloudflare.zeroTrustGatewayLogging.ZeroTrustGatewayLoggingSettingsByRuleTypeOutputReference.getListAttribute"></a>

```go
func GetListAttribute(terraformAttribute *string) *[]*string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-cloudflare.zeroTrustGatewayLogging.ZeroTrustGatewayLoggingSettingsByRuleTypeOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberAttribute` <a name="GetNumberAttribute" id="@cdktn/provider-cloudflare.zeroTrustGatewayLogging.ZeroTrustGatewayLoggingSettingsByRuleTypeOutputReference.getNumberAttribute"></a>

```go
func GetNumberAttribute(terraformAttribute *string) *f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-cloudflare.zeroTrustGatewayLogging.ZeroTrustGatewayLoggingSettingsByRuleTypeOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberListAttribute` <a name="GetNumberListAttribute" id="@cdktn/provider-cloudflare.zeroTrustGatewayLogging.ZeroTrustGatewayLoggingSettingsByRuleTypeOutputReference.getNumberListAttribute"></a>

```go
func GetNumberListAttribute(terraformAttribute *string) *[]*f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-cloudflare.zeroTrustGatewayLogging.ZeroTrustGatewayLoggingSettingsByRuleTypeOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberMapAttribute` <a name="GetNumberMapAttribute" id="@cdktn/provider-cloudflare.zeroTrustGatewayLogging.ZeroTrustGatewayLoggingSettingsByRuleTypeOutputReference.getNumberMapAttribute"></a>

```go
func GetNumberMapAttribute(terraformAttribute *string) *map[string]*f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-cloudflare.zeroTrustGatewayLogging.ZeroTrustGatewayLoggingSettingsByRuleTypeOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetStringAttribute` <a name="GetStringAttribute" id="@cdktn/provider-cloudflare.zeroTrustGatewayLogging.ZeroTrustGatewayLoggingSettingsByRuleTypeOutputReference.getStringAttribute"></a>

```go
func GetStringAttribute(terraformAttribute *string) *string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-cloudflare.zeroTrustGatewayLogging.ZeroTrustGatewayLoggingSettingsByRuleTypeOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetStringMapAttribute` <a name="GetStringMapAttribute" id="@cdktn/provider-cloudflare.zeroTrustGatewayLogging.ZeroTrustGatewayLoggingSettingsByRuleTypeOutputReference.getStringMapAttribute"></a>

```go
func GetStringMapAttribute(terraformAttribute *string) *map[string]*string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-cloudflare.zeroTrustGatewayLogging.ZeroTrustGatewayLoggingSettingsByRuleTypeOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `InterpolationForAttribute` <a name="InterpolationForAttribute" id="@cdktn/provider-cloudflare.zeroTrustGatewayLogging.ZeroTrustGatewayLoggingSettingsByRuleTypeOutputReference.interpolationForAttribute"></a>

```go
func InterpolationForAttribute(property *string) IResolvable
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktn/provider-cloudflare.zeroTrustGatewayLogging.ZeroTrustGatewayLoggingSettingsByRuleTypeOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* *string

---

##### `Resolve` <a name="Resolve" id="@cdktn/provider-cloudflare.zeroTrustGatewayLogging.ZeroTrustGatewayLoggingSettingsByRuleTypeOutputReference.resolve"></a>

```go
func Resolve(_context IResolveContext) interface{}
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktn/provider-cloudflare.zeroTrustGatewayLogging.ZeroTrustGatewayLoggingSettingsByRuleTypeOutputReference.resolve.parameter._context"></a>

- *Type:* github.com/open-constructs/cdk-terrain-go/cdktn.IResolveContext

---

##### `ToString` <a name="ToString" id="@cdktn/provider-cloudflare.zeroTrustGatewayLogging.ZeroTrustGatewayLoggingSettingsByRuleTypeOutputReference.toString"></a>

```go
func ToString() *string
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `PutDns` <a name="PutDns" id="@cdktn/provider-cloudflare.zeroTrustGatewayLogging.ZeroTrustGatewayLoggingSettingsByRuleTypeOutputReference.putDns"></a>

```go
func PutDns(value ZeroTrustGatewayLoggingSettingsByRuleTypeDns)
```

###### `value`<sup>Required</sup> <a name="value" id="@cdktn/provider-cloudflare.zeroTrustGatewayLogging.ZeroTrustGatewayLoggingSettingsByRuleTypeOutputReference.putDns.parameter.value"></a>

- *Type:* <a href="#@cdktn/provider-cloudflare.zeroTrustGatewayLogging.ZeroTrustGatewayLoggingSettingsByRuleTypeDns">ZeroTrustGatewayLoggingSettingsByRuleTypeDns</a>

---

##### `PutHttp` <a name="PutHttp" id="@cdktn/provider-cloudflare.zeroTrustGatewayLogging.ZeroTrustGatewayLoggingSettingsByRuleTypeOutputReference.putHttp"></a>

```go
func PutHttp(value ZeroTrustGatewayLoggingSettingsByRuleTypeHttp)
```

###### `value`<sup>Required</sup> <a name="value" id="@cdktn/provider-cloudflare.zeroTrustGatewayLogging.ZeroTrustGatewayLoggingSettingsByRuleTypeOutputReference.putHttp.parameter.value"></a>

- *Type:* <a href="#@cdktn/provider-cloudflare.zeroTrustGatewayLogging.ZeroTrustGatewayLoggingSettingsByRuleTypeHttp">ZeroTrustGatewayLoggingSettingsByRuleTypeHttp</a>

---

##### `PutL4` <a name="PutL4" id="@cdktn/provider-cloudflare.zeroTrustGatewayLogging.ZeroTrustGatewayLoggingSettingsByRuleTypeOutputReference.putL4"></a>

```go
func PutL4(value ZeroTrustGatewayLoggingSettingsByRuleTypeL4)
```

###### `value`<sup>Required</sup> <a name="value" id="@cdktn/provider-cloudflare.zeroTrustGatewayLogging.ZeroTrustGatewayLoggingSettingsByRuleTypeOutputReference.putL4.parameter.value"></a>

- *Type:* <a href="#@cdktn/provider-cloudflare.zeroTrustGatewayLogging.ZeroTrustGatewayLoggingSettingsByRuleTypeL4">ZeroTrustGatewayLoggingSettingsByRuleTypeL4</a>

---

##### `ResetDns` <a name="ResetDns" id="@cdktn/provider-cloudflare.zeroTrustGatewayLogging.ZeroTrustGatewayLoggingSettingsByRuleTypeOutputReference.resetDns"></a>

```go
func ResetDns()
```

##### `ResetHttp` <a name="ResetHttp" id="@cdktn/provider-cloudflare.zeroTrustGatewayLogging.ZeroTrustGatewayLoggingSettingsByRuleTypeOutputReference.resetHttp"></a>

```go
func ResetHttp()
```

##### `ResetL4` <a name="ResetL4" id="@cdktn/provider-cloudflare.zeroTrustGatewayLogging.ZeroTrustGatewayLoggingSettingsByRuleTypeOutputReference.resetL4"></a>

```go
func ResetL4()
```


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-cloudflare.zeroTrustGatewayLogging.ZeroTrustGatewayLoggingSettingsByRuleTypeOutputReference.property.creationStack">CreationStack</a></code> | <code>*[]*string</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktn/provider-cloudflare.zeroTrustGatewayLogging.ZeroTrustGatewayLoggingSettingsByRuleTypeOutputReference.property.fqn">Fqn</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktn/provider-cloudflare.zeroTrustGatewayLogging.ZeroTrustGatewayLoggingSettingsByRuleTypeOutputReference.property.dns">Dns</a></code> | <code><a href="#@cdktn/provider-cloudflare.zeroTrustGatewayLogging.ZeroTrustGatewayLoggingSettingsByRuleTypeDnsOutputReference">ZeroTrustGatewayLoggingSettingsByRuleTypeDnsOutputReference</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-cloudflare.zeroTrustGatewayLogging.ZeroTrustGatewayLoggingSettingsByRuleTypeOutputReference.property.http">Http</a></code> | <code><a href="#@cdktn/provider-cloudflare.zeroTrustGatewayLogging.ZeroTrustGatewayLoggingSettingsByRuleTypeHttpOutputReference">ZeroTrustGatewayLoggingSettingsByRuleTypeHttpOutputReference</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-cloudflare.zeroTrustGatewayLogging.ZeroTrustGatewayLoggingSettingsByRuleTypeOutputReference.property.l4">L4</a></code> | <code><a href="#@cdktn/provider-cloudflare.zeroTrustGatewayLogging.ZeroTrustGatewayLoggingSettingsByRuleTypeL4OutputReference">ZeroTrustGatewayLoggingSettingsByRuleTypeL4OutputReference</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-cloudflare.zeroTrustGatewayLogging.ZeroTrustGatewayLoggingSettingsByRuleTypeOutputReference.property.dnsInput">DnsInput</a></code> | <code>interface{}</code> | *No description.* |
| <code><a href="#@cdktn/provider-cloudflare.zeroTrustGatewayLogging.ZeroTrustGatewayLoggingSettingsByRuleTypeOutputReference.property.httpInput">HttpInput</a></code> | <code>interface{}</code> | *No description.* |
| <code><a href="#@cdktn/provider-cloudflare.zeroTrustGatewayLogging.ZeroTrustGatewayLoggingSettingsByRuleTypeOutputReference.property.l4Input">L4Input</a></code> | <code>interface{}</code> | *No description.* |
| <code><a href="#@cdktn/provider-cloudflare.zeroTrustGatewayLogging.ZeroTrustGatewayLoggingSettingsByRuleTypeOutputReference.property.internalValue">InternalValue</a></code> | <code>interface{}</code> | *No description.* |

---

##### `CreationStack`<sup>Required</sup> <a name="CreationStack" id="@cdktn/provider-cloudflare.zeroTrustGatewayLogging.ZeroTrustGatewayLoggingSettingsByRuleTypeOutputReference.property.creationStack"></a>

```go
func CreationStack() *[]*string
```

- *Type:* *[]*string

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `Fqn`<sup>Required</sup> <a name="Fqn" id="@cdktn/provider-cloudflare.zeroTrustGatewayLogging.ZeroTrustGatewayLoggingSettingsByRuleTypeOutputReference.property.fqn"></a>

```go
func Fqn() *string
```

- *Type:* *string

---

##### `Dns`<sup>Required</sup> <a name="Dns" id="@cdktn/provider-cloudflare.zeroTrustGatewayLogging.ZeroTrustGatewayLoggingSettingsByRuleTypeOutputReference.property.dns"></a>

```go
func Dns() ZeroTrustGatewayLoggingSettingsByRuleTypeDnsOutputReference
```

- *Type:* <a href="#@cdktn/provider-cloudflare.zeroTrustGatewayLogging.ZeroTrustGatewayLoggingSettingsByRuleTypeDnsOutputReference">ZeroTrustGatewayLoggingSettingsByRuleTypeDnsOutputReference</a>

---

##### `Http`<sup>Required</sup> <a name="Http" id="@cdktn/provider-cloudflare.zeroTrustGatewayLogging.ZeroTrustGatewayLoggingSettingsByRuleTypeOutputReference.property.http"></a>

```go
func Http() ZeroTrustGatewayLoggingSettingsByRuleTypeHttpOutputReference
```

- *Type:* <a href="#@cdktn/provider-cloudflare.zeroTrustGatewayLogging.ZeroTrustGatewayLoggingSettingsByRuleTypeHttpOutputReference">ZeroTrustGatewayLoggingSettingsByRuleTypeHttpOutputReference</a>

---

##### `L4`<sup>Required</sup> <a name="L4" id="@cdktn/provider-cloudflare.zeroTrustGatewayLogging.ZeroTrustGatewayLoggingSettingsByRuleTypeOutputReference.property.l4"></a>

```go
func L4() ZeroTrustGatewayLoggingSettingsByRuleTypeL4OutputReference
```

- *Type:* <a href="#@cdktn/provider-cloudflare.zeroTrustGatewayLogging.ZeroTrustGatewayLoggingSettingsByRuleTypeL4OutputReference">ZeroTrustGatewayLoggingSettingsByRuleTypeL4OutputReference</a>

---

##### `DnsInput`<sup>Optional</sup> <a name="DnsInput" id="@cdktn/provider-cloudflare.zeroTrustGatewayLogging.ZeroTrustGatewayLoggingSettingsByRuleTypeOutputReference.property.dnsInput"></a>

```go
func DnsInput() interface{}
```

- *Type:* interface{}

---

##### `HttpInput`<sup>Optional</sup> <a name="HttpInput" id="@cdktn/provider-cloudflare.zeroTrustGatewayLogging.ZeroTrustGatewayLoggingSettingsByRuleTypeOutputReference.property.httpInput"></a>

```go
func HttpInput() interface{}
```

- *Type:* interface{}

---

##### `L4Input`<sup>Optional</sup> <a name="L4Input" id="@cdktn/provider-cloudflare.zeroTrustGatewayLogging.ZeroTrustGatewayLoggingSettingsByRuleTypeOutputReference.property.l4Input"></a>

```go
func L4Input() interface{}
```

- *Type:* interface{}

---

##### `InternalValue`<sup>Optional</sup> <a name="InternalValue" id="@cdktn/provider-cloudflare.zeroTrustGatewayLogging.ZeroTrustGatewayLoggingSettingsByRuleTypeOutputReference.property.internalValue"></a>

```go
func InternalValue() interface{}
```

- *Type:* interface{}

---



