
import { Cmp9038Component } from './cmp';
describe('Cmp9038Component', () => {
  it('should add', () => {
    expect(new Cmp9038Component().add9038(1)).toBe(9039);
  });
});