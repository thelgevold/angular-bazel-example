
import { Cmp4975Component } from './cmp';
describe('Cmp4975Component', () => {
  it('should add', () => {
    expect(new Cmp4975Component().add4975(1)).toBe(4976);
  });
});