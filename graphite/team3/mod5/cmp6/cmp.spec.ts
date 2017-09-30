
import { Cmp6356Component } from './cmp';
describe('Cmp6356Component', () => {
  it('should add', () => {
    expect(new Cmp6356Component().add6356(1)).toBe(6357);
  });
});