
import { Cmp6299Component } from './cmp';
describe('Cmp6299Component', () => {
  it('should add', () => {
    expect(new Cmp6299Component().add6299(1)).toBe(6300);
  });
});