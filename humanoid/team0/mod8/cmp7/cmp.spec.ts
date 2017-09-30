
import { Cmp7087Component } from './cmp';
describe('Cmp7087Component', () => {
  it('should add', () => {
    expect(new Cmp7087Component().add7087(1)).toBe(7088);
  });
});