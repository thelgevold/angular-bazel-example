
import { Cmp7057Component } from './cmp';
describe('Cmp7057Component', () => {
  it('should add', () => {
    expect(new Cmp7057Component().add7057(1)).toBe(7058);
  });
});