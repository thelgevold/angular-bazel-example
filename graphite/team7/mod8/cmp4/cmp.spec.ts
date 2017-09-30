
import { Cmp6784Component } from './cmp';
describe('Cmp6784Component', () => {
  it('should add', () => {
    expect(new Cmp6784Component().add6784(1)).toBe(6785);
  });
});