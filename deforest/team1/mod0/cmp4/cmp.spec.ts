
import { Cmp3104Component } from './cmp';
describe('Cmp3104Component', () => {
  it('should add', () => {
    expect(new Cmp3104Component().add3104(1)).toBe(3105);
  });
});