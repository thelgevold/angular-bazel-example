
import { Cmp4709Component } from './cmp';
describe('Cmp4709Component', () => {
  it('should add', () => {
    expect(new Cmp4709Component().add4709(1)).toBe(4710);
  });
});