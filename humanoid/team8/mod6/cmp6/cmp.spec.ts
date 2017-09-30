
import { Cmp7866Component } from './cmp';
describe('Cmp7866Component', () => {
  it('should add', () => {
    expect(new Cmp7866Component().add7866(1)).toBe(7867);
  });
});