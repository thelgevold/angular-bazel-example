
import { Cmp9329Component } from './cmp';
describe('Cmp9329Component', () => {
  it('should add', () => {
    expect(new Cmp9329Component().add9329(1)).toBe(9330);
  });
});