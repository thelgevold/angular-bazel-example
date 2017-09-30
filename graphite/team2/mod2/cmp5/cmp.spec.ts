
import { Cmp6225Component } from './cmp';
describe('Cmp6225Component', () => {
  it('should add', () => {
    expect(new Cmp6225Component().add6225(1)).toBe(6226);
  });
});