
import { Cmp7502Component } from './cmp';
describe('Cmp7502Component', () => {
  it('should add', () => {
    expect(new Cmp7502Component().add7502(1)).toBe(7503);
  });
});