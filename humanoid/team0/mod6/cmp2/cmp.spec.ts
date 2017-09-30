
import { Cmp7062Component } from './cmp';
describe('Cmp7062Component', () => {
  it('should add', () => {
    expect(new Cmp7062Component().add7062(1)).toBe(7063);
  });
});