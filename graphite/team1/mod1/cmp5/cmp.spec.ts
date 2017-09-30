
import { Cmp6115Component } from './cmp';
describe('Cmp6115Component', () => {
  it('should add', () => {
    expect(new Cmp6115Component().add6115(1)).toBe(6116);
  });
});