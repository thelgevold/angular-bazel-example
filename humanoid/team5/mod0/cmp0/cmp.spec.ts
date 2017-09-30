
import { Cmp7500Component } from './cmp';
describe('Cmp7500Component', () => {
  it('should add', () => {
    expect(new Cmp7500Component().add7500(1)).toBe(7501);
  });
});