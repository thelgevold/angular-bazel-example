
import { Cmp7579Component } from './cmp';
describe('Cmp7579Component', () => {
  it('should add', () => {
    expect(new Cmp7579Component().add7579(1)).toBe(7580);
  });
});