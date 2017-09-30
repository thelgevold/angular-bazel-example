
import { Cmp3360Component } from './cmp';
describe('Cmp3360Component', () => {
  it('should add', () => {
    expect(new Cmp3360Component().add3360(1)).toBe(3361);
  });
});