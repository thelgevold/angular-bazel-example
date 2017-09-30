
import { Cmp6264Component } from './cmp';
describe('Cmp6264Component', () => {
  it('should add', () => {
    expect(new Cmp6264Component().add6264(1)).toBe(6265);
  });
});