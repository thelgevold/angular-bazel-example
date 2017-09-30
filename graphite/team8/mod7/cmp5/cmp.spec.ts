
import { Cmp6875Component } from './cmp';
describe('Cmp6875Component', () => {
  it('should add', () => {
    expect(new Cmp6875Component().add6875(1)).toBe(6876);
  });
});