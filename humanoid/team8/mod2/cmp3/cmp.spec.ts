
import { Cmp7823Component } from './cmp';
describe('Cmp7823Component', () => {
  it('should add', () => {
    expect(new Cmp7823Component().add7823(1)).toBe(7824);
  });
});