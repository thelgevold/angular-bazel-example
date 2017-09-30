
import { Cmp6326Component } from './cmp';
describe('Cmp6326Component', () => {
  it('should add', () => {
    expect(new Cmp6326Component().add6326(1)).toBe(6327);
  });
});