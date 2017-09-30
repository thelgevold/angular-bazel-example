
import { Cmp9900Component } from './cmp';
describe('Cmp9900Component', () => {
  it('should add', () => {
    expect(new Cmp9900Component().add9900(1)).toBe(9901);
  });
});