
import { Cmp6279Component } from './cmp';
describe('Cmp6279Component', () => {
  it('should add', () => {
    expect(new Cmp6279Component().add6279(1)).toBe(6280);
  });
});