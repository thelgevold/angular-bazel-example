
import { Cmp4280Component } from './cmp';
describe('Cmp4280Component', () => {
  it('should add', () => {
    expect(new Cmp4280Component().add4280(1)).toBe(4281);
  });
});