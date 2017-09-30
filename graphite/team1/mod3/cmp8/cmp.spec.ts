
import { Cmp6138Component } from './cmp';
describe('Cmp6138Component', () => {
  it('should add', () => {
    expect(new Cmp6138Component().add6138(1)).toBe(6139);
  });
});