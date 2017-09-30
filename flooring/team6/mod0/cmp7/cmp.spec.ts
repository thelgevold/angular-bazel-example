
import { Cmp5607Component } from './cmp';
describe('Cmp5607Component', () => {
  it('should add', () => {
    expect(new Cmp5607Component().add5607(1)).toBe(5608);
  });
});