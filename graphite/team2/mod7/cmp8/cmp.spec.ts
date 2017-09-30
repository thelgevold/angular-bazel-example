
import { Cmp6278Component } from './cmp';
describe('Cmp6278Component', () => {
  it('should add', () => {
    expect(new Cmp6278Component().add6278(1)).toBe(6279);
  });
});