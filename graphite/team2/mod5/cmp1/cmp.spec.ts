
import { Cmp6251Component } from './cmp';
describe('Cmp6251Component', () => {
  it('should add', () => {
    expect(new Cmp6251Component().add6251(1)).toBe(6252);
  });
});