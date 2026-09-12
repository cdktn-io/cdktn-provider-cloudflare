# `zeroTrustResourceLibraryApplication` Submodule <a name="`zeroTrustResourceLibraryApplication` Submodule" id="@cdktn/provider-cloudflare.zeroTrustResourceLibraryApplication"></a>

## Constructs <a name="Constructs" id="Constructs"></a>

### ZeroTrustResourceLibraryApplication <a name="ZeroTrustResourceLibraryApplication" id="@cdktn/provider-cloudflare.zeroTrustResourceLibraryApplication.ZeroTrustResourceLibraryApplication"></a>

Represents a {@link https://registry.terraform.io/providers/cloudflare/cloudflare/5.25.0/docs/resources/zero_trust_resource_library_application cloudflare_zero_trust_resource_library_application}.

#### Initializers <a name="Initializers" id="@cdktn/provider-cloudflare.zeroTrustResourceLibraryApplication.ZeroTrustResourceLibraryApplication.Initializer"></a>

```go
import "github.com/cdktn-io/cdktn-provider-cloudflare-go/cloudflare/v16/zerotrustresourcelibraryapplication"

zerotrustresourcelibraryapplication.NewZeroTrustResourceLibraryApplication(scope Construct, id *string, config ZeroTrustResourceLibraryApplicationConfig) ZeroTrustResourceLibraryApplication
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-cloudflare.zeroTrustResourceLibraryApplication.ZeroTrustResourceLibraryApplication.Initializer.parameter.scope">scope</a></code> | <code>github.com/aws/constructs-go/constructs/v10.Construct</code> | The scope in which to define this construct. |
| <code><a href="#@cdktn/provider-cloudflare.zeroTrustResourceLibraryApplication.ZeroTrustResourceLibraryApplication.Initializer.parameter.id">id</a></code> | <code>*string</code> | The scoped construct ID. |
| <code><a href="#@cdktn/provider-cloudflare.zeroTrustResourceLibraryApplication.ZeroTrustResourceLibraryApplication.Initializer.parameter.config">config</a></code> | <code><a href="#@cdktn/provider-cloudflare.zeroTrustResourceLibraryApplication.ZeroTrustResourceLibraryApplicationConfig">ZeroTrustResourceLibraryApplicationConfig</a></code> | *No description.* |

---

##### `scope`<sup>Required</sup> <a name="scope" id="@cdktn/provider-cloudflare.zeroTrustResourceLibraryApplication.ZeroTrustResourceLibraryApplication.Initializer.parameter.scope"></a>

- *Type:* github.com/aws/constructs-go/constructs/v10.Construct

The scope in which to define this construct.

---

##### `id`<sup>Required</sup> <a name="id" id="@cdktn/provider-cloudflare.zeroTrustResourceLibraryApplication.ZeroTrustResourceLibraryApplication.Initializer.parameter.id"></a>

- *Type:* *string

The scoped construct ID.

Must be unique amongst siblings in the same scope

---

##### `config`<sup>Required</sup> <a name="config" id="@cdktn/provider-cloudflare.zeroTrustResourceLibraryApplication.ZeroTrustResourceLibraryApplication.Initializer.parameter.config"></a>

- *Type:* <a href="#@cdktn/provider-cloudflare.zeroTrustResourceLibraryApplication.ZeroTrustResourceLibraryApplicationConfig">ZeroTrustResourceLibraryApplicationConfig</a>

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-cloudflare.zeroTrustResourceLibraryApplication.ZeroTrustResourceLibraryApplication.toString">ToString</a></code> | Returns a string representation of this construct. |
| <code><a href="#@cdktn/provider-cloudflare.zeroTrustResourceLibraryApplication.ZeroTrustResourceLibraryApplication.with">With</a></code> | Applies one or more mixins to this construct. |
| <code><a href="#@cdktn/provider-cloudflare.zeroTrustResourceLibraryApplication.ZeroTrustResourceLibraryApplication.addOverride">AddOverride</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-cloudflare.zeroTrustResourceLibraryApplication.ZeroTrustResourceLibraryApplication.overrideLogicalId">OverrideLogicalId</a></code> | Overrides the auto-generated logical ID with a specific ID. |
| <code><a href="#@cdktn/provider-cloudflare.zeroTrustResourceLibraryApplication.ZeroTrustResourceLibraryApplication.resetOverrideLogicalId">ResetOverrideLogicalId</a></code> | Resets a previously passed logical Id to use the auto-generated logical id again. |
| <code><a href="#@cdktn/provider-cloudflare.zeroTrustResourceLibraryApplication.ZeroTrustResourceLibraryApplication.toHclTerraform">ToHclTerraform</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-cloudflare.zeroTrustResourceLibraryApplication.ZeroTrustResourceLibraryApplication.toMetadata">ToMetadata</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-cloudflare.zeroTrustResourceLibraryApplication.ZeroTrustResourceLibraryApplication.toTerraform">ToTerraform</a></code> | Adds this resource to the terraform JSON output. |
| <code><a href="#@cdktn/provider-cloudflare.zeroTrustResourceLibraryApplication.ZeroTrustResourceLibraryApplication.addMoveTarget">AddMoveTarget</a></code> | Adds a user defined moveTarget string to this resource to be later used in .moveTo(moveTarget) to resolve the location of the move. |
| <code><a href="#@cdktn/provider-cloudflare.zeroTrustResourceLibraryApplication.ZeroTrustResourceLibraryApplication.getAnyMapAttribute">GetAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-cloudflare.zeroTrustResourceLibraryApplication.ZeroTrustResourceLibraryApplication.getBooleanAttribute">GetBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-cloudflare.zeroTrustResourceLibraryApplication.ZeroTrustResourceLibraryApplication.getBooleanMapAttribute">GetBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-cloudflare.zeroTrustResourceLibraryApplication.ZeroTrustResourceLibraryApplication.getListAttribute">GetListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-cloudflare.zeroTrustResourceLibraryApplication.ZeroTrustResourceLibraryApplication.getNumberAttribute">GetNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-cloudflare.zeroTrustResourceLibraryApplication.ZeroTrustResourceLibraryApplication.getNumberListAttribute">GetNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-cloudflare.zeroTrustResourceLibraryApplication.ZeroTrustResourceLibraryApplication.getNumberMapAttribute">GetNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-cloudflare.zeroTrustResourceLibraryApplication.ZeroTrustResourceLibraryApplication.getStringAttribute">GetStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-cloudflare.zeroTrustResourceLibraryApplication.ZeroTrustResourceLibraryApplication.getStringMapAttribute">GetStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-cloudflare.zeroTrustResourceLibraryApplication.ZeroTrustResourceLibraryApplication.hasResourceMove">HasResourceMove</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-cloudflare.zeroTrustResourceLibraryApplication.ZeroTrustResourceLibraryApplication.importFrom">ImportFrom</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-cloudflare.zeroTrustResourceLibraryApplication.ZeroTrustResourceLibraryApplication.interpolationForAttribute">InterpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-cloudflare.zeroTrustResourceLibraryApplication.ZeroTrustResourceLibraryApplication.moveFromId">MoveFromId</a></code> | Move the resource corresponding to "id" to this resource. |
| <code><a href="#@cdktn/provider-cloudflare.zeroTrustResourceLibraryApplication.ZeroTrustResourceLibraryApplication.moveTo">MoveTo</a></code> | Moves this resource to the target resource given by moveTarget. |
| <code><a href="#@cdktn/provider-cloudflare.zeroTrustResourceLibraryApplication.ZeroTrustResourceLibraryApplication.moveToId">MoveToId</a></code> | Moves this resource to the resource corresponding to "id". |
| <code><a href="#@cdktn/provider-cloudflare.zeroTrustResourceLibraryApplication.ZeroTrustResourceLibraryApplication.resetHostnames">ResetHostnames</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-cloudflare.zeroTrustResourceLibraryApplication.ZeroTrustResourceLibraryApplication.resetIpSubnets">ResetIpSubnets</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-cloudflare.zeroTrustResourceLibraryApplication.ZeroTrustResourceLibraryApplication.resetPortProtocols">ResetPortProtocols</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-cloudflare.zeroTrustResourceLibraryApplication.ZeroTrustResourceLibraryApplication.resetSupportDomains">ResetSupportDomains</a></code> | *No description.* |

---

##### `ToString` <a name="ToString" id="@cdktn/provider-cloudflare.zeroTrustResourceLibraryApplication.ZeroTrustResourceLibraryApplication.toString"></a>

```go
func ToString() *string
```

Returns a string representation of this construct.

##### `With` <a name="With" id="@cdktn/provider-cloudflare.zeroTrustResourceLibraryApplication.ZeroTrustResourceLibraryApplication.with"></a>

```go
func With(mixins ...IMixin) IConstruct
```

Applies one or more mixins to this construct.

Mixins are applied in order. The list of constructs is captured at the
start of the call, so constructs added by a mixin will not be visited.
Use multiple `with()` calls if subsequent mixins should apply to added
constructs.

###### `mixins`<sup>Required</sup> <a name="mixins" id="@cdktn/provider-cloudflare.zeroTrustResourceLibraryApplication.ZeroTrustResourceLibraryApplication.with.parameter.mixins"></a>

- *Type:* ...github.com/aws/constructs-go/constructs/v10.IMixin

The mixins to apply.

---

##### `AddOverride` <a name="AddOverride" id="@cdktn/provider-cloudflare.zeroTrustResourceLibraryApplication.ZeroTrustResourceLibraryApplication.addOverride"></a>

```go
func AddOverride(path *string, value interface{})
```

###### `path`<sup>Required</sup> <a name="path" id="@cdktn/provider-cloudflare.zeroTrustResourceLibraryApplication.ZeroTrustResourceLibraryApplication.addOverride.parameter.path"></a>

- *Type:* *string

---

###### `value`<sup>Required</sup> <a name="value" id="@cdktn/provider-cloudflare.zeroTrustResourceLibraryApplication.ZeroTrustResourceLibraryApplication.addOverride.parameter.value"></a>

- *Type:* interface{}

---

##### `OverrideLogicalId` <a name="OverrideLogicalId" id="@cdktn/provider-cloudflare.zeroTrustResourceLibraryApplication.ZeroTrustResourceLibraryApplication.overrideLogicalId"></a>

```go
func OverrideLogicalId(newLogicalId *string)
```

Overrides the auto-generated logical ID with a specific ID.

###### `newLogicalId`<sup>Required</sup> <a name="newLogicalId" id="@cdktn/provider-cloudflare.zeroTrustResourceLibraryApplication.ZeroTrustResourceLibraryApplication.overrideLogicalId.parameter.newLogicalId"></a>

- *Type:* *string

The new logical ID to use for this stack element.

---

##### `ResetOverrideLogicalId` <a name="ResetOverrideLogicalId" id="@cdktn/provider-cloudflare.zeroTrustResourceLibraryApplication.ZeroTrustResourceLibraryApplication.resetOverrideLogicalId"></a>

```go
func ResetOverrideLogicalId()
```

Resets a previously passed logical Id to use the auto-generated logical id again.

##### `ToHclTerraform` <a name="ToHclTerraform" id="@cdktn/provider-cloudflare.zeroTrustResourceLibraryApplication.ZeroTrustResourceLibraryApplication.toHclTerraform"></a>

```go
func ToHclTerraform() interface{}
```

##### `ToMetadata` <a name="ToMetadata" id="@cdktn/provider-cloudflare.zeroTrustResourceLibraryApplication.ZeroTrustResourceLibraryApplication.toMetadata"></a>

```go
func ToMetadata() interface{}
```

##### `ToTerraform` <a name="ToTerraform" id="@cdktn/provider-cloudflare.zeroTrustResourceLibraryApplication.ZeroTrustResourceLibraryApplication.toTerraform"></a>

```go
func ToTerraform() interface{}
```

Adds this resource to the terraform JSON output.

##### `AddMoveTarget` <a name="AddMoveTarget" id="@cdktn/provider-cloudflare.zeroTrustResourceLibraryApplication.ZeroTrustResourceLibraryApplication.addMoveTarget"></a>

```go
func AddMoveTarget(moveTarget *string)
```

Adds a user defined moveTarget string to this resource to be later used in .moveTo(moveTarget) to resolve the location of the move.

###### `moveTarget`<sup>Required</sup> <a name="moveTarget" id="@cdktn/provider-cloudflare.zeroTrustResourceLibraryApplication.ZeroTrustResourceLibraryApplication.addMoveTarget.parameter.moveTarget"></a>

- *Type:* *string

The string move target that will correspond to this resource.

---

##### `GetAnyMapAttribute` <a name="GetAnyMapAttribute" id="@cdktn/provider-cloudflare.zeroTrustResourceLibraryApplication.ZeroTrustResourceLibraryApplication.getAnyMapAttribute"></a>

```go
func GetAnyMapAttribute(terraformAttribute *string) *map[string]interface{}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-cloudflare.zeroTrustResourceLibraryApplication.ZeroTrustResourceLibraryApplication.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetBooleanAttribute` <a name="GetBooleanAttribute" id="@cdktn/provider-cloudflare.zeroTrustResourceLibraryApplication.ZeroTrustResourceLibraryApplication.getBooleanAttribute"></a>

```go
func GetBooleanAttribute(terraformAttribute *string) IResolvable
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-cloudflare.zeroTrustResourceLibraryApplication.ZeroTrustResourceLibraryApplication.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetBooleanMapAttribute` <a name="GetBooleanMapAttribute" id="@cdktn/provider-cloudflare.zeroTrustResourceLibraryApplication.ZeroTrustResourceLibraryApplication.getBooleanMapAttribute"></a>

```go
func GetBooleanMapAttribute(terraformAttribute *string) *map[string]*bool
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-cloudflare.zeroTrustResourceLibraryApplication.ZeroTrustResourceLibraryApplication.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetListAttribute` <a name="GetListAttribute" id="@cdktn/provider-cloudflare.zeroTrustResourceLibraryApplication.ZeroTrustResourceLibraryApplication.getListAttribute"></a>

```go
func GetListAttribute(terraformAttribute *string) *[]*string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-cloudflare.zeroTrustResourceLibraryApplication.ZeroTrustResourceLibraryApplication.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberAttribute` <a name="GetNumberAttribute" id="@cdktn/provider-cloudflare.zeroTrustResourceLibraryApplication.ZeroTrustResourceLibraryApplication.getNumberAttribute"></a>

```go
func GetNumberAttribute(terraformAttribute *string) *f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-cloudflare.zeroTrustResourceLibraryApplication.ZeroTrustResourceLibraryApplication.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberListAttribute` <a name="GetNumberListAttribute" id="@cdktn/provider-cloudflare.zeroTrustResourceLibraryApplication.ZeroTrustResourceLibraryApplication.getNumberListAttribute"></a>

```go
func GetNumberListAttribute(terraformAttribute *string) *[]*f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-cloudflare.zeroTrustResourceLibraryApplication.ZeroTrustResourceLibraryApplication.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberMapAttribute` <a name="GetNumberMapAttribute" id="@cdktn/provider-cloudflare.zeroTrustResourceLibraryApplication.ZeroTrustResourceLibraryApplication.getNumberMapAttribute"></a>

```go
func GetNumberMapAttribute(terraformAttribute *string) *map[string]*f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-cloudflare.zeroTrustResourceLibraryApplication.ZeroTrustResourceLibraryApplication.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetStringAttribute` <a name="GetStringAttribute" id="@cdktn/provider-cloudflare.zeroTrustResourceLibraryApplication.ZeroTrustResourceLibraryApplication.getStringAttribute"></a>

```go
func GetStringAttribute(terraformAttribute *string) *string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-cloudflare.zeroTrustResourceLibraryApplication.ZeroTrustResourceLibraryApplication.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetStringMapAttribute` <a name="GetStringMapAttribute" id="@cdktn/provider-cloudflare.zeroTrustResourceLibraryApplication.ZeroTrustResourceLibraryApplication.getStringMapAttribute"></a>

```go
func GetStringMapAttribute(terraformAttribute *string) *map[string]*string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-cloudflare.zeroTrustResourceLibraryApplication.ZeroTrustResourceLibraryApplication.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `HasResourceMove` <a name="HasResourceMove" id="@cdktn/provider-cloudflare.zeroTrustResourceLibraryApplication.ZeroTrustResourceLibraryApplication.hasResourceMove"></a>

```go
func HasResourceMove() interface{}
```

##### `ImportFrom` <a name="ImportFrom" id="@cdktn/provider-cloudflare.zeroTrustResourceLibraryApplication.ZeroTrustResourceLibraryApplication.importFrom"></a>

```go
func ImportFrom(id *string, provider TerraformProvider)
```

###### `id`<sup>Required</sup> <a name="id" id="@cdktn/provider-cloudflare.zeroTrustResourceLibraryApplication.ZeroTrustResourceLibraryApplication.importFrom.parameter.id"></a>

- *Type:* *string

---

###### `provider`<sup>Optional</sup> <a name="provider" id="@cdktn/provider-cloudflare.zeroTrustResourceLibraryApplication.ZeroTrustResourceLibraryApplication.importFrom.parameter.provider"></a>

- *Type:* github.com/open-constructs/cdk-terrain-go/cdktn.TerraformProvider

---

##### `InterpolationForAttribute` <a name="InterpolationForAttribute" id="@cdktn/provider-cloudflare.zeroTrustResourceLibraryApplication.ZeroTrustResourceLibraryApplication.interpolationForAttribute"></a>

```go
func InterpolationForAttribute(terraformAttribute *string) IResolvable
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-cloudflare.zeroTrustResourceLibraryApplication.ZeroTrustResourceLibraryApplication.interpolationForAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `MoveFromId` <a name="MoveFromId" id="@cdktn/provider-cloudflare.zeroTrustResourceLibraryApplication.ZeroTrustResourceLibraryApplication.moveFromId"></a>

```go
func MoveFromId(id *string)
```

Move the resource corresponding to "id" to this resource.

Note that the resource being moved from must be marked as moved using its instance function.

###### `id`<sup>Required</sup> <a name="id" id="@cdktn/provider-cloudflare.zeroTrustResourceLibraryApplication.ZeroTrustResourceLibraryApplication.moveFromId.parameter.id"></a>

- *Type:* *string

Full id of resource being moved from, e.g. "aws_s3_bucket.example".

---

##### `MoveTo` <a name="MoveTo" id="@cdktn/provider-cloudflare.zeroTrustResourceLibraryApplication.ZeroTrustResourceLibraryApplication.moveTo"></a>

```go
func MoveTo(moveTarget *string, index interface{})
```

Moves this resource to the target resource given by moveTarget.

###### `moveTarget`<sup>Required</sup> <a name="moveTarget" id="@cdktn/provider-cloudflare.zeroTrustResourceLibraryApplication.ZeroTrustResourceLibraryApplication.moveTo.parameter.moveTarget"></a>

- *Type:* *string

The previously set user defined string set by .addMoveTarget() corresponding to the resource to move to.

---

###### `index`<sup>Optional</sup> <a name="index" id="@cdktn/provider-cloudflare.zeroTrustResourceLibraryApplication.ZeroTrustResourceLibraryApplication.moveTo.parameter.index"></a>

- *Type:* interface{}

Optional The index corresponding to the key the resource is to appear in the foreach of a resource to move to.

---

##### `MoveToId` <a name="MoveToId" id="@cdktn/provider-cloudflare.zeroTrustResourceLibraryApplication.ZeroTrustResourceLibraryApplication.moveToId"></a>

```go
func MoveToId(id *string)
```

Moves this resource to the resource corresponding to "id".

###### `id`<sup>Required</sup> <a name="id" id="@cdktn/provider-cloudflare.zeroTrustResourceLibraryApplication.ZeroTrustResourceLibraryApplication.moveToId.parameter.id"></a>

- *Type:* *string

Full id of resource to move to, e.g. "aws_s3_bucket.example".

---

##### `ResetHostnames` <a name="ResetHostnames" id="@cdktn/provider-cloudflare.zeroTrustResourceLibraryApplication.ZeroTrustResourceLibraryApplication.resetHostnames"></a>

```go
func ResetHostnames()
```

##### `ResetIpSubnets` <a name="ResetIpSubnets" id="@cdktn/provider-cloudflare.zeroTrustResourceLibraryApplication.ZeroTrustResourceLibraryApplication.resetIpSubnets"></a>

```go
func ResetIpSubnets()
```

##### `ResetPortProtocols` <a name="ResetPortProtocols" id="@cdktn/provider-cloudflare.zeroTrustResourceLibraryApplication.ZeroTrustResourceLibraryApplication.resetPortProtocols"></a>

```go
func ResetPortProtocols()
```

##### `ResetSupportDomains` <a name="ResetSupportDomains" id="@cdktn/provider-cloudflare.zeroTrustResourceLibraryApplication.ZeroTrustResourceLibraryApplication.resetSupportDomains"></a>

```go
func ResetSupportDomains()
```

#### Static Functions <a name="Static Functions" id="Static Functions"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-cloudflare.zeroTrustResourceLibraryApplication.ZeroTrustResourceLibraryApplication.isConstruct">IsConstruct</a></code> | Checks if `x` is a construct. |
| <code><a href="#@cdktn/provider-cloudflare.zeroTrustResourceLibraryApplication.ZeroTrustResourceLibraryApplication.isTerraformElement">IsTerraformElement</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-cloudflare.zeroTrustResourceLibraryApplication.ZeroTrustResourceLibraryApplication.isTerraformResource">IsTerraformResource</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-cloudflare.zeroTrustResourceLibraryApplication.ZeroTrustResourceLibraryApplication.generateConfigForImport">GenerateConfigForImport</a></code> | Generates CDKTN code for importing a ZeroTrustResourceLibraryApplication resource upon running "cdktn plan <stack-name>". |

---

##### `IsConstruct` <a name="IsConstruct" id="@cdktn/provider-cloudflare.zeroTrustResourceLibraryApplication.ZeroTrustResourceLibraryApplication.isConstruct"></a>

```go
import "github.com/cdktn-io/cdktn-provider-cloudflare-go/cloudflare/v16/zerotrustresourcelibraryapplication"

zerotrustresourcelibraryapplication.ZeroTrustResourceLibraryApplication_IsConstruct(x interface{}) *bool
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

###### `x`<sup>Required</sup> <a name="x" id="@cdktn/provider-cloudflare.zeroTrustResourceLibraryApplication.ZeroTrustResourceLibraryApplication.isConstruct.parameter.x"></a>

- *Type:* interface{}

Any object.

---

##### `IsTerraformElement` <a name="IsTerraformElement" id="@cdktn/provider-cloudflare.zeroTrustResourceLibraryApplication.ZeroTrustResourceLibraryApplication.isTerraformElement"></a>

```go
import "github.com/cdktn-io/cdktn-provider-cloudflare-go/cloudflare/v16/zerotrustresourcelibraryapplication"

zerotrustresourcelibraryapplication.ZeroTrustResourceLibraryApplication_IsTerraformElement(x interface{}) *bool
```

###### `x`<sup>Required</sup> <a name="x" id="@cdktn/provider-cloudflare.zeroTrustResourceLibraryApplication.ZeroTrustResourceLibraryApplication.isTerraformElement.parameter.x"></a>

- *Type:* interface{}

---

##### `IsTerraformResource` <a name="IsTerraformResource" id="@cdktn/provider-cloudflare.zeroTrustResourceLibraryApplication.ZeroTrustResourceLibraryApplication.isTerraformResource"></a>

```go
import "github.com/cdktn-io/cdktn-provider-cloudflare-go/cloudflare/v16/zerotrustresourcelibraryapplication"

zerotrustresourcelibraryapplication.ZeroTrustResourceLibraryApplication_IsTerraformResource(x interface{}) *bool
```

###### `x`<sup>Required</sup> <a name="x" id="@cdktn/provider-cloudflare.zeroTrustResourceLibraryApplication.ZeroTrustResourceLibraryApplication.isTerraformResource.parameter.x"></a>

- *Type:* interface{}

---

##### `GenerateConfigForImport` <a name="GenerateConfigForImport" id="@cdktn/provider-cloudflare.zeroTrustResourceLibraryApplication.ZeroTrustResourceLibraryApplication.generateConfigForImport"></a>

```go
import "github.com/cdktn-io/cdktn-provider-cloudflare-go/cloudflare/v16/zerotrustresourcelibraryapplication"

zerotrustresourcelibraryapplication.ZeroTrustResourceLibraryApplication_GenerateConfigForImport(scope Construct, importToId *string, importFromId *string, provider TerraformProvider) ImportableResource
```

Generates CDKTN code for importing a ZeroTrustResourceLibraryApplication resource upon running "cdktn plan <stack-name>".

###### `scope`<sup>Required</sup> <a name="scope" id="@cdktn/provider-cloudflare.zeroTrustResourceLibraryApplication.ZeroTrustResourceLibraryApplication.generateConfigForImport.parameter.scope"></a>

- *Type:* github.com/aws/constructs-go/constructs/v10.Construct

The scope in which to define this construct.

---

###### `importToId`<sup>Required</sup> <a name="importToId" id="@cdktn/provider-cloudflare.zeroTrustResourceLibraryApplication.ZeroTrustResourceLibraryApplication.generateConfigForImport.parameter.importToId"></a>

- *Type:* *string

The construct id used in the generated config for the ZeroTrustResourceLibraryApplication to import.

---

###### `importFromId`<sup>Required</sup> <a name="importFromId" id="@cdktn/provider-cloudflare.zeroTrustResourceLibraryApplication.ZeroTrustResourceLibraryApplication.generateConfigForImport.parameter.importFromId"></a>

- *Type:* *string

The id of the existing ZeroTrustResourceLibraryApplication that should be imported.

Refer to the {@link https://registry.terraform.io/providers/cloudflare/cloudflare/5.25.0/docs/resources/zero_trust_resource_library_application#import import section} in the documentation of this resource for the id to use

---

###### `provider`<sup>Optional</sup> <a name="provider" id="@cdktn/provider-cloudflare.zeroTrustResourceLibraryApplication.ZeroTrustResourceLibraryApplication.generateConfigForImport.parameter.provider"></a>

- *Type:* github.com/open-constructs/cdk-terrain-go/cdktn.TerraformProvider

? Optional instance of the provider where the ZeroTrustResourceLibraryApplication to import is found.

---

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-cloudflare.zeroTrustResourceLibraryApplication.ZeroTrustResourceLibraryApplication.property.node">Node</a></code> | <code>github.com/aws/constructs-go/constructs/v10.Node</code> | The tree node. |
| <code><a href="#@cdktn/provider-cloudflare.zeroTrustResourceLibraryApplication.ZeroTrustResourceLibraryApplication.property.cdktfStack">CdktfStack</a></code> | <code>github.com/open-constructs/cdk-terrain-go/cdktn.TerraformStack</code> | *No description.* |
| <code><a href="#@cdktn/provider-cloudflare.zeroTrustResourceLibraryApplication.ZeroTrustResourceLibraryApplication.property.fqn">Fqn</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktn/provider-cloudflare.zeroTrustResourceLibraryApplication.ZeroTrustResourceLibraryApplication.property.friendlyUniqueId">FriendlyUniqueId</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktn/provider-cloudflare.zeroTrustResourceLibraryApplication.ZeroTrustResourceLibraryApplication.property.terraformMetaArguments">TerraformMetaArguments</a></code> | <code>*map[string]interface{}</code> | *No description.* |
| <code><a href="#@cdktn/provider-cloudflare.zeroTrustResourceLibraryApplication.ZeroTrustResourceLibraryApplication.property.terraformResourceType">TerraformResourceType</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktn/provider-cloudflare.zeroTrustResourceLibraryApplication.ZeroTrustResourceLibraryApplication.property.terraformGeneratorMetadata">TerraformGeneratorMetadata</a></code> | <code>github.com/open-constructs/cdk-terrain-go/cdktn.TerraformProviderGeneratorMetadata</code> | *No description.* |
| <code><a href="#@cdktn/provider-cloudflare.zeroTrustResourceLibraryApplication.ZeroTrustResourceLibraryApplication.property.connection">Connection</a></code> | <code>interface{}</code> | *No description.* |
| <code><a href="#@cdktn/provider-cloudflare.zeroTrustResourceLibraryApplication.ZeroTrustResourceLibraryApplication.property.count">Count</a></code> | <code>interface{}</code> | *No description.* |
| <code><a href="#@cdktn/provider-cloudflare.zeroTrustResourceLibraryApplication.ZeroTrustResourceLibraryApplication.property.dependsOn">DependsOn</a></code> | <code>*[]*string</code> | *No description.* |
| <code><a href="#@cdktn/provider-cloudflare.zeroTrustResourceLibraryApplication.ZeroTrustResourceLibraryApplication.property.forEach">ForEach</a></code> | <code>github.com/open-constructs/cdk-terrain-go/cdktn.ITerraformIterator</code> | *No description.* |
| <code><a href="#@cdktn/provider-cloudflare.zeroTrustResourceLibraryApplication.ZeroTrustResourceLibraryApplication.property.lifecycle">Lifecycle</a></code> | <code>github.com/open-constructs/cdk-terrain-go/cdktn.TerraformResourceLifecycle</code> | *No description.* |
| <code><a href="#@cdktn/provider-cloudflare.zeroTrustResourceLibraryApplication.ZeroTrustResourceLibraryApplication.property.provider">Provider</a></code> | <code>github.com/open-constructs/cdk-terrain-go/cdktn.TerraformProvider</code> | *No description.* |
| <code><a href="#@cdktn/provider-cloudflare.zeroTrustResourceLibraryApplication.ZeroTrustResourceLibraryApplication.property.provisioners">Provisioners</a></code> | <code>*[]interface{}</code> | *No description.* |
| <code><a href="#@cdktn/provider-cloudflare.zeroTrustResourceLibraryApplication.ZeroTrustResourceLibraryApplication.property.applicationConfidenceScore">ApplicationConfidenceScore</a></code> | <code>*f64</code> | *No description.* |
| <code><a href="#@cdktn/provider-cloudflare.zeroTrustResourceLibraryApplication.ZeroTrustResourceLibraryApplication.property.applicationScoreComposition">ApplicationScoreComposition</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktn/provider-cloudflare.zeroTrustResourceLibraryApplication.ZeroTrustResourceLibraryApplication.property.applicationSource">ApplicationSource</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktn/provider-cloudflare.zeroTrustResourceLibraryApplication.ZeroTrustResourceLibraryApplication.property.applicationType">ApplicationType</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktn/provider-cloudflare.zeroTrustResourceLibraryApplication.ZeroTrustResourceLibraryApplication.property.applicationTypeDescription">ApplicationTypeDescription</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktn/provider-cloudflare.zeroTrustResourceLibraryApplication.ZeroTrustResourceLibraryApplication.property.createdAt">CreatedAt</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktn/provider-cloudflare.zeroTrustResourceLibraryApplication.ZeroTrustResourceLibraryApplication.property.genAiScore">GenAiScore</a></code> | <code>*f64</code> | *No description.* |
| <code><a href="#@cdktn/provider-cloudflare.zeroTrustResourceLibraryApplication.ZeroTrustResourceLibraryApplication.property.id">Id</a></code> | <code>*f64</code> | *No description.* |
| <code><a href="#@cdktn/provider-cloudflare.zeroTrustResourceLibraryApplication.ZeroTrustResourceLibraryApplication.property.supported">Supported</a></code> | <code>*[]*string</code> | *No description.* |
| <code><a href="#@cdktn/provider-cloudflare.zeroTrustResourceLibraryApplication.ZeroTrustResourceLibraryApplication.property.updatedAt">UpdatedAt</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktn/provider-cloudflare.zeroTrustResourceLibraryApplication.ZeroTrustResourceLibraryApplication.property.version">Version</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktn/provider-cloudflare.zeroTrustResourceLibraryApplication.ZeroTrustResourceLibraryApplication.property.accountIdInput">AccountIdInput</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktn/provider-cloudflare.zeroTrustResourceLibraryApplication.ZeroTrustResourceLibraryApplication.property.categoryIdInput">CategoryIdInput</a></code> | <code>*f64</code> | *No description.* |
| <code><a href="#@cdktn/provider-cloudflare.zeroTrustResourceLibraryApplication.ZeroTrustResourceLibraryApplication.property.hostnamesInput">HostnamesInput</a></code> | <code>*[]*string</code> | *No description.* |
| <code><a href="#@cdktn/provider-cloudflare.zeroTrustResourceLibraryApplication.ZeroTrustResourceLibraryApplication.property.humanIdInput">HumanIdInput</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktn/provider-cloudflare.zeroTrustResourceLibraryApplication.ZeroTrustResourceLibraryApplication.property.ipSubnetsInput">IpSubnetsInput</a></code> | <code>*[]*string</code> | *No description.* |
| <code><a href="#@cdktn/provider-cloudflare.zeroTrustResourceLibraryApplication.ZeroTrustResourceLibraryApplication.property.nameInput">NameInput</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktn/provider-cloudflare.zeroTrustResourceLibraryApplication.ZeroTrustResourceLibraryApplication.property.portProtocolsInput">PortProtocolsInput</a></code> | <code>*[]*string</code> | *No description.* |
| <code><a href="#@cdktn/provider-cloudflare.zeroTrustResourceLibraryApplication.ZeroTrustResourceLibraryApplication.property.supportDomainsInput">SupportDomainsInput</a></code> | <code>*[]*string</code> | *No description.* |
| <code><a href="#@cdktn/provider-cloudflare.zeroTrustResourceLibraryApplication.ZeroTrustResourceLibraryApplication.property.accountId">AccountId</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktn/provider-cloudflare.zeroTrustResourceLibraryApplication.ZeroTrustResourceLibraryApplication.property.categoryId">CategoryId</a></code> | <code>*f64</code> | *No description.* |
| <code><a href="#@cdktn/provider-cloudflare.zeroTrustResourceLibraryApplication.ZeroTrustResourceLibraryApplication.property.hostnames">Hostnames</a></code> | <code>*[]*string</code> | *No description.* |
| <code><a href="#@cdktn/provider-cloudflare.zeroTrustResourceLibraryApplication.ZeroTrustResourceLibraryApplication.property.humanId">HumanId</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktn/provider-cloudflare.zeroTrustResourceLibraryApplication.ZeroTrustResourceLibraryApplication.property.ipSubnets">IpSubnets</a></code> | <code>*[]*string</code> | *No description.* |
| <code><a href="#@cdktn/provider-cloudflare.zeroTrustResourceLibraryApplication.ZeroTrustResourceLibraryApplication.property.name">Name</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktn/provider-cloudflare.zeroTrustResourceLibraryApplication.ZeroTrustResourceLibraryApplication.property.portProtocols">PortProtocols</a></code> | <code>*[]*string</code> | *No description.* |
| <code><a href="#@cdktn/provider-cloudflare.zeroTrustResourceLibraryApplication.ZeroTrustResourceLibraryApplication.property.supportDomains">SupportDomains</a></code> | <code>*[]*string</code> | *No description.* |

---

##### `Node`<sup>Required</sup> <a name="Node" id="@cdktn/provider-cloudflare.zeroTrustResourceLibraryApplication.ZeroTrustResourceLibraryApplication.property.node"></a>

```go
func Node() Node
```

- *Type:* github.com/aws/constructs-go/constructs/v10.Node

The tree node.

---

##### `CdktfStack`<sup>Required</sup> <a name="CdktfStack" id="@cdktn/provider-cloudflare.zeroTrustResourceLibraryApplication.ZeroTrustResourceLibraryApplication.property.cdktfStack"></a>

```go
func CdktfStack() TerraformStack
```

- *Type:* github.com/open-constructs/cdk-terrain-go/cdktn.TerraformStack

---

##### `Fqn`<sup>Required</sup> <a name="Fqn" id="@cdktn/provider-cloudflare.zeroTrustResourceLibraryApplication.ZeroTrustResourceLibraryApplication.property.fqn"></a>

```go
func Fqn() *string
```

- *Type:* *string

---

##### `FriendlyUniqueId`<sup>Required</sup> <a name="FriendlyUniqueId" id="@cdktn/provider-cloudflare.zeroTrustResourceLibraryApplication.ZeroTrustResourceLibraryApplication.property.friendlyUniqueId"></a>

```go
func FriendlyUniqueId() *string
```

- *Type:* *string

---

##### `TerraformMetaArguments`<sup>Required</sup> <a name="TerraformMetaArguments" id="@cdktn/provider-cloudflare.zeroTrustResourceLibraryApplication.ZeroTrustResourceLibraryApplication.property.terraformMetaArguments"></a>

```go
func TerraformMetaArguments() *map[string]interface{}
```

- *Type:* *map[string]interface{}

---

##### `TerraformResourceType`<sup>Required</sup> <a name="TerraformResourceType" id="@cdktn/provider-cloudflare.zeroTrustResourceLibraryApplication.ZeroTrustResourceLibraryApplication.property.terraformResourceType"></a>

```go
func TerraformResourceType() *string
```

- *Type:* *string

---

##### `TerraformGeneratorMetadata`<sup>Optional</sup> <a name="TerraformGeneratorMetadata" id="@cdktn/provider-cloudflare.zeroTrustResourceLibraryApplication.ZeroTrustResourceLibraryApplication.property.terraformGeneratorMetadata"></a>

```go
func TerraformGeneratorMetadata() TerraformProviderGeneratorMetadata
```

- *Type:* github.com/open-constructs/cdk-terrain-go/cdktn.TerraformProviderGeneratorMetadata

---

##### `Connection`<sup>Optional</sup> <a name="Connection" id="@cdktn/provider-cloudflare.zeroTrustResourceLibraryApplication.ZeroTrustResourceLibraryApplication.property.connection"></a>

```go
func Connection() interface{}
```

- *Type:* interface{}

---

##### `Count`<sup>Optional</sup> <a name="Count" id="@cdktn/provider-cloudflare.zeroTrustResourceLibraryApplication.ZeroTrustResourceLibraryApplication.property.count"></a>

```go
func Count() interface{}
```

- *Type:* interface{}

---

##### `DependsOn`<sup>Optional</sup> <a name="DependsOn" id="@cdktn/provider-cloudflare.zeroTrustResourceLibraryApplication.ZeroTrustResourceLibraryApplication.property.dependsOn"></a>

```go
func DependsOn() *[]*string
```

- *Type:* *[]*string

---

##### `ForEach`<sup>Optional</sup> <a name="ForEach" id="@cdktn/provider-cloudflare.zeroTrustResourceLibraryApplication.ZeroTrustResourceLibraryApplication.property.forEach"></a>

```go
func ForEach() ITerraformIterator
```

- *Type:* github.com/open-constructs/cdk-terrain-go/cdktn.ITerraformIterator

---

##### `Lifecycle`<sup>Optional</sup> <a name="Lifecycle" id="@cdktn/provider-cloudflare.zeroTrustResourceLibraryApplication.ZeroTrustResourceLibraryApplication.property.lifecycle"></a>

```go
func Lifecycle() TerraformResourceLifecycle
```

- *Type:* github.com/open-constructs/cdk-terrain-go/cdktn.TerraformResourceLifecycle

---

##### `Provider`<sup>Optional</sup> <a name="Provider" id="@cdktn/provider-cloudflare.zeroTrustResourceLibraryApplication.ZeroTrustResourceLibraryApplication.property.provider"></a>

```go
func Provider() TerraformProvider
```

- *Type:* github.com/open-constructs/cdk-terrain-go/cdktn.TerraformProvider

---

##### `Provisioners`<sup>Optional</sup> <a name="Provisioners" id="@cdktn/provider-cloudflare.zeroTrustResourceLibraryApplication.ZeroTrustResourceLibraryApplication.property.provisioners"></a>

```go
func Provisioners() *[]interface{}
```

- *Type:* *[]interface{}

---

##### `ApplicationConfidenceScore`<sup>Required</sup> <a name="ApplicationConfidenceScore" id="@cdktn/provider-cloudflare.zeroTrustResourceLibraryApplication.ZeroTrustResourceLibraryApplication.property.applicationConfidenceScore"></a>

```go
func ApplicationConfidenceScore() *f64
```

- *Type:* *f64

---

##### `ApplicationScoreComposition`<sup>Required</sup> <a name="ApplicationScoreComposition" id="@cdktn/provider-cloudflare.zeroTrustResourceLibraryApplication.ZeroTrustResourceLibraryApplication.property.applicationScoreComposition"></a>

```go
func ApplicationScoreComposition() *string
```

- *Type:* *string

---

##### `ApplicationSource`<sup>Required</sup> <a name="ApplicationSource" id="@cdktn/provider-cloudflare.zeroTrustResourceLibraryApplication.ZeroTrustResourceLibraryApplication.property.applicationSource"></a>

```go
func ApplicationSource() *string
```

- *Type:* *string

---

##### `ApplicationType`<sup>Required</sup> <a name="ApplicationType" id="@cdktn/provider-cloudflare.zeroTrustResourceLibraryApplication.ZeroTrustResourceLibraryApplication.property.applicationType"></a>

```go
func ApplicationType() *string
```

- *Type:* *string

---

##### `ApplicationTypeDescription`<sup>Required</sup> <a name="ApplicationTypeDescription" id="@cdktn/provider-cloudflare.zeroTrustResourceLibraryApplication.ZeroTrustResourceLibraryApplication.property.applicationTypeDescription"></a>

```go
func ApplicationTypeDescription() *string
```

- *Type:* *string

---

##### `CreatedAt`<sup>Required</sup> <a name="CreatedAt" id="@cdktn/provider-cloudflare.zeroTrustResourceLibraryApplication.ZeroTrustResourceLibraryApplication.property.createdAt"></a>

```go
func CreatedAt() *string
```

- *Type:* *string

---

##### `GenAiScore`<sup>Required</sup> <a name="GenAiScore" id="@cdktn/provider-cloudflare.zeroTrustResourceLibraryApplication.ZeroTrustResourceLibraryApplication.property.genAiScore"></a>

```go
func GenAiScore() *f64
```

- *Type:* *f64

---

##### `Id`<sup>Required</sup> <a name="Id" id="@cdktn/provider-cloudflare.zeroTrustResourceLibraryApplication.ZeroTrustResourceLibraryApplication.property.id"></a>

```go
func Id() *f64
```

- *Type:* *f64

---

##### `Supported`<sup>Required</sup> <a name="Supported" id="@cdktn/provider-cloudflare.zeroTrustResourceLibraryApplication.ZeroTrustResourceLibraryApplication.property.supported"></a>

```go
func Supported() *[]*string
```

- *Type:* *[]*string

---

##### `UpdatedAt`<sup>Required</sup> <a name="UpdatedAt" id="@cdktn/provider-cloudflare.zeroTrustResourceLibraryApplication.ZeroTrustResourceLibraryApplication.property.updatedAt"></a>

```go
func UpdatedAt() *string
```

- *Type:* *string

---

##### `Version`<sup>Required</sup> <a name="Version" id="@cdktn/provider-cloudflare.zeroTrustResourceLibraryApplication.ZeroTrustResourceLibraryApplication.property.version"></a>

```go
func Version() *string
```

- *Type:* *string

---

##### `AccountIdInput`<sup>Optional</sup> <a name="AccountIdInput" id="@cdktn/provider-cloudflare.zeroTrustResourceLibraryApplication.ZeroTrustResourceLibraryApplication.property.accountIdInput"></a>

```go
func AccountIdInput() *string
```

- *Type:* *string

---

##### `CategoryIdInput`<sup>Optional</sup> <a name="CategoryIdInput" id="@cdktn/provider-cloudflare.zeroTrustResourceLibraryApplication.ZeroTrustResourceLibraryApplication.property.categoryIdInput"></a>

```go
func CategoryIdInput() *f64
```

- *Type:* *f64

---

##### `HostnamesInput`<sup>Optional</sup> <a name="HostnamesInput" id="@cdktn/provider-cloudflare.zeroTrustResourceLibraryApplication.ZeroTrustResourceLibraryApplication.property.hostnamesInput"></a>

```go
func HostnamesInput() *[]*string
```

- *Type:* *[]*string

---

##### `HumanIdInput`<sup>Optional</sup> <a name="HumanIdInput" id="@cdktn/provider-cloudflare.zeroTrustResourceLibraryApplication.ZeroTrustResourceLibraryApplication.property.humanIdInput"></a>

```go
func HumanIdInput() *string
```

- *Type:* *string

---

##### `IpSubnetsInput`<sup>Optional</sup> <a name="IpSubnetsInput" id="@cdktn/provider-cloudflare.zeroTrustResourceLibraryApplication.ZeroTrustResourceLibraryApplication.property.ipSubnetsInput"></a>

```go
func IpSubnetsInput() *[]*string
```

- *Type:* *[]*string

---

##### `NameInput`<sup>Optional</sup> <a name="NameInput" id="@cdktn/provider-cloudflare.zeroTrustResourceLibraryApplication.ZeroTrustResourceLibraryApplication.property.nameInput"></a>

```go
func NameInput() *string
```

- *Type:* *string

---

##### `PortProtocolsInput`<sup>Optional</sup> <a name="PortProtocolsInput" id="@cdktn/provider-cloudflare.zeroTrustResourceLibraryApplication.ZeroTrustResourceLibraryApplication.property.portProtocolsInput"></a>

```go
func PortProtocolsInput() *[]*string
```

- *Type:* *[]*string

---

##### `SupportDomainsInput`<sup>Optional</sup> <a name="SupportDomainsInput" id="@cdktn/provider-cloudflare.zeroTrustResourceLibraryApplication.ZeroTrustResourceLibraryApplication.property.supportDomainsInput"></a>

```go
func SupportDomainsInput() *[]*string
```

- *Type:* *[]*string

---

##### `AccountId`<sup>Required</sup> <a name="AccountId" id="@cdktn/provider-cloudflare.zeroTrustResourceLibraryApplication.ZeroTrustResourceLibraryApplication.property.accountId"></a>

```go
func AccountId() *string
```

- *Type:* *string

---

##### `CategoryId`<sup>Required</sup> <a name="CategoryId" id="@cdktn/provider-cloudflare.zeroTrustResourceLibraryApplication.ZeroTrustResourceLibraryApplication.property.categoryId"></a>

```go
func CategoryId() *f64
```

- *Type:* *f64

---

##### `Hostnames`<sup>Required</sup> <a name="Hostnames" id="@cdktn/provider-cloudflare.zeroTrustResourceLibraryApplication.ZeroTrustResourceLibraryApplication.property.hostnames"></a>

```go
func Hostnames() *[]*string
```

- *Type:* *[]*string

---

##### `HumanId`<sup>Required</sup> <a name="HumanId" id="@cdktn/provider-cloudflare.zeroTrustResourceLibraryApplication.ZeroTrustResourceLibraryApplication.property.humanId"></a>

```go
func HumanId() *string
```

- *Type:* *string

---

##### `IpSubnets`<sup>Required</sup> <a name="IpSubnets" id="@cdktn/provider-cloudflare.zeroTrustResourceLibraryApplication.ZeroTrustResourceLibraryApplication.property.ipSubnets"></a>

```go
func IpSubnets() *[]*string
```

- *Type:* *[]*string

---

##### `Name`<sup>Required</sup> <a name="Name" id="@cdktn/provider-cloudflare.zeroTrustResourceLibraryApplication.ZeroTrustResourceLibraryApplication.property.name"></a>

```go
func Name() *string
```

- *Type:* *string

---

##### `PortProtocols`<sup>Required</sup> <a name="PortProtocols" id="@cdktn/provider-cloudflare.zeroTrustResourceLibraryApplication.ZeroTrustResourceLibraryApplication.property.portProtocols"></a>

```go
func PortProtocols() *[]*string
```

- *Type:* *[]*string

---

##### `SupportDomains`<sup>Required</sup> <a name="SupportDomains" id="@cdktn/provider-cloudflare.zeroTrustResourceLibraryApplication.ZeroTrustResourceLibraryApplication.property.supportDomains"></a>

```go
func SupportDomains() *[]*string
```

- *Type:* *[]*string

---

#### Constants <a name="Constants" id="Constants"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-cloudflare.zeroTrustResourceLibraryApplication.ZeroTrustResourceLibraryApplication.property.tfResourceType">TfResourceType</a></code> | <code>*string</code> | *No description.* |

---

##### `TfResourceType`<sup>Required</sup> <a name="TfResourceType" id="@cdktn/provider-cloudflare.zeroTrustResourceLibraryApplication.ZeroTrustResourceLibraryApplication.property.tfResourceType"></a>

```go
func TfResourceType() *string
```

- *Type:* *string

---

## Structs <a name="Structs" id="Structs"></a>

### ZeroTrustResourceLibraryApplicationConfig <a name="ZeroTrustResourceLibraryApplicationConfig" id="@cdktn/provider-cloudflare.zeroTrustResourceLibraryApplication.ZeroTrustResourceLibraryApplicationConfig"></a>

#### Initializer <a name="Initializer" id="@cdktn/provider-cloudflare.zeroTrustResourceLibraryApplication.ZeroTrustResourceLibraryApplicationConfig.Initializer"></a>

```go
import "github.com/cdktn-io/cdktn-provider-cloudflare-go/cloudflare/v16/zerotrustresourcelibraryapplication"

&zerotrustresourcelibraryapplication.ZeroTrustResourceLibraryApplicationConfig {
	Connection: interface{},
	Count: interface{},
	DependsOn: *[]github.com/open-constructs/cdk-terrain-go/cdktn.ITerraformDependable,
	ForEach: github.com/open-constructs/cdk-terrain-go/cdktn.ITerraformIterator,
	Lifecycle: github.com/open-constructs/cdk-terrain-go/cdktn.TerraformResourceLifecycle,
	Provider: github.com/open-constructs/cdk-terrain-go/cdktn.TerraformProvider,
	Provisioners: *[]interface{},
	AccountId: *string,
	CategoryId: *f64,
	HumanId: *string,
	Name: *string,
	Hostnames: *[]*string,
	IpSubnets: *[]*string,
	PortProtocols: *[]*string,
	SupportDomains: *[]*string,
}
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-cloudflare.zeroTrustResourceLibraryApplication.ZeroTrustResourceLibraryApplicationConfig.property.connection">Connection</a></code> | <code>interface{}</code> | *No description.* |
| <code><a href="#@cdktn/provider-cloudflare.zeroTrustResourceLibraryApplication.ZeroTrustResourceLibraryApplicationConfig.property.count">Count</a></code> | <code>interface{}</code> | *No description.* |
| <code><a href="#@cdktn/provider-cloudflare.zeroTrustResourceLibraryApplication.ZeroTrustResourceLibraryApplicationConfig.property.dependsOn">DependsOn</a></code> | <code>*[]github.com/open-constructs/cdk-terrain-go/cdktn.ITerraformDependable</code> | *No description.* |
| <code><a href="#@cdktn/provider-cloudflare.zeroTrustResourceLibraryApplication.ZeroTrustResourceLibraryApplicationConfig.property.forEach">ForEach</a></code> | <code>github.com/open-constructs/cdk-terrain-go/cdktn.ITerraformIterator</code> | *No description.* |
| <code><a href="#@cdktn/provider-cloudflare.zeroTrustResourceLibraryApplication.ZeroTrustResourceLibraryApplicationConfig.property.lifecycle">Lifecycle</a></code> | <code>github.com/open-constructs/cdk-terrain-go/cdktn.TerraformResourceLifecycle</code> | *No description.* |
| <code><a href="#@cdktn/provider-cloudflare.zeroTrustResourceLibraryApplication.ZeroTrustResourceLibraryApplicationConfig.property.provider">Provider</a></code> | <code>github.com/open-constructs/cdk-terrain-go/cdktn.TerraformProvider</code> | *No description.* |
| <code><a href="#@cdktn/provider-cloudflare.zeroTrustResourceLibraryApplication.ZeroTrustResourceLibraryApplicationConfig.property.provisioners">Provisioners</a></code> | <code>*[]interface{}</code> | *No description.* |
| <code><a href="#@cdktn/provider-cloudflare.zeroTrustResourceLibraryApplication.ZeroTrustResourceLibraryApplicationConfig.property.accountId">AccountId</a></code> | <code>*string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/cloudflare/cloudflare/5.25.0/docs/resources/zero_trust_resource_library_application#account_id ZeroTrustResourceLibraryApplication#account_id}. |
| <code><a href="#@cdktn/provider-cloudflare.zeroTrustResourceLibraryApplication.ZeroTrustResourceLibraryApplicationConfig.property.categoryId">CategoryId</a></code> | <code>*f64</code> | Returns the category ID. |
| <code><a href="#@cdktn/provider-cloudflare.zeroTrustResourceLibraryApplication.ZeroTrustResourceLibraryApplicationConfig.property.humanId">HumanId</a></code> | <code>*string</code> | Returns the human readable ID. |
| <code><a href="#@cdktn/provider-cloudflare.zeroTrustResourceLibraryApplication.ZeroTrustResourceLibraryApplicationConfig.property.name">Name</a></code> | <code>*string</code> | Returns the application name. |
| <code><a href="#@cdktn/provider-cloudflare.zeroTrustResourceLibraryApplication.ZeroTrustResourceLibraryApplicationConfig.property.hostnames">Hostnames</a></code> | <code>*[]*string</code> | Hostnames matched by the application. |
| <code><a href="#@cdktn/provider-cloudflare.zeroTrustResourceLibraryApplication.ZeroTrustResourceLibraryApplicationConfig.property.ipSubnets">IpSubnets</a></code> | <code>*[]*string</code> | IP subnets matched by the application. |
| <code><a href="#@cdktn/provider-cloudflare.zeroTrustResourceLibraryApplication.ZeroTrustResourceLibraryApplicationConfig.property.portProtocols">PortProtocols</a></code> | <code>*[]*string</code> | Port and protocol pairs matched by the application. |
| <code><a href="#@cdktn/provider-cloudflare.zeroTrustResourceLibraryApplication.ZeroTrustResourceLibraryApplicationConfig.property.supportDomains">SupportDomains</a></code> | <code>*[]*string</code> | Support domains matched by the application. |

---

##### `Connection`<sup>Optional</sup> <a name="Connection" id="@cdktn/provider-cloudflare.zeroTrustResourceLibraryApplication.ZeroTrustResourceLibraryApplicationConfig.property.connection"></a>

```go
Connection interface{}
```

- *Type:* interface{}

---

##### `Count`<sup>Optional</sup> <a name="Count" id="@cdktn/provider-cloudflare.zeroTrustResourceLibraryApplication.ZeroTrustResourceLibraryApplicationConfig.property.count"></a>

```go
Count interface{}
```

- *Type:* interface{}

---

##### `DependsOn`<sup>Optional</sup> <a name="DependsOn" id="@cdktn/provider-cloudflare.zeroTrustResourceLibraryApplication.ZeroTrustResourceLibraryApplicationConfig.property.dependsOn"></a>

```go
DependsOn *[]ITerraformDependable
```

- *Type:* *[]github.com/open-constructs/cdk-terrain-go/cdktn.ITerraformDependable

---

##### `ForEach`<sup>Optional</sup> <a name="ForEach" id="@cdktn/provider-cloudflare.zeroTrustResourceLibraryApplication.ZeroTrustResourceLibraryApplicationConfig.property.forEach"></a>

```go
ForEach ITerraformIterator
```

- *Type:* github.com/open-constructs/cdk-terrain-go/cdktn.ITerraformIterator

---

##### `Lifecycle`<sup>Optional</sup> <a name="Lifecycle" id="@cdktn/provider-cloudflare.zeroTrustResourceLibraryApplication.ZeroTrustResourceLibraryApplicationConfig.property.lifecycle"></a>

```go
Lifecycle TerraformResourceLifecycle
```

- *Type:* github.com/open-constructs/cdk-terrain-go/cdktn.TerraformResourceLifecycle

---

##### `Provider`<sup>Optional</sup> <a name="Provider" id="@cdktn/provider-cloudflare.zeroTrustResourceLibraryApplication.ZeroTrustResourceLibraryApplicationConfig.property.provider"></a>

```go
Provider TerraformProvider
```

- *Type:* github.com/open-constructs/cdk-terrain-go/cdktn.TerraformProvider

---

##### `Provisioners`<sup>Optional</sup> <a name="Provisioners" id="@cdktn/provider-cloudflare.zeroTrustResourceLibraryApplication.ZeroTrustResourceLibraryApplicationConfig.property.provisioners"></a>

```go
Provisioners *[]interface{}
```

- *Type:* *[]interface{}

---

##### `AccountId`<sup>Required</sup> <a name="AccountId" id="@cdktn/provider-cloudflare.zeroTrustResourceLibraryApplication.ZeroTrustResourceLibraryApplicationConfig.property.accountId"></a>

```go
AccountId *string
```

- *Type:* *string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/cloudflare/cloudflare/5.25.0/docs/resources/zero_trust_resource_library_application#account_id ZeroTrustResourceLibraryApplication#account_id}.

---

##### `CategoryId`<sup>Required</sup> <a name="CategoryId" id="@cdktn/provider-cloudflare.zeroTrustResourceLibraryApplication.ZeroTrustResourceLibraryApplicationConfig.property.categoryId"></a>

```go
CategoryId *f64
```

- *Type:* *f64

Returns the category ID.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/cloudflare/cloudflare/5.25.0/docs/resources/zero_trust_resource_library_application#category_id ZeroTrustResourceLibraryApplication#category_id}

---

##### `HumanId`<sup>Required</sup> <a name="HumanId" id="@cdktn/provider-cloudflare.zeroTrustResourceLibraryApplication.ZeroTrustResourceLibraryApplicationConfig.property.humanId"></a>

```go
HumanId *string
```

- *Type:* *string

Returns the human readable ID.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/cloudflare/cloudflare/5.25.0/docs/resources/zero_trust_resource_library_application#human_id ZeroTrustResourceLibraryApplication#human_id}

---

##### `Name`<sup>Required</sup> <a name="Name" id="@cdktn/provider-cloudflare.zeroTrustResourceLibraryApplication.ZeroTrustResourceLibraryApplicationConfig.property.name"></a>

```go
Name *string
```

- *Type:* *string

Returns the application name.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/cloudflare/cloudflare/5.25.0/docs/resources/zero_trust_resource_library_application#name ZeroTrustResourceLibraryApplication#name}

---

##### `Hostnames`<sup>Optional</sup> <a name="Hostnames" id="@cdktn/provider-cloudflare.zeroTrustResourceLibraryApplication.ZeroTrustResourceLibraryApplicationConfig.property.hostnames"></a>

```go
Hostnames *[]*string
```

- *Type:* *[]*string

Hostnames matched by the application.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/cloudflare/cloudflare/5.25.0/docs/resources/zero_trust_resource_library_application#hostnames ZeroTrustResourceLibraryApplication#hostnames}

---

##### `IpSubnets`<sup>Optional</sup> <a name="IpSubnets" id="@cdktn/provider-cloudflare.zeroTrustResourceLibraryApplication.ZeroTrustResourceLibraryApplicationConfig.property.ipSubnets"></a>

```go
IpSubnets *[]*string
```

- *Type:* *[]*string

IP subnets matched by the application.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/cloudflare/cloudflare/5.25.0/docs/resources/zero_trust_resource_library_application#ip_subnets ZeroTrustResourceLibraryApplication#ip_subnets}

---

##### `PortProtocols`<sup>Optional</sup> <a name="PortProtocols" id="@cdktn/provider-cloudflare.zeroTrustResourceLibraryApplication.ZeroTrustResourceLibraryApplicationConfig.property.portProtocols"></a>

```go
PortProtocols *[]*string
```

- *Type:* *[]*string

Port and protocol pairs matched by the application.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/cloudflare/cloudflare/5.25.0/docs/resources/zero_trust_resource_library_application#port_protocols ZeroTrustResourceLibraryApplication#port_protocols}

---

##### `SupportDomains`<sup>Optional</sup> <a name="SupportDomains" id="@cdktn/provider-cloudflare.zeroTrustResourceLibraryApplication.ZeroTrustResourceLibraryApplicationConfig.property.supportDomains"></a>

```go
SupportDomains *[]*string
```

- *Type:* *[]*string

Support domains matched by the application.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/cloudflare/cloudflare/5.25.0/docs/resources/zero_trust_resource_library_application#support_domains ZeroTrustResourceLibraryApplication#support_domains}

---



