# `emailSecurityAllowPolicy` Submodule <a name="`emailSecurityAllowPolicy` Submodule" id="@cdktn/provider-cloudflare.emailSecurityAllowPolicy"></a>

## Constructs <a name="Constructs" id="Constructs"></a>

### EmailSecurityAllowPolicy <a name="EmailSecurityAllowPolicy" id="@cdktn/provider-cloudflare.emailSecurityAllowPolicy.EmailSecurityAllowPolicy"></a>

Represents a {@link https://registry.terraform.io/providers/cloudflare/cloudflare/5.25.0/docs/resources/email_security_allow_policy cloudflare_email_security_allow_policy}.

#### Initializers <a name="Initializers" id="@cdktn/provider-cloudflare.emailSecurityAllowPolicy.EmailSecurityAllowPolicy.Initializer"></a>

```go
import "github.com/cdktn-io/cdktn-provider-cloudflare-go/cloudflare/v16/emailsecurityallowpolicy"

emailsecurityallowpolicy.NewEmailSecurityAllowPolicy(scope Construct, id *string, config EmailSecurityAllowPolicyConfig) EmailSecurityAllowPolicy
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-cloudflare.emailSecurityAllowPolicy.EmailSecurityAllowPolicy.Initializer.parameter.scope">scope</a></code> | <code>github.com/aws/constructs-go/constructs/v10.Construct</code> | The scope in which to define this construct. |
| <code><a href="#@cdktn/provider-cloudflare.emailSecurityAllowPolicy.EmailSecurityAllowPolicy.Initializer.parameter.id">id</a></code> | <code>*string</code> | The scoped construct ID. |
| <code><a href="#@cdktn/provider-cloudflare.emailSecurityAllowPolicy.EmailSecurityAllowPolicy.Initializer.parameter.config">config</a></code> | <code><a href="#@cdktn/provider-cloudflare.emailSecurityAllowPolicy.EmailSecurityAllowPolicyConfig">EmailSecurityAllowPolicyConfig</a></code> | *No description.* |

---

##### `scope`<sup>Required</sup> <a name="scope" id="@cdktn/provider-cloudflare.emailSecurityAllowPolicy.EmailSecurityAllowPolicy.Initializer.parameter.scope"></a>

- *Type:* github.com/aws/constructs-go/constructs/v10.Construct

The scope in which to define this construct.

---

##### `id`<sup>Required</sup> <a name="id" id="@cdktn/provider-cloudflare.emailSecurityAllowPolicy.EmailSecurityAllowPolicy.Initializer.parameter.id"></a>

- *Type:* *string

The scoped construct ID.

Must be unique amongst siblings in the same scope

---

##### `config`<sup>Required</sup> <a name="config" id="@cdktn/provider-cloudflare.emailSecurityAllowPolicy.EmailSecurityAllowPolicy.Initializer.parameter.config"></a>

- *Type:* <a href="#@cdktn/provider-cloudflare.emailSecurityAllowPolicy.EmailSecurityAllowPolicyConfig">EmailSecurityAllowPolicyConfig</a>

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-cloudflare.emailSecurityAllowPolicy.EmailSecurityAllowPolicy.toString">ToString</a></code> | Returns a string representation of this construct. |
| <code><a href="#@cdktn/provider-cloudflare.emailSecurityAllowPolicy.EmailSecurityAllowPolicy.with">With</a></code> | Applies one or more mixins to this construct. |
| <code><a href="#@cdktn/provider-cloudflare.emailSecurityAllowPolicy.EmailSecurityAllowPolicy.addOverride">AddOverride</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-cloudflare.emailSecurityAllowPolicy.EmailSecurityAllowPolicy.overrideLogicalId">OverrideLogicalId</a></code> | Overrides the auto-generated logical ID with a specific ID. |
| <code><a href="#@cdktn/provider-cloudflare.emailSecurityAllowPolicy.EmailSecurityAllowPolicy.resetOverrideLogicalId">ResetOverrideLogicalId</a></code> | Resets a previously passed logical Id to use the auto-generated logical id again. |
| <code><a href="#@cdktn/provider-cloudflare.emailSecurityAllowPolicy.EmailSecurityAllowPolicy.toHclTerraform">ToHclTerraform</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-cloudflare.emailSecurityAllowPolicy.EmailSecurityAllowPolicy.toMetadata">ToMetadata</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-cloudflare.emailSecurityAllowPolicy.EmailSecurityAllowPolicy.toTerraform">ToTerraform</a></code> | Adds this resource to the terraform JSON output. |
| <code><a href="#@cdktn/provider-cloudflare.emailSecurityAllowPolicy.EmailSecurityAllowPolicy.addMoveTarget">AddMoveTarget</a></code> | Adds a user defined moveTarget string to this resource to be later used in .moveTo(moveTarget) to resolve the location of the move. |
| <code><a href="#@cdktn/provider-cloudflare.emailSecurityAllowPolicy.EmailSecurityAllowPolicy.getAnyMapAttribute">GetAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-cloudflare.emailSecurityAllowPolicy.EmailSecurityAllowPolicy.getBooleanAttribute">GetBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-cloudflare.emailSecurityAllowPolicy.EmailSecurityAllowPolicy.getBooleanMapAttribute">GetBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-cloudflare.emailSecurityAllowPolicy.EmailSecurityAllowPolicy.getListAttribute">GetListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-cloudflare.emailSecurityAllowPolicy.EmailSecurityAllowPolicy.getNumberAttribute">GetNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-cloudflare.emailSecurityAllowPolicy.EmailSecurityAllowPolicy.getNumberListAttribute">GetNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-cloudflare.emailSecurityAllowPolicy.EmailSecurityAllowPolicy.getNumberMapAttribute">GetNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-cloudflare.emailSecurityAllowPolicy.EmailSecurityAllowPolicy.getStringAttribute">GetStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-cloudflare.emailSecurityAllowPolicy.EmailSecurityAllowPolicy.getStringMapAttribute">GetStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-cloudflare.emailSecurityAllowPolicy.EmailSecurityAllowPolicy.hasResourceMove">HasResourceMove</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-cloudflare.emailSecurityAllowPolicy.EmailSecurityAllowPolicy.importFrom">ImportFrom</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-cloudflare.emailSecurityAllowPolicy.EmailSecurityAllowPolicy.interpolationForAttribute">InterpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-cloudflare.emailSecurityAllowPolicy.EmailSecurityAllowPolicy.moveFromId">MoveFromId</a></code> | Move the resource corresponding to "id" to this resource. |
| <code><a href="#@cdktn/provider-cloudflare.emailSecurityAllowPolicy.EmailSecurityAllowPolicy.moveTo">MoveTo</a></code> | Moves this resource to the target resource given by moveTarget. |
| <code><a href="#@cdktn/provider-cloudflare.emailSecurityAllowPolicy.EmailSecurityAllowPolicy.moveToId">MoveToId</a></code> | Moves this resource to the resource corresponding to "id". |
| <code><a href="#@cdktn/provider-cloudflare.emailSecurityAllowPolicy.EmailSecurityAllowPolicy.resetComments">ResetComments</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-cloudflare.emailSecurityAllowPolicy.EmailSecurityAllowPolicy.resetIsRecipient">ResetIsRecipient</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-cloudflare.emailSecurityAllowPolicy.EmailSecurityAllowPolicy.resetIsSender">ResetIsSender</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-cloudflare.emailSecurityAllowPolicy.EmailSecurityAllowPolicy.resetIsSpoof">ResetIsSpoof</a></code> | *No description.* |

---

##### `ToString` <a name="ToString" id="@cdktn/provider-cloudflare.emailSecurityAllowPolicy.EmailSecurityAllowPolicy.toString"></a>

```go
func ToString() *string
```

Returns a string representation of this construct.

##### `With` <a name="With" id="@cdktn/provider-cloudflare.emailSecurityAllowPolicy.EmailSecurityAllowPolicy.with"></a>

```go
func With(mixins ...IMixin) IConstruct
```

Applies one or more mixins to this construct.

Mixins are applied in order. The list of constructs is captured at the
start of the call, so constructs added by a mixin will not be visited.
Use multiple `with()` calls if subsequent mixins should apply to added
constructs.

###### `mixins`<sup>Required</sup> <a name="mixins" id="@cdktn/provider-cloudflare.emailSecurityAllowPolicy.EmailSecurityAllowPolicy.with.parameter.mixins"></a>

- *Type:* ...github.com/aws/constructs-go/constructs/v10.IMixin

The mixins to apply.

---

##### `AddOverride` <a name="AddOverride" id="@cdktn/provider-cloudflare.emailSecurityAllowPolicy.EmailSecurityAllowPolicy.addOverride"></a>

```go
func AddOverride(path *string, value interface{})
```

###### `path`<sup>Required</sup> <a name="path" id="@cdktn/provider-cloudflare.emailSecurityAllowPolicy.EmailSecurityAllowPolicy.addOverride.parameter.path"></a>

- *Type:* *string

---

###### `value`<sup>Required</sup> <a name="value" id="@cdktn/provider-cloudflare.emailSecurityAllowPolicy.EmailSecurityAllowPolicy.addOverride.parameter.value"></a>

- *Type:* interface{}

---

##### `OverrideLogicalId` <a name="OverrideLogicalId" id="@cdktn/provider-cloudflare.emailSecurityAllowPolicy.EmailSecurityAllowPolicy.overrideLogicalId"></a>

```go
func OverrideLogicalId(newLogicalId *string)
```

Overrides the auto-generated logical ID with a specific ID.

###### `newLogicalId`<sup>Required</sup> <a name="newLogicalId" id="@cdktn/provider-cloudflare.emailSecurityAllowPolicy.EmailSecurityAllowPolicy.overrideLogicalId.parameter.newLogicalId"></a>

- *Type:* *string

The new logical ID to use for this stack element.

---

##### `ResetOverrideLogicalId` <a name="ResetOverrideLogicalId" id="@cdktn/provider-cloudflare.emailSecurityAllowPolicy.EmailSecurityAllowPolicy.resetOverrideLogicalId"></a>

```go
func ResetOverrideLogicalId()
```

Resets a previously passed logical Id to use the auto-generated logical id again.

##### `ToHclTerraform` <a name="ToHclTerraform" id="@cdktn/provider-cloudflare.emailSecurityAllowPolicy.EmailSecurityAllowPolicy.toHclTerraform"></a>

```go
func ToHclTerraform() interface{}
```

##### `ToMetadata` <a name="ToMetadata" id="@cdktn/provider-cloudflare.emailSecurityAllowPolicy.EmailSecurityAllowPolicy.toMetadata"></a>

```go
func ToMetadata() interface{}
```

##### `ToTerraform` <a name="ToTerraform" id="@cdktn/provider-cloudflare.emailSecurityAllowPolicy.EmailSecurityAllowPolicy.toTerraform"></a>

```go
func ToTerraform() interface{}
```

Adds this resource to the terraform JSON output.

##### `AddMoveTarget` <a name="AddMoveTarget" id="@cdktn/provider-cloudflare.emailSecurityAllowPolicy.EmailSecurityAllowPolicy.addMoveTarget"></a>

```go
func AddMoveTarget(moveTarget *string)
```

Adds a user defined moveTarget string to this resource to be later used in .moveTo(moveTarget) to resolve the location of the move.

###### `moveTarget`<sup>Required</sup> <a name="moveTarget" id="@cdktn/provider-cloudflare.emailSecurityAllowPolicy.EmailSecurityAllowPolicy.addMoveTarget.parameter.moveTarget"></a>

- *Type:* *string

The string move target that will correspond to this resource.

---

##### `GetAnyMapAttribute` <a name="GetAnyMapAttribute" id="@cdktn/provider-cloudflare.emailSecurityAllowPolicy.EmailSecurityAllowPolicy.getAnyMapAttribute"></a>

```go
func GetAnyMapAttribute(terraformAttribute *string) *map[string]interface{}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-cloudflare.emailSecurityAllowPolicy.EmailSecurityAllowPolicy.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetBooleanAttribute` <a name="GetBooleanAttribute" id="@cdktn/provider-cloudflare.emailSecurityAllowPolicy.EmailSecurityAllowPolicy.getBooleanAttribute"></a>

```go
func GetBooleanAttribute(terraformAttribute *string) IResolvable
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-cloudflare.emailSecurityAllowPolicy.EmailSecurityAllowPolicy.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetBooleanMapAttribute` <a name="GetBooleanMapAttribute" id="@cdktn/provider-cloudflare.emailSecurityAllowPolicy.EmailSecurityAllowPolicy.getBooleanMapAttribute"></a>

```go
func GetBooleanMapAttribute(terraformAttribute *string) *map[string]*bool
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-cloudflare.emailSecurityAllowPolicy.EmailSecurityAllowPolicy.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetListAttribute` <a name="GetListAttribute" id="@cdktn/provider-cloudflare.emailSecurityAllowPolicy.EmailSecurityAllowPolicy.getListAttribute"></a>

```go
func GetListAttribute(terraformAttribute *string) *[]*string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-cloudflare.emailSecurityAllowPolicy.EmailSecurityAllowPolicy.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberAttribute` <a name="GetNumberAttribute" id="@cdktn/provider-cloudflare.emailSecurityAllowPolicy.EmailSecurityAllowPolicy.getNumberAttribute"></a>

```go
func GetNumberAttribute(terraformAttribute *string) *f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-cloudflare.emailSecurityAllowPolicy.EmailSecurityAllowPolicy.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberListAttribute` <a name="GetNumberListAttribute" id="@cdktn/provider-cloudflare.emailSecurityAllowPolicy.EmailSecurityAllowPolicy.getNumberListAttribute"></a>

```go
func GetNumberListAttribute(terraformAttribute *string) *[]*f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-cloudflare.emailSecurityAllowPolicy.EmailSecurityAllowPolicy.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberMapAttribute` <a name="GetNumberMapAttribute" id="@cdktn/provider-cloudflare.emailSecurityAllowPolicy.EmailSecurityAllowPolicy.getNumberMapAttribute"></a>

```go
func GetNumberMapAttribute(terraformAttribute *string) *map[string]*f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-cloudflare.emailSecurityAllowPolicy.EmailSecurityAllowPolicy.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetStringAttribute` <a name="GetStringAttribute" id="@cdktn/provider-cloudflare.emailSecurityAllowPolicy.EmailSecurityAllowPolicy.getStringAttribute"></a>

```go
func GetStringAttribute(terraformAttribute *string) *string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-cloudflare.emailSecurityAllowPolicy.EmailSecurityAllowPolicy.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetStringMapAttribute` <a name="GetStringMapAttribute" id="@cdktn/provider-cloudflare.emailSecurityAllowPolicy.EmailSecurityAllowPolicy.getStringMapAttribute"></a>

```go
func GetStringMapAttribute(terraformAttribute *string) *map[string]*string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-cloudflare.emailSecurityAllowPolicy.EmailSecurityAllowPolicy.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `HasResourceMove` <a name="HasResourceMove" id="@cdktn/provider-cloudflare.emailSecurityAllowPolicy.EmailSecurityAllowPolicy.hasResourceMove"></a>

```go
func HasResourceMove() interface{}
```

##### `ImportFrom` <a name="ImportFrom" id="@cdktn/provider-cloudflare.emailSecurityAllowPolicy.EmailSecurityAllowPolicy.importFrom"></a>

```go
func ImportFrom(id *string, provider TerraformProvider)
```

###### `id`<sup>Required</sup> <a name="id" id="@cdktn/provider-cloudflare.emailSecurityAllowPolicy.EmailSecurityAllowPolicy.importFrom.parameter.id"></a>

- *Type:* *string

---

###### `provider`<sup>Optional</sup> <a name="provider" id="@cdktn/provider-cloudflare.emailSecurityAllowPolicy.EmailSecurityAllowPolicy.importFrom.parameter.provider"></a>

- *Type:* github.com/open-constructs/cdk-terrain-go/cdktn.TerraformProvider

---

##### `InterpolationForAttribute` <a name="InterpolationForAttribute" id="@cdktn/provider-cloudflare.emailSecurityAllowPolicy.EmailSecurityAllowPolicy.interpolationForAttribute"></a>

```go
func InterpolationForAttribute(terraformAttribute *string) IResolvable
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-cloudflare.emailSecurityAllowPolicy.EmailSecurityAllowPolicy.interpolationForAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `MoveFromId` <a name="MoveFromId" id="@cdktn/provider-cloudflare.emailSecurityAllowPolicy.EmailSecurityAllowPolicy.moveFromId"></a>

```go
func MoveFromId(id *string)
```

Move the resource corresponding to "id" to this resource.

Note that the resource being moved from must be marked as moved using its instance function.

###### `id`<sup>Required</sup> <a name="id" id="@cdktn/provider-cloudflare.emailSecurityAllowPolicy.EmailSecurityAllowPolicy.moveFromId.parameter.id"></a>

- *Type:* *string

Full id of resource being moved from, e.g. "aws_s3_bucket.example".

---

##### `MoveTo` <a name="MoveTo" id="@cdktn/provider-cloudflare.emailSecurityAllowPolicy.EmailSecurityAllowPolicy.moveTo"></a>

```go
func MoveTo(moveTarget *string, index interface{})
```

Moves this resource to the target resource given by moveTarget.

###### `moveTarget`<sup>Required</sup> <a name="moveTarget" id="@cdktn/provider-cloudflare.emailSecurityAllowPolicy.EmailSecurityAllowPolicy.moveTo.parameter.moveTarget"></a>

- *Type:* *string

The previously set user defined string set by .addMoveTarget() corresponding to the resource to move to.

---

###### `index`<sup>Optional</sup> <a name="index" id="@cdktn/provider-cloudflare.emailSecurityAllowPolicy.EmailSecurityAllowPolicy.moveTo.parameter.index"></a>

- *Type:* interface{}

Optional The index corresponding to the key the resource is to appear in the foreach of a resource to move to.

---

##### `MoveToId` <a name="MoveToId" id="@cdktn/provider-cloudflare.emailSecurityAllowPolicy.EmailSecurityAllowPolicy.moveToId"></a>

```go
func MoveToId(id *string)
```

Moves this resource to the resource corresponding to "id".

###### `id`<sup>Required</sup> <a name="id" id="@cdktn/provider-cloudflare.emailSecurityAllowPolicy.EmailSecurityAllowPolicy.moveToId.parameter.id"></a>

- *Type:* *string

Full id of resource to move to, e.g. "aws_s3_bucket.example".

---

##### `ResetComments` <a name="ResetComments" id="@cdktn/provider-cloudflare.emailSecurityAllowPolicy.EmailSecurityAllowPolicy.resetComments"></a>

```go
func ResetComments()
```

##### `ResetIsRecipient` <a name="ResetIsRecipient" id="@cdktn/provider-cloudflare.emailSecurityAllowPolicy.EmailSecurityAllowPolicy.resetIsRecipient"></a>

```go
func ResetIsRecipient()
```

##### `ResetIsSender` <a name="ResetIsSender" id="@cdktn/provider-cloudflare.emailSecurityAllowPolicy.EmailSecurityAllowPolicy.resetIsSender"></a>

```go
func ResetIsSender()
```

##### `ResetIsSpoof` <a name="ResetIsSpoof" id="@cdktn/provider-cloudflare.emailSecurityAllowPolicy.EmailSecurityAllowPolicy.resetIsSpoof"></a>

```go
func ResetIsSpoof()
```

#### Static Functions <a name="Static Functions" id="Static Functions"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-cloudflare.emailSecurityAllowPolicy.EmailSecurityAllowPolicy.isConstruct">IsConstruct</a></code> | Checks if `x` is a construct. |
| <code><a href="#@cdktn/provider-cloudflare.emailSecurityAllowPolicy.EmailSecurityAllowPolicy.isTerraformElement">IsTerraformElement</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-cloudflare.emailSecurityAllowPolicy.EmailSecurityAllowPolicy.isTerraformResource">IsTerraformResource</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-cloudflare.emailSecurityAllowPolicy.EmailSecurityAllowPolicy.generateConfigForImport">GenerateConfigForImport</a></code> | Generates CDKTN code for importing a EmailSecurityAllowPolicy resource upon running "cdktn plan <stack-name>". |

---

##### `IsConstruct` <a name="IsConstruct" id="@cdktn/provider-cloudflare.emailSecurityAllowPolicy.EmailSecurityAllowPolicy.isConstruct"></a>

```go
import "github.com/cdktn-io/cdktn-provider-cloudflare-go/cloudflare/v16/emailsecurityallowpolicy"

emailsecurityallowpolicy.EmailSecurityAllowPolicy_IsConstruct(x interface{}) *bool
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

###### `x`<sup>Required</sup> <a name="x" id="@cdktn/provider-cloudflare.emailSecurityAllowPolicy.EmailSecurityAllowPolicy.isConstruct.parameter.x"></a>

- *Type:* interface{}

Any object.

---

##### `IsTerraformElement` <a name="IsTerraformElement" id="@cdktn/provider-cloudflare.emailSecurityAllowPolicy.EmailSecurityAllowPolicy.isTerraformElement"></a>

```go
import "github.com/cdktn-io/cdktn-provider-cloudflare-go/cloudflare/v16/emailsecurityallowpolicy"

emailsecurityallowpolicy.EmailSecurityAllowPolicy_IsTerraformElement(x interface{}) *bool
```

###### `x`<sup>Required</sup> <a name="x" id="@cdktn/provider-cloudflare.emailSecurityAllowPolicy.EmailSecurityAllowPolicy.isTerraformElement.parameter.x"></a>

- *Type:* interface{}

---

##### `IsTerraformResource` <a name="IsTerraformResource" id="@cdktn/provider-cloudflare.emailSecurityAllowPolicy.EmailSecurityAllowPolicy.isTerraformResource"></a>

```go
import "github.com/cdktn-io/cdktn-provider-cloudflare-go/cloudflare/v16/emailsecurityallowpolicy"

emailsecurityallowpolicy.EmailSecurityAllowPolicy_IsTerraformResource(x interface{}) *bool
```

###### `x`<sup>Required</sup> <a name="x" id="@cdktn/provider-cloudflare.emailSecurityAllowPolicy.EmailSecurityAllowPolicy.isTerraformResource.parameter.x"></a>

- *Type:* interface{}

---

##### `GenerateConfigForImport` <a name="GenerateConfigForImport" id="@cdktn/provider-cloudflare.emailSecurityAllowPolicy.EmailSecurityAllowPolicy.generateConfigForImport"></a>

```go
import "github.com/cdktn-io/cdktn-provider-cloudflare-go/cloudflare/v16/emailsecurityallowpolicy"

emailsecurityallowpolicy.EmailSecurityAllowPolicy_GenerateConfigForImport(scope Construct, importToId *string, importFromId *string, provider TerraformProvider) ImportableResource
```

Generates CDKTN code for importing a EmailSecurityAllowPolicy resource upon running "cdktn plan <stack-name>".

###### `scope`<sup>Required</sup> <a name="scope" id="@cdktn/provider-cloudflare.emailSecurityAllowPolicy.EmailSecurityAllowPolicy.generateConfigForImport.parameter.scope"></a>

- *Type:* github.com/aws/constructs-go/constructs/v10.Construct

The scope in which to define this construct.

---

###### `importToId`<sup>Required</sup> <a name="importToId" id="@cdktn/provider-cloudflare.emailSecurityAllowPolicy.EmailSecurityAllowPolicy.generateConfigForImport.parameter.importToId"></a>

- *Type:* *string

The construct id used in the generated config for the EmailSecurityAllowPolicy to import.

---

###### `importFromId`<sup>Required</sup> <a name="importFromId" id="@cdktn/provider-cloudflare.emailSecurityAllowPolicy.EmailSecurityAllowPolicy.generateConfigForImport.parameter.importFromId"></a>

- *Type:* *string

The id of the existing EmailSecurityAllowPolicy that should be imported.

Refer to the {@link https://registry.terraform.io/providers/cloudflare/cloudflare/5.25.0/docs/resources/email_security_allow_policy#import import section} in the documentation of this resource for the id to use

---

###### `provider`<sup>Optional</sup> <a name="provider" id="@cdktn/provider-cloudflare.emailSecurityAllowPolicy.EmailSecurityAllowPolicy.generateConfigForImport.parameter.provider"></a>

- *Type:* github.com/open-constructs/cdk-terrain-go/cdktn.TerraformProvider

? Optional instance of the provider where the EmailSecurityAllowPolicy to import is found.

---

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-cloudflare.emailSecurityAllowPolicy.EmailSecurityAllowPolicy.property.node">Node</a></code> | <code>github.com/aws/constructs-go/constructs/v10.Node</code> | The tree node. |
| <code><a href="#@cdktn/provider-cloudflare.emailSecurityAllowPolicy.EmailSecurityAllowPolicy.property.cdktfStack">CdktfStack</a></code> | <code>github.com/open-constructs/cdk-terrain-go/cdktn.TerraformStack</code> | *No description.* |
| <code><a href="#@cdktn/provider-cloudflare.emailSecurityAllowPolicy.EmailSecurityAllowPolicy.property.fqn">Fqn</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktn/provider-cloudflare.emailSecurityAllowPolicy.EmailSecurityAllowPolicy.property.friendlyUniqueId">FriendlyUniqueId</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktn/provider-cloudflare.emailSecurityAllowPolicy.EmailSecurityAllowPolicy.property.terraformMetaArguments">TerraformMetaArguments</a></code> | <code>*map[string]interface{}</code> | *No description.* |
| <code><a href="#@cdktn/provider-cloudflare.emailSecurityAllowPolicy.EmailSecurityAllowPolicy.property.terraformResourceType">TerraformResourceType</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktn/provider-cloudflare.emailSecurityAllowPolicy.EmailSecurityAllowPolicy.property.terraformGeneratorMetadata">TerraformGeneratorMetadata</a></code> | <code>github.com/open-constructs/cdk-terrain-go/cdktn.TerraformProviderGeneratorMetadata</code> | *No description.* |
| <code><a href="#@cdktn/provider-cloudflare.emailSecurityAllowPolicy.EmailSecurityAllowPolicy.property.connection">Connection</a></code> | <code>interface{}</code> | *No description.* |
| <code><a href="#@cdktn/provider-cloudflare.emailSecurityAllowPolicy.EmailSecurityAllowPolicy.property.count">Count</a></code> | <code>interface{}</code> | *No description.* |
| <code><a href="#@cdktn/provider-cloudflare.emailSecurityAllowPolicy.EmailSecurityAllowPolicy.property.dependsOn">DependsOn</a></code> | <code>*[]*string</code> | *No description.* |
| <code><a href="#@cdktn/provider-cloudflare.emailSecurityAllowPolicy.EmailSecurityAllowPolicy.property.forEach">ForEach</a></code> | <code>github.com/open-constructs/cdk-terrain-go/cdktn.ITerraformIterator</code> | *No description.* |
| <code><a href="#@cdktn/provider-cloudflare.emailSecurityAllowPolicy.EmailSecurityAllowPolicy.property.lifecycle">Lifecycle</a></code> | <code>github.com/open-constructs/cdk-terrain-go/cdktn.TerraformResourceLifecycle</code> | *No description.* |
| <code><a href="#@cdktn/provider-cloudflare.emailSecurityAllowPolicy.EmailSecurityAllowPolicy.property.provider">Provider</a></code> | <code>github.com/open-constructs/cdk-terrain-go/cdktn.TerraformProvider</code> | *No description.* |
| <code><a href="#@cdktn/provider-cloudflare.emailSecurityAllowPolicy.EmailSecurityAllowPolicy.property.provisioners">Provisioners</a></code> | <code>*[]interface{}</code> | *No description.* |
| <code><a href="#@cdktn/provider-cloudflare.emailSecurityAllowPolicy.EmailSecurityAllowPolicy.property.createdAt">CreatedAt</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktn/provider-cloudflare.emailSecurityAllowPolicy.EmailSecurityAllowPolicy.property.id">Id</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktn/provider-cloudflare.emailSecurityAllowPolicy.EmailSecurityAllowPolicy.property.lastModified">LastModified</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktn/provider-cloudflare.emailSecurityAllowPolicy.EmailSecurityAllowPolicy.property.modifiedAt">ModifiedAt</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktn/provider-cloudflare.emailSecurityAllowPolicy.EmailSecurityAllowPolicy.property.accountIdInput">AccountIdInput</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktn/provider-cloudflare.emailSecurityAllowPolicy.EmailSecurityAllowPolicy.property.commentsInput">CommentsInput</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktn/provider-cloudflare.emailSecurityAllowPolicy.EmailSecurityAllowPolicy.property.isAcceptableSenderInput">IsAcceptableSenderInput</a></code> | <code>interface{}</code> | *No description.* |
| <code><a href="#@cdktn/provider-cloudflare.emailSecurityAllowPolicy.EmailSecurityAllowPolicy.property.isExemptRecipientInput">IsExemptRecipientInput</a></code> | <code>interface{}</code> | *No description.* |
| <code><a href="#@cdktn/provider-cloudflare.emailSecurityAllowPolicy.EmailSecurityAllowPolicy.property.isRecipientInput">IsRecipientInput</a></code> | <code>interface{}</code> | *No description.* |
| <code><a href="#@cdktn/provider-cloudflare.emailSecurityAllowPolicy.EmailSecurityAllowPolicy.property.isRegexInput">IsRegexInput</a></code> | <code>interface{}</code> | *No description.* |
| <code><a href="#@cdktn/provider-cloudflare.emailSecurityAllowPolicy.EmailSecurityAllowPolicy.property.isSenderInput">IsSenderInput</a></code> | <code>interface{}</code> | *No description.* |
| <code><a href="#@cdktn/provider-cloudflare.emailSecurityAllowPolicy.EmailSecurityAllowPolicy.property.isSpoofInput">IsSpoofInput</a></code> | <code>interface{}</code> | *No description.* |
| <code><a href="#@cdktn/provider-cloudflare.emailSecurityAllowPolicy.EmailSecurityAllowPolicy.property.isTrustedSenderInput">IsTrustedSenderInput</a></code> | <code>interface{}</code> | *No description.* |
| <code><a href="#@cdktn/provider-cloudflare.emailSecurityAllowPolicy.EmailSecurityAllowPolicy.property.patternInput">PatternInput</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktn/provider-cloudflare.emailSecurityAllowPolicy.EmailSecurityAllowPolicy.property.patternTypeInput">PatternTypeInput</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktn/provider-cloudflare.emailSecurityAllowPolicy.EmailSecurityAllowPolicy.property.verifySenderInput">VerifySenderInput</a></code> | <code>interface{}</code> | *No description.* |
| <code><a href="#@cdktn/provider-cloudflare.emailSecurityAllowPolicy.EmailSecurityAllowPolicy.property.accountId">AccountId</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktn/provider-cloudflare.emailSecurityAllowPolicy.EmailSecurityAllowPolicy.property.comments">Comments</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktn/provider-cloudflare.emailSecurityAllowPolicy.EmailSecurityAllowPolicy.property.isAcceptableSender">IsAcceptableSender</a></code> | <code>interface{}</code> | *No description.* |
| <code><a href="#@cdktn/provider-cloudflare.emailSecurityAllowPolicy.EmailSecurityAllowPolicy.property.isExemptRecipient">IsExemptRecipient</a></code> | <code>interface{}</code> | *No description.* |
| <code><a href="#@cdktn/provider-cloudflare.emailSecurityAllowPolicy.EmailSecurityAllowPolicy.property.isRecipient">IsRecipient</a></code> | <code>interface{}</code> | *No description.* |
| <code><a href="#@cdktn/provider-cloudflare.emailSecurityAllowPolicy.EmailSecurityAllowPolicy.property.isRegex">IsRegex</a></code> | <code>interface{}</code> | *No description.* |
| <code><a href="#@cdktn/provider-cloudflare.emailSecurityAllowPolicy.EmailSecurityAllowPolicy.property.isSender">IsSender</a></code> | <code>interface{}</code> | *No description.* |
| <code><a href="#@cdktn/provider-cloudflare.emailSecurityAllowPolicy.EmailSecurityAllowPolicy.property.isSpoof">IsSpoof</a></code> | <code>interface{}</code> | *No description.* |
| <code><a href="#@cdktn/provider-cloudflare.emailSecurityAllowPolicy.EmailSecurityAllowPolicy.property.isTrustedSender">IsTrustedSender</a></code> | <code>interface{}</code> | *No description.* |
| <code><a href="#@cdktn/provider-cloudflare.emailSecurityAllowPolicy.EmailSecurityAllowPolicy.property.pattern">Pattern</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktn/provider-cloudflare.emailSecurityAllowPolicy.EmailSecurityAllowPolicy.property.patternType">PatternType</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktn/provider-cloudflare.emailSecurityAllowPolicy.EmailSecurityAllowPolicy.property.verifySender">VerifySender</a></code> | <code>interface{}</code> | *No description.* |

---

##### `Node`<sup>Required</sup> <a name="Node" id="@cdktn/provider-cloudflare.emailSecurityAllowPolicy.EmailSecurityAllowPolicy.property.node"></a>

```go
func Node() Node
```

- *Type:* github.com/aws/constructs-go/constructs/v10.Node

The tree node.

---

##### `CdktfStack`<sup>Required</sup> <a name="CdktfStack" id="@cdktn/provider-cloudflare.emailSecurityAllowPolicy.EmailSecurityAllowPolicy.property.cdktfStack"></a>

```go
func CdktfStack() TerraformStack
```

- *Type:* github.com/open-constructs/cdk-terrain-go/cdktn.TerraformStack

---

##### `Fqn`<sup>Required</sup> <a name="Fqn" id="@cdktn/provider-cloudflare.emailSecurityAllowPolicy.EmailSecurityAllowPolicy.property.fqn"></a>

```go
func Fqn() *string
```

- *Type:* *string

---

##### `FriendlyUniqueId`<sup>Required</sup> <a name="FriendlyUniqueId" id="@cdktn/provider-cloudflare.emailSecurityAllowPolicy.EmailSecurityAllowPolicy.property.friendlyUniqueId"></a>

```go
func FriendlyUniqueId() *string
```

- *Type:* *string

---

##### `TerraformMetaArguments`<sup>Required</sup> <a name="TerraformMetaArguments" id="@cdktn/provider-cloudflare.emailSecurityAllowPolicy.EmailSecurityAllowPolicy.property.terraformMetaArguments"></a>

```go
func TerraformMetaArguments() *map[string]interface{}
```

- *Type:* *map[string]interface{}

---

##### `TerraformResourceType`<sup>Required</sup> <a name="TerraformResourceType" id="@cdktn/provider-cloudflare.emailSecurityAllowPolicy.EmailSecurityAllowPolicy.property.terraformResourceType"></a>

```go
func TerraformResourceType() *string
```

- *Type:* *string

---

##### `TerraformGeneratorMetadata`<sup>Optional</sup> <a name="TerraformGeneratorMetadata" id="@cdktn/provider-cloudflare.emailSecurityAllowPolicy.EmailSecurityAllowPolicy.property.terraformGeneratorMetadata"></a>

```go
func TerraformGeneratorMetadata() TerraformProviderGeneratorMetadata
```

- *Type:* github.com/open-constructs/cdk-terrain-go/cdktn.TerraformProviderGeneratorMetadata

---

##### `Connection`<sup>Optional</sup> <a name="Connection" id="@cdktn/provider-cloudflare.emailSecurityAllowPolicy.EmailSecurityAllowPolicy.property.connection"></a>

```go
func Connection() interface{}
```

- *Type:* interface{}

---

##### `Count`<sup>Optional</sup> <a name="Count" id="@cdktn/provider-cloudflare.emailSecurityAllowPolicy.EmailSecurityAllowPolicy.property.count"></a>

```go
func Count() interface{}
```

- *Type:* interface{}

---

##### `DependsOn`<sup>Optional</sup> <a name="DependsOn" id="@cdktn/provider-cloudflare.emailSecurityAllowPolicy.EmailSecurityAllowPolicy.property.dependsOn"></a>

```go
func DependsOn() *[]*string
```

- *Type:* *[]*string

---

##### `ForEach`<sup>Optional</sup> <a name="ForEach" id="@cdktn/provider-cloudflare.emailSecurityAllowPolicy.EmailSecurityAllowPolicy.property.forEach"></a>

```go
func ForEach() ITerraformIterator
```

- *Type:* github.com/open-constructs/cdk-terrain-go/cdktn.ITerraformIterator

---

##### `Lifecycle`<sup>Optional</sup> <a name="Lifecycle" id="@cdktn/provider-cloudflare.emailSecurityAllowPolicy.EmailSecurityAllowPolicy.property.lifecycle"></a>

```go
func Lifecycle() TerraformResourceLifecycle
```

- *Type:* github.com/open-constructs/cdk-terrain-go/cdktn.TerraformResourceLifecycle

---

##### `Provider`<sup>Optional</sup> <a name="Provider" id="@cdktn/provider-cloudflare.emailSecurityAllowPolicy.EmailSecurityAllowPolicy.property.provider"></a>

```go
func Provider() TerraformProvider
```

- *Type:* github.com/open-constructs/cdk-terrain-go/cdktn.TerraformProvider

---

##### `Provisioners`<sup>Optional</sup> <a name="Provisioners" id="@cdktn/provider-cloudflare.emailSecurityAllowPolicy.EmailSecurityAllowPolicy.property.provisioners"></a>

```go
func Provisioners() *[]interface{}
```

- *Type:* *[]interface{}

---

##### `CreatedAt`<sup>Required</sup> <a name="CreatedAt" id="@cdktn/provider-cloudflare.emailSecurityAllowPolicy.EmailSecurityAllowPolicy.property.createdAt"></a>

```go
func CreatedAt() *string
```

- *Type:* *string

---

##### `Id`<sup>Required</sup> <a name="Id" id="@cdktn/provider-cloudflare.emailSecurityAllowPolicy.EmailSecurityAllowPolicy.property.id"></a>

```go
func Id() *string
```

- *Type:* *string

---

##### `LastModified`<sup>Required</sup> <a name="LastModified" id="@cdktn/provider-cloudflare.emailSecurityAllowPolicy.EmailSecurityAllowPolicy.property.lastModified"></a>

```go
func LastModified() *string
```

- *Type:* *string

---

##### `ModifiedAt`<sup>Required</sup> <a name="ModifiedAt" id="@cdktn/provider-cloudflare.emailSecurityAllowPolicy.EmailSecurityAllowPolicy.property.modifiedAt"></a>

```go
func ModifiedAt() *string
```

- *Type:* *string

---

##### `AccountIdInput`<sup>Optional</sup> <a name="AccountIdInput" id="@cdktn/provider-cloudflare.emailSecurityAllowPolicy.EmailSecurityAllowPolicy.property.accountIdInput"></a>

```go
func AccountIdInput() *string
```

- *Type:* *string

---

##### `CommentsInput`<sup>Optional</sup> <a name="CommentsInput" id="@cdktn/provider-cloudflare.emailSecurityAllowPolicy.EmailSecurityAllowPolicy.property.commentsInput"></a>

```go
func CommentsInput() *string
```

- *Type:* *string

---

##### `IsAcceptableSenderInput`<sup>Optional</sup> <a name="IsAcceptableSenderInput" id="@cdktn/provider-cloudflare.emailSecurityAllowPolicy.EmailSecurityAllowPolicy.property.isAcceptableSenderInput"></a>

```go
func IsAcceptableSenderInput() interface{}
```

- *Type:* interface{}

---

##### `IsExemptRecipientInput`<sup>Optional</sup> <a name="IsExemptRecipientInput" id="@cdktn/provider-cloudflare.emailSecurityAllowPolicy.EmailSecurityAllowPolicy.property.isExemptRecipientInput"></a>

```go
func IsExemptRecipientInput() interface{}
```

- *Type:* interface{}

---

##### `IsRecipientInput`<sup>Optional</sup> <a name="IsRecipientInput" id="@cdktn/provider-cloudflare.emailSecurityAllowPolicy.EmailSecurityAllowPolicy.property.isRecipientInput"></a>

```go
func IsRecipientInput() interface{}
```

- *Type:* interface{}

---

##### `IsRegexInput`<sup>Optional</sup> <a name="IsRegexInput" id="@cdktn/provider-cloudflare.emailSecurityAllowPolicy.EmailSecurityAllowPolicy.property.isRegexInput"></a>

```go
func IsRegexInput() interface{}
```

- *Type:* interface{}

---

##### `IsSenderInput`<sup>Optional</sup> <a name="IsSenderInput" id="@cdktn/provider-cloudflare.emailSecurityAllowPolicy.EmailSecurityAllowPolicy.property.isSenderInput"></a>

```go
func IsSenderInput() interface{}
```

- *Type:* interface{}

---

##### `IsSpoofInput`<sup>Optional</sup> <a name="IsSpoofInput" id="@cdktn/provider-cloudflare.emailSecurityAllowPolicy.EmailSecurityAllowPolicy.property.isSpoofInput"></a>

```go
func IsSpoofInput() interface{}
```

- *Type:* interface{}

---

##### `IsTrustedSenderInput`<sup>Optional</sup> <a name="IsTrustedSenderInput" id="@cdktn/provider-cloudflare.emailSecurityAllowPolicy.EmailSecurityAllowPolicy.property.isTrustedSenderInput"></a>

```go
func IsTrustedSenderInput() interface{}
```

- *Type:* interface{}

---

##### `PatternInput`<sup>Optional</sup> <a name="PatternInput" id="@cdktn/provider-cloudflare.emailSecurityAllowPolicy.EmailSecurityAllowPolicy.property.patternInput"></a>

```go
func PatternInput() *string
```

- *Type:* *string

---

##### `PatternTypeInput`<sup>Optional</sup> <a name="PatternTypeInput" id="@cdktn/provider-cloudflare.emailSecurityAllowPolicy.EmailSecurityAllowPolicy.property.patternTypeInput"></a>

```go
func PatternTypeInput() *string
```

- *Type:* *string

---

##### `VerifySenderInput`<sup>Optional</sup> <a name="VerifySenderInput" id="@cdktn/provider-cloudflare.emailSecurityAllowPolicy.EmailSecurityAllowPolicy.property.verifySenderInput"></a>

```go
func VerifySenderInput() interface{}
```

- *Type:* interface{}

---

##### `AccountId`<sup>Required</sup> <a name="AccountId" id="@cdktn/provider-cloudflare.emailSecurityAllowPolicy.EmailSecurityAllowPolicy.property.accountId"></a>

```go
func AccountId() *string
```

- *Type:* *string

---

##### `Comments`<sup>Required</sup> <a name="Comments" id="@cdktn/provider-cloudflare.emailSecurityAllowPolicy.EmailSecurityAllowPolicy.property.comments"></a>

```go
func Comments() *string
```

- *Type:* *string

---

##### `IsAcceptableSender`<sup>Required</sup> <a name="IsAcceptableSender" id="@cdktn/provider-cloudflare.emailSecurityAllowPolicy.EmailSecurityAllowPolicy.property.isAcceptableSender"></a>

```go
func IsAcceptableSender() interface{}
```

- *Type:* interface{}

---

##### `IsExemptRecipient`<sup>Required</sup> <a name="IsExemptRecipient" id="@cdktn/provider-cloudflare.emailSecurityAllowPolicy.EmailSecurityAllowPolicy.property.isExemptRecipient"></a>

```go
func IsExemptRecipient() interface{}
```

- *Type:* interface{}

---

##### `IsRecipient`<sup>Required</sup> <a name="IsRecipient" id="@cdktn/provider-cloudflare.emailSecurityAllowPolicy.EmailSecurityAllowPolicy.property.isRecipient"></a>

```go
func IsRecipient() interface{}
```

- *Type:* interface{}

---

##### `IsRegex`<sup>Required</sup> <a name="IsRegex" id="@cdktn/provider-cloudflare.emailSecurityAllowPolicy.EmailSecurityAllowPolicy.property.isRegex"></a>

```go
func IsRegex() interface{}
```

- *Type:* interface{}

---

##### `IsSender`<sup>Required</sup> <a name="IsSender" id="@cdktn/provider-cloudflare.emailSecurityAllowPolicy.EmailSecurityAllowPolicy.property.isSender"></a>

```go
func IsSender() interface{}
```

- *Type:* interface{}

---

##### `IsSpoof`<sup>Required</sup> <a name="IsSpoof" id="@cdktn/provider-cloudflare.emailSecurityAllowPolicy.EmailSecurityAllowPolicy.property.isSpoof"></a>

```go
func IsSpoof() interface{}
```

- *Type:* interface{}

---

##### `IsTrustedSender`<sup>Required</sup> <a name="IsTrustedSender" id="@cdktn/provider-cloudflare.emailSecurityAllowPolicy.EmailSecurityAllowPolicy.property.isTrustedSender"></a>

```go
func IsTrustedSender() interface{}
```

- *Type:* interface{}

---

##### `Pattern`<sup>Required</sup> <a name="Pattern" id="@cdktn/provider-cloudflare.emailSecurityAllowPolicy.EmailSecurityAllowPolicy.property.pattern"></a>

```go
func Pattern() *string
```

- *Type:* *string

---

##### `PatternType`<sup>Required</sup> <a name="PatternType" id="@cdktn/provider-cloudflare.emailSecurityAllowPolicy.EmailSecurityAllowPolicy.property.patternType"></a>

```go
func PatternType() *string
```

- *Type:* *string

---

##### `VerifySender`<sup>Required</sup> <a name="VerifySender" id="@cdktn/provider-cloudflare.emailSecurityAllowPolicy.EmailSecurityAllowPolicy.property.verifySender"></a>

```go
func VerifySender() interface{}
```

- *Type:* interface{}

---

#### Constants <a name="Constants" id="Constants"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-cloudflare.emailSecurityAllowPolicy.EmailSecurityAllowPolicy.property.tfResourceType">TfResourceType</a></code> | <code>*string</code> | *No description.* |

---

##### `TfResourceType`<sup>Required</sup> <a name="TfResourceType" id="@cdktn/provider-cloudflare.emailSecurityAllowPolicy.EmailSecurityAllowPolicy.property.tfResourceType"></a>

```go
func TfResourceType() *string
```

- *Type:* *string

---

## Structs <a name="Structs" id="Structs"></a>

### EmailSecurityAllowPolicyConfig <a name="EmailSecurityAllowPolicyConfig" id="@cdktn/provider-cloudflare.emailSecurityAllowPolicy.EmailSecurityAllowPolicyConfig"></a>

#### Initializer <a name="Initializer" id="@cdktn/provider-cloudflare.emailSecurityAllowPolicy.EmailSecurityAllowPolicyConfig.Initializer"></a>

```go
import "github.com/cdktn-io/cdktn-provider-cloudflare-go/cloudflare/v16/emailsecurityallowpolicy"

&emailsecurityallowpolicy.EmailSecurityAllowPolicyConfig {
	Connection: interface{},
	Count: interface{},
	DependsOn: *[]github.com/open-constructs/cdk-terrain-go/cdktn.ITerraformDependable,
	ForEach: github.com/open-constructs/cdk-terrain-go/cdktn.ITerraformIterator,
	Lifecycle: github.com/open-constructs/cdk-terrain-go/cdktn.TerraformResourceLifecycle,
	Provider: github.com/open-constructs/cdk-terrain-go/cdktn.TerraformProvider,
	Provisioners: *[]interface{},
	AccountId: *string,
	IsAcceptableSender: interface{},
	IsExemptRecipient: interface{},
	IsRegex: interface{},
	IsTrustedSender: interface{},
	Pattern: *string,
	PatternType: *string,
	VerifySender: interface{},
	Comments: *string,
	IsRecipient: interface{},
	IsSender: interface{},
	IsSpoof: interface{},
}
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-cloudflare.emailSecurityAllowPolicy.EmailSecurityAllowPolicyConfig.property.connection">Connection</a></code> | <code>interface{}</code> | *No description.* |
| <code><a href="#@cdktn/provider-cloudflare.emailSecurityAllowPolicy.EmailSecurityAllowPolicyConfig.property.count">Count</a></code> | <code>interface{}</code> | *No description.* |
| <code><a href="#@cdktn/provider-cloudflare.emailSecurityAllowPolicy.EmailSecurityAllowPolicyConfig.property.dependsOn">DependsOn</a></code> | <code>*[]github.com/open-constructs/cdk-terrain-go/cdktn.ITerraformDependable</code> | *No description.* |
| <code><a href="#@cdktn/provider-cloudflare.emailSecurityAllowPolicy.EmailSecurityAllowPolicyConfig.property.forEach">ForEach</a></code> | <code>github.com/open-constructs/cdk-terrain-go/cdktn.ITerraformIterator</code> | *No description.* |
| <code><a href="#@cdktn/provider-cloudflare.emailSecurityAllowPolicy.EmailSecurityAllowPolicyConfig.property.lifecycle">Lifecycle</a></code> | <code>github.com/open-constructs/cdk-terrain-go/cdktn.TerraformResourceLifecycle</code> | *No description.* |
| <code><a href="#@cdktn/provider-cloudflare.emailSecurityAllowPolicy.EmailSecurityAllowPolicyConfig.property.provider">Provider</a></code> | <code>github.com/open-constructs/cdk-terrain-go/cdktn.TerraformProvider</code> | *No description.* |
| <code><a href="#@cdktn/provider-cloudflare.emailSecurityAllowPolicy.EmailSecurityAllowPolicyConfig.property.provisioners">Provisioners</a></code> | <code>*[]interface{}</code> | *No description.* |
| <code><a href="#@cdktn/provider-cloudflare.emailSecurityAllowPolicy.EmailSecurityAllowPolicyConfig.property.accountId">AccountId</a></code> | <code>*string</code> | Identifier. |
| <code><a href="#@cdktn/provider-cloudflare.emailSecurityAllowPolicy.EmailSecurityAllowPolicyConfig.property.isAcceptableSender">IsAcceptableSender</a></code> | <code>interface{}</code> | Exempts messages from this sender from Spam, Spoof and Bulk dispositions only; Malicious and Suspicious dispositions still apply. |
| <code><a href="#@cdktn/provider-cloudflare.emailSecurityAllowPolicy.EmailSecurityAllowPolicyConfig.property.isExemptRecipient">IsExemptRecipient</a></code> | <code>interface{}</code> | Bypasses all detections for messages to this recipient. |
| <code><a href="#@cdktn/provider-cloudflare.emailSecurityAllowPolicy.EmailSecurityAllowPolicyConfig.property.isRegex">IsRegex</a></code> | <code>interface{}</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/cloudflare/cloudflare/5.25.0/docs/resources/email_security_allow_policy#is_regex EmailSecurityAllowPolicy#is_regex}. |
| <code><a href="#@cdktn/provider-cloudflare.emailSecurityAllowPolicy.EmailSecurityAllowPolicyConfig.property.isTrustedSender">IsTrustedSender</a></code> | <code>interface{}</code> | Bypasses all detections and link following for messages from this sender. |
| <code><a href="#@cdktn/provider-cloudflare.emailSecurityAllowPolicy.EmailSecurityAllowPolicyConfig.property.pattern">Pattern</a></code> | <code>*string</code> | The pattern value to match. |
| <code><a href="#@cdktn/provider-cloudflare.emailSecurityAllowPolicy.EmailSecurityAllowPolicyConfig.property.patternType">PatternType</a></code> | <code>*string</code> | Type of pattern matching. |
| <code><a href="#@cdktn/provider-cloudflare.emailSecurityAllowPolicy.EmailSecurityAllowPolicyConfig.property.verifySender">VerifySender</a></code> | <code>interface{}</code> | Enforce DMARC, SPF or DKIM authentication. When on, Email Security only honors policies that pass authentication. |
| <code><a href="#@cdktn/provider-cloudflare.emailSecurityAllowPolicy.EmailSecurityAllowPolicyConfig.property.comments">Comments</a></code> | <code>*string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/cloudflare/cloudflare/5.25.0/docs/resources/email_security_allow_policy#comments EmailSecurityAllowPolicy#comments}. |
| <code><a href="#@cdktn/provider-cloudflare.emailSecurityAllowPolicy.EmailSecurityAllowPolicyConfig.property.isRecipient">IsRecipient</a></code> | <code>interface{}</code> | Deprecated as of July 1, 2025. Use `is_exempt_recipient` instead. End of life: July 1, 2026. |
| <code><a href="#@cdktn/provider-cloudflare.emailSecurityAllowPolicy.EmailSecurityAllowPolicyConfig.property.isSender">IsSender</a></code> | <code>interface{}</code> | Deprecated as of July 1, 2025. Use `is_trusted_sender` instead. End of life: July 1, 2026. |
| <code><a href="#@cdktn/provider-cloudflare.emailSecurityAllowPolicy.EmailSecurityAllowPolicyConfig.property.isSpoof">IsSpoof</a></code> | <code>interface{}</code> | Deprecated as of July 1, 2025. Use `is_acceptable_sender` instead. End of life: July 1, 2026. |

---

##### `Connection`<sup>Optional</sup> <a name="Connection" id="@cdktn/provider-cloudflare.emailSecurityAllowPolicy.EmailSecurityAllowPolicyConfig.property.connection"></a>

```go
Connection interface{}
```

- *Type:* interface{}

---

##### `Count`<sup>Optional</sup> <a name="Count" id="@cdktn/provider-cloudflare.emailSecurityAllowPolicy.EmailSecurityAllowPolicyConfig.property.count"></a>

```go
Count interface{}
```

- *Type:* interface{}

---

##### `DependsOn`<sup>Optional</sup> <a name="DependsOn" id="@cdktn/provider-cloudflare.emailSecurityAllowPolicy.EmailSecurityAllowPolicyConfig.property.dependsOn"></a>

```go
DependsOn *[]ITerraformDependable
```

- *Type:* *[]github.com/open-constructs/cdk-terrain-go/cdktn.ITerraformDependable

---

##### `ForEach`<sup>Optional</sup> <a name="ForEach" id="@cdktn/provider-cloudflare.emailSecurityAllowPolicy.EmailSecurityAllowPolicyConfig.property.forEach"></a>

```go
ForEach ITerraformIterator
```

- *Type:* github.com/open-constructs/cdk-terrain-go/cdktn.ITerraformIterator

---

##### `Lifecycle`<sup>Optional</sup> <a name="Lifecycle" id="@cdktn/provider-cloudflare.emailSecurityAllowPolicy.EmailSecurityAllowPolicyConfig.property.lifecycle"></a>

```go
Lifecycle TerraformResourceLifecycle
```

- *Type:* github.com/open-constructs/cdk-terrain-go/cdktn.TerraformResourceLifecycle

---

##### `Provider`<sup>Optional</sup> <a name="Provider" id="@cdktn/provider-cloudflare.emailSecurityAllowPolicy.EmailSecurityAllowPolicyConfig.property.provider"></a>

```go
Provider TerraformProvider
```

- *Type:* github.com/open-constructs/cdk-terrain-go/cdktn.TerraformProvider

---

##### `Provisioners`<sup>Optional</sup> <a name="Provisioners" id="@cdktn/provider-cloudflare.emailSecurityAllowPolicy.EmailSecurityAllowPolicyConfig.property.provisioners"></a>

```go
Provisioners *[]interface{}
```

- *Type:* *[]interface{}

---

##### `AccountId`<sup>Required</sup> <a name="AccountId" id="@cdktn/provider-cloudflare.emailSecurityAllowPolicy.EmailSecurityAllowPolicyConfig.property.accountId"></a>

```go
AccountId *string
```

- *Type:* *string

Identifier.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/cloudflare/cloudflare/5.25.0/docs/resources/email_security_allow_policy#account_id EmailSecurityAllowPolicy#account_id}

---

##### `IsAcceptableSender`<sup>Required</sup> <a name="IsAcceptableSender" id="@cdktn/provider-cloudflare.emailSecurityAllowPolicy.EmailSecurityAllowPolicyConfig.property.isAcceptableSender"></a>

```go
IsAcceptableSender interface{}
```

- *Type:* interface{}

Exempts messages from this sender from Spam, Spoof and Bulk dispositions only; Malicious and Suspicious dispositions still apply.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/cloudflare/cloudflare/5.25.0/docs/resources/email_security_allow_policy#is_acceptable_sender EmailSecurityAllowPolicy#is_acceptable_sender}

---

##### `IsExemptRecipient`<sup>Required</sup> <a name="IsExemptRecipient" id="@cdktn/provider-cloudflare.emailSecurityAllowPolicy.EmailSecurityAllowPolicyConfig.property.isExemptRecipient"></a>

```go
IsExemptRecipient interface{}
```

- *Type:* interface{}

Bypasses all detections for messages to this recipient.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/cloudflare/cloudflare/5.25.0/docs/resources/email_security_allow_policy#is_exempt_recipient EmailSecurityAllowPolicy#is_exempt_recipient}

---

##### `IsRegex`<sup>Required</sup> <a name="IsRegex" id="@cdktn/provider-cloudflare.emailSecurityAllowPolicy.EmailSecurityAllowPolicyConfig.property.isRegex"></a>

```go
IsRegex interface{}
```

- *Type:* interface{}

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/cloudflare/cloudflare/5.25.0/docs/resources/email_security_allow_policy#is_regex EmailSecurityAllowPolicy#is_regex}.

---

##### `IsTrustedSender`<sup>Required</sup> <a name="IsTrustedSender" id="@cdktn/provider-cloudflare.emailSecurityAllowPolicy.EmailSecurityAllowPolicyConfig.property.isTrustedSender"></a>

```go
IsTrustedSender interface{}
```

- *Type:* interface{}

Bypasses all detections and link following for messages from this sender.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/cloudflare/cloudflare/5.25.0/docs/resources/email_security_allow_policy#is_trusted_sender EmailSecurityAllowPolicy#is_trusted_sender}

---

##### `Pattern`<sup>Required</sup> <a name="Pattern" id="@cdktn/provider-cloudflare.emailSecurityAllowPolicy.EmailSecurityAllowPolicyConfig.property.pattern"></a>

```go
Pattern *string
```

- *Type:* *string

The pattern value to match.

The format depends on `pattern_type`: a valid email address for EMAIL (e.g. `user@example.com`), a valid domain name for DOMAIN (e.g. `example.com`), or a plain IPv4 or IPv6 address or CIDR block for IP (e.g. `1.2.3.4`, `1.2.3.0/24`, `2606:4700:4700::1111`, or `2606:4700:4700::/48`); the API rejects private or unique-local, loopback, link-local, unspecified, and IPv4 broadcast addresses, including their IPv4-mapped IPv6 equivalents.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/cloudflare/cloudflare/5.25.0/docs/resources/email_security_allow_policy#pattern EmailSecurityAllowPolicy#pattern}

---

##### `PatternType`<sup>Required</sup> <a name="PatternType" id="@cdktn/provider-cloudflare.emailSecurityAllowPolicy.EmailSecurityAllowPolicyConfig.property.patternType"></a>

```go
PatternType *string
```

- *Type:* *string

Type of pattern matching.

* EMAIL: matches a full email address (e.g. `user@example.com`)
* DOMAIN: matches a domain name (e.g. `example.com`)
* IP: matches a plain IPv4 or IPv6 address (e.g. `1.2.3.4` or `2606:4700:4700::1111`) or CIDR block (e.g. `1.2.3.0/24` or `2606:4700:4700::/48`). The API rejects private or unique-local, loopback, link-local, unspecified, and IPv4 broadcast addresses, including their IPv4-mapped IPv6 equivalents.
* UNKNOWN: deprecated; you cannot use this when creating or updating policies, but it may appear on existing entries.
  Available values: "EMAIL", "DOMAIN", "IP", "UNKNOWN".

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/cloudflare/cloudflare/5.25.0/docs/resources/email_security_allow_policy#pattern_type EmailSecurityAllowPolicy#pattern_type}

---

##### `VerifySender`<sup>Required</sup> <a name="VerifySender" id="@cdktn/provider-cloudflare.emailSecurityAllowPolicy.EmailSecurityAllowPolicyConfig.property.verifySender"></a>

```go
VerifySender interface{}
```

- *Type:* interface{}

Enforce DMARC, SPF or DKIM authentication. When on, Email Security only honors policies that pass authentication.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/cloudflare/cloudflare/5.25.0/docs/resources/email_security_allow_policy#verify_sender EmailSecurityAllowPolicy#verify_sender}

---

##### `Comments`<sup>Optional</sup> <a name="Comments" id="@cdktn/provider-cloudflare.emailSecurityAllowPolicy.EmailSecurityAllowPolicyConfig.property.comments"></a>

```go
Comments *string
```

- *Type:* *string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/cloudflare/cloudflare/5.25.0/docs/resources/email_security_allow_policy#comments EmailSecurityAllowPolicy#comments}.

---

##### `IsRecipient`<sup>Optional</sup> <a name="IsRecipient" id="@cdktn/provider-cloudflare.emailSecurityAllowPolicy.EmailSecurityAllowPolicyConfig.property.isRecipient"></a>

```go
IsRecipient interface{}
```

- *Type:* interface{}

Deprecated as of July 1, 2025. Use `is_exempt_recipient` instead. End of life: July 1, 2026.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/cloudflare/cloudflare/5.25.0/docs/resources/email_security_allow_policy#is_recipient EmailSecurityAllowPolicy#is_recipient}

---

##### `IsSender`<sup>Optional</sup> <a name="IsSender" id="@cdktn/provider-cloudflare.emailSecurityAllowPolicy.EmailSecurityAllowPolicyConfig.property.isSender"></a>

```go
IsSender interface{}
```

- *Type:* interface{}

Deprecated as of July 1, 2025. Use `is_trusted_sender` instead. End of life: July 1, 2026.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/cloudflare/cloudflare/5.25.0/docs/resources/email_security_allow_policy#is_sender EmailSecurityAllowPolicy#is_sender}

---

##### `IsSpoof`<sup>Optional</sup> <a name="IsSpoof" id="@cdktn/provider-cloudflare.emailSecurityAllowPolicy.EmailSecurityAllowPolicyConfig.property.isSpoof"></a>

```go
IsSpoof interface{}
```

- *Type:* interface{}

Deprecated as of July 1, 2025. Use `is_acceptable_sender` instead. End of life: July 1, 2026.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/cloudflare/cloudflare/5.25.0/docs/resources/email_security_allow_policy#is_spoof EmailSecurityAllowPolicy#is_spoof}

---



