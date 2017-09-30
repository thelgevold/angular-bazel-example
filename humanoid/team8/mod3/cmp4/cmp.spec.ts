
import { Cmp7834Component } from './cmp';
describe('Cmp7834Component', () => {
  it('should add', () => {
    expect(new Cmp7834Component().add7834(1)).toBe(7835);
  });
});