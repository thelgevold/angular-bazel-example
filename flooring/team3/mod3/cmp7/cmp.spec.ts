
import { Cmp5337Component } from './cmp';
describe('Cmp5337Component', () => {
  it('should add', () => {
    expect(new Cmp5337Component().add5337(1)).toBe(5338);
  });
});